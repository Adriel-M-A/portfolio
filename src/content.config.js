import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  proyectos: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      tecnologias: z.object({
        frontend: z.array(z.string()).default([]),
        backend: z.array(z.string()).default([]),
        herramientas: z.array(z.string()).default([]),
      }).transform((val) => [
        ...val.frontend,
        ...val.backend,
        ...val.herramientas
      ]),
      github: z.string().url().or(z.string().length(0)).or(z.literal("privado")),
      demo: z.string().url().or(z.string().length(0)).optional(),
      cover: z.string().optional(),
      imagenes: z.array(z.string()).optional(),
    }),
  }),
  experiencia: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experiencia" }),
    schema: z.object({
      empresa: z.string(),
      nombreCompleto: z.string(),
      rol: z.string(),
      tipo: z.string(),
      desde: z.string(),
      hasta: z.string(),
      ubicacion: z.string(),
    }),
  }),
};
