from __future__ import annotations
import logging
import json
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

_LOGGER = logging.getLogger(__name__)


THEMES_DIR = "themes"


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    return True



async def _reload_themes(hass: HomeAssistant) -> None:
    """Reload Home Assistant frontend themes after writing theme files."""
    try:
        await hass.services.async_call(
            "frontend",
            "reload_themes",
            {},
            blocking=True,
        )
    except Exception:
        _LOGGER.exception("Failed to reload frontend themes")


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
                "module_url": f"/{DOMAIN}_static/{PANEL_FILENAME}?v=1.16.0",
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
    websocket_api.async_register_command(hass, websocket_create_work_theme)
    websocket_api.async_register_command(hass, websocket_read_last_work_theme)
    websocket_api.async_register_command(hass, websocket_save_work_theme)
    websocket_api.async_register_command(hass, websocket_list_templates)

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



# ---------------------------------------------------------------------
# Theme Output Formatter
# ---------------------------------------------------------------------

THEME_OUTPUT_SECTIONS = [
    {
        "title": "Grundfarben",
        "keys": [
            "primary-color",
            "accent-color",
            "mdc-theme-primary",
            "mdc-theme-secondary",
            "link-text-color",
            "success-color",
            "warning-color",
            "error-color",
            "info-color",
        ],
        "prefixes": [],
        "contains": [],
    },
    {
        "title": "Hintergründe",
        "keys": [
            "primary-background-color",
            "secondary-background-color",
            "card-background-color",
            "clear-background-color",
            "divider-color",
            "outline-color",
        ],
        "prefixes": [],
        "contains": [
            "background-color",
            "background",
            "surface",
        ],
    },
    {
        "title": "Karten",
        "keys": [
            "ha-card-background",
            "ha-card-border-color",
            "ha-card-border-radius",
            "ha-card-border-width",
            "ha-card-box-shadow",
            "paper-card-background-color",
        ],
        "prefixes": [
            "ha-card-",
        ],
        "contains": [
            "card-",
        ],
    },
    {
        "title": "Text",
        "keys": [
            "primary-text-color",
            "secondary-text-color",
            "disabled-text-color",
            "text-primary-color",
            "text-light-primary-color",
        ],
        "prefixes": [],
        "contains": [
            "text-color",
            "font",
        ],
    },
    {
        "title": "Header",
        "keys": [],
        "prefixes": [
            "app-header-",
            "app-toolbar-",
        ],
        "contains": [
            "header",
            "toolbar",
        ],
    },
    {
        "title": "Sidebar",
        "keys": [],
        "prefixes": [
            "sidebar-",
        ],
        "contains": [],
    },
    {
        "title": "Icons",
        "keys": [
            "paper-item-icon-color",
            "paper-item-icon-active-color",
            "state-icon-color",
            "state-icon-active-color",
        ],
        "prefixes": [],
        "contains": [
            "icon-color",
            "icon-active-color",
        ],
    },
    {
        "title": "Statusfarben",
        "keys": [
            "state-active-color",
            "state-inactive-color",
            "state-unavailable-color",
            "state-on-color",
            "state-off-color",
        ],
        "prefixes": [
            "state-",
        ],
        "contains": [],
    },
    {
        "title": "Schalter",
        "keys": [],
        "prefixes": [
            "switch-",
            "toggle-",
            "paper-toggle-button-",
        ],
        "contains": [],
    },
    {
        "title": "Slider",
        "keys": [],
        "prefixes": [
            "slider-",
        ],
        "contains": [
            "slider",
        ],
    },
    {
        "title": "Eingabefelder",
        "keys": [],
        "prefixes": [
            "input-",
            "textfield-",
            "mdc-text-field-",
            "mdc-select-",
            "paper-input-",
            "paper-dropdown-",
        ],
        "contains": [],
    },
    {
        "title": "Mushroom",
        "keys": [],
        "prefixes": [
            "mush-",
            "mushroom-",
        ],
        "contains": [],
    },
    {
        "title": "Bubble Card",
        "keys": [],
        "prefixes": [
            "bubble-",
            "bubble-card-",
        ],
        "contains": [],
    },
    {
        "title": "card-mod",
        "keys": [
            "card-mod-theme",
            "card-mod-card",
            "card-mod-root",
            "card-mod-view",
        ],
        "prefixes": [
            "card-mod-",
            "card_mod-",
        ],
        "contains": [],
    },
    {
        "title": "Material / MDC / Paper",
        "keys": [],
        "prefixes": [
            "mdc-",
            "md-",
            "paper-",
        ],
        "contains": [],
    },
    {
        "title": "Badges, Dialoge & Tabellen",
        "keys": [],
        "prefixes": [
            "label-badge-",
            "dialog-",
            "paper-dialog-",
            "paper-toast-",
            "table-",
        ],
        "contains": [],
    },
    {
        "title": "Modi",
        "keys": [
            "modes",
        ],
        "prefixes": [],
        "contains": [],
    },
]


