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
  - "Panel de configuración del sistema con catálogo de insumos en hierro, empleados, plantillas base y copias de seguridad"
categoria: "Escritorio"
---

## El problema

Cotizar un fogonero o una parrilla a medida era un cuello de botella operativo. El encargado de producción era el único que conocía en detalle el rendimiento de los materiales y las horas de soldadura necesarias para cada estructura. Para responder a un cliente, administración debía interrumpir el trabajo en el taller metalúrgico para calcular a mano el costo de cada pedido.

Esto generaba demoras de varios días en la entrega de presupuestos, riesgo de desactualización de precios de materias primas y la imposibilidad de delegar la presupuestación comercial.

## La solución

Desarrollé e instalé una aplicación de escritorio 100% offline en los equipos de la empresa, capacitando al personal para unificar la gestión de costos y la emisión de cotizaciones. El sistema centraliza el catálogo de insumos físicos (varillas de hierro por barra, chapas por espesor, consumibles de soldadura) y el valor hora de taller, permitiendo definir plantillas base reutilizables.

El operador selecciona una plantilla, ajusta las cantidades de materiales u horas para el trabajo a medida, y el motor calcula en tiempo real los costos directos, aplica los márgenes comerciales y exporta un presupuesto en PDF optimizado para impresión en taller o envío directo al cliente.

## Características

- Manejo íntegro de montos monetarios en centavos de peso utilizando el patrón Safe Money en Rust y SQLite para eliminar errores de redondeo.
- Resiliencia ante cortes de suministro eléctrico mediante guardado reactivo continuo del estado de los formularios.
- Carga instantánea de estructuras base mediante plantillas configurables con ajuste dinámico de materiales, mano de obra y márgenes comerciales.
- Catálogo centralizado con actualización inmediata del precio del hierro y consumibles para nuevas cotizaciones.
- Generación de presupuestos en PDF de alto contraste optimizados para impresión en taller sin desperdicio de tóner.

## Arquitectura y decisiones técnicas

El desarrollo exigió resolver desafíos concretos derivados del entorno industrial del taller:

- **Patrón Safe Money en Rust:** En un contexto de valores elevados y actualizaciones periódicas, operar con números decimales de punto flotante introduce discrepancias acumulativas. El backend en Rust y las tablas de SQLite operan exclusivamente con enteros de 64 bits que representan centavos, formateando a decimales únicamente en la presentación visual y en la exportación con jsPDF.
- **Persistencia reactiva ante caídas de tensión:** El arranque de maquinaria pesada de soldadura provocaba ocasionalmente microcortes eléctricos en la oficina. Implementé una capa con Zustand que sincroniza cada cambio del borrador activo, permitiendo reiniciar el equipo y retomar la cotización exactamente en el último campo editado sin pérdida de información.
- **Modelado de unidades de herrería:** La lógica de acopio del taller (barras de longitud fija, fracciones de chapa y horas de operario) se modeló en SQLite con validación estricta en el cliente mediante React Hook Form y esquemas Zod.
- **Rendimiento con Tauri y Rust:** Ejecutable nativo ligero con un consumo de memoria mínimo, ideal para puestos de trabajo administrativos estándar.
- **Impacto operativo:** Techno Fuegos System eliminó las interrupciones en el área de soldadura por consultas comerciales y redujo el tiempo de confección de cotizaciones a menos de 5 minutos.
