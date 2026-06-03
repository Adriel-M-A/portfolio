import type { CollectionEntry } from 'astro:content';

/**
 * Obtiene y ordena todas las tecnologías únicas utilizadas en una lista de proyectos,
 * ordenadas de mayor a menor frecuencia de aparición.
 *
 * @param projects - Lista de entradas de proyectos obtenidas de la colección de contenidos.
 * @returns Un arreglo de cadenas de texto con los nombres de las tecnologías ordenados por frecuencia.
 */
export function getSortedTechnologies(projects: CollectionEntry<'proyectos'>[]): string[] {
  const todasTecnologias = projects.flatMap((p) => {
    const t = p.data.tecnologias;
    return t ? [...t.frontend, ...t.backend, ...t.herramientas] : [];
  });

  const techFrequencies = todasTecnologias.reduce<Record<string, number>>(
    (acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
      return acc;
    },
    {}
  );

  return Object.entries(techFrequencies)
    .sort((a, b) => b[1] - a[1])
    .map(([tech]) => tech);
}

/**
 * Representa las tecnologías ordenadas y agrupadas por su categoría técnica.
 */
export interface SortedTechsByCategory {
  /** Tecnologías del lado del cliente o de interfaz de usuario. */
  frontend: string[];
  /** Tecnologías del lado del servidor o almacenamiento de datos. */
  backend: string[];
  /** Lenguajes, empaquetadores o plataformas de ejecución del entorno de desarrollo. */
  herramientas: string[];
}

/**
 * Agrupa todas las tecnologías de una lista de proyectos por su categoría técnica (frontend,
 * backend y herramientas) y las ordena independientemente por su frecuencia de uso.
 *
 * @param projects - Lista de entradas de proyectos obtenidas de la colección de contenidos.
 * @returns Un objeto estructurado con arreglos de tecnologías ordenados por frecuencia en cada categoría.
 */
export function getSortedTechnologiesByCategory(projects: CollectionEntry<'proyectos'>[]): SortedTechsByCategory {
  const frontendFreqs: Record<string, number> = {};
  const backendFreqs: Record<string, number> = {};
  const herramientasFreqs: Record<string, number> = {};

  projects.forEach((p) => {
    const techs = p.data.tecnologias;
    if (techs) {
      (techs.frontend || []).forEach((t) => {
        frontendFreqs[t] = (frontendFreqs[t] || 0) + 1;
      });
      (techs.backend || []).forEach((t) => {
        backendFreqs[t] = (backendFreqs[t] || 0) + 1;
      });
      (techs.herramientas || []).forEach((t) => {
        herramientasFreqs[t] = (herramientasFreqs[t] || 0) + 1;
      });
    }
  });

  const sortByFrequency = (freqs: Record<string, number>): string[] => {
    return Object.entries(freqs)
      .sort((a, b) => b[1] - a[1])
      .map(([tech]) => tech);
  };

  return {
    frontend: sortByFrequency(frontendFreqs),
    backend: sortByFrequency(backendFreqs),
    herramientas: sortByFrequency(herramientasFreqs),
  };
}
