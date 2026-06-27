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
github: "https://github.com/Adriel-M-A/techno-fuegos-system"
demo: ""
cover: ./cover.png
coverAlt: "Interfaz principal del Sistema de Techno Fuegos"
imagenes:
  - "./screenshot-1.png"
  - "./screenshot-2.png"
  - "./screenshot-3.png"
imagenesAlt:
  - "Interfaz principal de la creacion de pesupuesto con plantilla seleccionada"
  - "Interfaz principal de la creacion de pesupuesto con visualización del calculo final"
  - "Interfaz de configuracion de la aplicacion con sus apartados: Insumos, Empleados, Plantillas y Backups"
categoria: "Escritorio"
---

## Resumen

Esta aplicación de escritorio a medida fue diseñada para **Techno Fuegos**, una empresa familiar en Pilar, Buenos Aires, dedicada a la fabricación artesanal de fogoneros, parrillas y hornos de hierro. El sistema agiliza el cálculo comercial y la elaboración de cotizaciones del taller, permitiendo al equipo administrativo presupuestar proyectos personalizados a partir de la selección manual de insumos y materiales del catálogo con sus precios actualizados.

## El problema

Cotizar un fogonero o una parrilla a medida era un proceso lento y centralizado. El encargado de producción (el herrero) era el único que conocía de memoria los costos de las materias primas y las horas de mano de obra necesarias para cada estructura. Para emitir una cotización, la administración debía interrumpir las labores en el taller de soldadura para que el fabricante calculara a mano el costo estimado del pedido.

Esto causaba cuellos de botella comerciales, demoras de días para entregar los presupuestos a los clientes, y la imposibilidad de delegar el proceso de ventas si el herrero no estaba disponible.

## La solución

Desarrollé una aplicación de escritorio offline que unifica la administración de costos y la confección de cotizaciones. El sistema centraliza la base de datos de insumos (como varillas de hierro de 3 metros, chapas por unidad o electrodos) y horas de taller, permitiendo cargar recetas base o plantillas de productos predefinidos.

El operador administrativo selecciona el modelo base, ajusta de manera manual las cantidades exactas de materiales requeridas para el trabajo a medida (por ejemplo, especificando "3 varillas de hierro de 3 metros"), e ingresa las horas estimadas de soldadura y mano de obra. El sistema realiza la consolidación matemática de costos, añade el margen de ganancia comercial de forma automática y genera un presupuesto en PDF listo para compartir.

## Características

- Presupuestación interactiva: Tabla de carga dinámica para inyectar materiales y mano de obra del catálogo, calculando importes en tiempo real según las cantidades ingresadas.
- Catálogo de insumos editable: Panel para actualizar el precio unitario del hierro, la chapa o los consumibles en caliente, impactando automáticamente en las futuras cotizaciones.
- Exportación de PDF monocromático: Diseño limpio en escala de grises optimizado para imprimir en el taller sin desperdiciar tinta.
- Control de inflación: Fechas de vencimiento automáticas en los presupuestos y cláusulas legales personalizables para proteger los precios del taller.
- Resiliencia ante apagones: Mecanismo de auto-guardado automático continuo de borradores activos.

## El desafío técnico central

El núcleo de este proyecto consistió en resolver tres desafíos de naturaleza física y lógica del taller:

- Estructuración del inventario: Traducir las materias primas a unidades físicas de compra de un herrero artesanal (varillas de 3m, unidades de perfiles) en lugar de una lógica de API web tradicional. El diseño del esquema SQLite permitió estructurar y adaptar estas particularidades comerciales de forma limpia.
- Resiliencia anti-apagones: El encendido de maquinaria de soldadura pesada en el taller de metalurgia provocaba caídas repentinas de tensión en la red eléctrica de las oficinas. Implementé una capa de persistencia en tiempo real en la vista del frontend para que, ante cortes de luz inesperados, la administración pudiera reiniciar la PC y retomar la carga del formulario sin perder los datos numéricos acumulados.
- Esquema Safe Money: Para evitar inconsistencias de redondeo con las fluctuaciones constantes de precios en pesos argentinos, programé el backend en Rust para operar todos los costos monetarios en la base de datos SQLite como enteros (centavos de peso), convirtiéndolos a unidades decimales únicamente al renderizar el cliente o el presupuesto en PDF.

## Arquitectura

- Entorno de ejecución: Tauri con Rust, que permitió proveer un instalador final sumamente ligero (menos de 10MB en disco y mínimo consumo de memoria RAM en comparación con Electron), óptimo para los equipos del local.
- Persistencia: SQLite local gestionada desde el backend de Tauri en Rust, asegurando acceso instantáneo offline a los costos y cotizaciones históricas.
- Frontend y UX: React con Tailwind CSS v4, Zustand para navegación no destructiva y persistente en caliente, y React Hook Form con validación de formularios estricta vía Zod.

## Resultado

**Techno Fuegos System** eliminó la dependencia del fabricante en el proceso comercial. El equipo de administración ahora presupuesta y envía cotizaciones profesionales por WhatsApp en menos de 5 minutos, permitiendo que el taller se dedique exclusivamente a la producción y fabricación en hierro.
