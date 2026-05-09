---
title: "Sistema de Trazabilidad de Expedientes"
description: "Aplicación interna desarrollada para el ENRE Chubut que permite controlar la ubicación, circulación y custodia de expedientes físicos dentro de la institución."
tecnologias:
  ["C#", "Visual Studio", "PostgreSQL", "Windows", "cliente-servidor"]
github: "privado"
demo: ""
imagenes:
  - "./screenshot-1.png"
  - "./screenshot-2.png"
  - "./screenshot-3.png"
  - "./screenshot-4.png"
---

## Sobre el proyecto

Proyecto desarrollado durante mi pasantía en el ENRE (Ente Regulador de Servicios Públicos de la Provincia del Chubut). La institución trabajaba diariamente con expedientes y documentación física que circulaba constantemente entre distintas áreas, incluyendo administración, abogados, contadores e ingenieros.

El principal problema era la falta de trazabilidad. Muchas veces no se sabía con precisión dónde estaba un expediente, quién lo tenía en ese momento o desde cuándo se encontraba bajo la custodia de un determinado empleado. El seguimiento dependía de consultas manuales entre sectores y del conocimiento informal del personal administrativo.

El sistema permitió centralizar toda la circulación de expedientes en una única plataforma interna. Cada movimiento quedaba registrado: solicitudes, entregas, transferencias entre empleados y devoluciones a administración. De esta forma, era posible conocer en tiempo real la ubicación exacta y el historial completo de cada expediente dentro de la institución.

## Características principales

- Sistema de autenticación con permisos diferenciados según el tipo de usuario
- Gestión centralizada de expedientes físicos y su ubicación actual
- Solicitud de expedientes por parte del personal interno mediante el sistema
- Validación y entrega de expedientes desde el área de administración
- Registro completo de movimientos y transferencias entre empleados
- Historial de trazabilidad para consultar el recorrido completo de cada expediente
- Control de custodia, indicando qué usuario posee actualmente cada documento
- Restricción de acciones críticas únicamente para usuarios administrativos
- Posibilidad de registrar modificaciones internas sobre expedientes según permisos asignados
- Base de datos PostgreSQL alojada en un servidor local dentro de la institución

## Desafíos técnicos

El principal desafío fue diseñar una lógica de trazabilidad confiable para expedientes físicos que circulaban constantemente entre distintas áreas y usuarios. El sistema debía garantizar que cada movimiento quedara correctamente registrado sin perder consistencia en la cadena de custodia.

También fue necesario implementar un modelo de permisos que diferenciara claramente las capacidades del personal administrativo respecto de los usuarios comunes, evitando modificaciones o movimientos inválidos dentro del flujo operativo de la institución.

Otro desafío importante fue estructurar la arquitectura cliente-servidor utilizando PostgreSQL en una red local interna, asegurando acceso simultáneo para múltiples usuarios sin exponer el sistema fuera del establecimiento.

## Estado

Proyecto en producción — desarrollado y entregado durante mi pasantía en el ENRE. Repositorio privado.
