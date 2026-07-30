from __future__ import annotations

import base64
import binascii
import hashlib
import json
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

WALLPAPER_SUBDIR = "Wallpaper"
_WALLPAPER_ALLOWED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
_WALLPAPER_SAFE_NAME_RE = re.compile(r"[^A-Za-z0-9._-]+")

CUSTOM_CARDMOD_FILE = "hatg-cardmod-vorlagen.json"
_CUSTOM_CARDMOD_ID_RE = re.compile(r"[A-Za-z0-9_-]{1,64}")


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
    """Bereinigt einen hochgeladenen Dateinamen fuer den Wallpaper-Ordner."""
    if not filename:
        return None
    base = Path(filename).name
    suffix = Path(base).suffix.lower()
    if suffix not in _WALLPAPER_ALLOWED_EXT:
        return None
    stem = base[: -len(suffix)] if suffix else base
    stem = _WALLPAPER_SAFE_NAME_RE.sub("_", stem).strip("._") or "wallpaper"
    return f"{stem}{suffix}"


def _wallpaper_hash(path: Path) -> str:
    """Prüfsumme über den Dateiinhalt, um inhaltsgleiche Bilder zu erkennen."""
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(131072), b""):
            digest.update(block)
    return digest.hexdigest()


def _find_wallpaper_by_hash(directory: Path, digest: str) -> Path | None:
    """Sucht ein bereits vorhandenes Bild mit identischem Inhalt."""
    if not directory.exists():
        return None
    for entry in sorted(directory.iterdir()):
        if not entry.is_file() or entry.suffix.lower() not in _WALLPAPER_ALLOWED_EXT:
            continue
        try:
            if _wallpaper_hash(entry) == digest:
                return entry
        except OSError:
            continue
    return None


