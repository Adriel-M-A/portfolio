---

title: "Techno Fuegos System"
description: "Aplicación de escritorio desarrollada para automatizar la generación de presupuestos en una empresa de herrería artesanal, permitiendo calcular costos, emitir cotizaciones profesionales y reducir la dependencia del conocimiento técnico del taller."
tecnologias:
  [
    "Tauri",
    "Rust",
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "SQLite",
    "Zustand",
    "React Hook Form",
    "Zod",
    "jsPDF",
  ]
github: ""
demo: ""
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
---

## Sobre el proyecto

Techno Fuegos System es una aplicación de escritorio desarrollada para una empresa dedicada a la fabricación artesanal de fogoneros, parrillas, hornos y estructuras metálicas personalizadas.

El proyecto nace a partir de una necesidad operativa concreta: el proceso de presupuestación dependía completamente de la persona encargada de la producción, quien concentraba el conocimiento sobre costos de materiales, tiempos de fabricación y criterios de cálculo. Esto generaba interrupciones constantes en el taller y retrasaba la entrega de cotizaciones a potenciales clientes.

El objetivo principal fue transformar ese conocimiento técnico en un sistema capaz de generar presupuestos precisos y consistentes, permitiendo que cualquier operador administrativo pueda emitir cotizaciones sin depender directamente del fabricante.

## Problema

La elaboración de presupuestos se realizaba de forma manual y requería la participación constante del responsable de producción.

Cada nueva consulta comercial implicaba revisar materiales, estimar costos y calcular tiempos de trabajo, generando demoras, interrupciones en las tareas del taller y una fuerte dependencia de una única persona para completar el proceso de venta.

## Solución

Se diseñó una aplicación de escritorio completamente offline que centraliza la información necesaria para la creación de presupuestos.

El sistema permite gestionar insumos, costos, plantillas reutilizables, vendedores y configuraciones comerciales, automatizando el cálculo de precios y la generación de documentos PDF listos para enviar o imprimir.

Además, incorpora mecanismos de respaldo, restauración y recuperación automática de borradores para proteger la información ante fallos o cortes eléctricos.

## Características principales

* Generación de presupuestos mediante plantillas reutilizables
* Gestión de clientes y cotizaciones
* Cálculo automático de materiales y mano de obra
* Administración de insumos y costos parametrizados
* Gestión de vendedores y responsables comerciales
* Generación de presupuestos PDF profesionales
* Configuración dinámica de datos corporativos y condiciones comerciales
* Vencimiento automático de presupuestos
* Sistema de guardado automático de borradores
* Copias de seguridad e importación de bases de datos
* Manual de usuario integrado dentro de la aplicación
* Arquitectura completamente offline utilizando SQLite

## Desafíos técnicos

El principal desafío fue trasladar conocimiento operativo que existía únicamente en la experiencia del fabricante hacia un conjunto de reglas de negocio configurables y reutilizables dentro del sistema.

También se diseñó una estrategia de recuperación automática de formularios para minimizar la pérdida de información frente a cortes de energía, una situación frecuente en entornos de producción con maquinaria pesada.

A nivel de arquitectura, se buscó mantener una aplicación rápida, simple de utilizar y preparada para incorporar nuevas reglas de cálculo, plantillas y configuraciones sin afectar la experiencia diaria de los usuarios.

## Estado

Proyecto en desarrollo.
