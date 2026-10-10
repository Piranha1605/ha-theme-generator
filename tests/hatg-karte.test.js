// Die Kartenfarben von Home Assistant 2026.10.
// Ausfuehren: node tests/hatg-karte.test.js
//
// The map colour tokens of Home Assistant 2026.10.
//
// Am 10.10.2026 an einer laufenden Instanz belegt: Die vierzehn Namen stehen in
// genau einem der 1089 Frontend-Chunks, und gelesen werden sie so:
//
//     const a = getComputedStyle(t).getPropertyValue(r).trim();
//     if (!a) continue;        // nicht gesetzt -> HA behaelt seine Palette
//
// Daraus folgen die beiden Prueffronten dieser Datei:
//
//   1. Leere Vorgaben. Ein Wert in der Vorgabe naegelte jede erzeugte Theme auf
//      eine Kartenfarbe fest - dieselbe Falle wie ha-dialog-min-height: 100vh.
//   2. Der Alphawert muss ueberleben. Jede Palette traegt bei
//      ha-color-map-label-halo ein ...cc; der Import schrieb ein Hex mit acht
//      Stellen vorher nach rgba(..., 1) um und warf die Durchsichtigkeit weg.

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
// Der vm hat eigene Prototypen: Ein Array von dort ist mit assert.deepEqual
// nicht gegen ein hiesiges [] vergleichbar. Deshalb erst herueberkopieren.
const NAMEN = [...ctx.HATG_KARTENFARBEN_NAMEN];
const PALETTEN = [...ctx.HATG_KARTENFARBEN_PALETTEN].map((p) => ({
  id: p.id,
  light: { ...p.light },
  dark: { ...p.dark },
}));

console.log(`Kartenfelder: ${NAMEN.length}, Paletten: ${PALETTEN.length}\n`);

pruefe("Die vierzehn Namen stimmen mit denen von Home Assistant ueberein", () => {
  // Zeichengenau aus dem Frontend-Chunk von HA 2026.10.0 uebernommen.
  assert.deepEqual(NAMEN, [
    "ha-color-map-land", "ha-color-map-water", "ha-color-map-green", "ha-color-map-area",
    "ha-color-map-building", "ha-color-map-building-outline",
    "ha-color-map-road", "ha-color-map-road-major", "ha-color-map-road-outline",
    "ha-color-map-transit", "ha-color-map-boundary",
    "ha-color-map-label", "ha-color-map-label-halo", "ha-color-map-label-secondary",
  ]);
});

pruefe("Jedes Kartenfeld steht im Manifest und hat in beiden Modi eine leere Vorgabe", () => {
  const m = ctx.HATG_MANIFEST;
  const mitVorgabe = NAMEN.filter((k) => String(m.light[k] ?? "x") !== "" || String(m.dark[k] ?? "x") !== "");
  assert.deepEqual(mitVorgabe, [], `Vorgabe gesetzt: ${mitVorgabe.join(", ")}`);
});

pruefe("Ohne gesetzten Wert steht kein Kartenfeld in der Ausgabe", () => {
  const { panel: frisch } = panelBauen();
  assert.ok(!frisch.buildYamlText().includes("ha-color-map-"), "leere Kartenfelder landen in der Datei");
});

pruefe("Gegenprobe: mit Werten stehen sie sehr wohl drin, je Modus einmal", () => {
  const { panel: p } = panelBauen();
  p.setzeKartenPalette("natural");
  const treffer = (p.buildYamlText().match(/ha-color-map-/g) || []).length;
  assert.equal(treffer, NAMEN.length * 2, `erwartet ${NAMEN.length * 2} Zeilen, gefunden ${treffer}`);
});

pruefe("Die Kartenfelder bekommen den Farbwaehler mit Deckkraft", () => {
  // Die Erkennung lief nur ueber die Endung "-color". Kein Kartenname endet so,
  // alle vierzehn haetten ein nacktes Textfeld bekommen.
  const f = ctx.hatgGetKeyFormats();
  const falsch = NAMEN.filter((k) => f[k] !== "rgba");
  assert.deepEqual(falsch, [], `nicht als Farbe erkannt: ${falsch.join(", ")}`);
  // Gegenprobe: ein anderes Feld ohne Vorgabe und ohne -color bleibt "other".
  assert.equal(f["popup-custom-wallpaper"], "other", "die Ausnahme greift zu weit");
});

