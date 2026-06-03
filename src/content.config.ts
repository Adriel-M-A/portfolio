import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Configuración global de las colecciones de contenido del Portafolio.
 * Utiliza loaders de tipo glob para leer dinámicamente archivos Markdown (`.md`)
 * y esquemas Zod para validar la estructura del frontmatter de cada archivo.
 */
export const collections = {
  /**
   * Colección de Proyectos Desarrollados.
   * Contiene detalles sobre cada trabajo realizado, incluyendo metadatos, tecnologías y capturas.
   */
  proyectos: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
    schema: () => z.object({
      /** Título descriptivo del proyecto */
      title: z.string(),
      /** Resumen corto de los objetivos y alcances */
      description: z.string(),
      /** Listado clasificado de stacks y tecnologías utilizadas */
      tecnologias: z.object({
        /** Frameworks, librerías de componentes o utilidades de cliente */
        frontend: z.array(z.string()).default([]),
        /** Lenguajes, bases de datos o servicios de servidor/API */
        backend: z.array(z.string()).default([]),
        /** Plataformas de empaquetado, herramientas de build o DevOps */
        herramientas: z.array(z.string()).default([]),
      }),
      /** Enlace de repositorio de código (URL, vacío o palabra clave 'privado') */
      github: z.string().url().or(z.string().length(0)).or(z.literal("privado")),
      /** Enlace opcional a la demo interactiva web */
      demo: z.string().url().or(z.string().length(0)).optional(),
      /** Ruta relativa a la imagen de portada (ej: "./cover.webp") */
      cover: z.string().optional(),
      /** Arreglo opcional con rutas a capturas secundarias de pantalla para la galería */
      imagenes: z.array(z.string()).optional(),
    }),
  }),

  /**
   * Colección de Experiencia Laboral.
   * Modela el historial profesional detallando roles, empresas y períodos de tiempo.
   */
  experiencia: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experiencia" }),
    schema: z.object({
      /** Nombre abreviado o marca de la organización */
      empresa: z.string(),
      /** Nombre legal o completo de la razón social */
      nombreCompleto: z.string(),
      /** Puesto o rol técnico desempeñado */
      rol: z.string(),
      /** Modalidad del puesto (ej: "Freelance", "Jornada completa") */
      tipo: z.string(),
      /** Fecha o año de inicio del puesto */
      desde: z.string(),
      /** Fecha o año de finalización del puesto (o "Presente") */
      hasta: z.string(),
      /** Ciudad o modalidad geográfica (ej: "Trelew (Remoto)") */
      ubicacion: z.string(),
    }),
  }),
};
