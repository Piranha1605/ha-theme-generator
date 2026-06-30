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
    this.status = "Panel geladen. Theme-Dateien werden gesucht …";
  }

  set hass(hass) {
    this._hass = hass;

    if (!this.initialized) {
      this.initialized = true;
      this.loadThemeFiles();
    }

    this.render();
  }

  connectedCallback() {
    this.render();
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
    this.render();

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

  async saveAsVersion() {
    const baseFile = this.selectedFile || "ha_standard_basis.yaml";

    this.loading = true;
    this.status = `Neue Version von ${baseFile} wird gespeichert …`;
    this.render();

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
      this.render();
      return;
    }

    const ok = window.confirm(
      `Soll die Datei "${this.selectedFile}" wirklich überschrieben werden?`
    );

    if (!ok) {
      this.status = "Überschreiben abgebrochen.";
      this.render();
      return;
    }

    this.loading = true;
    this.status = `${this.selectedFile} wird überschrieben …`;
    this.render();

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

  async loadSelectedTheme() {
    if (!this.selectedFile) {
      this.status = "Bitte zuerst eine Theme-Datei auswählen.";
      this.render();
      return;
    }

    this.loading = true;
    this.status = `${this.selectedFile} wird geladen …`;
    this.render();

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

  resetDefaultTheme() {
    this.selectedFile = "";
    this.editorContent = DEFAULT_THEME;
    this.status = "Standard-Basis wurde in den Editor geladen.";
    this.render();
  }

  render() {
    const options = [
      `<option value="">Theme-Datei auswählen</option>`,
      ...this.files.map((file) => {
        const selected = file === this.selectedFile ? "selected" : "";
        return `<option value="${this.escape(file)}" ${selected}>${this.escape(file)}</option>`;
      }),
    ].join("");

    const fileList = this.files.length
      ? this.files.map((file) => `<li>${this.escape(file)}</li>`).join("")
      : `<li class="muted">Noch keine Theme-Dateien gefunden.</li>`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          min-height: 100vh;
          padding: 32px;
          background: var(--primary-background-color, #111827);
          color: var(--primary-text-color, #ffffff);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .card {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px;
          border-radius: 24px;
          background: var(--card-background-color, #1f2937);
          border: 1px solid var(--ha-card-border-color, rgba(255,255,255,0.14));
          box-shadow: var(--ha-card-box-shadow, none);
        }

        .header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
        }

        .logo {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 35%),
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
          margin: 0 0 6px 0;
          font-size: 34px;
          line-height: 1.15;
        }

        p {
          margin: 0;
          color: var(--secondary-text-color, #9ca3af);
          font-size: 15px;
          line-height: 1.5;
        }

        .controls {
          display: grid;
          grid-template-columns: minmax(260px, 1fr) auto auto auto auto auto;
          gap: 12px;
          margin-top: 24px;
          align-items: center;
        }

        select {
          height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.18);
          background: #111827;
          color: #f9fafb;
          padding: 0 14px;
          font-size: 15px;
          outline: none;
        }

        button {
          height: 46px;
          border-radius: 999px;
          border: 1px solid #3c8ae9;
          background: #3c8ae9;
          color: white;
          padding: 0 18px;
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

        .status {
          margin-top: 16px;
          color: var(--secondary-text-color, #9ca3af);
          font-size: 14px;
        }

        .box {
          margin-top: 22px;
          padding: 18px;
          border-radius: 18px;
          background: rgba(0,0,0,0.24);
          border: 1px solid rgba(255,255,255,0.10);
        }

        h2 {
          margin: 0 0 12px 0;
          font-size: 18px;
        }

        ul {
          margin: 0;
          padding-left: 22px;
        }

        li {
          margin: 6px 0;
          color: var(--primary-text-color, #ffffff);
        }

        .muted {
          color: var(--secondary-text-color, #9ca3af);
        }

        textarea {
          width: 100%;
          min-height: 620px;
          box-sizing: border-box;
          resize: vertical;
          border: 1px solid rgba(255,255,255,0.12);
          outline: none;
          border-radius: 18px;
          padding: 18px;
          background: #0b1220;
          color: #e5e7eb;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 14px;
          line-height: 1.45;
          tab-size: 2;
        }

        code {
          display: block;
          margin-top: 18px;
          padding: 14px;
          border-radius: 14px;
          background: rgba(0,0,0,0.35);
          color: #d1d5db;
          white-space: pre-wrap;
        }

        @media (max-width: 1050px) {
          .controls {
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
        }
      </style>

      <div class="card">
        <div class="header">
          <div class="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M19.54 5.23L18.12 3.81L13.4 8.53L11.99 7.12L10.58 8.53L15.17 13.12L16.58 11.71L14.82 9.95L19.54 5.23M4 4H9.5C10.33 4 11 4.67 11 5.5V7.09L9 9.09V6H5V19H18V14.91L20 12.91V19.5C20 20.33 19.33 21 18.5 21H4.5C3.67 21 3 20.33 3 19.5V4.5C3 4.22 3.22 4 3.5 4H4M7 11H12.09L10.09 13H7V11M7 15H14V17H7V15Z"/>
            </svg>
          </div>

          <div>
            <h1>Theme Generator</h1>
            <p>Basis-Theme mit Bereichen für Home Assistant, Mushroom, Bubble Card und card-mod.</p>
          </div>
        </div>

        <div class="controls">
          <select id="theme-select" ${this.loading ? "disabled" : ""}>
            ${options}
          </select>

          <button id="refresh" ${this.loading ? "disabled" : ""}>
            Aktualisieren
          </button>

          <button class="secondary" id="load-file" ${this.loading || !this.selectedFile ? "disabled" : ""}>
            Datei laden
          </button>

          <button class="secondary" id="default-theme" ${this.loading ? "disabled" : ""}>
            Standard laden
          </button>

          <button id="save-version" ${this.loading ? "disabled" : ""}>
            Neue Version
          </button>

          <button class="danger" id="overwrite" ${this.loading || !this.selectedFile ? "disabled" : ""}>
            Überschreiben
          </button>
        </div>

        <div class="status">${this.escape(this.status)}</div>

        <div class="box">
          <h2>Gefundene Theme-Dateien</h2>
          <ul>
            ${fileList}
          </ul>
        </div>

        <div class="box">
          <h2>Editor</h2>
          <textarea id="editor" spellcheck="false">${this.escape(this.editorContent)}</textarea>
        </div>

        <code>Version: 1.6.0
Modus: vollständige Basis mit HA / Mushroom / Bubble / card-mod
Status: Panel erfolgreich geladen</code>
      </div>
    `;

    this.shadowRoot.getElementById("refresh").addEventListener("click", () => {
      this.loadThemeFiles();
    });

    this.shadowRoot.getElementById("load-file").addEventListener("click", () => {
      this.loadSelectedTheme();
    });

    this.shadowRoot.getElementById("default-theme").addEventListener("click", () => {
      this.resetDefaultTheme();
    });

    this.shadowRoot.getElementById("save-version").addEventListener("click", () => {
      this.saveAsVersion();
    });

    this.shadowRoot.getElementById("overwrite").addEventListener("click", () => {
      this.overwriteSelectedTheme();
    });

    this.shadowRoot.getElementById("theme-select").addEventListener("change", (event) => {
      this.selectedFile = event.target.value;
      this.status = this.selectedFile
        ? `Ausgewählt: ${this.selectedFile}`
        : "Keine Theme-Datei ausgewählt.";
      this.render();
    });

    this.shadowRoot.getElementById("editor").addEventListener("input", (event) => {
      this.editorContent = event.target.value;
    });
  }

  escape(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }
}

if (!customElements.get("theme-generator-panel")) {
  customElements.define("theme-generator-panel", ThemeGeneratorPanel);
}
