class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.themeName = "Silvia HA Theme";

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
          ["lovelace-background", "Lovelace Hintergrundbild", "", "image"],
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
          ["input-idle-line-color", "Input Linie", "#777777"],
          ["input-hover-line-color", "Input Hover Linie", "#03a9f4"],
          ["input-outlined-idle-border-color", "Input Outline", "#777777"],
          ["input-outlined-hover-border-color", "Input Outline Hover", "#03a9f4"],
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
  }

  set hass(hass) {
    this._hass = hass;
  }

  connectedCallback() {
    this.render();
  }

  isColor(value) {
    return typeof value === "string" && value.startsWith("#");
  }

  yamlValue(value) {
    return `"${String(value).replaceAll('"', '\\"')}"`;
  }

  getYaml() {
    const lines = [`${this.themeName}:`];

    this.sections.forEach(section => {
      lines.push(`  # ${section.title}`);
      section.fields.forEach(([key]) => {
        lines.push(`  ${key}: ${this.yamlValue(this.values[key])}`);
      });
      lines.push("");
    });

    return lines.join("\n").trim();
  }

  updateValue(key, value) {
    this.values[key] = value;
    this.render();
  }

  async copyYaml() {
    await navigator.clipboard.writeText(this.getYaml());
    alert("YAML wurde kopiert.");
  }

  async saveTheme() {
    if (!this._hass) {
      alert("Home Assistant Verbindung fehlt.");
      return;
    }

    await this._hass.callService("theme_generator", "save_theme", {
      name: this.themeName,
      yaml: this.getYaml(),
    });

    alert("Theme wurde gespeichert. Danach in Home Assistant unter Profil → Theme auswählen.");
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
          <input class="text-input" value="${value}" data-key="${key}" />
          <small>${key}</small>
        </label>
      `;
    }

    return `
      <label>
        <span>${label}</span>
        <div class="color-row">
          <input type="color" value="${value}" data-key="${key}" />
          <input class="hex-input" value="${value}" data-key="${key}" />
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
        <div class="preview-icon" style="background:${this.values[colorVar] || this.values["primary-color"]};">${icon}</div>
        <div class="preview-title">${title}</div>
        <div class="preview-value" style="color:${this.values["accent-color"]};">${value}</div>
      </div>
    `;
  }

  render() {
    const bg = this.values["primary-background-color"];
    const lovelaceBg = this.values["lovelace-background"];
    const pageBackground = lovelaceBg || `
            radial-gradient(circle at top left, ${this.values["primary-color"]}33, transparent 35%),
            radial-gradient(circle at bottom right, ${this.values["accent-color"]}26, transparent 35%),
            ${bg}
          `;
    const panel = this.values["secondary-background-color"];
    const card = this.values["ha-card-background"];
    const text = this.values["primary-text-color"];
    const secondary = this.values["secondary-text-color"];
    const accent = this.values["accent-color"];
    const radius = this.values["ha-card-border-radius"];
    const border = this.values["ha-card-border-color"];

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

        .subtitle {
          margin-top: 6px;
          color: ${secondary};
        }

        .layout {
          display: grid;
          grid-template-columns: 520px 1fr;
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

        .theme-name label {
          display: block;
        }

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

        input {
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

        .small-btn {
          padding: 8px 12px;
          font-size: 12px;
        }

        button {
          border: 0;
          border-radius: 999px;
          padding: 12px 16px;
          font-weight: 800;
          cursor: pointer;
          color: #111;
          background: ${accent};
        }

        button.secondary {
          color: ${text};
          background: ${card};
          border: 1px solid ${border};
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

        pre {
          background: ${bg};
          border: 1px solid ${border};
          border-radius: 16px;
          color: ${text};
          padding: 18px;
          overflow: auto;
          max-height: 520px;
          font-size: 13px;
          line-height: 1.45;
        }

        .yaml-title {
          margin-top: 22px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 900;
        }

        @media (max-width: 1100px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .controls {
            max-height: unset;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 18px;
          }

          .top-row,
          .section-grid,
          .preview-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="page">
        <h1>Theme Generator</h1>
        <div class="subtitle">Vollständiger Home-Assistant-Theme-Baukasten mit Bereichen, Vorschau und YAML-Export.</div>

        <div class="layout">
          <div class="panel controls">
            <div class="top-row">
              <div class="theme-name">
                <label>
                  <span>Theme Name</span>
                  <input id="themeName" value="${this.themeName}" />
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

            <div class="yaml-title">YAML</div>
            <pre>${this.getYaml()}</pre>
          </div>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector("#themeName").addEventListener("input", (ev) => {
      this.themeName = ev.target.value || "Silvia HA Theme";
      const pre = this.shadowRoot.querySelector("pre");
      if (pre) pre.textContent = this.getYaml();
    });

    this.shadowRoot.querySelector("#saveBtn").addEventListener("click", () => this.saveTheme());
    this.shadowRoot.querySelector("#copyBtn").addEventListener("click", () => this.copyYaml());

    this.shadowRoot.querySelectorAll("input[data-key]").forEach(input => {
      input.addEventListener("input", (ev) => {
        this.updateValue(ev.target.dataset.key, ev.target.value);
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
          this.render();
        };
        reader.readAsDataURL(file);
      });
    });

    this.shadowRoot.querySelectorAll("button[data-clear-image]").forEach(button => {
      button.addEventListener("click", (ev) => {
        this.values[ev.target.dataset.clearImage] = "";
        this.render();
      });
    });
  }
}

customElements.define("theme-generator-panel", ThemeGeneratorPanel);
