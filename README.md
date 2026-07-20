<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/banner.png" alt="HATG – Home Assistant Theme Generator" width="100%" />
</p>

<p align="center">
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/bmac-badge.png" alt="Buy me a coffee" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/Piranha1605/ha-theme-generator?label=Version&color=3ddc84" alt="Version" />
  <img src="https://img.shields.io/badge/HACS-Custom%20Repository-3ddc84?logo=home-assistant&logoColor=white" alt="HACS" />
  <img src="https://img.shields.io/github/stars/Piranha1605/ha-theme-generator?color=3ddc84" alt="Stars" />
  <img src="https://img.shields.io/github/issues/Piranha1605/ha-theme-generator?color=3ddc84" alt="Issues" />
</p>

# HATG — Home Assistant Theme Generator

Ein Theme, jede Karte im Griff. HATG ist ein eigenes Panel direkt in deiner Home-Assistant-Oberfläche, mit dem du komplette Themes visuell aufbaust — für Home Assistant selbst, für **Bubble Card**, für **Mushroom** und für globale Anpassungen per **card-mod**. Kein Hin- und Herspringen zwischen YAML-Dateien mehr, keine Rätselraten, welche Variable welche Karte trifft.

## Warum HATG

Moderne Home-Assistant-Themes bestehen aus hunderten einzelnen Stellschrauben — Farben, Radien, Schatten, Schriften, Zustandsfarben für jede Domain, dazu die jeweils eigenen Variablen von Bubble Card und Mushroom. Von Hand gepflegt wird das schnell unübersichtlich, und kleine Namensfehler bleiben unbemerkt, bis eine Karte plötzlich die falsche Farbe zeigt. Jedes Feld in HATG wurde gegen den echten Home-Assistant-, Bubble-Card- und Mushroom-Quellcode geprüft, damit nur real existierende Variablen enthalten sind. HATG bündelt das gesamte Spektrum in einer Oberfläche, die sowohl Einsteiger als auch Profis bedienen können.

Das Ergebnis lässt sich direkt am eigenen Dashboard nachvollziehen — dieselbe Akzentfarbe, derselbe Radius und derselbe Schatten kommen in der HA-eigenen Oberfläche, in Bubble Card und in Mushroom gleichzeitig an:

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/unified-theme-demo.png" alt="Ein Theme angewendet auf HA-Theme, Mushroom-cardmod und Bubble-cardmod nebeneinander" width="100%" />
</p>

## Features

**User- und Profi-Modus.** Im User-Modus siehst du nur die Grundlagen — Grundfarben, Status-Farben, Radius/Schatten, Schrift. HATG leitet daraus automatisch passende Werte für Bubble Card, Mushroom und alle Zustandsfarben ab. Im Profi-Modus liegen alle Variablen offen, jede automatisch abgeleitete Farbe ist mit einem Badge markiert und lässt sich gezielt überschreiben oder zurücksetzen.

**463 Variablen in 18 Kategorien.** Start, Grundfarben & Text, HA-Grundgerüst (Card/Hintergründe/Tabellen/Theme/Header/Toolbar/App Drawer/Sidebar in eigenen Unterordnern), Status/Icons/Entitäten, Schalter & Toggle, Slider & Progress, Buttons & Chips, Eingaben & Auswahlfelder, Material/Paper/MDC, HA 2026 / Web Awesome, Abstände/Rundungen/Schatten/Rahmen, Schrift & Typografie, RGB-Hilfswerte, Graphen & Energie, Bubble Card, Mushroom, Card-mod & Generator sowie Alle Felder — alles einzeln filter- und durchsuchbar.

**Sync-Widgets zwischen den Frameworks.** Felder, die es in Home Assistant, Bubble Card und Mushroom gleichzeitig gibt, zeigen ein 3er-Icon-Widget zum gegenseitigen Abgleichen; Felder, die nur HA und Bubble Card teilen (z. B. Rahmenfarbe/-dicke), bekommen ein schlankeres 2er-Widget. Ein Klick überträgt den Wert in die jeweils andere Karten-Sprache, ohne dass du die passende Zielvariable erst suchen musst.

**Basis-Vorlage für den Sofort-Start.** Die Werksvorlage laden startet ein komplett neues, sauberes Theme: Themename wird automatisch gesetzt, alle bisherigen Anpassungen werden zurückgesetzt — kein Vermischen alter und neuer Farben mehr.

**Wortbaustein-Filter (Tag-Matrix).** Auf „Alle Felder" lassen sich beliebige Bausteine wie `color`, `background`, `button` kombinieren, dazu weiter einschränkende Zusatz-Tags (z. B. `bubble`, `climate`, `stack`) — so findest du auch in 463 Variablen sofort die richtige.

