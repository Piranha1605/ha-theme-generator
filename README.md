<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/banner.png" alt="HATG – Home Assistant Theme Generator" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/Piranha1605/ha-theme-generator?label=Version&color=2F80ED" alt="Version" />
  <img src="https://img.shields.io/badge/HACS-Custom%20Repository-2F80ED?logo=home-assistant&logoColor=white" alt="HACS" />
  <img src="https://img.shields.io/badge/Variablen-601%20gepr%C3%BCft-2F80ED" alt="601 geprüfte Variablen" />
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

Jedes der 601 Felder wurde gegen den echten Quellcode von Home Assistant, Bubble Card und Mushroom beziehungsweise gegen die UIX-Dokumentation geprüft. Es sind ausschließlich real existierende Variablen enthalten — was du einstellst, kommt auch an.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/unified-theme-demo.png" alt="Ein Theme, gleichzeitig angewendet auf HA-Karten, Mushroom und Bubble Card" width="70%" />
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
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/panel-start.png" alt="Die Startseite: Name, Grundwerte, Basis-Block, Zustände und Hintergrund" width="62%" />
</p>

---

## Die Startseite — vom Groben ins Feine

Die Startseite ist als geführter Einstieg gebaut: oben die wenigen Werte, die ein Theme prägen, darunter die Blöcke, die daraus ein vollständiges Design machen.

### Grundfarben

Fünf Farben und ein Radius — mehr braucht der Anfang nicht. Jedes Farbfeld bietet einen **Hex/RGB/RGBA-Umschalter**, ein natives Farbrad und ein Textfeld für den direkten Wert. Kleine Punktreihen daneben zeigen, welche abgeleiteten Felder mitziehen.

### Basis: Rahmen, Radius, Schatten

Drei Zeilen geben die Grundform **aller** Karten vor und reichen sie an Bubble Card (inklusive aller Kartentypen) und Mushroom weiter:

| Zeile | Felder | Besonderheit |
|---|---|---|
| **Rahmenfarbe** | 5 | setzt auch den zusammengesetzten `bubble-border` neu |
| **Radius** | 26 | getrennte Eingaben für **außen** und **innen** — innen liegende Elemente wie Icons und Sub-Buttons bekommen automatisch 4 px weniger, damit die Rundungen konzentrisch bleiben |
| **Schatten** | 13 | ein Wert für alle Kartenschatten, Sub-Buttons inklusive |

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

Die Seitenleiste gliedert alle 601 Felder in thematische Sektionen — Bubble Card mit eigenen Unterseiten pro Kartentyp, die UIX-Vorlagen mit einer Unterseite pro Stilziel:

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/panel-navigation.png" alt="Die Navigation des Panels mit allen Bereichen" width="22%" />
</p>

| Bereich | Inhalt |
|---|---|
| **Grundfarben & Text** | Farbpalette, Statusfarben, Schrift & Typografie |
| **HA-Grundgerüst** | Karten, Kopfzeile, Seitenleiste, Eingabefelder, Schalter, Slider, Dialoge |
| **Bubble Card** | Karten & Hintergründe, Select, Buttons, Sub-Buttons, Separator, Popup & Dialog, Horizontal Buttons Stack, Climate, Cover, Media Player, Calendar |
| **Mushroom** | Karten, Icons, Chips, Slider, Toggles, Zustandsfarben |
| **Alle Felder** | Die komplette Liste mit Volltextsuche, Farb-, Typ- und Wortbaustein-Filtern sowie Mehrfachauswahl für Sammel-Änderungen |
| **Code-Editor** | Alle Werte als Text — tippen statt klicken, Änderungen greifen sofort |
| **UIX & Generator** | Die 25 Stilziele samt ihrer Shadow-DOM-Varianten, die Glaslook-Werte und ein Freifeld für eigene Theme-Einträge |
| **UIX-Vorlagen** | Globale UIX-Bausteine per Klick, aufgeteilt in eine Unterseite je Stilziel — die Zahl daneben nennt die Vorlagen dieses Ziels |
| **Plugins** | Kopiervorlagen für einzelne Karten (Bubble-Slider, Glas-Effekte, zustandsabhängiges Design) |
| **UIX-Hilfe** | Umstieg von card-mod, alle Stilziele im Überblick, häufige Fehlerquellen |

### Alle Felder — finden statt suchen

Der **Wortbaustein-Filter** kombiniert Bausteine wie `color`, `background` oder `button` mit einschränkenden Zusatz-Tags (`bubble`, `climate`, `stack`) — so ist auch unter 601 Variablen die richtige in Sekunden gefunden. Mit der Mehrfachauswahl bekommen ganze Feldgruppen in einem Schritt denselben Wert.

