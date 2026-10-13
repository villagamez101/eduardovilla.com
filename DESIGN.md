---
name: Eduardo Villa
description: Refugio editorial personal — un generalista que piensa, construye y deja registro
colors:
  fondo-noche: "#0b0e1d"
  fondo-papel: "#f6f4ee"
  elevacion: "#131837"
  tinta-noche: "#f4f5f8"
  tinta-dia: "#14172c"
  azul-tinta: "#2f4bb8"
  azul-horizonte: "#8aa6ff"
  azul-marca: "#213c90"
  naranja-senal: "#f97316"
  naranja-senal-claro: "#ea580c"
typography:
  display:
    fontFamily: "Libre Caslon Display, Caslon Fallback, Iowan Old Style, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.9rem, 9vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  display-2:
    fontFamily: "Libre Caslon Display, Caslon Fallback, Iowan Old Style, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Montserrat, Montserrat Fallback, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  lede:
    fontFamily: "Montserrat, Montserrat Fallback, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.08rem, 1.7vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, Montserrat Fallback, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "0.3rem"
  md: "0.4rem"
  pill: "99px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "6rem"
  measure: "66ch"
components:
  button-primary:
    backgroundColor: "{colors.naranja-senal}"
    textColor: "#1a1206"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.3rem"
  button-primary-hover:
    backgroundColor: "{colors.naranja-senal-claro}"
    textColor: "#1a1206"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.3rem"
  button-ghost:
    textColor: "{colors.tinta-noche}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.3rem"
  card:
    backgroundColor: "{colors.fondo-noche}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  tag:
    textColor: "{colors.tinta-noche}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.28rem 0.6rem"
  nav-link:
    textColor: "{colors.tinta-noche}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.5rem"
---

# Design System: Eduardo Villa

## Overview

**Creative North Star: "El Refugio Editorial"**

This is a reading room, not a storefront. The system is built so that a person can
arrive curious, sit with a piece of writing or a body of work, and leave without
being sold anything. Sobriety comes from what is removed — no gradients on words,
no floating glass, no borrowed glow — and warmth comes from what is chosen: a deep
navy night (or a warm paper day), a single high-contrast serif that carries every
display line, and a blue that behaves like ink on a page rather than a button
screaming for a click.

The voice of the writing and the voice of the layout are the same voice. Structure
is drawn with hairline rules and negative space, not with boxes; the hierarchy is
carried by the type ladder and by air, so that the eye always knows what speaks
first. Color is rationed hard: the brand blue governs every interaction — link,
hover, focus, selection, active state — and the orange appears exactly once per
view, on the one action that matters. That rationing is the discipline that keeps
the page calm enough to read.

Everything is token-driven: dark and light are the same system with a swapped
palette, and the theme change is a color change, never a layout change. Depth is
flat by default; surfaces sit on the page and are separated by one-pixel lines
and two soft radial washes, never by resting shadows. The whole build is meant to
feel authored — an artifact of one person's practice — rather than generated from
a template.

**Key Characteristics:**
- Warm, restrained, patient; clarity before cleverness.
- One serif for all display, one sans for all body and labels.
- Hairline-led structure: 1px rules define sections, not card chrome.
- Blue as the interaction voice; orange reserved for the single primary action.
- Flat by default; shadow only as a response to state.
- Token-only theming: the same layout in night and paper.

## Colors

A two-theme palette anchored in a deep identity navy and a warm paper light, with
one brand blue and one rationed action orange.

