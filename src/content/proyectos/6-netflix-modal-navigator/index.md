---
title: "Netflix Modal Navigator"
description: "Extensión de Chrome que soluciona la navegación entre recomendaciones del modal de detalles de Netflix, inyectando un botón nativo que carga títulos similares sin disparar la reproducción automática."
tecnologias:
  frontend:
    - "JavaScript"
    - "CSS"
  herramientas:
    - "Chrome Extension (Manifest V3)"
github: "https://github.com/Adriel-M-A/netflix-modal-navigator"
demo: ""
cover: "./cover.webp"
coverAlt: "Botón de información inyectado en las tarjetas de recomendación del modal de detalles de Netflix"
tipo: "Personal"
---

## Resumen

Extensión para Google Chrome que resuelve un problema concreto de usabilidad en Netflix:
la imposibilidad de navegar entre recomendaciones del modal de detalles sin abandonar
el título actual o soportar la reproducción automática. La extensión inyecta un botón
de información en cada tarjeta de recomendación que carga el título directamente
en el mismo modal, sin recargas y sin video no solicitado.

## El problema

Al abrir el modal de detalles de un título en Netflix, la sección "Más títulos
similares a este" muestra tarjetas de recomendación. El problema es que no hay
ninguna forma de abrir esas recomendaciones en el propio modal: hacer clic en la
tarjeta reproduce el video de inmediato, y el único botón disponible "Mi Lista"
no ayuda a explorar el contenido.

Navegar entre recomendaciones sin salir del flujo requería cerrar el modal,
buscar el título manualmente o tolerar que el reproductor se iniciara solo en segundo
plano. Un problema pequeño pero constante para cualquier usuario que explore el
catálogo con regularidad.

## La solución

Desarrollé una extensión que observa el DOM de Netflix en tiempo real y detecta
cuándo el usuario abre un modal de detalles. Al identificar las tarjetas de
recomendación dentro de esa vista, inyecta de forma quirúrgica un botón de
información que dispara la carga del nuevo modal sin salir del flujo de navegación.

El botón utiliza el enrutamiento interno de la SPA de Netflix manipulando la
History API del navegador para que React actualice el modal de detalles de forma
nativa, sin forzar ninguna recarga de página.

## Características

- Botón de información inyectado en cada tarjeta de recomendación del modal de detalles.
- Navegación entre títulos similares sin reproducción automática ni recargas.
- Integración visual indetectable: el botón hereda las clases y estilos nativos de Netflix.
- Tooltip flotante personalizado que replica la identidad visual de la plataforma.
- Aislamiento preciso mediante CSS `:has()` para que los estilos no afecten otras secciones de la interfaz.
- Sin impacto en el rendimiento: el MutationObserver está debounced a 100ms para no sobrecargar el hilo principal durante el scroll.

## El desafío técnico central

El reto principal fue integrarse con Netflix sin romper nada. La plataforma es
una SPA construida sobre React con un enrutador interno propio, y cualquier
interacción que no pase por ese sistema como un enlace directo o un clic
en un elemento externo provoca comportamientos inesperados: reproducción
no solicitada, recargas completas o simplemente que el modal no se abra.

La solución fue interceptar la navegación a nivel de History API. Al hacer clic
en el botón inyectado, el script ejecuta `history.pushState` para actualizar la
URL con el parámetro interno de Netflix (`jbv`) y despacha un `PopStateEvent`
sintético. El router de React de Netflix lo interpreta como una navegación
legítima y monta el nuevo modal por su cuenta.

El otro problema fue el rendimiento. Netflix hace un uso intensivo del DOM durante
el scroll del catálogo decenas de mutaciones por segundo y un MutationObserver
ingenuo habría degradado los FPS de forma visible. La extensión usa dos optimizaciones:
primero, descarta las tarjetas fuera del modal usando selectores CSS en lugar de
deserializar JSON de los atributos de telemetría; segundo, agrupa mutaciones con
un debounce de 100ms para ejecutar la inyección solo cuando el DOM se estabiliza.

Para evitar tooltips duplicados los de Netflix y los propios apliqué una regla
CSS que oculta el tooltip nativo de forma reactiva cuando el cursor interactúa con
el botón inyectado, sin necesidad de procesamiento en JavaScript.

## Arquitectura

- **Extensión**: Manifest V3 con un content script declarativo. Sin background
  service worker ni comunicación entre procesos.
- **Lógica central**: JavaScript Vanilla. Un único script que configura el
  MutationObserver, gestiona la inyección de botones y maneja la navegación.
- **Estilos**: CSS Vanilla con selectores avanzados (`:has()`) para lograr
  aislamiento preciso sin clases propias que puedan colisionar con Netflix.
- **Ciclo de vida**: Los botones inyectados no se rastrean globalmente. Su
  existencia está acoplada 100% al ciclo de vida del DOM de Netflix, por lo que
  el Garbage Collector del navegador los elimina automáticamente junto con el modal,
  sin fugas de memoria.

## Resultado

La extensión funciona de forma transparente sobre Netflix. El flujo de exploración
de recomendaciones pasó de ser frustrante con videos que se reproducen solos y
saltos de contexto constantes a ser directo: abrir un título similar es un clic,
y el modal lo actualiza sin salir de donde estás.
