---
title: "Sistema de Trazabilidad de Expedientes"
description: "Aplicación interna desarrollada para el ENRE Chubut que permite controlar la ubicación, circulación y custodia de expedientes físicos dentro de la institución."
tecnologias:
  frontend:
    - "C#",
    - "WinForms"
  backend:
    - "PostgreSQL"
  herramientas:
    - "Visual Studio"
    - "Windows"
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

Proyecto desarrollado durante mi pasantía en el ENRE (Ente Regulador de Servicios Públicos de la Provincia del Chubut) para la gestión y seguimiento de documentación y expedientes internos.

## Problema

La institución trabajaba diariamente con expedientes y documentación física que circulaba constantemente entre distintas áreas (administración, asesores legales, contadores e ingenieros). Al no contar con una herramienta centralizada, existía una falta de trazabilidad crítica: no se sabía con precisión la ubicación de los expedientes, quién los tenía en custodia o los tiempos de permanencia, dependiendo de búsquedas manuales y consultas informales.

## Solución

Se diseñó e implementó un sistema cliente-servidor que centraliza la circulación de expedientes. La plataforma registra cada solicitud, entrega, transferencia intermedia y devolución a administración, permitiendo conocer en tiempo real la ubicación exacta y el historial de trazabilidad completo de cada documento físico.

## Características principales

* Sistema de autenticación con permisos diferenciados según el rol (administrador / usuario común).
* Gestión centralizada de expedientes físicos y su ubicación en tiempo real.
* Solicitud de expedientes por parte del personal y validación/entrega desde administración.
* Registro detallado de transferencias de custodia entre empleados.
* Historial de trazabilidad para consultar todo el recorrido histórico del expediente.
* Restricciones de seguridad para acciones críticas, exclusivas de administradores.

## Arquitectura y tecnologías

La aplicación fue desarrollada bajo una arquitectura cliente-servidor clásica en .NET:
* **Lenguaje y Entorno**: C# utilizando Windows Forms en Visual Studio para una interfaz de escritorio fluida y familiar para los operadores.
* **Base de Datos**: PostgreSQL instalada en un servidor local dentro de la red privada de la institución, asegurando la privacidad de los datos.

## Desafíos técnicos

* **Consistencia en la trazabilidad**: Diseñar un modelo de datos robusto que represente las transiciones de custodia física en tiempo real, garantizando que el expediente no pudiera estar en dos lugares a la vez.
* **Seguridad y Permisos**: Establecer una jerarquía estricta de acciones para que los empleados comunes solo realicen solicitudes y pases autorizados, delegando los registros críticos a la administración.
* **Despliegue Local**: Configurar el acceso concurrente seguro en la red local interna sobre el servidor local PostgreSQL de la institución.

## Resultado

El sistema fue terminado y desplegado con éxito en el ENRE Chubut, logrando eliminar por completo las pérdidas de documentación física, automatizando el control de custodia y acelerando los procesos de búsqueda interna.

## Estado

Proyecto terminado.
