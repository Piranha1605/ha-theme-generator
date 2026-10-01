// Kennungen eigener Vorlagen muessen speicherbar bleiben.
// Ausfuehren: node tests/hatg-vorlagen-kennung.test.js
//
// Custom preset ids must stay writable.
//
// Der Fehler, gegen den dieser Test steht: ws_list_uix_templates gibt jede
// Kennung heraus, die in hatg-uix-vorlagen.json steht, ws_save_uix_templates nimmt
// aber nur [A-Za-z0-9_-]{1,64} an - und bricht beim ersten schlechten Eintrag
// den ganzen Stapel ab. Eine von Hand eingetragene Kennung mit Umlaut kam damit
// herein, liess sich nie zurueckschreiben, und danach war ueberhaupt keine
// Vorlage mehr speicherbar, auch keine neue. Am 2026-09-29 an einer laufenden
// Instanz nachgestellt: ein Stapel aus einer sauberen und einer Umlaut-Kennung
// wurde mit invalid_id komplett abgelehnt.

const assert = require("node:assert/strict");
const { panelBauen } = require("../werkzeuge/kopflos.js");

// Die Regeln des Servers - aus __init__.py GELESEN, nicht abgeschrieben.
// Die abgeschriebene Fassung stand hier mit dem Kommentar "Genau die Regex des
// Servers" und war seit 1.3.2b12 falsch: Sie verbot Ziffern und erlaubte ein
// fuehrendes "-". Heute harmlos, aber als Referenz irrefuehrend - und genau
// diese Sorte Doppelwahrheit hat in diesem Projekt schon zweimal Zeit gekostet.
const PY_QUELLE = require("node:fs").readFileSync(
  require("node:path").join(__dirname, "..", "custom_components", "hatg", "__init__.py"), "utf8"
);
function serverRegex(name) {
  const m = new RegExp(name + String.raw`\s*=\s*re\.compile\(r['"]([^'"]+)['"]\)`).exec(PY_QUELLE);
  if (!m) throw new Error("die Server-Regex " + name + " wurde in __init__.py nicht gefunden");
  // Der Server benutzt fullmatch, die Regex steht dort ohne Anker.
  return new RegExp("^" + m[1] + "$");
}
const SERVER_ID_RE = serverRegex("_VORLAGEN_ID_RE");
const SERVER_ZIEL_RE = serverRegex("_VORLAGEN_ZIEL_RE");

let fehler = 0;
function pruefe(name, fn) {
  try { fn(); console.log("  ok   " + name); }
  catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 8).join("\n       "));
  }
}

const { panel, ctx } = panelBauen();

pruefe("Der Generator erzeugt nur Kennungen, die der Server annimmt", () => {
  const namen = [
    "Karten auf Einstellungsseiten mit Füllung",
    "Karten auf Einstellungsseiten mit Füllung", // zerlegtes ue
    "Toast-Meldungen mit linear-gradient Füllung",
    "ÄÖÜ äöü ß",
    "çàéîø řž",
    "F".repeat(200),
    "---",
    "",
    "42",
  ];
  const schlecht = namen
    .map((n) => [n, panel.vorlagenIdAusName(n)])
    .filter(([, id]) => !SERVER_ID_RE.test(id));
  assert.deepEqual(schlecht, [], "diese Kennungen wuerde der Server ablehnen");
});

pruefe("Jedes bekannte Stilziel passt zur Server-Regex", () => {
  const felder = [];
  for (const z of ctx.HATG_STILZIELE) {
    const key = z.key || z.id || String(z);
    felder.push(`uix-${key}`, `uix-${key}-yaml`);
  }
  assert.deepEqual(felder.filter((k) => !SERVER_ZIEL_RE.test(k)), [], "vom Server abgelehnte Stilziele");
});

// Der Kern: eine Liste, wie sie vom Server zurueckkommt, mit einer Kennung, die
// er selbst nie annehmen wuerde.
function panelMitKaputterKennung() {
  const { panel: p } = panelBauen();
  p._state.eigeneVorlagenListe = [
    { id: "eigene-sauber", label: "Sauber", desc: "", ziel: "uix-card", css: ":host { color: red; }" },
    {
      id: "eigene-karten-auf-einstellungsseiten-mit-füllung",
      label: "Karten auf Einstellungsseiten mit Füllung",
      desc: "",
      ziel: "uix-config-yaml",
      css: ":host { color: blue; }",
    },
  ];
  return p;
}

pruefe("Eine unspeicherbare Kennung wird beim Heilen ASCII", () => {
  const p = panelMitKaputterKennung();
  const geheilt = p.eigeneVorlagenKennungenHeilen();
  assert.equal(geheilt.length, 1, "genau ein Eintrag war kaputt");
  assert.equal(geheilt[0].neu, "eigene-karten-auf-einstellungsseiten-mit-fuellung");
  const schlecht = p.eigeneVorlagen().map((t) => t.id).filter((id) => !SERVER_ID_RE.test(id));
  assert.deepEqual(schlecht, [], "es bleibt keine unspeicherbare Kennung uebrig");
});

pruefe("Die saubere Vorlage bleibt unberuehrt", () => {
  const p = panelMitKaputterKennung();
  p.eigeneVorlagenKennungenHeilen();
  assert.equal(p.eigeneVorlagen()[0].id, "eigene-sauber");
  assert.equal(p.eigeneVorlagen().length, 2, "kein Eintrag verschwindet");
});

