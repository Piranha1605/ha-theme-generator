class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._hass = null;
    this.initialized = false;
    this.loading = false;
    this.files = [];
    this.selectedFile = "";
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
          max-width: 1100px;
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
          grid-template-columns: minmax(260px, 1fr) auto;
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
            <p>Theme-Dateien aus <strong>/config/themes</strong> anzeigen.</p>
          </div>
        </div>

        <div class="controls">
          <select id="theme-select" ${this.loading ? "disabled" : ""}>
            ${options}
          </select>

          <button id="refresh" ${this.loading ? "disabled" : ""}>
            Aktualisieren
          </button>
        </div>

        <div class="status">${this.escape(this.status)}</div>

        <div class="box">
          <h2>Gefundene Theme-Dateien</h2>
          <ul>
            ${fileList}
          </ul>
        </div>

        <code>Version: 1.2.0
Modus: Theme-Dateien anzeigen
Status: Panel erfolgreich geladen</code>
      </div>
    `;

    this.shadowRoot.getElementById("refresh").addEventListener("click", () => {
      this.loadThemeFiles();
    });

    this.shadowRoot.getElementById("theme-select").addEventListener("change", (event) => {
      this.selectedFile = event.target.value;
      this.status = this.selectedFile
        ? `Ausgewählt: ${this.selectedFile}`
        : "Keine Theme-Datei ausgewählt.";
      this.render();
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
