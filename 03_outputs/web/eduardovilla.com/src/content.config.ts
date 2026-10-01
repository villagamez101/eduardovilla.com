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

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["es", "en"]),
    slug: z.string().optional(),
    area: z.string(),
    areaSecundaria: z.string().optional(),
    year: z.string().optional(),
    rol: z.string().optional(),
    destacado: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, proyectos };
