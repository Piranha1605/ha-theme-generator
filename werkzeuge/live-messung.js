// Nachmessen, was in einer laufenden Instanz wirklich ankommt.
//
// Diese Datei laeuft NICHT in node. Sie wird in der Browser-Konsole eines
// offenen Home Assistant ausgefuehrt - Inhalt kopieren, einfuegen, Enter.
//
// Warum das noetig ist: Ein Stilziel kann im Theme vollstaendig aussehen,
// gueltiges YAML sein, und trotzdem nichts bewirken. Weder die Konsole noch
// eine YAML-Pruefung zeigt das. Sichtbar wird es nur an den uix-node-
// Elementen, die UI eXtension in die Shadow Roots haengt.
//
// Vor dem Messen beachten:
//   - Die Seite muss wirklich gezeichnet sein. In einem Hintergrund-Tab baut
//     ein Sections-Dashboard nicht auf, dann sind ALLE Knoten leer.
//   - Karten-Knoten fuellen sich erst, wenn die Karte einmal durch das
//     Sichtfeld gegangen ist. Also vorher einmal nach unten und zurueck
//     scrollen - sonst haelt man funktionierende Vorlagen fuer tot.
//
// Run this in the browser console of a live Home Assistant to see which
// style targets actually receive CSS.

(() => {
  const knoten = [];
  const gesehen = new WeakSet();
  (function lauf(wurzel, tiefe) {
    if (!wurzel || tiefe > 80) return;
    let els;
    try { els = wurzel.querySelectorAll("*"); } catch (e) { return; }
    for (const el of els) {
      if (el.localName === "uix-node") knoten.push(el);
      const sr = el.shadowRoot;
      if (sr && !gesehen.has(sr)) { gesehen.add(sr); lauf(sr, tiefe + 1); }
    }
  })(document, 0);

  const je = {};
  for (const n of knoten) {
    const typ = n.getAttribute("uix-type") || "?";
    const stil = n.querySelector("style");
    const css = stil ? stil.textContent || "" : "";
    const wirt = n.getRootNode() && n.getRootNode().host ? n.getRootNode().host : null;
    const z = (je[typ] = je[typ] || { n: 0, mitCss: 0, zeichen: 0, vorlagen: new Set(), wirte: new Set() });
    z.n++;
    if (css.trim()) { z.mitCss++; z.zeichen = Math.max(z.zeichen, css.length); }
    if (wirt) z.wirte.add(wirt.localName);
    for (const m of css.matchAll(/[A-Z]+:UIX:([a-z0-9-]+):START/g)) z.vorlagen.add(m[1]);
  }

  const zeilen = Object.keys(je).sort().map((t) => {
    const z = je[t];
    const leer = z.mitCss < z.n ? `  ${z.n - z.mitCss} LEER` : "";
    return `${t.padEnd(30)} Knoten ${String(z.n).padStart(2)}  mit CSS ${String(z.mitCss).padStart(2)}  ${String(z.zeichen).padStart(6)} Zeichen${leer}\n`
      + `${" ".repeat(32)}Wirte: ${[...z.wirte].join(", ")}\n`
      + (z.vorlagen.size ? `${" ".repeat(32)}Vorlagen: ${[...z.vorlagen].sort().join(", ")}\n` : "");
  });

  const wachposten = ["drawer", "sidebar", "root"].filter((t) => je[t] && je[t].mitCss);
  console.log(
    wachposten.length >= 2
      ? "Seite ist gezeichnet - die Messung ist belastbar."
      : "ACHTUNG: drawer/sidebar/root sind leer. Die Seite ist vermutlich nicht gezeichnet, die Messung taugt nichts."
  );
  console.log(`${knoten.length} uix-node-Elemente, ${Object.keys(je).length} Stilziele\n`);
  console.log(zeilen.join(""));
  return { gesamt: knoten.length, ziele: Object.keys(je).sort() };
})();
