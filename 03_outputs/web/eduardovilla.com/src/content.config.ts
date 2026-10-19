// @ts-check
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["es", "en"]),
    slug: z.string().optional(),
    area: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Una imagen dentro de un proyecto. `src` es la ruta en /public
 * (p. ej. "/img/proyectos/mila/portada.jpg"). Si el archivo aún no existe,
 * el componente <Media> dibuja el marcador de marca y la imagen aparece
 * sola en cuanto se sube.
 */
const imagen = z.object({
  src: z.string(),
  alt: z.string().default(""),
  caption: z.string().optional(),
  ratio: z.string().default("4 / 3"),
});

/**
 * Bloque de composición de un caso de estudio. Es una unión discriminada por
 * `tipo`, pensada para armar presentaciones de marca ricas sin salir del
 * sistema editorial:
 *  - texto     → párrafo(s) narrativos, con título de sección opcional
 *  - destacado → frase-cita a sangre
 *  - imagen    → imagen suelta a todo el ancho de la columna
 *  - galeria   → rejilla de 2 o 3 columnas
 *  - paleta    → muestrario de color con nombre y hex
 */
const bloque = z.discriminatedUnion("tipo", [
  z.object({
    tipo: z.literal("texto"),
    titulo: z.string().optional(),
    cuerpo: z.string(),
  }),
  z.object({
    tipo: z.literal("destacado"),
    texto: z.string(),
    autor: z.string().optional(),
  }),
  z.object({
    tipo: z.literal("imagen"),
    src: z.string(),
    alt: z.string().default(""),
    caption: z.string().optional(),
    ratio: z.string().default("16 / 10"),
  }),
  z.object({
    tipo: z.literal("galeria"),
    columnas: z.union([z.literal(2), z.literal(3)]).default(2),
    imagenes: z.array(imagen),
  }),
  z.object({
    tipo: z.literal("paleta"),
    colores: z.array(
      z.object({
        hex: z.string(),
        nombre: z.string(),
        nota: z.string().optional(),
      })
    ),
  }),
]);

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["es", "en"]),
    area: z.string(),
    areaSecundaria: z.string().optional(),
    year: z.string().optional(),
    rol: z.string().optional(),
    cliente: z.string().optional(),
    entregables: z.array(z.string()).default([]),
    herramientas: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverRatio: z.string().default("16 / 10"),
    enlace: z.string().url().optional(),
    enlaceLabel: z.string().optional(),
    enlaceSecundario: z.string().url().optional(),
    enlaceSecundarioLabel: z.string().optional(),
    destacado: z.boolean().default(false),
    categoria: z.enum(["logo", "tarjeta", "ia", "web"]).default("logo"),
    miniatura: z.string().optional(),
    miniaturaRatio: z.string().default("16 / 10"),
    bloques: z.array(bloque).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, proyectos };
