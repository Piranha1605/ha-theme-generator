#!/usr/bin/env bash
# HATG Repo-Audit
# Ausführen im Codespace-Terminal, direkt aus dem Repo-Root:
#   chmod +x audit_hatg_repo.sh
#   ./audit_hatg_repo.sh
#
# Prüft: Versionskonsistenz, den card-mod-theme-Fix, die ha-switch-Namenskorrektur,
# README-Bildpfade, und listet Dateien auf, die nach altem/ungenutztem System aussehen.
# Löscht NICHTS automatisch - gibt nur eine Empfehlung aus, du entscheidest.

set -uo pipefail

PASS="✅"
FAIL="❌"
WARN="⚠️ "

INTEGRATION_DIR="custom_components/hatg"
ok=0
problems=0

section () {
  echo ""
  echo "== $1 =="
}

check () {
  # check "beschreibung" <bedingung als exit code>
  local desc="$1"; local rc="$2"
  if [ "$rc" -eq 0 ]; then
    echo "$PASS $desc"
    ok=$((ok+1))
  else
    echo "$FAIL $desc"
    problems=$((problems+1))
  fi
}

if [ ! -d "$INTEGRATION_DIR" ]; then
  echo "$FAIL Kann '$INTEGRATION_DIR' nicht finden. Bitte Script aus dem Repo-Root starten."
  exit 1
fi

section "1) Versionskonsistenz"

CONST_VERSION=$(grep -oP '(?<=VERSION = ")[^"]+' "$INTEGRATION_DIR/const.py" 2>/dev/null || true)
CONST_MODULE=$(grep -oP '(?<=FRONTEND_MODULE = ")[^"]+' "$INTEGRATION_DIR/const.py" 2>/dev/null || true)
MANIFEST_VERSION=$(grep -oP '(?<="version": ")[^"]+' "$INTEGRATION_DIR/manifest.json" 2>/dev/null || true)
LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "kein Tag gefunden")

echo "const.py VERSION           : ${CONST_VERSION:-<nicht gefunden>}"
echo "const.py FRONTEND_MODULE   : ${CONST_MODULE:-<nicht gefunden>}"
echo "manifest.json version      : ${MANIFEST_VERSION:-<nicht gefunden>}"
echo "letzter git tag            : $LATEST_TAG"

check "const.py und manifest.json Version stimmen überein" \
  $([ -n "$CONST_VERSION" ] && [ -n "$MANIFEST_VERSION" ] && [ "$CONST_VERSION" = "$MANIFEST_VERSION" ] && echo 0 || echo 1)

check "FRONTEND_MODULE-Query-String enthält die aktuelle Version" \
  $([ -n "$CONST_VERSION" ] && echo "$CONST_MODULE" | grep -q "v=$CONST_VERSION" && echo 0 || echo 1)

section "2) card-mod-theme Sync-Fix (v0.4.2)"

PANEL_JS="$INTEGRATION_DIR/www/hatg-panel.js"
if [ -f "$PANEL_JS" ]; then
  check "syncCardModThemeName() ist im Code vorhanden" \
    $(grep -q "syncCardModThemeName" "$PANEL_JS" && echo 0 || echo 1)
  check "buildYamlText() überschreibt card-mod-theme zwangsweise beim Export" \
    $(grep -q 'card-mod-theme' "$PANEL_JS" && grep -q 'value = k === "card-mod-theme"' "$PANEL_JS" && echo 0 || echo 1)
else
  echo "$FAIL $PANEL_JS nicht gefunden"
  problems=$((problems+1))
fi

section "3) ha-switch-* Namenskorrektur (v0.4.1)"

if [ -f "$PANEL_JS" ]; then
  OLD_KEYS="ha-switch-checked-button-color ha-switch-checked-track-color ha-switch-unchecked-button-color ha-switch-unchecked-track-color"
  found_old=0
  for k in $OLD_KEYS; do
    if grep -q "$k" "$PANEL_JS"; then
      echo "$FAIL alter/falscher Key noch vorhanden: $k"
      found_old=1
    fi
  done
  check "keine alten falschen ha-switch-*-Keys mehr im Code" $([ $found_old -eq 0 ] && echo 0 || echo 1)

  check "korrekter Key ha-switch-checked-thumb-background-color vorhanden" \
    $(grep -q "ha-switch-checked-thumb-background-color" "$PANEL_JS" && echo 0 || echo 1)
