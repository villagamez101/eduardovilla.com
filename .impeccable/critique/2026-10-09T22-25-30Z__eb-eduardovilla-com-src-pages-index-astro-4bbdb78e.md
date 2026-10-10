---
target: 03_outputs/web/eduardovilla.com (homepage)
total_score: 19
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/eduardovg/projects/webs/eduardovilla.com/03_outputs/web/eduardovilla.com/src/pages/index.astro"
target_fingerprint: "sha256:58f02ef72b583344e7b77efc9acba3418336de3f1b14f6ac746ca949382aa502"
target_path: /home/eduardovg/projects/webs/eduardovilla.com/03_outputs/web/eduardovilla.com/src/pages/index.astro
timestamp: 2026-10-09T22-25-30Z
slug: eb-eduardovilla-com-src-pages-index-astro-4bbdb78e
---
⚠️ DEGRADED: single-context (no sub-agent/Task tool exposed) — Assessment A (design review) and Assessment B (detector) ran sequentially in one context; browser automation was also unavailable, so no in-page overlay was produced.

**Target:** `03_outputs/web/eduardovilla.com/src/pages/index.astro` (homepage as the anchor surface; site-wide patterns inspected across ES+EN pages, components, tokens, and the built `dist/`).
**Slug:** `eb-eduardovilla-com-src-pages-index-astro-4bbdb78e`

# Design Health Score

Mode read: primarily **Experience / Read** (a personal "digital refuge" and portfolio), with a light **Persuade** CTA layer. Heuristics that cannot apply to a static, form-less content surface are scored `n/a` and the maximum renormalized to **/28**.

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active-nav and language states are shown; theme toggle exposes no pressed state (visual icon swap only, `aria-label` static). |
| 2 | Match System / Real World | 3 | Copy is warm and human; "Áreas" is an invented abstraction that asks the visitor to learn the author's taxonomy. |
| 3 | User Control and Freedom | 3 | Clear nav and back-links; mobile menu has no Esc-close, no focus return, no body-scroll lock. |
| 4 | Consistency and Standards | 3 | One token system and component set; ES pages hardcode strings the i18n dict also holds, and `recursos` drifts from the nav pattern. |
| 5 | Error Prevention | n/a | No inputs, forms, or destructive actions exist; nothing to prevent. |
| 6 | Recognition Rather Than Recall | 2 | **`/recursos` is linked from nowhere** in Nav or Footer though it ships a real CV download. |
| 7 | Flexibility and Efficiency | n/a | No task/efficiency loop on a read-only personal site. |
| 8 | Aesthetic and Minimalist Design | 2 | Decoration (aurora, grid, radial glow, gradient text, marquee, pulse-dot) competes with content; `/proyectos` ships lorem ipsum. |
| 9 | Error Recovery | 3 | 404 is on-brand and offers a way home. |
| 10 | Help and Documentation | n/a | No system to document; contact channels are sufficient. |
| **Total** | | **19/28** | **Acceptable (68%)** |

# Design Specificity Verdict

**Start here.** The site reads as an authored, warm personal voice wrapped in an interchangeable "modern AI dark SaaS" skin.

**LLM assessment:** The *content and copy* are genuinely specific — the "generalista / seis lentes / visión integral" thesis, the honest "I dejo la puerta abierta" contact tone, the trajectory cards. That is real product character. The *visual language*, however, is the default 2024–2026 generator stack: deep navy → indigo+cyan gradient, aurora blobs, a hairline grid overlay, gradient-filled headline words, a pulsing status dot next to a tracked-caps eyebrow, an auto-scrolling word marquee, and colored glow shadows. Any AI SaaS landing could wear this unchanged. That directly contradicts the project's own brief in `01_context/diseno.md`: *"Editorial, no landing… Personal, no corporativo… Think out of the box"* and *"lo creativo siempre se subordina a lo claro."* The result is polished and category-safe, not editorial and personal. The biggest missed opportunity is that the strongest asset — the essayistic voice and the "six lenses" idea — is expressed through stock decoration rather than through typography, rules, asymmetry, and negative space.

