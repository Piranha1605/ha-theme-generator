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

// Einstellbare Werte stehen als [[id]] im Quelltext; geprueft wird mit den
// Standardwerten, so wie die Vorlage eingeschaltet wird.
function mitStandardwerten(block, text) {
  const standard = {};
  for (const m of block.matchAll(/\{ id: "([a-z0-9-]+)", label: "[^"]*", labelEn: "[^"]*", standard: "([^"]*)" \}/g)) standard[m[1]] = m[2];
  return text.replace(/\[\[([a-z0-9-]+)\]\]/g, (ganz, id) => standard[id] ?? ganz);
}

function css(block) {
  const vorlage = /\bcss:\s*`([\s\S]*?)`,/.exec(block);
  if (vorlage) return mitStandardwerten(block, vorlage[1]);
  const literal = new RegExp(`\\bcss:\\s*${LITERAL}`).exec(block);
  return literal ? mitStandardwerten(block, JSON.parse(`"${literal[1]}"`)) : null;
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
  const glasregel = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)].find((m) => /backdrop-filter:\s*(blur|var\(--ha-card-backdrop-filter)/.test(m[2]));
  assert.ok(glasregel, "keine Glasregel gefunden");
  const selektoren = glasregel[1].split(",").map((s) => s.trim()).sort();
  assert.deepEqual(selektoren, [":host(ha-card)", "ha-card"]);
});

