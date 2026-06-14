---
title: "Sistema POS — Control de Ventas"
description: "Aplicación de escritorio para punto de venta de una heladeráa: registro de ventas, historial, reportes y control de stock de helados."
tecnologias:
  frontend:
    - "JavaScript"
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
---

## Resumen

Aplicación de punto de venta desarrollada a medida para una heladería local, hoy
en uso activo en el comercio. Reemplazó por completo el registro manual en Excel
con un sistema offline que centraliza ventas, stock e informes en una sola
herramienta.

## El problema

El comercio registraba sus ventas en una planilla Excel básica: sin categorías,
sin filtros y sin ningún cálculo automático. Cerrar la caja al final del día
implicaba sumar manualmente. Saber cuánto se facturó en la semana o el mes era
todavía más laborioso, y el inventario de baldes de helado en depósito se
manejaba de memoria.

Además, el comercio opera con dos canales de venta distintos — mostrador y
PedidosYa — con lógicas de precio y comisión diferentes, lo que complejizaba
aún más el registro manual.

## La solución

Desarrollé una aplicación de escritorio 100% offline que cubre todo el flujo
del punto de venta: registro de transacciones, control de stock, cierre de caja
y análisis de facturación. Tiene dos modos de operación diferenciados para
ventas locales y pedidos de delivery, y funciona sin internet para que ninguna
caída de conexión interrumpa la operación del local.

## Características

- Registro ágil de ventas con múltiples medios de pago: efectivo, tarjeta y
  transferencia.
- Dos modos de venta: consumo en mostrador y PedidosYa con comisiones calculadas
  automáticamente.
- Control de inventario de baldes de helado con descuento automático según el
  tipo y peso de cada envase vendido (cucuruchos, ¼ kg, 1 kg).
- Campo de redondeo rápido para aplicar descuentos al momento de cobrar.
- Historial de ventas filtrable por rango de fechas.
- Panel de métricas con indicadores diarios, semanales y mensuales de
  facturación.
- Arquitectura completamente offline: SQLite local, sin dependencia de servidores
  ni conexión a internet.

## El desafío técnico central

El problema más complejo fue integrar `better-sqlite3` — una dependencia con
código nativo compilado — dentro de Electron. A diferencia de las librerías
JavaScript puras, `better-sqlite3` requiere compilarse específicamente contra
la versión de Node.js embebida en Electron, no la del sistema. Esto implicó
configurar un pipeline de build con herramientas de compilación nativa y
electron-rebuild para que el instalador final de Windows funcionara
correctamente en cualquier equipo, sin requerir dependencias externas.

El otro desafío fue modelar el consumo de stock: los baldes de helado no se
descuentan uno a uno sino en función del tipo de envase vendido y su peso
correspondiente, lo que requirió definir las fórmulas de consumo con el
cliente y validarlas contra el inventario físico real.

## Arquitectura

- **Entorno**: Electron, que permite distribuir la aplicación como un instalador
  de Windows autónomo.
- **Frontend**: React con TypeScript, Tailwind CSS y componentes de shadcn/ui.
- **Gráficos**: Recharts para los paneles de facturación interactivos.
- **Base de datos**: SQLite vía `better-sqlite3` para almacenamiento local
  persistente de alta velocidad.

## Resultado

El sistema lleva tiempo en uso activo en la heladería. Automatizó los cierres
de caja diarios, eliminó el registro manual en Excel y le dio al dueño visibilidad
inmediata sobre facturación por canal, productos de mayor rotación y estado del
inventario en depósito.
