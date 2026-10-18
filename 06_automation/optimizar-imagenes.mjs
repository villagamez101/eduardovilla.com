/**
 * Optimizador de imágenes — material bruto → assets web.
 *
 * Por proyecto convierte las exportaciones pesadas (PNG/JPG/PDF) a WebP listo
 * para el sitio: redimensiona, recorta a proporción o región, aplana la
 * transparencia y puede componer un logotipo centrado sobre un lienzo de
 * color. También imprime la paleta dominante de una pieza.
 *
 * Uso:
 *   node optimizar-imagenes.mjs [proyecto]          # ejecuta sus trabajos
 *   node optimizar-imagenes.mjs [proyecto] --paleta <archivo>
 *   node optimizar-imagenes.mjs --lista
 *
 * Campos de cada trabajo:
 *   de        ruta de origen dentro del proyecto (imagen)
 *   pdf + pagina  origen alterno: una página de un PDF (render 1600px de ancho)
 *   a         nombre del archivo de salida (.webp)
 *   ancho     ancho máximo de salida
 *   ratio     "W:H" para recortar a proporción (fit cover)
 *   recorte   {left,top,width,height} región a extraer (en px del origen)
 *   trim      recorta los márgenes sobrantes antes de redimensionar
 *             (true = umbral 12, o un número para ajustar el umbral)
 *   escalar   permite ampliar por encima del tamaño nativo (por defecto no)
 *   fondo     color con el que aplanar la transparencia
 *   lienzo    {color, ratio, escala} → compone el logotipo centrado sobre un
 *             lienzo de color; `escala` es la fracción del ancho que ocupa
 *   calidad   calidad WebP (por defecto 82)
 *
 * Los nombres se comparan normalizados a NFC (los exportados desde macOS
 * suelen venir en NFD), así que no importa cómo estén acentuados.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Resuelve un nombre (normalizado NFC) dentro de un directorio real. */
function resolver(rutaNfc, base) {
  const partes = rutaNfc.normalize("NFC").split("/");
  let dir = base;
  for (let i = 0; i < partes.length; i++) {
    const objetivo = partes[i].normalize("NFC");
    const entrada = fs
      .readdirSync(dir, { withFileTypes: true })
      .find((e) => e.name.normalize("NFC") === objetivo);
    if (!entrada) throw new Error(`No existe: ${path.join(base, partes.join("/"))}`);
    const siguiente = path.join(dir, entrada.name);
    if (i < partes.length - 1) dir = siguiente;
    else return siguiente;
  }
}

const FUENTES = path.join(RAIZ, "02_resources/assets/proyectos");
const PUBLIC = path.join(RAIZ, "03_outputs/web/eduardovilla.com/public/img/proyectos");

