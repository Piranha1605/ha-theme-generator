// Testet das Aufloesen eigener Hilfsfelder beim Import direkt am ausgelieferten
// Panel-Code.
// Ausfuehren: node tests/hatg-eigenfelder.test.js
//
// Runs against the shipped panel source, no build step and no dependencies.
// Run with: node tests/hatg-eigenfelder.test.js
//
// Hintergrund: Fruehere Themes brachten eigene Felder mit (hatg-glas-fuellung,
// in umbenannten Kopien horizon-glas-fuellung ...), auf die Theme-Felder und
// Stilziele per var() zeigten. Seit HATG keine eigenen Felder mehr schreibt,
// liefen solche Verweise ins Leere. Der Import setzt deshalb die echten Werte
// ein - oder einen Verweis auf das HA-Feld, das denselben Wert traegt.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const PANEL = path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js");

function ladeHelfer() {
  const quelle = fs.readFileSync(PANEL, "utf8");
  const start = quelle.indexOf("// Fruehere HATG-Themes brachten eigene Hilfsfelder mit");
  const ende = quelle.indexOf("const HATG_VORLAGEN_STILLGELEGT =");
  assert.ok(start !== -1 && ende > start, "Aufloesung der Hilfsfelder in hatg-panel.js nicht gefunden");
  const bekannt = [
    "primary-color",
    "ha-card-background",
    "card-background-color",
    "control-button-background-color",
    "bubble-card-background-color",
    "ha-card-border-radius",
    "uix-card",
    "uix-sidebar",
  ];
  const kontext = {
    HATG_MANIFEST: { light: Object.fromEntries(bekannt.map((k) => [k, ""])) },
    hatgIstStilzielKey: (key) => /^uix-/.test(String(key || "")),
  };
  vm.runInNewContext(`${quelle.slice(start, ende)}\nthis.hatgLoeseEigeneFelderAuf = hatgLoeseEigeneFelderAuf; this.hatgVereinheitlicheVorlagenMarken = hatgVereinheitlicheVorlagenMarken;`, kontext);
  return kontext;
}

const helfer = ladeHelfer();
const loeseAuf = helfer.hatgLoeseEigeneFelderAuf;
const vereinheitliche = helfer.hatgVereinheitlicheVorlagenMarken;

let fehler = 0;
function pruefe(name, fn) {
  try {
    fn();
    console.log(`  ok   ${name}`);
  } catch (e) {
    fehler++;
    console.log(`  FEHL ${name}\n       ${e.message.split("\n").join("\n       ")}`);
  }
}

pruefe("Altes HATG-Theme: echte Werte, Verweis aufs HA-Feld, keine hatg-Felder", () => {
  const css = [
    ":host {",
    "  --ha-card-background: var(--hatg-glas-fuellung, rgba(255, 255, 255, 0.5)) !important;",
    "}",
    "ha-card {",
    "  background-color: var(--hatg-glas-fuellung, rgba(255, 255, 255, 0.5)) !important;",
    "  box-shadow: inset 0 0 0 1px var(--hatg-glas-rand, rgba(255, 255, 255, 0.4));",
    "}",
  ].join("\n");
  const bag = {
    light: {
      "ha-card-background": "var(--hatg-glas-fuellung)",
      "bubble-card-background-color": "var(--hatg-glas-fuellung)",
      "hatg-glas-fuellung": "rgba(255, 255, 255, 0.5)",
      "uix-card": css,
    },
    dark: {
      "ha-card-background": "var(--hatg-glas-fuellung)",
      "bubble-card-background-color": "var(--hatg-glas-fuellung)",
      "hatg-glas-fuellung": "rgba(255, 255, 255, 0.1)",
      "uix-card": css,
    },
    extra: { light: { "hatg-glas-rand": "rgba(255, 255, 255, 0.14)" }, dark: { "hatg-glas-rand": "rgba(255, 255, 255, 0.14)" } },
  };
  const bericht = loeseAuf(bag);
  assert.equal(bag.light["ha-card-background"], "rgba(255, 255, 255, 0.5)");
  assert.equal(bag.dark["ha-card-background"], "rgba(255, 255, 255, 0.1)");
  assert.equal(bag.light["bubble-card-background-color"], "var(--ha-card-background)");
  assert.equal(bag.dark["bubble-card-background-color"], "var(--ha-card-background)");
  const neu = bag.light["uix-card"];
  assert.ok(!/--hatg-/.test(neu), `Stilziel verweist noch auf hatg: ${neu}`);
  assert.ok(!/--ha-card-background:\s*var\(--ha-card-background\)/.test(neu), "Selbstverweis nicht entfernt");
  assert.ok(/background-color: var\(--ha-card-background\) !important/.test(neu), "Fuellung zeigt nicht aufs HA-Feld");
  assert.ok(/inset 0 0 0 1px rgba\(255, 255, 255, 0.14\)/.test(neu), "in beiden Modi gleicher Wert nicht eingesetzt");
  assert.equal(bag.light["uix-card"], bag.dark["uix-card"]);
  for (const m of ["light", "dark"]) {
    assert.deepEqual(Object.keys(bag[m]).filter((k) => k.startsWith("hatg-")), []);
    assert.deepEqual(Object.keys(bag.extra[m]).filter((k) => k.startsWith("hatg-")), []);
  }
  assert.equal(bericht.entfernt, 2);
  assert.deepEqual(Array.from(bericht.offen), []);
});

