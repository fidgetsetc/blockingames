// Flite (WASI) in the browser, via a minimal browser WASI shim.
// Requires: flite.wasm alongside this file (download from
// https://github.com/echogarden-project/flite-wasi/blob/main/flite.wasm
// and place it at ./flite.wasm — it's ~21MB, not committed here).
//
// Uses @bjorn3/browser_wasi_shim, a small pure-JS WASI preview1 polyfill.
import { WASI, File, OpenFile, PreopenDirectory, Fd } from "https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.3.0/dist/index.js";

const statusEl = document.getElementById("status");
const playerEl = document.getElementById("player");
const btn = document.getElementById("go");
const textEl = document.getElementById("text");
const voiceEl = document.getElementById("voice");

function setStatus(msg) { statusEl.textContent = msg; }

// A write-capturing in-memory file we can read back after flite writes to it.
class CaptureFile extends File {
  constructor() { super(new Uint8Array(0)); }
}

let wasmBytes = null;

async function loadWasm() {
  if (wasmBytes) return wasmBytes;
  setStatus("Loading flite.wasm (first run only)...");
  const res = await fetch("./flite.wasm");
  if (!res.ok) {
    throw new Error(
      "flite.wasm not found. Download it from the flite-wasi GitHub repo " +
      "and place it next to index.html."
    );
  }
  wasmBytes = await res.arrayBuffer();
  return wasmBytes;
}

async function synthesize(text, voice) {
  const bytes = await loadWasm();

  // Preopened virtual directory: flite will write its output .wav here.
  const outFile = new File(new Uint8Array(0));
  const root = new PreopenDirectory(".", new Map([["out.wav", outFile]]));

  // stdin/stdout/stderr as simple in-memory files (flite doesn't need real stdin here).
  const fds = [
    new OpenFile(new File(new Uint8Array(0))), // stdin (fd 0)
    new OpenFile(new File(new Uint8Array(0))), // stdout (fd 1)
    new OpenFile(new File(new Uint8Array(0))), // stderr (fd 2)
    root,                                       // fd 3, preopened as "."
  ];

  // flite's CLI form: flite "text to speak" out.wav
  const args = ["flite", "-voice", voice, text, "out.wav"];
  const env = [];

  const wasi = new WASI(args, env, fds);

  const { instance } = await WebAssembly.instantiate(bytes, {
    wasi_snapshot_preview1: wasi.wasiImport,
  });

  setStatus("Synthesizing...");
  try {
    wasi.start(instance);
  } catch (e) {
    // Some WASI builds call proc_exit via an exception; ignore a clean exit(0).
    if (!(e && e.message === "exit")) throw e;
  }

  const wavBytes = outFile.data; // Uint8Array of the written WAV
  if (!wavBytes || wavBytes.length === 0) {
    throw new Error("Flite produced no audio output.");
  }
  return wavBytes;
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  try {
    const wav = await synthesize(textEl.value.trim() || "Hello.", voiceEl.value);
    const blob = new Blob([wav], { type: "audio/wav" });
    playerEl.src = URL.createObjectURL(blob);
    playerEl.style.display = "block";
    playerEl.play();
    setStatus("Done.");
  } catch (err) {
    console.error(err);
    setStatus("Error: " + err.message);
  } finally {
    btn.disabled = false;
  }
});