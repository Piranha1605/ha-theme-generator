const DEFAULT_THEME = `ha_standard_basis:
  # ============================================================
  # HA THEME GENERATOR BASIS
  # Bereiche:
  # 1. Home Assistant
  # 2. Mushroom
  # 3. Bubble Card
  # 4. card-mod
  # ============================================================

  modes:
    light:
      # ========================================================
      # 1. HOME ASSISTANT - LIGHT
      # ========================================================

      # Grundfarben
      primary-color: "#03a9f4"
      accent-color: "#03a9f4"
      dark-primary-color: "#0288d1"
      light-primary-color: "#b3e5fc"

      success-color: "#4caf50"
      warning-color: "#ff9800"
      error-color: "#f44336"
      info-color: "#2196f3"

      # Hintergrund
      primary-background-color: "#fafafa"
      secondary-background-color: "#ffffff"
      card-background-color: "#ffffff"
      clear-background-color: "#ffffff"

      # Text
      primary-text-color: "#212121"
      secondary-text-color: "#727272"
      disabled-text-color: "#bdbdbd"
      text-primary-color: "#ffffff"
      text-light-primary-color: "#ffffff"

      # Trennlinien / Rahmen
      divider-color: "rgba(0,0,0,0.12)"
      outline-color: "rgba(0,0,0,0.12)"

      # Header
      app-header-background-color: "#03a9f4"
      app-header-text-color: "#ffffff"
      app-header-selection-bar-color: "#ffffff"
      app-header-edit-background-color: "#03a9f4"
      app-header-edit-text-color: "#ffffff"

      # Sidebar
      sidebar-background-color: "#ffffff"
      sidebar-text-color: "#212121"
      sidebar-icon-color: "#727272"
      sidebar-selected-background-color: "rgba(3,169,244,0.12)"
      sidebar-selected-icon-color: "#03a9f4"
      sidebar-selected-text-color: "#03a9f4"

      # Karten
      ha-card-background: "#ffffff"
      ha-card-border-radius: "12px"
      ha-card-border-width: "1px"
      ha-card-border-color: "rgba(0,0,0,0.12)"
      ha-card-box-shadow: "none"

      # Icons
      paper-item-icon-color: "#44739e"
      paper-item-icon-active-color: "#fdd835"
      state-icon-color: "#44739e"
      state-icon-active-color: "#fdd835"
      state-icon-unavailable-color: "#bdbdbd"

      # Statusfarben
      state-active-color: "#03a9f4"
      state-inactive-color: "#727272"
      state-unavailable-color: "#bdbdbd"
      state-warning-color: "#ff9800"
      state-error-color: "#f44336"

      state-light-on-color: "#fdd835"
      state-light-active-color: "#fdd835"
      state-switch-on-color: "#03a9f4"
      state-switch-active-color: "#03a9f4"
      state-automation-active-color: "#03a9f4"
      state-automation-off-color: "#727272"
      state-input_boolean-on-color: "#03a9f4"
      state-input_boolean-active-color: "#03a9f4"

      state-climate-auto-color: "#4caf50"
      state-climate-cool-color: "#2196f3"
      state-climate-dry-color: "#ff9800"
      state-climate-fan_only-color: "#00bcd4"
      state-climate-heat-color: "#ff5722"
      state-climate-heat-cool-color: "#ff9800"
      state-climate-idle-color: "#727272"
      state-climate-off-color: "#727272"

      state-cover-open-color: "#fdd835"
      state-cover-closed-color: "#727272"
      state-lock-locked-color: "#727272"
      state-lock-unlocked-color: "#f44336"
      state-lock-jammed-color: "#f44336"
      state-alarm_control_panel-armed_away-color: "#f44336"
      state-alarm_control_panel-armed_home-color: "#ff9800"
      state-alarm_control_panel-triggered-color: "#f44336"

      state-media_player-playing-color: "#03a9f4"
      state-media_player-paused-color: "#ff9800"
      state-media_player-on-color: "#03a9f4"
      state-person-home-color: "#03a9f4"
      state-device_tracker-home-color: "#03a9f4"
      state-fan-on-color: "#03a9f4"
      state-vacuum-cleaning-color: "#03a9f4"
      state-vacuum-docked-color: "#727272"
      state-vacuum-error-color: "#f44336"

      # Schalter
      switch-checked-button-color: "#03a9f4"
      switch-checked-track-color: "#03a9f4"
      switch-unchecked-button-color: "#f1f1f1"
      switch-unchecked-track-color: "#9e9e9e"

      # Slider
      paper-slider-knob-color: "#03a9f4"
      paper-slider-knob-start-color: "#03a9f4"
      paper-slider-pin-color: "#03a9f4"
      paper-slider-active-color: "#03a9f4"
      paper-slider-secondary-color: "#03a9f4"
      paper-slider-container-color: "#bdbdbd"

      # Eingabefelder / Auswahlfelder
      input-fill-color: "#ffffff"
      input-ink-color: "#212121"
      input-label-ink-color: "#727272"
      input-disabled-fill-color: "#f5f5f5"
      input-disabled-ink-color: "#bdbdbd"
      input-disabled-label-ink-color: "#bdbdbd"

      mdc-theme-primary: "#03a9f4"
      mdc-theme-secondary: "#03a9f4"
      mdc-theme-background: "#fafafa"
      mdc-theme-surface: "#ffffff"
      mdc-theme-on-primary: "#ffffff"
      mdc-theme-on-secondary: "#ffffff"
      mdc-theme-on-surface: "#212121"

      mdc-select-fill-color: "#ffffff"
      mdc-select-ink-color: "#212121"
      mdc-select-label-ink-color: "#727272"
      mdc-select-dropdown-icon-color: "#727272"
      mdc-select-disabled-fill-color: "#f5f5f5"
      mdc-select-disabled-ink-color: "#bdbdbd"
      mdc-select-disabled-label-ink-color: "#bdbdbd"

      mdc-text-field-fill-color: "#ffffff"
      mdc-text-field-ink-color: "#212121"
      mdc-text-field-label-ink-color: "#727272"
      mdc-text-field-disabled-fill-color: "#f5f5f5"
      mdc-text-field-disabled-ink-color: "#bdbdbd"
      mdc-text-field-disabled-label-ink-color: "#bdbdbd"

      mdc-menu-surface-fill-color: "#ffffff"

      md-sys-color-surface: "#ffffff"
      md-sys-color-surface-container: "#ffffff"
      md-sys-color-surface-container-low: "#fafafa"
      md-sys-color-surface-container-high: "#ffffff"
      md-sys-color-surface-container-highest: "#eeeeee"
      md-sys-color-on-surface: "#212121"
      md-sys-color-on-surface-variant: "#727272"
      md-sys-color-outline: "rgba(0,0,0,0.28)"
      md-sys-color-outline-variant: "rgba(0,0,0,0.16)"
      md-sys-color-primary: "#03a9f4"
      md-sys-color-secondary: "#03a9f4"

      md-filled-field-container-color: "#ffffff"
      md-filled-field-label-text-color: "#727272"
      md-filled-field-input-text-color: "#212121"
      md-filled-field-supporting-text-color: "#727272"
      md-filled-field-active-indicator-color: "#03a9f4"
      md-filled-field-focus-active-indicator-color: "#03a9f4"
      md-filled-field-hover-active-indicator-color: "rgba(0,0,0,0.28)"
      md-filled-field-disabled-container-color: "#f5f5f5"
      md-filled-field-disabled-label-text-color: "#bdbdbd"
      md-filled-field-disabled-input-text-color: "#bdbdbd"

      md-filled-select-container-color: "#ffffff"
      md-filled-select-label-text-color: "#727272"
      md-filled-select-input-text-color: "#212121"
      md-filled-select-supporting-text-color: "#727272"
      md-filled-select-active-indicator-color: "#03a9f4"
      md-filled-select-focus-active-indicator-color: "#03a9f4"
      md-filled-select-hover-active-indicator-color: "rgba(0,0,0,0.28)"
      md-filled-select-dropdown-icon-color: "#727272"
      md-filled-select-disabled-container-color: "#f5f5f5"
      md-filled-select-disabled-label-text-color: "#bdbdbd"
      md-filled-select-disabled-input-text-color: "#bdbdbd"
      md-filled-select-disabled-dropdown-icon-color: "#bdbdbd"

      md-filled-text-field-container-color: "#ffffff"
      md-filled-text-field-input-text-color: "#212121"
      md-filled-text-field-label-text-color: "#727272"
      md-filled-text-field-active-indicator-color: "#03a9f4"
      md-filled-text-field-focus-active-indicator-color: "#03a9f4"
      md-filled-text-field-hover-active-indicator-color: "rgba(0,0,0,0.28)"
      md-filled-text-field-disabled-container-color: "#f5f5f5"
      md-filled-text-field-disabled-input-text-color: "#bdbdbd"
      md-filled-text-field-disabled-label-text-color: "#bdbdbd"

      md-menu-container-color: "#ffffff"
      md-menu-item-label-text-color: "#212121"
      md-menu-item-selected-container-color: "rgba(3,169,244,0.12)"
      md-menu-item-selected-label-text-color: "#212121"

      md-list-container-color: "#ffffff"
      md-list-item-label-text-color: "#212121"
      md-list-item-supporting-text-color: "#727272"

      # Energie / Graphen
      energy-grid-consumption-color: "#488fc2"
      energy-grid-return-color: "#8353d1"
      energy-solar-color: "#ff9800"
      energy-non-fossil-color: "#0f9d58"
      energy-battery-out-color: "#4caf50"
      energy-battery-in-color: "#fdd835"
      energy-gas-color: "#8e021b"
      energy-water-color: "#00bcd4"

      # Badges / Tabellen
      label-badge-background-color: "#ffffff"
      label-badge-text-color: "#212121"
      label-badge-red: "#E53B3C"
      label-badge-blue: "#3272ED"
      label-badge-green: "#29AE5B"
      label-badge-yellow: "#D77736"
      label-badge-grey: "#9e9e9e"
      table-row-background-color: "rgba(0,0,0,0.02)"
      table-row-alternative-background-color: "rgba(0,0,0,0.04)"
      data-table-background-color: "#ffffff"

      # Dialoge
      dialog-background-color: "#ffffff"
      paper-dialog-background-color: "#ffffff"
      mdc-dialog-scrim-color: "rgba(0,0,0,0.32)"
      mdc-dialog-heading-ink-color: "#212121"
      mdc-dialog-content-ink-color: "#212121"

      # Code Editor
      codemirror-property: "#03a9f4"
      codemirror-keyword: "#ff9800"
      codemirror-string: "#4caf50"
      codemirror-number: "#ffb74d"
      codemirror-atom: "#f44336"

      # ========================================================
      # 2. MUSHROOM - LIGHT
      # ========================================================

      mushroom-card-primary-color: "#212121"
      mushroom-card-secondary-color: "#727272"
      mushroom-card-background: "transparent"
      mushroom-card-border-radius: "12px"
      mush-card-primary-font-size: "15px"
      mush-card-secondary-font-size: "13px"
      mush-card-primary-font-weight: "500"
      mush-card-secondary-font-weight: "400"
      mush-chip-border-radius: "999px"
      mush-chip-background: "rgba(0,0,0,0.04)"
      mush-chip-box-shadow: "none"
      mush-chip-spacing: "6px"
      mush-control-border-radius: "999px"
      mush-control-background-color: "rgba(0,0,0,0.06)"
      mush-control-height: "38px"
      mush-icon-border-radius: "12px"
      mush-icon-size: "42px"
      mush-icon-symbol-size: "22px"
      mush-rgb-blue: "3,169,244"
      mush-rgb-state-light: "255,221,87"
      mush-rgb-state-switch: "3,169,244"

      # ========================================================
      # 3. BUBBLE CARD - LIGHT
      # ========================================================

      bubble-main-background-color: "transparent"
      bubble-button-background-color: "rgba(0,0,0,0.04)"
      bubble-icon-background-color: "rgba(3,169,244,0.12)"
      bubble-accent-color: "#03a9f4"
      bubble-border-radius: "18px"
      bubble-sub-button-background-color: "rgba(0,0,0,0.05)"
      bubble-sub-button-text-color: "#212121"
      bubble-name-color: "#212121"
      bubble-state-color: "#727272"
      bubble-icon-color: "#44739e"

      # ========================================================
      # 4. CARD-MOD - LIGHT
      # ========================================================

      card-mod-theme: ha_standard_basis

      card-mod-root-yaml: |
        body {
          background: var(--primary-background-color) !important;
        }

      card-mod-view-yaml: |
        hui-view {
          background: var(--primary-background-color) !important;
          min-height: 100vh !important;
        }

      card-mod-card-yaml: |
        .: |
          ha-card {
            border-radius: var(--ha-card-border-radius) !important;
            background: var(--ha-card-background) !important;
            border: var(--ha-card-border-width) solid var(--ha-card-border-color) !important;
            box-shadow: var(--ha-card-box-shadow) !important;
          }

      card-mod-row-yaml: |
        .: |
          hui-generic-entity-row {
            color: var(--primary-text-color) !important;
          }

      card-mod-more-info-yaml: |
        .: |
          ha-dialog {
            --mdc-theme-surface: var(--card-background-color);
          }

    dark:
      # ========================================================
      # 1. HOME ASSISTANT - DARK
      # ========================================================

      # Grundfarben
      primary-color: "#03a9f4"
      accent-color: "#03a9f4"
      dark-primary-color: "#0288d1"
      light-primary-color: "#b3e5fc"

      success-color: "#4caf50"
      warning-color: "#ff9800"
      error-color: "#f44336"
      info-color: "#2196f3"

      # Hintergrund
      primary-background-color: "#111111"
      secondary-background-color: "#1c1c1c"
      card-background-color: "#1c1c1c"
      clear-background-color: "#111111"

      # Text
      primary-text-color: "#e1e1e1"
      secondary-text-color: "#9b9b9b"
      disabled-text-color: "#777777"
      text-primary-color: "#ffffff"
      text-light-primary-color: "#ffffff"

      # Trennlinien / Rahmen
      divider-color: "rgba(255,255,255,0.12)"
      outline-color: "rgba(255,255,255,0.12)"

      # Header
      app-header-background-color: "#101e24"
      app-header-text-color: "#e1e1e1"
      app-header-selection-bar-color: "#03a9f4"
      app-header-edit-background-color: "#101e24"
      app-header-edit-text-color: "#e1e1e1"

      # Sidebar
      sidebar-background-color: "#111111"
      sidebar-text-color: "#e1e1e1"
      sidebar-icon-color: "#9b9b9b"
      sidebar-selected-background-color: "rgba(3,169,244,0.16)"
      sidebar-selected-icon-color: "#03a9f4"
      sidebar-selected-text-color: "#03a9f4"

      # Karten
      ha-card-background: "#1c1c1c"
      ha-card-border-radius: "12px"
      ha-card-border-width: "1px"
      ha-card-border-color: "rgba(255,255,255,0.12)"
      ha-card-box-shadow: "none"

      # Icons
      paper-item-icon-color: "#9b9b9b"
      paper-item-icon-active-color: "#fdd835"
      state-icon-color: "#9b9b9b"
      state-icon-active-color: "#fdd835"
      state-icon-unavailable-color: "#777777"

      # Statusfarben
      state-active-color: "#03a9f4"
      state-inactive-color: "#9b9b9b"
      state-unavailable-color: "#777777"
      state-warning-color: "#ff9800"
      state-error-color: "#f44336"

      state-light-on-color: "#fdd835"
      state-light-active-color: "#fdd835"
      state-switch-on-color: "#03a9f4"
      state-switch-active-color: "#03a9f4"
      state-automation-active-color: "#03a9f4"
      state-automation-off-color: "#9b9b9b"
      state-input_boolean-on-color: "#03a9f4"
      state-input_boolean-active-color: "#03a9f4"

      state-climate-auto-color: "#4caf50"
      state-climate-cool-color: "#2196f3"
      state-climate-dry-color: "#ff9800"
      state-climate-fan_only-color: "#00bcd4"
      state-climate-heat-color: "#ff5722"
      state-climate-heat-cool-color: "#ff9800"
      state-climate-idle-color: "#9b9b9b"
      state-climate-off-color: "#9b9b9b"

      state-cover-open-color: "#fdd835"
      state-cover-closed-color: "#9b9b9b"
      state-lock-locked-color: "#9b9b9b"
      state-lock-unlocked-color: "#f44336"
      state-lock-jammed-color: "#f44336"
      state-alarm_control_panel-armed_away-color: "#f44336"
      state-alarm_control_panel-armed_home-color: "#ff9800"
      state-alarm_control_panel-triggered-color: "#f44336"

      state-media_player-playing-color: "#03a9f4"
      state-media_player-paused-color: "#ff9800"
      state-media_player-on-color: "#03a9f4"
      state-person-home-color: "#03a9f4"
      state-device_tracker-home-color: "#03a9f4"
      state-fan-on-color: "#03a9f4"
      state-vacuum-cleaning-color: "#03a9f4"
      state-vacuum-docked-color: "#9b9b9b"
      state-vacuum-error-color: "#f44336"

      # Schalter
      switch-checked-button-color: "#03a9f4"
      switch-checked-track-color: "#03a9f4"
      switch-unchecked-button-color: "#9b9b9b"
      switch-unchecked-track-color: "#777777"

      # Slider
      paper-slider-knob-color: "#03a9f4"
      paper-slider-knob-start-color: "#03a9f4"
      paper-slider-pin-color: "#03a9f4"
      paper-slider-active-color: "#03a9f4"
      paper-slider-secondary-color: "#03a9f4"
      paper-slider-container-color: "#777777"

      # Eingabefelder / Auswahlfelder
      input-fill-color: "#1c1c1c"
      input-ink-color: "#e1e1e1"
      input-label-ink-color: "#9b9b9b"
      input-disabled-fill-color: "#111111"
      input-disabled-ink-color: "#777777"
      input-disabled-label-ink-color: "#777777"

      mdc-theme-primary: "#03a9f4"
      mdc-theme-secondary: "#03a9f4"
      mdc-theme-background: "#111111"
      mdc-theme-surface: "#1c1c1c"
      mdc-theme-on-primary: "#ffffff"
      mdc-theme-on-secondary: "#ffffff"
      mdc-theme-on-surface: "#e1e1e1"

      mdc-select-fill-color: "#1c1c1c"
      mdc-select-ink-color: "#e1e1e1"
      mdc-select-label-ink-color: "#9b9b9b"
      mdc-select-dropdown-icon-color: "#9b9b9b"
      mdc-select-disabled-fill-color: "#111111"
      mdc-select-disabled-ink-color: "#777777"
      mdc-select-disabled-label-ink-color: "#777777"

      mdc-text-field-fill-color: "#1c1c1c"
      mdc-text-field-ink-color: "#e1e1e1"
      mdc-text-field-label-ink-color: "#9b9b9b"
      mdc-text-field-disabled-fill-color: "#111111"
      mdc-text-field-disabled-ink-color: "#777777"
      mdc-text-field-disabled-label-ink-color: "#777777"

      mdc-menu-surface-fill-color: "#1c1c1c"

      md-sys-color-surface: "#1c1c1c"
      md-sys-color-surface-container: "#1c1c1c"
      md-sys-color-surface-container-low: "#111111"
      md-sys-color-surface-container-high: "#1c1c1c"
      md-sys-color-surface-container-highest: "#2a2a2a"
      md-sys-color-on-surface: "#e1e1e1"
      md-sys-color-on-surface-variant: "#9b9b9b"
      md-sys-color-outline: "rgba(255,255,255,0.28)"
      md-sys-color-outline-variant: "rgba(255,255,255,0.16)"
      md-sys-color-primary: "#03a9f4"
      md-sys-color-secondary: "#03a9f4"

      md-filled-field-container-color: "#1c1c1c"
      md-filled-field-label-text-color: "#9b9b9b"
      md-filled-field-input-text-color: "#e1e1e1"
      md-filled-field-supporting-text-color: "#9b9b9b"
      md-filled-field-active-indicator-color: "#03a9f4"
      md-filled-field-focus-active-indicator-color: "#03a9f4"
      md-filled-field-hover-active-indicator-color: "rgba(255,255,255,0.28)"
      md-filled-field-disabled-container-color: "#111111"
      md-filled-field-disabled-label-text-color: "#777777"
      md-filled-field-disabled-input-text-color: "#777777"

      md-filled-select-container-color: "#1c1c1c"
      md-filled-select-label-text-color: "#9b9b9b"
      md-filled-select-input-text-color: "#e1e1e1"
      md-filled-select-supporting-text-color: "#9b9b9b"
      md-filled-select-active-indicator-color: "#03a9f4"
      md-filled-select-focus-active-indicator-color: "#03a9f4"
      md-filled-select-hover-active-indicator-color: "rgba(255,255,255,0.28)"
      md-filled-select-dropdown-icon-color: "#9b9b9b"
      md-filled-select-disabled-container-color: "#111111"
      md-filled-select-disabled-label-text-color: "#777777"
      md-filled-select-disabled-input-text-color: "#777777"
      md-filled-select-disabled-dropdown-icon-color: "#777777"

      md-filled-text-field-container-color: "#1c1c1c"
      md-filled-text-field-input-text-color: "#e1e1e1"
      md-filled-text-field-label-text-color: "#9b9b9b"
      md-filled-text-field-active-indicator-color: "#03a9f4"
      md-filled-text-field-focus-active-indicator-color: "#03a9f4"
      md-filled-text-field-hover-active-indicator-color: "rgba(255,255,255,0.28)"
      md-filled-text-field-disabled-container-color: "#111111"
      md-filled-text-field-disabled-input-text-color: "#777777"
      md-filled-text-field-disabled-label-text-color: "#777777"

      md-menu-container-color: "#1c1c1c"
      md-menu-item-label-text-color: "#e1e1e1"
      md-menu-item-selected-container-color: "rgba(3,169,244,0.16)"
      md-menu-item-selected-label-text-color: "#e1e1e1"

      md-list-container-color: "#1c1c1c"
      md-list-item-label-text-color: "#e1e1e1"
      md-list-item-supporting-text-color: "#9b9b9b"

      # Energie / Graphen
      energy-grid-consumption-color: "#488fc2"
      energy-grid-return-color: "#8353d1"
      energy-solar-color: "#ff9800"
      energy-non-fossil-color: "#0f9d58"
      energy-battery-out-color: "#4caf50"
      energy-battery-in-color: "#fdd835"
      energy-gas-color: "#8e021b"
      energy-water-color: "#00bcd4"

      # Badges / Tabellen
      label-badge-background-color: "#1c1c1c"
      label-badge-text-color: "#e1e1e1"
      label-badge-red: "#E53B3C"
      label-badge-blue: "#3272ED"
      label-badge-green: "#29AE5B"
      label-badge-yellow: "#D77736"
      label-badge-grey: "#9e9e9e"
      table-row-background-color: "rgba(255,255,255,0.02)"
      table-row-alternative-background-color: "rgba(255,255,255,0.04)"
      data-table-background-color: "#1c1c1c"

      # Dialoge
      dialog-background-color: "#1c1c1c"
      paper-dialog-background-color: "#1c1c1c"
      mdc-dialog-scrim-color: "rgba(0,0,0,0.62)"
      mdc-dialog-heading-ink-color: "#e1e1e1"
      mdc-dialog-content-ink-color: "#e1e1e1"

      # Code Editor
      codemirror-property: "#03a9f4"
      codemirror-keyword: "#ff9800"
      codemirror-string: "#4caf50"
      codemirror-number: "#ffb74d"
      codemirror-atom: "#f44336"

      # ========================================================
      # 2. MUSHROOM - DARK
      # ========================================================

      mushroom-card-primary-color: "#e1e1e1"
      mushroom-card-secondary-color: "#9b9b9b"
      mushroom-card-background: "transparent"
      mushroom-card-border-radius: "12px"
      mush-card-primary-font-size: "15px"
      mush-card-secondary-font-size: "13px"
      mush-card-primary-font-weight: "500"
      mush-card-secondary-font-weight: "400"
      mush-chip-border-radius: "999px"
      mush-chip-background: "rgba(255,255,255,0.07)"
      mush-chip-box-shadow: "none"
      mush-chip-spacing: "6px"
      mush-control-border-radius: "999px"
      mush-control-background-color: "rgba(255,255,255,0.11)"
      mush-control-height: "38px"
      mush-icon-border-radius: "12px"
      mush-icon-size: "42px"
      mush-icon-symbol-size: "22px"
      mush-rgb-blue: "3,169,244"
      mush-rgb-state-light: "255,221,87"
      mush-rgb-state-switch: "3,169,244"

      # ========================================================
      # 3. BUBBLE CARD - DARK
      # ========================================================

      bubble-main-background-color: "transparent"
      bubble-button-background-color: "rgba(255,255,255,0.07)"
      bubble-icon-background-color: "rgba(3,169,244,0.16)"
      bubble-accent-color: "#03a9f4"
      bubble-border-radius: "18px"
      bubble-sub-button-background-color: "rgba(255,255,255,0.08)"
      bubble-sub-button-text-color: "#e1e1e1"
      bubble-name-color: "#e1e1e1"
      bubble-state-color: "#9b9b9b"
      bubble-icon-color: "#9b9b9b"

      # ========================================================
      # 4. CARD-MOD - DARK
      # ========================================================

      card-mod-theme: ha_standard_basis

      card-mod-root-yaml: |
        body {
          background: var(--primary-background-color) !important;
        }

      card-mod-view-yaml: |
        hui-view {
          background: var(--primary-background-color) !important;
          min-height: 100vh !important;
        }

      card-mod-card-yaml: |
        .: |
          ha-card {
            border-radius: var(--ha-card-border-radius) !important;
            background: var(--ha-card-background) !important;
            border: var(--ha-card-border-width) solid var(--ha-card-border-color) !important;
            box-shadow: var(--ha-card-box-shadow) !important;
          }

      card-mod-row-yaml: |
        .: |
          hui-generic-entity-row {
            color: var(--primary-text-color) !important;
          }

      card-mod-more-info-yaml: |
        .: |
          ha-dialog {
            --mdc-theme-surface: var(--card-background-color);
          }
`;

