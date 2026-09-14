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

pruefe("Kein backdrop-filter auf dem Host von Bubble-Karten", () => {
  // Ein backdrop-filter am Host macht ihn zum Bezugsrahmen fuer position: fixed.
  // Bubble-Pop-ups sind fixed und liegen im Shadow Root von bubble-card - mit
  // Filter am Host fielen sie an einer laufenden Instanz auf Hoehe 0 zusammen.
  const fehlend = [];
  for (const v of mitCss) {
    const ziel = feld(v.block, "ziel") || "uix-card";
    if (ziel !== "uix-card") continue;
    const c = ohneKommentare(css(v.block));
    const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
    const filterAmHost = regeln.some((m) => m[1].split(",").some((sel) => sel.trim() === ":host") && /backdrop-filter:\s*(?!none)\S/.test(m[2]));
    if (!filterAmHost) continue;
    const ausnahme = regeln.some((m) => m[1].split(",").some((sel) => sel.trim() === ":host(.type-custom-bubble-card)") && /(^|[;\s])backdrop-filter:\s*none/.test(m[2]));
    if (!ausnahme) fehlend.push(v.id);
  }
  assert.deepEqual(fehlend, [], `backdrop-filter auf :host ohne Ausnahme fuer Bubble: ${fehlend.join(", ")}`);
});

pruefe("Glas-Paket bemalt auf uix-card nie den Wirt einer Karte", () => {
  // Auf Dashboards ist :host das Karten-Element, ha-card die Karte darin.
  // Farbe, Glanz oder Filter auf blankem :host lagen dort doppelt ueber der
  // ha-card - an einer laufenden Instanz als ausgewaschener Schleier sichtbar.
  // Erlaubt bleiben Variablen, die nach innen vererben.
  const fehler = new Set();
  for (const v of mitCss) {
    if (!/\bpaket:\s*"glas"/.test(v.block)) continue;
    if ((feld(v.block, "ziel") || "uix-card") !== "uix-card") continue;
    for (const m of ohneKommentare(css(v.block)).matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      if (!m[1].split(",").some((sel) => sel.trim() === ":host")) continue;
      const deklarationen = m[2].split(";").map((d) => d.trim()).filter(Boolean);
      if (!deklarationen.every((d) => d.startsWith("--"))) fehler.add(v.id);
    }
  }
  assert.deepEqual([...fehler], [], `bemalt blanken :host: ${[...fehler].join(", ")}`);
});

pruefe("glas-ebene legt das Glas auf :host(ha-card) und ha-card", () => {
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-ebene").block));
  const glasregel = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)].find((m) => /backdrop-filter:\s*blur/.test(m[2]));
  assert.ok(glasregel, "keine Glasregel gefunden");
  const selektoren = glasregel[1].split(",").map((s) => s.trim()).sort();
  assert.deepEqual(selektoren, [":host(ha-card)", "ha-card"]);
});

pruefe("glas-bubble legt den Reflex nur auf Icons und Sub-Buttons", () => {
  // Auf einem Kartenbalken von 340 x 56 px zog der diagonale Reflex eine helle
  // Bahn ueber die linke Haelfte - Bubble-Karten wirkten heller als alle anderen.
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-bubble").block));
  const mitReflex = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .filter((m) => /--hatg-glas-reflex/.test(m[2]))
    .flatMap((m) => m[1].split(",").map((s) => s.trim()));
  assert.deepEqual(mitReflex.sort(), [".bubble-icon-container", ".bubble-main-icon-container", ".bubble-sub-button"]);
});

pruefe("Aktiver Seitenleisten-Eintrag ohne Schlagschatten", () => {
  // ha-list-nav hat overflow: hidden auto und schneidet einen Aussenschatten
  // ab - an einer laufenden Instanz blieb ein dunkles Rechteck hinter der Pille.
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "seitenleiste-aktiv-liquid").block));
  const regel = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)].find((m) => m[1].trim() === "ha-list-item-button.selected::before");
  assert.ok(regel, "Regel fuer den aktiven Eintrag fehlt");
  const schatten = (regel[2].match(/box-shadow:([^;]*);/) || [])[1] || "";
  assert.ok(!/--hatg-glas-schatten/.test(schatten), "Schlagschatten steht wieder im box-shadow");
  // An Kommas nur ausserhalb von Klammern trennen - var(--x, rgba(...)) ist verschachtelt.
  const teile = [];
  let tiefe = 0, aktuell = "";
  for (const z of schatten.replace(/!important/, "")) {
    if (z === "(") tiefe++;
    if (z === ")") tiefe--;
    if (z === "," && tiefe === 0) { teile.push(aktuell.trim()); aktuell = ""; } else aktuell += z;
  }
  teile.push(aktuell.trim());
  teile.splice(0, teile.length, ...teile.filter(Boolean));
  assert.ok(teile.length > 0 && teile.every((s) => s.startsWith("inset")), `nicht jede Ebene ist inset: ${JSON.stringify(teile)}`);
});

