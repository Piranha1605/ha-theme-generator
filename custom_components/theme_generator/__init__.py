from __future__ import annotations
import yaml
from pathlib import Path
import voluptuous as vol
from homeassistant.components import websocket_api
import re


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
                "module_url": f"/{DOMAIN}_static/{PANEL_FILENAME}?v=1.13.7",
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
    websocket_api.async_register_command(hass, websocket_list_demo_page_files)
    websocket_api.async_register_command(hass, websocket_read_demo_page_file)
    websocket_api.async_register_command(hass, websocket_save_demo_page_file)
    websocket_api.async_register_command(hass, websocket_parse_demo_page_yaml)

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


# ---------------------------------------------------------------------
# Demo Page YAML files
# ---------------------------------------------------------------------

DEMO_PAGE_DIR = "theme_generator"
DEMO_PAGE_DEFAULT_FILE = "demo_preview.yaml"


def _demo_page_dir(hass):
    return Path(hass.config.path(DEMO_PAGE_DIR))


def _safe_demo_page_file(filename):
    name = str(filename or DEMO_PAGE_DEFAULT_FILE).strip()

    if not name:
        name = DEMO_PAGE_DEFAULT_FILE

    name = name.replace("\\", "/").split("/")[-1]

    if not name.endswith((".yaml", ".yml")):
        name = f"{name}.yaml"

    if name.startswith(".") or ".." in name:
        raise ValueError("Invalid demo page filename")

    return name


def _default_demo_page_yaml():
    return """type: sections
title: Serversteuerung Vergleich
icon: mdi:cog
max_columns: 4
sections:
  - type: grid
    cards:
      - type: heading
        heading: HA Standard
        icon: mdi:home-assistant
      - type: tile
        entity: switch.tasmota_4
        name: Lüftersteuerung
        icon: mdi:fan
        tap_action:
          action: toggle
      - type: tile
        entity: light.buro_serversteuerrung_server_led
        name: Server LED
        icon: mdi:led-strip-variant
        features:
          - type: light-brightness
      - type: tile
        entity: button.buro_serversteuerrung_server_led_aus
        name: LED komplett aus
        icon: mdi:power
      - type: tile
        entity: select.buro_serversteuerrung_server_led_effekt
        name: LED Effekt
        icon: mdi:creation
      - type: tile
        entity: number.buro_serversteuerrung_server_led_geschwindigkeit
        name: LED Geschwindigkeit
        icon: mdi:speedometer
      - type: tile
        entity: number.buro_serversteuerrung_server_led_helligkeit
        name: LED Helligkeit
        icon: mdi:brightness-6

  - type: grid
    cards:
      - type: custom:mushroom-title-card
        title: Mushroom
        subtitle: Serversteuerung
      - type: custom:mushroom-entity-card
        entity: switch.tasmota_4
        name: Lüftersteuerung
        icon: mdi:fan
        tap_action:
          action: toggle
      - type: custom:mushroom-light-card
        entity: light.buro_serversteuerrung_server_led
        name: Server LED
        icon: mdi:led-strip-variant
        use_light_color: true
        show_brightness_control: true
        show_color_control: true
      - type: custom:mushroom-select-card
        entity: select.buro_serversteuerrung_server_led_effekt
        name: LED Effekt
        icon: mdi:creation
      - type: custom:mushroom-number-card
        entity: number.buro_serversteuerrung_server_led_geschwindigkeit
        name: LED Geschwindigkeit
        icon: mdi:speedometer
        display_mode: slider
      - type: custom:mushroom-number-card
        entity: number.buro_serversteuerrung_server_led_helligkeit
        name: LED Helligkeit
        icon: mdi:brightness-6
        display_mode: slider

  - type: grid
    cards:
      - type: custom:bubble-card
        card_type: separator
        name: Bubble
        icon: mdi:circle-multiple-outline
      - type: custom:bubble-card
        card_type: button
        button_type: switch
        entity: switch.tasmota_4
        name: Lüftersteuerung
        icon: mdi:fan
      - type: custom:bubble-card
        card_type: button
        button_type: slider
        entity: light.buro_serversteuerrung_server_led
        name: Server LED
        icon: mdi:led-strip-variant
      - type: custom:bubble-card
        card_type: select
        entity: select.buro_serversteuerrung_server_led_effekt
        name: LED Effekt
        icon: mdi:creation

  - type: grid
    cards:
      - type: custom:bubble-card
        card_type: separator
        name: Theme Settings
        icon: mdi:compare
      - type: custom:mushroom-number-card
        entity: input_number.dashboard_card_transparenz
        name: Card Transparenz
        icon: mdi:blur
        display_mode: slider
"""


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/list_demo_page_files",
})
async def websocket_list_demo_page_files(hass, connection, msg):
    def _list_files():
        folder = _demo_page_dir(hass)
        folder.mkdir(parents=True, exist_ok=True)

        default_file = folder / DEMO_PAGE_DEFAULT_FILE

        if not default_file.exists():
            default_file.write_text(_default_demo_page_yaml(), encoding="utf-8")

        return sorted([
            item.name
            for item in folder.iterdir()
            if item.is_file() and item.suffix.lower() in (".yaml", ".yml")
        ])

    files = await hass.async_add_executor_job(_list_files)
    connection.send_result(msg["id"], {"files": files})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/read_demo_page_file",
    vol.Optional("filename", default=DEMO_PAGE_DEFAULT_FILE): str,
})
async def websocket_read_demo_page_file(hass, connection, msg):
    filename = _safe_demo_page_file(msg.get("filename"))

    def _read_file():
        folder = _demo_page_dir(hass)
        folder.mkdir(parents=True, exist_ok=True)

        path = folder / filename

        if not path.exists():
            path.write_text(_default_demo_page_yaml(), encoding="utf-8")

        return path.read_text(encoding="utf-8")

    content = await hass.async_add_executor_job(_read_file)
    connection.send_result(msg["id"], {"filename": filename, "content": content})


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/save_demo_page_file",
    vol.Required("filename"): str,
    vol.Required("content"): str,
})
async def websocket_save_demo_page_file(hass, connection, msg):
    filename = _safe_demo_page_file(msg.get("filename"))
    content = str(msg.get("content") or "")

    def _save_file():
        folder = _demo_page_dir(hass)
        folder.mkdir(parents=True, exist_ok=True)

        path = folder / filename
        path.write_text(content, encoding="utf-8")
        return filename

    saved = await hass.async_add_executor_job(_save_file)
    connection.send_result(msg["id"], {"filename": saved, "saved": True})




@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/parse_demo_page_yaml",
    vol.Required("content"): str,
})
async def websocket_parse_demo_page_yaml(hass, connection, msg):
    content = str(msg.get("content") or "")

    def _parse_yaml():
        if not content.strip():
            return {"cards": []}

        data = yaml.safe_load(content) or {}

        if isinstance(data, list):
            return {"cards": data}

        if isinstance(data, dict):
            if isinstance(data.get("cards"), list):
                return {"cards": data.get("cards")}

            if isinstance(data.get("sections"), list):
                cards = []

                for section in data.get("sections") or []:
                    if isinstance(section, dict) and isinstance(section.get("cards"), list):
                        cards.extend(section.get("cards") or [])

                return {"cards": cards}

            if data.get("type"):
                return {"cards": [data]}

        return {"cards": []}

    try:
        result = await hass.async_add_executor_job(_parse_yaml)
        connection.send_result(msg["id"], result)
    except Exception as err:
        connection.send_result(msg["id"], {
            "cards": [],
            "error": str(err),
        })
