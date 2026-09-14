// Prueft die mitgelieferten UIX-Vorlagen direkt am ausgelieferten Panel-Code.
// Ausfuehren: node tests/hatg-vorlagen.test.js
//
// Checks the shipped UIX presets straight from the panel source.
// Run with: node tests/hatg-vorlagen.test.js
//
// Zwei Fallen, die dieser Test abfaengt:
// - Label und Beschreibung einer Vorlage sind deutsche Quelltexte. Die
//   englische Oberflaeche findet sie ueber HATG_TEXTE, wobei die deutsche
//   Zeichenkette der Schluessel ist. Fehlt der Eintrag oder weicht er um ein
//   Zeichen ab, bleibt die englische Oberflaeche still deutsch.
// - Eine offene Klammer im Vorlagen-CSS zerlegt beim Aktivieren das ganze
//   Stilziel, nicht nur die eine Vorlage.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const PANEL = path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js");
const quelle = fs.readFileSync(PANEL, "utf8");

function ausschnitt(anfang, ende) {
  const a = quelle.indexOf(anfang);
  assert.ok(a !== -1, `Anfang nicht gefunden: ${anfang}`);
  const e = quelle.indexOf(ende, a);
  assert.ok(e !== -1, `Ende nicht gefunden: ${ende}`);
  return quelle.slice(a, e);
}

const TEXTE = ausschnitt("const HATG_TEXTE = {", "\n};");
const VORLAGEN = ausschnitt("const HATG_VORLAGEN = [", "\n];");

// Zeichenketten bleiben absichtlich im Quelltext-Literal, samt Escapes. So wird
// genau das verglichen, was auch als Schluessel in HATG_TEXTE steht.
const LITERAL = String.raw`"((?:[^"\\]|\\.)*)"`;

function feld(block, name) {
  const m = new RegExp(`\\b${name}:\\s*${LITERAL}`).exec(block);
  return m ? m[1] : null;
}

function css(block) {
  const vorlage = /\bcss:\s*`([\s\S]*?)`,/.exec(block);
  if (vorlage) return vorlage[1];
  const literal = new RegExp(`\\bcss:\\s*${LITERAL}`).exec(block);
  return literal ? JSON.parse(`"${literal[1]}"`) : null;
}

function ohneKommentare(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, "");
}

const vorlagen = [];
for (const m of VORLAGEN.matchAll(/\{\s*id:\s*"([^"]+)"([\s\S]*?)\n {2}\},/g)) {
  vorlagen.push({ id: m[1], block: m[2] });
}
const mitCss = vorlagen.filter((v) => css(v.block) !== null);

let fehler = 0;
function pruefe(name, fn) {
  try {
    fn();
    console.log(`  ok   ${name}`);
  } catch (e) {
    fehler++;
    console.log(`  FEHL ${name}\n       ${e.message.split("\n").join("\n       ")}`);
  }
}

console.log(`UIX-Vorlagen im Panel: ${vorlagen.length}, davon mit CSS: ${mitCss.length}\n`);

pruefe("Jede Vorlage mit CSS hat Label und Beschreibung", () => {
  const ohne = mitCss.filter((v) => !feld(v.block, "label") || !feld(v.block, "desc")).map((v) => v.id);
  assert.deepEqual(ohne, [], `ohne Label oder Beschreibung: ${ohne.join(", ")}`);
});

pruefe("Label und Beschreibung jeder Vorlage sind in HATG_TEXTE uebersetzt", () => {
  const fehlend = [];
  for (const v of mitCss) {
    for (const name of ["label", "desc"]) {
      const text = feld(v.block, name);
      if (text && !TEXTE.includes(`"${text}":`)) fehlend.push(`${v.id} (${name})`);
    }
  }
  assert.deepEqual(fehlend, [], `ohne englischen Eintrag: ${fehlend.join(", ")}`);
});

pruefe("Geschweifte Klammern gehen in jeder Vorlage auf", () => {
  const kaputt = [];
  for (const v of mitCss) {
    let tiefe = 0;
    let negativ = false;
    for (const zeichen of ohneKommentare(css(v.block))) {
      if (zeichen === "{") tiefe++;
      if (zeichen === "}") tiefe--;
      if (tiefe < 0) negativ = true;
    }
    if (tiefe !== 0 || negativ) kaputt.push(`${v.id} (Tiefe am Ende ${tiefe})`);
  }
  assert.deepEqual(kaputt, [], `unausgeglichen: ${kaputt.join(", ")}`);
});

pruefe("Vorlagen-IDs sind eindeutig", () => {
  const gesehen = new Set();
  const doppelt = vorlagen.map((v) => v.id).filter((id) => (gesehen.has(id) ? true : (gesehen.add(id), false)));
  assert.deepEqual(doppelt, []);
});

function vorlage(id) {
  const v = vorlagen.find((x) => x.id === id);
  assert.ok(v, `Vorlage ${id} fehlt`);
  return { ...v, css: ohneKommentare(css(v.block)) };
}