**Deterministic scan:** `impeccable detect --json dist/` → **571 findings across 31 files** (exit 2). By rule: low-contrast 201 (149 warning, 52 advisory), cramped-padding 114, dark-glow 35, overused-font 31, gradient-text 31, codex-grid-background 31, pulsing-dot 30, marquee 30, radial-halo 30, hero-eyebrow-chip 27, wide-tracking 9, side-tab 2. The detector caught a pattern I under-weighted: `hero-eyebrow-chip` fires on **27** headings — essentially every page leads with a tracked-caps kicker above its `h1`, which is the single most recognisable AI-hero tell on the site.

**False positives / brief-over-machinery:** `overused-font: Montserrat` is **mandated by the brand identity** (`01_context/diseno.md`, self-hosted from the logo) — this is a "brief wins" case, not a defect. `side-tab` is the intentional editorial `border-left` blockquote. Most `cramped-padding` hits land on the edge-to-edge `.glass` nav (intentional full-bleed header), the `display:none` mobile-nav wrapper, and `.card` elements whose inset is supplied by Tailwind `p-6` utilities the scanner may not resolve. Treat those as low-confidence.

**Visual overlays:** No reliable user-visible overlay is available — this session exposes no browser automation, so the `detect.js` injection and `[Human]` tab could not be produced. Fallback signal: CLI detector only.

# Overall Impression

A sincere, well-built personal site whose copy is more distinctive than its visuals. The engineering is clean (tokens, i18n, a11y touches, reduced-motion handling, 404), but the visual system is doing "generic cool" when the brief asked for "editorial, personal, handmade." The single biggest opportunity: swap the stock dark-SaaS ornamentation for an editorial signature — let type, rules, and composition carry the personality the writing already has.

# What's Working

1. **Clear, token-driven system.** `tokens.css` governs both themes from one variable set; the identity's navy→indigo/cyan DNA survives the light/dark pivot. Changing the palette is a one-file edit — exactly what `01_context/diseno.md` asked for.
2. **Honest, human copy.** The intro, manifesto, and contact wording ("Dejo la puerta abierta; tú decides si entras") sound like a person, not a brand. This is the site's real moat.
3. **Accessibility reflexes already present.** Skip target `#main`, `aria-current` on language links, `aria-expanded` on the menu toggle, `prefers-reduced-motion` disabling every animation, and an on-brand 404. The bones are considerate.

# Priority Issues

**[P1] The visual language is category-interchangeable, not editorial.**
- **Why it matters:** The brief explicitly demands "editorial, no landing" and "personal, no corporativo." Gradient-text headings, aurora + grid + radial-glow backgrounds, glow shadows, a marquee, and a pulsing dot are the default AI-generated look — they erase the differentiation the copy works to build.
- **Fix:** Keep one signature motion (e.g. the theme transition) and remove the rest. Replace gradient words with solid ink plus a single accent rule/marker; drop the marquee or make it static; replace the aurora/grid with a plain or subtly-shifted surface; kill the pulsing dot and the eyebrow-chip repetition.
- **Suggested command:** `/impeccable distill` then `/impeccable typeset`.

**[P1] Small text fails WCAG AA contrast site-wide.**
- **Why it matters:** 201 low-contrast hits. `--ink-faint` (40% alpha) renders at **3.6–3.7:1** and accent-as-text at **4.0–4.3:1** — both below the 4.5:1 body-text minimum. This affects kickers, meta labels, dates, footer text, and accent links across every page: an accessibility failure and a legibility cost.
- **Fix:** Raise `--ink-faint` to ≈0.55–0.6 alpha for small text; introduce a dedicated `--accent-text` that darkens the accent enough to clear 4.5:1 on `--bg`/`--elev` (or reserve `--accent` for large text, icons, and surfaces only).
- **Suggested command:** `/impeccable colorize` (or `/impeccable audit` to track the fix).

