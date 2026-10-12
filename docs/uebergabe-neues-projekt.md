# Übergabe an den neuen Generator

Der neue Aufbau wird ein eigenes Repository, getrennt von HATG (entschieden am
12.10.2026). Was dabei **nicht** mitkommt, ist Code — das ist Absicht. Was
mitkommen muss, ist das hier: Regeln, die an Home Assistant hängen und nicht an
HATGs Quelltext. Jede einzelne ist einmal teuer bezahlt worden; die Kosten stehen
dabei, damit niemand sie für Kleinigkeiten hält.

Internes Arbeitspapier, deutsch. Die englische Fassung kommt, wenn daraus
Nutzerdokumentation wird.

## Die drei Dinge, die der neue Generator wirklich doppelt braucht

Nach der Messung vom 12.10.2026 (siehe `zuordnung-neue-ebene.md`) ist die Liste
kurz, weil die Zuordnung ohne UIX auskommt — gewöhnliche Theme-Felder genügen,
Variablen erben durch jede Shadow-Grenze.

1. **YAML schreiben.** Siehe „Der Backslash" unten. Das ist der gefährlichste
   Punkt im ganzen Papier.
2. **Theme lesen und schreiben.** Über die Websocket-API der eigenen Integration,
   wie `hatg/save_theme`: Server validiert mit PyYAML, bevor er schreibt.
3. **Import bestehender Themes** — nur falls gewünscht. Ohne Import entfällt die
   komplette Aufräum- und Auflösungsmaschinerie, also der mit Abstand größte und
   fehleranfälligste Teil von HATG.

**Nicht gebraucht, solange es bei Rollen und Lautstärken bleibt:** Vorlagen,
Marker, Stilziele, `-yaml`-Felder, Shadow-DOM-Pfade. Das ist der Grund, weshalb
ein eigenes Projekt tragbar ist.

## Der Backslash — der schwerste Ausfall, den so ein Werkzeug auslösen kann

In einem doppelt gequoteten YAML-Skalar ist der **Backslash** das Fluchtzeichen.
Er muss **vor** dem Anführungszeichen verdoppelt werden, sonst entsteht eine
ungültige Fluchtfolge:

    Eingabe   uix-card: 'ha-card::before { content: "\201C"; }'
    falsch    uix-card: "ha-card::before { content: \"\201C\"; }"   -> ScannerError

`\2` ist keine gültige Folge. Ein Wert, der auf `\` endet, verschluckt zusätzlich
das Folgefeld.

**Warum das so wehtut:** Wer `themes: !include_dir_merge_named themes` in der
`configuration.yaml` hat — der übliche Weg —, bekommt beim nächsten Start den
**Wiederherstellungsmodus**. Nicht ein Feld fällt aus, sondern Home Assistant.

**Gegenprobe gehört in die CI:** mit PyYAML, also mit dem Parser, den HA
benutzt. Ein eigener Parser liest beides klaglos zurück und sagt nichts.

## Nur Felder schreiben, die jemand liest

Keine eigenen Hilfsfelder. HATG hatte `hatg-glas-fuellung` und Geschwister; beim
Abschalten blieben Verweise wie `ha-card-background: var(--hatg-glas-fuellung)`
stehen und liefen ins Leere, sobald die Felder fehlten. Seit v1.3.0b7 gibt es sie
nicht mehr.

Dasselbe gilt für **Werte**: Eine Bildadresse, die nur die eigene Integration
ausliefert, macht die Theme unübertragbar. Wer sie weitergibt, beim Empfänger
bleibt der Hintergrund leer — ohne Fehlermeldung, weil ein fehlendes Bild in CSS
einfach nichts tut. Bilder gehören nach `config/www/…` und kommen unter `/local/…`
von HA selbst.

## Das Versprechen heißt „eine ganz normale Theme-Datei"

Und es gilt für Feldnamen *und* Werte. Das ist die Zeile, an der sich jede
Entscheidung messen lässt.

## Flach, light, dark — und warum das keine Kosmetik ist

`modes.light` gilt **nur** im Hellmodus. HA mischt so:

```js
const { modes, ...basis } = themes.themes[name];
regeln = { ...regeln, ...basis };
if (modes) regeln = { ...regeln, ...(dunkel ? modes.dark : modes.light) };
```

Ein Feld, das nur unter `light:` steht, **fehlt im Dunkeln**. Im Dunkelmodus
startet außerdem jede Theme auf HAs eigenen 143 Dunkelwerten
(`{...darkSemanticVariables, ...darkColorVariables}`) — man muss den Dunkelmodus
also nicht beschreiben, nur das Abweichende.

**Die Einteilung ist ohne Raten entscheidbar:** „steht nur im Hellblock" heißt
genau „kommt in HAs 143 Dunkelwerten nicht vor", also modusunabhängig — gehört
nach oben, auf die flache Ebene.

Was wirklich je Modus verschieden ist, sind 27 Felder: Flächen
(`card-background-color`, `primary-background-color`, `secondary-background-color`,
`clear-background-color`), `disabled-color`, `disabled-text-color`,
`divider-color`, `outline-color`, `outline-hover-color`, `shadow-color`,
`scrollbar-thumb-color`, `energy-grid-return-color`, die elf alten `input-*` und
`ha-box-shadow-s/m/l`. Alles andere ist in beiden Modi gleich.

## Tripel entstehen nur aus Werten mit `#`

