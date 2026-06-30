const DEFAULT_THEME = `ha_generator_basis:
  # Saubere Grundtheme
  # Diese Datei ist bewusst schlicht.
  # Nach und nach können Farben, Karten, Sidebar, Mushroom, Bubble und card-mod ergänzt werden.

  primary-color: "#03a9f4"
  accent-color: "#03a9f4"

  primary-background-color: "#111111"
  secondary-background-color: "#1c1c1c"
  card-background-color: "#1c1c1c"
  ha-card-background: "#1c1c1c"

  primary-text-color: "#e1e1e1"
  secondary-text-color: "#9b9b9b"
  disabled-text-color: "#777777"
  text-primary-color: "#ffffff"

  app-header-background-color: "#101e24"
  app-header-text-color: "#e1e1e1"
  app-header-selection-bar-color: "#03a9f4"

  sidebar-background-color: "#111111"
  sidebar-text-color: "#e1e1e1"
  sidebar-icon-color: "#9b9b9b"
  sidebar-selected-background-color: "rgba(3,169,244,0.16)"
  sidebar-selected-icon-color: "#03a9f4"
  sidebar-selected-text-color: "#03a9f4"

  ha-card-border-radius: "12px"
  ha-card-border-width: "1px"
  ha-card-border-color: "rgba(255,255,255,0.12)"
  ha-card-box-shadow: "none"

  mdc-theme-primary: "#03a9f4"
  mdc-theme-secondary: "#03a9f4"
  mdc-theme-background: "#111111"
  mdc-theme-surface: "#1c1c1c"
  mdc-theme-on-surface: "#e1e1e1"

  modes:
    light:
      primary-background-color: "#fafafa"
      secondary-background-color: "#ffffff"
      card-background-color: "#ffffff"
      ha-card-background: "#ffffff"
      primary-text-color: "#212121"
      secondary-text-color: "#727272"

    dark:
      primary-background-color: "#111111"
      secondary-background-color: "#1c1c1c"
      card-background-color: "#1c1c1c"
      ha-card-background: "#1c1c1c"
      primary-text-color: "#e1e1e1"
      secondary-text-color: "#9b9b9b"
`;