**[P1] `/recursos` is orphaned from navigation.**
- **Why it matters:** The page is built in both languages and holds the only real downloadable asset (the 2026 CV), yet `Nav.astro` and `Footer.astro` link to it nowhere. A visitor relying on recognition (heuristic 6) cannot find it, and the site's stated "legacy consultable" purpose is undercut.
- **Fix:** Add `Recursos`/`Resources` to the nav and footer arrays, or demote the page and surface the CV download from `/acerca`.
- **Suggested command:** `/impeccable layout`.

**[P2] Lorem ipsum project placeholders are shipped.**
- **Why it matters:** `/proyectos` publishes four "Lorem ipsum" cards plus a "Placeholder" caption; this contradicts the brand rule "demostrarlo, no declararlo" and reads as unfinished to a potential collaborator.
- **Fix:** Show the real empty state from the i18n dict (`listas.vacio`) with a purposeful note, and keep demo entries behind a draft flag until real work exists.
- **Suggested command:** `/impeccable onboard` (empty states) or `/impeccable harden`.

**[P2] Accent color is overapplied, flattening hierarchy.**
- **Why it matters:** Indigo appears on icons, stats numbers, section numbers, links, hover states, tags, and buttons simultaneously, so nothing reads as primary. Combined with gradient headings, emphasis stops meaning anything.
- **Fix:** Budget the accent — one primary action per view, accent reserved for interactive affordances and a single emphasis per section; let body and meta text be neutral.
- **Suggested command:** `/impeccable quieter`.

**[P3] Tracked-caps kicker above every heading.**
- **Why it matters:** The same eyebrow pattern on 27 headings is the most repetitive AI-hero tell detected; it reads as template rather than editorial voice.
- **Fix:** Use a kicker only where it carries real navigation meaning (breadcrumbs, area numbers); otherwise integrate the label into the headline.
- **Suggested command:** `/impeccable layout`.

# Persona Red Flags

**Jordan (First-Timer)** — Lands on the homepage and meets "Generalista creativo" with a pulsing dot; nothing explains what an "área" is before asking him to `Ver las áreas`. The mobile menu button is icon-only (hamburger, `aria-label` only). `/recursos` is invisible to a first-timer because nothing links to it. Will likely bounce without understanding the offer.

**Riley (Stress Tester)** — `/proyectos` presents four lorem-ipsum cards as if they were real work; a methodical visitor loses trust immediately. The blog's empty-state and single post are fine, but the placeholder project cards break the promise the page makes. On refresh mid-scroll, `.reveal` sections below the fold are un-observed until scrolled — acceptable, but content that starts hidden relies on JS to ever appear (no-JS users see `opacity:0` sections).

**Casey (Distracted Mobile)** — The primary "Hablemos"/"Escríbeme" CTAs sit mid/lower page (reachable), but the hero's `min-h-[86vh]` pushes the first actionable content low on a phone. The marquee auto-scrolls and steals attention while thumb-scrolling, and the accent-vs-body contrast problem is worst in daylight glare. Tap targets (9×9 nav buttons) are acceptable.

# Minor Observations

- `src/pages/areas/[slug].astro` and `[slug].astro` sibling pages hardcode Spanish strings ("Área", "En esta área") that duplicate the i18n pattern used elsewhere — a consistency seam to unify.
- Nav active-state matching (`Nav.astro:24`) uses `startsWith(`${href}/`)`; `/areas` and any future `/areas-*` route would collide. Low risk today.
- Theme toggle conveys state through icon visibility only; consider `aria-pressed` or a dynamic label for Sam (accessibility-dependent) users.
- `proyectos/index.astro` and `servicios/index.astro` are annotated `letter-spacing: 0.06em on body text` — verify it's intended (likely a `tracking-*` utility leaking onto prose).
- `overused-font` and `side-tab` findings are accepted per the brand brief; do not "fix" them.

# Questions to Consider

- If the site is a *refuge* and a *legacy*, why does it wear the visual uniform of a SaaS launch page?
- What is the one motion or moment you'd want a visitor to remember — and would everything else make room for it?
- Does "Áreas" describe the idea to a stranger, or only to you?
- What would this look like if the typography carried the personality the words already have?
