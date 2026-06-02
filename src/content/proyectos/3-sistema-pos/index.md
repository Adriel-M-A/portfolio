---
title: "Sistema POS — Control de Ventas"
description: "Aplicación de escritorio para punto de venta de una heladería: registro de ventas, historial, reportes y control de stock de helados."
tecnologias:
  frontend:
    - "TypeScript"
    - "React"
    - "Tailwind CSS"
    - "shadcn/ui"
    - "Recharts"
  backend:
    - "SQLite"
  herramientas:
    - "Electron"
github: "https://github.com/Adriel-M-A/pos-elixir"
demo: ""
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
---

## Resumen

Aplicación comercial de punto de venta (POS) diseñada a medida para agilizar el registro diario de transacciones y optimizar el control de stock en una heladería.

## Problema

El comercio operaba registrando sus ventas diarias en una planilla Excel sumamente básica y manual. No existían filtros de búsqueda, categorización ni herramientas estadísticas automatizadas. Calcular la facturación diaria, semanal o mensual dependía de sumas manuales lentas y propensas a errores, impidiendo un control en tiempo real de la rentabilidad y del inventario de baldes de helado en depósito.

## Solución

Se desarrolló una aplicación de escritorio que centraliza todo el punto de venta. Registra y categoriza automáticamente cada venta en una base de datos local rápida, ofreciendo interfaces optimizadas para ventas locales y plataformas de delivery (PedidosYa), además de paneles gráficos para analizar las ventas de forma visual.

## Características principales

* Registro de transacciones ágil con múltiples formas de pago (efectivo, tarjetas, transferencias).
* Dos modos de venta adaptados: consumo local y PedidosYa con comisiones integradas.
* Gestión e inventario de baldes de helado para evitar quiebres de stock.
* Campo de redondeo de importes para descuentos promocionales rápidos al momento de cobrar.
* Historial interactivo de ventas filtrable por rango de fechas.
* Panel gráfico con indicadores diarios, semanales y mensuales de facturación.
* Arquitectura 100% offline para garantizar el funcionamiento continuo del comercio ante caídas de internet.

## Arquitectura y tecnologías

El proyecto fue desarrollado utilizando tecnologías web modernas empaquetadas para escritorio:
* **Entorno**: Electron para encapsular la aplicación como software de escritorio autónomo.
* **Frontend**: React con TypeScript, estilizado mediante Tailwind CSS y componentes de shadcn/ui.
* **Métricas**: Recharts para el renderizado interactivo de gráficos de facturación.
* **Base de Datos**: SQLite (mediante la librería nativa `better-sqlite3`) para almacenamiento persistente local de alta velocidad.

## Desafíos técnicos

* **Compilación Nativa en Electron**: El mayor desafío fue configurar y compilar la dependencia binaria nativa `better-sqlite3` para que fuera compatible con la arquitectura de Node.js embebida en Electron, requiriendo pipelines de build específicos para empaquetar correctamente el instalador de Windows.
* **Consistencia del Inventario**: Diseñar las fórmulas de consumo dinámico de baldes de helado según la variedad y peso de los envases vendidos (cucuruchos, 1/4 kg, 1 kg) para mantener el stock físico siempre sincronizado.

## Resultado

El cliente implementó con éxito la aplicación en su local comercial, logrando reducir el tiempo de atención en caja y automatizar los cierres de caja diarios. Los reportes visuales permitieron conocer inmediatamente los productos de mayor rotación y las horas de mayor facturación.

## Estado

Proyecto terminado.
