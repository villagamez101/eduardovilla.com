/**
 * Slug de un proyecto a partir del id de la entrada.
 *
 * Los proyectos se organizan por carpeta de idioma
 * (`src/content/proyectos/es/<slug>.md` y `.../en/<slug>.md`). El glob loader
 * deriva el id de la ruta (p. ej. `es/juridico-mila`), así que el slug es el
 * último segmento: el mismo en ES y EN, que es lo que necesita el selector de
 * idioma para apuntar a la ruta equivalente.
 */
export function proyectoSlug(id: string): string {
  return id.split("/").pop()!.replace(/\.md$/, "");
}
