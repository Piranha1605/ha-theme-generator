# HATG — Home Assistant Theme Generator

Grafisches Panel, das sich in die Seitenleiste von Home Assistant einklinkt und mit dem sich komplette Themes visuell bauen lassen — für Home Assistant, Bubble Card und Mushroom gleichzeitig, ohne YAML von Hand zu schreiben. Am Ende steht eine ganz normale Theme-Datei. Entwickelt von Enrico Fischer (GitHub `Piranha1605`).

Repository: https://github.com/Piranha1605/ha-theme-generator · MIT-Lizenz · Verteilung über HACS

## Aufbau

```
custom_components/hatg/
├── __init__.py           Einstiegspunkt der Integration
├── config_flow.py        Einrichtung über die Oberfläche
├── const.py              Konstanten
├── manifest.json         Domain hatg, aktuell v1.3.1, im Test 1.3.2b5
├── translations/         de.json und en.json
├── brand/                Icons für den HACS-Store
└── www/
    ├── hatg-panel.js     das eigentliche Panel, die Hauptdatei
    └── plugins/          Vorschaubilder der Vorlagen
.github/workflows/        ci, hacs, hassfest, validate
docs/screenshots/         Bildmaterial für die README
```

Es ist eine Home-Assistant-Custom-Component in Python, deren Oberfläche in einer einzelnen JavaScript-Datei steckt. `hatg-panel.js` ist die Datei, an der die meiste Arbeit anfällt.

Abhängigkeiten laut Manifest: `frontend`, `http`, `panel_custom`, `websocket_api`. Keine externen Python-Pakete.

Die Versionsnummer steht an vier Stellen und muss überall gleich sein: `manifest.json`, `VERSION` und der Cache-Buster in `FRONTEND_MODULE` in `const.py`, sowie `HATG_VERSION` ganz oben in `hatg-panel.js`.

## Funktionsumfang

- **Startseite** — Grundfarben, Basis-Einstellungen, Zustände, Hintergründe
- **Thematische Bereiche** — HA-Grundgerüst, Bubble Card mit Unterseiten, Mushroom, Button Card (nur ihre eigenen Variablen für Klick-Effekt, Ladeanzeige, Tooltip; gegen button-card v7.0.1 `src/styles.ts` geprüft)
- **Alle Felder** — Volltext- und Filtersuche über sämtliche 608 verifizierten Variablen
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
- **Wie ein Pfadschritt auflöst.** Am 2026-09-27 mit UIX 8.3.1 an drei Varianten desselben Ziels nachgemessen:
  - Der **erste Teil** des Selektors eines Schritts muss **direktes Kind** der aktuellen Wurzel sein, der Rest darf Nachfahre sein. Auf der Einstellungs-Übersicht traf `ha-config-dashboard $ ha-top-app-bar-fixed ha-config-navigation $` alle drei Karten; `ha-config-dashboard $ ha-config-navigation $` traf nichts, obwohl `ha-config-navigation` ein Nachfahre ist, und `ha-config-dashboard $ ha-config-section ha-card ha-config-navigation $` ebenfalls nichts, weil `ha-config-section` kein direktes Kind ist.
  - Ein `$` steigt in den **Shadow Root** ab. Liegt das Element im Licht-DOM, ist das ein Schritt zu viel: `hui-generic-entity-row $ ha-entity-toggle $` traf nichts, `hui-generic-entity-row ha-entity-toggle $` sofort beide Zeilenschalter.
  - **Zwischenschritte nehmen nur den ersten Treffer**, der letzte Schritt alle. Derselbe Pfad eine Ebene tiefer (`… ha-config-navigation $ ha-config-navigation-list $`) kam deshalb nur bei der ersten von drei Karten an.
