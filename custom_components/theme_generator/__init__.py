from __future__ import annotations

from pathlib import Path
import logging

from homeassistant.components import frontend
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import (
    DOMAIN,
    PANEL_FILENAME,
    PANEL_ICON,
    PANEL_TAG,
    PANEL_TITLE,
    PANEL_URL_PATH,
)

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    source_file = Path(
        hass.config.path(f"custom_components/{DOMAIN}/www/{PANEL_FILENAME}")
    )

    target_dir = Path(hass.config.path(f"www/{DOMAIN}"))
    target_dir.mkdir(parents=True, exist_ok=True)

    target_file = target_dir / PANEL_FILENAME

    if source_file.exists():
        target_file.write_text(
            source_file.read_text(encoding="utf-8"),
            encoding="utf-8",
        )
        _LOGGER.info("Theme Generator panel copied to %s", target_file)
    else:
        _LOGGER.error("Theme Generator panel source file missing: %s", source_file)

    frontend.async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        frontend_url_path=PANEL_URL_PATH,
        require_admin=True,
        config={
            "tag": PANEL_TAG,
            "module_url": f"/local/{DOMAIN}/{PANEL_FILENAME}?v=1.0.1",
        },
    )

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL_PATH)
    return True
