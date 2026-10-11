// Der Symbol-Baukasten.
// Ausfuehren: node tests/hatg-symbol-kasten.test.js
//
// The icon builder.
//
// Gebaut nach dem Muster des Verlaufs fuer aktive Flaechen. Die Pruefungen
// hier sichern die drei Eigenschaften, an denen so ein Kasten sonst scheitert:
//
//   1. Der Rundlauf. Was die Oberflaeche schreibt, muss sie unveraendert
//      wiederfinden - sonst springen die Regler beim naechsten Oeffnen auf
//      andere Werte. Darum stehen alle Werte einzeln auf :host, auch die, die
//      dort nur zwischenlagern: der Rueckleser findet jeden Namen genau einmal.
//   2. Die Stellen mit !important. Am 11.10.2026 an einer laufenden Instanz
//      gemessen: ha-tile-icon setzt --tile-icon-color, --tile-icon-opacity und
//      --tile-icon-size in seinem eigenen :host, und die Karte setzt die Farbe
//      im selben Shadow Root noch einmal. UIX spritzt ein <style> ein,
//      adoptedStyleSheets greifen zuletzt - ohne !important gewinnt das
//      Bauteil. Bei --mdc-icon-size nicht: das steht am Nachfahren und damit
//      naeher.
//   3. Kein $$ im Pfad. Ein einziges $$ legt jedes -yaml-Feld im ganzen Theme
//      still, stumm und ohne Fehlermeldung.

const assert = require("node:assert/strict");
const { panelBauen, durchlauf } = require("../werkzeuge/kopflos.js");

// Objekte aus dem vm-Kontext haben andere Prototypen als die hier erzeugten;
// assert.deepEqual vergleicht die mit und schlaegt fehl, obwohl Inhalt gleich
// ist. Derselbe Stolperstein wie in tests/hatg-karte.test.js.
function gleich(a, b, hinweis) {
  assert.equal(JSON.stringify(a), JSON.stringify(b), hinweis);
}

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
const PROBE = {
  rundung: "9px", kachel: 44, glyphe: 26,
  flaecheAn: "#C0C0C0", flaecheAus: "#404040",
  deckkraftAn: 40, deckkraftAus: 12,
  schattenAn: "0 2px 8px rgba(0,0,0,.4)", schattenAus: "none",
};

console.log("Symbol-Baukasten\n");

pruefe("Der Block traegt beide Eintraege und kein $$", () => {
  const css = ctx.hatgSymbolCss(PROBE);
  assert.ok(css.startsWith(".: |"), "der Punkt-Eintrag fehlt");
  assert.ok(css.includes("ha-tile-icon $:"), "der Pfad-Eintrag fehlt");
  assert.ok(!/\$\$/.test(css), "ein $$ im Pfad legt jedes -yaml-Feld still");
});

pruefe("Rundlauf: geschrieben und gelesen ergibt dasselbe", () => {
  const block = ctx.hatgHaengeVorlagenBlockAn("", ctx.HATG_SYMBOL_ID, ctx.hatgSymbolCss(PROBE), true);
  gleich(ctx.hatgLeseSymbolKasten(block), ctx.hatgSymbolNormal(PROBE), "Rundlauf weicht ab");
});

pruefe("Ohne Block kommt null zurueck", () => {
  assert.equal(ctx.hatgLeseSymbolKasten(""), null);
  assert.equal(ctx.hatgLeseSymbolKasten("irgendein anderes CSS { }"), null);
});

pruefe("!important steht genau dort, wo es gemessen noetig ist", () => {
  const css = ctx.hatgSymbolCss(PROBE);
  for (const zeile of ["width: var(--symbol-kachel) !important", "height: var(--symbol-kachel) !important",
                       "background-color: var(--symbol-flaeche) !important", "opacity: var(--symbol-deckkraft) !important"]) {
    assert.ok(css.includes(zeile), `fehlt: ${zeile}`);
  }
  // Gegenprobe: die Glyphengroesse braucht keins, sie steht am Nachfahren.
  // Gesucht wird die Deklaration, nicht der Kommentar darueber - der nennt
  // beide Woerter und hat den Test beim ersten Lauf falsch anschlagen lassen.
  const mdc = css.split("\n").find((z) => /^\s*--mdc-icon-size\s*:/.test(z));
  assert.ok(mdc, "--mdc-icon-size fehlt");
  assert.ok(!mdc.includes("!important"), "--mdc-icon-size braucht kein !important");
});

pruefe("Der Zustand kommt als Variable von der Karte herunter", () => {
  const css = ctx.hatgSymbolCss(PROBE);
  assert.ok(css.includes("ha-card ha-tile-icon {"), "der Aus-Zustand fehlt");
  assert.ok(css.includes("ha-card.active ha-tile-icon {"), "der Ein-Zustand fehlt");
  // Im Shadow Root der Kachel ist die Klasse "active" nicht sichtbar - dort
  // darf nur noch die Variable stehen.
  const pfadteil = css.slice(css.indexOf("ha-tile-icon $:"));
  assert.ok(!pfadteil.includes(".active"), "der Pfadteil darf die Klasse nicht kennen");
});