pruefe("Umbenanntes Theme: Ketten aufloesen, je Modus verschiedene Werte ohne Ausweichwert melden", () => {
  const css = ".menu { border-radius: var(--horizon-radius); color: var(--horizon-flaeche); }";
  const bag = {
    light: { "primary-color": "var(--horizon-primary)", "uix-sidebar": css },
    dark: { "primary-color": "var(--horizon-primary)", "uix-sidebar": css },
    extra: {
      light: {
        "horizon-primary": "var(--horizon-basis)",
        "horizon-basis": "#AFC7E8",
        "horizon-radius": "18px",
        "horizon-flaeche": "#FFFFFF",
        "mein-feld": "12px",
        "horizon-success": "#2E7D32",
      },
      dark: {
        "horizon-primary": "var(--horizon-basis)",
        "horizon-basis": "#8FA7C8",
        "horizon-radius": "18px",
        "horizon-flaeche": "#1C1C1E",
        "mein-feld": "12px",
        "horizon-success": "#66BB6A",
      },
    },
  };
  const bericht = loeseAuf(bag);
  assert.equal(bag.light["primary-color"], "#AFC7E8");
  assert.equal(bag.dark["primary-color"], "#8FA7C8");
  assert.ok(bag.light["uix-sidebar"].includes("border-radius: 18px"), bag.light["uix-sidebar"]);
  assert.ok(bag.light["uix-sidebar"].includes("var(--horizon-flaeche)"), "mehrdeutiger Wert haette stehen bleiben muessen");
  assert.deepEqual(Array.from(bericht.offen), ["uix-sidebar"]);
  assert.ok("horizon-flaeche" in bag.extra.dark, "noch gebrauchtes Feld wurde entfernt");
  assert.ok(!("horizon-primary" in bag.extra.light) && !("horizon-basis" in bag.extra.light) && !("horizon-radius" in bag.extra.light));
  assert.equal(bag.extra.light["mein-feld"], "12px", "unabhaengiges eigenes Feld wurde angefasst");
  assert.ok(!("horizon-success" in bag.extra.light) && !("horizon-success" in bag.extra.dark), "unbenutztes Geschwister blieb stehen");
});

pruefe("Stilziel: je Modus verschiedener Wert zeigt aufs HA-Feld, das in beiden Modi denselben traegt", () => {
  const css = "ha-card { border-color: var(--horizon-rand); outline-color: var(--horizon-leer); }";
  const bag = {
    light: { "card-background-color": "#E2E5EC", "ha-card-border-radius": "none", "uix-card": css },
    dark: { "card-background-color": "#2A2B33", "ha-card-border-radius": "none", "uix-card": css },
    extra: {
      light: { "horizon-rand": "#E2E5EC", "horizon-leer": "none" },
      dark: { "horizon-rand": "#2A2B33", "horizon-leer": "none" },
    },
  };
  loeseAuf(bag);
  assert.ok(bag.light["uix-card"].includes("border-color: var(--card-background-color)"), bag.light["uix-card"]);
  // "none" ist in beiden Modi gleich und wird fest eingesetzt - ein Feld mit
  // demselben nichtssagenden Wert darf dafuer nicht herhalten.
  assert.ok(bag.light["uix-card"].includes("outline-color: none"), bag.light["uix-card"]);
  assert.ok(!("horizon-rand" in bag.extra.light));
});

pruefe("Ohne eigene Felder bleibt alles unveraendert", () => {
  const bag = { light: { "primary-color": "#123456", "uix-card": "ha-card { color: var(--primary-color); }" }, dark: {}, extra: { light: {}, dark: {} } };
  const vorher = JSON.stringify(bag);
  const bericht = loeseAuf(bag);
  assert.equal(JSON.stringify(bag), vorher);
  assert.equal(bericht.entfernt, 0);
});

pruefe("Fremde Vorlagenmarken werden HATG-Marken, doppelte Bloecke fallen weg", () => {
  const css = [
    "/* HORIZON:UIX:glas-bubble:START */",
    ".alt { color: red; }",
    "/* HORIZON:UIX:glas-bubble:END */",
    "/* HORIZON:UIX:eigene-idee:START */",
    ".mein { color: blue; }",
    "/* HORIZON:UIX:eigene-idee:END */",
    "/* HATG:UIX:glas-bubble:START */",
    ".neu { color: green; }",
    "/* HATG:UIX:glas-bubble:END */",
  ].join("\n");
  const yaml = "# HORIZON:UIX:dialog-pfad:START\n\"$ ha-dialog $\": |\n  x\n# HORIZON:UIX:dialog-pfad:END";
  const bag = {
    light: { "uix-card": css, "uix-more-info-yaml": yaml, "primary-color": "/* HORIZON:UIX:x:START */" },
    dark: { "uix-card": css },
    extra: { light: {}, dark: {} },
  };
  const bericht = vereinheitliche(bag);
  const neu = bag.light["uix-card"];
  assert.ok(!/HORIZON/.test(neu), neu);
  assert.equal((neu.match(/HATG:UIX:glas-bubble:START/g) || []).length, 1, neu);
  assert.ok(neu.includes(".neu") && !neu.includes(".alt"), "der zuletzt geschriebene Block muss bleiben");
  assert.ok(neu.includes("/* HATG:UIX:eigene-idee:START */") && neu.includes(".mein"), neu);
  assert.equal(bag.dark["uix-card"], neu);
  assert.ok(bag.light["uix-more-info-yaml"].startsWith("# HATG:UIX:dialog-pfad:START"), bag.light["uix-more-info-yaml"]);
  assert.equal(bag.light["primary-color"], "/* HORIZON:UIX:x:START */", "Nicht-Stilziele bleiben unberuehrt");
  assert.equal(bericht.umbenannt, 3);
  assert.equal(bericht.doppelt, 1);
});

if (fehler) {
  console.log(`\n${fehler} Test(s) fehlgeschlagen.`);
  process.exit(1);
}
console.log("\nAlle Tests bestanden.");
