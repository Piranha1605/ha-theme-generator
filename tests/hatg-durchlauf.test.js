// Schickt jede Beispiel-Theme durch HATGs Import und Export und prueft, dass
// dabei nichts verloren geht.
// Ausfuehren: node tests/hatg-durchlauf.test.js
//
// Runs every example theme through HATG's import -> export and checks that
// nothing is lost on the way.
//
// Der Fehler, gegen den dieser Test steht: Bis 1.3.2b9 schrieb HATG
// uix-Felder, deren Typ es nicht kannte, beim Export zweimal unter
// modes.light und modes.dark. UI eXtension liest Stilziele aber nur auf
// Theme-Ebene - die Vorlagen fielen also stumm aus, sobald eine Theme einmal
// durch HATG gelaufen war. Gemeldet von einem Nutzer, dessen Theme eigene
// Panel-Ziele benutzt (uix-hacs-frontend-yaml, uix-knx-frontend-yaml).

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { durchlauf, stilziele, vorlagenMarken } = require("../werkzeuge/kopflos.js");

const BEISPIELE = path.join(__dirname, "..", "docs", "beispiele");

let fehler = 0;
function pruefe(name, fn) {
  try { fn(); console.log("  ok   " + name); }
  catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 6).join("\n       "));
  }
}

// Alle uix-Felder, die unter modes stehen - dort liest UIX sie nie.
function uixFelderUnterModes(text) {
  const treffer = [];
  let inModes = false;
  for (const z of String(text).split("\n")) {
    if (/^  modes:\s*$/.test(z)) inModes = true;
    else if (/^  \S/.test(z)) inModes = false;
    if (!inModes) continue;
    const m = /^\s{6}((?:uix|card-mod)-[a-z0-9-]+(?:-yaml)?):/.exec(z);
    if (m) treffer.push(m[1]);
  }
  return [...new Set(treffer)];
}

const dateien = fs.existsSync(BEISPIELE)
  ? fs.readdirSync(BEISPIELE).filter((f) => f.endsWith(".yaml")).map((f) => path.join(BEISPIELE, f))
  : [];

pruefe("Es gibt mindestens eine Beispiel-Theme zum Pruefen", () => {
  assert.ok(dateien.length >= 1, `keine .yaml in ${BEISPIELE}`);
});

for (const datei of dateien) {
  const kurz = path.basename(datei);
  const text = fs.readFileSync(datei, "utf8");
  const r = durchlauf(text);

  pruefe(`${kurz}: Import laeuft durch`, () => {
    assert.ok(!r.fehler, `Import fehlgeschlagen: ${r.fehler}`);
    assert.ok(r.ausgabe && r.ausgabe.length > 100, "Ausgabe ist leer");
  });
  if (r.fehler) continue;

  pruefe(`${kurz}: kein Stilziel geht verloren`, () => {
    const vorher = stilziele(text), nachher = stilziele(r.ausgabe);
    const weg = vorher.filter((k) => !nachher.includes(k));
    assert.deepEqual(weg, [], "verlorene Stilziele");
  });

  pruefe(`${kurz}: kein Vorlagenblock geht verloren`, () => {
    const vorher = vorlagenMarken(text), nachher = vorlagenMarken(r.ausgabe);
    const weg = [...vorher].filter((x) => !nachher.has(x));
    assert.deepEqual(weg, [], "verlorene Vorlagenbloecke");
  });

  pruefe(`${kurz}: kein uix-Feld rutscht unter modes`, () => {
    assert.deepEqual(uixFelderUnterModes(r.ausgabe), [], "Stilziele gehoeren auf die Theme-Ebene");
  });
}

