// Testet die Theme-Validierung direkt am ausgelieferten Panel-Code.
// Ausfuehren: node tests/hatg-validate-value.test.js
//
// Runs against the shipped panel source, no build step and no dependencies.
// Run with: node tests/hatg-validate-value.test.js

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const PANEL = path.join(__dirname, "..", "custom_components", "hatg", "www", "hatg-panel.js");

// Der Panel-Code ist ein Browser-Modul mit Custom Elements - hier wird nur der
// Block mit den Validierungs-Helfern herausgeschnitten und ausgefuehrt.
function ladeHelfer() {
  const quelle = fs.readFileSync(PANEL, "utf8");
  const start = quelle.indexOf("const HATG_HEX_RE =");
  const ende = quelle.indexOf("function hatgNormalizeRgbaLegacyHex");
  assert.ok(start !== -1 && ende > start, "Validierungs-Block in hatg-panel.js nicht gefunden");
  const kontext = {};
  vm.runInNewContext(`${quelle.slice(start, ende)}\nthis.hatgValidateValue = hatgValidateValue;\nthis.hatgIsCssBackground = hatgIsCssBackground;`, kontext);
  return kontext;
}

const { hatgValidateValue, hatgIsCssBackground } = ladeHelfer();

// Der Wert aus dem Fehlerbericht: drei Gradienten plus Hex-Farbe als letzte
// Ebene. Die CSS-Kurzform background fuellt damit den background-color-Slot.
const MEHRSCHICHTIG =
  "radial-gradient(circle at 0% 0%, rgba(94, 231, 223, 0.30) 0%, transparent 42%), " +
  "radial-gradient(circle at 100% 100%, rgba(180, 144, 245, 0.30) 0%, transparent 42%), " +
  "radial-gradient(circle at 50% 48%, rgba(247, 168, 196, 0.22) 0%, transparent 34%), " +
  "#E8F0FA";

const gueltig = [
  MEHRSCHICHTIG,
  "linear-gradient(135deg, #7F77DD, #1D9E75), #E8F0FA",
  "linear-gradient(135deg, #7F77DD, #1D9E75), rgba(232, 240, 250, 0.8)",
  "linear-gradient(135deg, #7F77DD, #1D9E75), transparent",
  "linear-gradient(135deg, #7F77DD, #1D9E75), var(--primary-background-color)",
  "url(\"/local/bg.png\") center / cover no-repeat, #E8F0FA",
  "linear-gradient(135deg, #7F77DD, #1D9E75)",
  "radial-gradient(circle at 0% 0%, #fff 0%, transparent 42%), radial-gradient(circle at 100% 100%, #000 0%, transparent 42%)",
  "url(\"/local/bg.png\") center / cover no-repeat",
];

const ungueltig = [
  "#E8F0FA, linear-gradient(135deg, #7F77DD, #1D9E75)", // Farbe darf nur am Ende stehen
  "linear-gradient(135deg, #7F77DD, #1D9E75), quatsch",
  "linear-gradient(135deg, #7F77DD, #1D9E75), #E8F0FA, #FFFFFF", // zwei Farbebenen
  "#E8F0FA",
  "quatsch",
  "",
];

let fehler = 0;
const pruefe = (name, fn) => {
  try {
    fn();
    console.log(`ok   ${name}`);
  } catch (e) {
    fehler += 1;
    console.error(`FAIL ${name}\n     ${e.message}`);
  }
};

gueltig.forEach((wert) => {
  pruefe(`hatgIsCssBackground akzeptiert: ${wert.slice(0, 60)}`, () => {
    assert.equal(hatgIsCssBackground(wert), true);
  });
});

ungueltig.forEach((wert) => {
  pruefe(`hatgIsCssBackground lehnt ab: ${JSON.stringify(wert.slice(0, 60))}`, () => {
    assert.equal(hatgIsCssBackground(wert), false);
  });
});

// Der eigentliche Fehlerbericht: Zahnrad -> "Theme validieren" meldete den Wert
// fuer lovelace-background in hell und dunkel als ungueltig.
pruefe("lovelace-background mit Gradienten und Hex-Farbe ist gueltig", () => {
  assert.equal(hatgValidateValue("hex", MEHRSCHICHTIG, "lovelace-background"), "ok");
});

pruefe("bubble-event-background-image mit Gradienten und Hex-Farbe ist gueltig", () => {
  assert.equal(hatgValidateValue("hex", MEHRSCHICHTIG, "bubble-event-background-image"), "ok");
});

// Keys ausserhalb von HATG_CSS_BACKGROUND_KEYS erwarten weiterhin eine Farbe.
pruefe("primary-color nimmt keinen mehrschichtigen Hintergrund an", () => {
  assert.equal(hatgValidateValue("hex", MEHRSCHICHTIG, "primary-color"), "invalid");
});

pruefe("einfache Werte werden weiterhin geprueft", () => {
  assert.equal(hatgValidateValue("hex", "#E8F0FA", "primary-color"), "ok");
  assert.equal(hatgValidateValue("hex", "linear-gradient(135deg, #7F77DD, #1D9E75)", "lovelace-background"), "ok");
  assert.equal(hatgValidateValue("hex", "quatsch", "lovelace-background"), "invalid");
  assert.equal(hatgValidateValue("hex", "", "lovelace-background"), "empty");
  assert.equal(hatgValidateValue("rgba", "rgba(1, 2, 3, 0.5)", "ha-card-background"), "ok");
  assert.equal(hatgValidateValue("rgb_triplet", "1, 2, 3", "rgb-primary-color"), "ok");
});

if (fehler) {
  console.error(`\n${fehler} Test(s) fehlgeschlagen.`);
  process.exit(1);
}
console.log("\nAlle Tests bestanden.");
