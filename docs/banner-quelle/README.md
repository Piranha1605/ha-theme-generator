# Quelle der Banner / Banner source

`banner-de.html` und `banner-en.html` erzeugen `docs/banner.png` und `docs/banner-en.png`.
Rendern mit Chrome, danach auf 1600 px Breite rechnen:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1600,520 \
  --user-data-dir=/tmp/hatg-banner --virtual-time-budget=2500 \
  --screenshot=roh.png file://$PWD/banner-de.html
sips -Z 1600 roh.png --out ../banner.png
```

Die Werte im Banner (763 Variablen, 57 Vorlagen, 28 Stilziele) stehen im HTML und
muessen bei groesseren Aenderungen am Panel nachgezogen werden.

---

`banner-de.html` and `banner-en.html` produce `docs/banner.png` and `docs/banner-en.png`.
Render them with Chrome as shown above, then scale to 1600 px width. The figures in the
banner (763 variables, 57 presets, 28 style targets) live in the HTML and need updating
when the panel changes substantially.
