<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/banner.png" alt="HATG – Home Assistant Theme Generator" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/release/Piranha1605/ha-theme-generator?label=Version&color=2F80ED" alt="Version" />
  <img src="https://img.shields.io/badge/HACS-Custom%20Repository-2F80ED?logo=home-assistant&logoColor=white" alt="HACS" />
  <img src="https://img.shields.io/badge/Variables-538%20verified-2F80ED" alt="538 verified variables" />
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

HATG is a dedicated panel in your Home Assistant sidebar for building complete themes visually — for Home Assistant itself, for **Bubble Card**, for **Mushroom** and for global tweaks via **UI eXtension (UIX)**. No jumping between YAML files, no guessing which variable hits which card: you set colours, shapes and states in one place, HATG distributes them across all three worlds and shows you the result live — optionally right inside your real dashboard.

Every one of the 538 fields was verified against the actual source code of Home Assistant, Bubble Card and Mushroom, or against the UIX documentation. Only variables that genuinely exist are included — what you set is what arrives.

> **Language:** HATG speaks English and German. The interface follows your Home Assistant language automatically and can be switched at any time under the gear icon.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/unified-theme-demo.png" alt="One theme applied simultaneously to HA cards, Mushroom and Bubble Card" width="85%" />
</p>

---

## Contents

[Installation](#installation) · [Your first theme in five minutes](#your-first-theme-in-five-minutes) · [The start page](#the-start-page--from-broad-to-fine) · [All sections](#all-sections-at-a-glance) · [UIX presets](#uix-presets--global-effects-in-one-click) · [HA Live](#ha-live--your-real-dashboard-as-a-preview) · [Saving & import](#saving-loading-importing) · [Good to know](#good-to-know) · [FAQ](#faq)

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

### Optional but recommended: UI eXtension (UIX)

The **UIX presets** page and the style targets (`uix-card`, `uix-root`, `uix-view` and 22 more) only take effect with [UI eXtension](https://github.com/Lint-Free-Technology/uix) installed (also available through HACS). HATG works fully without UIX — those building blocks simply stay silent.

After downloading, UIX has to be **added as a device**: **Settings → Devices & Services → Add integration → UI eXtension**. This is the step most people miss.

**Coming from card-mod?** Since Home Assistant 2026.8 card-mod no longer loads theme sections reliably, and [a fix is not going to arrive](https://github.com/thomasloven/lovelace-card-mod/issues/606). UIX is the successor by the same developer and still understands the old notation: existing `card-mod-*` fields and `card_mod:` blocks keep working. What to do:

1. Uninstall card-mod — running both is not possible
2. Remove any `extra_module_url` line for card-mod from `configuration.yaml`; UIX does not need it
3. Download UIX through HACS, restart Home Assistant, add UIX as a device
4. Save your theme once in HATG — the fields are switched to `uix-` in the process

The **UIX help** section in the panel walks through the same steps and explains the style targets one by one. If you have to stay on card-mod for now, switch the **output format** back to `card-mod` in the gear menu; HATG then writes the theme file with the old field names again.

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

The sidebar organises all 538 fields into thematic sections — Bubble Card with its own subpage per card type:

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
| **UIX presets** | Global UIX building blocks in one click, plus your own presets |
| **Plugins** | Copy-and-paste snippets for individual cards (Bubble slider, glass effects, state-dependent design) |
| **UIX help** | Migrating from card-mod, every style target at a glance, common pitfalls |

### All fields — finding instead of searching

The **word-fragment filter** combines building blocks such as `color`, `background` or `button` with narrowing tags (`bubble`, `climate`, `stack`) — so even among 538 variables the right one is found in seconds. With multi-select, entire groups of fields get the same value in a single step.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/all-fields-filter.png" alt="All fields with word-fragment filter" width="80%" />
</p>

### Code editor

For everyone who prefers typing: all fields as text with syntax highlighting, grouped by section. Plus the free-form UIX style targets (`uix-card`, `uix-root` and the rest) and a **free field for your own theme entries** that HATG doesn't know — they survive saving and export unchanged.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/code-editor.png" alt="Code editor with all fields as text" width="80%" />
</p>

---

## UIX presets — global effects in one click

Ready-made UIX building blocks applied **globally to the theme** with a single click — for light and dark simultaneously, individually removable at any time. Thirteen presets that go beyond cards: glass and gradients for `uix-card`, glass for the sidebar, app drawer and top bar, corner radius and scrim for dialogs, a background image across the whole interface and two for the settings pages. Every tile names its style target, and custom presets can address any of the 25 targets. No copying, no pasting into individual cards.

<p align="center">
  <img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/cardmod-vorlagen.png" alt="UIX presets with built-in and custom presets" width="80%" />
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
- **Import** reads any existing theme — including flat themes without a `light:`/`dark:` split. Unknown fields are preserved and re-attached on export, and old `card-mod-*` fields (including the `-yaml` variants) are lifted to `uix-*` automatically
- **Reapply derivations** (in the save menu) resets fields whose value already matches the derivation back to "automatic" — they then follow their base colour again

The export is valid YAML (verified with the same parser Home Assistant uses), with UIX fields correctly placed at theme level.

---

## Good to know

- **Light and dark are separate worlds.** Every control writes only to the currently active mode. Adjusting in light and then checking in dark shows no change — the ⇄ button transfers deliberately into the other mode
- **Badges show the origin of each value:** *automatic* = follows a derivation, *custom* = set by you
- **Undo:** the undo button (or Ctrl/Cmd+Z) reverts the last change — including bulk changes as a whole
- **Validation before export** checks every value against its expected format and flags outliers before they end up in the theme
- **Language:** HATG speaks German and English. The interface follows your Home Assistant language automatically and can be switched at any time via the gear icon
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
Nothing — themes live in `config/themes/`, custom UIX presets in `config/themes/hatg/hatg-uix-vorlagen.json`, background images in `config/themes/Wallpaper/`. All outside the integration folder, all update-safe, all covered by your backup.

**The UIX presets have no effect.**
[UI eXtension](https://github.com/Lint-Free-Technology/uix) needs to be installed **and added as a device** for that. The active theme also has to be the one saved by HATG — the CSS lives in the theme file.

**I am still on card-mod. Can I keep using HATG?**
Yes. The gear menu lets you set the output format to `card-mod`, and HATG writes the old field names. Ten of the 25 style targets do not exist in card-mod though; if they are filled, HATG points that out in the **UIX & generator** section. In the long run there is no way around UIX.

**Can I remove HATG again?**
Any time. The generated themes are ordinary YAML files and keep working without HATG.

---

## Support

HATG is built in spare time. If it saves you time or makes your dashboard nicer:

<p align="center">
  <a href="https://buymeacoffee.com/enricotenif"><img src="https://raw.githubusercontent.com/Piranha1605/ha-theme-generator/main/docs/screenshots/bmac-badge.png" alt="Buy me a coffee" /></a>
</p>

Found a bug or have a wish? → [Issues](https://github.com/Piranha1605/ha-theme-generator/issues)
