#!/usr/bin/env bash
# Alles pruefen, was ohne laufende Instanz pruefbar ist - vor jedem Release,
# auch vor jeder Beta.
#
#   werkzeuge/vor-release.sh            # nur pruefen
#   werkzeuge/vor-release.sh 1.3.2b12   # und gegen die geplante Marke pruefen
#
# Anlass: 1.3.2b11 ging raus, bevor die Pruefungen vollstaendig gelaufen waren -
# die CI greift nur bei Push auf main und bei PRs gegen main, Betas kommen aber
# aus einem Branch. Dieses Skript ist das Tor davor.
#
# Run every check that works without a live instance, before any release,
# including betas.

set -uo pipefail
cd "$(dirname "$0")/.."

MARKE="${1:-}"
FEHLER=0
SCHRITT=0

kopf() { SCHRITT=$((SCHRITT + 1)); printf '\n[%d] %s\n' "$SCHRITT" "$1"; }
ok()   { printf '    ok   %s\n' "$1"; }
fehl() { printf '    FEHL %s\n' "$1"; FEHLER=$((FEHLER + 1)); }

kopf "Syntax"
if node --check custom_components/hatg/www/hatg-panel.js 2>/dev/null; then
  ok "hatg-panel.js"
else
  fehl "hatg-panel.js hat einen Syntaxfehler"
  node --check custom_components/hatg/www/hatg-panel.js 2>&1 | head -5 | sed 's/^/         /'
