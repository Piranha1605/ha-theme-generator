# Zuordnung: Bubble Card und Mushroom auf HAs neue Ebene

Internes Arbeitspapier für den Umbau. Deutsch, weil es noch keine Nutzerdokumentation
ist — die englische Fassung kommt, sobald daraus eine Anleitung wird.

Alle Zahlen und Namen hier sind am 12.10.2026 an der laufenden Instanz gemessen
(HA 2026.10.1, Bubble Card 3.2.0, Mushroom aus `/hacsfiles/lovelace-mushroom/`),
nicht aus Dokumentation übernommen. Nachmessen: siehe letzter Abschnitt.

## Die Idee und ihre Grenze

Der Gedanke war: Bubble und Mushroom über UIX einfach die neuen Farben zuweisen,
statt die alten Felder weiterzuschleppen. Das geht — bei Bubble unmittelbar, bei
Mushroom über einen Umweg. Der Unterschied liegt nicht an UIX, sondern an einem
Detail in Mushroom: **59 seiner 109 Variablen sind RGB-Tripel**, keine Farben.

**UIX braucht es dafür überhaupt nicht.** CSS-Variablen erben durch jede
Shadow-Grenze; eine Zuweisung als gewöhnliches Theme-Feld genügt. Am 12.10.2026
nachgemessen: ein auf `html` gesetztes `--mush-rgb-red` kam zwölf Shadow-Ebenen
tief an (bis `ha-snowflakes`), und `rgb(var(--mush-rgb-red))` löste zu
`rgb(243, 103, 108)` auf. UIX wäre nur nötig, wenn einzelne Elemente getroffen
werden müssten — hier geht es um vererbte Variablen. Das macht den Umbau
einfacher, nicht komplizierter.

Fertige Dateien zum Ausprobieren:

| Datei | Inhalt |
|---|---|
| `docs/beispiele/zuordnung-bubble-mushroom.yaml` | die Zuordnung als lauffähige Theme, 159 Felder |
| `docs/beispiele/ha-blanko.yaml` | HA 2026.10 ohne Altlasten, drei Ebenen, 243 flach |

    Bubble Card    liest 100 --bubble-*     davon  0 Tripel    → direkt zuweisbar
    Mushroom       liest 109 --mush-*       davon 59 Tripel    → Umweg nötig

`rgb(var(--bubble-…))` kommt im ganzen Bubble-Quelltext **null** mal vor. Mushroom
dagegen baut seine Farben als `rgb(var(--mush-rgb-state-light, var(--rgb-orange)))`
zusammen. In ein Tripel passt kein `var(--ha-color-…)`, denn dort steht `#ff9342`,
nicht `255, 147, 66`.

## Vier Dinge, die das Verfahren tragen

**1. Home Assistant leitet aus jedem Theme-Feld ein Tripel ab — wenn der Wert mit
`#` beginnt.** In `src/common/dom/apply_themes_on_element.ts`:

```js
for (const key of Object.keys(combinedTheme)) {
  const value = String(combinedTheme[key]);
  styles[`--${key}`] = value;
  if (!value.startsWith("#")) continue;        // der einzige Filter
  if (combinedTheme[`rgb-${key}`] !== undefined) continue;
  styles[`--rgb-${key}`] = hex2rgb(value).join(",");
}
```

Kein Namensfilter — **jedes** Feld bekommt sein `--rgb-<name>`. Das ist der Hebel
für Mushroom.

**Nicht nur aus dem Quelltext, sondern gemessen:** Auf `html` stehen bei aktiver
Standard-Theme 50 abgeleitete Tripel, und vier davon heißen
`--rgb-ha-button-neutral-color`, `--rgb-ha-button-neutral-light-color`,
`--rgb-ha-button-primary-light-color` und `--rgb-ha-button-warning-light-color`.
Das sind keine klassischen Namen — HA hat sie aus `ha-`Feldern abgeleitet. Damit
ist belegt, dass die Ableitung sich nicht um die Vorsilbe kümmert, und ein Feld
`ha-color-red-60: #c3362b` bekommt sein `--rgb-ha-color-red-60` genauso.

