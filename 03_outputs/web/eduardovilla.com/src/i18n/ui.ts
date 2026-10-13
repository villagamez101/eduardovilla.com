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
      es: "Soluciones digitales para pymes y emprendedores",
      en: "Digital solutions for small businesses and founders",
    } satisfies Dict,
    intro: {
      es: "Siete años de experiencia en transformación digital:\nDiseño, branding, desarrollo web, marketing, e-commerce e IA.\nSoy una persona autodidacta y apasionado por la tecnología.",
      en: "Seven years of experience in digital transformation:\nDesign, branding, web development, marketing, e-commerce and AI.\nI'm a self-taught person and passionate about technology.",
    } satisfies Dict,
    verAreas: { es: "Portafolio", en: "Portfolio" } satisfies Dict,
    heroImageAlt: { es: "Retrato de Eduardo Villa", en: "Portrait of Eduardo Villa" } satisfies Dict,
    heroImageCaption: {
      es: "Eduardo Villa",
      en: "Eduardo Villa",
    } satisfies Dict,
    taller: { es: "En el taller", en: "In the workshop" } satisfies Dict,
    tallerMeta: { es: "Proceso · en imágenes", en: "Process · in images" } satisfies Dict,
    imgPlaceholder: { es: "Imagen en camino", en: "Image on the way" } satisfies Dict,
    imgCaption: { es: "Notas del proceso", en: "Process notes" } satisfies Dict,
    areasKicker: {
      es: "Seis áreas de interés",
      en: "Six areas of interest",
    } satisfies Dict,
    areasTitle: { es: "Áreas de interés", en: "Areas of interest" } satisfies Dict,
    leerMas: { es: "Ver área", en: "View area" } satisfies Dict,
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

  proposito: {
    titulo: {
      es: "Ser un perfil generalista\nes tener visión integral.",
      en: "Being a generalist profile\nis having an integral vision.",
    } satisfies Dict,
    cuerpo: {
      es: "Gran parte de mi vida he buscado tener un propósito, especializarme y hacer lo que todos los libros de marketing y emprendimiento te recomiendan.\n\nPero entendí que mi principal fortaleza es saber de muchas áreas, involucrarme en todos los procesos, tener una visión general del proyecto y verlo desde diferentes perspectivas.",
      en: "For much of my life I looked for a purpose, to specialize and to do what every marketing and entrepreneurship book tells you to do.\n\nBut I understood that my main strength is knowing many areas, getting involved in every process, having a general vision of the project and seeing it from different perspectives.",
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