Home Assistant leitet aus jedem Theme-Feld ein `--rgb-<name>` ab, und zwar mit
genau einem Filter (`src/common/dom/apply_themes_on_element.ts`):

```js
if (!value.startsWith("#")) continue;        // der einzige Filter
if (combinedTheme[`rgb-${key}`] !== undefined) continue;   // Theme bringt eigenes mit
styles[`--rgb-${key}`] = hex2rgb(value).join(",");
```

Kein Namensfilter — jedes Feld, auch `ha-*`. Drei, vier, sechs und acht Stellen
gehen alle (culori normalisiert, das Alpha fällt weg).

**`rgba(…)` und benannte Farben ergeben kein Tripel.** Wer in der Oberfläche
`rgba()` zulässt, nimmt dem Nutzer unbemerkt Mushrooms Farben — Mushroom baut
seine Zustandsfarben aus genau diesen Tripeln. Entweder Hex erzwingen oder beim
Speichern umrechnen.

## Idempotenz ist die Prüfung, die gefehlt hat

Import → Export muss beim **zweiten** Mal dasselbe liefern wie beim ersten. Nicht
„Pass 0 == Pass 1" — der erste Durchlauf darf normieren. Ab dem zweiten darf sich
nichts mehr ändern.

Fast jede Prüfung in HATG fragte nur „ist etwas verloren gegangen?", keine „ist
etwas dazugekommen?". Ein Fehler lief damit jahrelang mit: pro Durchlauf 1027
Zeichen mehr, eine Variable 1x → 2x → 3x → 4x → 5x. Die einzige Spur war eine
Berichtszeile, die nach Normalbetrieb klang.

## Prüfe nie gegen dasselbe Orakel, das der Code benutzt

Der teuerste Methodenfehler in HATGs Geschichte. Neun Tests haben einen Fehler
nicht gesehen, weil ihr Orakel für „bekanntes Feld" dieselbe Konstante war, die
der Code benutzt. Das unabhängige Orakel musste erst aus den Quellen von HA und
Bubble Card geholt werden — und zeigte dann, dass der Import elf von zwölf echten
HA-Variablen löschte.

Dazu gehört: **jeder Test braucht eine Gegenprobe.** „Ballast fliegt" sagt nichts,
solange niemand prüft, ob **nur** Ballast fliegt. Alle Kandidaten hießen
`liquid-*`, also fiel es nicht auf.

Und: ein Test mit **null** Prüfungen darf nicht als bestanden gelten. In HATG hat
sich eine Testdatei damit selbst stillgelegt, ohne rot zu werden.

## Gemessen, nicht gelesen

