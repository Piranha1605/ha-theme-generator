// Das HATG-Panel ohne Browser laufen lassen.
//
// hatg-panel.js ist eine einzelne Datei mit einer Custom-Element-Klasse. Mit
// einem schmalen DOM-Ersatz laesst sie sich in node bauen, ein Theme
// importieren und wieder ausgeben - ohne Home Assistant, ohne Browser. Damit
// wird der Durchlauf Import -> Export pruefbar, und genau dort sass am
// 2026-09-27 ein Fehler, der beim Nutzer stumm Stilziele verschoben hat.
//
// Run the HATG panel without a browser, so the import -> export round trip
// can be checked in CI.

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const PANEL = path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js");

function knotenBauen() {
  const vorlage = {
    innerHTML: "", textContent: "",
    style: { setProperty() {}, removeProperty() {}, getPropertyValue: () => "" },
    classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
    setAttribute() {}, getAttribute: () => null, removeAttribute() {}, hasAttribute: () => false,
    appendChild(x) { return x; }, prepend() {}, append() {}, remove() {}, insertBefore(x) { return x; },
    addEventListener() {}, removeEventListener() {}, dispatchEvent: () => true,
    querySelector: () => null, querySelectorAll: () => [],
    children: [], firstElementChild: null, parentNode: null, shadowRoot: null,
    focus() {}, blur() {}, click() {}, scrollIntoView() {}, getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0 }),
  };
  return () => Object.create(vorlage);
}

// Ein Panel bauen. Gibt { panel, ctx } zurueck; ctx traegt auch die
// Hilfsfunktionen des Panels (hatgParseThemeYaml und so weiter).
function panelBauen() {
  const machKnoten = knotenBauen();
  const doc = {
    createElement: machKnoten, createTextNode: machKnoten, createDocumentFragment: machKnoten,
    querySelector: () => null, querySelectorAll: () => [],
    addEventListener() {}, removeEventListener() {},
    documentElement: machKnoten(), body: machKnoten(), head: machKnoten(),
  };
  const speicher = new Map();
  const ctx = {
    console: { log() {}, warn() {}, error() {}, info() {} },
    document: doc, navigator: { language: "de" },
    setTimeout, clearTimeout, setInterval, clearInterval,
    requestAnimationFrame: (f) => setTimeout(f, 0),
    localStorage: {
      getItem: (k) => (speicher.has(k) ? speicher.get(k) : null),
      setItem: (k, v) => speicher.set(k, String(v)),
      removeItem: (k) => speicher.delete(k),
    },
    customElements: { define() {}, get: () => undefined, whenDefined: () => Promise.resolve() },
    HTMLElement: class {
      constructor() { this.shadowRoot = null; }
      attachShadow() { this.shadowRoot = machKnoten(); return this.shadowRoot; }
    },
    CustomEvent: class { constructor(t, o) { this.type = t; Object.assign(this, o || {}); } },
    Event: class { constructor(t) { this.type = t; } },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    fetch: () => Promise.reject(new Error("kein Netz im kopflosen Lauf")),
    btoa: (s) => Buffer.from(s, "binary").toString("base64"),
    atob: (s) => Buffer.from(s, "base64").toString("binary"),
  };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  // Die Panel-Datei kennt nur Modul-Konstanten - was die Werkzeuge brauchen,
  // wird hier ausdruecklich nach aussen gereicht.
  const auslagern = [
    "HATGPanel", "HATG_MANIFEST", "HATG_VORLAGEN", "HATG_STILZIELE", "HATG_VERSION",
    "hatgParseThemeYaml", "hatgValidateValue", "hatgGetKeyFormats", "hatgIstStilzielKey",
    "hatgIstYamlZiel", "hatgTeileStilzielYaml", "hatgYamlPfadeZusammenfuehren",
    "HATG_KARTENFARBEN_NAMEN", "HATG_KARTENFARBEN_PALETTEN",
  ];
  vm.runInContext(
    fs.readFileSync(PANEL, "utf8") +
      "\n;" + auslagern.map((n) => `try { this.${n} = ${n}; } catch (e) {}`).join("") +
      "\n;this.__Panel = HATGPanel;",
    ctx
  );

  const panel = new ctx.__Panel();
  // Zeichnen, Meldungen und Autosave brauchen einen Browser - hier nicht.
  panel.render = () => {};
  panel.showToast = () => {};
  panel.autoSaveState = () => {};
  return { panel, ctx };
}

// Ein Theme importieren und wieder ausgeben, so wie es die Oberflaeche tut.
function durchlauf(text) {
  const { panel, ctx } = panelBauen();
  const bekannt = new Set(Object.keys(panel._state.values.light));
  const geparst = ctx.hatgParseThemeYaml(text, bekannt);
  if (geparst.error) return { fehler: geparst.error };
  panel.applyImportedTheme(geparst);
  return {
    ausgabe: panel.buildYamlText(),
    bericht: (panel._state.importBericht && panel._state.importBericht.zeilen) || [],
    name: panel._state.themeName,
    unbekannt: [...new Set([
      ...Object.keys(panel._state.extraValues.light || {}),
      ...Object.keys(panel._state.extraValues.dark || {}),
    ])].sort(),
  };
}

// Ein Stilziel-Feld auf seinen Basisnamen bringen: uix-dialog und
// uix-dialog-yaml sind dasselbe Ziel, card-mod-* wandert auf uix-*, und der
// alte Plural states-history-charts ist heute state-history-charts.
function stilzielBasis(key) {
  return String(key)
    .replace(/^card-mod-/, "uix-")
    .replace(/-yaml$/, "")
    .replace(/^uix-states-history-charts$/, "uix-state-history-charts");
}

// Alle Stilziele eines Themes, als Basisnamen, ohne Dubletten.
function stilziele(text) {
  return [...new Set(
    [...String(text).matchAll(/^  ((?:uix|card-mod)-[a-z0-9-]+(?:-yaml)?):/gm)].map((m) => stilzielBasis(m[1]))
  )];
}

// Alle Vorlagenmarken - auch unter fremder Vorsilbe (HORIZON:UIX:...) und auch
// mit einer Kennung, die HATG selbst nie erzeugen wuerde. Die Kennung wird
// deshalb weit gefasst: Mit [a-z0-9-]+ blieb eine Kennung mit Umlaut
// unsichtbar, und genau die ist der Fehlerfall.
function vorlagenMarken(text) {
  return new Set([...String(text).matchAll(/[A-Z][A-Z0-9_]*:UIX:([^:\s]+):START/g)].map((m) => m[1]));
}

module.exports = { panelBauen, durchlauf, stilziele, stilzielBasis, vorlagenMarken, PANEL };