pruefe("Unsinnige Werte werden abgefangen", () => {
  const n = ctx.hatgSymbolNormal({
    kachel: 500, glyphe: -3, deckkraftAn: 180, deckkraftAus: "abc",
    schattenAn: "rot; background: red", schattenAus: "x { y }", rundung: "9px; color: red",
  });
  assert.equal(n.kachel, 96, "Kachelgroesse nicht begrenzt");
  assert.equal(n.glyphe, 10, "Glyphengroesse nicht begrenzt");
  assert.equal(n.deckkraftAn, 100, "Deckkraft nicht begrenzt");
  assert.equal(n.deckkraftAus, ctx.HATG_SYMBOL_STANDARD.deckkraftAus, "ungueltige Zahl nicht ersetzt");
  assert.equal(n.schattenAn, ctx.HATG_SYMBOL_STANDARD.schattenAn, "Semikolon im Schatten nicht abgefangen");
  assert.equal(n.schattenAus, ctx.HATG_SYMBOL_STANDARD.schattenAus, "Klammer im Schatten nicht abgefangen");
  assert.equal(n.rundung, ctx.HATG_SYMBOL_STANDARD.rundung, "Semikolon in der Rundung nicht abgefangen");
});

pruefe("Ein- und Ausschalten ueber das Panel", () => {
  const { panel } = panelBauen();
  assert.equal(panel.symbolKastenStand(), null, "zu Beginn soll nichts stehen");
  panel.setzeSymbolKasten(PROBE);
  gleich(panel.symbolKastenStand(), ctx.hatgSymbolNormal(PROBE), "Stand weicht ab");
  panel.setzeSymbolKasten(null);
  assert.equal(panel.symbolKastenStand(), null, "nach dem Ausschalten muss der Block weg sein");
});

pruefe("Der Block ueberlebt zwei Durchlaeufe unveraendert", () => {
  const { panel } = panelBauen();
  panel.setzeSymbolKasten(PROBE);
  const d1 = durchlauf(panel.buildYamlText());
  assert.ok(!d1.fehler, `erster Durchlauf: ${d1.fehler}`);
  const d2 = durchlauf(d1.ausgabe);
  assert.ok(!d2.fehler, `zweiter Durchlauf: ${d2.fehler}`);
  assert.equal(d1.ausgabe, d2.ausgabe, "ab dem zweiten Durchlauf darf sich nichts mehr aendern");
  assert.ok(d2.ausgabe.includes("HATG:UIX:symbol-baukasten"), "der Block ist verloren gegangen");

  const { panel: p2, ctx: c2 } = panelBauen();
  const bekannt = new Set(Object.keys(p2._state.values.light));
  p2.applyImportedTheme(c2.hatgParseThemeYaml(d2.ausgabe, bekannt));
  gleich(p2.symbolKastenStand(), ctx.hatgSymbolNormal(PROBE), "die Werte haben den Durchlauf nicht ueberlebt");
});

pruefe("Er teilt keinen Pfadschluessel mit symbole-kachel", () => {
  // Die Ausgabe fasst gleiche Pfadschluessel zusammen. Dabei wandert das CSS
  // der einen Vorlage in die Marken der anderen, und das naechste Auffrischen
  // nimmt es mit - am 11.10.2026 nachgestellt, die Marken des Baukastens
  // standen danach leer da. Solange das so ist, duerfen sich die Schluessel
  // nicht ueberschneiden.
  const kachel = ctx.HATG_VORLAGEN.find((v) => v.id === "symbole-kachel");
  assert.ok(kachel, "die Vorlage symbole-kachel gibt es nicht mehr");
  const schluessel = (css) =>
    css.split("\n").filter((z) => /^\S.*:\s*\|\s*$/.test(z)).map((z) => z.replace(/:\s*\|\s*$/, ""));
  const meine = schluessel(ctx.hatgSymbolCss(PROBE)).filter((k) => k !== ".");
  const ihre = schluessel(String(kachel.css)).filter((k) => k !== ".");
  const doppelt = meine.filter((k) => ihre.includes(k));
  assert.deepEqual(doppelt, [], `gemeinsame Pfade: ${doppelt.join(", ")}`);
});

pruefe("Einschalten nimmt symbole-kachel heraus", () => {
  // Den "."-Eintrag teilen sich beide weiterhin - deshalb koennen sie nicht
  // gleichzeitig an sein. Der Baukasten kann alles, was die Vorlage kann.
  const { panel } = panelBauen();
  const tpl = ctx.HATG_VORLAGEN.find((v) => v.id === "symbole-kachel");
  const ziel = ctx.HATG_SYMBOL_ZIEL;
  panel.commitField(ziel, ctx.hatgHaengeVorlagenBlockAn("", tpl.id, String(tpl.css), true));
  assert.ok(ctx.hatgLeseVorlagenBlock(String(panel.currentValues()[ziel]), tpl.id) !== null, "Vorbedingung");
  panel.setzeSymbolKasten(PROBE);
  const danach = String(panel.currentValues()[ziel]);
  assert.equal(ctx.hatgLeseVorlagenBlock(danach, tpl.id), null, "symbole-kachel steht noch im Feld");
  assert.ok(ctx.hatgLeseVorlagenBlock(danach, ctx.HATG_SYMBOL_ID) !== null, "der Baukasten fehlt");
});

pruefe("Er schreibt in beide Modi", () => {
  const { panel } = panelBauen();
  panel.setzeSymbolKasten(PROBE);
  for (const modus of ["light", "dark"]) {
    panel._state.editorMode = modus;
    assert.ok(panel.symbolKastenStand(), `im Modus ${modus} fehlt der Block`);
  }
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
