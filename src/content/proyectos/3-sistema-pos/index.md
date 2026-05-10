---
title: "Sistema POS — Control de Ventas"
description: "Aplicación de escritorio para punto de venta de una heladería: registro de ventas, historial, reportes y control de stock de helados."
tecnologias:
  [
    "Electron",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "SQLite",
    "shadcn/ui",
    "Recharts",
  ]
github: "https://github.com/Adriel-M-A/pos-elixir"
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
---

## Sobre el proyecto

El cliente llevaba el registro de sus ventas en una hoja de Excel sin macros: una fila por venta, sin posibilidad de filtrar por fecha ni obtener ningún resumen. No podía saber cuánto había vendido en el día, la semana o el mes sin hacerlo a mano.

Desarrollé una aplicación de escritorio que reemplazó ese flujo por completo. Todas las ventas quedan registradas con fecha y hora en formato local, y el sistema permite consultarlas y analizarlas sin esfuerzo.

## Características principales

- Registro de ventas con múltiples métodos de pago
- Dos modos de venta: consumo local y pedidos por PedidosYa, con interfaz adaptada a cada caso
- Catálogo de productos que incluye envases de helado (cono, 1/2 kg, 1 kg, etc.), bebidas y otros artículos
- Contador de baldes de helado por tipo, para controlar el stock disponible
- Campo de ajuste manual del precio final para aplicar descuentos rápidos al momento de cobrar (ej: redondear $20.500 a $20.000)
- Historial de ventas con filtros por fecha
- Reportes y gráficos de ventas diarias, semanales y mensuales
- Todos los montos en pesos argentinos, fechas y horas en formato local
- Base de datos local SQLite embebida, sin necesidad de internet ni servidor

## Desafíos técnicos

El mayor desafío fue integrar Electron con better-sqlite3, una dependencia nativa que requiere compilarse específicamente para la versión de Node que embebe Electron. Configurar el proceso de build para que los binarios nativos quedaran correctamente empaquetados en el instalador fue la parte más compleja del proyecto.

## Estado

Proyecto Terminado — vendido y entregado al cliente.
