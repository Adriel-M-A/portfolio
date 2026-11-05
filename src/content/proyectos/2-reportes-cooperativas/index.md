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

## El problema

Cada mes, las 32 cooperativas envían carpetas con archivos CSV y Excel que contienen sus registros operativos. El personal del EPRESP abría cada archivo manualmente, buscaba los datos relevantes y los transcribía a mano en planillas consolidadas, un proceso que llevaba días, era propenso a errores de transcripción y dependía del criterio informal de quien lo hacía.

El problema se agravaba por la inconsistencia de los datos recibidos, ya que cada cooperativa enviaba sus archivos con estructuras ligeramente distintas, columnas renombradas, celdas vacías o valores en formatos inesperados. No había garantía de que lo que llegaba este mes tuviera la misma forma que el mes anterior.

## La solución

Desarrollé una aplicación de escritorio que toma la carpeta raíz con todos los archivos de las cooperativas y los procesa en lote de forma automática. El sistema extrae, valida y consolida los datos, generando un libro Excel maestro con tablas comparativas, gráficos y diagramas de Venn individuales por cooperativa, listo para que el directorio analice el estado del servicio eléctrico provincial sin intervención manual.

## Características

- Procesamiento en lote a partir de un único directorio raíz que el sistema recorre de forma automática.
- Consolidación en un libro Excel maestro con macros, tablas comparativas y gráficos integrados.
- Diagramas de Venn individuales por cooperativa para visualizar el nivel de cumplimiento y consistencia de los datos presentados.
- Reportes comparativos intermensuales para seguimiento evolutivo.
- Alertas inmediatas ante datos faltantes, cooperativas fuera de término o archivos con formato inesperado.

## Arquitectura y decisiones técnicas

El desafío técnico principal fue la normalización de datos heterogéneos. Los archivos recibidos no seguían un estándar fijo, presentando discrepancias en los nombres de columnas (como `"Energía (kWh)"` frente a `"energia_kwh"`), tipos de datos mezclados o celdas ausentes:

- **Parser tolerante a fallos:** Diseñado en Python para mapear columnas equivalentes por nombre o posición relativa, aislando registros anómalos en un log de auditoría sin interrumpir el procesamiento del lote completo.
- **Interfaz gráfica de escritorio:** Construida con Flet para ofrecer una interfaz visual clara, reactiva y portable sin runtimes pesados.
- **Distribución autónoma:** Empaquetado como ejecutable independiente para Windows, listo para operar en los puestos del organismo sin requerir entornos de desarrollo locales.
- **Impacto operativo:** La consolidación mensual se redujo de varios días de transcripción manual a menos de 1 minuto, garantizando consistencia total en los reportes elevados al directorio.
