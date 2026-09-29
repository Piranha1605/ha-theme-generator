// Eine Theme mit JEDER eingebauten Vorlage bauen - als Pruefgrundlage.
//
// Ausfuehren:
//   node werkzeuge/alle-vorlagen-theme.js            # nur pruefen
//   node werkzeuge/alle-vorlagen-theme.js raus.yaml  # und ablegen
//
// Warum das noetig ist: In docs/beispiele liegt genau eine Theme. Der
// Durchlauf-Test hat damit nur einen Bruchteil der Vorlagen angefasst - und
// gerade die stummen Fehler (ein toter Typname, ein Pfad zu tief, ein Block der
// beim Export verrutscht) stecken in einzelnen Vorlagen. Hier wird deshalb jede
// Vorlage eingeschaltet und die entstandene Theme einmal durch Import und Export
// geschickt. Was dabei nicht zurueckkommt, ist kaputt.
//
// Builds a theme with every built-in preset enabled and round-trips it, so the
// checks cover all presets instead of the single example theme.

const { panelBauen, stilziele, vorlagenMarken } = require("./kopflos.js");

// Eine Theme mit allen Vorlagen. Gibt Text und die Liste der Vorlagen zurueck.
function alleVorlagenTheme() {
  const { panel, ctx } = panelBauen();
  panel._state.themeName = "hatg-pruefstand-alle-vorlagen";
  const ids = ctx.HATG_VORLAGEN.map((t) => t.id);
  // still: true - sonst rendert und meldet jede einzelne Vorlage.
  ids.forEach((id) => panel.schalteVorlage(id, { still: true }));
  return { text: panel.buildYamlText(), ids, panel, ctx };
}

// Jede Vorlage muss danach mit ihrem Marker im Theme stehen, und der Durchlauf
// durch Import und Export darf keine verlieren.
function pruefen() {
  const fehler = [];
  const befund = [];
  const { text, ids } = alleVorlagenTheme();

  const gesetzt = vorlagenMarken(text);
  const fehlend = ids.filter((id) => !gesetzt.has(id));
  befund.push(`${ids.length} Vorlagen eingeschaltet, ${gesetzt.size} Marken im Theme`);
  if (fehlend.length) fehler.push(`Vorlage ohne Marker im Theme: ${fehlend.join(", ")}`);

  const ziele = stilziele(text);
  befund.push(`${ziele.length} Stilziele: ${ziele.join(", ")}`);

  // Durchlauf: importieren und wieder ausgeben.
  const { durchlauf } = require("./kopflos.js");
  const r = durchlauf(text);
  if (r.fehler) {
    fehler.push(`Import der eigenen Ausgabe fehlgeschlagen: ${r.fehler}`);
    return { fehler, befund, text };
  }

  const nachher = vorlagenMarken(r.ausgabe);
  const weg = [...gesetzt].filter((id) => !nachher.has(id));
  if (weg.length) fehler.push(`Vorlagenblock im Durchlauf verloren: ${weg.join(", ")}`);

  const zieleNachher = stilziele(r.ausgabe);
  const zieleWeg = ziele.filter((k) => !zieleNachher.includes(k));
  if (zieleWeg.length) fehler.push(`Stilziel im Durchlauf verloren: ${zieleWeg.join(", ")}`);

  // Ein uix-Feld unter modes liest UIX nie.
  let inModes = false;
  const unten = new Set();
  for (const z of r.ausgabe.split("\n")) {
    if (/^  modes:\s*$/.test(z)) inModes = true;
    else if (/^  \S/.test(z)) inModes = false;
    if (!inModes) continue;
    const m = /^\s{6}((?:uix|card-mod)-[a-z0-9-]+(?:-yaml)?):/.exec(z);
    if (m) unten.add(m[1]);
  }
  if (unten.size) fehler.push(`Stilziel unter modes gelandet: ${[...unten].join(", ")}`);

  // Kein Pfad darf $$ enthalten - ein einziger legt jedes -yaml-Feld still.
  const doppelDollar = [...r.ausgabe.matchAll(/^\s*(\S*\$\$\S*.*?):\s*[|>]/gm)].map((m) => m[1].trim());
  if (doppelDollar.length) fehler.push(`Pfad mit $$ in der Ausgabe: ${doppelDollar.join(", ")}`);

  befund.push(`Ausgabe: ${r.ausgabe.split("\n").length} Zeilen, ${r.ausgabe.length} Zeichen`);
  return { fehler, befund, text };
}

module.exports = { alleVorlagenTheme, pruefen };

if (require.main === module) {
  const { fehler, befund, text } = pruefen();
  befund.forEach((z) => console.log("  " + z));
  const ziel = process.argv[2];
  if (ziel) {
    require("node:fs").writeFileSync(ziel, text, "utf8");
    console.log(`  abgelegt: ${ziel}`);
  }
  if (fehler.length) {
    console.log("\nFEHLER:");
    fehler.forEach((z) => console.log("  - " + z));
    process.exit(1);
  }
  console.log("\nAlle Vorlagen ueberleben den Durchlauf.");
}