Drei Fallen darin:

- Der Filter ist wörtlich `startsWith("#")`. `rgba(250, 248, 245, 0.8)` und
  benannte Farben werden **nicht** abgeleitet, obwohl `hex2rgb` sie über culori
  parsen könnte — der Filter greift vorher. Wer ein Tripel braucht, schreibt Hex.
- Drei-, vier-, sechs- und achtstelliges Hex gehen alle; `expandHex` normalisiert
  über culori, `formatHex` wirft das Alpha weg. Aus `#faf8f5cc` wird `250,248,245`.
- Bringt das Theme selbst ein `rgb-<name>` mit, bleibt es stehen. Man kann also
  einzelne Tripel von Hand setzen.

**2. `modes.light` gilt nur im Hellmodus.** Der Aufrufer mischt flach, dann Modus:

```js
const { modes, ...baseThemeRules } = themes.themes[themeToApply];
themeRules = { ...themeRules, ...baseThemeRules };
if (modes) themeRules = { ...themeRules, ...(darkMode ? modes.dark : modes.light) };
```

Ein Feld, das nur unter `light:` steht, fehlt im Dunkelmodus — **und mit ihm sein
Tripel**. Die Farbe selbst fällt dann auf HAs Stylesheet zurück und sieht richtig
aus; das Tripel fällt einfach weg, und Mushroom wird farblos. Das ist der stumme
Fehler, auf den dieses Papier am meisten aufpasst.

> **Folge für `ha_blanko.yaml` — gefunden und behoben.** In der ersten Fassung
> standen alle 270 Blätter unter `modes.light`, der Dunkelblock enthielt nur die
> 143 semantischen `var()`-Verweise: **0 flach**. Im Dunkelmodus gab es damit kein
> einziges `--rgb-ha-color-*`, und Mushroom wäre dort farblos geblieben.
>
> Die Einteilung lässt sich ohne Raten entscheiden: **„steht nur im Hellblock"
> heißt genau „kommt in HAs 143 Dunkelwerten nicht vor" — also modusunabhängig.**
> Danach sind es 243 flache Felder, 27 im Hellblock (genau die, die HA im Dunkeln
> überschreibt: Flächen, `disabled`, `divider`, `outline`, `shadow`, die elf alten
> `input-*` und die drei `ha-box-shadow-*`) und 143 im Dunkelblock.
>
> Mit PyYAML gegengeprüft, also mit HAs eigenem Parser: im Hellmodus **identisch**
> zu vorher (270 Felder, kein Wert abweichend), im Dunkelmodus 143 → 386 Felder
> und **tripelfähig 32 → 187**. Steht so in `docs/beispiele/ha-blanko.yaml`.

**3. Im Dunkelmodus startet jede Theme auf HAs 143 Dunkelwerten.**
`themeRules = { ...darkSemanticVariables, ...darkColorVariables }`, danach die
eigene Theme darüber. Man muss den Dunkelmodus also nicht vollständig beschreiben,
nur was abweicht.

**4. Mushroom setzt seine 59 Tripel selbst.** Das war eine falsche Annahme, die
hier korrigiert gehört: Mushroom ist nicht nur Leser. `--rgb-orange`, `--rgb-teal`,
`--rgb-state-light` und 56 weitere setzt Mushroom in seinem eigenen Wurzelblock.
Auf `html` sind sie **leer** — gemessen. Es sind keine HA-Namen, und es hat keinen
Sinn, sie in eine Theme zu schreiben. Der Theme-Haken ist ausschließlich
`--mush-rgb-*`, und der gewinnt gegen Mushrooms Vorgabe.

## Das Zielvokabular