pruefe("Hintergrundbild ueber die ganze Oberflaeche: kein fest stehender Hintergrund mehr", () => {
  const v = vorlage("ansicht-hintergrundbild");
  // background-attachment: fixed auf ha-drawer zwang bei jedem Scrollschritt
  // zum Neumalen der ganzen Flaeche - das Ruckeln aus dem Forumsbericht.
  assert.ok(!/background-attachment:\s*fixed/.test(v.css), "background-attachment: fixed steht wieder im CSS");
  assert.ok(v.css.includes(":host::before"), "Bild liegt nicht mehr auf einer eigenen Ebene");
  assert.match(v.css, /position:\s*fixed/);
  assert.match(v.css, /will-change:\s*transform/);
  assert.match(v.css, /pointer-events:\s*none/, "Bildebene darf keine Klicks abfangen");
  assert.match(v.css, /background:\s*var\(--lovelace-background/, "Kurzwert background noetig, nicht background-image");
  assert.match(v.css, /background-attachment:\s*scroll/);
  assert.ok(!v.css.includes("--primary-background-color"), "gehoert in die eigene Vorlage fuer die Einstellungsseiten");
});

pruefe("Bubble-Pop-ups mit Hintergrundbild: Aufbau", () => {
  const v = vorlage("bubble-popup-hintergrundbild");
  assert.equal(feld(v.block, "ziel"), "uix-card");
  assert.ok(!/\bpaket:/.test(v.block), "gehoert nicht ins Glas-Paket");
  assert.match(v.css, /\.bubble-pop-up-background\s*\{/);
  assert.match(v.css, /background:\s*var\(--popup-custom-wallpaper,\s*var\(--lovelace-background/);
  assert.ok(!/background-image:/.test(v.css), "--lovelace-background ist ein Kurzwert und passt nicht in background-image");
  assert.ok(!/opacity:/.test(v.css), "Bubble setzt dort keine opacity - eine Vorgabe waere wirkungslos");
  assert.ok(!/background-attachment:\s*repeat/.test(v.css), "repeat ist kein gueltiger Wert fuer background-attachment");
  // Kopfzeilen nur innerhalb des Pop-ups anfassen.
  for (const sel of v.css.match(/[^{}]+(?=\{)/g).flatMap((s) => s.split(","))) {
    const s = sel.trim();
    if (s.includes("bubble-header")) assert.ok(s.startsWith(".bubble-pop-up "), `Selektor nicht aufs Pop-up begrenzt: ${s}`);
  }
});

pruefe("Info-Dialog mit Hintergrundbild: Pfade mit fuehrendem $", () => {
  const v = vorlage("info-dialog-hintergrundbild");
  assert.equal(feld(v.block, "ziel"), "uix-more-info-yaml");
  assert.ok(!/\bpaket:/.test(v.block), "gehoert nicht ins Glas-Paket");
  // UIX haengt den Info-Dialog an ha-adaptive-dialog. Ohne fuehrendes $ legt es
  // keinen Knoten an - an einer Instanz nachgemessen. Genau dieser Fehler stand
  // im ersten Vorschlag.
  const schluessel = [...v.css.matchAll(/^(\S[^\n]*?):\s*\|\s*$/gm)].map((m) => m[1]);
  assert.deepEqual(schluessel, ['"$ ha-dialog $"', '"$ ha-bottom-sheet $"'], `unerwartete Pfade: ${schluessel.join(", ")}`);
  assert.ok(!v.css.includes("ha-adaptive-dialog"), "ha-adaptive-dialog ist die Wurzel, nicht Teil des Pfads");
  assert.match(v.css, /wa-dialog::part\(dialog\)\s*\{/);
  assert.match(v.css, /wa-drawer::part\(dialog\)\s*\{/);
  const hintergruende = v.css.match(/background:\s*var\(--popup-custom-wallpaper,\s*var\(--lovelace-background/g) || [];
  assert.equal(hintergruende.length, 2, "Desktop und Bottom-Sheet brauchen je eine Regel");
  assert.ok(!/background-image:/.test(v.css), "--lovelace-background ist ein Kurzwert und passt nicht in background-image");
  assert.equal((v.css.match(/background-attachment:\s*scroll/g) || []).length, 2);
  // Jede CSS-Zeile muss unter ihrem Pfad eingerueckt sein, sonst zerfaellt die YAML-Karte.
  for (const zeile of v.css.split("\n")) {
    if (!zeile.trim() || /^"\$ /.test(zeile)) continue;
    assert.ok(/^ {2}/.test(zeile), `nicht eingerueckt: ${JSON.stringify(zeile)}`);
  }
});

console.log(fehler === 0 ? "\nAlle Tests bestanden." : `\n${fehler} Test(s) fehlgeschlagen.`);
process.exit(fehler === 0 ? 0 : 1);