**Live-Vorschau, die lebt.** Eine simulierte Handy-Oberfläche zeigt sofort, wie sich Änderungen auswirken — mit 5 durchschaltbaren Räumen (Wohnzimmer, Küche, Keller, Garten, Garage) und passenden Kartentypen: Licht, Klima, Media-Player, Sensor, Rollladen/Garage, Türschloss, Slider und Statusfarben-Karte. Umschaltbar zwischen Hell und Dunkel.

**HA Live.** Zeigt dein echtes Home-Assistant-Dashboard direkt im Panel — kein Mockup. Umschaltbar zwischen Handy-, Tablet- und Desktop-Ansicht, mit Auto-Reload nach dem Speichern.

**Farbwähler, wie er sein sollte.** Nativer Farbwähler plus Textfeld, wahlweise als Hex, RGB oder RGBA. Textfelder übernehmen Änderungen automatisch, ohne extra Bestätigungs-Klick.

**Code-Editor im Card-mod-Look.** Die generierte YAML direkt einsehen und bearbeiten, je Sektion in einer eigenen, dunkel syntax-hervorgehobenen Karte — genau dieselbe Editor-Komponente wie beim card-mod-YAML. Werte lassen sich frei eintippen, keine Klick-Farbpunkte mehr nötig.

**Speichern, das wirklich speichert.** Themes werden als echte YAML-Datei nach `config/themes/` geschrieben, inklusive automatischer Konflikt-Erkennung bei doppelten Namen und automatischem Neuladen der Themes in Home Assistant. Zusätzlich: Themes-Ordner direkt laden, laufender Auto-Zwischenspeicher, und Import bestehender Theme-Dateien (auch ältere Exporte werden beim Laden automatisch normalisiert).

**Plugins.** Eigene Seite, um HATG-Erweiterungen ein- und auszuschalten.

## Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/start-light.png" alt="Start-Seite, hell" width="100%" />
</p>

**Start-Seite (hell)** — Theme-Name, Grundfarben mit Hex/RGB/RGBA-Umschalter, Radius und die Live-Vorschau rechts, alle 463 Variablen sind über die Seitenleiste oder „Alle Felder" erreichbar.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/start-dark.png" alt="Start-Seite, dunkel" width="100%" />
</p>

**Start-Seite (dunkel)** — HATG im eigenen Dunkelmodus, mit derselben vereinheitlichten Navigation wie im Screenshot darunter.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/sidebar-nav.png" alt="Seitenleiste mit vereinheitlichtem Design" width="55%" />
</p>

**Seitenleiste.** Alle Menüpunkte — Haupteinträge, Gruppen und Untermenüs — teilen dieselbe Schriftgröße, Schriftstärke und dieselben farbigen Icon-Badges. Bubble Card, Mushroom, HA-Grundgerüst und Tools sind auf einen Blick auseinanderzuhalten.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/sync-widgets.png" alt="Sync-Widget an einem Farbfeld" width="90%" />
</p>

**Framework-Sync direkt am Feld.** Rechts neben Hex/RGB/RGBA sitzt ein kleines Icon-Widget (hier HA, Bubble Card und Mushroom) — ein Klick übernimmt die Farbe in die jeweils andere Karten-Sprache.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/preview-toggle.png" alt="Umschalter zwischen simulierter Vorschau und echtem HA-Live" width="60%" />
</p>

**Demo oder echtes Dashboard.** Oben rechts an jeder Vorschau lässt sich zwischen der simulierten Demo-Ansicht und „HA Live" — deinem echten Dashboard — umschalten.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-desktop.png" alt="HA Live, Desktop-Ansicht" width="100%" />
</p>

**HA Live – Desktop.** Dein echtes Dashboard eingebettet im Panel, in voller Breite.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-tablet.png" alt="HA Live, Tablet-Ansicht" width="100%" />
</p>

**HA Live – Tablet.** Dieselbe Live-Ansicht im Tablet-Format, um responsive Anpassungen sofort zu prüfen.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-phone.png" alt="HA Live, Handy-Ansicht" width="60%" />
</p>

**HA Live – Handy.** Und im Handy-Format — alle drei Geräteansichten laden automatisch neu, sobald du speicherst.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/open-menu.png" alt="Öffnen-Menü" width="45%" />
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/save-menu.png" alt="Speichern-Menü" width="45%" />
</p>

**Öffnen-Menü** (links) — Theme importieren, zuletzt gesicherten Browser-Entwurf laden, oder eine Basis-Vorlage laden. **Speichern-Menü** (rechts) — als Datei nach `config/themes/` schreiben, Zwischenstand sichern oder das Theme vor dem Speichern validieren lassen.

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
