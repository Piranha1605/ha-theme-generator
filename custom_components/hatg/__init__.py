from __future__ import annotations

from pathlib import Path

import voluptuous as vol
import yaml as yaml_lib

from homeassistant.components import frontend, panel_custom, websocket_api
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback

from .const import (
    DOMAIN,
    FRONTEND_MODULE,
    PANEL_ICON,
    PANEL_TAG,
    PANEL_TITLE,
    PANEL_URL,
    STATIC_PATH,
)

THEMES_SUBDIR = "themes"
WORK_FILE_PREFIX = "hatg-work-"
_WS_REGISTERED_FLAG = f"{DOMAIN}_ws_registered"


def _is_safe_theme_name(name: str) -> bool:
    if not name:
        return False
    if "/" in name or "\\" in name or ".." in name:
        return False
    return True


def _is_safe_filename(filename: str) -> bool:
    if not filename or not filename.endswith(".yaml"):
        return False
    if "/" in filename or "\\" in filename or ".." in filename:
        return False
    return True


def _is_work_file(filename: str) -> bool:
    return filename.startswith(WORK_FILE_PREFIX)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/check_theme_exists",
        vol.Required("name"): str,
    }
)
@websocket_api.async_response
async def ws_check_theme_exists(hass: HomeAssistant, connection, msg):
    name = msg["name"]
    if not _is_safe_theme_name(name):
        connection.send_error(msg["id"], "invalid_name", "Ungültiger Theme-Name.")
        return

    themes_dir = Path(hass.config.path(THEMES_SUBDIR))
    target = themes_dir / f"{name}.yaml"
    exists = await hass.async_add_executor_job(target.exists)
    connection.send_result(msg["id"], {"exists": exists})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/save_theme",
        vol.Required("name"): str,
        vol.Required("yaml"): str,
        vol.Optional("overwrite", default=False): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save_theme(hass: HomeAssistant, connection, msg):
    name = msg["name"]
    if not _is_safe_theme_name(name):
        connection.send_error(msg["id"], "invalid_name", "Ungültiger Theme-Name.")
        return

    try:
        yaml_lib.safe_load(msg["yaml"])
    except yaml_lib.YAMLError as err:
        connection.send_error(msg["id"], "invalid_yaml", f"YAML ist ungültig: {err}")
        return

    themes_dir = Path(hass.config.path(THEMES_SUBDIR))

    def _write():
        themes_dir.mkdir(parents=True, exist_ok=True)
        target = themes_dir / f"{name}.yaml"
        if target.exists() and not msg["overwrite"]:
            return None
        target.write_text(msg["yaml"], encoding="utf-8")
        return str(target)

    try:
        path = await hass.async_add_executor_job(_write)
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", f"Datei konnte nicht geschrieben werden: {err}")
        return

    if path is None:
        connection.send_result(msg["id"], {"saved": False, "reason": "exists"})
        return

    try:
        await hass.services.async_call("frontend", "reload_themes", blocking=False)
    except Exception:  # noqa: BLE001 - reload is best-effort, saving already succeeded
        pass

    connection.send_result(msg["id"], {"saved": True, "path": path})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/list_themes",
    }
)
@websocket_api.async_response
async def ws_list_themes(hass: HomeAssistant, connection, msg):
    """Listet alle .yaml-Dateien in config/themes/ auf – echte Themes und
    HATG-Work-Entwürfe (Präfix hatg-work-) zusammen, damit der Import-Dialog
    beides in einer Liste anbieten kann."""
    themes_dir = Path(hass.config.path(THEMES_SUBDIR))

    def _list():
        if not themes_dir.exists():
            return []
        items = []
        for entry in sorted(themes_dir.glob("*.yaml")):
            if not entry.is_file():
                continue
            try:
                stat = entry.stat()
            except OSError:
                continue
            items.append(
                {
                    "filename": entry.name,
                    "name": entry.stem,
                    "isDraft": _is_work_file(entry.name),
                    "modified": stat.st_mtime,
                    "size": stat.st_size,
                }
            )
        return items

    items = await hass.async_add_executor_job(_list)
    connection.send_result(msg["id"], {"themes": items})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/load_theme_file",
        vol.Required("filename"): str,
    }
)
@websocket_api.async_response
async def ws_load_theme_file(hass: HomeAssistant, connection, msg):
    filename = msg["filename"]
    if not _is_safe_filename(filename):
        connection.send_error(msg["id"], "invalid_name", "Ungültiger Dateiname.")
        return

    themes_dir = Path(hass.config.path(THEMES_SUBDIR))
    target = themes_dir / filename

    def _read():
        if not target.exists() or not target.is_file():
            return None
        return target.read_text(encoding="utf-8")

    try:
        content = await hass.async_add_executor_job(_read)
    except OSError as err:
        connection.send_error(msg["id"], "read_failed", f"Datei konnte nicht gelesen werden: {err}")
        return

    if content is None:
        connection.send_error(msg["id"], "not_found", "Datei nicht gefunden.")
        return

    connection.send_result(msg["id"], {"filename": filename, "yaml": content})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/save_work_file",
        vol.Required("name"): str,
        vol.Required("yaml"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save_work_file(hass: HomeAssistant, connection, msg):
    """Schreibt den aktuellen Bearbeitungsstand als Work-Datei direkt nach
    config/themes/ (Präfix hatg-work-<name>.yaml). Kein Überschreiben-Dialog
    wie beim echten 'Datei speichern' – das ist ein laufend aktualisierter
    Arbeitsstand, kein bewusster Speicherpunkt. Löst bewusst frontend.reload_themes
    aus (Wunsch: die 'HA Live'-Ansicht im Frontend soll nach jedem Zwischenstand
    zeitnah die neue Farbgebung zeigen können)."""
    name = msg["name"]
    if not _is_safe_theme_name(name):
        connection.send_error(msg["id"], "invalid_name", "Ungültiger Name.")
        return

    try:
        yaml_lib.safe_load(msg["yaml"])
    except yaml_lib.YAMLError as err:
        connection.send_error(msg["id"], "invalid_yaml", f"YAML ist ungültig: {err}")
        return

    themes_dir = Path(hass.config.path(THEMES_SUBDIR))
    filename = f"{WORK_FILE_PREFIX}{name}.yaml"

    def _write():
        themes_dir.mkdir(parents=True, exist_ok=True)
        target = themes_dir / filename
        target.write_text(msg["yaml"], encoding="utf-8")
        return str(target)

    try:
        path = await hass.async_add_executor_job(_write)
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", f"Datei konnte nicht geschrieben werden: {err}")
        return

    try:
        await hass.services.async_call("frontend", "reload_themes", blocking=False)
    except Exception:  # noqa: BLE001 - reload ist best-effort, Speichern war bereits erfolgreich
        pass

    connection.send_result(msg["id"], {"saved": True, "path": path, "filename": filename})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/delete_work_file",
        vol.Required("filename"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_work_file(hass: HomeAssistant, connection, msg):
    """Löscht ausschließlich HATG-Work-Dateien (Präfix hatg-work-), niemals
    echte, vom Nutzer gespeicherte Theme-Dateien – Sicherheitsnetz gegen
    versehentliches Löschen echter Themes über diesen Weg."""
    filename = msg["filename"]
    if not _is_safe_filename(filename) or not _is_work_file(filename):
        connection.send_error(msg["id"], "invalid_name", "Nur Work-Entwürfe können hier gelöscht werden.")
        return

    themes_dir = Path(hass.config.path(THEMES_SUBDIR))
    target = themes_dir / filename

    def _delete():
        if target.exists():
            target.unlink()
            return True
        return False

    try:
        deleted = await hass.async_add_executor_job(_delete)
    except OSError as err:
        connection.send_error(msg["id"], "delete_failed", f"Datei konnte nicht gelöscht werden: {err}")
        return

    connection.send_result(msg["id"], {"deleted": deleted})


@callback
def _register_websocket_commands(hass: HomeAssistant) -> None:
    if hass.data.get(_WS_REGISTERED_FLAG):
        return
    websocket_api.async_register_command(hass, ws_check_theme_exists)
    websocket_api.async_register_command(hass, ws_save_theme)
    websocket_api.async_register_command(hass, ws_list_themes)
    websocket_api.async_register_command(hass, ws_load_theme_file)
    websocket_api.async_register_command(hass, ws_save_work_file)
    websocket_api.async_register_command(hass, ws_delete_work_file)
    hass.data[_WS_REGISTERED_FLAG] = True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    www_path = Path(__file__).parent / "www"

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                STATIC_PATH,
                str(www_path),
                True,
            )
        ]
    )

    await panel_custom.async_register_panel(
        hass,
        webcomponent_name=PANEL_TAG,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        frontend_url_path=PANEL_URL,
        module_url=FRONTEND_MODULE,
        require_admin=True,
    )

    _register_websocket_commands(hass)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL)
    return True
