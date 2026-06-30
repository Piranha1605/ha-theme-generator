# HA Theme Generator

Home Assistant custom integration for editing theme YAML files directly from the sidebar.

## Features

- Sidebar panel
- Loads theme files from `/config/themes`
- Shows a clean default base theme on startup
- Automatically displays the selected theme file
- Save as new file
- Overwrite selected file
- Keeps YAML structure intact, including card-mod blocks, anchors, variables and variants

## Installation

Install through HACS as a custom repository:

```text
https://github.com/Piranha1605/ha-theme-generator

exit
mkdir -p custom_components/theme_generator/www
mkdir -p custom_components/theme_generator/translations

cat > custom_components/theme_generator/const.py <<'EOF'
DOMAIN = "theme_generator"

PANEL_FILENAME = "theme-generator-panel.js"
PANEL_TAG = "theme-generator-panel"
PANEL_TITLE = "Theme Generator"
PANEL_ICON = "mdi:palette"
PANEL_URL_PATH = "theme-generator"

THEMES_DIR = "themes"
