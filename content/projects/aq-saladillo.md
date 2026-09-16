+++
title = 'Aire Escolar'
date = '2026-08-23'
lastmod = '2026-09-16'
weight = 1
draft = false
tags = ['calidad de aire', 'PurpleAir', 'AirGradient', 'IoT', 'Cloudflare D1', 'GitHub Actions']
description = 'Monitoreo ambiental escolar con sensores PurpleAir y AirGradient — PM2.5/PM10, CO2, NOx y AQI en tiempo real.'
+++

Red de sensores [PurpleAir](https://www.purpleair.com) y [AirGradient](https://www.airgradient.com/) instalada en instituciones educativas de la Provincia de Buenos Aires para la determinación de material particulado (PM1.0/PM2.5/PM10), temperatura, humedad, presión, VOC, CO2 y NOx en tiempo real. Publicado en [aq.lemeit.ar](https://aq.lemeit.ar).

## Sensores

**Flota PurpleAir**: 5 unidades Flex (sensor de gas BME688 incluido, reporta PM, temperatura, humedad, presión y VOC). Una instalada y activa; las otras 4 pendientes de instalación en distintas instituciones. Las unidades fueron una donación de [PurpleAir Collective](https://community.purpleair.com/t/purpleair-collective-june-july-2024/8771) (convocatoria de mediados de 2024, propuesta presentada por el autor — 2° puesto de esa ronda).

**Flota AirGradient**: 3 unidades en total; 2 corresponden a la red de Saladillo (una en interior, ya reportando; una kit DIY pendiente de instalación definitiva). La tercera está en la UTN La Plata y queda excluida del dashboard. A diferencia de PurpleAir, AirGradient suma **CO2** (sensor NDIR) y **NOx** (índice SGP41) como parámetros nuevos en tarjetas, gráfico, mapa e historial.

## Funcionalidad

- Tarjetas por sensor con velocímetro de AQI, datos actuales y badge de proveedor (PurpleAir / AirGradient)
- Mapa interactivo con selector de capa de datos (AQI, PM2.5, temperatura, humedad, presión, VOC, CO2, NOx)
- Gráfico histórico con selector multi-parámetro y ejes Y independientes; overlay de canales A/B del sensor
- Exportación a CSV, tema claro/oscuro, API pública en [aq.lemeit.ar/api.html](https://aq.lemeit.ar/api.html)

## Stack

- Ingesta programada contra las APIs de PurpleAir y AirGradient cada 15 min vía cron-job.org (disparador activo desde septiembre 2026); Worker de Cloudflare con Cron Trigger registrado pero pendiente de un bug de Cloudflare; GitHub Actions pausado para no duplicar el gasto de puntos de la API
- Base de datos en Cloudflare D1, con deduplación automática (`INSERT OR IGNORE` + índice `UNIQUE(sensor_index, timestamp)`) para que varios disparadores puedan convivir sin generar filas repetidas
- Worker propio que expone la API REST y actúa de proxy para los tiles del mapa (CARTO Basemaps, sin exponer la key en el HTML público)
- Dashboard HTML/CSS/JS vanilla con Chart.js y Leaflet
- Hosting en Cloudflare Pages

## Contexto institucional

Este proyecto es continuación de la iniciativa *Ciencia Ciudadana Ambiental: Escuelas de Saladillo en Acción por un Aire Limpio*. Busca desplegar sensores de bajo costo dentro y cerca de instituciones educativas urbanas y rurales de la Provincia de Buenos Aires, involucrando a los estudiantes en el monitoreo, el análisis de datos y la concientización comunitaria, con la mira puesta en aportar información de base para eventuales políticas locales de calidad del aire.

El autor (Ing. Químico) es Embajador Comunitario de OpenAQ (2023), integra el Grupo de Trabajo de Air Quality de la ECSA (European Citizen Science Association) y participa de los proyectos CanAirIO, AireCiudadano y Sensor.Community — de ahí surgen buena parte de los antecedentes técnicos y metodológicos, incluyendo la experiencia nacional de ciencia ciudadana ambiental del Ministerio de Ambiente y Desarrollo Sustentable de la Nación, el PNUD y la iniciativa open-seneca (Universidad de Cambridge), con mediciones en CABA, Rosario, Mendoza, Córdoba y Tucumán (2019–2021).

El autor también trabajó anteriormente en el Ministerio de Ambiente de la Provincia de Buenos Aires, y mantiene contacto con el CEMCA (Centro de Monitoreo de Calidad de Aire) — su panel público fue referencia de diseño para el mapa de este proyecto. Hay intención de seguir trabajando en conjunto a futuro, incluyendo colocation de sensores de bajo costo junto a estaciones oficiales certificadas.

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **EMAS** — meteorología, [emas.lemeit.ar](https://emas.lemeit.ar)
- **Aire Escolar** — este proyecto, [aq.lemeit.ar](https://aq.lemeit.ar)
- **Calidad del Agua** — protocolos municipales, [wq.lemeit.ar](https://wq.lemeit.ar)

## Links

- [Repositorio](https://github.com/lemeit/lemeit-aq)
- [Sitio en vivo](https://aq.lemeit.ar)
- [API pública](https://aq.lemeit.ar/api.html)
- [Documentación técnica](https://wiki.lemeit.ar/red-ambiental/01-aire-saladillo/)
