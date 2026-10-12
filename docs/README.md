# Portfolio Personal — Adriel Montes

Portafolio profesional de **Adriel Agustín Montes**, Analista Programador Universitario (egresado de la Universidad Nacional de la Patagonia San Juan Bosco). Desarrollado como sitio estático de alto rendimiento para mostrar proyectos, experiencia laboral y canales de contacto.

---

## Propósito

El sitio cumple dos funciones concretas:

1. **Audiencia técnica / reclutadores IT:** Demostrar capacidad técnica real a través de proyectos documentados con descripción del problema, la solución implementada, las tecnologías utilizadas y el resultado obtenido.
2. **Pymes y clientes freelance:** Dar visibilidad a la experiencia en digitalización de procesos reales para negocios y organismos de la región patagónica.

La propuesta de valor diferencial es el enfoque **de punta a punta**: desde el análisis de requerimientos hasta el despliegue en producción, abarcando tanto aplicaciones web como de escritorio nativas.

---

## Stack Principal

| Capa | Tecnología | Versión |
|---|---|---|
| Framework web | [Astro](https://astro.build/) | 6.x (SSG) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) | v4 |
| Gestor de paquetes | pnpm | 11.x |
| Lenguaje de tipado | TypeScript | 6.x |
| Validación de contenido | Zod (via `astro:schema`) | integrado |
| Galería interactiva | [PhotoSwipe](https://photoswipe.com/) | 5.x |
| Optimización de imágenes | [Sharp](https://sharp.pixelplumbing.com/) | integrado en build |
| Sitemap | `@astrojs/sitemap` | integrado |
| Despliegue | [Vercel](https://vercel.com/) | — |

---

## Características Clave

- **Generación estática (SSG):** Cero JavaScript innecesario en el cliente. Todo el HTML se genera en tiempo de compilación.
- **Navegación SPA fluida:** El componente `<ClientRouter />` de Astro intercepta los clics y transiciona el contenido sin recargar la página.
- **Contenido tipado:** Las colecciones de Astro (proyectos y experiencia) usan esquemas Zod que detienen la compilación ante datos inválidos.
- **Galería interactiva:** PhotoSwipe provee soporte táctil, gestos y zoom en la galería de capturas de cada proyecto.
- **Dark mode nativo:** Implementado con CSS variables en espacio de color OKLCH, sin flash de color en carga inicial.
- **SEO estructurado:** Metadatos Open Graph, canonical URL y datos estructurados Schema.org (`Person`, `CreativeWork`).

---

## Contenido Gestionado

El contenido dinámico del sitio vive en `src/content/` y se administra a través de Astro Content Collections:

### Proyectos (`src/content/proyectos/`)
Cada proyecto es un directorio con un `index.md` (frontmatter tipado + descripción en Markdown) y sus imágenes (`cover.webp`, `screenshot-N.webp`). Actualmente incluye:

1. Sistema de Trazabilidad de Expedientes (C# / WinForms / PostgreSQL)
2. Sistema de Reportes para Cooperativas (Python / web scraping)
3. Sistema POS (aplicación de escritorio)
4. Sistema POS con Tauri (escritorio nativo con Rust/Tauri)
5. Techno Fuegos (web)
6. Netflix Modal Navigator (extensión web)

### Experiencia Laboral (`src/content/experiencia/`)
Archivos Markdown con datos de cada puesto (empresa, rol, fechas, ubicación). El cuerpo del Markdown se renderiza como descripción de tareas en la sección "Sobre mí".

---

## Canales de Conversión

- **Email:** `adriel.agustin.montes@gmail.com`
- **LinkedIn:** [Adriel Agustín Montes](https://www.linkedin.com/in/adriel-agustin-montes/)
- **GitHub:** [@Adriel-M-A](https://github.com/Adriel-M-A)
- **Sitio en producción:** https://montesadriel.vercel.app

---

## Documentación Interna

| Archivo | Descripción |
|---|---|
| [`arquitectura.md`](./arquitectura.md) | Estructura de páginas, rutas, colecciones y componentes |
| [`stack.md`](./stack.md) | Stack técnico detallado, configuración y dependencias |
| [`/AGENTS.md`](../AGENTS.md) | Contexto, reglas y convenciones para agentes de IA |