Gemessen aus den Stylesheets auf `html`, 159 `--ha-color-*` insgesamt:

| Ebene | Anzahl | Namen |
|---|---|---|
| Palette | 57 | `ha-color-{primary,neutral,red,green,orange}-{05,10,20,30,40,50,60,70,80,90,95}`, `-black`, `-white` |
| Flächen | 6 | `ha-color-surface-{default,low,lower}`, je `-inverted` |
| Schrift | 6 | `ha-color-text-{primary,secondary,disabled,link}`, `-primary-inverted`, `-secondary-inverted` |
| Füllungen | 51 | `ha-color-fill-<rolle>-<laut>-<zustand>` |
| Schrift auf Fläche | 19 | `ha-color-on-<rolle>-<laut>`, `ha-color-on-surface-default` |
| Kanten | 15 | `ha-color-border-*` |
| Formular, Fokus, Schatten | 5 | `ha-color-form-*`, `-focus-*`, `-shadow-*` |

Rollen: `primary`, `neutral`, `success`, `warning`, `danger`, `disabled`.
Lautstärken: `quiet`, `normal`, `loud`. Zustände: `resting`, `hover`, `active`.
Das ist das ganze Farbdenken von HA 2026 — sechs Rollen, drei Lautstärken, drei
Zustände. Danach sollte sich auch die Oberfläche des neuen Generators richten.

Maße, ebenfalls gemessen:

    ha-space-1 … -20                4px … 80px in Vierer-Schritten
    ha-border-radius-sm/md/lg       4 / 8 / 12px
    ha-border-radius-xl … 6xl       16 / 20 / 24 / 28 / 32 / 36px
    ha-border-radius-pill/circle/square
    ha-border-width-sm/md/lg        1 / 2 / 3px
    ha-box-shadow-s/m/l             dreistufig, je Modus verschieden
    ha-font-size-xs … 5xl           10 … 40px, über ha-font-size-scale skaliert
    ha-font-weight-light … bold     300 … 700, dazu -body/-action/-heading
    ha-line-height-condensed/normal/expanded
    ha-animation-duration-none/instant/fast/normal/slow   1 / 75 / 150 / 250 / 350ms

`ha-animation-duration-none` ist neu gegenüber HATGs Bestand (dort vier Stufen,
tatsächlich sind es fünf). `ha-font-size-*` steht als `calc(14px * var(--ha-font-size-scale))`
— ein Feld, das die ganze Oberfläche skaliert.

## Bubble Card: 100 Namen

Null Tripel, also durchweg `var(--ha-color-…)`. Nach Gruppen:

### Flächen (25)

| Bubble | Ziel |
|---|---|
| `main-background-color`, `card-type-main-background-color`, `button-main-background-color` | `var(--ha-card-background)` |
| `pop-up-main-background-color` | `var(--ha-dialog-surface-background)` |
| `secondary-background-color`, `select-list-background-color`, `event-background-color` | `var(--ha-color-surface-low)` |
| `button-background-color`, `sub-button-background-color`, `main-buttons-background-color`, `climate-button-background-color`, `cover-button-background-color`, `media-player-button-background-color`, `horizontal-buttons-stack-background-color`, `select-arrow-background-color` | `var(--ha-color-fill-neutral-quiet-resting)` |
| `button-icon-background-color`, `card-type-icon-background-color` | `var(--ha-color-fill-neutral-quiet-resting)` |
| `slider-background-color`, `media-player-slider-background-color`, `sub-slider-background-color`, `climate-background-color`, `sub-button-light-background-color` | `var(--ha-color-fill-neutral-quiet-resting)` |
| `line-background-color` | `var(--ha-color-border-neutral-quiet)` |
| `backdrop-background-color` | `var(--ha-dialog-scrim-color)` |
| `color-cursor-background`, `event-background-image` | bleibt bei Bubble — Bild bzw. Farbverlauf, keine Themefarbe |

