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
│   │   ├── index.ts             # PERSONAL_INFO
│   │   └── technologies.ts      # TOP_TECHNOLOGIES, TECHNOLOGIES_BY_CATEGORY
│   ├── content/
│   │   ├── experiencia/         # Archivos .md de historial laboral (0-freelance, 1-enre, 2-catastro)
│   │   └── proyectos/           # Directorios por proyecto (index.md + imágenes)
│   ├── layouts/
│   │   └── Layout.astro         # Layout base global con grilla arquitectónica
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
│   │   └── global.css           # Variables CSS OKLCH + importación de Tailwind v4
│   └── content.config.ts        # Definición de colecciones y esquemas Zod
├── PRODUCT.md                   # Definición de producto, audiencia y principios
├── DESIGN.md                    # Sistema de diseño y tokens visuales
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
- **Grilla Arquitectónica:** Renderiza un fondo fijo monocromático (`4rem × 4rem`) con máscara radial que da cohesión visual de entorno técnico a todas las rutas.
- **SEO global:** Construye dinámicamente la URL canonical, las etiquetas Open Graph y el `og-image`.

---

## Páginas

### `/` — Home (`index.astro`)
Landing estructurada con impronta técnica:
- **Hero** en dos columnas: presentación editorial y botones de acción a la izquierda, y ventana de inspección técnica (`perfil.spec.ts`) en fuente monoespaciada a la derecha.
- **01 // Tecnologías:** Grilla responsiva alimentada desde `TOP_TECHNOLOGIES` (10 en móvil, 15 en tablet, 20 en escritorio).
- **02 // Proyectos destacados:** Los primeros 3 proyectos de la colección como módulos `<ProyectoCard />`.

### `/proyectos` — Catálogo (`proyectos.astro`)
Índice completo de sistemas. Muestra todos los proyectos ordenados por su ID numérico, con pestañas de filtro por categoría (`Todos`, `Escritorio`, `Web / Extensiones`) con contadores e indicadores de estado accesibles.

### `/sobreMi` — Sobre mí (`sobreMi.astro`)
Sección extendida dividida en 5 bloques numerados:
- **01 // Perfil profesional:** Narrativa directa del enfoque de trabajo de punta a punta.
- **02 // Experiencia laboral:** Línea de tiempo de módulos técnicos generada desde la colección `experiencia` (Freelance, EPRESP y Catastro).
- **03 // Stack tecnológico:** Tres módulos con cabecera de ventana (`Frontend e Interfaces`, `Backend y Bases de Datos`, `Entornos y Herramientas`) desde `TECHNOLOGIES_BY_CATEGORY`.
- **04 // Educación y Certificaciones:** Título universitario (UNPSJB), certificación intensiva de SQL (midudev, con enlace directo al certificado PDF) y tecnicatura electromecánica.
- **05 // Análisis y Arquitectura:** Módulos de especialización en arquitectura en capas, modelado relacional y relevamiento funcional.

### `/contacto` — Contacto (`contacto.astro`)
Módulo unificado con cabecera de ventana que expone únicamente los canales autorizados: Email (con botón de escritura directa y copiado al portapapeles con fallback móvil), LinkedIn y GitHub.

### `/proyectos/[slug]` — Detalle de proyecto (`proyectos/[slug].astro`)
Ruta dinámica generada en build. Para cada proyecto:
- Barra superior de navegación con ruta estilo consola (`cd ../proyectos`) e identificador de módulo.
- Encabezado con título, resumen, badges de tecnologías y enlaces a repositorio/demo.
- **Portada enmarcada:** Imagen principal dentro de un marco de ventana con su epígrafe visible y soporte de zoom.
- **Especificación en Markdown (`.prose-content`):** Secciones con prefijo `##` en fuente monoespaciada y listas con indicador `>`.
- **01 // Galería de capturas:** Cada imagen se presenta dentro de un marco de ventana de aplicación (`captura_XX.img`) con sus dimensiones reales, zoom interactivo con PhotoSwipe y su epígrafe descriptivo (`imagenesAlt`) visible al pie de cada captura.
- **Schema.org** `CreativeWork` insertado vía `<SchemaProjectLD />`.

### `/404` — Error 404 (`404.astro`)
Pantalla de error que mantiene el layout completo (header/footer) para consistencia visual.

---

## Colecciones de Contenido (`src/content.config.ts`)

El proyecto usa la API de Astro Content Collections con loaders `glob`.

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
| `ui/Badge.astro` | Etiqueta rectangular de tecnología en `JetBrains Mono` |
| `ui/Button.astro` | Botón rectangular con variantes (`primary`, `secondary`, `outline`, `ghost`) y foco accesible |
| `ui/Icon.astro` | SVG inline por nombre. Recibe `name`, `size` y `class`. Sin fuentes externas |
| `ProyectoCard.astro` | Módulo de proyecto con cabecera de ventana (`01 // slug`) para grillas de catálogo y home |
| `SchemaPersonLD.astro` | JSON-LD `Person` con datos del autor |
| `SchemaProjectLD.astro` | JSON-LD `CreativeWork` para fichas de proyecto |
| `ThemeToggle.astro` | Toggle de modo claro/oscuro que persiste en `localStorage` |
| `Navbar.astro` | Barra de navegación con links activos y toggle de tema |
| `MobileMenu.astro` | Botón hamburguesa (se mueve al overlay en móvil) |
| `MobileMenuOverlay.astro` | Panel fullscreen de navegación móvil |
