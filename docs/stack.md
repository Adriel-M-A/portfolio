# Stack Tecnológico

Detalle de todas las herramientas, librerías y configuraciones utilizadas para construir, compilar y desplegar el portafolio.

---

## Framework: Astro 6 (SSG)

El portafolio está construido sobre **Astro 6.x** en modo Static Site Generation (SSG). Astro elimina todo JavaScript innecesario durante la compilación y entrega únicamente HTML semántico y CSS optimizado al cliente.

**Características de Astro utilizadas:**
- `<ClientRouter />` — navegación SPA suave entre páginas sin recarga completa.
- `Content Collections` con loaders `glob` — gestión de contenido tipado desde Markdown.
- Componente `<Image />` — optimización automática de imágenes con Sharp.
- `getCollection()` / `render()` — consumo de datos y renderizado de Markdown en páginas dinámicas.
- Integración con Vite para plugins de terceros (Tailwind v4).

---

## Estilos: Tailwind CSS v4

La versión 4 de Tailwind elimina el archivo `tailwind.config.js`. La configuración del tema se realiza directamente en `src/styles/global.css` con CSS nativo:

```css
@import "tailwindcss";

@theme {
  /* Variables de color en espacio OKLCH (modo claro y oscuro) */
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(18% 0 0);
  --color-surface: oklch(96% 0 0);
  --color-border: oklch(88% 0 0);
  --color-muted-foreground: oklch(45% 0 0);
  --color-primary: oklch(18% 0 0);
  --color-primary-foreground: oklch(98% 0 0);
}
```

Tailwind v4 se integra como plugin de Vite (no como PostCSS), configurado en `astro.config.mjs`:

```javascript
import tailwindcss from "@tailwindcss/vite";

vite: {
  plugins: [tailwindcss()],
}
```

---

## Configuración del Compilador (`astro.config.mjs`)

```javascript
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://montesadriel.vercel.app",  // URL canonical para SEO y sitemap
  integrations: [sitemap()],                 // Genera sitemap-index.xml en build
  vite: {
    plugins: [tailwindcss()],                // Tailwind v4 como plugin Vite
  },
  server: {
    host: true,
    port: 3000,                              // Accesible en red local
  },
});
```

---

## Gestor de Paquetes: pnpm

```bash
pnpm dev        # Servidor de desarrollo en http://localhost:3000/
pnpm build      # Compilación estática en ./dist/
pnpm preview    # Servidor local sobre ./dist/
pnpm check      # Diagnóstico TypeScript en archivos .astro
pnpm sync       # Regenera tipos de colecciones en .astro/types.d.ts
```

Configurado en `pnpm-workspace.yaml` con permisos de build explícitos para `esbuild` y `sharp`.

---

## Dependencias de Producción

| Paquete | Propósito |
|---|---|
| `astro` | Framework principal (SSG, routing, content collections) |
| `@tailwindcss/vite` | Plugin de Tailwind v4 para Vite |
| `tailwindcss` | Framework de estilos utilitario v4 |
| `photoswipe` | Galería lightbox con soporte táctil y teclado |
| `sharp` | Procesamiento y optimización de imágenes en build |

## Dependencias de Desarrollo

| Paquete | Propósito |
|---|---|
| `@astrojs/check` | Chequeo de tipos TypeScript en componentes `.astro` |
| `@astrojs/sitemap` | Generación automática de sitemap XML |
| `typescript` | Lenguaje de tipado (v6.x) |

---

## Sistema de Iconos (`src/components/ui/Icon.astro`)

Los iconos son SVGs embebidos directamente en el HTML, sin fuentes tipográficas externas ni CSS de terceros.

**Funcionamiento:**
- El componente recibe una prop `name` (ej: `"github"`, `"linkedin"`, `"mail"`, `"home"`).
- Renderiza el SVG correspondiente con `currentColor`, heredando el color del contexto CSS.
- Acepta `size` (número en píxeles) y `class` para personalización.

**Ventajas:**
- Cero JavaScript en cliente para iconos.
- Soporte nativo de clases Tailwind (ej: `text-muted-foreground hover:text-foreground`).
- Sin dependencia de fuentes o CDNs externos.

---

## Optimización de Imágenes

El build aplica un pipeline completo de optimización:

1. **Sharp** procesa las imágenes durante la compilación.
2. **Componente `<Image />`** de Astro genera versiones con la resolución exacta necesaria para cada uso (portada, thumbnail, galería), evitando imágenes sobredimensionadas.
3. **Conversión a WebP** automática desde `.png` o `.jpg`, reduciendo el peso más del 70% sin pérdida perceptible.
4. **Resolución nativa via colecciones:** Las imágenes referenciadas en el frontmatter con el helper `image()` son importadas y optimizadas automáticamente por Vite, sin necesidad de `import.meta.glob` manual.

---

## Despliegue

El sitio se despliega en **Vercel** de forma automática desde la rama `main`. El output es 100% estático (`./dist/`), sin funciones serverless.

La versión de Node requerida es `22.x` (declarada en `package.json` bajo `engines`).

---

## TypeScript

Configurado con `tsconfig.json` heredando de los presets de Astro. El chequeo estático abarca todos los archivos `.astro`, `.ts` y `.tsx` del proyecto. Los tipos de las colecciones de contenido se generan automáticamente en `.astro/types.d.ts` con `pnpm sync` o al iniciar el servidor de desarrollo.