### Code-Editor

Für alle, die Werte lieber tippen: sämtliche Felder als Text mit Syntax-Färbung, gruppiert nach Bereichen. Dazu die freien UIX-Stilziele (`uix-card`, `uix-root` und die übrigen) und ein **Freifeld für eigene Theme-Einträge**, die HATG nicht kennt — sie überleben Speichern und Export unverändert.

---

## UIX-Vorlagen — globale Effekte per Klick

Fertige UIX-Bausteine, die per Klick **global ins Theme** übernommen werden — für Light und Dark gleichzeitig, jederzeit einzeln wieder entfernbar. **36 Vorlagen**, die nicht nur Karten treffen: Seitenleiste, App Drawer, Kopfleiste, Dialoge, Badges, Kalender, To-do-Listen, Verlauf, eigene Panels und die Einstellungsseiten.

In der Seitenleiste steht jedes Stilziel als eigene Unterseite, mit der Anzahl seiner Vorlagen daneben. Die **Listenansicht** zeigt Name, Beschreibung und Ziel untereinander; ein Klick auf die Zeile klappt genau die Werte auf, die diese Vorlage steuert — ändern ohne Umweg über die Feldliste. Wer lieber Kacheln mag, schaltet oben um.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/panel-uix-vorlagen.png" alt="Alle UIX-Vorlagen in der Listenansicht" width="62%" />
</p>

### Das Glas-Paket

Ein Klick auf **Alle aktivieren** stellt mit 24 Vorlagen jede Fläche des Systems auf Glas: Karten, Seitenleiste, App Drawer, Kopfleiste, Dialoge und Info-Dialog, Badges und Überschriften-Badges, Toast-Meldungen, Benachrichtigungen, Glance-Karten, Kalender, To-do-Listen, Verlauf samt Diagrammen, eigene Panels — und die Bedienelemente in Karten, Kopfleiste, Dialogen und Einstellungen.

Alle 24 hängen an denselben **Glaswerten**, die über der Liste stehen:

| Regler | Wirkung |
|---|---|
| **Deckkraft** | wie viel Fläche das Glas hat — ein Wert, aus dem HATG drei Abstufungen ableitet (leicht, normal, stark) |
| **Weichzeichnung** | die Unschärfe hinter dem Glas, ebenfalls dreifach abgestuft |
| **Farbton hell / dunkel** | getrennte Grundfarben für Light und Dark |
| **Apple-Richtlinie / Glas überall** | nach Apples Vorgabe liegt Glas nur auf der Bedienebene — Navigation und Schaltflächen. „Glas überall" nimmt auch die Inhaltsflächen dazu |
| **Abdunkeln hinter Glas** | die von Apple geforderten 35 % Abdunkelung für helle Hintergründe |

<!-- wartet auf docs/screenshots/panel-glaswerte.png
<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/panel-glaswerte.png" alt="Die Glaswerte über der Vorlagenliste, daneben die Live-Vorschau" width="62%" />
</p>
-->

### Was außerhalb der Karten möglich ist

Ein paar Vorlagen, die man auf den ersten Blick nicht erwartet:

- **Hintergrundbild über die ganze Oberfläche** — legt das Bild von der Startseite hinter Einstellungen, HACS, Verlauf und jedes andere Panel. Die zweite Vorlage **Einstellungsseiten für das Hintergrundbild öffnen** nimmt den Unterseiten der Einstellungen ihre deckende Grundfläche, damit das Bild auch dort durchkommt
- **Eigener Titel in der Seitenleiste** — ersetzt das „Home Assistant" oben links durch einen eigenen Text
- **Einstellungsseiten im iOS-Stil** — macht aus den runden Farbkreisen abgerundete Quadrate mit Lichtverlauf, feiner Kante und Schatten, dazu Zeilenabstand, Schriftgrößen und leisere Pfeile. Wirkt auf allen drei Navigationslisten: Startseite, System und Konnektivität
- **Benutzer-Icon wie die Systemicons** — gibt dem Bild unten in der Seitenleiste dieselbe Form
- **Bedienelemente in Glas** — vier Vorlagen geben Schaltflächen denselben Aufbau wie dem aktiven Eintrag der Seitenleiste, getrennt für Karten, Kopfleiste, Dialoge und den Rest der Oberfläche

### Eigene Vorlagen

Über „Neue Vorlage" legst du eigene CSS-Bausteine an — mit Name, Beschreibung, Stilziel und Klammer-Prüfung beim Speichern. Sie landen in `config/themes/hatg/hatg-uix-vorlagen.json`, überleben also Theme- und Browserwechsel und liegen in deinem Backup. Aktivieren, Kombinieren und die Auffrisch-Erkennung funktionieren wie bei den Werksvorlagen.

