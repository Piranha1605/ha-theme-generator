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
                "module_url": f"/{DOMAIN}_static/{PANEL_FILENAME}?v=1.3.0",
                "embed_iframe": False,
                "trust_external": False,
            }
        },
    )

    websocket_api.async_register_command(hass, websocket_list_theme_files)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    return True


def _list_theme_files_sync(hass: HomeAssistant) -> list[str]:
    themes_dir = Path(hass.config.path("themes"))
    themes_dir.mkdir(parents=True, exist_ok=True)

    return sorted(
        item.name
        for item in themes_dir.iterdir()
        if item.is_file() and item.suffix.lower() in (".yaml", ".yml")
    )


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
