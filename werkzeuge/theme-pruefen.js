// Eine Theme-Datei durchleuchten, ohne sie zu veraendern.
//
//   node werkzeuge/theme-pruefen.js <datei.yaml>
//
// Sucht die Fehler, die im Browser stumm bleiben: Pfade mit $$, doppelte
// Pfade, ein einfaches Feld neben seinem -yaml-Feld, offene Klammern,
// doppelte Vorlagenbloecke, fremde Vorlagenmarken. Alles am 2026-09-27 oder
// frueher an einer laufenden Instanz als echter Ausfall nachgewiesen.
//
// Inspects a theme file read-only and reports the failures that stay silent
// in the browser.

const fs = require("node:fs");
const path = require("node:path");
const { panelBauen, stilzielBasis } = require("./kopflos.js");

// Typen, die UI eXtension fest registriert (aus uix.js 8.3.1 gelesen).
// Die Liste ist NICHT vollstaendig: Mit der Option "Style custom panels"
// bildet UIX zusaetzlich Typen aus dem Wurzelelement eigener Panels, etwa
// hacs-frontend oder knx-frontend. Solche Namen sind also kein Fehler.
const UIX_TYPEN = new Set([
  "app", "assist-chip", "badge", "calendar", "card", "config", "dialog", "drawer", "element",
  "entity-marker", "glance", "grid-section", "heading-badge", "history", "more-info",
  "panel-custom", "persistent-notification-item", "profile", "root", "row", "section-background",
  "sidebar", "state-history-charts", "toast", "todo", "top-app-bar-fixed", "view", "view-background",
]);

// Pfadschluessel eines -yaml-Feldes. Ohne YAML-Bibliothek: In der Ausgabe von
// HATG steht jeder Pfad auf eigener Zeile und endet mit ": |".
// Ein Pfadschluessel sieht anders aus als eine CSS-Deklaration, und der
// Unterschied ist wichtiger, als er klingt: Eine mehrzeilige CSS-Deklaration
// ("box-shadow:" mit dem Wert in den Zeilen darunter) endet genauso nach dem
// Doppelpunkt wie ein Pfadschluessel. Am 2026-09-29 hat dieses Werkzeug deshalb
// in docs/beispiele/glas-basis.yaml drei "doppelte Pfade box-shadow" gemeldet
// und die Theme faelschlich als kaputt bezeichnet - sie hat zwei Pfade, nicht
// sechs.
//
// Unterschieden wird am Schluessel selbst: Jeder echte UIX-Pfad ist entweder
// genau "." (das einfache CSS in derselben Karte) oder enthaelt ein
// Leerzeichen, ein $, >, #, [ oder ein Komma. An allen Vorlagen und den
// Beispiel-Themes nachgezaehlt: kein einziger Pfad besteht aus einem einzelnen
// Wort. Ein solcher Pfad wuerde hier uebersehen - das ist Absicht. Ein
// uebersehener Pfad kostet eine Meldung, ein Fehlalarm blockiert jedes Release.
function istPfadSchluessel(k) {
  if (k === ".") return true;
  if (/^--/.test(k)) return false;
  return /[ $>,#[]/.test(k);
}
function pfadSchluessel(block) {
  const raus = [];
  for (const zeile of String(block).split("\n")) {
    const m = /^\s{2,6}"?([^"\n:]+?)"?:\s*\|?\s*$/.exec(zeile);
    if (!m) continue;
    const k = m[1].trim();
    if (!k || k.startsWith("#") || !istPfadSchluessel(k)) continue;
    raus.push(k);
  }
  return raus;
}

