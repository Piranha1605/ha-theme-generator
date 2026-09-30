// Der Import wirft ungenutzte Felder raus.
// Ausfuehren: node tests/hatg-ausmisten.test.js
//
// Import removes fields nothing refers to.
//
// Warum: Die Ausgabe haengt unbekannte Felder immer wieder an. Ein Feld aus
// einer aelteren Fassung des Themes, auf das nichts mehr zeigt, wird damit bei
// jedem Import treu weitergereicht - man wird es nie wieder los. In der Theme
// eines Nutzers waren das am 2026-09-30 vierzehn Felder (liquid-*,
// bubble-menu-bar-main-background-color), jedes zweimal geschrieben, also 28
// Zeilen Ballast.
//
// Die Grenze: Was noch jemand ueber var() liest, bleibt stehen - auch ueber
// mehrere Stufen. Ein Feld kann allerdings von ausserhalb der Theme gelesen
// werden, etwa aus der Konfiguration einer einzelnen Karte; das sieht HATG
// nicht, deshalb nennt der Bericht jedes entfernte Feld beim Namen.

const assert = require("node:assert/strict");
const { panelBauen } = require("../werkzeuge/kopflos.js");

let fehler = 0;
function pruefe(name, fn) {
  try { fn(); console.log("  ok   " + name); }
  catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 8).join("\n       "));
  }
}

function importiere(zeilen, themeEbene = []) {
  const { panel, ctx } = panelBauen();
  const theme = [
    "meintest:",
    ...themeEbene,
    "  modes:",
    "    light:",
    ...zeilen,
    "    dark:",
    ...zeilen,
    "",
  ].join("\n");
  const bekannt = new Set(Object.keys(panel._state.values.light));
  const geparst = ctx.hatgParseThemeYaml(theme, bekannt);
  assert.ok(!geparst.error, `Import fehlgeschlagen: ${geparst.error}`);
  panel.applyImportedTheme(geparst);
  return panel;
}

const extras = (p) => [...new Set([
  ...Object.keys(p._state.extraValues.light || {}),
  ...Object.keys(p._state.extraValues.dark || {}),
])].sort();
// Der Kopf der Datei traegt den Import-Bericht, und der nennt die entfernten
// Felder beim Namen. Geprueft wird deshalb nur, was unter den Kommentaren steht.
const ohneKopf = (p) => p.buildYamlText().split("\n").filter((z) => !z.trim().startsWith("#")).join("\n");

pruefe("Ein unbekanntes Feld, auf das nichts zeigt, fliegt raus", () => {
  const p = importiere([
    '      liquid-accent-aqua: "#00e5ff"',
    '      liquid-dauer-schnell: "120ms"',
    '      primary-color: "#0277BD"',
  ]);
  assert.deepEqual(extras(p), [], `es blieb etwas uebrig: ${extras(p).join(", ")}`);
  assert.ok(!ohneKopf(p).includes("liquid-accent-aqua"), "das Feld steht noch in der Ausgabe");
  assert.ok(!ohneKopf(p).includes("liquid-dauer-schnell"), "das zweite Feld steht noch in der Ausgabe");
});

// Ein benutztes Hilfsfeld wird nicht aufbewahrt, sondern AUFGELOEST: Der Wert
// tritt an die Stelle des Verweises, danach braucht niemand mehr das Feld.
// Entscheidend ist deshalb nicht, ob das Feld bleibt, sondern dass kein
// Verweis ins Leere zeigt.
pruefe("Ein benutztes Hilfsfeld wird aufgeloest, nicht abgeschnitten", () => {
  const p = importiere([
    '      liquid-accent-aqua: "#00e5ff"',
    '      primary-color: "var(--liquid-accent-aqua)"',
  ]);
  assert.equal(p._state.values.light["primary-color"], "#00e5ff", "der Wert ist nicht eingetreten");
  assert.ok(!ohneKopf(p).includes("--liquid-accent-aqua"), "es zeigt noch ein Verweis auf das entfernte Feld");
});

pruefe("Auch eine Kette ueber mehrere Stufen loest sich auf", () => {
  const p = importiere([
    '      liquid-a: "#111111"',
    '      liquid-b: "var(--liquid-a)"',
    '      primary-color: "var(--liquid-b)"',
  ]);
  assert.equal(p._state.values.light["primary-color"], "#111111", "die Kette wurde nicht bis zum Wert verfolgt");
  assert.ok(!ohneKopf(p).includes("--liquid-a"), "liquid-a wird noch referenziert");
  assert.ok(!ohneKopf(p).includes("--liquid-b"), "liquid-b wird noch referenziert");
});

pruefe("Ein Verweis aus einem Stilziel laesst nichts ins Leere zeigen", () => {
  const p = importiere(
    ['      liquid-glanz: "rgba(255,255,255,0.4)"'],
    ["  uix-card: |", "    ha-card { border-color: var(--liquid-glanz); }"]
  );
  const text = ohneKopf(p);
  const zeigtNochHin = /var\(\s*--liquid-glanz/.test(text);
  const istDefiniert = /^\s+liquid-glanz\s*:/m.test(text);
  assert.ok(!zeigtNochHin || istDefiniert, "der Verweis steht noch da, das Feld aber nicht mehr");
});

pruefe("Der Bericht nennt die entfernten Felder beim Namen", () => {
  const p = importiere([
    '      liquid-accent-aqua: "#00e5ff"',
    '      bubble-menu-bar-main-background-color: "#123456"',
  ]);
  const zeilen = (p._state.importBericht && p._state.importBericht.zeilen) || [];
  const zeile = zeilen.find((z) => z.includes("ungenutzte"));
  assert.ok(zeile, `keine Zeile zum Ausmisten: ${zeilen.join(" | ")}`);
  assert.ok(zeile.includes("liquid-accent-aqua"), `das Feld wird nicht genannt: ${zeile}`);
  assert.ok(zeile.includes("bubble-menu-bar"), `das Feld wird nicht genannt: ${zeile}`);
});

pruefe("Ohne Ballast gibt es keine Meldung", () => {
  const p = importiere(['      primary-color: "#0277BD"']);
  const zeilen = (p._state.importBericht && p._state.importBericht.zeilen) || [];
  assert.ok(!zeilen.some((z) => z.includes("ungenutzte")), "es wurde gemeldet, obwohl nichts zu tun war");
});

pruefe("Bekannte Felder werden nie angefasst", () => {
  const p = importiere(['      primary-color: "#0277BD"', '      accent-color: "#FF0000"']);
  assert.equal(p._state.values.light["primary-color"], "#0277BD");
  assert.equal(p._state.values.light["accent-color"], "#FF0000");
});

pruefe("Ein Vorlagenblock ueberlebt das Ausmisten", () => {
  const p = importiere(
    ['      liquid-tot: "#000000"'],
    ["  uix-card: |", "    /* HATG:UIX:glas-ebene:START */", "    ha-card { color: red; }", "    /* HATG:UIX:glas-ebene:END */"]
  );
  const text = p.buildYamlText();
  assert.ok(text.includes("HATG:UIX:glas-ebene:START"), "der Vorlagenblock ist verschwunden");
  assert.ok(!ohneKopf(p).includes("liquid-tot"), "das ungenutzte Feld steht noch da");
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
