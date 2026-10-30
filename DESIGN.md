---
name: Adriel Montes Portfolio
description: Portafolio técnico monocromático de desarrollo de software con estética equilibrada de terminal e ingeniería editorial.
colors:
  primary: "oklch(18% 0 0)"
  primary-foreground: "oklch(98% 0 0)"
  background: "oklch(99% 0 0)"
  foreground: "oklch(15% 0 0)"
  surface: "oklch(96% 0 0)"
  border: "oklch(83% 0 0)"
  muted-foreground: "oklch(38% 0 0)"
  dark-background: "oklch(14% 0 0)"
  dark-foreground: "oklch(98% 0 0)"
  dark-surface: "oklch(19% 0 0)"
  dark-card: "oklch(16.5% 0 0)"
  dark-border: "oklch(31% 0 0)"
  dark-muted-foreground: "oklch(75% 0 0)"
typography:
  display:
    fontFamily: "IBM Plex Sans, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "IBM Plex Sans, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "IBM Plex Sans, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "IBM Plex Sans, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "IBM Plex Sans, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0px"
  sm: "0.25rem"
  md: "0.375rem"
spacing:
  xs: "0.375rem"
  sm: "0.625rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
  card-module:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "20px"
---

# Design System: Adriel Montes Portfolio

## Overview

**Creative North Star: "The Engineer's Monochromatic Spec & Terminal"**

El sistema visual combina la precisión de un entorno de desarrollo (IDE / terminal de línea de comandos) con la claridad de lectura de un documento técnico editorial. Evita el ruido cromático y los artificios decorativos para que la arquitectura de cada software, las capturas reales de las interfaces y los resultados operativos sean los protagonistas.

La interfaz utiliza una estructura de módulos con bordes ortogonales de 1px, cabeceras de barra de ventana (`01 // slug`), numeración de secciones en fuente monoespaciada y una grilla arquitectónica fija de fondo que unifica todas las vistas del portafolio tanto en modo claro como en modo oscuro.

**Key Characteristics:**
- **Escala acromática estricta en OKLCH:** Blancos puros, negros profundos y grises neutros calibrados para alto contraste (≥ 4.5:1) sin tintes de color saturados.
- **Tríada tipográfica funcional:** `Space Grotesk` para titulares estructurales, `Inter` para lectura fluida de casos de estudio (65-72ch) y `JetBrains Mono` para metadatos, rutas, etiquetas de stack y controles.
- **Geometría de módulos técnicos:** Contenedores con esquinas rectas (`0px`), cabeceras de ventana con indicadores geométricos monocromáticos y ausencia de sombras difusas innecesarias.

## Colors

Paleta estrictamente acromática definida en el espacio perceptual OKLCH con soporte nativo para modo claro y oscuro sin destellos en carga (`Theme Lock`).

### Primary
- **Obsidian Ink / Pure Signal** (`oklch(18% 0 0)` en claro / `oklch(98% 0 0)` en oscuro): Acciones primarias, pestañas activas, indicadores de estado activo y selección de texto.

### Neutral
- **Canvas Ground** (`oklch(99% 0 0)` en claro / `oklch(14% 0 0)` en oscuro): Lienzo base de la aplicación sobre el que se dibuja la grilla arquitectónica.
- **Module Surface** (`oklch(96% 0 0)` en claro / `oklch(19% 0 0)` en oscuro): Cabeceras de tarjetas tipo ventana, fondos de etiquetas (`Badge`) y bloques de código inline.
- **Structural Hairline** (`oklch(86% 0 0)` en claro / `oklch(29% 0 0)` en oscuro): Líneas divisorias de 1px, bordes de módulos y trazos de la grilla de fondo.
- **Technical Muted** (`oklch(44% 0 0)` en claro / `oklch(71% 0 0)` en oscuro): Texto secundario, descripciones de tarjetas, fechas y comentarios de consola.

### Named Rules
**The Zero-Hue Discipline Rule.** Ningún componente introduce colores semánticos saturados (verdes, rojos o azules brillantes) en la interfaz general; toda diferenciación jerárquica se resuelve mediante contraste luminoso, grosor de borde, inversión de fondo y tipografía monoespaciada.

## Typography

**Display Font:** IBM Plex Sans (con fallback `sans-serif`)
**Body Font:** IBM Plex Sans (con fallback `sans-serif`)
**Label/Mono Font:** JetBrains Mono (con fallback `monospace`)

**Character:** Emparejamiento Developer Mono técnico y sobrio donde la voz monoespaciada actúa como sistema de señalización, metadatos e interacción, mientras IBM Plex Sans garantiza lectura cómoda y nítida para clientes no técnicos y reclutadores.