pruefe("Zweimal heilen aendert nichts mehr", () => {
  const p = panelMitKaputterKennung();
  p.eigeneVorlagenKennungenHeilen();
  // Das Ergebnis kommt aus dem vm-Kontext von kopflos.js - deepEqual aus
  // assert/strict vergleicht auch Prototypen, deshalb hier ueber die Laenge.
  assert.equal(p.eigeneVorlagenKennungenHeilen().length, 0, "der zweite Lauf benennt nichts um");
});

pruefe("Die Marker im Theme wandern mit - auch in einem eigenen Stilziel", () => {
  const p = panelMitKaputterKennung();
  const alt = "eigene-karten-auf-einstellungsseiten-mit-füllung";
  // Ein bekanntes Ziel, ein eigenes Panel-Ziel (uix-knx-frontend-yaml steht in
  // keiner festen Liste) und ein Block unter fremder Vorsilbe.
  p._state.values.light["uix-card"] = `/* HATG:UIX:${alt}:START */\n:host{a:1}\n/* HATG:UIX:${alt}:END */`;
  p._state.values.dark["uix-knx-frontend-yaml"] = `knx-frontend $: |\n  # HATG:UIX:${alt}:START\n  :host{b:2}\n  # HATG:UIX:${alt}:END`;
  p._state.extraValues = p._state.extraValues || { light: {}, dark: {} };
  p._state.extraValues.light["uix-hacs-frontend-yaml"] = `# HORIZON:UIX:${alt}:START\n:host{c:3}\n# HORIZON:UIX:${alt}:END`;

  const geheilt = p.eigeneVorlagenKennungenHeilen();
  const neu = geheilt[0].neu;
  const alleTexte = [
    p._state.values.light["uix-card"],
    p._state.values.dark["uix-knx-frontend-yaml"],
    p._state.extraValues.light["uix-hacs-frontend-yaml"],
  ];
  alleTexte.forEach((text, i) => {
    assert.ok(!text.includes(alt), `Feld ${i}: die alte Kennung steht noch im Theme`);
    assert.ok(text.includes(`${neu}:START`), `Feld ${i}: kein START-Marker mit der neuen Kennung`);
    assert.ok(text.includes(`${neu}:END`), `Feld ${i}: kein END-Marker mit der neuen Kennung`);
  });
  // Die fremde Vorsilbe bleibt Sache von hatgVereinheitlicheVorlagenMarken -
  // das Umbenennen der Kennung darf sie nicht anfassen.
  assert.ok(alleTexte[2].includes("HORIZON:UIX:"), "die fremde Vorsilbe wurde mitverbogen");
  // Und das CSS steht unveraendert zwischen den Markern.
  assert.ok(alleTexte[0].includes(":host{a:1}"), "das CSS ist verloren gegangen");
  assert.ok(alleTexte[1].includes("knx-frontend $:"), "der Pfad des eigenen Ziels ist verloren gegangen");
});

pruefe("Eine Kennung, von der nach dem Saeubern nichts bleibt, nimmt den Namen", () => {
  const { panel: p } = panelBauen();
  p._state.eigeneVorlagenListe = [
    { id: "üäö", label: "Weiche Kanten", desc: "", ziel: "uix-card", css: ":host{}" },
  ];
  const geheilt = p.eigeneVorlagenKennungenHeilen();
  assert.equal(geheilt[0].neu, "eigene-ueaeoe", "die Kennung selbst liess sich noch retten");

  const { panel: q } = panelBauen();
  q._state.eigeneVorlagenListe = [
    { id: "中文", label: "Weiche Kanten", desc: "", ziel: "uix-card", css: ":host{}" },
  ];
  assert.equal(q.eigeneVorlagenKennungenHeilen()[0].neu, "eigene-weiche-kanten");
});

pruefe("Zwei kaputte Kennungen kollidieren nicht", () => {
  const { panel: p } = panelBauen();
  p._state.eigeneVorlagenListe = [
    { id: "eigene-füllung", label: "A", desc: "", ziel: "uix-card", css: ":host{}" },
    { id: "eigene-füllung", label: "B", desc: "", ziel: "uix-card", css: ":host{}" },
    { id: "eigene-fuellung", label: "C", desc: "", ziel: "uix-card", css: ":host{}" },
  ];
  p.eigeneVorlagenKennungenHeilen();
  const ids = p.eigeneVorlagen().map((t) => t.id);
  assert.equal(new Set(ids).size, ids.length, `doppelte Kennung nach dem Heilen: ${ids.join(", ")}`);
  assert.deepEqual(ids.filter((id) => !SERVER_ID_RE.test(id)), []);
});

pruefe("Eine zu lange Kennung wird gekuerzt", () => {
  const { panel: p } = panelBauen();
  p._state.eigeneVorlagenListe = [
    { id: "eigene-" + "x".repeat(200), label: "Lang", desc: "", ziel: "uix-card", css: ":host{}" },
  ];
  const geheilt = p.eigeneVorlagenKennungenHeilen();
  assert.equal(geheilt.length, 1, "die Ueberlaenge wurde nicht erkannt");
  assert.ok(SERVER_ID_RE.test(geheilt[0].neu), `weiter zu lang: ${geheilt[0].neu.length} Zeichen`);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
