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
    THEMES_DIR,
)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    static_path = hass.config.path(f"custom_components/{DOMAIN}/www")

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                f"/{DOMAIN}",
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
            "tag": PANEL_TAG,
            "module_url": f"/{DOMAIN}/{PANEL_FILENAME}?v=0.5.3",
        },
    )

    websocket_api.async_register_command(hass, websocket_list_theme_files)
    websocket_api.async_register_command(hass, websocket_read_theme_file)
    websocket_api.async_register_command(hass, websocket_write_theme_file)

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

    clean_name = Path(filename).name

    if not clean_name.endswith((".yaml", ".yml")):
        clean_name = f"{clean_name}.yaml"

    base = _themes_path(hass).resolve()
    target = (base / clean_name).resolve()

    if base not in target.parents and target != base:
        raise ValueError("Ungültiger Dateipfad.")

    return target


@callback
@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/list_theme_files",
    }
)
@websocket_api.async_response
async def websocket_list_theme_files(hass: HomeAssistant, connection, msg) -> None:
    try:
        base = _themes_path(hass)

        files = sorted(
            [
                item.name
                for item in base.iterdir()
                if item.is_file() and item.suffix.lower() in (".yaml", ".yml")
            ]
        )

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
        target = _safe_theme_file(hass, msg["filename"])

        if not target.exists():
            raise FileNotFoundError(f"Theme-Datei nicht gefunden: {target.name}")

        content = target.read_text(encoding="utf-8")

        connection.send_result(
            msg["id"],
            {
                "filename": target.name,
                "content": content,
            },
        )
    except Exception as err:
        connection.send_error(msg["id"], "theme_generator_error", str(err))


@callback
@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/write_theme_file",
        vol.Required("filename"): str,
        vol.Required("content"): str,
        vol.Optional("overwrite", default=False): bool,
    }
)
@websocket_api.async_response
async def websocket_write_theme_file(hass: HomeAssistant, connection, msg) -> None:
    try:
        target = _safe_theme_file(hass, msg["filename"])

        if target.exists() and not msg.get("overwrite", False):
            raise FileExistsError(f"Datei existiert bereits: {target.name}")

        target.write_text(msg["content"], encoding="utf-8")

        await hass.services.async_call(
            "frontend",
            "reload_themes",
            {},
            blocking=False,
        )

        connection.send_result(
            msg["id"],
            {
                "filename": target.name,
                "saved": True,
            },
        )
    except Exception as err:
        connection.send_error(msg["id"], "theme_generator_error", str(err))