- **`::part()` statt Pfad, wo es geht.** `"ha-switch $"` findet nichts, sobald das Element tiefer hängt — in eigenen Karten sitzt der Schalter unter `button > div > div > ha-card`. Wo ein Web-Awesome-Element CSS-Teile nach außen gibt, greift `::part()` durch die Shadow-Grenze, unabhängig von der Tiefe, und braucht kein `-yaml`-Feld. `ha-switch` bietet `base`, `control` und `thumb`. Es reicht aber nur durch **eine** Grenze: Der Schalter einer Entitätenzeile (`hui-toggle-entity-row $ hui-generic-entity-row > ha-entity-toggle $ ha-switch`) und der Sammelschalter im Kartenkopf (`ha-card > h1 > hui-entities-toggle $ ha-switch`) brauchen deshalb je einen eigenen Pfad — drei Vorlagen für drei Stellen.
- **Der Zielname muss UIX' eigener Typname sein.** UIX liest `uix-<typ>` beziehungsweise `uix-<typ>-yaml` mit genau dem Namen, unter dem es das Element registriert hat. HATG schrieb bis 1.3.2b3 `uix-states-history-charts`; UIX kennt den Typ als `state-history-charts`, im Singular. Das Feld wurde von nichts gelesen — am 2026-09-27 gemessen: der `uix-node` am Element `state-history-charts` war leer, mit dem richtigen Namen kamen sofort 662 Zeichen an. Ein Test vergleicht `HATG_STILZIELE` jetzt gegen die Typliste aus `uix.js`. Drei Typen von UIX 8.3.1 fehlten ganz und sind seit 1.3.2b4 dabei: `app`, `profile`, `section-background`.
- **`section-background` hängt an der Karte, nicht am Theme.** UIX patcht `hui-section-background` nur, wenn der Abschnitt selbst `background: { uix: … }` trägt (`uix.js`: `c && k(this, "section-background", …)`). Ohne diesen Schlüssel entsteht kein Knoten, und das Theme-Feld bleibt wirkungslos — stumm. Alle anderen Ziele mit Konfiguration (`grid-section`, `entity-marker`, `assist-chip`) patchen ohne Bedingung. Am 2026-09-27 an einer laufenden Instanz beides gemessen.
- **Symbolbehälter haben überall eine Rundungs-Variable.** Am 2026-09-27 an einer laufenden Instanz aus `elementStyles` gelesen: `ha-tile-icon` nimmt `--ha-tile-icon-border-radius` (Vorgabe Pille), `state-badge` nimmt `--state-badge-border-radius` (Vorgabe 50 %), `mushroom-shape-icon` nimmt `--mush-icon-border-radius` (Vorgabe 50 %). Für die Kachelform braucht es deshalb keinen Pfad — Variablen erben durch jede Shadow-Grenze, ein `:host`-Block auf `uix-card` erreicht Kacheln, Mushroom, Zeilen, Glance und Picture-Elements zugleich. **Bei Mushroom muss es `--mush-icon-border-radius` sein**, nicht `--icon-border-radius`: Mushroom setzt letzteres selbst weiter unten im Baum (`--icon-border-radius: var(--mush-icon-border-radius, 50%)`), ein Wert von außen trägt dort nur mit `!important`. UIX hängt seinen Knoten als **erstes** Kind des Shadow Roots ein; seine `:host`-Regeln verlieren deshalb gegen gleich spezifische `:host`-Regeln des Elements selbst.
- **`state-badge` bringt keine Fläche mit.** Der Wirt ist 40 × 40 und durchsichtig, die Zustandsfarbe steht **inline am inneren `ha-state-icon`**, nicht am Wirt (der trägt immer `--state-inactive-color`). Eine Tönung aus `currentColor` am Wirt wäre bei jedem Zustand grau — die Kachel gehört deshalb ans `ha-state-icon` darin, erreichbar über einen Pfad. Die Wege dorthin: `uix-row` → `hui-generic-entity-row $ div.row state-badge $`, `uix-glance` → `state-badge $` (UIX hängt je Eintrag an `div.entity`), `uix-element` → `state-badge $`. Die Symbolfarbe lässt sich dort nicht überschreiben, weil Home Assistant sie inline setzt.
- **Bubble nimmt Verläufe nur über Regeln, nicht über Variablen.** `--bubble-*` sind Farbvariablen; ein Verlauf passt dort nicht hinein. `glas-bubble` schrieb deshalb `background-image: none !important` auf die Container — und räumte damit den Verlauf für ruhende Flächen ab, den HA-, Mushroom- und Horizon-Karten bekamen. Seit 1.3.2b4 steht dort `var(--verlauf-inaktiv, none)` und auf der Zustandsschicht `var(--verlauf-akzent, none)`; ohne gesetzten Verlauf fällt beides auf `none` zurück. Die Ausnahme für Separatoren behält `none`, sonst bekämen Überschriftenzeilen eine Kachelfläche.
- **`ha-switch` spiegelt `checked` nicht als Attribut.** `ha-switch[checked]` trifft nie. Web Awesome meldet den Zustand als Custom State: `ha-switch:state(checked)::part(control)`. Am 2026-09-26 an einem eigens erzeugten Schalter geprüft — Attribut-Selektor griff nicht, State-Selektor griff.
- **Ein doppelter Pfad legt ein ganzes `-yaml`-Feld still.** UIX liest die Karte mit einem strengen YAML-Parser (Fehler `duplicated mapping key`) und verwirft sie komplett – keine Vorlage des Stilziels kommt an, auch nicht der `"."`-Eintrag. Am 2026-09-16 stand `ha-button $:` zweimal in `uix-card-yaml` (eine Vorlage doppelt, einmal mit fremder Marke); alle 48 Karten-Knoten waren leer, Bubble-Karten ohne Rahmen und Pop-ups ohne Hintergrundbild. PyYAML nimmt so eine Datei klaglos hin, geprüft wird deshalb mit `js-yaml`. Die Ausgabe fasst doppelte Pfade zusammen (`hatgYamlPfadeZusammenfuehren`).
- **Keine Weichzeichnung auf der Dialogfläche.** Ein `backdrop-filter` auf `.mdc-dialog__surface` bzw. `wa-dialog::part(dialog)` macht den Dialog zum Bezugsrahmen für `position: fixed`. Die Auswahllisten darin sind `fixed`: Sie landen neben dem sichtbaren Bereich, die Liste bleibt leer. Am 2026-09-20 an der Versionsauswahl von HACS (eingebettetes Panel, erreicht HATG nur über Theme-Variablen) und am Info-Dialog von Home Assistant gemessen; eine Weichzeichnung auf einem `::before` der Fläche hilft nicht. Das Glas-Paket schreibt deshalb `ha-dialog-surface-backdrop-filter: none`, die Vorlagen haben keinen Ausweichwert mehr, und der Import nimmt einen vorhandenen Wert zurück.
- `--uix-view-background` gehört zu `ha-panel-lovelace` bzw. `hui-root`, nicht zum Drawer.
- Ein `uix-sidebar-yaml`-Block lässt UIX 8.1.0 beim Laden mit `TypeError … toLowerCase` aussteigen. Danach wendet UIX für den Rest der Sitzung überhaupt keine Vorlage mehr an. Das Benutzer-Icon kommt deshalb ohne Pfad aus.
- UIX stylt nur, was nach ihm entsteht. Ein hartes Neuladen direkt auf einer `/config`-Seite lässt die schon vorhandenen Elemente unberührt.

