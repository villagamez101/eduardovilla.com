# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Peers and the tech/creative community.** People who read the writing, follow
  the building, and care about the process as much as the output: designers,
  developers, indie makers, and other generalists.
- **Potential clients and collaborators.** People who might hire or partner with
  Eduardo. They need to trust the work and find a way to make contact, without
  being pressured.

The site is personal first and professional second: it is read by people who
arrive curious, not in a buying funnel.

## Product Purpose

A personal digital refuge and a consultable legacy for Eduardo Villa: a place
where he thinks, builds, and leaves a record of what he learns. It exists to
show the trajectory — the six lenses on the same problem — honestly and without
over-polishing. Success means the right reader (a peer or a potential
collaborator) understands what Eduardo does, why the generalist position is a
strength, and can reach the work and the writing without friction.

## Positioning

The generalist is not indecision: it is integral vision. The six areas are not
separate services but lenses on the same problem — business, technology, design,
and automation crossing over. A neighboring freelancer could copy a service list
or a portfolio grid; they cannot truthfully copy the documented trajectory of
one person who has shipped an ERP in six months, run 20+ marketplaces at $5M
MXN/month, and chosen a ridge between the operational freelancer and the large
consultancy.

## Operating Context

- Spanish-first (ES canonical), with an English mirror of every page.
- Two themes required: light and dark, `prefers-color-scheme` by default with a
  manual, persisted toggle.
- Static Astro site, deployed as a Docker/nginx image; the current WordPress
  site coexists until the domain migrates.
- Content is authored in-repo: i18n dictionary (`src/i18n/ui.ts`), data files
  (`src/data/*.json`), and Astro content collections (blog, proyectos).
- The 2026 CV (PDF) is the one real downloadable asset today.

## Capabilities and Constraints

- Pages: home, areas (index + one route per area), proyectos, servicios,
  recursos, blog (+ posts), acerca, contacto, 404 — each in ES and EN.
- Design tokens in a single file (`src/styles/tokens.css`) govern both themes;
  switching theme must be a token-only change.
- Montserrat is the mandated primary family, self-hosted from the identity.
- Fonts self-hosted with `font-display: optional` + `<link rel="preload">`
  (no mid-load font swap); metric-matched fallbacks; per-page base budget
  under 200KB; images AVIF/WebP; no heavy animation libraries.
- Micro-interactions are allowed (reveals, theme transition); no parallax.
- Undecided: final content for proyectos and areas beyond the seeded data.

## Brand Commitments

- **Name:** Eduardo Villa; located in Córdoba, Veracruz, México.
- **Voice:** first person always; reveal the process, not only the result;
  concrete over abstract; natural Spanish with technical English left untranslated
  (deploy, stack, pipeline); no sales voice. "Como si Eduardo te explicara en un
  café lo que aprendió este mes."
- **Visual ADN:** deep navy `#1d2240` and blue `#213c90` with Montserrat.
- **Logo:** the vector SVG isotype; never rasterize it. Favicon is the isotype in
  a circle.
- **Not:** an agency landing, an aggressive services catalogue, or a formatted
  LinkedIn CV.
- A high-contrast serif is approved as a secondary voice for long/display
  headings; Montserrat remains the primary family.

## Evidence on Hand

- CV 2026 (repo-served PDF under `public/`): Linkbits 2019–2026 (ERP in <6 months,
  Lark Suite for 800+ users; ~$5M MXN/month, 20+ marketplaces, 3,000-SKU catalog,
  team of 6), Sisco 2018–2019.
- One real blog post (`src/content/blog/por-que-este-sitio.md`).
- Contact channels: email, WhatsApp, GitHub.
- **Absences future work must not fabricate:** real project case studies
  (`proyectos` currently seeds a demo/lorem entry), testimonials, press, proof of
  services beyond the areas model. Do not invent clients, metrics, or claims.

## Product Principles

1. **Demonstrate, don't declare.** Show the mechanism and the trajectory, not
   adjectives about them.
2. **Person, not brand.** First person, plain language, a door left open rather
   than a funnel.
3. **Clarity before creativity.** The creative move always subordinates to
   legibility; editorial means legible, not decorative.
4. **One source of truth.** Tokens, i18n dictionary, and data files govern every
   surface; no hardcoded drift.
5. **The refuge is public.** Write and build as if a peer is reading over the
   shoulder: honest, unfinished where it is unfinished.

## Accessibility & Inclusion

- WCAG AA: body/placeholder text ≥4.5:1, large text ≥3:1, controls and focus
  indicators ≥3:1, in both themes.
- Keyboard-operable navigation and theme/language controls; visible focus;
  logical DOM order; reduced-motion honored.
