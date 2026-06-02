---
title: "Techno Fuegos System"
description: "Aplicación de escritorio desarrollada para automatizar la generación de presupuestos en una empresa de herrería artesanal, permitiendo calcular costos, emitir cotizaciones profesionales y reducir la dependencia del conocimiento técnico del taller."
tecnologias:
  frontend:
    - "JavaScript"
    - "React"
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
github: ""
demo: ""
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
---

## Resumen

Aplicación de escritorio orientada a digitalizar el conocimiento de producción y automatizar la cotización de estructuras metálicas personalizadas para herreros artesanos.

## Problema

La cotización de fogoneros, parrillas y hornos dependía del responsable de la producción física en el taller, quien calculaba empíricamente las cantidades de hierro, electrodos, pintura y horas de mano de obra necesarias. Esta dinámica provocaba cuellos de botella administrativos, demoras prolongadas para los clientes y constantes interrupciones al personal de producción en el taller para resolver consultas de precios.

## Solución

Se propuso una solución offline que centraliza la lista de insumos del taller y sistematiza las fórmulas empíricas en una herramienta dinámica. Cualquier personal administrativo puede seleccionar un tipo de producto, ingresar sus medidas customizadas y generar automáticamente un PDF formal de presupuesto con cálculos precisos de costos y margen comercial.

## Características principales

* Cotización guiada mediante fórmulas de cálculo dinámicas y plantillas predefinidas.
* Gestión integrada de insumos, costos base y proveedores.
* Generación instantánea de presupuestos comerciales en PDF profesional (jsPDF).
* Control de validez temporal y expiración automática de cotizaciones frente a inflación.
* Resguardo automático en caliente de borradores activos para evitar pérdida de datos.
* Respaldos incrementales locales de bases de datos.

## Arquitectura y tecnologías

El software adopta un modelo offline-first híbrido para asegurar portabilidad en las computadoras del taller:
* **UI y Estado**: React (Vite) acoplado a Zustand para el manejo de estado global de las cotizaciones complejas, y React Hook Form junto con Zod para validar las entradas de herrería en tiempo real.
* **Core Desktop**: Tauri con Rust, administrando el ciclo de vida del ejecutable e interactuando directamente con el sistema de archivos local de forma segura.
* **Persistencia**: SQLite embebido para el almacenamiento rápido y estructurado de las listas de precios.

## Desafíos técnicos

* **Traducción de Reglas de Negocio Informales**: Estructurar algoritmos de cálculo parametrizados basados en la experiencia física del herrero (ej: consumo de soldadura estimado por centímetro de costura o peso teórico de perfiles de hierro).
* **Robustez ante Fallos Eléctricos**: En un taller con soldadoras eléctricas y maquinaria pesada, los cortes de luz o bajas de tensión son recurrentes. Se diseñó un middleware de guardado continuo automático para restaurar instantáneamente el presupuesto activo ante cualquier apagón imprevisto.

## Resultado

La aplicación se encuentra en desarrollo activo y pruebas beta, logrando automatizar el 90% del proceso de cotización estándar y permitiendo la delegación de presupuestos a personal no especializado sin riesgo de pérdidas por mal cálculo de costos.

## Estado

Proyecto en desarrollo.
