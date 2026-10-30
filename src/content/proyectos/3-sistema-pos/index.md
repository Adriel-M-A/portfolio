---
title: "Sistema POS: Control de Ventas"
description: "Aplicación de escritorio 100% offline para punto de venta en producción real (Elixir Helados): facturación rápida, inventario híbrido, canales de venta y cierres de caja."
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
cover: "./cover.png"
coverAlt: "Interfaz principal del punto de venta (POS) para el inicio de una venta o registro de pedidos"
imagenes:
  - "./screenshot-1.png"
  - "./screenshot-2.png"
  - "./screenshot-3.png"
  - "./screenshot-4.png"
  - "./screenshot-5.png"
  - "./screenshot-6.png"
imagenesAlt:
  - "Pantalla principal del Punto de Venta (POS) con el listado de productos, el carrito de compras, selección de promociones y métodos de pago"
  - "Historial de ventas con listado de tickets, detalles de transacciones, métodos de pago, filtros por fecha y buscador"
  - "Administración del catálogo de productos con control de precios por canal de venta, stock disponible, estado y filtros por categoría"
  - "Vista detallada de un ticket de venta en un panel lateral, mostrando desglose de productos, descuentos aplicados y total facturado"
  - "Panel de Reportes y Estadísticas con gráficos interactivos de ingresos por hora, métodos de pago y canales de venta"
  - "Sección inferior de reportes mostrando alertas de bajo stock y el ranking (Top 10) de los productos más vendidos por unidades o por peso"
categoria: "Escritorio"
---

## Resumen

Aplicación de escritorio diseñada a medida para las necesidades operativas de **Elixir Helados**, donde se encuentra en uso diario activo. El sistema automatiza la facturación en mostrador, la discriminación de ventas por delivery, el control de inventario de insumos y los cierres de caja de forma 100% offline, reemplazando planillas manuales por un punto de venta de respuesta inmediata.

## El problema

El comercio registraba su facturación en una planilla de Excel al finalizar la jornada. El cierre de caja diario requería sumar los tickets en papel manualmente, discriminar los ingresos según el medio de pago (efectivo, tarjetas o transferencias) y deducir a mano las comisiones de PedidosYa, lo que solía derivar en diferencias de arqueo difíciles de rastrear.

Además, el control de stock de los baldes de helado y los envases físicos (potes térmicos, cucuruchos, vasos) en depósito se gestionaba de memoria. Al no contar con alertas ni registros numéricos, el local corría el riesgo constante de quedarse sin envases clave o de no prever cuándo reponer baldes de gustos de alta rotación.

## La solución

Desarrollé un punto de venta (POS) de escritorio que opera de forma 100% offline para garantizar la continuidad operativa en el mostrador ante cortes de internet. La aplicación unifica la facturación rápida, el arqueo de caja automático y el control de stock en una sola interfaz pensada para el ritmo de atención al público, habiendo realizado la instalación en los equipos del local y la capacitación directa al personal.

El sistema diferencia automáticamente el canal de venta (salón o PedidosYa) aplicando las listas de precios y el cálculo de comisiones correspondientes, y deduce de forma automática el stock de envases según el formato despachado.

## Características

- **Inventario Híbrido:** Descuento automático de stock por transacción para envases físicos contables (potes, cucuruchos) combinado con un módulo de decremento manual ágil en un clic para los baldes de helado a granel.
- **Gestión de Canales (Salón vs. Delivery):** Discriminación entre ventas de mostrador y PedidosYa con cálculo automatizado de comisiones de plataforma e ingresos netos reales.
- **Facturación Fluida y Redondeo:** Registro rápido de tickets con múltiples medios de pago combinables y ajuste rápido de vuelto para agilizar el cobro en efectivo.
- **Cierres de Caja y Analítica:** Arqueos diarios sin diferencias manuales y panel interactivo con curvas de ingresos por hora, ranking de productos (Top 10) y alertas de stock crítico.

## El desafío técnico central

El núcleo de ingeniería de este proyecto consistió en resolver dos desafíos principales de modelado de dominio y empaquetado nativo:

- **Modelado del Inventario Híbrido:** El helado artesanal a granel no se vende por unidad cerrada y su peso exacto por porción varía en cada despacho (cucurucho, 1/4 kg, 1/2 kg, 1 kg), lo que vuelve inviable un descuento automático por gramos en tiempo de caja. Diseñé un esquema híbrido: el motor de ventas descuenta automáticamente los envases físicos asociados a cada ítem del ticket (que sí son discretos y contables), mientras que provee un control directo para dar de baja cada balde de helado cuando se agota en la conservadora, manteniendo trazabilidad exacta de rotación sin frenar al cajero.
- **Compilación C++ Nativa (`better-sqlite3` en Electron):** Para lograr lecturas y escrituras síncronas de latencia cero sin servidor externo, integré SQLite mediante `better-sqlite3`. Al tratarse de un addon nativo en C++, configuré el pipeline con `electron-rebuild` para compilar los binarios contra los encabezados exactos del runtime de Node.js embebido en Electron sobre Windows, generando un instalador autónomo listo para producción.

## Arquitectura

- **Entorno de Ejecución:** Electron, empaquetado como ejecutable nativo de Windows para el equipo de mostrador.
- **Frontend y Visualización:** React con TypeScript, Tailwind CSS, componentes accesibles de shadcn/ui y gráficos estadísticos en Recharts.
- **Persistencia Local:** Base de datos relacional SQLite operada vía `better-sqlite3` en el proceso principal, comunicada de forma segura con la interfaz mediante IPC.

## Resultado

El sistema se encuentra en producción diaria en **Elixir Helados**. Eliminó las diferencias en los cierres de caja nocturnos, transparentó la rentabilidad real descontando comisiones de delivery y permitió al comercio anticipar compras de insumos y producción de gustos mediante métricas históricas reales.
