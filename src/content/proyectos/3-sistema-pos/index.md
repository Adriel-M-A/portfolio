---
title: "Sistema POS para Control de Ventas"
description: "Aplicación de escritorio offline para punto de venta en producción real en Elixir Helados, con facturación rápida, inventario híbrido, canales de venta y cierres de caja."
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
coverAlt: "Interfaz principal del punto de venta (POS) para el inicio de una venta o registro de pedidos"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
  - "./screenshot-5.webp"
  - "./screenshot-6.webp"
imagenesAlt:
  - "Pantalla principal del Punto de Venta (POS) con el listado de productos, el carrito de compras, selección de promociones y métodos de pago"
  - "Historial de ventas con listado de tickets, detalles de transacciones, métodos de pago, filtros por fecha y buscador"
  - "Administración del catálogo de productos con control de precios por canal de venta, stock disponible, estado y filtros por categoría"
  - "Vista detallada de un ticket de venta en un panel lateral, mostrando desglose de productos, descuentos aplicados y total facturado"
  - "Panel de Reportes y Estadísticas con gráficos interactivos de ingresos por hora, métodos de pago y canales de venta"
  - "Sección inferior de reportes mostrando alertas de bajo stock y el ranking (Top 10) de los productos más vendidos por unidades o por peso"
categoria: "Escritorio"
---

## El problema

El comercio registraba su facturación en una planilla de Excel al finalizar la jornada. El cierre de caja diario requería sumar los tickets en papel manualmente, discriminar los ingresos según el medio de pago (efectivo, tarjetas o transferencias) y deducir a mano las comisiones de PedidosYa, lo que solía derivar en diferencias de arqueo difíciles de rastrear.

Además, el control de stock de los baldes de helado y los envases físicos (potes térmicos, cucuruchos, vasos) en depósito se gestionaba de memoria. Al no contar con alertas ni registros numéricos, el local corría el riesgo constante de quedarse sin envases clave o de no prever cuándo reponer baldes de gustos de alta rotación.

## La solución

Desarrollé un punto de venta (POS) de escritorio que opera de forma 100% offline para garantizar la continuidad operativa en el mostrador ante cortes de internet. La aplicación unifica la facturación rápida, el arqueo de caja automático y el control de stock en una sola interfaz pensada para el ritmo de atención al público, habiendo realizado la instalación en los equipos del local y la capacitación directa al personal.

El sistema diferencia automáticamente el canal de venta (salón o PedidosYa) aplicando las listas de precios y el cálculo de comisiones correspondientes, deduciendo automáticamente el stock de envases según el formato despachado.

## Características

- Esquema de inventario híbrido con descuento automático de envases contables por transacción y un módulo ágil para registrar la baja de baldes de helado a granel.
- Gestión diferenciada de canales de venta para mostrador y delivery, calculando automáticamente comisiones de plataforma e ingresos netos reales.
- Registro ágil de tickets con múltiples medios de pago combinables y cálculo rápido de vuelto para cobros en efectivo.
- Arqueos diarios automatizados y panel de estadísticas con curvas de ingresos por hora, ranking de productos más vendidos y alertas de stock crítico.

## Arquitectura y decisiones técnicas

El desarrollo resolvió dos desafíos técnicos principales en torno al modelado de dominio y el empaquetado nativo:

- **Modelado de inventario híbrido:** Como el helado a granel no se despacha en porciones exactas ni unidades cerradas, automatizar el descuento por gramos en el mostrador era inviable. El sistema descuenta de forma determinista los envases físicos contables de cada ítem y proporciona un mecanismo directo para que el personal dé de baja cada balde cuando se agota en la conservadora.
- **Compilación C++ nativa con `better-sqlite3`:** Para lograr operaciones síncronas de latencia cero sin depender de un servidor externo, integré SQLite mediante `better-sqlite3`. Al tratarse de un addon nativo en C++, configuré la compilación con `electron-rebuild` contra el runtime de Node.js embebido en Electron para Windows.
- **Frontend y persistencia:** Interfaz construida con React, TypeScript, Tailwind CSS y gráficos en Recharts, comunicada de forma segura con el proceso principal mediante canales IPC.
- **Impacto operativo:** La aplicación se encuentra en uso diario activo en Elixir Helados, eliminando los desfasajes en los arqueos nocturnos y transparentando la rentabilidad neta del comercio.
