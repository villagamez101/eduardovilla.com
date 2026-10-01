export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function getLang(locale: string): Locale {
  return (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;
}

type Dict = { es: string; en: string };

export const t = {
  nav: {
    inicio: { es: "Inicio", en: "Home" },
    acerca: { es: "Acerca de", en: "About" },
    areas: { es: "Áreas", en: "Areas" },
    proyectos: { es: "Proyectos", en: "Projects" },
    servicios: { es: "Servicios", en: "Services" },
    recursos: { es: "Recursos", en: "Resources" },
    blog: { es: "Blog", en: "Blog" },
    contacto: { es: "Contacto", en: "Contact" },
  } satisfies Record<string, Dict>,

  home: {
    tagline: {
      es: "Generalista creativo — diseño, código, sistemas y juego",
      en: "Creative generalist — design, code, systems and play",
    } satisfies Dict,
    intro: {
      es: "Soy Eduardo Villa. Llevo siete años haciendo el mismo tipo de trabajo desde ángulos distintos: ayudar a negocios desordenados a tener estructura digital — tiendas, ERPs, marcas, automatizaciones. Este sitio es mi refugio: lo que construyo, lo que pienso y lo que aprendo, sin pulirlo más de lo necesario.",
      en: "I'm Eduardo Villa. For seven years I've done the same kind of work from different angles: helping messy businesses get digital structure — stores, ERPs, brands, automations. This site is my refuge: what I build, what I think and what I learn, without over-polishing it.",
    } satisfies Dict,
    verAreas: { es: "Ver las áreas", en: "See the areas" } satisfies Dict,
    areasKicker: {
      es: "Seis lentes sobre el mismo problema",
      en: "Six lenses on the same problem",
    } satisfies Dict,
    leerMas: { es: "Leer área", en: "Read area" } satisfies Dict,
  },

  areas: {
    indexTitle: { es: "Áreas", en: "Areas" } satisfies Dict,
    back: { es: "← Todas las áreas", en: "← All areas" } satisfies Dict,
  },

  footer: {
    hecho: { es: "Hecho a mano con Astro", en: "Handmade with Astro" } satisfies Dict,
  },

  contacto: {
    saludo: {
      es: "Si tienes un negocio con desorden digital o una idea que merece construirse, escríbeme. Dejo la puerta abierta; tú decides si entras.",
      en: "If you run a business with digital mess, or have an idea worth building, write to me. I leave the door open; you decide whether to walk in.",
    } satisfies Dict,
  },

  manifiesto: {
    titulo: {
      es: "El generalista no es indecisión: es visión integral.",
      en: "The generalist isn't indecision: it's integral vision.",
    } satisfies Dict,
    cuerpo: {
      es: "Las áreas no son servicios separados; son lentes sobre el mismo problema. Un negocio desordenado no necesita una página web o un logo: necesita alguien que entienda el panorama completo y construya la pieza correcta para su momento. Ese cruce — negocio, tecnología, diseño, automatización — es donde vivo.",
      en: "The areas aren't separate services; they're lenses on the same problem. A messy business doesn't need a website or a logo: it needs someone who understands the whole picture and builds the right piece for the moment. That crossing — business, technology, design, automation — is where I live.",
    } satisfies Dict,
  },

  listas: {
    indexTitle: { es: "Proyectos", en: "Projects" } satisfies Dict,
    vacio: {
      es: "Aquí vivirá el trabajo: proyectos reales cuando estén listos.",
      en: "This is where the work will live: real projects, when they're ready.",
    } satisfies Dict,
  },

  servicios: {
    indexTitle: { es: "Servicios", en: "Services" } satisfies Dict,
    nota: {
      es: "Atiendo poco y bien: arquitectura digital clara antes que piezas sueltas.",
      en: "I serve a few, and I serve well: clear digital architecture before loose pieces.",
    } satisfies Dict,
  },

  recursos: {
    indexTitle: { es: "Recursos", en: "Resources" } satisfies Dict,
    nota: {
      es: "Plantillas, guías y herramientas que suelo recomendar y usar.",
      en: "Templates, guides and tools I usually recommend and use.",
    } satisfies Dict,
  },

  blog: {
    indexTitle: { es: "Blog", en: "Blog" } satisfies Dict,
    vacio: { es: "Escritos en camino.", en: "Writings on the way." } satisfies Dict,
  },

  acerca: {
    indexTitle: { es: "Acerca de", en: "About" } satisfies Dict,
  },
} as const;
