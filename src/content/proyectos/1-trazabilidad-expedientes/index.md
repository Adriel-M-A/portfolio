---
title: "Sistema de Trazabilidad de Expedientes"
description: "Aplicación interna en red desarrollada para el EPRESP Chubut que permite controlar la ubicación, circulación y custodia de expedientes físicos dentro de la institución."
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
coverAlt: "Interfaz principal de control del Sistema de Trazabilidad de Expedientes"
imagenes:
  - "./screenshot-1.webp"
  - "./screenshot-2.webp"
  - "./screenshot-3.webp"
  - "./screenshot-4.webp"
  - "./screenshot-5.webp"
imagenesAlt:
  - "Listado general de expedientes con filtros por estado actual y área en custodia"
  - "Bandeja de expedientes asignados en poder del usuario autenticado"
  - "Vista detallada de un expediente con su historial completo de movimientos"
  - "Formulario para registrar una nueva transferencia interna de expediente entre sectores"
  - "Panel de administración para la gestión de personal, sectores y roles del sistema"
categoria: "Escritorio"
---

## Resumen

Sistema de escritorio cliente-servidor desarrollado en el **EPRESP** (Ente Regulador de Servicios Públicos de la Provincia del Chubut) para centralizar el control y la auditoría de los expedientes físicos que circulaban entre las distintas áreas del organismo. Utilizado a diario por más de 30 profesionales de administración, asesoría legal, contaduría e ingeniería.

## El problema

El EPRESP trabajaba a diario con documentación física crítica que pasaba constantemente de mano en mano entre áreas. Sin una herramienta centralizada, no existía certeza sobre dónde estaba un expediente en un momento dado, quién lo tenía bajo custodia ni cuánto tiempo llevaba en ese sector. La única forma de rastrearlo era recorriendo las oficinas escritorio por escritorio.

## La solución

Relevé los requerimientos directamente con las áreas legales, contables y administrativas, documenté los flujos de trabajo y diseñé un sistema que registra cada movimiento de un expediente: desde su alta y solicitud hasta su devolución final a administración, auditando cada transferencia intermedia. Cualquier profesional autorizado puede consultar en tiempo real la ubicación actual de un documento y su historial completo de pases.

El sistema implementa control de acceso basado en roles: los usuarios operativos pueden solicitar expedientes y registrar transferencias hacia otros sectores, mientras que el área de administración conserva el control exclusivo sobre altas, entregas iniciales, devoluciones definitivas y operaciones críticas.

## Características

- Registro completo del ciclo de vida de cada expediente: alta, solicitud, entrega, transferencias entre sectores y devolución.
- Trazabilidad y auditoría en tiempo real: ubicación exacta actual e historial cronológico de cada documento.
- Autenticación con permisos diferenciados por rol (administrador / operador por área).
- Restricciones de integridad para evitar pases duplicados o movimientos sobre expedientes cerrados.
- Interfaz de escritorio rápida y familiar para usuarios administrativos y técnicos, construida en Windows Forms.

## Arquitectura

Aplicación de escritorio estructurada bajo **arquitectura en capas** (presentación, lógica de negocio y persistencia de datos) operando sobre la red local privada del organismo:

- **Capa de Presentación:** C# (.NET) con Windows Forms, priorizando velocidad de respuesta por teclado y mínima curva de aprendizaje para el personal administrativo.
- **Capa de Lógica y Persistencia:** Separación estricta entre las validaciones de negocio (reglas de custodia y estados de transferencia) y el acceso a datos mediante consultas parametrizadas.
- **Base de Datos:** Modelo relacional diseñado en **PostgreSQL**, alojado en un servidor local dentro de la red interna del EPRESP sin exposición a internet.
- **Despliegue y Concurrencia:** Configuré el entorno de red y el acceso concurrente de múltiples puestos de trabajo simultáneos sobre el servidor PostgreSQL local, garantizando consistencia transaccional en cada pase de expediente.

## Resultado

El sistema fue desplegado en producción en todos los sectores del EPRESP. Eliminó las búsquedas manuales de documentación física, redujo los tiempos de localización a segundos y otorgó a la dirección y a la mesa de entradas visibilidad completa sobre el flujo interno de expedientes.
