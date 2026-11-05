---
title: "Sistema de Ventas para Comercios Locales"
description: "Aplicación de escritorio desarrollada para pequeños comercios y quioscos, enfocada en registrar ventas, controlar stock y generar reportes de forma simple, rápida y completamente offline."
tecnologias:
  frontend:
    - "JavaScript"
    - "React"
    - "Tailwind CSS"
    - "Recharts"
  backend:
    - "Rust"
    - "SQLite"
  herramientas:
    - "Tauri"
    - "Vite"
github: "https://github.com/Adriel-M-A/pos-tauri"
demo: ""
cover: "./cover.webp"
coverAlt: "Interfaz de punto de venta (POS) ligera construida con Tauri y Rust"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
imagenesAlt:
  - "Módulo de inventario mostrando stock mínimo y herramientas de edición"
  - "Sección de historial de ventas filtrada por fecha"
  - "Sección de reportes diarios con gráficos de barra interactivos de ganancias"
  - "Módulo de auditorías de cierres de caja"
categoria: "Escritorio"
---

## El problema

El comercio anotaba ventas y precios con lápiz y papel. Sin control de stock, las pérdidas eran invisibles y los márgenes reales de cada jornada eran una estimación. El cliente requería una solución simple y rápida para operar en una computadora modesta, de forma completamente offline y sin necesidad de instalaciones complejas ni servidores externos.

La versión anterior basada en Electron funcionaba correctamente, pero su consumo de memoria RAM era elevado para equipos con recursos limitados. El objetivo fue diseñar una arquitectura ligera que resolviera el problema operativo con un overhead mínimo.

## La solución

Desarrollé la aplicación con Tauri, aprovechando el WebView nativo del sistema operativo en lugar de empaquetar Chromium completo. El backend en Rust garantiza tiempos de arranque inmediatos y un uso de memoria reducido incluso en hardware antiguo.

La interfaz abarca todo el flujo del punto de venta, incluyendo la facturación de productos unitarios o pesables, control de inventario con alertas de stock mínimo, cierres diarios con gráficos estadísticos y respaldos de datos integrados.

## Características

- Facturación flexible para productos por unidad o pesables a granel.
- Control de inventario con alertas de stock mínimo configurables por producto.
- Historial de transacciones con visualización gráfica diaria, semanal y mensual.
- Cálculo de métricas de margen de ganancia por producto.
- Copias de seguridad y restauración de base de datos integradas en la aplicación.
- Manual de usuario interno integrado mediante renderizado de archivos Markdown.
- Arquitectura completamente local sin dependencias de red ni servicios en la nube.

## Arquitectura y decisiones técnicas

El diseño técnico se centró en la comunicación desacoplada entre el backend en Rust y el frontend en React a través de comandos de Tauri:

- **Arquitectura en capas en Rust:** Las consultas a SQLite, las reglas de negocio y las validaciones se estructuran mediante un patrón de repositorios y modelos en Rust, aislando la persistencia de la capa visual.
- **Frontend reactivo:** Desarrollado con React, JavaScript, Tailwind CSS y gráficos en Recharts, encargándose de la presentación e invocación de comandos nativos.
- **Persistencia local eficiente:** Base de datos SQLite nativa gestionada desde Rust sin capas intermedias pesadas ni ORMs.
- **Rendimiento comparativo:** El binario final redujo drásticamente el espacio en disco frente a soluciones tradicionales en Chromium y optimizó el consumo de RAM en reposo a una fracción mínima, asegurando fluidez en equipos de bajos recursos.
