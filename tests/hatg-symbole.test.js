// Der Abschnitt "Symbole" und die Ordnung des Manifests.
// Ausfuehren: node tests/hatg-symbole.test.js
//
// The "Symbole" section and the manifest's invariants.
//
// Alles, was ein Symbol ausmacht, lag bis zum 11.10.2026 ueber fuenf Abschnitte
// und achtzehn Ordner verstreut: die Zustaende beim Status, die Rundung bei den
// Kacheln, die Groesse bei den Abstaenden, die Farben je einmal bei Bubble und
// Mushroom. Wer Symbole gestalten wollte, musste sie zusammensuchen.
//
// Geprueft werden hier zwei Dinge, und das zweite ist das wichtigere:
//
//   1. Der Abschnitt gibt es, mit seinen Ordnern, und seine Felder sind echt.
//   2. Die Ordnung des ganzen Manifests bleibt heil. Ein Feld in zwei Ordnern
//      taucht in der Oberflaeche doppelt auf, ein Feld in keinem Ordner ist gar
//      nicht erreichbar - beides faellt sonst erst beim Nutzer auf.

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

const { ctx } = panelBauen();
const M = ctx.HATG_MANIFEST;
const symbole = M.sections.find((s) => s.id === "symbole");

// Die Statusfarben je Bereich - das ist die "Statuserkennung": Home Assistant
// setzt den Namen zur Laufzeit aus Domain und Zustand zusammen, ein Literal
// steht nirgends im Frontend. Deshalb hier die Liste zum Gegenlesen.
const STATUSFARBEN = [
  "state-light-active-color", "state-light-on-color",
  "state-switch-active-color", "state-switch-on-color",
  "state-cover-active-color", "state-fan-active-color",
  "state-media_player-active-color", "state-vacuum-active-color",
  "state-alert-off-color", "state-alert-on-color",
  "state-binary_sensor-active-color", "state-device_tracker-active-color",
  "state-humidifier-on-color", "state-lawn_mower-active-color",
  "state-person-active-color", "state-plant-active-color",
  "state-siren-active-color", "state-update-active-color", "state-valve-active-color",
];

console.log(`Symbole: ${symbole ? symbole.keys.length : 0} Felder in ${symbole ? symbole.groups.length : 0} Ordnern\n`);

pruefe("Der Abschnitt Symbole steht im Manifest", () => {
  assert.ok(symbole, "Abschnitt fehlt");
  assert.ok(symbole.label && symbole.desc && symbole.icon, "Beschriftung, Beschreibung oder Symbol fehlt");
  assert.ok(symbole.groups.length >= 5, `nur ${symbole.groups.length} Ordner`);
});

pruefe("Jedes Feld des Abschnitts gibt es wirklich, in beiden Modi", () => {
  const fehlendHell = symbole.keys.filter((k) => !(k in M.light));
  const fehlendDunkel = symbole.keys.filter((k) => !(k in M.dark));
  assert.deepEqual([...fehlendHell], [], `nicht in light: ${fehlendHell.join(", ")}`);
  assert.deepEqual([...fehlendDunkel], [], `nicht in dark: ${fehlendDunkel.join(", ")}`);
});

pruefe("Die Statusfarben je Bereich sind vollstaendig", () => {
  const fehlt = STATUSFARBEN.filter((k) => !symbole.keys.includes(k));
  assert.deepEqual([...fehlt], [], `fehlt im Abschnitt: ${fehlt.join(", ")}`);
  const gruppe = symbole.groups.find((g) => g.id === "symbole__status");
  assert.ok(gruppe, "Ordner symbole__status fehlt");
  const nichtImOrdner = STATUSFARBEN.filter((k) => !gruppe.keys.includes(k));
  assert.deepEqual([...nichtImOrdner], [], `nicht im Ordner: ${nichtImOrdner.join(", ")}`);
});

pruefe("Kein Feld liegt in zwei Ordnern - im ganzen Manifest", () => {
  const wo = new Map();
  for (const s of M.sections) for (const g of s.groups ?? []) for (const k of g.keys ?? []) {
    if (!wo.has(k)) wo.set(k, []);
    wo.get(k).push(`${s.id}/${g.id}`);
  }
  const doppelt = [...wo.entries()].filter(([, v]) => v.length > 1)
    .map(([k, v]) => `${k} (${v.join(", ")})`);
  assert.deepEqual(doppelt, [], `doppelt einsortiert: ${doppelt.join(" | ")}`);
});

pruefe("Abschnitts-keys und Ordner-keys decken sich", () => {
  for (const s of M.sections) {
    if (!(s.groups ?? []).length) continue;   // grundfarben-text fuehrt exportGroups statt groups
    const ausGruppen = new Set(s.groups.flatMap((g) => g.keys ?? []));
    const keys = new Set(s.keys ?? []);
    const nurKeys = [...keys].filter((k) => !ausGruppen.has(k));
    const nurGruppen = [...ausGruppen].filter((k) => !keys.has(k));
    assert.deepEqual(nurKeys, [], `${s.id}: steht in keys, aber in keinem Ordner: ${nurKeys.join(", ")}`);
    assert.deepEqual(nurGruppen, [], `${s.id}: steht im Ordner, aber nicht in keys: ${nurGruppen.join(", ")}`);
  }
});

pruefe("Kein leerer Ordner ist zurueckgeblieben", () => {
  const leer = [];
  for (const s of M.sections) for (const g of s.groups ?? []) {
    if (!(g.keys ?? []).length) leer.push(`${s.id}/${g.id}`);
  }
  assert.deepEqual(leer, [], `leere Ordner: ${leer.join(", ")}`);
});

pruefe("Gegenprobe: die Abzeichen sind nicht mit umgezogen", () => {
  // label-badge-* und ha-badge-size/-font-size/-border-radius beschreiben den
  // Kasten, nicht das Symbol darin. Nur ha-badge-icon-size ist mitgekommen.
  const geblieben = ["label-badge-background-color", "label-badge-text-color", "ha-badge-size", "ha-badge-font-size"];
  const faelschlichUmgezogen = geblieben.filter((k) => symbole.keys.includes(k));
  assert.deepEqual(faelschlichUmgezogen, [], `gehoert nicht in Symbole: ${faelschlichUmgezogen.join(", ")}`);
  assert.ok(symbole.keys.includes("ha-badge-icon-size"), "ha-badge-icon-size fehlt in Symbole");
});

pruefe("Der Abschnitt hat eine Farbe in der Navigation", () => {
  assert.ok(ctx.HATG_NAV_ICON_COLOR.symbole, "symbole fehlt in HATG_NAV_ICON_COLOR");
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
