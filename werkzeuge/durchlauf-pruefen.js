// Ein Theme durch HATG schicken und pruefen, ob dabei etwas verloren geht.
//
//   node werkzeuge/durchlauf-pruefen.js <datei.yaml> [weitere.yaml ...]
//   node werkzeuge/durchlauf-pruefen.js docs/beispiele/*.yaml
//
// Geprueft wird, was am 2026-09-27 an der Theme eines Nutzers stumm kaputt
// ging: Stilziele, die beim Export unter modes.light/dark rutschen statt auf
// der Theme-Ebene zu bleiben - dort liest UI eXtension sie nie.
//
// Checks a theme through HATG's import -> export and reports anything lost.

const fs = require("node:fs");
const path = require("node:path");
const { durchlauf, stilziele, vorlagenMarken } = require("./kopflos.js");

// Steht jedes uix-Feld auf Theme-Ebene? Die Liste der Typen ist offen: Mit der
// UIX-Option "Style custom panels" heisst ein Ziel nach dem Wurzelelement des
// Panels (uix-hacs-frontend-yaml). Eine feste Liste kann das nicht abdecken.
function uixFelderUnterModes(text) {
  const zeilen = String(text).split("\n");
  const treffer = [];
  let inModes = false;
  for (const z of zeilen) {
    if (/^  modes:\s*$/.test(z)) inModes = true;
    else if (/^  \S/.test(z)) inModes = false;
    if (!inModes) continue;
    const m = /^\s{6}((?:uix|card-mod)-[a-z0-9-]+(?:-yaml)?):/.exec(z);
    if (m) treffer.push(m[1]);
  }
  return [...new Set(treffer)];
}

function pruefe(datei) {
  const text = fs.readFileSync(datei, "utf8");
  const r = durchlauf(text);
  const name = path.basename(datei);
  if (r.fehler) return { name, fehler: [`Import fehlgeschlagen: ${r.fehler}`], warnung: [], info: [] };

  const fehler = [], warnung = [], info = [];
  const zA = stilziele(text), zN = stilziele(r.ausgabe);
  const weg = zA.filter((k) => !zN.includes(k));
  if (weg.length) fehler.push(`Stilziel verloren: ${weg.join(", ")}`);

  const mA = vorlagenMarken(text), mN = vorlagenMarken(r.ausgabe);
  const markenWeg = [...mA].filter((x) => !mN.has(x));
  if (markenWeg.length) fehler.push(`Vorlagenblock verloren: ${markenWeg.join(", ")}`);

  const verrutscht = uixFelderUnterModes(r.ausgabe);
  if (verrutscht.length)
    fehler.push(`uix-Feld unter modes statt auf Theme-Ebene: ${verrutscht.join(", ")} - UIX liest das nie`);

  if (r.unbekannt.length) warnung.push(`${r.unbekannt.length} unbekannte Felder aufbewahrt: ${r.unbekannt.join(", ")}`);

  info.push(`Stilziele ${zA.length} -> ${zN.length}, Vorlagen ${mA.size} -> ${mN.size}`);
  info.push(`Groesse ${text.length} -> ${r.ausgabe.length} Zeichen`);
  r.bericht.forEach((z) => info.push("Bericht: " + z));
  return { name, fehler, warnung, info };
}

const dateien = process.argv.slice(2);
if (!dateien.length) {
  console.error("Aufruf: node werkzeuge/durchlauf-pruefen.js <datei.yaml> [...]");
  process.exit(2);
}
let schlecht = 0;
for (const d of dateien) {
  const r = pruefe(d);
  const zeichen = r.fehler.length ? "FEHL" : r.warnung.length ? "warn" : " ok ";
  console.log(`[${zeichen}] ${r.name}`);
  r.fehler.forEach((z) => console.log("       FEHLER: " + z));
  r.warnung.forEach((z) => console.log("       Warnung: " + z));
  if (process.env.HATG_AUSFUEHRLICH) r.info.forEach((z) => console.log("       " + z));
  if (r.fehler.length) schlecht++;
}
console.log(schlecht ? `\n${schlecht} von ${dateien.length} Themes mit Fehlern.` : `\n${dateien.length} Themes, keine Fehler.`);
process.exit(schlecht ? 1 : 0);
