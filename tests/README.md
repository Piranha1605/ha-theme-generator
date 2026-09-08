# Tests

Abhängigkeitsfreie Node-Tests gegen den ausgelieferten Panel-Code
(`custom_components/hatg/www/hatg-panel.js`). Kein Build-Schritt, keine
npm-Pakete – die Helfer werden direkt aus der Quelldatei ausgeschnitten und
ausgeführt, damit der Test genau das prüft, was HATG ausliefert.

Ausführen:

    node tests/hatg-validate-value.test.js

---

Dependency-free Node tests running against the shipped panel source
(`custom_components/hatg/www/hatg-panel.js`). No build step, no npm packages –
the helpers are sliced straight out of the source file and evaluated, so the
test covers exactly what HATG ships.

Run with:

    node tests/hatg-validate-value.test.js