### Hierarchy
- **Display** (`700`, `clamp(1.875rem, 4vw, 3rem)`, `1.15`): Nombre principal en el Hero y títulos de primer nivel (`h1`).
- **Headline** (`700`, `clamp(1.5rem, 3vw, 1.875rem)`, `1.25`): Encabezados de sección (`h2`) acompañados por prefijos numerados en `JetBrains Mono` (`01 //`, `02 //`).
- **Title** (`600`, `1.25rem`, `1.35`): Títulos de tarjetas de proyecto, puestos laborales e hitos educativos (`h3`).
- **Body** (`400`, `1rem`, `1.625`): Narrativa en primera persona y desarrollo de casos de estudio, limitado a `72ch` para lectura óptima.
- **Label** (`500`, `0.75rem`, `1.4`): Botones, pestañas de filtro, cabeceras de ventana, rutas tipo `cd ../proyectos` y badges tecnológicos.

### Named Rules
**The Functional Monospace Rule.** `JetBrains Mono` se reserva para metadatos estructurales, identificadores de módulo, tecnologías, rutas, dimensiones de imagen y controles interactivos; nunca para párrafos extensos de lectura.

## Layout

Contenedor centrado (`max-w-6xl` en Inicio y Catálogo; `max-w-5xl` en Sobre mí y Contacto; `max-w-4xl` en fichas de lectura técnica) con padding horizontal de `1.5rem` (`px-6`). Las secciones se separan mediante bloques `.portfolio-section` con `py-20 md:py-24` y borde superior continuo de `1px` (`border-border`).

El Hero se estructura en una grilla asimétrica de 12 columnas en escritorio (`7 columnas` para propuesta de valor y acciones + `5 columnas` para el módulo de inspección técnica `perfil.spec.ts`).

## Elevation & Depth

El sistema es plano por defecto y construye jerarquía mediante **capas tonales y bordes de 1px**, prescindiendo de sombras difusas.

### Named Rules
**The Border-Over-Shadow Rule.** La elevación e interactividad de una tarjeta o módulo se expresa incrementando el contraste de su borde (`hover:border-foreground/50`) y alternando entre `--color-background`, `--color-card` y `--color-surface`, nunca apilando sombras borrosas sobre bordes.

## Shapes

Geometría ortogonal de ángulos rectos (`0px`) en tarjetas, botones, badges y marcos de capturas, reforzando la estética de ventana de terminal y planos de ingeniería.

## Components

### Buttons
- **Shape:** Esquinas rectas (`0px`), borde de `1px`.
- **Primary:** Fondo `--color-primary`, texto `--color-primary-foreground`, tipografía `JetBrains Mono`.
- **Outline / Secondary:** Fondo transparente o `--color-surface`, borde `--color-border` que transiciona a `--color-foreground/40` en hover, foco visible de `2px` con offset.

### Chips (`Badge`)
- **Style:** Rectangulares en `JetBrains Mono`, fondo `--color-surface/60`, borde `--color-border`, texto `--color-muted-foreground` con transición a `--color-foreground` en hover.

### Cards / Containers (`ProyectoCard`, Módulos de Experiencia y Galería)
- **Corner Style:** `0px` (recto).
- **Window Header:** Barra superior en `--color-surface/70` con borde inferior de `1px`, indicadores geométricos cuadrados e identificador en `JetBrains Mono` (`01 // slug` o `captura_01.img`).
- **Captions:** En las galerías de proyectos, cada captura incluye un pie de foto técnico visible (`figcaption`) debajo de la imagen con el detalle funcional antes de abrir el zoom de PhotoSwipe.

### Navigation
- **Navbar:** Barra superior sticky con `backdrop-blur-sm`, borde inferior de `1px`, enlaces limpios y toggle de tema claro/oscuro.

## Do's and Don'ts

### Do:
- **Do** mantener los prefijos numerados en `JetBrains Mono` (`01 //`, `02 //`) en los encabezados de sección principales para guiar el escaneo visual.
- **Do** envolver las capturas de pantalla de proyectos en marcos de ventana (`figure`) con su epígrafe descriptivo visible (`figcaption`).
- **Do** garantizar foco de teclado visible (`focus-visible:outline-2`) en todos los enlaces, pestañas de filtro y botones.

### Don't:
- **Don't** introducir colores fuera de la escala acromática ni sombras duras neobrutalistas.
- **Don't** exponer números de teléfono o enlaces de WhatsApp en ningún componente de contacto o pie de página.
- **Don't** usar guiones largos (`—` en texto narrativo generado), lenguaje emocional exagerado ni etiquetas de "Pasantía" en los módulos de experiencia.
