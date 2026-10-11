// Rendert banner.html in beiden Sprachen nach ../banner.png und ../banner-en.png.
//
// Gerendert wird mit doppelter Aufloesung und danach auf 1600 px verkleinert - das
// gibt saubere Kanten an der schraegen Platte und an der Schrift.
//
// Chrome wird ueber das DevTools-Protokoll gesteuert, nicht ueber --screenshot:
// der Kommandozeilenweg kam auf diesem Rechner nach dem Bild minutenlang nicht zum
// Beenden. node 22+ bringt den noetigen WebSocket selbst mit, es braucht also kein
// npm install. macOS: sips verkleinert.
//
// Renders banner.html in both languages. Driven over the DevTools protocol because
// Chrome's --screenshot flag took minutes to exit here. No dependencies.

import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HIER = path.dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BREITE = 1600, HOEHE = 520, SCHAERFE = 2;
const SPRACHEN = [["de", "../banner.png"], ["en", "../banner-en.png"]];

if (!existsSync(CHROME)) { console.error("Chrome nicht gefunden: " + CHROME); process.exit(1); }

const profil = mkdtempSync(path.join(tmpdir(), "hatg-banner-"));
const chrome = spawn(CHROME, [
  "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
  "--allow-file-access-from-files", "--remote-debugging-port=0",
  "--user-data-dir=" + profil, "about:blank",
], { stdio: "ignore" });

const warte = (ms) => new Promise((r) => setTimeout(r, ms));

// Chrome schreibt den tatsaechlichen Port in DevToolsActivePort, sobald er steht.
async function portLesen() {
  const datei = path.join(profil, "DevToolsActivePort");
  for (let i = 0; i < 100; i++) {
    if (existsSync(datei)) {
      const zeilen = readFileSync(datei, "utf8").split("\n");
      if (zeilen[0]?.trim()) return zeilen[0].trim();
    }
    await warte(100);
  }
  throw new Error("Chrome hat keinen Debug-Port gemeldet");
}

// Ein schmaler CDP-Klient: schicken, auf die Antwort mit derselben id warten.
function klient(url) {
  const ws = new WebSocket(url);
  let naechste = 1;
  const offen = new Map(), horcher = [];
  ws.addEventListener("message", (e) => {
    const n = JSON.parse(e.data);
    if (n.id && offen.has(n.id)) {
      const { ja, nein } = offen.get(n.id); offen.delete(n.id);
      n.error ? nein(new Error(n.error.message)) : ja(n.result);
    } else if (n.method) {
      for (const h of horcher.splice(0)) h(n);
    }
  });
  const bereit = new Promise((r) => ws.addEventListener("open", r));
  return {
    bereit,
    ruf(method, params, sessionId) {
      const id = naechste++;
      ws.send(JSON.stringify({ id, method, params: params || {}, sessionId }));
      return new Promise((ja, nein) => offen.set(id, { ja, nein }));
    },
    aufEreignis(method) {
      return new Promise((r) => {
        const h = (n) => (n.method === method ? r(n) : horcher.push(h));
        horcher.push(h);
      });
    },
    zu: () => ws.close(),
  };
}

try {
  const port = await portLesen();
  const antwort = await fetch(`http://127.0.0.1:${port}/json/version`);
  const k = klient((await antwort.json()).webSocketDebuggerUrl);
  await k.bereit;

  for (const [sprache, ziel] of SPRACHEN) {
    const { targetId } = await k.ruf("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await k.ruf("Target.attachToTarget", { targetId, flatten: true });

    await k.ruf("Emulation.setDeviceMetricsOverride",
      { width: BREITE, height: HOEHE, deviceScaleFactor: SCHAERFE, mobile: false }, sessionId);
    await k.ruf("Page.enable", {}, sessionId);

    const geladen = k.aufEreignis("Page.loadEventFired");
    await k.ruf("Page.navigate",
      { url: `file://${path.join(HIER, "banner.html")}?lang=${sprache}` }, sessionId);
    await geladen;

    // Schriften und Bilder muessen wirklich da sein, sonst faellt die Schrift
    // stumm auf eine Systemschrift zurueck.
    await k.ruf("Runtime.evaluate", {
      expression: `Promise.all([document.fonts.ready,
        ...[...document.images].map(b => b.complete ? 0 : b.decode().catch(() => 0))])`,
      awaitPromise: true,
    }, sessionId);
    await warte(400);

    const { data } = await k.ruf("Page.captureScreenshot", { format: "png" }, sessionId);
    const roh = path.join(profil, `roh-${sprache}.png`);
    writeFileSync(roh, Buffer.from(data, "base64"));
    execFileSync("sips", ["-Z", String(BREITE), roh, "--out", path.join(HIER, ziel)], { stdio: "ignore" });
    await k.ruf("Target.closeTarget", { targetId });
    console.log(`  ${path.basename(ziel).padEnd(16)} ${BREITE}x${HOEHE}`);
  }

  await k.ruf("Browser.close").catch(() => {});
  k.zu();
} finally {
  chrome.kill();
  // Chrome schreibt noch in sein Profil, waehrend es faellt - sonst ENOTEMPTY.
  for (let i = 0; i < 20; i++) {
    try { rmSync(profil, { recursive: true, force: true }); break; }
    catch { await warte(150); }
  }
}