Die vier Knopfflächen auf einen Namen zu legen ist Absicht: Bubble 3.x hat die
Variablen je Kartentyp ohnehin durch `card-type-*` ersetzt (siehe CLAUDE.md,
„Bubble Card: 61 Felder raus"). Wer sie je Typ trennen will, nimmt dieselbe Rolle
in anderer Lautstärke — `quiet` für ruhend, `normal` für hervorgehoben.

### Zustände und Akzente (14)

| Bubble | Ziel |
|---|---|
| `accent-color`, `button-accent-color`, `event-accent-color`, `select-list-item-accent-color` | `var(--ha-color-fill-primary-normal-resting)` |
| `slider-fill-color` | `var(--ha-color-fill-primary-loud-resting)` |
| `light-color` | `var(--ha-color-orange-60)` |
| `color-cursor-indicator-color` | `var(--ha-color-on-surface-default)` |
| `state-climate-heat-color` | `var(--ha-color-orange-60)` |
| `state-climate-cool-color` | `var(--light-blue-color)` ¹ |
| `state-climate-auto-color`, `state-climate-heat-cool-color` | `var(--ha-color-fill-primary-normal-resting)` |
| `state-climate-dry-color` | `var(--amber-color)` ¹ |
| `state-climate-fan-only-color` | `var(--ha-color-fill-neutral-normal-resting)` |

¹ siehe „Die Farbtonlücke" — für Kühlen und Trocknen gibt es auf der neuen Ebene
keinen passenden Ton.

### Symbol und Schrift (3)

| Bubble | Ziel |
|---|---|
| `icon-color` | `var(--ha-color-on-surface-default)` |
| `media-player-play-pause-icon-color` | `var(--ha-color-on-primary-normal)` |
| `sub-button-dark-text-color` | `var(--ha-color-text-primary-inverted)` |

### Kanten und Schatten (6)

| Bubble | Ziel |
|---|---|
| `card-type-border`, `pop-up-border` | `var(--ha-border-width-sm) solid var(--ha-color-border-neutral-quiet)` |
| `pop-up-close-button-border`, `select-border` | dasselbe |
| `card-type-box-shadow` | `var(--ha-box-shadow-m)` |
| `footer-box-shadow` | `var(--ha-box-shadow-l)` |

### Rundungen (16)

Alle sechzehn auf drei Stufen, statt sechzehn Einzelwerte:

    border-radius, card-type-border-radius, pop-up-border-radius,
    pop-up-content-border-radius, calendar-border-radius,
    media-player-border-radius, horizontal-buttons-stack-border-radius
        → var(--ha-border-radius-xl)        Karten und Pop-ups

    button-border-radius, select-button-border-radius, select-list-border-radius,
    sub-button-border-radius, cover-buttons-border-radius,
    media-player-buttons-border-radius, sub-slider-border-radius
        → var(--ha-border-radius-lg)        Knöpfe und Schieber

    button-icon-border-radius, card-type-icon-border-radius
        → var(--ha-border-radius-pill)      Symbolkacheln

### Maße (13)

`sub-button-height` → `var(--ha-space-8)`, `sub-slider-height` → `var(--ha-space-10)`,
`pop-up-gap`/`pop-up-header-gap` → `var(--ha-space-3)`,
`pop-up-bottom-padding` → `var(--ha-space-4)`,
`sub-button-highlight-font-size` → `var(--ha-font-size-s)`.
Die übrigen (`calendar-height`, `calendar-mask-size`, `footer-width`,
`pop-up-available-height`, `pop-up-header-gap-reserve`,
`pop-up-visible-bottom-padding`, `select-list-width`) sind Geometrie einzelner
Bauteile und bleiben bei Bubble.

### Was nicht zugewiesen wird (23)

Die `rest`-Gruppe ist keine Gestaltung: Masken und Deckkraft der Pop-up-Ränder
(`pop-up-mask-*`, `color-cursor-indicator-*`), Ausrichtung
(`sub-button-justify-content`, `content-inline-start`), Sicherheitsabstände
(`pop-up-safe-area-top`, `pop-up-extra-bottom-space`). Einzige Ausnahme:
`backdrop-filter` → `var(--ha-card-backdrop-filter)`, damit die Weichzeichnung
aus einer Hand kommt.

## Mushroom: 109 Namen

### Die 59 Tripel

Zwei Familien, und sie werden unterschiedlich behandelt.

**30 Palettentripel** (`mush-rgb-red`, `-blue`, `-teal`, `-amber`, …) — Mushrooms
eigene Farbliste. Ziel ist das abgeleitete Tripel der Palette:

    mush-rgb-red      →  var(--rgb-ha-color-red-60)
    mush-rgb-green    →  var(--rgb-ha-color-green-60)
    mush-rgb-orange   →  var(--rgb-ha-color-orange-60)
    mush-rgb-grey     →  var(--rgb-ha-color-neutral-60)
    mush-rgb-blue     →  var(--rgb-ha-color-primary-60)
    mush-rgb-black    →  var(--rgb-ha-color-black)
    mush-rgb-white    →  var(--rgb-ha-color-white)
    mush-rgb-disabled →  var(--rgb-ha-color-neutral-70)

Dazu die vier semantischen, die bei Mushroom in derselben Familie liegen:

    mush-rgb-info     →  var(--rgb-ha-color-primary-60)
    mush-rgb-success  →  var(--rgb-ha-color-green-60)
    mush-rgb-warning  →  var(--rgb-ha-color-orange-60)
    mush-rgb-danger   →  var(--rgb-ha-color-red-60)

Die restlichen 18 Töne haben auf der neuen Ebene kein Gegenstück — siehe unten.

**29 Zustandstripel** (`mush-rgb-state-light`, `-climate-heat`, `-person-home`, …).
Hier lohnt kein eigener Wert: Mushroom verkettet sie selbst auf seine Palette
(`state-light` → `rgb-orange`, `state-person-home` → `rgb-success`). Wer die
Palette zuweist, hat die Zustände mit erledigt. Nur wo ein Zustand bewusst anders
aussehen soll, wird er einzeln gesetzt.

> **Voraussetzung, ohne die nichts davon wirkt:** Die Palettenfelder müssen auf der
> **flachen Ebene** der Theme stehen, als `#hex`. Nur dann gibt es
> `--rgb-ha-color-*` in beiden Modi. Stehen sie unter `modes.light`, sind Mushrooms
> Farben im Dunkelmodus leer — ohne Fehlermeldung.

**Nachgemessen, nicht gehofft.** Mit `ha_blanko` in der korrigierten Fassung als
aktiver Theme stehen auf `html`:

    abgeleitete Tripel insgesamt    182     (mit der Standard-Theme: 50)
    davon --rgb-ha-color-*           58     die ganze Palette plus Schwarz/Weiss
    davon --rgb-<ton>-color          19     die klassischen Toene

    --rgb-ha-color-red-60       243,103,108
    --rgb-ha-color-orange-60    243,109,0
    --rgb-ha-color-primary-60   55,200,253
    --rgb-teal-color            0,150,136

Gegenprobe im Browser, nach jedem Themewechsel:

```js
getComputedStyle(document.documentElement).getPropertyValue("--rgb-ha-color-red-60")
// muss ein Tripel sein, nicht leer — und zwar in beiden Modi
```

### Die 50 übrigen

| Gruppe | Anzahl | Ziel |
|---|---|---|
| Schrift | 18 | `card-primary-font-size` → `var(--ha-font-size-l)`, `-weight` → `var(--ha-font-weight-medium)`, `-line-height` → `var(--ha-line-height-condensed)`; `card-secondary-*`/`chip-*` eine Stufe kleiner (`-m`/`-s`), `title-*` eine größer (`-xl`/`-heading`) |
| Maße | 16 | `icon-size`/`control-icon-size` → `var(--ha-space-6)`, `badge-size` → `var(--ha-space-4)`, `chip-height`/`control-height` → `var(--ha-space-10)`, `spacing`/`chip-spacing`/`control-spacing` → `var(--ha-space-3)`, `chip-padding`/`title-padding` → `var(--ha-space-2)`, `chip-border-width` → `var(--ha-border-width-sm)` |
| Rundung | 5 | `icon-border-radius`/`badge-border-radius`/`chip-avatar-border-radius` → `var(--ha-border-radius-circle)`, `chip-border-radius`/`control-border-radius` → `var(--ha-border-radius-pill)` |
| Farbe | 5 | `title-color`/`card-primary-color` → `var(--ha-color-text-primary)`, `subtitle-color`/`card-secondary-color` → `var(--ha-color-text-secondary)`, `chip-border-color` → `var(--ha-color-border-neutral-quiet)` |
| Schatten | 1 | `chip-box-shadow` → `var(--ha-box-shadow-s)` |
| Rest | 5 | `chip-background` → `var(--ha-color-fill-neutral-quiet-resting)`; `control-button-ratio`, `input-number-debounce`, `layout-align`, `slider-threshold` sind Verhalten, keine Gestaltung |

**Achtung bei der Rundung:** Es muss `--mush-icon-border-radius` sein, nicht
`--icon-border-radius`. Mushroom leitet letzteres selbst weiter unten im Baum ab
(`--icon-border-radius: var(--mush-icon-border-radius, 50%)`); ein Wert von außen
trägt dort nur mit `!important`. Steht so auch in CLAUDE.md.

## Die Farbtonlücke

HAs neue Ebene hat **fünf** Farbtöne: `primary`, `neutral`, `red`, `green`,
`orange`, dazu Schwarz und Weiß. Mushrooms Palette will **zwanzig**, und Bubbles
Klimazustände brauchen Blau und Bernstein.

Fehlend: yellow, amber, lime, light-green, teal, cyan, light-blue, indigo, purple,
deep-purple, pink, brown, blue-grey, deep-orange, light-grey, dark-grey.

Zwei Wege, und die Entscheidung gehört in den Umbau:

**a) Auf die fünf Töne abbilden.** `teal` → `green-50`, `cyan` → `primary-60`,
`purple` → `primary-40`, `amber`/`yellow` → `orange-70`. Ehrlich, einfach, und
verliert die Unterscheidung: eine lila und eine blaue Lampe sehen danach gleich
aus. Für ein Theme, das aus einer Akzentfarbe gebaut wird, ist das genau richtig.