- **Quelltext allein beweist nichts.** Ein Ausweichwert aus den Quellen ist nur
  dann eine Vorgabe, wenn er der **einzige** ist und die Variable nirgends blank
  gelesen wird. Sonst ist es ein Sonderfall, und ein Wert in der Vorgabe nagelt
  jeden Zusammenhang darauf fest. So öffneten einmal alle Dialoge in voller
  Fensterhöhe (`ha-dialog-min-height: 100vh`, ein Sonderfall für
  `type="standard"`).
- **Ein Feld mit leerer Vorgabe wird gar nicht geschrieben** — einstellbar bleibt
  es trotzdem. Das ist der richtige Umgang mit allem, was je Zusammenhang anders
  belegt ist.
- **GitHubs Code-Suche taugt dafür nicht.** Bei zeichengleicher Anfrage einmal
  drei Treffer, einmal null. Dateien herunterladen und selbst durchsuchen.
- **Die Seite muss gemalt sein.** In einem Hintergrund-Tab baut ein
  Sections-Dashboard nicht auf, und dann ist jede DOM-Messung wertlos. Erkennbar
  daran, dass *alles* leer aussieht, auch das Funktionierende.
- **Variablen erben durch jede Shadow-Grenze, CSS-Regeln nicht.** Am 12.10.2026
  nachgemessen: ein Wert auf `html` kam zwölf Shadow-Ebenen tief an. Wo eine
  Variable reicht, braucht es keinen Pfad — und das ist fast überall.
- **Kurze und lange Namensform:** Liest ein Bauteil `--tile-info-gap` *und*
  `--ha-tile-info-gap`, ist nur die `ha-`Form ein Haken. Die kurze setzt das
  Bauteil in seinem eigenen `:host`, und dagegen verliert ein geerbter
  Theme-Wert. Erkennungszeichen: steht der Name als `@cssprop` im
  Kopfkommentar, ist er öffentlich.

## Die Oberfläche: sechs Rollen, drei Lautstärken, drei Zustände

HAs eigenes Farbdenken, und damit das Gerüst für den neuen Generator:

| | |
|---|---|
| Rollen | `primary`, `neutral`, `success`, `warning`, `danger`, `disabled` |
| Lautstärken | `quiet`, `normal`, `loud` |
| Zustände | `resting`, `hover`, `active` |

Die Abstufung muss man nicht erfinden, HA rechnet sie vor. Am 12.10.2026 aus
`src/resources/theme/color/semantic.globals.ts` gelesen:

    quiet    hell  95 -> 90 -> 95        dunkel  05 -> 10 -> 05
    normal   hell  90 -> 80 -> 90        dunkel  10 -> 20 -> 10

`quiet` und `normal` sind für **jede** Rolle dieselben Stufen; nur `loud` hängt
an der Rolle (hell: primary/neutral 40, danger/success 50, warning 70; dunkel:
neutral 60, die farbigen 40). Überfahren ist eine Stufe kräftiger — im Hellen
abwärts in der Zahl, im Dunkeln aufwärts. Die Schrift darauf folgt mechanisch:
`loud` → Weiß, `normal` → Stufe 40/60, `quiet` → 50/70.

**`active` ist gleich `resting`, und das ist Absicht.** Die Rückmeldung beim
Drücken kommt aus der Klick-Welle, nicht aus der Fläche. Eine frühere Notiz hielt
das für einen Messfehler — die Messung war richtig.

**`fill-primary-loud-*` fehlt im Dunkelblock, weil es dort nichts zu ändern
gibt:** hell steht es auf `primary-40`, und die Palette ist modusunabhängig. HAs
Dunkelblock ist ein Minimal-Diff — ein fehlender Eintrag ist eine Aussage, kein
Loch.

Aus **15 Entscheidungen** (5 Rollen × 3 Lautstärken) werden 51 Füllfarben und 19
Schriftfarben gerechnet. Genau das heißt „nur ändern, was man sieht".

## Die Farbvielfalt kommt nicht aus der neuen Ebene

Sie hat fünf Töne (primary, neutral, red, green, orange) plus Schwarz und Weiß.
Mushroom will zwanzig, Bubbles Klimazustände brauchen Blau und Bernstein. Die 22
klassischen Töne (`--red-color` … `--blue-grey-color`) leben weiter — am
12.10.2026 im inline-Stylesheet auf `html` gemessen, keiner leer — und leiten als
Theme-Feld ihr Tripel selbst ab.

