<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/banner.png" alt="HATG – Home Assistant Theme Generator" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/Piranha1605/ha-theme-generator?label=Version&color=2F80ED" alt="Version" />
  <img src="https://img.shields.io/badge/HACS-Custom%20Repository-2F80ED?logo=home-assistant&logoColor=white" alt="HACS" />
  <img src="https://img.shields.io/badge/Variablen-538%20gepr%C3%BCft-2F80ED" alt="538 geprüfte Variablen" />
  <img src="https://img.shields.io/github/stars/Piranha1605/ha-theme-generator?color=2F80ED" alt="Stars" />
  <img src="https://img.shields.io/github/issues/Piranha1605/ha-theme-generator?color=2F80ED" alt="Issues" />
</p>

<p align="center">
  <b>Deutsch</b> · <a href="https://github.com/Piranha1605/ha-theme-generator/blob/main/README.en.md">English</a>
</p>

<p align="center">
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/bmac-badge.png" alt="Buy me a coffee" /></a>
</p>

# HATG — Home Assistant Theme Generator

**Ein Theme, jede Karte im Griff.**

HATG ist ein eigenes Panel in deiner Home-Assistant-Seitenleiste, mit dem du komplette Themes visuell aufbaust — für Home Assistant selbst, für **Bubble Card**, für **Mushroom** und für globale Anpassungen per **UI eXtension (UIX)**. Kein Springen zwischen YAML-Dateien, kein Raten, welche Variable welche Karte trifft: Du stellst Farben, Formen und Zustände an einer Stelle ein, HATG verteilt sie an alle drei Welten und zeigt dir das Ergebnis live — auf Wunsch direkt in deinem echten Dashboard.

Jedes der 538 Felder wurde gegen den echten Quellcode von Home Assistant, Bubble Card und Mushroom beziehungsweise gegen die UIX-Dokumentation geprüft. Es sind ausschließlich real existierende Variablen enthalten — was du einstellst, kommt auch an.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/unified-theme-demo.png" alt="Ein Theme, gleichzeitig angewendet auf HA-Karten, Mushroom und Bubble Card" width="85%" />
</p>

---

## Inhalt