def _unique_wallpaper_path(directory: Path, filename: str) -> Path:
    """Haengt bei Namenskollision -2, -3, ... an, statt zu ueberschreiben."""
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
    """Listet alle .yaml-Dateien in config/themes/ auf."""
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
    """Schreibt den aktuellen Bearbeitungsstand als Work-Datei."""
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
    """Loescht ausschliesslich HATG-Work-Dateien, niemals echte Themes."""
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
    """Speichert ein hochgeladenes Hintergrundbild im Wallpaper-Ordner."""
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
        digest = hashlib.sha256(raw).hexdigest()
        vorhanden = _find_wallpaper_by_hash(wallpaper_dir, digest)
        if vorhanden is not None:
            return vorhanden.name, True
        target = _unique_wallpaper_path(wallpaper_dir, filename)
        target.write_bytes(raw)
        return target.name, False

    try:
        final_name, war_schon_da = await hass.async_add_executor_job(_write)
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", f"Bild konnte nicht gespeichert werden: {err}")
        return

    connection.send_result(
        msg["id"],
        {
            "uploaded": True,
            "filename": final_name,
            "url": f"{WALLPAPER_STATIC_PATH}/{final_name}",
            "duplicate": war_schon_da,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/list_wallpapers",
    }
)
@websocket_api.async_response
async def ws_list_wallpapers(hass: HomeAssistant, connection, msg):
    """Listet alle Bilder im Wallpaper-Ordner auf."""
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
            try:
                digest = _wallpaper_hash(entry)
            except OSError:
                digest = ""
            items.append(
                {
                    "filename": entry.name,
                    "url": f"{WALLPAPER_STATIC_PATH}/{entry.name}",
                    "modified": stat.st_mtime,
                    "size": stat.st_size,
                    "hash": digest,
                }
            )
        return items

    items = await hass.async_add_executor_job(_list)
    connection.send_result(msg["id"], {"wallpapers": items})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/list_custom_cardmods",
    }
)
@websocket_api.async_response
async def ws_list_custom_cardmods(hass: HomeAssistant, connection, msg):
    """Liest die selbst angelegten Cardmod-Vorlagen."""
    ziel = Path(hass.config.path(THEMES_SUBDIR, CUSTOM_CARDMOD_FILE))

    def _read():
        if not ziel.is_file():
            return []
        try:
            daten = json.loads(ziel.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            return []
        if not isinstance(daten, list):
            return []
        sauber = []
        for eintrag in daten:
            if not isinstance(eintrag, dict):
                continue
            if not eintrag.get("id") or not isinstance(eintrag.get("css"), str):
                continue
            sauber.append(
                {
                    "id": str(eintrag["id"]),
                    "label": str(eintrag.get("label") or eintrag["id"]),
                    "desc": str(eintrag.get("desc") or ""),
                    "css": eintrag["css"],
                }
            )
        return sauber

    try:
        eintraege = await hass.async_add_executor_job(_read)
    except OSError as err:
        connection.send_error(msg["id"], "read_failed", f"Vorlagen konnten nicht gelesen werden: {err}")
        return

    connection.send_result(msg["id"], {"templates": eintraege})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/save_custom_cardmods",
        vol.Required("templates"): [dict],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save_custom_cardmods(hass: HomeAssistant, connection, msg):
    """Schreibt die selbst angelegten Cardmod-Vorlagen."""
    eintraege = []
    for eintrag in msg["templates"]:
        kennung = str(eintrag.get("id") or "").strip()
        if not kennung or not _CUSTOM_CARDMOD_ID_RE.fullmatch(kennung):
            connection.send_error(msg["id"], "invalid_id", f"Ungültige Vorlagen-Kennung: {kennung!r}")
            return
        css = eintrag.get("css")
        if not isinstance(css, str):
            connection.send_error(msg["id"], "invalid_css", f"Vorlage {kennung} enthält kein CSS.")
            return
        eintraege.append(
            {
                "id": kennung,
                "label": str(eintrag.get("label") or kennung)[:120],
                "desc": str(eintrag.get("desc") or "")[:600],
                "css": css,
            }
        )

    kennungen = [e["id"] for e in eintraege]
    if len(kennungen) != len(set(kennungen)):
        connection.send_error(msg["id"], "duplicate_id", "Zwei Vorlagen haben dieselbe Kennung.")
        return

    themes_dir = Path(hass.config.path(THEMES_SUBDIR))
    ziel = themes_dir / CUSTOM_CARDMOD_FILE

    def _write():
        themes_dir.mkdir(parents=True, exist_ok=True)
        ziel.write_text(json.dumps(eintraege, indent=2, ensure_ascii=False), encoding="utf-8")

    try:
        await hass.async_add_executor_job(_write)
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", f"Vorlagen konnten nicht gespeichert werden: {err}")
        return

    connection.send_result(msg["id"], {"saved": True, "count": len(eintraege)})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "hatg/delete_wallpaper",
        vol.Required("filenames"): [str],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_wallpaper(hass: HomeAssistant, connection, msg):
    """Löscht ein oder mehrere Bilder aus dem Wallpaper-Ordner."""
    namen = []
    for roh in msg["filenames"]:
        sauber = _sanitize_wallpaper_filename(roh)
        if sauber is None or sauber != Path(roh).name:
            connection.send_error(msg["id"], "invalid_name", f"Ungültiger Dateiname: {roh}")
            return
        namen.append(sauber)

    wallpaper_dir = Path(hass.config.path(THEMES_SUBDIR, WALLPAPER_SUBDIR))

    def _delete():
        geloescht = []
        for name in namen:
            ziel = wallpaper_dir / name
            if ziel.is_file():
                ziel.unlink()
                geloescht.append(name)
        return geloescht

    try:
        geloescht = await hass.async_add_executor_job(_delete)
    except OSError as err:
        connection.send_error(msg["id"], "delete_failed", f"Bild konnte nicht gelöscht werden: {err}")
        return

    connection.send_result(msg["id"], {"deleted": geloescht})


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
    websocket_api.async_register_command(hass, ws_delete_wallpaper)
    websocket_api.async_register_command(hass, ws_list_custom_cardmods)
    websocket_api.async_register_command(hass, ws_save_custom_cardmods)
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