fi
for f in custom_components/hatg/*.py; do
  if python3 -c "import ast,sys; ast.parse(open(sys.argv[1]).read())" "$f" 2>/dev/null; then
    ok "$(basename "$f")"
  else
    fehl "$(basename "$f") hat einen Syntaxfehler"
  fi
done
for f in custom_components/hatg/manifest.json hacs.json custom_components/hatg/translations/*.json; do
  if python3 -m json.tool "$f" >/dev/null 2>&1; then ok "$(basename "$f")"; else fehl "$f ist kein gueltiges JSON"; fi
done

kopf "Tests"
for t in tests/*.test.js; do
  if ausgabe=$(node "$t" 2>&1); then
    # Die Testdateien schreiben ihre Zeilen unterschiedlich weit eingerueckt.
    ANZAHL=$(printf '%s' "$ausgabe" | grep -cE '^[[:space:]]*ok ')
    # Null Pruefungen heisst nicht bestanden, sondern nichts getan. Eine
    # Testdatei kann sich selbst stilllegen, ohne rot zu werden - etwa wenn sie
    # bei fehlender Beispiel-Theme mit return abbricht und trotzdem "ok" druckt.
    if [ "$ANZAHL" -gt 0 ]; then
      ok "$(basename "$t")  $ANZAHL Pruefungen"
    else
      fehl "$(basename "$t") hat keine einzige Pruefung ausgefuehrt"
    fi
  else
    fehl "$(basename "$t")"
    printf '%s\n' "$ausgabe" | grep -A3 'FEHL' | head -12 | sed 's/^/         /'
  fi
done

kopf "Alle Vorlagen durch Import und Export"
if ausgabe=$(node werkzeuge/alle-vorlagen-theme.js 2>&1); then
  printf '%s\n' "$ausgabe" | grep -E '^  [0-9]+ Vorlagen' | sed 's/^  /    ok   /'
else
  fehl "eine Vorlage uebersteht den Durchlauf nicht"
  printf '%s\n' "$ausgabe" | grep -A6 'FEHLER' | sed 's/^/         /'
fi

kopf "Beispiel-Themes"
for f in docs/beispiele/*.yaml; do
  [ -e "$f" ] || continue
  if node werkzeuge/durchlauf-pruefen.js "$f" >/dev/null 2>&1; then
    ok "Durchlauf $(basename "$f")"
  else
    fehl "Durchlauf $(basename "$f")"
    node werkzeuge/durchlauf-pruefen.js "$f" 2>&1 | head -8 | sed 's/^/         /'
  fi
  # Auf den Rueckgabewert schauen, nicht auf den Text: Erst hiess es hier
  # grep -q 'FEHLER:', und weil theme-pruefen.js seine Meldung anders
  # einrueckt als erwartet, lief dieses Tor gruen, waehrend die CI mit
  # demselben Befund rot war. Ein Tor, das den Fehlschlag nicht sieht, ist
  # kein Tor.
  if ausgabe=$(node werkzeuge/theme-pruefen.js "$f" 2>&1); then
    ok "Theme-Pruefung $(basename "$f")"
  else
    fehl "Theme-Pruefung $(basename "$f")"
    printf '%s\n' "$ausgabe" | sed -n '/FEHLER:/,/Warnung:\|Befund:/p' | head -8 | sed 's/^/         /'
  fi
done

kopf "Stand im Git"
# Erst den Rueckgabewert, dann die Ausgabe: Ein scheiterndes git liefert eine
# leere Ausgabe, und die galt hier als "nichts Uncommittetes". Am 2026-10-01
# nachgestellt - git mit Rueckgabewert 128 machte den Schritt gruen.
if ! GITSTAND=$(git status --porcelain -- ':!ARTEFAKTE.md' ':!TASKS.md' ':!dashboard.html'); then
  fehl "git status liess sich nicht ausfuehren - der Stand im Git ist unbekannt"
elif [ -z "$GITSTAND" ]; then
  ok "nichts Uncommittetes"
else
  fehl "es liegen ungespeicherte Aenderungen - die kommen nicht in den Tag"
  git status --short -- ':!ARTEFAKTE.md' ':!TASKS.md' ':!dashboard.html' | sed 's/^/         /'
fi
ZWEIG=$(git rev-parse --abbrev-ref HEAD)
if git rev-parse --verify --quiet "origin/$ZWEIG" >/dev/null; then
  VORAUS=$(git rev-list --count "origin/$ZWEIG..HEAD")
  if [ "$VORAUS" = "0" ]; then ok "origin/$ZWEIG ist auf demselben Stand"
  else fehl "$VORAUS Commit(s) nicht gepusht - der Tag wuerde sie nicht enthalten"; fi
else
  fehl "$ZWEIG gibt es auf origin nicht"
fi

kopf "Version"
if ! VERSION=$(python3 -c "import json;print(json.load(open('custom_components/hatg/manifest.json'))['version'])"); then
  fehl "die Version liess sich nicht aus manifest.json lesen"
  VERSION=""
elif [ -z "$VERSION" ]; then
  fehl "manifest.json enthaelt keine Version"
else
  ok "manifest.json sagt $VERSION"
fi
if [ -n "$MARKE" ]; then
  # Stabile Releases tragen ein v (v1.3.0), Betas nicht (1.3.2b18). ci.yml
  # streift es mit ${marke#v} ab, dieses Tor verglich vorher Zeichen fuer
  # Zeichen - mit dem echten Markennamen eines stabilen Release war es damit
  # nicht laufbar und meldete falsches Rot.
  if [ "${MARKE#v}" = "$VERSION" ]; then
    ok "geplante Marke $MARKE passt"
  else
    fehl "geplante Marke $MARKE, im Manifest steht $VERSION"
  fi
  if git rev-parse --verify --quiet "refs/tags/$MARKE" >/dev/null; then
    fehl "die Marke $MARKE gibt es schon"
  else
    ok "die Marke $MARKE ist noch frei"
  fi
fi

printf '\n'
if [ "$FEHLER" -eq 0 ]; then
  printf 'Alle Pruefungen bestanden%s.\n' "${MARKE:+ - $MARKE kann raus}"
  printf 'Nicht abgedeckt: ob HA oder UIX etwas umbenannt haben. Dafuer werkzeuge/live-messung.js an einer laufenden Instanz.\n'
  exit 0
fi
printf '%d Pruefung(en) fehlgeschlagen - nichts veroeffentlichen.\n' "$FEHLER"
exit 1