// Eine Theme mit einem Stilziel, dessen Typ HATG nicht kennt. Genau der Fall
// aus der Nutzermeldung, hier als kleinstes Beispiel.
pruefe("Ein unbekanntes uix-Ziel bleibt auf Theme-Ebene", () => {
  const theme = [
    "meintest:",
    "  uix-knx-frontend-yaml: |",
    "    knx-frontend $: |",
    "      :host { background: red; }",
    "  modes:",
    "    light:",
    '      primary-color: "#0277BD"',
    "    dark:",
    '      primary-color: "#0A84FF"',
    "",
  ].join("\n");
  const r = durchlauf(theme);
  assert.ok(!r.fehler, `Import fehlgeschlagen: ${r.fehler}`);
  assert.deepEqual(uixFelderUnterModes(r.ausgabe), [], "das Ziel ist unter modes gelandet");
  assert.match(r.ausgabe, /^  uix-knx-frontend-yaml:/m, "das Ziel fehlt auf der Theme-Ebene");
  // Und der Inhalt muss mitkommen.
  assert.match(r.ausgabe, /knx-frontend \$:/, "der Pfad ist verloren gegangen");
});

// Idempotenz: Zweimal durch Import und Export muss dasselbe herauskommen wie
// einmal. Sonst waechst die Theme bei jedem Speichern, und niemand sieht es, bis
// die Datei doppelt so gross ist.
//
// Der Anlass: symbole-kachel ist die einzige Vorlage mit einem "."-Eintrag in
// einem -yaml-Ziel. Beim Import holte hatgTeileStilzielYaml diesen Eintrag aus
// dem Vorlagenblock heraus - die Marker blieben ohne ihn zurueck, die Vorlage
// galt als unvollstaendig, das Auffrischen haengte sie erneut an, und die
// herausgeholte Kopie lag ohne Marker im einfachen Feld. Am 2026-10-01 gemessen:
// pro Durchlauf 1027 Zeichen mehr und eine Kopie von --symbol-rundung obendrauf,
// dazu bei jedem Import die Meldung "1 UIX-Vorlage auf den aktuellen Stand
// gebracht" - die einzige Spur, und die klang nach Normalbetrieb.
pruefe("Zweimal durchlaufen aendert nichts mehr (symbole-kachel)", () => {
  const { panelBauen } = require("../werkzeuge/kopflos.js");
  const { panel } = panelBauen();
  panel.schalteVorlage("symbole-kachel");
  const eins = durchlauf(panel.buildYamlText());
  assert.ok(!eins.fehler, `Import fehlgeschlagen: ${eins.fehler}`);
  const zwei = durchlauf(eins.ausgabe);
  assert.ok(!zwei.fehler, `zweiter Import fehlgeschlagen: ${zwei.fehler}`);
  const zaehl = (s) => (s.match(/--symbol-rundung:/g) || []).length;
  assert.equal(zaehl(zwei.ausgabe), zaehl(eins.ausgabe), "der Vorlagenblock hat sich vermehrt");
  assert.equal(zwei.ausgabe.length, eins.ausgabe.length, "die Datei ist beim zweiten Durchlauf gewachsen");
  assert.equal(zwei.ausgabe, eins.ausgabe, "der zweite Durchlauf liefert etwas anderes");
});

// Gegenstueck zum stillen Verlust: Steht neben einem -yaml-Feld mit "."-Eintrag
// schon ein einfaches Feld, darf nichts verschwinden. Vorher wurde der
// "."-Eintrag ersatzlos weggeworfen, ohne eine Zeile im Bericht.
pruefe("Ein einfaches Feld neben dem \".\"-Eintrag kostet kein CSS", () => {
  const theme = [
    "meintest:",
    "  uix-card: |",
    "    ha-card { border: 1px solid red; }",
    "  uix-card-yaml: |",
    '    ".": |',
    "      ha-card { outline: 2px dashed lime; }",
    '    "ha-button $": |',
    "      .mdc-button { color: blue; }",
    "  modes:",
    "    light:",
    '      primary-color: "#0277BD"',
    "    dark:",
    '      primary-color: "#0A84FF"',
    "",
  ].join("\n");
  const r = durchlauf(theme);
  assert.ok(!r.fehler, `Import fehlgeschlagen: ${r.fehler}`);
  for (const stueck of ["border: 1px solid red", "outline: 2px dashed lime", "color: blue"])
    assert.ok(r.ausgabe.includes(stueck), `verloren: ${stueck}`);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