**Ein vollständiger harter Cut auf die neue Ebene geht deshalb nicht.** Die
klassischen Töne gehören in den neuen Generator, als eigene Gruppe für
Zustandsfarben.

## Zwei Werkzeuge, eine Theme-Datei

Schickt man eine Theme des neuen Werkzeugs durch HATGs Import, kommen dessen
Vorgaben dazu: am 12.10.2026 gemessen 140 → 358 Bubble- und Mushroom-Felder.
**Kaputt wird nichts** — alle `var()`-Verweise überleben wörtlich, und von 57
Feldern, die HATG kennt, wurde keines überschrieben. Die Datei wird nur fett und
zweideutig.

Als Regel reicht: **eine Theme gehört einem Werkzeug.** Beide Panels können
nebeneinander in der Seitenleiste stehen, solange sie verschiedene Dateien
bearbeiten.

## Praktisches zur neuen Integration

- **Eigene Domain.** `hatg` ist belegt. Beide Integrationen lassen sich nur
  nebeneinander installieren, wenn die neue eine andere Domain trägt. Die Domain
  steckt in `manifest.json`, `const.py`, der `panel_custom`-Registrierung und in
  HACS — sie nachträglich zu ändern kostet die Konfigurationseinträge der Nutzer.
  Also einmal richtig wählen.
- **Die Versionsnummer steht an mehreren Stellen** und muss überall gleich sein.
  In HATG sind es vier (`manifest.json`, `VERSION` und der Cache-Buster in
  `const.py`, `HATG_VERSION` im Panel). Ein Test, der sie vergleicht, gehört von
  Tag eins dazu.
- **Der Cache-Buster muss am Inhalt hängen,** nicht nur an der Version. HA
  liefert statische Panel-Dateien mit `max-age=2678400` aus. Wer die Datei
  innerhalb derselben Version austauscht — beim Entwickeln die Regel —, bekommt
  31 Tage lang den alten Stand, während die Kopfzeile die neue Version zeigt. In
  HATG hängt eine kurze Prüfsumme über die Panel-Datei mit dran.
- **`hassfest` und `hacs` laufen nur auf `main` und bei PRs gegen `main`.** Eine
  Beta aus einem Branch bekommt keinen hassfest-Lauf. In HATG laufen `ci` und
  `validate` deshalb auf allen Branches, und ein zweiter Job vergleicht bei einer
  Marke die Version im Manifest mit dem Namen der Marke — sonst liefert HACS die
  neue Version mit altem Inhalt aus.
- **Ein Release-Tor von Anfang an** (`werkzeuge/vor-release.sh` als Vorbild).
  Vier Stellen darin konnten einmal grün melden, ohne geprüft zu haben: `git
  status` an der Ausgabe statt am Rückgabewert geprüft, ein bedingungsloses `ok`
  nach einem Lesefehler, ein Test mit null Prüfungen, und ein zeichengenauer
  Vergleich von Marke und Version. Rückgabewerte prüfen, nicht Ausgaben.

## Was aus HATG übernehmbar ist, ohne es abzuschreiben

- `werkzeuge/kopflos.js` — Panel in node bauen, mit schmalem DOM-Ersatz. Macht
  den Durchlauf Import → Export ohne Browser prüfbar. Das Muster lohnt, der Code
  nicht.
- `werkzeuge/theme-pruefen.js` — liest eine fremde Theme read-only und meldet
  offene Klammern, doppelte Schlüssel, ungültige Werte.
- `werkzeuge/live-messung.js` — läuft in der Browser-Konsole und sagt, ob eine
  Messung überhaupt etwas wert ist.
- `docs/beispiele/ha-blanko.yaml` — HA 2026.10 ohne Altlasten, drei Ebenen
  richtig aufgeteilt. Der natürliche Startpunkt für den neuen Generator.
- `docs/beispiele/zuordnung-bubble-mushroom.yaml` — Bubble und Mushroom auf die
  neue Ebene, 159 Felder, lauffähig.
