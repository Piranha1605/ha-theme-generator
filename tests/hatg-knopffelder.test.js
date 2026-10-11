// Die Knopf- und Chip-Felder aus der Erhebung vom 10.10.2026.
// Ausfuehren: node tests/hatg-knopffelder.test.js
//
// The button and chip fields from the 10 October 2026 survey.
//
// Gemessen an einer laufenden Instanz: 25 Bauteile im Info-Dialog eines Lichts
// und auf dem Dashboard, je Bauteil die var(--x, ausweichwert) aus seinen
// elementStyles. Zwei Fehlerklassen hat diese Charge gestellt, beide stumm:
//
//   1. Fuenf Namen liest Home Assistant blank - var(--x) ohne Ausweichwert, je
//      Variante des Knopfes anders belegt. Ein Vorgabewert naegelte jede
//      Variante darauf fest, dieselbe Falle wie ha-dialog-min-height: 100vh.
//   2. Dieselben fuenf heissen button-color-fill-* und enden nicht auf
//      "-color". Die Farbwaehler-Erkennung haengt an dieser Endung; ohne
//      Eintrag in HATG_FARBE_OHNE_ENDUNG haetten sie ein nacktes Textfeld
//      bekommen, obwohl sie Farben sind.

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
    console.log("       " + String(error.message).split("\n").slice(0, 6).join("\n       "));
  }
}

const { panel, ctx } = panelBauen();
const m = ctx.HATG_MANIFEST;

// Von Home Assistant blank gelesen - deshalb ohne Vorgabe.
const OHNE_VORGABE = [
  "button-color-fill-normal-hover",
  "button-color-fill-normal-active",
  "button-color-fill-loud-hover",
  "button-color-fill-loud-active",
  "button-color-fill-quiet-active",
  "ha-assist-chip-active-container-color",
  "ha-assist-chip-filled-container-color",
];
// Mit genau einem Ausweichwert im Bauteil - der taugt als Vorgabe.
const MIT_VORGABE = {
  "ha-chip-container-color": "transparent",
  "ha-chip-outline-width": "1px",
  "ha-chip-label-size": "0.875rem",
  "ha-chip-icon-size": "18px",
  "ha-assist-chip-container-shape": "16px",
  "ha-button-label-overflow": "hidden",
  "ha-icon-button-toggle-thumb-opacity": "1",
  "ha-favorite-color-button-size": "40px",
};

console.log(`Knopffelder: ${OHNE_VORGABE.length} ohne Vorgabe, ${Object.keys(MIT_VORGABE).length} mit\n`);

pruefe("Alle Knopffelder stehen im Manifest, in beiden Modi", () => {
  const alle = [...OHNE_VORGABE, ...Object.keys(MIT_VORGABE)];
  const fehlend = alle.filter((k) => !(k in m.light) || !(k in m.dark));
  assert.deepEqual(fehlend, [], `nicht im Manifest: ${fehlend.join(", ")}`);
});

pruefe("Blank gelesene Felder haben keine Vorgabe und landen nicht in der Datei", () => {
  const mitWert = OHNE_VORGABE.filter((k) => String(m.light[k] ?? "") !== "" || String(m.dark[k] ?? "") !== "");
  assert.deepEqual(mitWert, [], `Vorgabe gesetzt: ${mitWert.join(", ")}`);
  const { panel: frisch } = panelBauen();
  const aus = frisch.buildYamlText();
  const drin = OHNE_VORGABE.filter((k) => aus.includes(k + ":"));
  assert.deepEqual(drin, [], `steht trotzdem in der Ausgabe: ${drin.join(", ")}`);
});

pruefe("Gegenprobe: Felder mit Vorgabe stehen sehr wohl in der Ausgabe", () => {
  const { panel: frisch } = panelBauen();
  const aus = frisch.buildYamlText();
  const fehlend = Object.keys(MIT_VORGABE).filter((k) => !aus.includes(k + ":"));
  assert.deepEqual(fehlend, [], `fehlt in der Ausgabe: ${fehlend.join(", ")}`);
  for (const [k, v] of Object.entries(MIT_VORGABE)) assert.equal(m.light[k], v, `${k}: andere Vorgabe`);
});

pruefe("button-color-fill-* bekommt den Farbwaehler", () => {
  const f = ctx.hatgGetKeyFormats();
  const falsch = OHNE_VORGABE.filter((k) => f[k] !== "rgba");
  assert.deepEqual(falsch, [], `nicht als Farbe erkannt: ${falsch.join(", ")}`);
  // Gegenprobe: ein anderes leeres Feld ohne -color bleibt "other".
  assert.equal(f["popup-custom-wallpaper"], "other", "die Ausnahme greift zu weit");
});

pruefe("Die Felder liegen im Ordner Buttons & Chips", () => {
  const abschnitt = m.sections.find((s) => s.id === "hintergruende-karten");
  const gruppe = abschnitt.groups.find((g) => g.id === "hintergruende-karten__buttons-chips");
  assert.ok(gruppe, "Ordner fehlt");
  const ordner = [...gruppe.keys];
  const schluessel = [...abschnitt.keys];
  const alle = [...OHNE_VORGABE, ...Object.keys(MIT_VORGABE)];
  const nichtImOrdner = alle.filter((k) => !ordner.includes(k));
  assert.deepEqual(nichtImOrdner, [], `nicht im Ordner: ${nichtImOrdner.join(", ")}`);
  const nichtImAbschnitt = alle.filter((k) => !schluessel.includes(k));
  assert.deepEqual(nichtImAbschnitt, [], `nicht im Abschnitt: ${nichtImAbschnitt.join(", ")}`);
});

pruefe("Kein weiteres control-*-Feld ist dazugekommen", () => {
  // Jedes control-* setzt das Bauteil in seinem eigenen :host. Ein Theme-Wert
  // kommt nur als Vererbung an und verliert dagegen - am 10.10.2026 am
  // Helligkeitsschieber gemessen: ueber das Theme nichts, ueber eine Regel aus
  // dem Elternbaum nichts, erst mit !important. Solche Namen gehoeren in eine
  // Vorlage mit Pfad, nicht in den Feldkatalog.
  //
  // Die vier hier sind Altbestand und stehen zur Pruefung: Sie erreichen HAs
  // eigene Bedienelemente nicht, wohl aber fremde Karten, die dieselben Namen
  // lesen (Horizon-Cards). Vor dem Entfernen gehoert die Gegenprobe gegen HA,
  // Bubble Card und die Horizon-Cards - der Fehler, der bei den 61 toten
  // Bubble-Feldern fast passiert waere.
  const bestand = [
    "control-button-background-color",
    "control-button-border-radius",
    "control-button-icon-color",
    "control-slider-color",
  ];
  const neu = Object.keys(m.light).filter((k) => /^control-/.test(k) && !bestand.includes(k));
  assert.deepEqual(neu, [], `als Feld angelegt, wirkt aber nicht: ${neu.join(", ")}`);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
