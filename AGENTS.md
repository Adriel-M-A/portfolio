# AGENTS.md — Contexto para Agentes de IA

Este archivo provee a los agentes de IA el contexto del proyecto, las reglas de trabajo y las convenciones de código que deben seguir.

---

## Qué es este proyecto

**Portfolio personal de Adriel Montes** — sitio web estático generado con Astro 6 (SSG) que muestra proyectos, experiencia laboral y canales de contacto profesional. Está desplegado en Vercel.

El objetivo del sitio es demostrar capacidad técnica real ante reclutadores y conseguir clientes freelance en la región patagónica. El contenido debe sentirse humano, directo y sin artificios.

---

## Rama de trabajo

- `main` — producción (desplegada en Vercel automáticamente)
- `development` — rama de desarrollo activa. **Todo trabajo nuevo va acá primero.**

> Antes de cualquier cambio, verificar que estás en la rama `development`.

---

## Stack del proyecto

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Astro | 6.x (SSG) |
| Estilos | Tailwind CSS | v4 |
| Paquetes | pnpm | 11.x |
| Tipado | TypeScript | 6.x |
| Validación | Zod (via `astro:schema`) | integrado |
| Galería | PhotoSwipe | 5.x |
| Imágenes | Sharp | integrado |
| Despliegue | Vercel | estático |

Ver detalles completos en [`docs/stack.md`](./docs/stack.md).

---

## Documentación de referencia

| Archivo | Qué contiene |
|---|---|
| [`docs/README.md`](./docs/README.md) | Propósito, características, proyectos listados y canales de conversión |
| [`docs/arquitectura.md`](./docs/arquitectura.md) | Árbol de directorios, páginas, colecciones Zod, scripts y componentes |
| [`docs/stack.md`](./docs/stack.md) | Stack técnico, dependencias, configuración, comandos y despliegue |

> **Leer la documentación antes de hacer cambios estructurales.** La arquitectura es intencional.

---

## Reglas de comportamiento

### Qué podés hacer sin preguntar
- Editar contenido en `src/content/` (proyectos y experiencia).
- Modificar estilos de componentes existentes dentro del sistema de diseño ya establecido.
- Correcciones de bugs, typos o inconsistencias visuales menores.
- Agregar o editar entradas en `src/constants/` (tecnologías, etc.).
- Actualizar metadatos SEO de páginas existentes.

### Qué requiere confirmación explícita
- Agregar nuevas dependencias (`npm install`, `pnpm add`).
- Crear nuevas páginas o rutas.
- Modificar el `Layout.astro` base.
- Cambiar la configuración de Astro (`astro.config.mjs`) o TypeScript (`tsconfig.json`).
- Refactorizar la estructura de colecciones en `content.config.ts`.
- Cambiar el sistema de iconos o de estilos global (`global.css`).
- Tocar `pnpm-workspace.yaml` o `package.json`.

### Lo que nunca debés hacer
- Hacer commits o push directamente a `main`.
- Agregar dependencias no solicitadas explícitamente.
- Cambiar la estrategia de despliegue (SSG → SSR u otro).
- Reemplazar el sistema de iconos SVG inline por fuentes o librerías externas.
- Reemplazar Tailwind v4 por otra solución de estilos.

---

## Convenciones de código

### Componentes Astro
- Nombre de archivo en `PascalCase` (ej: `ProyectoCard.astro`).
- Las props van tipadas en el bloque `---` del frontmatter del componente.
- Las clases Tailwind van en línea directamente en el HTML. No usar `@apply` salvo que sea inevitable.

### TypeScript
- Archivos `.ts` en `src/constants/` y `src/scripts/`.
- Tipado estricto. No usar `any`.
- Los scripts del cliente (`mobileMenu.ts`, `lightbox.ts`) se inicializan en `astro:page-load` para compatibilidad con `<ClientRouter />`.

### Contenido Markdown (proyectos y experiencia)
- El frontmatter debe respetar el esquema definido en `src/content.config.ts`.
- El texto del cuerpo del Markdown debe ser primera persona, directo, sin bullets de marketing genérico.
- Las imágenes de proyectos van en el mismo directorio que el `index.md`.
- Formato de nombres: `cover.webp`, `screenshot-1.webp`, `screenshot-2.webp`, etc.

### Commits
- Convención: `tipo: descripción en minúsculas y en español`
- Tipos válidos: `feat`, `fix`, `style`, `refactor`, `chore`, `docs`
- Ejemplos:
  - `feat: agregar nuevo proyecto al catálogo`
  - `fix: corregir alineación de tarjetas en móvil`
  - `chore: actualizar dependencias`
  - `docs: actualizar arquitectura en docs/`

---

## Entorno de desarrollo

```bash
pnpm dev        # Servidor local en http://localhost:3000/
pnpm build      # Compilación estática → ./dist/
pnpm check      # Diagnóstico TypeScript (sin errores es el objetivo)
pnpm preview    # Servidor sobre ./dist/
```

El build debe completar sin errores (`0 errors`). Las advertencias de Zod deprecated son conocidas y no son bloqueantes.

---

## Qué NO cambiar sin entender bien primero

- **El sistema de imágenes:** Las imágenes usan el helper `image()` de Astro Content Collections. Si se mueven de lugar o se cambia el esquema Zod, el build falla. Leer `docs/arquitectura.md` antes.
- **`<ClientRouter />`:** Todos los scripts del cliente deben registrarse en `astro:page-load`, no solo en `DOMContentLoaded`. Si se registran mal, dejan de funcionar al navegar entre páginas.
- **El componente `<Icon />`:** Los iconos son SVGs embebidos. No reemplazar por clases de font-awesome u otros.
- **Tailwind v4:** No tiene archivo de configuración JavaScript. El tema se define en `global.css` con `@theme {}`. No crear `tailwind.config.js`.
