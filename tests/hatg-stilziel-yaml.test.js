// Testet das Zusammenlegen und Auftrennen der Stilziel-Felder direkt am
// ausgelieferten Panel-Code.
// Ausfuehren: node tests/hatg-stilziel-yaml.test.js
//
// Runs against the shipped panel source, no build step and no dependencies.
// Run with: node tests/hatg-stilziel-yaml.test.js
//
// Hintergrund: UIX loest je Stilziel exklusiv auf. Liegt "uix-card-yaml" im
// Theme, wird "uix-card" nie gelesen - beide als Geschwister zu schreiben
// laesst das einfache CSS spurlos verschwinden. Die Ausgabe legt es deshalb
// als "."-Eintrag in dieselbe YAML-Karte, der Import trennt es wieder heraus.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const PANEL = path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js");

function ladeHelfer() {
  const quelle = fs.readFileSync(PANEL, "utf8");
  const start = quelle.indexOf("function hatgMergeStilzielYaml");
  const ende = quelle.indexOf("function hatgParseThemeYaml");
  assert.ok(start !== -1 && ende > start, "Stilziel-Helfer in hatg-panel.js nicht gefunden");
  // hatgIstYamlZiel haengt an der Stilziel-Tabelle aus dem Manifest. Fuer
  // diesen Test genuegt die Namensregel - geprueft wird das Auftrennen.
  const kontext = {
    hatgIstYamlZiel: (key) => /^uix-[a-z-]+-yaml$/.test(String(key || "")),
  };
  vm.runInNewContext(
    `${quelle.slice(start, ende)}
     this.hatgMergeStilzielYaml = hatgMergeStilzielYaml;
     this.hatgTeileStilzielYaml = hatgTeileStilzielYaml;
     this.hatgEntflechteStilzieleImBag = hatgEntflechteStilzieleImBag;
     this.hatgYamlPfadeZusammenfuehren = hatgYamlPfadeZusammenfuehren;`,
    kontext
  );
  return kontext;
}

const { hatgMergeStilzielYaml, hatgTeileStilzielYaml, hatgEntflechteStilzieleImBag, hatgYamlPfadeZusammenfuehren } = ladeHelfer();

let fehler = 0;
function pruefe(name, fn) {
  try {
    fn();
    console.log(`  ok   ${name}`);
  } catch (e) {
    fehler++;
    console.log(`  FEHL ${name}\n       ${e.message}`);
  }
}

// Echte Vorlagen aus dem Glas-Paket: glas-ebene schreibt einfaches CSS nach
// uix-card, glas-buttons-glanz eine Pfad-Karte nach uix-card-yaml.
const EINFACH = `/* HATG:UIX:glas-ebene:START */
:host,
ha-card {
  background-color: var(--hatg-glas-fuellung, rgba(255, 255, 255, 0.5)) !important;
  box-shadow: inset 0 0 0 1px var(--hatg-glas-rand, rgba(255, 255, 255, 0.4)) !important;
}
/* HATG:UIX:glas-ebene:ENDE */`;

const KARTE = `ha-button $: |
  .button {
    backdrop-filter: blur(var(--hatg-glas-blur-klein, 8px));
  }`;

console.log("Zusammenlegen und Auftrennen der Stilziel-Felder\n");

pruefe("Zusammenlegen erzeugt einen \".\"-Eintrag und behaelt die Pfad-Karte", () => {
  const zusammen = hatgMergeStilzielYaml(EINFACH, KARTE);
  assert.ok(zusammen.startsWith('".": |\n'), "\".\"-Eintrag fehlt am Anfang");
  assert.ok(zusammen.includes("ha-button $: |"), "Pfad-Karte ging verloren");
  assert.ok(zusammen.includes("  :host,"), "einfaches CSS nicht um zwei Spalten eingerueckt");
  assert.ok(zusammen.includes("HATG:UIX:glas-ebene:START"), "Vorlagenmarke ging verloren");
});

pruefe("Jede Zeile des einfachen CSS liegt tiefer als der \".\"-Schluessel", () => {
  const zusammen = hatgMergeStilzielYaml(EINFACH, KARTE);
  const zeilen = zusammen.split("\n");
  const start = zeilen.indexOf('".": |');
  const bisKarte = zeilen.slice(start + 1, zeilen.indexOf("ha-button $: |"));
  bisKarte.forEach((z) => {
    if (z.trim() === "") return;
    assert.ok(/^ {2}\S|^ {3,}/.test(z), `Zeile nicht eingerueckt: ${JSON.stringify(z)}`);
  });
});

