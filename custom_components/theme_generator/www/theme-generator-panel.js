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
    this.backgroundEnabled = localStorage.getItem("theme-generator-background-enabled") !== "false";
    this.attachShadow({ mode: "open" });

    this._hass = null;
    this.initialized = false;
    this.loading = false;
    this.files = [];
    this.selectedFile = "";
    this.workFile = "";
    this.workMeta = null;
    this.autoLoadedWorkTheme = false;
    this.workSaveTimer = null;

    this.editorContent = DEFAULT_THEME;
    this.activeView = "preview";
    this.status = "Panel geladen. Theme-Dateien werden gesucht …";
    this.previewPage = "all_settings";
    this.demoIframeUrl = localStorage.getItem("theme_generator_demo_iframe_url") || "/lovelace/default_view";
    this.demoIframeHideSidebar = localStorage.getItem("theme_generator_demo_iframe_hide_sidebar") !== "false";
    this.templates = [];
    this.templatesLoaded = false;


    this.demoPageFiles = [];
    this.demoPageFile = "demo_preview.yaml";
    this.demoPageContent = "";

    this.settingsFilter = "basic";
    this.settingsMenuOpen = true;
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

  async loadLastWorkTheme() {
    if (!this._hass || this.autoLoadedWorkTheme) {
      return;
    }

    this.autoLoadedWorkTheme = true;

    try {
      const result = await this.apiCall({
        type: "theme_generator/read_last_work_theme"
      });

      if (!result?.found) {
        return;
      }

      this.selectedFile = result.filename || "";
      this.workFile = result.work_file || "";
      this.workMeta = result.meta || null;
      this.editorContent = result.content || this.editorContent;
      this.status = `Arbeitsversion automatisch geladen: ${this.workFile}`;
      this.render();
    } catch (err) {
      console.warn("Keine Arbeitsversion automatisch geladen", err);
    }
  }

  async createWorkThemeFromSelected() {
    if (!this.selectedFile) {
      this.status = "Bitte zuerst eine Theme-Datei auswählen.";
      this.safeRender();
      return null;
    }

    const result = await this.apiCall({
      type: "theme_generator/create_work_theme",
      filename: this.selectedFile
    });

    this.selectedFile = result.filename || this.selectedFile;
    this.workFile = result.work_file || "";
    this.workMeta = result.meta || null;
    this.editorContent = result.content || "";
    this.autoLoadedWorkTheme = true;

    return result;
  }

  scheduleWorkThemeSave() {
    if (!this.workFile || !this.selectedFile) {
      return;
    }

    clearTimeout(this.workSaveTimer);

    this.workSaveTimer = setTimeout(() => {
      this.saveCurrentWorkTheme();
    }, 1200);
  }

  async saveCurrentWorkTheme() {
    if (!this._hass || !this.workFile || !this.selectedFile) {
      return;
    }

    try {
      await this.apiCall({
        type: "theme_generator/save_work_theme",
        work_file: this.workFile,
        source_file: this.selectedFile,
        content: this.editorContent || ""
      });
    } catch (err) {
      console.warn("Arbeitsversion konnte nicht gespeichert werden", err);
    }
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

      await this.loadLastWorkTheme();
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
    this.status = `${this.selectedFile} wird als saubere Arbeitsversion geladen …`;
    this.safeRender();

    try {
      const result = await this.createWorkThemeFromSelected();

      this.status = `Arbeitsversion geladen: ${result.work_file}`;
      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Fehler beim Erstellen der Arbeitsversion: ${err?.message || err}`;
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
      this.status = `Gespeichert als neue Datei: ${result.filename}${result.theme_name ? " · Theme: " + result.theme_name : ""}`;

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
    if (this.setFieldAlpha) {
      return this.setFieldAlpha(key, alphaPercent);
    }
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

  getVarReferenceKey(value) {
    const match = String(value || "").trim().match(/^var\(\s*--([a-zA-Z0-9_-]+)\s*(?:,[^)]+)?\)$/);

    if (!match) {
      return "";
    }

    return match[1];
  }

  getEditableColorKey(key) {
    const rawValue = this.extractValue(key, "");
    const refKey = this.getVarReferenceKey(rawValue);

    if (!refKey) {
      return key;
    }

    const refValue = this.extractValue(refKey, "");

    if (!refValue) {
      return key;
    }

    return refKey;
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
            <div class="color-grid" ${this.backgroundEnabled ? "background-on" : "background-off"}>
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

  ensureThemeDefaultsInEditor() {
    if (this._ensuringThemeDefaults) {
      return;
    }

    this._ensuringThemeDefaults = true;

    try {
      let content = String(this.editorContent || "");

      if (!content.trim()) {
        return;
      }

      const escapeRegExp = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const hasKey = (key) => {
        const pattern = new RegExp(`^\\s{2,}["']?${escapeRegExp(key)}["']?:`, "m");
        return pattern.test(content);
      };

      const get = (key, fallback) => {
        if (!this.extractValue) {
          return fallback;
        }

        const value = this.extractValue(key, fallback);
        const clean = String(value || "").trim();

        if (!clean || clean.toLowerCase().startsWith("var(")) {
          return fallback;
        }

        return clean;
      };

      const accent = get("accent-color", get("primary-color", "#03a9f4"));
      const primaryText = get("primary-text-color", get("text-primary-color", "#e1e1e1"));
      const secondaryText = get("secondary-text-color", get("text-secondary-color", "#9b9b9b"));
      const cardBg = get("card-background-color", get("ha-card-background", "rgba(255,255,255,0.06)"));
      const iconColor = get("state-icon-color", secondaryText);

      const groups = [
        {
          title: "Mushroom Card",
          values: {
            "mushroom-card-primary-color": primaryText,
            "mushroom-card-secondary-color": secondaryText,
            "mushroom-card-background": cardBg,
            "mushroom-card-border-radius": "12px",
            "mush-chip-background": `rgba(3,169,244,0.14)`,
            "mush-chip-color": primaryText,
            "mush-chip-icon-color": accent,
            "mush-control-background-color": "rgba(255,255,255,0.08)",
            "mush-slider-color": accent,
            "mush-toggle-color": accent,
            "mush-icon-color": iconColor
          }
        },
        {
          title: "Bubble Card",
          values: {
            "bubble-main-background-color": cardBg,
            "bubble-button-background-color": "rgba(255,255,255,0.07)",
            "bubble-icon-background-color": "rgba(3,169,244,0.16)",
            "bubble-accent-color": accent,
            "bubble-border-radius": "18px",
            "bubble-sub-button-background-color": "rgba(255,255,255,0.08)",
            "bubble-sub-button-text-color": primaryText,
            "bubble-name-color": primaryText,
            "bubble-state-color": secondaryText,
            "bubble-icon-color": iconColor,
            "bubble-slider-color": accent,
            "bubble-toggle-color": accent,
            "bubble-popup-background-color": cardBg
          }
        },
        {
          title: "card-mod",
          values: {
            "card-mod-theme": "ha_standard_basis"
          }
        }
      ];

      const sections = [];

      groups.forEach((group) => {
        const missing = Object.entries(group.values).filter(([key]) => !hasKey(key));

        if (!missing.length) {
          return;
        }

        sections.push("");
        sections.push(`  # ${group.title}`);

        missing.forEach(([key, value]) => {
          sections.push(`  ${key}: "${value}"`);
        });
      });

      if (!sections.length) {
        return;
      }

      this.editorContent = content.replace(/\s*$/, "") + "\n" + sections.join("\n") + "\n";
    } finally {
      this._ensuringThemeDefaults = false;
    }
  }

  getAllThemeFields() {
    if (this.ensureThemeDefaultsInEditor) {
      this.ensureThemeDefaultsInEditor();
    }

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

    const filter = this.settingsFilter || "basic";

    const filterMap = {
      all: [],
      basic: [
        "primary-color",
        "accent-color",
        "mdc-theme-secondary",
        "success-color",
        "warning-color",
        "error-color",
        "info-color",
        "state-active-color",
        "state-inactive-color",
        "state-unavailable-color"
      ],
      backgrounds: [
        "background",
        "surface",
        "card-background",
        "clear-background",
        "divider-color"
      ],
      textcolors: [
        "text",
        "on-primary",
        "on-secondary",
        "on-surface",
        "disabled-text"
      ],
      header: ["app-header", "app-toolbar", "header"],
      sidebar: ["sidebar"],
      cards: ["ha-card", "card-background", "paper-card"],
      icons: ["icon", "paper-item-icon", "state-icon"],
      states: ["state-", "success", "warning", "error", "info"],
      switches: ["switch", "toggle"],
      sliders: ["slider"],
      inputs: ["input", "textfield", "select", "mdc-text-field", "mdc-select"],
      mushroom: ["mushroom", "mush-"],
      bubble: ["bubble"],
      cardmod: ["card-mod", "card_mod"]
    };

    const isolatedNeedles = {
      mushroom: ["mushroom", "mush-"],
      bubble: ["bubble"],
      cardmod: ["card-mod", "card_mod", "cardmod"]
    };

    const isIsolatedKey = (key) => {
      const lower = String(key || "").toLowerCase();

      return Object.values(isolatedNeedles).some((needles) =>
        needles.some((needle) => lower.includes(needle))
      );
    };

    const needles = filterMap[filter] || [];

    let filtered = needles.length
      ? found.filter((item) => needles.some((needle) => item.key.toLowerCase().includes(needle)))
      : found;

    if (!["mushroom", "bubble", "cardmod", "all"].includes(filter)) {
      filtered = filtered.filter((item) => !isIsolatedKey(item.key));
    }

    return filtered.sort((a, b) => a.key.localeCompare(b.key));
  }

  getSettingsFilterTitle() {
    const map = {
      basic: "Grundfarben",
      backgrounds: "Hintergründe",
      textcolors: "Textfarben",
      header: "Header",
      sidebar: "Sidebar",
      cards: "Karten",
      icons: "Icons",
      states: "Statusfarben",
      switches: "Schalter",
      sliders: "Slider",
      inputs: "Eingabefelder",
      mushroom: "Mushroom",
      bubble: "Bubble Card",
      cardmod: "card-mod"
    };

    return map[this.settingsFilter || "basic"] || "Theme Settings";
  }

  getSettingsFilterDescription() {
    const map = {
      basic: "Primärfarben, Akzentfarben und Statusfarben.",
      backgrounds: "Hintergründe, Flächen, Karten und Container.",
      textcolors: "Textfarben, Sekundärtexte und Material-Textfarben.",
      header: "App-Header, Toolbar und obere Leiste.",
      sidebar: "Linke Home-Assistant-Seitenleiste.",
      cards: "Karten, Rahmen, Rundungen und Schatten.",
      icons: "Iconfarben und Zustandsicons.",
      states: "Statusfarben für aktive, inaktive und problematische Zustände.",
      switches: "Schalter, Toggles und Auswahlschalter.",
      sliders: "Slider, Regler, Helligkeit und Lautstärke.",
      inputs: "Eingabefelder, Dropdowns und Select-Felder.",
      mushroom: "Mushroom Card Farben, Chips und Icons.",
      bubble: "Bubble Card Farben, Buttons und Popups.",
      cardmod: "card-mod Theme- und Style-Werte."
    };

    return map[this.settingsFilter || "basic"] || "Wähle links eine Kategorie aus.";
  }

  getSpecialSectionTitle(key) {
    const lower = String(key || "").toLowerCase();
    const filter = this.settingsFilter || "";

    if (filter === "mushroom") {
      if (
        lower.includes("primary-background") ||
        lower.includes("secondary-background") ||
        lower.includes("background") ||
        lower.includes("box-shadow")
      ) {
        return "Hintergrund";
      }

      if (
        lower.includes("border-radius") ||
        lower.includes("radius") ||
        lower.includes("spacing") ||
        lower.includes("shadow")
      ) {
        return "Rahmen & Rundungen";
      }

      if (
        lower.includes("chip")
      ) {
        return "Chips";
      }

      if (
        lower.includes("slider")
      ) {
        return "Slider";
      }

      if (
        lower.includes("badge")
      ) {
        return "Badges";
      }

      if (
        lower.includes("divider")
      ) {
        return "Divider";
      }

      if (
        lower.includes("icon") ||
        lower.includes("accent") ||
        lower.includes("success") ||
        lower.includes("warning") ||
        lower.includes("danger") ||
        lower.includes("info")
      ) {
        return "Icons & Statusfarben";
      }

      if (
        lower.includes("text") ||
        lower.includes("primary-color") ||
        lower.includes("secondary-color") ||
        lower.includes("font")
      ) {
        return "Text";
      }

      return "Allgemein";
    }

    if (filter === "bubble") {
      if (lower.includes("main") || lower.includes("background")) return "Hintergrund";
      if (lower.includes("name") || lower.includes("state") || lower.includes("text")) return "Text";
      if (lower.includes("icon")) return "Icons";
      if (lower.includes("button") || lower.includes("sub-button")) return "Buttons";
      if (lower.includes("accent")) return "Akzent";
      if (lower.includes("slider")) return "Slider";
      if (lower.includes("toggle") || lower.includes("switch")) return "Schalter";
      if (lower.includes("border") || lower.includes("radius")) return "Rahmen & Rundungen";
      return "Allgemein";
    }

    if (filter === "cardmod") {
      if (lower.includes("theme")) return "Theme";
      if (lower.includes("root")) return "Root";
      if (lower.includes("view")) return "View";
      if (lower.includes("card")) return "Karten";
      if (lower.includes("row")) return "Rows";
      if (lower.includes("more-info")) return "More Info";
      if (lower.includes("yaml")) return "YAML";
      return "Allgemein";
    }

    return "";
  }

  isDirectColorValue(value) {
    const raw = String(value || "").trim();

    if (!raw) {
      return false;
    }

    const lower = raw.toLowerCase();

    if (lower.startsWith("var(")) {
      return false;
    }

    if (lower === "transparent") {
      return true;
    }

    if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(raw)) {
      return true;
    }

    if (/^rgba?\(/i.test(raw)) {
      return true;
    }

    if (/^hsla?\(/i.test(raw)) {
      return true;
    }

    return false;
  }

  parseColorToRgba(value) {
    const raw = String(value || "").trim();

    if (!raw) {
      return null;
    }

    const lower = raw.toLowerCase();

    if (lower === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0 };
    }

    let hex = raw;

    if (/^#([0-9a-f]{3})$/i.test(hex)) {
      const m = hex.slice(1);
      hex = "#" + m[0] + m[0] + m[1] + m[1] + m[2] + m[2];
    }

    if (/^#([0-9a-f]{6})$/i.test(hex)) {
      return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
        a: 1
      };
    }

    if (/^#([0-9a-f]{8})$/i.test(hex)) {
      return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
        a: +(parseInt(hex.slice(7, 9), 16) / 255).toFixed(3)
      };
    }

    const rgb = raw.match(/^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)(?:\s*,\s*([0-9.]+))?\s*\)$/i);

    if (rgb) {
      return {
        r: Math.max(0, Math.min(255, Math.round(Number(rgb[1])))),
        g: Math.max(0, Math.min(255, Math.round(Number(rgb[2])))),
        b: Math.max(0, Math.min(255, Math.round(Number(rgb[3])))),
        a: rgb[4] === undefined ? 1 : Math.max(0, Math.min(1, Number(rgb[4])))
      };
    }

    return null;
  }

  rgbaToHex(color) {
    const toHex = (value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0");
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  }

  rgbaToRgb(color) {
    return `rgb(${Math.round(color.r)},${Math.round(color.g)},${Math.round(color.b)})`;
  }

  rgbaToRgba(color, alpha = color.a) {
    const cleanAlpha = Math.max(0, Math.min(1, Number(alpha)));
    return `rgba(${Math.round(color.r)},${Math.round(color.g)},${Math.round(color.b)},${+cleanAlpha.toFixed(3)})`;
  }

  getColorFormat(value) {
    const raw = String(value || "").trim().toLowerCase();

    if (raw.startsWith("rgba(")) return "rgba";
    if (raw.startsWith("rgb(")) return "rgb";
    if (raw.startsWith("#")) return "hex";
    if (raw === "transparent") return "rgba";

    return "hex";
  }

  setRawThemeValue(key, value) {
    const escapeRegExp = (raw) => String(raw).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`^(\\s{2,}["']?${escapeRegExp(key)}["']?:\\s*)(.*)$`, "m");
    const content = String(this.editorContent || "");

    if (!pattern.test(content)) {
      return;
    }

    const safeValue = String(value).replaceAll('"', '\\"');
    this.editorContent = content.replace(pattern, `$1"${safeValue}"`);

    if (this.render) {
      this.render();
    }
  }

  convertFieldColorFormat(key, format) {
    const rawValue = this.extractValue(key, "");
    const color = this.parseColorToRgba(rawValue);

    if (!color) {
      return;
    }

    let nextValue = rawValue;

    if (format === "hex") {
      nextValue = this.rgbaToHex(color);
    } else if (format === "rgb") {
      nextValue = this.rgbaToRgb(color);
    } else if (format === "rgba") {
      nextValue = this.rgbaToRgba(color, color.a);
    }

    this.setRawThemeValue(key, nextValue);
  }

  setFieldColorAlpha(key, alphaPercent) {
    const rawValue = this.extractValue(key, "");
    const color = this.parseColorToRgba(rawValue);

    if (!color) {
      return;
    }

    const alpha = Math.max(0, Math.min(100, Number(alphaPercent))) / 100;
    const nextValue = this.rgbaToRgba(color, alpha);

    this.setRawThemeValue(key, nextValue);
  }

  colorInputValueFromThemeValue(value, fallback = "#000000") {
    const parsed = this.parseColorToRgba ? this.parseColorToRgba(value) : null;

    if (!parsed) {
      return fallback;
    }

    const toHex = (number) => {
      const safe = Math.max(0, Math.min(255, Math.round(Number(number) || 0)));
      return safe.toString(16).padStart(2, "0");
    };

    return `#${toHex(parsed.r)}${toHex(parsed.g)}${toHex(parsed.b)}`;
  }

  getThemeRootName() {
    const lines = String(this.editorContent || "").split("\n");

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      if (!line.startsWith(" ") && trimmed.endsWith(":")) {
        return trimmed.slice(0, -1).trim().replace(/^["']|["']$/g, "");
      }
    }

    return "Theme";
  }

  getCardModSnippet(kind) {
    const themeName = this.getThemeRootName();

    if (kind === "card-mod-card") {
      return `card-mod-card: |
  ha-card {
    background: var(--card-background-color);
    border-radius: var(--ha-card-border-radius);
    box-shadow: var(--ha-card-box-shadow);
    border: 1px solid var(--ha-card-border-color);
    overflow: hidden;
  }`;
    }

    if (kind === "card-mod-root") {
      return `card-mod-root: |
  :host {
    --ha-card-background: var(--card-background-color);
    --ha-card-border-radius: var(--ha-card-border-radius);
    --ha-card-box-shadow: var(--ha-card-box-shadow);
  }`;
    }

    if (kind === "card-mod-theme") {
      return `card-mod-theme: |
  ${themeName}`;
    }

    return "";
  }

  findThemeIndentForNewKey() {
    const lines = String(this.editorContent || "").split("\n");

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      if (!line.startsWith(" ") && trimmed.endsWith(":")) {
        return "  ";
      }
    }

    return "";
  }

  addCardModBlock(kind) {
    const key = String(kind || "").trim();

    if (!key) {
      this.status = "Kein card-mod Typ gewählt.";
      this.safeRender();
      return;
    }

    const current = String(this.editorContent || "");
    const existingIndex = current.indexOf(key + ":");

    if (existingIndex >= 0) {
      this.openEditorAtIndex(existingIndex, key.length);
      this.status = `${key} ist bereits vorhanden.`;
      this.safeRender();
      return;
    }

    const snippet = this.getCardModSnippet(key);

    if (!snippet) {
      this.status = `Unbekannter card-mod Typ: ${key}`;
      this.safeRender();
      return;
    }

    const indent = this.findThemeIndentForNewKey();
    const indentedSnippet = snippet
      .split("\n")
      .map((line) => line ? indent + line : line)
      .join("\n");

    const separator = current.trim() ? "\n\n# --- card-mod: " + key + " ---\n" : "";
    this.editorContent = current + separator + indentedSnippet + "\n";

    this.activeView = "editor";
    this.status = `${key} wurde in den Editor eingefügt.`;
    this.safeRender();

    setTimeout(() => {
      const index = this.editorContent.indexOf(key + ":");
      this.openEditorAtIndex(index, key.length);
      this.scheduleWorkThemeSave?.();
    }, 80);
  }

  openEditorAtIndex(index, length = 0) {
    this.activeView = "editor";
    this.safeRender();

    setTimeout(() => {
      const editor = this.shadowRoot?.getElementById("theme-editor");

      if (!editor) {
        return;
      }

      editor.focus();

      if (index >= 0) {
        editor.setSelectionRange(index, index + length);
        editor.scrollTop = Math.max(0, (index / Math.max(1, editor.value.length)) * editor.scrollHeight - 120);
      }
    }, 60);
  }

  isCodeThemeValue(key, value) {
    const rawKey = String(key || "").toLowerCase();
    const rawValue = String(value || "");

    if (rawKey.startsWith("card-mod")) {
      return true;
    }

    if (rawKey.includes("style") || rawKey.includes("styles")) {
      return true;
    }

    if (rawValue.includes("\n") && (
      rawValue.includes("{") ||
      rawValue.includes("}") ||
      rawValue.includes("ha-card") ||
      rawValue.includes(":host") ||
      rawValue.includes("$:") ||
      rawValue.includes("card_mod") ||
      rawValue.includes("card-mod")
    )) {
      return true;
    }

    return false;
  }

  renderCodeThemeCard(field, rawValue) {
    const value = String(rawValue || "");
    const encodedValue = encodeURIComponent(value);
    const encodedKey = encodeURIComponent(field.key || "");

    return `
      <article class="preview-field-card code-field-card">
        <div class="field-head">
          <div>
            <h4>${this.escape(field.label || field.key)}</h4>
            <span>${this.escape(field.key)}</span>
          </div>
          <span class="code-badge">Code</span>
        </div>

        <textarea class="code-field-textarea" readonly spellcheck="false">${this.escape(value)}</textarea>

        <div class="code-field-actions">
          <button type="button" data-code-copy="${this.escape(encodedValue)}">Kopieren</button>
          <button type="button" class="secondary" data-code-open="${this.escape(encodedKey)}">Im Editor öffnen</button>
        </div>

        <div class="code-field-actions cardmod-add-actions">
          <button type="button" data-cardmod-add="card-mod-card">+ card-mod-card</button>
          <button type="button" data-cardmod-add="card-mod-root">+ card-mod-root</button>
          <button type="button" data-cardmod-add="card-mod-theme">+ card-mod-theme</button>
        </div>

        <div class="field-note">card-mod / CSS-Codeblock · als Snippet oder Template nutzbar</div>
      </article>
    `;
  }

  async copyCodeThemeValue(encodedValue) {
    const value = decodeURIComponent(encodedValue || "");

    try {
      await navigator.clipboard.writeText(value);
      this.status = "Codeblock kopiert.";
    } catch (err) {
      this.status = `Kopieren fehlgeschlagen: ${err?.message || err}`;
    }

    this.safeRender();
  }

  openCodeThemeValueInEditor(encodedKey) {
    const key = decodeURIComponent(encodedKey || "");

    this.activeView = "editor";
    this.status = key
      ? `Editor geöffnet für Codewert: ${key}`
      : "Editor geöffnet.";

    this.safeRender();

    setTimeout(() => {
      const editor = this.shadowRoot?.getElementById("theme-editor");
      if (!editor || !key) return;

      const index = editor.value.indexOf(key + ":");
      if (index >= 0) {
        editor.focus();
        editor.setSelectionRange(index, index + key.length);
      } else {
        editor.focus();
      }
    }, 50);
  }

  renderPreviewFieldCard(field) {
    const rawValue = this.extractValue(field.key, "");

    if (this.isCodeThemeValue(field.key, rawValue)) {
      return this.renderCodeThemeCard(field, rawValue);
    }
    const isColor = this.isDirectColorValue(rawValue);
    const parsedColor = isColor ? this.parseColorToRgba(rawValue) : null;
    const colorValue = parsedColor ? this.colorInputValueFromThemeValue(rawValue, "#000000") : "#000000";
    const alpha = parsedColor ? Math.round((parsedColor.a ?? 1) * 100) : 100;
    const format = isColor ? this.getColorFormat(rawValue) : "";

    return `
      <article class="preview-field-card ${isColor ? "is-color-field" : "is-value-field"}">
        <div class="preview-field-head">
          <div>
            <strong>${this.escape(field.label)}</strong>
            <code>${this.escape(field.key)}</code>
          </div>

          ${isColor ? `
            <input
              type="color"
              data-color-key="${this.escape(field.key)}"
              value="${this.escape(colorValue)}"
              title="${this.escape(rawValue)}"
            >
          ` : ""}
        </div>

        <input
          class="value-input preview-value-input"
          data-value-key="${this.escape(field.key)}"
          value="${this.escape(rawValue)}"
          spellcheck="false"
        >

        ${isColor ? `
          <div class="format-row">
            ${["hex", "rgb", "rgba"].map((item) => `
              <button
                type="button"
                class="${format === item ? "active" : ""}"
                data-format-key="${this.escape(field.key)}"
                data-format="${item}"
              >
                ${item.toUpperCase()}
              </button>
            `).join("")}
          </div>

          <div class="alpha-row preview-alpha-row">
            <span>Transparenz</span>
            <input
              class="alpha-slider"
              type="range"
              min="0"
              max="100"
              value="${alpha}"
              data-alpha-key="${this.escape(field.key)}"
            >
            <strong>${alpha}%</strong>
          </div>
        ` : `
          <div class="value-hint">Kein Farbwert · Format und Transparenz nicht verfügbar</div>
        `}
      </article>
    `;
  }

  renderPreviewColorGroup(groupId) {
    const group = groupId === "all_settings"
      ? {
          id: "all_settings",
          title: this.getSettingsFilterTitle ? this.getSettingsFilterTitle() : "Theme Settings",
          description: this.getSettingsFilterDescription ? this.getSettingsFilterDescription() : "Wähle links eine Kategorie aus.",
          fields: this.getAllThemeFields()
        }
      : this.colorGroups.find((item) => item.id === groupId);

    if (!group) {
      return "";
    }

    const groupedFilters = ["mushroom", "bubble", "cardmod"];
    let fields = "";

    if (groupId === "all_settings" && groupedFilters.includes(this.settingsFilter)) {
      const grouped = new Map();

      group.fields.forEach((field) => {
        const title = this.getSpecialSectionTitle(field.key) || "Allgemein";

        if (!grouped.has(title)) {
          grouped.set(title, []);
        }

        grouped.get(title).push(field);
      });

      fields = Array.from(grouped.entries()).map(([title, items]) => `
        <div class="preview-section-title">${this.escape(title)}</div>
        ${items.map((field) => this.renderPreviewFieldCard(field)).join("")}
      `).join("");
    } else {
      fields = group.fields.map((field) => this.renderPreviewFieldCard(field)).join("");
    }

    const filterHtml = groupId === "all_settings" ? `
      <div class="settings-filter-row">
        ${[
          ["all", "Alle"],
          ["basic", "Grundfarben"],
          ["backgrounds", "Hintergründe"],
          ["textcolors", "Textfarben"],
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
          ${fields || `<div class="preview-empty-note">Keine passenden Werte in der geladenen Theme-Datei gefunden.</div>`}
        </div>
      </section>
    `;
  }

  async loadTemplates() {
    if (!this._hass) return;

    try {
      const result = await this.apiCall({
        type: "theme_generator/list_templates"
      });

      this.templates = result.templates || [];
      this.templatesLoaded = true;
      this.status = this.templates.length
        ? `${this.templates.length} Template(s) geladen.`
        : "Keine Templates gefunden.";
      this.render();
    } catch (err) {
      this.templatesLoaded = true;
      this.status = `Templates konnten nicht geladen werden: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  renderTemplateWithVariables(template) {
    let yaml = template?.template || "";
    const variables = template?.variables || {};

    Object.entries(variables).forEach(([key, value]) => {
      const pattern = new RegExp("\\{\\{\\s*" + this.escapeRegExp(key) + "\\s*\\}\\}", "g");
      yaml = yaml.replace(pattern, String(value));
    });

    return yaml;
  }

  escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  templatePreviewSrc(template) {
    const svg = template?.preview_svg || "";

    if (!svg) {
      return "";
    }

    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  async copyTemplateYaml(templateId) {
    const template = this.templates.find((item) => item.id === templateId);

    if (!template) {
      this.status = "Template nicht gefunden.";
      this.safeRender();
      return;
    }

    const yaml = this.renderTemplateWithVariables(template);

    try {
      await navigator.clipboard.writeText(yaml);
      this.status = `Template kopiert: ${template.name}`;
    } catch (err) {
      this.status = `Kopieren fehlgeschlagen: ${err?.message || err}`;
    }

    this.safeRender();
  }

  insertTemplateYaml(templateId) {
    const template = this.templates.find((item) => item.id === templateId);

    if (!template) {
      this.status = "Template nicht gefunden.";
      this.safeRender();
      return;
    }

    const yaml = this.renderTemplateWithVariables(template);
    const separator = this.editorContent.trim()
      ? "\n\n# --- Template: " + template.name + " ---\n"
      : "# --- Template: " + template.name + " ---\n";

    this.editorContent = (this.editorContent || "") + separator + yaml;
    this.status = `Template in Editor eingefügt: ${template.name}`;
    this.activeView = "editor";
    this.safeRender();
  }

  renderTemplatesView() {
    if (!this.templatesLoaded) {
      setTimeout(() => this.loadTemplates(), 0);
    }

    if (!this.templatesLoaded) {
      return `
        <section class="templates-page">
          <div class="templates-head">
            <h2>Templates</h2>
            <p>Template-Bibliothek wird geladen …</p>
          </div>
        </section>
      `;
    }

    if (!this.templates.length) {
      return `
        <section class="templates-page">
          <div class="templates-head">
            <h2>Templates</h2>
            <p>Keine Templates gefunden. Der Ordner wird unter <code>/config/theme_generator/templates</code> angelegt.</p>
          </div>
          <button type="button" id="templates-refresh">Templates neu laden</button>
        </section>
      `;
    }

    return `
      <section class="templates-page">
        <div class="templates-head">
          <div>
            <h2>Templates</h2>
            <p>Fertige Style-Vorlagen mit Variablen und Vorschaubild. Die Snippets können kopiert oder in den Editor eingefügt werden.</p>
          </div>
          <button type="button" id="templates-refresh">Templates neu laden</button>
        </div>

        <div class="templates-grid">
          ${this.templates.map((template) => {
            const preview = this.templatePreviewSrc(template);
            const variables = Object.entries(template.variables || {});
            const yaml = this.renderTemplateWithVariables(template);

            return `
              <article class="template-card">
                <div class="template-preview">
                  ${preview
                    ? `<img src="${preview}" alt="${this.escape(template.name)} Vorschau">`
                    : `<div class="template-preview-empty">Keine Vorschau</div>`}
                </div>

                <div class="template-body">
                  <div class="template-meta">
                    <span>${this.escape(template.category || "template")}</span>
                    ${template.target ? `<span>${this.escape(template.target)}</span>` : ""}
                  </div>

                  <h3>${this.escape(template.name)}</h3>
                  <p>${this.escape(template.description || "")}</p>

                  <div class="template-vars">
                    ${variables.map(([key, value]) => `
                      <div>
                        <span>${this.escape(key)}</span>
                        <code>${this.escape(String(value))}</code>
                      </div>
                    `).join("")}
                  </div>

                  <details class="template-yaml">
                    <summary>YAML anzeigen</summary>
                    <pre>${this.escape(yaml)}</pre>
                  </details>

                  <div class="template-actions">
                    <button type="button" data-template-copy="${this.escape(template.id)}">Kopieren</button>
                    <button type="button" class="secondary" data-template-insert="${this.escape(template.id)}">In Editor einfügen</button>
                  </div>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  renderDemoButtonsPreview() {
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

    const styleVars = `
      --demo-primary:${this.escape(v.primary)};
      --demo-accent:${this.escape(v.accent)};
      --demo-card:${this.escape(v.card)};
      --demo-text:${this.escape(v.text)};
      --demo-secondary:${this.escape(v.secondary)};
      --demo-border:${this.escape(v.border)};
      --demo-bubble:${this.escape(v.bubble)};
    `;

    const standardRows = [
      ["mdi:fan", "Lüftersteuerung", "Ein", "switch"],
      ["mdi:led-strip-variant", "Server LED", "72 %", "light"],
      ["mdi:power", "LED komplett aus", "Button", "button"],
      ["mdi:creation", "LED Effekt", "Rainbow", "select"],
      ["mdi:speedometer", "LED Geschwindigkeit", "60 %", "number"],
      ["mdi:brightness-6", "LED Helligkeit", "80 %", "number"]
    ];

    const mushroomRows = [
      ["mdi:fan", "Lüftersteuerung", "Eingeschaltet", "toggle"],
      ["mdi:led-strip-variant", "Server LED", "Helligkeit 72 %", "slider"],
      ["mdi:power", "LED komplett aus", "Aktion", "button"],
      ["mdi:creation", "LED Effekt", "Rainbow", "select"],
      ["mdi:speedometer", "LED Geschwindigkeit", "60 %", "slider"],
      ["mdi:brightness-6", "LED Helligkeit", "80 %", "slider"]
    ];

    const bubbleRows = [
      ["mdi:fan", "Lüftersteuerung", "Ein", "switch"],
      ["mdi:led-strip-variant", "Server LED", "72 %", "slider"],
      ["mdi:power", "LED komplett aus", "Ausführen", "button"],
      ["mdi:creation", "LED Effekt", "Rainbow", "select"],
      ["mdi:speedometer", "LED Geschwindigkeit", "60 %", "state"],
      ["mdi:brightness-6", "LED Helligkeit", "80 %", "state"]
    ];

    const renderStandard = ([icon, name, state, type]) => `
      <div class="demo-tile-card">
        <div class="demo-tile-icon">
          <ha-icon icon="${icon}"></ha-icon>
        </div>
        <div class="demo-tile-info">
          <strong>${this.escape(name)}</strong>
          <span>${this.escape(state)}</span>
        </div>
        ${type === "switch" ? `<div class="demo-switch on"></div>` : ""}
        ${type === "light" || type === "number" ? `<div class="demo-mini-slider"><i style="width:${type === "light" ? "72" : "60"}%"></i></div>` : ""}
      </div>
    `;

    const renderMushroom = ([icon, name, state, type]) => `
      <div class="demo-mushroom-card">
        <div class="demo-mushroom-icon">
          <ha-icon icon="${icon}"></ha-icon>
        </div>
        <div class="demo-mushroom-info">
          <strong>${this.escape(name)}</strong>
          <span>${this.escape(state)}</span>
        </div>
        ${type === "toggle" ? `<div class="demo-switch on"></div>` : ""}
        ${type === "slider" ? `<div class="demo-mini-slider"><i></i></div>` : ""}
      </div>
    `;

    const renderBubble = ([icon, name, state, type]) => `
      <div class="demo-bubble-card">
        <div class="demo-bubble-main">
          <div class="demo-bubble-icon">
            <ha-icon icon="${icon}"></ha-icon>
          </div>
          <div class="demo-bubble-info">
            <strong>${this.escape(name)}</strong>
            <span>${this.escape(state)}</span>
          </div>
          <div class="demo-bubble-action">${type === "switch" ? "Ein" : type === "slider" ? "72 %" : "Info"}</div>
        </div>
        ${type === "slider" ? `<div class="demo-bubble-slider"><i></i></div>` : ""}
      </div>
    `;

    return `
      <section class="demo-preview-page" style="${styleVars}">
        <div class="demo-preview-head">
          <h2>Serversteuerung Vergleich</h2>
          <p>Demo-Vorschau für HA Standard, Mushroom, Bubble und Theme Settings — angelehnt an deine YAML-Karte.</p>
        </div>

        <div class="demo-preview-grid">
          <article class="demo-preview-column">
            <div class="demo-column-title">
              <ha-icon icon="mdi:home-assistant"></ha-icon>
              <span>HA Standard</span>
            </div>
            ${standardRows.map(renderStandard).join("")}
          </article>

          <article class="demo-preview-column">
            <div class="demo-column-title">
              <ha-icon icon="mdi:mushroom-outline"></ha-icon>
              <span>Mushroom</span>
            </div>
            ${mushroomRows.map(renderMushroom).join("")}
          </article>

          <article class="demo-preview-column">
            <div class="demo-column-title">
              <ha-icon icon="mdi:circle-multiple-outline"></ha-icon>
              <span>Bubble</span>
            </div>
            ${bubbleRows.map(renderBubble).join("")}
          </article>

          <article class="demo-preview-column">
            <div class="demo-column-title">
              <ha-icon icon="mdi:compare"></ha-icon>
              <span>Theme Settings</span>
            </div>

            <div class="demo-settings-card">
              <div>
                <strong>Card Transparenz</strong>
                <span>input_number.dashboard_card_transparenz</span>
              </div>
              <div class="demo-settings-slider">
                <i></i>
              </div>
            </div>

            <div class="demo-settings-note">
              Diese Seite ist eine reine Theme-Vorschau. Es werden keine echten Entitäten geschaltet.
            </div>
          </article>
        </div>
      </section>
    `;
  }

  async loadDemoPageFiles() {
    if (!this._hass) {
      return;
    }

    try {
      const result = await this._hass.callWS({
        type: "theme_generator/list_demo_page_files"
      });

      this.demoPageFiles = result.files || [];

      if (!this.demoPageFile && this.demoPageFiles.length) {
        this.demoPageFile = this.demoPageFiles[0];
      }

      this.render();
    } catch (err) {
      this.status = `Demo-Dateien konnten nicht geladen werden: ${err.message || err}`;
      this.render();
    }
  }

  async loadDemoPageFile(filename = this.demoPageFile || "demo_preview.yaml") {
    if (!this._hass) {
      return;
    }

    try {
      const result = await this._hass.callWS({
        type: "theme_generator/read_demo_page_file",
        filename
      });

      this.demoPageFile = result.filename || filename;
      this.demoPageContent = result.content || "";
      this.status = `Demo-Seite geladen: ${this.demoPageFile}`;
      this.render();

      setTimeout(() => this.renderDemoPageCards(), 0);
    } catch (err) {
      this.status = `Demo-Seite konnte nicht geladen werden: ${err.message || err}`;
      this.render();
    }
  }

  async saveDemoPageFile() {
    if (!this._hass) {
      return;
    }

    const editor = this.shadowRoot?.getElementById("demo-page-editor");
    const nameInput = this.shadowRoot?.getElementById("demo-page-filename");

    const filename = (nameInput?.value || this.demoPageFile || "demo_preview.yaml").trim();
    const content = editor?.value || this.demoPageContent || "";

    try {
      const result = await this._hass.callWS({
        type: "theme_generator/save_demo_page_file",
        filename,
        content
      });

      this.demoPageFile = result.filename || filename;
      this.demoPageContent = content;
      this.status = `Demo-Seite gespeichert: ${this.demoPageFile}`;

      await this.loadDemoPageFiles();
      this.render();

      setTimeout(() => this.renderDemoPageCards(), 0);
    } catch (err) {
      this.status = `Demo-Seite konnte nicht gespeichert werden: ${err.message || err}`;
      this.render();
    }
  }

  parseDemoPageYaml() {
    const raw = String(this.demoPageContent || "").trim();

    if (!raw) {
      return { cards: [] };
    }

    try {
      const parser = window.jsyaml || window.jsYaml || window.YAML;

      if (!parser || !parser.load) {
        return {
          error: "YAML-Parser im Home-Assistant-Frontend nicht verfügbar.",
          cards: []
        };
      }

      const data = parser.load(raw) || {};

      if (Array.isArray(data)) {
        return { cards: data };
      }

      if (Array.isArray(data.cards)) {
        return { cards: data.cards };
      }

      if (Array.isArray(data.sections)) {
        const cards = [];

        data.sections.forEach((section) => {
          if (Array.isArray(section.cards)) {
            cards.push(...section.cards);
          }
        });

        return { cards };
      }

      if (data.type) {
        return { cards: [data] };
      }

      return { cards: [] };
    } catch (err) {
      return {
        error: err.message || String(err),
        cards: []
      };
    }
  }

  async renderDemoPageCards() {
    const host = this.shadowRoot?.getElementById("demo-page-rendered");

    if (!host || !this._hass) {
      return;
    }

    const editor = this.shadowRoot?.getElementById("demo-page-editor");

    if (editor) {
      this.demoPageContent = editor.value;
    }

    const withTimeout = (promise, ms, message) => {
      return Promise.race([
        promise,
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error(message)), ms);
        })
      ]);
    };

    host.innerHTML = `<div class="demo-page-empty">YAML wird gelesen...</div>`;

    let parsed = null;

    try {
      parsed = await withTimeout(
        this._hass.callWS({
          type: "theme_generator/parse_demo_page_yaml",
          content: this.demoPageContent || ""
        }),
        8000,
        "Backend-YAML-Parser antwortet nicht. Home Assistant bitte neu starten oder Integration neu laden."
      );
    } catch (err) {
      host.innerHTML = `<div class="demo-page-error">YAML konnte nicht gelesen werden: ${this.escape(err.message || err)}</div>`;
      return;
    }

    if (parsed?.error) {
      host.innerHTML = `<div class="demo-page-error">${this.escape(parsed.error)}</div>`;
      return;
    }

    const cards = parsed?.cards || [];

    if (!cards.length) {
      host.innerHTML = `<div class="demo-page-empty">Keine Karten in der Demo-YAML gefunden.</div>`;
      return;
    }

    host.innerHTML = `<div class="demo-page-empty">Home-Assistant Karten werden geladen...</div>`;

    let helpers = null;

    try {
      if (!window.loadCardHelpers) {
        throw new Error("window.loadCardHelpers ist im Frontend nicht verfügbar.");
      }

      helpers = await withTimeout(
        window.loadCardHelpers(),
        8000,
        "Home-Assistant Card Helpers antworten nicht."
      );
    } catch (err) {
      host.innerHTML = `<div class="demo-page-error">Card Helpers konnten nicht geladen werden: ${this.escape(err.message || err)}</div>`;
      return;
    }

    host.innerHTML = "";

    for (const config of cards) {
      try {
        const wrap = document.createElement("div");
        wrap.className = "demo-page-card-wrap";

        let card = null;

        try {
          card = await withTimeout(
            helpers.createCardElement(config),
            8000,
            `${config?.type || "Karte"} hat zu lange zum Laden gebraucht.`
          );
        } catch (helperError) {
          const type = String(config?.type || "");

          if (type.startsWith("custom:")) {
            const tag = type.replace("custom:", "");
            card = document.createElement(tag);
            card.setConfig(config);
          } else {
            throw helperError;
          }
        }

        card.hass = this._hass;

        wrap.appendChild(card);
        host.appendChild(wrap);
      } catch (err) {
        const wrap = document.createElement("div");
        wrap.className = "demo-page-error";
        wrap.textContent = `${config?.type || "Karte"} konnte nicht gerendert werden: ${err.message || err}`;
        host.appendChild(wrap);
      }
    }
  }


  normalizeDemoIframeUrl(value) {
    let url = String(value || "").trim();

    if (!url) {
      return "/lovelace/default_view";
    }

    if (url.startsWith("http://") || url.startsWith("https://")) {
      try {
        const parsed = new URL(url);

        if (parsed.origin === window.location.origin) {
          return parsed.pathname + parsed.search + parsed.hash;
        }

        return url;
      } catch (err) {
        return "/lovelace/default_view";
      }
    }

    if (!url.startsWith("/")) {
      url = "/" + url;
    }

    return url;
  }

  saveDemoIframeUrl() {
    const input = this.shadowRoot?.getElementById("demo-iframe-url");
    const iframe = this.shadowRoot?.getElementById("demo-iframe");
    const url = this.normalizeDemoIframeUrl(input?.value || this.demoIframeUrl);

    this.demoIframeUrl = url;
    localStorage.setItem("theme_generator_demo_iframe_url", url);

    if (input) {
      input.value = url;
    }

    if (iframe) {
      iframe.src = url;
    }

    this.status = `Demo-Standard gespeichert: ${url}`;
    this.safeRender();
  }


  reloadDemoIframe() {
    const input = this.shadowRoot?.getElementById("demo-iframe-url");
    const iframe = this.shadowRoot?.getElementById("demo-iframe");
    const url = this.normalizeDemoIframeUrl(input?.value || this.demoIframeUrl);

    this.demoIframeUrl = url;
    localStorage.setItem("theme_generator_demo_iframe_url", url);

    if (input) {
      input.value = url;
    }

    if (iframe) {
      iframe.src = url + (url.includes("?") ? "&" : "?") + "_tg_reload=" + Date.now();
    }

    this.status = `Demo-Seite geladen: ${url}`;
    this.safeRender();
  }


  setDefaultDemoIframeUrl() {
    const input = this.shadowRoot?.getElementById("demo-iframe-url");
    const iframe = this.shadowRoot?.getElementById("demo-iframe");

    this.demoIframeUrl = "/lovelace/default_view";
    localStorage.setItem("theme_generator_demo_iframe_url", this.demoIframeUrl);

    if (input) {
      input.value = this.demoIframeUrl;
    }

    if (iframe) {
      iframe.src = this.demoIframeUrl;
    }

    this.status = "Demo-Standard auf /lovelace/default_view zurückgesetzt.";
    this.safeRender();
  }


  toggleDemoIframeSidebar() {
    this.demoIframeHideSidebar = !this.demoIframeHideSidebar;
    localStorage.setItem("theme_generator_demo_iframe_hide_sidebar", this.demoIframeHideSidebar ? "true" : "false");
    this.render();
  }

  renderDemoPagePreview() {
    const url = this.normalizeDemoIframeUrl(this.demoIframeUrl || "/lovelace/default_view");
    const hideSidebar = this.demoIframeHideSidebar !== false;

    return `
      <section class="demo-iframe-shell">
        <div class="demo-iframe-head">
          <div>
            <h2>Demo Seite</h2>
            <p>Zeigt ein echtes Home-Assistant-Dashboard als Vorschau. Mushroom, Bubble und andere Custom Cards werden dadurch original gerendert.</p>
          </div>
        </div>

        <div class="demo-iframe-toolbar">
          <input id="demo-iframe-url" value="${this.escape(url)}" spellcheck="false" placeholder="/lovelace/default_view">
          <button type="button" id="demo-iframe-save">Als Standard speichern</button>
          <button type="button" id="demo-iframe-load">Laden</button>
          <button type="button" id="demo-iframe-home">HA Standard</button>
          <button type="button" id="demo-iframe-sidebar">${hideSidebar ? "Menü zeigen" : "Menü ausblenden"}</button>
        </div>

        <div class="demo-iframe-help">
          Beispiel: <code>/lovelace/default_view</code>, <code>/lovelace/serversteuerung</code> oder <code>/dashboard-serversteuerung/0</code>. Mit <b>Als Standard speichern</b> wird dieser Link beim nächsten Öffnen automatisch verwendet.
        </div>

        <div class="demo-iframe-frame ${hideSidebar ? "hide-ha-sidebar" : ""}">
          <iframe id="demo-iframe" src="${this.escape(url)}"></iframe>
        </div>
      </section>
    `;
  }


  normalizePreviewPage() {
    if (this.previewPage === "custom_cards") {
      this.previewPage = "demo_page";
    }
  }

  renderPreview() {
    this.normalizePreviewPage();

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

    const settingsItems = [
      ["basic", "mdi:palette", "Grundfarben"],
      ["backgrounds", "mdi:image-filter-hdr", "Hintergründe"],
      ["textcolors", "mdi:format-color-text", "Textfarben"],
      ["header", "mdi:page-layout-header", "Header"],
      ["sidebar", "mdi:dock-left", "Sidebar"],
      ["cards", "mdi:cards-outline", "Karten"],
      ["icons", "mdi:emoticon-outline", "Icons"],
      ["states", "mdi:checkbox-marked-circle-auto-outline", "Statusfarben"],
      ["switches", "mdi:toggle-switch-outline", "Schalter"],
      ["sliders", "mdi:tune-variant", "Slider"],
      ["inputs", "mdi:form-textbox-password", "Eingabefelder"],
      ["mushroom", "mdi:mushroom-outline", "Mushroom"],
      ["bubble", "mdi:circle-multiple-outline", "Bubble Card"],
      ["cardmod", "mdi:code-json", "card-mod"]
    ];

    const previewItems = [
      ["overview", "mdi:view-dashboard-outline", "Vorschau"],
      ["demo_page", "mdi:file-document-edit-outline", "Demo Seite"]
    ];

    const settingsMenuHtml = `
      <button class="ha-nav-item settings-parent ${page === "all_settings" ? "active" : ""}" data-settings-menu-toggle="1">
        <ha-icon icon="mdi:palette-swatch" class="ha-nav-icon"></ha-icon>
        <span>Theme Settings</span>
        <span class="settings-chevron">${this.settingsMenuOpen ? "▾" : "▸"}</span>
      </button>

      ${this.settingsMenuOpen ? `
        <div class="settings-submenu">
          ${settingsItems.map(([id, icon, label]) => `
            <button class="ha-nav-item settings-child ${page === "all_settings" && this.settingsFilter === id ? "active" : ""}" data-settings-nav="${id}">
              <ha-icon icon="${icon}" class="ha-nav-icon"></ha-icon>
              <span>${label}</span>
            </button>
          `).join("")}
        </div>
      ` : ""}
    `;

    const previewMenuHtml = `
      <div class="menu-section-label">Vorschau</div>
      ${previewItems.map(([id, icon, label]) => `
        <div class="ha-nav-item ${page === id ? "active" : ""}" data-preview-page="${id}">
          <ha-icon icon="${icon}" class="ha-nav-icon"></ha-icon>
          ${label}
        </div>
      `).join("")}
    `;

    const menuHtml = settingsMenuHtml + previewMenuHtml;

    let cardsHtml = "";

    if (page === "demo_page") {
      cardsHtml += this.renderDemoPagePreview();
    }

    if (["all_settings", "basic", "backgrounds", "textcolors"].includes(page)) {
      cardsHtml += this.renderPreviewColorGroup(page);
    }

    if (page === "clock_weather" || page === "overview") {
      cardsHtml += `
        <section class="ha-big-preview-cards compact-overview">
          <article class="ha-big-card overview-combined-card">
            <div class="overview-two">
              <div class="overview-metric">
                <div class="ha-card-icon">
                  <ha-icon icon="mdi:clock-outline"></ha-icon>
                </div>
                <div>
                  <div class="ha-clock-label">Uhrzeit</div>
                  <div class="ha-clock-big">20:29</div>
                  <div class="ha-clock-sub">Home Assistant</div>
                </div>
              </div>

              <div class="overview-metric">
                <div class="ha-card-icon weather">
                  <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>
                </div>
                <div>
                  <div class="ha-clock-label">Wetter</div>
                  <div class="ha-weather-temp">20 °C</div>
                  <div class="ha-clock-sub">Teilweise bewölkt</div>
                </div>
              </div>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "standard_cards") {
      cardsHtml += `
        <section class="ha-big-preview-cards compact-overview">
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

          <article class="ha-big-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:palette"></ha-icon>
              <h3>Theme-Farben</h3>
            </div>
            <div class="ha-status-list big clean-swatches">
              <div><span style="background:var(--p-primary)"></span> Primär</div>
              <div><span style="background:var(--p-accent)"></span> Akzent</div>
              <div><span style="background:var(--p-success)"></span> Erfolg</div>
              <div><span style="background:var(--p-warning)"></span> Warnung</div>
              <div><span style="background:var(--p-error)"></span> Fehler</div>
              <div><span style="background:var(--p-info)"></span> Info</div>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "switches" || page === "sliders") {
      cardsHtml += `
        <section class="ha-big-preview-cards compact-overview">
          <article class="ha-big-card controls-card">
            <div class="big-card-head">
              <ha-icon icon="mdi:tune-variant"></ha-icon>
              <h3>Schalter & Slider</h3>
            </div>

            <div class="control-split">
              <div>
                <div class="ha-switch-row"><span>Standard aus</span><i></i></div>
                <div class="ha-switch-row on"><span>Standard an</span><i></i></div>
                <div class="ha-switch-row disabled"><span>Deaktiviert</span><i></i></div>
              </div>

              <div>
                <div class="ha-slider-row">
                  <span>Helligkeit</span>
                  <div class="ha-slider"><b style="width:72%"></b></div>
                </div>
                <div class="ha-slider-row">
                  <span>Lautstärke</span>
                  <div class="ha-slider"><b style="width:45%"></b></div>
                </div>
              </div>
            </div>
          </article>
        </section>
      `;
    }

    if (page === "overview" || page === "mushroom" || page === "bubble") {
      cardsHtml += `
        <section class="ha-big-preview-cards compact-overview">
          <article class="ha-big-card real-mushroom-card">
            <div class="real-card-row">
              <div class="real-icon">
                <ha-icon icon="mdi:lightbulb-on-outline"></ha-icon>
              </div>
              <div class="real-card-text">
                <strong>Wohnzimmer Licht</strong>
                <small>Helligkeit 72 %</small>
              </div>
              <div class="real-toggle on"></div>
            </div>
            <div class="real-chip-row">
              <span>Wohnzimmer</span>
              <span>Auto</span>
              <span>Szene</span>
            </div>
          </article>

          <article class="ha-big-card real-bubble-card">
            <div class="bubble-pill">
              <div class="real-icon bubble">
                <ha-icon icon="mdi:flash"></ha-icon>
              </div>
              <div class="real-card-text">
                <strong>Bubble Button</strong>
                <small>Aktiv · 23 W</small>
              </div>
              <div class="bubble-action">Ein</div>
            </div>
            <div class="real-chip-row">
              <span>50 %</span>
              <span>Timer</span>
              <span>Popup</span>
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
          <button
            class="background-toggle ${this.backgroundEnabled ? "active" : ""}"
            id="toggle-background"
            title="Generator-Hintergrund an oder aus"
            type="button"
          >
            <span class="toggle-dot"></span>
            <span>Hintergrund ${this.backgroundEnabled ? "An" : "Aus"}</span>
          </button>

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

  renderEditorView() {
    const filename = this.selectedFile || this.workFile || "kein Theme geladen";

    return `
      <section class="editor-single-layout">
        <div class="editor-single-card">
          <div class="editor-single-head">
            <div>
              <h3>Theme-Code</h3>
              <p>${this.escape(filename)}</p>
            </div>
          </div>

          <textarea
            id="theme-editor"
            class="theme-editor editor-single-textarea"
            spellcheck="false"
          >${this.escape(this.editorContent)}</textarea>
        </div>
      </section>
    `;
  }


  toggleBackgroundEnabled() {
    this.backgroundEnabled = !this.backgroundEnabled;
    localStorage.setItem(
      "theme-generator-background-enabled",
      this.backgroundEnabled ? "true" : "false"
    );
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
      : this.activeView === "templates"
        ? this.renderTemplatesView()
        : this.renderEditorView();

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


        /* v1.16.2 - linke Gruppen sauber trennen */
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


        /* v1.16.2 - Vollbreite Vorschau, Farbfelder im Vorschaufenster */
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


        /* v1.16.2 - Alle Settings */
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


        /* v1.16.2 - Filter fuer Alle Settings */
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


        /* v1.16.2 - einklappbares linkes Settings-Menü */
        .settings-parent {
          display: grid !important;
          grid-template-columns: 26px minmax(0, 1fr) 22px;
          align-items: center;
          width: 100%;
          cursor: pointer;
        }

        .settings-parent span {
          min-width: 0;
        }

        .settings-chevron {
          text-align: right;
          color: var(--p-secondary);
          font-weight: 900;
        }

        .settings-submenu {
          display: grid;
          gap: 4px;
          margin: 4px 0 10px 0;
          padding-left: 10px;
          border-left: 2px solid color-mix(in srgb, var(--p-primary) 28%, transparent);
        }

        .settings-child {
          min-height: 32px !important;
          padding-left: 8px !important;
          opacity: 0.92;
        }

        .settings-child.active {
          opacity: 1;
        }

        .menu-section-label {
          margin: 14px 0 6px 8px;
          color: var(--p-secondary);
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .settings-filter-row {
          display: none !important;
        }


        /* v1.16.2 - Menü dezenter + Übersicht aufgeräumt */
        .settings-submenu .ha-nav-item,
        .settings-submenu .settings-child {
          background: transparent !important;
          border-color: transparent !important;
          color: var(--p-text) !important;
          border-radius: 10px;
        }

        .settings-submenu .settings-child.active {
          background: color-mix(in srgb, var(--p-primary) 14%, transparent) !important;
          border-color: color-mix(in srgb, var(--p-primary) 18%, transparent) !important;
          color: var(--p-primary) !important;
          font-weight: 900;
        }

        .settings-parent.active,
        .settings-parent {
          background: color-mix(in srgb, var(--p-primary) 10%, transparent) !important;
          border-color: color-mix(in srgb, var(--p-primary) 16%, transparent) !important;
          color: var(--p-text) !important;
        }

        .compact-overview {
          max-width: 920px;
          margin: 0 auto;
        }

        .overview-combined-card {
          min-height: 150px;
        }

        .overview-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
        }

        .overview-metric {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .controls-card {
          min-height: 190px;
        }

        .control-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .clean-swatches {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .real-mushroom-card,
        .real-bubble-card {
          min-height: 150px;
        }

        .real-card-row,
        .bubble-pill {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px;
          border-radius: 20px;
          background: color-mix(in srgb, var(--p-bg) 42%, transparent);
          border: 1px solid color-mix(in srgb, var(--p-border) 70%, transparent);
        }

        .real-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-primary) 18%, transparent);
          color: var(--p-primary);
        }

        .real-icon.bubble {
          background: color-mix(in srgb, var(--p-bubble) 22%, transparent);
          color: var(--p-bubble);
        }

        .real-card-text {
          min-width: 0;
          flex: 1;
        }

        .real-card-text strong {
          display: block;
          font-size: 14px;
        }

        .real-card-text small {
          display: block;
          color: var(--p-secondary);
          margin-top: 2px;
        }

        .real-toggle {
          width: 44px;
          height: 24px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-secondary) 28%, transparent);
          position: relative;
        }

        .real-toggle::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          top: 2px;
          left: 2px;
          border-radius: 999px;
          background: var(--p-card);
        }

        .real-toggle.on {
          background: var(--p-primary);
        }

        .real-toggle.on::after {
          left: 22px;
        }

        .bubble-action {
          padding: 7px 12px;
          border-radius: 999px;
          background: var(--p-bubble);
          color: #fff;
          font-weight: 900;
          font-size: 12px;
        }

        .real-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .real-chip-row span {
          padding: 6px 10px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-primary) 14%, transparent);
          color: var(--p-text);
          font-weight: 800;
          font-size: 12px;
        }


        /* v1.16.2 - sauberes Kartenraster */
        .ha-content.clean-preview {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 34px 28px;
        }

        .compact-overview,
        .ha-big-preview-cards.compact-overview {
          width: min(100%, 980px);
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .ha-big-preview-cards {
          width: min(100%, 980px);
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .ha-big-card {
          width: 100%;
          min-height: 210px !important;
          height: 210px;
          margin: 0 !important;
          padding: 22px !important;
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .overview-combined-card {
          grid-column: span 2;
          height: 170px !important;
          min-height: 170px !important;
        }

        .overview-two {
          height: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          align-items: center;
        }

        .overview-metric {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 0;
        }

        .ha-card-icon {
          flex: 0 0 auto;
        }

        .ha-clock-big,
        .ha-weather-temp {
          line-height: 1;
        }

        .big-card-head {
          margin-bottom: 16px;
        }

        .entity-row {
          min-height: 44px;
          align-items: center;
        }

        .controls-card {
          grid-column: span 2;
          height: 210px !important;
          min-height: 210px !important;
        }

        .control-split {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 34px;
          align-items: center;
        }

        .ha-switch-row {
          min-height: 34px;
          align-items: center;
        }

        .ha-slider-row {
          margin: 0 0 18px 0;
        }

        .real-mushroom-card,
        .real-bubble-card {
          height: 210px !important;
          min-height: 210px !important;
          justify-content: center;
        }

        .real-card-row,
        .bubble-pill {
          min-height: 76px;
        }

        .real-chip-row {
          margin-top: 16px;
        }

        .clean-swatches {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 24px;
        }

        .clean-swatches div {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 24px;
        }

        .clean-swatches span {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          flex: 0 0 auto;
        }


        /* v1.16.2 - Vorschau-Raster repariert */
        .ha-content.clean-preview {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 18px !important;
          padding: 34px 28px !important;
          overflow-x: hidden;
        }

        .ha-big-preview-cards,
        .ha-big-preview-cards.compact-overview,
        .compact-overview {
          width: min(100%, 980px) !important;
          max-width: 980px !important;
          margin: 0 auto !important;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 18px !important;
          align-items: stretch !important;
        }

        .ha-big-card {
          width: 100% !important;
          max-width: none !important;
          min-width: 0 !important;
          min-height: 210px !important;
          height: 210px !important;
          margin: 0 !important;
          padding: 22px !important;
          overflow: hidden;
        }

        .overview-combined-card,
        .controls-card {
          grid-column: 1 / -1 !important;
        }

        .overview-combined-card {
          height: 170px !important;
          min-height: 170px !important;
        }

        .controls-card {
          height: 210px !important;
          min-height: 210px !important;
        }

        .overview-two,
        .control-split {
          width: 100%;
          height: 100%;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 28px !important;
          align-items: center !important;
        }

        .real-mushroom-card,
        .real-bubble-card {
          height: 210px !important;
          min-height: 210px !important;
        }

        .real-card-row,
        .bubble-pill {
          min-width: 0;
        }


        /* v1.16.2 - Farbkarten und Vorschau sauber ausrichten */

        .ha-nav-icon {
          width: 22px !important;
          min-width: 22px !important;
          height: 22px !important;
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          opacity: 0.95;
        }

        .settings-child {
          display: grid !important;
          grid-template-columns: 26px minmax(0, 1fr) !important;
          gap: 8px !important;
          align-items: center !important;
        }

        .settings-child span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .preview-color-editor {
          width: min(100%, 1120px) !important;
          max-width: 1120px !important;
          margin: 0 auto !important;
          padding: 28px !important;
          display: block !important;
        }

        .preview-color-head {
          margin-bottom: 22px !important;
        }

        .preview-color-head h2 {
          font-size: 34px !important;
          line-height: 1.1 !important;
          margin: 0 0 8px 0 !important;
        }

        .preview-color-head p {
          max-width: 900px;
          white-space: normal !important;
          overflow: visible !important;
          text-overflow: unset !important;
        }

        .preview-color-grid {
          width: 100% !important;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(320px, 1fr)) !important;
          gap: 18px !important;
          align-items: stretch !important;
        }

        .preview-field-card {
          width: 100% !important;
          min-width: 0 !important;
          min-height: 185px !important;
          height: auto !important;
          padding: 18px !important;
          border-radius: 18px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-start !important;
          gap: 10px !important;
          overflow: hidden !important;
        }

        .preview-field-head {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) 54px !important;
          gap: 14px !important;
          align-items: start !important;
          margin-bottom: 0 !important;
        }

        .preview-field-head strong {
          display: block !important;
          font-size: 16px !important;
          line-height: 1.2 !important;
          white-space: normal !important;
        }

        .preview-field-head code {
          display: block !important;
          margin-top: 4px !important;
          font-size: 12px !important;
          opacity: 0.8 !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }

        .preview-field-head input[type="color"] {
          width: 52px !important;
          height: 40px !important;
          border-radius: 10px !important;
        }

        .preview-value-input,
        .value-input.preview-value-input {
          width: 100% !important;
          height: 38px !important;
          min-height: 38px !important;
          border-radius: 12px !important;
          padding: 0 12px !important;
          font-size: 13px !important;
          box-sizing: border-box !important;
        }

        .preview-alpha-row,
        .alpha-row.preview-alpha-row,
        .alpha-row {
          display: grid !important;
          grid-template-columns: 88px minmax(0, 1fr) 46px !important;
          gap: 12px !important;
          align-items: center !important;
          margin-top: 6px !important;
          width: 100% !important;
        }

        .alpha-row span {
          color: var(--p-secondary) !important;
          opacity: 1 !important;
          font-size: 12px !important;
          white-space: nowrap !important;
        }

        .alpha-row input[type="range"] {
          width: 100% !important;
          min-width: 0 !important;
        }

        .alpha-row strong,
        .alpha-row b {
          color: var(--p-text) !important;
          opacity: 1 !important;
          font-size: 12px !important;
          text-align: right !important;
          white-space: nowrap !important;
        }

        .alpha-hint {
          color: var(--p-secondary) !important;
          opacity: 0.95 !important;
          font-size: 12px !important;
          line-height: 1.25 !important;
        }

        .ha-content.clean-preview {
          display: block !important;
          padding: 34px 28px !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
        }

        .ha-big-preview-cards,
        .ha-big-preview-cards.compact-overview,
        .compact-overview {
          width: min(100%, 1040px) !important;
          max-width: 1040px !important;
          margin: 0 auto 18px auto !important;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 18px !important;
          align-items: stretch !important;
        }

        .ha-big-card {
          box-sizing: border-box !important;
          width: 100% !important;
          min-width: 0 !important;
          max-width: none !important;
          height: 220px !important;
          min-height: 220px !important;
          margin: 0 !important;
          overflow: hidden !important;
        }

        .overview-combined-card,
        .controls-card {
          grid-column: 1 / -1 !important;
        }

        .overview-combined-card {
          height: 170px !important;
          min-height: 170px !important;
        }

        .controls-card {
          height: 220px !important;
          min-height: 220px !important;
        }

        .real-mushroom-card,
        .real-bubble-card {
          height: 220px !important;
          min-height: 220px !important;
        }

        .overview-two,
        .control-split {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 28px !important;
          align-items: center !important;
          height: 100% !important;
        }

        @media (min-width: 1500px) {
          .preview-color-grid {
            grid-template-columns: repeat(3, minmax(300px, 1fr)) !important;
          }
        }


        /* v1.16.2 - finaler Layout-Fix */
        .ha-preview {
          grid-template-columns: 250px minmax(0, 1fr) !important;
          width: 100% !important;
          overflow: hidden !important;
        }

        .ha-side {
          width: 250px !important;
          min-width: 250px !important;
          max-width: 250px !important;
          overflow: hidden !important;
        }

        .ha-main {
          min-width: 0 !important;
          overflow: hidden !important;
        }

        .ha-content.clean-preview {
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          padding: 30px 26px !important;
          box-sizing: border-box !important;
        }

        .settings-child {
          grid-template-columns: 28px minmax(0, 1fr) !important;
          padding-right: 10px !important;
        }

        .settings-child span,
        .settings-parent span,
        .ha-nav-item span {
          min-width: 0 !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }

        .preview-color-editor {
          width: 100% !important;
          max-width: 980px !important;
          margin: 0 auto !important;
          padding: 28px !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }

        .preview-color-grid {
          width: 100% !important;
          max-width: 100% !important;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 18px !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }

        .preview-field-card {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }

        .preview-field-head {
          width: 100% !important;
          max-width: 100% !important;
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) 54px !important;
          gap: 12px !important;
          box-sizing: border-box !important;
        }

        .preview-value-input,
        .value-input,
        .value-input.preview-value-input {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
        }

        .alpha-row,
        .preview-alpha-row,
        .alpha-row.preview-alpha-row {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          display: grid !important;
          grid-template-columns: 82px minmax(0, 1fr) 44px !important;
          gap: 10px !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }

        .alpha-row input[type="range"] {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
        }

        .ha-big-preview-cards,
        .ha-big-preview-cards.compact-overview,
        .compact-overview {
          width: 100% !important;
          max-width: 980px !important;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 18px !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }

        .ha-big-card {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }

        @media (min-width: 1500px) {
          .preview-color-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }


        /* v1.16.2 - Menütext vollständig anzeigen */
        .ha-side {
          width: 280px !important;
          min-width: 280px !important;
          max-width: 280px !important;
        }

        .ha-preview {
          grid-template-columns: 280px minmax(0, 1fr) !important;
        }

        .ha-nav-item span,
        .settings-child span,
        .settings-parent span {
          width: auto !important;
          flex: 1 1 auto !important;
          min-width: 0 !important;
          max-width: none !important;
          text-align: left !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }

        .ha-nav-icon,
        .ha-nav-item .ha-nav-icon,
        .settings-child ha-icon,
        .settings-parent ha-icon {
          width: 24px !important;
          min-width: 24px !important;
          max-width: 24px !important;
          flex: 0 0 24px !important;
          text-align: center !important;
        }

        .settings-child {
          grid-template-columns: 28px minmax(0, 1fr) !important;
        }

        .settings-parent {
          grid-template-columns: 28px minmax(0, 1fr) 18px !important;
        }


        /* v1.16.2 - Mushroom/Bubble/card-mod sauber gruppieren */
        .preview-section-title {
          grid-column: 1 / -1;
          margin: 12px 0 -4px 0;
          padding: 10px 4px 6px 4px;
          color: var(--p-text);
          font-size: 18px;
          font-weight: 850;
          letter-spacing: 0.01em;
          border-bottom: 1px solid var(--p-border);
        }

        .preview-empty-note {
          grid-column: 1 / -1;
          padding: 18px;
          border: 1px dashed var(--p-border);
          border-radius: 16px;
          color: var(--p-secondary);
          background: color-mix(in srgb, var(--p-card) 70%, transparent);
        }


        /* v1.16.2 - Farbformat Auswahl und Alpha nur bei Farben */
        .format-row {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 2px;
        }

        .format-row button {
          height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid var(--p-border);
          background: color-mix(in srgb, var(--p-card) 85%, transparent);
          color: var(--p-secondary);
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .format-row button.active {
          background: var(--p-primary);
          border-color: var(--p-primary);
          color: white;
        }

        .value-hint {
          color: var(--p-secondary);
          opacity: 0.8;
          font-size: 12px;
          line-height: 1.25;
          margin-top: 2px;
        }

        .preview-field-card.is-value-field .preview-field-head {
          grid-template-columns: minmax(0, 1fr) !important;
        }


        /* v1.16.2 - Demo Buttons Vorschauseite */
        .demo-preview-page {
          width: min(100%, 1220px);
          margin: 0 auto;
          padding: 30px;
          box-sizing: border-box;
        }

        .demo-preview-head {
          margin-bottom: 22px;
        }

        .demo-preview-head h2 {
          margin: 0 0 8px 0;
          font-size: 32px;
          line-height: 1.1;
          color: var(--p-text);
        }

        .demo-preview-head p {
          margin: 0;
          color: var(--p-secondary);
          font-size: 14px;
        }

        .demo-preview-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .demo-preview-column {
          border: 1px solid var(--p-border);
          background: color-mix(in srgb, var(--p-card) 92%, transparent);
          border-radius: 22px;
          padding: 16px;
          min-width: 0;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        .demo-column-title {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 34px;
          margin-bottom: 14px;
          color: var(--p-text);
          font-size: 17px;
          font-weight: 850;
        }

        .demo-column-title ha-icon {
          color: var(--p-primary);
          --mdc-icon-size: 22px;
        }

        .demo-tile-card,
        .demo-mushroom-card,
        .demo-bubble-card,
        .demo-settings-card {
          border: 1px solid var(--p-border);
          background: color-mix(in srgb, var(--p-card) 86%, white 8%);
          border-radius: 16px;
          padding: 12px;
          margin-bottom: 12px;
          min-height: 58px;
          box-sizing: border-box;
          color: var(--p-text);
        }

        .demo-tile-card {
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr) auto;
          gap: 10px;
          align-items: center;
        }

        .demo-tile-icon,
        .demo-mushroom-icon,
        .demo-bubble-icon {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--p-primary) 18%, transparent);
          color: var(--p-primary);
        }

        .demo-tile-icon ha-icon,
        .demo-mushroom-icon ha-icon,
        .demo-bubble-icon ha-icon {
          --mdc-icon-size: 21px;
        }

        .demo-tile-info,
        .demo-mushroom-info,
        .demo-bubble-info,
        .demo-settings-card > div:first-child {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .demo-tile-info strong,
        .demo-mushroom-info strong,
        .demo-bubble-info strong,
        .demo-settings-card strong {
          font-size: 13px;
          color: var(--p-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .demo-tile-info span,
        .demo-mushroom-info span,
        .demo-bubble-info span,
        .demo-settings-card span,
        .demo-settings-note {
          font-size: 11px;
          color: var(--p-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .demo-switch {
          width: 38px;
          height: 22px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-secondary) 22%, transparent);
          position: relative;
        }

        .demo-switch::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.22);
        }

        .demo-switch.on {
          background: var(--p-primary);
        }

        .demo-switch.on::after {
          left: 19px;
        }

        .demo-mini-slider,
        .demo-bubble-slider,
        .demo-settings-slider {
          height: 10px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--p-secondary) 22%, transparent);
          overflow: hidden;
        }

        .demo-mini-slider {
          grid-column: 2 / -1;
        }

        .demo-mini-slider i,
        .demo-bubble-slider i,
        .demo-settings-slider i {
          display: block;
          height: 100%;
          width: 72%;
          border-radius: 999px;
          background: var(--p-primary);
        }

        .demo-mushroom-card {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr) auto;
          gap: 10px;
          align-items: center;
          border-radius: 20px;
        }

        .demo-bubble-card {
          border-radius: 24px;
          padding: 10px;
        }

        .demo-bubble-main {
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr) auto;
          gap: 10px;
          align-items: center;
        }

        .demo-bubble-action {
          min-width: 42px;
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--p-bubble);
          color: white;
          text-align: center;
          font-size: 11px;
          font-weight: 850;
        }

        .demo-bubble-slider {
          margin: 10px 4px 2px 50px;
        }

        .demo-settings-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .demo-settings-note {
          white-space: normal;
          line-height: 1.35;
          border: 1px dashed var(--p-border);
          border-radius: 16px;
          padding: 12px;
          background: color-mix(in srgb, var(--p-card) 75%, transparent);
        }


        /* v1.16.2 - Demo Buttons im HA Vorschaufenster und mit Themefarben */
        .ha-content .demo-preview-page {
          width: min(100%, 1220px);
          margin: 0 auto;
          padding: 30px;
          box-sizing: border-box;
          color: var(--demo-text);
        }

        .ha-content .demo-preview-head h2 {
          color: var(--demo-text) !important;
        }

        .ha-content .demo-preview-head p {
          color: var(--demo-secondary) !important;
        }

        .ha-content .demo-preview-column {
          border-color: var(--demo-border) !important;
          background: color-mix(in srgb, var(--demo-card) 94%, transparent) !important;
          color: var(--demo-text) !important;
        }

        .ha-content .demo-column-title {
          color: var(--demo-text) !important;
        }

        .ha-content .demo-column-title ha-icon {
          color: var(--demo-primary) !important;
        }

        .ha-content .demo-tile-card,
        .ha-content .demo-mushroom-card,
        .ha-content .demo-bubble-card,
        .ha-content .demo-settings-card {
          border-color: var(--demo-border) !important;
          background: color-mix(in srgb, var(--demo-card) 82%, white 8%) !important;
          color: var(--demo-text) !important;
        }

        .ha-content .demo-tile-icon,
        .ha-content .demo-mushroom-icon,
        .ha-content .demo-bubble-icon {
          background: color-mix(in srgb, var(--demo-primary) 18%, transparent) !important;
          color: var(--demo-primary) !important;
        }

        .ha-content .demo-tile-info strong,
        .ha-content .demo-mushroom-info strong,
        .ha-content .demo-bubble-info strong,
        .ha-content .demo-settings-card strong {
          color: var(--demo-text) !important;
        }

        .ha-content .demo-tile-info span,
        .ha-content .demo-mushroom-info span,
        .ha-content .demo-bubble-info span,
        .ha-content .demo-settings-card span,
        .ha-content .demo-settings-note {
          color: var(--demo-secondary) !important;
        }

        .ha-content .demo-switch.on,
        .ha-content .demo-mini-slider i,
        .ha-content .demo-bubble-slider i,
        .ha-content .demo-settings-slider i {
          background: var(--demo-primary) !important;
        }

        .ha-content .demo-bubble-action {
          background: var(--demo-bubble) !important;
          color: white !important;
        }

        .ha-content .demo-settings-note {
          border-color: var(--demo-border) !important;
          background: color-mix(in srgb, var(--demo-card) 75%, transparent) !important;
        }


        /* v1.16.2 - Eigene Demo-Seite mit gespeicherter YAML */
        .demo-page-editor-shell {
          width: min(100%, 1240px);
          margin: 0 auto;
          padding: 28px;
          box-sizing: border-box;
        }

        .demo-page-head {
          margin-bottom: 18px;
        }

        .demo-page-head h2 {
          margin: 0 0 8px 0;
          font-size: 32px;
          line-height: 1.1;
          color: var(--p-text);
        }

        .demo-page-head p {
          margin: 0;
          color: var(--p-secondary);
          font-size: 14px;
        }

        .demo-page-toolbar {
          display: grid;
          grid-template-columns: minmax(140px, 1fr) minmax(180px, 1fr) auto auto auto auto;
          gap: 10px;
          align-items: center;
          margin-bottom: 16px;
        }

        .demo-page-toolbar select,
        .demo-page-toolbar input,
        .demo-page-toolbar button {
          height: 40px;
          border-radius: 12px;
          border: 1px solid var(--p-border);
          background: var(--p-card);
          color: var(--p-text);
          padding: 0 12px;
          box-sizing: border-box;
          font-weight: 700;
        }

        .demo-page-toolbar button {
          background: var(--p-primary);
          color: white;
          cursor: pointer;
          border-color: var(--p-primary);
        }

        .demo-page-layout {
          display: grid;
          grid-template-columns: minmax(360px, 0.85fr) minmax(420px, 1.15fr);
          gap: 16px;
          align-items: stretch;
        }

        #demo-page-editor {
          width: 100%;
          min-height: 640px;
          resize: vertical;
          border-radius: 18px;
          border: 1px solid var(--p-border);
          background: color-mix(in srgb, var(--p-card) 90%, black 8%);
          color: var(--p-text);
          padding: 16px;
          box-sizing: border-box;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13px;
          line-height: 1.45;
        }

        .demo-page-preview {
          min-height: 640px;
          border-radius: 18px;
          border: 1px solid var(--p-border);
          background: var(--p-bg);
          padding: 16px;
          box-sizing: border-box;
          overflow: auto;
        }

        .demo-page-preview-title {
          color: var(--p-secondary);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .demo-page-rendered {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          align-items: start;
        }

        .demo-page-card-wrap {
          min-width: 0;
        }

        .demo-page-error,
        .demo-page-empty {
          border: 1px dashed var(--p-border);
          background: color-mix(in srgb, var(--p-card) 70%, transparent);
          color: var(--p-secondary);
          padding: 14px;
          border-radius: 14px;
          font-size: 13px;
          line-height: 1.35;
        }

        .demo-page-error {
          color: var(--p-error);
        }


        /* v1.16.2 - Demo Seite als echtes Home-Assistant iframe */
        .demo-iframe-shell {
          width: min(100%, 1240px);
          margin: 0 auto;
          padding: 28px;
          box-sizing: border-box;
        }

        .demo-iframe-head {
          margin-bottom: 16px;
        }

        .demo-iframe-head h2 {
          margin: 0 0 8px 0;
          font-size: 32px;
          line-height: 1.1;
          color: var(--p-text);
        }

        .demo-iframe-head p {
          margin: 0;
          color: var(--p-secondary);
          font-size: 14px;
        }

        .demo-iframe-toolbar {
          display: grid;
          grid-template-columns: minmax(280px, 1fr) auto auto auto;
          gap: 10px;
          align-items: center;
          margin-bottom: 10px;
        }

        .demo-iframe-toolbar input,
        .demo-iframe-toolbar button {
          height: 42px;
          border-radius: 13px;
          border: 1px solid var(--p-border);
          background: var(--p-card);
          color: var(--p-text);
          padding: 0 14px;
          box-sizing: border-box;
          font-weight: 750;
        }

        .demo-iframe-toolbar button {
          background: var(--p-primary);
          color: white;
          cursor: pointer;
          border-color: var(--p-primary);
        }

        .demo-iframe-help {
          color: var(--p-secondary);
          font-size: 12px;
          margin-bottom: 14px;
        }

        .demo-iframe-help code {
          background: color-mix(in srgb, var(--p-card) 86%, black 8%);
          color: var(--p-text);
          padding: 3px 7px;
          border-radius: 8px;
          border: 1px solid var(--p-border);
        }

        .demo-iframe-frame {
          height: 720px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--p-border);
          background: var(--p-bg);
          box-shadow: 0 18px 45px rgba(0,0,0,0.16);
        }

        .demo-iframe-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          background: var(--p-bg);
        }


        /* v1.16.2 - iframe Demo Seite ohne Home Assistant Seitenmenü */
        .demo-iframe-frame {
          position: relative;
          height: 720px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--p-border);
          background: var(--p-bg);
          box-shadow: 0 18px 45px rgba(0,0,0,0.16);
        }

        .demo-iframe-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          background: var(--p-bg);
        }

        .demo-iframe-frame.hide-ha-sidebar iframe {
          width: calc(100% + 255px) !important;
          height: 100% !important;
          margin-left: -255px !important;
          max-width: none !important;
        }


        /* v1.16.2 - Editor links, Live-Vorschau rechts */
        .editor-split-view {
          display: grid;
          grid-template-columns: minmax(420px, 0.95fr) minmax(460px, 1.05fr);
          gap: 18px;
          align-items: stretch;
          min-height: 720px;
        }

        .editor-code-pane,
        .editor-preview-pane {
          min-width: 0;
          border: 1px solid var(--ha-card-border-color, rgba(255,255,255,0.14));
          background: color-mix(in srgb, var(--card-background-color, #1f2937) 94%, black 4%);
          border-radius: 20px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .editor-pane-head {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid var(--ha-card-border-color, rgba(255,255,255,0.12));
          background: color-mix(in srgb, var(--card-background-color, #1f2937) 82%, black 10%);
          box-sizing: border-box;
        }

        .editor-pane-head strong {
          display: block;
          color: var(--primary-text-color, #fff);
          font-size: 15px;
          font-weight: 850;
        }

        .editor-pane-head span {
          display: block;
          margin-top: 3px;
          color: var(--secondary-text-color, rgba(255,255,255,0.68));
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 460px;
        }

        .editor-split-view #editor {
          width: 100%;
          height: calc(100% - 58px);
          min-height: 662px;
          border: 0;
          border-radius: 0;
          resize: none;
          box-sizing: border-box;
        }

        .editor-preview-box {
          height: calc(100% - 58px);
          min-height: 662px;
          overflow: auto;
          padding: 16px;
          box-sizing: border-box;
          background: var(--primary-background-color, #111827);
        }

        .editor-preview-box .ha-preview {
          min-height: 620px;
        }

        .editor-preview-box .ha-shell {
          min-height: 620px;
        }

        .editor-preview-box .ha-content {
          max-height: 620px;
          overflow: auto;
        }

        @media (max-width: 1200px) {
          .editor-split-view {
            grid-template-columns: 1fr;
          }

          .editor-split-view #editor,
          .editor-preview-box {
            min-height: 520px;
          }
        }

        @media (max-width: 900px) {
          .demo-iframe-frame {
            height: 620px;
          }

          .demo-iframe-frame.hide-ha-sidebar iframe {
            width: calc(100% + 220px) !important;
            margin-left: -220px !important;
          }
        }

        @media (max-width: 900px) {
          .demo-iframe-toolbar {
            grid-template-columns: 1fr;
          }

          .demo-iframe-frame {
            height: 620px;
          }
        }

        @media (max-width: 1150px) {
          .demo-page-layout,
          .demo-page-toolbar,
          .demo-page-rendered {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1300px) {
          .demo-preview-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .demo-preview-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1050px) {
          .ha-preview {
            grid-template-columns: 1fr !important;
          }

          .ha-side {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
          }

          .preview-color-grid,
          .ha-big-preview-cards,
          .ha-big-preview-cards.compact-overview,
          .compact-overview {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 1050px) {
          .preview-color-grid,
          .ha-big-preview-cards,
          .ha-big-preview-cards.compact-overview,
          .compact-overview {
            grid-template-columns: 1fr !important;
          }

          .ha-big-card,
          .controls-card,
          .overview-combined-card,
          .real-mushroom-card,
          .real-bubble-card {
            height: auto !important;
            min-height: 210px !important;
          }

          .overview-two,
          .control-split {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 900px) {
          .ha-big-preview-cards,
          .ha-big-preview-cards.compact-overview,
          .compact-overview {
            grid-template-columns: 1fr !important;
          }

          .overview-combined-card,
          .controls-card {
            grid-column: 1 / -1 !important;
            height: auto !important;
          }

          .overview-two,
          .control-split {
            grid-template-columns: 1fr !important;
          }

          .ha-big-card {
            height: auto !important;
          }
        }

        @media (max-width: 900px) {
          .compact-overview,
          .ha-big-preview-cards,
          .ha-big-preview-cards.compact-overview {
            grid-template-columns: 1fr;
            max-width: 100%;
          }

          .overview-combined-card,
          .controls-card {
            grid-column: span 1;
            height: auto !important;
            min-height: 210px !important;
          }

          .overview-two,
          .control-split {
            grid-template-columns: 1fr;
          }

          .ha-big-card {
            height: auto;
            min-height: 210px !important;
          }
        }

        @media (max-width: 900px) {
          .overview-two,
          .control-split {
            grid-template-columns: 1fr;
          }
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
      

        /* v1.16.2 - View Tabs immer nebeneinander */
        .view-switch {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: nowrap;
          gap: 6px;
          width: auto;
          max-width: 100%;
          overflow-x: auto;
          padding: 4px;
        }

        .view-switch button {
          flex: 0 0 auto;
          white-space: nowrap;
          min-width: auto;
        }


        /* v1.16.2 - Template Bibliothek */
        .templates-page {
          display: grid;
          gap: 18px;
        }

        .templates-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
        }

        .templates-head h2 {
          margin: 0 0 6px;
          font-size: 22px;
        }

        .templates-head p {
          margin: 0;
          color: var(--secondary-text-color);
          line-height: 1.45;
        }

        .templates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 18px;
        }

        .template-card {
          border: 1px solid var(--ha-card-border-color);
          border-radius: 24px;
          background: var(--card-background-color);
          overflow: hidden;
          box-shadow: var(--ha-card-box-shadow);
        }

        .template-preview {
          background: var(--secondary-background-color);
          aspect-ratio: 16 / 7.5;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .template-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .template-preview-empty {
          color: var(--secondary-text-color);
        }

        .template-body {
          padding: 16px;
          display: grid;
          gap: 12px;
        }

        .template-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .template-meta span {
          font-size: 12px;
          padding: 5px 9px;
          border-radius: 999px;
          background: var(--secondary-background-color);
          color: var(--secondary-text-color);
        }

        .template-body h3 {
          margin: 0;
          font-size: 18px;
        }

        .template-body p {
          margin: 0;
          color: var(--secondary-text-color);
          line-height: 1.45;
        }

        .template-vars {
          display: grid;
          gap: 6px;
        }

        .template-vars div {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
          padding: 7px 9px;
          border-radius: 12px;
          background: var(--secondary-background-color);
        }

        .template-vars span {
          color: var(--secondary-text-color);
        }

        .template-vars code {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }

        .template-yaml summary {
          cursor: pointer;
          color: var(--primary-color);
          font-weight: 700;
        }

        .template-yaml pre {
          max-height: 220px;
          overflow: auto;
          padding: 12px;
          border-radius: 14px;
          background: var(--secondary-background-color);
          font-size: 12px;
          line-height: 1.45;
        }

        .template-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }




        /* v1.16.2 - card-mod neue Blöcke */
        .cardmod-add-actions {
          margin-top: -4px;
          padding-top: 8px;
          border-top: 1px solid var(--ha-card-border-color);
        }

        .cardmod-add-actions button {
          font-size: 12px;
          padding: 9px 11px;
        }


        /* v1.16.2 - card-mod / CSS Codekarten */
        .code-field-card {
          align-items: stretch;
        }

        .code-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 5px 9px;
          font-size: 12px;
          font-weight: 700;
          background: var(--secondary-background-color);
          color: var(--primary-color);
          border: 1px solid var(--ha-card-border-color);
        }

        .code-field-textarea {
          width: 100%;
          min-height: 170px;
          resize: vertical;
          border-radius: 14px;
          border: 1px solid var(--ha-card-border-color);
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          padding: 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 12px;
          line-height: 1.45;
          box-sizing: border-box;
          white-space: pre;
          overflow: auto;
        }

        .code-field-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .code-field-actions button {
          width: auto;
        }

        /* v1.16.2 - View Tabs immer in einer Zeile */
        .view-switch {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: nowrap;
          gap: 6px;
          width: auto;
          max-width: 100%;
          overflow-x: auto;
          padding: 4px;
        }

        .view-switch button {
          flex: 0 0 auto;
          white-space: nowrap;
          min-width: auto;
        }



        /* v1.16.2 - Editor ohne Live-Vorschau */
        .editor-single-layout {
          display: block;
          width: 100%;
        }

        .editor-single-card {
          border: 1px solid var(--ha-card-border-color);
          border-radius: 24px;
          background: var(--card-background-color);
          overflow: hidden;
          box-shadow: var(--ha-card-box-shadow);
        }

        .editor-single-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 18px;
          border-bottom: 1px solid var(--ha-card-border-color);
        }

        .editor-single-head h3 {
          margin: 0 0 4px;
          font-size: 18px;
        }

        .editor-single-head p {
          margin: 0;
          color: var(--secondary-text-color);
          font-size: 13px;
        }

        .editor-single-textarea {
          width: 100%;
          min-height: 72vh;
          border: 0;
          border-radius: 0;
          resize: vertical;
          box-sizing: border-box;
        }



        /* v1.16.2 - Hintergrund an/aus */
        .background-off {
          background-image: none !important;
          background: var(--primary-background-color, #111827) !important;
        }

        .background-off::before,
        .background-off::after {
          display: none !important;
          background-image: none !important;
        }

        .background-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--ha-card-border-color);
          background: rgba(255,255,255,0.06);
          color: var(--primary-text-color);
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          user-select: none;
          transition: all .18s ease;
          white-space: nowrap;
        }

        .background-toggle:hover {
          background: rgba(255,255,255,0.10);
        }

        .background-toggle .toggle-dot {
          width: 28px;
          height: 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          position: relative;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.16);
          flex: 0 0 auto;
        }

        .background-toggle .toggle-dot::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          top: 2px;
          left: 2px;
          background: rgba(255,255,255,0.78);
          transition: transform .18s ease, background .18s ease;
        }

        .background-toggle.active .toggle-dot {
          background: var(--accent-color, #1a9ce2);
        }

        .background-toggle.active .toggle-dot::after {
          transform: translateX(12px);
          background: white;
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
              <h1>Theme Generator <span class="version-pill">v1.16.2</span></h1>
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
                    <button class="${this.activeView === "templates" ? "active" : ""}" id="view-templates">Templates</button>
                </div>
                <div class="inline-status">${this.escape(this.status)}</div>
              </div>
              ${contentPanel}
            </div>
          </section>
        </div>
      </div>
    `;

    this.shadowRoot.getElementById("toggle-background")?.addEventListener("click", () => this.toggleBackgroundEnabled());
    this.shadowRoot.querySelectorAll("[data-settings-filter]").forEach((item) => {
      item.addEventListener("click", (event) => {
        this.settingsFilter = event.currentTarget.dataset.settingsFilter || "all";
        this.previewPage = "all_settings";
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-settings-menu-toggle]").forEach((item) => {
      item.addEventListener("click", () => {
        this.settingsMenuOpen = !this.settingsMenuOpen;
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll("[data-settings-nav]").forEach((item) => {
      item.addEventListener("click", (event) => {
        this.settingsFilter = event.currentTarget.dataset.settingsNav || "basic";
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
      this.shadowRoot.getElementById("view-templates")?.addEventListener("click", () => {
        this.setView("templates");
        this.loadTemplates();
      });

    this.shadowRoot.getElementById("demo-iframe-save")?.addEventListener("click", () => {
      this.saveDemoIframeUrl();
    });

    this.shadowRoot.getElementById("demo-iframe-load")?.addEventListener("click", () => {
      this.reloadDemoIframe();
    });

    this.shadowRoot.getElementById("demo-iframe-home")?.addEventListener("click", () => {
      this.setDefaultDemoIframeUrl();
    });

    this.shadowRoot.getElementById("demo-iframe-sidebar")?.addEventListener("click", () => {
      this.toggleDemoIframeSidebar();
    });

    this.shadowRoot.getElementById("demo-iframe-url")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.saveDemoIframeUrl();
      }
    });

      this.shadowRoot.getElementById("templates-refresh")?.addEventListener("click", () => {
        this.loadTemplates();
      });

      this.shadowRoot.querySelectorAll("[data-template-copy]").forEach((button) => {
        button.addEventListener("click", (event) => {
          this.copyTemplateYaml(event.currentTarget.dataset.templateCopy);
        });
      });

      this.shadowRoot.querySelectorAll("[data-template-insert]").forEach((button) => {
        button.addEventListener("click", (event) => {
          this.insertTemplateYaml(event.currentTarget.dataset.templateInsert);
        });
      });

      this.shadowRoot.querySelectorAll("[data-code-copy]").forEach((button) => {
        button.addEventListener("click", (event) => {
          this.copyCodeThemeValue(event.currentTarget.dataset.codeCopy);
        });
      });

      this.shadowRoot.querySelectorAll("[data-code-open]").forEach((button) => {
        button.addEventListener("click", (event) => {
          this.openCodeThemeValueInEditor(event.currentTarget.dataset.codeOpen);
        });
      });

      this.shadowRoot.querySelectorAll("[data-cardmod-add]").forEach((button) => {
        button.addEventListener("click", (event) => {
          this.addCardModBlock(event.currentTarget.dataset.cardmodAdd);
        });
      });




    this.shadowRoot.getElementById("demo-page-list")?.addEventListener("click", () => {
      this.loadDemoPageFiles();
    });

    this.shadowRoot.getElementById("demo-page-select")?.addEventListener("change", (event) => {
      this.demoPageFile = event.target.value || "demo_preview.yaml";

      const input = this.shadowRoot.getElementById("demo-page-filename");

      if (input) {
        input.value = this.demoPageFile;
      }
    });

    this.shadowRoot.getElementById("demo-page-load")?.addEventListener("click", () => {
      const select = this.shadowRoot.getElementById("demo-page-select");
      const input = this.shadowRoot.getElementById("demo-page-filename");
      this.loadDemoPageFile(input?.value || select?.value || this.demoPageFile || "demo_preview.yaml");
    });

    this.shadowRoot.getElementById("demo-page-save")?.addEventListener("click", () => {
      this.saveDemoPageFile();
    });

    this.shadowRoot.getElementById("demo-page-render")?.addEventListener("click", () => {
      const editor = this.shadowRoot.getElementById("demo-page-editor");

      if (editor) {
        this.demoPageContent = editor.value;
      }

      this.renderDemoPageCards();
    });

    this.shadowRoot.getElementById("demo-page-editor")?.addEventListener("input", (event) => {
      this.demoPageContent = event.target.value;
    });



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

    this.shadowRoot.querySelectorAll("[data-format-key]").forEach((button) => {
      button.addEventListener("click", (event) => {
        const key = event.currentTarget.dataset.formatKey;
        const format = event.currentTarget.dataset.format;

        if (this.convertFieldColorFormat) {
          this.convertFieldColorFormat(key, format);
        }
      });
    });

    this.shadowRoot.querySelectorAll("[data-alpha-key]").forEach((input) => {
      input.addEventListener("input", (event) => {
        const row = event.currentTarget.closest(".alpha-row");
        const label = row?.querySelector("strong, b");

        if (label) {
          label.textContent = `${event.currentTarget.value}%`;
        }
      });

      input.addEventListener("change", (event) => {
        const key = event.currentTarget.dataset.alphaKey;
        const value = event.currentTarget.value;

        if (this.setFieldColorAlpha) {
          this.setFieldColorAlpha(key, value);
        }
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
