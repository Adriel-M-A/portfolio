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
  - "Pantalla de cobro rápido con catálogo visual de productos"
  - "Módulo de inventario mostrando stock mínimo y herramientas de edición"
  - "Sección de reportes diarios con gráficos de barra interactivos de ganancias"
  - "Módulo interno de ayuda y visualización de manuales en formato Markdown"
---

## Resumen

Segunda generación de mi sistema POS para comercios locales, desarrollada con
Tauri y Rust para reemplazar la versión anterior basada en Electron. El objetivo
fue el mismo — digitalizar la operación diaria de un almacén o quiosco — pero
con una arquitectura más liviana, pensada específicamente para hardware modesto
y sin dependencia de un runtime pesado.

## El problema

El comercio anotaba ventas y precios con lápiz y papel. Sin control de stock,
las pérdidas eran invisibles y los márgenes reales de cada jornada eran una
estimación. El cliente necesitaba algo rápido y simple que funcionara en una
computadora vieja, completamente offline, sin instalaciones complejas ni
servidores.

El punto de partida técnico también tenía sus limitaciones: mi solución anterior
con Electron funcionaba, pero su consumo de RAM era considerablemente alto para
equipos con recursos limitados. Quería una alternativa que resolviera el mismo
problema con mucho menos overhead.

## La solución

Desarrollé la aplicación con Tauri, que usa el WebView nativo del sistema
operativo en lugar de empaquetar Chromium completo como hace Electron. El
backend corre en Rust, lo que se traduce en tiempos de arranque rápidos y un
consumo de memoria mínimo incluso en hardware antiguo.

La interfaz cubre todo el flujo del punto de venta: facturación de productos
unitarios y pesables, control de stock con alertas de mínimo, cierres diarios
con gráficos, y copias de seguridad integradas.

## Características

- Facturación de productos unitarios o pesables (fiambres, verduras, a granel).
- Control de inventario con avisos de stock mínimo configurable por producto.
- Historial de ventas con visualización gráfica diaria, semanal y mensual.
- Métricas de margen de ganancia por producto.
- Copias de seguridad y restauración de la base de datos integradas en la app.
- Módulo de ayuda interno que renderiza archivos Markdown como manual de usuario.
- Arquitectura 100% offline: sin internet, sin servidores, sin configuración
  de red.

## El desafío técnico central

El aspecto más interesante de este proyecto fue diseñar el puente de comunicación
entre el backend en Rust y el frontend en React mediante **Tauri Commands**.

En Tauri, toda interacción entre la vista web y el sistema nativo pasa por
comandos explícitamente definidos en Rust. Esto obliga a pensar la arquitectura
en capas desde el principio: las consultas a SQLite, la lógica de negocio y la
validación de datos viven en Rust, mientras que el frontend solo se encarga de
la presentación y dispara comandos con los parámetros necesarios.

Para mantener el código ordenado a medida que el sistema crecía, organicé el
backend en Rust siguiendo un patrón de repositorios y modelos — una capa de
acceso a datos separada de la lógica de negocio — que hace que cada comando
expuesto al frontend sea simple, predecible y fácil de mantener.

## Arquitectura

- **Backend**: Rust con Tauri. Maneja toda la lógica de negocio, las consultas
  a SQLite y la exposición de comandos al frontend.
- **Frontend**: React con JavaScript, Tailwind CSS y Recharts para los gráficos.
- **Base de datos**: SQLite nativo gestionado desde Rust, sin ORM.
- **Por qué Tauri sobre Electron**: el binario final es significativamente más
  liviano y el consumo de RAM en reposo es una fracción del que tenía la versión
  anterior, lo que lo hace viable en equipos con recursos limitados.

## Resultado

El sistema fue entregado y adoptado por el comercio, digitalizando por completo
el registro de ventas y el control de stock. A nivel técnico, este proyecto
consolidó mi conocimiento de Rust y Tauri como stack para aplicaciones de
escritorio donde el rendimiento y el tamaño del ejecutable importan.