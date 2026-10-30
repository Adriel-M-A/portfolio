---
title: "Techno Fuegos System"
description: "Aplicación de escritorio a medida en Rust y Tauri para automatizar el cálculo de costos y la emisión de presupuestos en una empresa metalúrgica y de herrería artesanal."
tecnologias:
  frontend:
    - "React"
    - "JavaScript"
    - "Tailwind CSS"
    - "Zustand"
    - "React Hook Form"
    - "Zod"
    - "jsPDF"
  backend:
    - "Rust"
    - "SQLite"
  herramientas:
    - "Tauri"
    - "Vite"
github: "https://github.com/Adriel-M-A/techno-fuegos-system"
demo: ""
cover: ./cover.png
coverAlt: "Interfaz principal del Sistema de Techno Fuegos"
imagenes:
  - "./screenshot-1.png"
  - "./screenshot-2.png"
  - "./screenshot-3.png"
imagenesAlt:
  - "Interfaz principal de creación de presupuesto con plantilla de producto seleccionada y desglose de materiales"
  - "Visualización del cálculo comercial final con costos de insumos, mano de obra y margen aplicado"
  - "Panel de configuración del sistema: catálogo de insumos en hierro, empleados, plantillas base y copias de seguridad"
categoria: "Escritorio"
---

## Resumen

Aplicación de escritorio a medida desarrollada para **Techno Fuegos**, una empresa dedicada a la fabricación artesanal de fogoneros, parrillas y estructuras de hierro. El sistema independiza el cálculo comercial del trabajo en el taller, permitiendo al área administrativa cotizar proyectos personalizados a partir de recetas base e insumos actualizados, emitir presupuestos en PDF y operar con protección continua ante cortes de suministro eléctrico.

## El problema

Cotizar un fogonero o una parrilla a medida era un cuello de botella operativo. El encargado de producción era el único que conocía en detalle el rendimiento de los materiales y las horas de soldadura necesarias para cada estructura. Para responder a un cliente, administración debía interrumpir el trabajo en el taller metalúrgico para calcular a mano el costo de cada pedido.

Esto generaba demoras de varios días en la entrega de presupuestos, riesgo de desactualización de precios de materias primas y la imposibilidad de delegar la presupuestación comercial.

## La solución

Desarrollé e instalé una aplicación de escritorio 100% offline en los equipos de la empresa, capacitando al personal para unificar la gestión de costos y la emisión de cotizaciones. El sistema centraliza el catálogo de insumos físicos (varillas de hierro por barra, chapas por espesor, consumibles de soldadura) y el valor hora de taller, permitiendo definir plantillas base reutilizables.

El operador selecciona una plantilla, ajusta las cantidades de materiales u horas para el trabajo a medida, y el motor calcula en tiempo real los costos directos, aplica los márgenes comerciales y exporta un presupuesto en PDF optimizado para impresión en taller o envío directo al cliente.

## Características

- **Patrón Safe Money:** Manejo íntegro de montos monetarios en centavos de peso (enteros) en el backend de Rust y SQLite para eliminar errores de punto flotante ante escenarios de alta inflación.
- **Resiliencia Anti-Apagones:** Persistencia automática continua del estado de los formularios para proteger el trabajo administrativo frente a caídas de tensión provocadas por maquinaria de soldadura.
- **Presupuestación por Plantillas:** Carga instantánea de estructuras base con ajuste dinámico de materiales, mano de obra y márgenes de ganancia.
- **Catálogo de Insumos en Caliente:** Actualización centralizada del precio del hierro y consumibles con impacto inmediato en nuevas cotizaciones.
- **Exportación PDF Monocromática:** Generación de presupuestos con fechas de validez automáticas y diseño de alto contraste en escala de grises, pensado para impresoras de taller sin desperdicio de tóner.

## El desafío técnico central

El desarrollo exigió resolver tres desafíos concretos derivados del entorno físico e industrial del cliente:

- **Esquema Safe Money (Precisión Monetaria en Rust):** En un contexto de precios con cifras elevadas y actualizaciones frecuentes, operar con decimales de punto flotante (`f64`) introduce discrepancias de redondeo acumulativas. Diseñé el backend en Rust y el esquema de SQLite para almacenar y calcular cada insumo, subtotal y porcentaje exclusivamente como enteros de 64 bits (centavos de peso), formateando a decimales únicamente en la capa de vista y en la salida de `jsPDF`.
- **Resiliencia frente a Cortes Eléctricos en Taller:** El arranque de soldadoras industriales y herramientas de corte en el taller provocaba bajas de tensión y reinicios ocasionales en las computadoras de oficina. Implementé una capa de persistencia reactiva con Zustand sincronizada en tiempo real que guarda cada modificación del borrador activo, permitiendo reiniciar el equipo y retomar la cotización exactamente en el último campo editado sin pérdida de datos.
- **Modelado de Unidades Físicas de Herrería:** Traduje la lógica de acopio del taller (barras de hierro de longitudes fijas, fracciones de chapa y horas-hombre por categoría de operario) a un esquema relacional en SQLite con validación estricta en el cliente mediante React Hook Form y Zod.

## Arquitectura

- **Entorno y Backend:** Tauri con **Rust**, logrando un ejecutable nativo de menos de 10 MB en disco y un consumo mínimo de memoria RAM, muy superior en rendimiento a alternativas basadas en Chromium empaquetado.
- **Base de Datos y Backups:** SQLite local administrada directamente desde Rust, incluyendo un sistema integrado de copias de seguridad y restauración en un clic.
- **Frontend:** React, Tailwind CSS v4, gestión de estado persistente con Zustand, validación de esquemas con Zod y generación de documentos con jsPDF.

## Resultado

**Techno Fuegos System** eliminó las interrupciones en el sector de soldadura por consultas de precios y redujo el tiempo de confección de presupuestos a menos de 5 minutos, estandarizando el cálculo de costos y protegiendo los márgenes comerciales del taller.
