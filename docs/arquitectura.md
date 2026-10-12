# Arquitectura del Proyecto

Descripción técnica de la estructura de páginas, rutas, colecciones de contenido, layout base y componentes del portafolio.

---

## Árbol de Directorios

```
c:\code\portfolio\
├── public/                      # Assets estáticos (logos, og-image, robots.txt)
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── ui/                  # Primitivas: Badge, Button, Icon
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── MobileMenu.astro
│   │   ├── MobileMenuOverlay.astro
│   │   ├── Navbar.astro
│   │   ├── ProyectoCard.astro
│   │   ├── SchemaPersonLD.astro  # Datos estructurados JSON-LD de persona
│   │   ├── SchemaProjectLD.astro # Datos estructurados JSON-LD de proyecto
│   │   └── ThemeToggle.astro
│   ├── constants/
│   │   ├── index.ts             # TOP_TECHNOLOGIES, TECHNOLOGIES_BY_CATEGORY
│   │   └── technologies.ts      # Definición completa de todas las tecnologías
│   ├── content/
│   │   ├── experiencia/         # Archivos .md de historial laboral
│   │   └── proyectos/           # Directorios por proyecto (index.md + imágenes)
│   ├── layouts/
│   │   └── Layout.astro         # Layout base global
│   ├── pages/
│   │   ├── index.astro          # / (Home)
│   │   ├── proyectos.astro      # /proyectos
│   │   ├── sobreMi.astro        # /sobreMi
│   │   ├── contacto.astro       # /contacto
│   │   ├── 404.astro            # Página de error
│   │   └── proyectos/
│   │       └── [slug].astro     # /proyectos/:slug (ruta dinámica)
│   ├── scripts/
│   │   ├── lightbox.ts          # Galería PhotoSwipe
│   │   └── mobileMenu.ts        # Menú móvil
│   ├── styles/
│   │   └── global.css           # Variables CSS + importación de Tailwind v4
│   └── content.config.ts        # Definición de colecciones y esquemas Zod
├── astro.config.mjs             # Configuración del compilador de Astro
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

---

## Layout Base (`src/layouts/Layout.astro`)

El layout global actúa como contenedor de toda la aplicación. Sus responsabilidades son:

- **Ruteo SPA:** Incluye `<ClientRouter />` que intercepta clics en enlaces internos para realizar transiciones suaves sin recarga completa del navegador.
- **Theme Lock:** Contiene un script `is:inline` síncrono en el `<head>` que lee `localStorage` o `prefers-color-scheme` del sistema operativo para aplicar el tema correcto antes de pintar la página, eliminando el flash de color blanco en carga.
- **SEO global:** Construye dinámicamente la URL canonical, las etiquetas Open Graph y el `og-image`. Inserta el componente `<SchemaPersonLD />` con los datos estructurados de la persona en todas las páginas.

---

## Páginas

### `/` — Home (`index.astro`)
Landing simplificada con:
- **Hero** con nombre, cargo y botones directos a `/sobreMi` y `/contacto`.
- **Grilla de tecnologías** responsiva alimentada desde `TOP_TECHNOLOGIES`: 10 en móvil, 15 en tablet, 20 en escritorio.
- **Proyectos destacados:** los primeros 3 proyectos de la colección como tarjetas `<ProyectoCard />`.

### `/proyectos` — Catálogo (`proyectos.astro`)
Índice completo de proyectos. Muestra todos los items de la colección `proyectos` ordenados por su ID numérico, con un sistema de filtros por categoría (`Escritorio` / `Web / Extensiones`) implementado en JavaScript del lado del cliente.

### `/sobreMi` — Sobre mí (`sobreMi.astro`)
Sección extendida que incluye:
- Presentación narrativa del enfoque profesional.
- **Línea de tiempo de experiencia** generada desde la colección `experiencia`. El cuerpo de cada entrada Markdown se renderiza dinámicamente con `render(entry)`.
- **Stack categorizado** en tres columnas (Frontend / Backend / Herramientas) desde `TECHNOLOGIES_BY_CATEGORY`.
- **Educación** con tarjetas de título universitario y secundario técnico.

### `/contacto` — Contacto (`contacto.astro`)
Tarjeta de contacto directo con email (con función de copiado al portapapeles y fallback para móvil), ubicación, y botones a GitHub, LinkedIn y mailto.

### `/proyectos/[slug]` — Detalle de proyecto (`proyectos/[slug].astro`)
Ruta dinámica generada en build. Para cada proyecto:
- Encabezado con título, descripción, badges de tecnologías y botones de repositorio/demo.
- Si `github === "privado"`, muestra un badge de candado en lugar del enlace.
- **Galería con PhotoSwipe:** imagen de portada + screenshots adicionales con soporte de zoom táctil y teclado.
- **Schema.org** `CreativeWork` insertado vía `<SchemaProjectLD />`.

### `/404` — Error 404 (`404.astro`)
Pantalla de error que mantiene el layout completo (header/footer) para consistencia visual.

---

## Colecciones de Contenido (`src/content.config.ts`)

El proyecto usa la API moderna de Astro Content Collections con loaders `glob`.

### Colección `proyectos`

```typescript
proyectos: defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tecnologias: z.object({
      frontend: z.array(z.string()).default([]),
      backend: z.array(z.string()).default([]),
      herramientas: z.array(z.string()).default([]),
    }),
    github: z.string().url().or(z.string().length(0)).or(z.literal("privado")),
    demo: z.string().url().or(z.string().length(0)).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    imagenes: z.array(image()).optional(),
    imagenesAlt: z.array(z.string()).optional(),
    tipo: z.string().optional(),
    categoria: z.enum(['Escritorio', 'Web / Extensiones']).default('Escritorio'),
  }),
})
```

Cada proyecto vive en `src/content/proyectos/<N>-nombre-slug/index.md`. Las imágenes referenciadas en el frontmatter son resueltas automáticamente por Astro en build mediante el helper `image()`.

### Colección `experiencia`

```typescript
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
})
```

Archivos directamente en `src/content/experiencia/`. El cuerpo Markdown de cada archivo se renderiza como descripción de tareas en la línea de tiempo de `/sobreMi`.

---

## Scripts del Cliente

### `mobileMenu.ts`
Controla el menú de navegación fullscreen en móvil. Usa delegación de eventos sobre `document` con una bandera `listenersAdded` para evitar registros duplicados durante las transiciones SPA. Maneja accesibilidad (`aria-expanded`, `aria-hidden`, tecla `Escape`) y bloquea el scroll del body mientras el menú está abierto.

### `lightbox.ts`
Inicializa PhotoSwipe en la galería de imágenes de cada proyecto. La librería se importa dinámicamente (`() => import('photoswipe')`) para no penalizar el bundle inicial. El script se re-inicializa en el evento `astro:page-load` para funcionar correctamente con el `<ClientRouter />`.

---

## Componentes UI

| Componente | Descripción |
|---|---|
| `ui/Badge.astro` | Etiqueta de tecnología con variantes de tamaño y color |
| `ui/Button.astro` | Botón con variantes (`primary`, `outline`, `ghost`) |
| `ui/Icon.astro` | SVG inline por nombre. Recibe `name`, `size` y `class`. Sin fuentes externas |
| `ProyectoCard.astro` | Tarjeta de proyecto para grillas de catálogo y home |
| `SchemaPersonLD.astro` | JSON-LD `Person` con datos del autor |
| `SchemaProjectLD.astro` | JSON-LD `CreativeWork` para fichas de proyecto |
| `ThemeToggle.astro` | Toggle de modo claro/oscuro que persiste en `localStorage` |
| `Navbar.astro` | Barra de navegación con links activos y toggle de tema |
| `MobileMenu.astro` | Botón hamburguesa (se mueve al overlay en móvil) |
| `MobileMenuOverlay.astro` | Panel fullscreen de navegación móvil |