pruefe("Bubbles Auswahlfeld bleibt durchsichtig, wo uix-card ha-select deckend faerbt", () => {
  // Bubble legt ha-select.bubble-dropdown-select ueber runde Sub-Buttons. Deckend
  // gefaerbt stand an einer laufenden Instanz ein eckiges dunkles Quadrat darauf.
  const fehler = [];
  for (const v of mitCss) {
    if ((feld(v.block, "ziel") || "uix-card") !== "uix-card") continue;
    const c = ohneKommentare(css(v.block));
    const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
    const deckend = regeln.some((m) => m[1].split(",").some((s) => s.trim() === "ha-select") && /(^|[;\s])background-color:\s*var\(--hatg-glas-menuegrund/.test(m[2]));
    if (!deckend) continue;
    const ausnahme = regeln.some((m) => m[1].trim() === "ha-select.bubble-dropdown-select" && /background-color:\s*transparent/.test(m[2]));
    if (!ausnahme) fehler.push(v.id);
  }
  assert.deepEqual(fehler, [], `ohne Ausnahme fuer Bubbles Auswahlfeld: ${fehler.join(", ")}`);
});

pruefe("Nur Weichzeichnung: kein Wirt, keine Flaeche, Bubble und Huellen ausgenommen", () => {
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-weichzeichnung-karten").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({ sel: m[1].split(",").map((s) => s.trim()), body: m[2] }));
  const glas = regeln.find((r) => /backdrop-filter:\s*blur/.test(r.body));
  assert.deepEqual(glas.sel.sort(), [":host(ha-card)", "ha-card"]);
  assert.ok(!/background/.test(glas.body), "legt eine Flaeche an - soll nur weichzeichnen");
  const aus = regeln.find((r) => /backdrop-filter:\s*none/.test(r.body));
  assert.ok(aus, "keine Ausnahmen");
  for (const s of [":host(.type-custom-bubble-card) ha-card", ":host(hui-heading-card) ha-card", "ha-card.text-only"]) {
    assert.ok(aus.sel.includes(s), `Ausnahme fehlt: ${s}`);
  }
});

pruefe("glas-ebene nimmt die ha-card in bubble-card aus", () => {
  // bubble-card hat im Shadow Root eine ha-card um ihre Container. Ohne Ausnahme
  // lag unter "Bubble Card in Glas" ein zweites Glas.
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-ebene").block));
  const aus = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)].find((m) => /backdrop-filter:\s*none/.test(m[2]) && /background:\s*none/.test(m[2]));
  assert.ok(aus, "Ausnahmeregel fehlt");
  assert.ok(aus[1].split(",").map((s) => s.trim()).includes(":host(.type-custom-bubble-card) ha-card"), "Bubble fehlt in den Ausnahmen");
});

pruefe("Bedienelemente in den Einstellungen erben ihre Variablen vom App Drawer", () => {
  // Das Stylesheet von uix-drawer liegt im Shadow Root von ha-drawer. Ein Selektor
  // ha-button traf dort keinen einzigen Knopf der Einstellungsseiten - die liegen
  // mehrere Shadow Roots tiefer. Nur Variablen auf :host kommen dort an.
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-buttons-einstellungen").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  for (const variable of ["--ha-button-box-shadow", "--ha-button-border-radius"]) {
    const regel = regeln.find((m) => m[2].includes(variable + ":"));
    assert.ok(regel, `${variable} fehlt`);
    assert.ok(regel[1].split(",").map((s) => s.trim()).includes(":host"), `${variable} steht nicht auf :host`);
  }
  // Eigene Karten faerben ihre Mulden ueber --control-button-background-color.
  // Vom App Drawer vererbt, wurden sie an einer laufenden Instanz blau.
  const farbe = regeln.find((m) => m[2].includes("--control-button-background-color:"));
  assert.ok(!farbe || !farbe[1].split(",").map((s) => s.trim()).includes(":host"), "--control-button-background-color wird vom App Drawer vererbt");
});

pruefe("Kein Schalter fuer Abdunkeln hinter Glas im Panel", () => {
  // Der Schalter setzte hatg-glas-abdunkeln in beiden Modi auf 0.35. Im hellen
  // Modus wurden Glasflaechen davon grau, eigene Karten blieben hell - an einer
  // laufenden Instanz nicht stimmig zu bekommen. Er ist entfernt.
  for (const spur of ["data-glas-abdunkeln", "glasAbdunkeln(", "abdunkelungAn("]) {
    assert.ok(!quelle.includes(spur), `Rest des Schalters gefunden: ${spur}`);
  }
});

pruefe("Kartenmarker in Glas: Flaeche auf .marker, Ring bleibt", () => {
  // Die Farbe des 1-px-Rings (--ha-marker-color) kennzeichnet die Entitaet.
  const v = vorlagen.find((x) => x.id === "glas-kartenmarker");
  assert.ok(v, "Vorlage fehlt");
  assert.equal(feld(v.block, "ziel"), "uix-entity-marker");
  const c = ohneKommentare(css(v.block));
  const regel = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)].find((m) => m[1].trim() === ".marker");
  assert.ok(regel, "keine Regel fuer .marker");
  assert.ok(/background-color:/.test(regel[2]) && /backdrop-filter:\s*blur/.test(regel[2]), "keine Glasflaeche");
  assert.ok(!/\bborder(-color)?:/.test(c), "Vorlage ueberschreibt den farbigen Ring");
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
