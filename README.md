<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/banner.png" alt="HATG – Home Assistant Theme Generator" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/Piranha1605/ha-theme-generator?label=Version&color=2f7bff" alt="Version" />
  <img src="https://img.shields.io/badge/HACS-Custom%20Repository-2f7bff?logo=home-assistant&logoColor=white" alt="HACS" />
  <img src="https://img.shields.io/github/stars/Piranha1605/ha-theme-generator?color=2f7bff" alt="Stars" />
  <img src="https://img.shields.io/github/issues/Piranha1605/ha-theme-generator?color=2f7bff" alt="Issues" />
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://img.shields.io/badge/☕-Buy%20me%20a%20coffee-ffdd00" alt="Buy me a coffee" /></a>
</p>

# HATG — Home Assistant Theme Generator

Ein Theme, jede Karte im Griff. HATG ist ein eigenes Panel direkt in deiner Home-Assistant-Oberfläche, mit dem du komplette Themes visuell aufbaust — für Home Assistant selbst, für **Bubble Card**, für **Mushroom** und für globale Anpassungen per **card-mod**. Kein Hin- und Herspringen zwischen YAML-Dateien mehr, keine Rätselraten, welche Variable welche Karte trifft.

## Warum HATG

Moderne Home-Assistant-Themes bestehen aus hunderten einzelnen Stellschrauben — Farben, Radien, Schatten, Schriften, Zustandsfarben für jede Domain, dazu die jeweils eigenen Variablen von Bubble Card und Mushroom. Von Hand gepflegt wird das schnell unübersichtlich, und kleine Namensfehler bleiben unbemerkt, bis eine Karte plötzlich die falsche Farbe zeigt. Jedes Feld in HATG wurde gegen den echten Home-Assistant-, Bubble-Card- und Mushroom-Quellcode geprüft, damit nur real existierende Variablen enthalten sind. HATG bündelt das gesamte Spektrum in einer Oberfläche, die sowohl Einsteiger als auch Profis bedienen können.

## Features

**User- und Profi-Modus.** Im User-Modus siehst du nur die Grundlagen — Grundfarben, Status-Farben, Radius/Schatten, Schrift. HATG leitet daraus automatisch passende Werte für Bubble Card, Mushroom und alle Zustandsfarben ab. Im Profi-Modus liegen alle Variablen offen, jede automatisch abgeleitete Farbe ist mit einem Badge markiert und lässt sich gezielt überschreiben oder zurücksetzen.

**461 Variablen in 19 Kategorien.** Start, Grundfarben & Text, Hintergründe & Karten, Header/Sidebar/Navigation, Status/Icons/Entitäten, Schalter & Toggle, Slider & Progress, Buttons & Chips, Eingaben & Auswahlfelder, Material/Paper/MDC, HA 2026 / Web Awesome, Abstände/Rundungen/Schatten/Rahmen, Schrift & Typografie, RGB-Hilfswerte, Graphen & Energie, Bubble Card, Mushroom, Card-mod & Generator sowie Alle Felder — alles einzeln filter- und durchsuchbar.

**Basis-Vorlagen für den Sofort-Start.** Eine Werksvorlage (z. B. „Warmes Neutral" oder eine der Drucker-Grundfarben) laden startet ein komplett neues, sauberes Theme: Themename wird automatisch gesetzt, alle bisherigen Anpassungen werden zurückgesetzt — kein Vermischen alter und neuer Farben mehr.

**Wortbaustein-Filter (Tag-Matrix).** Auf „Alle Felder" lassen sich beliebige Bausteine wie `color`, `background`, `button` kombinieren, dazu weiter einschränkende Zusatz-Tags (z. B. `bubble`, `climate`, `stack`) — so findest du auch in 461 Variablen sofort die richtige.

**Live-Vorschau, die lebt.** Eine simulierte Handy-Oberfläche zeigt sofort, wie sich Änderungen auswirken — mit 5 durchschaltbaren Räumen (Wohnzimmer, Küche, Keller, Garten, Garage) und passenden Kartentypen: Licht, Klima, Media-Player, Sensor, Rollladen/Garage, Türschloss, Slider und Statusfarben-Karte. Umschaltbar zwischen Hell und Dunkel.

**HA Live.** Zeigt dein echtes Home-Assistant-Dashboard direkt im Panel — kein Mockup. Umschaltbar zwischen Handy-, Tablet- und Desktop-Ansicht, mit Auto-Reload nach dem Speichern.

**Farbwähler, wie er sein sollte.** Nativer Farbwähler plus Textfeld, wahlweise als Hex, RGB oder RGBA. Textfelder übernehmen Änderungen automatisch, ohne extra Bestätigungs-Klick.

**Code-Editor mit Klick-Farbpunkten.** Die generierte YAML direkt einsehen, je Sektion in einer eigenen Karte — jede Farbzeile hat einen anklickbaren Farbpunkt für die schnelle Korrektur, ohne durch die Kategorien zu navigieren.

**Speichern, das wirklich speichert.** Themes werden als echte YAML-Datei nach `config/themes/` geschrieben, inklusive automatischer Konflikt-Erkennung bei doppelten Namen und automatischem Neuladen der Themes in Home Assistant. Zusätzlich: Themes-Ordner direkt laden, laufender Auto-Zwischenspeicher, und Import bestehender Theme-Dateien (auch ältere Exporte werden beim Laden automatisch normalisiert).

**Plugins.** Eigene Seite, um HATG-Erweiterungen ein- und auszuschalten.

## Screenshots

| | |
|---|---|
| ![Start-Seite, hell](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/start-light.png) | ![Start-Seite, dunkel](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/start-dark.png) |
| **Start-Seite (hell)** — Theme-Name, 7 Grundfarben, Live-Vorschau | **Start-Seite (dunkel)** — HATG im eigenen Dunkelmodus |
| ![HA Live](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live.png) | ![Alle Felder, Wortbaustein-Filter](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/all-fields-filter.png) |
| **HA Live** — dein echtes Dashboard direkt im Panel | **Alle Felder** — Wortbaustein-Filter als kombinierbare Tag-Matrix |
| ![Card-mod & Generator](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/card-mod-generator.png) | ![Schalter & Toggle](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/switches-toggle.png) |
| **Card-mod & Generator** — der generierte card-mod-Block, direkt einsehbar | **Schalter & Toggle** — HA als Master, Bubble/Mushroom automatisch abgeleitet |
| ![Kategorien-Navigation](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/sidebar-nav.png) | ![Öffnen-Menü](https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/open-menu.png) |
| **19 Kategorien** in der Seitenleiste, sauber sortiert | **Öffnen-Menü** — Theme importieren, Browser-Entwurf laden, Basis-Vorlage laden |

## Installation

### HACS (empfohlen)

1. HACS öffnen → drei Punkte oben rechts → **Benutzerdefinierte Repositories**.
2. URL `https://github.com/Piranha1605/ha-theme-generator` eintragen, Kategorie **Integration**.
3. `HATG` suchen und installieren.
4. Home Assistant neu starten.
5. HATG erscheint als eigener Menüpunkt in der Seitenleiste.

### Manuell

1. Diesen Ordner nach `config/custom_components/hatg/` kopieren.
2. Home Assistant neu starten.

## Unterstützen

Wenn dir HATG Zeit spart: [☕ Buy me a coffee](https://buymeacoffee.com/enricotenif)

## Mitmachen

Issues und Pull Requests sind willkommen — besonders Rückmeldungen zu falsch benannten oder fehlenden Theme-Variablen, damit HATG möglichst genau den tatsächlichen Home-Assistant-Frontend-Code trifft.
