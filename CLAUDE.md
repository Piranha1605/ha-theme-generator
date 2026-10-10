# HATG — Home Assistant Theme Generator

Grafisches Panel, das sich in die Seitenleiste von Home Assistant einklinkt und mit dem sich komplette Themes visuell bauen lassen — für Home Assistant, Bubble Card und Mushroom gleichzeitig, ohne YAML von Hand zu schreiben. Am Ende steht eine ganz normale Theme-Datei. Entwickelt von Enrico Fischer (GitHub `Piranha1605`).

Repository: https://github.com/Piranha1605/ha-theme-generator · MIT-Lizenz · Verteilung über HACS

## Aufbau

```
custom_components/hatg/
├── __init__.py           Einstiegspunkt der Integration
├── config_flow.py        Einrichtung über die Oberfläche
├── const.py              Konstanten
├── manifest.json         Domain hatg, aktuell v1.3.2, im Test 1.3.2
├── translations/         de.json und en.json
├── brand/                Icons für den HACS-Store
└── www/
    ├── hatg-panel.js     das eigentliche Panel, die Hauptdatei
    └── plugins/          Vorschaubilder der Vorlagen
.github/workflows/        ci, hacs, hassfest, validate
docs/screenshots/         Bildmaterial für die README
werkzeuge/                Prüfwerkzeuge, siehe werkzeuge/README.md
```

Es ist eine Home-Assistant-Custom-Component in Python, deren Oberfläche in einer einzelnen JavaScript-Datei steckt. `hatg-panel.js` ist die Datei, an der die meiste Arbeit anfällt.

Abhängigkeiten laut Manifest: `frontend`, `http`, `panel_custom`, `websocket_api`. Keine externen Python-Pakete.

Die Versionsnummer steht an vier Stellen und muss überall gleich sein: `manifest.json`, `VERSION` und der Cache-Buster in `FRONTEND_MODULE` in `const.py`, sowie `HATG_VERSION` ganz oben in `hatg-panel.js`.

**Der Cache-Buster hängt seit 1.3.2b6 zusätzlich am Inhalt.** `__init__.py` rechnet beim Start eine kurze Prüfsumme über `hatg-panel.js` und hängt sie an: `?v=1.3.2b6.fdc3d27d`. Grund: Home Assistant liefert `/hatg_static` mit `max-age=2678400` aus. Wer die Panel-Datei innerhalb derselben Version austauscht — beim Entwickeln die Regel, nicht die Ausnahme —, bekommt im Browser 31 Tage lang den alten Stand, während die Kopfzeile schon die neue Version zeigt. Am 2026-09-27 genau so passiert: drei verschiedene Builds gingen unter `?v=1.3.2b5` raus, im Browser blieb der erste. Beim Entwickeln reicht jetzt ein Neustart des Kerns, kein hartes Neuladen mehr.

## Funktionsumfang

- **Startseite** — Grundfarben, Basis-Einstellungen, Zustände, Hintergründe
- **Thematische Bereiche** — HA-Grundgerüst, Bubble Card mit Unterseiten, Mushroom, Button Card (nur ihre eigenen Variablen für Klick-Effekt, Ladeanzeige, Tooltip; gegen button-card v7.0.1 `src/styles.ts` geprüft)
- **Alle Felder** — Volltext- und Filtersuche über sämtliche 777 verifizierten Variablen
- **Verlauf für aktive Flächen** — im Glas-Bereich: zwei Farben, Richtung, Schriftfarbe; Block `verlauf-akzent` in `uix-card` und `uix-sidebar`. Horizon-Cards (frueher HA-Karten) lesen ihn seit Sammlung v2.6.1 über die gemeinsame Kette `--karten-gewaehlt`, `-vorn`, `-schatten` (Kurzform `background`), die Kante kommt aus `neumorph-tiefe`/`neumorph-hell`; HA-eigene Knöpfe nehmen keinen Verlauf an (nur Farbvariablen)
- **Code-Editor** — textbasierte Bearbeitung mit Syntax-Highlighting
- **Vorlagen** — vorgefertigte CSS-Effekte, eine Unterseite je Stilziel; feste Werte sind über `werte: [...]` einstellbar (im CSS `[[id]]`, im Theme zwischen `/*HATG:WERT:id*/…/*HATG:WERT*/`, nur im Vorlagenblock, keine Theme-Felder, bleiben beim Auffrischen)
- **Hintergrundbilder** — über die ganze Oberfläche, mit eigener Galerie; Hintergrund-Bewegung mit Schalter und Geschwindigkeitsstufe (`hintergrund-bewegung` in `uix-root` und `uix-drawer`, nur `transform`, Fläche 14 % größer, `max-width: none`)
- **HA Live** — Echtzeit-Vorschau auf dem eigenen Dashboard
- **Import und Export** — Theme-Verwaltung und Dateioperationen

## Keine eigenen Theme-Felder

HATG schreibt nur Felder, die Home Assistant, Bubble Card oder Mushroom selbst lesen. Eigene Hilfsfelder (`hatg-glas-fuellung`, `hatg-glas-blur` …) gibt es seit v1.3.0b7 nicht mehr: Beim Ausschalten des Glas-Pakets blieben Verweise wie `ha-card-background: var(--hatg-glas-fuellung)` stehen und liefen ins Leere, sobald die Felder fehlten.

- **Glaslook in HA-Feldern.** Die Glas-Regler schreiben direkt in `ha-card-background`, `ha-card-backdrop-filter`, `control-button-background-color`, `ha-dialog-surface-background`, `ha-dialog-surface-backdrop-filter`, `sidebar-background-color`, `app-header-background-color` und `app-header-backdrop-filter` und lesen von dort zurück. Bubble-Felder zeigen per `var(--ha-card-background)` bzw. `var(--control-button-background-color)` darauf. Welche Variablen HA liest, steht in `customElements.get(tag).elementStyles` – am 2026-09-16 für `ha-card`, `ha-badge`, `ha-dialog`, `ha-bottom-sheet`, `hui-root`, `ha-button`, `ha-control-button` geprüft.
- **Vorlagen lesen HA-Variablen.** Was HA nicht anbietet (kleine Weichzeichnung, Seitenleisten-Weichzeichnung, Icon- und Listenmaße), steht als fester Wert in der UIX-Zeile. Werte, die je Modus verschieden sind, gehören in HA-Felder: UIX-Zeilen gelten für Light und Dark zugleich, und `light-dark()` folgt dem Betriebssystem, weil HA kein `color-scheme` setzt.
- **Ausnahme `popup-custom-wallpaper`.** Die Pop-up-Vorlagen lesen es vor `lovelace-background`; es steht deshalb in der Feldliste (wie `background-style`), sonst löste der Import es als eigenes Hilfsfeld auf. Gesetzt wird es unter Hintergrund → Pop-up-Hintergrund.
- **Kein `--card-background-color` in Stilzielen überschreiben.** Home Assistant färbt damit auch Auswahlfelder und Menüs; halbtransparent sind sie unlesbar.
- **Glas-Paket aus** nimmt die Felder zurück: Weichzeichnung auf den Standard, gläserne Flächen deckend aus `card-background-color` abgeleitet oder auf den Standardwert.
- **Import, Autosave und Entwurf** lösen eigene Felder auf (`hatgLoeseEigeneFelderAuf`): `hatg-*` und unbekannte Felder, auf die per `var()` verwiesen wird – auch unter anderer Vorsilbe (`horizon-*`). In Theme-Feldern tritt je Modus der echte Wert ein oder ein Verweis aufs HA-Feld mit demselben Wert; in Stilzielen ein HA-Feld mit demselben Wert in beiden Modi, sonst der feste Wert oder der Ausweichwert. Was sich nicht eindeutig auflösen lässt, bleibt stehen und wird gemeldet.
- **Fremde Vorlagenmarken.** Umbenannte Kopien tragen die Marker unter anderer Vorsilbe (`/* HORIZON:UIX:glas-bubble:START */`). HATG erkennt Vorlagen nur an `HATG:` und hängte sie beim Einschalten ein zweites Mal an – am 2026-09-16 lagen so 23 Glas-Vorlagen doppelt im Theme. Import, Autosave und Entwurf setzen die Vorsilbe deshalb auf `HATG` zurück und lassen von doppelten Blöcken nur den letzten stehen (`hatgVereinheitlicheVorlagenMarken`). Eigene Felder, auf die nach dem Auffrischen der Vorlagen nichts mehr zeigt, fallen danach weg.

## UI eXtension statt card-mod

