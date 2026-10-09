// Eine eigene Vorlage darf auf ein eigenes Panel-Ziel zeigen.
// Ausfuehren: node tests/hatg-vorlagen-ziel.test.js
//
// A custom preset may point at a custom panel style target.
//
// Der Fehler, gegen den dieser Test steht: hatgVorlagenZiel prueft das Ziel bis
// 1.3.2b11 mit hatgIstStilzielKey, und das kennt nur die feste Liste. Eine
// Vorlage fuer uix-knx-frontend-yaml landete deshalb kommentarlos in uix-card -
// falsches Feld, keine Meldung. Deshalb liess sich so eine Vorlage ueber die
// Oberflaeche nicht anlegen; der Nutzer musste den Block von Hand schreiben.
// Am 2026-09-30 gemessen.
//
// Und die zweite Falle: Client und Server muessen dieselbe Regel benutzen.
// Laesst der Client ein Ziel durch, das der Server ablehnt, scheitert das
// Speichern der ganzen Liste an diesem einen Eintrag - genau der Fehler, der
// 1.3.2b11 ausgeloest hat.

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

const { panel, ctx } = panelBauen();
const zielVon = (ziel) => ctx.hatgVorlagenZiel({ ziel });

pruefe("Ein eigenes Panel-Ziel bleibt erhalten", () => {
  for (const z of ["uix-knx-frontend-yaml", "uix-hacs-frontend-yaml", "uix-meinpanel", "uix-panel2-yaml"]) {
    assert.equal(zielVon(z), z, `${z} wurde umgebogen`);
  }
});

pruefe("Bekannte Ziele bleiben unveraendert", () => {
  assert.equal(zielVon("uix-card"), "uix-card");
  assert.equal(zielVon("uix-card-yaml"), "uix-card-yaml");
  assert.equal(zielVon("uix-more-info-yaml"), "uix-more-info-yaml");
});

pruefe("Unsinn faellt weiterhin auf uix-card zurueck", () => {
  for (const z of ["", null, undefined, "uix-theme", "card-mod-card", "ha-card", "UIX-CARD", "uix-", "uix-9start", "uix-mit leerzeichen", "uix-Gross"]) {
    assert.equal(zielVon(z), "uix-card", `${JSON.stringify(z)} haette nicht durchgehen duerfen`);
  }
});

pruefe("Ein zu langes Ziel geht nicht durch", () => {
  assert.equal(zielVon("uix-" + "a".repeat(60)), "uix-card");
});

