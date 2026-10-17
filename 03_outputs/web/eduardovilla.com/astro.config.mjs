// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.SITE_URL || "https://eduardovilla.com";

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  // La barra de herramientas de dev (Astro) añade JS/CSS a cada página y no
  // se usa en este sitio; desactivarla aligera y acelera el dev server.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["dev.eduardovilla.com", ".eduardovilla.com"],
    },
  },
});