**b) Die klassischen Töne behalten.** HA führt alle 22 weiter — am 12.10.2026 im
inline-Stylesheet auf `html` gemessen, nicht leer:

    red #f44336      pink #e91e63      purple #926bc7    deep-purple #6e41ab
    indigo #3f51b5   blue #2196f3      light-blue #03a9f4  cyan #00bcd4
    teal #009688     green #4caf50     light-green #8bc34a lime #cddc39
    yellow #ffeb3b   amber #ffc107     orange #ff9800     deep-orange #ff6f22
    brown #795548    grey #9e9e9e      blue-grey #607d8b
    black #000       white #fff        disabled #bdbdbd

Als Theme-Feld geschrieben (`teal-color: #009688`) leiten sie ihr Tripel selbst ab
— `--rgb-teal-color` — und füttern Mushroom genauso gut. Gemessen: mit dem
Tonblock aus `docs/beispiele/zuordnung-bubble-mushroom.yaml` stehen **alle 19**
`--rgb-<ton>-color` auf `html`, keines leer.

Das ist auch der Grund, weshalb der Tonblock in jener Datei ganz oben steht und
nicht nur Zierde ist: ohne ihn sind `--rgb-cyan-color` und Geschwister leer, und
vierzehn Mushroom-Töne fallen aus — ohne Fehlermeldung, weil ein ungültiges
`rgb(var(…))` die Eigenschaft einfach verwerfen lässt.

