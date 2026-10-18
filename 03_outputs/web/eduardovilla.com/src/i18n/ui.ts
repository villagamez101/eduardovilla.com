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
    acerca: { es: "Acerca", en: "About" },
    areas: { es: "Áreas", en: "Areas" },
    proyectos: { es: "Proyectos", en: "Projects" },
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
      es: "Soluciones digitales",
      en: "Digital solutions",
    } satisfies Dict,
    equipos: { es: "Equipos", en: "Teams" } satisfies Dict,
    equiposMeta: { es: "Imágenes", en: "Images" } satisfies Dict,
    equiposFrase: {
      es: "Los mejores equipos llegan de la nada, y los echas de menos cuando ya no están.",
      en: "The best teams come out of nowhere, and you miss them once they're gone.",
    } satisfies Dict,
    equiposAlt: {
      es: "Equipos con los que he construido",
      en: "Teams I've built with",
    } satisfies Dict,
    ampliar: { es: "Ampliar imagen", en: "Enlarge image" } satisfies Dict,
    cerrar: { es: "Cerrar", en: "Close" } satisfies Dict,
    imgPlaceholder: { es: "Imagen en camino", en: "Image on the way" } satisfies Dict,
    areasKicker: {
      es: "Seis áreas de interés",
      en: "Six areas of interest",
    } satisfies Dict,
    areasTitle: { es: "Áreas de interés", en: "Areas of interest" } satisfies Dict,
    leerMas: { es: "Ver área", en: "View area" } satisfies Dict,
    proyectosTitle: { es: "Proyectos", en: "Projects" } satisfies Dict,
    articulosTitle: { es: "Artículos", en: "Articles" } satisfies Dict,
    verTodos: { es: "Ver todos", en: "See all" } satisfies Dict,
    cierreLabel: { es: "Contacto", en: "Contact" } satisfies Dict,
    cierreTitulo: { es: "¿Construimos algo juntos?", en: "Let's build something together?" } satisfies Dict,
  },

  areas: {
    indexTitle: { es: "Áreas", en: "Areas" } satisfies Dict,
    back: { es: "← Todas las áreas", en: "← All areas" } satisfies Dict,
    enEstaArea: { es: "En esta área", en: "In this area" } satisfies Dict,
    sinProyectos: {
      es: "Todavía no hay proyectos publicados en esta área.",
      en: "No projects published in this area yet.",
    } satisfies Dict,
  },

  proyectos: {
    back: { es: "← Proyectos", en: "← Projects" } satisfies Dict,
    verPresentacion: {
      es: "Ver presentación original",
      en: "View original presentation",
    } satisfies Dict,
    ficha: { es: "Ficha del proyecto", en: "Project details" } satisfies Dict,
    cliente: { es: "Cliente", en: "Client" } satisfies Dict,
    anio: { es: "Año", en: "Year" } satisfies Dict,
    rol: { es: "Rol", en: "Role" } satisfies Dict,
    areasLabel: { es: "Áreas", en: "Areas" } satisfies Dict,
    entregables: { es: "Entregables", en: "Deliverables" } satisfies Dict,
    herramientas: { es: "Herramientas", en: "Tools" } satisfies Dict,
    masEn: { es: "Más en", en: "More in" } satisfies Dict,
    relacionados: {
      es: "Proyectos relacionados",
      en: "Related projects",
    } satisfies Dict,
    verProyecto: { es: "Ver proyecto", en: "View project" } satisfies Dict,
    menosProyectos: {
      es: "El trabajo real llega cuando está listo.",
      en: "Real work arrives when it's ready.",
    } satisfies Dict,
  },

  contacto: {
    saludo: {
      es: "Si algo de esto te resuena, escríbeme cuando quieras...\n¿Alguna duda? ¿Te gustaría saber más?\nLas mejores ideas las he tenido rebotando información con un amigo.",
      en: "If something here resonates with you, write to me whenever you like...\nGot a question? Want to know more?\nMy best ideas have come from bouncing things around with a friend.",
    } satisfies Dict,
    metaTitle: { es: "Contacto — Eduardo Villa", en: "Contact — Eduardo Villa" } satisfies Dict,
    metaDesc: {
      es: "Escríbeme: la puerta está abierta para dudas, ideas o simplemente para conversar. Formulario, correo, WhatsApp y redes.",
      en: "Write to me: my door is open for questions, ideas, or just to talk. Form, email, WhatsApp and socials.",
    } satisfies Dict,
    formTitle: { es: "Cuéntame", en: "Tell me" } satisfies Dict,
    nombreLabel: { es: "Nombre", en: "Name" } satisfies Dict,
    correoLabel: { es: "Correo", en: "Email" } satisfies Dict,
    asuntoLabel: { es: "Asunto", en: "Subject" } satisfies Dict,
    mensajeLabel: { es: "Mensaje", en: "Message" } satisfies Dict,
    enviar: { es: "Envíame un mensaje", en: "Send me a message" } satisfies Dict,
    enviado: {
      es: "Gracias, tu mensaje se envió. Te respondo lo antes posible.",
      en: "Thanks, your message was sent. I'll reply as soon as I can.",
    } satisfies Dict,
    formSubject: { es: "Nuevo mensaje desde eduardovilla.com", en: "New message from eduardovilla.com" } satisfies Dict,
    datosTitle: { es: "Mis datos", en: "My details" } satisfies Dict,
    telefonoLabel: { es: "Teléfono", en: "Phone" } satisfies Dict,
    emailLabel: { es: "Correo", en: "Email" } satisfies Dict,
    ciudadLabel: { es: "Ciudad", en: "City" } satisfies Dict,
    redesLabel: { es: "Redes", en: "Social" } satisfies Dict,
    ctaWhatsapp: { es: "Escribe por WhatsApp", en: "Write on WhatsApp" } satisfies Dict,
    ctaEmail: { es: "Envíame un correo", en: "Send me an email" } satisfies Dict,
    mapaAlt: { es: "Mapa de Córdoba, Veracruz", en: "Map of Córdoba, Veracruz" } satisfies Dict,
    mapaCaption: { es: "Córdoba, Veracruz — México", en: "Córdoba, Veracruz — Mexico" } satisfies Dict,
    mapaAtrib: { es: "© OpenStreetMap", en: "© OpenStreetMap" } satisfies Dict,
    mapaAbrir: { es: "Ver en Maps", en: "View on Maps" } satisfies Dict,
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

  blog: {
    indexTitle: { es: "Blog", en: "Blog" } satisfies Dict,
    vacio: { es: "Escritos en camino.", en: "Writings on the way." } satisfies Dict,
  },

  footer: {
    navegacion: { es: "Navegación", en: "Navigation" } satisfies Dict,
    contacto: { es: "Contacto", en: "Contact" } satisfies Dict,
    disponible: { es: "Disponible para proyectos", en: "Available for projects" } satisfies Dict,
    hecho: { es: "Hecho a mano con Astro", en: "Handmade with Astro" } satisfies Dict,
  },

  acerca: {
    indexTitle: { es: "Acerca de", en: "About" } satisfies Dict,
  },
} as const;
