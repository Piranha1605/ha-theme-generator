// Verweise, die in CSS ins Leere laufen, muessen gemeldet werden.
// Ausfuehren: node tests/hatg-tote-verweise.test.js
//
// References that go nowhere must be reported.
//
// Der Anlass: In der Theme eines Nutzers zeigten drei var() auf Felder, die es
// nicht gab (--custom-card-gradient, -shadows, -border). HATG reichte sie bei
// jedem Durchlauf still weiter - der Import-Bericht sagte kein Wort. In CSS
// faellt so eine Eigenschaft ersatzlos aus: Die Einstellungsseiten verloren
// damit ihren Kartenhintergrund, ohne dass irgendwo etwas stand.
//
// Die Schwierigkeit liegt nicht im Finden, sondern im NICHT-Finden. Drei
// Sorten harmloser Verweise kommen in echten Themes staendig vor, und jede
// hat beim Bau dieser Pruefung zuerst Fehlalarm ausgeloest:
//
//   var(--x, none)                 fester Ausweichwert
//   var(--a, var(--b, var(--c)))   Kette - loest ein Glied auf, reicht das
//   --verlauf-akzent: ...          im CSS definiert statt als Theme-Feld

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
const bekannt = new Set(Object.keys(ctx.HATG_MANIFEST.light));
const istBekannt = (n) => bekannt.has(n) || /^(ha|wa|md|mdc)-/.test(n);
const tot = (css) => ctx.hatgVerweiseInsLeere(css, istBekannt);

pruefe("Ein blanker Verweis auf ein unbekanntes Feld wird gemeldet", () => {
  assert.deepEqual([...tot("background: var(--custom-card-gradient);")], ["custom-card-gradient"]);
});

pruefe("Ein fester Ausweichwert ist harmlos", () => {
  assert.deepEqual([...tot("box-shadow: var(--bar-box-shadow, none);")], []);
  assert.deepEqual([...tot("background: var(--irgendwas, #ff0000);")], []);
});

pruefe("Eine Kette mit einem bekannten Glied ist harmlos", () => {
  const css = "background: var(--gibtsnicht, var(--primary-color, var(--auchnicht)));";
  assert.deepEqual([...tot(css)], [], "ein bekanntes Glied in der Kette reicht");
});

pruefe("Eine Kette ganz ohne bekanntes Glied wird gemeldet", () => {
  const css = "background: var(--gibtsnicht, var(--auchnicht));";
  assert.deepEqual([...tot(css)], ["auchnicht"], "nur das letzte Glied wird genannt");
});

pruefe("Verschachtelte Verweise werden nicht einzeln gezaehlt", () => {
  const css = "background: var(--primary-color, var(--tief1, var(--tief2)));";
  assert.equal(tot(css).length, 0, "die inneren Glieder duerfen nicht einzeln anschlagen");
});

pruefe("Bekannte HA-Vorsilben loesen nichts aus", () => {
  for (const n of ["ha-color-fill-primary-normal-resting", "wa-color-brand-on-normal", "md-sys-color-primary", "mdc-theme-primary"]) {
    assert.deepEqual([...tot(`color: var(--${n});`)], [], `--${n} haette nicht anschlagen duerfen`);
  }
});

pruefe("Mehrere Eigenschaften in einem Block", () => {
  const css = "a { background: var(--eins); color: var(--zwei, red); border-color: var(--drei); }";
  assert.deepEqual([...tot(css)].sort(), ["drei", "eins"]);
});

// Der Gegenbeweis an echten Daten: Die mitgelieferte Beispiel-Theme und eine
// Theme mit allen Vorlagen duerfen keinen einzigen Treffer liefern.
function berichtZeilen(text) {
  const { durchlauf } = require("../werkzeuge/kopflos.js");
  const r = durchlauf(text);
  assert.ok(!r.fehler, `Import fehlgeschlagen: ${r.fehler}`);
  // Das Ergebnis kommt aus dem vm-Kontext von kopflos.js - deepEqual aus
  // assert/strict vergleicht auch Prototypen, deshalb hier umkopieren.
  return [...(r.bericht || [])].filter((z) => /Verweis/.test(z));
}

pruefe("Die Beispiel-Theme loest keinen Fehlalarm aus", () => {
  const fs = require("node:fs");
  const path = require("node:path");
  const datei = path.join(__dirname, "..", "docs", "beispiele", "glas-basis.yaml");
  // Vorher stand hier "if (!fs.existsSync(datei)) return;" - fehlte die Datei,
  // druckte die Pruefung "ok", ohne etwas geprueft zu haben. Eine Pruefung, die
  // sich selbst stilllegen kann, ist keine.
  assert.ok(fs.existsSync(datei), `die Beispiel-Theme fehlt: ${datei}`);
  assert.deepEqual(berichtZeilen(fs.readFileSync(datei, "utf8")), []);
});

pruefe("Eine Theme mit allen Vorlagen loest keinen Fehlalarm aus", () => {
  const { alleVorlagenTheme } = require("../werkzeuge/alle-vorlagen-theme.js");
  assert.deepEqual(berichtZeilen(alleVorlagenTheme().text), []);
});

pruefe("Ein echter toter Verweis steht im Import-Bericht", () => {
  const theme = [
    "meintest:",
    "  uix-card: |",
    "    ha-card { background: var(--custom-card-gradient) !important; }",
    "  modes:",
    "    light:",
    '      primary-color: "#0277BD"',
    "    dark:",
    '      primary-color: "#0A84FF"',
    "",
  ].join("\n");
  const zeilen = berichtZeilen(theme);
  assert.equal(zeilen.length, 1, `keine Meldung: ${zeilen.join(" | ")}`);
  assert.ok(zeilen[0].includes("custom-card-gradient"), zeilen[0]);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
