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

**Ein Theme, jede Karte im Griff.**

HATG ist ein eigenes Panel in deiner Home-Assistant-Oberfläche, mit dem du komplette Themes visuell aufbaust — für Home Assistant selbst, für **Bubble Card**, für **Mushroom** und für globale Anpassungen per **card-mod**. Kein Springen zwischen YAML-Dateien, kein Raten, welche Variable welche Karte trifft.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/unified-theme-demo.png" alt="Ein Theme, gleichzeitig angewendet auf HA-Karten, Mushroom und Bubble Card" width="100%" />
</p>

---

## Warum HATG

Ein modernes Theme besteht aus hunderten Stellschrauben: Farben, Radien, Schatten, Schriften, Zustandsfarben für jede Domain — dazu die jeweils eigenen Variablen von Bubble Card und Mushroom. Von Hand gepflegt wird das schnell unübersichtlich, und ein einziger Tippfehler im Variablennamen bleibt unbemerkt, bis irgendwo die falsche Farbe auftaucht.

HATG bündelt das in einer Oberfläche. Jedes Feld wurde gegen den echten Quellcode von Home Assistant, Bubble Card und Mushroom geprüft — es sind ausschließlich real existierende Variablen enthalten.

---

## Installation

### Über HACS (empfohlen)

1. HACS öffnen → Drei-Punkte-Menü oben rechts → **Benutzerdefinierte Repositories**
2. URL `https://github.com/Piranha1605/ha-theme-generator` eintragen, Kategorie **Integration**
3. `HATG` suchen und herunterladen
4. Home Assistant neu starten
5. **Einstellungen → Geräte & Dienste → Integration hinzufügen** → nach „HATG" suchen

### Manuell

1. Ordner nach `config/custom_components/hatg/` kopieren
2. Home Assistant neu starten
3. **Einstellungen → Geräte & Dienste → Integration hinzufügen** → „HATG"

HATG erscheint danach als eigener Punkt in der Seitenleiste.

### Voraussetzung für die Cardmod-Funktionen

