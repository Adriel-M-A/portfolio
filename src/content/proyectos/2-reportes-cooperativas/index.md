---
title: "Sistema de Reportes de Cooperativas"
description: "Herramienta de escritorio en Python que automatiza la generación de reportes mensuales a partir de datos de 32 cooperativas eléctricas de la provincia del Chubut."
tecnologias: ["Python", "Flet", "Excel", "Macros"]
github: "privado"
demo: ""
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
---

## Resumen

Herramienta interna desarrollada para automatizar la extracción de datos y la consolidación de reportes mensuales para la auditoría de los servicios eléctricos provinciales.

## Problema

Cada mes, 32 cooperativas eléctricas de la provincia del Chubut envían carpetas con múltiples archivos CSV que contienen sus registros operativos. El personal del ENRE abría manualmente cada archivo, buscaba los datos de interés y los transcribía a mano en planillas Excel consolidadas. Este proceso tomaba días de trabajo repetitivo, era altamente propenso a errores humanos y dependía del criterio informal de los operadores administrativos.

## Solución

Se desarrolló una aplicación de escritorio que procesa en lote (batch) la carpeta raíz de las cooperativas. El sistema lee y valida automáticamente toda la estructura de archivos en segundos, procesando la información y exportándola a plantillas Excel estructuradas con macros integradas, listos para su validación formal.

## Características principales

* Procesamiento batch masivo mediante la selección de un único directorio raíz.
* Consolidación automática de datos en un Excel maestro con macros, tablas comparativas y gráficos integrados.
* Generación de diagramas de Venn individuales por cooperativa para evaluar visualmente el nivel de cumplimiento y la consistencia de los datos presentados.
* Opción de generación automática de reportes comparativos evolutivos intermensuales.
* Sistema de alertas integradas ante datos faltantes o de cooperativas fuera de término.

## Arquitectura y tecnologías

El software fue diseñado para correr de forma ágil y portable en sistemas operativos Windows dentro del ente:
* **Lenguaje**: Python por su alta eficiencia y librerías especializadas en manejo de datos (pandas, openpyxl).
* **Interfaz de Usuario**: Flet (basado en Flutter), brindando una GUI moderna, responsiva y simple de utilizar.
* **Salida**: Generación dinámica de libros de Microsoft Excel optimizados mediante scripts y macros para análisis de dirección.

## Desafíos técnicos

* **Inconsistencia Estructural**: Las nomenclaturas y formatos provistos por las cooperativas cambiaban con frecuencia. Se diseñó un parser adaptativo capaz de mapear columnas equivalentes y notificar desviaciones al operador sin detener el procesamiento.
* **Control de Errores Silenciosos**: Asegurar que las cooperativas con reportes vacíos, incompletos o con formatos corruptos fuesen reportadas individualmente, evitando que se mezclaran valores basura en los reportes globales consolidados.

## Resultado

El programa redujo el tiempo de procesamiento manual mensual de varios días a tan solo unos segundos. Esto permitió al directorio del ENRE analizar las métricas en tiempo real de forma precisa, eliminando por completo el error humano en la transcripción de datos.

## Estado

Proyecto terminado.