fi

section "4) README / Banner"

if [ -f "README.md" ]; then
  check "README.md vorhanden" 0
  check "Banner-Bild nutzt absolute raw.githubusercontent.com-URL (nicht relativ)" \
    $(grep -q 'raw.githubusercontent.com.*banner.png' README.md && echo 0 || echo 1)
  REL_IMG=$(grep -oP '!\[[^]]*\]\(\K[^)]+' README.md | grep -v '^http' || true)
  if [ -n "$REL_IMG" ]; then
    echo "$WARN noch relative Bildpfade in README.md gefunden (werden von HACS evtl. nicht angezeigt):"
    echo "$REL_IMG" | sed 's/^/    /'
  else
    echo "$PASS alle Bild-Links in README.md sind absolute URLs"
  fi
else
  echo "$FAIL README.md fehlt am Repo-Root"
  problems=$((problems+1))
fi

section "5) Kandidaten für Aufräumen (altes System / nicht mehr benötigt)"

echo "Diese Liste wird NICHT automatisch gelöscht - bitte einzeln prüfen:"
echo ""

candidates_found=0

# typische Reste
for pattern in "__pycache__" ".DS_Store" "*.pyc" "*.bak" "*_old.*" "*_backup.*"; do
  matches=$(find . -path ./.git -prune -o -iname "$pattern" -print 2>/dev/null | grep -v '^\./\.git')
  if [ -n "$matches" ]; then
    echo "-- $pattern --"
    echo "$matches" | sed 's/^/    /'
    candidates_found=1
  fi
done

# alte Generator-/Build-Skripte, die nicht Teil der Integration sind (falls versehentlich mitcommitet)
for f in gen_panel.py basis.yaml hatg-panel.template.js test_stub2.js final_light.json final_dark.json sections.json; do
  hit=$(find . -path ./.git -prune -o -iname "$f" -print 2>/dev/null | grep -v '^\./\.git')
  if [ -n "$hit" ]; then
    echo "-- Build-/Dev-Datei, gehört wahrscheinlich nicht ins Repo (nur lokales Werkzeug) --"
    echo "$hit" | sed 's/^/    /'
    candidates_found=1
  fi
done

# info.md nur relevant, wenn hacs.json render_readme nicht aktiv ist
if [ -f "hacs.json" ] && [ -f "info.md" ]; then
  if grep -q '"render_readme"[[:space:]]*:[[:space:]]*true' hacs.json; then
    echo "-- info.md --"
    echo "    ./info.md  (render_readme:true in hacs.json aktiv -> HACS zeigt README.md, info.md wird vermutlich nicht mehr genutzt, kannst du wahrscheinlich löschen)"
    candidates_found=1
  fi
fi

# lose VERSION-Datei am Root, falls const.py/manifest.json die Versionsführung übernommen haben
if [ -f "VERSION" ]; then
  echo "-- VERSION (Root-Datei) --"
  echo "    ./VERSION  (Inhalt: $(cat VERSION 2>/dev/null | head -c 40)) -- prüfen, ob das noch irgendwo gelesen wird oder ein Rest vom alten System ist, seit const.py/manifest.json die Version führen"
  candidates_found=1
fi

if [ $candidates_found -eq 0 ]; then
  echo "$PASS keine offensichtlichen Alt-Dateien gefunden"
fi

section "Zusammenfassung"
echo "OK: $ok    Probleme: $problems"
if [ $problems -eq 0 ]; then
  echo "$PASS Alles sieht sauber durchgelaufen aus."
else
  echo "$FAIL Es gibt $problems Punkt(e), die noch nicht stimmen - siehe oben."
fi
