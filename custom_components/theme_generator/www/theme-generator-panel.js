const DEFAULT_THEME = `ha_standard_basis:
  # Home Assistant Standard-Basis
  # Diese Datei ist bewusst schlicht gehalten.
  # Wir bauen danach Schritt für Schritt weiter.

  modes:
    light:
      # Grundfarben
      primary-color: "#03a9f4"
      accent-color: "#03a9f4"
      dark-primary-color: "#0288d1"
      light-primary-color: "#b3e5fc"

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

      # Trennlinien / Rahmen
      divider-color: "rgba(0,0,0,0.12)"
      outline-color: "rgba(0,0,0,0.12)"

      # Header
      app-header-background-color: "#03a9f4"
      app-header-text-color: "#ffffff"
      app-header-selection-bar-color: "#ffffff"

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

      # Schalter
      switch-checked-button-color: "#03a9f4"
      switch-checked-track-color: "#03a9f4"
      switch-unchecked-button-color: "#f1f1f1"
      switch-unchecked-track-color: "#9e9e9e"

      # Slider
      paper-slider-knob-color: "#03a9f4"
      paper-slider-active-color: "#03a9f4"
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

      mdc-text-field-fill-color: "#ffffff"
      mdc-text-field-ink-color: "#212121"
      mdc-text-field-label-ink-color: "#727272"

    dark:
      # Grundfarben
      primary-color: "#03a9f4"
      accent-color: "#03a9f4"
      dark-primary-color: "#0288d1"
      light-primary-color: "#b3e5fc"

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

      # Trennlinien / Rahmen
      divider-color: "rgba(255,255,255,0.12)"
      outline-color: "rgba(255,255,255,0.12)"

      # Header
      app-header-background-color: "#101e24"
      app-header-text-color: "#e1e1e1"
      app-header-selection-bar-color: "#03a9f4"

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

      # Schalter
      switch-checked-button-color: "#03a9f4"
      switch-checked-track-color: "#03a9f4"
      switch-unchecked-button-color: "#9b9b9b"
      switch-unchecked-track-color: "#777777"

      # Slider
      paper-slider-knob-color: "#03a9f4"
      paper-slider-active-color: "#03a9f4"
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

      mdc-text-field-fill-color: "#1c1c1c"
      mdc-text-field-ink-color: "#e1e1e1"
      mdc-text-field-label-ink-color: "#9b9b9b"
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
          max-width: 1200px;
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
          grid-template-columns: minmax(260px, 1fr) auto auto;
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
          padding: 0 20px;
          font-weight: 700;
          cursor: pointer;
        }

        button.secondary {
          background: #374151;
          border-color: #4b5563;
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
          min-height: 520px;
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
            <p>Standard-Basis im Editor und Theme-Dateien aus <strong>/config/themes</strong>.</p>
          </div>
        </div>

        <div class="controls">
          <select id="theme-select" ${this.loading ? "disabled" : ""}>
            ${options}
          </select>

          <button id="refresh" ${this.loading ? "disabled" : ""}>
            Aktualisieren
          </button>

          <button class="secondary" id="default-theme" ${this.loading ? "disabled" : ""}>
            Standard laden
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

        <code>Version: 1.3.2
Modus: Standard-Theme im Editor
Status: Panel erfolgreich geladen</code>
      </div>
    `;

    this.shadowRoot.getElementById("refresh").addEventListener("click", () => {
      this.loadThemeFiles();
    });

    this.shadowRoot.getElementById("default-theme").addEventListener("click", () => {
      this.resetDefaultTheme();
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