pruefe("Jede Palette traegt alle vierzehn Farben in beiden Modi", () => {
  const kurz = NAMEN.map((k) => k.slice("ha-color-map-".length));
  for (const p of PALETTEN) {
    for (const modus of ["light", "dark"]) {
      assert.deepEqual(Object.keys(p[modus]).sort(), [...kurz].sort(), `${p.id}/${modus}`);
      const kaputt = Object.entries(p[modus]).filter(([, v]) => !/^#[0-9a-f]{6}([0-9a-f]{2})?$/.test(v));
      assert.deepEqual(kaputt, [], `${p.id}/${modus}: keine Hexfarbe`);
    }
    // Der Lichthof hinter den Beschriftungen braucht seinen Alphawert.
    for (const modus of ["light", "dark"]) {
      assert.match(p[modus]["label-halo"], /^#[0-9a-f]{6}[0-9a-f]{2}$/, `${p.id}/${modus}: label-halo ohne Alpha`);
    }
  }
});

pruefe("Eine Palette schreibt Hell und Dunkel auf einmal", () => {
  const { panel: p } = panelBauen();
  p.setzeKartenPalette("toner");
  const vorlage = PALETTEN.find((x) => x.id === "toner");
  assert.equal(p._state.values.light["ha-color-map-land"], vorlage.light.land);
  assert.equal(p._state.values.dark["ha-color-map-land"], vorlage.dark.land);
  assert.equal(p.kartenPaletteAktiv(), "toner");
});

pruefe("Leeren nimmt die Felder wieder zurueck", () => {
  const { panel: p } = panelBauen();
  p.setzeKartenPalette("gray");
  p.setzeKartenPalette("leer");
  assert.equal(p.kartenPaletteAktiv(), "leer");
  assert.ok(!p.buildYamlText().includes("ha-color-map-"), "nach dem Leeren steht noch etwas in der Datei");
});

pruefe("Der Alphawert ueberlebt Import und Export", () => {
  // #000000cc ist 0.8. Vor dem 10.10.2026 wurde daraus rgba(0, 0, 0, 1).
  for (const id of PALETTEN.map((p) => p.id)) {
    const { panel: p } = panelBauen();
    p.setzeKartenPalette(id);
    const yaml = p.buildYamlText();
    const { panel: p2, ctx: c2 } = panelBauen();
    const geparst = c2.hatgParseThemeYaml(yaml, new Set(Object.keys(p2._state.values.light)));
    assert.ok(!geparst.error, `${id}: Import fehlgeschlagen`);
    p2.applyImportedTheme(geparst);
    for (const modus of ["light", "dark"]) {
      const wert = String(p2._state.values[modus]["ha-color-map-label-halo"]);
      const a = /rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\s*\)/.exec(wert);
      assert.ok(a, `${id}/${modus}: unerwartete Schreibweise ${wert}`);
      assert.ok(Number(a[1]) < 1, `${id}/${modus}: Alphawert verloren (${wert})`);
    }
    // Und die Palette muss sich danach noch wiedererkennen lassen.
    assert.equal(p2.kartenPaletteAktiv(), id, `${id} nach dem Durchlauf nicht wiedererkannt`);
  }
});

pruefe("hatgHexAlpha liest nur dort ein Alpha, wo eines steht", () => {
  assert.equal(ctx.hatgHexAlpha("#000000cc"), 0.8);
  assert.equal(ctx.hatgHexAlpha("#0008"), 0.533);
  assert.equal(ctx.hatgHexAlpha("#ffffff"), 1);
  assert.equal(ctx.hatgHexAlpha("#fff"), 1);
  assert.equal(ctx.hatgHexAlpha("rgba(0, 0, 0, 0.5)"), 1);
});

pruefe("Die Kartenfelder liegen im eigenen Ordner Karte", () => {
  const abschnitt = ctx.HATG_MANIFEST.sections.find((s) => s.id === "hintergruende-karten");
  const gruppe = abschnitt.groups.find((g) => g.id === "hintergruende-karten__karte");
  assert.ok(gruppe, "Ordner fehlt");
  assert.deepEqual([...gruppe.keys], NAMEN);
  const schluessel = [...abschnitt.keys];
  const fehlend = NAMEN.filter((k) => !schluessel.includes(k));
  assert.deepEqual(fehlend, [], `nicht im Abschnitt: ${fehlend.join(", ")}`);
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
