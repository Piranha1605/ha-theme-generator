// Felder, deren Wert Home Assistant je nach Zusammenhang anders setzt, duerfen
// keine Vorgabe haben.
// Ausfuehren: node tests/hatg-bedingte-vorgaben.test.js
//
// Fields whose value Home Assistant sets differently per context must not carry
// a default.
//
// Der Anlass, gemeldet von einem Nutzer an 1.3.2b22: Alle Dialoge oeffneten in
// voller Fensterhoehe. Ursache war das neue Feld ha-dialog-min-height mit der
// Vorgabe 100vh. In ha-dialog.ts steht der allgemeine Fall ohne Ausweichwert -
//
//     min-height: var(--ha-dialog-min-height);
//
// - und 40 Zeilen tiefer, in einem bedingten Block:
//
//     :host([type="standard"]) wa-dialog::part(dialog) {
//       min-height: var(--ha-dialog-min-height, 100vh);
//
// Der Auswerter, der die Vorgaben aus den Quellen zog, nahm den ersten Treffer
// MIT Ausweichwert - also den Sonderfall - und machte ihn zur Vorgabe fuer alle.
//
// Die Regel dahinter: Wer einen solchen Wert ins Theme schreibt, pinnt JEDEN
// Zusammenhang darauf fest. HA kann dann nicht mehr unterscheiden. Ein leeres
// Feld dagegen wird gar nicht erst geschrieben - einstellbar bleibt es trotzdem.

const assert = require("node:assert/strict");
const { panelBauen } = require("../werkzeuge/kopflos.js");

let fehler = 0;
function pruefe(name, fn) {
  try { fn(); console.log("  ok   " + name); }
  catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 6).join("\n       "));
  }
}

const { panel, ctx } = panelBauen();
const m = ctx.HATG_MANIFEST;

// Am 2026-10-08 an den Quellen des HA-Frontends geprueft: Fuer diese Namen
// stehen im Quelltext mehrere verschiedene Ausweichwerte, je nach Dialogtyp,
// Knopfgroesse oder Media Query.
const BEDINGT = [
  "ha-dialog-min-height", "ha-dialog-max-height", "ha-dialog-width-full",
  "ha-dialog-border-radius", "ha-bottom-sheet-content-padding",
  "dialog-content-padding", "button-height", "ha-button-height",
  "ha-checkbox-border-color", "ha-tooltip-border-radius",
  "ha-tooltip-font-size", "ha-tooltip-font-weight",
];

pruefe("Bedingte Werte haben keine Vorgabe", () => {
  const mitWert = BEDINGT.filter((k) => String(m.light[k] ?? "") !== "" || String(m.dark[k] ?? "") !== "");
  assert.deepEqual(mitWert, [], `diese Felder haben wieder eine Vorgabe: ${mitWert.join(", ")}`);
});

pruefe("Die Felder gibt es weiterhin, sie sind nur leer", () => {
  const fehlend = BEDINGT.filter((k) => m.light[k] === undefined);
  assert.deepEqual(fehlend, [], `verschwunden statt geleert: ${fehlend.join(", ")}`);
});

// Der eigentliche Beweis: Was leer ist, darf nicht in der Theme landen.
pruefe("Nichts davon steht in einer frisch erzeugten Theme", () => {
  const text = panel.buildYamlText();
  const drin = BEDINGT.filter((k) => new RegExp(`^\\s+${k}:`, "m").test(text));
  assert.deepEqual(drin, [], `wird trotz leerer Vorgabe geschrieben: ${drin.join(", ")}`);
});

// Gegenprobe: Der Mechanismus "leer wird nicht geschrieben" muss stimmen,
// sonst sagt der Test oben nichts aus.
pruefe("Ein Feld MIT Vorgabe steht sehr wohl drin", () => {
  const text = panel.buildYamlText();
  for (const k of ["ha-space-4", "ha-border-radius-md", "primary-color"]) {
    assert.ok(m.light[k], `${k} hat keine Vorgabe - Gegenprobe taugt nicht`);
    assert.match(text, new RegExp(`^\\s+${k}:`, "m"), `${k} fehlt in der Ausgabe`);
  }
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
