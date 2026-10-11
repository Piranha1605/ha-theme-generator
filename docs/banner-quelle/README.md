# Quelle der Banner / Banner source

`banner.html` erzeugt beide Banner. Die Sprache steht in der Adresse
(`?lang=de` oder `?lang=en`), Texte und Zahlen stehen nur einmal in der Datei:

```bash
node bauen.mjs
```

Das Skript rendert mit Chrome in doppelter Auflösung, rechnet auf 1600 px herunter
und schreibt `../banner.png` (deutsch) und `../banner-en.png` (englisch). Es braucht
kein `npm install`: Chrome wird über das DevTools-Protokoll gesteuert, den dafür
nötigen WebSocket bringt node ab Version 22 selbst mit. Ein Lauf dauert drei Sekunden.

Über die Kommandozeile mit `--screenshot` geht es auch, aber Chrome kam damit auf
diesem Rechner nach dem Bild minutenlang nicht zum Beenden — daher der Umweg.

Gestaltung übernommen vom YouTube-Thumbnail des HATG-Films: dunkler Grund, kalter
Schein links und warmer rechts, Chakra Petch, und als Motiv der Wischer — dieselbe
Seite, links im Standard-Theme, rechts mit HATG.

| Datei | Inhalt |
|---|---|
| `banner.html` | die Quelle, beide Sprachen |
| `bauen.mjs` | rendert beide Banner (node, keine Abhängigkeiten) |
| `assets/fonts/` | Chakra Petch 600/700 (SIL OFL 1.1), Roboto 500 (Apache 2.0) |
| `assets/muster-*.jpg` | dieselbe Seite einmal im Standard-Theme, einmal mit HATG |

Das Icon kommt aus `custom_components/hatg/brand/icon@2x.png`, liegt also nur einmal
im Repository.

Die Zahlen im Banner (798 Variablen, 57 Vorlagen, 28 Stilziele) stehen im HTML und
müssen bei größeren Änderungen am Panel nachgezogen werden. Nachzählen lassen sie
sich ohne Browser, aus dem Wurzelverzeichnis des Repositorys:

```bash
node -e 'const{ctx}=require("./werkzeuge/kopflos.js").panelBauen();
console.log(ctx.HATG_VORLAGEN.length, Object.keys(ctx.HATG_MANIFEST.light).length, ctx.HATG_STILZIELE.length)'
```

---

`banner.html` produces both banners. The language is a query parameter
(`?lang=de` or `?lang=en`), so the texts and figures live in one file only:

```bash
node bauen.mjs
```

The script renders with Chrome at twice the size, scales down to 1600 px and writes
`../banner.png` (German) and `../banner-en.png` (English). No `npm install` needed:
Chrome is driven over the DevTools protocol, and node 22+ ships the required
WebSocket. A run takes three seconds. (Chrome's own `--screenshot` flag works too,
but took minutes to exit on this machine.)

The design follows the YouTube thumbnail of the HATG film: dark ground, a cold glow
on the left and a warm one on the right, Chakra Petch, and the wipe as its subject —
the same page, default theme on the left, HATG on the right.

The icon is taken from `custom_components/hatg/brand/icon@2x.png`, so it exists only
once in the repository. The figures in the banner (798 variables, 57 presets, 28 style
targets) live in the HTML and need updating when the panel changes substantially; the
snippet above counts them without a browser.