Die Seite **Cardmod-Vorlagen** und die Felder `card-mod-card` / `card-mod-root` benötigen [card-mod](https://github.com/thomasloven/lovelace-card-mod), ebenfalls über HACS installierbar. Ohne card-mod funktioniert HATG vollständig — nur diese Bausteine bleiben dann wirkungslos.

---

## Funktionen

### User- und Profi-Modus

Im **User-Modus** siehst du nur die Grundlagen: Grundfarben, Status-Farben, Radius und Schatten, Schrift. HATG leitet daraus automatisch passende Werte für Bubble Card, Mushroom und sämtliche Zustandsfarben ab.

Im **Profi-Modus** liegen alle Variablen offen. Jede automatisch abgeleitete Farbe trägt ein Badge und lässt sich gezielt überschreiben oder wieder auf die Ableitung zurücksetzen.

### Cardmod-Vorlagen

Sechs fertige card-mod-Bausteine, die per Klick global im Theme aktiviert werden — kein Kopieren und Einfügen nötig:

| Vorlage | Wirkung |
|---|---|
| **Icon: Farbe & Hintergrund-Chip** | Runder, halbtransparenter Chip hinter jedem Icon in der Akzentfarbe |
| **Kartenfarben: Sanfter Verlauf** | Dezenter Verlauf statt flacher Fläche |
| **Glow / Leucht-Schatten** | Weicher farbiger Leuchtschatten in der Akzentfarbe |
| **Rahmen: Akzentfarbe mit Leuchtkante** | Dünner Rahmen mit innerer Leuchtkante |
| **Glas-Effekt (Blur)** | Milchiges Glas mit Weichzeichner-Unschärfe |
| **Relief: Weiche Tiefenwirkung** | Mehrschichtiger Schatten für leicht erhabene Karten |

Jeder Baustein landet als klar markierter Block in `card-mod-card`, für Hell und Dunkel gleichzeitig. Bereits vorhandenes, selbst geschriebenes CSS bleibt unangetastet — verändert wird ausschließlich der Bereich zwischen den Markern der jeweiligen Vorlage. Mehrere Vorlagen lassen sich kombinieren.

### Alle Variablen, sortiert und auffindbar

515 Variablen in 18 Kategorien: Grundfarben & Text, HA-Grundgerüst (Card, Hintergründe, Theme, Header, Toolbar, App Drawer, Sidebar in eigenen Unterordnern), Status/Icons/Entitäten, Schalter & Toggle, Slider & Progress, Buttons & Chips, Eingaben & Auswahlfelder, Material/Paper/MDC, HA 2026 / Web Awesome, Abstände/Rundungen/Schatten/Rahmen, Schrift & Typografie, RGB-Hilfswerte, Graphen & Energie, Bubble Card, Mushroom, Card-mod sowie eine Gesamtansicht.

Der **Wortbaustein-Filter** kombiniert Bausteine wie `color`, `background` oder `button` mit einschränkenden Zusatz-Tags (`bubble`, `climate`, `stack`) — so findest du auch in 515 Variablen sofort die richtige.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/all-fields-filter.png" alt="Alle Felder mit Wortbaustein-Filter" width="100%" />
</p>

### Sync-Widgets zwischen den Frameworks

Felder, die es in Home Assistant, Bubble Card und Mushroom gleichzeitig gibt, zeigen ein 3er-Icon-Widget zum gegenseitigen Abgleichen. Felder, die nur HA und Bubble Card teilen (etwa Rahmenfarbe und -dicke), bekommen ein schlankeres 2er-Widget. Ein Klick überträgt den Wert in die jeweils andere Karten-Sprache.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/sync-widgets.png" alt="Sync-Widget an einem Farbfeld" width="90%" />
</p>

### Status An / Status Aus

Zwei Master-Farbfelder auf der Startseite steuern gebündelt alle 14 „An"- bzw. 3 „Aus"-Zustandsfarben — jeweils mit Hex/RGB/RGBA-Umschalter und Sync-zu-Dark-Knopf.

### Live-Vorschau

Pixelgenaue Nachbauten echter Home-Assistant-Karten, jede Komponente gegen den originalen Frontend-Quellcode geprüft: Tile-Karte, Entities-Karte mit Schaltern und Slider, Sensor-Karte mit Verlaufsgraph, Tile-Karte mit Feature-Slidern, Gauge-Karte und History-Graph. Dazu zwei aufklappbare Menüs — „Alle Farben der Vorschau" und „Schrift & Typografie" — die genau die Feldwerte zeigen, die gerade sichtbar sind. Umschaltbar zwischen Hell und Dunkel.

### HA Live

Zeigt dein echtes Dashboard direkt im Panel, kein Mockup. Umschaltbar zwischen Handy-, Tablet- und Desktop-Ansicht, mit automatischem Neuladen nach dem Speichern.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-phone.png" alt="HA Live, Handy" width="31%" />
  &nbsp;
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-tablet.png" alt="HA Live, Tablet" width="31%" />
  &nbsp;
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-desktop.png" alt="HA Live, Desktop" width="31%" />
</p>

### Code-Editor

Die erzeugte YAML direkt einsehen und bearbeiten, je Sektion in einer eigenen syntax-hervorgehobenen Karte. Änderungen werden beim Tippen übernommen.

### Plugins

Fertige card-mod-Kopiervorlagen für einzelne Karten: Slider-Effekte, Glaseffekte, zustandsabhängige Kartendesigns. Mehrere lassen sich auswählen und als eine kombinierte Karte kopieren.

### Speichern, das wirklich speichert

Themes werden als echte YAML-Datei nach `config/themes/` geschrieben, mit Konflikt-Erkennung bei doppelten Namen und automatischem Neuladen der Themes in Home Assistant. Dazu: Themes-Ordner direkt laden, laufender Auto-Zwischenspeicher, Import bestehender Theme-Dateien und Validierung vor dem Export.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/open-menu.png" alt="Öffnen-Menü" width="45%" />
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/save-menu.png" alt="Speichern-Menü" width="45%" />
</p>

---

## Erste Schritte

1. HATG in der Seitenleiste öffnen
2. Auf der Startseite einen Themenamen vergeben und die Grundfarbe wählen
3. Optional unter **Cardmod-Vorlagen** einen Baustein aktivieren
4. Oben rechts über das Speichern-Menü **Theme als Datei speichern**
5. **Einstellungen → Profil → Design** auf das neue Theme umstellen

> **Wichtig beim Testen:** Prüfe zuerst unter *Einstellungen → Profil → Design*, welches Theme gerade aktiv ist. Änderungen an einem anderen Theme werden sonst nicht sichtbar.

---

## Häufige Fragen

**Überschreibt HATG meine bestehenden Themes?**
Nur wenn du es ausdrücklich bestätigst. Bei einem Namenskonflikt fragt HATG nach und schlägt einen freien Namen vor.

**Kann ich ein bestehendes Theme weiterbearbeiten?**
Ja. Über das Öffnen-Menü lässt sich jede Datei aus `config/themes/` laden. Ältere Exporte werden beim Laden automatisch auf den aktuellen Aufbau gebracht — inklusive Umstellung alter card-mod-Feldnamen.

**Warum wirkt mein card-mod-CSS nicht?**
Drei Punkte prüfen: card-mod muss über HACS installiert sein, `card-mod-theme` muss exakt dem Themenamen entsprechen (das setzt HATG automatisch), und das Theme muss im Profil auch wirklich ausgewählt sein.

**Braucht HATG Bubble Card oder Mushroom?**
Nein. Die entsprechenden Variablen werden dann einfach ignoriert.

---

## Unterstützen

Wenn dir HATG Zeit spart: [☕ Buy me a coffee](https://buymeacoffee.com/enricotenif)

## Mitmachen

Issues und Pull Requests sind willkommen — besonders Rückmeldungen zu falsch benannten oder fehlenden Theme-Variablen, damit HATG möglichst genau den tatsächlichen Home-Assistant-Frontend-Code trifft. Hilfreich sind dabei: HATG-Version, Home-Assistant-Version und bei Theme-Problemen die betroffene YAML-Datei.