def _theme_output_section_index(key: str) -> int:
    lower = str(key or "").lower()

    for index, section in enumerate(THEME_OUTPUT_SECTIONS):
        if lower in section.get("keys", []):
            return index

        for prefix in section.get("prefixes", []):
            if lower.startswith(prefix):
                return index

    for index, section in enumerate(THEME_OUTPUT_SECTIONS):
        for needle in section.get("contains", []):
            if needle in lower:
                return index

    return len(THEME_OUTPUT_SECTIONS)


def _theme_output_key_sort(section_index: int, key: str):
    lower = str(key or "").lower()

    if section_index < len(THEME_OUTPUT_SECTIONS):
        keys = THEME_OUTPUT_SECTIONS[section_index].get("keys", [])

        if lower in keys:
            return (0, keys.index(lower), lower)

    return (1, 9999, lower)


def _yaml_scalar_for_theme_output(value):
    if isinstance(value, str):
        if "\n" in value:
            return None

        # PyYAML darf lange CSS-Werte nicht umbrechen.
        # Sonst entsteht kaputtes YAML, z. B. eine einzelne Zeile "inset".
        dumped = yaml.safe_dump(
            value,
            allow_unicode=True,
            default_flow_style=True,
            sort_keys=False,
            width=1000000,
        ).strip()

        if dumped.endswith("\n..."):
            dumped = dumped[:-4].strip()

        # Absolute Sicherheit: Wenn PyYAML trotzdem einen Umbruch erzeugt,
        # wird der Wert hart als YAML-String gequotet.
        if "\n" in dumped:
            escaped = value.replace("'", "''")
            return f"'{escaped}'"

        return dumped

    if isinstance(value, (int, float, bool)) or value is None:
        dumped = yaml.safe_dump(
            value,
            allow_unicode=True,
            default_flow_style=True,
            sort_keys=False,
            width=1000000,
        ).strip()

        if dumped.endswith("\n..."):
            dumped = dumped[:-4].strip()

        return dumped

    return None


def _append_theme_output_value(lines: list[str], key: str, value) -> None:
    scalar = _yaml_scalar_for_theme_output(value)

    if scalar is not None:
        lines.append(f"  {key}: {scalar}")
        return

    if isinstance(value, str):
        lines.append(f"  {key}: |")

        for line in value.splitlines():
            lines.append(f"    {line}")

        if value.endswith("\n"):
            lines.append("")

        return

    dumped = yaml.safe_dump(
        value,
        allow_unicode=True,
        sort_keys=False,
        default_flow_style=False,
    ).rstrip()

    lines.append(f"  {key}:")

    for line in dumped.splitlines():
        lines.append(f"    {line}")


def _format_theme_output(theme_name: str, theme_values: dict) -> str:
    if not isinstance(theme_values, dict):
        return yaml.safe_dump(
            {theme_name: theme_values},
            sort_keys=False,
            allow_unicode=True,
            default_flow_style=False,
        )

    buckets: dict[int, list[str]] = {}

    for key in theme_values.keys():
        section_index = _theme_output_section_index(str(key))
        buckets.setdefault(section_index, []).append(str(key))

    lines = [f"{theme_name}:"]

    for section_index in sorted(buckets.keys()):
        keys = buckets[section_index]
        keys.sort(key=lambda item: _theme_output_key_sort(section_index, item))

        if section_index < len(THEME_OUTPUT_SECTIONS):
            section_title = THEME_OUTPUT_SECTIONS[section_index]["title"]
        else:
            section_title = "Sonstiges"

        lines.append("")
        lines.append(f"  # {section_title}")

        for key in keys:
            _append_theme_output_value(lines, key, theme_values[key])

    lines.append("")
    return "\n".join(lines)


