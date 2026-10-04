// Prueft den Bericht, den HATG nach einem Import zeigt.
// Ausfuehren: node tests/hatg-import-bericht.test.js
//
// Checks the report HATG shows after an import.
// Run with: node tests/hatg-import-bericht.test.js
//
// Drei Fallen, die dieser Test abfaengt:
// - Der Bericht steht seit 1.3.2b5 in einem Fenster und im Kopf der
//   Theme-Datei. Damit geht er nach aussen und muss in beiden Sprachen da
//   sein; eine vergessene Zeile faellt sonst nur englischen Nutzern auf.
// - Eine Berichtszeile mit Zeilenumbruch wuerde den YAML-Kommentar sprengen
//   und die Theme-Datei unlesbar machen.
// - Der Bericht darf kein eigenes Theme-Feld werden: HATG schreibt nur
//   Felder, die Home Assistant, Bubble oder Mushroom selbst lesen.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const PANEL = path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js");
const quelle = fs.readFileSync(PANEL, "utf8");

function ausschnitt(anfang, ende) {
  const a = quelle.indexOf(anfang);
  assert.ok(a !== -1, `Anfang nicht gefunden: ${anfang}`);
  const e = quelle.indexOf(ende, a);
  assert.ok(e !== -1, `Ende nicht gefunden: ${ende}`);
  return quelle.slice(a, e);
}

let fehler = 0;
function pruefe(name, fn) {
  try {
    fn();
    console.log("  ok   " + name);
  } catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 6).join("\n       "));
  }
}

const BERICHT = ausschnitt(
  "  applyImportedTheme(parsed) {",
  "    this._state.importBericht = {"
);

pruefe("Jede Berichtszeile steht auf Deutsch und Englisch", () => {
  // Jeder parts.push im Bericht braucht einen en-Zweig. Die erste Zuweisung
  // (const parts = …) zaehlt mit, sie traegt die beiden Grundzeilen.
  const pushes = BERICHT.split("parts.push(").slice(1);
  assert.ok(pushes.length >= 8, `nur ${pushes.length} Berichtszeilen gefunden`);
  pushes.forEach((block, i) => {
    const kopf = block.slice(0, 400);
    assert.match(kopf, /\ben\s*$|\ben\s*\n|\ben\b\s*\?/m, `parts.push #${i + 1} ohne englische Fassung`);
  });
  const zuweisung = BERICHT.slice(BERICHT.indexOf("const parts = parsed.flatSingleMode"), BERICHT.indexOf("if (migrierteStilziele)"));
  assert.match(zuweisung, /\ben\b/, "die Grundzeilen haben keine englische Fassung");
});

pruefe("Die Sprache kommt aus dem Panel, nicht aus einem festen Wert", () => {
  assert.match(BERICHT, /const en = this\._sprache === "en";/);
});

pruefe("Singularformen stimmen", () => {
  // "1 eigene Hilfsfeld" und "1 unbekannte Felder" standen bis 1.3.2b4 so da.
  assert.ok(!/1 eigene Hilfsfeld[^e]/.test(quelle), "\"1 eigene Hilfsfeld\" statt \"1 eigenes Hilfsfeld\"");
  assert.match(BERICHT, /1 eigenes Hilfsfeld aufgelöst und entfernt/);
  assert.match(BERICHT, /1 unbekanntes Feld aufbewahrt/);
});

pruefe("Der Bericht landet als Kommentar im Kopf, nicht als Theme-Feld", () => {
  const kopf = ausschnitt("  buildYamlHeader() {", "\n  }");
  assert.match(kopf, /const bericht = this\._state\.importBericht;/);
  // Jede Zeile wird zu einem Kommentar - sonst waere es ein Feld.
  assert.match(kopf, /zeilen\.push\(`#   - \$\{String\(z\)\.replace\(/);
  // Und Zeilenumbrueche werden vorher plattgemacht.
  assert.match(kopf, /\.replace\(\/\\s\+\/g, " "\)/);
  // Kein Feldname, der im Theme landen wuerde.
  assert.ok(!/hatg-import|import-bericht:/.test(kopf), "der Bericht wuerde als Feld geschrieben");
});

pruefe("Das Fenster steht in der Mitte und hat einen Knopf zum Schliessen", () => {
  const dialog = ausschnitt("  renderImportBerichtDialog() {", "\n  }");
  // modal-box ist die zentrierte Huelle, modal-scrim legt sich darueber.
  assert.match(dialog, /class="modal-scrim" data-import-bericht-close/);
  assert.match(dialog, /class="modal-box modal-box-wide"/);
  assert.match(dialog, /data-import-bericht-close>\$\{en \? "Close" : "Schließen"\}/);
  assert.match(dialog, /role="dialog" aria-modal="true"/);
  // Der Kasten braucht eine eigene Schriftfarbe, sonst erbt er die des
  // Wirts - im hellen Erscheinungsbild stand die Ueberschrift weiss auf weiss.
  assert.match(quelle, /\.modal-box \{ color: var\(--hatg-text\);/);
});

pruefe("Der Bericht ueberlebt einen Neustart, klappt aber nicht wieder auf", () => {
  assert.match(quelle, /importBericht: this\._state\.importBericht,/);
  assert.match(quelle, /if \(saved\.importBericht\) this\._state\.importBericht = \{ \.\.\.saved\.importBericht, offen: false \};/);
});

pruefe("Die beiden Farbbalken auf der Vorlagenseite sind weg", () => {
  // Sie schlugen Aenderungen an Theme-Feldern vor, die nicht verlaesslich
  // griffen. Entfernt am 2026-09-27 auf Ansage.
  for (const rest of [
    "deckendeFlaechenfarben",
    "zuDurchsichtigeGrundfarben",
    "grundfarbenDeckendSetzen",
    "data-flaechenfarben-glas",
    "data-grundfarben-deckend",
  ]) {
    assert.ok(!quelle.includes(rest), `${rest} steht noch im Panel`);
  }
  // Die Glas-Regler brauchen glasFelderSetzen weiter.
  assert.match(quelle, /glasFelderSetzen\(\{ still = false \} = \{\}\)/);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
