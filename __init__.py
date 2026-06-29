from __future__ import annotations

import logging
from pathlib import Path
from typing import Any

import voluptuous as vol
import yaml

from homeassistant.components import frontend, panel_custom
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

RGB_SCHEMA = vol.All(vol.Coerce(str), vol.Length(min=4, max=30))

SAVE_THEME_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_NAME): cv.string,
        vol.Required("primary_color"): RGB_SCHEMA,
        vol.Required("accent_color"): RGB_SCHEMA,
        vol.Required("background_color"): RGB_SCHEMA,
        vol.Required("card_color"): RGB_SCHEMA,
        vol.Required("text_color"): RGB_SCHEMA,
        vol.Optional("rounded", default=24): vol.All(vol.Coerce(int), vol.Range(min=0, max=40)),
    }
)


def _theme_payload(data: dict[str, Any]) -> dict[str, Any]:
    rounded = int(data.get("rounded", 24))
    return {
        "primary-color": data["primary_color"],
        "accent-color": data["accent_color"],
        "primary-background-color": data["background_color"],
        "secondary-background-color": data["background_color"],
        "card-background-color": data["card_color"],
        "ha-card-background": data["card_color"],
        "primary-text-color": data["text_color"],
        "secondary-text-color": "rgba(255, 255, 255, 0.72)",
        "text-primary-color": data["text_color"],
        "divider-color": "rgba(255, 255, 255, 0.12)",
        "ha-card-border-radius": f"{rounded}px",
        "ha-card-box-shadow": "0 18px 40px rgba(0, 0, 0, 0.28)",
        "app-header-background-color": data["background_color"],
        "app-header-text-color": data["text_color"],
        "sidebar-background-color": data["background_color"],
        "sidebar-text-color": data["text_color"],
        "sidebar-selected-background-color": data["card_color"],
        "sidebar-selected-text-color": data["accent_color"],
        "state-icon-color": data["accent_color"],
        "state-icon-active-color": data["primary_color"],
        "switch-checked-color": data["accent_color"],
        "mdc-theme-primary": data["primary_color"],
        "mdc-theme-secondary": data["accent_color"],
    }


def _write_theme_file(config_path: str, data: dict[str, Any]) -> Path:
    themes_dir = Path(config_path) / "themes"
    themes_dir.mkdir(parents=True, exist_ok=True)
    theme_path = themes_dir / THEME_FILE

    existing: dict[str, Any] = {}
    if theme_path.exists():
        loaded = yaml.safe_load(theme_path.read_text(encoding="utf-8"))
        if isinstance(loaded, dict):
            existing = loaded

    existing[data[CONF_NAME]] = _theme_payload(data)
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
        module_url=f"/{DOMAIN}/{PANEL_FILENAME}",
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
