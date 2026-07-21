const HATG_VERSION = "0.1.7";

const HATG_MANIFEST = {
  "sections": [
    {
      "id": "grundfarben-text",
      "label": "Grundfarben & Text",
      "desc": "Zentrale Farben für Text, Akzent, Primärfarbe, Fehler, Erfolg, Warnungen und allgemeine Farbbasis.",
      "icon": "mdi:palette-outline",
      "keys": [
        "accent-color",
        "primary-color",
        "dark-primary-color",
        "light-primary-color",
        "primary-text-color",
        "secondary-text-color",
        "text-primary-color",
        "disabled-text-color",
        "disabled-color",
        "error-color",
        "warning-color",
        "success-color",
        "info-color",
        "red-color",
        "green-color",
        "blue-color",
        "orange-color",
        "yellow-color",
        "purple-color",
        "pink-color",
        "cyan-color",
        "grey-color",
        "deep-purple-color",
        "indigo-color",
        "light-blue-color",
        "teal-color",
        "light-green-color",
        "lime-color",
        "amber-color",
        "deep-orange-color",
        "brown-color",
        "light-grey-color",
        "dark-grey-color",
        "blue-grey-color",
        "black-color",
        "white-color",
        "printer-cyan-color",
        "printer-magenta-color",
        "printer-yellow-color"
      ]
    },
    {
      "id": "hintergruende-karten",
      "label": "HA-Grundgerüst",
      "desc": "Die komplette native Home-Assistant-Oberfläche in 16 Unterordnern: Card, Hintergründe, Theme, Header, App Drawer, Sidebar, Status/Icons, Schalter/Toggle/Slider, Buttons & Chips, Eingaben, Material/MDC, HA 2026, Abstände/Schatten, Schrift, RGB-Hilfswerte, Graphen & Energie.",
      "icon": "mdi:view-dashboard-outline",
      "keys": [
        "card-background-color",
        "ha-card-background",
        "ha-card-background-color",
        "wa-color-surface-raised",
        "ha-card-border-color",
        "ha-card-border-radius",
        "ha-card-border-width",
        "ha-card-box-shadow",
        "table-row-background-color",
        "table-row-alternative-background-color",
        "primary-background-color",
        "background-color",
        "lovelace-background",
        "secondary-background-color",
        "mdc-theme-background",
        "mdc-theme-surface",
        "mdc-theme-on-surface",
        "app-header-background-color",
        "app-header-text-color",
        "app-toolbar-background-color",
        "toolbar-background-color",
        "app-toolbar-text-color",
        "toolbar-text-color",
        "app-drawer-background-color",
        "app-drawer-text-color",
        "app-drawer-icon-color",
        "sidebar-background-color",
        "sidebar-selected-background-color",
        "sidebar-text-color",
        "sidebar-icon-color",
        "sidebar-selected-text-color",
        "sidebar-selected-icon-color",
        "state-icon-color",
        "state-icon-active-color",
        "state-icon-unavailable-color",
        "state-active-color",
        "state-inactive-color",
        "state-unavailable-color",
        "state-on-color",
        "state-off-color",
        "state-light-color",
        "state-light-active-color",
        "state-light-on-color",
        "state-switch-color",
        "state-switch-active-color",
        "state-switch-on-color",
        "state-climate-cool-color",
        "state-climate-heat-color",
        "state-climate-auto-color",
        "state-climate-dry-color",
        "state-climate-fan_only-color",
        "state-climate-heat_cool-color",
        "state-cover-color",
        "state-cover-active-color",
        "state-cover-open-color",
        "state-cover-closed-color",
        "state-fan-color",
        "state-fan-active-color",
        "state-media_player-color",
        "state-media_player-active-color",
        "state-vacuum-color",
        "state-vacuum-active-color",
        "state-vacuum-error-color",
        "state-lock-locked-color",
        "state-lock-locking-color",
        "state-lock-unlocked-color",
        "state-lock-unlocking-color",
        "state-lock-jammed-color",
        "state-lock-open-color",
        "state-lock-opening-color",
        "state-alarm_control_panel-triggered-color",
        "state-alarm-triggered-color",
        "state-alarm_control_panel-armed_home-color",
        "state-alarm_control_panel-armed_away-color",
        "state-alarm-armed-color",
        "state-alarm_control_panel-disarmed-color",
        "state-alarm-disarmed-color",
        "state-alarm_control_panel-armed_custom_bypass-color",
        "state-alarm_control_panel-armed_night-color",
        "state-alarm_control_panel-armed_vacation-color",
        "state-alarm_control_panel-arming-color",
        "state-alarm_control_panel-disarming-color",
        "state-alarm_control_panel-pending-color",
        "state-alert-off-color",
        "state-alert-on-color",
        "state-binary_sensor-active-color",
        "state-binary_sensor-battery-on-color",
        "state-binary_sensor-carbon_monoxide-on-color",
        "state-binary_sensor-gas-on-color",
        "state-binary_sensor-heat-on-color",
        "state-binary_sensor-lock-on-color",
        "state-binary_sensor-moisture-on-color",
        "state-binary_sensor-problem-on-color",
        "state-binary_sensor-safety-on-color",
        "state-binary_sensor-smoke-on-color",
        "state-binary_sensor-sound-on-color",
        "state-binary_sensor-tamper-on-color",
        "state-device_tracker-active-color",
        "state-device_tracker-home-color",
        "state-humidifier-on-color",
        "state-lawn_mower-active-color",
        "state-lawn_mower-error-color",
        "state-person-active-color",
        "state-person-home-color",
        "state-plant-active-color",
        "state-siren-active-color",
        "state-sun-above_horizon-color",
        "state-sun-below_horizon-color",
        "state-update-active-color",
        "state-valve-active-color",
        "state-water_heater-eco-color",
        "state-water_heater-electric-color",
        "state-water_heater-gas-color",
        "state-water_heater-heat_pump-color",
        "state-water_heater-high_demand-color",
        "state-water_heater-performance-color",
        "state-weather-clear_night-color",
        "state-weather-cloudy-color",
        "state-weather-exceptional-color",
        "state-weather-fog-color",
        "state-weather-hail-color",
        "state-weather-lightning_rainy-color",
        "state-weather-lightning-color",
        "state-weather-partlycloudy-color",
        "state-weather-pouring-color",
        "state-weather-rainy-color",
        "state-weather-snowy_rainy-color",
        "state-weather-snowy-color",
        "state-weather-sunny-color",
        "state-weather-windy_variant-color",
        "state-weather-windy-color",
        "state-battery-low-color",
        "state-sensor-battery-high-color",
        "state-sensor-battery-medium-color",
        "state-sensor-battery-low-color",
        "label-badge-background-color",
        "label-badge-text-color",
        "label-badge-red",
        "label-badge-blue",
        "label-badge-green",
        "label-badge-yellow",
        "state-battery-alert-color",
        "ha-control-switch-color",
        "ha-control-switch-checked-color",
        "ha-control-switch-unchecked-color",
        "ha-switch-background-color",
        "ha-switch-background-color-hover",
        "ha-switch-border-color",
        "ha-switch-thumb-background-color",
        "ha-switch-thumb-background-color-hover",
        "ha-switch-thumb-border-color",
        "ha-switch-thumb-border-color-hover",
        "ha-switch-checked-background-color",
        "ha-switch-checked-background-color-hover",
        "ha-switch-checked-border-color",
        "ha-switch-checked-thumb-background-color",
        "ha-switch-checked-thumb-background-color-hover",
        "ha-switch-checked-thumb-border-color",
        "ha-switch-checked-thumb-border-color-hover",
        "control-slider-color",
        "slider-color",
        "slider-secondary-color",
        "slider-track-color",
        "control-button-background-color",
        "control-button-icon-color",
        "control-button-border-radius",
        "input-background-color",
        "input-fill-color",
        "input-disabled-fill-color",
        "input-disabled-ink-color",
        "input-disabled-label-ink-color",
        "input-disabled-line-color",
        "input-dropdown-icon-color",
        "input-hover-line-color",
        "input-idle-line-color",
        "input-ink-color",
        "input-label-ink-color",
        "input-outlined-disabled-border-color",
        "mdc-select-idle-line-color",
        "mdc-select-dropdown-icon-color",
        "mdc-select-hover-line-color",
        "mdc-text-field-idle-line-color",
        "mdc-text-field-hover-line-color",
        "ha-color-form-background",
        "ha-color-form-background-hover",
        "ha-color-form-background-disabled",
        "mdc-theme-primary",
        "mdc-theme-secondary",
        "mdc-theme-on-primary",
        "md-sys-color-primary",
        "md-sys-color-on-primary",
        "md-sys-color-primary-container",
        "md-sys-color-on-primary-container",
        "md-sys-color-on-surface",
        "ha-on-surface-color",
        "md-radio-selected-icon-color",
        "mdc-radio-unchecked-color",
        "ha-color-fill-primary-normal-resting",
        "ha-color-fill-primary-normal-hover",
        "ha-color-fill-primary-quiet-resting",
        "ha-color-fill-primary-quiet-hover",
        "ha-color-fill-disabled-normal-resting",
        "ha-color-on-disabled-normal",
        "ha-color-fill-disabled-loud-resting",
        "ha-color-on-disabled-loud",
        "ha-color-on-disabled-quiet",
        "ha-color-fill-neutral-quiet-resting",
        "ha-color-fill-neutral-quiet-hover",
        "ha-color-fill-neutral-quiet-active",
        "ha-color-fill-neutral-normal-resting",
        "ha-color-fill-neutral-normal-hover",
        "ha-color-fill-neutral-normal-active",
        "ha-color-fill-danger-normal-resting",
        "ha-color-fill-danger-normal-hover",
        "ha-color-fill-danger-normal-active",
        "ha-color-on-danger-normal",
        "ha-color-fill-warning-normal-resting",
        "ha-color-fill-warning-normal-hover",
        "ha-color-fill-warning-normal-active",
        "ha-color-on-warning-normal",
        "ha-tooltip-background-color",
        "ha-tooltip-text-color",
        "border-color",
        "border-radius",
        "box-shadow",
        "divider-color",
        "outline-color",
        "outline-variant-color",
        "outline-hover-color",
        "ha-line-height-condensed",
        "ha-line-height-expanded",
        "ha-line-height-normal",
        "primary-font-family",
        "ha-font-family-body",
        "ha-font-family-heading",
        "ha-font-family-longform",
        "ha-font-family-code",
        "mdc-typography-font-family",
        "ha-font-size-scale",
        "ha-font-size-2xs",
        "ha-font-size-xs",
        "ha-font-size-s",
        "ha-font-size-m",
        "ha-font-size-l",
        "ha-font-size-xl",
        "ha-font-size-2xl",
        "ha-font-size-3xl",
        "ha-font-size-4xl",
        "ha-font-weight-light",
        "ha-font-weight-normal",
        "ha-font-weight-body",
        "ha-font-weight-medium",
        "ha-font-weight-heading",
        "ha-font-weight-action",
        "ha-font-weight-bold",
        "rgb-primary-color",
        "rgb-accent-color",
        "rgb-primary-text-color",
        "rgb-secondary-text-color",
        "rgb-card-background-color",
        "rgb-primary-background-color",
        "rgb-blue-color",
        "rgb-orange-color",
        "rgb-state-switch-color",
        "rgb-state-light-color",
        "rgb-state-cover-color",
        "rgb-state-fan-color",
        "rgb-state-media_player-color",
        "graph-color-1",
        "graph-color-2",
        "graph-color-3",
        "graph-color-4",
        "graph-color-5",
        "graph-color-6",
        "graph-color-7",
        "graph-color-8",
        "graph-color-9",
        "graph-color-10",
        "graph-color-11",
        "graph-color-12",
        "graph-color-13",
        "graph-color-14",
        "color-1",
        "color-2",
        "color-3",
        "color-4",
        "color-5",
        "color-6",
        "color-7",
        "color-8",
        "color-9",
        "color-10",
        "color-11",
        "color-12",
        "color-13",
        "color-14",
        "energy-grid-consumption-color",
        "energy-grid-return-color",
        "energy-solar-color",
        "energy-non-fossil-color",
        "energy-battery-out-color",
        "energy-battery-in-color",
        "energy-gas-color",
        "energy-water-color"
      ],
      "groups": [
        {
          "label": "Card",
          "keys": [
            "card-background-color",
            "ha-card-background",
            "ha-card-background-color",
            "wa-color-surface-raised",
            "ha-card-border-color",
            "ha-card-border-radius",
            "ha-card-border-width",
            "ha-card-box-shadow",
            "table-row-background-color",
            "table-row-alternative-background-color"
          ],
          "id": "hintergruende-karten__card",
          "icon": "mdi:card-outline"
        },
        {
          "label": "Hintergründe",
          "keys": [
            "primary-background-color",
            "background-color",
            "lovelace-background",
            "secondary-background-color"
          ],
          "id": "hintergruende-karten__hintergruende",
          "icon": "mdi:image-outline"
        },
        {
          "label": "Theme",
          "keys": [
            "mdc-theme-background",
            "mdc-theme-surface",
            "mdc-theme-on-surface"
          ],
          "id": "hintergruende-karten__theme",
          "icon": "mdi:palette-swatch-outline"
        },
        {
          "label": "Header",
          "keys": [
            "app-header-background-color",
            "app-header-text-color",
            "app-toolbar-background-color",
            "toolbar-background-color",
            "app-toolbar-text-color",
            "toolbar-text-color"
          ],
          "id": "hintergruende-karten__header",
          "icon": "mdi:page-layout-header"
        },
        {
          "label": "App Drawer",
          "keys": [
            "app-drawer-background-color",
            "app-drawer-text-color",
            "app-drawer-icon-color"
          ],
          "id": "hintergruende-karten__app-drawer",
          "icon": "mdi:drawer"
        },
        {
          "label": "Sidebar",
          "keys": [
            "sidebar-background-color",
            "sidebar-selected-background-color",
            "sidebar-text-color",
            "sidebar-icon-color",
            "sidebar-selected-text-color",
            "sidebar-selected-icon-color"
          ],
          "id": "hintergruende-karten__sidebar",
          "icon": "mdi:dock-left"
        },
        {
          "label": "Status, Icons & Entitäten",
          "keys": [
            "state-icon-color",
            "state-icon-active-color",
            "state-icon-unavailable-color",
            "state-active-color",
            "state-inactive-color",
            "state-unavailable-color",
            "state-on-color",
            "state-off-color",
            "state-light-color",
            "state-light-active-color",
            "state-light-on-color",
            "state-switch-color",
            "state-switch-active-color",
            "state-switch-on-color",
            "state-climate-cool-color",
            "state-climate-heat-color",
            "state-climate-auto-color",
            "state-climate-dry-color",
            "state-climate-fan_only-color",
            "state-climate-heat_cool-color",
            "state-cover-color",
            "state-cover-active-color",
            "state-cover-open-color",
            "state-cover-closed-color",
            "state-fan-color",
            "state-fan-active-color",
            "state-media_player-color",
            "state-media_player-active-color",
            "state-vacuum-color",
            "state-vacuum-active-color",
            "state-vacuum-error-color",
            "state-lock-locked-color",
            "state-lock-locking-color",
            "state-lock-unlocked-color",
            "state-lock-unlocking-color",
            "state-lock-jammed-color",
            "state-lock-open-color",
            "state-lock-opening-color",
            "state-alarm_control_panel-triggered-color",
            "state-alarm-triggered-color",
            "state-alarm_control_panel-armed_home-color",
            "state-alarm_control_panel-armed_away-color",
            "state-alarm-armed-color",
            "state-alarm_control_panel-disarmed-color",
            "state-alarm-disarmed-color",
            "state-alarm_control_panel-armed_custom_bypass-color",
            "state-alarm_control_panel-armed_night-color",
            "state-alarm_control_panel-armed_vacation-color",
            "state-alarm_control_panel-arming-color",
            "state-alarm_control_panel-disarming-color",
            "state-alarm_control_panel-pending-color",
            "state-alert-off-color",
            "state-alert-on-color",
            "state-binary_sensor-active-color",
            "state-binary_sensor-battery-on-color",
            "state-binary_sensor-carbon_monoxide-on-color",
            "state-binary_sensor-gas-on-color",
            "state-binary_sensor-heat-on-color",
            "state-binary_sensor-lock-on-color",
            "state-binary_sensor-moisture-on-color",
            "state-binary_sensor-problem-on-color",
            "state-binary_sensor-safety-on-color",
            "state-binary_sensor-smoke-on-color",
            "state-binary_sensor-sound-on-color",
            "state-binary_sensor-tamper-on-color",
            "state-device_tracker-active-color",
            "state-device_tracker-home-color",
            "state-humidifier-on-color",
            "state-lawn_mower-active-color",
            "state-lawn_mower-error-color",
            "state-person-active-color",
            "state-person-home-color",
            "state-plant-active-color",
            "state-siren-active-color",
            "state-sun-above_horizon-color",
            "state-sun-below_horizon-color",
            "state-update-active-color",
            "state-valve-active-color",
            "state-water_heater-eco-color",
            "state-water_heater-electric-color",
            "state-water_heater-gas-color",
            "state-water_heater-heat_pump-color",
            "state-water_heater-high_demand-color",
            "state-water_heater-performance-color",
            "state-weather-clear_night-color",
            "state-weather-cloudy-color",
            "state-weather-exceptional-color",
            "state-weather-fog-color",
            "state-weather-hail-color",
            "state-weather-lightning_rainy-color",
            "state-weather-lightning-color",
            "state-weather-partlycloudy-color",
            "state-weather-pouring-color",
            "state-weather-rainy-color",
            "state-weather-snowy_rainy-color",
            "state-weather-snowy-color",
            "state-weather-sunny-color",
            "state-weather-windy_variant-color",
            "state-weather-windy-color",
            "state-battery-low-color",
            "state-sensor-battery-high-color",
            "state-sensor-battery-medium-color",
            "state-sensor-battery-low-color",
            "label-badge-background-color",
            "label-badge-text-color",
            "label-badge-red",
            "label-badge-blue",
            "label-badge-green",
            "label-badge-yellow",
            "state-battery-alert-color"
          ],
          "id": "hintergruende-karten__status-icons-entitaeten",
          "icon": "mdi:emoticon-outline"
        },
        {
          "label": "Schalter, Toggle & Slider",
          "keys": [
            "ha-control-switch-color",
            "ha-control-switch-checked-color",
            "ha-control-switch-unchecked-color",
            "ha-switch-background-color",
            "ha-switch-background-color-hover",
            "ha-switch-border-color",
            "ha-switch-thumb-background-color",
            "ha-switch-thumb-background-color-hover",
            "ha-switch-thumb-border-color",
            "ha-switch-thumb-border-color-hover",
            "ha-switch-checked-background-color",
            "ha-switch-checked-background-color-hover",
            "ha-switch-checked-border-color",
            "ha-switch-checked-thumb-background-color",
            "ha-switch-checked-thumb-background-color-hover",
            "ha-switch-checked-thumb-border-color",
            "ha-switch-checked-thumb-border-color-hover",
            "control-slider-color",
            "slider-color",
            "slider-secondary-color",
            "slider-track-color"
          ],
          "id": "hintergruende-karten__schalter-toggle-slider",
          "icon": "mdi:toggle-switch-outline"
        },
        {
          "label": "Buttons & Chips",
          "keys": [
            "control-button-background-color",
            "control-button-icon-color",
            "control-button-border-radius"
          ],
          "id": "hintergruende-karten__buttons-chips",
          "icon": "mdi:gesture-tap-button"
        },
        {
          "label": "Eingaben & Auswahlfelder",
          "keys": [
            "input-background-color",
            "input-fill-color",
            "input-disabled-fill-color",
            "input-disabled-ink-color",
            "input-disabled-label-ink-color",
            "input-disabled-line-color",
            "input-dropdown-icon-color",
            "input-hover-line-color",
            "input-idle-line-color",
            "input-ink-color",
            "input-label-ink-color",
            "input-outlined-disabled-border-color",
            "mdc-select-idle-line-color",
            "mdc-select-dropdown-icon-color",
            "mdc-select-hover-line-color",
            "mdc-text-field-idle-line-color",
            "mdc-text-field-hover-line-color",
            "ha-color-form-background",
            "ha-color-form-background-hover",
            "ha-color-form-background-disabled"
          ],
          "id": "hintergruende-karten__eingaben-auswahlfelder",
          "icon": "mdi:form-select"
        },
        {
          "label": "Material, Paper & MDC",
          "keys": [
            "mdc-theme-primary",
            "mdc-theme-secondary",
            "mdc-theme-on-primary",
            "md-sys-color-primary",
            "md-sys-color-on-primary",
            "md-sys-color-primary-container",
            "md-sys-color-on-primary-container",
            "md-sys-color-on-surface",
            "ha-on-surface-color",
            "md-radio-selected-icon-color",
            "mdc-radio-unchecked-color"
          ],
          "id": "hintergruende-karten__material-paper-mdc",
          "icon": "mdi:material-design"
        },
        {
          "label": "HA 2026 / Web Awesome",
          "keys": [
            "ha-color-fill-primary-normal-resting",
            "ha-color-fill-primary-normal-hover",
            "ha-color-fill-primary-quiet-resting",
            "ha-color-fill-primary-quiet-hover",
            "ha-color-fill-disabled-normal-resting",
            "ha-color-on-disabled-normal",
            "ha-color-fill-disabled-loud-resting",
            "ha-color-on-disabled-loud",
            "ha-color-on-disabled-quiet",
            "ha-color-fill-neutral-quiet-resting",
            "ha-color-fill-neutral-quiet-hover",
            "ha-color-fill-neutral-quiet-active",
            "ha-color-fill-neutral-normal-resting",
            "ha-color-fill-neutral-normal-hover",
            "ha-color-fill-neutral-normal-active",
            "ha-color-fill-danger-normal-resting",
            "ha-color-fill-danger-normal-hover",
            "ha-color-fill-danger-normal-active",
            "ha-color-on-danger-normal",
            "ha-color-fill-warning-normal-resting",
            "ha-color-fill-warning-normal-hover",
            "ha-color-fill-warning-normal-active",
            "ha-color-on-warning-normal",
            "ha-tooltip-background-color",
            "ha-tooltip-text-color"
          ],
          "id": "hintergruende-karten__ha-2026-web-awesome",
          "icon": "mdi:web"
        },
        {
          "label": "Abstände, Rundungen, Schatten & Rahmen",
          "keys": [
            "border-color",
            "border-radius",
            "box-shadow",
            "divider-color",
            "outline-color",
            "outline-variant-color",
            "outline-hover-color",
            "ha-line-height-condensed",
            "ha-line-height-expanded",
            "ha-line-height-normal"
          ],
          "id": "hintergruende-karten__abstaende-rundungen-schatten-rahmen",
          "icon": "mdi:square-rounded-outline"
        },
        {
          "label": "Schrift & Typografie",
          "keys": [
            "primary-font-family",
            "ha-font-family-body",
            "ha-font-family-heading",
            "ha-font-family-longform",
            "ha-font-family-code",
            "mdc-typography-font-family",
            "ha-font-size-scale",
            "ha-font-size-2xs",
            "ha-font-size-xs",
            "ha-font-size-s",
            "ha-font-size-m",
            "ha-font-size-l",
            "ha-font-size-xl",
            "ha-font-size-2xl",
            "ha-font-size-3xl",
            "ha-font-size-4xl",
            "ha-font-weight-light",
            "ha-font-weight-normal",
            "ha-font-weight-body",
            "ha-font-weight-medium",
            "ha-font-weight-heading",
            "ha-font-weight-action",
            "ha-font-weight-bold"
          ],
          "id": "hintergruende-karten__schrift-typografie",
          "icon": "mdi:format-font"
        },
        {
          "label": "RGB-Hilfswerte",
          "keys": [
            "rgb-primary-color",
            "rgb-accent-color",
            "rgb-primary-text-color",
            "rgb-secondary-text-color",
            "rgb-card-background-color",
            "rgb-primary-background-color",
            "rgb-blue-color",
            "rgb-orange-color",
            "rgb-state-switch-color",
            "rgb-state-light-color",
            "rgb-state-cover-color",
            "rgb-state-fan-color",
            "rgb-state-media_player-color"
          ],
          "id": "hintergruende-karten__rgb-hilfswerte",
          "icon": "mdi:invert-colors"
        },
        {
          "label": "Graphen & Energie",
          "keys": [
            "graph-color-1",
            "graph-color-2",
            "graph-color-3",
            "graph-color-4",
            "graph-color-5",
            "graph-color-6",
            "graph-color-7",
            "graph-color-8",
            "graph-color-9",
            "graph-color-10",
            "graph-color-11",
            "graph-color-12",
            "graph-color-13",
            "graph-color-14",
            "color-1",
            "color-2",
            "color-3",
            "color-4",
            "color-5",
            "color-6",
            "color-7",
            "color-8",
            "color-9",
            "color-10",
            "color-11",
            "color-12",
            "color-13",
            "color-14",
            "energy-grid-consumption-color",
            "energy-grid-return-color",
            "energy-solar-color",
            "energy-non-fossil-color",
            "energy-battery-out-color",
            "energy-battery-in-color",
            "energy-gas-color",
            "energy-water-color"
          ],
          "id": "hintergruende-karten__graphen-energie",
          "icon": "mdi:chart-line"
        }
      ]
    },
    {
      "id": "bubble-card",
      "label": "Bubble Card",
      "desc": "Alle Bubble-Card-Werte an einem Ort, in 9 Unterordnern: Karten & Hintergründe, Buttons, Sub-Buttons, Separator, Popup & Dialog, Horizontal Buttons Stack, Climate, Cover, Media Player.",
      "icon": "mdi:circle-multiple-outline",
      "keys": [
        "bubble-card-background-color",
        "bubble-main-buttons-background-color",
        "bubble-secondary-background-color",
        "bubble-icon-background-color",
        "bubble-icon-color",
        "bubble-name-color",
        "bubble-state-color",
        "bubble-accent-color",
        "bubble-active-color",
        "bubble-toggle-color",
        "bubble-line-background-color",
        "bubble-border",
        "bubble-border-color",
        "bubble-border-radius",
        "bubble-box-shadow",
        "bubble-card-border-radius",
        "bubble-select-border-radius",
        "bubble-icon-border-radius",
        "bubble-button-background-color",
        "bubble-button-active-background-color",
        "bubble-button-icon-color",
        "bubble-button-active-icon-color",
        "bubble-button-text-color",
        "bubble-button-active-text-color",
        "bubble-button-border-radius",
        "bubble-button-card-background-color",
        "bubble-button-main-background-color",
        "bubble-button-active-color",
        "bubble-sub-button-background-color",
        "bubble-sub-button-active-background-color",
        "bubble-sub-button-icon-color",
        "bubble-sub-button-active-icon-color",
        "bubble-sub-button-text-color",
        "bubble-sub-button-active-text-color",
        "bubble-sub-button-border-radius",
        "bubble-sub-button-box-shadow",
        "bubble-sub-buttons-main-background-color",
        "bubble-separator-background-color",
        "bubble-separator-icon-background-color",
        "bubble-separator-icon-color",
        "bubble-separator-line-color",
        "bubble-separator-name-color",
        "bubble-separator-text-color",
        "bubble-separator-border-radius",
        "bubble-pop-up-background-color",
        "bubble-pop-up-backdrop-filter",
        "bubble-pop-up-border-radius",
        "bubble-pop-up-box-shadow",
        "dialog-box-shadow",
        "more-info-header-background",
        "more-info-header-color",
        "popup-border-radius",
        "ha-dialog-scrim-backdrop-filter",
        "ha-dialog-surface-background",
        "mdc-dialog-scrim-color",
        "bubble-horizontal-buttons-stack-background-color",
        "bubble-horizontal-buttons-stack-button-background-color",
        "bubble-horizontal-buttons-stack-button-icon-color",
        "bubble-horizontal-buttons-stack-button-text-color",
        "bubble-horizontal-buttons-stack-border-radius",
        "bubble-horizontal-buttons-stack-box-shadow",
        "bubble-climate-background-color",
        "bubble-climate-main-background-color",
        "bubble-climate-button-background-color",
        "bubble-climate-button-icon-color",
        "bubble-climate-border-radius",
        "bubble-climate-box-shadow",
        "bubble-climate-icon-border-radius",
        "bubble-cover-background-color",
        "bubble-cover-main-background-color",
        "bubble-cover-button-background-color",
        "bubble-cover-button-icon-color",
        "bubble-cover-border-radius",
        "bubble-cover-box-shadow",
        "bubble-media-player-background-color",
        "bubble-media-player-main-background-color",
        "bubble-media-player-button-background-color",
        "bubble-media-player-button-icon-color",
        "bubble-media-player-border-radius",
        "bubble-media-player-box-shadow"
      ],
      "groups": [
        {
          "label": "Karten & Hintergründe",
          "keys": [
            "bubble-card-background-color",
            "bubble-main-buttons-background-color",
            "bubble-secondary-background-color",
            "bubble-icon-background-color",
            "bubble-icon-color",
            "bubble-name-color",
            "bubble-state-color",
            "bubble-accent-color",
            "bubble-active-color",
            "bubble-toggle-color",
            "bubble-line-background-color",
            "bubble-border",
            "bubble-border-color",
            "bubble-border-radius",
            "bubble-box-shadow",
            "bubble-card-border-radius",
            "bubble-select-border-radius",
            "bubble-icon-border-radius"
          ],
          "id": "bubble-card__karten-hintergruende",
          "icon": "mdi:card-outline"
        },
        {
          "label": "Buttons",
          "keys": [
            "bubble-button-background-color",
            "bubble-button-active-background-color",
            "bubble-button-icon-color",
            "bubble-button-active-icon-color",
            "bubble-button-text-color",
            "bubble-button-active-text-color",
            "bubble-button-border-radius",
            "bubble-button-card-background-color",
            "bubble-button-main-background-color",
            "bubble-button-active-color"
          ],
          "id": "bubble-card__buttons",
          "icon": "mdi:gesture-tap-button"
        },
        {
          "label": "Sub-Buttons",
          "keys": [
            "bubble-sub-button-background-color",
            "bubble-sub-button-active-background-color",
            "bubble-sub-button-icon-color",
            "bubble-sub-button-active-icon-color",
            "bubble-sub-button-text-color",
            "bubble-sub-button-active-text-color",
            "bubble-sub-button-border-radius",
            "bubble-sub-button-box-shadow",
            "bubble-sub-buttons-main-background-color"
          ],
          "id": "bubble-card__sub-buttons",
          "icon": "mdi:dots-horizontal-circle-outline"
        },
        {
          "label": "Separator",
          "keys": [
            "bubble-separator-background-color",
            "bubble-separator-icon-background-color",
            "bubble-separator-icon-color",
            "bubble-separator-line-color",
            "bubble-separator-name-color",
            "bubble-separator-text-color",
            "bubble-separator-border-radius"
          ],
          "id": "bubble-card__separator",
          "icon": "mdi:minus"
        },
        {
          "label": "Popup & Dialog",
          "keys": [
            "bubble-pop-up-background-color",
            "bubble-pop-up-backdrop-filter",
            "bubble-pop-up-border-radius",
            "bubble-pop-up-box-shadow",
            "dialog-box-shadow",
            "more-info-header-background",
            "more-info-header-color",
            "popup-border-radius",
            "ha-dialog-scrim-backdrop-filter",
            "ha-dialog-surface-background",
            "mdc-dialog-scrim-color"
          ],
          "id": "bubble-card__popup-dialog",
          "icon": "mdi:window-maximize"
        },
        {
          "label": "Horizontal Buttons Stack",
          "keys": [
            "bubble-horizontal-buttons-stack-background-color",
            "bubble-horizontal-buttons-stack-button-background-color",
            "bubble-horizontal-buttons-stack-button-icon-color",
            "bubble-horizontal-buttons-stack-button-text-color",
            "bubble-horizontal-buttons-stack-border-radius",
            "bubble-horizontal-buttons-stack-box-shadow"
          ],
          "id": "bubble-card__horizontal-buttons-stack",
          "icon": "mdi:view-sequential"
        },
        {
          "label": "Climate",
          "keys": [
            "bubble-climate-background-color",
            "bubble-climate-main-background-color",
            "bubble-climate-button-background-color",
            "bubble-climate-button-icon-color",
            "bubble-climate-border-radius",
            "bubble-climate-box-shadow",
            "bubble-climate-icon-border-radius"
          ],
          "id": "bubble-card__climate",
          "icon": "mdi:thermostat"
        },
        {
          "label": "Cover",
          "keys": [
            "bubble-cover-background-color",
            "bubble-cover-main-background-color",
            "bubble-cover-button-background-color",
            "bubble-cover-button-icon-color",
            "bubble-cover-border-radius",
            "bubble-cover-box-shadow"
          ],
          "id": "bubble-card__cover",
          "icon": "mdi:window-shutter"
        },
        {
          "label": "Media Player",
          "keys": [
            "bubble-media-player-background-color",
            "bubble-media-player-main-background-color",
            "bubble-media-player-button-background-color",
            "bubble-media-player-button-icon-color",
            "bubble-media-player-border-radius",
            "bubble-media-player-box-shadow"
          ],
          "id": "bubble-card__media-player",
          "icon": "mdi:play-circle-outline"
        }
      ]
    },
    {
      "id": "mushroom",
      "label": "Mushroom",
      "desc": "Alle Mushroom-Werte an einem Ort, in 6 Unterordnern: Karten & Hintergründe, Icons, Toggle, Slider, Chips, RGB-Hilfswerte.",
      "icon": "mdi:mushroom-outline",
      "keys": [
        "mush-card-background",
        "mush-control-background-color",
        "mush-card-primary-color",
        "mush-card-secondary-color",
        "mush-title-color",
        "mush-subtitle-color",
        "mush-icon-background-color",
        "mush-icon-color",
        "mush-icon-active-color",
        "mush-toggle-color",
        "mush-toggle-background-color",
        "mush-slider-color",
        "mush-slider-track-color",
        "mush-slider-background-color",
        "mush-chip-background",
        "mush-chip-active-background",
        "mush-chip-color",
        "mush-chip-icon-color",
        "mush-chip-active-color",
        "mush-chip-active-icon-color",
        "mush-chip-border-color",
        "mush-chip-border-radius",
        "mush-chip-font-size",
        "mush-rgb-primary-text-color",
        "mush-rgb-secondary-text-color",
        "mush-rgb-state-switch",
        "mush-rgb-state-light",
        "mush-rgb-state-cover",
        "mush-rgb-state-entity",
        "mush-rgb-state-fan",
        "mush-rgb-state-media-player",
        "mush-rgb-state-vacuum",
        "mush-rgb-success",
        "mush-rgb-warning",
        "mush-rgb-danger",
        "mush-rgb-disabled",
        "mush-rgb-info"
      ],
      "groups": [
        {
          "label": "Karten & Hintergründe",
          "keys": [
            "mush-card-background",
            "mush-control-background-color",
            "mush-card-primary-color",
            "mush-card-secondary-color",
            "mush-title-color",
            "mush-subtitle-color"
          ],
          "id": "mushroom__karten-hintergruende",
          "icon": "mdi:card-outline"
        },
        {
          "label": "Icons",
          "keys": [
            "mush-icon-background-color",
            "mush-icon-color",
            "mush-icon-active-color"
          ],
          "id": "mushroom__icons",
          "icon": "mdi:shape-outline"
        },
        {
          "label": "Toggle",
          "keys": [
            "mush-toggle-color",
            "mush-toggle-background-color"
          ],
          "id": "mushroom__toggle",
          "icon": "mdi:toggle-switch-outline"
        },
        {
          "label": "Slider",
          "keys": [
            "mush-slider-color",
            "mush-slider-track-color",
            "mush-slider-background-color"
          ],
          "id": "mushroom__slider",
          "icon": "mdi:tune-variant"
        },
        {
          "label": "Chips",
          "keys": [
            "mush-chip-background",
            "mush-chip-active-background",
            "mush-chip-color",
            "mush-chip-icon-color",
            "mush-chip-active-color",
            "mush-chip-active-icon-color",
            "mush-chip-border-color",
            "mush-chip-border-radius",
            "mush-chip-font-size"
          ],
          "id": "mushroom__chips",
          "icon": "mdi:label-outline"
        },
        {
          "label": "RGB-Hilfswerte",
          "keys": [
            "mush-rgb-primary-text-color",
            "mush-rgb-secondary-text-color",
            "mush-rgb-state-switch",
            "mush-rgb-state-light",
            "mush-rgb-state-cover",
            "mush-rgb-state-entity",
            "mush-rgb-state-fan",
            "mush-rgb-state-media-player",
            "mush-rgb-state-vacuum",
            "mush-rgb-success",
            "mush-rgb-warning",
            "mush-rgb-danger",
            "mush-rgb-disabled",
            "mush-rgb-info"
          ],
          "id": "mushroom__rgb-hilfswerte",
          "icon": "mdi:invert-colors"
        }
      ]
    },
    {
      "id": "card-mod-generator",
      "label": "Card-mod & Generator",
      "desc": "Interne Generatorwerte und card-mod-Blöcke.",
      "icon": "mdi:code-braces",
      "keys": [
        "card-mod-theme",
        "card-mod-card-yaml",
        "card-backdrop-blur"
      ]
    }
  ],
  "light": {
    "accent-color": "#ff9300",
    "primary-color": "#ff9300",
    "dark-primary-color": "#F9F9FB",
    "light-primary-color": "#E5F1FF",
    "primary-text-color": "#1C1C1E",
    "secondary-text-color": "#3C3C43",
    "text-primary-color": "#FFFFFF",
    "disabled-text-color": "#8E8E93",
    "error-color": "#FF3B30",
    "warning-color": "#FFCC00",
    "success-color": "#34C759",
    "info-color": "#007AFF",
    "red-color": "#FF3B30",
    "green-color": "#34C759",
    "blue-color": "#007AFF",
    "orange-color": "#FF9500",
    "yellow-color": "#FFCC00",
    "purple-color": "#AF52DE",
    "pink-color": "#FF2D55",
    "cyan-color": "#5AC8FA",
    "grey-color": "#3C3C43",
    "black-color": "#000000",
    "white-color": "#FFFFFF",
    "primary-background-color": "#F2F2F7",
    "background-color": "#F2F2F7",
    "lovelace-background": "#F2F2F7",
    "secondary-background-color": "#F9F9FB",
    "card-background-color": "#FFFFFF",
    "ha-card-background": "#FFFFFF",
    "ha-card-background-color": "#FFFFFF",
    "table-row-background-color": "#F9F9FB",
    "table-row-alternative-background-color": "#FFFFFF",
    "app-header-background-color": "#FFFFFF",
    "app-toolbar-background-color": "#FFFFFF",
    "toolbar-background-color": "#FFFFFF",
    "app-drawer-background-color": "#FFFFFF",
    "sidebar-background-color": "#FFFFFF",
    "sidebar-selected-background-color": "#E5F1FF",
    "mdc-theme-background": "#F2F2F7",
    "mdc-theme-surface": "#FFFFFF",
    "mdc-theme-on-surface": "#1C1C1E",
    "wa-color-surface-raised": "#FFFFFF",
    "app-header-text-color": "#1C1C1E",
    "app-toolbar-text-color": "#1C1C1E",
    "toolbar-text-color": "#1C1C1E",
    "app-drawer-text-color": "#3C3C43",
    "app-drawer-icon-color": "#007AFF",
    "sidebar-text-color": "#3C3C43",
    "sidebar-icon-color": "rgba(33, 33, 33, 0.6)",
    "sidebar-selected-text-color": "#1C1C1E",
    "sidebar-selected-icon-color": "#007AFF",
    "state-icon-color": "#007AFF",
    "state-icon-active-color": "#007AFF",
    "state-icon-unavailable-color": "#FFFFFF",
    "state-active-color": "#007AFF",
    "state-inactive-color": "#FFFFFF",
    "state-unavailable-color": "#FFFFFF",
    "state-on-color": "#34C759",
    "state-off-color": "#FFFFFF",
    "state-light-color": "#007AFF",
    "state-light-active-color": "#007AFF",
    "state-light-on-color": "#ff9300",
    "state-switch-color": "#007AFF",
    "state-switch-active-color": "#007AFF",
    "state-switch-on-color": "#007AFF",
    "state-climate-cool-color": "#007AFF",
    "state-climate-heat-color": "#ff2600",
    "state-climate-auto-color": "#007AFF",
    "state-cover-color": "#007AFF",
    "state-cover-active-color": "#007AFF",
    "state-cover-open-color": "#929000",
    "state-cover-closed-color": "#ff2600",
    "state-fan-color": "#007AFF",
    "state-fan-active-color": "#007AFF",
    "state-media_player-color": "#007AFF",
    "state-vacuum-color": "#007AFF",
    "state-vacuum-active-color": "#007AFF",
    "state-lock-locked-color": "#007AFF",
    "state-lock-locking-color": "#ff2600",
    "state-lock-unlocked-color": "#007AFF",
    "state-lock-unlocking-color": "#929000",
    "state-alarm_control_panel-triggered-color": "#ff2600",
    "state-alarm-triggered-color": "#ff2600",
    "state-alarm_control_panel-armed_home-color": "#ffd478",
    "state-alarm_control_panel-armed_away-color": "#ffd478",
    "state-alarm-armed-color": "#ffd478",
    "state-alarm_control_panel-disarmed-color": "#ff9300",
    "state-alarm-disarmed-color": "#ff9300",
    "state-battery-low-color": "#ff2600",
    "label-badge-background-color": "#FFFFFF",
    "label-badge-text-color": "rgba(33, 33, 33, 0.8)",
    "label-badge-red": "#FF3B30",
    "label-badge-blue": "#007AFF",
    "label-badge-green": "#34C759",
    "label-badge-yellow": "#FFCC00",
    "state-battery-alert-color": "#ff2600",
    "ha-control-switch-color": "#007AFF",
    "ha-control-switch-checked-color": "#007AFF",
    "ha-control-switch-unchecked-color": "#D1D1D6",
    "mush-toggle-color": "#007AFF",
    "mush-rgb-state-switch": "0, 122, 255",
    "bubble-toggle-color": "#007AFF",
    "rgb-state-switch-color": "0, 122, 255",
    "control-slider-color": "#007AFF",
    "slider-color": "#007AFF",
    "slider-secondary-color": "#E5F1FF",
    "slider-track-color": "#D1D1D6",
    "mush-slider-color": "#007AFF",
    "mush-slider-track-color": "#D1D1D6",
    "mush-toggle-background-color": "#D1D1D6",
    "control-button-background-color": "#F9F9FB",
    "control-button-icon-color": "#007AFF",
    "control-button-border-radius": "18px",
    "mush-chip-background": "#FFFFFF",
    "mush-chip-active-background": "#F9F9FB",
    "mush-chip-color": "#1C1C1E",
    "mush-chip-icon-color": "#007AFF",
    "mush-chip-active-color": "#ff9300",
    "mush-chip-active-icon-color": "#ff9300",
    "mush-chip-border-color": "#C6C6C8",
    "mush-chip-border-radius": "16px",
    "mush-chip-font-size": "12px",
    "bubble-button-background-color": "#FFFFFF",
    "bubble-button-active-background-color": "#007AFF",
    "bubble-button-icon-color": "#007AFF",
    "bubble-button-active-icon-color": "#FFFFFF",
    "bubble-button-text-color": "#1C1C1E",
    "bubble-button-active-text-color": "#FFFFFF",
    "bubble-button-border-radius": "18px",
    "bubble-sub-button-background-color": "#F9F9FB",
    "bubble-sub-button-active-background-color": "#007AFF",
    "bubble-sub-button-icon-color": "#007AFF",
    "bubble-sub-button-active-icon-color": "#FFFFFF",
    "bubble-sub-button-text-color": "#3C3C43",
    "bubble-sub-button-active-text-color": "#FFFFFF",
    "bubble-sub-button-border-radius": "14px",
    "bubble-sub-button-box-shadow": "0 4px 10px rgba(60,60,67,.16)",
    "input-background-color": "#F9F9FB",
    "input-fill-color": "#F9F9FB",
    "input-disabled-fill-color": "rgba(249, 249, 251, 0.55)",
    "input-disabled-ink-color": "rgba(0, 0, 0, 0.37)",
    "input-disabled-label-ink-color": "#8E8E93",
    "input-disabled-line-color": "rgba(0, 0, 0, 0.06)",
    "input-dropdown-icon-color": "rgba(0, 0, 0, 0.54)",
    "input-hover-line-color": "rgba(0, 0, 0, 0.87)",
    "input-idle-line-color": "rgba(0, 0, 0, 0.42)",
    "input-ink-color": "rgba(0, 0, 0, 0.87)",
    "input-label-ink-color": "rgba(0, 0, 0, 0.6)",
    "input-outlined-disabled-border-color": "rgba(0, 0, 0, 0.06)",
    "mdc-select-idle-line-color": "#C6C6C8",
    "mdc-select-dropdown-icon-color": "#3C3C43",
    "mdc-select-hover-line-color": "#C6C6C8",
    "mdc-text-field-idle-line-color": "#C6C6C8",
    "mdc-text-field-hover-line-color": "#C6C6C8",
    "ha-color-form-background": "#F9F9FB",
    "ha-color-form-background-hover": "#F9F9FB",
    "ha-color-form-background-disabled": "rgba(249, 249, 251, 0.55)",
    "mdc-theme-primary": "#007AFF",
    "mdc-theme-secondary": "#007AFF",
    "mdc-theme-on-primary": "#FFFFFF",
    "md-sys-color-primary": "#ff9300",
    "md-sys-color-on-primary": "#007AFF",
    "md-sys-color-primary-container": "#E5F1FF",
    "md-sys-color-on-primary-container": "#FFFFFF",
    "md-sys-color-on-surface": "#feffff",
    "ha-on-surface-color": "#feffff",
    "md-radio-selected-icon-color": "#007AFF",
    "mdc-radio-unchecked-color": "#3C3C43",
    "ha-color-fill-primary-normal-resting": "rgba(0, 122, 255, 0.15)",
    "ha-color-fill-primary-normal-hover": "rgba(0, 122, 255, 0.25)",
    "ha-color-fill-primary-quiet-resting": "rgba(0, 122, 255, 0.08)",
    "ha-color-fill-primary-quiet-hover": "rgba(0, 122, 255, 0.15)",
    "ha-color-fill-disabled-normal-resting": "rgba(142, 142, 147, 0.12)",
    "ha-color-on-disabled-normal": "rgba(60, 60, 67, 0.55)",
    "ha-color-fill-disabled-loud-resting": "rgba(142, 142, 147, 0.22)",
    "ha-color-on-disabled-loud": "rgba(60, 60, 67, 0.65)",
    "ha-color-on-disabled-quiet": "rgba(60, 60, 67, 0.50)",
    "ha-color-fill-neutral-quiet-resting": "#FFFFFF",
    "ha-color-fill-neutral-quiet-hover": "#F9F9FB",
    "ha-color-fill-neutral-quiet-active": "#E5F1FF",
    "ha-color-fill-neutral-normal-resting": "#F9F9FB",
    "ha-color-fill-neutral-normal-hover": "#FFFFFF",
    "ha-color-fill-neutral-normal-active": "#E5F1FF",
    "ha-color-fill-danger-normal-resting": "rgba(255, 59, 48, 0.15)",
    "ha-color-fill-danger-normal-hover": "rgba(255, 59, 48, 0.22)",
    "ha-color-fill-danger-normal-active": "rgba(255, 59, 48, 0.28)",
    "ha-color-on-danger-normal": "#FF3B30",
    "ha-color-fill-warning-normal-resting": "rgba(255, 204, 0, 0.15)",
    "ha-color-fill-warning-normal-hover": "rgba(255, 204, 0, 0.22)",
    "ha-color-fill-warning-normal-active": "rgba(255, 204, 0, 0.28)",
    "ha-color-on-warning-normal": "#8A5A00",
    "ha-tooltip-background-color": "#F9F9FB",
    "ha-tooltip-text-color": "#1C1C1E",
    "border-color": "rgba(0, 0, 0, 0.12)",
    "border-radius": "18px",
    "box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "divider-color": "rgba(0, 0, 0, 0.12)",
    "outline-color": "rgba(0, 0, 0, 0.12)",
    "outline-variant-color": "#C6C6C8",
    "ha-card-border-color": "rgba(0, 0, 0, 0.12)",
    "ha-card-border-radius": "18px",
    "ha-card-border-width": "1px",
    "ha-card-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "ha-line-height-condensed": "1.25",
    "ha-line-height-expanded": "1.35",
    "ha-line-height-normal": "1.5",
    "bubble-border": "1px solid #C6C6C8",
    "bubble-border-color": "rgba(0, 0, 0, 0.12)",
    "bubble-border-radius": "18px",
    "bubble-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "bubble-card-border-radius": "18px",
    "bubble-climate-border-radius": "18px",
    "bubble-climate-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "bubble-climate-icon-border-radius": "32px",
    "bubble-cover-border-radius": "18px",
    "bubble-cover-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "bubble-icon-border-radius": "14px",
    "bubble-media-player-border-radius": "18px",
    "bubble-media-player-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "bubble-pop-up-border-radius": "18px",
    "bubble-pop-up-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "bubble-select-border-radius": "18px",
    "bubble-separator-border-radius": "18px",
    "bubble-horizontal-buttons-stack-border-radius": "18px",
    "bubble-horizontal-buttons-stack-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "primary-font-family": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-body": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-heading": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-longform": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-code": "'SF Mono', 'Roboto Mono', Consolas, monospace",
    "mdc-typography-font-family": "'SF Mono', 'Roboto Mono', Consolas, monospace",
    "ha-font-size-scale": "1",
    "ha-font-size-2xs": "8px",
    "ha-font-size-xs": "8px",
    "ha-font-size-s": "12px",
    "ha-font-size-m": "14px",
    "ha-font-size-l": "16px",
    "ha-font-size-xl": "18px",
    "ha-font-size-2xl": "20px",
    "ha-font-size-3xl": "22px",
    "ha-font-size-4xl": "24px",
    "ha-font-weight-light": "300",
    "ha-font-weight-normal": "400",
    "ha-font-weight-body": "400",
    "ha-font-weight-medium": "500",
    "ha-font-weight-heading": "500",
    "ha-font-weight-action": "500",
    "ha-font-weight-bold": "700",
    "rgb-primary-color": "255, 147, 0",
    "rgb-accent-color": "255, 147, 0",
    "rgb-primary-text-color": "28, 28, 30",
    "rgb-secondary-text-color": "60, 60, 67",
    "rgb-card-background-color": "255, 255, 255",
    "rgb-primary-background-color": "242, 242, 247",
    "rgb-blue-color": "0, 122, 255",
    "rgb-orange-color": "255, 149, 0",
    "rgb-state-light-color": "0, 122, 255",
    "rgb-state-cover-color": "0, 122, 255",
    "rgb-state-fan-color": "0, 122, 255",
    "rgb-state-media_player-color": "0, 122, 255",
    "mush-rgb-primary-text-color": "28, 28, 30",
    "mush-rgb-secondary-text-color": "60, 60, 67",
    "mush-rgb-state-light": "0, 122, 255",
    "mush-rgb-state-cover": "0, 122, 255",
    "mush-rgb-state-entity": "0, 122, 255",
    "mush-rgb-state-fan": "0, 122, 255",
    "mush-rgb-state-media-player": "0, 122, 255",
    "mush-rgb-state-vacuum": "0, 122, 255",
    "mush-rgb-success": "52, 199, 89",
    "mush-rgb-warning": "255, 204, 0",
    "mush-rgb-danger": "255, 59, 48",
    "mush-rgb-disabled": "142, 142, 147",
    "mush-rgb-info": "0, 122, 255",
    "graph-color-1": "#ff9300",
    "graph-color-2": "#007AFF",
    "graph-color-3": "#34C759",
    "graph-color-4": "#AF52DE",
    "graph-color-5": "#FF3B30",
    "graph-color-6": "#5AC8FA",
    "graph-color-7": "#00C7BE",
    "graph-color-8": "#FF2D55",
    "graph-color-9": "#FF6B22",
    "graph-color-10": "#5856D6",
    "graph-color-11": "#A3D977",
    "graph-color-12": "#FFCC00",
    "graph-color-13": "#AF52DE",
    "graph-color-14": "#8E6E53",
    "energy-grid-consumption-color": "#007AFF",
    "energy-grid-return-color": "#AF52DE",
    "energy-solar-color": "#ff9300",
    "energy-non-fossil-color": "#34C759",
    "energy-battery-out-color": "#00C7BE",
    "energy-battery-in-color": "#AF52DE",
    "energy-gas-color": "#FF3B30",
    "energy-water-color": "#5AC8FA",
    "bubble-card-background-color": "#FFFFFF",
    "bubble-secondary-background-color": "#F9F9FB",
    "bubble-icon-background-color": "#F9F9FB",
    "bubble-icon-color": "#007AFF",
    "bubble-name-color": "#1C1C1E",
    "bubble-state-color": "#3C3C43",
    "bubble-accent-color": "#007AFF",
    "bubble-active-color": "#007AFF",
    "bubble-line-background-color": "rgba(0, 0, 0, 0.12)",
    "bubble-pop-up-background-color": "#F2F2F7",
    "bubble-pop-up-backdrop-filter": "blur(18px)",
    "dialog-box-shadow": "0 10px 28px rgba(60,60,67,.14)",
    "more-info-header-background": "#F9F9FB",
    "more-info-header-color": "#1C1C1E",
    "popup-border-radius": "12px",
    "ha-dialog-scrim-backdrop-filter": "blur(10px)",
    "ha-dialog-surface-background": "rgba(255, 255, 255, 0.92)",
    "mdc-dialog-scrim-color": "rgba(0, 0, 0, 0.35)",
    "bubble-separator-background-color": "#FFFFFF",
    "bubble-separator-icon-background-color": "#F9F9FB",
    "bubble-separator-icon-color": "#007AFF",
    "bubble-separator-line-color": "rgba(0, 0, 0, 0.12)",
    "bubble-separator-name-color": "#1C1C1E",
    "bubble-separator-text-color": "#1C1C1E",
    "bubble-horizontal-buttons-stack-background-color": "#FFFFFF",
    "bubble-horizontal-buttons-stack-button-background-color": "#F9F9FB",
    "bubble-sub-buttons-main-background-color": "#FFFFFF",
    "bubble-climate-background-color": "#FFFFFF",
    "bubble-climate-main-background-color": "#FFFFFF",
    "bubble-cover-background-color": "#FFFFFF",
    "bubble-cover-main-background-color": "#FFFFFF",
    "bubble-media-player-background-color": "#FFFFFF",
    "bubble-media-player-main-background-color": "#FFFFFF",
    "mush-card-background": "#FFFFFF",
    "mush-control-background-color": "#F9F9FB",
    "mush-icon-background-color": "#F9F9FB",
    "mush-card-primary-color": "#1C1C1E",
    "mush-card-secondary-color": "#3C3C43",
    "mush-title-color": "#1C1C1E",
    "mush-subtitle-color": "#3C3C43",
    "mush-icon-color": "#3C3C43",
    "mush-icon-active-color": "#007AFF",
    "card-mod-theme": "basis",
    "card-mod-card-yaml": "\n.: |\n  /* HATG Bubble Card: zentraler card-mod Block */\n  ha-card {\n    /* v0.4.50: Enrico - \"Popup, Heizung und freier Button haben keinen\n       cardmod genau so wie die Menueleiste unten.\" Root Cause (im echten\n       Bubble-Card-Quellcode nachgeschaut): JEDE Bubble-Karte nutzt fuer\n       Hintergrund/Icon/Name/Radius automatisch Fallback-Ketten wie\n       var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, ...)) -\n       diese Variablen haben wir bisher nie gesetzt, nur einzelne Klassen per\n       !important erzwungen (siehe Liste unten). Fuer Kartentypen, die nicht\n       in dieser Liste stehen (z. B. ein reiner \"button\"-Typ ohne Entity wie\n       ein Pop-up-Oeffner, oder die \"sub-buttons\"-Kartenart), griff bisher\n       keine unserer Regeln - Bubble Card fiel auf neutrale Standardwerte\n       zurueck. Jetzt setzen wir die von Bubble Card selbst erwarteten\n       Variablen direkt auf ha-card (genau wie Enricos alter Pro-Karte-\n       card_mod es tat), zeigen aber weiterhin auf unsere eigenen, im Editor\n       bearbeitbaren Felder - das deckt jetzt automatisch auch kuenftige/\n       bisher unbekannte Bubble-Kartentypen ab, ohne dass wir jede einzeln\n       nachtragen muessen. */\n    --bubble-main-background-color: var(--bubble-main-buttons-background-color, var(--card-background-color));\n    --bubble-secondary-background-color: var(--bubble-secondary-background-color, var(--secondary-background-color));\n    --bubble-icon-background-color: var(--bubble-icon-background-color, var(--secondary-background-color));\n    --bubble-icon-color: var(--bubble-icon-color, var(--accent-color));\n    /* v0.4.53: Enrico - vorsorglich \"--bubble-accent-color\" mit aufnehmen,\n       falls kuenftig card_type: calendar mit \"show_progress: true\" genutzt\n       wird. Bubble Card berechnet die Fortschritts-Hervorhebung fuer laufende\n       Termine dann ueber \"var(--bubble-event-accent-color,\n       var(--bubble-accent-color, var(--bubble-default-color)))\" (siehe\n       changes.js im echten Bubble-Card-Quellcode) - ohne eigene Definition\n       blieb diese Hervorhebung bisher farblos, da wir --bubble-accent-color\n       nie gesetzt haben und Bubble Card selbst dafuer keinen eigenen\n       Standardwert bereitstellt. */\n    --bubble-accent-color: var(--bubble-accent-color, var(--accent-color));\n    --bubble-name-color: var(--bubble-name-color, var(--primary-text-color));\n    --bubble-state-color: var(--bubble-state-color, var(--secondary-text-color));\n    --bubble-border-radius: var(--bubble-border-radius, var(--ha-card-border-radius, 18px));\n    /* Bubble Card setzt bei button_type: switch im \"an\"-Zustand selbst\n       eine deckende Akzentfarben-Flutung ueber die ganze Karte\n       (--bubble-button-background-color, per JS/inline gesetzt) -\n       das sieht anders aus als Mushroom/Tile, die nur den Icon-Kreis\n       aufleuchten lassen. Global neutralisiert, damit die Kartenflaeche\n       in JEDEM Zustand dunkel/neutral bleibt und nur noch das Icon\n       (siehe .is-on .bubble-icon-container weiter unten) den\n       \"an\"-Zustand zeigt - alle drei Frameworks sollen so nah wie\n       moeglich gleich aussehen (Enrico: \"keiner soll merken was\n       welche Karte ist\"). */\n    --bubble-button-background-color: transparent !important;\n    border-radius: var(--bubble-border-radius, var(--ha-card-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-box-shadow, var(--ha-card-box-shadow, none)) !important;\n    background: var(--bubble-main-buttons-background-color, var(--ha-card-background, var(--card-background-color))) !important;\n    border: var(--bubble-border, 1px solid var(--bubble-border-color, var(--ha-card-border-color, transparent))) !important;\n    color: var(--bubble-name-color, var(--primary-text-color)) !important;\n    overflow: hidden !important;\n    backdrop-filter: var(--card-backdrop-blur, none) !important;\n  }\n\n  .bubble-card,\n  .bubble-button-card-container,\n  .bubble-media-player,\n  .bubble-media-player-container,\n  .bubble-cover-card-container,\n  .bubble-climate-card-container,\n  .bubble-horizontal-buttons-stack-card-container,\n  .bubble-pop-up,\n  .bubble-pop-up-container {\n    border-radius: var(--bubble-border-radius, var(--ha-card-border-radius, 18px)) !important;\n    background: var(--bubble-main-buttons-background-color, var(--ha-card-background, var(--card-background-color))) !important;\n    box-shadow: var(--bubble-box-shadow, var(--ha-card-box-shadow, none)) !important;\n    border: var(--bubble-border, 1px solid var(--bubble-border-color, var(--ha-card-border-color, transparent))) !important;\n    color: var(--bubble-name-color, var(--primary-text-color)) !important;\n    overflow: hidden !important;\n  }\n\n  /* Echtes Bubble-Card-Element fuer den Zustands-/Fuellfarben-Hintergrund\n     (bisher faelschlich als \".bubble-button-background\" angesprochen - diese\n     Klasse existiert in Bubble Card gar nicht, der echte Name ist\n     \".bubble-background\"). Nur Radius+Clipping erzwingen (per \"inherit\" vom\n     jeweils schon korrekt gesetzten Elternelement), NICHT die Hintergrundfarbe -\n     die uebernimmt Bubble Card selbst korrekt je nach Zustand/Kartentyp ueber\n     die passenden bubble-*-button-background-color-Felder. Behebt eckige statt\n     runde Kartenecken bei Button-/Zustands-Karten. */\n  .bubble-background {\n    border-radius: inherit !important;\n    overflow: hidden !important;\n  }\n\n  .bubble-icon-container,\n  .bubble-icon-wrapper,\n  .bubble-climate-icon-container,\n  .bubble-cover-icon-container,\n  .bubble-media-player-icon-container {\n    border-radius: var(--bubble-icon-border-radius, var(--bubble-button-border-radius, var(--bubble-border-radius, 18px))) !important;\n    background: var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--secondary-background-color))) !important;\n    color: var(--bubble-icon-color, var(--accent-color)) !important;\n  }\n\n  .bubble-icon,\n  .bubble-icon-container ha-icon,\n  .bubble-icon-wrapper ha-icon,\n  .bubble-climate-icon-container ha-icon,\n  .bubble-cover-icon-container ha-icon,\n  .bubble-media-player-icon-container ha-icon {\n    color: var(--bubble-icon-color, var(--accent-color)) !important;\n  }\n\n  .bubble-sub-button,\n  .bubble-sub-button-container,\n  .bubble-sub-button-background,\n  .bubble-climate-button,\n  .bubble-cover-button,\n  .bubble-media-player-button {\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-button-border-radius, var(--bubble-border-radius, 18px))) !important;\n    background: var(--bubble-sub-button-background-color, var(--bubble-secondary-background-color, var(--secondary-background-color))) !important;\n    color: var(--bubble-sub-button-text-color, var(--bubble-state-color, var(--secondary-text-color))) !important;\n    /* Enrico: \"warum erhalten die subbutton keinen schatten?\" - vorher hier\n       hart auf none erzwungen, jetzt ueber eigenes Feld steuerbar (Fallback\n       auf den allgemeinen Bubble-Schatten, nicht mehr automatisch aus). */\n    box-shadow: var(--bubble-sub-button-box-shadow, var(--bubble-box-shadow, none)) !important;\n    border: 0 !important;\n  }\n\n  .bubble-sub-button ha-icon,\n  .bubble-sub-button-container ha-icon,\n  .bubble-climate-button ha-icon,\n  .bubble-cover-button ha-icon,\n  .bubble-media-player-button ha-icon,\n  .bubble-horizontal-buttons-stack-card-container .bubble-icon,\n  .bubble-horizontal-buttons-stack-card-container ha-icon {\n    color: var(--bubble-sub-button-icon-color, var(--bubble-icon-color, var(--accent-color))) !important;\n  }\n\n  .bubble-name,\n  .bubble-button-card-container .name,\n  .bubble-media-player .name,\n  .bubble-cover-card-container .name,\n  .bubble-climate-card-container .name {\n    color: var(--bubble-name-color, var(--primary-text-color)) !important;\n    font-size: var(--bubble-name-font-size, 14px) !important;\n    font-weight: var(--bubble-name-font-weight, 500) !important;\n  }\n\n  .bubble-state,\n  .bubble-secondary,\n  .bubble-media-player .state,\n  .bubble-cover-card-container .state,\n  .bubble-climate-card-container .state {\n    color: var(--bubble-state-color, var(--secondary-text-color)) !important;\n    font-size: var(--bubble-state-font-size, 12px) !important;\n  }\n\n  .bubble-range,\n  .bubble-range-slider,\n  .bubble-slider-container,\n  .bubble-slider-background,\n  .bubble-media-player-slider-background,\n  .bubble-cover-slider-background {\n    border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 18px)) !important;\n    background: var(--slider-track-color, var(--divider-color)) !important;\n    overflow: hidden !important;\n  }\n\n  .bubble-range-fill,\n  .bubble-slider-fill,\n  .bubble-slider-active,\n  .bubble-media-player-slider-fill,\n  .bubble-cover-slider-fill {\n    background: var(--slider-color, var(--accent-color)) !important;\n  }\n  /* Slider-Hintergrund (Track) nutzt jetzt die echten, editierbaren Felder\n     slider-color/slider-track-color (Sektion \"Slider & Progress\") statt der\n     frueher hier verwendeten bubble-slider-*-Variablen - die gab es in Bubble\n     Card nie wirklich (Altlasten-Bereinigung hat sie deshalb aus dem Manifest\n     entfernt), wodurch diese Regel bisher IMMER auf divider-color/accent-color\n     zurueckgefallen ist, egal was auf \"Slider & Progress\" eingestellt war.\n     Hinweis: \"Slider-Enden abrunden\" und \"Slider-Farbverlauf\" (siehe Plugin-Seite)\n     wirken weiterhin nur direkt in der jeweiligen Bubble-Card ueber deren eigenen\n     \"styles:\"-Schluessel - Bubble Card ueberschreibt CSS am Slider-FUELLBALKEN\n     (.bubble-slider-fill usw.) hier per eigenem, hoeher spezifischem <style>-Tag\n     sonst selbst; der Slider-HINTERGRUND (Track) ist davon nicht betroffen und\n     reagiert jetzt korrekt auf slider-track-color. Fertige Kopiervorlagen fuer\n     Fuellfarbe/Rundung gibt es auf der Plugin-Seite. */\n\n  .bubble-climate-card-container {\n    border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-climate-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-climate-main-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  .bubble-cover-card-container {\n    border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-cover-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-cover-main-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  .bubble-media-player {\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-media-player-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-media-player-main-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  .bubble-horizontal-buttons-stack-card-container {\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-horizontal-buttons-stack-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  /* Bubble Card horizontal-buttons-stack: die echten Klassen je Einzelbutton\n     sind \".bubble-button\" (Layout), \".bubble-background-color\" (von Bubble\n     Card hartcodierter weisser Rahmen) und \".bubble-background\" (Fuellfarbe,\n     Standard-Fallback landet NICHT bei --bubble-main-buttons-background-color wie bei\n     den anderen Kartentypen). \".bubble-horizontal-buttons-stack .bubble-button\"\n     (oben, alte Version) existierte in Bubble Card nie und griff nie. Ziel:\n     die drei Buttons sollen optisch genauso aussehen wie die uebrigen\n     Bubble-Karten (gleicher Radius, gleicher Rahmen, gleiche Kartenfarbe\n     statt hartcodiertem weissem Rahmen). */\n  .bubble-horizontal-buttons-stack-card-container .bubble-button,\n  .bubble-horizontal-buttons-stack-card-container .bubble-background-color,\n  .bubble-horizontal-buttons-stack-card-container .bubble-background {\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 18px)) !important;\n  }\n\n  .bubble-horizontal-buttons-stack-card-container .bubble-background-color {\n    border: var(--bubble-border, 1px solid var(--bubble-border-color, var(--ha-card-border-color, transparent))) !important;\n  }\n\n  .bubble-horizontal-buttons-stack-card-container .bubble-background {\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n    box-shadow: var(--bubble-horizontal-buttons-stack-box-shadow, var(--bubble-box-shadow, none)) !important;\n    opacity: 1 !important;\n  }\n\n  .bubble-pop-up,\n  .bubble-pop-up-background,\n  .bubble-pop-up-container {\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 18px)) !important;\n    background: var(--bubble-pop-up-background-color, var(--primary-background-color)) !important;\n    box-shadow: var(--bubble-pop-up-box-shadow, var(--bubble-box-shadow, none)) !important;\n    backdrop-filter: var(--bubble-pop-up-backdrop-filter, blur(16px)) !important;\n  }\n\n  /* --- Icon Leucht-Zustand (an/aus): Bubble Card ---\n     .bubble-icon-container, .is-on/.is-off und ha-icon.bubble-main-icon\n     liegen laut Bubble-Card-Quellcode im selben, von aussen erreichbaren\n     Shadow-Root wie .bubble-container (anders als Sub-Buttons, die\n     weiterhin card_mod: pro Karte brauchen). Live von Enrico getestet. */\n  .bubble-icon-container {\n    transition: box-shadow .3s ease-in-out;\n  }\n  .is-off .bubble-icon-container {\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.25),\n                0 1px 2px rgba(0, 0, 0, 0.15) !important;\n  }\n  .is-on .bubble-icon-container {\n    box-shadow: 0 0 10px 2px rgba(var(--rgb-accent-color), 0.55),\n                inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .is-on ha-icon.bubble-main-icon {\n    color: var(--bubble-icon-color, var(--accent-color)) !important;\n    filter: drop-shadow(0 0 4px rgba(var(--rgb-accent-color), 0.7));\n  }\n\n  /* --- Mushroom: Icon-Farbe/-Hintergrund/-Rundung an Bubble angleichen ---\n     Mushroom liest --icon-color/--shape-color/--icon-border-radius selbst\n     ueber mushroom-shape-icon (eigener Quellcode: shape-icon.ts). Faellt\n     zuerst auf die eigenen mush-*-Felder zurueck, dann auf die Bubble-\n     Felder, damit alle drei Frameworks optisch gleich aussehen. */\n  mushroom-shape-icon {\n    --icon-color: var(--mush-icon-color, var(--bubble-icon-color, var(--accent-color)));\n    --shape-color: var(--mush-icon-background-color, var(--bubble-icon-background-color, var(--secondary-background-color)));\n    --icon-border-radius: var(--bubble-icon-border-radius, 50%);\n  }\n",
    "bubble-button-card-background-color": "#FFFFFF",
    "bubble-button-main-background-color": "#FFFFFF",
    "bubble-climate-button-background-color": "#F9F9FB",
    "bubble-cover-button-background-color": "#F9F9FB",
    "bubble-media-player-button-background-color": "#F9F9FB",
    "mush-slider-background-color": "#F9F9FB",
    "bubble-button-active-color": "#007AFF",
    "bubble-climate-button-icon-color": "#3C3C43",
    "bubble-cover-button-icon-color": "#3C3C43",
    "bubble-horizontal-buttons-stack-button-icon-color": "#3C3C43",
    "bubble-horizontal-buttons-stack-button-text-color": "#1C1C1E",
    "bubble-media-player-button-icon-color": "#3C3C43",
    "deep-purple-color": "#6E41AB",
    "indigo-color": "#3F51B5",
    "light-blue-color": "#03A9F4",
    "teal-color": "#009688",
    "light-green-color": "#8BC34A",
    "lime-color": "#CDDC39",
    "amber-color": "#FFC107",
    "deep-orange-color": "#FF6F22",
    "brown-color": "#795548",
    "light-grey-color": "#BDBDBD",
    "dark-grey-color": "#606060",
    "blue-grey-color": "#607D8B",
    "disabled-color": "#D1D1D6",
    "outline-hover-color": "rgba(0, 0, 0, 0.24)",
    "state-alarm_control_panel-armed_custom_bypass-color": "#34C759",
    "state-alarm_control_panel-armed_night-color": "#34C759",
    "state-alarm_control_panel-armed_vacation-color": "#34C759",
    "state-alarm_control_panel-arming-color": "#007AFF",
    "state-alarm_control_panel-disarming-color": "#007AFF",
    "state-alarm_control_panel-pending-color": "#007AFF",
    "state-alert-off-color": "#007AFF",
    "state-alert-on-color": "#FF3B30",
    "state-binary_sensor-active-color": "#FFC107",
    "state-binary_sensor-battery-on-color": "#FF3B30",
    "state-binary_sensor-carbon_monoxide-on-color": "#FF3B30",
    "state-binary_sensor-gas-on-color": "#FF3B30",
    "state-binary_sensor-heat-on-color": "#FF3B30",
    "state-binary_sensor-lock-on-color": "#FF3B30",
    "state-binary_sensor-moisture-on-color": "#FF3B30",
    "state-binary_sensor-problem-on-color": "#FF3B30",
    "state-binary_sensor-safety-on-color": "#FF3B30",
    "state-binary_sensor-smoke-on-color": "#FF3B30",
    "state-binary_sensor-sound-on-color": "#FF3B30",
    "state-binary_sensor-tamper-on-color": "#FF3B30",
    "state-climate-dry-color": "#007AFF",
    "state-climate-fan_only-color": "#5AC8FA",
    "state-climate-heat_cool-color": "#FFC107",
    "state-device_tracker-active-color": "#007AFF",
    "state-device_tracker-home-color": "#34C759",
    "state-humidifier-on-color": "#007AFF",
    "state-lawn_mower-active-color": "#009688",
    "state-lawn_mower-error-color": "#FF3B30",
    "state-lock-jammed-color": "#FF3B30",
    "state-lock-open-color": "#FF3B30",
    "state-lock-opening-color": "#007AFF",
    "state-media_player-active-color": "#007AFF",
    "state-person-active-color": "#007AFF",
    "state-person-home-color": "#34C759",
    "state-plant-active-color": "#FF3B30",
    "state-siren-active-color": "#FF3B30",
    "state-sun-above_horizon-color": "#FFC107",
    "state-sun-below_horizon-color": "#3F51B5",
    "state-update-active-color": "#007AFF",
    "state-valve-active-color": "#007AFF",
    "state-vacuum-error-color": "#FF3B30",
    "state-water_heater-eco-color": "#34C759",
    "state-water_heater-electric-color": "#007AFF",
    "state-water_heater-gas-color": "#007AFF",
    "state-water_heater-heat_pump-color": "#007AFF",
    "state-water_heater-high_demand-color": "#FF6F22",
    "state-water_heater-performance-color": "#FF6F22",
    "state-weather-clear_night-color": "#6E41AB",
    "state-weather-cloudy-color": "#BDBDBD",
    "state-weather-exceptional-color": "#FF3B30",
    "state-weather-fog-color": "#3C3C43",
    "state-weather-hail-color": "#5AC8FA",
    "state-weather-lightning_rainy-color": "#CDDC39",
    "state-weather-lightning-color": "#FFCC00",
    "state-weather-partlycloudy-color": "#607D8B",
    "state-weather-pouring-color": "#3F51B5",
    "state-weather-rainy-color": "#007AFF",
    "state-weather-snowy_rainy-color": "#03A9F4",
    "state-weather-snowy-color": "#C0E0FF",
    "state-weather-sunny-color": "#FFC107",
    "state-weather-windy_variant-color": "#34C759",
    "state-weather-windy-color": "#34C759",
    "state-sensor-battery-high-color": "#34C759",
    "state-sensor-battery-medium-color": "#007AFF",
    "state-sensor-battery-low-color": "#FF3B30",
    "color-1": "#ff9300",
    "color-2": "#007AFF",
    "color-3": "#34C759",
    "color-4": "#AF52DE",
    "color-5": "#FF3B30",
    "color-6": "#5AC8FA",
    "color-7": "#00C7BE",
    "color-8": "#FF2D55",
    "color-9": "#FF6B22",
    "color-10": "#5856D6",
    "color-11": "#A3D977",
    "color-12": "#FFCC00",
    "color-13": "#AF52DE",
    "color-14": "#8E6E53",
    "ha-switch-background-color": "#D1D1D6",
    "ha-switch-background-color-hover": "#D1D1D6",
    "ha-switch-border-color": "rgba(0,0,0,0)",
    "ha-switch-thumb-background-color": "#FFFFFF",
    "ha-switch-thumb-background-color-hover": "#FFFFFF",
    "ha-switch-thumb-border-color": "rgba(0,0,0,0)",
    "ha-switch-thumb-border-color-hover": "rgba(0,0,0,0)",
    "ha-switch-checked-background-color": "#E5F1FF",
    "ha-switch-checked-background-color-hover": "#E5F1FF",
    "ha-switch-checked-border-color": "rgba(0,0,0,0)",
    "ha-switch-checked-thumb-background-color": "#007AFF",
    "ha-switch-checked-thumb-background-color-hover": "#007AFF",
    "ha-switch-checked-thumb-border-color": "rgba(0,0,0,0)",
    "ha-switch-checked-thumb-border-color-hover": "rgba(0,0,0,0)",
    "printer-cyan-color": "#00AEEF",
    "printer-magenta-color": "#EC008C",
    "printer-yellow-color": "#FFD400",
    "bubble-main-buttons-background-color": "#FFFFFF",
    "card-backdrop-blur": "none"
  },
  "dark": {
    "accent-color": "#ff9300",
    "primary-color": "#ff9300",
    "dark-primary-color": "#2C2C2E",
    "light-primary-color": "#ff9300",
    "primary-text-color": "#feffff",
    "secondary-text-color": "#C7C7CC",
    "text-primary-color": "#000000",
    "disabled-text-color": "#636366",
    "error-color": "#FF453A",
    "warning-color": "#FFD60A",
    "success-color": "#30D158",
    "info-color": "#0A84FF",
    "red-color": "#FF453A",
    "green-color": "#30D158",
    "blue-color": "#0A84FF",
    "orange-color": "#FF9F0A",
    "yellow-color": "#FFD60A",
    "purple-color": "#BF5AF2",
    "pink-color": "#FF375F",
    "cyan-color": "#32ADE6",
    "grey-color": "#C7C7CC",
    "black-color": "#000000",
    "white-color": "#FFFFFF",
    "primary-background-color": "#000000",
    "background-color": "#000000",
    "lovelace-background": "#000000",
    "secondary-background-color": "#2C2C2E",
    "card-background-color": "#1C1C1E",
    "ha-card-background": "#1C1C1E",
    "ha-card-background-color": "#1C1C1E",
    "table-row-background-color": "#2C2C2E",
    "table-row-alternative-background-color": "#1C1C1E",
    "app-header-background-color": "#1C1C1E",
    "app-toolbar-background-color": "#1C1C1E",
    "toolbar-background-color": "#1C1C1E",
    "app-drawer-background-color": "#1C1C1E",
    "sidebar-background-color": "#1C1C1E",
    "sidebar-selected-background-color": "#d5d5d5",
    "mdc-theme-background": "#000000",
    "mdc-theme-surface": "#1C1C1E",
    "mdc-theme-on-surface": "#F2F2F7",
    "wa-color-surface-raised": "#1C1C1E",
    "app-header-text-color": "#F2F2F7",
    "app-toolbar-text-color": "#F2F2F7",
    "toolbar-text-color": "#F2F2F7",
    "app-drawer-text-color": "#C7C7CC",
    "app-drawer-icon-color": "#ff9300",
    "sidebar-text-color": "#C7C7CC",
    "sidebar-icon-color": "rgba(225, 225, 225, 0.6)",
    "sidebar-selected-text-color": "#d5d5d5",
    "sidebar-selected-icon-color": "#d5d5d5",
    "state-icon-color": "#feffff",
    "state-icon-active-color": "#ff9300",
    "state-icon-unavailable-color": "#929292",
    "state-active-color": "#ff9300",
    "state-inactive-color": "#929292",
    "state-unavailable-color": "#929292",
    "state-on-color": "#30D158",
    "state-off-color": "#636366",
    "state-light-color": "#ff9300",
    "state-light-active-color": "#ff9300",
    "state-light-on-color": "#ff9300",
    "state-switch-color": "#0A84FF",
    "state-switch-active-color": "#ff9300",
    "state-switch-on-color": "#ff9300",
    "state-climate-cool-color": "#0A84FF",
    "state-climate-heat-color": "#ff2600",
    "state-climate-auto-color": "#ffd478",
    "state-cover-color": "#0A84FF",
    "state-cover-active-color": "#929000",
    "state-cover-open-color": "#929000",
    "state-cover-closed-color": "#ff2600",
    "state-fan-color": "#0A84FF",
    "state-fan-active-color": "#0A84FF",
    "state-media_player-color": "#0A84FF",
    "state-vacuum-color": "#0A84FF",
    "state-vacuum-active-color": "#0A84FF",
    "state-lock-locked-color": "#ff2600",
    "state-lock-locking-color": "#ff2600",
    "state-lock-unlocked-color": "#929000",
    "state-lock-unlocking-color": "#929000",
    "state-alarm_control_panel-triggered-color": "#ff2600",
    "state-alarm-triggered-color": "#ff2600",
    "state-alarm_control_panel-armed_home-color": "#ffd478",
    "state-alarm_control_panel-armed_away-color": "#ffd478",
    "state-alarm-armed-color": "#ffd478",
    "state-alarm_control_panel-disarmed-color": "#ff9300",
    "state-alarm-disarmed-color": "#ff9300",
    "state-battery-low-color": "#ff2600",
    "label-badge-background-color": "#1C1C1E",
    "label-badge-text-color": "rgba(225, 225, 225, 0.8)",
    "label-badge-red": "#FF453A",
    "label-badge-blue": "#0A84FF",
    "label-badge-green": "#30D158",
    "label-badge-yellow": "#FFD60A",
    "state-battery-alert-color": "#ff2600",
    "ha-control-switch-color": "#ff9300",
    "ha-control-switch-checked-color": "#ff9300",
    "ha-control-switch-unchecked-color": "#3A3A3C",
    "mush-toggle-color": "#ff9300",
    "mush-rgb-state-switch": "255, 147, 0",
    "bubble-toggle-color": "#ff9300",
    "rgb-state-switch-color": "255, 147, 0",
    "control-slider-color": "#ff9300",
    "slider-color": "#ff9300",
    "slider-secondary-color": "#1F3A5F",
    "slider-track-color": "#48484A",
    "mush-slider-color": "#ff9300",
    "mush-slider-track-color": "#48484A",
    "mush-toggle-background-color": "#48484A",
    "control-button-background-color": "#2C2C2E",
    "control-button-icon-color": "#ff9300",
    "control-button-border-radius": "18px",
    "mush-chip-background": "#2C2C2E",
    "mush-chip-active-background": "#1F3A5F",
    "mush-chip-color": "#F2F2F7",
    "mush-chip-icon-color": "#ff9300",
    "mush-chip-active-color": "#0A84FF",
    "mush-chip-active-icon-color": "#0A84FF",
    "mush-chip-border-color": "#38383A",
    "mush-chip-border-radius": "16px",
    "mush-chip-font-size": "12px",
    "bubble-button-background-color": "#1C1C1E",
    "bubble-button-active-background-color": "#0A84FF",
    "bubble-button-icon-color": "#ff9300",
    "bubble-button-active-icon-color": "#000000",
    "bubble-button-text-color": "#feffff",
    "bubble-button-active-text-color": "#000000",
    "bubble-button-border-radius": "18px",
    "bubble-sub-button-background-color": "#2C2C2E",
    "bubble-sub-button-active-background-color": "#0A84FF",
    "bubble-sub-button-icon-color": "#ff9300",
    "bubble-sub-button-active-icon-color": "#000000",
    "bubble-sub-button-text-color": "#C7C7CC",
    "bubble-sub-button-active-text-color": "#000000",
    "bubble-sub-button-border-radius": "14px",
    "bubble-sub-button-box-shadow": "0 4px 11px rgba(0,0,0,.45)",
    "input-background-color": "#2C2C2E",
    "input-fill-color": "#2C2C2E",
    "input-disabled-fill-color": "rgba(44, 44, 46, 0.50)",
    "input-disabled-ink-color": "rgba(255, 255, 255, 0.37)",
    "input-disabled-label-ink-color": "#636366",
    "input-disabled-line-color": "rgba(255, 255, 255, 0.06)",
    "input-dropdown-icon-color": "rgba(255, 255, 255, 0.54)",
    "input-hover-line-color": "rgba(255, 255, 255, 0.87)",
    "input-idle-line-color": "rgba(255, 255, 255, 0.42)",
    "input-ink-color": "rgba(255, 255, 255, 0.87)",
    "input-label-ink-color": "rgba(255, 255, 255, 0.6)",
    "input-outlined-disabled-border-color": "rgba(255, 255, 255, 0.06)",
    "mdc-select-idle-line-color": "#38383A",
    "mdc-select-dropdown-icon-color": "#C7C7CC",
    "mdc-select-hover-line-color": "#38383A",
    "mdc-text-field-idle-line-color": "#38383A",
    "mdc-text-field-hover-line-color": "#38383A",
    "ha-color-form-background": "#2C2C2E",
    "ha-color-form-background-hover": "#2C2C2E",
    "ha-color-form-background-disabled": "rgba(44, 44, 46, 0.50)",
    "mdc-theme-primary": "#0A84FF",
    "mdc-theme-secondary": "#0A84FF",
    "mdc-theme-on-primary": "#000000",
    "md-sys-color-primary": "#ff9300",
    "md-sys-color-on-primary": "#0A84FF",
    "md-sys-color-primary-container": "#1F3A5F",
    "md-sys-color-on-primary-container": "#000000",
    "md-sys-color-on-surface": "#feffff",
    "ha-on-surface-color": "#feffff",
    "md-radio-selected-icon-color": "#0A84FF",
    "mdc-radio-unchecked-color": "#C7C7CC",
    "ha-color-fill-primary-normal-resting": "rgba(255, 147, 0, 0.15)",
    "ha-color-fill-primary-normal-hover": "rgba(255, 147, 0, 0.25)",
    "ha-color-fill-primary-quiet-resting": "rgba(255, 147, 0, 0.08)",
    "ha-color-fill-primary-quiet-hover": "rgba(255, 147, 0, 0.15)",
    "ha-color-fill-disabled-normal-resting": "rgba(99, 99, 102, 0.08)",
    "ha-color-on-disabled-normal": "rgba(199, 199, 204, 0.50)",
    "ha-color-fill-disabled-loud-resting": "rgba(99, 99, 102, 0.22)",
    "ha-color-on-disabled-loud": "rgba(199, 199, 204, 0.55)",
    "ha-color-on-disabled-quiet": "rgba(199, 199, 204, 0.50)",
    "ha-color-fill-neutral-quiet-resting": "#1C1C1E",
    "ha-color-fill-neutral-quiet-hover": "#2C2C2E",
    "ha-color-fill-neutral-quiet-active": "#1C1C1E",
    "ha-color-fill-neutral-normal-resting": "#2C2C2E",
    "ha-color-fill-neutral-normal-hover": "#1C1C1E",
    "ha-color-fill-neutral-normal-active": "#2C2C2E",
    "ha-color-fill-danger-normal-resting": "rgba(255, 69, 58, 0.15)",
    "ha-color-fill-danger-normal-hover": "rgba(255, 69, 58, 0.22)",
    "ha-color-fill-danger-normal-active": "rgba(255, 69, 58, 0.28)",
    "ha-color-on-danger-normal": "#F2F2F7",
    "ha-color-fill-warning-normal-resting": "rgba(255, 214, 10, 0.15)",
    "ha-color-fill-warning-normal-hover": "rgba(255, 214, 10, 0.22)",
    "ha-color-fill-warning-normal-active": "rgba(255, 214, 10, 0.28)",
    "ha-color-on-warning-normal": "#F2F2F7",
    "ha-tooltip-background-color": "#2C2C2E",
    "ha-tooltip-text-color": "#F2F2F7",
    "border-color": "rgba(225, 225, 225, 0.12)",
    "border-radius": "18px",
    "box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "divider-color": "rgba(225, 225, 225, 0.12)",
    "outline-color": "rgba(225, 225, 225, 0.12)",
    "outline-variant-color": "#38383A",
    "ha-card-border-color": "rgba(225, 225, 225, 0.12)",
    "ha-card-border-radius": "18px",
    "ha-card-border-width": "1px",
    "ha-card-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "ha-line-height-condensed": "1.25",
    "ha-line-height-expanded": "1.35",
    "ha-line-height-normal": "1.5",
    "bubble-border": "1px solid #38383A",
    "bubble-border-color": "rgba(225, 225, 225, 0.12)",
    "bubble-border-radius": "18px",
    "bubble-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "bubble-card-border-radius": "18px",
    "bubble-climate-border-radius": "18px",
    "bubble-climate-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "bubble-climate-icon-border-radius": "32px",
    "bubble-cover-border-radius": "18px",
    "bubble-cover-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "bubble-icon-border-radius": "14px",
    "bubble-media-player-border-radius": "18px",
    "bubble-media-player-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "bubble-pop-up-border-radius": "18px",
    "bubble-pop-up-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "bubble-select-border-radius": "18px",
    "bubble-separator-border-radius": "18px",
    "bubble-horizontal-buttons-stack-border-radius": "18px",
    "bubble-horizontal-buttons-stack-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "primary-font-family": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-body": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-heading": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-longform": "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Segoe UI', Roboto, Arial, sans-serif",
    "ha-font-family-code": "'SF Mono', 'Roboto Mono', Consolas, monospace",
    "mdc-typography-font-family": "'SF Mono', 'Roboto Mono', Consolas, monospace",
    "ha-font-size-scale": "1",
    "ha-font-size-2xs": "8px",
    "ha-font-size-xs": "8px",
    "ha-font-size-s": "12px",
    "ha-font-size-m": "14px",
    "ha-font-size-l": "16px",
    "ha-font-size-xl": "18px",
    "ha-font-size-2xl": "20px",
    "ha-font-size-3xl": "22px",
    "ha-font-size-4xl": "24px",
    "ha-font-weight-light": "300",
    "ha-font-weight-normal": "400",
    "ha-font-weight-body": "400",
    "ha-font-weight-medium": "500",
    "ha-font-weight-heading": "500",
    "ha-font-weight-action": "500",
    "ha-font-weight-bold": "700",
    "rgb-primary-color": "255, 147, 0",
    "rgb-accent-color": "255, 147, 0",
    "rgb-primary-text-color": "254, 255, 255",
    "rgb-secondary-text-color": "199, 199, 204",
    "rgb-card-background-color": "28, 28, 30",
    "rgb-primary-background-color": "0, 0, 0",
    "rgb-blue-color": "10, 132, 255",
    "rgb-orange-color": "255, 159, 10",
    "rgb-state-light-color": "10, 132, 255",
    "rgb-state-cover-color": "10, 132, 255",
    "rgb-state-fan-color": "10, 132, 255",
    "rgb-state-media_player-color": "10, 132, 255",
    "mush-rgb-primary-text-color": "242, 242, 247",
    "mush-rgb-secondary-text-color": "199, 199, 204",
    "mush-rgb-state-light": "10, 132, 255",
    "mush-rgb-state-cover": "10, 132, 255",
    "mush-rgb-state-entity": "10, 132, 255",
    "mush-rgb-state-fan": "10, 132, 255",
    "mush-rgb-state-media-player": "10, 132, 255",
    "mush-rgb-state-vacuum": "10, 132, 255",
    "mush-rgb-success": "48, 209, 88",
    "mush-rgb-warning": "255, 214, 10",
    "mush-rgb-danger": "255, 69, 58",
    "mush-rgb-disabled": "99, 99, 102",
    "mush-rgb-info": "10, 132, 255",
    "graph-color-1": "#0A84FF",
    "graph-color-2": "#64D2FF",
    "graph-color-3": "#30D158",
    "graph-color-4": "#BF5AF2",
    "graph-color-5": "#FF453A",
    "graph-color-6": "#32ADE6",
    "graph-color-7": "#64D2FF",
    "graph-color-8": "#FF375F",
    "graph-color-9": "#FF9F0A",
    "graph-color-10": "#5E5CE6",
    "graph-color-11": "#A3D977",
    "graph-color-12": "#FFD60A",
    "graph-color-13": "#BF5AF2",
    "graph-color-14": "#A2845E",
    "energy-grid-consumption-color": "#0A84FF",
    "energy-grid-return-color": "#BF5AF2",
    "energy-solar-color": "#FF9F0A",
    "energy-non-fossil-color": "#30D158",
    "energy-battery-out-color": "#64D2FF",
    "energy-battery-in-color": "#BF5AF2",
    "energy-gas-color": "#FF453A",
    "energy-water-color": "#32ADE6",
    "bubble-card-background-color": "#1C1C1E",
    "bubble-secondary-background-color": "#2C2C2E",
    "bubble-icon-background-color": "#2C2C2E",
    "bubble-icon-color": "#ff9300",
    "bubble-name-color": "#feffff",
    "bubble-state-color": "#C7C7CC",
    "bubble-accent-color": "#ff9300",
    "bubble-active-color": "#ff9300",
    "bubble-line-background-color": "rgba(225, 225, 225, 0.12)",
    "bubble-pop-up-background-color": "#000000",
    "bubble-pop-up-backdrop-filter": "blur(18px)",
    "dialog-box-shadow": "0 10px 30px rgba(0,0,0,.50)",
    "more-info-header-background": "#2C2C2E",
    "more-info-header-color": "#F2F2F7",
    "popup-border-radius": "12px",
    "ha-dialog-scrim-backdrop-filter": "blur(10px)",
    "ha-dialog-surface-background": "rgba(28, 28, 30, 0.92)",
    "mdc-dialog-scrim-color": "rgba(0, 0, 0, 0.60)",
    "bubble-separator-background-color": "#1C1C1E",
    "bubble-separator-icon-background-color": "#2C2C2E",
    "bubble-separator-icon-color": "#0A84FF",
    "bubble-separator-line-color": "rgba(225, 225, 225, 0.12)",
    "bubble-separator-name-color": "#feffff",
    "bubble-separator-text-color": "#feffff",
    "bubble-horizontal-buttons-stack-background-color": "#1C1C1E",
    "bubble-horizontal-buttons-stack-button-background-color": "#2C2C2E",
    "bubble-sub-buttons-main-background-color": "#1C1C1E",
    "bubble-climate-background-color": "#1C1C1E",
    "bubble-climate-main-background-color": "#1C1C1E",
    "bubble-cover-background-color": "#1C1C1E",
    "bubble-cover-main-background-color": "#1C1C1E",
    "bubble-media-player-background-color": "#1C1C1E",
    "bubble-media-player-main-background-color": "#1C1C1E",
    "mush-card-background": "#1C1C1E",
    "mush-control-background-color": "#2C2C2E",
    "mush-icon-background-color": "#2C2C2E",
    "mush-card-primary-color": "#feffff",
    "mush-card-secondary-color": "#C7C7CC",
    "mush-title-color": "#feffff",
    "mush-subtitle-color": "#C7C7CC",
    "mush-icon-color": "#0A84FF",
    "mush-icon-active-color": "#ff9300",
    "card-mod-theme": "basis",
    "card-mod-card-yaml": "\n.: |\n  /* HATG Bubble Card: zentraler card-mod Block */\n  ha-card {\n    /* v0.4.50: Enrico - \"Popup, Heizung und freier Button haben keinen\n       cardmod genau so wie die Menueleiste unten.\" Root Cause (im echten\n       Bubble-Card-Quellcode nachgeschaut): JEDE Bubble-Karte nutzt fuer\n       Hintergrund/Icon/Name/Radius automatisch Fallback-Ketten wie\n       var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, ...)) -\n       diese Variablen haben wir bisher nie gesetzt, nur einzelne Klassen per\n       !important erzwungen (siehe Liste unten). Fuer Kartentypen, die nicht\n       in dieser Liste stehen (z. B. ein reiner \"button\"-Typ ohne Entity wie\n       ein Pop-up-Oeffner, oder die \"sub-buttons\"-Kartenart), griff bisher\n       keine unserer Regeln - Bubble Card fiel auf neutrale Standardwerte\n       zurueck. Jetzt setzen wir die von Bubble Card selbst erwarteten\n       Variablen direkt auf ha-card (genau wie Enricos alter Pro-Karte-\n       card_mod es tat), zeigen aber weiterhin auf unsere eigenen, im Editor\n       bearbeitbaren Felder - das deckt jetzt automatisch auch kuenftige/\n       bisher unbekannte Bubble-Kartentypen ab, ohne dass wir jede einzeln\n       nachtragen muessen. */\n    --bubble-main-background-color: var(--bubble-main-buttons-background-color, var(--card-background-color));\n    --bubble-secondary-background-color: var(--bubble-secondary-background-color, var(--secondary-background-color));\n    --bubble-icon-background-color: var(--bubble-icon-background-color, var(--secondary-background-color));\n    --bubble-icon-color: var(--bubble-icon-color, var(--accent-color));\n    /* v0.4.53: Enrico - vorsorglich \"--bubble-accent-color\" mit aufnehmen,\n       falls kuenftig card_type: calendar mit \"show_progress: true\" genutzt\n       wird. Bubble Card berechnet die Fortschritts-Hervorhebung fuer laufende\n       Termine dann ueber \"var(--bubble-event-accent-color,\n       var(--bubble-accent-color, var(--bubble-default-color)))\" (siehe\n       changes.js im echten Bubble-Card-Quellcode) - ohne eigene Definition\n       blieb diese Hervorhebung bisher farblos, da wir --bubble-accent-color\n       nie gesetzt haben und Bubble Card selbst dafuer keinen eigenen\n       Standardwert bereitstellt. */\n    --bubble-accent-color: var(--bubble-accent-color, var(--accent-color));\n    --bubble-name-color: var(--bubble-name-color, var(--primary-text-color));\n    --bubble-state-color: var(--bubble-state-color, var(--secondary-text-color));\n    --bubble-border-radius: var(--bubble-border-radius, var(--ha-card-border-radius, 18px));\n    /* Bubble Card setzt bei button_type: switch im \"an\"-Zustand selbst\n       eine deckende Akzentfarben-Flutung ueber die ganze Karte\n       (--bubble-button-background-color, per JS/inline gesetzt) -\n       das sieht anders aus als Mushroom/Tile, die nur den Icon-Kreis\n       aufleuchten lassen. Global neutralisiert, damit die Kartenflaeche\n       in JEDEM Zustand dunkel/neutral bleibt und nur noch das Icon\n       (siehe .is-on .bubble-icon-container weiter unten) den\n       \"an\"-Zustand zeigt - alle drei Frameworks sollen so nah wie\n       moeglich gleich aussehen (Enrico: \"keiner soll merken was\n       welche Karte ist\"). */\n    --bubble-button-background-color: transparent !important;\n    border-radius: var(--bubble-border-radius, var(--ha-card-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-box-shadow, var(--ha-card-box-shadow, none)) !important;\n    background: var(--bubble-main-buttons-background-color, var(--ha-card-background, var(--card-background-color))) !important;\n    border: var(--bubble-border, 1px solid var(--bubble-border-color, var(--ha-card-border-color, transparent))) !important;\n    color: var(--bubble-name-color, var(--primary-text-color)) !important;\n    overflow: hidden !important;\n    backdrop-filter: var(--card-backdrop-blur, none) !important;\n  }\n\n  .bubble-card,\n  .bubble-button-card-container,\n  .bubble-media-player,\n  .bubble-media-player-container,\n  .bubble-cover-card-container,\n  .bubble-climate-card-container,\n  .bubble-horizontal-buttons-stack-card-container,\n  .bubble-pop-up,\n  .bubble-pop-up-container {\n    border-radius: var(--bubble-border-radius, var(--ha-card-border-radius, 18px)) !important;\n    background: var(--bubble-main-buttons-background-color, var(--ha-card-background, var(--card-background-color))) !important;\n    box-shadow: var(--bubble-box-shadow, var(--ha-card-box-shadow, none)) !important;\n    border: var(--bubble-border, 1px solid var(--bubble-border-color, var(--ha-card-border-color, transparent))) !important;\n    color: var(--bubble-name-color, var(--primary-text-color)) !important;\n    overflow: hidden !important;\n  }\n\n  /* Echtes Bubble-Card-Element fuer den Zustands-/Fuellfarben-Hintergrund\n     (bisher faelschlich als \".bubble-button-background\" angesprochen - diese\n     Klasse existiert in Bubble Card gar nicht, der echte Name ist\n     \".bubble-background\"). Nur Radius+Clipping erzwingen (per \"inherit\" vom\n     jeweils schon korrekt gesetzten Elternelement), NICHT die Hintergrundfarbe -\n     die uebernimmt Bubble Card selbst korrekt je nach Zustand/Kartentyp ueber\n     die passenden bubble-*-button-background-color-Felder. Behebt eckige statt\n     runde Kartenecken bei Button-/Zustands-Karten. */\n  .bubble-background {\n    border-radius: inherit !important;\n    overflow: hidden !important;\n  }\n\n  .bubble-icon-container,\n  .bubble-icon-wrapper,\n  .bubble-climate-icon-container,\n  .bubble-cover-icon-container,\n  .bubble-media-player-icon-container {\n    border-radius: var(--bubble-icon-border-radius, var(--bubble-button-border-radius, var(--bubble-border-radius, 18px))) !important;\n    background: var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--secondary-background-color))) !important;\n    color: var(--bubble-icon-color, var(--accent-color)) !important;\n  }\n\n  .bubble-icon,\n  .bubble-icon-container ha-icon,\n  .bubble-icon-wrapper ha-icon,\n  .bubble-climate-icon-container ha-icon,\n  .bubble-cover-icon-container ha-icon,\n  .bubble-media-player-icon-container ha-icon {\n    color: var(--bubble-icon-color, var(--accent-color)) !important;\n  }\n\n  .bubble-sub-button,\n  .bubble-sub-button-container,\n  .bubble-sub-button-background,\n  .bubble-climate-button,\n  .bubble-cover-button,\n  .bubble-media-player-button {\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-button-border-radius, var(--bubble-border-radius, 18px))) !important;\n    background: var(--bubble-sub-button-background-color, var(--bubble-secondary-background-color, var(--secondary-background-color))) !important;\n    color: var(--bubble-sub-button-text-color, var(--bubble-state-color, var(--secondary-text-color))) !important;\n    /* Enrico: \"warum erhalten die subbutton keinen schatten?\" - vorher hier\n       hart auf none erzwungen, jetzt ueber eigenes Feld steuerbar (Fallback\n       auf den allgemeinen Bubble-Schatten, nicht mehr automatisch aus). */\n    box-shadow: var(--bubble-sub-button-box-shadow, var(--bubble-box-shadow, none)) !important;\n    border: 0 !important;\n  }\n\n  .bubble-sub-button ha-icon,\n  .bubble-sub-button-container ha-icon,\n  .bubble-climate-button ha-icon,\n  .bubble-cover-button ha-icon,\n  .bubble-media-player-button ha-icon,\n  .bubble-horizontal-buttons-stack-card-container .bubble-icon,\n  .bubble-horizontal-buttons-stack-card-container ha-icon {\n    color: var(--bubble-sub-button-icon-color, var(--bubble-icon-color, var(--accent-color))) !important;\n  }\n\n  .bubble-name,\n  .bubble-button-card-container .name,\n  .bubble-media-player .name,\n  .bubble-cover-card-container .name,\n  .bubble-climate-card-container .name {\n    color: var(--bubble-name-color, var(--primary-text-color)) !important;\n    font-size: var(--bubble-name-font-size, 14px) !important;\n    font-weight: var(--bubble-name-font-weight, 500) !important;\n  }\n\n  .bubble-state,\n  .bubble-secondary,\n  .bubble-media-player .state,\n  .bubble-cover-card-container .state,\n  .bubble-climate-card-container .state {\n    color: var(--bubble-state-color, var(--secondary-text-color)) !important;\n    font-size: var(--bubble-state-font-size, 12px) !important;\n  }\n\n  .bubble-range,\n  .bubble-range-slider,\n  .bubble-slider-container,\n  .bubble-slider-background,\n  .bubble-media-player-slider-background,\n  .bubble-cover-slider-background {\n    border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 18px)) !important;\n    background: var(--slider-track-color, var(--divider-color)) !important;\n    overflow: hidden !important;\n  }\n\n  .bubble-range-fill,\n  .bubble-slider-fill,\n  .bubble-slider-active,\n  .bubble-media-player-slider-fill,\n  .bubble-cover-slider-fill {\n    background: var(--slider-color, var(--accent-color)) !important;\n  }\n  /* Slider-Hintergrund (Track) nutzt jetzt die echten, editierbaren Felder\n     slider-color/slider-track-color (Sektion \"Slider & Progress\") statt der\n     frueher hier verwendeten bubble-slider-*-Variablen - die gab es in Bubble\n     Card nie wirklich (Altlasten-Bereinigung hat sie deshalb aus dem Manifest\n     entfernt), wodurch diese Regel bisher IMMER auf divider-color/accent-color\n     zurueckgefallen ist, egal was auf \"Slider & Progress\" eingestellt war.\n     Hinweis: \"Slider-Enden abrunden\" und \"Slider-Farbverlauf\" (siehe Plugin-Seite)\n     wirken weiterhin nur direkt in der jeweiligen Bubble-Card ueber deren eigenen\n     \"styles:\"-Schluessel - Bubble Card ueberschreibt CSS am Slider-FUELLBALKEN\n     (.bubble-slider-fill usw.) hier per eigenem, hoeher spezifischem <style>-Tag\n     sonst selbst; der Slider-HINTERGRUND (Track) ist davon nicht betroffen und\n     reagiert jetzt korrekt auf slider-track-color. Fertige Kopiervorlagen fuer\n     Fuellfarbe/Rundung gibt es auf der Plugin-Seite. */\n\n  .bubble-climate-card-container {\n    border-radius: var(--bubble-climate-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-climate-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-climate-main-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  .bubble-cover-card-container {\n    border-radius: var(--bubble-cover-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-cover-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-cover-main-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  .bubble-media-player {\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-media-player-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-media-player-main-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  .bubble-horizontal-buttons-stack-card-container {\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 18px)) !important;\n    box-shadow: var(--bubble-horizontal-buttons-stack-box-shadow, var(--bubble-box-shadow, none)) !important;\n    background: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n  }\n\n  /* Bubble Card horizontal-buttons-stack: die echten Klassen je Einzelbutton\n     sind \".bubble-button\" (Layout), \".bubble-background-color\" (von Bubble\n     Card hartcodierter weisser Rahmen) und \".bubble-background\" (Fuellfarbe,\n     Standard-Fallback landet NICHT bei --bubble-main-buttons-background-color wie bei\n     den anderen Kartentypen). \".bubble-horizontal-buttons-stack .bubble-button\"\n     (oben, alte Version) existierte in Bubble Card nie und griff nie. Ziel:\n     die drei Buttons sollen optisch genauso aussehen wie die uebrigen\n     Bubble-Karten (gleicher Radius, gleicher Rahmen, gleiche Kartenfarbe\n     statt hartcodiertem weissem Rahmen). */\n  .bubble-horizontal-buttons-stack-card-container .bubble-button,\n  .bubble-horizontal-buttons-stack-card-container .bubble-background-color,\n  .bubble-horizontal-buttons-stack-card-container .bubble-background {\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 18px)) !important;\n  }\n\n  .bubble-horizontal-buttons-stack-card-container .bubble-background-color {\n    border: var(--bubble-border, 1px solid var(--bubble-border-color, var(--ha-card-border-color, transparent))) !important;\n  }\n\n  .bubble-horizontal-buttons-stack-card-container .bubble-background {\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-main-buttons-background-color, var(--card-background-color))) !important;\n    box-shadow: var(--bubble-horizontal-buttons-stack-box-shadow, var(--bubble-box-shadow, none)) !important;\n    opacity: 1 !important;\n  }\n\n  .bubble-pop-up,\n  .bubble-pop-up-background,\n  .bubble-pop-up-container {\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 18px)) !important;\n    background: var(--bubble-pop-up-background-color, var(--primary-background-color)) !important;\n    box-shadow: var(--bubble-pop-up-box-shadow, var(--bubble-box-shadow, none)) !important;\n    backdrop-filter: var(--bubble-pop-up-backdrop-filter, blur(16px)) !important;\n  }\n\n  /* --- Icon Leucht-Zustand (an/aus): Bubble Card ---\n     .bubble-icon-container, .is-on/.is-off und ha-icon.bubble-main-icon\n     liegen laut Bubble-Card-Quellcode im selben, von aussen erreichbaren\n     Shadow-Root wie .bubble-container (anders als Sub-Buttons, die\n     weiterhin card_mod: pro Karte brauchen). Live von Enrico getestet. */\n  .bubble-icon-container {\n    transition: box-shadow .3s ease-in-out;\n  }\n  .is-off .bubble-icon-container {\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.25),\n                0 1px 2px rgba(0, 0, 0, 0.15) !important;\n  }\n  .is-on .bubble-icon-container {\n    box-shadow: 0 0 10px 2px rgba(var(--rgb-accent-color), 0.55),\n                inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;\n  }\n  .is-on ha-icon.bubble-main-icon {\n    color: var(--bubble-icon-color, var(--accent-color)) !important;\n    filter: drop-shadow(0 0 4px rgba(var(--rgb-accent-color), 0.7));\n  }\n\n  /* --- Mushroom: Icon-Farbe/-Hintergrund/-Rundung an Bubble angleichen ---\n     Mushroom liest --icon-color/--shape-color/--icon-border-radius selbst\n     ueber mushroom-shape-icon (eigener Quellcode: shape-icon.ts). Faellt\n     zuerst auf die eigenen mush-*-Felder zurueck, dann auf die Bubble-\n     Felder, damit alle drei Frameworks optisch gleich aussehen. */\n  mushroom-shape-icon {\n    --icon-color: var(--mush-icon-color, var(--bubble-icon-color, var(--accent-color)));\n    --shape-color: var(--mush-icon-background-color, var(--bubble-icon-background-color, var(--secondary-background-color)));\n    --icon-border-radius: var(--bubble-icon-border-radius, 50%);\n  }\n",
    "bubble-button-card-background-color": "#1C1C1E",
    "bubble-button-main-background-color": "#1C1C1E",
    "bubble-climate-button-background-color": "#2C2C2E",
    "bubble-cover-button-background-color": "#2C2C2E",
    "bubble-media-player-button-background-color": "#2C2C2E",
    "mush-slider-background-color": "#2C2C2E",
    "bubble-button-active-color": "#0A84FF",
    "bubble-climate-button-icon-color": "#C7C7CC",
    "bubble-cover-button-icon-color": "#C7C7CC",
    "bubble-horizontal-buttons-stack-button-icon-color": "#C7C7CC",
    "bubble-horizontal-buttons-stack-button-text-color": "#F2F2F7",
    "bubble-media-player-button-icon-color": "#C7C7CC",
    "deep-purple-color": "#6E41AB",
    "indigo-color": "#3F51B5",
    "light-blue-color": "#03A9F4",
    "teal-color": "#009688",
    "light-green-color": "#8BC34A",
    "lime-color": "#CDDC39",
    "amber-color": "#FFC107",
    "deep-orange-color": "#FF6F22",
    "brown-color": "#795548",
    "light-grey-color": "#BDBDBD",
    "dark-grey-color": "#606060",
    "blue-grey-color": "#607D8B",
    "disabled-color": "#464646",
    "outline-hover-color": "rgba(225, 225, 225, 0.24)",
    "state-alarm_control_panel-armed_custom_bypass-color": "#30D158",
    "state-alarm_control_panel-armed_night-color": "#30D158",
    "state-alarm_control_panel-armed_vacation-color": "#30D158",
    "state-alarm_control_panel-arming-color": "#0A84FF",
    "state-alarm_control_panel-disarming-color": "#0A84FF",
    "state-alarm_control_panel-pending-color": "#0A84FF",
    "state-alert-off-color": "#0A84FF",
    "state-alert-on-color": "#FF453A",
    "state-binary_sensor-active-color": "#FFC107",
    "state-binary_sensor-battery-on-color": "#FF453A",
    "state-binary_sensor-carbon_monoxide-on-color": "#FF453A",
    "state-binary_sensor-gas-on-color": "#FF453A",
    "state-binary_sensor-heat-on-color": "#FF453A",
    "state-binary_sensor-lock-on-color": "#FF453A",
    "state-binary_sensor-moisture-on-color": "#FF453A",
    "state-binary_sensor-problem-on-color": "#FF453A",
    "state-binary_sensor-safety-on-color": "#FF453A",
    "state-binary_sensor-smoke-on-color": "#FF453A",
    "state-binary_sensor-sound-on-color": "#FF453A",
    "state-binary_sensor-tamper-on-color": "#FF453A",
    "state-climate-dry-color": "#0A84FF",
    "state-climate-fan_only-color": "#32ADE6",
    "state-climate-heat_cool-color": "#FFC107",
    "state-device_tracker-active-color": "#0A84FF",
    "state-device_tracker-home-color": "#30D158",
    "state-humidifier-on-color": "#0A84FF",
    "state-lawn_mower-active-color": "#009688",
    "state-lawn_mower-error-color": "#FF453A",
    "state-lock-jammed-color": "#FF453A",
    "state-lock-open-color": "#FF453A",
    "state-lock-opening-color": "#0A84FF",
    "state-media_player-active-color": "#0A84FF",
    "state-person-active-color": "#0A84FF",
    "state-person-home-color": "#30D158",
    "state-plant-active-color": "#FF453A",
    "state-siren-active-color": "#FF453A",
    "state-sun-above_horizon-color": "#FFC107",
    "state-sun-below_horizon-color": "#3F51B5",
    "state-update-active-color": "#0A84FF",
    "state-valve-active-color": "#0A84FF",
    "state-vacuum-error-color": "#FF453A",
    "state-water_heater-eco-color": "#30D158",
    "state-water_heater-electric-color": "#0A84FF",
    "state-water_heater-gas-color": "#0A84FF",
    "state-water_heater-heat_pump-color": "#0A84FF",
    "state-water_heater-high_demand-color": "#FF6F22",
    "state-water_heater-performance-color": "#FF6F22",
    "state-weather-clear_night-color": "#6E41AB",
    "state-weather-cloudy-color": "#BDBDBD",
    "state-weather-exceptional-color": "#FF453A",
    "state-weather-fog-color": "#C7C7CC",
    "state-weather-hail-color": "#32ADE6",
    "state-weather-lightning_rainy-color": "#CDDC39",
    "state-weather-lightning-color": "#FFD60A",
    "state-weather-partlycloudy-color": "#607D8B",
    "state-weather-pouring-color": "#3F51B5",
    "state-weather-rainy-color": "#0A84FF",
    "state-weather-snowy_rainy-color": "#03A9F4",
    "state-weather-snowy-color": "#C0E0FF",
    "state-weather-sunny-color": "#FFC107",
    "state-weather-windy_variant-color": "#30D158",
    "state-weather-windy-color": "#30D158",
    "state-sensor-battery-high-color": "#30D158",
    "state-sensor-battery-medium-color": "#0A84FF",
    "state-sensor-battery-low-color": "#FF453A",
    "color-1": "#0A84FF",
    "color-2": "#64D2FF",
    "color-3": "#30D158",
    "color-4": "#BF5AF2",
    "color-5": "#FF453A",
    "color-6": "#32ADE6",
    "color-7": "#64D2FF",
    "color-8": "#FF375F",
    "color-9": "#FF9F0A",
    "color-10": "#5E5CE6",
    "color-11": "#A3D977",
    "color-12": "#FFD60A",
    "color-13": "#BF5AF2",
    "color-14": "#A2845E",
    "ha-switch-background-color": "#3A3A3C",
    "ha-switch-background-color-hover": "#3A3A3C",
    "ha-switch-border-color": "rgba(0,0,0,0)",
    "ha-switch-thumb-background-color": "#636366",
    "ha-switch-thumb-background-color-hover": "#636366",
    "ha-switch-thumb-border-color": "rgba(0,0,0,0)",
    "ha-switch-thumb-border-color-hover": "rgba(0,0,0,0)",
    "ha-switch-checked-background-color": "#1F3A5F",
    "ha-switch-checked-background-color-hover": "#1F3A5F",
    "ha-switch-checked-border-color": "rgba(0,0,0,0)",
    "ha-switch-checked-thumb-background-color": "#0A84FF",
    "ha-switch-checked-thumb-background-color-hover": "#0A84FF",
    "ha-switch-checked-thumb-border-color": "rgba(0,0,0,0)",
    "ha-switch-checked-thumb-border-color-hover": "rgba(0,0,0,0)",
    "printer-cyan-color": "#33C3FF",
    "printer-magenta-color": "#FF3EA8",
    "printer-yellow-color": "#FFE14D",
    "bubble-main-buttons-background-color": "#1C1C1E",
    "card-backdrop-blur": "none"
  }
}
;

const HATG_BASE_PRESET_CORE_KEYS = [
  "primary-color",
  "accent-color",
  "primary-background-color",
  "secondary-background-color",
  "card-background-color",
  "primary-text-color",
  "secondary-text-color",
];
function hatgPickCoreValues(mode, overrides) {
  const base = {};
  HATG_BASE_PRESET_CORE_KEYS.forEach((k) => {
    base[k] = overrides && overrides[k] !== undefined ? overrides[k] : HATG_MANIFEST[mode][k];
  });
  return base;
}
const HATG_BASE_PRESETS = [
  {
    id: "cool-slate",
    label: "Kühles Blau-Grau",
    desc: "Die HATG-Basis-Vorlage: kühlere Blau-/Grautöne, ruhiger, technischer Look.",
    swatch: "#2F6FE0",
    values: {
      light: hatgPickCoreValues("light", {
        "primary-color": "#2F6FE0",
        "accent-color": "#2F6FE0",
        "primary-background-color": "#F4F6FA",
        "secondary-background-color": "#E7ECF3",
        "card-background-color": "#FFFFFF",
        "primary-text-color": "#16202B",
        "secondary-text-color": "#55677A",
      }),
      dark: hatgPickCoreValues("dark", {
        "primary-color": "#4D8CFF",
        "accent-color": "#4D8CFF",
        "primary-background-color": "#10151C",
        "secondary-background-color": "#1B222C",
        "card-background-color": "#161C25",
        "primary-text-color": "#E7EDF5",
        "secondary-text-color": "#97A6B8",
      }),
    },
  },
];

function hatgPluginCardTemplate(plugin) {
  if (typeof plugin.template === "function") return plugin.template(plugin);
  return `type: custom:bubble-card
card_type: button
button_type: slider
entity: light.deine_entity_hier   # eigene Entity eintragen
name: Mein Slider
show_state: true
styles: |
  ${plugin.css}
`;
}
function hatgGenericButtonPluginTemplate(plugin) {
  return `type: custom:bubble-card
card_type: button
button_type: name
entity: light.deine_entity_hier   # eigene Entity eintragen, funktioniert genauso in jedem anderen Bubble-Kartentyp (button, climate, calendar, sub-buttons, ...)
name: Meine Karte
styles: |
  ${plugin.css}
`;
}
function hatgStateReactivePluginTemplate(plugin) {
  return `type: custom:bubble-card
card_type: button
button_type: name
entity: ENTITY_HIER   # diese Entity wird ueberwacht (on/off) - unten im styles:-Block an 2 Stellen ebenfalls ersetzen
name: Meine Karte
styles: |
  ${plugin.css}
`;
}
function hatgSubButtonGlowPluginTemplate(plugin) {
  return `type: custom:bubble-card
card_type: sub-buttons
hide_main_background: true
sub_button:
  main: []
  bottom:
    - name: Schnellzugriff
      buttons_layout: inline
      justify_content: center
      group:
        - entity: light.deine_entity_hier   # eigene Entity eintragen
          icon: mdi:lightbulb-group
          show_name: true
          tap_action:
            action: toggle
          show_background: true
          state_background: true
        - entity: switch.weitere_entity_hier   # weitere Buttons nach Bedarf ergaenzen
          icon: mdi:toggle-switch
          show_name: true
          tap_action:
            action: toggle
          show_background: true
          state_background: true
card_mod:
  style: |
    ${plugin.css}
`;
}

function hatgIsPluginCombinable(plugin) {
  return plugin.combinable !== false;
}

function hatgBuildCombinedPluginTemplate(plugins) {
  const needsSlider = plugins.some(
    (p) =>
      p.id === "slider-rounded-ends" ||
      p.id === "slider-gradient" ||
      p.id === "slider-3d-shadow" ||
      p.id === "slider-inset-track"
  );
  const needsEntityPlaceholder = plugins.some((p) => p.id === "state-reactive-glow");
  const buttonType = needsSlider ? "slider" : "switch";
  const entity = needsEntityPlaceholder ? "ENTITY_HIER" : "light.deine_entity_hier";
  const entityComment = needsEntityPlaceholder
    ? "   # diese Entity wird ueberwacht (on/off) - im styles:-Block ebenfalls ersetzen"
    : "   # eigene Entity eintragen";
  const combinedCss = plugins.map((p) => `  /* --- ${p.label} --- */\n  ${p.css}`).join("\n\n");
  return `type: custom:bubble-card
card_type: button
button_type: ${buttonType}
entity: ${entity}${entityComment}
name: Meine Karte
show_state: true
styles: |
${combinedCss}
`;
}

const HATG_PLUGIN_SCREENSHOT_DUMMY =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220">
      <rect width="400" height="220" rx="16" fill="#23262e"/>
      <rect x="1" y="1" width="398" height="218" rx="15" fill="none" stroke="#3a3f4a" stroke-width="2"/>
      <g fill="none" stroke="#6b7280" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <rect x="150" y="80" width="100" height="70" rx="8"/>
        <circle cx="172" cy="100" r="7"/>
        <path d="M150 140 L185 112 L205 130 L225 105 L250 140"/>
      </g>
      <text x="200" y="185" font-family="-apple-system,sans-serif" font-size="13" fill="#9aa4b5" text-anchor="middle">Screenshot folgt</text>
    </svg>`
  );
const HATG_PLUGINS = [
  {
    id: "slider-rounded-ends",
    label: "Slider-Enden abrunden",
    desc: "Rundet die Füllung von Helligkeits-, Lautstärke-, Cover- und Klima-Slidern an beiden Enden ab, statt einer geraden Kante beim aktuellen Wert.",
    screenshot: "/hatg_static/plugins/slider-rounded-ends.png",
    css: `.bubble-range-fill,
  .bubble-slider-fill,
  .bubble-slider-active,
  .bubble-media-player-slider-fill,
  .bubble-cover-slider-fill {
    border-radius: var(--bubble-button-border-radius, var(--bubble-border-radius, 18px)) !important;
  }`,
  },
  {
    id: "slider-gradient",
    label: "Slider-Farbverlauf (hell → dunkel)",
    desc: "Die Füllung der Slider verläuft von hell (Start) zu dunkel (aktueller Wert) statt einfarbig zu sein.",
    screenshot: "/hatg_static/plugins/slider-gradient.png",
    css: `.bubble-range-fill,
  .bubble-slider-fill,
  .bubble-slider-active,
  .bubble-media-player-slider-fill,
  .bubble-cover-slider-fill {
    background: linear-gradient(
      to right,
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 55%, white),
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 65%, black)
    ) !important;
  }
  .bubble-range-fill.fill-orientation-right {
    background: linear-gradient(
      to left,
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 55%, white),
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 65%, black)
    ) !important;
  }
  .bubble-range-fill.fill-orientation-top {
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 55%, white),
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 65%, black)
    ) !important;
  }
  .bubble-range-fill.fill-orientation-bottom {
    background: linear-gradient(
      to top,
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 55%, white),
      color-mix(in srgb, var(--bubble-slider-color, var(--accent-color)) 65%, black)
    ) !important;
  }`,
  },
  {
    id: "slider-3d-shadow",
    label: "Slider: 3D-Schatten",
    desc: "Der Slider-Balken bekommt einen mehrschichtigen Schatten (äußerer Schlagschatten + innere Glanzkante oben + innere Wölbung unten) statt einer flachen Fläche - wirkt erhaben/gewölbt statt eingedruckt.",
    screenshot: "/hatg_static/plugins/slider-3d-shadow.png",
    css: `.bubble-range-fill,
  .bubble-slider-fill,
  .bubble-slider-active,
  .bubble-media-player-slider-fill,
  .bubble-cover-slider-fill {
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.35),
                0 2px 4px -1px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(255, 255, 255, 0.25),
                inset 0 -2px 4px rgba(0, 0, 0, 0.25) !important;
  }`,
  },
  {
    id: "slider-inset-track",
    label: "Slider: Eingerückt mit Platz für Icon & Text",
    desc: "Der Slider-Balken füllt nicht mehr die komplette Karte, sondern ist auf allen Seiten eingerückt und beginnt erst rechts von Icon und Kartenname - die bleiben auf dem eigenen, unbedeckten Kartenhintergrund sichtbar. Radius bleibt konzentrisch zur äußeren Kartenrundung.",
    screenshot: "/hatg_static/plugins/slider-inset-track.png",
    hint: "Enrico hat live entdeckt, dass ein NEGATIVER Versatz (z. B. <code>right: -80px</code>) das Element ueber den Container hinausschiebt statt es einzurücken - deshalb hier bewusst nur positive Werte fuer top/right/bottom/left. <code>left: 165px</code> legt fest, wo der Balken anfaengt (Platz fuer Icon/Text) - je nach eigenem Icon/Text-Layout anpassen. Der Radius wird bewusst um denselben Betrag wie der Inset (5px) reduziert, damit die Rundung konzentrisch zur aeusseren Kartenrundung bleibt (innerer Radius = aeusserer Radius minus Inset), sonst wirkt die Ecke eckig statt rund. Vorlage unten in eine eigene Karte einfügen, Entity/Kartentyp anpassen, button_type: slider ist Voraussetzung.",
    css: `.bubble-range-slider {
    top: 5px !important;
    right: 5px !important;
    bottom: 5px !important;
    left: 165px !important;
    width: auto !important;
    height: auto !important;
    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height, 56px) / 2))) - 5px) !important;
  }`,
  },
  {
    id: "custom-card-background",
    label: "Individueller Karten-Hintergrund (per styles:)",
    desc: "Ein dezenter Farbverlauf von der eigenen Kartenfarbe zu einem leichten Schwarz-Schleier, um eine einzelne Karte hervorzuheben - z. B. um einen wichtigen Termin oder Hinweis von den übrigen Karten abzusetzen. Funktioniert in jedem Bubble-Card-Kartentyp (Button, Calendar, Climate, Sub-Buttons, ...), nicht nur bei Slidern.",
    screenshot: "/hatg_static/plugins/custom-card-background.png",
    template: hatgGenericButtonPluginTemplate,
    hint: "Bubble Cards eigener <code>styles:</code>-Schlüssel direkt in der Karte funktioniert zuverlässig für individuelle Ein-Karten-Anpassungen, die nicht global übers Theme gelten sollen. Wichtig bei <code>button_type: switch</code>: Bubble Card legt bei 'an' selbst eine deckende Akzentfarben-Ebene (<code>.bubble-background</code>, Opazität 1) über die Karte - ohne die Neutralisierung unten via <code>--bubble-button-background-color</code> würde der eigene Verlauf im 'an'-Zustand komplett verdeckt. Verlauf startet bewusst bei <code>var(--card-background-color)</code> statt einem festen Hex-Wert (Enrico hat live getestet und wollte die Startfarbe direkt von der eigenen Kartenfarbe ableiten, statt sie hart zu verdrahten - so passt sich der Verlauf automatisch jedem Theme an). Vorlage unten in eine eigene Karte einfügen, Entity/Kartentyp anpassen.",
    css: `.bubble-container {
    background-image: linear-gradient(
      to left,
      var(--card-background-color, var(--ha-card-background)) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  :host, ha-card {
    --bubble-button-background-color: transparent !important;
  }`,
  },
  {
    id: "glass-frost-light",
    label: "Glaseffekt: Helles Frost-Glas",
    desc: "Milchig-helles, angehauchtes Frost-Glas mit Weichzeichner-Unschärfe (backdrop-filter) statt einer blickdichten Kartenfarbe - wirkt wie mattes Glas vor dem dahinterliegenden Dashboard-Hintergrund.",
    screenshot: "/hatg_static/plugins/glass-frost-light.png",
    template: hatgGenericButtonPluginTemplate,
    hint: "backdrop-filter braucht einen durchscheinenden Hintergrund darunter, um sichtbar zu wirken - am besten auf einem Dashboard mit Hintergrundbild oder mehreren gestapelten Karten testen. Enthält denselben Safari-Ecken-Fix (-webkit-mask-image) wie 'Individueller Karten-Hintergrund', da auch hier .bubble-container mit border-radius+overflow betroffen ist. Vorlage unten in eine eigene Karte einfügen, Entity/Kartentyp anpassen.",
    css: `.bubble-container {
    background: rgba(255, 255, 255, 0.14) !important;
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    border: 1px solid rgba(255, 255, 255, 0.35);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  :host, ha-card {
    --bubble-button-background-color: transparent !important;
  }`,
  },
  {
    id: "glass-smoke-dark",
    label: "Glaseffekt: Dunkles Rauchglas",
    desc: "Dunkles, halbtransparentes Rauchglas mit Weichzeichner-Unschärfe - dezenter und weniger auffällig als das helle Frost-Glas, gut geeignet für dunkle Dashboards.",
    screenshot: "/hatg_static/plugins/glass-smoke-dark.png",
    template: hatgGenericButtonPluginTemplate,
    hint: "Gleiches Prinzip wie 'Helles Frost-Glas', nur mit dunklem statt hellem Grundton und dezenterem Rand. Enthält denselben Safari-Ecken-Fix (-webkit-mask-image). Vorlage unten in eine eigene Karte einfügen, Entity/Kartentyp anpassen.",
    css: `.bubble-container {
    background: rgba(10, 12, 16, 0.45) !important;
    backdrop-filter: blur(22px) saturate(120%);
    -webkit-backdrop-filter: blur(22px) saturate(120%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  :host, ha-card {
    --bubble-button-background-color: transparent !important;
  }`,
  },
  {
    id: "glass-accent-tint",
    label: "Glaseffekt: Akzentfarbe-getöntes Glas",
    desc: "Glaseffekt mit leichtem Farbstich in der Theme-Akzentfarbe statt neutralem Grau/Weiß - hebt eine Karte hervor, ohne sie blickdicht einzufärben. Zieht die Farbe automatisch aus var(--accent-color), passt sich also jedem Theme an.",
    screenshot: "/hatg_static/plugins/glass-accent-tint.png",
    template: hatgGenericButtonPluginTemplate,
    hint: "Nutzt color-mix() direkt mit var(--accent-color), daher keine feste Hex-Farbe im CSS - der Farbton folgt automatisch der aktuell aktiven Theme-Akzentfarbe. Enthält denselben Safari-Ecken-Fix (-webkit-mask-image). Vorlage unten in eine eigene Karte einfügen, Entity/Kartentyp anpassen.",
    css: `.bubble-container {
    background: color-mix(in srgb, var(--accent-color) 22%, transparent) !important;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid color-mix(in srgb, var(--accent-color) 45%, transparent);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  :host, ha-card {
    --bubble-button-background-color: transparent !important;
  }`,
  },
  {
    id: "glass-specular-edge",
    label: "Glaseffekt: Glas mit Lichtkante",
    desc: "Glaseffekt mit zusätzlichem diagonalem Licht-Schimmer oben links (Specular-Highlight), wie ein Reflex auf echtem Glas - für einen edleren, weniger flachen Look als reines Frost-Glas.",
    screenshot: "/hatg_static/plugins/glass-specular-edge.png",
    template: hatgGenericButtonPluginTemplate,
    hint: "Der Licht-Schimmer wird per ::before-Pseudoelement auf .bubble-container erzeugt, daher zusätzlich position: relative und overflow: hidden gesetzt (Bubble Card setzt overflow:hidden zwar bereits selbst, hier zur Sicherheit explizit). Enthält denselben Safari-Ecken-Fix (-webkit-mask-image). Vorlage unten in eine eigene Karte einfügen, Entity/Kartentyp anpassen.",
    css: `.bubble-container {
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.10) !important;
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  .bubble-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(115deg, rgba(255, 255, 255, 0.35) 0%, transparent 35%, transparent 100%);
    pointer-events: none;
  }
  :host, ha-card {
    --bubble-button-background-color: transparent !important;
  }`,
  },
  {
    id: "state-reactive-glow",
    label: "Zustandsabhängiges Kartendesign (Ampel-Effekt)",
    desc: "Karte wechselt Hintergrund, Rahmen und Icon-Leuchten je nachdem, ob eine gewählte Entity 'on' oder 'off' ist - z. B. rot/warnend bei einer aktiven Kamera-Erkennung oder einem offenen Sensor, sonst ruhig grün. Nutzt Bubble Cards eigenes Template-Feature (JS-Template-Literal mit direktem hass.states-Zugriff) statt statischem CSS.",
    screenshot: "/hatg_static/plugins/state-reactive-glow.png",
    template: hatgStateReactivePluginTemplate,
    hint: "Bubble Cards <code>styles:</code>-Schlüssel akzeptiert nicht nur reines CSS, sondern auch JS-Template-Literale (Backticks, <code>${...}</code>) mit direktem Zugriff auf <code>hass.states[...]</code> - dadurch kann sich das Aussehen einer Karte live nach einem Entity-Zustand richten, ganz ohne separate Template-/card-mod-Integration. Wichtig bei <code>button_type: switch</code>: Bubble Card legt bei 'an' selbst eine deckende Akzentfarben-Ebene (<code>.bubble-background</code>, Opazität 1) über die Karte - ohne die Neutralisierung unten via <code>--bubble-button-background-color</code> würde man vom eigenen Rot/Grün-Effekt nichts sehen. Vorlage unten in eine eigene Karte einfügen, ENTITY_HIER durch die zu überwachende Entity ersetzen.",
    css: `.bubble-button-card-container {
    border-radius: 24px !important;
    background: \${hass.states['ENTITY_HIER'].state === 'on'
      ? \`radial-gradient(circle at top left, rgba(255,60,60,0.24), transparent 44%),
         linear-gradient(145deg, rgba(58,31,35,0.92), rgba(31,41,55,0.88))\`
      : \`linear-gradient(145deg, var(--card-background-color), var(--card-background-color))\`
    } !important;
    box-shadow: \${hass.states['ENTITY_HIER'].state === 'on'
      ? 'inset 0 0 22px rgba(255,0,0,0.38), 0 0 24px rgba(255,40,40,0.20)'
      : 'inset 0 0 18px rgba(41,174,91,0.16), 0 0 18px rgba(41,174,91,0.10)'
    } !important;
  }
  .bubble-icon {
    filter: \${hass.states['ENTITY_HIER'].state === 'on'
      ? 'drop-shadow(0 0 8px rgba(255,60,60,0.85))'
      : 'drop-shadow(0 0 8px rgba(41,174,91,0.65))'
    } !important;
  }
  :host, ha-card {
    --bubble-button-background-color: transparent !important;
  }`,
  },
  {
    id: "sub-button-state-glow",
    label: "Sub-Button Leucht-Zustand (an/aus)",
    desc: "Sub-Buttons einer Bubble-Card bekommen im 'aus'-Zustand einen dezenten Neumorphic-Schatten statt kreidig-weißer Kanten, im 'an'-Zustand statt einer reinen Volltonfarbe ein sanftes, farbiges Glühen in der Akzentfarbe - der Hintergrund bleibt neutral grau, das Glühen wird zur alleinigen 'an'-Kennung.",
    screenshot: "/hatg_static/plugins/sub-button-state-glow.png",
    template: hatgSubButtonGlowPluginTemplate,
    combinable: false,
    hint: "Braucht die separate card-mod-Integration (nicht Bubble Cards eigenes <code>styles:</code>-Feld): das Glühen reagiert auf Bubble Cards intern per JS gesetzte Zustandsklassen <code>background-on</code>/<code>background-off</code> und nutzt ein <code>::before</code>-Pseudo-Element fürs Glühen. Beides landet nachweislich nur über <code>card_mod:</code> direkt auf der Karte zuverlässig im richtigen Shadow-DOM (per DevTools bestätigt) - die globale Theme-Einstellung card-mod-card-yaml erreicht Bubble Cards eigenes, verschachteltes Shadow-DOM dagegen gar nicht. Vorlage unten in eine eigene Sub-Buttons-Karte einfügen, Entities anpassen.",
    css: `.bubble-sub-button.background-off {
    box-shadow: 0 13px 21px -8px rgba(40, 30, 10, 0.32),
                0 6px 11px -4px rgba(40, 30, 10, 0.18),
                0 2px 4px -1px rgba(40, 30, 10, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.35),
                inset 0 -1px 2px rgba(60, 50, 30, 0.2),
                inset 1px 0 0 rgba(255, 255, 255, 0.25),
                inset -1px 0 0 rgba(120, 110, 90, 0.25) !important;
  }
  .bubble-sub-button.background-on {
    position: relative;
    overflow: hidden;
    background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))))) !important;
    box-shadow: 0 6px 16px -4px rgba(var(--rgb-accent-color), 0.5),
                0 0 10px 1px rgba(var(--rgb-accent-color), 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                inset 0 -1px 2px rgba(0, 0, 0, 0.12) !important;
  }
  .bubble-sub-button.background-on::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5) 0%, rgba(var(--rgb-accent-color), 0.5) 40%, transparent 70%);
    mix-blend-mode: screen;
    opacity: 0.6;
    pointer-events: none;
  }`,
  },
];

const HATG_APPLE_COLORS = {
  blue: ["#5AC8FA", "#0A84FF"],
  green: ["#6EE7A0", "#30D158"],
  indigo: ["#8B8AF0", "#5E5CE6"],
  orange: ["#FFBB5C", "#FF9F0A"],
  pink: ["#FF7A9C", "#FF375F"],
  purple: ["#DA8FF5", "#BF5AF2"],
  red: ["#FF7A70", "#FF453A"],
  teal: ["#8FE0EE", "#40C8E0"],
  yellow: ["#FFE066", "#FFD60A"],
  gray: ["#B0B0B8", "#8E8E93"],
  mint: ["#9CF0EA", "#63E6E2"],
  brown: ["#D2B48C", "#AC8E68"],
  cyan: ["#9FE3FF", "#64D2FF"],
};
const HATG_NAV_ICON_COLOR = {
  overview: "blue",
  "grundfarben-text": "orange",
  "hintergruende-karten": "blue",
  "header-sidebar-navigation": "teal",
  "status-icons-entitaeten": "yellow",
  "schalter-toggle": "green",
  "slider-progress": "purple",
  "buttons-chips": "pink",
  "eingaben-auswahlfelder": "cyan",
  "material-paper-mdc": "red",
  "ha-2026-web-awesome": "mint",
  "abstaende-rundungen-schatten-rahmen": "gray",
  "schrift-typografie": "brown",
  "rgb-hilfswerte": "purple",
  "graphen-energie": "green",
  "bubble-card": "red",
  mushroom: "green",
  "card-mod-generator": "gray",
  "alle-felder": "blue",
  "code-editor": "indigo",
  "ha-live": "green",
  plugins: "purple",
  generatoren: "mint",
  "user-grundfarben": "orange",
  "user-status": "yellow",
  "user-look": "gray",
  "user-schrift": "brown",
};
function hatgNavIconGradient(id) {
  const name = HATG_NAV_ICON_COLOR[id] || "blue";
  const [from, to] = HATG_APPLE_COLORS[name];
  return `linear-gradient(135deg, ${from}, ${to})`;
}

const HATG_PREVIEW_BOUND_KEYS = [
  "card-background-color",
  "ha-card-background",
  "ha-card-border-color",
  "ha-card-border-width",
  "ha-card-border-radius",
  "ha-card-box-shadow",
  "primary-text-color",
  "secondary-text-color",
  "primary-color",
  "accent-color",
  "state-icon-color",
  "state-light-on-color",
  "state-light-active-color",
  "state-active-color",
  "state-inactive-color",
  "divider-color",
  "disabled-color",
  "ha-switch-background-color",
  "ha-switch-border-color",
  "ha-switch-thumb-background-color",
  "ha-switch-thumb-border-color",
  "ha-switch-checked-background-color",
  "ha-switch-checked-border-color",
  "ha-switch-checked-thumb-background-color",
  "ha-switch-checked-thumb-border-color",
  "success-color",
  "warning-color",
  "error-color",
  "primary-background-color",
];

const HATG_TAIL_NAV = [
  { id: "alle-felder", label: "Alle Felder", icon: "mdi:list-search" },
  { id: "code-editor", label: "Code-Editor", icon: "mdi:xml" },
  { id: "plugins", label: "Plugins", icon: "mdi:puzzle-outline" },
  { id: "generatoren", label: "Generatoren", icon: "mdi:auto-fix" },
];

const HATG_USER_SECTIONS = [
  {
    id: "user-grundfarben",
    label: "Grundfarben",
    icon: "mdi:palette-outline",
    keys: [
      "primary-color",
      "accent-color",
      "primary-background-color",
      "secondary-background-color",
      "card-background-color",
      "primary-text-color",
      "secondary-text-color",
    ],
  },
  {
    id: "user-status",
    label: "Status-Farben",
    icon: "mdi:emoticon-outline",
    keys: ["error-color", "warning-color", "success-color", "info-color"],
  },
  {
    id: "user-look",
    label: "Look & Feel",
    icon: "mdi:border-radius",
    keys: ["ha-card-border-radius", "ha-card-box-shadow", "ha-card-border-color", "divider-color"],
  },
  {
    id: "user-schrift",
    label: "Schrift",
    icon: "mdi:format-font",
    keys: ["primary-font-family", "ha-font-family-code"],
  },
];

const HATG_DERIVE_RULES = {
  "primary-color": [
    { key: "dark-primary-color", transform: "darken" },
    { key: "light-primary-color", transform: "lighten" },
    { key: "rgb-primary-color", transform: "rgb" },
    { key: "mdc-theme-primary", transform: "copy" },
    { key: "md-sys-color-primary", transform: "copy" },
  ],
  "accent-color": [
    { key: "rgb-accent-color", transform: "rgb" },
    { key: "bubble-icon-color", transform: "copy" },
    { key: "bubble-accent-color", transform: "copy" },
    { key: "bubble-active-color", transform: "copy" },
    { key: "bubble-toggle-color", transform: "copy" },
    { key: "bubble-separator-icon-color", transform: "copy" },
    { key: "bubble-sub-button-icon-color", transform: "copy" },
    { key: "mush-icon-active-color", transform: "copy" },
    { key: "mush-toggle-color", transform: "copy" },
    { key: "mush-slider-color", transform: "copy" },
    { key: "state-icon-active-color", transform: "copy" },
    { key: "ha-control-switch-checked-color", transform: "copy" },
    { key: "ha-switch-checked-thumb-background-color", transform: "copy" },
    { key: "ha-switch-checked-thumb-background-color-hover", transform: "copy" },
    { key: "switch-checked-color", transform: "copy" },
    { key: "slider-color", transform: "copy" },
    { key: "control-button-icon-color", transform: "copy" },
    { key: "mdc-theme-secondary", transform: "copy" },
    { key: "mush-rgb-state-entity", transform: "rgb" },
    { key: "ha-color-fill-primary-normal-resting", transform: "rgba" },
    { key: "ha-color-fill-primary-normal-hover", transform: "rgba" },
    { key: "ha-color-fill-primary-quiet-resting", transform: "rgba" },
    { key: "ha-color-fill-primary-quiet-hover", transform: "rgba" },
    { key: "bubble-button-icon-color", transform: "copy" },
    { key: "bubble-button-active-background-color", transform: "copy" },
    { key: "mush-chip-icon-color", transform: "copy" },
    { key: "mush-chip-active-color", transform: "copy" },
    { key: "mush-chip-active-icon-color", transform: "copy" },
    { key: "bubble-button-active-color", transform: "copy" },
    { key: "state-switch-active-color", transform: "copy" },
    { key: "state-switch-on-color", transform: "copy" },
    { key: "ha-switch-checked-background-color", transform: "lighten" },
    { key: "ha-switch-checked-background-color-hover", transform: "lighten" },
  ],
  "primary-background-color": [
    { key: "background-color", transform: "copy" },
    { key: "lovelace-background", transform: "copy" },
    { key: "mdc-theme-background", transform: "copy" },
    { key: "rgb-primary-background-color", transform: "rgb" },
  ],
  "secondary-background-color": [
    { key: "mush-control-background-color", transform: "copy" },
    { key: "bubble-secondary-background-color", transform: "copy" },
    { key: "control-button-background-color", transform: "copy" },
    { key: "input-background-color", transform: "copy" },
    { key: "input-fill-color", transform: "copy" },
  ],
  "card-background-color": [
    { key: "ha-card-background", transform: "copy" },
    { key: "ha-card-background-color", transform: "copy" },
    { key: "bubble-main-buttons-background-color", transform: "copy" },
    { key: "bubble-card-background-color", transform: "copy" },
    { key: "mush-card-background", transform: "copy" },
    { key: "mdc-theme-surface", transform: "copy" },
    { key: "table-row-alternative-background-color", transform: "copy" },
    { key: "rgb-card-background-color", transform: "rgb" },
  ],
  "primary-text-color": [
    { key: "bubble-name-color", transform: "copy" },
    { key: "mush-card-primary-color", transform: "copy" },
    { key: "mush-title-color", transform: "copy" },
    { key: "app-header-text-color", transform: "copy" },
    { key: "sidebar-text-color", transform: "copy" },
    { key: "mdc-theme-on-surface", transform: "copy" },
    { key: "rgb-primary-text-color", transform: "rgb" },
    { key: "mush-rgb-primary-text-color", transform: "rgb" },
    { key: "sidebar-icon-color", transform: "rgba" },
    { key: "label-badge-text-color", transform: "rgba" },
  ],
  "secondary-text-color": [
    { key: "bubble-state-color", transform: "copy" },
    { key: "mush-card-secondary-color", transform: "copy" },
    { key: "mush-subtitle-color", transform: "copy" },
    { key: "rgb-secondary-text-color", transform: "rgb" },
    { key: "mush-rgb-secondary-text-color", transform: "rgb" },
  ],
  "error-color": [
    { key: "label-badge-red", transform: "copy" },
    { key: "mush-rgb-danger", transform: "rgb" },
    { key: "ha-color-fill-danger-normal-resting", transform: "rgba" },
    { key: "ha-color-fill-danger-normal-hover", transform: "rgba" },
    { key: "ha-color-fill-danger-normal-active", transform: "rgba" },
  ],
  "warning-color": [
    { key: "label-badge-yellow", transform: "copy" },
    { key: "mush-rgb-warning", transform: "rgb" },
    { key: "ha-color-fill-warning-normal-resting", transform: "rgba" },
    { key: "ha-color-fill-warning-normal-hover", transform: "rgba" },
    { key: "ha-color-fill-warning-normal-active", transform: "rgba" },
  ],
  "success-color": [
    { key: "label-badge-green", transform: "copy" },
    { key: "mush-rgb-success", transform: "rgb" },
  ],
  "info-color": [
    { key: "label-badge-blue", transform: "copy" },
    { key: "mush-rgb-info", transform: "rgb" },
  ],
  "disabled-color": [{ key: "mush-rgb-disabled", transform: "rgb" }],
  "blue-color": [{ key: "rgb-blue-color", transform: "rgb" }],
  "orange-color": [{ key: "rgb-orange-color", transform: "rgb" }],
  "state-switch-color": [
    { key: "rgb-state-switch-color", transform: "rgb" },
    { key: "mush-rgb-state-switch", transform: "rgb" },
  ],
  "state-light-color": [
    { key: "rgb-state-light-color", transform: "rgb" },
    { key: "mush-rgb-state-light", transform: "rgb" },
  ],
  "state-cover-color": [
    { key: "rgb-state-cover-color", transform: "rgb" },
    { key: "mush-rgb-state-cover", transform: "rgb" },
  ],
  "state-fan-color": [
    { key: "rgb-state-fan-color", transform: "rgb" },
    { key: "mush-rgb-state-fan", transform: "rgb" },
  ],
  "state-media_player-color": [
    { key: "rgb-state-media_player-color", transform: "rgb" },
    { key: "mush-rgb-state-media-player", transform: "rgb" },
  ],
  "state-vacuum-color": [{ key: "mush-rgb-state-vacuum", transform: "rgb" }],
  "ha-card-border-radius": [
    { key: "bubble-border-radius", transform: "copy" },
    { key: "bubble-card-border-radius", transform: "copy" },
    { key: "bubble-button-border-radius", transform: "copy" },
    { key: "control-button-border-radius", transform: "copy" },
    { key: "border-radius", transform: "copy" },
    { key: "bubble-climate-border-radius", transform: "copy" },
    { key: "bubble-cover-border-radius", transform: "copy" },
    { key: "bubble-horizontal-buttons-stack-border-radius", transform: "copy" },
    { key: "bubble-media-player-border-radius", transform: "copy" },
    { key: "bubble-pop-up-border-radius", transform: "copy" },
    { key: "bubble-select-border-radius", transform: "copy" },
    { key: "bubble-separator-border-radius", transform: "copy" },
  ],
  "ha-card-box-shadow": [
    { key: "bubble-box-shadow", transform: "copy" },
    { key: "dialog-box-shadow", transform: "copy" },
    { key: "box-shadow", transform: "copy" },
    { key: "bubble-pop-up-box-shadow", transform: "copy" },
    { key: "bubble-horizontal-buttons-stack-box-shadow", transform: "copy" },
    { key: "bubble-climate-box-shadow", transform: "copy" },
    { key: "bubble-cover-box-shadow", transform: "copy" },
    { key: "bubble-media-player-box-shadow", transform: "copy" },
  ],
  "ha-card-border-width": [{ key: "bubble-border", transform: "border_shorthand_width" }],
  "ha-card-border-color": [
    { key: "bubble-border-color", transform: "copy" },
    { key: "border-color", transform: "copy" },
    { key: "bubble-border", transform: "border_shorthand_color" },
  ],
  "divider-color": [
    { key: "bubble-line-background-color", transform: "copy" },
    { key: "bubble-separator-line-color", transform: "copy" },
    { key: "outline-color", transform: "copy" },
  ],
  "primary-font-family": [
    { key: "ha-font-family-body", transform: "copy" },
    { key: "ha-font-family-heading", transform: "copy" },
    { key: "ha-font-family-longform", transform: "copy" },
  ],
  "ha-font-family-code": [{ key: "mdc-typography-font-family", transform: "copy" }],
};

const HATG_DERIVE_REVERSE = {};
Object.entries(HATG_DERIVE_RULES).forEach(([source, targets]) => {
  targets.forEach((t) => {
    HATG_DERIVE_REVERSE[t.key] = { source, transform: t.transform };
  });
});

const HATG_SYNC_TRIADS = {
  "accent-color": { bubble: "bubble-icon-color", mush: "mush-icon-active-color" },
  "card-background-color": { bubble: "bubble-card-background-color", mush: "mush-card-background" },
  "primary-text-color": { bubble: "bubble-name-color", mush: "mush-card-primary-color" },
  "secondary-text-color": { bubble: "bubble-state-color", mush: "mush-card-secondary-color" },
  "secondary-background-color": { bubble: "bubble-secondary-background-color", mush: "mush-control-background-color" },
};

const HATG_SYNC_PAIRS = {
  "ha-card-border-color": { bubble: "bubble-border-color", kind: "color" },
  "ha-card-border-width": { bubble: "bubble-border", kind: "border-width" },
};

const HATG_FONT_PRESETS = [
  { id: "system", label: "Systemstandard", stack: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" },
  { id: "apple", label: "Apple (SF Pro)", stack: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', sans-serif" },
  { id: "segoeui", label: "Segoe UI (Windows)", stack: "'Segoe UI', Arial, sans-serif" },
  { id: "roboto", label: "Google Roboto", stack: "Roboto, Arial, sans-serif" },
  { id: "arial", label: "Arial", stack: "Arial, Helvetica, sans-serif" },
  { id: "helvetica", label: "Helvetica Neue", stack: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
  { id: "verdana", label: "Verdana", stack: "Verdana, Geneva, sans-serif" },
  { id: "georgia", label: "Georgia", stack: "Georgia, 'Times New Roman', serif" },
  { id: "timesnewroman", label: "Times New Roman", stack: "'Times New Roman', Times, serif" },
  { id: "inter", label: "Inter", stack: "Inter, sans-serif" },
  { id: "opensans", label: "Open Sans", stack: "'Open Sans', sans-serif" },
  { id: "notosans", label: "Noto Sans", stack: "'Noto Sans', sans-serif" },
  { id: "lato", label: "Lato", stack: "Lato, sans-serif" },
  { id: "montserrat", label: "Montserrat", stack: "Montserrat, sans-serif" },
  { id: "poppins", label: "Poppins", stack: "Poppins, sans-serif" },
  { id: "nunito", label: "Nunito", stack: "Nunito, sans-serif" },
  { id: "ubuntu", label: "Ubuntu", stack: "Ubuntu, sans-serif" },
  { id: "sfmono", label: "SF Mono", stack: "ui-monospace, Menlo, monospace" },
  { id: "custom", label: "Eigene Schriftart…", stack: null },
];

const HATG_STATUS_CATEGORY_LABELS = {
  on: "An",
  off: "Aus",
  unavailable: "Nicht verfügbar",
  light: "Licht & Schalter",
  climate: "Heizung/Klima",
  fan: "Lüfter",
  weather: "Wetter",
  door: "Tür & Schloss",
  alarm: "Alarm & Sicherheit",
  other: "Sonstige",
};
const HATG_STATUS_CATEGORY_ORDER = ["on", "off", "unavailable", "light", "climate", "fan", "weather", "door", "alarm", "other"];

function hatgIsHex(value) {
  return /^#[0-9A-Fa-f]{6}$/.test(String(value ?? "").trim());
}
function hatgIsLong(key, value) {
  if (key === "card-mod-card-yaml") return true;
  if (key.includes("font-family")) return false;
  return String(value ?? "").includes("\n") || String(value ?? "").length > 70;
}
function hatgTokenizeKey(key) {
  return String(key ?? "")
    .toLowerCase()
    .split("-")
    .filter(Boolean);
}
function hatgKeyMatchesTags(key, tags) {
  if (!tags || tags.length === 0) return true;
  const tokens = hatgTokenizeKey(key);
  return tags.every((t) => tokens.includes(t));
}
function hatgEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function hatgReadableTextColor(color) {
  const str = String(color ?? "").trim();
  let r, g, b;
  const hexMatch = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(str);
  const rgbMatch = /^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i.exec(str);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (rgbMatch) {
    r = Number(rgbMatch[1]);
    g = Number(rgbMatch[2]);
    b = Number(rgbMatch[3]);
  } else {
    return "#fff";
  }
  const luminosity = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminosity > 0.5 ? "#000" : "#fff";
}
function hatgDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const HATG_CODE_TOKEN_RE = /(\/\*[\s\S]*?\*\/)|(#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(!important\b)|(--[a-zA-Z0-9_-]+)|(\bvar(?=\())|(^[ \t]*[A-Za-z0-9_.-]+(?=:))/gm;
function hatgHighlightCode(raw) {
  const src = String(raw ?? "");
  let out = "";
  let lastIndex = 0;
  let match;
  HATG_CODE_TOKEN_RE.lastIndex = 0;
  while ((match = HATG_CODE_TOKEN_RE.exec(src)) !== null) {
    if (match.index > lastIndex) {
      out += hatgEscape(src.slice(lastIndex, match.index));
    }
    const [, comment, hashComment, string, important, customProp, varKw, key] = match;
    if (comment) out += `<span class="tok-comment">${hatgEscape(comment)}</span>`;
    else if (hashComment) out += `<span class="tok-comment">${hatgEscape(hashComment)}</span>`;
    else if (string) out += `<span class="tok-string">${hatgEscape(string)}</span>`;
    else if (important) out += `<span class="tok-important">${hatgEscape(important)}</span>`;
    else if (customProp) out += `<span class="tok-var">${hatgEscape(customProp)}</span>`;
    else if (varKw) out += `<span class="tok-fn">${hatgEscape(varKw)}</span>`;
    else if (key) out += `<span class="tok-key">${hatgEscape(key)}</span>`;
    lastIndex = HATG_CODE_TOKEN_RE.lastIndex;
    if (match.index === HATG_CODE_TOKEN_RE.lastIndex) HATG_CODE_TOKEN_RE.lastIndex++;
  }
  out += hatgEscape(src.slice(lastIndex));
  return out;
}
function hatgQuoteYamlValue(value) {
  const v = String(value ?? "");
  if (v.includes("\n")) {
    const indented = v
      .split("\n")
      .map((line) => (line.length ? "        " + line : ""))
      .join("\n");
    return "|\n" + indented;
  }
  return `"${v.replaceAll('"', '\\"')}"`;
}
function hatgNormalizeHex6(hex) {
  const v = String(hex ?? "").trim();
  const m3 = /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])[0-9A-Fa-f]?$/.exec(v);
  if (m3) {
    const [r, g, b] = m3.slice(1, 4).map((c) => c + c);
    return `#${r}${g}${b}`.toUpperCase();
  }
  const m6 = /^#([0-9A-Fa-f]{6})[0-9A-Fa-f]{0,2}$/.exec(v);
  if (m6) return `#${m6[1]}`.toUpperCase();
  return v.toUpperCase();
}
function hatgHexToRgbTriple(hex) {
  const m = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(hatgNormalizeHex6(hex));
  if (!m) return hex;
  const [r, g, b] = m.slice(1).map((h) => parseInt(h, 16));
  return `${r}, ${g}, ${b}`;
}
function hatgRgbTripleToHex(triplet) {
  const m = /^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*$/.exec(String(triplet ?? ""));
  if (!m) return "#000000";
  const clamp = (n) => Math.max(0, Math.min(255, parseInt(n, 10) || 0));
  const toHex = (n) => clamp(n).toString(16).padStart(2, "0");
  return `#${toHex(m[1])}${toHex(m[2])}${toHex(m[3])}`.toUpperCase();
}
function hatgComposeRgba(hex, alpha) {
  const m = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(hatgNormalizeHex6(hex));
  const a = Number.isFinite(alpha) ? alpha : 1;
  if (!m) return `rgba(0, 0, 0, ${a})`;
  const [r, g, b] = m.slice(1).map((h) => parseInt(h, 16));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function hatgParseRgba(value) {
  const m = /^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/i.exec(String(value ?? "").trim());
  if (!m) return { hex: "#000000", alpha: 1 };
  const toHex = (n) => Math.max(0, Math.min(255, Math.round(parseFloat(n)))).toString(16).padStart(2, "0");
  return { hex: `#${toHex(m[1])}${toHex(m[2])}${toHex(m[3])}`.toUpperCase(), alpha: parseFloat(m[4]) };
}
function hatgFormatColorForView(hex, fmt) {
  if (!hatgIsHex(hex)) return hex;
  if (fmt === "rgb") return `rgb(${hatgHexToRgbTriple(hex)})`;
  if (fmt === "rgba") return hatgComposeRgba(hex, 1);
  return hex;
}
function hatgStripFnWrapper(text, fnName) {
  const re = new RegExp(`^${fnName}\\((.*)\\)$`, "i");
  const raw = String(text ?? "").trim();
  const m = re.exec(raw);
  return m ? m[1] : raw;
}
function hatgParseColorByFormat(text, fmt) {
  const raw = String(text ?? "").trim();
  if (fmt === "rgb") {
    const inner = hatgStripFnWrapper(raw, "rgb");
    if (!/^\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$/.test(inner)) return null;
    return hatgRgbTripleToHex(inner);
  }
  if (fmt === "rgba") {
    const inner = hatgStripFnWrapper(raw, "rgba");
    const wrapped = `rgba(${inner})`;
    if (!/^rgba\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)$/i.test(wrapped)) return null;
    return hatgParseRgba(wrapped).hex;
  }
  const v = raw.toUpperCase();
  return HATG_HEX_RE.test(v) ? hatgNormalizeHex6(v) : null;
}
function hatgParseColorAnyFormat(text) {
  const raw = String(text ?? "").trim();
  if (/^rgba\s*\(/i.test(raw)) {
    const hex = hatgParseColorByFormat(raw, "rgba");
    if (hex) return hex;
  }
  if (/^rgb\s*\(/i.test(raw)) {
    const hex = hatgParseColorByFormat(raw, "rgb");
    if (hex) return hex;
  }
  const hexAttempt = hatgParseColorByFormat(raw, "hex");
  if (hexAttempt) return hexAttempt;
  return hatgParseColorByFormat(raw, "rgb");
}
function hatgMixHex(hex, towards, ratio) {
  const m = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(hatgNormalizeHex6(hex));
  if (!m) return hex;
  const [r, g, b] = m.slice(1).map((h) => parseInt(h, 16));
  const t = towards === "black" ? 0 : 255;
  const mix = (c) => Math.round(c + (t - c) * ratio);
  const toHex = (c) => c.toString(16).padStart(2, "0");
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`.toUpperCase();
}
function hatgParseBorderShorthand(value) {
  const m = /^(\S+)\s+(\S+)\s+(.+)$/.exec(String(value ?? "").trim());
  if (!m) return { width: "1px", style: "solid", color: "transparent" };
  return { width: m[1], style: m[2], color: m[3] };
}
function hatgComposeBorderShorthand(parts) {
  return `${parts.width} ${parts.style} ${parts.color}`;
}
function hatgApplyTransform(transform, sourceValue, currentTargetValue) {
  if (transform === "copy") return sourceValue;
  if (transform === "border_shorthand_width") {
    const parts = hatgParseBorderShorthand(currentTargetValue);
    return hatgComposeBorderShorthand({ ...parts, width: sourceValue });
  }
  if (transform === "border_shorthand_color") {
    const parts = hatgParseBorderShorthand(currentTargetValue);
    return hatgComposeBorderShorthand({ ...parts, color: sourceValue });
  }
  let sourceHex = null;
  if (hatgIsHex(sourceValue)) sourceHex = hatgNormalizeHex6(sourceValue);
  else if (HATG_RGBA_RE.test(String(sourceValue ?? "").trim())) sourceHex = hatgParseRgba(sourceValue).hex;
  if (!sourceHex) return sourceValue;
  if (transform === "rgb") return hatgHexToRgbTriple(sourceHex);
  if (transform === "darken") return hatgMixHex(sourceHex, "black", 0.32);
  if (transform === "lighten") return hatgMixHex(sourceHex, "white", 0.72);
  if (transform === "rgba") {
    const parsed = hatgParseRgba(currentTargetValue);
    const alpha = Number.isFinite(parsed.alpha) ? parsed.alpha : 1;
    return hatgComposeRgba(sourceHex, alpha);
  }
  return sourceHex;
}
function hatgInitSource() {
  const obj = {};
  Object.keys(HATG_MANIFEST.light).forEach((k) => {
    obj[k] = "derived";
  });
  return obj;
}
function hatgTransliterateGerman(text) {
  return String(text ?? "")
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue")
    .replace(/ß/g, "ss");
}
function hatgSlugTheme(themeName) {
  const base = hatgTransliterateGerman((themeName || "Mein Theme").trim())
    .replace(/\s+/g, "_")
    .toLowerCase();
  const cleaned = base.replace(/[^a-z0-9_-]/g, "");
  return cleaned || "hatg_theme";
}
function hatgSuggestNextVersion(slug) {
  const m = /^(.*)_v(\d+)$/.exec(slug);
  if (m) {
    const next = parseInt(m[2], 10) + 1;
    return `${m[1]}_v${next}`;
  }
  return `${slug}_v2`;
}

function hatgParseThemeYaml(text, knownKeys) {
  const lines = String(text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  let i = 0;
  let rootName = null;

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (trimmed === "" || trimmed.startsWith("#")) {
      i++;
      continue;
    }
    const m = /^([^\s:][^:]*):\s*$/.exec(trimmed);
    if (!m) return { error: "Konnte keinen Theme-Namen (Root-Key) in der ersten Zeile finden." };
    rootName = m[1];
    i++;
    break;
  }
  if (!rootName) return { error: "Leere Datei oder kein gültiger Theme-Name gefunden." };

  const result = { name: rootName, light: {}, dark: {}, extra: { light: {}, dark: {} }, unknownCount: 0, foundLight: false, foundDark: false };
  let currentMode = null;

  for (; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (trimmed === "" || trimmed.startsWith("#")) continue;
    if (/^modes:\s*$/.test(trimmed)) continue;
    if (/^light:\s*$/.test(trimmed)) {
      currentMode = "light";
      result.foundLight = true;
      continue;
    }
    if (/^dark:\s*$/.test(trimmed)) {
      currentMode = "dark";
      result.foundDark = true;
      continue;
    }

    const kv = /^([A-Za-z0-9_.-]+):\s*(.*)$/.exec(trimmed);
    if (!kv) continue;
    const key = kv[1];
    let valuePart = kv[2];

    if (valuePart === "|" || valuePart === "|-" || valuePart === ">") {
      const baseIndent = raw.length - raw.replace(/^\s+/, "").length;
      const blockLines = [];
      i++;
      while (i < lines.length) {
        const l = lines[i];
        if (l.trim() === "") {
          blockLines.push("");
          i++;
          continue;
        }
        const ind = l.length - l.replace(/^\s+/, "").length;
        if (ind <= baseIndent) {
          i--;
          break;
        }
        blockLines.push(l.slice(baseIndent + 2));
        i++;
      }
      while (blockLines.length && blockLines[blockLines.length - 1] === "") blockLines.pop();
      valuePart = blockLines.join("\n");
    } else {
      const qm = /^"(.*)"$/.exec(valuePart);
      if (qm) {
        valuePart = qm[1].replace(/\\"/g, '"');
      } else {
        const qm2 = /^'(.*)'$/.exec(valuePart);
        if (qm2) valuePart = qm2[1];
      }
    }

    if (!currentMode) continue;
    if (knownKeys && !knownKeys.has(key)) {
      result.unknownCount++;
      result.extra[currentMode][key] = valuePart;
      continue;
    }
    result[currentMode][key] = valuePart;
  }

  if (!result.foundLight && !result.foundDark) {
    return { error: "Keine light:/dark:-Abschnitte gefunden – ist das eine gültige HA-Theme-Datei?" };
  }
  return result;
}

let HATG_KEY_FORMATS = null;
const HATG_HEX_RE = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
const HATG_RGBA_RE = /^rgba\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)$/i;
const HATG_RGB_TRIPLET_RE = /^\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}$/;
const HATG_GRADIENT_RE = /^(repeating-)?(linear|radial|conic)-gradient\(.+\)$/i;
function hatgIsGradient(value) {
  return HATG_GRADIENT_RE.test(String(value ?? "").trim());
}

function hatgGetKeyFormats() {
  if (HATG_KEY_FORMATS) return HATG_KEY_FORMATS;
  const map = {};
  Object.keys(HATG_MANIFEST.light).forEach((k) => {
    const v = String(HATG_MANIFEST.light[k] ?? "");
    if (HATG_HEX_RE.test(v)) map[k] = "hex";
    else if (HATG_RGBA_RE.test(v)) map[k] = "rgba";
    else if (HATG_RGB_TRIPLET_RE.test(v)) map[k] = "rgb_triplet";
    else map[k] = "other";
  });
  HATG_KEY_FORMATS = map;
  return map;
}

function hatgValidateValue(format, value) {
  const v = String(value ?? "").trim();
  if (v === "") return "empty";
  if (format === "hex" && !HATG_HEX_RE.test(v) && !HATG_RGBA_RE.test(v) && !hatgIsGradient(v)) return "invalid";
  if (format === "rgba" && !HATG_RGBA_RE.test(v) && !HATG_HEX_RE.test(v)) return "invalid";
  if (format === "rgb_triplet" && !HATG_RGB_TRIPLET_RE.test(v)) return "invalid";
  return "ok";
}
function hatgNormalizeRgbaLegacyHex(values) {
  const formats = hatgGetKeyFormats();
  Object.keys(values).forEach((key) => {
    if (formats[key] !== "rgba") return;
    const v = String(values[key] ?? "").trim();
    if (!HATG_HEX_RE.test(v)) return;
    values[key] = hatgComposeRgba(v, 1);
  });
}
function hatgClassify(key, value) {
  if (hatgIsHex(value) || hatgIsGradient(value)) return "color";
  if (key.includes("font")) return "font";
  if (key.includes("shadow")) return "shadow";
  if (key.includes("radius") || /^-?\d+(\.\d+)?px$/.test(String(value ?? "").trim())) return "radius";
  return "other";
}
function hatgExtractStatusCategory(key) {
  if (!key.startsWith("state-") || !key.endsWith("-color")) return null;
  const middle = key.slice(6, -6);
  if (middle.includes("weather") || middle.includes("sun-")) return "weather";
  if (middle.includes("climate")) return "climate";
  if (middle.includes("fan")) return "fan";
  if (middle.includes("light") || middle.includes("switch")) return "light";
  if (middle.includes("cover") || middle.includes("lock")) return "door";
  if (middle.includes("alarm") || middle.includes("armed") || middle.includes("disarm") || middle.includes("triggered") || middle.includes("pending") || middle.includes("binary_sensor")) return "alarm";
  if (middle === "active" || middle.endsWith("-active") || middle === "on" || middle.endsWith("-on")) return "on";
  if (middle === "inactive" || middle.endsWith("-inactive") || middle === "off" || middle.endsWith("-off")) return "off";
  if (middle === "unavailable" || middle.endsWith("-unavailable")) return "unavailable";
  return "other";
}

class HATGPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._hass = null;
    this._rendered = false;
    this._activeSection = "overview";
    this._sectionBeforeHaLive = "overview";
    this._navExpanded = {};
    this._toastTimer = null;
    this._haLiveIframeEl = null;
    this._selectedPlugins = new Set();
    this._state = {
      themeName: "Mein neues Theme",
      mode: "user",
      appearance: "dark",
      editorMode: "light",
      previewMode: "dark",
      previewSidebarOpen: false,
      haLiveDevice: "phone",
      openMenuOpen: false,
      saveMenuOpen: false,
      basePresetDialog: false,
      mobileSidebarOpen: false,
      mobilePreviewOpen: false,
      previewColorMenuOpen: false,
      previewFontMenuOpen: false,
      searchQuery: "",
      settingsOpen: false,
      saveDialog: null,
      saving: false,
      importDialog: null,
      validation: null,
      selectMode: false,
      selectedKeys: [],
      sectionFilters: { color: [], type: null, status: null },
      tagFilters: [],
      values: {
        light: hatgDeepClone(HATG_MANIFEST.light),
        dark: hatgDeepClone(HATG_MANIFEST.dark),
      },
      source: {
        light: hatgInitSource(),
        dark: hatgInitSource(),
      },
      extraValues: {
        light: {},
        dark: {},
      },
    };
    this.tryRestoreAutoSave();
    this.syncCardModThemeName();
    this.syncModeAcrossApp();
  }

  syncModeAcrossApp() {
    this._state.appearance = this._state.editorMode;
    this._state.previewMode = this._state.editorMode;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._rendered) this.render();
  }

  connectedCallback() {
    if (!this._rendered) this.render();
  }

  disconnectedCallback() {
    if (this._toastTimer) window.clearTimeout(this._toastTimer);
    this.autoSaveState();
  }

  tryRestoreAutoSave() {
    try {
      const raw = window.localStorage.getItem("hatg-autosave");
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.themeName) this._state.themeName = saved.themeName;
      if (saved.mode) this._state.mode = saved.mode;
      if (saved.editorMode) this._state.editorMode = saved.editorMode;
      if (saved.activeSection) this._activeSection = saved.activeSection;
      if (saved.values) {
        this._state.values.light = { ...this._state.values.light, ...(saved.values.light || {}) };
        this._state.values.dark = { ...this._state.values.dark, ...(saved.values.dark || {}) };
        hatgNormalizeRgbaLegacyHex(this._state.values.light);
        hatgNormalizeRgbaLegacyHex(this._state.values.dark);
      }
      if (saved.source) {
        this._state.source.light = { ...this._state.source.light, ...(saved.source.light || {}) };
        this._state.source.dark = { ...this._state.source.dark, ...(saved.source.dark || {}) };
      }
      if (saved.extraValues) {
        this._state.extraValues.light = { ...this._state.extraValues.light, ...(saved.extraValues.light || {}) };
        this._state.extraValues.dark = { ...this._state.extraValues.dark, ...(saved.extraValues.dark || {}) };
      }
      const validUserSection =
        this.userSectionMeta(this._activeSection) ||
        ["overview", "alle-felder", "code-editor"].includes(this._activeSection);
      if (this._state.mode === "user" && !validUserSection) {
        this._activeSection = "overview";
      }
    } catch (error) {
      console.warn("HATG tryRestoreAutoSave failed", error);
    }
  }

  autoSaveState() {
    try {
      window.localStorage.setItem(
        "hatg-autosave",
        JSON.stringify({
          themeName: this._state.themeName,
          mode: this._state.mode,
          appearance: this._state.appearance,
          editorMode: this._state.editorMode,
          previewMode: this._state.previewMode,
          activeSection: this._activeSection,
          values: this._state.values,
          source: this._state.source,
          extraValues: this._state.extraValues,
        })
      );
    } catch (error) {
      console.warn("HATG autoSaveState failed", error);
    }
  }

  currentValues() {
    return this._state.values[this._state.editorMode];
  }
  currentSource() {
    return this._state.source[this._state.editorMode];
  }

  sectionMeta(id) {
    return HATG_MANIFEST.sections.find((s) => s.id === id);
  }
  userSectionMeta(id) {
    return HATG_USER_SECTIONS.find((s) => s.id === id);
  }
  groupMeta(id) {
    for (const s of HATG_MANIFEST.sections) {
      if (!s.groups) continue;
      const group = s.groups.find((g) => g.id === id);
      if (group) return { parent: s, group };
    }
    return null;
  }

  sectionTitle() {
    if (this._activeSection === "overview") return "Start";
    if (this._activeSection === "alle-felder") return "Alle Felder";
    if (this._activeSection === "code-editor") return "Code-Editor";
    if (this._activeSection === "plugins") return "Plugins";
    if (this._activeSection === "generatoren") return "Generatoren";
    const gm = this.groupMeta(this._activeSection);
    if (gm) return `${gm.parent.label} / ${gm.group.label}`;
    return (
      this.userSectionMeta(this._activeSection)?.label ||
      this.sectionMeta(this._activeSection)?.label ||
      "Theme-Editor"
    );
  }

  resetSectionUiState() {
    this._state.sectionFilters = { color: [], type: null, status: null };
    this._state.tagFilters = [];
    this._state.selectMode = false;
    this._state.selectedKeys = [];
  }

  closeAllTopMenus() {
    this._state.openMenuOpen = false;
    this._state.saveMenuOpen = false;
    this._state.settingsOpen = false;
  }

  navGroupExpanded(section) {
    const explicit = this._navExpanded[section.id];
    if (explicit !== undefined) return explicit;
    return section.groups.some((g) => g.id === this._activeSection);
  }

  renderNavigation() {
    const renderItem = (item, extraClass = "") => `
        <button class="nav-item ${extraClass} ${item.id === this._activeSection ? "active" : ""}" type="button" data-section="${item.id}">
          <span class="nav-icon-badge" style="background: ${hatgNavIconGradient(item.id)};"><ha-icon icon="${item.icon}"></ha-icon></span>
          <span>${item.label}</span>
        </button>`;
    const renderGroupHeading = (section) => {
      const hasActiveChild = section.groups.some((g) => g.id === this._activeSection);
      const expanded = this.navGroupExpanded(section);
      return `
        <button class="nav-group-heading ${hasActiveChild ? "has-active-child" : ""}" type="button" data-nav-toggle="${section.id}" aria-expanded="${expanded}">
          <span class="nav-icon-badge" style="background: ${hatgNavIconGradient(section.id)};"><ha-icon icon="${section.icon}"></ha-icon></span>
          <span>${section.label}</span>
          <ha-icon class="nav-group-chevron" icon="mdi:chevron-down"></ha-icon>
        </button>`;
    };
    const renderSubItem = (group, parentId) => `
        <button class="nav-item nav-subitem ${group.id === this._activeSection ? "active" : ""}" type="button" data-section="${group.id}">
          <span class="nav-icon-badge" style="background: ${hatgNavIconGradient(parentId)};"><ha-icon icon="${group.icon || "mdi:folder-outline"}"></ha-icon></span>
          <span>${group.label}</span>
        </button>`;
    const renderPlainHeading = (label) => `<div class="nav-group-heading nav-group-heading-plain">${label}</div>`;

    const overviewItem = renderItem({ id: "overview", label: "Start", icon: "mdi:view-grid-outline" });
    if (this._state.mode === "user") {
      return [overviewItem, ...HATG_USER_SECTIONS.map((s) => renderItem(s)), ...HATG_TAIL_NAV.map((s) => renderItem(s))].join("");
    }
    const mid = [];
    HATG_MANIFEST.sections.forEach((s) => {
      if (s.id === "card-mod-generator") return;
      if (s.groups && s.groups.length) {
        mid.push(renderGroupHeading(s));
        if (this.navGroupExpanded(s)) {
          s.groups.forEach((g) => mid.push(renderSubItem(g, s.id)));
        }
      } else {
        mid.push(renderItem(s));
      }
    });
    const cardModSection = HATG_MANIFEST.sections.find((s) => s.id === "card-mod-generator");
    const tools = [
      renderPlainHeading("Tools"),
      cardModSection ? renderItem(cardModSection) : "",
      ...HATG_TAIL_NAV.map((s) => renderItem(s)),
    ];
    return [overviewItem, ...mid, ...tools].join("");
  }

  renderBadge(key) {
    if (this._state.mode !== "profi") return "";
    if (!HATG_DERIVE_REVERSE[key]) return "";
    const src = this.currentSource()[key];
    if (src === "custom") {
      return `<button class="source-tag custom" type="button" data-reset-field="${key}" title="Vorschlag übernehmen">angepasst<ha-icon icon="mdi:restore"></ha-icon></button>`;
    }
    return `<span class="source-tag auto">automatisch</span>`;
  }

  renderSyncTriad(key) {
    const triad = HATG_SYNC_TRIADS[key];
    if (!triad) return "";
    const values = this.currentValues();
    const toHex = (v) => {
      if (!v) return "#000000";
      return hatgIsHex(v) ? hatgNormalizeHex6(v) : hatgParseRgba(v).hex;
    };
    const haHex = toHex(values[key]);
    const bubbleHex = toHex(values[triad.bubble]);
    const mushHex = toHex(values[triad.mush]);
    return `
      <span class="sync-triad" title="Aktuelle Farbe je Framework">
        <span class="sync-triad-chip" title="Home Assistant: ${key}">
          <ha-icon icon="mdi:home-assistant"></ha-icon>
          <span class="sync-triad-dot" style="background:${haHex};"></span>
        </span>
        <span class="sync-triad-chip" title="Bubble Card: ${triad.bubble}">
          <ha-icon icon="mdi:chart-bubble"></ha-icon>
          <span class="sync-triad-dot" style="background:${bubbleHex};"></span>
        </span>
        <span class="sync-triad-chip" title="Mushroom: ${triad.mush}">
          <ha-icon icon="mdi:mushroom"></ha-icon>
          <span class="sync-triad-dot" style="background:${mushHex};"></span>
        </span>
        <button type="button" class="sync-triad-button" data-sync-triad="${key}" title="Bubble Card + Mushroom wieder auf diese Farbe angleichen">
          <ha-icon icon="mdi:sync"></ha-icon>
        </button>
      </span>`;
  }

  renderSyncPair(key) {
    const pair = HATG_SYNC_PAIRS[key];
    if (!pair) return "";
    const values = this.currentValues();
    const toHex = (v) => {
      if (!v) return "#000000";
      return hatgIsHex(v) ? hatgNormalizeHex6(v) : hatgParseRgba(v).hex;
    };
    let haChip;
    let bubbleChip;
    if (pair.kind === "border-width") {
      const bubbleWidth = hatgParseBorderShorthand(values[pair.bubble]).width;
      haChip = `<span class="sync-triad-value">${hatgEscape(String(values[key] ?? ""))}</span>`;
      bubbleChip = `<span class="sync-triad-value">${hatgEscape(bubbleWidth)}</span>`;
    } else {
      haChip = `<span class="sync-triad-dot" style="background:${toHex(values[key])};"></span>`;
      bubbleChip = `<span class="sync-triad-dot" style="background:${toHex(values[pair.bubble])};"></span>`;
    }
    return `
      <span class="sync-triad sync-pair" title="Aktueller Wert je Framework">
        <span class="sync-triad-chip" title="Home Assistant: ${key}">
          <ha-icon icon="mdi:home-assistant"></ha-icon>
          ${haChip}
        </span>
        <span class="sync-triad-chip" title="Bubble Card: ${pair.bubble}">
          <ha-icon icon="mdi:chart-bubble"></ha-icon>
          ${bubbleChip}
        </span>
        <button type="button" class="sync-triad-button" data-sync-pair="${key}" title="Bubble Card wieder auf diesen Wert angleichen">
          <ha-icon icon="mdi:sync"></ha-icon>
        </button>
      </span>`;
  }

  renderFontField(key) {
    const presets = HATG_FONT_PRESETS;
    const value = this.currentValues()[key];
    const matched = presets.find((p) => p.stack === value);
    const selectedId = matched ? matched.id : "custom";
    const options = presets
      .map((p) => {
        const previewStack = p.stack ? hatgEscape(p.stack) : "inherit";
        return `<option value="${p.id}" style="font-family: ${previewStack};" ${p.id === selectedId ? "selected" : ""}>${p.label}</option>`;
      })
      .join("");
    const showCustom = selectedId === "custom";
    const selectStack = matched && matched.stack ? hatgEscape(matched.stack) : "inherit";
    return `
        <div class="field-row" data-key="${key}">
          <span class="field-key">${key}${this.renderBadge(key)}</span>
          <span class="field-input">
            <select class="font-select" data-font-select="${key}" style="font-family: ${selectStack};">${options}</select>
          </span>
        </div>
        ${
          showCustom
            ? `
        <div class="field-row" data-key="${key}-custom">
          <span class="field-key">eigener Font-Stack</span>
          <span class="field-input"><input type="text" class="text-input" value="${hatgEscape(value)}" spellcheck="false" data-text-field="${key}" /></span>
        </div>`
            : ""
        }`;
  }

  renderFieldRow(key) {
    if (key.includes("font-family")) return this.renderFontField(key);

    const values = this.currentValues();
    const value = values[key];
    const badge = this.renderBadge(key);
    const type = hatgClassify(key, value);
    const checkbox = this._state.selectMode
      ? `<input type="checkbox" class="select-checkbox" data-select-key="${key}" ${this._state.selectedKeys.includes(key) ? "checked" : ""} />`
      : "";
    const originalFormat = hatgGetKeyFormats()[key];

    if (originalFormat === "hex" || originalFormat === "rgba") {
      const isNativeRgba = originalFormat === "rgba";
      const otherMode = this._state.editorMode === "light" ? "dark" : "light";
      const otherLabel = otherMode === "dark" ? "Dark" : "Light";
      const copyButton = `
          <button class="apply-button copy-mode-button" type="button" data-copy-to-other="${key}" aria-label="Nach ${otherLabel} übernehmen" title="Farbe nach ${otherLabel} übernehmen">
            <ha-icon icon="mdi:swap-horizontal"></ha-icon>
          </button>`;
      if (!this._state.colorViewFormat) this._state.colorViewFormat = {};
      const viewFmt = this._state.colorViewFormat[key] || (isNativeRgba ? "rgba" : "hex");
      const formatSwitch = `
          <span class="format-switch" role="group" aria-label="${key} Anzeigeformat">
            <button type="button" class="format-switch-btn ${viewFmt === "hex" ? "active" : ""}" data-format-switch="${key}" data-format-target="hex" title="Als Hex anzeigen">Hex</button>
            <button type="button" class="format-switch-btn ${viewFmt === "rgb" ? "active" : ""}" data-format-switch="${key}" data-format-target="rgb" title="Als RGB anzeigen">RGB</button>
            <button type="button" class="format-switch-btn ${viewFmt === "rgba" ? "active" : ""}" data-format-switch="${key}" data-format-target="rgba" title="Als RGBA anzeigen (mit Transparenz)">RGBA</button>
          </span>`;

      if (viewFmt === "rgba") {
        const parsed = hatgIsHex(value) ? { hex: hatgNormalizeHex6(value), alpha: 1 } : hatgParseRgba(value);
        return `
          <div class="field-row" data-key="${key}" data-type="${type}">
            ${checkbox}
            <span class="field-key">${key}${badge}</span>
            ${formatSwitch}
            <span class="field-input color-input-wrap rgba-input-wrap">
              <input class="native-color" type="color" value="${parsed.hex}" data-rgba-picker="${key}" aria-label="${key}" />
              <input class="hex-input rgba-raw-input" type="text" spellcheck="false" data-text-field="${key}" value="${hatgEscape(hatgComposeRgba(parsed.hex, parsed.alpha))}" aria-label="${key} rgba-Wert" />
            </span>
            ${this.renderSyncTriad(key)}
            ${this.renderSyncPair(key)}
            ${copyButton}
          </div>`;
      }

      const swatchHex = hatgIsHex(value) ? value : hatgParseRgba(value).hex;
      const displayValue = hatgFormatColorForView(swatchHex, viewFmt);
      return `
        <div class="field-row" data-key="${key}" data-type="${type}">
          ${checkbox}
          <span class="field-key">${key}${badge}</span>
          ${formatSwitch}
          <span class="field-input color-input-wrap">
            <input class="native-color" type="color" value="${swatchHex}" data-color-picker="${key}" aria-label="${key}" />
            <input class="hex-input" type="text" value="${displayValue}" spellcheck="false" data-hex-input="${key}" data-hex-format="${viewFmt}" aria-label="${key} Farbcode" />
          </span>
          ${this.renderSyncTriad(key)}
          ${this.renderSyncPair(key)}
          ${copyButton}
        </div>`;
    }

    if (originalFormat === "rgb_triplet") {
      const hex = hatgRgbTripleToHex(value);
      return `
        <div class="field-row" data-key="${key}" data-type="${type}">
          ${checkbox}
          <span class="field-key">${key}${badge}<small class="format-tag">RGB</small></span>
          <span class="field-input color-input-wrap">
            <input class="native-color" type="color" value="${hex}" data-rgbtriplet-picker="${key}" aria-label="${key}" />
            <input class="hex-input" type="text" value="${hatgEscape(value)}" spellcheck="false" data-text-field="${key}" aria-label="${key} RGB" />
          </span>
        </div>`;
    }

    if (hatgIsLong(key, value)) {
      return `
        <div class="field-row field-row-wide" data-key="${key}" data-type="${type}">
          <span class="field-key">${key}${badge}</span>
          <div class="code-editor-wrap">
            <pre class="code-editor-highlight" aria-hidden="true"><code>${hatgHighlightCode(value)}</code></pre>
            <textarea class="field-textarea code-editor-input" spellcheck="false" data-text-field="${key}" data-code-highlight="${key}">${hatgEscape(value)}</textarea>
          </div>
        </div>`;
    }
    return `
        <div class="field-row" data-key="${key}" data-type="${type}">
          ${checkbox}
          <span class="field-key">${key}${badge}</span>
          <span class="field-input">
            <input class="text-input" type="text" value="${hatgEscape(value)}" spellcheck="false" data-text-field="${key}" />
          </span>
          ${this.renderSyncPair(key)}
        </div>`;
  }

  filteredKeys(keys) {
    const values = this.currentValues();
    const f = this._state.sectionFilters;
    return keys.filter((k) => {
      const v = values[k];
      if (f.color.length > 0 && !f.color.includes(v)) return false;
      if (f.type && hatgClassify(k, v) !== f.type) return false;
      if (f.status && hatgExtractStatusCategory(k) !== f.status) return false;
      return true;
    });
  }

  renderModeToggleBar() {
    return `
      <div class="editor-switch" role="group" aria-label="Editor-Modus">
        <button type="button" class="${this._state.editorMode === "light" ? "active" : ""}" data-editor-mode="light">Light</button>
        <button type="button" class="${this._state.editorMode === "dark" ? "active" : ""}" data-editor-mode="dark">Dark</button>
      </div>`;
  }

  renderFilterBar(keys) {
    const values = this.currentValues();
    const colorCounts = new Map();
    const typeSet = new Set();
    const statusSet = new Set();
    keys.forEach((k) => {
      const v = values[k];
      const type = hatgClassify(k, v);
      typeSet.add(type);
      if (type === "color") colorCounts.set(v, (colorCounts.get(v) || 0) + 1);
      const statusCategory = hatgExtractStatusCategory(k);
      if (statusCategory) statusSet.add(statusCategory);
    });
    const f = this._state.sectionFilters;
    const colorChips = [...colorCounts.keys()]
      .slice(0, 30)
      .map((hex) => `<button class="filter-dot ${f.color.includes(hex) ? "active" : ""}" type="button" data-filter-color="${hex}" style="background:${hex}" title="${hex} (${colorCounts.get(hex)}×) – Mehrfachauswahl möglich"></button>`)
      .join("");
    const typeLabels = { color: "Farben", radius: "Radius", shadow: "Schatten", font: "Schrift", other: "Sonstige" };
    const typeChips = [...typeSet]
      .map((t) => `<button class="filter-chip ${f.type === t ? "active" : ""}" type="button" data-filter-type="${t}">${typeLabels[t] || t}</button>`)
      .join("");
    const statusChips = HATG_STATUS_CATEGORY_ORDER
      .filter((s) => statusSet.has(s))
      .map((s) => `<button class="filter-chip ${f.status === s ? "active" : ""}" type="button" data-filter-status="${s}">${HATG_STATUS_CATEGORY_LABELS[s]}</button>`)
      .join("");
    const hasActive = f.color.length > 0 || f.type || f.status || this._state.tagFilters.length > 0;
    return `
      <div class="filter-bar">
        ${colorChips ? `<div class="filter-row"><span class="filter-label">Farben</span><div class="filter-dots">${colorChips}</div></div>` : ""}
        <div class="filter-row"><span class="filter-label">Typ</span><div class="filter-chips">${typeChips}</div></div>
        ${statusChips ? `<div class="filter-row"><span class="filter-label">Zustand</span><div class="filter-chips">${statusChips}</div></div>` : ""}
        ${hasActive ? `<button class="filter-clear" type="button" data-filter-clear><ha-icon icon="mdi:filter-off-outline"></ha-icon><span>Filter zurücksetzen</span></button>` : ""}
      </div>`;
  }

  renderTagFilterBar(tagFilteredKeys) {
    const tags = this._state.tagFilters;
    const tokenCounts = new Map();
    tagFilteredKeys.forEach((k) => {
      hatgTokenizeKey(k).forEach((t) => {
        if (tags.includes(t)) return;
        tokenCounts.set(t, (tokenCounts.get(t) || 0) + 1);
      });
    });
    const available = [...tokenCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const activeChips = tags
      .map(
        (t) =>
          `<button class="tag-chip active" type="button" data-filter-tag="${t}" title="„${t}“ entfernen">${hatgEscape(t)}<ha-icon icon="mdi:close"></ha-icon></button>`
      )
      .join("");
    const availableChips = available
      .map(
        ([t, count]) =>
          `<button class="tag-chip" type="button" data-filter-tag="${t}" title="nach „${t}“ weiter einschränken (${count} Treffer)">${hatgEscape(t)}<small>${count}</small></button>`
      )
      .join("");
    if (!activeChips && !availableChips) return "";
    return `
      <div class="tag-filter-bar">
        ${activeChips ? `<div class="filter-row"><span class="filter-label">Bausteine</span><div class="tag-chip-row">${activeChips}</div></div>` : ""}
        ${availableChips ? `<div class="filter-row"><span class="filter-label">Weiter einschränken</span><div class="tag-chip-row tag-chip-cloud">${availableChips}</div></div>` : ""}
      </div>`;
  }

  renderSectionToolbar(keys) {
    return `
      <div class="section-toolbar">
        ${this.renderModeToggleBar()}
      </div>
      ${this.renderFilterBar(keys)}
      <div class="field-list-header">
        <button class="select-toggle ${this._state.selectMode ? "active" : ""}" type="button" data-toggle-select>
          <ha-icon icon="mdi:checkbox-multiple-marked-outline"></ha-icon>
          <span>Auswählen</span>
        </button>
      </div>`;
  }

  renderBulkBar() {
    if (!this._state.selectMode || this._state.selectedKeys.length === 0) return "";
    const values = this.currentValues();
    const types = new Set(this._state.selectedKeys.map((k) => hatgClassify(k, values[k])));
    const allColor = types.size === 1 && types.has("color");
    const bulkControls = allColor
      ? `
        <input type="color" class="native-color" data-bulk-color value="#2F7BFF" />
        <input type="text" class="hex-input bulk-hex-input" data-bulk-hex value="#2F7BFF" maxlength="9" spellcheck="false" aria-label="Farbcode eingeben" placeholder="#2F7BFF" />
        <button class="bulk-apply" type="button" data-bulk-apply>Auf Farbe synchronisieren</button>`
      : `
        <input type="text" class="text-input bulk-text-input" data-bulk-text spellcheck="false" placeholder="Neuer Wert für alle ausgewählten Felder" aria-label="Wert für alle ausgewählten Felder" />
        <button class="bulk-apply" type="button" data-bulk-apply-text>Auf Wert synchronisieren</button>`;
    return `
      <div class="bulk-bar">
        <span>${this._state.selectedKeys.length} ausgewählt</span>
        ${bulkControls}
        <button class="bulk-cancel" type="button" data-bulk-cancel>Abbrechen</button>
      </div>`;
  }

  renderFieldList(keys, groups) {
    const shown = this.filteredKeys(keys);
    const dark = this._state.editorMode === "dark";
    let body;
    if (groups && groups.length) {
      const shownSet = new Set(shown);
      body = groups
        .map((g) => {
          const rows = g.keys.filter((k) => shownSet.has(k)).map((k) => this.renderFieldRow(k)).join("");
          if (!rows) return "";
          return `
            <div class="field-group">
              <div class="field-group-title">${hatgEscape(g.label)}</div>
              ${rows}
            </div>`;
        })
        .join("");
      if (!body) body = `<p class="empty-hint">Keine Felder für diese Filterkombination.</p>`;
    } else {
      body = shown.length ? shown.map((k) => this.renderFieldRow(k)).join("") : `<p class="empty-hint">Keine Felder für diese Filterkombination.</p>`;
    }
    return `
      <div class="editing-surface ${dark ? "editing-surface-dark" : ""}">
        ${this.renderSectionToolbar(keys)}
        <div class="field-list">
          ${body}
        </div>
        ${this.renderBulkBar()}
      </div>`;
  }

  renderOverview() {
    const curated = [
      "primary-color",
      "accent-color",
      "primary-background-color",
      "card-background-color",
      "primary-text-color",
      "ha-card-border-radius",
    ];
    return `
      <section class="editor-section overview-section">
        <div class="section-heading">
          <span class="eyebrow">Erster Schritt</span>
          <h1>Theme erstellen</h1>
          <p>Beginne mit dem Namen und den wichtigsten Grundwerten. Alle ${Object.keys(this.currentValues()).length} Variablen findest du kategorisiert in der Seitenleiste oder gesammelt unter "Alle Felder".</p>
        </div>

        <label class="theme-name-field">
          <span>Theme-Name</span>
          <input type="text" value="${hatgEscape(this._state.themeName)}" placeholder="Mein neues Theme" data-theme-name />
        </label>

        ${this.renderFieldList(curated)}
      </section>`;
  }

  renderUserSectionPage(meta) {
    return `
      <section class="editor-section">
        <div class="section-heading">
          <span class="eyebrow">User</span>
          <h1>${meta.label}</h1>
          <p>Diese Werte werden automatisch auf Bubble Card, Mushroom und passende Zustandsfarben übertragen.</p>
        </div>
        ${this.renderFieldList(meta.keys)}
      </section>`;
  }

  renderSectionPage(id) {
    const gm = this.groupMeta(id);
    if (gm) {
      return `
        <section class="editor-section">
          <div class="section-heading">
            <span class="eyebrow">Profi &middot; ${hatgEscape(gm.parent.label)}</span>
            <h1>${hatgEscape(gm.group.label)}</h1>
            <p>${gm.group.keys.length} Variablen</p>
          </div>
          ${this.renderFieldList(gm.group.keys)}
        </section>`;
    }
    const meta = this.sectionMeta(id);
    if (!meta) return this.renderOverview();
    return `
      <section class="editor-section">
        <div class="section-heading">
          <span class="eyebrow">Profi</span>
          <h1>${meta.label}</h1>
          <p>${meta.desc} &middot; ${meta.keys.length} Variablen</p>
        </div>
        ${this.renderFieldList(meta.keys, meta.groups)}
      </section>`;
  }

  renderAlleFelder() {
    const q = this._state.searchQuery.trim().toLowerCase();
    const keyToSection = {};
    const allKeys = [];
    HATG_MANIFEST.sections.forEach((s) => {
      if (s.groups && s.groups.length) {
        s.groups.forEach((g) => {
          g.keys.forEach((k) => {
            keyToSection[k] = g.label;
            allKeys.push(k);
          });
        });
      } else {
        s.keys.forEach((k) => {
          keyToSection[k] = s.label;
          allKeys.push(k);
        });
      }
    });
    const searched = allKeys.filter((k) => !q || k.toLowerCase().includes(q));
    const tagFiltered = searched.filter((k) => hatgKeyMatchesTags(k, this._state.tagFilters));
    const shown = this.filteredKeys(tagFiltered);
    const dark = this._state.editorMode === "dark";
    return `
      <section class="editor-section">
        <div class="section-heading">
          <span class="eyebrow">Suche</span>
          <h1>Alle Felder</h1>
          <p>${shown.length} von ${allKeys.length} Variablen.</p>
        </div>
        <div class="editing-surface ${dark ? "editing-surface-dark" : ""}">
          <div class="section-toolbar">
            ${this.renderModeToggleBar()}
          </div>
          <label class="search-field">
            <ha-icon icon="mdi:magnify"></ha-icon>
            <input type="text" placeholder="Variable suchen…" value="${hatgEscape(this._state.searchQuery)}" data-search-field />
          </label>
          ${this.renderTagFilterBar(tagFiltered)}
          ${this.renderFilterBar(tagFiltered)}
          <div class="field-list-header">
            <button class="select-toggle ${this._state.selectMode ? "active" : ""}" type="button" data-toggle-select>
              <ha-icon icon="mdi:checkbox-multiple-marked-outline"></ha-icon>
              <span>Auswählen</span>
            </button>
          </div>
          <div class="field-list">
            ${shown.length
              ? shown
                  .map((k) => {
                    const rowHtml = this.renderFieldRow(k);
                    const statusCategory = hatgExtractStatusCategory(k);
                    const statusBadge = statusCategory
                      ? `<small class="field-status-tag">${HATG_STATUS_CATEGORY_LABELS[statusCategory]}</small>`
                      : "";
                    return rowHtml.replace(
                      `<span class="field-key">${k}`,
                      `<span class="field-key">${k}<small class="field-section-tag">${keyToSection[k]}</small>${statusBadge}`
                    );
                  })
                  .join("")
              : `<p class="empty-hint">Keine Felder für diese Filterkombination.</p>`}
          </div>
          ${this.renderBulkBar()}
        </div>
      </section>`;
  }

  renderCodeEditor() {
    const values = this.currentValues();
    const sectionCards = [];
    HATG_MANIFEST.sections.forEach((s) => {
      const setKeys = s.keys.filter((k) => values[k] !== undefined && values[k] !== "" && !hatgIsLong(k, values[k]));
      if (!setKeys.length) return;
      const rawText = setKeys.map((k) => `${k}: ${hatgQuoteYamlValue(values[k])}`).join("\n");
      sectionCards.push(`
        <div class="code-section-card">
          <div class="code-section-title">${hatgEscape(s.label)}</div>
          <div class="code-editor-wrap">
            <pre class="code-editor-highlight" aria-hidden="true"><code>${hatgHighlightCode(rawText)}</code></pre>
            <textarea class="field-textarea code-editor-input" spellcheck="false" data-quickedit-section="${s.id}" data-code-highlight="quickedit-${s.id}">${hatgEscape(rawText)}</textarea>
          </div>
        </div>`);
    });
    return `
      <section class="editor-section">
        <div class="section-heading">
          <span class="eyebrow">Quick-Edit</span>
          <h1>Code-Editor</h1>
          <p>Werte direkt hier als Text bearbeiten – ohne durch die Sektionen zu navigieren. Änderungen werden beim Tippen sofort übernommen.</p>
        </div>
        <div class="section-toolbar">${this.renderModeToggleBar()}</div>
        <div class="code-view">${sectionCards.join("")}</div>
      </section>`;
  }

  commitQuickEditBlock(rawText) {
    const values = this.currentValues();
    const lineRe = /^([A-Za-z0-9_.-]+):\s*"((?:[^"\\]|\\.)*)"\s*$/;
    String(rawText ?? "")
      .split("\n")
      .forEach((line) => {
        const m = lineRe.exec(line);
        if (!m) return;
        const key = m[1];
        if (values[key] === undefined) return;
        const value = m[2].replace(/\\"/g, '"');
        if (value !== values[key]) this.commitField(key, value);
      });
  }

  renderHaLive() {
    const device = this._state.haLiveDevice || "phone";
    const devices = [
      { id: "phone", label: "Handy", icon: "mdi:cellphone" },
      { id: "tablet", label: "Tablet", icon: "mdi:tablet" },
      { id: "desktop", label: "Desktop", icon: "mdi:monitor" },
    ];
    const deviceButtons = devices
      .map(
        (d) => `
          <button type="button" class="ha-live-device-btn ${d.id === device ? "active" : ""}" data-ha-live-device="${d.id}">
            <ha-icon icon="${d.icon}"></ha-icon> ${d.label}
          </button>`
      )
      .join("");
    return `
      <section class="editor-section ha-live-section">
        <div class="section-heading ha-live-heading">
          <div>
            <span class="eyebrow">Live-Ansicht</span>
            <h1>HA Live</h1>
            <p>Zeigt dein echtes Home-Assistant-Dashboard direkt hier – kein Mockup, sondern die echte Oberfläche. "Zwischenstand sichern" und "Datei speichern" laden HAs Themes automatisch neu; danach hier auf "Aktualisieren" tippen, um die neue Farbgebung zu sehen.</p>
          </div>
          ${this.renderPreviewSourceToggle()}
        </div>
        <div class="ha-live-toolbar">
          <div class="ha-live-device-toggle">${deviceButtons}</div>
          <button type="button" class="modal-btn ghost" data-ha-live-refresh>
            <ha-icon icon="mdi:refresh"></ha-icon> Aktualisieren
          </button>
          <span class="ha-live-hint">Bleibt die Ansicht leer oder fragt nach Login: der Browser blockiert vermutlich das Einbetten – bitte kurz Rückmeldung geben.</span>
        </div>
        <div class="ha-live-phone-frame device-${device}">
          ${device === "desktop" ? `<div class="ha-live-window-bar"><span></span><span></span><span></span></div>` : ""}
          <div class="ha-live-frame" data-ha-live-container></div>
        </div>
      </section>`;
  }

  copyTextToClipboard(text) {
    const legacyFallback = () => {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.top = "-1000px";
        textarea.style.left = "-1000px";
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, text.length);
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        return ok ? Promise.resolve() : Promise.reject(new Error("execCommand copy fehlgeschlagen"));
      } catch (err) {
        return Promise.reject(err);
      }
    };
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      return navigator.clipboard.writeText(text).catch(() => legacyFallback());
    }
    return legacyFallback();
  }

  copyPluginTemplate(id) {
    const plugin = HATG_PLUGINS.find((p) => p.id === id);
    if (!plugin) return;
    const text = hatgPluginCardTemplate(plugin);
    this.copyTextToClipboard(text).then(
      () => this.showToast(`Vorlage "${plugin.label}" in Zwischenablage kopiert.`),
      () => this.showToast("Kopieren nicht möglich – bitte manuell markieren.")
    );
  }

  copyCombinedPluginTemplate() {
    const plugins = HATG_PLUGINS.filter((p) => this._selectedPlugins.has(p.id));
    if (plugins.length < 2) return;
    const text = hatgBuildCombinedPluginTemplate(plugins);
    this.copyTextToClipboard(text).then(
      () => this.showToast(`Kombinierte Vorlage (${plugins.length} Plugins) in Zwischenablage kopiert.`),
      () => this.showToast("Kopieren nicht möglich – bitte manuell markieren.")
    );
  }

  togglePluginSelection(id) {
    const plugin = HATG_PLUGINS.find((p) => p.id === id);
    if (!plugin || !hatgIsPluginCombinable(plugin)) return;
    if (this._selectedPlugins.has(id)) this._selectedPlugins.delete(id);
    else this._selectedPlugins.add(id);
    this.render();
  }

  renderPlugins() {
    const selectedCount = this._selectedPlugins.size;
    const rows = HATG_PLUGINS.map((plugin) => {
      const combinable = hatgIsPluginCombinable(plugin);
      const checked = this._selectedPlugins.has(plugin.id) ? "checked" : "";
      const checkboxHtml = combinable
        ? `<input type="checkbox" class="plugin-select-checkbox" data-plugin-select="${plugin.id}" ${checked} title="Zur Kombination auswaehlen" />`
        : `<span class="plugin-select-spacer" title="Kann nicht mit anderen Plugins kombiniert werden (eigene Kartenstruktur)"></span>`;
      return `
        <div class="plugin-row ${checked ? "is-selected" : ""}">
          ${checkboxHtml}
          <div class="plugin-row-thumb">
            <img
              src="${plugin.screenshot}"
              alt="${hatgEscape(plugin.label)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${HATG_PLUGIN_SCREENSHOT_DUMMY}';"
            />
          </div>
          <div class="plugin-row-body">
            <strong>${hatgEscape(plugin.label)}</strong>
            <p>${hatgEscape(plugin.desc)}</p>
            <p class="plugin-hint">${
              plugin.hint ||
              "Wirkt zuverlässig nur direkt in der Karte (Bubble Cards eigener <code>styles:</code>-Schlüssel) – nicht global übers Theme, da Bubble Card den Slider-Fill selbst mit höherer Priorität überschreibt. Vorlage unten in eine eigene Slider-Karte einfügen und Entity anpassen."
            }</p>
          </div>
          <button
            type="button"
            class="plugin-toggle-button"
            data-copy-plugin-template="${plugin.id}"
          >
            <ha-icon icon="mdi:content-copy"></ha-icon>
            <span>Vorlage kopieren</span>
          </button>
        </div>`;
    }).join("");
    return `
      <section class="editor-section">
        <div class="section-heading">
          <span class="eyebrow">Erweiterungen</span>
          <h1>Plugins</h1>
          <p>Fertige card-mod-Bausteine für Bubble-Card-Slider – als Kopiervorlage für einzelne Karten (siehe Hinweis je Karte, warum das nicht global übers Theme funktioniert). Mit den Kästchen lassen sich mehrere Plugins auswählen und als eine kombinierte Karte kopieren.</p>
        </div>
        <div class="plugin-combine-bar">
          <span class="plugin-combine-count">${selectedCount} ausgewählt</span>
          <button type="button" class="plugin-combine-button" data-copy-combined-template ${selectedCount < 2 ? "disabled" : ""}>
            <ha-icon icon="mdi:content-copy"></ha-icon>
            <span>Kombinierte Vorlage kopieren</span>
          </button>
        </div>
        <div class="plugin-list">${rows}</div>
      </section>`;
  }

  generatorBlurTransparencyState() {
    const values = this.currentValues();
    const blurRaw = String(values["card-backdrop-blur"] ?? "none").trim();
    const blurPx = Math.max(0, Math.min(40, parseInt(blurRaw, 10) || 0));
    const bgValue = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const parsed = hatgIsHex(bgValue) ? { hex: hatgNormalizeHex6(bgValue), alpha: 1 } : hatgParseRgba(bgValue);
    const alphaPercent = Math.round((parsed.alpha ?? 1) * 100);
    return { blurPx, hex: parsed.hex, alphaPercent };
  }

  renderGenerators() {
    const { blurPx, alphaPercent, hex } = this.generatorBlurTransparencyState();
    return `
      <section class="editor-section">
        <div class="section-heading">
          <span class="eyebrow">Werkzeuge</span>
          <h1>Generatoren</h1>
          <p>Interaktive Regler, die dir Theme-Werte direkt mit Live-Vorschau erzeugen – statt Werte von Hand einzutippen. Anders als die Plugin-Bibliothek (fertige Kopiervorlagen) wirken Generatoren direkt auf deine Theme-Felder.</p>
        </div>
        <div class="generator-card">
          <div class="generator-card-head">
            <ha-icon icon="mdi:blur"></ha-icon>
            <div>
              <strong>Blur &amp; Kartentransparenz</strong>
              <p>Glaseffekt für Karten: Unschärfe wirkt auf Bubble-Card-Kacheln (per card-mod), die Kartentransparenz auf die Kartenfarbe selbst – global für Home Assistant, Bubble Card und Mushroom.</p>
            </div>
          </div>
          <div class="generator-preview-backdrop">
            <div class="generator-preview-card" data-generator-preview-card style="background: ${hatgComposeRgba(hex, alphaPercent / 100)}; backdrop-filter: blur(${blurPx}px); border-radius: ${hatgEscape(this.currentValues()["ha-card-border-radius"] || "12px")};">
              <ha-icon icon="mdi:thermometer"></ha-icon>
              <span>21,4&deg;</span>
            </div>
          </div>
          <div class="generator-control-row">
            <div class="generator-control">
              <label>Unschärfe <span class="generator-value" data-generator-blur-value>${blurPx} px</span></label>
              <input type="range" min="0" max="40" step="1" value="${blurPx}" data-generator-blur />
            </div>
            <div class="generator-control">
              <label>Kartentransparenz <span class="generator-value" data-generator-opacity-value>${alphaPercent} %</span></label>
              <input type="range" min="0" max="100" step="1" value="${alphaPercent}" data-generator-opacity />
            </div>
          </div>
          <p class="generator-footnote">Unschärfe schreibt in <code>card-backdrop-blur</code>, Kartentransparenz in <code>card-background-color</code> / <code>ha-card-background</code> (als RGBA) – beide Felder findest du auch einzeln unter „Alle Felder".</p>
        </div>
      </section>`;
  }

  buildYamlText(rootNameOverride) {
    const name = rootNameOverride || hatgSlugTheme(this._state.themeName);
    const modeBlock = (mode) => {
      const values = this._state.values[mode];
      const parts = HATG_MANIFEST.sections.map((s) => {
        const lines = s.keys
          .filter((k) => values[k] !== undefined && values[k] !== "")
          .map((k) => {
            const value = k === "card-mod-theme" ? name : values[k];
            return `      ${k}: ${hatgQuoteYamlValue(value)}`;
          })
          .join("\n");
        if (!lines) return "";
        return `      # ${s.label}\n${lines}`;
      });
      const extra = this._state.extraValues ? this._state.extraValues[mode] : null;
      if (extra) {
        const extraKeys = Object.keys(extra);
        if (extraKeys.length) {
          const extraLines = extraKeys.map((k) => `      ${k}: ${hatgQuoteYamlValue(extra[k])}`).join("\n");
          parts.push(`      # Importierte Zusatzwerte (von HATG nicht erkannt)\n${extraLines}`);
        }
      }
      return parts.filter(Boolean).join("\n\n");
    };
    const header = this.buildYamlHeader();
    return `${header}${name}:\n  modes:\n    light:\n${modeBlock("light")}\n\n    dark:\n${modeBlock("dark")}\n`;
  }

  syncCardModThemeName() {
    const slug = hatgSlugTheme(this._state.themeName);
    this._state.values.light["card-mod-theme"] = slug;
    this._state.values.dark["card-mod-theme"] = slug;
  }

  buildYamlHeader() {
    const light = this._state.values.light;
    const primary = light["primary-color"] || "?";
    const accent = light["accent-color"] || "?";
    const radius = light["ha-card-border-radius"] || "?";
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    return [
      `# Erstellt mit HATG v${HATG_VERSION}`,
      `# Theme: ${this._state.themeName || "Unbenannt"} – Grundfarbe ${primary}, Akzent ${accent}, Karten-Radius ${radius}`,
      `# Generiert am ${dateStr}`,
      "",
    ].join("\n") + "\n";
  }

  renderMainSection() {
    if (this._activeSection === "alle-felder") return this.renderAlleFelder();
    if (this._activeSection === "code-editor") return this.renderCodeEditor();
    if (this._activeSection === "ha-live") return this.renderHaLive();
    if (this._activeSection === "plugins") return this.renderPlugins();
    if (this._activeSection === "generatoren") return this.renderGenerators();
    if (this._activeSection === "overview") return this.renderOverview();
    const userSection = this.userSectionMeta(this._activeSection);
    if (userSection) return this.renderUserSectionPage(userSection);
    return this.renderSectionPage(this._activeSection);
  }

  renderSettingsMenu() {
    if (!this._state.settingsOpen) return "";
    return `
      <div class="topbar-dropdown-menu">
        <div class="settings-row">
          <strong class="brand-label">HATG</strong>
          <span style="font-size:11px;color:var(--hatg-muted);">v${HATG_VERSION}</span>
        </div>
        <div class="settings-row">
          <span>Modus</span>
          <div class="mode-toggle-group inline" role="group" aria-label="Benutzermodus">
            <button type="button" class="${this._state.mode === "user" ? "active" : ""}" data-app-mode="user">User</button>
            <button type="button" class="${this._state.mode === "profi" ? "active" : ""}" data-app-mode="profi">Profi</button>
          </div>
        </div>
      </div>`;
  }

  renderOpenMenu() {
    if (!this._state.openMenuOpen) return "";
    return `
      <div class="topbar-dropdown-menu">
        <button type="button" class="dropdown-action-row" data-open-import>
          <ha-icon icon="mdi:file-upload-outline"></ha-icon>
          <span>
            <strong>Theme importieren</strong>
            <small>YAML einfügen, Datei wählen oder aus dem Themes-Ordner laden</small>
          </span>
        </button>
        <button type="button" class="dropdown-action-row" data-load-theme>
          <ha-icon icon="mdi:folder-open-outline"></ha-icon>
          <span>
            <strong>Browser-Entwurf laden</strong>
            <small>Zuletzt im Browser gesicherten Zwischenstand wiederherstellen</small>
          </span>
        </button>
        <button type="button" class="dropdown-action-row" data-open-base-preset>
          <ha-icon icon="mdi:palette-swatch-outline"></ha-icon>
          <span>
            <strong>Basis-Vorlage laden</strong>
            <small>Grundfarben auf eine eingebaute Werksvorlage zurücksetzen</small>
          </span>
        </button>
      </div>`;
  }

  renderSaveMenu() {
    if (!this._state.saveMenuOpen) return "";
    return `
      <div class="topbar-dropdown-menu">
        <button type="button" class="dropdown-action-row" data-quick-save>
          <ha-icon icon="mdi:content-save-all-outline"></ha-icon>
          <span>
            <strong>Theme als Datei speichern</strong>
            <small>Schreibt die finale Version nach config/themes/</small>
          </span>
        </button>
        <button type="button" class="dropdown-action-row" data-save-theme>
          <ha-icon icon="mdi:content-save-outline"></ha-icon>
          <span>
            <strong>Zwischenstand sichern</strong>
            <small>Browser + Work-Datei in config/themes/</small>
          </span>
        </button>
        <button type="button" class="dropdown-action-row" data-validate-theme>
          <ha-icon icon="mdi:shield-check-outline"></ha-icon>
          <span>
            <strong>Theme validieren</strong>
            <small>Prüft alle Felder auf ungültige/leere Werte</small>
          </span>
        </button>
      </div>`;
  }

  renderPreviewSourceToggle() {
    const inLive = this._activeSection === "ha-live";
    const values = this.currentValues();
    const accent = values["accent-color"] || "#38c76c";
    const activeStyle = `background: ${hatgEscape(accent)}; color: ${hatgEscape(hatgReadableTextColor(accent))};`;
    return `
      <div class="preview-source-toggle" role="group" aria-label="Vorschau-Quelle">
        <button type="button" class="${inLive ? "" : "active"}" style="${inLive ? "" : activeStyle}" data-preview-source="demo">Demo</button>
        <button type="button" class="${inLive ? "active" : ""}" style="${inLive ? activeStyle : ""}" data-preview-source="ha-live">HA Live</button>
      </div>`;
  }

  renderPreviewColorMenu() {
    const values = this.currentValues();
    const formats = hatgGetKeyFormats();
    const colorKeys = Object.keys(values).filter((k) => {
      const fmt = formats[k];
      if (fmt !== "hex" && fmt !== "rgba") return false;
      const v = String(values[k] ?? "").trim();
      if (!v || hatgIsGradient(v)) return false;
      if (!HATG_PREVIEW_BOUND_KEYS.includes(k)) return false;
      return true;
    });
    const open = !!this._state.previewColorMenuOpen;
    const rows = colorKeys
      .map((k) => {
        const v = values[k];
        return `
          <div class="color-menu-row">
            <span class="color-menu-dot" style="background: ${hatgEscape(v)};"></span>
            <span class="color-menu-code">${hatgEscape(k)}</span>
          </div>`;
      })
      .join("");

    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;

    return `
      <div class="preview-color-menu">
        <button type="button" class="color-menu-header" style="${shellStyle}" data-color-menu-toggle aria-expanded="${open}">
          <span class="color-menu-icon"><ha-icon icon="mdi:palette-outline"></ha-icon></span>
          <span class="color-menu-info">
            <span class="color-menu-primary">Alle Farben der Vorschau</span>
            <span class="color-menu-secondary">${hatgEscape(this._state.themeName || "Unbenannt")}</span>
          </span>
          <ha-icon class="color-menu-chevron" icon="mdi:chevron-down"></ha-icon>
        </button>
        ${open ? `<div class="color-menu-list" style="${shellStyle}">${rows}</div>` : ""}
      </div>`;
  }

  renderPreviewFontMenu() {
    const values = this.currentValues();
    const open = !!this._state.previewFontMenuOpen;

    const familyRows = [
      { key: "primary-font-family", label: "Grundschrift" },
      { key: "ha-font-family-heading", label: "Überschrift" },
      { key: "ha-font-family-body", label: "Fließtext" },
      { key: "ha-font-family-longform", label: "Langtext" },
      { key: "ha-font-family-code", label: "Code" },
      { key: "mdc-typography-font-family", label: "Eingabefelder" },
    ].map((f) => ({ ...f, style: `font-family: ${values[f.key] || "inherit"};` }));

    const baseFamily = values["ha-font-family-body"] || values["primary-font-family"] || "inherit";
    const sizeRows = [
      { key: "ha-font-size-scale", label: "Skalierungsfaktor", size: values["ha-font-size-m"] || "14px" },
      { key: "ha-font-size-2xs", label: "Kleinstschrift" },
      { key: "ha-font-size-xs", label: "Winzig" },
      { key: "ha-font-size-s", label: "Klein" },
      { key: "ha-font-size-m", label: "Standard" },
      { key: "ha-font-size-l", label: "Groß" },
      { key: "ha-font-size-xl", label: "Größer" },
      { key: "ha-font-size-2xl", label: "Überschrift klein" },
      { key: "ha-font-size-3xl", label: "Überschrift mittel" },
      { key: "ha-font-size-4xl", label: "Überschrift groß" },
    ].map((f) => ({ ...f, style: `font-family: ${baseFamily}; font-size: ${f.size || values[f.key] || "14px"};` }));

    const weightRows = [
      { key: "ha-font-weight-light", label: "Leicht" },
      { key: "ha-font-weight-normal", label: "Normal" },
      { key: "ha-font-weight-body", label: "Fließtext-Gewicht" },
      { key: "ha-font-weight-medium", label: "Mittel" },
      { key: "ha-font-weight-heading", label: "Überschrift-Gewicht" },
      { key: "ha-font-weight-action", label: "Buttons & Aktionen" },
      { key: "ha-font-weight-bold", label: "Fett" },
    ].map((f) => ({ ...f, style: `font-family: ${baseFamily}; font-weight: ${values[f.key] || "400"};` }));

    const dividerColor = values["divider-color"] || "rgba(127,140,160,.18)";
    const allRows = [...familyRows, ...sizeRows, ...weightRows];
    const rows = allRows
      .map(
        (f) => `
          <div class="font-menu-row" style="border-color: ${hatgEscape(dividerColor)};">
            <span class="font-menu-sample" style="${hatgEscape(f.style)}">${hatgEscape(f.label)}</span>
            <span class="font-menu-code">${hatgEscape(f.key)}</span>
          </div>`
      )
      .join("");

    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;

    return `
      <div class="preview-color-menu">
        <button type="button" class="color-menu-header" style="${shellStyle}" data-font-menu-toggle aria-expanded="${open}">
          <span class="color-menu-icon"><ha-icon icon="mdi:format-font"></ha-icon></span>
          <span class="color-menu-info">
            <span class="color-menu-primary">Schrift &amp; Typografie</span>
            <span class="color-menu-secondary">${hatgEscape(this._state.themeName || "Unbenannt")}</span>
          </span>
          <ha-icon class="color-menu-chevron" icon="mdi:chevron-down"></ha-icon>
        </button>
        ${open ? `<div class="color-menu-list font-menu-list" style="${shellStyle}">${rows}</div>` : ""}
      </div>`;
  }

  renderPreviewTileCard() {
    const values = this.currentValues();
    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const tileColor = values["primary-color"] || "#03a9f4";
    const textColor = values["primary-text-color"] || "#e6eaf1";

    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;

    return `
      <div class="preview-tile-card">
        <div class="tile-card-head">
          <span>HA Tile-Card &mdash; "color: primary"</span>
        </div>
        <div class="tile-card-shell" style="${shellStyle}">
          <div class="tile-card-content">
            <div class="tile-icon-circle" style="--tile-color: ${hatgEscape(tileColor)};">
              <ha-icon icon="mdi:check-circle"></ha-icon>
            </div>
            <div class="tile-card-info">
              <span class="tile-card-primary" style="color: ${hatgEscape(textColor)};">An/Aus &mdash; Icon Prim&auml;rfarbe</span>
              <span class="tile-card-secondary" style="color: ${hatgEscape(textColor)};">An</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  renderPreviewSwitchMarkup(values, checked) {
    const trackBg = checked
      ? values["ha-switch-checked-background-color"] || values["state-active-color"] || "#03a9f4"
      : values["ha-switch-background-color"] || "#c7c7cc";
    const trackBorder = checked
      ? values["ha-switch-checked-border-color"] || trackBg
      : values["ha-switch-border-color"] || trackBg;
    const thumbBg = checked
      ? values["ha-switch-checked-thumb-background-color"] || "#ffffff"
      : values["ha-switch-thumb-background-color"] || "#ffffff";
    const thumbBorder = checked
      ? values["ha-switch-checked-thumb-border-color"] || thumbBg
      : values["ha-switch-thumb-border-color"] || thumbBg;
    const switchVars = `--switch-track: ${hatgEscape(trackBg)}; --switch-track-border: ${hatgEscape(trackBorder)}; --switch-thumb: ${hatgEscape(thumbBg)}; --switch-thumb-border: ${hatgEscape(thumbBorder)};`;
    return `
      <span class="preview-ha-switch ${checked ? "checked" : ""}" style="${switchVars}">
        <span class="switch-track"><span class="switch-thumb"></span></span>
      </span>`;
  }

  renderPreviewEntitiesCard() {
    const values = this.currentValues();
    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const dividerColor = values["divider-color"] || "rgba(127,140,160,.18)";
    const textColor = values["primary-text-color"] || "#e6eaf1";
    const staticIconColor = values["state-icon-color"] || "#8e8e93";
    const lightOnColor = values["state-light-on-color"] || values["state-light-active-color"] || values["state-active-color"] || "#4cd964";
    const sliderTrack = values["disabled-color"] || "rgba(127,140,160,.35)";
    const sliderFill = values["primary-color"] || "#03a9f4";

    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;
    const rowDivider = `border-top: 1px solid ${hatgEscape(dividerColor)};`;

    return `
      <div class="preview-entities-card">
        <div class="tile-card-head">
          <span>HA Entities-Karte &mdash; 3 Zeilen</span>
        </div>
        <div class="tile-card-shell" style="${shellStyle}">
          <div class="toggle-row-content">
            <span class="toggle-row-icon" style="color: ${hatgEscape(staticIconColor)};">
              <ha-icon icon="mdi:string-lights-off"></ha-icon>
            </span>
            <span class="toggle-row-name" style="color: ${hatgEscape(textColor)};">Gartenlichter</span>
            ${this.renderPreviewSwitchMarkup(values, false)}
          </div>
          <div class="toggle-row-content" style="${rowDivider}">
            <span class="toggle-row-icon" style="color: ${hatgEscape(lightOnColor)};">
              <ha-icon icon="mdi:lightbulb"></ha-icon>
            </span>
            <span class="toggle-row-name" style="color: ${hatgEscape(textColor)};">Serversteuerung Server LED</span>
            ${this.renderPreviewSwitchMarkup(values, true)}
          </div>
          <div class="toggle-row-content" style="${rowDivider}">
            <span class="toggle-row-icon" style="color: ${hatgEscape(staticIconColor)};">
              <ha-icon icon="mdi:dots-grid"></ha-icon>
            </span>
            <span class="toggle-row-name" style="color: ${hatgEscape(textColor)};">Transparenz</span>
            <span class="preview-ha-slider" style="--slider-track: ${hatgEscape(sliderTrack)}; --slider-fill: ${hatgEscape(sliderFill)};">
              <span class="ha-slider-track"><span class="ha-slider-fill"></span><span class="ha-slider-thumb"></span></span>
            </span>
            <span class="toggle-row-value" style="color: ${hatgEscape(textColor)};">65&nbsp;%</span>
          </div>
        </div>
      </div>`;
  }

  renderPreviewSensorCard() {
    const values = this.currentValues();
    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const nameColor = values["secondary-text-color"] || "#a9b0bd";
    const valueColor = values["primary-text-color"] || "#e6eaf1";
    const graphColor = values["accent-color"] || "#ff9300";

    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;
    const path = "M0,32 L14,30 L28,26 L42,27 L56,18 L70,20 L84,10 L98,12 L112,6 L126,9 L140,4 L154,7 L168,3 L182,6 L196,9 L210,5 L224,8 L238,4 L252,7 L266,6 L280,9";

    return `
      <div class="preview-sensor-card">
        <div class="tile-card-head">
          <span>HA Sensor-Karte &mdash; Graph-Footer</span>
        </div>
        <div class="tile-card-shell sensor-card-shell" style="${shellStyle}">
          <div class="sensor-card-header">
            <div class="sensor-card-name" style="color: ${hatgEscape(nameColor)};">Sensor Karte</div>
            <div class="sensor-card-value" style="color: ${hatgEscape(valueColor)};">45,0<span class="sensor-card-unit" style="color: ${hatgEscape(nameColor)};">&nbsp;&deg;C</span></div>
          </div>
          <div class="sensor-card-graph">
            <svg viewBox="0 0 280 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="${path} L280,40 L0,40 Z" fill="${hatgEscape(graphColor)}" opacity=".1"></path>
              <path d="${path}" fill="none" stroke="${hatgEscape(graphColor)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".8"></path>
            </svg>
          </div>
        </div>
      </div>`;
  }

  renderPreviewTileFeatureCard() {
    const values = this.currentValues();
    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const textColor = values["primary-text-color"] || "#e6eaf1";
    const tileColor = values["state-light-on-color"] || values["state-light-active-color"] || values["state-active-color"] || "#ff9300";

    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;

    return `
      <div class="preview-tile-feature-card">
        <div class="tile-card-head">
          <span>HA Tile-Card &mdash; Feature-Regler</span>
        </div>
        <div class="tile-card-shell" style="${shellStyle}">
          <div class="tile-card-content">
            <div class="tile-icon-circle" style="--tile-color: ${hatgEscape(tileColor)};">
              <ha-icon icon="mdi:lightbulb"></ha-icon>
            </div>
            <div class="tile-card-info">
              <span class="tile-card-primary" style="color: ${hatgEscape(textColor)};">Tile Licht</span>
              <span class="tile-card-secondary" style="color: ${hatgEscape(textColor)};">39&nbsp;%</span>
            </div>
          </div>
          <div class="tile-feature-row" style="--feature-color: ${hatgEscape(tileColor)};">
            <span class="tile-feature-slider"><span class="tile-feature-fill" style="width: 39%;"></span></span>
          </div>
          <div class="tile-feature-row" style="--feature-color: ${hatgEscape(tileColor)};">
            <span class="tile-feature-gradient"></span>
          </div>
        </div>
      </div>`;
  }

  renderPreviewGaugeCard() {
    const values = this.currentValues();
    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const textColor = values["primary-text-color"] || "#e6eaf1";
    const baseTrack = values["primary-background-color"] || "#0b111a";
    const needleStroke = bg;
    const green = values["success-color"] || "#34c759";
    const yellow = values["warning-color"] || "#ffcc00";
    const red = values["error-color"] || "#ff3b30";

    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;

    const point = (deg) => {
      const rad = (deg * Math.PI) / 180;
      return [-40 * Math.cos(rad), -40 * Math.sin(rad)];
    };
    const arcPath = (a, b) => {
      const [x1, y1] = point(a);
      const [x2, y2] = point(b);
      return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A 40 40 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
    };
    const value = 65;
    const needleAngle = (value / 100) * 180;

    return `
      <div class="preview-gauge-card">
        <div class="tile-card-head">
          <span>HA Gauge-Karte</span>
        </div>
        <div class="tile-card-shell gauge-card-shell" style="${shellStyle}">
          <svg class="gauge-svg" viewBox="-50 -50 100 55">
            <path class="gauge-base" d="M -40 0 A 40 40 0 0 1 40 0" stroke="${hatgEscape(baseTrack)}"></path>
            <path d="${arcPath(0, 90)}" stroke="${hatgEscape(green)}"></path>
            <path d="${arcPath(90, 135)}" stroke="${hatgEscape(yellow)}"></path>
            <path d="${arcPath(135, 180)}" stroke="${hatgEscape(red)}"></path>
            <path class="gauge-needle" d="M -34,-3 L -40,-1 A 1,1,0,0,0,-40,1 L -34,3 A 2,2,0,0,0,-34,-3 Z" transform="rotate(${needleAngle})" fill="${hatgEscape(textColor)}" stroke="${hatgEscape(needleStroke)}"></path>
          </svg>
          <div class="gauge-value" style="color: ${hatgEscape(textColor)};">65&nbsp;%</div>
          <div class="gauge-title" style="color: ${hatgEscape(textColor)};">Gauge Karte</div>
        </div>
      </div>`;
  }

  renderPreviewHistoryGraphCard() {
    const values = this.currentValues();
    const bg = values["card-background-color"] || values["ha-card-background"] || "#1c1c1e";
    const borderColor = values["ha-card-border-color"] || "rgba(0,0,0,.12)";
    const borderWidth = values["ha-card-border-width"] || "1px";
    const borderRadius = values["ha-card-border-radius"] || "12px";
    const boxShadow = values["ha-card-box-shadow"] || "none";
    const textColor = values["primary-text-color"] || "#e6eaf1";
    const mutedColor = values["secondary-text-color"] || "#8e8e93";
    const onColor = values["state-light-on-color"] || values["state-light-active-color"] || values["state-active-color"] || "#4cd964";
    const offColor = values["state-inactive-color"] || "#8e8e93";
    const offLabelColor = hatgReadableTextColor(offColor);

    const shellStyle = `background: ${hatgEscape(bg)}; border-radius: ${hatgEscape(borderRadius)}; border: ${hatgEscape(borderWidth)} solid ${hatgEscape(borderColor)}; box-shadow: ${hatgEscape(boxShadow)};`;
    const segments = [
      { pct: 4, on: true },
      { pct: 42, on: false },
      { pct: 4, on: true },
      { pct: 50, on: false },
    ];
    const segmentMarkup = segments
      .map((s) => {
        const color = s.on ? onColor : offColor;
        const label = s.on ? "" : `<span style="color: ${hatgEscape(offLabelColor)};">Aus</span>`;
        return `<span class="history-segment" style="width: ${s.pct}%; background: ${hatgEscape(color)};">${label}</span>`;
      })
      .join("");

    return `
      <div class="preview-history-card">
        <div class="tile-card-head">
          <span>HA History-Graph-Karte</span>
        </div>
        <div class="tile-card-shell history-card-shell" style="${shellStyle}">
          <div class="history-card-header" style="color: ${hatgEscape(textColor)};">
            <span>History Graph</span>
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </div>
          <div class="history-card-row">
            <span class="history-card-name" style="color: ${hatgEscape(textColor)};">Kellerlicht</span>
            <span class="history-card-bar">${segmentMarkup}</span>
          </div>
          <div class="history-card-axis" style="color: ${hatgEscape(mutedColor)};">
            <span>02:00</span><span>04:00</span><span>06:00</span><span>08:00</span><span>10:00</span><span>12:00</span>
          </div>
        </div>
      </div>`;
  }

  renderPreview() {
    return `
      <aside class="preview-panel ${this._state.settingsOpen ? "menu-open" : ""} ${this._state.mobilePreviewOpen ? "mobile-open" : ""}">
        <div class="preview-header">
          <div>
            <span class="eyebrow">Live</span>
            <h2>Vorschau</h2>
          </div>
          ${this.renderPreviewSourceToggle()}
        </div>

        ${this.renderPreviewColorMenu()}
        ${this.renderPreviewFontMenu()}
        ${this.renderPreviewTileCard()}
        ${this.renderPreviewEntitiesCard()}
        ${this.renderPreviewSensorCard()}
        ${this.renderPreviewTileFeatureCard()}
        ${this.renderPreviewGaugeCard()}
        ${this.renderPreviewHistoryGraphCard()}
      </aside>`;
  }

  captureFocus() {
    const root = this.shadowRoot;
    const active = root && root.activeElement;
    if (!active) return null;
    const dataAttr = Array.from(active.attributes || []).find((a) => a.name.startsWith("data-"));
    if (!dataAttr) return null;
    let selector;
    try {
      selector = `[${dataAttr.name}="${CSS.escape(dataAttr.value)}"]`;
    } catch (e) {
      return null;
    }
    return {
      selector,
      selectionStart: typeof active.selectionStart === "number" ? active.selectionStart : null,
      selectionEnd: typeof active.selectionEnd === "number" ? active.selectionEnd : null,
    };
  }

  restoreFocus(info) {
    if (!info) return;
    const el = this.shadowRoot.querySelector(info.selector);
    if (!el || typeof el.focus !== "function") return;
    el.focus();
    if (info.selectionStart !== null && typeof el.setSelectionRange === "function") {
      try {
        el.setSelectionRange(info.selectionStart, info.selectionEnd);
      } catch (e) {
      }
    }
  }

  render() {
    const lightAppearance = this._state.appearance === "light";
    const focusInfo = this.captureFocus();
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
          --hatg-blue: #1f9e52;
          --hatg-bg-0: #23262e;
          --hatg-bg-1: #262932;
          --hatg-bg-2: #23262e;
          --hatg-bg-3: #1e2028;
          --hatg-panel: #1b1e25;
          --hatg-field: #14161c;
          --hatg-border: rgba(255, 255, 255, .08);
          --hatg-muted: #9aa4b5;
          --hatg-text: #e8edf6;
          --hatg-text-dim: #c8d2e2;
          --hatg-click-shadow: 0 4px 14px rgba(0,0,0,.28), 0 1px 2px rgba(0,0,0,.2);
          --hatg-click-shadow-hover: 0 8px 20px rgba(0,0,0,.32), 0 2px 4px rgba(0,0,0,.22);
          --hatg-click-shadow-active: inset 0 2px 5px rgba(0,0,0,.35);
        }
        :host(.appearance-light) {
          --hatg-bg-0: #f4f6fb;
          --hatg-bg-1: #ffffff;
          --hatg-bg-2: #eef1f8;
          --hatg-bg-3: #e6eaf3;
          --hatg-panel: rgba(255, 255, 255, .75);
          --hatg-field: rgba(255, 255, 255, .9);
          --hatg-border: rgba(60, 80, 120, .16);
          --hatg-muted: #5c6b82;
          --hatg-text: #101826;
          --hatg-text-dim: #33415a;
          --hatg-click-shadow: 0 3px 10px rgba(30,41,59,.1), 0 1px 2px rgba(30,41,59,.06);
          --hatg-click-shadow-hover: 0 6px 16px rgba(30,41,59,.13), 0 1px 3px rgba(30,41,59,.08);
          --hatg-click-shadow-active: inset 1px 1px 3px rgba(30,41,59,.16), inset -1px -1px 2px rgba(255,255,255,.6);
        }
        * { box-sizing: border-box; }
        button, input, textarea, select { font: inherit; }
        .app button, .app select, .app input[type="text"], .app input[type="color"], .app textarea {
          box-shadow: var(--hatg-click-shadow);
        }
        .app button:hover, .app select:hover { box-shadow: var(--hatg-click-shadow-hover); }
        button { color: inherit; }

        .app {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 240px minmax(540px, 1fr) 360px;
          grid-template-rows: minmax(70px, auto) 1fr;
          background: linear-gradient(145deg, var(--hatg-bg-1) 0%, var(--hatg-bg-2) 52%, var(--hatg-bg-3) 100%);
          color: var(--hatg-text);
        }
        .app.app-no-preview { grid-template-columns: 240px 1fr; }

        .brand { grid-column: 1; grid-row: 1; display: flex; align-items: center; gap: 12px; padding: 0 22px; border-right: 1px solid var(--hatg-border); border-bottom: 1px solid var(--hatg-border); }
        .brand-mark { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 10px; color: #fff; background: linear-gradient(145deg, #38c76c, #1f9e52); }
        .brand strong { font-size: 18px; letter-spacing: -.02em; }
        .brand small { color: #2fae63; font-size: 12px; }

        .topbar { grid-column: 2 / 4; grid-row: 1; display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 70px; padding: 12px 22px; border-bottom: 1px solid var(--hatg-border); background: rgba(127, 140, 160, .06); position: relative; }
        .topbar-left { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .topbar-title { font-size: 16px; font-weight: 650; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .topbar-right { display: flex; align-items: center; gap: 10px; position: relative; }
        .mode-toggle-group { display: grid; grid-template-columns: 1fr 1fr; width: 120px; padding: 3px; border: 1px solid var(--hatg-border); border-radius: 999px; background: rgba(127, 140, 160, .08); }
        .mode-toggle-group.inline { width: 140px; }
        .mode-toggle-group button { height: 28px; border: 0; border-radius: 999px; cursor: pointer; color: var(--hatg-muted); background: transparent; font-size: 11px; }
        .mode-toggle-group button.active { color: #fff; background: linear-gradient(135deg, rgba(31,158,82,.65), rgba(31,158,82,.32)); }
        .gear-button, .save-button, .topbar-icon-button, .mobile-nav-toggle, .mobile-preview-toggle { width: 38px; height: 38px; border: 1px solid var(--hatg-border); border-radius: 12px; display: grid; place-items: center; cursor: pointer; background: rgba(127, 140, 160, .08); color: var(--hatg-text); }
        .topbar-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
        .save-button { color: #fff; border-color: transparent; background: linear-gradient(135deg, #38c76c, #1f9e52); }
        .save-button[disabled] { opacity: .65; cursor: wait; }
        .mobile-nav-toggle, .mobile-preview-toggle { display: none; flex: 0 0 auto; }
        .mobile-scrim { display: none; position: fixed; inset: 0; background: rgba(10,14,22,.5); z-index: 15; }
        .mobile-scrim.show { display: block; }

        .topbar-menu-wrap { position: relative; display: inline-flex; }
        .topbar-dropdown-menu { position: absolute; top: 100%; margin-top: 10px; right: 0; z-index: 20; width: 260px; padding: 10px; border: 1px solid var(--hatg-border); border-radius: 18px; background: var(--hatg-bg-1); box-shadow: 0 20px 46px rgba(0,0,0,.3); display: grid; gap: 4px; }
        .topbar-dropdown-menu .settings-row { padding: 6px 8px 12px; margin-bottom: 4px; border-bottom: 1px solid var(--hatg-border); }
        .settings-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: 12.5px; color: var(--hatg-text-dim); }
        .dropdown-action-row { display: flex; align-items: center; gap: 12px; padding: 10px 10px; border: 0; border-radius: 11px; background: transparent; color: var(--hatg-text); cursor: pointer; text-align: left; font-family: inherit; }
        .dropdown-action-row:hover { background: rgba(127,140,160,.1); }
        .dropdown-action-row ha-icon { --mdc-icon-size: 18px; flex: 0 0 auto; color: var(--hatg-muted); }
        .dropdown-action-row span { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .dropdown-action-row strong { font-size: 12.5px; }
        .dropdown-action-row small { font-size: 10.5px; color: var(--hatg-muted); font-weight: 400; white-space: normal; }
        .brand-label { background: linear-gradient(135deg, #38c76c, #1f9e52); -webkit-background-clip: text; background-clip: text; color: transparent; font-size: 14px; letter-spacing: -.01em; }

        .sidebar { grid-column: 1; grid-row: 2; padding: 14px 10px; border-right: 1px solid var(--hatg-border); background: rgba(127, 140, 160, .04); overflow-y: auto; }
        .nav-list { display: grid; gap: 4px; }
        .nav-item { min-height: 42px; width: 100%; border: 1px solid transparent; border-radius: 12px; padding: 0 12px; display: flex; align-items: center; gap: 10px; cursor: pointer; color: var(--hatg-text); background: transparent; text-align: left; }
        .nav-item:hover { background: rgba(127, 140, 160, .08); }
        .nav-item.active { color: var(--hatg-text); border-color: rgba(31, 158, 82,.3); background: linear-gradient(135deg, rgba(31, 158, 82,.35), rgba(31, 158, 82,.1)); }
        .nav-item ha-icon { --mdc-icon-size: 16px; color: #fff; }
        .nav-item span { font-size: 13px; font-weight: 650; }
        .nav-icon-badge { flex: 0 0 26px; width: 26px; height: 26px; border-radius: 8px; display: grid; place-items: center; box-shadow: 0 2px 5px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.25); }
        .nav-icon-badge ha-icon { --mdc-icon-size: 16px; color: #fff; }
        .nav-group-heading { display: flex; align-items: center; width: 100%; gap: 10px; padding: 8px 12px 8px; margin-top: 6px; color: var(--hatg-text); border: 0; background: transparent; cursor: pointer; text-align: left; border-radius: 10px; }
        .nav-group-heading:hover { background: rgba(127, 140, 160, .08); }
        .nav-group-heading span:last-child { font-size: 13px; font-weight: 650; flex: 1; }
        .nav-group-heading.has-active-child span:last-child { color: #2fae63; }
        .nav-group-chevron { --mdc-icon-size: 16px; color: var(--hatg-muted); transition: transform .15s ease; }
        .nav-group-heading[aria-expanded="true"] .nav-group-chevron { transform: rotate(180deg); }
        .nav-group-heading-plain { padding: 12px 12px 4px; margin-top: 10px; border-top: 1px solid var(--hatg-border); font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--hatg-muted); cursor: default; }
        .nav-group-heading-plain:hover { background: transparent; }
        .nav-subitem { min-height: 42px; padding-left: 20px; }
        .nav-subitem span:last-child { font-size: 13px; font-weight: 650; }
        .nav-subitem { color: var(--hatg-text); }

        .workspace { grid-column: 2; grid-row: 2; min-width: 0; padding: 34px 34px 64px; overflow: auto; scrollbar-gutter: stable; }
        .editor-section { width: min(980px, 100%); margin: 0 auto; }
        .editor-section.ha-live-section { width: min(1500px, 100%); }
        .section-heading { margin-bottom: 22px; }
        .eyebrow { display: block; margin-bottom: 8px; color: #2fae63; font-size: 11px; font-weight: 750; letter-spacing: .1em; text-transform: uppercase; }
        h1, h2, p { margin: 0; }
        h1 { font-size: 28px; line-height: 1.1; letter-spacing: -.03em; }
        .section-heading p { margin-top: 10px; color: var(--hatg-muted); font-size: 13px; line-height: 1.5; }

        .theme-name-field { display: grid; gap: 8px; margin-bottom: 22px; }
        .theme-name-field > span { color: var(--hatg-text-dim); font-size: 13px; font-weight: 600; }
        .theme-name-field input { width: 100%; height: 44px; border: 1px solid var(--hatg-border); border-radius: 11px; padding: 0 14px; outline: none; color: var(--hatg-text); background: var(--hatg-field); }

        .section-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
        .field-list-header { display: flex; justify-content: flex-end; margin-bottom: 10px; }
        .editor-switch { display: grid; grid-template-columns: 1fr 1fr; width: 120px; padding: 3px; border: 1px solid var(--hatg-border); border-radius: 999px; background: rgba(127, 140, 160, .08); }
        .editor-switch button { height: 28px; border: 0; border-radius: 999px; cursor: pointer; color: var(--hatg-muted); background: transparent; font-size: 11px; }
        .editor-switch button.active { color: #fff; background: linear-gradient(135deg, rgba(31,158,82,.75), rgba(31,158,82,.4)); }
        .preview-source-toggle { display: grid; grid-template-columns: 1fr 1fr; width: 140px; flex: 0 0 auto; padding: 3px; border: 1px solid var(--hatg-border); border-radius: 999px; background: rgba(127, 140, 160, .08); }
        .preview-source-toggle button { height: 26px; border: 0; border-radius: 999px; cursor: pointer; color: var(--hatg-muted); background: transparent; font-size: 11px; transition: background .15s ease, color .15s ease; }
        .preview-source-toggle button.active { font-weight: 600; }
        .ha-live-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; }
        .select-toggle { display: flex; align-items: center; gap: 6px; height: 30px; padding: 0 12px; border: 1px solid var(--hatg-border); border-radius: 999px; background: transparent; color: var(--hatg-muted); cursor: pointer; font-size: 11.5px; }
        .select-toggle ha-icon { --mdc-icon-size: 15px; }
        .select-toggle.active { color: #fff; background: linear-gradient(135deg, rgba(31,158,82,.75), rgba(31,158,82,.4)); border-color: transparent; }

        .filter-bar { display: grid; gap: 8px; padding: 10px 12px; margin-bottom: 12px; border: 1px solid var(--hatg-border); border-radius: 12px; background: rgba(127,140,160,.05); }
        .filter-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .filter-label { font-size: 10px; color: var(--hatg-muted); width: 46px; flex: 0 0 46px; text-transform: uppercase; letter-spacing: .06em; }
        .filter-dots { display: flex; gap: 8px; flex-wrap: wrap; }
        .filter-dot { width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(255,255,255,.1); cursor: pointer; padding: 0; box-shadow: 2px 2px 4px rgba(0,0,0,.45), -1px -1px 2px rgba(255,255,255,.07); transition: box-shadow .12s ease, transform .12s ease; }
        .filter-dot:hover { transform: translateY(-1px); }
        .filter-dot.active { border-color: #fff; box-shadow: inset 2px 2px 4px rgba(0,0,0,.5), inset -1px -1px 3px rgba(255,255,255,.1); transform: none; }
        .filter-chips { display: flex; gap: 6px; flex-wrap: wrap; }
        .filter-chip { height: 24px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--hatg-border); background: transparent; color: var(--hatg-muted); font-size: 10.5px; cursor: pointer; }
        .filter-chip.active { color: #fff; background: linear-gradient(135deg, rgba(31,158,82,.75), rgba(31,158,82,.4)); border-color: transparent; }
        .filter-clear { justify-self: end; display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 14px; border: 1px solid transparent; border-radius: 999px; background: linear-gradient(135deg, #ff5b4d, #ff2d20); color: #fff; cursor: pointer; font-size: 11.5px; font-weight: 650; text-decoration: none; box-shadow: 0 4px 12px rgba(255,45,32,.35); }
        .filter-clear:hover { background: linear-gradient(135deg, #ff6b5e, #ff3d30); }
        .filter-clear ha-icon { --mdc-icon-size: 15px; }

        .tag-filter-bar { display: grid; gap: 8px; padding: 10px 12px; margin-bottom: 12px; border: 1px solid var(--hatg-border); border-radius: 12px; background: rgba(127,140,160,.05); }
        .tag-chip-row { display: flex; gap: 6px; flex-wrap: wrap; }
        .tag-chip-cloud { max-height: 130px; overflow-y: auto; padding-right: 2px; }
        .tag-chip { display: inline-flex; align-items: center; gap: 5px; height: 24px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--hatg-border); background: transparent; color: var(--hatg-muted); font-size: 10.5px; cursor: pointer; }
        .tag-chip small { font-size: 9px; opacity: .65; }
        .tag-chip ha-icon { --mdc-icon-size: 12px; }
        .tag-chip.active { color: #fff; background: linear-gradient(135deg, rgba(31,158,82,.75), rgba(31,158,82,.4)); border-color: transparent; }
        .tag-chip:not(.active):hover { border-color: rgba(31,158,82,.45); color: var(--hatg-text); }
        .editing-surface-dark .tag-filter-bar { background: #1b1e25; border-color: rgba(255,255,255,.08); }
        .editing-surface-dark .tag-chip { color: #9aa4b5; border-color: rgba(255,255,255,.12); }
        .editing-surface-dark .tag-chip:not(.active):hover { color: #FEFFFF; }

        .editing-surface { border-radius: 16px; transition: background .15s ease, box-shadow .15s ease; }
        .editing-surface-dark { background: #23262e; box-shadow: inset 0 1px 0 rgba(255,255,255,.03); padding: 12px; margin: -12px -12px 14px -12px; }
        .editing-surface-dark .editor-switch { background: #14161c; border-color: rgba(255,255,255,.08); }
        .editing-surface-dark .editor-switch button { color: #9aa4b5; }
        .editing-surface-dark .editor-switch button.active { color: #fff; background: linear-gradient(135deg, rgba(31,158,82,.85), rgba(31,158,82,.5)); }
        .editing-surface-dark .select-toggle { color: #9aa4b5; border-color: rgba(255,255,255,.12); }
        .editing-surface-dark .filter-bar { background: #1b1e25; border-color: rgba(255,255,255,.08); }
        .editing-surface-dark .filter-label, .editing-surface-dark .filter-chip { color: #9aa4b5; }
        .editing-surface-dark .filter-chip { border-color: rgba(255,255,255,.12); }
        .editing-surface-dark .field-list { background: #1b1e25; border-color: rgba(255,255,255,.08); }
        .editing-surface-dark .field-row:hover { background: rgba(255,255,255,.05); }
        .editing-surface-dark .field-key { color: #FEFFFF; }
        .editing-surface-dark .field-section-tag { color: #34d399; font-weight: 650; }
        .editing-surface-dark .empty-hint { color: #9aa4b5; }
        .editing-surface-dark .search-field { background: #1b1e25; border-color: rgba(255,255,255,.08); }
        .editing-surface-dark .search-field input { color: #FEFFFF; }
        .editing-surface-dark .color-input-wrap,
        .editing-surface-dark .text-input,
        .editing-surface-dark .font-select,
        .editing-surface-dark .field-textarea { background: #14161c; border-color: rgba(255,255,255,.1); color: #FEFFFF; }
        .editing-surface-dark .hex-input { color: #FEFFFF; }
        .editing-surface-dark .apply-button { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.12); color: #9aa4b5; }
        .field-list { display: grid; gap: 6px; padding: 8px; border: 1px solid var(--hatg-border); border-radius: 14px; background: var(--hatg-panel); margin-bottom: 14px; }
        .field-group { display: grid; gap: 6px; }
        .field-group + .field-group { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--hatg-border); }
        .field-group-title { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--hatg-muted); padding: 4px 6px 2px; }
        .editing-surface-dark .field-group + .field-group { border-top-color: rgba(255,255,255,.08); }
        .editing-surface-dark .field-group-title { color: #9aa4b5; }
        .empty-hint { padding: 20px; text-align: center; color: var(--hatg-muted); font-size: 12.5px; }
        .field-row { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 9px; }
        .field-row:hover { background: rgba(127,140,160,.07); }
        .field-row-wide { flex-direction: column; align-items: stretch; gap: 6px; }
        .select-checkbox { width: 16px; height: 16px; flex: 0 0 16px; }
        .field-key { flex: 1; min-width: 0; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; color: var(--hatg-text-dim); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: flex; align-items: baseline; gap: 8px; }
        .field-section-tag { font-family: -apple-system, sans-serif; color: #1fae63; font-weight: 650; font-size: 10px; white-space: nowrap; }
        .field-status-tag { font-family: -apple-system, sans-serif; color: #9b6bff; font-size: 9.5px; font-weight: 650; white-space: nowrap; padding: 1px 7px; border-radius: 999px; background: rgba(155,107,255,.14); border: 1px solid rgba(155,107,255,.3); }
        .editing-surface-dark .field-status-tag { color: #c3a6ff; background: rgba(155,107,255,.16); border-color: rgba(155,107,255,.35); }
        .format-tag { font-family: -apple-system, sans-serif; color: var(--hatg-muted); font-size: 9px; padding: 1px 6px; border-radius: 999px; border: 1px solid var(--hatg-border); white-space: nowrap; }
        .format-switch { display: inline-flex; flex: 0 0 auto; gap: 2px; padding: 2px; border: 1px solid var(--hatg-border); border-radius: 999px; background: var(--hatg-field); }
        .format-switch-btn { border: 0; background: transparent; font-family: -apple-system, sans-serif; font-size: 9.5px; font-weight: 650; padding: 3px 7px; border-radius: 999px; cursor: pointer; color: var(--hatg-text); white-space: nowrap; }
        .format-switch-btn.active { background: var(--hatg-blue); color: #fff; }
        .editing-surface-dark .format-switch { background: #1b1e25; border-color: rgba(255,255,255,.08); }
        .editing-surface-dark .format-switch-btn { color: #FEFFFF; }
        .field-input.rgba-input-wrap { flex: 0 0 340px; }
        .rgba-input-wrap { height: 38px; padding: 0 10px; }
        .rgba-raw-input { width: 100%; height: 30px; padding: 0 9px; border: 1px solid var(--hatg-border); border-radius: 8px; background: var(--hatg-field); text-transform: none; }
        .source-tag { font-family: -apple-system, sans-serif; font-size: 9px; padding: 2px 7px; border-radius: 999px; white-space: nowrap; border: 0; }
        .source-tag.auto { color: #5fbf7a; background: rgba(52,199,89,.12); }
        .source-tag.custom { color: #ffb15c; background: rgba(255,147,0,.14); cursor: pointer; display: inline-flex; align-items: center; gap: 3px; }
        .source-tag.custom ha-icon { --mdc-icon-size: 11px; }
        .sync-triad { display: inline-flex; align-items: center; gap: 6px; padding: 0 8px; height: 38px; border: 1px solid var(--hatg-border); border-radius: 9px; background: var(--hatg-field); flex: 0 0 auto; }
        .sync-triad-chip { display: inline-flex; align-items: center; gap: 3px; }
        .sync-triad-chip ha-icon { --mdc-icon-size: 14px; color: var(--hatg-muted); }
        .sync-triad-dot { width: 11px; height: 11px; border-radius: 999px; border: 1px solid rgba(0,0,0,.15); flex: 0 0 auto; }
        .editing-surface-dark .sync-triad-dot { border-color: rgba(255,255,255,.25); }
        .sync-triad-value { font-size: 10.5px; font-weight: 600; color: var(--hatg-text); }
        .sync-triad-button { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border: 0; border-radius: 999px; background: rgba(52,199,89,.14); color: #1fae63; cursor: pointer; padding: 0; }
        .sync-triad-button ha-icon { --mdc-icon-size: 14px; }
        .sync-triad-button:hover { background: rgba(52,199,89,.24); }
        .editing-surface-dark .sync-triad-button { background: rgba(52,199,89,.18); color: #34d399; }
        .editing-surface-dark .sync-triad-button:hover { background: rgba(52,199,89,.3); }
        .field-input { flex: 0 0 200px; }
        .color-input-wrap { height: 38px; display: flex; align-items: center; gap: 8px; padding: 0 10px; border: 1px solid var(--hatg-border); border-radius: 9px; background: var(--hatg-field); }
        .native-color { width: 22px; height: 22px; flex: 0 0 22px; padding: 0; border: 0; border-radius: 50%; cursor: pointer; background: transparent; -webkit-appearance: none; appearance: none; box-shadow: var(--hatg-click-shadow); color: initial; }
        .native-color::-webkit-color-swatch-wrapper { padding: 0; border-radius: 50%; overflow: hidden; }
        .native-color::-webkit-color-swatch { border: 1px solid rgba(127,140,160,.4); border-radius: 50%; }
        .native-color::-moz-color-swatch { border: 1px solid rgba(127,140,160,.4); border-radius: 50%; }
        .hex-input { min-width: 0; width: 100%; border: 0; outline: 0; color: var(--hatg-text-dim); background: transparent; text-transform: uppercase; font-family: ui-monospace, monospace; font-size: 12px; }
        .text-input { width: 100%; height: 38px; border: 1px solid var(--hatg-border); border-radius: 9px; padding: 0 10px; color: var(--hatg-text); background: var(--hatg-field); font-size: 12px; }
        .font-select { width: 100%; height: 42px; border: 1px solid var(--hatg-border); border-radius: 9px; padding: 0 10px; color: var(--hatg-text); background: var(--hatg-field); font-size: 15px; }
        .font-select option { font-size: 15px; padding: 4px 6px; }
        .field-textarea { width: 100%; min-height: 90px; border: 1px solid var(--hatg-border); border-radius: 9px; padding: 10px; color: var(--hatg-text); background: var(--hatg-field); font-family: ui-monospace, monospace; font-size: 11.5px; line-height: 1.5; resize: vertical; }
        .apply-button { width: 30px; height: 30px; flex: 0 0 30px; border: 1px solid var(--hatg-border); border-radius: 8px; display: grid; place-items: center; cursor: pointer; background: rgba(127,140,160,.05); color: var(--hatg-muted); }
        .apply-button ha-icon { --mdc-icon-size: 15px; }

        .bulk-bar { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border: 1px solid rgba(31,158,82,.4); border-radius: 12px; background: rgba(31,158,82,.1); margin-bottom: 14px; font-size: 12px; }
        .bulk-apply { height: 30px; padding: 0 14px; border: 0; border-radius: 8px; background: linear-gradient(135deg, #38c76c, #1f9e52); color: #fff; cursor: pointer; font-size: 11.5px; }
        .bulk-cancel { height: 30px; padding: 0 12px; border: 1px solid var(--hatg-border); border-radius: 8px; background: transparent; color: var(--hatg-muted); cursor: pointer; font-size: 11.5px; }
        .bulk-hex-input { width: 100px; flex: 0 0 auto; height: 30px; padding: 0 10px; border: 1px solid var(--hatg-border); border-radius: 8px; background: var(--hatg-field); }
        .bulk-text-input { flex: 1 1 220px; min-width: 160px; height: 30px; padding: 0 10px; border: 1px solid var(--hatg-border); border-radius: 8px; background: var(--hatg-field); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; }

        .search-field { display: flex; align-items: center; gap: 10px; height: 42px; padding: 0 14px; border: 1px solid var(--hatg-border); border-radius: 11px; background: var(--hatg-field); margin-bottom: 16px; }
        .search-field ha-icon { --mdc-icon-size: 18px; color: var(--hatg-muted); }
        .search-field input { flex: 1; border: 0; outline: 0; background: transparent; color: var(--hatg-text); font-size: 13px; }

        .code-editor-wrap { position: relative; width: 100%; }
        .code-editor-wrap textarea.code-editor-input { position: relative; z-index: 2; min-height: 340px; background: transparent !important; color: transparent !important; -webkit-text-fill-color: transparent; caret-color: #ffffff; border-color: transparent !important; }
        .code-editor-wrap textarea.code-editor-input::selection { background: rgba(97,175,239,.35); }
        .code-editor-highlight { position: absolute; inset: 0; z-index: 1; margin: 0; pointer-events: none; overflow: hidden; box-sizing: border-box; background: #1e2028; border: 1px solid rgba(255,255,255,.08); border-radius: 9px; color: #d3d8e0; white-space: pre-wrap; word-break: normal; overflow-wrap: break-word; padding: 10px; font-family: ui-monospace, monospace; font-size: 11.5px; line-height: 1.5; }
        .code-editor-highlight code { font-family: inherit; white-space: inherit; }
        .tok-comment { color: #7b8496; font-style: italic; }
        .tok-string { color: #98c379; }
        .tok-key { color: #61afef; font-weight: 600; }
        .tok-var { color: #e5c07b; }
        .tok-fn { color: #c678dd; }
        .tok-important { color: #e06c75; font-weight: 600; }

        .code-view { display: grid; gap: 12px; }
        .code-section-card { border: 1px solid var(--hatg-border); border-radius: 14px; padding: 12px 14px; background: var(--hatg-panel); }
        .code-section-title { font-family: -apple-system, sans-serif; font-size: 10.5px; font-weight: 650; color: #5fbf7a; opacity: .85; text-transform: uppercase; letter-spacing: .02em; margin-bottom: 6px; }

        .ha-live-toolbar { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; flex-wrap: wrap; }
        .ha-live-toolbar .modal-btn { display: inline-flex; align-items: center; gap: 6px; }
        .ha-live-toolbar .modal-btn ha-icon { --mdc-icon-size: 15px; }
        .ha-live-hint { font-size: 11px; color: var(--hatg-muted); flex: 1 1 100%; }
        .ha-live-device-toggle { display: flex; gap: 4px; padding: 4px; border-radius: 11px; background: rgba(127,140,160,.08); }
        .ha-live-device-btn { height: 32px; padding: 0 14px; border: 0; border-radius: 8px; cursor: pointer; font-size: 12px; color: var(--hatg-text-dim); background: transparent; display: inline-flex; align-items: center; gap: 6px; }
        .ha-live-device-btn ha-icon { --mdc-icon-size: 15px; }
        .ha-live-device-btn.active { color: #fff; background: linear-gradient(135deg, #38c76c, #1f9e52); }
        .ha-live-phone-frame { margin: 0 auto; overflow: hidden; border: 1px solid rgba(127,140,160,.35); background: linear-gradient(145deg, #383b43, #0b0c10 38%, #353841); box-shadow: 0 24px 50px rgba(0,0,0,.35); transition: width .25s ease, aspect-ratio .25s ease, border-radius .25s ease, padding .25s ease; }
        .ha-live-phone-frame.device-phone { width: min(390px, 100%); aspect-ratio: 9 / 19.5; padding: 10px; border-radius: 44px; }
        .ha-live-phone-frame.device-tablet { width: min(760px, 100%); aspect-ratio: 4 / 3; padding: 18px; border-radius: 26px; }
        .ha-live-phone-frame.device-desktop { width: 100%; max-width: 1480px; aspect-ratio: 16 / 11; padding: 0 0 10px; border-radius: 14px; display: flex; flex-direction: column; }
        .ha-live-window-bar { flex: 0 0 auto; display: flex; gap: 6px; align-items: center; padding: 10px 14px; }
        .ha-live-window-bar span { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,.25); }
        .ha-live-phone-frame.device-desktop .ha-live-frame { flex: 1 1 auto; margin: 0 10px; }
        .ha-live-frame { width: 100%; height: 100%; border-radius: 34px; overflow: hidden; background: #000; }
        .ha-live-phone-frame.device-tablet .ha-live-frame { border-radius: 14px; }
        .ha-live-phone-frame.device-desktop .ha-live-frame { border-radius: 8px; }

        .preview-panel { grid-column: 3; grid-row: 2; padding: 26px 20px; border-left: 1px solid var(--hatg-border); background: var(--preview-page-bg, rgba(127,140,160,.04)); overflow: auto; transition: padding-top .18s ease, background .15s ease; }
        .preview-tile-card { margin-top: 4px; }
        .tile-card-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 10px; font-size: 12.5px; font-weight: 650; color: var(--hatg-text); }
        .tile-card-head small { font-size: 10.5px; font-weight: 500; color: var(--hatg-muted); }
        .tile-card-shell { box-sizing: border-box; overflow: hidden; transition: background .15s ease, border-color .15s ease, border-radius .15s ease, box-shadow .15s ease; }
        .tile-card-content { display: flex; align-items: center; gap: 10px; padding: 10px; min-height: 56px; box-sizing: border-box; }
        .tile-icon-circle { position: relative; flex: 0 0 auto; width: 36px; height: 36px; border-radius: 999px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .tile-icon-circle::before { content: ""; position: absolute; inset: 0; background: var(--tile-color); opacity: .2; }
        .tile-icon-circle ha-icon { position: relative; --mdc-icon-size: 24px; color: var(--tile-color); }
        .tile-card-info { display: flex; flex-direction: column; min-width: 0; gap: 2px; }
        .tile-card-primary { font-size: 14px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .tile-card-secondary { font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .preview-entities-card { margin-top: 20px; }
        .toggle-row-content { display: flex; align-items: center; gap: 12px; padding: 10px 16px; min-height: 56px; box-sizing: border-box; }
        .toggle-row-icon { flex: 0 0 40px; height: 40px; display: flex; align-items: center; justify-content: center; }
        .toggle-row-icon ha-icon { --mdc-icon-size: 24px; }
        .toggle-row-name { flex: 1 1 auto; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .toggle-row-value { flex: 0 0 auto; font-size: 12.5px; min-width: 34px; text-align: right; }
        .preview-ha-switch { flex: 0 0 auto; display: inline-flex; align-items: center; }
        .preview-ha-switch .switch-track { position: relative; width: 48px; height: 24px; border-radius: 999px; background: var(--switch-track); border: 1px solid var(--switch-track-border); box-sizing: border-box; transition: background .15s ease, border-color .15s ease; }
        .preview-ha-switch .switch-thumb { position: absolute; top: 50%; right: 3px; transform: translateY(-50%); width: 18px; height: 18px; border-radius: 50%; background: var(--switch-thumb); border: 1px solid var(--switch-thumb-border); box-shadow: 0 1px 3px rgba(0,0,0,.3); transition: background .15s ease, border-color .15s ease; }
        .preview-ha-switch:not(.checked) .switch-thumb { right: auto; left: 3px; }
        .preview-ha-slider { flex: 1 1 auto; display: flex; align-items: center; min-width: 0; margin: 0 8px; }
        .preview-ha-slider .ha-slider-track { position: relative; width: 100%; height: 4px; border-radius: 999px; background: var(--slider-track); }
        .preview-ha-slider .ha-slider-fill { position: absolute; top: 0; left: 0; height: 100%; width: 65%; border-radius: 999px; background: var(--slider-fill); }
        .preview-ha-slider .ha-slider-thumb { position: absolute; top: 50%; left: 65%; transform: translate(-50%, -50%); width: 16px; height: 16px; border-radius: 50%; background: var(--slider-fill); box-shadow: 0 1px 3px rgba(0,0,0,.3); }

        .preview-sensor-card { margin-top: 20px; }
        .sensor-card-header { padding: 10px 16px 6px; box-sizing: border-box; }
        .sensor-card-name { font-size: 15px; font-weight: 500; line-height: 32px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sensor-card-value { font-size: 30px; line-height: 1.1; margin-top: -4px; }
        .sensor-card-unit { font-size: 15px; }
        .sensor-card-graph { line-height: 0; }
        .sensor-card-graph svg { display: block; width: 100%; height: 44px; }

        .preview-tile-feature-card { margin-top: 20px; }
        .tile-feature-row { padding: 0 12px 10px; box-sizing: border-box; }
        .tile-feature-row:first-of-type { padding-top: 2px; }
        .tile-feature-slider { position: relative; display: block; width: 100%; height: 32px; border-radius: 10px; background: var(--feature-color); opacity: .2; overflow: hidden; }
        .tile-feature-row .tile-feature-fill { position: absolute; top: 0; left: 0; height: 100%; border-radius: 10px; background: var(--feature-color); opacity: 1; }
        .tile-feature-gradient { display: block; width: 100%; height: 32px; border-radius: 10px; background: linear-gradient(90deg, var(--feature-color), color-mix(in srgb, var(--feature-color) 25%, white)); }

        .preview-gauge-card { margin-top: 20px; }
        .gauge-card-shell { display: flex; flex-direction: column; align-items: center; padding: 14px 16px; box-sizing: border-box; }
        .gauge-svg { width: 100%; max-width: 220px; }
        .gauge-base { fill: none; stroke-width: 12; }
        .gauge-svg path:not(.gauge-base):not(.gauge-needle) { fill: none; stroke-width: 12; }
        .gauge-needle { stroke-width: 1; }
        .gauge-value { font-size: 22px; margin-top: -34px; }
        .gauge-title { font-size: 13px; margin-top: 6px; text-align: center; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .preview-history-card { margin-top: 20px; }
        .history-card-shell { padding: 12px 16px 14px; box-sizing: border-box; }
        .history-card-header { display: flex; align-items: center; justify-content: space-between; font-size: 17px; font-weight: 500; margin-bottom: 14px; }
        .history-card-header ha-icon { --mdc-icon-size: 20px; }
        .history-card-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .history-card-name { flex: 0 0 auto; font-size: 12px; max-width: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .history-card-bar { flex: 1 1 auto; display: flex; height: 20px; border-radius: 4px; overflow: hidden; min-width: 0; }
        .history-segment { display: flex; align-items: center; justify-content: center; font-size: 10.5px; font-weight: 600; overflow: hidden; white-space: nowrap; }
        .history-card-axis { display: flex; justify-content: space-between; font-size: 10.5px; margin-top: 4px; padding-left: 100px; }

        .preview-color-menu { margin-bottom: 20px; }
        .color-menu-header { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 14px; cursor: pointer; text-align: left; box-sizing: border-box; transition: filter .15s ease; }
        .color-menu-header:hover { filter: brightness(1.08); }
        .color-menu-icon { flex: 0 0 36px; width: 36px; height: 36px; border-radius: 999px; display: flex; align-items: center; justify-content: center; background: rgba(127,140,160,.16); color: var(--hatg-text); }
        .color-menu-icon ha-icon { --mdc-icon-size: 20px; }
        .color-menu-info { flex: 1 1 auto; display: flex; flex-direction: column; min-width: 0; gap: 1px; }
        .color-menu-primary { font-size: 14px; font-weight: 600; color: var(--hatg-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .color-menu-secondary { font-size: 12px; color: var(--hatg-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .color-menu-chevron { --mdc-icon-size: 20px; color: var(--hatg-muted); transition: transform .15s ease; flex: 0 0 auto; }
        .color-menu-header[aria-expanded="true"] .color-menu-chevron { transform: rotate(180deg); }
        .color-menu-list { margin-top: 6px; padding: 6px 4px; box-sizing: border-box; max-height: 260px; overflow-y: auto; }
        .color-menu-row { display: flex; align-items: center; gap: 10px; padding: 5px 10px; border-radius: 8px; }
        .color-menu-row:hover { background: rgba(127,140,160,.08); }
        .color-menu-dot { flex: 0 0 auto; width: 14px; height: 14px; border-radius: 50%; border: 1px solid rgba(0,0,0,.18); box-shadow: inset 0 0 0 1px rgba(255,255,255,.08); }
        .color-menu-code { font-size: 12px; font-family: "SFMono-Regular", Menlo, Consolas, monospace; color: var(--hatg-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .font-menu-list { display: flex; flex-direction: column; }
        .font-menu-row { display: flex; flex-direction: column; gap: 2px; padding: 8px 10px; border-bottom: 1px solid; }
        .font-menu-row:last-child { border-bottom: 0; }
        .font-menu-row:hover { background: rgba(127,140,160,.08); }
        .font-menu-sample { color: var(--hatg-text); }
        .font-menu-code { font-size: 11px; font-family: "SFMono-Regular", Menlo, Consolas, monospace; color: var(--hatg-muted); }
        .preview-panel.menu-open { padding-top: 196px; }
        .preview-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
        .preview-header h2 { font-size: 18px; }
        .toast { position: fixed; left: 50%; bottom: 20px; z-index: 30; max-width: min(420px, calc(100vw - 32px)); padding: 11px 16px; border: 1px solid rgba(127,140,160,.3); border-radius: 11px; opacity: 0; transform: translate(-50%, 12px); pointer-events: none; color: #fff; background: rgba(22, 28, 39, .94); transition: .2s ease; font-size: 12px; }
        .toast.show { opacity: 1; transform: translate(-50%, 0); }

        .modal-scrim { position: fixed; inset: 0; z-index: 40; background: rgba(4, 8, 16, .55); }
        .modal-box { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 41; width: min(360px, calc(100vw - 40px)); padding: 22px; border: 1px solid var(--hatg-border); border-radius: 16px; background: var(--hatg-bg-1); box-shadow: 0 24px 60px rgba(0,0,0,.45); }
        .modal-box-wide { width: min(560px, calc(100vw - 40px)); max-height: min(640px, calc(100vh - 60px)); overflow: auto; }
        .validation-list { list-style: none; margin: 0 0 16px; padding: 0; display: grid; gap: 6px; max-height: 320px; overflow: auto; }
        .validation-list li { font-size: 12px; color: var(--hatg-text-dim); padding: 6px 10px; border-radius: 8px; background: rgba(255,147,0,.08); }
        .validation-list code { font-family: ui-monospace, monospace; color: #ffb15c; }
        .modal-box h3 { font-size: 16px; margin-bottom: 10px; }
        .modal-box p { margin: 0 0 16px; color: var(--hatg-text-dim); font-size: 12.5px; line-height: 1.5; }
        .modal-box code { font-family: ui-monospace, monospace; color: #5fd991; background: rgba(31,158,82,.12); padding: 1px 5px; border-radius: 5px; }
        .modal-field { display: grid; gap: 6px; margin-bottom: 18px; }
        .modal-field span { font-size: 12px; color: var(--hatg-text-dim); font-weight: 600; }
        .modal-field input { height: 40px; border: 1px solid var(--hatg-border); border-radius: 9px; padding: 0 12px; color: var(--hatg-text); background: var(--hatg-field); }
        .modal-actions { display: flex; justify-content: flex-end; gap: 10px; }
        .modal-btn { height: 36px; padding: 0 16px; border-radius: 9px; cursor: pointer; font-size: 12.5px; border: 1px solid var(--hatg-border); background: transparent; color: var(--hatg-text-dim); }
        .modal-btn.primary { color: #fff; border-color: transparent; background: linear-gradient(135deg, #38c76c, #1f9e52); }
        .modal-btn.danger { color: #fff; border-color: transparent; background: #ff453a; }
        .base-preset-list { display: grid; gap: 10px; margin-bottom: 4px; }
        .base-preset-card { display: flex; align-items: center; gap: 14px; padding: 12px; border: 1px solid var(--hatg-border); border-radius: 12px; background: var(--hatg-field); }
        .base-preset-swatch { flex: 0 0 34px; width: 34px; height: 34px; border-radius: 50%; box-shadow: var(--hatg-click-shadow); }
        .base-preset-info { flex: 1; min-width: 0; }
        .base-preset-info strong { display: block; font-size: 13px; margin-bottom: 2px; }
        .base-preset-info p { margin: 0; font-size: 11.5px; color: var(--hatg-muted); line-height: 1.4; }
        .plugin-combine-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; padding: 10px 14px; border: 1px solid var(--hatg-border); border-radius: 12px; background: rgba(127,140,160,.08); }
        .plugin-combine-count { font-size: 12px; color: var(--hatg-muted); }
        .plugin-combine-button { display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 14px; border: 0; border-radius: 10px; background: linear-gradient(135deg, #38c76c, #1f9e52); color: #fff; cursor: pointer; font-size: 12px; font-weight: 600; }
        .plugin-combine-button:disabled { opacity: .4; cursor: not-allowed; background: var(--hatg-border); color: var(--hatg-text-dim); }
        .plugin-list { display: flex; flex-direction: column; gap: 10px; }
        .plugin-row { display: flex; align-items: center; gap: 14px; padding: 10px 14px; border: 1px solid var(--hatg-border); border-radius: 14px; background: var(--hatg-field); transition: border-color .15s ease, box-shadow .15s ease; }
        .plugin-row.is-selected { border-color: var(--hatg-blue); }
        .plugin-select-checkbox { flex: 0 0 auto; width: 18px; height: 18px; cursor: pointer; accent-color: var(--hatg-blue); }
        .plugin-select-spacer { flex: 0 0 auto; width: 18px; height: 18px; }
        .plugin-row-thumb { flex: 0 0 auto; width: 88px; height: 58px; border-radius: 10px; overflow: hidden; background: #14161c; }
        .plugin-row-thumb img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .plugin-row-body { flex: 1; min-width: 0; }
        .plugin-row-body strong { display: block; font-size: 13.5px; margin-bottom: 3px; }
        .plugin-row-body p { margin: 0; font-size: 11.5px; color: var(--hatg-muted); line-height: 1.4; }
        .plugin-row-body p.plugin-hint { margin-top: 4px; color: var(--hatg-text-dim); }
        .plugin-row-body p.plugin-hint code { font-family: ui-monospace, monospace; font-size: 10.5px; background: rgba(127,140,160,.14); padding: 1px 4px; border-radius: 4px; }
        .plugin-toggle-button { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 34px; padding: 0 14px; border: 1px solid var(--hatg-border); border-radius: 10px; background: transparent; color: var(--hatg-text-dim); cursor: pointer; font-size: 12px; font-weight: 600; white-space: nowrap; }
        .plugin-toggle-button:hover { border-color: var(--hatg-blue); color: var(--hatg-blue); }
        .import-source-toggle { display: flex; gap: 6px; margin-bottom: 14px; padding: 4px; border-radius: 11px; background: rgba(127,140,160,.08); }
        .import-source-btn { flex: 1; height: 32px; border: 0; border-radius: 8px; cursor: pointer; font-size: 12px; color: var(--hatg-text-dim); background: transparent; }
        .import-source-btn.active { color: #fff; background: linear-gradient(135deg, #38c76c, #1f9e52); }
        .server-theme-list-state { padding: 22px 10px; text-align: center; color: var(--hatg-muted); font-size: 12.5px; }
        .server-theme-list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-size: 11.5px; color: var(--hatg-muted); }
        .server-theme-list { display: grid; gap: 6px; max-height: 320px; overflow: auto; margin-bottom: 4px; }
        .server-theme-row { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border: 1px solid var(--hatg-border); border-radius: 9px; cursor: pointer; background: var(--hatg-field); }
        .server-theme-row:hover { border-color: var(--hatg-blue); }
        .server-theme-row ha-icon { --mdc-icon-size: 16px; color: var(--hatg-muted); flex: 0 0 auto; }
        .server-theme-name { flex: 1; min-width: 0; font-size: 12.5px; color: var(--hatg-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .server-theme-badge { font-size: 9.5px; color: #ffb15c; background: rgba(255,147,0,.14); padding: 2px 7px; border-radius: 999px; flex: 0 0 auto; }
        .server-theme-delete { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 7px; border: 0; cursor: pointer; background: transparent; color: var(--hatg-muted); display: grid; place-items: center; }
        .server-theme-delete:hover { color: #ff453a; background: rgba(255,69,58,.12); }
        .server-theme-delete ha-icon { --mdc-icon-size: 15px; }
        .server-theme-confirm { flex: 0 0 auto; display: flex; gap: 6px; }
        .server-theme-confirm .modal-btn { height: 28px; padding: 0 10px; font-size: 11px; }

        .generator-card { border: 1px solid var(--hatg-border); border-radius: 16px; background: var(--hatg-field); padding: 18px; }
        .generator-card-head { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .generator-card-head ha-icon { flex: 0 0 auto; --mdc-icon-size: 22px; color: var(--hatg-blue); margin-top: 2px; }
        .generator-card-head strong { display: block; font-size: 14px; margin-bottom: 4px; }
        .generator-card-head p { margin: 0; font-size: 12px; color: var(--hatg-muted); line-height: 1.5; }
        .generator-preview-backdrop {
          display: grid; place-items: center; height: 150px; margin-bottom: 18px; padding: 20px;
          border-radius: 14px; background: linear-gradient(135deg, #ff6b6b, #f7c94b 35%, #38c76c 65%, #2f7bff);
          background-size: 220% 220%;
        }
        .generator-preview-card {
          width: 100%; max-width: 240px; display: flex; align-items: center; gap: 12px; padding: 14px 16px;
          border: 1px solid rgba(255,255,255,.22); transition: background .12s ease, backdrop-filter .12s ease;
        }
        .generator-preview-card ha-icon { --mdc-icon-size: 22px; color: #fff; flex: 0 0 auto; }
        .generator-preview-card span { font-size: 15px; font-weight: 600; color: #fff; }
        .generator-control-row { display: grid; gap: 18px; }
        @media (min-width: 620px) { .generator-control-row { grid-template-columns: 1fr 1fr; } }
        .generator-control label { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 8px; font-size: 12.5px; color: var(--hatg-text-dim); font-weight: 600; }
        .generator-control .generator-value { color: var(--hatg-blue); font-weight: 700; }
        .generator-control input[type="range"] {
          width: 100%; height: 20px; -webkit-appearance: none; appearance: none; background: transparent; cursor: pointer;
        }
        .generator-control input[type="range"]::-webkit-slider-runnable-track {
          height: 6px; border-radius: 999px; background: var(--hatg-border);
        }
        .generator-control input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none; margin-top: -6px; width: 18px; height: 18px; border-radius: 50%;
          background: linear-gradient(135deg, #38c76c, #1f9e52); border: 2px solid #fff; box-shadow: var(--hatg-click-shadow);
        }
        .generator-control input[type="range"]::-moz-range-track {
          height: 6px; border-radius: 999px; background: var(--hatg-border);
        }
        .generator-control input[type="range"]::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 50%; background: linear-gradient(135deg, #38c76c, #1f9e52);
          border: 2px solid #fff; box-shadow: var(--hatg-click-shadow);
        }
        .generator-footnote { margin: 16px 0 0; font-size: 11px; color: var(--hatg-muted); line-height: 1.5; }

        @media (max-width: 1180px) {
          .app { grid-template-columns: 220px 1fr; }
          .mobile-preview-toggle { display: grid; }
          .preview-panel {
            position: fixed; top: 70px; right: 0; bottom: 0; left: auto;
            grid-column: auto; grid-row: auto;
            width: min(360px, 88vw);
            z-index: 16;
            transform: translateX(105%);
            transition: transform .22s ease;
            box-shadow: -16px 0 34px rgba(0,0,0,.28);
          }
          .preview-panel.mobile-open { transform: translateX(0); }
        }

        @media (max-width: 760px) {
          .app { grid-template-columns: 1fr; grid-template-rows: 60px 1fr; }
          .brand { display: none; }
          .topbar { grid-column: 1; padding: 0 14px; }
          .mobile-nav-toggle { display: grid; }
          .sidebar {
            position: fixed; top: 60px; left: 0; bottom: 0; right: auto;
            grid-column: auto; grid-row: auto;
            width: min(260px, 82vw);
            z-index: 16;
            transform: translateX(-105%);
            transition: transform .22s ease;
            box-shadow: 16px 0 34px rgba(0,0,0,.28);
          }
          .sidebar.mobile-open { transform: translateX(0); }
          .workspace { padding: 20px 16px 50px; }
          .preview-panel { top: 60px; }
        }
      </style>

      <main class="app ${this._activeSection === "ha-live" ? "app-no-preview" : ""}">
        <header class="brand">
          <span class="brand-mark"><ha-icon icon="mdi:palette-swatch"></ha-icon></span>
          <strong>HATG</strong>
          <small>v${HATG_VERSION}</small>
        </header>

        <header class="topbar">
          <div class="topbar-left">
            <button class="mobile-nav-toggle" type="button" data-mobile-sidebar-toggle aria-label="Navigation öffnen" title="Navigation">
              <ha-icon icon="mdi:menu"></ha-icon>
            </button>
            <span class="topbar-title">${this.sectionTitle()}</span>
          </div>
          <div class="topbar-right">
            ${this._activeSection === "ha-live" ? "" : `
            <button class="mobile-preview-toggle" type="button" data-mobile-preview-toggle aria-label="Vorschau öffnen" title="Vorschau">
              <ha-icon icon="mdi:cellphone"></ha-icon>
            </button>`}
            <div class="topbar-actions">
              <span class="topbar-menu-wrap">
                <button class="topbar-icon-button" type="button" data-toggle-open-menu aria-label="Öffnen" title="Öffnen">
                  <ha-icon icon="mdi:folder-open-outline"></ha-icon>
                </button>
                ${this.renderOpenMenu()}
              </span>
              <span class="topbar-menu-wrap">
                <button class="save-button" type="button" data-toggle-save-menu ${this._state.saving ? "disabled" : ""} aria-label="Speichern" title="Speichern">
                  <ha-icon icon="mdi:content-save-all-outline"></ha-icon>
                </button>
                ${this.renderSaveMenu()}
              </span>
              <span class="topbar-menu-wrap">
                <button class="gear-button" type="button" data-toggle-settings aria-label="Einstellungen" title="Einstellungen">
                  <ha-icon icon="mdi:cog-outline"></ha-icon>
                </button>
                ${this.renderSettingsMenu()}
              </span>
            </div>
          </div>
        </header>

        <aside class="sidebar ${this._state.mobileSidebarOpen ? "mobile-open" : ""}">
          <nav class="nav-list" aria-label="HATG Navigation">${this.renderNavigation()}</nav>
        </aside>

        <section class="workspace">${this.renderMainSection()}</section>
        ${this._activeSection === "ha-live" ? "" : this.renderPreview()}

        <div class="mobile-scrim ${this._state.mobileSidebarOpen || this._state.mobilePreviewOpen ? "show" : ""}" data-mobile-scrim></div>
      </main>

      ${this.renderSaveDialog()}
      ${this.renderImportDialog()}
      ${this.renderBasePresetDialog()}
      ${this.renderValidationDialog()}
      <div class="toast" role="status" aria-live="polite"></div>
    `;

    this.classList.toggle("appearance-light", lightAppearance);
    this._rendered = true;
    this.bindEvents();
    this.applyPreviewTheme();
    this.autoSaveState();
    this.restoreFocus(focusInfo);
    this.mountHaLiveIframe();
  }

  mountHaLiveIframe() {
    const container = this.shadowRoot.querySelector("[data-ha-live-container]");
    if (!container) return;
    if (!this._haLiveIframeEl) {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("data-ha-live-iframe", "true");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "0";
      iframe.src = window.location.origin + "/";
      this._haLiveIframeEl = iframe;
    }
    if (this._haLiveIframeEl.parentElement !== container) {
      container.appendChild(this._haLiveIframeEl);
    }
  }

  refreshHaLiveIframe() {
    if (!this._haLiveIframeEl) return;
    try {
      this._haLiveIframeEl.contentWindow.location.reload();
    } catch (error) {
      const src = this._haLiveIframeEl.src;
      this._haLiveIframeEl.src = "about:blank";
      this._haLiveIframeEl.src = src;
    }
  }

  scheduleHaLiveRefresh() {
    if (!this._haLiveIframeEl) return;
    if (typeof window === "undefined" || typeof window.setTimeout !== "function") return;
    window.setTimeout(() => this.refreshHaLiveIframe(), 700);
  }

  bindEvents() {
    this.shadowRoot.querySelectorAll("[data-section]").forEach((button) => {
      button.addEventListener("click", () => {
        this._activeSection = button.dataset.section;
        this.resetSectionUiState();
        this._state.mobileSidebarOpen = false;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-mobile-sidebar-toggle]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.mobileSidebarOpen = !this._state.mobileSidebarOpen;
        this._state.mobilePreviewOpen = false;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-mobile-preview-toggle]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.mobilePreviewOpen = !this._state.mobilePreviewOpen;
        this._state.mobileSidebarOpen = false;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-mobile-scrim]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.mobileSidebarOpen = false;
        this._state.mobilePreviewOpen = false;
        this.render();
      });
    });

    this.shadowRoot.querySelector("[data-toggle-settings]")?.addEventListener("click", () => {
      const wasOpen = this._state.settingsOpen;
      this.closeAllTopMenus();
      this._state.settingsOpen = !wasOpen;
      this.render();
    });
    this.shadowRoot.querySelector("[data-toggle-open-menu]")?.addEventListener("click", () => {
      const wasOpen = this._state.openMenuOpen;
      this.closeAllTopMenus();
      this._state.openMenuOpen = !wasOpen;
      this.render();
    });
    this.shadowRoot.querySelector("[data-toggle-save-menu]")?.addEventListener("click", () => {
      const wasOpen = this._state.saveMenuOpen;
      this.closeAllTopMenus();
      this._state.saveMenuOpen = !wasOpen;
      this.render();
    });

    this.shadowRoot.querySelectorAll("[data-app-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextMode = button.dataset.appMode;
        if (nextMode !== this._state.mode) {
          this._state.mode = nextMode;
          const alwaysAvailable = ["overview", "alle-felder", "code-editor"];
          if (nextMode === "user" && !this.userSectionMeta(this._activeSection) && !alwaysAvailable.includes(this._activeSection)) {
            this._activeSection = "overview";
          }
          if (nextMode === "profi" && this.userSectionMeta(this._activeSection)) {
            this._activeSection = "overview";
          }
        }
        this._state.settingsOpen = false;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-editor-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        this._state.editorMode = button.dataset.editorMode;
        this.syncModeAcrossApp();
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-preview-source]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.previewSource;
        if (target === "ha-live" && this._activeSection !== "ha-live") {
          this._sectionBeforeHaLive = this._activeSection;
          this._activeSection = "ha-live";
        } else if (target === "demo" && this._activeSection === "ha-live") {
          this._activeSection = this._sectionBeforeHaLive || "overview";
        }
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-nav-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.navToggle;
        const section = HATG_MANIFEST.sections.find((s) => s.id === id);
        const currentlyExpanded = section ? this.navGroupExpanded(section) : !!this._navExpanded[id];
        this._navExpanded[id] = !currentlyExpanded;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-color-menu-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        this._state.previewColorMenuOpen = !this._state.previewColorMenuOpen;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-font-menu-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        this._state.previewFontMenuOpen = !this._state.previewFontMenuOpen;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-preview-sidebar-toggle]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.previewSidebarOpen = !this._state.previewSidebarOpen;
        this.render();
      });
    });
    this.shadowRoot.querySelector("[data-preview-overflow]")?.addEventListener("click", () => {
      this.showToast("Dashboard-Optionen (Vorschau-Simulation).");
    });

    this.shadowRoot.querySelector("[data-theme-name]")?.addEventListener("change", (event) => {
      this._state.themeName = event.target.value;
      this.syncCardModThemeName();
      this.render();
    });

    this.shadowRoot.querySelectorAll("[data-filter-color]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const hex = btn.dataset.filterColor;
        const arr = this._state.sectionFilters.color;
        const idx = arr.indexOf(hex);
        if (idx === -1) arr.push(hex);
        else arr.splice(idx, 1);
        this.render();
      });
    });
    this.shadowRoot.querySelectorAll("[data-filter-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const t = btn.dataset.filterType;
        this._state.sectionFilters.type = this._state.sectionFilters.type === t ? null : t;
        this.render();
      });
    });
    this.shadowRoot.querySelectorAll("[data-filter-status]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const s = btn.dataset.filterStatus;
        this._state.sectionFilters.status = this._state.sectionFilters.status === s ? null : s;
        this.render();
      });
    });
    this.shadowRoot.querySelector("[data-filter-clear]")?.addEventListener("click", () => {
      this._state.sectionFilters = { color: [], type: null, status: null };
      this._state.tagFilters = [];
      this.render();
    });
    this.shadowRoot.querySelectorAll("[data-filter-tag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tag = btn.dataset.filterTag;
        const arr = this._state.tagFilters;
        const idx = arr.indexOf(tag);
        if (idx === -1) arr.push(tag);
        else arr.splice(idx, 1);
        this.render();
      });
    });

    this.shadowRoot.querySelector("[data-toggle-select]")?.addEventListener("click", () => {
      this._state.selectMode = !this._state.selectMode;
      if (!this._state.selectMode) this._state.selectedKeys = [];
      this.render();
    });
    this.shadowRoot.querySelectorAll("[data-select-key]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const key = checkbox.dataset.selectKey;
        const list = this._state.selectedKeys;
        const idx = list.indexOf(key);
        if (checkbox.checked && idx === -1) list.push(key);
        if (!checkbox.checked && idx !== -1) list.splice(idx, 1);
        this.render();
      });
    });
    this.shadowRoot.querySelector("[data-bulk-color]")?.addEventListener("input", (event) => {
      const hexInput = this.shadowRoot.querySelector("[data-bulk-hex]");
      if (hexInput) hexInput.value = event.target.value.toUpperCase();
    });
    this.shadowRoot.querySelector("[data-bulk-hex]")?.addEventListener("input", (event) => {
      const value = event.target.value.trim().toUpperCase();
      const colorInput = this.shadowRoot.querySelector("[data-bulk-color]");
      if (colorInput && HATG_HEX_RE.test(value) && value.length === 7) {
        colorInput.value = value;
      }
    });
    this.shadowRoot.querySelector("[data-bulk-apply]")?.addEventListener("click", () => {
      const hexField = this.shadowRoot.querySelector("[data-bulk-hex]");
      const colorInput = this.shadowRoot.querySelector("[data-bulk-color]");
      const typed = hexField?.value?.trim().toUpperCase();
      const value = typed && HATG_HEX_RE.test(typed) ? typed : colorInput?.value?.toUpperCase();
      if (!value) return;
      if (typed && !HATG_HEX_RE.test(typed)) {
        this.showToast(`Ungültiger Farbcode: "${typed}" – bitte Hex-Format verwenden (z. B. #2F7BFF).`);
        return;
      }
      this._state.selectedKeys.forEach((key) => this.commitField(key, value));
      this._state.selectMode = false;
      this._state.selectedKeys = [];
      this.render();
      this.showToast("Ausgewählte Felder synchronisiert.");
    });
    this.shadowRoot.querySelector("[data-bulk-apply-text]")?.addEventListener("click", () => {
      const textField = this.shadowRoot.querySelector("[data-bulk-text]");
      const value = textField ? textField.value : "";
      if (!value.trim()) {
        this.showToast("Bitte einen Wert eingeben.");
        return;
      }
      this._state.selectedKeys.forEach((key) => this.commitField(key, value));
      this._state.selectMode = false;
      this._state.selectedKeys = [];
      this.render();
      this.showToast("Ausgewählte Felder synchronisiert.");
    });
    this.shadowRoot.querySelector("[data-bulk-cancel]")?.addEventListener("click", () => {
      this._state.selectMode = false;
      this._state.selectedKeys = [];
      this.render();
    });

    this.shadowRoot.querySelectorAll("[data-font-select]").forEach((select) => {
      select.addEventListener("change", () => {
        const key = select.dataset.fontSelect;
        const preset = HATG_FONT_PRESETS.find((p) => p.id === select.value);
        if (preset && preset.stack) {
          this.commitField(key, preset.stack);
        }
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-quickedit-section]").forEach((textarea) => {
      textarea.addEventListener("input", () => {
        this.commitQuickEditBlock(textarea.value);
        this.applyPreviewTheme();
      });
    });

    this.shadowRoot.querySelectorAll("[data-color-picker]").forEach((input) => {
      const row = input.closest(".field-row");
      const hexTwin = row?.querySelector("[data-hex-input]");
      const fmt = hexTwin?.dataset.hexFormat || "hex";
      input.addEventListener("input", () => {
        const hex = input.value.toUpperCase();
        if (hexTwin) hexTwin.value = hatgFormatColorForView(hex, fmt);
        this.commitField(input.dataset.colorPicker, hex);
        this.applyPreviewTheme();
      });
      input.addEventListener("change", () => {
        this.commitField(input.dataset.colorPicker, input.value.toUpperCase());
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-format-switch]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.formatSwitch;
        const target = button.dataset.formatTarget;
        if (!key || !target) return;
        if (!this._state.colorViewFormat) this._state.colorViewFormat = {};
        this._state.colorViewFormat[key] = target;
        if (target !== "rgba") {
          const currentValue = this.currentValues()[key];
          if (!hatgIsHex(currentValue)) {
            const hex = HATG_RGBA_RE.test(String(currentValue ?? "").trim())
              ? hatgParseRgba(currentValue).hex
              : hatgNormalizeHex6(currentValue);
            this.commitField(key, hex);
          }
        }
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-rgbtriplet-picker]").forEach((input) => {
      const row = input.closest(".field-row");
      const textTwin = row?.querySelector("[data-text-field]");
      input.addEventListener("input", () => {
        const triplet = hatgHexToRgbTriple(input.value.toUpperCase());
        if (textTwin) textTwin.value = triplet;
        this.commitField(input.dataset.rgbtripletPicker, triplet);
        this.applyPreviewTheme();
      });
      input.addEventListener("change", () => {
        const triplet = hatgHexToRgbTriple(input.value.toUpperCase());
        this.commitField(input.dataset.rgbtripletPicker, triplet);
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-rgba-picker]").forEach((pickerEl) => {
      const row = pickerEl.closest(".field-row");
      const key = pickerEl.dataset.rgbaPicker;
      const textTwin = row?.querySelector("[data-text-field]");
      const stateValue = this.currentValues()[key];
      const initialParsed = hatgIsHex(stateValue) ? { hex: hatgNormalizeHex6(stateValue), alpha: 1 } : hatgParseRgba(stateValue);
      let knownAlpha = initialParsed.alpha;
      const apply = (hex, render) => {
        const rgba = hatgComposeRgba(hex, knownAlpha);
        if (textTwin) textTwin.value = rgba;
        this.commitField(key, rgba);
        if (render) this.render();
        else this.applyPreviewTheme();
      };
      pickerEl.addEventListener("input", () => apply(pickerEl.value.toUpperCase(), false));
      pickerEl.addEventListener("change", () => apply(pickerEl.value.toUpperCase(), true));
      if (textTwin) {
        textTwin.addEventListener("input", () => {
          const typed = textTwin.value.trim();
          let parsed = null;
          if (HATG_RGBA_RE.test(typed)) parsed = hatgParseRgba(typed);
          else if (hatgIsHex(typed)) parsed = { hex: hatgNormalizeHex6(typed), alpha: 1 };
          if (!parsed) return;
          knownAlpha = parsed.alpha;
          if (pickerEl) pickerEl.value = parsed.hex;
        });
      }
    });

    this.shadowRoot.querySelectorAll("[data-hex-input]").forEach((el) => {
      el.addEventListener("input", () => {
        const row = el.closest(".field-row");
        const key = el.dataset.hexInput;
        const parsedHex = hatgParseColorAnyFormat(el.value);
        if (parsedHex) {
          this.commitField(key, parsedHex);
          const swatch = row?.querySelector("[data-color-picker]");
          if (swatch) swatch.value = parsedHex;
          this.applyPreviewTheme();
        }
      });
    });

    this.shadowRoot.querySelectorAll("[data-text-field]").forEach((el) => {
      el.addEventListener("input", () => {
        const key = el.dataset.textField;
        if (!key) return;
        this.commitField(key, el.value);
        this.applyPreviewTheme();
      });
    });

    this.shadowRoot.querySelectorAll("[data-reset-field]").forEach((button) => {
      button.addEventListener("click", () => {
        this.resetFieldToDerived(button.dataset.resetField);
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-sync-triad]").forEach((button) => {
      button.addEventListener("click", () => {
        this.syncTriad(button.dataset.syncTriad);
      });
    });

    this.shadowRoot.querySelectorAll("[data-sync-pair]").forEach((button) => {
      button.addEventListener("click", () => {
        this.syncPair(button.dataset.syncPair);
      });
    });

    const generatorBlurInput = this.shadowRoot.querySelector("[data-generator-blur]");
    const generatorOpacityInput = this.shadowRoot.querySelector("[data-generator-opacity]");
    if (generatorBlurInput || generatorOpacityInput) {
      const previewCard = this.shadowRoot.querySelector("[data-generator-preview-card]");
      const blurValueLabel = this.shadowRoot.querySelector("[data-generator-blur-value]");
      const opacityValueLabel = this.shadowRoot.querySelector("[data-generator-opacity-value]");
      const updatePreview = () => {
        if (!previewCard) return;
        const { blurPx, alphaPercent, hex } = this.generatorBlurTransparencyState();
        previewCard.style.backdropFilter = `blur(${blurPx}px)`;
        previewCard.style.background = hatgComposeRgba(hex, alphaPercent / 100);
      };
      generatorBlurInput?.addEventListener("input", () => {
        const px = parseInt(generatorBlurInput.value, 10) || 0;
        if (blurValueLabel) blurValueLabel.textContent = `${px} px`;
        this.commitField("card-backdrop-blur", px === 0 ? "none" : `${px}px`);
        updatePreview();
      });
      generatorOpacityInput?.addEventListener("input", () => {
        const percent = parseInt(generatorOpacityInput.value, 10) || 0;
        if (opacityValueLabel) opacityValueLabel.textContent = `${percent} %`;
        const { hex } = this.generatorBlurTransparencyState();
        this.commitField("card-background-color", hatgComposeRgba(hex, percent / 100));
        updatePreview();
      });
    }

    this.shadowRoot.querySelector("[data-search-field]")?.addEventListener("input", (event) => {
      this._state.searchQuery = event.target.value;
      this.render();
    });

    this.shadowRoot.querySelectorAll("[data-code-highlight]").forEach((textarea) => {
      const wrap = textarea.closest(".code-editor-wrap");
      const codeEl = wrap?.querySelector(".code-editor-highlight code");
      if (!codeEl) return;
      const syncHighlight = () => {
        codeEl.innerHTML = hatgHighlightCode(textarea.value) + "\n";
      };
      const syncScroll = () => {
        const pre = wrap.querySelector(".code-editor-highlight");
        if (!pre) return;
        pre.scrollTop = textarea.scrollTop;
        pre.scrollLeft = textarea.scrollLeft;
      };
      textarea.addEventListener("input", syncHighlight);
      textarea.addEventListener("scroll", syncScroll);
    });

    this.shadowRoot.querySelectorAll("[data-save-theme]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._state.saveMenuOpen = false;
        this.saveDraft();
      });
    });
    this.shadowRoot.querySelectorAll("[data-load-theme]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._state.openMenuOpen = false;
        this.loadDraft();
      });
    });
    this.shadowRoot.querySelectorAll("[data-save-theme-file], [data-quick-save]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this._state.saveMenuOpen = false;
        this.saveThemeFile(false);
      });
    });
    this.shadowRoot.querySelector("[data-refresh-yaml]")?.addEventListener("click", () => this.render());
    this.shadowRoot.querySelector("[data-ha-live-refresh]")?.addEventListener("click", () => this.refreshHaLiveIframe());
    this.shadowRoot.querySelectorAll("[data-ha-live-device]").forEach((el) => {
      el.addEventListener("click", () => {
        const device = el.getAttribute("data-ha-live-device");
        if (device) this._state.haLiveDevice = device;
        this.render();
      });
    });
    this.shadowRoot.querySelector("[data-copy-yaml]")?.addEventListener("click", () => this.copyYaml());

    this.shadowRoot.querySelectorAll("[data-dialog-cancel]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.saveDialog = null;
        this.render();
      });
    });

    this.shadowRoot.querySelector("[data-open-import]")?.addEventListener("click", () => {
      this._state.openMenuOpen = false;
      this._state.importDialog = {
        text: "",
        fileName: null,
        source: "paste",
        serverList: null,
        serverLoading: false,
        serverError: null,
        confirmDeleteFile: null,
      };
      this.render();
    });
    this.shadowRoot.querySelectorAll("[data-import-cancel]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.importDialog = null;
        this.render();
      });
    });
    this.shadowRoot.querySelector("[data-import-file-trigger]")?.addEventListener("click", () => {
      this.shadowRoot.querySelector("[data-import-file-input]")?.click();
    });
    this.shadowRoot.querySelector("[data-import-file-input]")?.addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const textarea = this.shadowRoot.querySelector("[data-import-textarea]");
        if (textarea) textarea.value = String(reader.result || "");
        if (this._state.importDialog) this._state.importDialog.fileName = file.name;
      };
      reader.readAsText(file);
    });
    this.shadowRoot.querySelector("[data-import-run]")?.addEventListener("click", () => {
      this.runImport();
    });
    this.shadowRoot.querySelectorAll("[data-import-source]").forEach((el) => {
      el.addEventListener("click", () => {
        const dialog = this._state.importDialog;
        if (!dialog) return;
        const target = el.getAttribute("data-import-source");
        dialog.source = target;
        if (target === "server" && dialog.serverList === null && !dialog.serverLoading) {
          this.loadServerThemeList();
        } else {
          this.render();
        }
      });
    });
    this.shadowRoot.querySelector("[data-server-list-refresh]")?.addEventListener("click", () => {
      this.loadServerThemeList();
    });
    this.shadowRoot.querySelectorAll("[data-server-theme-pick]").forEach((el) => {
      el.addEventListener("click", () => {
        const filename = el.getAttribute("data-server-theme-pick");
        if (filename) this.selectServerTheme(filename);
      });
    });
    this.shadowRoot.querySelectorAll("[data-server-theme-delete]").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.stopPropagation();
        const filename = el.getAttribute("data-server-theme-delete");
        const dialog = this._state.importDialog;
        if (dialog) dialog.confirmDeleteFile = filename;
        this.render();
      });
    });
    this.shadowRoot.querySelectorAll("[data-server-delete-confirm]").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.stopPropagation();
        const filename = el.getAttribute("data-server-delete-confirm");
        if (filename) this.deleteServerWorkFile(filename);
      });
    });
    this.shadowRoot.querySelectorAll("[data-server-delete-cancel]").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.stopPropagation();
        const dialog = this._state.importDialog;
        if (dialog) dialog.confirmDeleteFile = null;
        this.render();
      });
    });

    this.shadowRoot.querySelector("[data-validate-theme]")?.addEventListener("click", () => {
      this._state.saveMenuOpen = false;
      this._state.validation = { problems: this.validateTheme(), forSave: false };
      this.render();
    });

    this.shadowRoot.querySelector("[data-open-base-preset]")?.addEventListener("click", () => {
      this._state.openMenuOpen = false;
      this._state.basePresetDialog = true;
      this.render();
    });
    this.shadowRoot.querySelectorAll("[data-base-preset-cancel]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.basePresetDialog = false;
        this.render();
      });
    });
    this.shadowRoot.querySelectorAll("[data-base-preset-apply]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-base-preset-apply");
        if (id) this.applyBasePreset(id);
      });
    });
    this.shadowRoot.querySelectorAll("[data-copy-plugin-template]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-copy-plugin-template");
        if (id) this.copyPluginTemplate(id);
      });
    });
    this.shadowRoot.querySelectorAll("[data-plugin-select]").forEach((el) => {
      el.addEventListener("change", () => {
        const id = el.getAttribute("data-plugin-select");
        if (id) this.togglePluginSelection(id);
      });
    });
    this.shadowRoot.querySelectorAll("[data-copy-combined-template]").forEach((el) => {
      el.addEventListener("click", () => this.copyCombinedPluginTemplate());
    });
    this.shadowRoot.querySelectorAll("[data-validation-close]").forEach((el) => {
      el.addEventListener("click", () => {
        this._state.validation = null;
        this.render();
      });
    });
    this.shadowRoot.querySelector("[data-validation-proceed]")?.addEventListener("click", () => {
      const pendingOverwrite = this._state.validation?.pendingOverwrite || false;
      this._state.validation = null;
      this.saveThemeFile(pendingOverwrite, true);
    });

    this.shadowRoot.querySelectorAll("[data-copy-to-other]").forEach((btn) => {
      btn.addEventListener("click", () => this.copyValueToOtherMode(btn.dataset.copyToOther));
    });
    this.shadowRoot.querySelector("[data-dialog-overwrite]")?.addEventListener("click", () => {
      this.saveThemeFile(true);
    });
    this.shadowRoot.querySelector("[data-dialog-rename]")?.addEventListener("click", () => {
      const base = this._state.saveDialog.name;
      this._state.saveDialog = { stage: "rename", name: base, suggested: hatgSuggestNextVersion(base) };
      this.render();
    });
    this.shadowRoot.querySelector("[data-dialog-save-as]")?.addEventListener("click", () => {
      const input = this.shadowRoot.querySelector("[data-dialog-name-input]");
      const newName = input?.value?.trim();
      if (!newName) return;
      this._state.themeName = newName;
      this.syncCardModThemeName();
      this._state.saveDialog = null;
      this.render();
      this.saveThemeFile(false);
    });
  }

  copyValueToOtherMode(key) {
    const currentMode = this._state.editorMode;
    const otherMode = currentMode === "light" ? "dark" : "light";
    const value = this._state.values[currentMode][key];
    this._state.editorMode = otherMode;
    this.commitField(key, value);
    this._state.editorMode = currentMode;
    this.render();
    this.showToast(`${key} nach ${otherMode === "dark" ? "Dark" : "Light"} übernommen: ${value}.`);
  }

  commitField(key, value, options = {}) {
    const viaDerivation = !!options.viaDerivation;
    const values = this.currentValues();
    const source = this.currentSource();
    if (viaDerivation && source[key] === "custom") return;
    values[key] = value;
    source[key] = viaDerivation ? "derived" : "custom";
    if (!viaDerivation && HATG_DERIVE_RULES[key]) {
      this.propagateDerivation(key);
    }
  }

  propagateDerivation(sourceKey) {
    const rules = HATG_DERIVE_RULES[sourceKey];
    if (!rules) return;
    const values = this.currentValues();
    const sourceValue = values[sourceKey];
    rules.forEach((rule) => {
      const transformed = hatgApplyTransform(rule.transform, sourceValue, values[rule.key]);
      this.commitField(rule.key, transformed, { viaDerivation: true });
    });
  }

  resetFieldToDerived(key) {
    const rule = HATG_DERIVE_REVERSE[key];
    if (!rule) return;
    const values = this.currentValues();
    const source = this.currentSource();
    const sourceValue = values[rule.source];
    values[key] = hatgApplyTransform(rule.transform, sourceValue, values[key]);
    source[key] = "derived";
  }

  syncTriad(sourceKey) {
    const rules = HATG_DERIVE_RULES[sourceKey];
    if (!rules) return;
    const source = this.currentSource();
    const targets = rules.filter((r) => r.key.startsWith("bubble-") || r.key.startsWith("mush-"));
    if (targets.length === 0) return;
    const changedCount = targets.filter((r) => source[r.key] === "custom").length;
    targets.forEach((r) => this.resetFieldToDerived(r.key));
    this.render();
    this.showToast(
      changedCount > 0
        ? `${changedCount} von ${targets.length} Bubble-/Mushroom-Feldern wieder an ${sourceKey} angeglichen.`
        : `Bubble Card und Mushroom folgten ${sourceKey} bereits automatisch (${targets.length} Felder geprüft).`
    );
  }

  syncPair(sourceKey) {
    const pair = HATG_SYNC_PAIRS[sourceKey];
    if (!pair) return;
    const rules = HATG_DERIVE_RULES[sourceKey];
    if (!rules) return;
    const rule = rules.find((r) => r.key === pair.bubble);
    if (!rule) return;
    const values = this.currentValues();
    const source = this.currentSource();
    const wasCustom = source[pair.bubble] === "custom";
    values[pair.bubble] = hatgApplyTransform(rule.transform, values[sourceKey], values[pair.bubble]);
    source[pair.bubble] = "derived";
    this.render();
    this.showToast(
      wasCustom
        ? `Bubble Card wieder an ${sourceKey} angeglichen.`
        : `Bubble Card folgte ${sourceKey} bereits automatisch.`
    );
  }

  applyPreviewTheme() {
    const values = this._state.values[this._state.previewMode];
    const panel = this.shadowRoot.querySelector(".preview-panel");
    if (panel) {
      panel.style.setProperty("--preview-page-bg", values["primary-background-color"] || "#0b111a");
    }
  }

  copyYaml() {
    const text = this.buildYamlText();
    this.copyTextToClipboard(text).then(
      () => this.showToast("YAML in Zwischenablage kopiert."),
      () => this.showToast("Kopieren nicht möglich – bitte manuell markieren.")
    );
  }

  async saveDraft() {
    try {
      window.localStorage.setItem(
        "hatg-draft",
        JSON.stringify({
          themeName: this._state.themeName,
          values: this._state.values,
          source: this._state.source,
          extraValues: this._state.extraValues,
        })
      );
    } catch (error) {
      console.error("HATG saveDraft failed", error);
      this.showToast("Entwurf konnte nicht gespeichert werden.");
      return;
    }

    if (!this._hass || typeof this._hass.callWS !== "function") {
      this.showToast("Entwurf wurde im Browser gespeichert (keine HA-Verbindung für Themes-Ordner).");
      return;
    }
    const name = hatgSlugTheme(this._state.themeName) || "unbenannt";
    const workRootName = `hatg-work-${name}`;
    const yamlText = this.buildYamlText(workRootName);
    try {
      await this._hass.callWS({ type: "hatg/save_work_file", name, yaml: yamlText });
      this.showToast("Zwischenstand im Browser und als Work-Datei in config/themes/ gesichert.");
      this.scheduleHaLiveRefresh();
    } catch (error) {
      console.error("HATG save_work_file failed", error);
      this.showToast("Im Browser gesichert – Work-Datei in config/themes/ konnte nicht geschrieben werden.");
    }
  }

  async saveThemeFile(overwrite = false, skipValidation = false) {
    if (!skipValidation) {
      const problems = this.validateTheme();
      if (problems.invalid.length || problems.empty.length) {
        this._state.validation = { problems, forSave: true, pendingOverwrite: overwrite };
        this.render();
        return;
      }
    }
    if (!this._hass || typeof this._hass.callWS !== "function") {
      this.showToast("Keine Verbindung zu Home Assistant – Datei-Speichern hier nicht möglich.");
      return;
    }
    const name = hatgSlugTheme(this._state.themeName);
    const yamlText = this.buildYamlText();
    this._state.saving = true;
    this.render();
    try {
      const result = await this._hass.callWS({
        type: "hatg/save_theme",
        name,
        yaml: yamlText,
        overwrite,
      });
      this._state.saving = false;
      if (result && result.saved) {
        this._state.saveDialog = null;
        this.render();
        this.showToast(`Theme gespeichert: ${result.path}`);
        this.scheduleHaLiveRefresh();
      } else if (result && result.reason === "exists") {
        this._state.saveDialog = { stage: "confirm", name };
        this.render();
      } else {
        this.render();
        this.showToast("Speichern fehlgeschlagen (unbekannte Antwort).");
      }
    } catch (error) {
      this._state.saving = false;
      this.render();
      console.error("HATG saveThemeFile failed", error);
      const message = error && error.message ? error.message : "unbekannter Fehler";
      this.showToast(`Speichern fehlgeschlagen: ${message}`);
    }
  }

  validateTheme() {
    const formats = hatgGetKeyFormats();
    const problems = { invalid: [], empty: [] };
    ["light", "dark"].forEach((mode) => {
      const values = this._state.values[mode];
      Object.keys(formats).forEach((k) => {
        const status = hatgValidateValue(formats[k], values[k]);
        if (status === "empty") problems.empty.push({ key: k, mode });
        else if (status === "invalid") problems.invalid.push({ key: k, mode, value: values[k] });
      });
    });
    return problems;
  }

  renderBasePresetDialog() {
    if (!this._state.basePresetDialog) return "";
    const cards = HATG_BASE_PRESETS.map(
      (preset) => `
        <div class="base-preset-card">
          <span class="base-preset-swatch" style="background:${preset.swatch}"></span>
          <div class="base-preset-info">
            <strong>${hatgEscape(preset.label)}</strong>
            <p>${hatgEscape(preset.desc)}</p>
          </div>
          <button type="button" class="modal-btn primary" data-base-preset-apply="${preset.id}">Anwenden</button>
        </div>`
    ).join("");
    return `
      <div class="modal-scrim" data-base-preset-cancel></div>
      <div class="modal-box modal-box-wide">
        <h3>Basis-Vorlage laden</h3>
        <p>Startet ein komplett neues, sauberes Theme mit dieser Werksvorlage als Grundfarben (Primär-/Akzentfarbe, Hintergründe, Text) – alle davon abgeleiteten Felder (Bubble Card, Mushroom, Status-Icons usw.) passen sich automatisch mit an. Achtung: bisherige eigene Anpassungen am aktuellen Theme werden dabei zurückgesetzt, der Themename wird automatisch auf den Vorlagennamen gesetzt.</p>
        <div class="base-preset-list">${cards}</div>
        <div class="modal-actions">
          <button type="button" class="modal-btn ghost" data-base-preset-cancel>Abbrechen</button>
        </div>
      </div>`;
  }

  applyBasePreset(presetId) {
    const preset = HATG_BASE_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    this._state.values.light = hatgDeepClone(HATG_MANIFEST.light);
    this._state.values.dark = hatgDeepClone(HATG_MANIFEST.dark);
    this._state.source.light = hatgInitSource();
    this._state.source.dark = hatgInitSource();
    this._state.extraValues = { light: {}, dark: {} };
    this._state.themeName = preset.label;

    const previousEditorMode = this._state.editorMode;
    ["light", "dark"].forEach((mode) => {
      this._state.editorMode = mode;
      const values = preset.values[mode];
      Object.keys(values).forEach((key) => {
        this.commitField(key, values[key]);
      });
    });
    this._state.editorMode = previousEditorMode;
    this.syncCardModThemeName();
    this._state.basePresetDialog = false;
    this._activeSection = "overview";
    this.autoSaveState();
    this.render();
    this.showToast(`Neues Theme "${preset.label}" aus Basis-Vorlage gestartet.`);
  }

  renderValidationDialog() {
    const v = this._state.validation;
    if (!v) return "";
    const { problems, forSave } = v;
    const total = problems.invalid.length + problems.empty.length;
    if (total === 0) {
      return `
        <div class="modal-scrim" data-validation-close></div>
        <div class="modal-box">
          <h3>Alles in Ordnung</h3>
          <p>Keine ungültigen Farbwerte und keine leeren Felder gefunden.</p>
          <div class="modal-actions">
            <button type="button" class="modal-btn primary" data-validation-close>Schließen</button>
          </div>
        </div>`;
    }
    const rows = [
      ...problems.invalid.map(
        (p) => `<li><code>${p.mode}.${hatgEscape(p.key)}</code> – ungültiger Wert: <code>${hatgEscape(String(p.value))}</code></li>`
      ),
      ...problems.empty.map((p) => `<li><code>${p.mode}.${hatgEscape(p.key)}</code> – leer (wird beim Export weggelassen)</li>`),
    ].join("");
    return `
      <div class="modal-scrim" data-validation-close></div>
      <div class="modal-box modal-box-wide">
        <h3>${total} Problem${total === 1 ? "" : "e"} gefunden</h3>
        <p>${problems.invalid.length} ungültige${problems.invalid.length === 1 ? "r" : ""} Wert${problems.invalid.length === 1 ? "" : "e"}, ${problems.empty.length} leere${problems.empty.length === 1 ? "s" : ""} Feld${problems.empty.length === 1 ? "" : "er"}.</p>
        <ul class="validation-list">${rows}</ul>
        <div class="modal-actions">
          ${forSave
            ? `<button type="button" class="modal-btn ghost" data-validation-close>Felder prüfen</button>
               <button type="button" class="modal-btn primary" data-validation-proceed>Trotzdem speichern</button>`
            : `<button type="button" class="modal-btn primary" data-validation-close>Schließen</button>`}
        </div>
      </div>`;
  }

  renderImportDialog() {
    const dialog = this._state.importDialog;
    if (!dialog) return "";
    const isServer = dialog.source === "server";
    return `
      <div class="modal-scrim" data-import-cancel></div>
      <div class="modal-box modal-box-wide">
        <h3>Theme importieren</h3>
        <p>YAML-Text einfügen, eine Datei wählen oder direkt aus dem HA-Themes-Ordner laden. Unterstützt HA-Theme-Dateien mit <code>light:</code>/<code>dark:</code>-Abschnitten (mit oder ohne <code>modes:</code>-Wrapper). Unbekannte Zusatz-Felder werden aufbewahrt und beim Export wieder mit ausgegeben.</p>
        <div class="import-source-toggle">
          <button type="button" class="import-source-btn ${!isServer ? "active" : ""}" data-import-source="paste">Datei / Text</button>
          <button type="button" class="import-source-btn ${isServer ? "active" : ""}" data-import-source="server">Aus Themes-Ordner laden</button>
        </div>
        ${isServer ? this.renderServerThemeList(dialog) : this.renderPasteImport(dialog)}
        <div class="modal-actions">
          <button type="button" class="modal-btn ghost" data-import-cancel>Abbrechen</button>
          ${isServer ? "" : `<button type="button" class="modal-btn primary" data-import-run>Importieren</button>`}
        </div>
      </div>`;
  }

  renderPasteImport(dialog) {
    return `
      <input type="file" accept=".yaml,.yml,text/yaml,text/plain" data-import-file-input style="display:none" />
      <div class="modal-actions" style="justify-content:flex-start;margin-bottom:10px;">
        <button type="button" class="modal-btn ghost" data-import-file-trigger>Datei wählen …</button>
        ${dialog.fileName ? `<span style="font-size:11.5px;color:var(--hatg-muted);">${hatgEscape(dialog.fileName)}</span>` : ""}
      </div>
      <textarea class="field-textarea" style="min-height:220px;" placeholder="hier YAML einfügen …" data-import-textarea>${hatgEscape(dialog.text || "")}</textarea>`;
  }

  renderServerThemeList(dialog) {
    if (dialog.serverLoading) {
      return `<div class="server-theme-list-state">Lade Themes-Ordner …</div>`;
    }
    if (dialog.serverError) {
      return `
        <div class="server-theme-list-state">${hatgEscape(dialog.serverError)}</div>
        <div class="modal-actions" style="justify-content:flex-start;">
          <button type="button" class="modal-btn ghost" data-server-list-refresh>Erneut versuchen</button>
        </div>`;
    }
    const list = dialog.serverList || [];
    if (!list.length) {
      return `
        <div class="server-theme-list-state">Keine Dateien in config/themes/ gefunden.</div>
        <div class="modal-actions" style="justify-content:flex-start;">
          <button type="button" class="modal-btn ghost" data-server-list-refresh>Aktualisieren</button>
        </div>`;
    }
    const rows = list
      .map((item) => {
        const isConfirm = dialog.confirmDeleteFile === item.filename;
        const deleteControl = item.isDraft
          ? isConfirm
            ? `<span class="server-theme-confirm">
                 <button type="button" class="modal-btn ghost" data-server-delete-cancel="${hatgEscape(item.filename)}">Nein</button>
                 <button type="button" class="modal-btn danger" data-server-delete-confirm="${hatgEscape(item.filename)}">Löschen</button>
               </span>`
            : `<button type="button" class="server-theme-delete" data-server-theme-delete="${hatgEscape(item.filename)}" aria-label="Entwurf löschen" title="Entwurf löschen">
                 <ha-icon icon="mdi:trash-can-outline"></ha-icon>
               </button>`
          : "";
        return `
          <div class="server-theme-row" data-server-theme-pick="${hatgEscape(item.filename)}">
            <ha-icon icon="${item.isDraft ? "mdi:file-clock-outline" : "mdi:file-outline"}"></ha-icon>
            <span class="server-theme-name">${hatgEscape(item.name)}</span>
            ${item.isDraft ? `<span class="server-theme-badge">Entwurf</span>` : ""}
            ${deleteControl}
          </div>`;
      })
      .join("");
    return `
      <div class="server-theme-list-header">
        <span>${list.length} Datei${list.length === 1 ? "" : "en"} in config/themes/</span>
        <button type="button" class="modal-btn ghost" data-server-list-refresh>Aktualisieren</button>
      </div>
      <div class="server-theme-list">${rows}</div>`;
  }

  applyImportedTheme(parsed) {
    const lightKeys = Object.keys(parsed.light);
    const darkKeys = Object.keys(parsed.dark);
    lightKeys.forEach((k) => {
      this._state.values.light[k] = parsed.light[k];
      this._state.source.light[k] = "custom";
    });
    darkKeys.forEach((k) => {
      this._state.values.dark[k] = parsed.dark[k];
      this._state.source.dark[k] = "custom";
    });
    hatgNormalizeRgbaLegacyHex(this._state.values.light);
    hatgNormalizeRgbaLegacyHex(this._state.values.dark);
    if (parsed.extra) {
      this._state.extraValues.light = { ...this._state.extraValues.light, ...parsed.extra.light };
      this._state.extraValues.dark = { ...this._state.extraValues.dark, ...parsed.extra.dark };
    }
    if (parsed.name) this._state.themeName = parsed.name;
    this.syncCardModThemeName();
    this._state.importDialog = null;
    this._activeSection = "overview";
    this.render();
    const totalKnown = Object.keys(HATG_MANIFEST.light).length;
    const parts = [`${lightKeys.length}/${totalKnown} Light-Felder`, `${darkKeys.length}/${totalKnown} Dark-Felder importiert`];
    if (parsed.unknownCount) parts.push(`${parsed.unknownCount} unbekannte Felder aufbewahrt (werden beim Export wieder angehängt)`);
    this.showToast(parts.join(", ") + ".");
  }

  runImport() {
    const textarea = this.shadowRoot.querySelector("[data-import-textarea]");
    const text = textarea ? textarea.value : "";
    if (!text || !text.trim()) {
      this.showToast("Bitte zuerst YAML einfügen oder eine Datei wählen.");
      return;
    }
    const knownKeys = new Set(Object.keys(HATG_MANIFEST.light));
    const parsed = hatgParseThemeYaml(text, knownKeys);
    if (parsed.error) {
      this.showToast(`Import fehlgeschlagen: ${parsed.error}`);
      return;
    }
    this.applyImportedTheme(parsed);
  }

  async loadServerThemeList() {
    const dialog = this._state.importDialog;
    if (!dialog) return;
    if (!this._hass || typeof this._hass.callWS !== "function") {
      dialog.serverError = "Keine Verbindung zu Home Assistant – Themes-Ordner hier nicht erreichbar.";
      dialog.serverLoading = false;
      this.render();
      return;
    }
    dialog.serverLoading = true;
    dialog.serverError = null;
    this.render();
    try {
      const result = await this._hass.callWS({ type: "hatg/list_themes" });
      dialog.serverList = (result && result.themes) || [];
      dialog.serverLoading = false;
      this.render();
    } catch (error) {
      dialog.serverLoading = false;
      dialog.serverError = error && error.message ? error.message : "Liste konnte nicht geladen werden.";
      this.render();
    }
  }

  async selectServerTheme(filename) {
    const dialog = this._state.importDialog;
    if (!dialog) return;
    if (!this._hass || typeof this._hass.callWS !== "function") {
      this.showToast("Keine Verbindung zu Home Assistant – Datei kann nicht geladen werden.");
      return;
    }
    try {
      const result = await this._hass.callWS({ type: "hatg/load_theme_file", filename });
      dialog.text = (result && result.yaml) || "";
      dialog.fileName = filename;
      dialog.source = "paste";
      this.render();
      this.showToast(`"${filename}" geladen – bitte prüfen und auf "Importieren" klicken.`);
    } catch (error) {
      const message = error && error.message ? error.message : "unbekannter Fehler";
      this.showToast(`Laden fehlgeschlagen: ${message}`);
    }
  }

  async deleteServerWorkFile(filename) {
    const dialog = this._state.importDialog;
    if (!dialog) return;
    if (!this._hass || typeof this._hass.callWS !== "function") {
      this.showToast("Keine Verbindung zu Home Assistant – Löschen hier nicht möglich.");
      return;
    }
    try {
      await this._hass.callWS({ type: "hatg/delete_work_file", filename });
      dialog.serverList = (dialog.serverList || []).filter((item) => item.filename !== filename);
      dialog.confirmDeleteFile = null;
      this.render();
      this.showToast("Entwurf gelöscht.");
    } catch (error) {
      const message = error && error.message ? error.message : "unbekannter Fehler";
      this.showToast(`Löschen fehlgeschlagen: ${message}`);
    }
  }

  renderSaveDialog() {
    const dialog = this._state.saveDialog;
    if (!dialog) return "";
    if (dialog.stage === "rename") {
      return `
        <div class="modal-scrim" data-dialog-cancel></div>
        <div class="modal-box">
          <h3>Unter neuem Namen speichern</h3>
          <p>Wähle einen anderen Theme-Namen. Die Datei wird als <code>${hatgEscape(dialog.suggested)}.yaml</code> vorgeschlagen.</p>
          <label class="modal-field">
            <span>Theme-Name</span>
            <input type="text" value="${hatgEscape(dialog.suggested)}" data-dialog-name-input />
          </label>
          <div class="modal-actions">
            <button type="button" class="modal-btn ghost" data-dialog-cancel>Abbrechen</button>
            <button type="button" class="modal-btn primary" data-dialog-save-as>Speichern</button>
          </div>
        </div>`;
    }
    return `
      <div class="modal-scrim" data-dialog-cancel></div>
      <div class="modal-box">
        <h3>Datei existiert bereits</h3>
        <p>Es gibt schon eine Datei <code>${hatgEscape(dialog.name)}.yaml</code> in <code>config/themes/</code>. Überschreiben oder unter neuem Namen speichern?</p>
        <div class="modal-actions">
          <button type="button" class="modal-btn ghost" data-dialog-rename>Anderen Namen wählen</button>
          <button type="button" class="modal-btn primary" data-dialog-overwrite>Überschreiben</button>
        </div>
      </div>`;
  }

  loadDraft() {
    try {
      const raw = window.localStorage.getItem("hatg-draft");
      if (!raw) {
        this.showToast("Es ist noch kein gespeicherter Entwurf vorhanden.");
        return;
      }
      const loaded = JSON.parse(raw);
      this._state.themeName = loaded.themeName || this._state.themeName;
      this._state.values.light = { ...hatgDeepClone(HATG_MANIFEST.light), ...(loaded.values?.light || {}) };
      this._state.values.dark = { ...hatgDeepClone(HATG_MANIFEST.dark), ...(loaded.values?.dark || {}) };
      this._state.source.light = { ...hatgInitSource(), ...(loaded.source?.light || {}) };
      this._state.source.dark = { ...hatgInitSource(), ...(loaded.source?.dark || {}) };
      this._state.extraValues = { light: { ...(loaded.extraValues?.light || {}) }, dark: { ...(loaded.extraValues?.dark || {}) } };
      hatgNormalizeRgbaLegacyHex(this._state.values.light);
      hatgNormalizeRgbaLegacyHex(this._state.values.dark);
      this.syncCardModThemeName();
      this._activeSection = "overview";
      this.render();
      this.showToast("Gespeicherter Entwurf wurde geladen.");
    } catch (error) {
      console.error("HATG loadDraft failed", error);
      this.showToast("Der gespeicherte Entwurf ist ungültig.");
    }
  }

  showToast(message) {
    const toast = this.shadowRoot.querySelector(".toast");
    if (!toast) return;
    if (this._toastTimer) window.clearTimeout(this._toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    this._toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }
}

if (!customElements.get("hatg-panel")) {
  customElements.define("hatg-panel", HATGPanel);
}

console.info("HATG loaded", HATG_VERSION);
