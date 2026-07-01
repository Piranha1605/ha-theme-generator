<div align="center">

<img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/theme-generator-hero.png" alt="HA Theme Generator" width="100%">

<br>

# HA Theme Generator

**Der moderne Theme-Editor für Home Assistant.**

Erstelle, bearbeite und teste Home-Assistant-Themes direkt im Browser — mit Live-Vorschau, RGBA-Unterstützung, Mushroom/Bubble/card-mod Bereichen und echter Dashboard-Demo.

<br>

<img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/theme-generator-demo.gif" alt="HA Theme Generator Demo" width="100%">

</div>

---

## Highlights

- Moderner Theme-Editor direkt in Home Assistant
- Theme-Dateien laden, bearbeiten, überschreiben und als neue Version speichern
- Live-Vorschau im Home-Assistant-Look
- Demo-Seite über echtes Home-Assistant-Dashboard im iframe
- Mushroom, Bubble Card und card-mod Theme-Bereiche
- HEX, RGB und RGBA Farbbearbeitung
- Transparenz-Regler für echte Farbwerte
- Automatische Trennung normaler Theme-Werte und Custom-Card-Werte
- HACS-kompatibel

---

## Vorschau

Der Theme Generator zeigt dir direkt, wie dein Theme wirkt:

- Grundfarben
- Hintergründe
- Textfarben
- Header
- Sidebar
- Karten
- Icons
- Statusfarben
- Schalter
- Slider
- Eingabefelder
- Mushroom
- Bubble Card
- card-mod

Die **Demo Seite** kann zusätzlich ein echtes Home-Assistant-Dashboard anzeigen. Dadurch werden Mushroom, Bubble Card und andere Custom Cards genauso gerendert wie später im normalen Dashboard.

---

## Installation über HACS

1. HACS öffnen
2. Benutzerdefiniertes Repository hinzufügen
3. Repository einfügen:

```text
https://github.com/Piranha1605/ha-theme-generator
```

4. Kategorie auswählen:

```text
Integration
```

5. Installieren
6. Home Assistant neu starten

---

## Verwendung

Nach der Installation erscheint links in Home Assistant der Menüpunkt:

```text
Theme Generator
```

Dort kannst du:

- Theme-Dateien auswählen
- Themes laden
- Standardwerte laden
- neue Versionen erzeugen
- bestehende Themes überschreiben
- Farben und Transparenzen direkt bearbeiten
- die Vorschau live prüfen
- eine echte Demo-Seite einbinden

---

## Demo Seite

Die Demo Seite zeigt ein echtes Home-Assistant-Dashboard im Vorschaufenster.

Beispiele:

```text
/lovelace/default_view
/lovelace/serversteuerung
/dashboard-serversteuerung/0
/display-kuche/server
```

Damit kannst du dein Theme direkt an echten Karten testen.

---

## Dateien

Die Integration liegt unter:

```text
custom_components/theme_generator/
```

Wichtige Dateien:

```text
custom_components/theme_generator/manifest.json
custom_components/theme_generator/__init__.py
custom_components/theme_generator/www/theme-generator-panel.js
```

---

## Hinweise

Für Mushroom, Bubble Card und card-mod müssen die jeweiligen Custom Cards in Home Assistant installiert sein.

Die Demo Seite nutzt ein echtes Home-Assistant-Dashboard als Vorschau. Dadurch sieht die Darstellung genauso aus wie später im normalen Dashboard.

---

<div align="center">

**HA Theme Generator**  
Modern theme editing for Home Assistant.

</div>
