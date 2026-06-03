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
cover: "./cover.webp"
coverAlt: "Interfaz del software de cotizaciones personalizadas Techno Fuegos System"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
imagenesAlt:
  - "Formulario interactivo para ingresar medidas de fogoneros con cálculo automático en cascada"
  - "Vista previa de la hoja de presupuesto desglosada con materiales e insumos"
  - "Configuración de precios de insumos básicos y metales actualizables"
  - "Presupuesto final generado en PDF listo para descargar y enviar al cliente"
---

## Resumen

Aplicación de escritorio desarrollada para una empresa de herrería artesanal que
fabrica fogoneros, parrillas y hornos a medida. El sistema reemplazó el proceso
manual de cotización — que dependía exclusivamente del conocimiento del herrero
— por una herramienta que cualquier persona del equipo puede usar para generar
presupuestos precisos en PDF sin intervención del taller.

## El problema

Cotizar un fogonero o una parrilla a medida requería interrumpir al responsable
de producción para que calculara de memoria cuánto hierro, cuántos electrodos,
cuánta pintura y cuántas horas de trabajo implicaba cada pedido. Esos cálculos
vivían en la cabeza de una sola persona.

Esto generaba tres problemas concretos: cuellos de botella cuando había varios
presupuestos pendientes, demoras para los clientes que esperaban una cotización,
y el riesgo permanente de que ese conocimiento no estuviera disponible.

## La solución

Trabajé junto con el cliente para relevar y formalizar todas las fórmulas de
cálculo que el herrero aplicaba empíricamente. Una vez documentadas, las
implementé como algoritmos parametrizables dentro de la aplicación.

El resultado es una herramienta donde cualquier empleado puede seleccionar un
tipo de producto, ingresar las medidas personalizadas del cliente, y obtener
automáticamente el desglose de materiales, costos y margen comercial — listo
para exportar como PDF profesional.

## El desafío técnico central

La parte más compleja no fue escribir código sino entender el oficio. Las
fórmulas del herrero no estaban documentadas en ningún lado: eran reglas
aprendidas con años de práctica, expresadas en términos como "para una costura
de tanto largo uso tantos electrodos" o "el peso del perfil depende de su
sección y longitud".

El proceso fue iterativo: el cliente describía cómo calculaba, yo lo
formalizaba en algoritmos, lo mostraba funcionando con casos reales, y
ajustábamos juntos hasta que los resultados coincidían con lo que él haría
manualmente. Ese trabajo de traducción entre conocimiento artesanal y lógica
de software fue lo más valioso del proyecto.

A nivel técnico, el manejo de estado fue otro punto de atención: una cotización
en curso tiene múltiples secciones interdependientes cuyos totales se
recalculan en cascada. Usé Zustand para centralizar ese estado y React Hook
Form con Zod para validar cada entrada en tiempo real, evitando que un dato
inválido propagara errores al cálculo final.

## Características

- Cotización guiada por plantillas predefinidas con fórmulas parametrizables
  por medida.
- Gestión de insumos, costos base y proveedores actualizable sin tocar el código.
- Generación de presupuestos en PDF profesional listos para enviar al cliente.
- Control de validez temporal: las cotizaciones expiran automáticamente para
  evitar precios desactualizados por inflación.
- Guardado automático continuo de borradores activos para sobrevivir cortes de
  luz en el taller.
- Copias de seguridad y restauración de la base de datos integradas.

## Arquitectura

- **Frontend**: React con JavaScript, Tailwind CSS, Zustand para estado global
  y React Hook Form + Zod para validación de formularios complejos.
- **Generación de PDF**: jsPDF, ejecutado en el cliente sin dependencias externas.
- **Backend**: Rust con Tauri, manejando el sistema de archivos, los backups y
  la persistencia en SQLite.
- **Por qué Tauri**: mismo razonamiento que en proyectos anteriores — ejecutable
  liviano, sin runtime pesado, viable en el hardware disponible en el taller.

## Resultado

El sistema fue terminado y entregado. El equipo de la herrería puede generar
presupuestos completos sin depender del responsable de producción, con cálculos
consistentes y documentos listos para presentar al cliente.