[Installation](#installation) · [In fünf Minuten zum ersten Theme](#in-fünf-minuten-zum-ersten-theme) · [Die Startseite](#die-startseite--vom-groben-ins-feine) · [Alle Bereiche](#alle-bereiche-im-überblick) · [UIX-Vorlagen](#uix-vorlagen--globale-effekte-per-klick) · [HA Live](#ha-live--dein-echtes-dashboard-als-vorschau) · [Speichern & Import](#speichern-laden-import) · [Gut zu wissen](#gut-zu-wissen) · [FAQ](#faq)

---

## Installation

### Über HACS (empfohlen)

1. **HACS** öffnen → Drei-Punkte-Menü oben rechts → **Benutzerdefinierte Repositories**
2. URL eintragen: `https://github.com/Piranha1605/ha-theme-generator` — Kategorie **Integration**
3. In HACS nach **HATG** suchen und herunterladen
4. **Home Assistant neu starten**
5. **Einstellungen → Geräte & Dienste → Integration hinzufügen** → nach „HATG" suchen

HATG erscheint danach als eigener Eintrag in der Seitenleiste. Fertig — weitere Konfiguration ist nicht nötig.

### Manuell

1. Den Ordner `custom_components/hatg/` aus diesem Repository nach `config/custom_components/hatg/` kopieren
2. Home Assistant neu starten
3. **Einstellungen → Geräte & Dienste → Integration hinzufügen** → „HATG"

### Optional, aber empfohlen: UI eXtension (UIX)

Die Seite **UIX-Vorlagen** und die Stilziele (`uix-card`, `uix-root`, `uix-view` und 22 weitere) entfalten ihre Wirkung erst mit installiertem [UI eXtension](https://github.com/Lint-Free-Technology/uix) (ebenfalls über HACS erhältlich). Ohne UIX funktioniert HATG vollständig — nur diese Bausteine bleiben dann stumm.

UIX muss nach dem Download **als Gerät hinzugefügt** werden: **Einstellungen → Geräte & Dienste → Integration hinzufügen → UI eXtension**. Dieser Schritt wird am häufigsten übersehen.

**Du kommst von card-mod?** card-mod lädt seit Home Assistant 2026.8 die Theme-Abschnitte nicht mehr zuverlässig, und ein Fix ist [angekündigterweise nicht mehr zu erwarten](https://github.com/thomasloven/lovelace-card-mod/issues/606). UIX ist der Nachfolger desselben Entwicklers und versteht die alte Schreibweise weiter: bestehende `card-mod-*`-Felder und `card_mod:`-Blöcke funktionieren unverändert. Zu beachten:

1. card-mod deinstallieren — beide gleichzeitig gehen nicht
2. Eine etwaige `extra_module_url`-Zeile für card-mod aus der `configuration.yaml` entfernen; UIX braucht sie nicht
3. UIX über HACS laden, Home Assistant neu starten, UIX als Gerät hinzufügen
4. Theme in HATG einmal neu speichern — dabei werden die Felder auf `uix-` umgestellt

Der Bereich **UIX-Hilfe** im Panel führt durch dieselben Schritte und erklärt die Stilziele im Einzelnen. Wer noch bei card-mod bleiben muss, stellt im Zahnrad-Menü das **Ausgabeformat** auf `card-mod` zurück; HATG schreibt die Theme-Datei dann wieder mit den alten Feldnamen.

---

## In fünf Minuten zum ersten Theme

1. **HATG öffnen** und auf der Startseite einen **Theme-Namen** vergeben
2. **Light oder Dark** wählen — jeder Regler schreibt immer den gerade aktiven Modus, der ⇄-Knopf kopiert eine Einstellung in den jeweils anderen
3. Die **Grundfarben** setzen: Primär-, Akzent-, Hintergrund-, Karten- und Textfarbe. Hunderte abgeleitete Felder ziehen automatisch mit
4. Im Block **Basis** Rahmenfarbe, Eckenradius (außen und innen getrennt) und Schatten festlegen
5. Bei den **Zuständen** die Farben für An, Aus und Nicht verfügbar wählen — sie werden an Home Assistant, Bubble Card und Mushroom gleichzeitig verteilt
6. Optional einen **Hintergrund** wählen: Verlauf oder eigenes Bild aus der Galerie, Deckkraft per Schieberegler
7. Oben rechts **Speichern** → das Theme landet als Datei in `config/themes/` und Home Assistant lädt es automatisch neu
8. Unter **Einstellungen → Profil** das neue Theme auswählen

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/start-page.png" alt="Die Startseite: Name, Grundwerte, Basis-Block, Zustände und Hintergrund" width="80%" />
</p>

---

## Die Startseite — vom Groben ins Feine

Die Startseite ist als geführter Einstieg gebaut: oben die wenigen Werte, die ein Theme prägen, darunter die Blöcke, die daraus ein vollständiges Design machen.

### Grundfarben

Fünf Farben und ein Radius — mehr braucht der Anfang nicht. Jedes Farbfeld bietet einen **Hex/RGB/RGBA-Umschalter**, ein natives Farbrad und ein Textfeld für den direkten Wert. Kleine Punktreihen daneben zeigen, welche abgeleiteten Felder mitziehen.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/grundfarben.png" alt="Grundfarben mit Hex/RGB/RGBA-Umschalter" width="65%" />
</p>

### Basis: Rahmen, Radius, Schatten

Drei Zeilen geben die Grundform **aller** Karten vor und reichen sie an Bubble Card (inklusive aller Kartentypen) und Mushroom weiter:

| Zeile | Felder | Besonderheit |
|---|---|---|
| **Rahmenfarbe** | 5 | setzt auch den zusammengesetzten `bubble-border` neu |
| **Radius** | 26 | getrennte Eingaben für **außen** und **innen** — innen liegende Elemente wie Icons und Sub-Buttons bekommen automatisch 4 px weniger, damit die Rundungen konzentrisch bleiben |
| **Schatten** | 13 | ein Wert für alle Kartenschatten, Sub-Buttons inklusive |

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/basis-block.png" alt="Basis-Block mit Rahmenfarbe, Radius außen/innen und Schatten" width="65%" />
</p>

### Zustände: An / Aus / Nicht verfügbar / Icon-Hintergrund

Vier Zeilen, jede mit derselben Bedienung — und jede verteilt ihren Wert an alle drei Welten:

- **Status An** — 51 Felder. Deckt die komplette Auflösungskette von Home Assistant ab (`state-<domain>-<zustand>` bis `state-active-color`), dazu die Bubble-Aktivfarben und die Mushroom-Zustandsfelder. Felder, die RGB-Tripel erwarten, werden automatisch umgerechnet
- **Status Aus** — 15 Felder für den Ruhezustand
- **Status Nicht verfügbar** — 2 Felder (Bubble und Mushroom bieten für diesen Zustand keine eigenen Variablen an)
- **Icon-Hintergrund** — 7 Felder für die Icon-Chips von Bubble und Mushroom

Jede Zeile hat drei Werkzeuge:

- **Kettensymbol** — koppelt Bubble und Mushroom ab, wenn sie bewusst eigene Farben behalten sollen
- **Auffrischen-Knopf** — schreibt den Wert erneut auf *alle* Felder der Zeile und meldet die Anzahl zurück („Status An: 51 Felder neu gesetzt"). Praktisch, wenn einzelne Felder nach einem Import wieder ihrer Grundfarbe folgen
- **⇄-Knopf** — überträgt die Zeile in den jeweils anderen Modus (Light ↔ Dark)

Semantische Farben — Wetter, Alarm, Batterie, Schloss, Klima-Modi — bleiben bewusst unangetastet: Dort bedeutet die Farbe etwas und soll nicht der Akzentfarbe folgen.

### Hintergrund mit Bildergalerie

Neben Verläufen (Sonnenaufgang, Nachthimmel, Radial) kannst du ein **eigenes Bild** hinterlegen. Die Galerie zeigt alle bereits hochgeladenen Bilder aus `config/themes/Wallpaper/` als anklickbare Vorschau — einmal hochladen, in jedem Theme wiederverwenden. Inhaltsgleiche Duplikate werden per Prüfsumme erkannt, markiert und lassen sich mit einem Klick aufräumen. Der **Deckkraft-Regler** legt einen Farbschleier über das Bild — von voller Stärke bis „nur noch Hintergrundfarbe", live in der Vorschau.

---

## Alle Bereiche im Überblick

Die Seitenleiste gliedert alle 538 Felder in thematische Sektionen — Bubble Card mit eigenen Unterseiten pro Kartentyp:

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/nav-sections.png" alt="Navigation mit allen Sektionen" width="25%" />
</p>

| Bereich | Inhalt |
|---|---|
| **Grundfarben & Text** | Farbpalette, Statusfarben, Schrift & Typografie |
| **HA-Grundgerüst** | Karten, Kopfzeile, Seitenleiste, Eingabefelder, Schalter, Slider, Dialoge |
| **Bubble Card** | Karten & Hintergründe, Select, Buttons, Sub-Buttons, Separator, Popup & Dialog, Horizontal Buttons Stack, Climate, Cover, Media Player, Calendar |
| **Mushroom** | Karten, Icons, Chips, Slider, Toggles, Zustandsfarben |
| **Alle Felder** | Die komplette Liste mit Volltextsuche, Farb-, Typ- und Wortbaustein-Filtern sowie Mehrfachauswahl für Sammel-Änderungen |
| **Code-Editor** | Alle Werte als Text — tippen statt klicken, Änderungen greifen sofort |
| **UIX-Vorlagen** | Globale UIX-Bausteine per Klick, plus eigene Vorlagen |
| **Plugins** | Kopiervorlagen für einzelne Karten (Bubble-Slider, Glas-Effekte, zustandsabhängiges Design) |
| **UIX-Hilfe** | Umstieg von card-mod, alle Stilziele im Überblick, häufige Fehlerquellen |

### Alle Felder — finden statt suchen

Der **Wortbaustein-Filter** kombiniert Bausteine wie `color`, `background` oder `button` mit einschränkenden Zusatz-Tags (`bubble`, `climate`, `stack`) — so ist auch unter 538 Variablen die richtige in Sekunden gefunden. Mit der Mehrfachauswahl bekommen ganze Feldgruppen in einem Schritt denselben Wert.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/all-fields-filter.png" alt="Alle Felder mit Wortbaustein-Filter" width="80%" />
</p>

### Code-Editor

Für alle, die Werte lieber tippen: sämtliche Felder als Text mit Syntax-Färbung, gruppiert nach Bereichen. Dazu die freien UIX-Stilziele (`uix-card`, `uix-root` und die übrigen) und ein **Freifeld für eigene Theme-Einträge**, die HATG nicht kennt — sie überleben Speichern und Export unverändert.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/code-editor.png" alt="Code-Editor mit allen Feldern als Text" width="80%" />
</p>

---

## UIX-Vorlagen — globale Effekte per Klick

Fertige UIX-Bausteine, die per Klick **global ins Theme** übernommen werden — für Light und Dark gleichzeitig, jederzeit einzeln wieder entfernbar. Elf Vorlagen, die nicht nur Karten treffen: Glas und Verläufe für `uix-card`, Glas für Seitenleiste und App Drawer, Eckenradius und Schleier für Dialoge, ein Hintergrundbild über die ganze Oberfläche. Jede Kachel nennt ihr Stilziel; eigene Vorlagen können jedes der 25 Ziele ansteuern. Kein Kopieren, kein Einfügen in einzelne Karten.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/cardmod-vorlagen.png" alt="UIX-Vorlagen mit Werksvorlagen und eigenen Vorlagen" width="80%" />
</p>

Fünf Werksvorlagen sind enthalten: **Kartenfarben-Verlauf**, **Glow / Leucht-Schatten**, **Rahmen mit Leuchtkante**, **Glas-Effekt (Blur)** und **Relief**. Alle decken native HA-Karten und sämtliche Bubble-Kartentypen ab (Climate, Cover, Media Player, Select, Kalender, Popup, Horizontal Buttons Stack); Mushroom ist über die Theme-Variablen bereits versorgt. Hüllen-Karten wie Überschriften, Mushroom-Chips und Bubble-Sub-Buttons bleiben bewusst rahmenlos.

**Eigene Vorlagen:** Über „Neue Vorlage" legst du eigene CSS-Bausteine an — mit Name, Beschreibung und Klammer-Prüfung beim Speichern. Sie landen in `config/themes/hatg-cardmod-vorlagen.json`, überleben also Theme- und Browserwechsel und liegen in deinem Backup. Aktivieren, Kombinieren und die automatische Auffrisch-Erkennung funktionieren wie bei den Werksvorlagen.

**Auffrischen statt veralten:** Das CSS der Vorlagen steht in deiner Theme-Datei, nicht im Panel. Bringt ein HATG-Update neue Versionen mit, erscheint ein Hinweisbalken — ein Klick auf „Auffrischen" hebt alle aktiven Blöcke auf den neuen Stand. Handgeschriebenes CSS bleibt dabei unangetastet.

### Plugins — Bausteine für einzelne Karten

Manche Effekte gehören nicht global ins Theme, sondern auf genau eine Karte: Slider-Formen, Glas-Varianten, zustandsabhängiges Kartendesign (Ampel-Effekt), Sub-Button-Leuchtzustände. Die Plugins-Seite liefert sie als Kopiervorlagen mit Vorschaubild und Erklärung — mehrere lassen sich auswählen und als eine kombinierte Vorlage kopieren.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/plugins.png" alt="Plugins-Seite mit Kopiervorlagen" width="80%" />
</p>

---

## HA Live — dein echtes Dashboard als Vorschau

Die eingebaute Demo-Vorschau reagiert sofort auf jede Änderung — mit pixelgenauen Nachbauten echter HA-Karten, jede Komponente gegen den originalen Frontend-Quellcode geprüft. Wenn das nicht reicht: **HA Live** zeigt dein *echtes* Home-Assistant-Dashboard direkt im Panel — kein Mockup, sondern die echte Oberfläche, wahlweise im Handy-, Tablet- oder Desktop-Rahmen. „Zwischenstand sichern" lädt die Themes automatisch neu, ein Klick auf „Aktualisieren" zeigt die neue Farbgebung.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-tablet.png" alt="HA Live im Tablet-Rahmen" width="80%" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-phone.png" alt="HA Live im Handy-Rahmen" width="40%" />
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-desktop.png" alt="HA Live im Desktop-Rahmen" width="40%" />
</p>

---

## Speichern, Laden, Import

- **Speichern** schreibt das Theme als YAML-Datei nach `config/themes/` und stößt `frontend.reload_themes` an — das Ergebnis ist sofort unter **Einstellungen → Profil** wählbar
- **Zwischenstand sichern** legt eine Arbeitskopie an; dein Stand bleibt auch beim Verlassen des Panels erhalten
- **Öffnen** listet alle Themes aus `config/themes/` zum direkten Weiterbearbeiten
- **Import** liest jedes bestehende Theme ein — auch flache Themes ohne `light:`/`dark:`-Aufteilung. Unbekannte Felder werden aufbewahrt und beim Export wieder angehängt, alte `card-mod-*`-Felder (auch die `-yaml`-Varianten) automatisch auf `uix-*` gehoben
- **Ableitungen neu anwenden** (im Speichern-Menü) setzt Felder, deren Wert ohnehin der Ableitung entspricht, zurück auf „automatisch" — sie folgen dann wieder ihrer Grundfarbe

Der Export ist gültiges YAML (geprüft mit demselben Parser, den Home Assistant verwendet), mit korrekt flach liegenden UIX-Feldern auf Theme-Ebene.

---

## Gut zu wissen

- **Light und Dark sind getrennte Welten.** Jeder Regler schreibt nur den gerade aktiven Modus. Wer in Light einstellt und in Dark nachschaut, sieht keine Änderung — der ⇄-Knopf überträgt gezielt in den anderen Modus
- **Badges zeigen die Herkunft jedes Werts:** *automatisch* = folgt einer Ableitung, *angepasst* = von dir gesetzt
- **Rückgängig:** Der Undo-Knopf (oder Strg/Cmd+Z) nimmt die letzte Änderung zurück — auch Sammel-Änderungen als Ganzes
- **Validierung vor dem Export** prüft alle Werte auf ihr erwartetes Format und meldet Ausreißer, bevor sie im Theme landen
- **Sprache:** HATG spricht Deutsch und Englisch. Die Oberflaeche folgt automatisch der Home-Assistant-Sprache und laesst sich jederzeit ueber das Zahnrad umstellen
- **Nach einem HATG-Update** einmal hart neu laden (Strg/Cmd+Shift+R), damit der Browser die neue Panel-Version zieht

---

## FAQ

**Brauche ich Bubble Card oder Mushroom?**
Nein. HATG erzeugt vollwertige Home-Assistant-Themes. Die Bubble- und Mushroom-Felder liegen einfach brach, bis die Karten installiert sind — sie stören nicht.

**Funktioniert HATG mit meinem bestehenden Theme?**
Ja. Über den Import liest HATG jedes Theme ein. Unbekannte Felder gehen nicht verloren, sondern werden beim Export wieder angehängt.

**Warum ändert sich auf dem Dashboard nichts, obwohl ich gespeichert habe?**
Die drei häufigsten Gründe: (1) Unter **Einstellungen → Profil** ist ein anderes Theme aktiv. (2) Du hast im anderen Modus (Light/Dark) eingestellt als dem, den dein Gerät verwendet. (3) Der Browser hält eine alte Version im Cache — einmal hart neu laden.

**Was passiert bei einem HATG-Update mit meinen Themes?**
Nichts — Themes liegen in `config/themes/`, eigene UIX-Vorlagen in `config/themes/hatg/hatg-uix-vorlagen.json`, Hintergrundbilder in `config/themes/Wallpaper/`. Alles außerhalb des Integrationsordners, alles update-sicher, alles im Backup.

**Die UIX-Vorlagen zeigen keine Wirkung.**
Dafür muss [UI eXtension](https://github.com/Lint-Free-Technology/uix) installiert **und als Gerät hinzugefügt** sein. Außerdem muss das aktive Theme das von HATG gespeicherte sein — das CSS steht in der Theme-Datei.

**Ich nutze noch card-mod. Kann ich HATG weiter verwenden?**
Ja. Im Zahnrad-Menü lässt sich das Ausgabeformat auf `card-mod` stellen, dann schreibt HATG die alten Feldnamen. Zehn der 25 Stilziele kennt card-mod allerdings nicht; sind sie belegt, weist HATG im Bereich **UIX & Generator** darauf hin. Auf Dauer führt kein Weg an UIX vorbei.

**Kann ich HATG wieder entfernen?**
Jederzeit. Die erzeugten Themes sind normale YAML-Dateien und funktionieren ohne HATG weiter.

---

## Unterstützen

HATG entsteht in Freizeitarbeit. Wenn es dir Zeit spart oder dein Dashboard schöner macht:

<p align="center">
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/bmac-badge.png" alt="Buy me a coffee" /></a>
</p>

Fehler gefunden oder Wunsch offen? → [Issues](https://github.com/Piranha1605/ha-theme-generator/issues)
