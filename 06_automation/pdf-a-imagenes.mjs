/**
 * PDF → imágenes. Renderiza cada página de un PDF a PNG, para poder ver y
 * reutilizar el contenido de una presentación que solo existe en PDF.
 *
 * Uso:
 *   node pdf-a-imagenes.mjs <entrada.pdf> <carpeta-salida> [escala]
 *
 * `escala` (por defecto 2) es el factor de resolución: 2 ≈ 144 dpi.
 */
import fs from "node:fs";
import path from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

const [entrada, salida, escalaArg] = process.argv.slice(2);
if (!entrada || !salida) {
  console.error("Uso: node pdf-a-imagenes.mjs <entrada.pdf> <carpeta-salida> [escala]");
  process.exit(1);
}
const escala = Number(escalaArg || 2);

const data = new Uint8Array(fs.readFileSync(entrada));
const doc = await pdfjs.getDocument({
  data,
  disableFontFace: true,
  isEvalSupported: false,
  useSystemFonts: true,
}).promise;

fs.mkdirSync(salida, { recursive: true });
console.log(`PDF: ${doc.numPages} páginas → ${salida}`);

for (let p = 1; p <= doc.numPages; p++) {
  const page = await doc.getPage(p);
  const viewport = page.getViewport({ scale: escala });
  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, viewport.width, viewport.height);
  await page.render({ canvasContext: ctx, viewport }).promise;
  const archivo = path.join(salida, `pagina-${String(p).padStart(2, "0")}.png`);
  fs.writeFileSync(archivo, canvas.toBuffer("image/png"));
  const kb = (fs.statSync(archivo).size / 1024).toFixed(0);
  console.log(`  ✓ pagina-${String(p).padStart(2, "0")}.png  ${Math.round(viewport.width)}×${Math.round(viewport.height)}  ${kb} KB`);
}
