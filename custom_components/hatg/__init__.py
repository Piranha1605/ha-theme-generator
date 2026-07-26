from __future__ import annotations

import base64
import binascii
import re
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
    WALLPAPER_STATIC_PATH,
)

THEMES_SUBDIR = "themes"
WORK_FILE_PREFIX = "hatg-work-"
_WS_REGISTERED_FLAG = f"{DOMAIN}_ws_registered"

# v0.2.20: Hintergrund-Kachel "Bild" - eigener Unterordner innerhalb von
# config/themes/ (Enrico: "beim speichern einen ordner unter themes anlegen
# mit dem namen Wallpaper. dann kann man vielleicht da auch immer wieder
# zugreifen bei anderen themes"). Bewusst EIN gemeinsamer Ordner fuer alle
# Themes, kein Unterordner pro Theme - Bilder sollen ueber Themes hinweg
# wiederverwendbar sein.
WALLPAPER_SUBDIR = "Wallpaper"
_WALLPAPER_ALLOWED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
_WALLPAPER_SAFE_NAME_RE = re.compile(r"[^A-Za-z0-9._-]+")


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


def _sanitize_wallpaper_filename(filename: str) -> str | None:
    """Saeubert einen vom Nutzer stammenden Dateinamen fuer den Wallpaper-
    Ordner: nur Basisname (kein Pfad), erlaubte Bild-Endung, unerlaubte
    Zeichen durch "_" ersetzt. Gibt None zurueck, wenn keine erlaubte
    Bild-Endung erkannt wird."""
    if not filename:
        return None
    base = Path(filename).name
    suffix = Path(base).suffix.lower()
    if suffix not in _WALLPAPER_ALLOWED_EXT:
        return None
    stem = base[: -len(suffix)] if suffix else base
    stem = _WALLPAPER_SAFE_NAME_RE.sub("_", stem).strip("._") or "wallpaper"
    return f"{stem}{suffix}"


def _unique_wallpaper_path(directory: Path, filename: str) -> Path:
    """Haengt bei Namenskollision '-2', '-3', ... an den Dateinamen an, statt
    ein bestehendes, evtl. von einem anderen Theme genutztes Bild zu
    ueberschreiben."""
    candidate = directory / filename
    if not candidate.exists():
        return candidate
    stem = Path(filename).stem
    suffix = Path(filename).suffix
    counter = 2
    while True:
        candidate = directory / f"{stem}-{counter}{suffix}"
        if not candidate.exists():
            return candidate
        counter += 1


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


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/upload_wallpaper",
        vol.Required("filename"): str,
        vol.Required("data"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_upload_wallpaper(hass: HomeAssistant, connection, msg):
    """Speichert ein vom Nutzer im Hintergrund-Picker ("Bild") hochgeladenes
    Bild nach config/themes/Wallpaper/. 'data' ist Base64 (ohne
    'data:image/...;base64,'-Praefix, das zieht das Frontend vorher ab).
    Ein Bild landet in EINEM gemeinsamen Ordner fuer alle Themes, damit es
    sich in kuenftigen Themes wiederverwenden laesst (Enricos Wunsch)."""
    filename = _sanitize_wallpaper_filename(msg["filename"])
    if filename is None:
        connection.send_error(
            msg["id"], "invalid_name", "Nur Bilddateien (jpg/jpeg/png/webp/gif) werden unterstützt."
        )
        return

    try:
        raw = base64.b64decode(msg["data"], validate=True)
    except (binascii.Error, ValueError) as err:
        connection.send_error(msg["id"], "invalid_data", f"Bilddaten konnten nicht gelesen werden: {err}")
        return

    if not raw:
        connection.send_error(msg["id"], "invalid_data", "Die Bilddatei ist leer.")
        return

    wallpaper_dir = Path(hass.config.path(THEMES_SUBDIR, WALLPAPER_SUBDIR))

    def _write():
        wallpaper_dir.mkdir(parents=True, exist_ok=True)
        target = _unique_wallpaper_path(wallpaper_dir, filename)
        target.write_bytes(raw)
        return target.name

    try:
        final_name = await hass.async_add_executor_job(_write)
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", f"Bild konnte nicht gespeichert werden: {err}")
        return

    connection.send_result(
        msg["id"],
        {
            "uploaded": True,
            "filename": final_name,
            "url": f"{WALLPAPER_STATIC_PATH}/{final_name}",
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/list_wallpapers",
    }
)
@websocket_api.async_response
async def ws_list_wallpapers(hass: HomeAssistant, connection, msg):
    """Listet alle Bilder in config/themes/Wallpaper/ - fuer eine spaetere
    Wiederverwendungs-Galerie ueber mehrere Themes hinweg (noch nicht in der
    ersten Version der Bild-Kachel selbst verdrahtet)."""
    wallpaper_dir = Path(hass.config.path(THEMES_SUBDIR, WALLPAPER_SUBDIR))

    def _list():
        if not wallpaper_dir.exists():
            return []
        items = []
        for entry in sorted(wallpaper_dir.iterdir()):
            if not entry.is_file() or entry.suffix.lower() not in _WALLPAPER_ALLOWED_EXT:
                continue
            try:
                stat = entry.stat()
            except OSError:
                continue
            items.append(
                {
                    "filename": entry.name,
                    "url": f"{WALLPAPER_STATIC_PATH}/{entry.name}",
                    "modified": stat.st_mtime,
                    "size": stat.st_size,
                }
            )
        return items

    items = await hass.async_add_executor_job(_list)
    connection.send_result(msg["id"], {"wallpapers": items})


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
    websocket_api.async_register_command(hass, ws_upload_wallpaper)
    websocket_api.async_register_command(hass, ws_list_wallpapers)
    hass.data[_WS_REGISTERED_FLAG] = True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    www_path = Path(__file__).parent / "www"
    wallpaper_path = Path(hass.config.path(THEMES_SUBDIR, WALLPAPER_SUBDIR))

    def _ensure_wallpaper_dir():
        wallpaper_path.mkdir(parents=True, exist_ok=True)

    await hass.async_add_executor_job(_ensure_wallpaper_dir)

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                STATIC_PATH,
                str(www_path),
                True,
            ),
            StaticPathConfig(
                WALLPAPER_STATIC_PATH,
                str(wallpaper_path),
                True,
            ),
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