pruefe("Auftrennen liefert beide Teile unveraendert zurueck", () => {
  const { punkt, rest } = hatgTeileStilzielYaml(hatgMergeStilzielYaml(EINFACH, KARTE));
  assert.equal(punkt, EINFACH, "einfaches CSS kam veraendert zurueck");
  assert.equal(rest, KARTE, "Pfad-Karte kam veraendert zurueck");
});

pruefe("Rundlauf ohne Pfad-Karte", () => {
  const zusammen = hatgMergeStilzielYaml(EINFACH, "");
  const { punkt, rest } = hatgTeileStilzielYaml(zusammen);
  assert.equal(punkt, EINFACH);
  assert.equal(rest, "");
});

pruefe("Karte ohne \".\"-Eintrag bleibt unangetastet", () => {
  const { punkt, rest } = hatgTeileStilzielYaml(KARTE);
  assert.equal(punkt, "", "es wurde ein \".\"-Eintrag erfunden");
  assert.equal(rest, KARTE);
});

pruefe("Leeres einfaches CSS laesst die Karte unveraendert", () => {
  assert.equal(hatgMergeStilzielYaml("", KARTE), KARTE);
  assert.equal(hatgMergeStilzielYaml("   ", KARTE), KARTE);
});

pruefe("Import verteilt den \".\"-Eintrag zurueck auf das einfache Feld", () => {
  const bag = { "uix-card-yaml": hatgMergeStilzielYaml(EINFACH, KARTE), "primary-color": "#0891B2" };
  const geteilt = hatgEntflechteStilzieleImBag(bag);
  assert.equal(geteilt, 1);
  assert.equal(bag["uix-card"], EINFACH, "einfaches Feld nicht wiederhergestellt");
  assert.equal(bag["uix-card-yaml"], KARTE, "Pfad-Karte nicht bereinigt");
  assert.equal(bag["primary-color"], "#0891B2", "fremdes Feld angefasst");
});

pruefe("Bleibt nach dem Auftrennen nichts uebrig, faellt das -yaml-Feld weg", () => {
  const bag = { "uix-card-yaml": hatgMergeStilzielYaml(EINFACH, "") };
  hatgEntflechteStilzieleImBag(bag);
  assert.equal(bag["uix-card"], EINFACH);
  assert.ok(!("uix-card-yaml" in bag), "leeres -yaml-Feld blieb stehen");
});

pruefe("Ein bereits belegtes einfaches Feld wird nicht ueberschrieben", () => {
  const bag = { "uix-card": "/* von Hand */", "uix-card-yaml": hatgMergeStilzielYaml(EINFACH, KARTE) };
  hatgEntflechteStilzieleImBag(bag);
  assert.equal(bag["uix-card"], "/* von Hand */");
});

pruefe("Unquotierter Punkt-Schluessel wird ebenfalls erkannt", () => {
  const { punkt } = hatgTeileStilzielYaml(`.: |\n  :host { color: red; }\nha-button $: |\n  .button { color: blue; }`);
  assert.equal(punkt, ":host { color: red; }");
});

pruefe("Doppelte Pfade werden zu einem zusammengefasst", () => {
  // UIX verwirft eine Karte mit doppeltem Schluessel komplett.
  const karte = [
    "\".\": |",
    "  :host { color: red; }",
    "# ALT:UIX:glas-buttons-glanz:START",
    "ha-button $: |",
    "  .button { color: blue; }",
    "",
    "# ALT:UIX:glas-buttons-glanz:END",
    "# HATG:UIX:glas-buttons-glanz:START",
    "\"ha-button $\": |",
    "  .button { color: green; }",
    "# HATG:UIX:glas-buttons-glanz:END",
    "\"$ ha-dialog $\": |",
    "  x { y: z; }",
  ].join("\n");
  const neu = hatgYamlPfadeZusammenfuehren(karte);
  const koepfe = neu.split("\n").filter((z) => /^[^\s#].*:\s*\|/.test(z));
  assert.deepEqual(koepfe, ["\".\": |", "ha-button $: |", "\"$ ha-dialog $\": |"], neu);
  assert.ok(/\.button \{ color: blue; \}\n  \.button \{ color: green; \}/.test(neu), neu);
  assert.ok(neu.includes("# HATG:UIX:glas-buttons-glanz:START"), "Marker duerfen nicht verschwinden");
  assert.equal(hatgYamlPfadeZusammenfuehren(KARTE), KARTE, "ohne Dubletten unveraendert");
});

console.log(fehler === 0 ? "\nAlle Tests bestanden." : `\n${fehler} Test(s) fehlgeschlagen.`);
process.exit(fehler === 0 ? 0 : 1);
