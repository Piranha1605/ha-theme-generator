// Die Versionsnummer steht an vier Stellen und muss ueberall gleich sein.
// Ausfuehren: node tests/hatg-version.test.js
//
// The version number lives in four places and must match everywhere.
//
// Warum das ein Test ist: Home Assistant liefert /hatg_static mit
// max-age=2678400 aus. Haengt der Cache-Buster in FRONTEND_MODULE nicht an
// derselben Version wie das Panel, bekommt der Browser wochenlang den alten
// Stand, waehrend die Kopfzeile schon die neue Version zeigt. Am 2026-09-27
// genau so passiert: drei Builds gingen unter ?v=1.3.2b5 raus, im Browser blieb
// der erste. Von Hand ist das leicht zu vergessen - hier wird es geprueft.

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const WURZEL = path.join(__dirname, "..");
const lies = (...p) => fs.readFileSync(path.join(WURZEL, ...p), "utf8");

let fehler = 0;
function pruefe(name, fn) {
  try { fn(); console.log("  ok   " + name); }
  catch (error) {
    fehler++;
    console.log("  FEHL " + name);
    console.log("       " + String(error.message).split("\n").slice(0, 6).join("\n       "));
  }
}

const manifest = JSON.parse(lies("custom_components", "hatg", "manifest.json"));
const constPy = lies("custom_components", "hatg", "const.py");
const panelKopf = lies("custom_components", "hatg", "www", "hatg-panel.js").split("\n", 1)[0];
const claude = lies("CLAUDE.md");

const stellen = {
  "manifest.json": manifest.version,
  "const.py VERSION": (constPy.match(/^VERSION\s*=\s*"([^"]+)"/m) || [])[1],
  "const.py FRONTEND_MODULE": (constPy.match(/hatg-panel\.js\?v=([^"'\s]+)/) || [])[1],
  "hatg-panel.js HATG_VERSION": (panelKopf.match(/HATG_VERSION\s*=\s*"([^"]+)"/) || [])[1],
};

pruefe("Jede der vier Stellen traegt eine Version", () => {
  const leer = Object.entries(stellen).filter(([, v]) => !v).map(([k]) => k);
  assert.deepEqual(leer, [], "hier wurde keine Version gefunden");
});

pruefe("Alle vier Stellen tragen dieselbe Version", () => {
  const eindeutig = [...new Set(Object.values(stellen))];
  assert.equal(
    eindeutig.length,
    1,
    "Versionen weichen ab:\n" + Object.entries(stellen).map(([k, v]) => `  ${k}: ${v}`).join("\n")
  );
});

pruefe("Die Version hat ein brauchbares Format", () => {
  const v = manifest.version;
  assert.match(v, /^\d+\.\d+\.\d+(b\d+)?$/, `unerwartetes Format: ${v}`);
});

pruefe("CLAUDE.md nennt dieselbe Testversion", () => {
  const m = claude.match(/im Test ([0-9][0-9A-Za-z.]*)/);
  assert.ok(m, 'in CLAUDE.md fehlt die Zeile "im Test <version>"');
  assert.equal(m[1], manifest.version, "CLAUDE.md zeigt eine andere Version als das Manifest");
});

pruefe("manifest.json und hacs.json sind gueltiges JSON", () => {
  assert.ok(manifest.domain === "hatg", `unerwartete Domain: ${manifest.domain}`);
  const hacs = JSON.parse(lies("hacs.json"));
  assert.ok(hacs.name, "hacs.json ohne name");
});

console.log(fehler ? `\n${fehler} Test(s) fehlgeschlagen.` : "\nAlle Tests bestanden.");
process.exit(fehler ? 1 : 0);
