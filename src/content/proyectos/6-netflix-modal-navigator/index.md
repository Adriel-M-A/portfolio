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
categoria: "Web / Extensiones"
---

## El problema

Al abrir el modal de detalles de un título en Netflix, la sección de títulos similares muestra tarjetas de recomendación. Sin embargo, no existe una forma nativa de abrir esas recomendaciones dentro del propio modal: hacer clic en la tarjeta reproduce el video de inmediato, y el único botón visible añade el contenido a la lista sin permitir su exploración.

Navegar entre recomendaciones sin salir del flujo requería cerrar el modal, buscar el título manualmente o tolerar que el reproductor se iniciara solo en segundo plano, generando fricción constante al explorar el catálogo.

## La solución

Desarrollé una extensión para Google Chrome que observa el DOM de Netflix en tiempo real y detecta la apertura del modal de detalles. Al identificar las tarjetas de recomendación en esa vista, inyecta un botón de información que dispara la carga del nuevo título sin salir del flujo de navegación.

El botón interactúa con el enrutamiento interno de la SPA de Netflix manipulando la History API del navegador para que React actualice el modal de detalles de forma nativa, sin forzar recargas de página ni reproducir video no solicitado.

## Características

- Botón de información inyectado en cada tarjeta de recomendación dentro del modal de detalles.
- Navegación fluida entre títulos similares sin reproducción automática ni recargas de página.
- Integración visual nativa adoptando las clases y estilos de la interfaz de Netflix.
- Tooltip flotante personalizado que replica la identidad visual de la plataforma.
- Aislamiento de estilos mediante selectores CSS con pseudoclase :has() para evitar efectos secundarios en otras vistas.
- Ejecución eficiente con MutationObserver y debounce de 100 milisegundos para no sobrecargar el hilo principal durante el desplazamiento.

## Arquitectura y decisiones técnicas

El reto principal fue integrarse limpiamente con la arquitectura SPA de Netflix sin alterar el comportamiento general de la plataforma:

- **Navegación nativa vía History API:** Al pulsar el botón inyectado, el script ejecuta `history.pushState` actualizando el parámetro de navegación interno (`jbv`) y despacha un evento `PopStateEvent` sintético. El enrutador de React de Netflix interpreta la acción como una navegación legítima y monta el nuevo modal de forma orgánica.
- **Optimización del observador del DOM:** Durante el scroll del catálogo, Netflix genera un volumen muy alto de mutaciones por segundo. La extensión descarta tarjetas externas mediante selectores CSS directos y agrupa mutaciones con una pausa de 100 milisegundos, ejecutando la inyección únicamente cuando el DOM se estabiliza.
- **Gestión reactiva de tooltips:** Para evitar superposiciones con los tooltips nativos de la plataforma, apliqué reglas CSS reactivas al foco e interacción del cursor sobre el botón inyectado, eliminando la necesidad de cálculos en JavaScript.
- **Ciclo de vida y memoria:** Construida bajo Manifest V3 sin servicios en segundo plano ni dependencias externas. La existencia de los elementos inyectados se acopla al ciclo de vida del modal en el DOM, permitiendo que el recolector de basura del navegador los libere automáticamente al cerrar la vista.
