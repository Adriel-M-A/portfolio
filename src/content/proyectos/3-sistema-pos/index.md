---
title: "Sistema POS — Control de Ventas"
description: "Aplicación de escritorio para punto de venta de una heladería: registro de ventas, historial, reportes y control de stock de helados."
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

Esta aplicación de escritorio fue diseñada a medida para las necesidades operativas de **Elixir Helados**, una heladería local, donde actualmente se encuentra en uso activo. El sistema automatiza las ventas diarias y el control de inventario de insumos de forma 100% offline, reemplazando las planillas y planificaciones informales por un punto de venta rápido.

## El problema

El comercio registraba su facturación en una planilla de Excel al finalizar el día de trabajo. El cierre de caja diario requería sumar los tickets en papel manualmente, discriminar los ingresos según el medio de pago (efectivo, tarjetas o transferencias) y deducir de manera manual las comisiones de PedidosYa, lo que solía derivar en diferencias de arqueo difíciles de rastrear.

Además, el control de stock de los baldes de helado y los envases físicos (potes de plástico, cucuruchos, vasos) en depósito se gestionaba de memoria. Al no contar con alertas ni registros numéricos, el local corría el riesgo constante de quedarse sin envases clave o de no prever cuándo reponer baldes de gustos populares antes de jornadas de alta demanda.

## La solución

Desarrollé un punto de venta (POS) de escritorio que opera de forma 100% offline para asegurar la continuidad del servicio ante caídas de red. La aplicación unifica la facturación ágil, el arqueo de caja y el control de stock en una sola interfaz optimizada para operadores.

El sistema diferencia automáticamente el canal de venta (salón o PedidosYa) para aplicar las comisiones y listas de precios correspondientes, y deduce de forma automática el stock de envases según el formato despachado.

## Características

- **Facturación fluida:** Registro rápido de tickets con múltiples medios de pago combinables.
- **Canales de venta integrados:** Gestión separada para salón y delivery (PedidosYa) con cálculo automatizado de comisiones de plataforma.
- **Inventario híbrido:** Descuento automático de stock para envases físicos por venta, y módulo de decremento manual para el control de baldes de helado.
- **Redondeo rápido:** Botón de ajuste rápido de vuelto para agilizar el cobro en efectivo.
- **Historial e informes:** Visualización de arqueos de caja históricos y panel de estadísticas de facturación diaria.

## El desafío técnico central

El núcleo de este proyecto consistió en resolver dos desafíos principales de empaquetado y lógica de negocio:

- **Estructuración de un inventario híbrido:** El helado a granel no se vende por unidad cerrada y su peso real por porción varía en cada despacho (cucurucho, pote de 1/4 kg, 1/2 kg), lo que imposibilita un descuento automático preciso en tiempo de caja. Diseñé un modelo híbrido para **Elixir Helados**: el sistema automatiza el stock de los envases físicos vendidos (que sí son contables por transacción) y proporciona una interfaz rápida en el catálogo para que, cuando un balde en exhibición se acabe físicamente, el usuario decremente de forma manual y en un solo clic la cantidad de baldes de ese gusto en el inventario de depósito.
- **Compilación de SQLite en Electron:** Para asegurar el rendimiento offline del local, utilicé SQLite mediante `better-sqlite3`. Al ser una base de datos con dependencias en C++, integrarla dentro de Electron requirió configurar herramientas de compilación nativa en Windows y utilizar `electron-rebuild` para compilar el módulo específicamente para el Node.js integrado en Electron, logrando que el instalador final funcionara de forma autónoma.

## Arquitectura

- **Entorno de ejecución:** Electron, distribuyendo la aplicación como un ejecutable nativo de Windows instalable en cualquier equipo de mostrador.
- **Frontend y visualizaciones:** React con TypeScript, Tailwind CSS e iconos con componentes de shadcn/ui. Utiliza Recharts para representar los gráficos de ingresos y ranking de ventas.
- **Persistencia local:** SQLite a través del driver `better-sqlite3`, permitiendo la lectura y escritura rápida de datos sin dependencia de servidores externos.

## Resultado

El punto de venta automatizó los cierres de caja diarios de **Elixir Helados**, eliminando las planillas y sumas manuales. El propietario ahora puede planificar las compras con anticipación gracias a las alertas de bajo stock de envases y a las métricas del consumo y rotación histórica de baldes de helado.