**Empfehlung:** beides, in zwei Ebenen der Oberfläche. Die fünf Rollen sind das,
was man einstellt; die zwanzig Töne sind das, was Zustandsfarben brauchen, und
bleiben als eigene Gruppe erreichbar. Der neue Generator darf die klassischen Töne
also nicht als Altlast wegwerfen — sie sind die einzige Quelle für Farbvielfalt,
und das ist der Grund, weshalb ein vollständiger harter Cut auf die neue Ebene
nicht aufgeht.

## Was daraus für den neuen Generator folgt

1. **Ein Feld statt zwei Werten.** Weil Bubble und Mushroom auf
   `var(--ha-color-…)` zeigen, gilt **ein** Eintrag für Hell und Dunkel zugleich —
   und zwar auf der flachen Ebene, ohne UIX und ohne Verdopplung je Modus. Das ist
   der eigentliche Gewinn, nicht die Zahl der Felder: 140 Fremdfelder, die heute
   zweimal mit festen Werten dastehen, werden zu 140 Verweisen, die sich von
   selbst mitändern.
2. **Die Palette gehört flach.** Nicht unter `modes`. Sonst fehlen die Tripel im
   Dunkelmodus, stumm. `ha_blanko.yaml` ist in diesem Punkt zu korrigieren.
