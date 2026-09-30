DOMAIN = "hatg"
NAME = "HATG"
VERSION = "1.3.2b14"

PANEL_URL = "hatg"
PANEL_TITLE = "HATG"
PANEL_ICON = "mdi:palette-swatch"
PANEL_TAG = "hatg-panel"
STATIC_PATH = "/hatg_static"
FRONTEND_MODULE = "/hatg_static/hatg-panel.js?v=1.3.2b14"

# Die Adresse, unter der HATG die Hintergrundbilder selbst ausliefert. Sie
# bleibt bestehen, damit Themes von vor 1.3.2b13 weiter funktionieren - sie
# zeigt seitdem aber auf denselben Ordner wie /local/hatg.
WALLPAPER_STATIC_PATH = "/hatg_wallpaper"
# Und die Adresse, die ab 1.3.2b13 in die Theme geschrieben wird. /local
# bedient Home Assistant selbst aus config/www, ohne jede Integration. Vorher
# stand in jeder Theme mit Hintergrundbild eine Adresse, die es nur mit
# installiertem HATG gibt: Wer so eine Theme weitergab, beim Empfaenger blieb
# der Hintergrund leer - ohne Fehlermeldung, weil ein fehlendes Bild in CSS
# einfach nichts tut. Am 2026-09-30 an einer weitergegebenen Theme aufgefallen.
WALLPAPER_LOCAL_PATH = "/local/hatg"
