---
title: "Sistema de Ventas para Comercios Locales"
description: "Aplicación de escritorio desarrollada para pequeños comercios y quioscos, enfocada en registrar ventas, controlar stock y generar reportes de forma simple, rápida y completamente offline."
tecnologias:
  ["Tauri", "Rust", "React", "Vite", "Tailwind CSS", "SQLite", "Recharts"]
github: "https://github.com/Adriel-M-A/pos-tauri"
demo: ""
imagenes:
  - "screenshot-1.png"
  - "screenshot-2.png"
  - "screenshot-3.png"
---

## Sobre el proyecto

Proyecto desarrollado para un comercio local que llevaba el registro diario de sus ventas manualmente, utilizando lápiz y papel. El objetivo principal fue reemplazar ese flujo por un sistema simple y rápido de utilizar, pensado para negocios pequeños que no necesitan infraestructura compleja ni funcionalidades empresariales avanzadas.

La aplicación permite registrar ventas, controlar productos, consultar estadísticas y generar reportes desde una única interfaz de escritorio. Todo el sistema funciona completamente offline utilizando SQLite como base de datos local, evitando dependencias externas o costos de mantenimiento adicionales.

La estructura del proyecto fue diseñada para mantener una experiencia visual simple y poco invasiva, priorizando velocidad y facilidad de uso para usuarios sin experiencia técnica. Además, el sistema quedó preparado para incorporar nuevos módulos y funcionalidades en futuras versiones según las necesidades del cliente.

## Características principales

- Registro de ventas con múltiples métodos de pago
- Historial completo de ventas almacenado localmente
- Reportes e informes por día, semana y mes
- Visualización de gráficos y métricas de ventas
- Estadísticas de productos más vendidos y métodos de pago más utilizados
- Gestión de productos con y sin control de stock
- Soporte para productos pesables como fiambres, frutas y verduras
- Ajuste manual del precio final para descuentos rápidos o redondeos
- Sistema de copias de seguridad y restauración de datos
- Manual de usuario integrado dentro de la aplicación mediante renderizado de archivos Markdown
- Arquitectura completamente offline utilizando SQLite
- Base preparada para agregar módulos y funcionalidades futuras

## Desafíos técnicos

El principal desafío fue construir un sistema técnicamente sólido sin perder simplicidad operativa. La aplicación debía funcionar correctamente en hardware modesto, ser fácil de utilizar para usuarios no técnicos y mantener una interfaz rápida incluso durante operaciones frecuentes de lectura y escritura.

La arquitectura backend fue desarrollada en Rust utilizando Tauri, separando claramente la lógica de persistencia y negocio de la interfaz React. Se implementó una estructura por capas utilizando repositorios, modelos y comandos Tauri para mantener el código organizado y escalable.

## Estado

Proyecto en producción — vendido y entregado al cliente.