### Primary
- **Azul Tinta** (#2f4bb8): the brand blue and the interaction voice. It fills
  accent surfaces (active language pill), and governs hover, focus rings,
  selection, the nav underline, and the media-frame hover border. In dark theme it
  is paired with **Azul Horizonte** (#8aa6ff) when the blue must be read as small
  text; in light theme that readable role is served by the deeper **Azul Marca**
  (#213c90).
- **Naranja Señal** (#f97316): the single primary action. Reserved for the main
  CTA button per view (dark theme; light theme uses the deeper **Naranja Señal
  Claro**, #ea580c). It is never used for decoration, never for links, never
  twice in one viewport.

### Neutral
- **Fondo Noche** (#0b0e1d): the default dark canvas; page background in the
  default theme. **Fondo Papel** (#f6f4ee) is its light-theme counterpart — a warm
  cream, not a pure white.
- **Elevación** (#131837): the raised dark surface (media placeholder, code
  blocks) that sits above the canvas.
- **Tinta Noche** (#f4f5f8): primary text in dark theme. **Tinta Día** (#14172c)
  is its light-theme counterpart (the identity navy, used as ink).
- **Azul Marca** (#213c90): the deep identity blue from the visual ADN; also the
  logo's accent path and the light-theme readable accent.
- Soft and faint ink, lines, and surfaces are derived as alpha layers of the ink
  color (rgba), so borders and secondary text recede without introducing new hues.

### Named Rules
**The One Voice Rule.** The brand blue owns every interactive state; the orange is
spent on exactly one primary action per view. If two things on screen are both
orange, one of them is wrong.

**The Ink, Not Light Rule.** The accent is treated as ink on a page: it colors
text, underlines, rules, and borders. It is not a light source — no accent glows,
no colored shadows on components.

## Typography

**Display Font:** Libre Caslon Display (with Iowan Old Style, Georgia, serif fallback)
**Body Font:** Montserrat (with a metric-matched Arial fallback, then system-ui)
**Label/Mono Font:** Montserrat for labels; system monospace for code

**Character:** A high-contrast serif sets the editorial tone and carries every
display line, while a geometric sans does the quiet work of body, labels, and
metadata. The pairing reads as a printed page — not a product landing. Montserrat
is the mandated identity family; the serif is the approved secondary voice for
display and long-form headings.

### Hierarchy
- **Mega** (400, clamp(4rem, 15vw, 10rem), 0.9, -0.02em): the 404 numeral only.
- **Display** (400, clamp(2.9rem, 9vw, 7.5rem), 0.98): the hero name and the
  largest cover statements.
- **Display Page** (400, clamp(2.4rem, 6.5vw, 4.6rem), 1.05): interior page
  titles; 1–2 lines, kept tight.
- **Display 2** (400, clamp(1.9rem, 5vw, 3.4rem), 1.12): section headers and the
  manifesto line.
- **Display 3** (400, clamp(1.35rem, 2.6vw, 1.75rem), 1.22): card titles and list
  entries.
- **Lede** (400, clamp(1.08rem, 1.7vw, 1.35rem), 1.6): the introductory paragraph
  under a title.
- **Body** (400, 1rem, 1.7): all running text, capped at 66ch.
- **Label** (600, 0.75rem, 1.4, letter-spacing 0.14em, UPPERCASE): marginalia and
  metadata — never a chip floating over a headline.

### Named Rules
**The Single Serif Rule.** One serif for all display, one sans for everything
else. Hierarchy is built from scale and air, never from adding a third family.

**The Marginalia Rule.** The tracked-caps label is a margin note — numbering, a
location, a section marker. It never sits as an eyebrow chip above a heading.

## Layout

An editorial single-column with a wide reading rail. Content is held to a
**74rem** container inside a responsive gutter of `clamp(1.25rem, 4vw, 3.5rem)`,
and prose is capped at **66ch** so lines stay readable. Sections are separated by
a **6rem** top rhythm (Tailwind `mt-24`) and a full-width 1px hairline rule, so
the page reads as a sequence of ruled bands rather than a stack of cards.

The homepage hero is a two-column grid from the `lg` breakpoint: a `1.05fr`
narrative column (name over lede and CTAs) beside a `0.72fr` media column holding
a 4/5 portrait. Below that, "Seis lentes" and the services list use a
number / title / description / affordance grid (`3rem` · `15–16rem` · `1fr` ·
auto) that collapses to a stacked layout on small screens. Stats run as a
2-up → 4-up tabular grid. The layout never centers a narrow column inside a wide
void; it anchors to the left rail and lets rules carry the width.

## Elevation & Depth

**Flat by default.** This system does not use resting shadows. Depth is conveyed
by three things and nothing else: one-pixel hairline borders (`--line` at rest,
`--line-strong` on hover), a stepped surface pair — canvas → `Elevación` — for
insets like media placeholders and code blocks, and two soft radial background
washes behind the page (a blue glow anchored top-right, an accent wash bottom-left)
that tint the canvas without reading as a component.

The only shadow in the system is a response to state: when the sticky header
detaches from the top on scroll, it gains a single low, wide shadow
(`0 20px 38px -30px rgba(0,0,0,0.85)` dark / `rgba(20,23,44,0.45)` light) to lift
it above the passing content. Depth here means "this plane is now in front",
never "this card floats".

### Shadow Vocabulary
- **Detached header** (`box-shadow: 0 20px 38px -30px`): applied to `.glass` only
  when `.site-header.is-scrolled` — a contextual lift, not a resting elevation.
- **Radial canvas wash** (`radial-gradient(... var(--glow) / var(--accent-soft))`):
  background atmosphere on `body`, not a shadow and not attached to any element.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow appears only as
a response to state — never as resting elevation, never on cards, never on the
orange CTA.

## Shapes

A precise, low-rounding form language. Structural surfaces (cards, media frames,
code blocks) use a **small radius** — `0.4rem` (md) for cards and frames, `0.3rem`
(sm) for smaller insets — while interactive controls (buttons, tags, theme and
menu toggles, the language switch) use a full **pill** (`99px`). Structure is
drawn with **1px hairlines** rather than heavy borders or fills; borders step from
`--line` to `--line-strong` (or to the accent) to signal state. Media is clipped
inside its frame with `overflow: hidden`, which is what lets the image scale
inside a stable rectangle. There are no large corner radii, no soft blobs, no
organic geometry — the silhouette is rectangular and ruled.

### Named Rules
**The Hairline Rule.** Structure is a one-pixel line, not a box. Prefer a rule or
a border color shift over adding a fill or a shadow.

## Components

The felt quality is **refined and contained**: hairline borders, quiet
transparent surfaces, and interaction expressed through color and a few
millimeter-level nudges rather than scale or spectacle.

### Buttons
- **Shape:** pill (full radius, `99px`), inline-flex with a `0.5rem` gap.
- **Primary:** the single orange action — `background: var(--cta)`, ink
  `#1a1206`, padding `0.72rem 1.3rem`, weight 600, 0.9rem. Hover brightens
  (`filter: brightness(1.06)`) and the trailing arrow nudges right (`→ +4px`).
- **Ghost / secondary:** transparent with a `1px` `--line-strong` border and
  `--ink` text. Hover shifts border and text to the accent and lifts 1px.
- **Motion:** `0.24s` ease on color/border/background; the arrow uses the entrance
  curve. No fills, no glows.

### Chips (tags)
- **Style:** pill, `1px` `--line-strong` border, transparent fill, uppercase
  micro-label in `--ink-soft`, padding `0.28rem 0.6rem`.
- **State:** a metadata affordance, not a filter; it never fills with accent.

### Cards / Containers
- **Corner Style:** small radius (`0.4rem`).
- **Background:** a near-transparent ink wash (`--surface`, an rgba of `--ink`),
  not a solid panel.
- **Border:** `1px` `--line`; hover steps to `--line-strong` and deepens the wash
  to `--surface-2`.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Internal Padding:** supplied by layout utilities (typically `1.5rem`).

### Inputs / Fields
No form fields exist on the site — it is a static, read-only surface. Contact is
handled by links (email, WhatsApp, GitHub), so there is no input component to
document. If inputs are ever added, they should follow the hairline + accent-focus
language and inherit the token system rather than a component library.

### Navigation
- **Style:** a sticky top bar on a solid `--bg` `--glass` surface with a `1px`
  bottom hairline; the logo lockup (isotype + wordmark) sits left, primary links
  right, then the language switch and theme toggle.
- **Typography:** links are 0.8rem in `--ink-soft`, current page in
  `--accent-text`; labels use the uppercase micro-label.
- **States:** a 1px accent underline grows from the left on hover and on
  `aria-current="page"`. The theme toggle swaps sun/moon with a rotate-and-fade.
- **Mobile:** links collapse into a two-column menu that expands in height and
  fades in as one gesture; the toggle is a round hairline button.

### Media Frame (signature)
- **Shape:** `1px` `--line-strong` border at a small radius, with `overflow:
  hidden`; a `4/5` default ratio.
- **Behavior:** the image scales subtly on hover (`scale(1.035)`, `0.8s` entrance
  curve) inside the fixed frame; when no image is present, a branded placeholder
  shows the isotype watermark, an accent index, and a label note over an
  `accent-soft` + `elev → bg-2` gradient. It carries a caption in the label style.

### Logo
- **Form:** the vector SVG isotype — an accent-blue path plus ink polygons.
- **Rule:** always vector; never rasterize. The favicon is the isotype inside a
  circle. The mark scales on hover (`1.06`) as a small, contained cue.

## Do's and Don'ts

### Do:
- **Do** set every display line in Libre Caslon Display and everything else in
  Montserrat; build hierarchy with the token scale and whitespace.
- **Do** theme through tokens only — dark and light must be the same layout with a
  swapped palette (a token-only change).
- **Do** keep one primary (orange) action per view and let the brand blue own all
  links, hover, focus, selection, and active states.
- **Do** draw structure with 1px hairline rules and negative space; use the
  `0.4rem` / `0.3rem` radii for surfaces and the pill for controls.
- **Do** keep body text at or under 66ch and honor WCAG AA (≥4.5:1 body, ≥3:1
  large text and controls) in both themes.
- **Do** keep the logo as vector SVG and preserve a calm, single-gesture motion
  vocabulary (entrance reveals, theme transition) with `prefers-reduced-motion`
  honored.

### Don't:
- **Don't** apply gradients to text or add glow/accent-colored shadows to
  components.
- **Don't** use resting shadows or floating-glass surfaces; shadow is a response
  to the detached header only.
- **Don't** introduce a third font family, a second accent hue, or an orange used
  for anything but the one primary action.
- **Don't** place a tracked-caps label as an eyebrow chip above a heading; the
  label is marginalia.
- **Don't** add parallax, heavy animation libraries, or motion that is required
  for content to be readable.
- **Don't** rasterize the isotype or replace it with an icon-font glyph.