const PROYECTOS = {
  "juridico-mila": {
    origen: path.join(FUENTES, "juridico-mila"),
    destino: path.join(PUBLIC, "juridico-mila"),
    trabajos: [
      { de: "mockups/Anuncio Completo.jpg", a: "portada.webp", ancho: 2000, ratio: "16:10", calidad: 78 },
      { de: "Logotipo.png", a: "logotipo.webp", ancho: 2000, fondo: "#ffffff" },
      { de: "Imagotipo.png", a: "imagotipo.webp", ancho: 2000, fondo: "#ffffff" },
      { de: "Isotipo.png", a: "isotipo.webp", ancho: 1400, fondo: "#ffffff" },
      { de: "Tarjeta de presentación-01.png", a: "tarjeta-01.webp", ancho: 1400 },
      { de: "Tarjeta de presentación-02.png", a: "tarjeta-02.webp", ancho: 1400 },
      { de: "mockups/Anuncio.jpg", a: "aplicacion-fachada.webp", ancho: 1800, ratio: "4:3", calidad: 78 },
      { de: "mockups/Coffe.jpg", a: "aplicacion-taza.webp", ancho: 1800, ratio: "4:3", calidad: 78 },
      { de: "mockups/tshirt.jpg", a: "aplicacion-playera.webp", ancho: 1800, ratio: "4:3", calidad: 78 },
      { de: "mockups/Libreta.png", a: "aplicacion-libreta.webp", ancho: 1500, ratio: "3:4", calidad: 78 },
      { de: "mockups/Documento.jpg", a: "aplicacion-documento.webp", ancho: 1500, ratio: "3:4", calidad: 78 },
    ],
  },
  "jufa-burger": {
    origen: path.join(FUENTES, "jufa-burger"),
    destino: path.join(PUBLIC, "jufa-burger"),
    trabajos: [
      // Portada: la mesa servida frente al rótulo de la marca.
      { de: "Jufa food.png", a: "portada.webp", ancho: 2000, ratio: "16:10", calidad: 80 },
      // Símbolo y lockup, recortados del logotipo y aplanados sobre blanco.
      { de: "Jufa logo.png", a: "isotipo.webp", recorte: { left: 662, top: 134, width: 600, height: 600 }, ancho: 1200, escalar: true, fondo: "#ffffff" },
      { de: "Jufa logo.png", a: "imagotipo.webp", recorte: { left: 445, top: 166, width: 1040, height: 768 }, ancho: 1800, escalar: true, fondo: "#ffffff" },
      // Aplicaciones reales.
      { de: "Jufa Logo Comida.png", a: "empaque.webp", ancho: 1800, ratio: "7:5", calidad: 80 },
      // Recortes de la presentación (mockups de la diapositiva).
      { de: "presentacion/14.webp", a: "playera.webp", recorte: { left: 93, top: 0, width: 1013, height: 673 }, ancho: 1800, ratio: "3:2", calidad: 80 },
      { de: "presentacion/17.webp", a: "salsas.webp", recorte: { left: 258, top: 0, width: 682, height: 674 }, ancho: 1400, ratio: "1:1", calidad: 80 },
    ],
  },
  "eduardo-villa": {
    origen: path.join(FUENTES, "eduardo-villa"),
    destino: path.join(PUBLIC, "eduardo-villa"),
    trabajos: [
      // Portada: monograma blanco centrado sobre el azul de marca (4:3 para
      // que aguante el recorte del thumbnail sin cortarse).
      { de: "2026/Isotipo Negativo.png", a: "portada.webp", trim: true, ancho: 2000, lienzo: { color: "#1c2240", ratio: 4 / 3, escala: 0.5 } },
      // Símbolo actual.
      { de: "2026/Isotipo Positivo.png", a: "isotipo.webp", trim: true, ancho: 1200, lienzo: { color: "#ffffff", ratio: 1, escala: 0.72 } },
      // Etapas de la marca, cada una en su banda.
      { de: "2021/Favicon.png", a: "historia-2021.webp", ancho: 1600, lienzo: { color: "#ffffff", ratio: 2, escala: 0.3 } },
      { de: "2024/RRSS.png", a: "historia-2024.webp", ancho: 1600, lienzo: { color: "#191919", ratio: 2, escala: 0.5 } },
      { de: "2026/Logotipo Horizontal Positivo.png", a: "historia-2026.webp", trim: true, ancho: 1600, lienzo: { color: "#ffffff", ratio: 2, escala: 0.78 } },
      // Aplicación: tarjeta de presentación (páginas 1 y 2 del PDF).
      { pdf: "Eduardo BC.pdf", pagina: 1, a: "tarjeta-frente.webp", ancho: 1600, ratio: "7:4", calidad: 80 },
      { pdf: "Eduardo BC.pdf", pagina: 2, a: "tarjeta-reverso.webp", ancho: 1600, ratio: "7:4", calidad: 80 },
    ],
  },
  "rr-remodeling-texas": {
    origen: path.join(FUENTES, "rr-remodeling-texas"),
    destino: path.join(PUBLIC, "rr-remodeling-texas"),
    trabajos: [
      // Portada: el rótulo redondo sobre la fachada, recortado de la presentación.
      { pdf: "R&R Remodeling Texas.pdf", pagina: 16, recorte: { left: 738, top: 302, width: 640, height: 400 }, a: "portada.webp", ancho: 1400, calidad: 82 },
      // Versiones del logotipo.
      { de: "R&R Logo.png", a: "version-positiva.webp", ancho: 1400, lienzo: { color: "#ffffff", ratio: 1, escala: 0.72 } },
      { de: "White.png", a: "version-negativa.webp", ancho: 1400, lienzo: { color: "#233d4d", ratio: 1, escala: 0.72 } },
      { de: "Monocromatico.png", a: "version-mono.webp", ancho: 1400, lienzo: { color: "#ffffff", ratio: 1, escala: 0.72 } },
      { de: "Monotipo.png", a: "isotipo.webp", ancho: 1600, lienzo: { color: "#f4f2ea", ratio: 4 / 3, escala: 0.5 } },
      // Aplicaciones reales.
      { de: "Banners/Banner 1.jpg", a: "banner-01.webp", ancho: 1400, calidad: 80 },
      { de: "Banners/Banner 3.jpg", a: "banner-02.webp", ancho: 1300, calidad: 80 },
      { de: "Banners/Banner 5.jpg", a: "banner-03.webp", ancho: 1300, calidad: 80 },
      { de: "Banners/Portada facebook.jpg", a: "portada-facebook.webp", ancho: 1600, calidad: 80 },
      { de: "Business card/Tarjeta de presentación R&R_Frente.jpg", a: "tarjeta-01.webp", ancho: 1400, calidad: 80 },
      { de: "Business card/Tarjeta de presentación R&R_Respaldo.jpg", a: "tarjeta-02.webp", ancho: 1400, calidad: 80 },
      // Mockups de la presentación (recortes de la diapositiva).
      { pdf: "R&R Remodeling Texas.pdf", pagina: 16, recorte: { left: 130, top: 238, width: 1330, height: 484 }, a: "externos.webp", ancho: 1600 },
      { pdf: "R&R Remodeling Texas.pdf", pagina: 19, recorte: { left: 246, top: 246, width: 920, height: 632 }, a: "publicidad.jpg", ancho: 1500, calidad: 84 },
    ],
  },
};