class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._hass = null;
    this.initialized = false;
    this.loading = false;
    this.files = [];
    this.selectedFile = "";
    this.editorContent = DEFAULT_THEME;
    this.activeView = "preview";
    this.status = "Panel geladen. Theme-Dateien werden gesucht …";
    this.previewPage = "overview";
    this.settingsFilter = "all";
    this._editorScrollTop = 0;
    this._editorSelectionStart = 0;
    this._editorSelectionEnd = 0;
    this._activeElementId = "";
    this._editorIsFocused = false;
    this.pendingScrollKey = "";

    this.openGroups = {
      basic: true
    };

    this.activeGroup = "basic";

    this.colorGroups = [
      {
        id: "basic",
        title: "Grundfarben",
        description: "Primär, Sekundär, Akzent und Statusfarben.",
        fields: [
          { key: "primary-color", label: "Primärfarbe" },
          { key: "mdc-theme-secondary", label: "Sekundärfarbe" },
          { key: "accent-color", label: "Akzentfarbe" },
          { key: "success-color", label: "Erfolg" },
          { key: "warning-color", label: "Warnung" },
          { key: "error-color", label: "Fehler" },
          { key: "info-color", label: "Info" },
          { key: "state-active-color", label: "Status aktiv" },
          { key: "state-inactive-color", label: "Status inaktiv" },
          { key: "state-unavailable-color", label: "Nicht verfügbar" }
        ]
      },
      {
        id: "backgrounds",
        title: "Hintergründe",
        description: "Seitenhintergrund, Sekundärflächen, Karten und klare Bereiche.",
        fields: [
          { key: "primary-background-color", label: "Seitenhintergrund" },
          { key: "secondary-background-color", label: "Sekundärhintergrund" },
          { key: "card-background-color", label: "Kartenhintergrund" },
          { key: "clear-background-color", label: "Klarer Hintergrund" },
          { key: "mdc-theme-background", label: "MDC Hintergrund" },
          { key: "mdc-theme-surface", label: "MDC Oberfläche" },
          { key: "md-sys-color-surface", label: "MD Oberfläche" },
          { key: "md-sys-color-surface-container", label: "MD Container" }
        ]
      },
      {
        id: "textcolors",
        title: "Textfarben",
        description: "Primärer Text, sekundärer Text, deaktivierter Text und Material-Textfarben.",
        fields: [
          { key: "primary-text-color", label: "Primärtext" },
          { key: "secondary-text-color", label: "Sekundärtext" },
          { key: "disabled-text-color", label: "Deaktivierter Text" },
          { key: "text-primary-color", label: "Text auf Primärfarbe" },
          { key: "text-light-primary-color", label: "Heller Primärtext" },
          { key: "mdc-theme-on-primary", label: "MDC auf Primär" },
          { key: "mdc-theme-on-secondary", label: "MDC auf Sekundär" },
          { key: "mdc-theme-on-surface", label: "MDC auf Oberfläche" },
          { key: "md-sys-color-on-surface", label: "MD auf Oberfläche" },
          { key: "md-sys-color-on-surface-variant", label: "MD Text Variante" }
        ]
      }
    ];
  }

  set hass(hass) {
    this._hass = hass;

    if (!this.initialized) {
      this.initialized = true;
      this.loadThemeFiles();
    }

    // Wichtig:
    // Home Assistant aktualisiert hass sehr oft.
    // Wir rendern hier absichtlich NICHT jedes Mal neu,
    // sonst springt der YAML-Editor nach oben.
  }

  connectedCallback() {
    try {
      this.render();
    } catch (err) {
      this.renderFatalError(err);
    }
  }

  async apiCall(message) {
    if (this._hass?.callWS) {
      return await this._hass.callWS(message);
    }

    if (this._hass?.connection?.sendMessagePromise) {
      return await this._hass.connection.sendMessagePromise(message);
    }

    throw new Error("Keine WebSocket-Verbindung gefunden.");
  }

  async loadThemeFiles() {
    if (!this._hass) return;

    this.loading = true;
    this.status = "Theme-Dateien werden geladen …";
    this.safeRender();

    try {
      const result = await this.apiCall({
        type: "theme_generator/list_theme_files",
      });

      this.files = result.files || [];
      this.status = this.files.length
        ? `${this.files.length} Theme-Datei(en) gefunden.`
        : "Keine Theme-Dateien in /config/themes gefunden.";

      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Fehler beim Laden der Theme-Dateien: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  async loadSelectedTheme() {
    if (!this.selectedFile) {
      this.status = "Bitte zuerst eine Theme-Datei auswählen.";
      this.safeRender();
      return;
    }

    this.loading = true;
    this.status = `${this.selectedFile} wird geladen …`;
    this.safeRender();

    try {
      const result = await this.apiCall({
        type: "theme_generator/read_theme_file",
        filename: this.selectedFile,
      });

      this.selectedFile = result.filename;
      this.editorContent = result.content || "";
      this.status = `Geladen: ${this.selectedFile}`;

      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Fehler beim Laden der Theme-Datei: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  async saveAsVersion() {
    const baseFile = this.selectedFile || "ha_standard_basis.yaml";

    this.loading = true;
    this.status = `Neue Version von ${baseFile} wird gespeichert …`;
    this.safeRender();

    try {
      const result = await this.apiCall({
        type: "theme_generator/save_theme_file_version",
        filename: baseFile,
        content: this.editorContent,
      });

      this.selectedFile = result.filename;
      this.editorContent = result.content || this.editorContent;
      this.status = `Gespeichert als neue Datei: ${result.filename}`;

      await this.loadThemeFiles();

      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Speichern fehlgeschlagen: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  async overwriteSelectedTheme() {
    if (!this.selectedFile) {
      this.status = "Bitte zuerst eine Theme-Datei auswählen.";
      this.safeRender();
      return;
    }

    const ok = window.confirm(
      `Soll die Datei "${this.selectedFile}" wirklich überschrieben werden?`
    );

    if (!ok) {
      this.status = "Überschreiben abgebrochen.";
      this.safeRender();
      return;
    }

    this.loading = true;
    this.status = `${this.selectedFile} wird überschrieben …`;
    this.safeRender();

    try {
      const result = await this.apiCall({
        type: "theme_generator/overwrite_theme_file",
        filename: this.selectedFile,
        content: this.editorContent,
      });

      this.selectedFile = result.filename;
      this.editorContent = result.content || this.editorContent;
      this.status = `Überschrieben: ${result.filename}`;

      await this.loadThemeFiles();

      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Überschreiben fehlgeschlagen: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  resetDefaultTheme() {
    this.selectedFile = "";
    this.editorContent = DEFAULT_THEME;
    this.status = "Standard-Basis wurde in den Editor geladen.";
    this.openGroups.basic = true;
    this.render();
  }

  setView(view) {
    this.activeView = view;
    this.render();

    if (view === "editor" && this.pendingScrollKey) {
      const key = this.pendingScrollKey;
      this.pendingScrollKey = "";
      setTimeout(() => this.scrollEditorToKey(key), 0);
    }
  }

  toggleGroup(id) {
    const isOpen = !!this.openGroups[id];

    Object.keys(this.openGroups).forEach((key) => {
      this.openGroups[key] = false;
    });

    if (!isOpen) {
      this.openGroups[id] = true;
      this.activeGroup = id;
    } else {
      this.activeGroup = "";
    }

    this.render();
  }

  extractValue(key, fallback = "") {
    const regex = new RegExp(`${this.escapeRegex(key)}:\\s*["']?([^"'\\n]+)["']?`);
    const match = this.editorContent.match(regex);

    if (!match) {
      return fallback;
    }

    return match[1].trim();
  }

  isHexColor(value) {
    return /^#[0-9a-fA-F]{6}$/.test(String(value || "").trim());
  }

  setYamlValue(key, value) {
    const cleanValue = String(value ?? "").trim();
    const escapedKey = this.escapeRegex(key);

    const quotedRegex = new RegExp(`(${escapedKey}:\\s*)["'][^"'\\n]*["']`, "g");
    const plainRegex = new RegExp(`(${escapedKey}:\\s*)[^\\n]+`, "g");

    if (quotedRegex.test(this.editorContent)) {
      this.editorContent = this.editorContent.replace(quotedRegex, `$1"${cleanValue}"`);
    } else if (plainRegex.test(this.editorContent)) {
      this.editorContent = this.editorContent.replace(plainRegex, `$1"${cleanValue}"`);
    } else {
      this.editorContent = this.editorContent.trimEnd() + `\n  ${key}: "${cleanValue}"\n`;
    }

    this.openGroupForField(key);
    this.pendingScrollKey = key;
    this.status = `Wert geändert: ${key} → ${cleanValue}`;
    this.render();
  }

  scrollEditorToKey(key) {
    // Deaktiviert:
    // Das automatische Springen im YAML-Editor hat beim Bearbeiten gestört.
    // Später bauen wir dafür eine manuelle "Im Editor anzeigen"-Schaltfläche.
    return;
  }

  hexToRgb(value) {
    const clean = String(value || "").trim();

    let hex = clean.replace("#", "");

    if (hex.length === 3) {
      hex = hex.split("").map((char) => char + char).join("");
    }

    if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
      return null;
    }

    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }

  parseRgbValue(value) {
    const clean = String(value || "").trim();

    let match = clean.match(/^rgba\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/i);

    if (match) {
      return {
        r: Math.round(Number(match[1])),
        g: Math.round(Number(match[2])),
        b: Math.round(Number(match[3])),
        a: Math.max(0, Math.min(1, Number(match[4]))),
      };
    }

    match = clean.match(/^rgb\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/i);

    if (match) {
      return {
        r: Math.round(Number(match[1])),
        g: Math.round(Number(match[2])),
        b: Math.round(Number(match[3])),
        a: 1,
      };
    }

    return null;
  }

  getAlphaPercent(value) {
    const clean = String(value || "").trim();

    if (/^var\(/i.test(clean)) {
      return 100;
    }

    const rgb = this.parseRgbValue(clean);

    if (rgb) {
      return Math.round(rgb.a * 100);
    }

    return 100;
  }

  withAlpha(value, alphaPercent, fallback = "#03a9f4") {
    const clean = String(value || "").trim();
    const alpha = Math.max(0, Math.min(100, Number(alphaPercent))) / 100;

    if (/^var\(/i.test(clean)) {
      return clean;
    }

    let rgb = this.parseRgbValue(clean);

    if (!rgb && this.isHexColor(clean)) {
      rgb = this.hexToRgb(clean);
    }

    if (!rgb) {
      rgb = this.hexToRgb(fallback) || { r: 3, g: 169, b: 244 };
    }

    const roundedAlpha = Math.round(alpha * 100) / 100;

    if (roundedAlpha >= 1) {
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }

    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${roundedAlpha.toFixed(2)})`;
  }

  setYamlAlpha(key, alphaPercent) {
    const rawValue = this.extractValue(key, "#03a9f4");
    const newValue = this.withAlpha(rawValue, alphaPercent, this.resolvedColorForPicker ? this.resolvedColorForPicker(key, "#03a9f4") : "#03a9f4");

    if (/^var\(/i.test(String(rawValue).trim())) {
      this.status = `Transparenz bei ${key} nicht geändert, weil der Wert eine var(...)-Verknüpfung ist.`;
      this.updateStatusOnly?.();
      return;
    }

    if (this.setYamlValue) {
      this.setYamlValue(key, newValue);
    } else if (this.setYamlColor) {
      this.setYamlColor(key, newValue);
    }

    this.status = `${key} Transparenz: ${alphaPercent}%`;
    this.render();
  }

  isCssColorValue(value) {
    const clean = String(value || "").trim();

    return (
      /^#[0-9a-fA-F]{3}$/.test(clean) ||
      /^#[0-9a-fA-F]{6}$/.test(clean) ||
      /^rgb\(/i.test(clean) ||
      /^rgba\(/i.test(clean) ||
      clean === "transparent"
    );
  }

  resolveThemeValue(key, fallback = "#03a9f4", seen = new Set()) {
    if (seen.has(key)) {
      return fallback;
    }

    seen.add(key);

    const raw = this.extractValue(key, fallback).trim();

    if (!raw) {
      return fallback;
    }

    const varMatch = raw.match(/^var\(\s*--([a-zA-Z0-9_-]+)\s*(?:,\s*([^)]+))?\)$/);

    if (varMatch) {
      const refKey = varMatch[1];
      const varFallback = varMatch[2]?.trim() || fallback;
      return this.resolveThemeValue(refKey, varFallback, seen);
    }

    if (this.isCssColorValue(raw)) {
      return raw;
    }

    return raw;
  }

  resolvedColorForPicker(key, fallback = "#03a9f4") {
    const resolved = this.resolveThemeValue(key, fallback);

    if (this.isHexColor(resolved)) {
      return resolved;
    }

    return fallback;
  }

  extractColor(key, fallback = "#03a9f4") {
    return this.resolveThemeValue(key, fallback);
  }

  setYamlColor(key, value) {
    this.setYamlValue(key, value);
  }

  getPreviewVars() {
    return {
      primary: this.resolveThemeValue("primary-color", "#03a9f4"),
      accent: this.resolveThemeValue("accent-color", "#03a9f4"),
      success: this.resolveThemeValue("success-color", "#4caf50"),
      warning: this.resolveThemeValue("warning-color", "#ff9800"),
      error: this.resolveThemeValue("error-color", "#f44336"),
      info: this.resolveThemeValue("info-color", "#2196f3"),
      bg: this.resolveThemeValue("primary-background-color", "#111111"),
      card: this.resolveThemeValue("card-background-color", "#1c1c1c"),
      text: this.resolveThemeValue("primary-text-color", "#e1e1e1"),
      secondary: this.resolveThemeValue("secondary-text-color", "#9b9b9b"),
      sidebar: this.resolveThemeValue("sidebar-background-color", "#111111"),
      border: this.resolveThemeValue("ha-card-border-color", "#333333"),
      bubble: this.resolveThemeValue("bubble-accent-color", "#03a9f4")
    };
  }

  openGroupForField(fieldKey) {
    const group = this.colorGroups.find((item) =>
      item.fields.some((field) => field.key === fieldKey)
    );

    if (!group) {
      return;
    }

    Object.keys(this.openGroups).forEach((key) => {
      this.openGroups[key] = false;
    });

    this.openGroups[group.id] = true;
    this.activeGroup = group.id;
  }

  renderColorGroups() {
    return this.colorGroups.map((group) => {
      const open = !!this.openGroups[group.id];

      const swatches = group.fields.slice(0, 8).map((field) => {
        const value = this.resolveThemeValue(field.key, "#03a9f4");
        return `<span class="mini-swatch" title="${this.escape(field.key)}: ${this.escape(value)}" style="background:${this.escape(value)}"></span>`;
      }).join("");

      const fields = group.fields.map((field) => {
        const rawValue = this.extractValue(field.key, "#03a9f4");
        const colorValue = this.resolvedColorForPicker(field.key, "#03a9f4");

        return `
          <label class="color-field">
            <span>${this.escape(field.label)}</span>
            <input type="color" data-color-key="${this.escape(field.key)}" value="${this.escape(colorValue)}">
            <input class="value-input" data-value-key="${this.escape(field.key)}" value="${this.escape(rawValue)}" spellcheck="false">
            <code>${this.escape(field.key)}</code>
          </label>
        `;
      }).join("");

      return `
        <section class="field-group ${open ? "open" : "closed"}">
          <button class="group-head" data-toggle-group="${this.escape(group.id)}">
            <span class="group-title">${this.escape(group.title)}</span>
            <span class="group-swatches">${swatches}</span>
            <span class="group-arrow">${open ? "▾" : "▸"}</span>
          </button>

          ${open ? `
            <p class="hint">${this.escape(group.description)}</p>
            <div class="color-grid">
              ${fields}
            </div>
          ` : ""}
        </section>
      `;
    }).join("");
  }

  getUserName() {
    return this._hass?.user?.name || this._hass?.user?.email || "Benutzer";
  }

  getUserInitial() {
    const name = this.getUserName().trim();
    return name ? name.charAt(0).toUpperCase() : "B";
  }

  setPreviewPage(page) {
    this.previewPage = page;
    this.render();
  }

  extractCardModBlocks() {
    const lines = String(this.editorContent || "").split("\n");
    const blocks = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (!/card[-_ ]?mod/i.test(line)) {
        continue;
      }

      const indent = (line.match(/^\s*/) || [""])[0].length;
      const block = [line];

      for (let j = i + 1; j < lines.length && block.length < 26; j++) {
        const next = lines[j];
        const trimmed = next.trim();

        if (!trimmed) {
          block.push(next);
          continue;
        }

        const nextIndent = (next.match(/^\s*/) || [""])[0].length;

        if (nextIndent <= indent && !next.startsWith(" ")) {
          break;
        }

        block.push(next);
      }

      blocks.push({
        title: line.trim().replace(/:$/, ""),
        code: block.join("\n")
      });

      if (blocks.length >= 6) {
        break;
      }
    }

    return blocks;
  }

  renderCardModPreview() {
    const blocks = this.extractCardModBlocks();

    if (!blocks.length) {
      return `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card cardmod-like">
            <div class="big-card-head">
              <ha-icon icon="mdi:code-braces"></ha-icon>
              <h3>card-mod</h3>
            </div>
            <p>In der geladenen Theme-Datei wurden noch keine card-mod Blöcke gefunden.</p>
            <div class="cardmod-inner">card-mod-theme, card-mod-card oder card-mod-row</div>
          </article>
        </section>
      `;
    }

    return `
      <section class="ha-big-preview-cards">
        ${blocks.map((block, index) => `
          <article class="ha-big-card cardmod-like">
            <div class="big-card-head">
              <ha-icon icon="mdi:code-braces"></ha-icon>
              <h3>${this.escape(block.title || `card-mod ${index + 1}`)}</h3>
            </div>
            <p>Gefunden in der geladenen Theme-Datei.</p>
            <pre class="cardmod-inner">${this.escape(block.code)}</pre>
          </article>
        `).join("")}
      </section>
    `;
  }

  getAllThemeFields() {
    const found = [];
    const seen = new Set();
    const lines = String(this.editorContent || "").split("\n");

    for (const line of lines) {
      const match = line.match(/^\s{2,}["']?([A-Za-z0-9_-]+)["']?:\s*(.+?)\s*$/);

      if (!match) {
        continue;
      }

      const key = match[1];
      const value = String(match[2] || "").trim();

      if (!key || seen.has(key)) {
        continue;
      }

      if (["modes", "light", "dark"].includes(key)) {
        continue;
      }

      if (!value || value === "|" || value === ">" || value === "{}" || value === "[]") {
        continue;
      }

      seen.add(key);

      found.push({
        key,
        label: key
          .replaceAll("-", " ")
          .replaceAll("_", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      });
    }

    const filter = this.settingsFilter || "all";

    const filterMap = {
      all: [],
      header: ["app-header", "app-toolbar", "header"],
      sidebar: ["sidebar"],
      cards: ["ha-card", "card-background", "paper-card"],
      icons: ["icon", "paper-item-icon", "state-icon"],
      states: ["state-", "success", "warning", "error", "info"],
      switches: ["switch", "toggle"],
      sliders: ["slider"],
      inputs: ["input", "textfield", "select", "mdc-text-field", "mdc-select"],
      mushroom: ["mushroom"],
      bubble: ["bubble"],
      cardmod: ["card-mod", "card_mod"]
    };

    const needles = filterMap[filter] || [];

    const filtered = needles.length
      ? found.filter((item) => needles.some((needle) => item.key.toLowerCase().includes(needle)))
      : found;

    return filtered.sort((a, b) => a.key.localeCompare(b.key));
  }

  renderPreviewColorGroup(groupId) {
    const group = groupId === "all_settings"
      ? {
          id: "all_settings",
          title: "Alle Settings",
          description: "Alle direkt gefundenen Theme-Variablen aus der geladenen YAML-Datei.",
          fields: this.getAllThemeFields()
        }
      : this.colorGroups.find((item) => item.id === groupId);

    if (!group) {
      return "";
    }

    const fields = group.fields.map((field) => {
      const rawValue = this.extractValue(field.key, "#03a9f4");
      const colorValue = this.resolvedColorForPicker(field.key, "#03a9f4");
      const isVar = String(rawValue).trim().toLowerCase().startsWith("var(");
      const alpha = this.getAlphaPercent ? this.getAlphaPercent(rawValue) : 100;

      return `
        <article class="preview-field-card">
          <div class="preview-field-head">
            <div>
              <strong>${this.escape(field.label)}</strong>
              <code>${this.escape(field.key)}</code>
            </div>
            <input
              type="color"
              data-color-key="${this.escape(field.key)}"
              value="${this.escape(colorValue)}"
              ${isVar ? "disabled" : ""}
            >
          </div>

          <input
            class="value-input preview-value-input"
            data-value-key="${this.escape(field.key)}"
            value="${this.escape(rawValue)}"
            spellcheck="false"
          >

          ${this.getAlphaPercent ? `
            <div class="alpha-row preview-alpha-row">
              <span>Transparenz</span>
              <input
                class="alpha-slider"
                type="range"
                min="0"
                max="100"
                value="${alpha}"
                data-alpha-key="${this.escape(field.key)}"
                ${isVar ? "disabled" : ""}
              >
              <strong>${alpha}%</strong>
            </div>
          ` : ""}

          ${isVar ? `<div class="alpha-hint">var(...)-Verknüpfung bleibt geschützt</div>` : ""}
        </article>
      `;
    }).join("");

    const filterHtml = groupId === "all_settings" ? `
      <div class="settings-filter-row">
        ${[
          ["all", "Alle"],
          ["header", "Header"],
          ["sidebar", "Sidebar"],
          ["cards", "Karten"],
          ["icons", "Icons"],
          ["states", "Status"],
          ["switches", "Schalter"],
          ["sliders", "Slider"],
          ["inputs", "Eingabefelder"],
          ["mushroom", "Mushroom"],
          ["bubble", "Bubble"],
          ["cardmod", "card-mod"]
        ].map(([id, label]) => `
          <button class="${this.settingsFilter === id ? "active" : ""}" data-settings-filter="${id}">
            ${label}
          </button>
        `).join("")}
      </div>
    ` : "";

    return `
      <section class="preview-color-editor">
        <div class="preview-color-head">
          <div>
            <h2>${this.escape(group.title)}</h2>
            <p>${this.escape(group.description)}</p>
          </div>
        </div>

        ${filterHtml}

        <div class="preview-color-grid">
          ${fields}
        </div>
      </section>
    `;
  }

  renderPreview() {
    const v = this.getPreviewVars ? this.getPreviewVars() : {
      primary: "#03a9f4",
      accent: "#03a9f4",
      success: "#4caf50",
      warning: "#ff9800",
      error: "#f44336",
      info: "#2196f3",
      bg: "#111111",
      card: "#1c1c1c",
      text: "#e1e1e1",
      secondary: "#9b9b9b",
      sidebar: "#111111",
      border: "rgba(255,255,255,0.12)",
      bubble: "#03a9f4"
    };

    const page = this.previewPage || "overview";

    const menu = [
      ["all_settings", "mdi:format-list-bulleted-square", "Alle Settings"],
      ["basic", "mdi:palette", "Grundfarben"],
      ["backgrounds", "mdi:image-filter-hdr", "Hintergründe"],
      ["textcolors", "mdi:format-color-text", "Textfarben"],
      ["overview", "mdi:view-dashboard-outline", "Übersicht"],
      ["clock_weather", "mdi:weather-partly-cloudy", "Uhr & Wetter"],
      ["standard_cards", "mdi:cards-outline", "Standardkarten"],
      ["switches", "mdi:toggle-switch-outline", "Schalter"],
      ["sliders", "mdi:tune-variant", "Slider"],
      ["mushroom", "mdi:mushroom-outline", "Mushroom"],
      ["bubble", "mdi:circle-multiple-outline", "Bubble Card"],
      ["cardmod", "mdi:code-braces", "card-mod"],
      ["custom_cards", "mdi:card-plus-outline", "Eigene Karten"]
    ];

    const menuHtml = menu.map(([id, icon, label]) => `
      <div class="ha-nav-item ${page === id ? "active" : ""}" data-preview-page="${id}">
        <ha-icon icon="${icon}" class="ha-nav-icon"></ha-icon>
        ${label}
      </div>
    `).join("");

    let cardsHtml = "";

    if (["all_settings", "basic", "backgrounds", "textcolors"].includes(page)) {
      cardsHtml += this.renderPreviewColorGroup(page);
    }

    if (page === "clock_weather" || page === "overview") {
      cardsHtml += `
        <section class="ha-top-preview-cards">
          <article class="ha-clock-card">
            <div class="ha-card-icon">
              <ha-icon icon="mdi:clock-outline"></ha-icon>
            </div>
            <div>
              <div class="ha-clock-label">Uhrzeit</div>
              <div class="ha-clock-big">20:29</div>
              <div class="ha-clock-sub">Home Assistant</div>
            </div>
          </article>

          <article class="ha-weather-simple-card">
            <div class="ha-card-icon weather">
              <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>
            </div>
            <div>
              <div class="ha-clock-label">Wetter</div>
              <div class="ha-weather-temp">20 °C</div>
              <div class="ha-clock-sub">Teilweise bewölkt</div>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "standard_cards") {
      cardsHtml += `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:palette"></ha-icon>
              <h3>Grundfarben</h3>
            </div>
            <div class="ha-status-list big">
              <div><span style="background:var(--p-primary)"></span> Primärfarbe</div>
              <div><span style="background:var(--p-accent)"></span> Akzentfarbe</div>
              <div><span style="background:var(--p-success)"></span> Erfolg</div>
              <div><span style="background:var(--p-warning)"></span> Warnung</div>
              <div><span style="background:var(--p-error)"></span> Fehler</div>
              <div><span style="background:var(--p-info)"></span> Info</div>
            </div>
          </article>

          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:home-assistant"></ha-icon>
              <h3>Standardkarte</h3>
            </div>
            <div class="entity-row">
              <span class="entity-icon"><ha-icon icon="mdi:lightbulb-outline"></ha-icon></span>
              <div><strong>Licht Wohnzimmer</strong><small>Eingeschaltet</small></div>
              <span class="state-text active">An</span>
            </div>
            <div class="entity-row">
              <span class="entity-icon"><ha-icon icon="mdi:thermometer"></ha-icon></span>
              <div><strong>Temperatur</strong><small>Sensor</small></div>
              <span class="state-text">21,4 °C</span>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "switches") {
      cardsHtml += `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:toggle-switch-outline"></ha-icon>
              <h3>Schalter</h3>
            </div>
            <div class="ha-switch-row"><span>Standard aus</span><i></i></div>
            <div class="ha-switch-row on"><span>Standard an</span><i></i></div>
            <div class="ha-switch-row disabled"><span>Deaktiviert</span><i></i></div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "sliders") {
      cardsHtml += `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:tune-variant"></ha-icon>
              <h3>Slider</h3>
            </div>
            <div class="ha-slider-row">
              <span>Helligkeit</span>
              <div class="ha-slider"><b style="width:72%"></b></div>
            </div>
            <div class="ha-slider-row">
              <span>Lautstärke</span>
              <div class="ha-slider"><b style="width:45%"></b></div>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "mushroom") {
      cardsHtml += `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card mushroom-like">
            <div class="big-card-head">
              <ha-icon icon="mdi:mushroom-outline"></ha-icon>
              <h3>Mushroom</h3>
            </div>
            <div class="ha-mush-line">
              <span><ha-icon icon="mdi:lightbulb-on-outline"></ha-icon></span>
              <div><strong>Mushroom Light</strong><small>Helligkeit 72 %</small></div>
            </div>
            <div class="ha-mush-chips">
              <b>Wohnzimmer</b><b>Auto</b><b>Szene</b>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "bubble") {
      cardsHtml += `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card bubble-like">
            <div class="big-card-head">
              <ha-icon icon="mdi:circle-multiple-outline"></ha-icon>
              <h3>Bubble Card</h3>
            </div>
            <div class="ha-mush-line">
              <span><ha-icon icon="mdi:flash"></ha-icon></span>
              <div><strong>Bubble Button</strong><small>Aktiv · 23 W</small></div>
            </div>
            <div class="ha-mush-chips">
              <b>Ein</b><b>50 %</b><b>Timer</b>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "cardmod") {
      cardsHtml += this.renderCardModPreview();
    }

    if (page === "custom_cards") {
      cardsHtml += `
        <section class="ha-big-preview-cards">
          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:card-plus-outline"></ha-icon>
              <h3>Eigene Karte 1</h3>
            </div>
            <p>Platzhalter für frei definierbare Vorschau-Karten.</p>
          </article>

          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:lightbulb-group-outline"></ha-icon>
              <h3>Eigene Karte 2</h3>
            </div>
            <p>Hier können später eigene Titel, Icons und Zustände rein.</p>
          </article>

          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:home-thermometer-outline"></ha-icon>
              <h3>Eigene Karte 3</h3>
            </div>
            <p>Diese Karten sind nur für die Generator-Vorschau.</p>
          </article>

          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:widgets-outline"></ha-icon>
              <h3>Eigene Karte 4</h3>
            </div>
            <p>Sie verändern kein echtes Lovelace-Dashboard.</p>
          </article>
        </section>
      `;
    }

    return `
      <div class="ha-preview" style="
        --p-primary:${v.primary};
        --p-accent:${v.accent};
        --p-success:${v.success};
        --p-warning:${v.warning};
        --p-error:${v.error};
        --p-info:${v.info};
        --p-bg:${v.bg};
        --p-card:${v.card};
        --p-text:${v.text};
        --p-secondary:${v.secondary};
        --p-sidebar:${v.sidebar};
        --p-border:${v.border};
        --p-bubble:${v.bubble};
      ">
        <aside class="ha-side">
          <div class="ha-side-title">
            <ha-icon class="ha-menu-icon" icon="mdi:menu"></ha-icon>
            <span>Home Assistant</span>
          </div>

          <nav class="ha-nav">
            ${menuHtml}
          </nav>

          <div class="ha-side-bottom">
            <div class="ha-nav-item"><ha-icon icon="mdi:cog" class="ha-nav-icon"></ha-icon> Einstellungen</div>
            <div class="ha-nav-item"><ha-icon icon="mdi:bell" class="ha-nav-icon"></ha-icon> Benachrichtigungen</div>
            <div class="ha-user-row">
              <div class="ha-user">${this.escape(this.getUserInitial ? this.getUserInitial() : "B")}</div>
              <strong>${this.escape(this.getUserName ? this.getUserName() : "Benutzer")}</strong>
            </div>
          </div>
        </aside>

        <section class="ha-main">
          <header class="ha-topbar">
            <div class="ha-top-left">
              <ha-icon class="ha-top-icon active" icon="mdi:home"></ha-icon>
              <ha-icon class="ha-top-icon" icon="mdi:cog"></ha-icon>
              <ha-icon class="ha-top-icon" icon="mdi:pencil"></ha-icon>
            </div>

            <div class="ha-top-right">
              <ha-icon icon="mdi:plus"></ha-icon>
              <ha-icon icon="mdi:magnify"></ha-icon>
              <ha-icon class="ha-chat" icon="mdi:message-outline"></ha-icon>
              <ha-icon icon="mdi:pencil"></ha-icon>
            </div>
          </header>

          <div class="ha-content clean-preview">
            ${cardsHtml}
          </div>
        </section>
      </div>
    `;
  }


  captureEditorState() {
    const active = this.shadowRoot?.activeElement;
    const editor = this.shadowRoot?.getElementById("editor");

    this._activeElementId = active?.id || "";

    if (editor) {
      this._editorScrollTop = editor.scrollTop || 0;
      this._editorSelectionStart = editor.selectionStart || 0;
      this._editorSelectionEnd = editor.selectionEnd || 0;
    }
  }

  restoreEditorState() {
    const editor = this.shadowRoot?.getElementById("editor");

    if (!editor) {
      return;
    }

    const scrollTop = this._editorScrollTop || 0;
    const start = this._editorSelectionStart || 0;
    const end = this._editorSelectionEnd || start;
    const wasEditorActive = this._activeElementId === "editor";

    requestAnimationFrame(() => {
      editor.scrollTop = scrollTop;

      if (wasEditorActive) {
        editor.focus();
        try {
          editor.setSelectionRange(start, end);
        } catch (err) {
          // ignore invalid selection range
        }
      }
    });
  }

  updateStatusOnly() {
    const status = this.shadowRoot?.querySelector(".status");
    const loadButton = this.shadowRoot?.getElementById("load-file");
    const overwriteButton = this.shadowRoot?.getElementById("overwrite");

    if (status) {
      status.textContent = this.status;
    }

    if (loadButton) {
      loadButton.disabled = this.loading || !this.selectedFile;
    }

    if (overwriteButton) {
      overwriteButton.disabled = this.loading || !this.selectedFile;
    }
  }

  safeRender() {
    const active = this.shadowRoot?.activeElement;

    if (this._editorIsFocused && active?.id === "editor") {
      this.updateStatusOnly?.();
      return;
    }

    this.render();
  }

  render() {
    this.captureEditorState();

    const options = [
      `<option value="">Theme-Datei auswählen</option>`,
      ...this.files.map((file) => {
        const selected = file === this.selectedFile ? "selected" : "";
        return `<option value="${this.escape(file)}" ${selected}>${this.escape(file)}</option>`;
      }),
    ].join("");

    const contentPanel = this.activeView === "preview"
      ? this.renderPreview()
      : `<textarea id="editor" spellcheck="false">${this.escape(this.editorContent)}</textarea>`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          min-height: 100vh;
          padding: 28px;
          background: var(--primary-background-color, #111827);
          color: var(--primary-text-color, #ffffff);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .card {
          max-width: 1420px;
          margin: 0 auto;
          padding: 24px;
          border-radius: 24px;
          background: var(--card-background-color, #1f2937);
          border: 1px solid var(--ha-card-border-color, rgba(255,255,255,0.14));
          box-shadow: var(--ha-card-box-shadow, none);
        }

        .header {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          margin-bottom: 18px;
        }

        .header-main {
          min-width: 0;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .logo {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 35%),
            linear-gradient(145deg, #3c8ae9, #7c3aed);
          box-shadow: 0 12px 30px rgba(60,138,233,0.35);
          flex: 0 0 auto;
        }

        .logo svg {
          width: 34px;
          height: 34px;
          fill: white;
        }

        h1 {
          margin: 0;
          font-size: 34px;
          line-height: 1.15;
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }

        .version-pill {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          background: #3c8ae9;
          border-radius: 999px;
          padding: 4px 9px;
          line-height: 1;
        }

        .controls {
          display: grid;
          grid-template-columns: minmax(240px, 420px) repeat(5, auto);
          gap: 8px;
          align-items: center;
          width: 100%;
        }

        select {
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.18);
          background: #111827;
          color: #f9fafb;
          padding: 0 12px;
          font-size: 13px;
          outline: none;
          min-width: 0;
        }

        button {
          height: 38px;
          border-radius: 999px;
          border: 1px solid #3c8ae9;
          background: #3c8ae9;
          color: white;
          padding: 0 14px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }

        button.secondary {
          background: #374151;
          border-color: #4b5563;
        }

        button.danger {
          background: #b91c1c;
          border-color: #ef4444;
        }

        button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .workspace {
          display: grid;
          grid-template-columns: 340px minmax(0, 1fr);
          gap: 18px;
          margin-top: 18px;
          align-items: start;
        }

        .left-panel,
        .right-panel {
          min-width: 0;
        }

        .sticky-box {
          position: sticky;
          top: 18px;
        }

        .box {
          padding: 14px;
          border-radius: 18px;
          background: rgba(0,0,0,0.24);
          border: 1px solid rgba(255,255,255,0.10);
        }

        h2 {
          margin: 0;
          font-size: 18px;
        }

        .field-group {
          border-radius: 18px;
          background: transparent;
          border: 0;
          overflow: visible;
        }

        .group-head {
          width: 100%;
          min-height: 86px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          display: grid;
          grid-template-columns: 1fr 42px;
          grid-template-areas:
            "title arrow"
            "swatches swatches";
          gap: 10px;
          align-items: center;
          padding: 16px;
          color: var(--primary-text-color, #ffffff);
          text-align: left;
        }

        .group-title {
          grid-area: title;
          font-size: 18px;
          font-weight: 900;
          line-height: 1.2;
        }

        .group-swatches {
          grid-area: swatches;
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 2px;
          max-width: 100%;
          overflow: visible;
        }

        .mini-swatch {
          width: 17px;
          height: 17px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.45);
          flex: 0 0 auto;
        }

        .group-arrow {
          grid-area: arrow;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-size: 24px;
          font-weight: 900;
          opacity: 0.95;
          justify-self: end;
          background: rgba(0,0,0,0.12);
        }

        .hint {
          margin: 0 14px 14px 14px;
          font-size: 13px;
          color: var(--secondary-text-color, #9ca3af);
          line-height: 1.45;
        }

        .color-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 0 12px 12px 12px;
        }

        .color-field {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          align-items: center;
          padding: 11px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .color-field span {
          font-weight: 700;
          font-size: 13px;
        }

        .color-field code {
          grid-column: 1 / -1;
          color: #9ca3af;
          font-size: 11px;
          background: transparent;
          padding: 0;
          margin: 0;
        }

        input[type="color"] {
          width: 42px;
          height: 34px;
          border: none;
          border-radius: 10px;
          background: transparent;
          cursor: pointer;
        }

        .value-input {
          grid-column: 1 / -1;
          width: 100%;
          height: 32px;
          box-sizing: border-box;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.18);
          color: var(--primary-text-color, #ffffff);
          padding: 0 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 12px;
          outline: none;
        }

        .value-input:focus {
          border-color: #3c8ae9;
          box-shadow: 0 0 0 2px rgba(60,138,233,0.22);
        }

        .view-switch {
          display: inline-grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          margin: 0;
          padding: 4px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          width: fit-content;
        }

        .view-switch button {
          height: 38px;
          min-width: 110px;
          border-radius: 999px;
          border: 0;
          background: transparent;
          color: var(--secondary-text-color, #9ca3af);
          padding: 0 18px;
          font-weight: 800;
          cursor: pointer;
        }

        .view-switch button.active {
          background: #3c8ae9;
          color: white;
          box-shadow: 0 8px 18px rgba(60,138,233,0.28);
        }

        .box-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 12px;
          min-height: 46px;
        }

        .inline-status {
          color: var(--secondary-text-color, #9ca3af);
          font-size: 13px;
          font-weight: 600;
          text-align: right;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
        }

        textarea {
          width: 100%;
          min-height: 720px;
          box-sizing: border-box;
          resize: vertical;
          border: 1px solid rgba(255,255,255,0.12);
          outline: none;
          border-radius: 18px;
          padding: 14px;
          background: #0b1220;
          color: #e5e7eb;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 14px;
          line-height: 1.45;
          tab-size: 2;
        }

        .preview {
          background: var(--p-bg);
          color: var(--p-text);
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid var(--p-border);
          min-height: 720px;
        }

        .preview-shell {
          display: grid;
          grid-template-columns: 220px 1fr;
          min-height: 720px;
        }

        .preview-sidebar {
          background: var(--p-sidebar);
          border-right: 1px solid var(--p-border);
          padding: 15px;
        }

        .preview-logo {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--p-primary);
          color: white;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .preview-nav {
          padding: 12px 14px;
          border-radius: 14px;
          margin-bottom: 8px;
          color: var(--p-secondary);
        }

        .preview-nav.active {
          background: color-mix(in srgb, var(--p-primary) 18%, transparent);
          color: var(--p-primary);
          font-weight: 800;
        }

        .preview-main {
          padding: 24px;
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 16px;
          margin-bottom: 20px;
        }

        .preview-header h2 {
          margin: 0;
          font-size: 30px;
        }

        .preview-header span {
          color: var(--p-secondary);
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
        }

        .preview-card {
          background: var(--p-card);
          color: var(--p-text);
          border: 1px solid var(--p-border);
          border-radius: 20px;
          padding: 14px;
          min-height: 150px;
          box-shadow: 0 14px 32px rgba(0,0,0,0.20);
        }

        .preview-card h3 {
          margin: 0 0 10px 0;
        }

        .preview-card p,
        .preview-card small {
          color: var(--p-secondary);
        }

        .preview-state,
        .status-row {
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--p-text);
        }

        .dot,
        .status-row span {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: var(--p-accent);
          box-shadow: 0 0 18px var(--p-accent);
        }

        .mush-row,
        .bubble-line {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mush-icon,
        .bubble-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: color-mix(in srgb, var(--p-primary) 18%, transparent);
        }

        .mush-chip-row,
        .bubble-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .mush-chip-row span,
        .bubble-buttons span {
          padding: 8px 12px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-primary) 14%, transparent);
          color: var(--p-text);
          font-size: 12px;
          font-weight: 700;
        }

        .bubble-card {
          border-color: var(--p-bubble);
        }

        .cardmod-card {
          border-style: dashed;
        }

        .cardmod-inner {
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 260px;
          overflow: auto;
          margin-top: 18px;
          padding: 12px;
          border-radius: 14px;
          background: rgba(0,0,0,0.22);
          color: var(--p-secondary);
          font-family: monospace;
        }

        .footer-code {
          display: block;
          margin-top: 18px;
          padding: 14px;
          border-radius: 14px;
          background: rgba(0,0,0,0.35);
          color: #d1d5db;
          white-space: pre-wrap;
        }


        /* Home Assistant nahe Vorschau */
        .ha-preview {
          min-height: 720px;
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          background: var(--p-bg);
          color: var(--p-text);
          border: 1px solid var(--p-border);
          border-radius: 20px;
          overflow: hidden;
        }

        .ha-side {
          background: var(--p-sidebar);
          border-right: 1px solid var(--p-border);
          display: flex;
          flex-direction: column;
          min-height: 720px;
        }

        .ha-side-title {
          height: 54px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          font-size: 18px;
          border-bottom: 1px solid var(--p-border);
        }

        .ha-menu-icon {
          font-size: 18px;
          opacity: 0.75;
        }

        .ha-nav {
          padding: 10px 6px;
        }

        .ha-nav-item {
          height: 38px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 12px;
          border-radius: 6px;
          color: var(--p-text);
          font-weight: 650;
          font-size: 13px;
        }

        .ha-nav-item span,
        .ha-nav-item .ha-nav-icon {
          width: 22px;
          text-align: center;
          opacity: 0.75;
          color: currentColor;
          --mdc-icon-size: 20px;
          flex: 0 0 22px;
        }

        .ha-menu-icon {
          color: currentColor;
          opacity: 0.75;
          --mdc-icon-size: 22px;
        }

        .ha-topbar ha-icon {
          color: white;
          --mdc-icon-size: 20px;
        }

        .ha-nav-item.active {
          background: color-mix(in srgb, var(--p-primary) 16%, transparent);
          color: var(--p-primary);
        }

        .ha-side-bottom {
          margin-top: auto;
          padding: 10px 6px 14px 6px;
        }

        .ha-user-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 10px 0 0 8px;
          color: var(--p-text);
        }

        .ha-user {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: color-mix(in srgb, var(--p-primary) 28%, white);
          color: var(--p-text);
          font-weight: 800;
          flex: 0 0 auto;
        }

        .ha-user-row strong {
          font-size: 13px;
          font-weight: 800;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ha-main {
          background: var(--p-bg);
          min-width: 0;
        }

        .ha-topbar {
          height: 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--p-primary);
          color: white;
          padding: 0 16px;
        }

        .ha-top-left,
        .ha-top-right {
          display: flex;
          align-items: center;
          gap: 20px;
          font-weight: 800;
        }

        .ha-top-icon.active,
        .ha-chat {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.14);
        }

        .ha-content {
          padding: 22px;
        }

        .ha-chips {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .ha-chip {
          height: 30px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          border-radius: 999px;
          background: var(--p-card);
          border: 1px solid var(--p-border);
          color: var(--p-text);
          font-size: 12px;
          font-weight: 700;
        }

        .ha-chip.success { color: var(--p-success); }
        .ha-chip.error { color: var(--p-error); }
        .ha-chip.info { color: var(--p-info); }
        .ha-chip.active { color: var(--p-primary); }

        .ha-dashboard-grid {
          display: grid;
          grid-template-columns: minmax(320px, 520px) minmax(180px, 280px);
          gap: 12px;
          justify-content: center;
          align-items: start;
        }

        .ha-weather-card {
          background: var(--p-card);
          border: 1px solid var(--p-border);
          border-radius: 12px;
          min-height: 260px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
        }

        .ha-weather-icon {
          color: color-mix(in srgb, var(--p-primary) 55%, transparent);
          align-self: center;
          justify-self: center;
          --mdc-icon-size: 86px;
        }

        .ha-weather-info {
          text-align: center;
        }

        .ha-weather-sub {
          color: var(--p-secondary);
          font-size: 13px;
        }

        .ha-clock {
          font-size: 46px;
          line-height: 1.05;
          margin-top: 6px;
        }

        .ha-date {
          color: var(--p-secondary);
          font-size: 13px;
        }

        .ha-forecast {
          grid-column: 1 / -1;
          display: grid;
          gap: 8px;
        }

        .ha-forecast div {
          display: grid;
          grid-template-columns: 28px 44px 1fr 44px;
          gap: 8px;
          align-items: center;
          font-size: 12px;
        }

        .ha-forecast small {
          color: var(--p-secondary);
        }

        .ha-forecast b {
          height: 18px;
          border-radius: 999px;
          background:
            linear-gradient(90deg, color-mix(in srgb, var(--p-success) 40%, transparent), var(--p-warning));
          width: var(--bar);
          display: block;
        }

        .ha-right-stack {
          display: grid;
          gap: 10px;
        }

        .ha-mini-card {
          display: flex;
          gap: 12px;
          align-items: center;
          background: var(--p-card);
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 10px 14px;
        }

        .ha-mini-card.active {
          border-color: var(--p-border);
        }

        .ha-mini-card small,
        .ha-room-card small,
        .ha-mush-line small {
          display: block;
          color: var(--p-secondary);
          font-size: 11px;
        }

        .ha-round-icon {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: color-mix(in srgb, var(--p-primary) 12%, transparent);
        }

        .ha-round-icon.dark {
          background: #4b5563;
          color: white;
        }

        .ha-rooms {
          max-width: 820px;
          margin: 18px auto 0 auto;
        }

        .ha-section-title {
          display: flex;
          gap: 14px;
          align-items: center;
          margin: 0 0 14px 8px;
        }

        .ha-room-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(160px, 1fr));
          gap: 10px;
        }

        .ha-room-card {
          min-height: 44px;
          border-radius: 999px;
          background: var(--p-card);
          border: 1px solid var(--p-border);
          display: grid;
          grid-template-columns: 38px 1fr;
          align-items: center;
          gap: 10px;
          padding: 6px 14px 6px 6px;
          font-size: 12px;
        }

        .ha-room-card span {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.45);
        }

        .ha-room-card.active span {
          color: var(--p-error);
        }

        .ha-theme-samples {
          max-width: 980px;
          margin: 22px auto 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(160px, 1fr));
          gap: 12px;
        }

        .ha-sample-card {
          background: var(--p-card);
          border: 1px solid var(--p-border);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }

        .ha-sample-card h3 {
          margin: 0 0 10px 0;
        }

        .ha-status-list {
          display: grid;
          gap: 7px;
        }

        .ha-status-list div {
          display: flex;
          gap: 8px;
          align-items: center;
          font-size: 12px;
        }

        .ha-status-list span {
          width: 12px;
          height: 12px;
          border-radius: 999px;
        }

        .ha-switch-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;
          font-size: 12px;
        }

        .ha-switch-row i {
          width: 42px;
          height: 24px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-secondary) 40%, transparent);
          position: relative;
        }

        .ha-switch-row i::after {
          content: "";
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: white;
          position: absolute;
          left: 2px;
          top: 2px;
        }

        .ha-switch-row.on i {
          background: var(--p-primary);
        }

        .ha-switch-row.on i::after {
          left: 20px;
        }

        .ha-switch-row.disabled {
          opacity: 0.45;
        }

        .ha-mush-line {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .ha-mush-line > span {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: color-mix(in srgb, var(--p-primary) 15%, transparent);
        }

        .ha-mush-chips {
          display: flex;
          gap: 8px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .ha-mush-chips b {
          padding: 7px 10px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-primary) 13%, transparent);
          font-size: 11px;
        }

        .bubble-like {
          border-color: var(--p-bubble);
        }



        /* v1.8.4 reduzierte, neutrale HA-Vorschau */
        .clean-preview {
          padding: 28px;
        }

        .ha-top-preview-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(220px, 1fr));
          gap: 18px;
          max-width: 920px;
          margin: 0 auto 22px auto;
        }

        .ha-clock-card,
        .ha-weather-simple-card {
          min-height: 150px;
          background: var(--p-card);
          border: 1px solid var(--p-border);
          border-radius: 22px;
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 18px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }

        .ha-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          background: color-mix(in srgb, var(--p-primary) 15%, transparent);
          color: var(--p-primary);
          flex: 0 0 auto;
        }

        .ha-card-icon ha-icon {
          --mdc-icon-size: 38px;
        }

        .ha-card-icon.weather {
          color: var(--p-info);
        }

        .ha-clock-label {
          color: var(--p-secondary);
          font-size: 14px;
          font-weight: 700;
        }

        .ha-clock-big,
        .ha-weather-temp {
          color: var(--p-text);
          font-size: 46px;
          line-height: 1;
          font-weight: 500;
          margin: 4px 0;
        }

        .ha-clock-sub {
          color: var(--p-secondary);
          font-size: 13px;
        }

        .ha-big-preview-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(260px, 1fr));
          gap: 18px;
          max-width: 920px;
          margin: 0 auto;
        }

        .ha-big-card {
          min-height: 220px;
          background: var(--p-card);
          border: 1px solid var(--p-border);
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 14px 32px rgba(0,0,0,0.10);
        }

        .big-card-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .big-card-head h3 {
          margin: 0;
          font-size: 20px;
        }

        .big-card-head ha-icon {
          color: var(--p-primary);
          --mdc-icon-size: 26px;
        }

        .ha-status-list.big {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ha-status-list.big div {
          font-size: 14px;
          font-weight: 650;
        }

        .ha-status-list.big span {
          width: 16px;
          height: 16px;
        }

        .entity-row {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr) auto;
          gap: 10px;
          align-items: center;
          padding: 10px 0;
          border-top: 1px solid color-mix(in srgb, var(--p-border) 55%, transparent);
        }

        .entity-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-primary) 12%, transparent);
        }

        .state-text {
          color: var(--p-secondary);
          font-size: 12px;
          font-weight: 800;
        }

        .state-text.active {
          color: var(--p-primary);
        }

        .ha-slider-row {
          display: grid;
          gap: 8px;
          margin: 12px 0;
          font-size: 12px;
          font-weight: 700;
        }

        .ha-slider {
          height: 18px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-secondary) 18%, transparent);
          overflow: hidden;
        }

        .ha-slider b {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--p-primary), var(--p-accent));
        }

        .cardmod-like {
          border-style: dashed;
        }


        .group-card,
        .color-group,
        .editor-group,
        .section-card {
          margin-bottom: 8px;
        }

        .group-header,
        .color-group-header,
        .section-header {
          min-height: 58px;
          padding-top: 12px;
          padding-bottom: 12px;
        }

        .group-header h2,
        .color-group-header h2,
        .section-header h2 {
          font-size: 18px;
          margin: 0;
        }

        .group-body,
        .color-group-body,
        .section-body {
          padding-top: 10px;
        }

        .mini-swatch {
          width: 17px;
          height: 17px;
          margin-right: 5px;
        }


        .alpha-row {
          display: grid;
          grid-template-columns: auto minmax(80px, 1fr) 42px;
          gap: 10px;
          align-items: center;
          margin-top: 10px;
          font-size: 12px;
          color: var(--secondary-text-color, #aeb7c8);
        }

        .alpha-row input[type="range"] {
          width: 100%;
          accent-color: var(--primary-color, #03a9f4);
        }

        .alpha-row strong {
          text-align: right;
          color: var(--primary-text-color, #ffffff);
          font-size: 12px;
        }

        .alpha-hint {
          margin-top: 6px;
          font-size: 11px;
          color: var(--secondary-text-color, #aeb7c8);
          opacity: 0.8;
        }

        .alpha-slider:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }


        /* v1.11.5 - linke Gruppen sauber trennen */
        .left-panel,
        .settings-panel,
        .controls-panel,
        .color-panel {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .group-card,
        .color-group,
        .editor-group,
        .section-card {
          position: relative;
          overflow: hidden;
          margin-bottom: 0 !important;
          border-radius: 16px;
        }

        .group-header,
        .color-group-header,
        .section-header {
          position: relative;
          min-height: 64px;
          box-sizing: border-box;
          padding: 14px 16px 12px 16px !important;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 38px;
          gap: 10px;
          align-items: center;
        }

        .group-header h2,
        .color-group-header h2,
        .section-header h2 {
          margin: 0;
          line-height: 1.15;
          font-size: 19px;
        }

        .group-swatches,
        .mini-swatches,
        .swatch-row,
        .color-preview-row {
          grid-column: 1 / -1;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 8px;
          max-width: 100%;
          overflow: hidden;
        }

        .mini-swatch {
          flex: 0 0 auto;
          width: 18px !important;
          height: 18px !important;
          margin: 0 !important;
          box-sizing: border-box;
        }

        .group-body,
        .color-group-body,
        .section-body {
          padding: 10px 12px 14px 12px !important;
          box-sizing: border-box;
        }

        .collapse-button,
        .group-toggle,
        .section-toggle {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 999px;
          align-self: start;
          margin-top: 0;
        }

        .color-field,
        .field-card {
          margin-bottom: 10px;
        }


        /* v1.11.5 - Vollbreite Vorschau, Farbfelder im Vorschaufenster */
        .workbench,
        .editor-layout,
        .main-layout,
        .content-grid,
        .main-grid {
          grid-template-columns: 1fr !important;
        }

        .left-column,
        .left-panel,
        .groups-column,
        .settings-column,
        .color-sidebar,
        .field-sidebar,
        .controls-left,
        .generator-left {
          display: none !important;
        }

        .right-column,
        .right-panel,
        .preview-column,
        .editor-column,
        .generator-right,
        .panel-right {
          grid-column: 1 / -1 !important;
          width: 100% !important;
          max-width: none !important;
        }

        .preview-color-editor {
          margin-bottom: 18px;
          padding: 18px;
          border-radius: 22px;
          background: var(--p-card);
          border: 1px solid var(--p-border);
        }

        .preview-color-head h2 {
          margin: 0;
          font-size: 26px;
        }

        .preview-color-head p {
          margin: 6px 0 0 0;
          color: var(--p-secondary);
        }

        .preview-color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 14px;
          margin-top: 16px;
        }

        .preview-field-card {
          padding: 14px;
          border-radius: 16px;
          background: color-mix(in srgb, var(--p-bg) 55%, transparent);
          border: 1px solid var(--p-border);
        }

        .preview-field-head {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 48px;
          gap: 12px;
          align-items: center;
          margin-bottom: 10px;
        }

        .preview-field-head strong {
          display: block;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .preview-field-head code {
          display: block;
          color: var(--p-secondary);
          font-size: 11px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .preview-field-head input[type="color"] {
          width: 46px;
          height: 34px;
          padding: 0;
          border: 0;
          background: transparent;
        }

        .preview-value-input {
          width: 100%;
        }

        .preview-alpha-row {
          margin-top: 10px;
        }

        .ha-content.clean-preview {
          width: 100%;
        }

        .ha-preview {
          width: 100%;
        }


        /* v1.11.5 - Alle Settings */
        .preview-color-grid {
          grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
        }

        .ha-nav {
          display: grid;
          gap: 4px;
        }

        .ha-nav-item {
          min-height: 34px;
          line-height: 1.15;
        }


        /* v1.11.5 - Filter fuer Alle Settings */
        .settings-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0 18px 0;
        }

        .settings-filter-row button {
          height: 32px;
          border-radius: 999px;
          padding: 0 12px;
          border: 1px solid var(--p-border);
          background: color-mix(in srgb, var(--p-bg) 60%, transparent);
          color: var(--p-text);
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .settings-filter-row button.active {
          background: var(--p-primary);
          border-color: var(--p-primary);
          color: #ffffff;
        }

        @media (max-width: 1050px) {
          .controls {
            grid-template-columns: 1fr 1fr;
          }

          .header {
            grid-template-columns: 1fr;
          }

          .workspace {
            grid-template-columns: 1fr;
          }

          .sticky-box {
            position: static;
          }

          .preview-shell,
          .ha-preview,
          .ha-dashboard-grid,
          .ha-theme-samples {
            grid-template-columns: 1fr;
          }

          .preview-sidebar {
            border-right: none;
            border-bottom: 1px solid var(--p-border);
          }

          .ha-side {
            min-height: auto;
            border-right: none;
            border-bottom: 1px solid var(--p-border);
          }

          .ha-room-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 720px) {
          :host {
            padding: 16px;
          }

          .controls {
            grid-template-columns: 1fr;
          }

          button {
            width: 100%;
          }

          .box-head {
            align-items: stretch;
            flex-direction: column;
          }

          .inline-status {
            text-align: left;
            white-space: normal;
          }

          .view-switch {
            width: 100%;
          }

          .view-switch button {
            width: auto;
            min-width: 0;
          }
        }
      </style>

      <div class="card">
        <div class="header">
          <div class="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M19.54 5.23L18.12 3.81L13.4 8.53L11.99 7.12L10.58 8.53L15.17 13.12L16.58 11.71L14.82 9.95L19.54 5.23M4 4H9.5C10.33 4 11 4.67 11 5.5V7.09L9 9.09V6H5V19H18V14.91L20 12.91V19.5C20 20.33 19.33 21 18.5 21H4.5C3.67 21 3 19.33 3 19.5V4.5C3 4.22 3.22 4 3.5 4H4M7 11H12.09L10.09 13H7V11M7 15H14V17H7V15Z"/>
            </svg>
          </div>

          <div class="header-main">
            <div class="title-row">
              <h1>Theme Generator <span class="version-pill">v1.11.5</span></h1>
            </div>

            <div class="controls">
              <select id="theme-select" ${this.loading ? "disabled" : ""}>
                ${options}
              </select>

              <button id="refresh" ${this.loading ? "disabled" : ""}>Aktualisieren</button>
              <button class="secondary" id="load-file" ${this.loading || !this.selectedFile ? "disabled" : ""}>Datei laden</button>
              <button class="secondary" id="default-theme" ${this.loading ? "disabled" : ""}>Standard laden</button>
              <button id="save-version" ${this.loading ? "disabled" : ""}>Neue Version</button>
              <button class="danger" id="overwrite" ${this.loading || !this.selectedFile ? "disabled" : ""}>Überschreiben</button>
            </div>
          </div>
        </div>

        <div class="workspace">
          <aside class="left-panel">
            <div class="box sticky-box">
              ${this.renderColorGroups()}
            </div>
          </aside>

          <section class="right-panel">
            <div class="box">
              <div class="box-head">
                <div class="view-switch">
                  <button class="${this.activeView === "editor" ? "active" : ""}" id="view-editor">Editor</button>
                  <button class="${this.activeView === "preview" ? "active" : ""}" id="view-preview">Vorschau</button>
                </div>
                <div class="inline-status">${this.escape(this.status)}</div>
              </div>
              ${contentPanel}
            </div>
          </section>
        </div>
      </div>
    `;

    this.shadowRoot.querySelectorAll("[data-settings-filter]").forEach((item) => {
      item.addEventListener("click", (event) => {
        this.settingsFilter = event.currentTarget.dataset.settingsFilter || "all";
        this.previewPage = "all_settings";
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-preview-page]").forEach((item) => {
      item.addEventListener("click", (event) => {
        this.setPreviewPage(event.currentTarget.dataset.previewPage);
      });
    });

    this.shadowRoot.getElementById("refresh").addEventListener("click", () => this.loadThemeFiles());
    this.shadowRoot.getElementById("load-file").addEventListener("click", () => this.loadSelectedTheme());
    this.shadowRoot.getElementById("default-theme").addEventListener("click", () => this.resetDefaultTheme());
    this.shadowRoot.getElementById("save-version").addEventListener("click", () => this.saveAsVersion());
    this.shadowRoot.getElementById("overwrite").addEventListener("click", () => this.overwriteSelectedTheme());
    this.shadowRoot.getElementById("view-editor").addEventListener("click", () => this.setView("editor"));
    this.shadowRoot.getElementById("view-preview").addEventListener("click", () => this.setView("preview"));

    this.shadowRoot.querySelectorAll("[data-toggle-group]").forEach((button) => {
      button.addEventListener("click", (event) => {
        this.toggleGroup(event.currentTarget.dataset.toggleGroup);
      });
    });

    this.shadowRoot.getElementById("theme-select").addEventListener("change", (event) => {
      this.selectedFile = event.target.value;
      this.status = this.selectedFile
        ? `Ausgewählt: ${this.selectedFile}`
        : "Keine Theme-Datei ausgewählt.";
      this.updateStatusOnly();
    });

    const editor = this.shadowRoot.getElementById("editor");

    if (editor) {
      editor.addEventListener("input", (event) => {
        this.editorContent = event.target.value;
      });
    }

    this.shadowRoot.querySelectorAll("input[type='color'][data-color-key]").forEach((input) => {
      input.addEventListener("input", (event) => {
        this.setYamlColor(event.target.dataset.colorKey, event.target.value);
      });
    });

    this.shadowRoot.querySelectorAll(".value-input[data-value-key]").forEach((input) => {
      input.addEventListener("change", (event) => {
        this.setYamlValue(event.target.dataset.valueKey, event.target.value);
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          this.setYamlValue(event.target.dataset.valueKey, event.target.value);
        }
      });
    });

    if (this.pendingScrollKey && this.activeView === "editor") {
      const key = this.pendingScrollKey;
      this.pendingScrollKey = "";
      setTimeout(() => this.scrollEditorToKey(key), 0);
    }
  }

  renderFatalError(err) {
    const message = err?.stack || err?.message || String(err);

    const safeMessage = String(message)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          padding: 28px;
          box-sizing: border-box;
          background: #111827;
          color: #ffffff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .error-card {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px;
          border-radius: 22px;
          background: #1f2937;
          border: 1px solid rgba(239,68,68,0.55);
        }

        h1 {
          margin: 0 0 12px 0;
          color: #f87171;
        }

        p {
          color: #d1d5db;
        }

        pre {
          white-space: pre-wrap;
          overflow: auto;
          padding: 16px;
          border-radius: 14px;
          background: #020617;
          color: #fca5a5;
          font-size: 13px;
        }
      </style>

      <div class="error-card">
        <h1>Theme Generator Frontend-Fehler</h1>
        <p>Die Oberfläche ist geladen, aber beim Rendern ist ein JavaScript-Fehler aufgetreten.</p>
        <pre>${safeMessage}</pre>
      </div>
    `;
  }

  escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  escape(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }
}

if (!customElements.get("theme-generator-panel-v2")) {
  customElements.define("theme-generator-panel-v2", ThemeGeneratorPanel);
}