def _save_theme_file_version_sync(hass: HomeAssistant, filename: str, content: str) -> dict:
    themes_dir = Path(hass.config.path("themes"))
    themes_dir.mkdir(parents=True, exist_ok=True)

    source_path = Path(str(filename or "theme.yaml"))
    source_stem = source_path.stem

    # Work-Namen und alte Versionssuffixe bereinigen
    clean_stem = source_stem
    clean_stem = re.sub(r"__work$", "", clean_stem, flags=re.IGNORECASE)
    clean_stem = re.sub(r"_work$", "", clean_stem, flags=re.IGNORECASE)
    clean_stem = re.sub(r"\s+work$", "", clean_stem, flags=re.IGNORECASE)
    clean_stem = re.sub(r"_v\d+$", "", clean_stem, flags=re.IGNORECASE)

    if not clean_stem:
        clean_stem = "theme"

    # Zielordner beibehalten, falls Theme in Unterordner liegt
    relative_parent = source_path.parent
    if str(relative_parent) in ("", "."):
        target_dir = themes_dir
        relative_prefix = Path()
    else:
        target_dir = themes_dir / relative_parent
        relative_prefix = relative_parent

    target_dir.mkdir(parents=True, exist_ok=True)

    version = 1
    while True:
        new_filename = f"{clean_stem}_v{version}.yaml"
        target_path = target_dir / new_filename

        if not target_path.exists():
            break

        version += 1

    # YAML-Root für Home Assistant Theme-Liste sauber umbenennen
    new_theme_name = f"{clean_stem} v{version}"

    try:
        parsed = yaml.safe_load(content) or {}

        if isinstance(parsed, dict) and parsed:
            first_key = next(iter(parsed.keys()))
            theme_values = parsed[first_key]

            if isinstance(theme_values, dict):
                theme_values = dict(theme_values)
                theme_values["card-mod-theme"] = new_theme_name

                new_content = _format_theme_output(new_theme_name, theme_values)
            else:
                new_content = re.sub(
                    r"^([^\n:#][^:\n]*):",
                    f"{new_theme_name}:",
                    content,
                    count=1,
                    flags=re.MULTILINE,
                )
        else:
            new_content = f"{new_theme_name}:\n" + str(content or "")

    except Exception:
        new_content = re.sub(
            r"^([^\n:#][^:\n]*):",
            f"{new_theme_name}:",
            content,
            count=1,
            flags=re.MULTILINE,
        )

    target_path.write_text(new_content, encoding="utf-8")

    result_filename = str(relative_prefix / new_filename) if str(relative_prefix) not in ("", ".") else new_filename

    return {
        "filename": result_filename,
        "content": new_content,
        "theme_name": new_theme_name,
    }


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



# ---------------------------------------------------------------------
# Template Library
# ---------------------------------------------------------------------

TEMPLATE_DIR = "theme_generator/templates"