Jedes der 25 Stilziele lässt sich ansteuern, jeweils in zwei Formen: als reines CSS (`uix-card`) und als YAML mit Shadow-DOM-Pfaden (`uix-card-yaml`), wenn ein Baustein tief im Inneren einer Komponente sitzt.

### Warnungen, die dir Arbeit ersparen

- **Kollidierende Vorlagen:** Schreiben zwei aktive Vorlagen in dasselbe Feld und überschreiben sich dabei gegenseitig, steht ein Hinweis darüber — samt Knopf, der die ältere entfernt
- **Doppelte Shadow-DOM-Pfade:** In einem `-yaml`-Feld ist jeder Pfad ein YAML-Schlüssel. Zwei Vorlagen mit demselben Pfad löschen sich gegenseitig aus — YAML behält nur die letzte. HATG nennt beide Namen und den Pfad, bevor du es im Dashboard suchst
- **Reste umgezogener Vorlagen:** Wechselt eine Vorlage mit einem Update ihr Stilziel, räumt das Speichern den alten Block von selbst weg und sagt es in der Meldung
- **Veraltete Blöcke:** Das CSS der Vorlagen steht in deiner Theme-Datei, nicht im Panel. Bringt ein Update neue Versionen mit, erscheint ein Hinweisbalken — ein Klick auf „Auffrischen" hebt alle aktiven Blöcke auf den neuen Stand. Handgeschriebenes CSS bleibt unangetastet

### Plugins — Bausteine für einzelne Karten

Manche Effekte gehören nicht global ins Theme, sondern auf genau eine Karte: Slider-Formen, Glas-Varianten, zustandsabhängiges Kartendesign (Ampel-Effekt), Sub-Button-Leuchtzustände. Die Plugins-Seite liefert sie als Kopiervorlagen mit Vorschaubild und Erklärung — mehrere lassen sich auswählen und als eine kombinierte Vorlage kopieren.

---

## HA Live — dein echtes Dashboard als Vorschau

Die eingebaute Demo-Vorschau reagiert sofort auf jede Änderung — mit pixelgenauen Nachbauten echter HA-Karten, jede Komponente gegen den originalen Frontend-Quellcode geprüft. Wenn das nicht reicht: **HA Live** zeigt dein *echtes* Home-Assistant-Dashboard direkt im Panel — kein Mockup, sondern die echte Oberfläche, wahlweise im Handy-, Tablet- oder Desktop-Rahmen. „Zwischenstand sichern" lädt die Themes automatisch neu, ein Klick auf „Aktualisieren" zeigt die neue Farbgebung.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/panel-ha-live.png" alt="HA Live zeigt das echte Dashboard im Panel" width="62%" />
</p>

---

<!-- Galerie wartet auf die Bilder in docs/screenshots/:
     glas-dashboard.png, glas-einstellungen.png, glas-kalender.png,
     glas-profil.png, glas-cloud.png

## Der Glaslook im ganzen System

Das Glas-Paket hört nicht am Dashboard auf. Dieselben Werte tragen die Einstellungsseiten, den Kalender, das Profil und jedes Panel aus der Seitenleiste:

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/glas-dashboard.png" alt="Dashboard mit Glas-Karten und Hintergrundbild" width="62%" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/glas-einstellungen.png" alt="Einstellungsseite mit Icons im iOS-Stil und durchscheinendem Hintergrund" width="45%" />
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/glas-kalender.png" alt="Kalender-Panel in Glas" width="45%" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/glas-profil.png" alt="Profilseite mit Glasflächen" width="45%" />
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/glas-cloud.png" alt="Home Assistant Cloud mit Glasflächen" width="45%" />
</p>

-->

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
- **UIX stylt nur, was nach ihm entsteht.** Lädst du eine `/config`-Seite hart neu, bleiben die schon vorhandenen Elemente unberührt — einmal auf ein Dashboard und zurück, dann sitzt alles

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

**Eine einzelne Vorlage wirkt nicht — woran liegt das?**
Nicht jedes Stilziel erreicht jede Fläche. `ha-panel-config` etwa hat gar keinen Shadow Root, dort kommt ein `:host`-Block nie an — solche Vorlagen sitzen deshalb am App Drawer oder arbeiten mit Shadow-DOM-Pfaden. Wenn du eigene Vorlagen baust: In der Browser-Konsole zeigt `uix_style_path($0)` für ein ausgewähltes Element den Pfad, den UIX dafür erwartet.

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
