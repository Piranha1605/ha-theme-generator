class ThemeGeneratorPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
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
          max-width: 980px;
          margin: 0 auto;
          padding: 28px;
          border-radius: 24px;
          background: var(--card-background-color, #1f2937);
          border: 1px solid var(--ha-card-border-color, rgba(255,255,255,0.14));
          box-shadow: var(--ha-card-box-shadow, none);
        }

        h1 {
          margin: 0 0 10px 0;
          font-size: 34px;
          line-height: 1.15;
        }

        p {
          margin: 0 0 14px 0;
          color: var(--secondary-text-color, #9ca3af);
          font-size: 15px;
          line-height: 1.5;
        }

        .ok {
          display: inline-block;
          margin-top: 16px;
          padding: 12px 18px;
          border-radius: 999px;
          background: #3c8ae9;
          color: white;
          font-weight: 700;
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
      </style>

      <div class="card">
        <h1>Theme Generator</h1>
        <p>Saubere neue Grundversion.</p>
        <p>Diese Version prüft nur, ob HACS, Integration, Seitenleiste und Panel-Anzeige sauber funktionieren.</p>
        <div class="ok">Panel läuft</div>
        <code>Version: 1.0.2
Modus: Neustart-Basis
Status: Anzeige erfolgreich geladen</code>
      </div>
    `;
  }
}

if (!customElements.get("theme-generator-panel")) {
  customElements.define("theme-generator-panel", ThemeGeneratorPanel);
}
