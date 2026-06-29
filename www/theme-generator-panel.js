class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.state = {
      name: "Silvia Dark Glass",
      primary_color: "#4f8cff",
      accent_color: "#ffb86b",
      background_color: "#10131a",
      card_color: "#1b2130",
      text_color: "#f5f7fb",
      rounded: 24,
    };
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  themeYaml() {
    const s = this.state;
    return `${s.name}:\n  primary-color: "${s.primary_color}"\n  accent-color: "${s.accent_color}"\n  primary-background-color: "${s.background_color}"\n  secondary-background-color: "${s.background_color}"\n  card-background-color: "${s.card_color}"\n  ha-card-background: "${s.card_color}"\n  primary-text-color: "${s.text_color}"\n  secondary-text-color: "rgba(255, 255, 255, 0.72)"\n  text-primary-color: "${s.text_color}"\n  divider-color: "rgba(255, 255, 255, 0.12)"\n  ha-card-border-radius: "${s.rounded}px"\n  ha-card-box-shadow: "0 18px 40px rgba(0, 0, 0, 0.28)"\n  app-header-background-color: "${s.background_color}"\n  app-header-text-color: "${s.text_color}"\n  sidebar-background-color: "${s.background_color}"\n  sidebar-text-color: "${s.text_color}"\n  sidebar-selected-background-color: "${s.card_color}"\n  sidebar-selected-text-color: "${s.accent_color}"\n  state-icon-color: "${s.accent_color}"\n  state-icon-active-color: "${s.primary_color}"\n  switch-checked-color: "${s.accent_color}"\n  mdc-theme-primary: "${s.primary_color}"\n  mdc-theme-secondary: "${s.accent_color}"\n`;
  }

  updateValue(key, value) {
    this.state = { ...this.state, [key]: value };
    this.render();
  }

  async copyYaml() {
    await navigator.clipboard.writeText(this.themeYaml());
    this.toast("YAML kopiert");
  }

  async saveTheme() {
    if (!this._hass) return;
    await this._hass.callService("theme_generator", "save_theme", this.state);
    this.toast("Theme gespeichert und neu geladen");
  }

  toast(message) {
    const event = new CustomEvent("hass-notification", {
      detail: { message },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  input(label, key, type = "color") {
    const value = this.state[key];
    return `
      <label class="field">
        <span>${label}</span>
        <input data-key="${key}" type="${type}" value="${value}">
      </label>
    `;
  }

  render() {
    const s = this.state;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          color: ${s.text_color};
          background:
            radial-gradient(circle at top left, ${s.primary_color}40, transparent 36%),
            radial-gradient(circle at bottom right, ${s.accent_color}33, transparent 34%),
            ${s.background_color};
          font-family: var(--paper-font-body1_-_font-family, Roboto, Arial, sans-serif);
        }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 32px 20px 48px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          margin-bottom: 22px;
        }

        h1 {
          margin: 0;
          font-size: 34px;
          letter-spacing: -0.04em;
        }

        .subtitle {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.72);
        }

        .grid {
          display: grid;
          grid-template-columns: minmax(280px, 390px) minmax(320px, 1fr);
          gap: 18px;
        }

        .card {
          border-radius: ${s.rounded}px;
          background: ${s.card_color};
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 20px;
        }

        .fields {
          display: grid;
          gap: 14px;
        }

        .field {
          display: grid;
          gap: 7px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
        }

        input[type="text"], input[type="number"] {
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          padding: 0 12px;
          color: ${s.text_color};
          background: rgba(255, 255, 255, 0.06);
          outline: none;
        }

        input[type="color"] {
          width: 100%;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          padding: 4px;
        }

        .buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        button {
          border: 0;
          border-radius: 999px;
          padding: 12px 16px;
          font-weight: 700;
          cursor: pointer;
          color: #08101f;
          background: ${s.accent_color};
        }

        button.secondary {
          color: ${s.text_color};
          background: rgba(255, 255, 255, 0.10);
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 12px;
        }

        .tile {
          border-radius: calc(${s.rounded}px * 0.8);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.10);
          padding: 16px;
          min-height: 96px;
        }

        .icon {
          width: 36px;
          height: 36px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: ${s.primary_color};
          color: white;
          margin-bottom: 12px;
        }

        .value {
          color: ${s.accent_color};
          font-size: 24px;
          font-weight: 800;
        }

        pre {
          white-space: pre-wrap;
          overflow: auto;
          min-height: 320px;
          color: ${s.text_color};
          background: rgba(0, 0, 0, 0.22);
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.10);
        }

        @media (max-width: 850px) {
          .grid { grid-template-columns: 1fr; }
          .header { align-items: flex-start; flex-direction: column; }
        }
      </style>

      <div class="wrap">
        <div class="header">
          <div>
            <h1>Theme Generator</h1>
            <p class="subtitle">Farben setzen, Vorschau prüfen, YAML kopieren oder direkt speichern.</p>
          </div>
        </div>

        <div class="grid">
          <section class="card">
            <div class="fields">
              ${this.input("Theme Name", "name", "text")}
              ${this.input("Primärfarbe", "primary_color")}
              ${this.input("Akzentfarbe", "accent_color")}
              ${this.input("Hintergrund", "background_color")}
              ${this.input("Kartenfarbe", "card_color")}
              ${this.input("Textfarbe", "text_color")}
              ${this.input("Rundung", "rounded", "number")}
            </div>
            <div class="buttons">
              <button id="save">Speichern in Home Assistant</button>
              <button class="secondary" id="copy">YAML kopieren</button>
            </div>
          </section>

          <section class="card">
            <h2>Vorschau</h2>
            <div class="preview-grid">
              <div class="tile"><div class="icon">⌂</div><strong>Wohnzimmer</strong><div class="value">22,4 °C</div></div>
              <div class="tile"><div class="icon">☀</div><strong>Licht</strong><div class="value">An</div></div>
              <div class="tile"><div class="icon">⚡</div><strong>Server</strong><div class="value">38 W</div></div>
              <div class="tile"><div class="icon">≋</div><strong>Aquarium</strong><div class="value">OK</div></div>
            </div>
            <h2>YAML</h2>
            <pre>${this.themeYaml().replaceAll("<", "&lt;")}</pre>
          </section>
        </div>
      </div>
    `;

    this.shadowRoot.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", (ev) => {
        const target = ev.currentTarget;
        this.updateValue(target.dataset.key, target.value);
      });
    });
    this.shadowRoot.getElementById("copy")?.addEventListener("click", () => this.copyYaml());
    this.shadowRoot.getElementById("save")?.addEventListener("click", () => this.saveTheme());
  }
}

customElements.define("theme-generator-panel", ThemeGeneratorPanel);
