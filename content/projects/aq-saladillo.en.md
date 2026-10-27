+++
date = "2026-08-23"
summary = "School environmental monitoring with PurpleAir and AirGradient sensors: particulate matter, CO₂, NOₓ and real-time air-quality data."
title = "Aire Escolar"
description = "School environmental monitoring with PurpleAir and AirGradient sensors: particulate matter, CO₂, NOₓ and real-time air-quality data."
weight = 1
lastmod = "2026-10-27"
draft = false
+++

Aire Escolar is a citizen-science initiative bringing environmental monitoring into educational settings in Buenos Aires Province, Argentina. It continues **Ciencia Ciudadana Ambiental: Escuelas de Saladillo en Acción por un Aire Limpio**.

The project aims to deploy low-cost sensors inside and near urban and rural schools, involving students in monitoring, data analysis and community awareness. Its longer-term goal is to provide baseline information that could support local air-quality policies.

## Sensors and measurements

The network uses PurpleAir and AirGradient devices. Depending on the device, measurements include particulate matter (PM₁, PM₂.₅ and PM₁₀), temperature, humidity, pressure, CO₂, and VOC or NOₓ indices. These variables are not all available from every sensor; pollutant indices should not be confused with concentration measurements.

PurpleAir devices were donated through the PurpleAir Collective programme in 2024. The project includes active devices and others awaiting installation. An AirGradient device at UTN La Plata is outside the Saladillo dashboard's coverage.

## Dashboard

- Air-quality cards and a map of monitoring locations.
- Historical plots, independent axes and comparison of sensor channels where available.
- CSV export, light and dark themes, and a public API.

Data collection runs periodically, with storage in Cloudflare D1 and a Worker-based API. The interface uses JavaScript, Chart.js and Leaflet.

## Community and educational context

I was an OpenAQ Community Ambassador in 2023, belong to ECSA's Air Quality Working Group, and participate in CanAirIO, AireCiudadano and Sensor.Community. The educational proposal links sensor readings with classroom investigation and community discussion. Proposed deployments and future collaborations are goals, rather than completed outcomes.

[Open dashboard](https://app.lemeit.ar/aq/) · [Public API](https://app.lemeit.ar/aq/api.html) · [Source code](https://github.com/lemeit/lemeit-aq)

Related projects: [weather stations](/en/projects/ema-saladillo/) and [water quality](/en/projects/wq-saladillo/).

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/aq-saladillo/).

