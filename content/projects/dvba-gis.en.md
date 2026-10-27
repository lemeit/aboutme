+++
date = "2026-06-18"
summary = "A web map and mobile application for the Buenos Aires provincial road network, developed for the Dirección de Vialidad (DVBA)."
title = "SIG Vial PBA"
description = "A web map and mobile application for the Buenos Aires provincial road network, developed for the Dirección de Vialidad (DVBA)."
weight = 20
lastmod = "2026-10-27"
draft = false
+++

SIG Vial PBA integrates territorial information, field surveys and operational task tracking for the Dirección de Vialidad de la Provincia de Buenos Aires. It began in Departmental Zone VI, Saladillo, with pilot use in other departmental zones.

## From the map to the field

The platform combines provincial routes, secondary roads and district boundaries with georeferenced surveys and photographs. Filters support exploration by route, district, task and date. Route records include length, surface, width and shoulders, with chainage calibrated against official milestones.

A mobile progressive web app supports fieldwork, including basic offline use, photographs and GPS locations. An operational workflow connects task assignment, execution and approval. PDF and CSV outputs support reporting.

## Implementation

The map uses Leaflet, JavaScript and data prepared in QGIS from GeoJSON and GeoPackage sources. Supabase provides PostgreSQL storage, authentication, file storage and row-level access policies. Roles and departmental zones determine access to operational records.

The public map can be viewed without signing in; operational functions require authentication. AI-assisted coding supports development, with implementation decisions and review retained by the author.

## Recognition

The work **SIG Vial PBA: Plataforma web integral para el relevamiento y gestión vial provincial** received First Prize in the 41st Competition on Road Topics in October 2026. [Institutional reference](https://www.vialidad.gba.gov.ar/noticias/2572).

[Open platform](https://lemeit.github.io/DVBA/) · [Source code](https://github.com/lemeit/DVBA)

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/dvba-gis/).