3. **Tripel brauchen `#`.** Wer in der Oberfläche `rgba()` zulässt, nimmt dem
   Nutzer unbemerkt Mushrooms Farben. Entweder Hex erzwingen oder beim Speichern
   umrechnen.
4. **Sechs Rollen, drei Lautstärken, drei Zustände.** Das ist das Gerüst für die
   Oberfläche. „Nur ändern, was man sieht" heißt hier: eine Rolle wählen, nicht
   51 Füllfarben.
5. **Mushrooms Zustände kommen gratis.** 29 der 59 Tripel muss niemand anfassen.

## Nachmessen

Die Rohdaten liegen im `localStorage` der Instanz unter `hatg-zuordnung-roh`
(`{bubble, bubbleSetzt, mush, mushSetzt}`). Neu erheben, falls Bubble oder
Mushroom aktualisiert wurden:

```js
const hol = async (p, re) => {
  const t = await (await fetch(p)).text();
  const liest = {}; let m;
  const r = new RegExp("var\\(\\s*--(" + re + "[a-z0-9-]*)\\s*(?:,([^)]*))?\\)", "g");
  while ((m = r.exec(t))) liest[m[1]] = (m[2] || "").trim();
  const setzt = [...new Set((t.match(new RegExp("--" + re + "[a-z0-9-]*\\s*:", "g")) || [])
    .map(s => s.replace(/\s*:$/, "")))];
  return { liest, setzt };
};
const b = await hol("/hacsfiles/Bubble-Card/bubble-card.js", "bubble-");
const m = await hol("/hacsfiles/lovelace-mushroom/mushroom.js", "mush-");
localStorage.setItem("hatg-zuordnung-roh", JSON.stringify(
  { bubble: b.liest, bubbleSetzt: b.setzt, mush: m.liest, mushSetzt: m.setzt }));
```

Das Zielvokabular kommt aus den Stylesheets auf `html` — nicht aus `getComputedStyle`
allein, sonst fehlen die Namen, die gerade keinen Wert tragen:

```js
const n = new Set();
for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) {
  if (!r.style) continue;
  for (let i = 0; i < r.style.length; i++) if (r.style[i].startsWith("--ha-color-")) n.add(r.style[i]);
} } catch (e) {} }
[...n].sort();
```
