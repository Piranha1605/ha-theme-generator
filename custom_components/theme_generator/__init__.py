from __future__ import annotations

from pathlib import Path

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


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                f"/{DOMAIN}_static",
                hass.config.path(f"custom_components/{DOMAIN}/www"),
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
                "module_url": f"/{DOMAIN}_static/{PANEL_FILENAME}?v=1.4.0",
                "embed_iframe": False,
                "trust_external": False,
            }
        },
    )

    websocket_api.async_register_command(hass, websocket_list_theme_files)
    websocket_api.async_register_command(hass, websocket_read_theme_file)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    return True


def _themes_dir(hass: HomeAssistant) -> Path:
    path = Path(hass.config.path("themes"))
    path.mkdir(parents=True, exist_ok=True)
    return path


def _safe_theme_file(hass: HomeAssistant, filename: str) -> Path:
    if not filename:
        raise ValueError("Dateiname fehlt.")

    clean_name = Path(filename).name

    if not clean_name.endswith((".yaml", ".yml")):
        clean_name = f"{clean_name}.yaml"

    base = _themes_dir(hass).resolve()
    target = (base / clean_name).resolve()

    if base not in target.parents:
        raise ValueError("Ungültiger Dateipfad.")

    return target


def _list_theme_files_sync(hass: HomeAssistant) -> list[str]:
    themes_dir = _themes_dir(hass)

    return sorted(
        item.name
        for item in themes_dir.iterdir()
        if item.is_file() and item.suffix.lower() in (".yaml", ".yml")
    )


def _read_theme_file_sync(hass: HomeAssistant, filename: str) -> dict:
    target = _safe_theme_file(hass, filename)

    if not target.exists():
        raise FileNotFoundError(f"Theme-Datei nicht gefunden: {target.name}")

    return {
        "filename": target.name,
        "content": target.read_text(encoding="utf-8"),
    }


@callback
@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/list_theme_files",
    }
)
@websocket_api.async_response
async def websocket_list_theme_files(hass: HomeAssistant, connection, msg) -> None:
    try:
        files = await hass.async_add_executor_job(_list_theme_files_sync, hass)

        connection.send_result(
            msg["id"],
            {
                "files": files,
            },
        )
    except Exception as err:
        connection.send_error(msg["id"], "theme_generator_error", str(err))


@callback
@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/read_theme_file",
        vol.Required("filename"): str,
    }
)
@websocket_api.async_response
async def websocket_read_theme_file(hass: HomeAssistant, connection, msg) -> None:
    try:
        result = await hass.async_add_executor_job(
            _read_theme_file_sync,
            hass,
            msg["filename"],
        )

        connection.send_result(msg["id"], result)
    except Exception as err:
        connection.send_error(msg["id"], "theme_generator_error", str(err))
