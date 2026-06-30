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
                "module_url": f"/{DOMAIN}_static/{PANEL_FILENAME}?v=1.9.3",
                "embed_iframe": False,
                "trust_external": False,
            }
        },
    )

    websocket_api.async_register_command(hass, websocket_list_theme_files)
    websocket_api.async_register_command(hass, websocket_read_theme_file)
    websocket_api.async_register_command(hass, websocket_save_theme_file_version)

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


def _version_base_name(filename: str) -> tuple[str, str]:
    clean_name = Path(filename or "ha_standard_basis.yaml").name

    if not clean_name.endswith((".yaml", ".yml")):
        clean_name = f"{clean_name}.yaml"

    path = Path(clean_name)
    suffix = path.suffix
    stem = path.stem

    stem = re.sub(r"_v\d+$", "", stem)

    return stem, suffix


def _extract_top_level_theme_names(content: str) -> list[str]:
    names: list[str] = []

    for line in content.splitlines():
        if not line.strip():
            continue

        if line.startswith((" ", "\t", "#", "-")):
            continue

        match = re.match(r'^("?)([^":]+)\1:\s*(?:#.*)?$', line)

        if match:
            name = match.group(2).strip()

            if name and name not in names:
                names.append(name)

    return names


def _rename_theme_names_for_version(content: str, version: int, fallback_stem: str) -> str:
    names = _extract_top_level_theme_names(content)

    if not names:
        return f"{fallback_stem}_v{version}:\n" + content

    mapping: dict[str, str] = {}

    for old_name in names:
        base_name = re.sub(r"_v\d+$", "", old_name)
        mapping[old_name] = f"{base_name}_v{version}"

    new_content = content

    for old_name, new_name in mapping.items():
        new_content = re.sub(
            rf'^("?){re.escape(old_name)}\1:',
            f"{new_name}:",
            new_content,
            flags=re.MULTILINE,
        )

    for old_name, new_name in mapping.items():
        new_content = re.sub(
            rf'(?<![A-Za-z0-9_-]){re.escape(old_name)}(?![A-Za-z0-9_-])',
            new_name,
            new_content,
        )

    return new_content


def _save_theme_file_version_sync(hass: HomeAssistant, filename: str, content: str) -> dict:
    base = _themes_dir(hass).resolve()
    stem, suffix = _version_base_name(filename)

    version = 1

    while True:
        new_name = f"{stem}_v{version}{suffix}"
        target = (base / new_name).resolve()

        if base not in target.parents:
            raise ValueError("Ungültiger Dateipfad.")

        if not target.exists():
            new_content = _rename_theme_names_for_version(content, version, stem)
            target.write_text(new_content, encoding="utf-8")

            return {
                "filename": target.name,
                "content": new_content,
                "saved": True,
            }

        version += 1


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


@callback
@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/save_theme_file_version",
        vol.Optional("filename", default="ha_standard_basis.yaml"): str,
        vol.Required("content"): str,
    }
)
@websocket_api.async_response
async def websocket_save_theme_file_version(hass: HomeAssistant, connection, msg) -> None:
    try:
        result = await hass.async_add_executor_job(
            _save_theme_file_version_sync,
            hass,
            msg.get("filename") or "ha_standard_basis.yaml",
            msg["content"],
        )

        await hass.services.async_call(
            "frontend",
            "reload_themes",
            {},
            blocking=False,
        )

        connection.send_result(msg["id"], result)
    except Exception as err:
        connection.send_error(msg["id"], "theme_generator_error", str(err))
