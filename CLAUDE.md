# HATG — Home Assistant Theme Generator

Grafisches Panel, das sich in die Seitenleiste von Home Assistant einklinkt und mit dem sich komplette Themes visuell bauen lassen — für Home Assistant, Bubble Card und Mushroom gleichzeitig, ohne YAML von Hand zu schreiben. Am Ende steht eine ganz normale Theme-Datei. Entwickelt von Enrico Fischer (GitHub `Piranha1605`).

Repository: https://github.com/Piranha1605/ha-theme-generator · MIT-Lizenz · Verteilung über HACS

## Aufbau

```
custom_components/hatg/
├── __init__.py           Einstiegspunkt der Integration
├── config_flow.py        Einrichtung über die Oberfläche
├── const.py              Konstanten
├── manifest.json         Domain hatg, aktuell v1.2.1
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

**Eigenheiten, die in einer laufenden Instanz nachgemessen wurden — beim Ändern von Vorlagen unbedingt beachten:**

- `uix-card`: Das Stylesheet landet im Shadow Root von `ha-card`. Ein Selektor `ha-card` trifft dort nichts, nur `:host`. Die sechs Kartenvorlagen schreiben deshalb `:host, ha-card`.
- `ha-panel-config` hat keinen Shadow Root. `uix-config` nimmt darum keinen `:host`-Block an, nur die `-yaml`-Pfade wirken. Alles für die Einstellungsseiten läuft über Pfade oder über `uix-drawer`.
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
