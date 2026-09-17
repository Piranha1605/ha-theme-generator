# Tests

Abhängigkeitsfreie Node-Tests gegen den ausgelieferten Panel-Code
(`custom_components/hatg/www/hatg-panel.js`). Kein Build-Schritt, keine
npm-Pakete – die Helfer werden direkt aus der Quelldatei ausgeschnitten und
ausgeführt, damit der Test genau das prüft, was HATG ausliefert.

Alle ausführen, genau wie die CI:

    for t in tests/*.test.js; do node "$t"; done

| Datei | Prüft |
|---|---|
| `hatg-validate-value.test.js` | Theme-Validierung, etwa mehrschichtige `background`-Werte |
| `hatg-stilziel-yaml.test.js` | Zusammenlegen und Auftrennen von `uix-<typ>` und `uix-<typ>-yaml` |
| `hatg-eigenfelder.test.js` | Aufloesen eigener Hilfsfelder (hatg-*, umbenannte Kopien) beim Import |
| `hatg-vorlagen.test.js` | Alle UIX-Vorlagen: Übersetzung von Label und Beschreibung, Klammern, eindeutige IDs, dazu Einzelprüfungen |

---

Dependency-free Node tests running against the shipped panel source
(`custom_components/hatg/www/hatg-panel.js`). No build step, no npm packages –
the helpers are sliced straight out of the source file and evaluated, so the
test covers exactly what HATG ships.

Run with:

    node tests/hatg-validate-value.test.js
