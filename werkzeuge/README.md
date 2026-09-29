# Werkzeuge

Prüfwerkzeuge gegen Fehler, die sonst stumm bleiben. Alle Funde, auf denen sie beruhen, sind an einer laufenden Instanz nachgemessen und in `CLAUDE.md` festgehalten.

Kein `npm install` nötig — die Werkzeuge brauchen nur node.

---

## `vor-release.sh` — das Tor vor jeder Veröffentlichung

```bash
werkzeuge/vor-release.sh            # nur prüfen
werkzeuge/vor-release.sh 1.3.2b12   # und gegen die geplante Marke prüfen
```

Fasst alle anderen Werkzeuge und die Testsuite zusammen und prüft zusätzlich den Stand im Git: nichts Uncommittetes, Branch gepusht, Version im Manifest gleich der geplanten Marke, Marke noch frei. Schlägt etwas fehl, wird nichts veröffentlicht.

**Auch vor Betas.** 1.3.2b11 ging raus, bevor die Prüfungen vollständig gelaufen waren — die CI griff damals nur bei Push auf `main`, Betas kommen aber aus einem Branch. Seit dem 2026-09-29 läuft die CI auf allen Branches und Marken; dieses Skript ist der Schritt davor, auf dem eigenen Rechner.

## `alle-vorlagen-theme.js` — läuft in der CI

```bash
node werkzeuge/alle-vorlagen-theme.js            # nur prüfen
node werkzeuge/alle-vorlagen-theme.js raus.yaml  # und ablegen
```

Schaltet **jede** eingebaute Vorlage ein und schickt die entstandene Theme durch Import und Export. Gemeldet wird eine Vorlage ohne Marker, ein verlorener Block, ein verlorenes Stilziel, ein Stilziel unter `modes` und ein Pfad mit `$$`.

Grund: In `docs/beispiele` liegt genau eine Theme. Der Durchlauf-Test hat damit nur einen Bruchteil der Vorlagen angefasst — und die stummen Fehler stecken in einzelnen Vorlagen.

---

## `durchlauf-pruefen.js` — läuft in der CI

```bash
node werkzeuge/durchlauf-pruefen.js docs/beispiele/*.yaml
HATG_AUSFUEHRLICH=1 node werkzeuge/durchlauf-pruefen.js mein-theme.yaml
```

Schickt ein Theme durch HATGs Import und Export und meldet, was dabei verloren geht:

- ein **Stilziel**, das nicht mehr auftaucht
- ein **Vorlagenblock**, der verschwindet
- ein **`uix-`Feld unter `modes`** statt auf Theme-Ebene — UI eXtension liest Stilziele nur oben, darunter fällt die Vorlage stumm aus

Der letzte Punkt ist der Grund für dieses Werkzeug: Bis 1.3.2b9 schrieb HATG unbekannte `uix-`Felder doppelt unter `modes.light` und `modes.dark`. Betroffen war jede Theme mit eigenen Stilzielen, gemerkt hat es ein Nutzer nach Wochen.

Läuft als `tests/hatg-durchlauf.test.js` bei jedem Push mit.

## `theme-pruefen.js` — vor dem Weitergeben

```bash
node werkzeuge/theme-pruefen.js mein-theme.yaml
```

Liest eine Theme-Datei, ohne sie zu verändern, und sucht:

| Befund | Folge |
|---|---|
| Pfad mit `$$` | legt **jedes** `-yaml`-Feld still, im ganzen Theme |
| doppelter Pfad | UIX verwirft die ganze Karte |
| einfaches Feld neben `-yaml`-Feld | das einfache CSS kommt nie an |
| offene Klammer | alles danach fällt aus |
| doppelter Vorlagenblock | die vorderen Blöcke verlieren |
| fremde Vorlagenmarke | HATG erkennt nur `HATG:` |
| unspeicherbare Vorlagen-Kennung | steht sie auch in `uix-vorlagen.json`, scheitert dort **jedes** Speichern einer Vorlage |
| ungültige Werte, unbekannte Felder | wie HATGs Import sie sieht |

Ein Stilziel, dessen Typ nicht in UIX' fester Liste steht, ist **kein** Fehler: Mit der UIX-Option *Style custom panels* heißt ein Ziel nach dem Wurzelelement des Panels (`uix-hacs-frontend-yaml`). Das Werkzeug meldet es als Hinweis.

Die Kennungen werden absichtlich weit gefasst gelesen (`[^:\s]+` statt `[a-z0-9-]+`). Mit der engen Regex war das Werkzeug für den einen Fall blind, auf den es hier ankommt: eine Kennung mit Umlaut. Am 2026-09-27 hat es genau deshalb in einer fremden Theme zwei solche Kennungen überlesen.

## `live-messung.js` — nach einem HA- oder UIX-Update

Läuft **nicht** in node. Inhalt kopieren, in die Browser-Konsole eines offenen Home Assistant einfügen, Enter.

Zeigt je Stilziel, wie viele `uix-node`-Elemente entstanden sind, wie viele davon CSS tragen, an welchen Wirtselementen sie hängen und welche Vorlagen ankommen.

Zwei Fallen, die das Werkzeug abfängt beziehungsweise meldet:

- **Die Seite muss gezeichnet sein.** In einem Hintergrund-Tab baut ein Sections-Dashboard nicht auf, dann sind *alle* Knoten leer. Das Werkzeug warnt, wenn `drawer`, `sidebar` und `root` leer sind.
- **Karten füllen sich erst beim Scrollen.** Vor der Messung einmal durch die Ansicht scrollen, sonst hält man funktionierende Karten-Vorlagen für tot.

## `kopflos.js`

Gemeinsamer Unterbau: baut das Panel mit einem schmalen DOM-Ersatz in node, damit Import und Export ohne Browser prüfbar sind. Wird von den beiden node-Werkzeugen benutzt, nicht direkt aufgerufen.

---

## Wann was

| Anlass | Werkzeug |
|---|---|
| vor jedem Release **und jeder Beta** | `vor-release.sh` — fasst alles zusammen |
| fremde Theme bekommen | `theme-pruefen.js`, dann `durchlauf-pruefen.js` |
| neues Home Assistant | `live-messung.js`, dazu prüfen, welche HA-Variablen dazugekommen sind |
| neues UI eXtension | `live-messung.js`, dazu die Typliste in `tests/hatg-vorlagen.test.js` gegen die neue `uix.js` |
| Vorlage wirkt nicht | `live-messung.js` — zeigt, ob der Knoten leer ist oder gar nicht entsteht |