DEFAULT_TEMPLATE_FILES = {
    "bubble/home_assistant_default.yaml": """name: Bubble Home Assistant Default Styling
type: bubble-card-module
target: bubble-card
category: bubble
version: "v1.1"
creator: Clooos
link: "https://github.com/Clooos/Bubble-Card/discussions/1230"
description: Dieses Modul übernimmt Home Assistants Standard-Optik für Bubble Card. Ideal als Basis für saubere Bubble-Styles über Theme-Variablen.
preview: home_assistant_default.svg

variables:
  accent_color: "rgba(0,170,240,0.6)"
  icon_size: "22px"
  icon_box_size: "36px"
  state_font_size: "12px"
  name_font_size: "14px"

template: |
  home-assistant-default:
    name: Home Assistant default styling
    version: "v1.1"
    creator: "Clooos"
    link: "https://github.com/Clooos/Bubble-Card/discussions/1230"
    description: This module applies Home Assistant’s default styling to Bubble Card. To set it as the default, move it under <code>default:</code> in your YAML file.
    code: |
      :host {
        --bubble-accent-color: {{ accent_color }};
        --bubble-main-background-color: var(--ha-card-background, var(--card-background-color, #fff));
        --bubble-border-radius: var(--ha-card-border-radius, 12px);
        --bubble-icon-border-radius: 32px;
        --bubble-button-border-radius: var(--bubble-border-radius);
        --bubble-climate-button-background-color: var(--bubble-icon-background-color);
        --bubble-border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        --bubble-secondary-background-color: transparent;
      }

      .bubble-container {
        -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none);
        backdrop-filter: var(--ha-card-backdrop-filter, none);
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
      }

      .bubble-icon-container,
      .large .bubble-icon-container {
        --mdc-icon-size: {{ icon_size }};
        min-width: {{ icon_box_size }} !important;
        min-height: {{ icon_box_size }} !important;
      }

      .large .bubble-cover-card-container > .bubble-buttons {
        --bubble-cover-main-background-color: none;
      }

      .bubble-sub-button.background-on::before,
      .bubble-sub-button.background-off::before,
      .bubble-temperature-container::before,
      .bubble-icon-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: var(--control-number-buttons-background-opacity, .2);
        border-radius: var(--bubble-border-radius);
        background: var(--control-number-buttons-background-color, var(--disabled-color));
      }

      .bubble-icon-container::before {
        background: var(--state-inactive-color);
        border-radius: var(--bubble-icon-border-radius);
      }

      .bubble-sub-button {
        border: 0px solid transparent !important;
      }

      .no-icon-select-arrow {
        right: 4px !important;
      }

      .large .bubble-icon-container {
        margin-left: 9px;
      }

      .bubble-state {
        opacity: 1;
        font-weight: 400;
        font-size: {{ state_font_size }};
        letter-spacing: .4px;
      }

      :not(.bubble-separator) > .bubble-name {
        font-weight: 500;
        font-size: {{ name_font_size }};
        letter-spacing: 0.1px;
      }

      .bubble-pop-up-background {
        filter: brightness(0.96);
        --bubble-pop-up-border-radius: calc(var(--ha-card-border-radius, 12px) * 1.4);
      }

      .bubble-header-container {
        --bubble-secondary-background-color: var(--background-color-2);
      }

      ha-select {
        --bubble-list-item-accent-color: none !important;
        --mdc-theme-surface: var(--card-background-color);
      }

      mwc-list-item[selected] {
        color: inherit !important;
        --mdc-ripple-press-opacity: 0 !important;
      }

      mwc-list-item[selected]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        opacity: 0.24;
      }
""",
    "bubble/home_assistant_default.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="420" viewBox="0 0 900 420">
  <defs>
    <linearGradient id="card" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#273244"/>
      <stop offset="1" stop-color="#17202d"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-30%" width="140%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000" flood-opacity=".35"/>
    </filter>
  </defs>
  <rect width="900" height="420" rx="34" fill="#101722"/>
  <text x="58" y="70" font-family="Inter,Arial,sans-serif" font-size="34" font-weight="800" fill="#fff" opacity=".92">Bubble Card</text>
  <text x="58" y="108" font-family="Inter,Arial,sans-serif" font-size="20" fill="#fff" opacity=".58">Home Assistant Default Styling</text>

  <rect x="58" y="150" width="784" height="116" rx="26" fill="url(#card)" filter="url(#shadow)" stroke="#ffffff" stroke-opacity=".12"/>
  <circle cx="122" cy="208" r="28" fill="#39475b"/>
  <path d="M112 212c9-19 21-32 37-39-5 16-15 28-29 38 15-4 29-3 42 4-17 8-32 9-50-3z" fill="#dce7f5" opacity=".88"/>
  <text x="178" y="200" font-family="Inter,Arial,sans-serif" font-size="23" font-weight="700" fill="#fff" opacity=".9">Beleuchtung Küche</text>
  <text x="178" y="232" font-family="Inter,Arial,sans-serif" font-size="17" fill="#fff" opacity=".56">Aus · Küche</text>
  <rect x="696" y="180" width="86" height="56" rx="28" fill="#2f3d50" stroke="#ffffff" stroke-opacity=".10"/>
  <circle cx="728" cy="208" r="22" fill="#00aaf0" opacity=".72"/>

  <rect x="58" y="290" width="235" height="72" rx="22" fill="#202b3b" stroke="#ffffff" stroke-opacity=".10"/>
  <circle cx="98" cy="326" r="18" fill="#39475b"/>
  <text x="132" y="333" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" opacity=".82">Sub Button</text>

  <rect x="322" y="290" width="235" height="72" rx="22" fill="#202b3b" stroke="#ffffff" stroke-opacity=".10"/>
  <circle cx="362" cy="326" r="18" fill="#39475b"/>
  <text x="396" y="333" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" opacity=".82">Default HA</text>

  <rect x="586" y="290" width="235" height="72" rx="22" fill="#202b3b" stroke="#ffffff" stroke-opacity=".10"/>
  <circle cx="626" cy="326" r="18" fill="#00aaf0" opacity=".72"/>
  <text x="660" y="333" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff" opacity=".82">Clean Module</text>
</svg>
""",

    "bubble/bubble_neumorph_button.yaml": """name: Bubble Neumorph Button
type: bubble-card-style
target: bubble-button-card
category: bubble
description: Runder Bubble Button mit Neumorph-Hintergrund, Glow und Icon-Farbe.
preview: bubble_neumorph_button.svg

variables:
  radius: "24px"
  glow_color: "rgba(60,138,233,0.14)"
  icon_color: "rgba(255,255,255,0.84)"

template: |
  styles: |
    .bubble-button-card-container {
      border-radius: {{ radius }} !important;
      background:
        radial-gradient(circle at top left, {{ glow_color }}, transparent 44%),
        linear-gradient(145deg, var(--nm-bg-2), var(--nm-bg-1)) !important;
      border: 1px solid var(--ha-card-border-color) !important;
      box-shadow: var(--ha-card-box-shadow) !important;
    }
    .bubble-icon {
      color: {{ icon_color }} !important;
    }
""",
    "bubble/bubble_neumorph_button.svg": """<svg xmlns="http://www.w3.org/2000/svg" width="900" height="420" viewBox="0 0 900 420">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#303949"/>
      <stop offset="1" stop-color="#151922"/>
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="15%" r="65%">
      <stop offset="0" stop-color="#3c8ae9" stop-opacity=".35"/>
      <stop offset=".55" stop-color="#3c8ae9" stop-opacity=".08"/>
      <stop offset="1" stop-color="#3c8ae9" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-30%" y="-40%" width="160%" height="180%">
      <feDropShadow dx="14" dy="18" stdDeviation="18" flood-color="#000000" flood-opacity=".38"/>
      <feDropShadow dx="-8" dy="-8" stdDeviation="12" flood-color="#ffffff" flood-opacity=".06"/>
    </filter>
  </defs>
  <rect width="900" height="420" rx="36" fill="#10141c"/>
  <rect x="58" y="58" width="784" height="304" rx="34" fill="url(#bg)" filter="url(#shadow)"/>
  <rect x="58" y="58" width="784" height="304" rx="34" fill="url(#glow)"/>
  <rect x="58.5" y="58.5" width="783" height="303" rx="33.5" fill="none" stroke="#ffffff" stroke-opacity=".12"/>
  <circle cx="162" cy="210" r="58" fill="#222a38" stroke="#ffffff" stroke-opacity=".10"/>
  <path d="M162 164c-23 0-42 19-42 42 0 31 42 70 42 70s42-39 42-70c0-23-19-42-42-42zm0 60a18 18 0 1 1 0-36 18 18 0 0 1 0 36z" fill="#ffffff" opacity=".84"/>
  <text x="250" y="190" font-family="Inter,Arial,sans-serif" font-size="34" font-weight="700" fill="#ffffff" opacity=".92">Bubble Neumorph</text>
  <text x="250" y="238" font-family="Inter,Arial,sans-serif" font-size="24" fill="#ffffff" opacity=".58">Button Style Template</text>
  <rect x="665" y="172" width="104" height="76" rx="38" fill="#1d2430" stroke="#ffffff" stroke-opacity=".12"/>
  <circle cx="730" cy="210" r="30" fill="#3c8ae9" opacity=".82"/>
</svg>
""",
}


def _template_root(hass):
    return Path(hass.config.path(TEMPLATE_DIR))


def _ensure_default_templates_sync(hass):
    root = _template_root(hass)
    root.mkdir(parents=True, exist_ok=True)

    for relative, content in DEFAULT_TEMPLATE_FILES.items():
        target = root / relative
        target.parent.mkdir(parents=True, exist_ok=True)

        if not target.exists():
            target.write_text(content, encoding="utf-8")



def _list_templates_sync(hass):
    _ensure_default_templates_sync(hass)

    root = _template_root(hass)
    templates = []

    for path in sorted(root.rglob("*.yaml")):
        if not path.is_file():
            continue

        try:
            raw = path.read_text(encoding="utf-8")
            data = yaml.safe_load(raw) or {}
        except Exception as err:
            templates.append({
                "id": str(path.relative_to(root)),
                "filename": str(path.relative_to(root)),
                "name": path.stem,
                "category": "Fehler",
                "description": f"Template konnte nicht gelesen werden: {err}",
                "variables": {},
                "template": "",
                "preview": "",
                "preview_svg": "",
                "error": str(err),
            })
            continue

        preview_name = data.get("preview") or ""
        preview_svg = ""

        if preview_name:
            preview_path = path.parent / str(preview_name)
            try:
                if preview_path.exists() and preview_path.is_file() and preview_path.suffix.lower() == ".svg":
                    preview_svg = preview_path.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                preview_svg = ""

        templates.append({
            "id": str(path.relative_to(root)),
            "filename": str(path.relative_to(root)),
            "name": data.get("name") or path.stem,
            "type": data.get("type") or "",
            "target": data.get("target") or "",
            "category": data.get("category") or path.parent.name,
            "description": data.get("description") or "",
            "variables": data.get("variables") or {},
            "template": data.get("template") or "",
            "preview": preview_name,
            "preview_svg": preview_svg,
            "error": "",
        })

    return {
        "templates": templates,
        "directory": TEMPLATE_DIR,
    }


@websocket_api.websocket_command({
    vol.Required("type"): "theme_generator/list_templates",
})
@websocket_api.async_response
async def websocket_list_templates(hass, connection, msg):
    try:
        result = await hass.async_add_executor_job(_list_templates_sync, hass)
        connection.send_result(msg["id"], result)
    except Exception as err:
        _LOGGER.exception("Failed to list theme generator templates")
        connection.send_error(msg["id"], "list_templates_failed", str(err))


# ---------------------------------------------------------------------
# Work Theme / Master Theme
# ---------------------------------------------------------------------

WORK_THEME_DIR = "theme_generator/work"
WORK_THEME_LAST_FILE = "last_work_theme.json"

MASTER_THEME_KEYS = [
    # Grundfarben
    "primary-color",
    "accent-color",
    "dark-primary-color",
    "light-primary-color",
    "disabled-text-color",
    "divider-color",

    # Hintergründe
    "primary-background-color",
    "secondary-background-color",
    "clear-background-color",
    "card-background-color",
    "ha-card-background",
    "ha-card-border-color",
    "ha-card-border-radius",
    "ha-card-box-shadow",

    # Textfarben
    "primary-text-color",
    "secondary-text-color",
    "text-primary-color",
    "text-light-primary-color",
    "paper-item-icon-color",
    "paper-item-icon-active-color",

    # Header / App
    "app-header-background-color",
    "app-header-text-color",
    "app-header-selection-bar-color",
    "app-header-edit-background-color",
    "app-header-edit-text-color",

    # Sidebar
    "sidebar-background-color",
    "sidebar-icon-color",
    "sidebar-text-color",
    "sidebar-selected-background-color",
    "sidebar-selected-icon-color",
    "sidebar-selected-text-color",

    # Statusfarben
    "state-active-color",
    "state-inactive-color",
    "state-unavailable-color",
    "state-home-color",
    "state-not_home-color",
    "state-on-color",
    "state-off-color",
    "state-idle-color",

    # Schalter / Slider
    "switch-checked-button-color",
    "switch-checked-track-color",
    "switch-unchecked-button-color",
    "switch-unchecked-track-color",
    "slider-color",
    "slider-secondary-color",
    "slider-track-color",

    # Eingabefelder
    "input-fill-color",
    "input-ink-color",
    "input-label-ink-color",
    "input-disabled-fill-color",
    "input-disabled-ink-color",

    # Mushroom
    "mushroom-card-background",
    "mush-card-primary-background",
    "mush-card-secondary-background",
    "mush-card-border-radius",
    "mush-card-box-shadow",
    "mush-primary-text-color",
    "mush-secondary-text-color",
    "mush-disabled-text-color",
    "mush-icon-color",
    "mush-icon-active-color",
    "mush-accent-color",
    "mush-success-color",
    "mush-warning-color",
    "mush-danger-color",
    "mush-info-color",
    "mush-chip-background",
    "mush-chip-border-color",
    "mush-chip-text-color",
    "mush-chip-icon-color",
    "mush-chip-active-background",
    "mush-chip-active-text-color",
    "mush-chip-active-icon-color",
    "mush-slider-color",
    "mush-slider-track-color",
    "mush-slider-background-color",
    "mush-badge-background",
    "mush-badge-text-color",
    "mush-badge-icon-color",
    "mush-divider-color",
    "mushroom-card-primary-color",
    "mushroom-card-secondary-color",
    "mushroom-chip-background",
    "mushroom-chip-border-radius",
    "mushroom-shape-color",
    "mushroom-shape-icon-color",
    "mushroom-state-info-color",

    # Bubble Card
    "bubble-main-background-color",
    "bubble-secondary-background-color",
    "bubble-accent-color",
    "bubble-icon-background-color",
    "bubble-icon-color",
    "bubble-name-color",
    "bubble-state-color",
    "bubble-border-radius",

    # card-mod
    "card-mod-theme",
    "card-mod-card-yaml",
    "card-mod-row-yaml",
    "card-mod-more-info-yaml",
]


def _work_theme_dir(hass):
    folder = Path(hass.config.path(WORK_THEME_DIR))
    folder.mkdir(parents=True, exist_ok=True)
    return folder


def _safe_work_filename(filename: str) -> str:
    name = str(filename or "theme").strip().replace("\\", "/").split("/")[-1]
    stem = Path(name).stem

    if not stem:
        stem = "theme"

    stem = re.sub(r"[^A-Za-z0-9_.-]+", "_", stem)
    return f"{stem}__work.yaml"


def _read_yaml_theme(content: str) -> tuple[str, dict]:
    data = yaml.safe_load(content) or {}

    if not isinstance(data, dict) or not data:
        return "Theme Generator Work", {}

    first_key = next(iter(data.keys()))
    first_value = data.get(first_key)

    if isinstance(first_value, dict):
        return str(first_key), dict(first_value)

    return "Theme Generator Work", dict(data)


def _resolve_var_value(value, values: dict, seen=None):
    if seen is None:
        seen = set()

    if not isinstance(value, str):
        return value

    raw = value.strip()

    match = re.fullmatch(r"var\(--([A-Za-z0-9_-]+)\)", raw)

    if not match:
        return value

    key = match.group(1)

    if key in seen:
        return value

    if key not in values:
        return value

    seen.add(key)
    return _resolve_var_value(values.get(key), values, seen)


def _normalize_theme_content(content: str, work_theme_name: str) -> tuple[str, dict]:
    original_theme_name, values = _read_yaml_theme(content)

    resolved_values = {}
    resolved_map = {}
    missing_vars = {}

    for key, value in values.items():
        resolved = _resolve_var_value(value, values)

        if isinstance(value, str) and value.strip().startswith("var("):
            if resolved != value:
                resolved_map[key] = {
                    "original": value,
                    "resolved": resolved,
                }
            else:
                missing_vars[key] = value

        resolved_values[key] = resolved

    final_values = {}

    for key in MASTER_THEME_KEYS:
        if key in resolved_values:
            final_values[key] = resolved_values[key]

    # Zusätzliche direkte Home-Assistant-Theme-Werte hinten erhalten,
    # aber interne Hilfsvariablen wie nm-bg-2 entfernen.
    for key, value in resolved_values.items():
        if key in final_values:
            continue

        if key.startswith(("nm-", "tg-", "theme-generator-")):
            continue

        if isinstance(value, str) and value.strip().startswith("var("):
            continue

        final_values[key] = value

    output = yaml.safe_dump(
        {work_theme_name: final_values},
        allow_unicode=True,
        sort_keys=False,
        default_flow_style=False,
        width=120,
    )

    meta = {
        "source_theme_name": original_theme_name,
        "work_theme_name": work_theme_name,
        "resolved_vars": resolved_map,
        "missing_vars": missing_vars,
        "master_keys": MASTER_THEME_KEYS,
    }

    return output, meta


def _create_work_theme_sync(hass: HomeAssistant, filename: str) -> dict:
    source = _safe_theme_file(hass, filename)

    if not source.exists():
        raise FileNotFoundError(f"Theme-Datei nicht gefunden: {filename}")

    source_base = _themes_path(hass).resolve()
    source_relative = source.resolve().relative_to(source_base).as_posix()

    content = source.read_text(encoding="utf-8")

    work_folder = _work_theme_dir(hass)
    work_filename = _safe_work_filename(source_relative)
    work_theme_name = Path(work_filename).stem.replace("__work", " Work")

    normalized_content, meta = _normalize_theme_content(content, work_theme_name)

    work_path = work_folder / work_filename
    meta_path = work_folder / f"{Path(work_filename).stem}.meta.json"
    last_path = work_folder / WORK_THEME_LAST_FILE

    work_path.write_text(normalized_content, encoding="utf-8")

    meta.update({
        "source_file": source_relative,
        "work_file": work_filename,
    })

    meta_path.write_text(json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8")
    last_path.write_text(json.dumps({"work_file": work_filename, "source_file": source_relative}, indent=2, ensure_ascii=False), encoding="utf-8")

    return {
        "filename": source_relative,
        "work_file": work_filename,
        "content": normalized_content,
        "meta": meta,
    }


def _read_last_work_theme_sync(hass: HomeAssistant) -> dict:
    work_folder = _work_theme_dir(hass)
    last_path = work_folder / WORK_THEME_LAST_FILE

    if not last_path.exists():
        return {"found": False}

    data = json.loads(last_path.read_text(encoding="utf-8"))
    work_file = _safe_work_filename(data.get("work_file") or data.get("source_file") or "theme")

    # Wenn bereits ein work_file gespeichert wurde, nicht nochmal __work dranhängen.
    if str(data.get("work_file", "")).endswith((".yaml", ".yml")):
        work_file = str(data.get("work_file")).replace("\\", "/").split("/")[-1]

    work_path = work_folder / work_file

    if not work_path.exists():
        return {"found": False}

    meta_path = work_folder / f"{Path(work_file).stem}.meta.json"
    meta = {}

    if meta_path.exists():
        meta = json.loads(meta_path.read_text(encoding="utf-8"))

    return {
        "found": True,
        "filename": meta.get("source_file", data.get("source_file", "")),
        "work_file": work_file,
        "content": work_path.read_text(encoding="utf-8"),
        "meta": meta,
    }


def _save_work_theme_sync(hass: HomeAssistant, work_file: str, source_file: str, content: str) -> dict:
    work_folder = _work_theme_dir(hass)
    safe_name = str(work_file or _safe_work_filename(source_file or "theme")).replace("\\", "/").split("/")[-1]

    if not safe_name.endswith((".yaml", ".yml")):
        safe_name = f"{safe_name}.yaml"

    if safe_name.startswith(".") or ".." in safe_name:
        raise ValueError("Ungültige Work-Datei.")

    work_path = work_folder / safe_name
    work_path.write_text(content, encoding="utf-8")

    last_path = work_folder / WORK_THEME_LAST_FILE
    last_path.write_text(json.dumps({"work_file": safe_name, "source_file": source_file}, indent=2, ensure_ascii=False), encoding="utf-8")

    return {
        "saved": True,
        "filename": source_file,
        "work_file": safe_name,
        "content": content,
    }


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/create_work_theme",
        vol.Required("filename"): str,
    }
)
@callback
def websocket_create_work_theme(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            result = await hass.async_add_executor_job(
                _create_work_theme_sync,
                hass,
                msg["filename"],
            )
            connection.send_result(msg["id"], result)
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/read_last_work_theme",
    }
)
@callback
def websocket_read_last_work_theme(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            result = await hass.async_add_executor_job(_read_last_work_theme_sync, hass)
            connection.send_result(msg["id"], result)
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "theme_generator/save_work_theme",
        vol.Required("work_file"): str,
        vol.Required("source_file"): str,
        vol.Required("content"): str,
    }
)
@callback
def websocket_save_work_theme(hass: HomeAssistant, connection, msg) -> None:
    async def _async_handle() -> None:
        try:
            result = await hass.async_add_executor_job(
                _save_work_theme_sync,
                hass,
                msg["work_file"],
                msg["source_file"],
                msg["content"],
            )
            connection.send_result(msg["id"], result)
        except Exception as err:
            connection.send_error(msg["id"], "theme_generator_error", str(err))

    hass.async_create_task(_async_handle())

