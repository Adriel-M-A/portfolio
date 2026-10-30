# Portfolio Personal — Adriel Montes

Portafolio profesional de **Adriel Agustín Montes**, Analista Programador Universitario (egresado de la Universidad Nacional de la Patagonia San Juan Bosco). Desarrollado como sitio estático de alto rendimiento con estética monocromática de entorno de desarrollo/terminal para mostrar sistemas en producción, experiencia laboral y canales de contacto.

---

## Propósito

El sitio cumple dos funciones concretas:

1. **Audiencia técnica / reclutadores IT:** Demostrar capacidad de ingeniería real a través de proyectos documentados con descripción del problema, la solución implementada, los desafíos técnicos centrales (ej. Patrón Safe Money en Rust, resiliencia anti-apagones, inventario híbrido), la arquitectura en capas y el resultado obtenido.
2. **Pymes y clientes freelance:** Dar visibilidad a la experiencia en digitalización de procesos operativos reales para comercios, talleres y organismos públicos.

La propuesta de valor diferencial es el enfoque **de punta a punta**: desde el relevamiento funcional de requerimientos y el modelado relacional hasta el despliegue en los equipos de trabajo y la capacitación presencial, abarcando tanto aplicaciones de escritorio nativas como desarrollos web.

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
- **Identidad visual monocromática de programador/terminal:** Grilla arquitectónica de fondo, tarjetas con cabeceras de módulo/ventana, prefijos numerados en `JetBrains Mono` y capturas de pantalla enmarcadas con epígrafes técnicos visibles.
- **Navegación SPA fluida:** El componente `<ClientRouter />` de Astro intercepta los clics y transiciona el contenido sin recargar la página.
- **Contenido tipado:** Las colecciones de Astro (proyectos y experiencia) usan esquemas Zod que detienen la compilación ante datos inválidos.
- **Galería interactiva:** PhotoSwipe provee soporte táctil, gestos y zoom en la galería de capturas de cada proyecto.
- **Dark mode nativo:** Implementado con CSS variables en espacio de color OKLCH, sin flash de color en carga inicial.
- **SEO estructurado:** Metadatos Open Graph, canonical URL y datos estructurados Schema.org (`Person`, `CreativeWork`).

---

## Contenido Gestionado

El contenido dinámico del sitio vive en `src/content/` y se administra a través de Astro Content Collections:

### Proyectos (`src/content/proyectos/`)
Cada proyecto es un directorio con un `index.md` (frontmatter tipado + especificación técnica en Markdown) y sus imágenes (`cover.webp` / `cover.png`, `screenshot-N.webp` / `screenshot-N.png`). Actualmente incluye:

1. **Sistema de Trazabilidad de Expedientes** (`EPRESP` — C# / WinForms / PostgreSQL / Arquitectura en capas)
2. **Sistema de Reportes de Cooperativas** (`EPRESP` — Python / Flet / Procesamiento batch CSV & Excel)
3. **Sistema POS: Control de Ventas** (`Elixir Helados` — React / TypeScript / Electron / SQLite)
4. **Sistema de Ventas para Comercios Locales** (POS 2da Gen — Rust / Tauri / React / SQLite)
5. **Techno Fuegos System** (Cotizador metalúrgico — Rust / Tauri / React / SQLite / jsPDF)
6. **Netflix Modal Navigator** (Extensión Chrome Manifest V3 / JavaScript Vanilla / History API)

### Experiencia Laboral (`src/content/experiencia/`)
Archivos Markdown ordenados cronológicamente con los datos de cada puesto:
1. `0-freelance.md`: Desarrollador de Software Freelance (2025 – Presente).
2. `1-enre.md`: EPRESP — Analista Funcional, Soporte IT y Desarrollador de Software (2023 – 2025).
3. `2-catastro.md`: Dirección General de Catastro de la Provincia del Chubut — Analista Técnico de Sistemas y Desarrollo Web (2022 – 2023).

---

## Canales de Conversión

- **Email:** `adriel.agustin.montes@gmail.com`
- **LinkedIn:** [Adriel Agustín Montes](https://www.linkedin.com/in/adriel-agustin-montes-66460b202/)
- **GitHub:** [@Adriel-M-A](https://github.com/Adriel-M-A)
- **Sitio en producción:** https://montesadriel.vercel.app

*(Por privacidad, el sitio no expone número de teléfono ni enlaces a WhatsApp).*

---

## Documentación Interna

| Archivo | Descripción |
|---|---|
| [`arquitectura.md`](./arquitectura.md) | Estructura de páginas, rutas, colecciones y componentes |
| [`stack.md`](./stack.md) | Stack técnico detallado, configuración y dependencias |
| [`/PRODUCT.md`](../PRODUCT.md) | Contexto de producto, usuarios, posicionamiento y principios |
| [`/DESIGN.md`](../DESIGN.md) | Sistema de diseño monocromático, tokens OKLCH y reglas visuales |
| [`/AGENTS.md`](../AGENTS.md) | Contexto, reglas y convenciones para agentes de IA |
