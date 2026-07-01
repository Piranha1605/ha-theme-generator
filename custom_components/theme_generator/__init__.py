from __future__ import annotations

from pathlib import Path
import re

import voluptuous as vol

from homeassistant.components import frontend, websocket_api
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback

from .const import (
    DOMAIN,
    PANEL_FILENAME,
    PANEL_ICON,
    PANEL_TAG,
    PANEL_TITLE,
    PANEL_URL_PATH,
)

THEMES_DIR = "themes"


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    static_path = hass.config.path(f"custom_components/{DOMAIN}/www")

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                f"/{DOMAIN}_static",
                static_path,
                True,
            )
        ]
    )

    frontend.async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        frontend_url_path=PANEL_URL_PATH,
        require_admin=True,
        config={
            "_panel_custom": {
                "name": PANEL_TAG,
                "module_url": f"/{DOMAIN}_static/{PANEL_FILENAME}?v=1.11.3",
                "embed_iframe": False,
                "trust_external_script": True,
                "config": {},
            }
        },
    )

    websocket_api.async_register_command(hass, websocket_list_theme_files)
    websocket_api.async_register_command(hass, websocket_read_theme_file)
    websocket_api.async_register_command(hass, websocket_save_theme_file_version)
    websocket_api.async_register_command(hass, websocket_overwrite_theme_file)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    return True


def _themes_path(hass: HomeAssistant) -> Path:
    path = Path(hass.config.path(THEMES_DIR))
    path.mkdir(parents=True, exist_ok=True)
    return path


def _safe_theme_file(hass: HomeAssistant, filename: str) -> Path:
    if not filename:
        raise ValueError("Dateiname fehlt.")

    relative = Path(filename)

    if relative.is_absolute():
        raise ValueError("Absolute Pfade sind nicht erlaubt.")

    if any(part in ("..", "") for part in relative.parts):
        raise ValueError("Ungültiger Dateipfad.")

    if relative.suffix.lower() not in (".yaml", ".yml"):
        relative = relative.with_suffix(".yaml")

    base = _themes_path(hass).resolve()
    target = (base / relative).resolve()

    try:
        target.relative_to(base)
    except ValueError as err:
        raise ValueError("Datei liegt außerhalb von /config/themes.") from err

    target.parent.mkdir(parents=True, exist_ok=True)
    return target


def _list_theme_files_sync(hass: HomeAssistant) -> list[str]:
    base = _themes_path(hass).resolve()

    files = []
    for path in base.rglob("*"):
        if path.is_file() and path.suffix.lower() in (".yaml", ".yml"):
            files.append(path.resolve().relative_to(base).as_posix())

    return sorted(files, key=str.lower)


def _read_theme_file_sync(hass: HomeAssistant, filename: str) -> dict:
    path = _safe_theme_file(hass, filename)

    if not path.exists():
        raise FileNotFoundError(f"Theme-Datei nicht gefunden: {filename}")

    base = _themes_path(hass).resolve()

    return {
        "filename": path.resolve().relative_to(base).as_posix(),
        "content": path.read_text(encoding="utf-8"),
    }


def _overwrite_theme_file_sync(hass: HomeAssistant, filename: str, content: str) -> dict:
    path = _safe_theme_file(hass, filename)
    path.write_text(content, encoding="utf-8")

    base = _themes_path(hass).resolve()

    return {
        "filename": path.resolve().relative_to(base).as_posix(),
        "content": content,
    }


def _rename_theme_root(content: str, new_theme_name: str) -> str:
    """Rename the first top-level YAML theme key to the new file stem."""
    lines = content.splitlines()

    for index, line in enumerate(lines):
        stripped = line.strip()

        if not stripped or stripped.startswith("#"):
            continue

        if line.startswith((" ", "\t")):
            continue

        match = re.match(r"^([A-Za-z0-9_-]+):\s*$", line)

        if match:
            lines[index] = f"{new_theme_name}:"
            return "\n".join(lines) + ("\n" if content.endswith("\n") else "")

        break

    return content


def _save_theme_file_version_sync(hass: HomeAssistant, filename: str, content: str) -> dict:
    original = _safe_theme_file(hass, filename)

    suffix = original.suffix or ".yaml"
    clean_stem = re.sub(r"_v\d+$", "", original.stem)

    counter = 1

    while True:
        candidate_stem = f"{clean_stem}_v{counter}"
        candidate = original.parent / f"{candidate_stem}{suffix}"

        if not candidate.exists():
            new_content = _rename_theme_root(content, candidate_stem)
            candidate.write_text(new_content, encoding="utf-8")

            base = _themes_path(hass).resolve()

            return {
                "filename": candidate.resolve().relative_to(base).as_posix(),
                "content": new_content,
                "theme_name": candidate_stem,
            }

        counter += 1


async def _reload_themes(hass: HomeAssistant) -> None:
    await hass.services.async_call(
        "frontend",
        "reload_themes",
        blocking=False,
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/list_theme_files",
    }
)
@callback
def websocket_list_theme_files(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            files = await hass.async_add_executor_job(_list_theme_files_sync, hass)
            connection.send_result(msg["id"], {"files": files})
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/read_theme_file",
        vol.Required("filename"): str,
    }
)
@callback
def websocket_read_theme_file(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            result = await hass.async_add_executor_job(
                _read_theme_file_sync,
                hass,
                msg["filename"],
            )
            connection.send_result(msg["id"], result)
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/save_theme_file_version",
        vol.Required("filename"): str,
        vol.Required("content"): str,
    }
)
@callback
def websocket_save_theme_file_version(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            result = await hass.async_add_executor_job(
                _save_theme_file_version_sync,
                hass,
                msg["filename"],
                msg["content"],
            )
            await _reload_themes(hass)
            connection.send_result(msg["id"], result)
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/overwrite_theme_file",
        vol.Required("filename"): str,
        vol.Required("content"): str,
    }
)
@callback
def websocket_overwrite_theme_file(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            result = await hass.async_add_executor_job(
                _overwrite_theme_file_sync,
                hass,
                msg["filename"],
                msg["content"],
            )
            await _reload_themes(hass)
            connection.send_result(msg["id"], result)
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())
