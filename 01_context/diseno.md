# Diseño — dirección visual del sitio

> Reglas visuales del sitio personal. El sitio debe sentirse personal y creativo,
> moderno y minimalista — no corporativo.

## Dirección

- **Editorial, no landing.** Tipografía protagonista, mucho aire, retícula visible cuando suma. Piensa revista/ensayo digital, no dashboard de agencia.
- **Personal, no corporativo.** Detalles hechos a mano: cursor interactions, micro-copy con humor fino, notas al margen, elementos que respiran pero se mueven con intención.
- **Think out of the box.** Composición asimétrica permitida, tipografía enorme en partes clave, transiciones de tema (light/dark) con un detalle distintivo. Pero nunca a costa de legibilidad: lo creativo siempre se subordina a lo claro.

## Tipografías

- **Principal:** Montserrat (de la identidad; self-hosted).
- Posible voz secundaria serif/high-contrast para títulos largos — decidir en fases de implementación.
- Peso y tracking jerárquicos: títulos con mucha personalidad, cuerpo neutro y legible.

## Color — ADN + alternativas

Base de identidad actual: `#1d2240` (navy profundo) y `#213c90` (azul) con Montserrat.
El usuario pide **explorar alternativas**: mantener el ADN (azules profundos) pero con paletas más ricas y con carácter. A continuación, las candidata a evaluar con vistas de preview reales en build:

- **A. Editorial Oscuro (base actual, refinada):** navy `#1d2240` + azul `#213c90` + crema/contraste cálido como superficie. Seria, elegante.
- **B. Tinta sobre papel (creativa):** base oscura casi negra carbón + acento cálido (ámbar/coral) que rompe el azules. Más sorpresa, más warmth personal.
- **C. Duo atrevido:** azul profundo + un solo acento vivo (verde lima/cian eléctrico) usado con mucha mesura. El más "think out of the box".

**Modo claro y modo oscuro obligatorios**, con `prefers-color-scheme` por defecto y toggle manual persistido (localStorage). La paleta elegida debe funcionar en ambos modos sin intervenir a mano.

## Reglas de implementación

- Design tokens únicos que gobiernan los tres esquemas elegidos; cambiar de alternativa = tocar solo las variables.
- Logo: usar el isotipo SVG vectorial. El sitio nunca rasterizar el logo.
- Favicon: isotipo SVG en circle.
- Micro-interacciones sutiles (revelados, transiciones de tema) — nada de parallax ni bibliotecas pesadas.
- Performance: imágenes `AVIF/WebP`, fuentes `font-display: swap`, menos de 200KB por página de base.
