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
  abstand: 20, intensitaet: 14, weiche: 60, form: "flach",
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
    abstand: 999, intensitaet: -5, weiche: "viel", form: "wolkig",
    rundung: "9px; color: red",
  });
  assert.equal(n.kachel, 96, "Kachelgroesse nicht begrenzt");
  assert.equal(n.glyphe, 10, "Glyphengroesse nicht begrenzt");
  assert.equal(n.deckkraftAn, 100, "Deckkraft nicht begrenzt");
  assert.equal(n.deckkraftAus, ctx.HATG_SYMBOL_STANDARD.deckkraftAus, "ungueltige Zahl nicht ersetzt");
  assert.equal(n.abstand, 40, "Abstand nicht begrenzt");
  assert.equal(n.intensitaet, 0, "Intensitaet nicht begrenzt");
  assert.equal(n.weiche, ctx.HATG_SYMBOL_STANDARD.weiche, "unlesbare Weichzeichnung nicht ersetzt");
  assert.equal(n.form, ctx.HATG_SYMBOL_STANDARD.form, "unbekannte Form nicht ersetzt");
  // Die Rundung ist das einzige freie Textfeld geblieben - ein Semikolon dort
  // wuerde die naechste Deklaration abschneiden.
  assert.equal(n.rundung, ctx.HATG_SYMBOL_STANDARD.rundung, "Semikolon in der Rundung nicht abgefangen");
});

pruefe("Der Schatten wird aus der Flaechenfarbe gerechnet", () => {
  // Vorbild sind die Neumorphismus-Generatoren: zwei Toene, einer um die
  // Intensitaet dunkler, einer heller, im gleichen Abstand nach beiden Seiten.
  const css = ctx.hatgSymbolCss({ ...PROBE, flaecheAn: "#e0e0e0", flaecheAus: "#e0e0e0" });
  const aus = css.split("\n").find((z) => z.includes("--symbol-schatten-aus"));
  const an = css.split("\n").find((z) => z.includes("--symbol-schatten-an"));
  assert.ok(aus.includes("20px 20px 60px"), "Abstand oder Weichzeichnung fehlen");
  assert.ok(aus.includes("-20px -20px 60px"), "der zweite Ton fehlt");
  assert.ok(aus.includes("#000000") && aus.includes("#ffffff"), "die beiden Richtungen fehlen");
  assert.ok(!aus.includes("inset"), "ausgeschaltet darf der Schatten nicht nach innen gehen");
  assert.ok(an.includes("inset"), "eingeschaltet gehoert er nach innen");
});

pruefe("Die Form steckt in der Fuellung, nicht im Schatten", () => {
  const flach = ctx.hatgSymbolCss({ ...PROBE, form: "flach" });
  assert.ok(flach.includes("--symbol-form-aus: none"), "flach darf keine Fuellung setzen");
  for (const [form, zuerst] of [["konkav", "#000000"], ["konvex", "#ffffff"]]) {
    const css = ctx.hatgSymbolCss({ ...PROBE, form, flaecheAus: "#e0e0e0" });
    const zeile = css.split("\n").find((z) => z.includes("--symbol-form-aus"));
    assert.ok(zeile.includes("linear-gradient(145deg"), `${form}: kein Verlauf`);
    const vorn = zeile.indexOf(zuerst), hinten = zeile.indexOf(zuerst === "#000000" ? "#ffffff" : "#000000");
    assert.ok(vorn < hinten, `${form}: die Toene stehen in der falschen Reihenfolge`);
  }
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

pruefe("Die Vorschau loest Verweise gegen den Editor auf", () => {
  // Die Vorschau zeichnet im Panel, also unter der laufenden Theme. Ein
  // var(--state-icon-color) loeste dort gegen den aktiven Modus auf: Der
  // Editor stand auf Light, die Musterkachel kam im Dunkel-Wert.
  const { panel } = panelBauen();
  panel._state.editorMode = "light";
  const hell = panel.symbolVorschauFarbe("var(--state-icon-color)");
  panel._state.editorMode = "dark";
  const dunkel = panel.symbolVorschauFarbe("var(--state-icon-color)");
  assert.notEqual(hell, "var(--state-icon-color)", "der Verweis wurde nicht aufgeloest");
  assert.notEqual(hell, dunkel, "beide Modi liefern denselben Wert");
  // Ausweichwert, feste Farbe, und ein Verweis ins Leere
  assert.equal(panel.symbolVorschauFarbe("var(--gibtesnicht, #abcdef)"), "#abcdef");
  assert.equal(panel.symbolVorschauFarbe("#112233"), "#112233");
  assert.equal(panel.symbolVorschauFarbe("var(--gibtesnicht)"), "transparent");
});

pruefe("Eine Kette im Kreis haengt die Vorschau nicht auf", () => {
  const { panel } = panelBauen();
  panel.commitField("accent-color", "var(--primary-color)");
  panel.commitField("primary-color", "var(--accent-color)");
  const wert = panel.symbolVorschauFarbe("var(--accent-color)");
  assert.ok(typeof wert === "string", "kein Wert zurueckgekommen");
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
