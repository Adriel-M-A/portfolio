---
title: "Sistema de Reportes de Cooperativas"
description: "Herramienta de escritorio en Python que automatiza la generación de reportes mensuales a partir de datos de 32 cooperativas eléctricas de la provincia del Chubut."
tecnologias: ["Python", "Excel", "Macros", "Automatización de datos"]
github: "privado"
cover: "./cover-reporte-cooperativas.png"
imagenes:
  - "./screenshot-1.png"
  - "./screenshot-2.png"
  - "./screenshot-3.png"
---

## Sobre el proyecto

Proyecto solicitado por el directorio del ENRE (Ente Regulador de Servicios de la Provincia de Chubut). Cada mes, las aproximadamente 32 cooperativas eléctricas de la provincia envían una carpeta con múltiples archivos CSV. Antes de este sistema, el proceso era completamente manual: un operador abría cada carpeta, buscaba los datos de interés y los volcaba a mano en un Excel. El proceso era lento, propenso a errores y dependía del criterio de quien lo hacía.

El programa redujo ese proceso a segundos. El usuario selecciona la carpeta raíz que contiene todas las carpetas de las cooperativas, y el sistema genera automáticamente todo lo necesario.

## Características principales

- Procesamiento batch de todas las carpetas de cooperativas desde una única selección de directorio raíz
- Generación de un archivo Excel principal con macros, tablas comparativas y gráficos de barras
- Diagramas de Venn individuales por cooperativa para visualizar el estado de sus datos
- Opción de generar un segundo Excel comparativo entre el mes actual y el mes anterior
- Los archivos generados pasan por los asistentes del directorio para validación antes de llegar al jefe del ente

## Desafíos técnicos

El mayor desafío fue la inconsistencia estructural de los datos. Si bien todas las cooperativas debían seguir un formato común, las nomenclaturas de los parámetros cambiaban cada tres o cuatro meses aproximadamente. Además, no todas las cooperativas enviaban sus datos en tiempo y forma, o los enviaban desactualizados. El sistema tuvo que contemplar todos estos casos para no fallar ni generar reportes incompletos de forma silenciosa.

## Estado

Proyecto en producción — desarrollado y entregado durante mi pasantía en el ENRE. Repositorio privado.