// Der Kern: Client und Server muessen dieselbe Regel haben.
pruefe("Client- und Server-Regel sind zeichengleich", () => {
  const py = fs.readFileSync(path.join(__dirname, "..", "custom_components", "hatg", "__init__.py"), "utf8");
  const js = fs.readFileSync(path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js"), "utf8");
  const pyRe = (py.match(/_VORLAGEN_ZIEL_RE\s*=\s*re\.compile\(r"([^"]+)"\)/) || [])[1];
  const jsRe = (js.match(/HATG_VORLAGEN_ZIEL_RE\s*=\s*\/\^([^/]+)\$\//) || [])[1];
  assert.ok(pyRe, "die Server-Regex wurde nicht gefunden");
  assert.ok(jsRe, "die Client-Regex wurde nicht gefunden");
  assert.equal(jsRe, pyRe, `Client /${jsRe}/ gegen Server /${pyRe}/`);
});

pruefe("Jedes vom Client erlaubte Ziel nimmt auch der Server an", () => {
  const py = fs.readFileSync(path.join(__dirname, "..", "custom_components", "hatg", "__init__.py"), "utf8");
  const serverRe = new RegExp("^" + (py.match(/_VORLAGEN_ZIEL_RE\s*=\s*re\.compile\(r"([^"]+)"\)/) || [])[1] + "$");
  const kandidaten = [];
  for (const z of ctx.HATG_STILZIELE) {
    const key = z.key || z.id || String(z);
    kandidaten.push(`uix-${key}`, `uix-${key}-yaml`);
  }
  kandidaten.push("uix-knx-frontend-yaml", "uix-hacs-frontend-yaml", "uix-panel2-yaml");
  const schlecht = kandidaten.filter((k) => zielVon(k) === k && !serverRe.test(k));
  assert.deepEqual(schlecht, [], "der Client laesst Ziele durch, die der Server ablehnt");
});

// Eine Vorlage mit eigenem Ziel muss auch praktisch funktionieren: einschalten
// schreibt in das eigene Feld, nicht in uix-card.
pruefe("Einschalten schreibt in das eigene Panel-Feld", () => {
  const { panel: p } = panelBauen();
  p._state.eigeneVorlagenListe = [{
    id: "eigene-knx-hintergrund",
    label: "KNX mit Hintergrund",
    desc: "",
    ziel: "uix-knx-frontend-yaml",
    css: "knx-frontend $: |\n  :host { background: red; }",
  }];
  p.schalteVorlage("eigene-knx-hintergrund", { still: true });
  const knx = String(p._state.values.light["uix-knx-frontend-yaml"] || "");
  const card = String(p._state.values.light["uix-card"] || "");
  assert.ok(knx.includes("eigene-knx-hintergrund:START"), "der Block steht nicht im eigenen Feld");
  assert.ok(knx.includes("knx-frontend $:"), "das CSS ist nicht mitgekommen");
  assert.ok(!card.includes("eigene-knx-hintergrund"), "der Block ist faelschlich in uix-card gelandet");
});

pruefe("Das eigene Ziel ueberlebt Import und Export", () => {
  const { panel: p } = panelBauen();
  p._state.eigeneVorlagenListe = [{
    id: "eigene-knx-hintergrund",
    label: "KNX mit Hintergrund",
    desc: "",
    ziel: "uix-knx-frontend-yaml",
    css: "knx-frontend $: |\n  :host { background: red; }",
  }];
  p.schalteVorlage("eigene-knx-hintergrund", { still: true });
  const text = p.buildYamlText();
  assert.match(text, /^  uix-knx-frontend-yaml:/m, "das Ziel steht nicht auf Theme-Ebene");
  const { durchlauf } = require("../werkzeuge/kopflos.js");
  const r = durchlauf(text);
  assert.ok(!r.fehler, `Import fehlgeschlagen: ${r.fehler}`);
  assert.match(r.ausgabe, /^  uix-knx-frontend-yaml:/m, "nach dem Durchlauf ist das Ziel weg");
  assert.match(r.ausgabe, /eigene-knx-hintergrund:START/, "der Vorlagenblock ist weg");
});

// Punkt 1 aus derselben Meldung: der Untereintrag "Alle Vorlagen" zeigte auf
// dieselbe Abschnitts-ID wie seine Ueberschrift - zwei Klicks fuer eine Seite.
pruefe('Der doppelte Untereintrag "Alle Vorlagen" ist weg', () => {
  const js = fs.readFileSync(path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js"), "utf8");
  assert.ok(!/"All presets"/.test(js), 'der Navigationseintrag "Alle Vorlagen" steht noch im Code');
});

// Das Zielfeld im Dialog ist bei einer NEUEN Vorlage leer, "uix-card" steht nur
// als Platzhalter. Vorbelegt war es bis 1.3.2b23 - wer etwas anderes wollte,
// musste es erst loeschen. Von einem Nutzer am 2026-10-08 gemeldet.
//
// Leer darf es nur bleiben, solange der Speicherweg daraus uix-card macht.
// Genau das sichert diese Pruefung: Faellt der Rueckfall weg, landet eine
// Vorlage ohne Ziel irgendwo - oder nirgends.
pruefe("Ein leeres Ziel wird beim Speichern zu uix-card", () => {
  for (const leer of ["", "   ", undefined, null]) {
    assert.equal(
      zielVon(leer),
      "uix-card",
      `aus ${JSON.stringify(leer)} wurde nicht uix-card`
    );
  }
});

pruefe("Das Zielfeld im Dialog ist nicht mehr vorbelegt", () => {
  const quelle = require("node:fs").readFileSync(
    require("node:path").join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js"),
    "utf8"
  );
  const zeile = /data-eigene-vorlage-ziel[\s\S]{0,200}?placeholder="uix-card"/.exec(quelle);
  assert.ok(zeile, "das Zielfeld wurde nicht gefunden");
  assert.ok(
    !/value="\$\{hatgEscape\(hatgVorlagenZiel\(dialog\)\)\}"/.test(zeile[0]),
    "das Feld ist wieder mit hatgVorlagenZiel(dialog) vorbelegt"
  );
  assert.match(zeile[0], /placeholder="uix-card"/, "der Platzhalter fehlt");
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
