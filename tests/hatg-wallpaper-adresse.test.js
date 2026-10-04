// Hintergrundbilder muessen ohne installiertes HATG erreichbar sein.
// Ausfuehren: node tests/hatg-wallpaper-adresse.test.js
//
// Background images must be reachable without HATG installed.
//
// Der Fehler, gegen den dieser Test steht: Bis 1.3.2b12 trug die Galerie die
// Adresse /hatg_wallpaper/<name> in lovelace-background und
// popup-custom-wallpaper ein. Das Feld war in Ordnung - Home Assistant liest es
// selbst -, aber die Adresse gibt es nur, solange HATG installiert ist: Sie
// wird von der Integration registriert. Wer so eine Theme weitergab, beim
// Empfaenger blieb der Hintergrund leer, und zwar ohne Fehlermeldung, weil ein
// fehlendes Bild in CSS einfach nichts tut. Am 2026-09-30 an einer
// weitergegebenen Theme aufgefallen.
//
// Seit 1.3.2b13 liegen die Bilder in config/www/hatg und kommen unter
// /local/hatg von Home Assistant selbst. Import, Autosave und Entwurf ziehen
// alte Adressen mit.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
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

function importiere(zeilenLight, zeilenDark) {
  const { panel, ctx } = panelBauen();
  const theme = ["meintest:", "  modes:", "    light:", ...zeilenLight, "    dark:", ...zeilenDark, ""].join("\n");
  const bekannt = new Set(Object.keys(panel._state.values.light));
  const geparst = ctx.hatgParseThemeYaml(theme, bekannt);
  assert.ok(!geparst.error, `Import fehlgeschlagen: ${geparst.error}`);
  panel.applyImportedTheme(geparst);
  return panel;
}

const ALT_L = ['      lovelace-background: "url(\\"/hatg_wallpaper/bild.jpg\\")"'];
const ALT_D = ['      lovelace-background: "url(\\"/hatg_wallpaper/bild.jpg\\")"'];

pruefe("Eine alte Bildadresse wird beim Import umgestellt", () => {
  const p = importiere(ALT_L, ALT_D);
  ["light", "dark"].forEach((m) => {
    const wert = String(p._state.values[m]["lovelace-background"] || "");
    assert.ok(wert.includes("/local/hatg/bild.jpg"), `${m}: neue Adresse fehlt -> ${wert}`);
    assert.ok(!wert.includes("/hatg_wallpaper/"), `${m}: alte Adresse steht noch -> ${wert}`);
  });
});

pruefe("Der Dateiname und der Rest des Wertes bleiben unangetastet", () => {
  const p = importiere(
    ['      lovelace-background: "linear-gradient(rgba(1,2,3,0.4), rgba(1,2,3,0.4)), url(\\"/hatg_wallpaper/mein bild-2.jpg\\")"'],
    ['      lovelace-background: "url(\\"/hatg_wallpaper/mein bild-2.jpg\\")"']
  );
  const wert = String(p._state.values.light["lovelace-background"] || "");
  assert.ok(wert.includes("linear-gradient(rgba(1,2,3,0.4)"), `der Schleier ist weg -> ${wert}`);
  assert.ok(wert.includes("/local/hatg/mein bild-2.jpg"), `der Dateiname stimmt nicht -> ${wert}`);
});

pruefe("popup-custom-wallpaper wird mitgezogen", () => {
  const p = importiere(
    ['      popup-custom-wallpaper: "url(\\"/hatg_wallpaper/pop.png\\")"'],
    ['      popup-custom-wallpaper: "url(\\"/hatg_wallpaper/pop.png\\")"']
  );
  assert.match(String(p._state.values.light["popup-custom-wallpaper"]), /\/local\/hatg\/pop\.png/);
});

pruefe("Fremde Adressen bleiben unberuehrt", () => {
  const p = importiere(
    ['      lovelace-background: "url(\\"/local/eigenes/bild.jpg\\")"'],
    ['      lovelace-background: "url(\\"https://example.invalid/x.jpg\\")"']
  );
  assert.match(String(p._state.values.light["lovelace-background"]), /\/local\/eigenes\/bild\.jpg/);
  assert.match(String(p._state.values.dark["lovelace-background"]), /https:\/\/example\.invalid\/x\.jpg/);
});

pruefe("Die Ausgabe enthaelt keine /hatg_wallpaper-Adresse mehr", () => {
  const p = importiere(ALT_L, ALT_D);
  const text = p.buildYamlText();
  // Im Kopf steht der Import-Bericht, der die Umstellung erwaehnt - der zaehlt
  // nicht. Geprueft werden die Feldwerte.
  const ohneKopf = text.split("\n").filter((z) => !z.trim().startsWith("#")).join("\n");
  assert.ok(!ohneKopf.includes("/hatg_wallpaper/"), "in den Feldwerten steht noch die alte Adresse");
  assert.ok(ohneKopf.includes("/local/hatg/bild.jpg"), "die neue Adresse fehlt in der Ausgabe");
});

pruefe("Der Import-Bericht nennt die Umstellung", () => {
  const p = importiere(ALT_L, ALT_D);
  const zeilen = (p._state.importBericht && p._state.importBericht.zeilen) || [];
  assert.ok(
    zeilen.some((z) => z.includes("/local/hatg")),
    `keine Zeile zur Umstellung: ${zeilen.join(" | ")}`
  );
});

pruefe("Ohne alte Adresse gibt es keine Meldung", () => {
  const p = importiere(
    ['      lovelace-background: "url(\\"/local/hatg/bild.jpg\\")"'],
    ['      lovelace-background: "url(\\"/local/hatg/bild.jpg\\")"']
  );
  const zeilen = (p._state.importBericht && p._state.importBericht.zeilen) || [];
  assert.ok(!zeilen.some((z) => z.includes("umgestellt")), "es wurde gemeldet, obwohl nichts zu tun war");
});

// Client und Server muessen dieselbe Adresse benutzen.
pruefe("Client- und Server-Adresse stimmen ueberein", () => {
  const js = fs.readFileSync(path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js"), "utf8");
  const py = fs.readFileSync(path.join(__dirname, "..", "custom_components", "hatg", "const.py"), "utf8");
  const jsNeu = (js.match(/HATG_WALLPAPER_ADRESSE_NEU\s*=\s*"([^"]+)"/) || [])[1];
  const pyNeu = (py.match(/WALLPAPER_LOCAL_PATH\s*=\s*"([^"]+)"/) || [])[1];
  assert.ok(jsNeu && pyNeu, "eine der beiden Konstanten wurde nicht gefunden");
  assert.equal(jsNeu.replace(/\/$/, ""), pyNeu, `Client ${jsNeu} gegen Server ${pyNeu}`);

  const jsAlt = (js.match(/HATG_WALLPAPER_ADRESSE_ALT\s*=\s*"([^"]+)"/) || [])[1];
  const pyAlt = (py.match(/WALLPAPER_STATIC_PATH\s*=\s*"([^"]+)"/) || [])[1];
  assert.equal(jsAlt.replace(/\/$/, ""), pyAlt, `Client ${jsAlt} gegen Server ${pyAlt}`);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