async function renderPaginaPdf(archivo, pagina) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const { createCanvas } = await import("@napi-rs/canvas");
  const data = new Uint8Array(fs.readFileSync(archivo));
  const doc = await pdfjs.getDocument({ data, disableFontFace: true, isEvalSupported: false, useSystemFonts: true }).promise;
  const page = await doc.getPage(pagina);
  const escala = 1600 / page.getViewport({ scale: 1 }).width;
  const viewport = page.getViewport({ scale: escala });
  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, Math.round(viewport.width), Math.round(viewport.height));
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas.toBuffer("image/png");
}

async function procesar(t, origen, destino) {
  const entrada = t.pdf ? await renderPaginaPdf(resolver(t.pdf, origen), t.pagina) : resolver(t.de, origen);
  const salida = path.join(destino, t.a);
  const calidad = t.calidad ?? 82;
  const ext = path.extname(salida).toLowerCase();
  const encoder = (img, q) =>
    ext === ".png" ? img.png() : ext === ".jpg" || ext === ".jpeg" ? img.jpeg({ quality: q, mozjpeg: true }) : img.webp({ quality: q });

  if (t.lienzo) {
    const W = t.ancho;
    const H = Math.round(W / t.lienzo.ratio);
    let base = sharp(entrada);
    if (t.trim) base = base.trim({ threshold: t.trim === true ? 12 : t.trim });
    const arte = await base
      .resize({ width: Math.round(W * t.lienzo.escala), fit: "inside" })
      .toBuffer();
    await encoder(
      sharp({ create: { width: W, height: H, channels: 3, background: t.lienzo.color } }).composite([
        { input: arte, gravity: "center" },
      ]),
      calidad
    ).toFile(salida);
    return { salida, w: W, h: H };
  }

  let img = sharp(entrada).rotate();
  // `extract` y `trim` no conviven bien en una sola tubería: se separan.
  if (t.recorte) {
    const recortado = await img.extract(t.recorte).png().toBuffer();
    img = sharp(recortado);
  }
  if (t.trim) img = img.trim({ threshold: t.trim === true ? 12 : t.trim });
  if (t.ratio) {
    const [w, h] = t.ratio.split(":").map(Number);
    img = img.resize(t.ancho, Math.round((t.ancho * h) / w), { fit: "cover", position: "attention" });
  } else {
    img = img.resize({ width: t.ancho, fit: "inside", withoutEnlargement: !t.lienzo && !t.escalar });
  }
  if (t.fondo) img = img.flatten({ background: t.fondo });
  await encoder(img, calidad).toFile(salida);
  const m = await sharp(salida).metadata();
  return { salida, w: m.width, h: m.height };
}

async function paleta(archivo) {
  const { data, info } = await sharp(archivo)
    .resize(400, null, { fit: "inside" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const cubos = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    const a = info.channels === 4 ? data[i + 3] : 255;
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    if (a < 200 || (r > 230 && g > 230 && b > 230)) continue;
    const key = `${r >> 4},${g >> 4},${b >> 4}`;
    const acc = cubos.get(key) ?? { r: 0, g: 0, b: 0, n: 0 };
    acc.r += r; acc.g += g; acc.b += b; acc.n++;
    cubos.set(key, acc);
  }
  return [...cubos.values()]
    .sort((x, y) => y.n - x.n)
    .slice(0, 6)
    .map((c) => {
      const hex = "#" + [c.r, c.g, c.b].map((v) => Math.round(v / c.n).toString(16).padStart(2, "0")).join("");
      return `${hex}  (${c.n}px)`;
    });
}

const args = process.argv.slice(2);
if (args.includes("--lista")) {
  Object.keys(PROYECTOS).forEach((k) => console.log(k));
} else {
  const clave = args.find((a) => !a.startsWith("--")) ?? Object.keys(PROYECTOS)[0];
  const proyecto = PROYECTOS[clave];
  if (!proyecto) throw new Error(`Proyecto desconocido: ${clave}`);

  if (args.includes("--paleta")) {
    const archivo = resolver(args[args.indexOf("--paleta") + 1], proyecto.origen);
    console.log(`Paleta de ${archivo}:`);
    (await paleta(archivo)).forEach((c) => console.log("  " + c));
  } else {
    fs.mkdirSync(proyecto.destino, { recursive: true });
    console.log(`Proyecto: ${clave}`);
    for (const t of proyecto.trabajos) {
      const { salida, w, h } = await procesar(t, proyecto.origen, proyecto.destino);
      const kb = (fs.statSync(salida).size / 1024).toFixed(0);
      console.log(`  ✓ ${t.a.padEnd(26)} ${String(w).padStart(4)}×${String(h).padEnd(4)} ${kb} KB`);
    }
  }
}
