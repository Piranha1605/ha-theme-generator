// Die Theme-Pruefung darf keine Fehlalarme geben.
// Ausfuehren: node tests/hatg-theme-pruefen.test.js
//
// The theme check must not raise false alarms.
//
// Der Fehler, gegen den dieser Test steht: Eine mehrzeilige CSS-Deklaration
// ("box-shadow:" mit dem Wert in den Zeilen darunter) endet genauso nach dem
// Doppelpunkt wie ein UIX-Pfadschluessel. theme-pruefen.js hat sie deshalb als
// Pfad gelesen und am 2026-09-29 in docs/beispiele/glas-basis.yaml drei
// "doppelte Pfade box-shadow" gemeldet - die Theme hat zwei Pfade, nicht sechs.
// Ein Fehlalarm ist hier teuer: Seit dem 2026-09-29 blockiert ein Fehlerbefund
// die Veroeffentlichung.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { pruefe, pfadSchluessel, istPfadSchluessel } = require("../werkzeuge/theme-pruefen.js");

let fehler = 0;
function pruefeTest(name, fn) {
  try { fn(); console.log("  ok   " + name); }
  catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 8).join("\n       "));
  }
}

function mitDatei(inhalt, fn) {
  const p = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "hatg-")), "t.yaml");
  fs.writeFileSync(p, inhalt, "utf8");
  try { return fn(p); } finally { fs.rmSync(path.dirname(p), { recursive: true, force: true }); }
}

const RUMPF = ["  modes:", "    light:", '      primary-color: "#0277BD"', "    dark:", '      primary-color: "#0A84FF"', ""];

pruefeTest("Eine CSS-Deklaration ist kein Pfad", () => {
  for (const k of ["box-shadow", "background", "transition", "--ha-button-box-shadow", "--verlauf-akzent"]) {
    assert.equal(istPfadSchluessel(k), false, `"${k}" wird als Pfad gelesen`);
  }
});

pruefeTest("Echte Pfade werden erkannt", () => {
  for (const k of [
    ".",
    "ha-button $",
    "ha-card hui-entities-toggle $",
    "$ ha-dialog $",
    "hui-generic-entity-row $ div.row state-badge $",
    "ha-card > h1 > hui-entities-toggle $ ha-switch",
  ]) {
    assert.equal(istPfadSchluessel(k), true, `"${k}" wird nicht als Pfad erkannt`);
  }
});

pruefeTest("Ein mehrzeiliges box-shadow erzeugt keinen Pfad", () => {
  const block = [
    "    ha-button $: |",
    "      :host {",
    "        box-shadow:",
    "          0 1px 2px rgba(0,0,0,0.3),",
    "          inset 0 1px 0 rgba(255,255,255,0.2);",
    "      }",
    "    .: |",
    "      :host { color: red; }",
  ].join("\n");
  const pfade = pfadSchluessel(block);
  assert.deepEqual([...pfade], ["ha-button $", "."], `gefunden: ${pfade.join(" | ")}`);
});

pruefeTest("Die Beispiel-Themes gelten als fehlerfrei", () => {
  const ordner = path.join(__dirname, "..", "docs", "beispiele");
  const dateien = fs.existsSync(ordner)
    ? fs.readdirSync(ordner).filter((f) => f.endsWith(".yaml")).map((f) => path.join(ordner, f))
    : [];
  assert.ok(dateien.length >= 1, "keine Beispiel-Theme gefunden");
  for (const d of dateien) {
    const r = pruefe(d);
    assert.deepEqual([...r.fehler], [], `${path.basename(d)} wird als fehlerhaft gemeldet`);
  }
});

pruefeTest("Ein echter doppelter Pfad wird weiter gemeldet", () => {
  const theme = [
    "boese:",
    "  uix-card-yaml: |",
    "    ha-button $: |",
    "      :host { color: red; }",
    "    ha-button $: |",
    "      :host { color: blue; }",
    ...RUMPF,
  ].join("\n");
  const r = mitDatei(theme, pruefe);
  assert.ok(
    r.fehler.some((z) => /doppelter Pfad "ha-button \$"/.test(z)),
    `der doppelte Pfad fehlt: ${r.fehler.join(" | ")}`
  );
});

pruefeTest("Ein Pfad mit $$ wird weiter gemeldet", () => {
  const theme = [
    "boese:",
    "  uix-card-yaml: |",
    "    ha-config-dashboard $$ ha-config-navigation-list $: |",
    "      :host { color: green; }",
    ...RUMPF,
  ].join("\n");
  const r = mitDatei(theme, pruefe);
  assert.ok(r.fehler.some((z) => z.includes("$$")), `der $$-Pfad fehlt: ${r.fehler.join(" | ")}`);
});

pruefeTest("Eine unspeicherbare Vorlagen-Kennung wird gemeldet", () => {
  const theme = [
    "boese:",
    "  uix-card: |",
    "    /* HATG:UIX:eigene-test-füllung:START */",
    "    :host { color: red; }",
    "    /* HATG:UIX:eigene-test-füllung:END */",
    ...RUMPF,
  ].join("\n");
  const r = mitDatei(theme, pruefe);
  assert.ok(
    r.fehler.some((z) => z.includes("Unspeicherbare Vorlagen-Kennung")),
    `die Kennung wurde nicht gemeldet: ${r.fehler.join(" | ")}`
  );
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
