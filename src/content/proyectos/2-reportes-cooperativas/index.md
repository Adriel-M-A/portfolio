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
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
---

## Resumen

Herramienta de escritorio desarrollada durante mi pasantía en el ENRE para
automatizar el procesamiento mensual de datos operativos de las 32 cooperativas
eléctricas de la provincia del Chubut. Lo que antes era un proceso manual de
varios días pasó a resolverse en segundos, con reportes listos para análisis
directo por parte del director del organismo.

## El problema

Cada mes, las 32 cooperativas envían carpetas con archivos CSV y Excel que
contienen sus registros operativos. El personal del ENRE abría cada archivo
manualmente, buscaba los datos relevantes y los transcribía a mano en planillas
consolidadas — un proceso que llevaba días, era propenso a errores de
transcripción y dependía del criterio informal de quien lo hacía.

El problema se agravaba por la inconsistencia de los datos recibidos: cada
cooperativa enviaba sus archivos con estructuras ligeramente distintas, columnas
renombradas, celdas vacías o valores en formatos inesperados. No había garantía
de que lo que llegaba este mes tuviera la misma forma que el mes anterior.

## La solución

Desarrollé una aplicación de escritorio que toma la carpeta raíz con todos los
archivos de las cooperativas y los procesa en lote de forma automática. El sistema
extrae, valida y consolida los datos, y genera un libro Excel maestro con tablas
comparativas, gráficos y diagramas de Venn individuales por cooperativa — listo
para que el director analice el estado del servicio eléctrico provincial sin
intervención manual.

## Características

- Procesamiento batch: se selecciona un único directorio raíz y el sistema
  recorre toda la estructura automáticamente.
- Consolidación en un Excel maestro con macros, tablas comparativas y gráficos
  integrados.
- Diagramas de Venn por cooperativa para visualizar el nivel de cumplimiento y
  consistencia de los datos presentados.
- Reportes comparativos intermensuales para seguimiento evolutivo.
- Sistema de alertas ante datos faltantes, cooperativas fuera de término o
  archivos con formato inesperado.

## El desafío técnico central

La parte más compleja fue la extracción y normalización de los datos. Los archivos
que llegaban de las cooperativas no seguían un estándar fijo: una columna podía
llamarse `"Energía (kWh)"` en un archivo y `"energia_kwh"` en otro; un valor podía
estar presente, vacío, en texto en lugar de número, o directamente ausente.

Tuve que construir un parser que manejara todas esas variantes posibles: mapear
columnas equivalentes por nombre o posición, detectar y registrar cada anomalía
sin interrumpir el procesamiento del resto, y asegurarme de que ningún dato
corrupto o faltante se filtrara silenciosamente hacia los reportes consolidados.
Cada cooperativa con problemas queda registrada con su error específico para que
el operador pueda revisarla por separado.

## Arquitectura

- **Lenguaje**: Python, utilizando librerías especializadas para el procesamiento
  y generación de archivos Excel.
- **Interfaz**: Flet (basado en Flutter), que permitió construir una GUI moderna
  y portable sin depender de frameworks pesados.
- **Distribución**: Empaquetado como ejecutable para Windows, sin requerir que
  el usuario tenga Python instalado.

## Resultado

El procesamiento mensual que antes ocupaba días de trabajo manual pasó a
ejecutarse en segundos. El director del ENRE puede analizar el estado de las 32
cooperativas de forma inmediata cada mes, con reportes consistentes y sin riesgo
de errores de transcripción.