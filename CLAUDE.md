# HATG — Home Assistant Theme Generator

Grafisches Panel, das sich in die Seitenleiste von Home Assistant einklinkt und mit dem sich komplette Themes visuell bauen lassen — für Home Assistant, Bubble Card und Mushroom gleichzeitig, ohne YAML von Hand zu schreiben. Am Ende steht eine ganz normale Theme-Datei. Entwickelt von Enrico Fischer (GitHub `Piranha1605`).

Repository: https://github.com/Piranha1605/ha-theme-generator · MIT-Lizenz · Verteilung über HACS

## Aufbau

```
custom_components/hatg/
├── __init__.py           Einstiegspunkt der Integration
├── config_flow.py        Einrichtung über die Oberfläche
├── const.py              Konstanten
├── manifest.json         Domain hatg, aktuell v1.3.0b3
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
- **Thematische Bereiche** — HA-Grundgerüst, Bubble Card mit Unterseiten, Mushroom
- **Alle Felder** — Volltext- und Filtersuche über sämtliche 601 verifizierten Variablen
- **Code-Editor** — textbasierte Bearbeitung mit Syntax-Highlighting
- **Vorlagen** — vorgefertigte CSS-Effekte, eine Unterseite je Stilziel
- **Hintergrundbilder** — über die ganze Oberfläche, mit eigener Galerie
- **HA Live** — Echtzeit-Vorschau auf dem eigenen Dashboard
- **Import und Export** — Theme-Verwaltung und Dateioperationen

## UI eXtension statt card-mod

Seit v1.2.0 schreibt HATG `uix-*`-Felder statt `card-mod-*`. card-mod lädt seit HA 2026.8 die Theme-Abschnitte nicht mehr zuverlässig und wird nicht repariert (card-mod#606). Beim Import werden vorhandene `card-mod-*`-Blöcke angehoben. Wer das alte Format braucht, stellt es im Zahnrad-Menü zurück.

25 Stilziele, jeweils mit einer `-yaml`-Variante für Shadow-DOM-Pfade.

**Ein `-yaml`-Feld verdeckt sein einfaches Feld vollständig.** UIX löst je Stilziel exklusiv auf: liegt `uix-<typ>-yaml` im Theme, wird `uix-<typ>` nie mehr gelesen. Beide nebeneinander zu schreiben lässt das einfache CSS spurlos verschwinden — die Theme-Datei sieht vollständig aus, im Browser kommt nichts an. Seit v1.3.0b1 legt die Ausgabe das einfache CSS deshalb als `"."`-Eintrag in dieselbe YAML-Karte, und der Import trennt es wieder heraus. Wer Themes von Hand bearbeitet oder die Ausgabe anfasst, muss diese Regel kennen.

**Eigenheiten, die in einer laufenden Instanz nachgemessen wurden — beim Ändern von Vorlagen unbedingt beachten:**

- UIX liefert sein CSS als `<uix-node uix-type="…">` mit einem `<style>` darin in den Shadow Root, **nicht** über `adoptedStyleSheets`. Wer am falschen Ort misst, hält jedes Ziel für leer.
- Gemessen wird erst, wenn die Seite wirklich gerendert ist. In einem Hintergrund-Tab baut ein Sections-Dashboard nicht auf; dann sind **alle** `uix-node` leer, auch die funktionierenden. Als Wachposten taugt: erst messen, wenn `drawer`, `sidebar` und `root` Regeln > 0 zeigen.
- `uix-card`: Wo UIX seinen Knoten hängt, hängt vom Aufbau ab. Auf Dashboards liegt eine Karte direkt unter `hui-card` – dann patcht UIX das **Karten-Element** (etwa `hui-tile-card` oder eine eigene Karte), und der Stylesheet landet in dessen Shadow Root: `:host` ist das Karten-Element, `ha-card` die Karte darin. Nur wo keine `hui-card` darüber liegt, patcht UIX `ha-card` selbst; dort ist `:host` die `ha-card`, und ein Selektor `ha-card` trifft nichts. Vorlagen mit `:host, ha-card` bemalen Dashboard-Karten deshalb **doppelt** – Füllung, Glanz und Weichzeichnung liegen zweimal übereinander, der Glanz wirkt ausgewaschen. Gemessen am 2026-09-14 auf einer Sections-Ansicht: alle `uix-node` vom Typ `card` saßen im Shadow Root von `hui-error-card`, eigenen Karten und `bubble-card`, keiner an `ha-card`; UIX `src/patch/ha-card.ts` bricht ab, wenn die Karte unter `hui-card` liegt. `glas-ebene` schreibt deshalb `:host(ha-card), ha-card` – auf Dashboards trifft das nur die innere Karte, und der Glanz liegt einmal statt zweimal.
- Eine Bubble-Karte hat keinen `ha-card`-Vorfahren — sie hängt direkt in der Grid-Section. `uix-card` erreicht sie trotzdem, weil UIX seinen Knoten in `bubble-card` selbst einhängt. Was UIX' Diagnose `uix_style_path()` als "Closest UIX Parent" nennt, ist der nächste Vorfahr mit Konfigurationskontext und **keine** Aussage darüber, welches Stilziel das Element erreicht.
- Bubble Card zeichnet Flächen, Rahmen und Schatten aus eigenen `--bubble-*`-Variablen. CSS-Regeln kommen nicht über Shadow-Grenzen, Variablen schon — Vorlagen für Bubble setzen deshalb Variablen statt Regeln.
- Ein `backdrop-filter` auf dem Host einer Karte macht ihn zum **Bezugsrahmen für `position: fixed`** (ebenso `filter`, `transform`, `will-change`, `contain`). Bubble-Pop-ups sind `fixed` und liegen im Shadow Root von `bubble-card`. Trägt der Host einen Filter, schrumpft das Pop-up auf dessen Größe – 0 × 0 –, landet außerhalb des Fensters, und nur die Kopfzeile schwebt über dem Dashboard. Vorlagen auf `uix-card` dürfen deshalb keinen Filter auf blankes `:host` legen: `glas-ebene` meidet den Wirt ganz, die ältere Einzelvorlage `glas-effekt` setzt ihn mit `:host(.type-custom-bubble-card) { backdrop-filter: none }` zurück; die Klasse setzt UIX. Sichtbar seit 1.3.0b1, weil `uix-card` vorher gar nicht ankam. Am 2026-09-14 gemessen: mit Filter Höhe 0, ohne Höhe 742.
- `ha-panel-config` hat keinen Shadow Root. `uix-config` nimmt darum keinen `:host`-Block an, nur die `-yaml`-Pfade wirken. Alles für die Einstellungsseiten läuft über Pfade oder über `uix-drawer`. (Im Theme steht dort ohnehin nur `uix-config-yaml`, kein einfaches `uix-config` — mit der Verdeckung oben hat dieser Punkt also nichts zu tun, er ist separat zu prüfen.)
- `uix-more-info`: UIX patcht nicht `ha-more-info-dialog`, sondern hängt die Styles an **`ha-adaptive-dialog`**. Pfade in `uix-more-info-yaml` brauchen deshalb ein führendes `$`: `"$ ha-dialog $"` für den Desktop-Dialog, `"$ ha-bottom-sheet $"` für Tablet und Handy – ohne das `$` greift nichts. Das `"."`-CSS landet im Shadow Root von `ha-more-info-dialog`, `:host` ist dort dieser Dialog. Die Dialogfläche färbt HA nur über `background-color`; ein Bild braucht eine Regel auf `wa-dialog::part(dialog)` beziehungsweise `wa-drawer::part(dialog)`. Am 2026-09-14 mit Markierungen an einer laufenden Instanz geprüft.
- `--uix-view-background` gehört zu `ha-panel-lovelace` bzw. `hui-root`, nicht zum Drawer.
- Ein `uix-sidebar-yaml`-Block lässt UIX 8.1.0 beim Laden mit `TypeError … toLowerCase` aussteigen. Danach wendet UIX für den Rest der Sitzung überhaupt keine Vorlage mehr an. Das Benutzer-Icon kommt deshalb ohne Pfad aus.
- UIX stylt nur, was nach ihm entsteht. Ein hartes Neuladen direkt auf einer `/config`-Seite lässt die schon vorhandenen Elemente unberührt.

## Workflows

Vier Stück: `ci`, `hacs`, `hassfest`, `validate`. Der Validate-Lauf geht täglich durch.

**Ein roter Lauf bei `hacs` oder `hassfest` ist dringend** — er gefährdet die Aufnahme in den Store. Die Einreichung läuft als [PR #9706](https://github.com/hacs/default/pull/9706) bei `hacs/default`, eingereicht am 03.08.2026, mit mehreren hundert älteren PRs davor. Dort ist eher mit Monaten als Wochen zu rechnen.

Dependabot ist für dieses Repository aktiviert.

## Zielgruppe

Fortgeschrittene. Wer 601 Theme-Variablen anfasst, kennt sein System, nutzt vermutlich schon Bubble Card oder Mushroom und will bis ins Detail gestalten. Das unterscheidet HATG von HA-OS, das sich an Einsteiger richtet.

## Schreibstil

Sachlich, per du, **keine Emojis, kein Marketing-Sprech**. Funktionen beschreiben, was sie tun, nicht wie großartig sie sind.

Alles, was nach außen geht — README, Release Notes, Issue-Antworten, Dokumentation — **immer in beiden Sprachen, deutsch und englisch**. Das Repository hat dafür `README.md` und `README.en.md`.

## Umgang mit GitHub

Nichts auf GitHub beantworten, kommentieren oder schließen, ohne dass der Maintainer es sagt. Antwortentwürfe vorschlagen ist erwünscht.
