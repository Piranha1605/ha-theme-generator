<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/banner.png" alt="HATG – Home Assistant Theme Generator" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/Piranha1605/ha-theme-generator?label=Version&color=2F80ED" alt="Version" />
  <img src="https://img.shields.io/badge/HACS-Custom%20Repository-2F80ED?logo=home-assistant&logoColor=white" alt="HACS" />
  <img src="https://img.shields.io/badge/Variables-515%20verified-2F80ED" alt="515 verified variables" />
  <img src="https://img.shields.io/github/stars/Piranha1605/ha-theme-generator?color=2F80ED" alt="Stars" />
  <img src="https://img.shields.io/github/issues/Piranha1605/ha-theme-generator?color=2F80ED" alt="Issues" />
</p>

<p align="center">
  <a href="https://github.com/Piranha1605/ha-theme-generator/blob/main/README.md">Deutsch</a> · <b>English</b>
</p>

<p align="center">
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/bmac-badge.png" alt="Buy me a coffee" /></a>
</p>

# HATG — Home Assistant Theme Generator

**One theme, every card under control.**

HATG is a dedicated panel in your Home Assistant sidebar for building complete themes visually — for Home Assistant itself, for **Bubble Card**, for **Mushroom** and for global tweaks via **card-mod**. No jumping between YAML files, no guessing which variable hits which card: you set colours, shapes and states in one place, HATG distributes them across all three worlds and shows you the result live — optionally right inside your real dashboard.

Every one of the 515 fields was verified against the actual source code of Home Assistant, Bubble Card and Mushroom. Only variables that genuinely exist are included — what you set is what arrives.

> **A note on language:** the HATG panel interface is currently German only. This page describes everything in English, but the buttons and labels you will see in Home Assistant are in German.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/unified-theme-demo.png" alt="One theme applied simultaneously to HA cards, Mushroom and Bubble Card" width="85%" />
</p>

---

## Contents

