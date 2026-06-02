---
title: "Sistema de Ventas para Comercios Locales"
description: "Aplicación de escritorio desarrollada para pequeños comercios y quioscos, enfocada en registrar ventas, controlar stock y generar reportes de forma simple, rápida y completamente offline."
tecnologias:
  [
    "Tauri",
    "Rust",
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "SQLite",
    "Recharts",
  ]
github: "https://github.com/Adriel-M-A/pos-tauri"
demo: ""
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
---

## Resumen

Aplicación de escritorio ligera y autónoma diseñada para automatizar las operaciones comerciales diarias de pequeños quioscos y almacenes de barrio.

## Problema

El comercio operaba anotando todas sus ventas diarias y precios con lápiz y papel. La falta de control de stock físico propiciaba pérdidas involuntarias y dificultaba saber con exactitud cuáles eran los márgenes reales de ganancia diarios. El cliente requería una herramienta digital rápida, pero que no necesitara internet ni configuraciones complejas de servidores locales, adaptada a computadoras de bajos recursos.

## Solución

Se desarrolló una aplicación nativa liviana mediante Tauri y Rust con almacenamiento local persistente. La interfaz simplificada permite facturar productos con códigos de barra o pesables, actualizar stock automáticamente, realizar cierres diarios mediante gráficos analíticos y asegurar los datos mediante backups rápidos.

## Características principales

* Facturación veloz de productos unitarios o pesables (fiambres, verduras).
* Registro completo de transacciones en base de datos SQLite offline.
* Visualización gráfica de productos con mayor margen de ganancia e historial de ventas diario, semanal y mensual.
* Control estricto de inventario con avisos de stock mínimo configurable.
* Módulo interno de manual de usuario que procesa y muestra archivos Markdown informativos.
* Mecanismo embebido de respaldo (copias de seguridad) y restauración de la base de datos a archivos externos.

## Arquitectura y tecnologías

Para asegurar alto rendimiento en hardware modesto, se optó por una arquitectura híbrida moderna:
* **Backend**: Rust utilizando Tauri para un consumo de memoria RAM y CPU extremadamente bajo comparado con entornos clásicos de Electron.
* **Frontend**: React (Vite) estructurado con componentes dinámicos y estilizado mediante Tailwind CSS.
* **Base de Datos**: SQLite nativo conectado a comandos de Rust, manteniendo un flujo desacoplado por capas.

## Desafíos técnicos

* **Optimización en Hardware Antiguo**: Lograr tiempos de respuesta instantáneos al leer códigos de barra en computadoras de oficina antiguas. Esto se resolvió delegando las consultas complejas y la indexación de productos directamente al motor nativo de SQLite y Rust, liberando la carga visual del frontend.
* **Desacoplamiento de Código**: Diseñar un puente de comunicación (Tauri Commands) modularizado mediante patrones de diseño orientados a objetos (repositorios y modelos) para mantener ordenado el flujo de negocio entre Rust y la vista web.

## Resultado

La solución digitalizó por completo la operación del almacén, eliminando los registros manuales en papel. El sistema optimizó la reposición de mercadería y eliminó las diferencias de caja en los cierres de jornada diaria.

## Estado

Proyecto terminado.
