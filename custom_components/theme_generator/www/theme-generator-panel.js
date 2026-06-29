class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.storageKey = "theme_generator_state_v2";
    this.themeName = "Theme Generator";
    this.themeFiles = [];
    this.rawThemeValues = {};
    this.selectedFile = "";
    this.selectedTheme = "";
    this.loadingThemes = false;

    this.sections = [
      {
        title: "Grundfarben",
        fields: [
          ["primary-color", "Primärfarbe", "#03a9f4"],
          ["accent-color", "Akzentfarbe", "#ff9800"],
          ["dark-primary-color", "Dunkle Primärfarbe", "#0288d1"],
          ["light-primary-color", "Helle Primärfarbe", "#b3e5fc"],
          ["mdc-theme-primary", "MDC Primärfarbe", "#03a9f4"],
          ["mdc-theme-secondary", "MDC Sekundärfarbe", "#ff9800"],
        ],
      },
      {
        title: "Hintergrundfarben",
        fields: [
          ["primary-background-color", "Haupthintergrund", "#111111"],
          ["secondary-background-color", "Sekundärer Hintergrund", "#202020"],
          ["clear-background-color", "Transparenter Hintergrund", "#111111"],
          ["mdc-theme-background", "MDC Hintergrund", "#111111"],
          ["mdc-theme-surface", "MDC Oberfläche", "#1c1c1c"],
        ],
      },
      {
        title: "Karten",
        fields: [
          ["card-background-color", "Kartenfarbe", "#1c1c1c"],
          ["ha-card-background", "HA Kartenfarbe", "#1c1c1c"],
          ["ha-card-border-color", "Karten-Randfarbe", "#2c2c2c"],
          ["ha-card-border-radius", "Karten-Rundung", "12px", "text"],
          ["ha-card-border-width", "Karten-Randstärke", "1px", "text"],
          ["ha-card-box-shadow", "Kartenschatten", "none", "text"],
        ],
      },
      {
        title: "Textfarben",
        fields: [
          ["primary-text-color", "Primärer Text", "#e1e1e1"],
          ["secondary-text-color", "Sekundärer Text", "#9b9b9b"],
          ["text-primary-color", "Text auf Primärfarbe", "#ffffff"],
          ["disabled-text-color", "Deaktivierter Text", "#777777"],
          ["mdc-theme-on-primary", "MDC Text auf Primär", "#ffffff"],
          ["mdc-theme-on-secondary", "MDC Text auf Sekundär", "#000000"],
          ["mdc-theme-on-surface", "MDC Text auf Oberfläche", "#e1e1e1"],
        ],
      },
      {
        title: "Sidebar",
        fields: [
          ["sidebar-background-color", "Sidebar Hintergrund", "#111111"],
          ["sidebar-icon-color", "Sidebar Icons", "#9b9b9b"],
          ["sidebar-text-color", "Sidebar Text", "#e1e1e1"],
          ["sidebar-selected-background-color", "Sidebar Auswahl Hintergrund", "#202020"],
          ["sidebar-selected-icon-color", "Sidebar Auswahl Icon", "#03a9f4"],
          ["sidebar-selected-text-color", "Sidebar Auswahl Text", "#03a9f4"],
        ],
      },
      {
        title: "Header",
        fields: [
          ["app-header-background-color", "Header Hintergrund", "#111111"],
          ["app-header-text-color", "Header Text", "#e1e1e1"],
          ["app-header-selection-bar-color", "Header Auswahlbalken", "#03a9f4"],
          ["app-header-edit-background-color", "Header Bearbeiten Hintergrund", "#202020"],
          ["app-header-edit-text-color", "Header Bearbeiten Text", "#e1e1e1"],
        ],
      },
      {
        title: "Icons",
        fields: [
          ["paper-item-icon-color", "Icon Standard", "#9b9b9b"],
          ["paper-item-icon-active-color", "Icon Aktiv", "#fdd835"],
          ["state-icon-color", "Status Icon Standard", "#9b9b9b"],
          ["state-icon-active-color", "Status Icon Aktiv", "#fdd835"],
          ["state-icon-unavailable-color", "Status Icon Nicht verfügbar", "#777777"],
        ],
      },
      {
        title: "Schalter",
        fields: [
          ["switch-checked-button-color", "Schalter An Knopf", "#03a9f4"],
          ["switch-checked-track-color", "Schalter An Hintergrund", "#03a9f4"],
          ["switch-unchecked-button-color", "Schalter Aus Knopf", "#9b9b9b"],
          ["switch-unchecked-track-color", "Schalter Aus Hintergrund", "#777777"],
        ],
      },
      {
        title: "Slider",
        fields: [
          ["paper-slider-knob-color", "Slider Knopf", "#03a9f4"],
          ["paper-slider-knob-start-color", "Slider Startknopf", "#03a9f4"],
          ["paper-slider-pin-color", "Slider Pin", "#03a9f4"],
          ["paper-slider-active-color", "Slider Aktiv", "#03a9f4"],
          ["paper-slider-secondary-color", "Slider Sekundär", "#03a9f4"],
          ["paper-slider-container-color", "Slider Hintergrund", "#777777"],
        ],
      },
      {
        title: "Inputs / Eingabefelder",
        fields: [
          ["input-fill-color", "Input Hintergrund", "#202020"],
          ["input-ink-color", "Input Text", "#e1e1e1"],
          ["input-label-ink-color", "Input Label", "#9b9b9b"],
          ["input-disabled-fill-color", "Input deaktiviert Hintergrund", "#111111"],
          ["input-disabled-ink-color", "Input deaktiviert Text", "#777777"],
          ["input-disabled-label-ink-color", "Input deaktiviert Label", "#777777"],
          ["input-idle-line-color", "Input Linie", "#777777"],
          ["input-hover-line-color", "Input Hover Linie", "#03a9f4"],
          ["input-outlined-idle-border-color", "Input Outline", "#777777"],
          ["input-outlined-hover-border-color", "Input Outline Hover", "#03a9f4"],
        ],
      },
      {
        title: "Material 3 / Auswahlfelder",
        fields: [
          ["md-sys-color-surface", "MD3 Oberfläche", "var(--nm-bg-2)", "text"],
          ["md-sys-color-surface-container", "MD3 Container", "var(--nm-bg-2)", "text"],
          ["md-sys-color-surface-container-low", "MD3 Container Low", "var(--nm-bg-1)", "text"],
          ["md-sys-color-surface-container-high", "MD3 Container High", "var(--nm-bg-2)", "text"],
          ["md-sys-color-surface-container-highest", "MD3 Container Highest", "var(--nm-bg-3)", "text"],
          ["md-sys-color-on-surface", "MD3 Text", "rgba(255,255,255,0.94)", "text"],
          ["md-sys-color-on-surface-variant", "MD3 Sekundärtext", "rgba(255,255,255,0.72)", "text"],
          ["md-sys-color-outline", "MD3 Outline", "rgba(255,255,255,0.28)", "text"],
          ["md-sys-color-outline-variant", "MD3 Outline Variante", "rgba(255,255,255,0.16)", "text"],
          ["md-sys-color-primary", "MD3 Primärfarbe", "var(--nm-accent)", "text"],
          ["md-sys-color-secondary", "MD3 Sekundärfarbe", "var(--nm-accent)", "text"],

          ["md-filled-select-container-color", "Select Hintergrund", "var(--nm-bg-2)", "text"],
          ["md-filled-select-label-text-color", "Select Label", "rgba(255,255,255,0.72)", "text"],
          ["md-filled-select-input-text-color", "Select Text", "rgba(255,255,255,0.94)", "text"],
          ["md-filled-select-supporting-text-color", "Select Hilfstext", "rgba(255,255,255,0.62)", "text"],
          ["md-filled-select-active-indicator-color", "Select Linie aktiv", "var(--nm-accent)", "text"],
          ["md-filled-select-focus-active-indicator-color", "Select Linie Fokus", "var(--nm-accent)", "text"],
          ["md-filled-select-hover-active-indicator-color", "Select Linie Hover", "rgba(255,255,255,0.28)", "text"],
          ["md-filled-select-dropdown-icon-color", "Select Pfeil", "rgba(255,255,255,0.86)", "text"],
          ["md-filled-select-disabled-container-color", "Select deaktiviert Hintergrund", "var(--nm-bg-2)", "text"],
          ["md-filled-select-disabled-label-text-color", "Select deaktiviert Label", "rgba(255,255,255,0.38)", "text"],
          ["md-filled-select-disabled-input-text-color", "Select deaktiviert Text", "rgba(255,255,255,0.62)", "text"],
          ["md-filled-select-disabled-dropdown-icon-color", "Select deaktiviert Pfeil", "rgba(255,255,255,0.38)", "text"],

          ["md-filled-text-field-container-color", "Textfeld Hintergrund", "var(--nm-bg-2)", "text"],
          ["md-filled-text-field-input-text-color", "Textfeld Text", "rgba(255,255,255,0.94)", "text"],
          ["md-filled-text-field-label-text-color", "Textfeld Label", "rgba(255,255,255,0.72)", "text"],
          ["md-filled-text-field-active-indicator-color", "Textfeld Linie aktiv", "var(--nm-accent)", "text"],
          ["md-filled-text-field-focus-active-indicator-color", "Textfeld Linie Fokus", "var(--nm-accent)", "text"],
          ["md-filled-text-field-hover-active-indicator-color", "Textfeld Linie Hover", "rgba(255,255,255,0.28)", "text"],
          ["md-filled-text-field-disabled-container-color", "Textfeld deaktiviert Hintergrund", "var(--nm-bg-2)", "text"],
          ["md-filled-text-field-disabled-input-text-color", "Textfeld deaktiviert Text", "rgba(255,255,255,0.62)", "text"],
          ["md-filled-text-field-disabled-label-text-color", "Textfeld deaktiviert Label", "rgba(255,255,255,0.38)", "text"],

          ["md-menu-container-color", "Menü Hintergrund", "var(--nm-bg-2)", "text"],
          ["md-menu-item-label-text-color", "Menü Text", "rgba(255,255,255,0.94)", "text"],
          ["md-menu-item-selected-container-color", "Menü Auswahl Hintergrund", "rgba(var(--nm-accent-rgb),0.16)", "text"],
          ["md-menu-item-selected-label-text-color", "Menü Auswahl Text", "rgba(255,255,255,0.94)", "text"],
          ["md-list-item-trailing-icon-color", "MD Listen Icon rechts", "rgba(255,255,255,0.72)", "text"],
          ["md-list-item-leading-icon-color", "MD Listen Icon", "rgba(255,255,255,0.72)", "text"],
          ["md-list-item-supporting-text-color", "MD Listen Hilfstext", "rgba(255,255,255,0.72)", "text"],
          ["md-list-item-label-text-color", "MD Listen Text", "rgba(255,255,255,0.94)", "text"],
          ["md-list-container-color", "MD Listen Hintergrund", "#263244"],
          ["md-outlined-field-disabled-input-text-color", "MD Outlined Field deaktiviert Text", "rgba(255,255,255,0.62)", "text"],
          ["md-outlined-field-disabled-label-text-color", "MD Outlined Field deaktiviert Label", "rgba(255,255,255,0.38)", "text"],
          ["md-outlined-field-disabled-outline-color", "MD Outlined Field deaktiviert Rand", "rgba(255,255,255,0.16)", "text"],
          ["md-outlined-field-focus-outline-color", "MD Outlined Field Rand Fokus", "#3c8ae9"],
          ["md-outlined-field-hover-outline-color", "MD Outlined Field Rand Hover", "rgba(255,255,255,0.38)", "text"],
          ["md-outlined-field-outline-color", "MD Outlined Field Rand", "rgba(255,255,255,0.28)", "text"],
          ["md-outlined-field-input-text-color", "MD Outlined Field Text", "rgba(255,255,255,0.94)", "text"],
          ["md-outlined-field-label-text-color", "MD Outlined Field Label", "rgba(255,255,255,0.72)", "text"],
          ["md-outlined-field-container-color", "MD Outlined Field Hintergrund", "#263244"],
          ["md-filled-field-disabled-input-text-color", "MD Filled Field deaktiviert Text", "rgba(255,255,255,0.62)", "text"],
          ["md-filled-field-disabled-label-text-color", "MD Filled Field deaktiviert Label", "rgba(255,255,255,0.38)", "text"],
          ["md-filled-field-disabled-container-color", "MD Filled Field deaktiviert Hintergrund", "#263244"],
          ["md-filled-field-hover-active-indicator-color", "MD Filled Field Linie Hover", "rgba(255,255,255,0.28)", "text"],
          ["md-filled-field-focus-active-indicator-color", "MD Filled Field Linie Fokus", "#3c8ae9"],
          ["md-filled-field-active-indicator-color", "MD Filled Field Linie aktiv", "#3c8ae9"],
          ["md-filled-field-supporting-text-color", "MD Filled Field Hilfstext", "rgba(255,255,255,0.62)", "text"],
          ["md-filled-field-input-text-color", "MD Filled Field Text", "rgba(255,255,255,0.94)", "text"],
          ["md-filled-field-label-text-color", "MD Filled Field Label", "rgba(255,255,255,0.72)", "text"],
          ["md-filled-field-container-color", "MD Filled Field Hintergrund", "#263244"]
        ],
      },
      {
        title: "Dropdowns / Auswahlfelder",
        fields: [
          ["mdc-select-fill-color", "Dropdown Hintergrund", "#202020"],
          ["mdc-select-ink-color", "Dropdown Text", "#e1e1e1"],
          ["mdc-select-label-ink-color", "Dropdown Label", "#9b9b9b"],
          ["mdc-select-dropdown-icon-color", "Dropdown Pfeil", "#e1e1e1"],
          ["mdc-select-hover-line-color", "Dropdown Hover Linie", "#03a9f4"],
          ["mdc-select-idle-line-color", "Dropdown Linie", "#777777"],
          ["mdc-select-outlined-idle-border-color", "Dropdown Outline", "#777777"],
          ["mdc-select-outlined-hover-border-color", "Dropdown Outline Hover", "#03a9f4"],
          ["mdc-select-disabled-fill-color", "Dropdown deaktiviert Hintergrund", "#202020"],
          ["mdc-select-disabled-ink-color", "Dropdown deaktiviert Text", "rgba(255, 255, 255, 0.62)", "text"],
          ["mdc-select-disabled-label-ink-color", "Dropdown deaktiviert Label", "rgba(255, 255, 255, 0.38)", "text"],
          ["mdc-menu-surface-fill-color", "Dropdown Menüfläche", "#202020"],
          ["mdc-menu-surface-shape-radius", "Dropdown Menü Rundung", "14px", "text"],
          ["mdc-theme-surface", "Material Oberfläche", "#202020"],
          ["mdc-theme-on-surface", "Material Text", "#e1e1e1"],
          ["mdc-text-field-fill-color", "Textfeld Hintergrund", "#202020"],
          ["mdc-text-field-ink-color", "Textfeld Text", "#e1e1e1"],
          ["mdc-text-field-label-ink-color", "Textfeld Label", "#9b9b9b"],
          ["mdc-text-field-disabled-fill-color", "Textfeld deaktiviert Hintergrund", "#202020"],
          ["mdc-text-field-disabled-ink-color", "Textfeld deaktiviert Text", "rgba(255, 255, 255, 0.62)", "text"],
          ["mdc-text-field-disabled-label-ink-color", "Textfeld deaktiviert Label", "rgba(255, 255, 255, 0.38)", "text"],
        ],
      },
      {
        title: "Dialoge",
        fields: [
          ["mdc-dialog-scrim-color", "Dialog Abdunklung", "rgba(0, 0, 0, 0.6)", "text"],
          ["mdc-dialog-heading-ink-color", "Dialog Überschrift", "#e1e1e1"],
          ["mdc-dialog-content-ink-color", "Dialog Inhalt", "#e1e1e1"],
          ["dialog-backdrop-filter", "Dialog Hintergrundfilter", "blur(4px)", "text"],
        ],
      },
      {
        title: "Statusfarben Allgemein",
        fields: [
          ["state-active-color", "Aktiv", "#03a9f4"],
          ["state-inactive-color", "Inaktiv", "#9b9b9b"],
          ["state-unavailable-color", "Nicht verfügbar", "#777777"],
          ["state-warning-color", "Warnung", "#ff9800"],
          ["state-error-color", "Fehler", "#f44336"],
        ],
      },
      {
        title: "Statusfarben Licht / Schalter / Automationen",
        fields: [
          ["state-light-on-color", "Licht An", "#fdd835"],
          ["state-light-active-color", "Licht Aktiv", "#fdd835"],
          ["state-switch-on-color", "Schalter An", "#03a9f4"],
          ["state-switch-active-color", "Schalter Aktiv", "#03a9f4"],
          ["state-automation-active-color", "Automation Aktiv", "#03a9f4"],
          ["state-automation-off-color", "Automation Aus", "#9b9b9b"],
          ["state-input_boolean-on-color", "Input Boolean An", "#03a9f4"],
          ["state-input_boolean-active-color", "Input Boolean Aktiv", "#03a9f4"],
        ],
      },
      {
        title: "Statusfarben Klima",
        fields: [
          ["state-climate-auto-color", "Klima Auto", "#4caf50"],
          ["state-climate-cool-color", "Klima Kühlen", "#2196f3"],
          ["state-climate-dry-color", "Klima Trocknen", "#ff9800"],
          ["state-climate-fan_only-color", "Klima Lüfter", "#00bcd4"],
          ["state-climate-heat-color", "Klima Heizen", "#ff5722"],
          ["state-climate-heat-cool-color", "Klima Heat/Cool", "#ff9800"],
          ["state-climate-idle-color", "Klima Idle", "#9b9b9b"],
          ["state-climate-off-color", "Klima Aus", "#9b9b9b"],
        ],
      },
      {
        title: "Statusfarben Cover / Lock / Alarm",
        fields: [
          ["state-cover-open-color", "Cover Offen", "#fdd835"],
          ["state-cover-closed-color", "Cover Geschlossen", "#9b9b9b"],
          ["state-lock-locked-color", "Schloss Verriegelt", "#9b9b9b"],
          ["state-lock-unlocked-color", "Schloss Offen", "#f44336"],
          ["state-lock-jammed-color", "Schloss Blockiert", "#f44336"],
          ["state-alarm_control_panel-armed_away-color", "Alarm Abwesend", "#f44336"],
          ["state-alarm_control_panel-armed_home-color", "Alarm Zuhause", "#ff9800"],
          ["state-alarm_control_panel-triggered-color", "Alarm Ausgelöst", "#f44336"],
        ],
      },
      {
        title: "Statusfarben Medien / Personen / Geräte",
        fields: [
          ["state-media_player-playing-color", "Media Player Spielt", "#03a9f4"],
          ["state-media_player-paused-color", "Media Player Pause", "#ff9800"],
          ["state-media_player-on-color", "Media Player An", "#03a9f4"],
          ["state-person-home-color", "Person Zuhause", "#03a9f4"],
          ["state-device_tracker-home-color", "Gerät Zuhause", "#03a9f4"],
          ["state-fan-on-color", "Lüfter An", "#03a9f4"],
          ["state-vacuum-cleaning-color", "Sauger Reinigt", "#03a9f4"],
          ["state-vacuum-docked-color", "Sauger Dock", "#9b9b9b"],
          ["state-vacuum-error-color", "Sauger Fehler", "#f44336"],
        ],
      },
      {
        title: "Energie / Graphen",
        fields: [
          ["energy-grid-consumption-color", "Netzbezug", "#488fc2"],
          ["energy-grid-return-color", "Einspeisung", "#8353d1"],
          ["energy-solar-color", "Solar", "#ff9800"],
          ["energy-non-fossil-color", "Nicht fossil", "#0f9d58"],
          ["energy-battery-out-color", "Batterie Entladung", "#4caf50"],
          ["energy-battery-in-color", "Batterie Ladung", "#fdd835"],
          ["energy-gas-color", "Gas", "#8e021b"],
          ["energy-water-color", "Wasser", "#00bcd4"],
        ],
      },
      {
        title: "Badges / Labels / Tabellen",
        fields: [
          ["label-badge-background-color", "Badge Hintergrund", "#202020"],
          ["label-badge-text-color", "Badge Text", "#e1e1e1"],
          ["label-badge-red", "Badge Rot", "#f44336"],
          ["label-badge-blue", "Badge Blau", "#03a9f4"],
          ["label-badge-green", "Badge Grün", "#4caf50"],
          ["label-badge-yellow", "Badge Gelb", "#ffeb3b"],
          ["label-badge-grey", "Badge Grau", "#9e9e9e"],
          ["table-row-background-color", "Tabellenzeile", "#111111"],
          ["table-row-alternative-background-color", "Tabellenzeile Alternativ", "#202020"],
          ["data-table-background-color", "Datentabelle Hintergrund", "#1c1c1c"],
        ],
      },
      {
        title: "Code Editor",
        fields: [
          ["codemirror-property", "Code Property", "#03a9f4"],
          ["codemirror-keyword", "Code Keyword", "#ff9800"],
          ["codemirror-string", "Code String", "#4caf50"],
          ["codemirror-number", "Code Nummer", "#ffb74d"],
          ["codemirror-atom", "Code Atom", "#f44336"],
        ],
      },
    ];

    this.values = {};

    this.sections.forEach(section => {
      section.fields.forEach(([key, label, value]) => {
        this.values[key] = value;
      });
    });

    try {
      const stored = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
      if (stored.themeName) this.themeName = stored.themeName;
      if (stored.values && typeof stored.values === "object") {
        this.values = { ...this.values, ...stored.values };
      }
      if (stored.rawThemeValues && typeof stored.rawThemeValues === "object") {
        this.rawThemeValues = stored.rawThemeValues;
      }
      if (stored.rawThemeValues && typeof stored.rawThemeValues === "object") {
        this.rawThemeValues = stored.rawThemeValues;
      }
    } catch (err) {
      console.warn("Theme Generator: gespeicherter Zustand konnte nicht geladen werden", err);
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.themeFiles.length && !this.loadingThemes) {
      this.loadThemeList();
    }
  }

  connectedCallback() {
    this.render();
    this.loadThemeList();
  }

  escapeAttr(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  escapeText(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  getEditorYaml() {
    const editor = this.shadowRoot.querySelector("#yamlEditor");
    return editor ? editor.value : this.getYaml();
  }

  isColor(value) {
    return typeof value === "string" && (value.startsWith("#") || value.startsWith("rgba(") || value.startsWith("rgb("));
  }

  hexToRgb(hex) {
    const clean = hex.replace("#", "").trim();
    if (clean.length !== 6) return { r: 0, g: 0, b: 0 };

    return {
      r: parseInt(clean.substring(0, 2), 16),
      g: parseInt(clean.substring(2, 4), 16),
      b: parseInt(clean.substring(4, 6), 16),
    };
  }

  rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
      const hex = Number(x).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  }

  colorToHex(value) {
    if (!value) return "#000000";
    if (value.startsWith("#")) return value;

    const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return "#000000";

    return this.rgbToHex(match[1], match[2], match[3]);
  }

  colorToAlpha(value) {
    if (!value || value.startsWith("#") || value.startsWith("rgb(")) return 100;

    const match = value.match(/rgba\(\d+,\s*\d+,\s*\d+,\s*([0-9.]+)\)/);
    if (!match) return 100;

    return Math.round(parseFloat(match[1]) * 100);
  }

  makeColorValue(hex, alpha) {
    const cleanAlpha = Number(alpha);

    if (cleanAlpha >= 100) return hex;

    const rgb = this.hexToRgb(hex);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${(cleanAlpha / 100).toFixed(2)})`;
  }

  safeCssValue(value, fallback) {
    if (!value) return fallback;
    const v = String(value).trim();

    if (v.startsWith("#")) return v;
    if (v.startsWith("rgb(")) return v;
    if (v.startsWith("rgba(")) return v;

    return fallback;
  }

  yamlValue(value) {
    return `"${String(value ?? "").replaceAll('"', '\\"')}"`;
  }

  fieldKeys() {
    const keys = new Set();

    this.sections.forEach(section => {
      section.fields.forEach(([key]) => keys.add(key));
    });

    return keys;
  }

  yamlScalar(value) {
    if (value === null || value === undefined) return '""';

    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }

    const stringValue = String(value);

    if (stringValue.includes("
")) {
      const lines = stringValue.split("
");
      return "|
" + lines.map(line => `    ${line}`).join("
");
    }

    return `"${stringValue.replaceAll('"', '\"')}"`;
  }

  yamlObject(key, value, indent = 2) {
    const space = " ".repeat(indent);
    const lines = [];

    if (value === null || value === undefined) {
      lines.push(`${space}${key}: ""`);
      return lines;
    }

    if (Array.isArray(value)) {
      if (!value.length) {
        lines.push(`${space}${key}: []`);
        return lines;
      }

      lines.push(`${space}${key}:`);
      value.forEach(item => {
        if (typeof item === "object" && item !== null) {
          lines.push(`${space}  -`);
          Object.entries(item).forEach(([childKey, childValue]) => {
            lines.push(...this.yamlObject(childKey, childValue, indent + 4));
          });
        } else {
          lines.push(`${space}  - ${this.yamlScalar(item)}`);
        }
      });

      return lines;
    }

    if (typeof value === "object") {
      const entries = Object.entries(value);

      if (!entries.length) {
        lines.push(`${space}${key}: {}`);
        return lines;
      }

      lines.push(`${space}${key}:`);
      entries.forEach(([childKey, childValue]) => {
        lines.push(...this.yamlObject(childKey, childValue, indent + 2));
      });

      return lines;
    }

    const scalar = this.yamlScalar(value);

    if (String(scalar).startsWith("|
")) {
      lines.push(`${space}${key}: ${scalar}`);
    } else {
      lines.push(`${space}${key}: ${scalar}`);
    }

    return lines;
  }

  fieldKeys() {
    const keys = new Set();

    this.sections.forEach(section => {
      section.fields.forEach(([key]) => keys.add(key));
    });

    return keys;
  }

  yamlScalar(value) {
    if (value === null || value === undefined) return '""';

    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }

    const stringValue = String(value);

    if (stringValue.includes("
")) {
      const lines = stringValue.split("
");
      return "|
" + lines.map(line => `    ${line}`).join("
");
    }

    return `"${stringValue.replaceAll('"', '\"')}"`;
  }

  yamlObject(key, value, indent = 2) {
    const space = " ".repeat(indent);
    const lines = [];

    if (value === null || value === undefined) {
      lines.push(`${space}${key}: ""`);
      return lines;
    }

    if (Array.isArray(value)) {
      if (!value.length) {
        lines.push(`${space}${key}: []`);
        return lines;
      }

      lines.push(`${space}${key}:`);
      value.forEach(item => {
        if (typeof item === "object" && item !== null) {
          lines.push(`${space}  -`);
          Object.entries(item).forEach(([childKey, childValue]) => {
            lines.push(...this.yamlObject(childKey, childValue, indent + 4));
          });
        } else {
          lines.push(`${space}  - ${this.yamlScalar(item)}`);
        }
      });

      return lines;
    }

    if (typeof value === "object") {
      const entries = Object.entries(value);

      if (!entries.length) {
        lines.push(`${space}${key}: {}`);
        return lines;
      }

      lines.push(`${space}${key}:`);
      entries.forEach(([childKey, childValue]) => {
        lines.push(...this.yamlObject(childKey, childValue, indent + 2));
      });

      return lines;
    }

    lines.push(`${space}${key}: ${this.yamlScalar(value)}`);
    return lines;
  }

  getYaml() {
    const knownKeys = this.fieldKeys();

    // Wichtig:
    // Erst alle geladenen Originalwerte übernehmen.
    // Danach nur die Generator-Felder überschreiben.
    // Dadurch bleiben card-mod, nm-Variablen, Material 3, Mushroom usw. erhalten.
    const mergedValues = { ...(this.rawThemeValues || {}) };

    knownKeys.forEach(key => {
      const value = this.values[key];

      if (value !== undefined && value !== null && String(value).trim() !== "") {
        mergedValues[key] = value;
      }
    });

    const lines = [`${this.themeName}:`];
    const written = new Set();

    this.sections.forEach(section => {
      lines.push(`  # ${section.title}`);

      section.fields.forEach(([key]) => {
        const value = mergedValues[key];

        if (value !== undefined && value !== null && String(value).trim() !== "") {
          lines.push(...this.yamlObject(key, value, 2));
          written.add(key);
        }
      });

      lines.push("");
    });

    const unknownEntries = Object.entries(mergedValues).filter(([key]) => !written.has(key));

    if (unknownEntries.length) {
      lines.push("  # Weitere geladene Theme-Werte");
      unknownEntries.forEach(([key, value]) => {
        lines.push(...this.yamlObject(key, value, 2));
      });
      lines.push("");
    }

    return lines.join("
").trim();
  }

  persistState() {
    localStorage.setItem(this.storageKey, JSON.stringify({
      themeName: this.themeName,
      values: this.values,
      rawThemeValues: this.rawThemeValues,
    }));
  }

  refreshYaml() {
    const editor = this.shadowRoot.querySelector("#yamlEditor");
    if (editor) editor.value = this.getYaml();
  }

  updateValue(key, value, rerender = true) {
    this.values[key] = value;
    this.persistState();

    if (rerender) {
      this.render();
    } else {
      this.refreshYaml();
    }
  }

  async loadThemeList() {
    if (!this._hass || this.loadingThemes) return;

    this.loadingThemes = true;

    try {
      const result = await this._hass.connection.sendMessagePromise({
        type: "theme_generator/list_themes",
      });

      this.themeFiles = result.files || [];

      if (!this.selectedFile && this.themeFiles.length) {
        this.selectedFile = this.themeFiles[0].file;
        this.selectedTheme = this.themeFiles[0].themes?.[0] || "";
      }

      this.render();
    } catch (err) {
      console.error("Theme Generator: Theme-Liste konnte nicht geladen werden", err);
    } finally {
      this.loadingThemes = false;
    }
  }

  async loadSelectedTheme() {
    if (!this._hass || !this.selectedFile || !this.selectedTheme) {
      alert("Bitte Theme-Datei und Theme auswählen.");
      return;
    }

    try {
      const result = await this._hass.connection.sendMessagePromise({
        type: "theme_generator/load_theme",
        file: this.selectedFile,
        theme: this.selectedTheme,
      });

      this.themeName = result.name || this.selectedTheme;
      this.rawThemeValues = result.values || {};
      this.values = { ...this.values, ...(result.values || {}) };
      this.persistState();
      this.render();

      alert(`Theme "${this.themeName}" wurde geladen.`);
    } catch (err) {
      console.error("Theme Generator: Theme konnte nicht geladen werden", err);
      alert("Theme konnte nicht geladen werden. Bitte Logs prüfen.");
    }
  }

  async copyYaml() {
    await navigator.clipboard.writeText(this.getEditorYaml());
    alert("YAML wurde kopiert.");
  }

  async saveTheme() {
    this.persistState();

    if (!this._hass) {
      alert("Home Assistant Verbindung fehlt.");
      return;
    }

    await this._hass.callService("theme_generator", "save_theme", {
      name: this.themeName,
      yaml: this.getEditorYaml(),
    });

    alert("Theme wurde gespeichert. Danach in Home Assistant unter Profil → Theme auswählen.");
  }

  getCurrentFileThemes() {
    const current = this.themeFiles.find(item => item.file === this.selectedFile);
    return current?.themes || [];
  }

  renderThemeLoader() {
    const fileOptions = this.themeFiles.map(item => `
      <option value="${this.escapeAttr(item.file)}" ${item.file === this.selectedFile ? "selected" : ""}>
        ${this.escapeAttr(item.file)}
      </option>
    `).join("");

    const themeOptions = this.getCurrentFileThemes().map(name => `
      <option value="${this.escapeAttr(name)}" ${name === this.selectedTheme ? "selected" : ""}>
        ${this.escapeAttr(name)}
      </option>
    `).join("");

    return `
      <div class="theme-loader">
        <div>
          <span>Theme-Datei</span>
          <select id="themeFileSelect">
            ${fileOptions || '<option value="">Keine Theme-Dateien gefunden</option>'}
          </select>
        </div>

        <div>
          <span>Theme</span>
          <select id="themeSelect">
            ${themeOptions || '<option value="">Kein Theme gefunden</option>'}
          </select>
        </div>

        <button id="loadThemeBtn">Theme laden</button>
      </div>
    `;
  }

  renderField(field) {
    const [key, label, defaultValue, type = "color"] = field;
    const value = this.values[key] ?? defaultValue;

    if (type === "image") {
      return `
        <label class="full-width">
          <span>${label}</span>
          <input type="file" accept="image/*" data-image-key="${key}" />
          <div class="image-actions">
            <button class="secondary small-btn" data-clear-image="${key}" type="button">Bild entfernen</button>
          </div>
          <small>${key}</small>
        </label>
      `;
    }

    if (type === "text" || !this.isColor(value)) {
      return `
        <label>
          <span>${label}</span>
          <input class="text-input" value="${this.escapeAttr(value)}" data-key="${key}" />
          <small>${key}</small>
        </label>
      `;
    }

    const hexValue = this.colorToHex(value);
    const alphaValue = this.colorToAlpha(value);

    return `
      <label>
        <span>${label}</span>
        <div class="color-row">
          <input type="color" value="${this.escapeAttr(hexValue)}" data-color-key="${key}" />
          <input class="hex-input" value="${this.escapeAttr(value)}" data-key="${key}" />
        </div>
        <div class="alpha-row">
          <span>Transparenz</span>
          <input type="range" min="0" max="100" value="${alphaValue}" data-alpha-key="${key}" />
          <strong>${alphaValue}%</strong>
        </div>
        <small>${key}</small>
      </label>
    `;
  }

  renderSection(section, index) {
    return `
      <details ${index < 3 ? "open" : ""}>
        <summary>${section.title}</summary>
        <div class="section-grid">
          ${section.fields.map(field => this.renderField(field)).join("")}
        </div>
      </details>
    `;
  }

  renderPreviewCard(title, value, icon, colorVar) {
    return `
      <div class="preview-card">
        <div class="preview-icon" style="background:${this.safeCssValue(this.values[colorVar] || this.values["primary-color"], "#4f8cff")};">${icon}</div>
        <div class="preview-title">${title}</div>
        <div class="preview-value" style="color:${this.values["accent-color"]};">${value}</div>
      </div>
    `;
  }

  render() {
    const bg = this.safeCssValue(this.values["primary-background-color"], "#111111");
    const accent = this.safeCssValue(this.values["accent-color"], "#4f8cff");
    const primary = this.safeCssValue(this.values["primary-color"], "#4f8cff");
    const pageBackground = `
            radial-gradient(circle at top left, ${primary}33, transparent 35%),
            radial-gradient(circle at bottom right, ${accent}26, transparent 35%),
            ${bg}
          `;
    const panel = this.safeCssValue(this.values["secondary-background-color"], "#202a38");
    const card = this.safeCssValue(this.values["ha-card-background"], "#263244");
    const text = this.safeCssValue(this.values["primary-text-color"], "#f5f7fb");
    const secondary = this.safeCssValue(this.values["secondary-text-color"], "rgba(255, 255, 255, 0.72)");
    const radius = this.values["ha-card-border-radius"] || "18px";
    const border = this.safeCssValue(this.values["ha-card-border-color"], "rgba(255, 255, 255, 0.12)");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          background: ${pageBackground};
          color: ${text};
          font-family: var(--primary-font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
        }

        .page {
          max-width: 1500px;
          margin: 0 auto;
          padding: 32px;
        }

        h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 800;
        }

        h2 {
          margin-top: 0;
        }

        .subtitle {
          margin-top: 6px;
          color: ${secondary};
        }

        .layout {
          display: grid;
          grid-template-columns: 560px 1fr;
          gap: 20px;
          margin-top: 24px;
        }

        .panel {
          background: ${panel};
          border: 1px solid ${border};
          border-radius: ${radius};
          box-shadow: ${this.values["ha-card-box-shadow"]};
          padding: 20px;
        }

        .controls {
          max-height: calc(100vh - 180px);
          overflow: auto;
        }

        .top-row {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 10px;
          align-items: end;
          margin-bottom: 16px;
        }

        .theme-loader {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 10px;
          align-items: end;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid ${border};
        }

        .theme-loader span,
        label span {
          display: block;
          font-size: 14px;
          color: ${secondary};
          margin-bottom: 7px;
        }

        small {
          display: block;
          margin-top: 5px;
          color: ${secondary};
          opacity: .72;
          font-size: 11px;
        }

        input,
        select {
          width: 100%;
          box-sizing: border-box;
          background: ${card};
          color: ${text};
          border: 1px solid ${border};
          border-radius: 12px;
          padding: 10px 12px;
          font: inherit;
        }

        input[type="color"] {
          height: 42px;
          padding: 3px;
          cursor: pointer;
        }

        .color-row {
          display: grid;
          grid-template-columns: 74px 1fr;
          gap: 8px;
        }

        .alpha-row {
          display: grid;
          grid-template-columns: auto 1fr 48px;
          gap: 8px;
          align-items: center;
          margin-top: 8px;
          color: ${secondary};
          font-size: 12px;
        }

        .alpha-row input[type="range"] {
          padding: 0;
        }

        .alpha-row strong {
          color: ${text};
          text-align: right;
          font-size: 12px;
        }

        details {
          background: ${card};
          border: 1px solid ${border};
          border-radius: 16px;
          margin-bottom: 10px;
          overflow: hidden;
        }

        summary {
          cursor: pointer;
          padding: 14px 16px;
          font-weight: 800;
          color: ${text};
          user-select: none;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          padding: 0 16px 16px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .image-actions {
          margin-top: 8px;
        }

        button {
          border: 0;
          border-radius: 999px;
          padding: 12px 16px;
          font-weight: 800;
          cursor: pointer;
          color: #ffffff;
          background: ${accent};
          white-space: nowrap;
        }

        button.secondary {
          color: ${text};
          background: ${card};
          border: 1px solid ${border};
        }

        #loadThemeBtn,
        #saveBtn {
          color: #ffffff;
          background: ${accent};
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
        }

        .small-btn {
          padding: 8px 12px;
          font-size: 12px;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .preview-card {
          background: ${card};
          border: 1px solid ${border};
          border-radius: ${radius};
          padding: 18px;
        }

        .preview-icon {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: white;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .preview-title {
          font-weight: 800;
          color: ${text};
        }

        .preview-value {
          font-size: 23px;
          font-weight: 900;
          margin-top: 4px;
        }

        textarea.yaml-editor {
          width: 100%;
          min-height: 560px;
          box-sizing: border-box;
          background: ${bg};
          border: 1px solid ${border};
          border-radius: 16px;
          color: ${text};
          padding: 18px;
          overflow: auto;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 13px;
          line-height: 1.45;
          resize: vertical;
          white-space: pre;
        }

        .yaml-title {
          margin-top: 22px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 900;
        }

        @media (max-width: 1200px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .controls {
            max-height: unset;
          }
        }

        @media (max-width: 800px) {
          .page {
            padding: 18px;
          }

          .top-row,
          .theme-loader,
          .section-grid,
          .preview-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="page">
        <h1>Theme Generator</h1>
        <div class="subtitle">Vorhandene Themes laden, bearbeiten, speichern oder als YAML kopieren.</div>

        <div class="layout">
          <div class="panel controls">
            ${this.renderThemeLoader()}

            <div class="top-row">
              <div class="theme-name">
                <label>
                  <span>Theme Name</span>
                  <input id="themeName" value="${this.escapeAttr(this.themeName)}" />
                </label>
              </div>
              <button id="saveBtn">Speichern</button>
              <button class="secondary" id="copyBtn">YAML kopieren</button>
            </div>

            ${this.sections.map((section, index) => this.renderSection(section, index)).join("")}
          </div>

          <div class="panel">
            <h2>Vorschau</h2>
            <div class="preview-grid">
              ${this.renderPreviewCard("Wohnzimmer", "22,4 °C", "⌂", "primary-color")}
              ${this.renderPreviewCard("Licht", "An", "✦", "state-light-on-color")}
              ${this.renderPreviewCard("Server", "38 W", "⚡", "state-switch-on-color")}
              ${this.renderPreviewCard("Alarm", "Bereit", "!", "state-alarm_control_panel-armed_home-color")}
            </div>

            <div class="yaml-title">YAML Editor</div>
            <textarea id="yamlEditor" class="yaml-editor" spellcheck="false">${this.escapeText(this.getYaml())}</textarea>
          </div>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector("#themeName").addEventListener("input", (ev) => {
      this.themeName = ev.target.value || "Theme Generator";
      this.persistState();
      this.refreshYaml();
    });

    this.shadowRoot.querySelector("#saveBtn").addEventListener("click", () => this.saveTheme());
    this.shadowRoot.querySelector("#copyBtn").addEventListener("click", () => this.copyYaml());

    this.shadowRoot.querySelector("#yamlEditor")?.addEventListener("input", () => {
      // YAML kann direkt bearbeitet werden. Speichern/Kopieren verwendet den Editorinhalt.
    });

    this.shadowRoot.querySelector("#loadThemeBtn")?.addEventListener("click", () => this.loadSelectedTheme());

    this.shadowRoot.querySelector("#themeFileSelect")?.addEventListener("change", (ev) => {
      this.selectedFile = ev.target.value;
      this.selectedTheme = this.getCurrentFileThemes()[0] || "";
      this.render();
    });

    this.shadowRoot.querySelector("#themeSelect")?.addEventListener("change", (ev) => {
      this.selectedTheme = ev.target.value;
    });

    this.shadowRoot.querySelectorAll("input[data-key]").forEach(input => {
      input.addEventListener("input", (ev) => {
        this.updateValue(ev.target.dataset.key, ev.target.value, false);
      });

      input.addEventListener("change", (ev) => {
        this.updateValue(ev.target.dataset.key, ev.target.value, true);
      });
    });

    this.shadowRoot.querySelectorAll("input[data-color-key]").forEach(input => {
      input.addEventListener("input", (ev) => {
        const key = ev.target.dataset.colorKey;
        const current = this.values[key] || ev.target.value;
        const alpha = this.colorToAlpha(current);
        this.updateValue(key, this.makeColorValue(ev.target.value, alpha));
      });
    });

    this.shadowRoot.querySelectorAll("input[data-alpha-key]").forEach(input => {
      input.addEventListener("input", (ev) => {
        const key = ev.target.dataset.alphaKey;
        const current = this.values[key] || "#000000";
        const hex = this.colorToHex(current);
        this.updateValue(key, this.makeColorValue(hex, ev.target.value));
      });
    });

    this.shadowRoot.querySelectorAll("input[data-image-key]").forEach(input => {
      input.addEventListener("change", (ev) => {
        const file = ev.target.files && ev.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          this.values[ev.target.dataset.imageKey] = `center / cover no-repeat fixed url("${dataUrl}")`;
          this.persistState();
          this.render();
        };
        reader.readAsDataURL(file);
      });
    });

    this.shadowRoot.querySelectorAll("button[data-clear-image]").forEach(button => {
      button.addEventListener("click", (ev) => {
        this.values[ev.target.dataset.clearImage] = "";
        this.persistState();
        this.render();
      });
    });
  }
}

if (!customElements.get("theme-generator-panel")) {
  customElements.define("theme-generator-panel", ThemeGeneratorPanel);
}