function pruefe(datei) {
  const text = fs.readFileSync(datei, "utf8");
  const fehler = [], warnung = [], info = [];
  const { panel, ctx } = panelBauen();
  const bekannt = new Set(Object.keys(panel._state.values.light));
  const geparst = ctx.hatgParseThemeYaml(text, bekannt);
  if (geparst.error) {
    fehler.push("Die Datei laesst sich nicht lesen: " + geparst.error);
    return { fehler, warnung, info };
  }
  info.push(`Theme-Name: ${geparst.name}`);
  info.push(`Felder: ${Object.keys(geparst.light || {}).length} light, ${Object.keys(geparst.dark || {}).length} dark`);

  // Stilziel-Bloecke aus dem Rohtext holen - der Parser legt sie schon ab,
  // hier geht es um die Schreibweise in der Datei.
  const bloecke = {};
  const zeilen = text.split("\n");
  for (let i = 0; i < zeilen.length; i++) {
    const m = /^  ((?:uix|card-mod)-[a-z0-9-]+(?:-yaml)?):/.exec(zeilen[i]);
    if (!m) continue;
    let j = i + 1;
    while (j < zeilen.length && (zeilen[j].startsWith("    ") || !zeilen[j].trim())) j++;
    bloecke[m[1]] = zeilen.slice(i + 1, j).join("\n");
  }
  const namen = Object.keys(bloecke);
  info.push(`Stilziele: ${namen.length} -> ${namen.join(", ")}`);

  for (const k of namen) {
    if (k === "uix-theme") continue;
    if (/^card-mod-/.test(k)) { warnung.push(`${k}: altes card-mod-Format, beim Import wird es angehoben`); continue; }
    const typ = stilzielBasis(k).replace(/^uix-/, "");
    if (!UIX_TYPEN.has(typ))
      info.push(`${k}: Typ "${typ}" steht nicht in UIX' fester Liste - das ist in Ordnung, wenn es ein eigenes Panel ist (Option "Style custom panels")`);
    // Einfaches Feld neben -yaml-Feld ist toedlich.
    if (!/-yaml$/.test(k) && bloecke[k + "-yaml"] !== undefined)
      fehler.push(`${k} und ${k}-yaml stehen nebeneinander - das einfache CSS kommt nie an`);
    // Klammern.
    const auf = (bloecke[k].match(/\{/g) || []).length, zu = (bloecke[k].match(/\}/g) || []).length;
    if (auf !== zu) fehler.push(`${k}: ${auf} { gegen ${zu} } - alles nach der offenen Klammer faellt aus`);
    // Pfade.
    if (/-yaml$/.test(k)) {
      const pfade = pfadSchluessel(bloecke[k]);
      const gesehen = new Set();
      for (const p of pfade) {
        if (p.includes("$$")) fehler.push(`${k}: Pfad mit $$ -> "${p}" - legt JEDES -yaml-Feld still, im ganzen Theme`);
        if (gesehen.has(p)) fehler.push(`${k}: doppelter Pfad "${p}" - UIX verwirft die ganze Karte`);
        gesehen.add(p);
      }
      info.push(`${k}: ${pfade.length} Pfade`);
    }
  }

  // Vorlagenmarken: doppelt, unter fremder Vorsilbe, oder mit einer Kennung,
  // die der Server nie zurueckschreiben kann.
  // Die Kennung wird hier absichtlich weit gefasst ([^:\s]+) statt [a-z0-9-]+:
  // Eine Kennung mit Umlaut ist genau der Fehlerfall, den es zu finden gilt -
  // mit der engen Regex war dieses Werkzeug dafuer blind.
  const marken = [...text.matchAll(/([A-Z][A-Z0-9_]*):UIX:([^:\s]+):START/g)];
  const zaehler = {}; const fremd = new Set();
  for (const m of marken) { if (m[1] !== "HATG") fremd.add(m[1]); zaehler[m[2]] = (zaehler[m[2]] || 0) + 1; }
  const doppelt = Object.entries(zaehler).filter(([, n]) => n > 1);
  if (fremd.size) warnung.push(`Fremde Vorlagenmarken: ${[...fremd].join(", ")} - HATG erkennt nur HATG:`);
  if (doppelt.length) fehler.push(`Doppelte Vorlagenbloecke: ${doppelt.map(([id, n]) => `${id} (${n}x)`).join(", ")}`);
  // Der Server nimmt beim Schreiben nur [A-Za-z0-9_-]{1,64} an, beim Lesen
  // prueft er nichts. Steht so eine Kennung in hatg-uix-vorlagen.json, laesst sich
  // die ganze Liste nie wieder speichern - keine Vorlage, auch keine neue.
  const unspeicherbar = Object.keys(zaehler).filter((id) => !/^[A-Za-z0-9_-]{1,64}$/.test(id));
  if (unspeicherbar.length)
    fehler.push(
      `Unspeicherbare Vorlagen-Kennung: ${unspeicherbar.join(", ")} - steht sie auch in ` +
        `config/themes/hatg/hatg-uix-vorlagen.json, scheitert dort jedes Speichern einer Vorlage`
    );
  const bekannteVorlagen = new Set(ctx.HATG_VORLAGEN.map((t) => t.id));
  const eigene = Object.keys(zaehler).filter((id) => !bekannteVorlagen.has(id));
  info.push(`Vorlagen: ${Object.keys(zaehler).length}${eigene.length ? `, davon ${eigene.length} eigene` : ""}`);
  if (eigene.length) info.push(`Eigene Vorlagen: ${eigene.join(", ")}`);

  // Unbekannte Felder und ungueltige Werte, wie HATG sie sieht.
  const unbekannt = [...new Set([...Object.keys(geparst.extra?.light || {}), ...Object.keys(geparst.extra?.dark || {})])].sort();
  if (unbekannt.length) warnung.push(`${unbekannt.length} unbekannte Felder: ${unbekannt.join(", ")}`);
  const fmt = ctx.hatgGetKeyFormats();
  const schlecht = [];
  for (const m of ["light", "dark"])
    for (const k of Object.keys(geparst[m] || {}))
      if (ctx.hatgValidateValue(fmt[k], geparst[m][k], k) !== "ok") schlecht.push(`${m}/${k}`);
  if (schlecht.length) fehler.push(`Ungueltige Werte (${schlecht.length}): ${schlecht.slice(0, 10).join(", ")}`);

  info.push(`!important: ${(text.match(/!important/g) || []).length}x`);
  return { fehler, warnung, info };
}

module.exports = { pruefe, pfadSchluessel, istPfadSchluessel };

const dateien = process.argv.slice(2);
if (!dateien.length) {
  if (require.main !== module) return;
  console.error("Aufruf: node werkzeuge/theme-pruefen.js <datei.yaml>");
  process.exit(2);
}
let schlecht = 0;
for (const d of dateien) {
  console.log("\n=== " + path.basename(d) + " ===");
  const r = pruefe(d);
  const zeig = (titel, liste) => { if (liste.length) { console.log("  " + titel + ":"); liste.forEach((z) => console.log("    - " + z)); } };
  zeig("FEHLER", r.fehler);
  zeig("Warnung", r.warnung);
  zeig("Befund", r.info);
  if (!r.fehler.length) console.log("  keine Fehler");
  if (r.fehler.length) schlecht++;
}
process.exit(schlecht ? 1 : 0);