pruefe("glas-bubble: Flaechen mit Rahmen und Schatten der HA-Karten, ohne Glanz, Icons als Kaestchen", () => {
  // Rahmen und Schatten kommen aus denselben Feldern wie bei ha-card - sonst
  // stehen Bubble-Karten rahmenlos neben HA-Karten (2026-09-16).
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-bubble").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  assert.ok(!/--hatg-glas-reflex|--hatg-glas-rand/.test(c), "Glanz oder Ring steht wieder in glas-bubble");
  const flaeche = regeln.find((m) => m[1].split(",").map((s) => s.trim()).includes(".bubble-button-container"));
  // Die Rundung kommt aus dem Kartenfeld, damit Bubble-Karten so rund sind wie
  // HA-Karten und die Karten der Sammlung (2026-09-20).
  assert.ok(
    flaeche && /background-image:\s*none/.test(flaeche[2]) && /border-radius:\s*var\(--ha-card-border-radius/.test(flaeche[2]),
    "Flaeche nicht im Knopfstil"
  );
  assert.ok(/border:\s*var\(--ha-card-border-width[^;]*var\(--ha-card-border-color/.test(flaeche[2]), "Rahmen kommt nicht aus den HA-Kartenfeldern");
  assert.ok(/box-shadow:\s*var\(--ha-card-box-shadow/.test(flaeche[2]), "Schatten kommt nicht aus ha-card-box-shadow");
  const icon = regeln.find((m) => m[1].split(",").map((s) => s.trim()).includes(".bubble-main-icon-container") && /border-radius/.test(m[2]));
  assert.ok(icon && /box-shadow:\s*none/.test(icon[2]) && !/9999/.test(icon[2]), "Icons sind keine Kaestchen ohne Schatten");
});

pruefe("Aktiver Seitenleisten-Eintrag ohne Schlagschatten", () => {
  // ha-list-nav hat overflow: hidden auto und schneidet einen Aussenschatten
  // ab - an einer laufenden Instanz blieb ein dunkles Rechteck hinter der Pille.
  // Geprueft wird jede Sidebar-Vorlage, die den aktiven Eintrag mit einem
  // Schatten belegt - die Form steckt seit 09/2026 in eigenen Vorlagen.
  const regeln = vorlagen
    .filter((v) => (feld(v.block, "ziel") || "") === "uix-sidebar")
    .flatMap((v) => [...ohneKommentare(css(v.block) || "").matchAll(/([^{}]+)\{([^{}]*)\}/g)])
    .filter((m) => m[1].trim().startsWith("ha-list-item-button.selected::before") && /box-shadow:/.test(m[2]));
  assert.ok(regeln.length, "keine Vorlage belegt den aktiven Eintrag mit einem Schatten");
  const schatten = regeln.map((m) => (m[2].match(/box-shadow:([^;]*);/) || [])[1] || "").join(",");
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
  const glas = regeln.find((r) => /backdrop-filter:\s*(blur|var\(--ha-card-backdrop-filter)/.test(r.body));
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

pruefe("glas-bubble: eingefaerbte Karten deckend mit Kante, erkannt an opacity 1", () => {
  // Zustandskarten melden auch is-on, bleiben aber farblos. Haengt die Regel an
  // is-on, steht dunkle Schrift auf dunklem Glas - an einer laufenden Instanz
  // bei Druckerpatronen gesehen. Bubble setzt inline opacity: 1 nur bei Farbe.
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-bubble").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  assert.ok(!regeln.some((m) => /\.is-on\b/.test(m[1])), "Regel haengt an is-on");
  const bg = regeln.find((m) => m[1].trim() === 'ha-card:has(.bubble-background[style*="opacity: 1"]) .bubble-background');
  assert.ok(bg && /var\(--bubble-button-background-color\)/.test(bg[2]) && (bg[2].match(/inset/g) || []).length === 2, "eingefaerbte Flaeche nicht deckend mit Kante");
  const text = regeln.find((m) => m[1].includes(".bubble-name") && m[1].includes('opacity: 1"]'));
  assert.ok(text && /--text-primary-color/.test(text[2]), "Schrift auf der Akzentflaeche nicht in --text-primary-color");
});

pruefe("glas-bubble: Separator ohne Hintergrund, Sub-Buttons getoent", () => {
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-bubble").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  const sep = regeln.find((m) => m[1].trim() === ".bubble-container.separator-container");
  assert.ok(sep, "keine Ausnahme fuer Separatoren");
  for (const d of ["background: none", "backdrop-filter: none", "border: 0", "box-shadow: none"]) assert.ok(sep[2].includes(d), `Separator: ${d} fehlt`);
  const sub = regeln.find((m) => m[1].trim() === ".bubble-sub-button.background-on");
  assert.ok(sub && (sub[2].match(/inset/g) || []).length === 2 && /--text-primary-color/.test(sub[2]), "Sub-Buttons mit Hintergrund nicht wie das Gewaehlte");
});

pruefe("glas-bubble: Schieber mit Glasmulde und deckender Fuellung", () => {
  // Spur wie die Schieber der HA-Karten (Mulde mit zwei Innenschatten, der helle
  // aus --neumorph-hell), Fuellung deckend in Bubbles Farbe mit plastischer Kante.
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "glas-bubble").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  const spur = regeln.find((m) => m[1].trim() === ".bubble-range-slider");
  assert.ok(spur, "keine Regel fuer die Spur");
  assert.equal((spur[2].match(/inset/g) || []).length, 2, "Spur ist keine vertiefte Mulde");
  assert.ok(/var\(--neumorph-hell,/.test(spur[2]), "heller Innenschatten liest --neumorph-hell nicht");
  const fuellung = regeln.find((m) => m[1].trim() === ".bubble-range-fill");
  assert.ok(fuellung, "keine Regel fuer die Fuellung");
  assert.ok(/opacity:\s*1\s*!important/.test(fuellung[2]), "Fuellung ist nicht deckend");
  assert.equal((fuellung[2].match(/inset/g) || []).length, 2, "Fuellung hat keine plastische Kante");
  assert.ok(!/background-color|backdrop-filter:\s*blur/.test(fuellung[2]), "Fuellung ueberschreibt Bubbles Farbe oder ist Glas");
});

pruefe("Glas-Knoepfe: kleiner Schatten ohne Ring, kleine Rundung", () => {
  // Vorbild sind die ruhenden Knoepfe eigener Karten. Ring und grosser
  // Kartenschatten liessen Knoepfe neben ihnen schwer wirken.
  const knopfVorlagen = mitCss.filter((v) => /--ha-button-box-shadow:/.test(css(v.block)));
  assert.ok(knopfVorlagen.length >= 4, `nur ${knopfVorlagen.length} Knopf-Vorlagen gefunden`);
  for (const v of knopfVorlagen) {
    const c = ohneKommentare(css(v.block));
    const schatten = (c.match(/--ha-button-box-shadow:([^;]*);/) || [])[1] || "";
    assert.ok(!/--hatg-glas-rand|--hatg-glas-schatten/.test(schatten), `${v.id}: Ring oder Kartenschatten im Knopfschatten`);
    assert.ok(/--ha-button-border-radius:\s*calc\(var\(--ha-card-border-radius[^)]*\) - 7px\)/.test(c), `${v.id}: Knopf nicht mit kleiner Rundung`);
  }
});

pruefe("Aktiver Seitenleisten-Eintrag deckend in der Akzentfarbe mit Textfarbe fuer Akzentflaechen", () => {
  const c = ohneKommentare(css(vorlagen.find((x) => x.id === "seitenleiste-aktiv-liquid").block));
  const regeln = [...c.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  const pille = regeln.find((m) => m[1].trim() === "ha-list-item-button.selected::before");
  assert.ok(pille && /background-color:\s*var\(--accent-color/.test(pille[2]) && !/color-mix\([^)]*transparent\)/.test(pille[2].split("box-shadow")[0]), "Pille nicht deckend in der Akzentfarbe");
  const text = regeln.find((m) => m[1].trim() === "ha-list-item-button.selected");
  assert.ok(text && /--sidebar-selected-text-color:\s*var\(--text-primary-color\)/.test(text[2]), "Schrift nicht in --text-primary-color");
});

pruefe("Jeder dataset-Zugriff hat ein passendes data-Attribut", () => {
  // Der Loeschknopf eigener Vorlagen las seit der Umstellung auf UIX
  // dataset.vorlagenDelete, das Attribut hiess data-eigene-vorlage-delete -
  // geloescht wurde nichts.
  const alles = fs.readFileSync(PANEL, "utf8");
  const camel = (a) => a.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
  const bekannt = new Set([...alles.matchAll(/data-([a-z0-9-]+)/g)].map((m) => camel(m[1])));
  const fremd = [...new Set([...alles.matchAll(/\.dataset\.([A-Za-z0-9]+)/g)].map((m) => m[1]))].filter((k) => !bekannt.has(k));
  assert.deepEqual(fremd, []);
});

pruefe("Jede Vorlage liegt in einer angezeigten Gruppe der Vorlagenseite", () => {
  const alles = fs.readFileSync(PANEL, "utf8");
  const kollisionen = /const HATG_GLAS_KOLLISIONEN = (\[[^\]]*\]);/.exec(alles)[1];
  const start = alles.indexOf("const HATG_VORLAGEN_GRUPPEN");
  const ende = alles.indexOf("const HATG_VORLAGEN = [");
  const kontext = {};
  require("node:vm").runInNewContext(`const HATG_GLAS_KOLLISIONEN = ${kollisionen};\n${alles.slice(start, ende)}\nthis.gruppen = HATG_VORLAGEN_GRUPPEN; this.von = hatgVorlagenGruppeVon;`, kontext);
  const reihenfolge = JSON.parse(/const reihenfolge = (\[[^\]]*\]);/.exec(alles)[1].replace(/'/g, '"'));
  // Die Glas-Vorlagen stehen im Glas-Kasten oben, nicht in der Gruppenliste -
  // sie muessen aber weiterhin irgendwo auftauchen.
  // Glas und Hintergrund stehen in ihrem eigenen Kasten oben, nicht in der
  // Gruppenliste - sie muessen aber weiterhin irgendwo auftauchen.
  const gruppenIds = Array.from(kontext.gruppen, (g) => g.id);
  const imKasten = [...alles.matchAll(/renderGlasVorlagenteil\([^)]*?"([a-z-]+)"/g)].map((m) => m[1]).filter((id) => gruppenIds.includes(id));
  for (const id of ["glas", "hintergrund"]) assert.ok(imKasten.includes(id), `Gruppe ${id} wird nirgends gezeichnet`);
  assert.deepEqual([...new Set([...reihenfolge, ...imKasten])].sort(), gruppenIds.sort(), "nicht jede Gruppe wird angezeigt");

  // Die Vorlagen der Seitenleiste stehen quer ueber die Gruppen in ihrem
  // eigenen Kasten und sind darum aus den Gruppenlisten genommen.
  const seiten = JSON.parse(/const HATG_SEITENLEISTE_VORLAGEN = (\[[\s\S]*?\]);/.exec(alles)[1].replace(/,\s*\]/, "]").replace(/'/g, '"'));
  const alleIds = new Set(vorlagen.map((v) => v.id));
  for (const id of seiten) assert.ok(alleIds.has(id), `Seitenleisten-Kasten nennt eine unbekannte Vorlage: ${id}`);
  assert.ok(/renderSeitenleisteKasten\(/.test(alles), "Seitenleisten-Kasten fehlt");
  const weitere = [];
  for (const v of vorlagen) {
    const paket = (/\bpaket:\s*"([^"]+)"/.exec(v.block) || [])[1];
    const g = kontext.von({ id: v.id, paket });
    if (g === "weitere") weitere.push(v.id);
  }
  // Der Auffangtopf soll klein bleiben - neue Vorlagen gehoeren in eine Gruppe.
  assert.ok(weitere.length <= 3, `zu viele Vorlagen ohne Gruppe: ${weitere.join(", ")}`);
});

pruefe("Eigener Titel gilt nicht als veraltete Vorlage", () => {
  // Hinweis und Auffrischen muessen dasselbe Soll vergleichen.
  const alles = fs.readFileSync(PANEL, "utf8");
  const start = alles.indexOf("const HATG_VORLAGE_TITEL_RE");
  const ende = alles.indexOf("function hatgVorlagenZiel(");
  assert.ok(start !== -1 && ende > start, "Titel-Helfer nicht gefunden");
  const kontext = {};
  require("node:vm").runInNewContext(`${alles.slice(start, ende)}\nthis.soll = hatgVorlageSoll; this.mitTitel = hatgVorlageMitTitel;`, kontext);
  const tpl = { css: ".menu .title::after {\n  content: \"Home Assistant\";\n}", titel: { standard: "Home Assistant" } };
  const block = kontext.mitTitel(tpl, "Horizon HA");
  assert.equal(kontext.soll(tpl, block), block, "eigener Titel wird als Abweichung gewertet");
  assert.equal(kontext.soll({ css: "a{}" }, "b{}"), "a{}");
  assert.ok(/hatgVorlageSoll\(tpl, vorhanden\)\)/.test(alles.slice(alles.indexOf("veralteteVorlagen() {"), alles.indexOf("veralteteVorlagen() {") + 1500)), "Hinweis nutzt das Soll nicht");
});

pruefe("Einstellbare Werte bleiben beim Auffrischen und schliessen keine Deklaration", () => {
  const alles = fs.readFileSync(PANEL, "utf8");
  const start = alles.indexOf("const HATG_VORLAGE_TITEL_RE");
  const ende = alles.indexOf("function hatgVorlagenZiel(");
  const helfer = alles.slice(alles.indexOf("function hatgCssOhneKommentare("), alles.indexOf("function", alles.indexOf("function hatgCssOhneKommentare(") + 10));
  const kontext = {};
  require("node:vm").runInNewContext(
    `${helfer}\n${alles.slice(start, ende)}\nthis.soll = hatgVorlageSoll; this.bauen = hatgVorlageBauen; this.ohne = hatgCssOhneKommentare;`,
    kontext
  );
  const tpl = {
    cssRoh: "a {\n  width: [[breite]];\n  height: [[breite]];\n  opacity: [[deckkraft]];\n}",
    werte: [
      { id: "breite", standard: "34px" },
      { id: "deckkraft", standard: "0.4" },
    ],
  };
  const block = kontext.bauen(tpl, null, { breite: "40px" });
  assert.ok(/width: \/\*HATG:WERT:breite\*\/40px\/\*HATG:WERT\*\//.test(block), block);
  assert.ok(/opacity: \/\*HATG:WERT:deckkraft\*\/0\.4\//.test(block), "Standard fehlt");
  // Die Marken muessen das Einhaengen ueberstehen, sonst ist der Wert beim naechsten Laden weg.
  assert.equal(kontext.soll(tpl, kontext.ohne(block)), block, "eigener Wert gilt als veraltet");
  const boese = kontext.bauen(tpl, null, { breite: "1px; } b { color: red */" });
  assert.ok(!/[;{}]\s*b\s*\{|\*\/\s*\/\*HATG:WERT\*\/.*red/.test(boese.replace(/\/\*HATG:WERT[^*]*\*\//g, "")), boese);
  assert.equal((boese.match(/\{/g) || []).length, 1, "Wert oeffnet einen neuen Block");
  // Jede Vorlage mit werte nutzt jeden Platzhalter und hat keine offenen Platzhalter.
  for (const v of vorlagen) {
    if (!/\bwerte:\s*\[/.test(v.block)) continue;
    for (const m of v.block.matchAll(/\{ id: "([a-z0-9-]+)", label: "([^"]+)", labelEn: "([^"]+)", standard: "([^"]+)" \}/g)) {
      assert.ok(alles.includes(`[[${m[1]}]]`), `${v.id}: Platzhalter [[${m[1]}]] fehlt im CSS`);
    }
  }
});

pruefe("Seitenleisten-Titel ist ein Parameter der Vorlage, keine Beschreibung nennt hatg-Felder", () => {
  const tpl = vorlagen.find((x) => x.id === "seitenleiste-titel");
  assert.ok(tpl, "Vorlage seitenleiste-titel fehlt");
  assert.ok(/titel:\s*\{\s*standard:\s*"Home Assistant"/.test(tpl.block), "Titel-Parameter fehlt");
  assert.ok(/content:\s*"Home Assistant"/.test(css(tpl.block)), "Titel steht nicht als CSS-Text im Block");
  for (const v of vorlagen) {
    const desc = (/desc:\s*"((?:[^"\\]|\\.)*)"/.exec(v.block) || [])[1] || "";
    assert.ok(!/\bhatg-[a-z]/.test(desc), `${v.id}: Beschreibung nennt ein hatg-Feld`);
  }
});

pruefe("Keine Vorlage und kein Feld verweist auf ein hatg-Theme-Feld", () => {
  // Glaswerte stehen in den Feldern, die Home Assistant selbst liest
  // (ha-card-background, ha-card-backdrop-filter, ...). Eigene hatg-Felder
  // blieben beim Ausschalten des Glas-Pakets als Verweise stehen und liefen ins
  // Leere, sobald die Felder fehlten.
  const vorlagenCss = ohneKommentare(VORLAGEN);
  const einstellungen = ausschnitt("const HATG_EINSTELLUNGEN_ZEILEN", "\n];");
  const treffer = [...(vorlagenCss + einstellungen).matchAll(/var\(--hatg-[a-z0-9-]+/g)].map((m) => m[0]);
  assert.deepEqual([...new Set(treffer)], [], "Vorlagen verweisen noch auf hatg-Felder");
  const manifest = JSON.parse(ausschnitt("const HATG_MANIFEST = ", "\n").slice("const HATG_MANIFEST = ".length).replace(/;\s*$/, ""));
  const felder = Object.keys(manifest.light).filter((k) => k.startsWith("hatg-"));
  assert.deepEqual(felder, [], "Feldliste enthaelt noch hatg-Felder");
  for (const k of ["ha-card-backdrop-filter", "ha-dialog-surface-backdrop-filter"]) assert.ok(k in manifest.light, `${k} fehlt in der Feldliste`);
  // Die Pop-up-Vorlagen lesen popup-custom-wallpaper. Ohne Eintrag in der
  // Feldliste hielte der Import es fuer ein eigenes Hilfsfeld und loeste es auf.
  assert.ok("popup-custom-wallpaper" in manifest.light && "popup-custom-wallpaper" in manifest.dark, "popup-custom-wallpaper fehlt in der Feldliste");
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
