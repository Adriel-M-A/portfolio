---
title: "Sistema de Trazabilidad de Expedientes"
description: "Aplicación interna desarrollada para el ENRE Chubut que permite controlar la ubicación, circulación y custodia de expedientes físicos dentro de la institución."
tecnologias:
  frontend:
    - "C#"
    - "WinForms"
  backend:
    - "PostgreSQL"
  herramientas:
    - "Visual Studio"
    - "cliente-servidor"
github: "privado"
demo: ""
cover: "./cover.webp"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
  - "./screenshot-5.webp"
---

## Resumen

Sistema de escritorio cliente-servidor desarrollado durante mi pasantía en el ENRE
(Ente Regulador de Servicios Públicos de la Provincia del Chubut) para centralizar
el control de expedientes físicos que circulaban entre las distintas áreas del organismo.
Utilizado por entre 10 y 30 empleados de diferentes sectores: administración,
asesoría legal, contaduría e ingeniería.

## El problema

El ENRE trabajaba a diario con documentación física que pasaba constantemente de
mano en mano entre áreas. Sin ninguna herramienta centralizada, nadie sabía con
certeza dónde estaba un expediente en un momento dado, quién lo tenía ni cuánto
tiempo llevaba en ese lugar. La única forma de ubicarlo era preguntando de escritorio
en escritorio.

## La solución

Diseñé e implementé un sistema que registra cada movimiento de un expediente:
desde que se solicita hasta que se devuelve a administración, pasando por cada
transferencia intermedia. Cualquier empleado puede ver en tiempo real dónde está
un documento y consultar su historial completo de circulación.

El sistema diferencia dos roles: los usuarios comunes pueden solicitar expedientes
y registrar pases entre compañeros, mientras que administración tiene control total
sobre entregas, devoluciones y acciones críticas.

## Características

- Registro completo del ciclo de vida de cada expediente: solicitud, entrega,
  transferencias y devolución.
- Trazabilidad en tiempo real: ubicación actual y historial de cada documento.
- Sistema de autenticación con roles diferenciados (administrador / usuario).
- Restricciones de seguridad para operaciones críticas, reservadas a administración.
- Interfaz familiar para operadores no técnicos, construida sobre Windows Forms.

## Arquitectura

Aplicación de escritorio con arquitectura cliente-servidor sobre red local privada:

- **Frontend**: C# con Windows Forms. La elección de WinForms fue deliberada:
  los operadores ya conocían el paradigma de escritorio de Windows, lo que redujo
  la curva de adopción al mínimo.
- **Backend / Base de datos**: PostgreSQL en un servidor local dentro de la red
  interna del organismo, sin exposición a internet.
- **Despliegue**: La parte más desafiante del proyecto fue configurar el acceso
  concurrente de múltiples clientes sobre la red institucional, garantizando que
  las operaciones sobre los expedientes fueran consistentes sin importar cuántos
  usuarios estuvieran conectados al mismo tiempo.

## Resultado

El sistema fue desplegado con éxito y adoptado por el personal del ENRE. Eliminó
por completo la dependencia de búsquedas manuales e informales para ubicar
documentación, y le dio a administración visibilidad total sobre la circulación
interna de expedientes por primera vez.