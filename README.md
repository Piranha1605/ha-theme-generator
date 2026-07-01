<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/theme-generator-hero.png" alt="HA Theme Generator" width="100%">
</p>

# HA Theme Generator

**HA Theme Generator** ist ein modernes Home-Assistant-Panel zum Bearbeiten, Erweitern und Speichern von Theme-Dateien direkt im Browser.

Die Integration sitzt direkt in der Home-Assistant-Seitenleiste und hilft dabei, Theme-Dateien aus `/config/themes/` übersichtlich zu laden, anzupassen, zu speichern und als neue Version abzulegen.

---

## Aktuelle Version

**v1.13.6**

Diese Version verbessert die Farbbearbeitung deutlich:

- Farbwerte können als **HEX**, **RGB** oder **RGBA** dargestellt werden.
- Transparenz wird nur bei echten Farbwerten angezeigt.
- Werte wie `12px`, YAML-Blöcke, Namen oder Textwerte bekommen keinen Transparenzregler mehr.
- Mushroom- und Bubble-Basiswerte können automatisch ergänzt werden.
- Mushroom, Bubble Card und card-mod haben eigene Bereiche im Menü.

---

## Funktionen

- Theme-Dateien direkt aus `/config/themes/` laden
- Live-Vorschau im Home-Assistant-Stil
- Editor- und Vorschauansicht
- Kategorien für Grundfarben, Hintergründe, Textfarben, Header, Sidebar, Karten, Icons, Statusfarben, Schalter, Slider und Eingabefelder
- Eigene Bereiche für Mushroom Card, Bubble Card und card-mod
- Fehlende Mushroom- und Bubble-Werte werden beim Laden ergänzt
- Farbwerte als HEX, RGB oder RGBA bearbeiten
- Speichern als neue Theme-Version
- Bestehende Theme-Datei überschreiben
- Theme-Cache wird nach dem Speichern aktualisiert

---

## Mushroom, Bubble Card und card-mod

Viele Themes enthalten keine eigenen Werte für Mushroom Cards oder Bubble Cards. Der Theme Generator kann fehlende Basiswerte automatisch im Editor ergänzen, damit diese Bereiche nicht leer bleiben.

Die Werte werden erst dauerhaft in die Theme-Datei geschrieben, wenn du **Überschreiben** oder **Neue Version** verwendest.

Die Spezialbereiche sind getrennt von den normalen Einstellungen. Dadurch tauchen Mushroom- und Bubble-Werte nicht zusätzlich unter Grundfarben, Hintergründen oder Icons auf.

---

## Farbformate

Echte Farbwerte können im Generator gezielt umgewandelt werden:

| Format | Beispiel |
|---|---|
| HEX | `#03a9f4` |
| RGB | `rgb(3,169,244)` |
| RGBA | `rgba(3,169,244,0.5)` |

Bei Nicht-Farbwerten wie `12px`, `18px`, Namen, Texten oder YAML-Blöcken wird nur das Eingabefeld angezeigt.

---

## Installation über HACS

1. HACS öffnen
2. Drei Punkte oben rechts öffnen
3. **Benutzerdefinierte Repositories** auswählen
4. Repository eintragen: `https://github.com/Piranha1605/ha-theme-generator`
5. Kategorie: **Integration**
6. Integration installieren
7. Home Assistant neu starten
8. In der Seitenleiste **Theme Generator** öffnen

---

## Nutzung

1. Theme-Datei auswählen
2. **Datei laden** klicken
3. Links eine Kategorie auswählen
4. Werte bearbeiten
5. Vorschau prüfen
6. Mit **Neue Version** eine Kopie erstellen oder mit **Überschreiben** die geladene Datei aktualisieren

---

## Speicherort

Die Integration arbeitet mit Theme-Dateien im Home-Assistant-Ordner `/config/themes/`.

---

## Hinweis

Vor dem Überschreiben wichtiger Themes empfiehlt es sich, zuerst über **Neue Version** eine Kopie zu erstellen.