class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._hass = null;
    this.files = [];
    this.selectedFile = "";
    this.editorContent = DEFAULT_THEME;
    this.status = "Grundtheme geladen. Wähle eine Theme-Datei aus oder speichere diese Vorlage als neue Datei.";
    this.loading = false;
    this.initialized = false;
  }

  set hass(hass) {
    this._hass = hass;

    if (!this.initialized) {
      this.initialized = true;
      this.loadFileList();
    }

    this.render();
  }

  async apiCall(message) {
    if (this._hass?.callWS) {
      return await this._hass.callWS(message);
    }

    if (this._hass?.connection?.sendMessagePromise) {
      return await this._hass.connection.sendMessagePromise(message);
    }

    throw new Error("Keine WebSocket-Methode gefunden.");
  }

  async loadFileList() {
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
        : "Keine Theme-Dateien gefunden. Die Grundtheme ist geladen.";

      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Theme-Dateien konnten nicht geladen werden: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  async selectFile(filename) {
    this.selectedFile = filename;

    if (!filename) {
      this.editorContent = DEFAULT_THEME;
      this.status = "Grundtheme geladen.";
      this.render();
      return;
    }

    await this.loadSelectedFile();
  }

  async loadSelectedFile() {
    if (!this.selectedFile) {
      this.status = "Keine Datei ausgewählt.";
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
      this.status = `Datei konnte nicht geladen werden: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  newBaseTheme() {
    this.selectedFile = "";
    this.editorContent = DEFAULT_THEME;
    this.status = "Neue Grundtheme geladen. Speichere sie als neue Datei.";
    this.render();
  }

  async saveAsNew() {
    const filename = window.prompt("Name der neuen Theme-Datei:", "meine_theme.yaml");

    if (!filename) return;

    await this.saveFile(filename, false);
  }

  async overwriteSelected() {
    if (!this.selectedFile) {
      this.status = "Keine Datei zum Überschreiben ausgewählt.";
      this.render();
      return;
    }

    const ok = window.confirm(`Soll ${this.selectedFile} wirklich überschrieben werden?`);

    if (!ok) return;

    await this.saveFile(this.selectedFile, true);
  }

  async saveFile(filename, overwrite) {
    this.loading = true;
    this.status = `${filename} wird gespeichert …`;
    this.render();

    try {
      const result = await this.apiCall({
        type: "theme_generator/write_theme_file",
        filename,
        content: this.editorContent,
        overwrite,
      });

      this.selectedFile = result.filename;
      this.status = `Gespeichert: ${result.filename}. Themes wurden neu geladen.`;
      await this.loadFileList();

      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      this.status = `Speichern fehlgeschlagen: ${err?.message || err}`;
      console.error(err);
      this.render();
    }
  }

  render() {
    const fileOptions = [
      `<option value="">Grundtheme / neue Datei</option>`,
      ...this.files.map((file) => {
        const selected = file === this.selectedFile ? "selected" : "";
        return `<option value="${this.escape(file)}" ${selected}>${this.escape(file)}</option>`;
      }),
    ].join("");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          box-sizing: border-box;
          padding: 26px;
          background: var(--primary-background-color, #111827);
          color: var(--primary-text-color, #e5e7eb);
          font-family: var(--paper-font-body1_-_font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
        }

        .shell {
          max-width: 1500px;
          margin: 0 auto;
        }

        .top-card,
        .editor-card {
          background: var(--card-background-color, #1f2937);
          border: 1px solid var(--ha-card-border-color, rgba(255,255,255,0.12));
          border-radius: 24px;
          box-shadow: var(--ha-card-box-shadow, none);
          padding: 22px;
        }

        .top-card {
          margin-bottom: 18px;
        }

        h1 {
          margin: 0 0 6px 0;
          font-size: 30px;
          line-height: 1.15;
        }

        .subtitle {
          margin: 0 0 18px 0;
          color: var(--secondary-text-color, #9ca3af);
          font-size: 14px;
        }

        .grid {
          display: grid;
          grid-template-columns: minmax(220px, 1fr) auto auto auto auto;
          gap: 12px;
          align-items: end;
        }

        label {
          display: block;
          font-size: 13px;
          color: var(--secondary-text-color, #9ca3af);
          margin-bottom: 6px;
        }

        select {
          width: 100%;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.18);
          background: #111827;
          color: #f9fafb;
          padding: 0 12px;
          font-size: 14px;
          outline: none;
        }

        button {
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: #374151;
          color: #ffffff;
          padding: 0 18px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }

        button:hover {
          filter: brightness(1.12);
        }

        button.primary {
          background: #3c8ae9;
          border-color: #3c8ae9;
        }

        button.warning {
          background: #e07b34;
          border-color: #e07b34;
        }

        button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .status {
          margin-top: 14px;
          color: var(--secondary-text-color, #9ca3af);
          font-size: 14px;
        }

        .selected {
          margin-top: 8px;
          font-size: 13px;
          color: var(--secondary-text-color, #9ca3af);
        }

        .selected strong {
          color: var(--primary-text-color, #ffffff);
        }

        textarea {
          width: 100%;
          min-height: calc(100vh - 310px);
          box-sizing: border-box;
          resize: vertical;
          border: none;
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

        @media (max-width: 900px) {
          :host {
            padding: 14px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          button {
            width: 100%;
          }
        }
      </style>

      <div class="shell">
        <div class="top-card">
          <h1>Theme Generator</h1>
          <p class="subtitle">
            Datei-Modus: Grundtheme laden, Theme-Datei auswählen, vollständig anzeigen und unverändert speichern.
          </p>

          <div class="grid">
            <div>
              <label>Theme-Datei</label>
              <select id="file-select" ${this.loading ? "disabled" : ""}>
                ${fileOptions}
              </select>
            </div>

            <button id="refresh" ${this.loading ? "disabled" : ""}>Aktualisieren</button>
            <button id="base" ${this.loading ? "disabled" : ""}>Grundtheme laden</button>
            <button class="primary" id="save-new" ${this.loading ? "disabled" : ""}>Als neue Datei speichern</button>
            <button class="warning" id="overwrite" ${this.loading || !this.selectedFile ? "disabled" : ""}>Überschreiben</button>
          </div>

          <div class="selected">
            Aktuell angezeigt:
            <strong>${this.selectedFile ? this.escape(this.selectedFile) : "Grundtheme / neue Datei"}</strong>
          </div>

          <div class="status">${this.escape(this.status)}</div>
        </div>

        <div class="editor-card">
          <textarea id="editor" spellcheck="false">${this.escape(this.editorContent)}</textarea>
        </div>
      </div>
    `;

    this.shadowRoot.getElementById("file-select").addEventListener("change", (event) => {
      this.selectFile(event.target.value);
    });

    this.shadowRoot.getElementById("refresh").addEventListener("click", () => {
      this.loadFileList();
    });

    this.shadowRoot.getElementById("base").addEventListener("click", () => {
      this.newBaseTheme();
    });

    this.shadowRoot.getElementById("save-new").addEventListener("click", () => {
      this.saveAsNew();
    });

    this.shadowRoot.getElementById("overwrite").addEventListener("click", () => {
      this.overwriteSelected();
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