Seit v1.2.0 schreibt HATG `uix-*`-Felder statt `card-mod-*`. card-mod lädt seit HA 2026.8 die Theme-Abschnitte nicht mehr zuverlässig und wird nicht repariert (card-mod#606). Beim Import werden vorhandene `card-mod-*`-Blöcke angehoben. Wer das alte Format braucht, stellt es im Zahnrad-Menü zurück.

28 Stilziele, jeweils mit einer `-yaml`-Variante für Shadow-DOM-Pfade. Die Namen sind die Typnamen von UI eXtension und müssen zeichengenau stimmen.

**Ein `-yaml`-Feld verdeckt sein einfaches Feld vollständig.** UIX löst je Stilziel exklusiv auf: liegt `uix-<typ>-yaml` im Theme, wird `uix-<typ>` nie mehr gelesen. Beide nebeneinander zu schreiben lässt das einfache CSS spurlos verschwinden — die Theme-Datei sieht vollständig aus, im Browser kommt nichts an. Seit v1.3.0b1 legt die Ausgabe das einfache CSS deshalb als `"."`-Eintrag in dieselbe YAML-Karte, und der Import trennt es wieder heraus. Wer Themes von Hand bearbeitet oder die Ausgabe anfasst, muss diese Regel kennen.

**Eigenheiten, die in einer laufenden Instanz nachgemessen wurden — beim Ändern von Vorlagen unbedingt beachten:**

- UIX liefert sein CSS als `<uix-node uix-type="…">` mit einem `<style>` darin in den Shadow Root, **nicht** über `adoptedStyleSheets`. Wer am falschen Ort misst, hält jedes Ziel für leer.
- Gemessen wird erst, wenn die Seite wirklich gerendert ist. In einem Hintergrund-Tab baut ein Sections-Dashboard nicht auf; dann sind **alle** `uix-node` leer, auch die funktionierenden. Als Wachposten taugt: erst messen, wenn `drawer`, `sidebar` und `root` Regeln > 0 zeigen.
- **Karten füllen sich erst beim Scrollen.** Der Wachposten oben reicht für Karten nicht: `drawer`, `sidebar` und `root` stehen sofort, die `card`-Knoten dagegen entstehen leer und bekommen ihr CSS erst, wenn die Karte durch das Sichtfeld gegangen ist. Am 2026-09-26 gemessen: direkt nach dem Laden 0 von 17 Karten gefüllt, auch nach 21 Sekunden Warten unverändert 0 — nach einmal Scrollen nach unten und zurück sofort 17 von 17, jeweils mit den vollen 11 770 Zeichen. Wer ohne Scrollen misst, hält funktionierende Karten-Vorlagen für tot. Vor jeder Messung an `uix-card` also einmal durch die Ansicht scrollen.
- `uix-card`: Wo UIX seinen Knoten hängt, hängt vom Aufbau ab. Auf Dashboards liegt eine Karte direkt unter `hui-card` – dann patcht UIX das **Karten-Element** (etwa `hui-tile-card` oder eine eigene Karte), und der Stylesheet landet in dessen Shadow Root: `:host` ist das Karten-Element, `ha-card` die Karte darin. Nur wo keine `hui-card` darüber liegt, patcht UIX `ha-card` selbst; dort ist `:host` die `ha-card`, und ein Selektor `ha-card` trifft nichts. Vorlagen mit `:host, ha-card` bemalen Dashboard-Karten deshalb **doppelt** – Füllung, Glanz und Weichzeichnung liegen zweimal übereinander, der Glanz wirkt ausgewaschen. Gemessen am 2026-09-14 auf einer Sections-Ansicht: alle `uix-node` vom Typ `card` saßen im Shadow Root von `hui-error-card`, eigenen Karten und `bubble-card`, keiner an `ha-card`; UIX `src/patch/ha-card.ts` bricht ab, wenn die Karte unter `hui-card` liegt. `glas-ebene` schreibt deshalb `:host(ha-card), ha-card` – auf Dashboards trifft das nur die innere Karte, und der Glanz liegt einmal statt zweimal.
- Eine Bubble-Karte hat keinen `ha-card`-Vorfahren — sie hängt direkt in der Grid-Section. `uix-card` erreicht sie trotzdem, weil UIX seinen Knoten in `bubble-card` selbst einhängt. Was UIX' Diagnose `uix_style_path()` als "Closest UIX Parent" nennt, ist der nächste Vorfahr mit Konfigurationskontext und **keine** Aussage darüber, welches Stilziel das Element erreicht. Im Shadow Root von `bubble-card` liegt dagegen sehr wohl eine `ha-card`, die die Container umschließt – ein Selektor `ha-card` auf `uix-card` trifft also auch Bubble-Karten. Glasvorlagen nehmen sie mit `:host(.type-custom-bubble-card) ha-card` aus, weil `glas-bubble` dort schon zeichnet.
- Bubble Card setzt `ha-card.is-on` auch bei Zustandskarten (etwa `button_type: state` mit Sensorwert), die farblos bleiben. Ob eine Karte wirklich eingefärbt ist, zeigt nur das inline `opacity: 1` auf `.bubble-background` (sonst `0.5`). `.bubble-background` liegt in `div.bubble-button.bubble-wrapper`, nicht direkt im Container – der Selektor lautet deshalb `ha-card:has(.bubble-background[style*="opacity: 1"])`. Am 2026-09-14 an Druckerpatronen gemessen, die an `is-on` gehängt dunkle Schrift auf dunklem Glas bekamen.
- `ha-card` blendet Änderungen mit `transition: 0.3s ease-out` über. Direkt nach eingehängtem Test-CSS misst `getComputedStyle` Zwischenwerte (`blur(0px)`, alter Radius), und ein Screenshot zeigt den alten Stand. Vor dem Messen mindestens eine Sekunde warten.
- Bubble Card zeichnet Flächen, Rahmen und Schatten aus eigenen `--bubble-*`-Variablen. CSS-Regeln kommen nicht über Shadow-Grenzen, Variablen schon — Vorlagen für Bubble setzen deshalb Variablen statt Regeln.
- Ein `backdrop-filter` auf dem Host einer Karte macht ihn zum **Bezugsrahmen für `position: fixed`** (ebenso `filter`, `transform`, `will-change`, `contain`). Bubble-Pop-ups sind `fixed` und liegen im Shadow Root von `bubble-card`. Trägt der Host einen Filter, schrumpft das Pop-up auf dessen Größe – 0 × 0 –, landet außerhalb des Fensters, und nur die Kopfzeile schwebt über dem Dashboard. Vorlagen auf `uix-card` dürfen deshalb keinen Filter auf blankes `:host` legen: `glas-ebene` meidet den Wirt ganz, die ältere Einzelvorlage `glas-effekt` setzt ihn mit `:host(.type-custom-bubble-card) { backdrop-filter: none }` zurück; die Klasse setzt UIX. Sichtbar seit 1.3.0b1, weil `uix-card` vorher gar nicht ankam. Am 2026-09-14 gemessen: mit Filter Höhe 0, ohne Höhe 742.
- `ha-panel-config` hat keinen Shadow Root. `uix-config` nimmt darum keinen `:host`-Block an, nur die `-yaml`-Pfade wirken. Alles für die Einstellungsseiten läuft über Pfade oder über `uix-drawer`. (Im Theme steht dort ohnehin nur `uix-config-yaml`, kein einfaches `uix-config` — mit der Verdeckung oben hat dieser Punkt also nichts zu tun, er ist separat zu prüfen.) Das Stylesheet von `uix-drawer` liegt im Shadow Root von `ha-drawer`: Ein Element-Selektor wie `ha-button` trifft dort keinen Knopf der Einstellungsseiten, die liegen mehrere Shadow Roots tiefer. Was dort ankommen soll, muss als Variable auf `:host` stehen. Vorsicht beim Vererben: Eigene Karten lesen teils dieselben Variablen – `--control-button-background-color` färbt etwa die Mulden der HA-Karten und machte sie am 2026-09-14 blau.
- `uix-more-info`: UIX patcht nicht `ha-more-info-dialog`, sondern hängt die Styles an **`ha-adaptive-dialog`**. Pfade in `uix-more-info-yaml` brauchen deshalb ein führendes `$`: `"$ ha-dialog $"` für den Desktop-Dialog, `"$ ha-bottom-sheet $"` für Tablet und Handy – ohne das `$` greift nichts. Das `"."`-CSS landet im Shadow Root von `ha-more-info-dialog`, `:host` ist dort dieser Dialog. Die Dialogfläche färbt HA nur über `background-color`; ein Bild braucht eine Regel auf `wa-dialog::part(dialog)` beziehungsweise `wa-drawer::part(dialog)`. Am 2026-09-14 mit Markierungen an einer laufenden Instanz geprüft.
- **Gar kein `$$` in Pfaden — auch nicht in der Mitte.** `$$` ist die rekursive, Shadow-DOM-durchdringende Suche. Ein einziger Pfad damit legt **jedes** `-yaml`-Feld still, im ganzen Theme. Am 2026-09-26 mit UIX 8.3.1 an einer laufenden Instanz gemessen: solange `"ha-config-dashboard $$ ha-config-navigation-list $"` im Theme stand, waren alle 17 Karten-Knoten leer, kein Knoten in `ha-button` oder `ha-switch`, kein `more-info`-Knoten — obwohl `js-yaml` jede Karte fehlerfrei las und die Konsole nichts meldete. Nach dem Entfernen dieses einen Pfades füllten sich die Karten-Knoten sofort. Am 2026-09-20 war unter 8.2.0 noch notiert, `$$` sei in der Mitte in Ordnung; das gilt nicht. `HATG_EINSTELLUNGEN_PFADE` kommt deshalb ohne die Übersichtsseite der Einstellungen aus, und ein Test verbietet `$$` in jedem Vorlagenpfad.
- **Der Fehler ist stumm.** Weder Konsole noch YAML-Prüfung zeigen ihn. Ob die `-yaml`-Felder ankommen, sieht man nur an den `uix-node`-Elementen: Sind die einfachen Ziele (`drawer`, `sidebar`, `root`) gefüllt und die `card`-Knoten leer, stimmt etwas mit dem `-yaml`-Feld nicht.
- **Wie ein Pfadschritt auflöst.** Am 09.10.2026 im Auflöser der installierten `uix.js` 8.4.0 nachgelesen, nachdem die Messungen vom 2026-09-27 nur beschrieben, nicht erklärt waren. Der Tokenizer trennt an `$` **und an jedem Leerzeichen**; die Schleife darüber lautet sinngemäß:

```js
for (const s of tokens) {
  if (s === "$")  { r = r.map(l => l.shadowRoot); continue; }
  const a = r[0];                       // nur der ERSTE Treffer geht weiter
  if (!a) return null;
  r = a.querySelectorAll(s);
}
```

Daraus folgt alles Weitere:

  - **Jedes Wort ist ein eigener Schritt.** `ha-card ha-icon-button $` ist kein CSS-Nachfahrenselektor, sondern: alle `ha-card` suchen, **die erste** nehmen, darin alle `ha-icon-button` suchen, in deren Shadow Root steigen. Wo mehrere Treffer zählen sollen, gehört das Element in den **letzten** Schritt — `ha-icon-button $` erreicht alle, `ha-card ha-icon-button $` nur die der ersten Karte.
  - **Gesucht wird mit `querySelectorAll`**, also unter allen Nachfahren im selben Baum, nicht nur unter den direkten Kindern. Die ältere Notiz „der erste Teil muss direktes Kind sein" beschrieb eine Beobachtung, nicht den Code.
  - Ein `$` steigt in den **Shadow Root** ab. Liegt das Element im Licht-DOM, ist das ein Schritt zu viel: `hui-generic-entity-row $ ha-entity-toggle $` traf nichts, `hui-generic-entity-row ha-entity-toggle $` sofort beide Zeilenschalter.
  - Ein Schritt darf jeden Selektor tragen, den `querySelectorAll` kennt — `:not(uix-node,style)` etwa trifft auf `ha-panel-config` genau das Wurzelelement der gerade offenen Seite, ohne dass man seinen Namen kennen muss.

  **Offen geblieben:** Nach diesem Code hätte `ha-config-dashboard $ ha-config-navigation $` am 2026-09-27 treffen müssen, es traf aber nichts, während `ha-config-dashboard $ ha-top-app-bar-fixed ha-config-navigation $` alle drei Karten traf. Der wahrscheinliche Grund ist Zeit: Der Auflöser wartet je Schritt nur auf das Update des Schrittelements, und der zusätzliche Schritt verschafft dem Baum eine Runde mehr. Wer einen Pfad baut, der nichts trifft, obwohl der Code ihn hergibt, probiert deshalb einen Zwischenschritt mehr.

- **Symbolbehälter haben überall eine Rundungs-Variable.** Am 2026-09-27 an einer laufenden Instanz aus `elementStyles` gelesen: `ha-tile-icon` nimmt `--ha-tile-icon-border-radius` (Vorgabe Pille), `state-badge` nimmt `--state-badge-border-radius` (Vorgabe 50 %), `mushroom-shape-icon` nimmt `--mush-icon-border-radius` (Vorgabe 50 %). Für die Kachelform braucht es deshalb keinen Pfad — Variablen erben durch jede Shadow-Grenze, ein `:host`-Block auf `uix-card` erreicht Kacheln, Mushroom, Zeilen, Glance und Picture-Elements zugleich. **Bei Mushroom muss es `--mush-icon-border-radius` sein**, nicht `--icon-border-radius`: Mushroom setzt letzteres selbst weiter unten im Baum (`--icon-border-radius: var(--mush-icon-border-radius, 50%)`), ein Wert von außen trägt dort nur mit `!important`. UIX' Regeln verlieren generell gegen gleich spezifische Regeln des Elements selbst - warum, steht im nächsten Punkt.
- **`state-badge` bringt keine Fläche mit.** Der Wirt ist 40 × 40 und durchsichtig, die Zustandsfarbe steht **inline am inneren `ha-state-icon`**, nicht am Wirt (der trägt immer `--state-inactive-color`). Eine Tönung aus `currentColor` am Wirt wäre bei jedem Zustand grau — die Kachel gehört deshalb ans `ha-state-icon` darin, erreichbar über einen Pfad. Die Wege dorthin: `uix-row` → `hui-generic-entity-row $ div.row state-badge $`, `uix-glance` → `state-badge $` (UIX hängt je Eintrag an `div.entity`), `uix-element` → `state-badge $`. Die Symbolfarbe lässt sich dort nicht überschreiben, weil Home Assistant sie inline setzt.
- **Bubble nimmt Verläufe nur über Regeln, nicht über Variablen.** `--bubble-*` sind Farbvariablen; ein Verlauf passt dort nicht hinein. `glas-bubble` schrieb deshalb `background-image: none !important` auf die Container — und räumte damit den Verlauf für ruhende Flächen ab, den HA-, Mushroom- und Horizon-Karten bekamen. Seit 1.3.2b4 steht dort `var(--verlauf-inaktiv, none)` und auf der Zustandsschicht `var(--verlauf-akzent, none)`; ohne gesetzten Verlauf fällt beides auf `none` zurück. Die Ausnahme für Separatoren behält `none`, sonst bekämen Überschriftenzeilen eine Kachelfläche.
- **UIX verliert jeden Gleichstand - `adoptedStyleSheets` kommen zuletzt.** Ein Shadow Root wendet seine `<style>`-Knoten an und **danach** seine `adoptedStyleSheets`. Lit legt die Styles eines Bauteils genau dort ab; UIX spritzt dagegen ein `<style>` ein. Bei gleicher Spezifität gewinnt deshalb **immer das Bauteil**, egal an welcher Stelle im Shadow Root der Knoten hängt. Am 09.10.2026 an einem Icon-Knopf gegengeprüft: `ha-button::after { border-radius: 9px }` blieb wirkungslos, dieselbe Zeile mit `!important` setzte sich durch. Wer aus einer Vorlage heraus etwas überschreibt, das das Bauteil selbst setzt, braucht `!important` oder mehr Spezifität. Was das Bauteil **nicht** setzt, kommt ohne weiteres an.
- **Der runde Hintergrund unter einem Icon-Knopf ist doch erreichbar - mit `!important`.** (Korrigiert am 09.10.2026; bis dahin stand hier das Gegenteil.) `ha-icon-button` schreibt ihn in sein eigenes Stylesheet: `ha-button::after { background-color: currentColor; border-radius: 50%; opacity: 0 }`, dazu `:host(:hover:not([disabled])) ha-button::after { opacity: .1 }`. Eine Variable gibt es dafür nicht, wohl aber den Weg über einen Pfad in den Shadow Root von `ha-icon-button`. Der Versuch vom 2026-09-27 scheiterte an zwei Dingen zugleich: Er lief über `uix-more-info` mit Pfaden, die dort nichts trafen, **und** ohne `!important`. Was am 09.10.2026 an einer laufenden Instanz gemessen ist:

      ha-button::part(base)   Rundung, Schatten, Rahmen, backdrop-filter   ohne !important
      ha-button::part(base)   background-color                             nur mit !important
      ha-button::after        Form des Schimmers                           nur mit !important

  `::part(base)` ist das innere `.button` von `ha-button` - `ha-icon-button` gibt es als CSS-Teil nach außen, und ein Teil reicht durch die Shadow-Grenze. Die **Füllung** braucht `!important`, weil `ha-button` auf `appearance="plain"` steht und `:host([appearance~="plain"]) .button` ein hartes `background-color: rgba(0, 0, 0, 0)` setzt, ohne Variable davor. Die **Deckkraft** von `::after` bleibt in Ruhe: Sie trägt die Rückmeldung beim Zeigen und Drücken (0 -> 0.1), ein `!important` darauf legt sie still. `::after` liegt auf `z-index: -1`, also hinter der Fläche - mit einer durchscheinenden Füllung bleibt der Schimmer sichtbar, mit einer deckenden nicht.

  Was **über Felder geht** und keinen Pfad braucht: Größe (`ha-icon-button-size`), Innenabstand (`ha-icon-button-padding-inline`), Rundung und Schatten (`ha-button-border-radius`, `ha-button-box-shadow`), Dauer (`ha-animation-duration-fast`, `wa-transition-fast`, `wa-transition-easing`) und die Klick-Welle (`ha-ripple-color`, `-hover-opacity`, `-pressed-opacity`). Die Symbolfarbe folgt `currentColor`.
- **`ha-switch` spiegelt `checked` nicht als Attribut.** `ha-switch[checked]` trifft nie. Web Awesome meldet den Zustand als Custom State: `ha-switch:state(checked)::part(control)`. Am 2026-09-26 an einem eigens erzeugten Schalter geprüft — Attribut-Selektor griff nicht, State-Selektor griff.
- **Ein doppelter Pfad legt ein ganzes `-yaml`-Feld still.** UIX liest die Karte mit einem strengen YAML-Parser (Fehler `duplicated mapping key`) und verwirft sie komplett – keine Vorlage des Stilziels kommt an, auch nicht der `"."`-Eintrag. Am 2026-09-16 stand `ha-button $:` zweimal in `uix-card-yaml` (eine Vorlage doppelt, einmal mit fremder Marke); alle 48 Karten-Knoten waren leer, Bubble-Karten ohne Rahmen und Pop-ups ohne Hintergrundbild. PyYAML nimmt so eine Datei klaglos hin, geprüft wird deshalb mit `js-yaml`. Die Ausgabe fasst doppelte Pfade zusammen (`hatgYamlPfadeZusammenfuehren`).
- **Keine Weichzeichnung auf der Dialogfläche.** Ein `backdrop-filter` auf `.mdc-dialog__surface` bzw. `wa-dialog::part(dialog)` macht den Dialog zum Bezugsrahmen für `position: fixed`. Die Auswahllisten darin sind `fixed`: Sie landen neben dem sichtbaren Bereich, die Liste bleibt leer. Am 2026-09-20 an der Versionsauswahl von HACS (eingebettetes Panel, erreicht HATG nur über Theme-Variablen) und am Info-Dialog von Home Assistant gemessen; eine Weichzeichnung auf einem `::before` der Fläche hilft nicht. Das Glas-Paket schreibt deshalb `ha-dialog-surface-backdrop-filter: none`, die Vorlagen haben keinen Ausweichwert mehr, und der Import nimmt einen vorhandenen Wert zurück.
- `--uix-view-background` gehört zu `ha-panel-lovelace` bzw. `hui-root`, nicht zum Drawer.
- Ein `uix-sidebar-yaml`-Block lässt UIX 8.1.0 beim Laden mit `TypeError … toLowerCase` aussteigen. Danach wendet UIX für den Rest der Sitzung überhaupt keine Vorlage mehr an. Das Benutzer-Icon kommt deshalb ohne Pfad aus.
- UIX stylt nur, was nach ihm entsteht. Ein hartes Neuladen direkt auf einer `/config`-Seite lässt die schon vorhandenen Elemente unberührt.

## UIX 8.4.0 (seit 1.3.2b25)

Erschienen am 07.10.2026, verlangt **Home Assistant 2026.10.0** als Minimum (`hacs.json`: `2026.10.0.dev0`, bei 8.3.1 stand dort `2026.8.0.dev0`).

**Die Typliste ist unverändert geblieben.** Am 09.10.2026 aus der installierten `uix.js` geprüft, per Prüfsumme gegen die Instanz bestätigt: 32 Typen, davon kennt HATG 28. Die vier übrigen — `broker-tile-icon`, `uix-broker-badge`, `-button`, `-lock` — gehören zum Broker, sind also keine allgemeinen Stilziele. **Kein Typ fehlt HATG, keiner ist weggefallen.**

**Wie man die Typen aus der minifizierten Datei holt.** Zwei naheliegende Muster liefern Unsinn: `"type-<name>"` findet nur einen Teil, und `X(this,"name"` verfehlt die Hälfte, weil UIX die Registrierung auch mit `this._element` aufruft (`await S(this._element,"heading-badge",…)`). Der erste Lauf meldete deshalb `exact`, `mark` und `tags` als Typen und gleichzeitig `badge`, `dialog` und `row` als unbekannt — letzteres offensichtlich falsch. Tragfähig ist das zweite Argument der Registrierungsfunktion, unabhängig vom ersten:

```
S(<beliebig>, "<typ>", …)
```

### Add-on-Panels als Stilziel

UIX 8.4.0 ersetzt den `custom-panel`-Lader durch eine Frame-Laufzeit (`src/frame/`) und erreicht damit nicht mehr nur `ha-panel-custom`, sondern auch **`ha-panel-app`** — also Add-on-Oberflächen wie Terminal oder VS Code. Den Typnamen bildet es aus dem Add-on-Slug (`src/patch/ha-panel-app.ts`):

    export function appThemeTypes(slug) {
      const independent = slug.replace(/^(?:core|local|[0-9a-f]{8})_/, "");
      return independent === slug ? [slug] : [slug, independent];
    }

**Add-on-Slugs tragen Unterstriche und beginnen teils mit einer Ziffer.** HATGs Regel war `uix-[a-z][a-z0-9-]{0,47}` und wies damit jedes Add-on ab. Am 09.10.2026 an einer laufenden Instanz nachgesehen — alle drei dort installierten fielen durch:

    core_matter_server    gekürzt: matter_server    (Unterstrich bleibt)
    a0d7b954_vscode       gekürzt: vscode
    cb646a50_get          gekürzt: get

Die Regel lautet seit 1.3.2b25 `uix-[a-z0-9][a-z0-9_-]{0,47}`, auf beiden Seiten zeichengleich. Die führende Ziffer ist nötig, weil die Hex-Vorsilbe mit einer anfangen darf (`5c53de3b_esphome`); bis dahin stand im Test ausdrücklich, `uix-9start` müsse abgewiesen werden — das galt für Custom-Element-Namen, für Add-on-Slugs nicht.

### `uix-fonts`: Schriften über das Theme

Neu in 8.4.0. Ein Schlüssel auf **Theme-Ebene** wie `uix-theme`, kein Feld unter `modes`. Sein Wert ist eine mehrzeilige YAML-Abbildung, die UIX über die CSS Font Loading API lädt:

```yaml
uix-fonts: |
  Inter:
    family: Inter
    source: url(/local/fonts/inter.woff2)
    descriptors:
      weight: 400
```

Erlaubt sind je Eintrag genau drei Schlüssel: `family`, `source`, `descriptors` (`src/helpers/theme-fonts.ts`, `parseFont`). Alles andere wirft eine Konsolenwarnung.

**HATG braucht dafür kein neues Feld.** Am 09.10.2026 geprüft: Ein Theme mit `uix-fonts` läuft unverändert und idempotent durch Import und Export — `istFlach` lässt jedes `uix-`Feld auf Theme-Ebene stehen, und der Cleaner fasst es nicht an, weil `hatgIstStilzielFeld` greift. Der Bericht nennt es nur „unbekanntes Feld aufbewahrt".

**Was dagegen nötig war: es vor Vorlagen schützen.** `hatgVorlagenZielGueltig` nahm sowohl `uix-fonts` als auch `uix-theme` als Vorlagenziel an. Bei `uix-theme` fiel es erst in `hatgVorlagenZiel` still auf `uix-card` zurück — der Dialog nahm es an, die Vorlage lag woanders, gesagt hat es niemand. Bei `uix-fonts` wäre CSS in der Schriftentabelle gelandet. `HATG_UIX_KEINE_ZIELE` weist beide jetzt schon bei der Prüfung ab, mit Begründung im Dialog.

## Die Kartenfarben von HA 2026.10

Seit dem 10.10.2026 kennt HATG die vierzehn Tokens, mit denen Home Assistant
2026.10.0 die Vektorkarte einfärbt — unabhängig davon, ob das Dashboard hell
oder dunkel steht. Eigener Ordner **„Karte"** im HA-Grundgerüst, damit 763 → 777.

    ha-color-map-land        -water      -green            -area
    ha-color-map-building    -building-outline
    ha-color-map-road        -road-major -road-outline
    ha-color-map-transit     -boundary
    ha-color-map-label       -label-halo -label-secondary

**Belegt, nicht geglaubt.** Die Namen stammen aus einem Beitrag der UIX-Guides;
geprüft sind sie an der laufenden Instanz. Alle **1089 Frontend-Chunks** von
HA 2026.10.0 durchsucht — sie stehen in genau einem (`49854.…js`), zusammen mit
der Zuordnung auf die Kartenebenen:

```js
"--ha-color-map-land":  ["background","land"]
"--ha-color-map-green": ["naturePark","natureWood","natureGrass",
                         "natureLeisure","natureWetland","siteSports"]
```

Vierzehn Tokens decken 45 Farbslots ab. Jede Palette ist deshalb eine Näherung,
keine Kopie des Originalstils.

**Alle vierzehn Felder haben eine leere Vorgabe.** So liest HA sie:

```js
const a = getComputedStyle(t).getPropertyValue(r).trim();
if (!a) continue;        // nicht gesetzt -> HA behaelt seine eigene Palette
```

Ein Wert in der Vorgabe nagelte jede von HATG erzeugte Theme auf eine
Kartenfarbe fest — dieselbe Falle wie `ha-dialog-min-height: 100vh` in b22.

**Das Alpha wird je Slot skaliert**: `siteSports` 15 %, `labelHalo` 80 %,
POI-Label 40 %, Hausnummern 30 %. Bei `ha-color-map-label-halo` gehört deshalb
ein Alphawert in die Farbe; jede mitgelieferte Palette trägt dort `…cc`.
Erlaubt sind `#hex` (3/4/6/8 Stellen), `rgb()`, `rgba()`, `color(srgb …)` und —
über einen Mess-Span im Frontend — auch benannte Farben und `var()`-Verweise.

### Für welche Karte das gilt: für jede

Es gibt in Home Assistant nur **ein** Kartenbauteil, `ha-map`. Am 10.10.2026 an
der laufenden Instanz gesucht — fünf Stellen binden es ein:

    hui-map-card / hui-map-overview   die Karten-Karte auf dem Dashboard
    ha-panel-map                      das Karten-Panel in der Seitenleiste
    ha-locations-editor               der Zonen- und Standort-Editor
    more-info-person                  der Info-Dialog einer Person
    Einstellungen -> Allgemein        die Standortwahl

`ha-map` wählt seine Maschine selbst:

```js
async _createEngine() {
  if (this._forceLeaflet || !(0, f.jV)()) return new LeafletMapEngine();
  return new MapLibreMapEngine();
}
```

Normalfall ist die **Vektorkarte über MapLibre**; Leaflet ist der Rückfall, wenn
die Prüfung scheitert oder das Aufsetzen einen Fehler wirft (`_forceLeaflet`
wird dann gesetzt und neu geladen). Nachgemessen an einer erzeugten Karte:
`_forceLeaflet: false`, Klassen `maplibregl-map`, `maplibregl-canvas` — also
Vektor. Die Tokens greifen nur dort; für den Rasterrückfall dreht HA lediglich
`--map-filter` auf.

**Und `map_style` auf der Karte schließt die Tokens nicht aus.** Es wählt den
Grundstil, die Theme-Farben überschreiben darin einzelne Ebenen
(`_resolveMapStyle(this.mapStyle, this._darkMode, this._themeColors)`).

### Die Falle: `theme_mode` auf der Karte schaltet die Tokens ab

```js
_readThemeColors() {
  const t = Boolean(this._ui?.themes?.darkMode);          // Modus des Dashboards
  const e = this._darkMode === t ? tokensLesen(this) : void 0;
  …
}
```

Die Tokens werden **nur gelesen, wenn der Modus der Karte dem des Dashboards
entspricht**. Am 10.10.2026 an drei Karten auf einem hellen Dashboard gemessen:

    theme_mode: auto    Karte hell  == Dashboard hell   ->  4 Slots gefärbt
    theme_mode: light   Karte hell  == Dashboard hell   ->  4 Slots gefärbt
    theme_mode: dark    Karte dunkel != Dashboard hell  ->  nichts gelesen

Der Grund liegt auf der Hand, sobald man es sieht: Die Werte kommen aus
`getComputedStyle` der Seite, und dort stehen die Farben des *gerade geltenden*
Modus. Eine Karte, die gegen das Dashboard auf Dunkel gezwungen wird, bekäme
sonst die hellen Theme-Werte — HA lässt sie deshalb lieber seine eigene dunkle
Kartografie nehmen.

**Für HATG heißt das:** Wer eine dunkle Karte in einem hellen Theme will, trägt
die dunkle Palette in die **Hell**-Felder ein und lässt `theme_mode` auf `auto`.
Genau dafür füllt die Schnellwahl beide Modi getrennt.

Ein Token deckt mehrere Slots ab: `ha-color-map-land` färbt `background` und
`land`, drei gesetzte Tokens ergaben deshalb vier gefärbte Slots.

### Die automatische Zuordnung: vier Stellen, nicht eine

Die Felder nur ins Manifest zu schreiben, hätte an drei Stellen stumm
danebengegriffen. Wer die nächste Feldfamilie ergänzt, geht dieselbe Liste
durch:

1. **Der Farbwähler.** `hatgGetKeyFormats` erkannte Farbfelder ohne Vorgabe
   allein an der Endung `-color`. **Kein** Kartenname endet so; alle vierzehn
   wären auf `other` gefallen und hätten ein nacktes Textfeld bekommen, obwohl
   sie Farben sind. Die Regel prüft jetzt zusätzlich gegen
   `HATG_KARTENFARBEN_KEYS`. Format ist `rgba`, nicht `hex` — `label-halo`
   braucht die Deckkraft.
2. **Der Ordner.** Neue Gruppe `hintergruende-karten__karte` im Abschnitt,
   dazu die vierzehn Namen in dessen `keys`. Nur die Gruppe anzulegen reicht
   nicht, nur die `keys` auch nicht.
3. **Keine Ableitungsregel.** Bewusst kein Eintrag in `HATG_DERIVE_RULES`:
   `propagateDerivation` schreibt in jedes Ziel, sobald die Quelle sich ändert.
   Die Kartenfelder bekämen damit bei jedem Farbwechsel Werte — und wären nie
   wieder leer. Die Schnellwahl unten ersetzt das.
4. **Der Import-Cleaner** fasst sie nicht an; `ha-` ist eine geschützte
   Vorsilbe in `hatgIstFremdesFeld`. Geprüft, nicht angenommen.

### Die Paletten füllen beide Modi auf einmal

Sechs Stile (Standard, Bunt, Natur, Gedämpft, Grau, Kontrast) je hell und
dunkel, als Chips über den Feldern. `setzeKartenPalette` schreibt Light und
Dark in einem Zug, „Home Assistant" leert alle vierzehn wieder.

**Wiedererkannt wird über Farbe und Deckkraft, nicht über die Schreibweise.**
Der Import schreibt Farbfelder im rgba-Format zurück: aus `#faf8f5cc` wird
`rgba(250, 248, 245, 0.8)`. Ein Zeichenvergleich hätte die Palette nach dem
ersten Speichern nicht mehr erkannt.

### Dabei gefunden: der Import warf Alphawerte weg

`hatgNormalizeRgbaLegacyHex` setzte den Alphawert fest auf 1. `HATG_HEX_RE`
nimmt aber auch Hex mit vier und acht Stellen an, und die tragen ihr Alpha in
den letzten Stellen:

    vorher    #000000cc  ->  rgba(0, 0, 0, 1)     Durchsichtigkeit weg
    jetzt     #000000cc  ->  rgba(0, 0, 0, 0.8)

Ein alter Fehler, der erst mit den Kartenfarben auffiel — dort trägt jede
Palette bei `label-halo` ein `…cc`, die Lichthöfe hinter den Beschriftungen
wären deckend geworden. Betroffen war jedes Farbfeld im rgba-Format, in das
jemand ein Hex mit Alphaanteil schreibt. `hatgHexAlpha` liest den Wert jetzt
aus; ohne Alphaanteil kommt weiterhin 1 zurück.

`tests/hatg-karte.test.js` hält alles fest, elf Prüfungen mit Gegenproben.

## Flächen unter Symbolknöpfen: drei Vorlagen, einzeln schaltbar

Seit dem 09.10.2026 gibt es `knopfglas-karten`, `knopfglas-kopfleiste` und
`knopfglas-einstellungen` — je eine Vorlage für Karten, Dashboard-Kopfleiste und
Einstellungsseiten. Sie legen einem Symbolknopf eine gläserne Fläche unter und
geben dem Schimmer beim Zeigen die Form des Knopfes.

**Sie stehen bewusst nicht im Glas-Paket.** Auf Ansage: jede einzeln schaltbar.
Dieselbe Entscheidung wie am 01.10. bei `glas-buttons-rahmen`. In der Oberfläche
stehen sie in einer eigenen Gruppe „Knöpfe".

**Die Arbeitsteilung mit den `glas-buttons-*`-Vorlagen:**

| | Weg | Was |
|---|---|---|
| `glas-buttons-*` | Variablen, kein Pfad | Größe, Rundung, Schatten — überall, auch dort, wo kein Pfad hinkommt |
| `knopfglas-*` | Pfad ins Innere | Füllung, Weichzeichnung, Form des Schimmers — nur über `::part(base)` und `::after` erreichbar |

Die Rundung der `knopfglas-*` liest `var(--ha-button-border-radius, …)` und
folgt damit dem, was die Variablen-Vorlage gesetzt hat; beide zusammen bleiben
stimmig.

**Die Pfade, alle am 09.10.2026 nachgemessen:**

    uix-card-yaml     "ha-icon-button $"
    uix-root-yaml     "ha-icon-button $"
                      "ha-menu-button $ ha-icon-button $"
    uix-config-yaml   ":not(uix-node,style) $ ha-icon-button $"
                      ":not(uix-node,style) :not(uix-node,style) $ ha-icon-button $"

- **Karten:** ein Schritt, deshalb zählt jeder Treffer. An frisch erzeugten
  Karten gemessen — media-control 3 Knöpfe, light 2, todo-list 1, tile 0.
  Knöpfe, die noch einen Shadow Root tiefer liegen (Entitätenzeilen), bleiben
  draußen; die gehören zu `uix-row`.
- **Kopfleiste:** zwei Pfade, weil der Menüknopf eine Shadow-Ebene tiefer sitzt.
  Die Knöpfe rechts in der Leiste liegen im selben Baum wie `hui-root`, der
  Hamburger im Shadow Root von `ha-menu-button`.
- **Einstellungen:** `ha-panel-config` hat keinen Shadow Root; seine direkten
  Kinder im Licht-DOM sind der `uix-node`, ein `<style>` von UIX und das
  Wurzelelement der offenen Seite. Das heißt auf jeder Unterseite anders —
  **52 Routen** laut `ha-panel-config.routerOptions` —, deshalb `:not()` statt
  einer Namensliste. Seiten mit eigenem Router (Integrationen, Automationen)
  rendern ohne Shadow Root ins Licht-DOM; dort liegt die Seite eine Ebene
  tiefer, dafür ist der zweite Pfad da. An `/config/system` und
  `/config/integrations` geprüft.

**`glas-buttons-glanz` ist dafür entfallen.** Die Vorlage war doppelt tot: Ihr
Pfad `ha-button $` auf `uix-card-yaml` trifft nichts, weil `ha-button` in keiner
Karte ein Kind des Shadow Roots ist — es steckt im Shadow Root von
`ha-icon-button` —, und ohne `!important` wäre die Fläche ohnehin durchsichtig
geblieben. Wer sie eingeschaltet hatte, bekommt beim nächsten Import einmalig
den Balken „verwaiste Blöcke" mit dem Knopf zum Aufräumen. Ein Test verbietet
den Pfad `ha-button $` jetzt für alle Vorlagen.

**Zum ersten Mal trägt `uix-root` ein `-yaml`-Feld.** Damit rückt das einfache
`uix-root` in den `"."`-Eintrag derselben Karte — die Lage, in der
`symbole-kachel` am 01.10. gewachsen ist. `tests/hatg-durchlauf.test.js` hält
jetzt auch diesen Fall fest: einfache und Pfad-Vorlage zusammen, zweimal durch
Import und Export, Marker und `"."`-Eintrag je genau einmal.

**Noch offen:** Die Pfade sind mit dem Auflöser aus `uix.js` nachgebaut, nicht
mit UIX selbst gefahren. Der letzte Beweis ist ein Dev-Build auf der Instanz,
die drei Vorlagen einschalten und `uix-node`-Knoten zählen.

## HA 2026: Knöpfe und Links hängen nicht mehr an `primary-color`

Seit Home Assistant 2026 definiert das Frontend eine eigene Farbebene auf `html` (`--ha-color-*`) und spiegelt sie für Web Awesome (`--wa-color-*`). Knöpfe, Chips und Links auf den Einstellungsseiten lesen daraus und **nicht** mehr aus `--primary-color`.

Am 2026-09-27 an der Geräteseite nachgemessen: „Zu Dashboard hinzufügen", „Hinzufügen zu …" und der Bereichs-Chip standen in `#37c8fd`, während `--primary-color` auf `rgba(192, 192, 192, 0.5)` stand. Die Farbe kam aus `--ha-color-on-primary-normal`, das HA an `--wa-color-brand-on-normal` weiterreicht. `--ha-color-text-link` und `--ha-color-primary-50/60` gehören zur selben Ebene, treffen aber andere Stellen.

**Die Farbebene hat zwei Etagen.** Am 2026-09-27 aus dem Frontend-Stylesheet gelesen: 58 feste Palettenfarben (`ha-color-black`, `-white`, und je elf Stufen `05`…`95` für `primary`, `neutral`, `red`, `green`, `orange`) und 151 `var()`-Verweise darauf — die semantische Ebene (`text-*`, `fill-*`, `on-*`, `border-*`) und die komplette Web-Awesome-Brücke (`wa-color-*`). Die **Palette ist in beiden Modi dieselbe**; was zwischen Hell und Dunkel wechselt, ist die semantische Ebene, die auf andere Stufen zeigt. Seit 1.3.2b8 sind die 58 Palettenfarben Felder — damit hängt jeder Blauton an einer Stelle. Die 151 Verweise sind **nicht** aufgenommen: Ihre Vorgaben sind je Modus verschieden, und das ließe sich nur mit einem Moduswechsel an einer laufenden Instanz auslesen.

Seit 1.3.2b7 sind vier dieser Marken Felder: `ha-color-on-primary-loud`, `-normal`, `-quiet` und `ha-color-text-link`. Die drei letzten hängen in `HATG_DERIVE_RULES` an **`accent-color`** (nicht an `primary-color` — dessen Liste ist kurz und endet bei `md-sys-color-primary`); `loud` bleibt bewusst draußen, das ist die Schrift *auf* der Akzentfläche und muss hell bleiben.

**Eingabe- und Auswahlfelder lesen keine `input-*`-Farbe mehr.** Dieselbe Umstellung, eine Ebene weiter: Home Assistant hat die Formular-Elemente auf Web Awesome gezogen. Am 04.10.2026 an den Quellen des Zweigs `dev` nachgelesen:

    ha-input.ts          --ha-color-form-background-hover, -disabled,
                         --ha-color-border-neutral-loud, -normal, -quiet,
                         --ha-color-border-danger-normal
    ha-textarea.ts       --ha-color-form-background, -hover, -disabled,
                         --ha-color-border-neutral-loud, -danger-normal
    ha-picker-field.ts   --ha-color-form-background, -disabled,
                         --ha-color-border-neutral-loud
    wa-input-mixin.ts    --ha-color-form-background
    ha-select.ts         nichts davon - erbt vom Web-Awesome-Unterbau

Kein einziges `--input-*` als Farbe, und kein `--mdc-select-*`/`--mdc-text-field-*`. Die einzige `--input-*`-Farbe, die in diesen Dateien überhaupt vorkommt, ist `--input-fill-color` — in `ha-expansion-panel.ts`, also an einem Ausklapp-Bereich, nicht an einem Eingabefeld. `src/components/ha-textfield.ts` gibt es im Zweig `dev` nicht mehr.

**Gemeldet hat es ein Nutzer, nicht die Prüfwerkzeuge.** Er schrieb, die Felder von `input-background-color` bis `input-outlined-disabled-border-color` änderten nichts, und hatte die richtigen Namen schon selbst gefunden. In der Oberfläche standen beide Sorten im selben Ordner „Eingaben & Auswahlfelder": zuerst elf tote `input-*`, dann fünf tote `mdc-*`, und die vier, die wirken, auf den Plätzen 18 bis 21. Wer von oben liest, gibt vorher auf.

Seit 1.3.2b25 sind die Altlasten deshalb in einem eigenen Ordner **„Eingaben: Material (bis HA 2025)"**. Gelöscht werden sie **nicht**: Wer eine ältere HA-Version fährt, braucht sie, und gemessen sind acht Dateien, nicht das ganze Frontend — ältere Material-Reste können anderswo noch lesen. Drei Felder, die die heutigen Komponenten lesen, sind neu dazugekommen: `ha-color-border-neutral-quiet`, `-normal` und `ha-color-border-danger-normal`.

**Die Abstufung muss in beiden Modi monoton sein.** Die drei neuen Werte sind auf die iOS-Basis abgestimmt, mit dem vorhandenen `loud` als Anker: hell `#E5E5EA` > `#D1D1D6` > `#C6C6C8` (dunkler ist kräftiger), dunkel `#2E2E30` < `#343436` < `#38383A` (heller ist kräftiger). Zwei naheliegende Werte sind dabei ausgeschieden: `#2C2C2E` ist im Dunkeln `ha-color-form-background` — ein Rahmen in der Farbe seiner eigenen Fläche ist unsichtbar; und `#3A3A3C` wäre heller als `loud`, die Abstufung stünde auf dem Kopf. `danger` nimmt HATGs eigenes `error-color` (`#FF3B30`/`#FF453A`), kein neuer Ton.

**Zur Methode:** GitHubs Code-Suche taugt dafür nicht. Sie lieferte bei zeichengleicher Anfrage einmal drei Treffer und einmal null — ein erster Lauf hätte eine falsche Tabelle ergeben. Die Aussagen oben stammen aus den heruntergeladenen Dateien selbst:

```bash
curl -s "https://raw.githubusercontent.com/home-assistant/frontend/dev/src/components/input/ha-input.ts" \
  | grep -o -- 'var(--\(input\|ha-color-form\|ha-color-border\)[a-z0-9-]*' | sort -u
```

**Der Schalter auf Einstellungsseiten** bekommt von UIX nichts ab: Dort entstehen nur `config`-, `drawer`- und `sidebar`-Knoten, kein `row`-Knoten. Seine Farbe kommt aus `--ha-switch-checked-background-color` (Rückfall über `--ha-color-fill-primary-normal-resting` bis `--primary-color`) — ein Feld, das HATG schon kennt und das mit dem Akzent mitzieht. Ein Verlauf ist dort nicht möglich: Der Weg dorthin führt über vier Pfadschritte, und Zwischenschritte nehmen nur den ersten Treffer, also nur die erste Zeile.

## Eigene Vorlagen: die Kennung muss ASCII bleiben

Die Kennung einer eigenen Vorlage steht in den Markern im Theme (`/* HATG:UIX:<kennung>:START */`) und ist damit kein freier Text. Die Marken-Regex kennt nur `[a-z0-9-]`, der Server nimmt beim Schreiben nur `[A-Za-z0-9_-]{1,64}` an.

**Lesen und Schreiben waren unterschiedlich streng.** `ws_list_uix_templates` gab jede Kennung heraus, die in `config/themes/hatg/hatg-uix-vorlagen.json` stand; `ws_save_uix_templates` lehnt seit immer alles außerhalb von `[A-Za-z0-9_-]{1,64}` ab — und bricht beim **ersten** schlechten Eintrag den **ganzen Stapel** ab. Eine von Hand eingetragene Kennung mit Umlaut kam damit herein, ließ sich aber nie zurückschreiben: Danach war überhaupt keine Vorlage mehr speicherbar, auch keine neue, und die Meldung nannte nur die Kennung, nicht die Vorlage. Am 2026-09-29 an einer laufenden Instanz nachgestellt — ein Stapel aus einer sauberen und einer Umlaut-Kennung wurde komplett mit `invalid_id` abgelehnt, die saubere Vorlage inklusive.

Seit 1.3.2b11: `eigeneVorlagenKennungenHeilen()` zieht die Liste beim Laden gerade und **schreibt die Marker im Theme mit um** (`hatgBenenneVorlagenMarkenUm`) — ohne das bliebe der Block unter der alten Kennung stehen, gälte als verwaist und die Vorlage sähe ausgeschaltet aus. `vorlagenIdAusName` und die Heilung benutzen dieselbe Slug-Regel (`hatgVorlagenIdSlug`). Der Generator war nie die Quelle: Er ersetzt Umlaute seit der ersten Fassung, `Füllung` wird `fuellung`.

**Die Slug-Regel deckt nur vorkomponierte Umlaute ab.** `.replace(/ü/g, "ue")` trifft U+00FC; ein zerlegtes `u` + U+0308 fällt durch und verliert beim Entfernen der Kombinationszeichen den Punkt: aus `Füllung` wird dann `fullung`, nicht `fuellung`. Speicherbar ist beides, nur unterschiedlich schön.

**`hatgIstStilzielKey` reicht dafür nicht.** Es kennt nur die feste Liste, `uix-knx-frontend-yaml` also nicht. `hatgVereinheitlicheVorlagenMarken` übersprang eigene Panel-Ziele damit komplett — fremde Vorsilben und doppelte Blöcke wurden dort nie aufgeräumt. Seit 1.3.2b11 gibt es `hatgIstStilzielFeld` (feste Liste **plus** jedes weitere `uix-`/`card-mod-`Feld); wer über Stilziele iteriert, nimmt das.

**Was die Meldung sagen muss.** Der Grund einer Ablehnung stand nur in einem Toast, der nach Sekunden weg ist, während im Dialog „siehe Meldung unten" stehen blieb. Aus einem Screenshot war damit nicht zu erkennen, ob die Kennung, das Stilziel oder ein `write_failed` im Dateisystem der Grund war — drei Ursachen mit identischem Symptom „jedes Speichern scheitert". Der Dialog zeigt den Text des Servers jetzt wörtlich, und die Server-Meldungen nennen den **Namen** der Vorlage, nicht nur die Kennung.

## Eigene Panel-Ziele als Vorlagenziel

Seit 1.3.2b12 ist das Ziel im Vorlagen-Dialog frei eintippbar (Liste über `<datalist>`, oder selbst schreiben). Damit lassen sich Vorlagen für eigene Panels anlegen, ohne den Block von Hand in den Code-Editor zu schreiben. Die Vorlage bleibt in der bestehenden Liste und in `config/themes/hatg/hatg-uix-vorlagen.json` — eine zweite Datei braucht es nicht, der Eintrag trug schon immer ein `ziel`-Feld.

**Vorher war es nicht nur unmöglich, sondern still falsch.** `hatgVorlagenZiel` prüfte mit `hatgIstStilzielKey`, das nur die feste Liste kennt, und fiel sonst auf `uix-card` zurück. Eine Vorlage für `uix-knx-frontend-yaml` landete deshalb kommentarlos im falschen Feld. Am 2026-09-30 gemessen; jetzt entscheidet `hatgVorlagenZielGueltig`.

**Drei Stellen hingen an der festen Liste, nicht eine.** Wer eigene Ziele zulässt, muss alle drei anfassen, sonst sieht es aus, als ginge es, und die Vorlage kommt trotzdem nicht an:

1. `hatgVorlagenZiel` — sonst falsches Feld, stumm.
2. `hatgIstYamlZiel` entschied, ob der Marker als CSS- oder YAML-Kommentar geschrieben wird. Bei einem eigenen Ziel sagte es nein, und der Marker ging als `/* … */` **mitten in eine YAML-Karte** — das macht die Theme-Datei unlesbar. Dafür gibt es jetzt `hatgIstYamlStilzielFeld`: Über die Schreibweise entscheidet allein die Endung `-yaml`.
3. `buildYamlText` läuft beim Sammeln der Felder nur über die Abschnitte des Manifests. Ein eigenes Ziel steht dort nicht und fiel deshalb aus der Datei — die Vorlage war eingeschaltet und stand trotzdem nirgends. Ein Nachlauf über `values` nimmt jetzt jedes Stilziel-Feld mit.

**Die Regex muss auf beiden Seiten gleich sein.** `HATG_VORLAGEN_ZIEL_RE` in `hatg-panel.js` und `_VORLAGEN_ZIEL_RE` in `__init__.py` sind zeichengleich `uix-[a-z][a-z0-9-]{0,47}`, und ein Test vergleicht sie. Ziffern sind seit 1.3.2b12 erlaubt, weil ein Panel-Ziel nach dem Wurzelelement heißt und ein Custom-Element-Name Ziffern tragen darf. Wäre der Client großzügiger als der Server, scheiterte das Speichern der **ganzen** Liste an diesem einen Eintrag — derselbe Mechanismus wie bei den Kennungen.

Eigene Ziele kommen nur an, wenn in UIX **Style custom panels** eingeschaltet ist; der Hinweis steht im Dialog.

In der Seitenleiste ist „UIX-Vorlagen" seit 1.3.2b12 ein gewöhnlicher Eintrag. Vorher stand dort eine Gruppenüberschrift zum Aufklappen und darunter genau ein Untereintrag „Alle Vorlagen" mit **derselben** Abschnitts-ID — zwei Klicks für dieselbe Seite, seit die Stilziele in ein Auswahlfeld auf der Seite gewandert sind.

## Hintergrundbilder liegen in `config/www/hatg`

Seit 1.3.2b13 liegen die Bilder der Galerie in `config/www/hatg` und kommen unter **`/local/hatg/<name>`** von Home Assistant selbst. Davor lagen sie in `config/themes/Wallpaper` hinter der HATG-eigenen Route `/hatg_wallpaper`.

**Warum das wichtig ist.** Das Feld war nie das Problem — `lovelace-background` und `popup-custom-wallpaper` liest HA selbst. Der **Wert** zeigte aber auf eine Adresse, die nur die HATG-Integration registriert. Wer so eine Theme weitergab, beim Empfänger blieb der Hintergrund leer: ohne Fehlermeldung, weil ein fehlendes Bild in CSS einfach nichts tut. Am 2026-09-30 an einer weitergegebenen Theme aufgefallen — der Rest der Datei war sauber, keine `hatg-*`-Felder, keine `var(--hatg-…)`; die einzige Bindung waren vier Zeilen mit zwei Bildadressen. Das Versprechen „am Ende steht eine ganz normale Theme-Datei" gilt eben auch für die Werte, nicht nur für die Feldnamen.

- **Umzug beim Start.** `async_setup_entry` verschiebt vorhandene Bilder einmalig aus dem alten Ordner (`eintrag.replace`, bei anderem Dateisystem kopieren und löschen). Verschoben statt kopiert, sonst liegt jedes Bild doppelt auf der Platte.
- **Die alte Route bleibt** und zeigt jetzt auf den neuen Ordner. Themes von vor b13 funktionieren damit auf Rechnern mit HATG unverändert weiter.
- **Import, Autosave und Entwurf ziehen alte Adressen mit** (`hatgMigriereWallpaperAdressen`), und der Import-Bericht nennt die betroffenen Felder.
- **`/local` hängt an `config/www` zum Startzeitpunkt.** Home Assistant registriert die Route nur, wenn der Ordner beim Start schon da war. Legt HATG ihn gerade erst an, bleibt `/local` bis zum nächsten Neustart tot — das steht als Warnung im Log, sonst sucht man den Fehler in der Theme.
- Client und Server halten dieselben zwei Adressen (`HATG_WALLPAPER_ADRESSE_ALT`/`-NEU` gegen `WALLPAPER_STATIC_PATH`/`WALLPAPER_LOCAL_PATH`); ein Test vergleicht sie.

## Ausmisten beim Import

Der Import entfernt seit 1.3.2b14 **unbekannte Felder, auf die nichts zeigt**. Grund: Die Ausgabe hängt unbekannte Felder immer wieder an — ein Feld aus einer älteren Fassung des Themes wird damit bei jedem Durchlauf treu weitergereicht, man wird es nie wieder los. In der Theme eines Nutzers waren das am 2026-09-30 vierzehn Felder (`liquid-*`, `bubble-menu-bar-main-background-color`), jedes zweimal geschrieben: 28 Zeilen Ballast, auf die **keiner** der 1236 Einträge verwies.

Die Maschinerie dafür gab es schon (`hatgEntferneVerwaisteEigenfelder`), sie wurde nur mit zu wenigen Kandidaten aufgerufen — nur mit denen, die `hatgLoeseEigeneFelderAuf` behalten wollte. Jetzt bekommt sie **alle** übrigen unbekannten Felder.

- **Was noch jemand liest, bleibt.** Die Funktion folgt den `var()`-Ketten transitiv: Zeigt `primary-color` auf `liquid-b` und `liquid-b` auf `liquid-a`, überleben beide — beziehungsweise werden aufgelöst, der Wert tritt ein.
- **Die Grenze, die HATG nicht sieht:** Ein Feld kann von außerhalb der Theme gelesen werden, etwa aus der Konfiguration einer einzelnen Karte. Deshalb nennt der Bericht **jedes** entfernte Feld beim Namen, und der Bericht steht auch im Kopf der Datei.
- Ein Test hält beides fest (`tests/hatg-ausmisten.test.js`): dass Ballast fliegt und dass nach dem Import kein `var()` mehr ins Leere zeigt.

**Die Regel "unbekannt und unreferenziert" war falsch, und zwar teuer (1.3.2b25).** Home Assistant liest seine Variablen aus seinem **eigenen Stylesheet**, nicht per `var()` aus der Theme. Für den Cleaner sah damit jede HA-Variable, die HATG nicht als Feld anbietet, wie Ballast aus. Am 2026-10-01 gemessen: Von zwölf echten Namen (`scrollbar-thumb-color`, `mush-chip-height`, `ha-space-4`, `rgb-error-color`, `codemirror-keyword` und weiteren) löschte der Import **elf**. Nur `ha-animation-duration-fast` blieb, weil HATG genau dieses Feld kennt. Das steckte in b14 und damit in der veröffentlichten b15.

`hatgIstFremdesFeld()` entscheidet jetzt, was der Cleaner nicht anfassen darf — und **dieselbe** Funktion benutzt auch die Verweisprüfung, die vorher eine eigene, engere Regel hatte (ein Verweis auf `--rgb-error-color` galt damit als tot).

- **Vorsilben** für Familien, deren Mitglieder HATG nicht alle kennen *kann*: `state-<domain>-<zustand>-color` und `bubble-state-…` entstehen erst zur Laufzeit, `rgb-<name>` leitet HA aus jedem Hex-Feld ab (`apply_themes_on_element.ts`), die 151 semantischen `ha-color-`Marken stehen bewusst nicht in der Feldliste, von Mushroom sind erst 18 Namen geprüft.
- **Eine feste Liste von 72 Namen** für alles ohne solche Vorsilbe, am 2026-10-01 aus den Quellen geholt: HA (`src/resources/theme/core.globals.ts`, `color/color.globals.ts`, `color/semantic.globals.ts`, Zweig dev) definiert **421** Variablen auf `html`, davon kennt HATG **233** nicht, und 15 tragen keine der Vorsilben. Bubble Card (`dist/bubble-card.js`) liest **119** `--bubble-*`-Namen, davon kennt HATG **60** nicht.
- **Der Denkfehler bei Bubble, zum Nachlesen:** b15 hat geprüft, welche von HATGs Bubble-Feldern Bubble nicht mehr liest. **Nicht**, welche Namen Bubble zusätzlich liest. Die ganze Familie `bubble-card-type-*` und alle `bubble-pop-up-`Maße fehlten deshalb. Eine Vorsilbenregel allein reicht hier nicht, eine Feldliste allein auch nicht.
- **Gegenprobe gegen eine zu weite Schutzliste:** Die 61 Felder, die b15 als tot herausgenommen hat, stehen in **keiner** der beiden Quellen. Sie fliegen weiter, ohne dass es eine Ausnahmeliste braucht — und die b15-Prüfung ist damit unabhängig bestätigt.
- **Der Bericht nennt jetzt wirklich alle** entfernten Felder. `hatgFelderNennen` kürzt ab fünf Namen auf drei; bei 48 gelöschten Feldern stand dort "+45 weitere", und damit war der einzige Rettungsanker gekappt. Für diese Zeile wird nicht gekürzt.

**Warum neun Tests das nicht gesehen haben.** Jeder fütterte Ballast ein und prüfte, ob er fliegt — keiner, ob **nur** Ballast fliegt; alle Kandidaten hießen `liquid-*`. Schlimmer: Das Orakel des Tests für "bekannt" war `HATG_MANIFEST`, also genau das Orakel, das auch der Code benutzt. Ein unabhängiges Orakel gab es im Repository nicht, es musste erst aus den Quellen von HA und Bubble geholt werden. Wer eine Prüfung gegen dieselbe Quelle stellt, die der Code benutzt, prüft nichts.

### Bubble Card: 61 Felder raus (1.3.2b15)

Bubble Card **3.2.0 liest 61 der 124 Felder in HATGs Bubble-Abschnitt nicht** — die Namen kommen im ganzen Quelltext nicht vor, weder bei Bubble noch bei HA noch bei Mushroom. Damit sind 683 Felder auf **763** geschrumpft.

Der Grund ist ein Schemawechsel: Bubble Card 3.x hat die Variablen **pro Kartentyp** durch eine gemeinsame Familie ersetzt. `.bubble-container` liest `var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, …))` — statt `bubble-climate-…`, `bubble-cover-…`, `bubble-media-player-…` je einzeln. **Umbenennen geht deshalb nicht:** fünf alte Felder zeigen auf ein neues, eine Zuordnung würde die Einstellung eines Kartentyps auf alle anderen ausschütten. Sie sind ohnehin wirkungslos — Entfernen ändert nichts am Aussehen.

**Vor dem Löschen zwingend zu prüfen, woran es fast gescheitert wäre:**

- **HATGs eigene Vorlagen schrieben sechs davon** (`glas-bubble`, `symbole-kachel`). Beide setzen die generische Variante gleich daneben (`--bubble-icon-border-radius`, `--bubble-main-background-color`), der Effekt kommt also an; die sechs Zeilen waren Totholz.
- **Die Felder hingen an acht weiteren Stellen**, nicht nur am Manifest: Radius- und Schattenlisten, drei Basis-Vorlagen (iOS, MD3, v0219) je Light und Dark, Ableitungsregeln, Glas-Feldlisten, Sync-Zuordnungen und Plugin-CSS. 179 Zeilen insgesamt. Wer nur das Manifest anfasst, bekommt sie über `reapplyBasis` wieder in `values` zurück — genau so passiert und erst durch eine Gegenprobe aufgefallen.
- **Die Feldliste kommt aus `HATG_MANIFEST.light`/`.dark`, nicht aus `sections`.** Nur die Sections zu kürzen lässt die Felder in `values` stehen; sie gelten dann beim Import weiter als bekannt, und der Cleaner räumt sie nicht ab.
- Für `card-background-color`, `primary-text-color` und `secondary-text-color` gibt es in 3.2.0 **kein** Bubble-Gegenstück mehr. Die Dreiklänge behalten ihre Mushroom-Seite; der Renderer lässt den Bubble-Chip jetzt weg, statt „Bubble Card: undefined" anzuzeigen.

Bleiben in HATG, obwohl Bubble Card sie nicht liest: `ha-dialog-surface-background`, `ha-dialog-scrim-color` und `mdc-dialog-scrim-color` — das sind HA-Variablen im Bubble-Abschnitt, Bubbles Pop-up nutzt HAs Dialog.

### Die Maß-Ebene von HA 2026 (1.3.2b25)

Aus der Sitzung „HA Karten" kam am 05.10.2026 eine Erhebung aus der laufenden Instanz: 25 `ha-*`-Bauteile, jedes `var(--x, fallback)` aus ihren `adoptedStyleSheets` und `<style>`-Knoten ausgelesen. 1021 Variablen gefunden, 450 davon als Theme-Feld vorgeschlagen. Der Abgleich gegen HATGs Katalog: 224 kannte HATG schon, 226 fehlten.

Ergänzt sind davon zunächst **41 Felder der Maß-Ebene**, mit den Vorgabewerten aus HAs eigenen Quellen (`src/resources/theme/core.globals.ts` und `semantic.globals.ts`, Zweig dev): 20 `ha-space-1`…`-20`, 12 `ha-border-radius-*`, 3 `ha-border-width-*`, 3 `ha-box-shadow-s/m/l` und 4 `ha-animation-duration-*`. Damit 625 → 763.

Diese Ebene lohnt besonders, weil sie als Ausweichwert in Dutzenden Bauteilfeldern steht — `--ha-tooltip-box-shadow` fällt auf `--ha-box-shadow-m` zurück, `--ha-tooltip-border-radius` auf `--ha-border-radius-md`. Ein Wert verschiebt die halbe Oberfläche.

**Nur `ha-box-shadow-s/m/l` unterscheiden sich zwischen Hell und Dunkel**, alles übrige ist in beiden Modi gleich. Die Schattenwerte stehen deshalb in `semantic.globals.ts` zweimal, die Maße in `core.globals.ts` einmal.

**Falle beim Auslesen:** `core.globals.ts` setzt alle `--ha-animation-duration-*` am Ende noch einmal auf `1ms`, in einem `@media (prefers-reduced-motion: reduce)`-Block. Wer die Datei mit einer Regex nach dem **letzten** Treffer durchsucht, bekommt für alle vier Stufen `1ms`. Die echten Werte sind 1/75/150/250/350 ms.

### Ein bedingter Ausweichwert ist keine Vorgabe (1.3.2b25)

Gemeldet von einem Nutzer an b22: **Alle Dialoge öffneten in voller Fensterhöhe.** Ursache war das neue Feld `ha-dialog-min-height` mit der Vorgabe `100vh`. In `src/components/ha-dialog.ts` steht der allgemeine Fall **ohne** Ausweichwert:

    min-height: var(--ha-dialog-min-height);

und vierzig Zeilen tiefer, in einem bedingten Block:

    :host([type="standard"]) wa-dialog::part(dialog) {
      /* Make the dialog fill the whole screen height and not the safe height */
      min-height: var(--ha-dialog-min-height, 100vh);

Der Auswerter, der die 97 Vorgaben aus den Quellen zog, nahm den **ersten Treffer mit Ausweichwert** — also den Sonderfall — und machte ihn zur Vorgabe für alle.

**Die Regel:** Wer einen solchen Wert ins Theme schreibt, pinnt **jeden** Zusammenhang darauf fest. Home Assistant kann dann nicht mehr zwischen Dialogtyp, Knopfgröße oder Bildschirmbreite unterscheiden. Ein Feld mit **leerer** Vorgabe wird gar nicht erst in die Datei geschrieben (das kann HATG seit jeher, 96 Felder nutzen es) — einstellbar bleibt es trotzdem.

**Zwei Prüfungen finden diese Fehlerklasse**, beide am 2026-10-08 über alle 97 Felder der b22-Charge gelaufen:

1. Wird die Variable **irgendwo ohne** Ausweichwert gelesen (`var(--x)` blank)? Dann ist jeder gefundene Ausweichwert ein Sonderfall. Traf auf genau ein Feld zu: `ha-dialog-min-height`.
2. Hat die Variable **mehrere verschiedene** Ausweichwerte? Dann hängt der Wert am Zusammenhang. Traf auf 13 Felder zu — `button-height` etwa steht je nach `size`-Attribut auf 24, 32, 40 oder 48px.

Geleert sind daraufhin zwölf: `ha-dialog-min-height`, `-max-height`, `-width-full`, `-border-radius`, `ha-bottom-sheet-content-padding`, `dialog-content-padding`, `button-height`, `ha-button-height`, `ha-checkbox-border-color`, `ha-tooltip-border-radius`, `-font-size`, `-font-weight`. Nicht geleert: `ha-bottom-sheet-max-height` — dort sind `90vh` und `90dvh` dieselbe Angabe, nur mit Rückfall für ältere Browser.

`tests/hatg-bedingte-vorgaben.test.js` hält es fest, mit Gegenprobe: Ein Feld **mit** Vorgabe muss sehr wohl in der Ausgabe stehen, sonst sagt der Test nichts aus.

**Was daraus für künftige Erhebungen folgt:** Ein Ausweichwert aus dem Quelltext ist nur dann eine Vorgabe, wenn er der **einzige** ist und die Variable nirgends blank gelesen wird. Sonst gehört das Feld leer angelegt. Dieselbe Falle wie bei `--ha-animation-duration-*`, wo der `prefers-reduced-motion`-Block alle vier Stufen auf 1ms setzt — nur dass sie dort beim Auslesen auffiel und hier erst beim Nutzer.

### Kurze und lange Namensform: nur die lange ist ein Theme-Feld

Mehrere Bauteile lesen zwei Namen für dieselbe Wirkung, etwa `--tile-info-primary-color` und `--ha-tile-info-primary-color`. **Nur die `ha-`-Form ist ein Haken**, die kurze ist bauteilintern. Am 05.10.2026 im Quelltext nachgelesen, `src/components/tile/ha-tile-info.ts`:

    --tile-info-gap: var(--ha-tile-info-gap, var(--_tile-info-fixed-gap, 0));
    --tile-info-primary-font-size: var(--ha-tile-info-primary-font-size, …);

Das Bauteil leitet die kurze Form in seinem **eigenen `:host`** aus der langen ab. Ein Theme-Wert kommt über `html` nur als Vererbung an, und die `:host`-Regel des Elements gewinnt dagegen. Dieselbe Prüfung an `ha-tile-icon.ts`: `--tile-icon-color`, `-opacity`, `-hover-opacity` und `-size` setzt es bedingungslos, nur `--ha-tile-icon-border-radius` ist als `@cssprop` dokumentiert — und genau das ist auch der einzige, den die Vorlage `symbole-kachel` benutzt.

**Woran man es erkennt:** Steht der Name als `@cssprop` im Kopfkommentar des Bauteils, ist er öffentlich. Setzt das Bauteil ihn in seinem `:host` ohne vorher eine Theme-Variable zu lesen, ist er intern. 36 der 226 Kandidaten fallen so heraus, im Wesentlichen die `tile-*`- und `control-*`-Familien.

**Offen und zu messen:** Bei `control-*` widersprechen sich Quelltext und eigene Erfahrung. `ha-control-button.ts` setzt `--control-button-background-color: var(--disabled-color)` im `:host` — danach wäre HATGs gleichnamiges Feld wirkungslos. Es steht aber seit Monaten im Glas-Paket, und am 2026-09-14 ist gemessen worden, dass es wirkt. Die wahrscheinliche Auflösung: Es wirkt auf **fremde Karten**, die denselben Namen lesen (Horizon-Cards), nicht auf HAs eigenen Control-Button. Das ist eine Vermutung und gehört an einer laufenden Instanz geklärt, bevor die Familie ergänzt oder HATGs vorhandenes Feld angefasst wird.

### Noch offen

21 von 387 HA-Feldern, 3 Druckerfarben, Mushroom (18 Kandidaten) und Button Card (31 Felder, gegen `src/styles.ts` zu prüfen — auf der Testinstanz nicht installiert).

Zwei Fallen, beide selbst hineingetappt: HA baut Zustandsfarben als `--state-${domain}-${state}-color` zusammen, ein Literalname steht nirgends — ein erster Lauf meldete deshalb `state-switch-on-color` als tot, obwohl es nachweislich das Schalter-Icon färbt. Und ein Ähnlichkeitsvergleich schlägt Nachfolger vor, die zum Teil Unsinn sind (`input-background-color` → `chip-background-color`). Jede Zuordnung gehört gegen die echte Quelle geprüft, nicht gegen eine Heuristik.

## Werte schreiben: der Backslash ist das Fluchtzeichen

`hatgQuoteYamlValue` schreibt einzeilige Werte doppelt gequotet. In einem doppelt gequoteten YAML-Skalar ist der **Backslash** das Fluchtzeichen, er muss deshalb **vor** dem Anführungszeichen verdoppelt werden. Bis 1.3.2b25 wurde nur das Anführungszeichen escaped. Am 2026-10-01 gemessen und mit PyYAML gegengeprüft, also mit dem Parser, den Home Assistant benutzt:

    Eingabe   uix-card: 'ha-card::before { content: "\201C"; }'    liest PyYAML
    Ausgabe   uix-card: "ha-card::before { content: \"\201C\"; }"    ScannerError

`\2` ist keine gültige Fluchtfolge. Ein Wert, der auf `\` endet, verschluckt zusätzlich das Folgefeld. HATGs eigener Parser liest beides klaglos zurück, die Oberfläche sieht sauber aus — und wer `themes: !include_dir_merge_named themes` in der `configuration.yaml` hat (der übliche Weg), bekommt beim nächsten Start den Wiederherstellungsmodus. Das ist der schwerste Ausfall, den HATG auslösen kann: Nicht das Feld fällt aus, sondern die ganze Datei.

## Ein "."-Eintrag gehört der Vorlage, in der er steht

Zwei Fehler an derselben Stelle, beide in 1.3.2b25 behoben.

**Der `"."`-Eintrag wurde verworfen, wenn das einfache Feld schon belegt war.** `hatgEntflechteStilzieleImBag` schrieb ihn nur dorthin, wenn dort nichts stand — sonst fiel er ersatzlos weg, ohne eine Zeile im Bericht. Der Weg dorthin ist alltäglich: `docs/beispiele/glas-basis.yaml` nehmen und von Hand zwei Zeilen `uix-card:` aus einem Forenbeitrag ergänzen. Beim nächsten Import sind `glas-ebene`, `glas-bubble` und `glas-buttons-karten` weg. Jetzt wird angehängt, Vorhandenes zuerst, wie in `hatgRepariereAlteStilziele`. **Ein Test hielt genau das kaputte Verhalten fest** — er hieß "Ein bereits belegtes einfaches Feld wird nicht ueberschrieben" und behauptete, danach stehe dort *nur* der Handeintrag.

**Das Teilen respektiert Markergrenzen.** `symbole-kachel` ist die einzige Vorlage mit einem `.`-Eintrag in einem `-yaml`-Ziel. Holt man diesen Eintrag aus dem Vorlagenblock heraus, bleiben die Marker ohne ihn zurück: Die Vorlage gilt als unvollständig, das Auffrischen hängt sie erneut an, und die herausgeholte Kopie liegt ohne Marker im einfachen Feld. Am 2026-10-01 gemessen: 1027 Zeichen mehr pro Durchlauf, `--symbol-rundung` 1x → 2x → 3x → 4x → 5x. Die einzige Spur war die Berichtszeile "1 UIX-Vorlage auf den aktuellen Stand gebracht" — die klingt nach Normalbetrieb.

**Offen, und es braucht eine Entscheidung:** Sind zusätzlich Vorlagen mit Ziel `uix-card` eingeschaltet (also fast immer), fasst schon der **Export** beide `.`-Einträge zu einem zusammen (`hatgYamlPfadeZusammenfuehren`) und holt den Block dabei aus den Markern. Dort hilft der Eingriff beim Teilen nicht. Eine Vorlage, die CSS in einem `"."`-Eintrag **und** in einem Pfad desselben `-yaml`-Feldes besitzt, lässt sich mit der heutigen Markermaschinerie nicht abbilden: Zieht man die Marker mit, trägt die Vorlage ihren Block zweimal, und `hatgVereinheitlicheVorlagenMarken` lässt von doppelten nur den letzten stehen — also die Hälfte der Vorlage. Die zwei Wege: `symbole-kachel` in zwei Vorlagen teilen (`:host`-Variablen nach `uix-card`, Pfad in eine neue Vorlage), oder der Maschinerie beibringen, dass eine Vorlage CSS in zwei Feldern besitzen darf.

## Idempotenz ist die Prüfung, die gefehlt hat

Ein Durchlauf Import → Export muss beim **zweiten** Mal dasselbe liefern wie beim ersten. Fast jede Durchlaufprüfung fragte bis 1.3.2b25 nur "ist etwas verloren gegangen?", keine "ist etwas dazugekommen?" — und die Hilfsfunktionen in `kopflos.js` konnten Dubletten gar nicht zählen, weil `vorlagenMarken` ein `Set` zurückgibt. Die Größe stand nur als Info da.

Die richtige Erwartung ist nicht "Pass 0 == Pass 1": Der erste Durchlauf normiert (Vorlagen auffrischen, Standards nachfüllen, Ballast entfernen) und darf viel ändern. Ab dem zweiten darf sich nichts mehr ändern.

## Meldungen

**Der Import-Bericht steht seit 1.3.2b5 in einem Fenster in der Mitte** statt als Toast unten, mit einer Zeile je Befund und einem Knopf zum Schließen. Derselbe Text landet als Kommentarblock im Kopf der Theme-Datei (`# Letzter Import am …`), damit er sich Wochen später bei der Fehlersuche noch nachlesen lässt. Ein **eigenes Theme-Feld wäre dafür der falsche Ort**: HATG schreibt nur Felder, die Home Assistant, Bubble oder Mushroom selbst lesen, und der Import löst unbekannte Felder ohnehin wieder auf. Zeilenumbrüche in einer Berichtszeile werden vorher plattgemacht, sonst zerbricht der Kommentar die Datei.

`.modal-box` braucht eine eigene `color`. Ohne sie erbt der Kasten die Schriftfarbe des Wirts — im hellen Erscheinungsbild stand die Überschrift weiß auf weiß.

Die beiden Balken auf der Vorlagenseite, die deckende Flächenfarben beziehungsweise eine zu durchsichtige `card-background-color` bemängelten und per Knopf umschreiben wollten, sind am 2026-09-27 auf Ansage entfernt worden — sie griffen nicht verlässlich. Die vier übrigen Balken bleiben: Ausgabeformat card-mod, verwaiste eigene Blöcke, veraltete Vorlagen und doppelte Pfade.

## Prüfwerkzeuge

`werkzeuge/` enthält drei Werkzeuge gegen die stummen Fehler. Kein `npm install` nötig.

- **`kopflos.js`** baut das Panel mit einem schmalen DOM-Ersatz in node. Damit ist der Durchlauf Import → Export ohne Browser prüfbar — die Klasse lässt sich instanziieren, wenn `render`, `showToast` und `autoSaveState` auf leere Funktionen gesetzt werden.
- **`durchlauf-pruefen.js`** schickt Themes durch Import und Export und meldet verlorene Stilziele, verlorene Vorlagenblöcke und `uix-`Felder, die unter `modes` rutschen. Läuft als `tests/hatg-durchlauf.test.js` in der CI mit — der Test schlägt nachweislich fehl, wenn man den `istFlach`-Fix zurückdreht.
- **`theme-pruefen.js`** liest eine fremde Theme read-only: `$$`, doppelte Pfade, einfaches Feld neben `-yaml`, offene Klammern, doppelte Blöcke, fremde Marken, ungültige Werte.
- **`live-messung.js`** läuft in der Browser-Konsole und zeigt je Stilziel, wie viele `uix-node` entstanden sind und wie viele CSS tragen. Warnt, wenn `drawer`/`sidebar`/`root` leer sind — dann ist die Seite nicht gezeichnet und die Messung taugt nichts.

**Was die Werkzeuge nicht abfangen:** Ob HA oder UIX eine Variable oder einen Typnamen umbenannt haben, sieht nur eine Messung an einer laufenden Instanz. Nach jedem HA- oder UIX-Update gehört deshalb ein Lauf mit `live-messung.js` dazu, und die Typliste in `tests/hatg-vorlagen.test.js` gegen die neue `uix.js`.

## Vor jedem Release, auch vor jeder Beta

```bash
werkzeuge/vor-release.sh 1.3.2b12
```

Läuft alles durch, was ohne laufende Instanz prüfbar ist: Syntax von Panel, Python und allen JSON-Dateien, die komplette Testsuite, eine Theme mit **allen** Vorlagen durch Import und Export, die Beispiel-Themes durch beide Prüfwerkzeuge, und zum Schluss den Stand im Git — nichts Uncommittetes, Branch gepusht, Version im Manifest gleich der geplanten Marke, Marke noch frei. Ein Fehlschlag heißt: nichts veröffentlichen.

Das führende `v` einer Marke wird abgestreift, wie `ci.yml` es tut: Stabile Releases tragen eins (`v1.3.0`), die Version im Manifest nicht. Vorher war das Tor mit dem echten Markennamen eines stabilen Release nicht laufbar.

**Vier Stellen konnten grün melden, ohne geprüft zu haben (bis 1.3.2b25).** Am 2026-10-01 gefunden, die erste nachgestellt:

1. `git status` wurde an der **Ausgabe** geprüft, nicht am Rückgabewert. Ein scheiterndes git liefert eine leere Ausgabe — und die galt als "nichts Uncommittetes". Mit Rückgabewert 128 war der Schritt grün.
2. Die Version wurde mit `2>/dev/null` gelesen, danach stand ein **bedingungsloses** `ok "manifest.json sagt $VERSION"`. War die Datei nicht lesbar, meldete das Tor "ok manifest.json sagt " und lief weiter.
3. Ein Test mit **null** Prüfungen galt als bestanden. Eine Testdatei konnte sich damit selbst stilllegen, ohne rot zu werden — und `hatg-tote-verweise.test.js` tat das: Fehlte die Beispiel-Theme, sprang die Prüfung mit `return` heraus und druckte "ok".
4. Die Marke wurde zeichengenau mit der Version verglichen, siehe oben.

Dazu, weil es dieselbe Fehlerklasse ist: `hassfest` und `hacs` laufen weiterhin **nur** auf `main` und bei PRs gegen `main`. "Seit dem 2026-09-29 läuft die CI auf allen Branches" gilt nur für `ci.yml` und `validate.yml`. Eine Beta aus einem Branch bekommt keinen hassfest-Lauf.

**Anlass:** 1.3.2b11 ging raus, bevor die Prüfungen vollständig gelaufen waren. Möglich war das, weil `ci.yml` nur bei Push auf `main` und bei PRs gegen `main` griff — Betas kommen aber aus einem Branch, und dieser Stand wurde nie angefasst. Seit dem 2026-09-29 läuft die CI auf **allen** Branches und Marken, und ein zweiter Job vergleicht bei einer Marke die Versionsnummer im Manifest mit dem Namen der Marke. Ein Tag auf einem Stand mit alter Nummer wäre sonst besonders tückisch: HACS liefert dann die neue Version mit altem Inhalt aus.

Was das Tor **nicht** abdeckt: ob Home Assistant oder UIX eine Variable oder einen Typnamen umbenannt haben. Dafür bleibt `werkzeuge/live-messung.js` an einer laufenden Instanz nötig.

## Workflows

Vier Stück: `ci`, `hacs`, `hassfest`, `validate`. Der Validate-Lauf geht täglich durch.

**Ein roter Lauf bei `hacs` oder `hassfest` ist dringend** — er gefährdet die Aufnahme in den Store.

**Stand der Einreichung, am 10.10.2026 nachgesehen.** [PR #9706](https://github.com/hacs/default/pull/9706) bei `hacs/default`, eingereicht am 03.08.2026, **offen**, Zustand `REVIEW_REQUIRED` — es ist nichts von uns verlangt worden. Alle Einzelprüfungen grün (Hassfest, HACS action, Owner, Releases, Preflight und die übrigen).

**Die eine rote Zeile täuscht.** `Action checks completed` steht zweimal in der Liste: einmal `FAILURE` um 12:43:47, einmal `SUCCESS` um 12:45:10. Der erste Lauf fiel, während die Einzelprüfungen noch abgebrochen und neu gestartet wurden; 83 Sekunden später war alles grün. Wer nur auf den Rollup schaut, hält die Einreichung für kaputt.

**Die Warteschlange ist kürzer als gedacht, dafür steht sie.** 1857 offene PRs, davon 414 mit `CHANGES_REQUESTED` (die hängen an ihren Einreichern) und 1442 ohne Review. Älter als unserer und noch ohne Review: **107**. Der Durchsatz dagegen:

    Juni 282   Juli 263   August 477   September 20   Oktober 0

Die letzte Charge neuer Integrationen wurde am **02.09.2026** gemergt, fünfzehn auf einmal. Seitdem nichts mehr. Geschlossen wird weiter — am 10.10.2026 noch vier Stück —, das Repository ist also nicht tot.

**Es geht nicht der Reihe nach.** In jener Charge lagen #8389 bis #10542 nebeneinander, also auch PRs, die nach unserem eingereicht wurden. Aus der Position in der Schlange lässt sich kein Termin ableiten.

**Nichts am PR-Branch anfassen.** Bei #10550 hat ein Push den PR automatisch geschlossen, der Einreicher musste neu einreichen und stand damit hinten. Solange nichts verlangt wird, ist Warten die richtige Handlung.

Dependabot ist für dieses Repository aktiviert.

## Zielgruppe

Fortgeschrittene. Wer rund 780 Theme-Variablen anfasst, kennt sein System, nutzt vermutlich schon Bubble Card oder Mushroom und will bis ins Detail gestalten. Das unterscheidet HATG von HA-OS, das sich an Einsteiger richtet.

## Schreibstil

Sachlich, per du, **keine Emojis, kein Marketing-Sprech**. Funktionen beschreiben, was sie tun, nicht wie großartig sie sind.

Alles, was nach außen geht — README, Release Notes, Issue-Antworten, Dokumentation — **immer in beiden Sprachen, deutsch und englisch**. Das Repository hat dafür `README.md` und `README.en.md`.

**Die `HATG_TEXTE`-Falle.** Übersetzungen gehören in den `en:`-Block, nicht daneben. `hatgUebersetze` liest `HATG_TEXTE[sprache]`, also nur `.en` — ein Eintrag direkt unter `HATG_TEXTE` ist stumm unerreichbar. Am 2026-10-01 standen so **21** Einträge davor: Die englische Oberfläche zeigte für sieben Vorlagen deutschen Text (`symbole-kachel` samt drei Geschwistern, `schalter-verlauf` samt zwei). Der Test war grün, weil er im **Quelltextausschnitt** nach dem String suchte und nicht im Objekt — der Ausschnitt enthielt die toten Einträge mit. Wer das prüft, fragt `HATG_TEXTE.en[text]` ab.

## Umgang mit GitHub

Nichts auf GitHub beantworten, kommentieren oder schließen, ohne dass der Maintainer es sagt. Antwortentwürfe vorschlagen ist erwünscht.