## Meldungen

**Der Import-Bericht steht seit 1.3.2b5 in einem Fenster in der Mitte** statt als Toast unten, mit einer Zeile je Befund und einem Knopf zum Schließen. Derselbe Text landet als Kommentarblock im Kopf der Theme-Datei (`# Letzter Import am …`), damit er sich Wochen später bei der Fehlersuche noch nachlesen lässt. Ein **eigenes Theme-Feld wäre dafür der falsche Ort**: HATG schreibt nur Felder, die Home Assistant, Bubble oder Mushroom selbst lesen, und der Import löst unbekannte Felder ohnehin wieder auf. Zeilenumbrüche in einer Berichtszeile werden vorher plattgemacht, sonst zerbricht der Kommentar die Datei.

`.modal-box` braucht eine eigene `color`. Ohne sie erbt der Kasten die Schriftfarbe des Wirts — im hellen Erscheinungsbild stand die Überschrift weiß auf weiß.

Die beiden Balken auf der Vorlagenseite, die deckende Flächenfarben beziehungsweise eine zu durchsichtige `card-background-color` bemängelten und per Knopf umschreiben wollten, sind am 2026-09-27 auf Ansage entfernt worden — sie griffen nicht verlässlich. Die vier übrigen Balken bleiben: Ausgabeformat card-mod, verwaiste eigene Blöcke, veraltete Vorlagen und doppelte Pfade.

## Workflows

Vier Stück: `ci`, `hacs`, `hassfest`, `validate`. Der Validate-Lauf geht täglich durch.

**Ein roter Lauf bei `hacs` oder `hassfest` ist dringend** — er gefährdet die Aufnahme in den Store. Die Einreichung läuft als [PR #9706](https://github.com/hacs/default/pull/9706) bei `hacs/default`, eingereicht am 03.08.2026, mit mehreren hundert älteren PRs davor. Dort ist eher mit Monaten als Wochen zu rechnen.

Dependabot ist für dieses Repository aktiviert.

## Zielgruppe

Fortgeschrittene. Wer rund 570 Theme-Variablen anfasst, kennt sein System, nutzt vermutlich schon Bubble Card oder Mushroom und will bis ins Detail gestalten. Das unterscheidet HATG von HA-OS, das sich an Einsteiger richtet.

## Schreibstil

Sachlich, per du, **keine Emojis, kein Marketing-Sprech**. Funktionen beschreiben, was sie tun, nicht wie großartig sie sind.

Alles, was nach außen geht — README, Release Notes, Issue-Antworten, Dokumentation — **immer in beiden Sprachen, deutsch und englisch**. Das Repository hat dafür `README.md` und `README.en.md`.

## Umgang mit GitHub

Nichts auf GitHub beantworten, kommentieren oder schließen, ohne dass der Maintainer es sagt. Antwortentwürfe vorschlagen ist erwünscht.
