+++
title = 'SIG Vial PBA'
date = '2026-06-18'
lastmod = '2026-08-25'
weight = 20
draft = false
tags = ['GIS', 'Python', 'Leaflet', 'Supabase', 'PWA', 'QGIS', 'vialidad']
description = 'Mapa web y aplicación móvil de la red vial de la Provincia de Buenos Aires, para la Dirección de Vialidad (DVBA).'
+++

Mapa web y aplicación móvil de la red vial de la Provincia de Buenos Aires, desarrollado para la
División Técnica de la Zona VI Saladillo de la Dirección de Vialidad (DVBA). Muestra rutas
provinciales, caminos secundarios, partidos y límites administrativos, y sobre ese mapa se dibujan
los relevamientos de campo y las tareas ejecutadas por las cuadrillas, con foto georreferenciada y
sello institucional.

## Funcionalidad

- Filtros por número de ruta, por partido (caminos) y por rango de fechas o tipo (tareas)
- Ficha oficial de cada ruta provincial al estilo de una hoja DNV: longitud, tipo de pavimento, ancho de calzada y banquinas
- Progresivas calibradas con mojones oficiales — al pasar el cursor sobre la traza se ve la progresiva exacta en tiempo real
- Aplicación móvil (PWA instalable) con dos modos: básico (foto + GPS en un toque, para operarios de campo) y avanzado (formulario completo por categoría, estado y sub-atributos). Funciona sin conexión y sincroniza al recuperar señal
- Informes gerenciales exportables a PDF y CSV con el formato oficial del Informe Mensual de DVBA
- **Plan Operativo** (portal complementario): permite al Jefe de Zona asignar tareas a capataces, cerrando el ciclo relevamiento → asignación → ejecución → aprobación en oficina

## Stack

- Frontend en HTML + JavaScript vanilla, sin frameworks ni build — Leaflet.js como motor de mapas
- Trazas de rutas calibradas en QGIS y exportadas a bundles JavaScript livianos junto con los mojones oficiales
- Datos geográficos base en GeoJSON (partidos, caminos, red vial secundaria), generados desde GPKG de fuente institucional
- Backend en Supabase (PostgreSQL + Auth + Storage), con Row-Level Security zonal por rol y un trigger que asigna automáticamente la zona vial correcta según el partido donde se carga cada registro
- Guía de usuario en línea con MkDocs Material
- Hosting en GitHub Pages

## Alcance y estado actual

En producción interna para Zona VI (8 partidos, 15 rutas provinciales y ~100 caminos secundarios), con las zonas IV Junín y V Chivilcoy en fase de escalado piloto. La estructura de datos ya soporta las 12 zonas viales de la Provincia y los 135 partidos bonaerenses, y modela el organigrama real de la DVBA con 10 roles operativos (técnico, capataz, jefes de división, jefe de zona, gerencia, admin) sobre un ciclo de trabajo cerrado.

El mapa institucional es de consulta pública, sin login; cargar relevamientos, ejecutar tareas o generar reportes requiere usuario asignado. Lo desarrolla y mantiene el Ing. Luciano Lamaita como parte de la División Técnica de la zona — una herramienta interna hecha desde el propio sector operativo, con asistentes de IA como copilotos de programación, para facilitar el registro y la trazabilidad del trabajo diario.

## Links

- [Repositorio](https://github.com/lemeit/DVBA)
- [Sitio en vivo](https://lemeit.github.io/DVBA/)