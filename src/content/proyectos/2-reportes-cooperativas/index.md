---
title: "Sistema de Reportes de Cooperativas"
description: "Herramienta de escritorio en Python que automatiza la generación de reportes mensuales a partir de datos de 32 cooperativas eléctricas de la provincia del Chubut."
tecnologias:
  frontend:
    - "Flet"
  backend:
    - "Python"
  herramientas:
    - "Excel"
    - "Macros"
github: "privado"
demo: ""
cover: "./cover.webp"
coverAlt: "Interfaz de la aplicación de reportes mensuales de cooperativas eléctricas"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
imagenesAlt:
  - "Pantalla de carga y selección de archivos y carpetas de cooperativas"
  - "Visualización de progreso del procesamiento por lote y logs de validación"
  - "Ejemplo de reporte consolidado final generado en formato Excel con gráficos automáticos"
categoria: "Escritorio"
---

## Resumen

Herramienta de escritorio desarrollada en el **EPRESP** (Ente Regulador de Servicios Públicos de la Provincia del Chubut) para automatizar el procesamiento y la validación mensual de archivos CSV y Excel provenientes de las 32 cooperativas eléctricas provinciales (miles de registros por archivo). Lo que antes requería varios días de trabajo manual pasó a ejecutarse en menos de 1 minuto, generando un reporte maestro listo para auditoría directiva.

## El problema

Cada mes, las 32 cooperativas envían carpetas con archivos CSV y Excel que contienen sus registros operativos. El personal del EPRESP abría cada archivo manualmente, buscaba los datos relevantes y los transcribía a mano en planillas consolidadas, un proceso que llevaba días, era propenso a errores de transcripción y dependía del criterio informal de quien lo hacía.

El problema se agravaba por la inconsistencia de los datos recibidos: cada cooperativa enviaba sus archivos con estructuras ligeramente distintas, columnas renombradas, celdas vacías o valores en formatos inesperados. No había garantía de que lo que llegaba este mes tuviera la misma forma que el mes anterior.

## La solución

Desarrollé una aplicación de escritorio que toma la carpeta raíz con todos los archivos de las cooperativas y los procesa en lote de forma automática. El sistema extrae, valida y consolida los datos, y genera un libro Excel maestro con tablas comparativas, gráficos y diagramas de Venn individuales por cooperativa, todo listo para que el directorio analice el estado del servicio eléctrico provincial sin intervención manual.

## Características

- Procesamiento batch: se selecciona un único directorio raíz y el sistema recorre toda la estructura automáticamente.
- Consolidación en un Excel maestro con macros, tablas comparativas y gráficos integrados.
- Diagramas de Venn por cooperativa para visualizar el nivel de cumplimiento y consistencia de los datos presentados.
- Reportes comparativos intermensuales para seguimiento evolutivo.
- Sistema de alertas ante datos faltantes, cooperativas fuera de término o archivos con formato inesperado.

## El desafío técnico central

La parte más compleja fue la extracción y normalización de los datos. Los archivos que llegaban de las cooperativas no seguían un estándar fijo: una columna podía llamarse `"Energía (kWh)"` en un archivo y `"energia_kwh"` en otro; un valor podía estar presente, vacío, en texto en lugar de número, o directamente ausente.

Construí un parser tolerante a fallos que mapea columnas equivalentes por nombre o posición, detecta y registra cada anomalía sin interrumpir el procesamiento del lote completo y garantiza que ningún dato corrupto o faltante se filtre silenciosamente hacia los reportes consolidados. Cada cooperativa con inconsistencias queda detallada en el registro de auditoría para su revisión puntual.

## Arquitectura

- **Lenguaje y Procesamiento:** Python, utilizando librerías especializadas para lectura tolerante de CSV/Excel, normalización de datos y generación programática de libros complejos con fórmulas y gráficos.
- **Interfaz Gráfica:** Flet (basado en Flutter), que permitió construir una GUI de escritorio clara y portable sin depender de runtimes pesados.
- **Distribución:** Empaquetado como ejecutable autónomo para Windows, sin requerir instalación previa de Python en los puestos de trabajo.

## Resultado

El procesamiento mensual que antes ocupaba varios días de trabajo manual pasó a ejecutarse en menos de 1 minuto. El directorio del EPRESP puede auditar el estado de las 32 cooperativas de forma inmediata cada mes, con reportes consistentes y sin riesgo de errores de transcripción.