[Installation](#installation) · [Your first theme in five minutes](#your-first-theme-in-five-minutes) · [The start page](#the-start-page--from-broad-to-fine) · [All sections](#all-sections-at-a-glance) · [Card-mod presets](#card-mod-presets--global-effects-in-one-click) · [HA Live](#ha-live--your-real-dashboard-as-a-preview) · [Saving & import](#saving-loading-importing) · [Good to know](#good-to-know) · [FAQ](#faq)

---

## Installation

### Via HACS (recommended)

1. Open **HACS** → three-dot menu, top right → **Custom repositories**
2. Enter the URL: `https://github.com/Piranha1605/ha-theme-generator` — category **Integration**
3. Search for **HATG** in HACS and download it
4. **Restart Home Assistant**
5. **Settings → Devices & Services → Add integration** → search for "HATG"

HATG then appears as its own entry in the sidebar. That's it — no further configuration needed.

### Manual

1. Copy the folder `custom_components/hatg/` from this repository to `config/custom_components/hatg/`
2. Restart Home Assistant
3. **Settings → Devices & Services → Add integration** → "HATG"

### Optional but recommended: card-mod

The **Card-mod presets** page and the `card-mod-card` / `card-mod-root` fields only take effect with [card-mod](https://github.com/thomasloven/lovelace-card-mod) installed (also available through HACS). HATG works fully without card-mod — those building blocks simply stay silent.

**Tip for advanced users:** to make card-mod styles apply outside dashboards too (in the sidebar on settings pages, for instance), register card-mod as a frontend module as well. The exact resource URL is listed under **Settings → Dashboards → ⋮ → Resources**:

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/lovelace-card-mod/card-mod.js?hacstag=YOUR_NUMBER
```

Restart Home Assistant afterwards, and update the number after every card-mod update.

---

## Your first theme in five minutes

1. **Open HATG** and give your theme a **name** on the start page
2. Choose **light or dark** — every control always writes to the currently active mode; the ⇄ button copies a setting into the other one
3. Set the **base colours**: primary, accent, background, card and text colour. Hundreds of derived fields follow automatically
4. In the **Basis** block, define border colour, corner radius (outer and inner separately) and shadow
5. Under **States**, pick the colours for on, off and unavailable — they are distributed to Home Assistant, Bubble Card and Mushroom at once
6. Optionally choose a **background**: a gradient or your own image from the gallery, with an opacity slider
7. **Save** at the top right → the theme is written to `config/themes/` and Home Assistant reloads it automatically
8. Select the new theme under **Settings → Profile**

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/start-page.png" alt="The start page: name, base values, Basis block, states and background" width="80%" />
</p>

---

## The start page — from broad to fine

The start page is built as a guided entry point: the few values that shape a theme at the top, and below them the blocks that turn those into a complete design.

### Base colours

Five colours and one radius — that's all the beginning needs. Every colour field offers a **hex/RGB/RGBA switch**, a native colour wheel and a text field for the raw value. Small rows of dots beside them show which derived fields will follow along.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/grundfarben.png" alt="Base colours with hex/RGB/RGBA switch" width="65%" />
</p>

### Basis: border, radius, shadow

Three rows define the basic shape of **all** cards and pass it on to Bubble Card (including every card type) and Mushroom:

| Row | Fields | Special behaviour |
|---|---|---|
| **Border colour** | 5 | also rebuilds the composite `bubble-border` |
| **Radius** | 26 | separate inputs for **outer** and **inner** — nested elements such as icons and sub-buttons automatically get 4 px less, keeping the roundings concentric |
| **Shadow** | 13 | one value for all card shadows, sub-buttons included |

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/basis-block.png" alt="Basis block with border colour, outer/inner radius and shadow" width="65%" />
</p>

### States: on / off / unavailable / icon background

Four rows, each with identical controls — and each distributing its value across all three worlds:

- **State on** — 51 fields. Covers Home Assistant's complete resolution chain (`state-<domain>-<state>` down to `state-active-color`), plus the Bubble active colours and the Mushroom state fields. Fields expecting RGB triplets are converted automatically
- **State off** — 15 fields for the idle state
- **State unavailable** — 2 fields (Bubble and Mushroom offer no dedicated variables for this state)
- **Icon background** — 7 fields for the icon chips of Bubble and Mushroom

Each row has three tools:

- **Chain icon** — decouples Bubble and Mushroom when they should deliberately keep their own colours
- **Refresh button** — rewrites the value onto *all* fields in the row and reports the count ("State on: 51 fields updated"). Useful when individual fields revert to their base colour after an import
- **⇄ button** — transfers the row into the other mode (light ↔ dark)

Semantic colours — weather, alarm, battery, lock, climate modes — are deliberately left untouched: there the colour carries meaning and should not follow the accent colour.

### Background with image gallery

Besides gradients (sunrise, night sky, radial) you can set your **own image**. The gallery shows every image already uploaded to `config/themes/Wallpaper/` as a clickable preview — upload once, reuse in every theme. Identical duplicates are detected by checksum, flagged and removable in one click. The **opacity slider** lays a colour veil over the image — from full strength down to "background colour only", live in the preview.

---

## All sections at a glance

The sidebar organises all 515 fields into thematic sections — Bubble Card with its own subpage per card type:

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/nav-sections.png" alt="Navigation with all sections" width="25%" />
</p>

| Section | Contents |
|---|---|
| **Base colours & text** | Colour palette, state colours, fonts & typography |
| **HA framework** | Cards, header, sidebar, input fields, switches, sliders, dialogs |
| **Bubble Card** | Cards & backgrounds, select, buttons, sub-buttons, separator, popup & dialog, horizontal buttons stack, climate, cover, media player, calendar |
| **Mushroom** | Cards, icons, chips, sliders, toggles, state colours |
| **All fields** | The complete list with full-text search, colour, type and word-fragment filters plus multi-select for bulk changes |
| **Code editor** | Every value as text — type instead of click, changes apply instantly |
| **Card-mod presets** | Global card-mod building blocks in one click, plus your own presets |
| **Plugins** | Copy-and-paste snippets for individual cards (Bubble slider, glass effects, state-dependent design) |

### All fields — finding instead of searching

The **word-fragment filter** combines building blocks such as `color`, `background` or `button` with narrowing tags (`bubble`, `climate`, `stack`) — so even among 515 variables the right one is found in seconds. With multi-select, entire groups of fields get the same value in a single step.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/all-fields-filter.png" alt="All fields with word-fragment filter" width="80%" />
</p>

### Code editor

For everyone who prefers typing: all fields as text with syntax highlighting, grouped by section. Plus the free-form card-mod fields (`card-mod-card`, `card-mod-root`) and a **free field for your own theme entries** that HATG doesn't know — they survive saving and export unchanged.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/code-editor.png" alt="Code editor with all fields as text" width="80%" />
</p>

---

## Card-mod presets — global effects in one click

Ready-made card-mod building blocks applied **globally to the theme** with a single click — marked inside `card-mod-card`, for light and dark simultaneously, individually removable at any time. No copying, no pasting into individual cards.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/cardmod-vorlagen.png" alt="Card-mod presets with built-in and custom presets" width="80%" />
</p>

Five built-in presets are included: **card colour gradient**, **glow shadow**, **border with glowing edge**, **glass effect (blur)** and **relief**. All of them cover native HA cards and every Bubble card type (climate, cover, media player, select, calendar, popup, horizontal buttons stack); Mushroom is already served through the theme variables. Wrapper cards such as headings, Mushroom chips and Bubble sub-buttons deliberately stay frameless.

**Your own presets:** via "New preset" you can create your own CSS blocks — with a name, a description and bracket validation on save. They are stored in `config/themes/hatg-cardmod-vorlagen.json`, so they survive theme and browser changes and are part of your backup. Activating, combining and the automatic refresh detection all work just like the built-in ones.

**Refresh instead of going stale:** the preset CSS lives in your theme file, not in the panel. When a HATG update ships newer versions, a notice bar appears — one click on "Refresh" brings all active blocks up to date. Hand-written CSS is left untouched.

### Plugins — building blocks for individual cards

Some effects don't belong in the theme globally but on exactly one card: slider shapes, glass variants, state-dependent card design (traffic-light effect), sub-button glow states. The plugins page provides them as copy-and-paste snippets with a preview image and an explanation — several can be selected and copied as one combined snippet.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/plugins.png" alt="Plugins page with copy-and-paste snippets" width="80%" />
</p>

---

## HA Live — your real dashboard as a preview

The built-in demo preview reacts instantly to every change — with pixel-accurate recreations of real HA cards, every component verified against the original frontend source. When that isn't enough: **HA Live** shows your *actual* Home Assistant dashboard right inside the panel — not a mockup but the real interface, in a phone, tablet or desktop frame. "Save draft" reloads the themes automatically, and one click on "Refresh" reveals the new colours.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-tablet.png" alt="HA Live in the tablet frame" width="80%" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-phone.png" alt="HA Live in the phone frame" width="40%" />
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/ha-live-desktop.png" alt="HA Live in the desktop frame" width="40%" />
</p>

---

## Saving, loading, importing

- **Save** writes the theme as a YAML file to `config/themes/` and triggers `frontend.reload_themes` — the result is immediately selectable under **Settings → Profile**
- **Save draft** creates a working copy; your progress survives leaving the panel
- **Open** lists every theme in `config/themes/` for direct editing
- **Import** reads any existing theme — including flat themes without a `light:`/`dark:` split. Unknown fields are preserved and re-attached on export, and old card-mod field names are migrated automatically
- **Reapply derivations** (in the save menu) resets fields whose value already matches the derivation back to "automatic" — they then follow their base colour again

The export is valid YAML (verified with the same parser Home Assistant uses), with card-mod fields correctly placed at the flat level.

---

## Good to know

- **Light and dark are separate worlds.** Every control writes only to the currently active mode. Adjusting in light and then checking in dark shows no change — the ⇄ button transfers deliberately into the other mode
- **Badges show the origin of each value:** *automatic* = follows a derivation, *custom* = set by you
- **Undo:** the undo button (or Ctrl/Cmd+Z) reverts the last change — including bulk changes as a whole
- **Validation before export** checks every value against its expected format and flags outliers before they end up in the theme
- **After a HATG update**, do one hard reload (Ctrl/Cmd+Shift+R) so the browser picks up the new panel version

---

## FAQ

**Do I need Bubble Card or Mushroom?**
No. HATG produces fully valid Home Assistant themes. The Bubble and Mushroom fields simply lie dormant until those cards are installed — they don't interfere.

**Does HATG work with my existing theme?**
Yes. HATG reads any theme via import. Unknown fields aren't lost; they're re-attached on export.

**Why does nothing change on my dashboard even though I saved?**
The three most common reasons: (1) a different theme is active under **Settings → Profile**. (2) You edited the other mode (light/dark) than the one your device uses. (3) The browser is holding an old version in cache — do one hard reload.

**What happens to my themes during a HATG update?**
Nothing — themes live in `config/themes/`, custom card-mod presets in `config/themes/hatg-cardmod-vorlagen.json`, background images in `config/themes/Wallpaper/`. All outside the integration folder, all update-safe, all covered by your backup.

**The card-mod presets have no effect.**
[card-mod](https://github.com/thomasloven/lovelace-card-mod) needs to be installed for that. The active theme also has to be the one saved by HATG — the CSS lives in the theme file.

**Can I remove HATG again?**
Any time. The generated themes are ordinary YAML files and keep working without HATG.

---

## Support

HATG is built in spare time. If it saves you time or makes your dashboard nicer:

<p align="center">
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/bmac-badge.png" alt="Buy me a coffee" /></a>
</p>

Found a bug or have a wish? → [Issues](https://github.com/Piranha1605/ha-theme-generator/issues)
