// Der Neumorphismus-Schatten fuer die ganze Oberflaeche.
// Ausfuehren: node tests/hatg-schatten-kasten.test.js
//
// The neumorphic shadow for the whole surface.
//
// Anders als der Symbol-Baukasten schreibt er keine UIX-Vorlage, sondern
// direkt in fuenf Theme-Felder: Karten, Knoepfe und die drei Stufen der
// Schattenleiter, aus denen Tooltips, Dialoge und der Hinzufuegen-Knopf lesen.
// Damit gibt es keinen Marker, keinen Pfad und keine Kollision - aber zwei
// andere Dinge, die schiefgehen koennen, und genau die stehen hier:
//
//   1. Der Rueckleser muss den eigenen Wert wiedererkennen, und zwar an der
//      Form, nicht am Wortlaut. Die Flaeche steht als var() mit Ausweichwert
//      im Text und traegt deshalb selbst Kommas - ein Ausdruck mit [^,]*
//      bricht daran ab, genau das ist beim Bauen passiert.
//   2. Ausschalten muss die Vorgaben des Manifests zuruecklegen. Ein leeres
//      Feld waere etwas anderes als der Standardschatten.

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
const gleich = (a, b, hinweis) => assert.equal(JSON.stringify(a), JSON.stringify(b), hinweis);

const { ctx } = panelBauen();
const PROBE = { abstand: 20, intensitaet: 14, weiche: 60, gedrueckt: false };

console.log("Neumorphismus-Schatten\n");

pruefe("Der Wert traegt beide Toene und die Flaeche als Verweis", () => {
  const w = ctx.hatgSchattenWert(ctx.hatgSchattenNormal(PROBE), 1);
  assert.ok(w.includes("20px 20px 60px"), "Abstand oder Weichzeichnung fehlen");
  assert.ok(w.includes("-20px -20px 60px"), "der zweite Ton fehlt");
  assert.ok(w.includes("#000000") && w.includes("#ffffff"), "die Richtungen fehlen");
  // Die Flaeche als var() - ein fester Farbwert waere in einem der beiden
  // Modi falsch, weil derselbe Text in hell und dunkel steht.
  assert.ok(w.includes("var(--ha-card-background"), "die Flaeche steht nicht als Verweis");
  assert.ok(!w.includes("inset"), "erhaben darf kein inset tragen");
});

pruefe("Rundlauf, auch gedrueckt", () => {
  for (const gedrueckt of [false, true]) {
    const p = ctx.hatgSchattenNormal({ ...PROBE, gedrueckt });
    gleich(ctx.hatgLeseSchatten(ctx.hatgSchattenWert(p, 1)), p, `gedrueckt=${gedrueckt}`);
  }
});

pruefe("Fremde Werte werden nicht als eigener Schatten gelesen", () => {
  for (const fremd of ["", "none", "0 10px 28px rgba(60,60,67,.14)",
                       "10px 10px 20px #505050, -10px -10px 20px #6C6C6C"]) {
    assert.equal(ctx.hatgLeseSchatten(fremd), null, `faelschlich erkannt: ${fremd}`);
  }
});

pruefe("Die fuenf Felder sind abgestuft", () => {
  const { panel } = panelBauen();
  panel.setzeSchattenKasten(PROBE);
  const werte = ctx.HATG_SCHATTEN_FELDER.map(([feld, faktor]) => {
    const v = String(panel.currentValues()[feld] ?? "");
    const m = /^(?:inset\s+)?(\d+)px/.exec(v);
    return { feld, faktor, px: m ? Number(m[1]) : null };
  });
  for (const w of werte) {
    assert.ok(w.px !== null, `${w.feld}: kein Schatten gesetzt`);
    assert.equal(w.px, Math.round(PROBE.abstand * w.faktor), `${w.feld}: falsch skaliert`);
  }
  // Die grosse Stufe muss groesser sein als die kleine, sonst stimmt die
  // Leiter nicht mehr.
  const klein = werte.find((w) => w.feld === "ha-box-shadow-s").px;
  const gross = werte.find((w) => w.feld === "ha-box-shadow-l").px;
  assert.ok(klein < gross, `die Leiter steht auf dem Kopf: ${klein} >= ${gross}`);
});

pruefe("Ausschalten legt die Vorgaben des Manifests zurueck", () => {
  const { panel } = panelBauen();
  const vorher = Object.fromEntries(ctx.HATG_SCHATTEN_FELDER.map(([f]) => [f, String(panel.currentValues()[f] ?? "")]));
  panel.setzeSchattenKasten(PROBE);
  panel.setzeSchattenKasten(null);
  for (const [feld] of ctx.HATG_SCHATTEN_FELDER) {
    assert.equal(String(panel.currentValues()[feld] ?? ""), vorher[feld], `${feld} nicht zurueckgesetzt`);
  }
  assert.equal(panel.schattenKastenStand(), null, "der Kasten gilt noch als eingeschaltet");
});

pruefe("Er schreibt in beide Modi", () => {
  const { panel } = panelBauen();
  panel.setzeSchattenKasten(PROBE);
  for (const modus of ["light", "dark"]) {
    panel._state.editorMode = modus;
    assert.ok(panel.schattenKastenStand(), `im Modus ${modus} fehlt der Schatten`);
  }
});

pruefe("Abstand und Weichzeichnung auf null ergeben none", () => {
  const w = ctx.hatgSchattenWert(ctx.hatgSchattenNormal({ abstand: 0, weiche: 0 }), 1);
  assert.equal(w, "none", "ohne Abstand und Weiche gehoert dort none hin");
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
