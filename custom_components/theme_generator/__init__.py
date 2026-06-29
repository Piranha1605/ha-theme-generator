from __future__ import annotations

import logging
from pathlib import Path
from typing import Any

import voluptuous as vol
import yaml

from homeassistant.components import panel_custom, websocket_api
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_NAME
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.helpers import config_validation as cv

from .const import (
    DOMAIN,
    PANEL_FILENAME,
    PANEL_ICON,
    PANEL_TAG,
    PANEL_TITLE,
    PANEL_URL_PATH,
    THEME_FILE,
)

_LOGGER = logging.getLogger(__name__)

SAVE_THEME_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_NAME): cv.string,
        vol.Required("yaml"): cv.string,
    }
)


def _themes_dir(config_path: str) -> Path:
    themes_dir = Path(config_path) / "themes"
    themes_dir.mkdir(parents=True, exist_ok=True)
    return themes_dir


def _read_theme_files(config_path: str) -> list[dict[str, Any]]:
    themes_dir = _themes_dir(config_path)
    result: list[dict[str, Any]] = []

    for path in sorted(list(themes_dir.glob("*.yaml")) + list(themes_dir.glob("*.yml"))):
        try:
            loaded = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
            if not isinstance(loaded, dict):
                continue

            result.append(
                {
                    "file": path.name,
                    "themes": list(loaded.keys()),
                }
            )
        except Exception as err:
            _LOGGER.warning("Could not read theme file %s: %s", path, err)

    return result


def _read_theme(config_path: str, file_name: str, theme_name: str) -> dict[str, Any]:
    themes_dir = _themes_dir(config_path)
    path = (themes_dir / file_name).resolve()

    if not str(path).startswith(str(themes_dir.resolve())):
        raise ValueError("Ungültiger Dateipfad.")

    if not path.exists():
        raise FileNotFoundError(f"Theme-Datei nicht gefunden: {file_name}")

    loaded = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if not isinstance(loaded, dict):
        raise ValueError("Theme-Datei ist ungültig.")

    theme = loaded.get(theme_name)
    if not isinstance(theme, dict):
        raise ValueError(f"Theme nicht gefunden: {theme_name}")

    return {
        "name": theme_name,
        "file": file_name,
        "values": theme,
    }


def _write_theme_file(config_path: str, data: dict[str, Any]) -> Path:
    themes_dir = _themes_dir(config_path)
    theme_path = themes_dir / THEME_FILE

    incoming = yaml.safe_load(data["yaml"])
    if not isinstance(incoming, dict):
        raise ValueError("Theme YAML ist ungültig.")

    existing: dict[str, Any] = {}
    if theme_path.exists():
        loaded = yaml.safe_load(theme_path.read_text(encoding="utf-8"))
        if isinstance(loaded, dict):
            existing = loaded

    existing.update(incoming)

    theme_path.write_text(
        yaml.safe_dump(existing, allow_unicode=True, sort_keys=False),
        encoding="utf-8",
    )
    return theme_path


async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    await _async_register_panel(hass)
    _async_register_services(hass)
    await _async_register_websocket(hass)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    panel_custom.async_unregister_panel(hass, PANEL_URL_PATH)

    if hass.services.has_service(DOMAIN, "save_theme"):
        hass.services.async_remove(DOMAIN, "save_theme")

    return True


async def _async_register_panel(hass: HomeAssistant) -> None:
    panel_file = hass.config.path("custom_components", DOMAIN, "www", PANEL_FILENAME)

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                f"/{DOMAIN}/{PANEL_FILENAME}",
                panel_file,
                True,
            )
        ]
    )

    await panel_custom.async_register_panel(
        hass=hass,
        webcomponent_name=PANEL_TAG,
        frontend_url_path=PANEL_URL_PATH,
        module_url=f"/{DOMAIN}/{PANEL_FILENAME}?v=0.3.4",
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        require_admin=True,
        config={},
    )


def _async_register_services(hass: HomeAssistant) -> None:
    if hass.services.has_service(DOMAIN, "save_theme"):
        return

    async def async_save_theme(call: ServiceCall) -> None:
        theme_path = await hass.async_add_executor_job(
            _write_theme_file,
            hass.config.config_dir,
            dict(call.data),
        )
        _LOGGER.info("Theme saved to %s", theme_path)

        if hass.services.has_service("frontend", "reload_themes"):
            await hass.services.async_call("frontend", "reload_themes", {}, blocking=True)

    hass.services.async_register(
        DOMAIN,
        "save_theme",
        async_save_theme,
        schema=SAVE_THEME_SCHEMA,
    )


async def _async_register_websocket(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, websocket_list_themes)
    websocket_api.async_register_command(hass, websocket_load_theme)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/list_themes",
    }
)
@websocket_api.async_response
async def websocket_list_themes(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    files = await hass.async_add_executor_job(
        _read_theme_files,
        hass.config.config_dir,
    )
    connection.send_result(msg["id"], {"files": files})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/load_theme",
        vol.Required("file"): str,
        vol.Required("theme"): str,
    }
)
@websocket_api.async_response
async def websocket_load_theme(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    theme = await hass.async_add_executor_job(
        _read_theme,
        hass.config.config_dir,
        msg["file"],
        msg["theme"],
    )
    connection.send_result(msg["id"], theme)
