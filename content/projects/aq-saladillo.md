+++
summary = "Monitoreo ambiental escolar con sensores PurpleAir y AirGradient — PM2.5/PM10, CO2, NOx y AQI en tiempo real."
title = 'Aire Escolar'
date = '2026-08-23'
lastmod = "2026-11-12"
weight = 1
draft = false
tags = ['calidad de aire', 'PurpleAir', 'AirGradient', 'IoT', 'Cloudflare D1', 'GitHub Actions']
description = 'Monitoreo ambiental escolar con sensores PurpleAir y AirGradient — PM2.5/PM10, CO2, NOx y AQI en tiempo real.'
+++

Red de sensores [PurpleAir](https://www.purpleair.com) y [AirGradient](https://www.airgradient.com/) destinada a instituciones educativas de la Provincia de Buenos Aires, con equipos instalados y otros todavía en pruebas, para la determinación de material particulado (PM1.0/PM2.5/PM10), temperatura, humedad, presión, VOC, CO2 y NOx en tiempo real. Publicado en [app.lemeit.ar/aq](https://app.lemeit.ar/aq).

## Sensores

**Flota PurpleAir**: 5 unidades Flex (sensor de gas BME688 incluido, reporta PM, temperatura, humedad, presión y VOC). Las cinco están registradas en PurpleAir y configuradas en LEMEIT. Al 12/11/2026, el titular confirma AE-02 instalado en su escuela y AE-04 (298873), destinado a Esc. Agraria C.M. Casares (EAS Del Valle), todavía en pruebas. AE-04 fue dado de alta en PurpleAir el 12/11/2026; esa fecha no es su instalación escolar. Las unidades fueron una donación de [PurpleAir Collective](https://community.purpleair.com/t/purpleair-collective-june-july-2024/8771) (convocatoria de mediados de 2024, propuesta presentada por el autor — 2° puesto de esa ronda).

**Flota AirGradient**: 3 unidades en total; 2 corresponden a la red de Saladillo y conservan lecturas históricas. Su conectividad actual e instalación definitiva no están verificadas en el corte del 12/11/2026. La tercera está en la UTN La Plata y queda excluida del dashboard. A diferencia de PurpleAir, AirGradient suma **CO2** (sensor NDIR) y **NOx** (índice SGP41) como parámetros nuevos en tarjetas, gráfico, mapa e historial.

## Funcionalidad

- Tarjetas por sensor con velocímetro de AQI, datos actuales y badge de proveedor (PurpleAir / AirGradient)
- Mapa interactivo con selector de capa de datos (AQI, PM2.5, temperatura, humedad, presión, VOC, CO2, NOx)
- Gráfico histórico con selector multi-parámetro y ejes Y independientes; overlay de canales A/B del sensor
- Exportación a CSV, tema claro/oscuro, API pública en [app.lemeit.ar/aq/api.html](https://app.lemeit.ar/aq/api.html)

## Stack

- Ingesta PurpleAir cada **30 minutos** vía cron-job.org (:27/:57). GitHub Actions sigue pausado y el cron del Worker está vacío; no se duplican disparadores. La ingesta automática de AirGradient no está acreditada.
- Base de datos en Cloudflare D1, con deduplación automática (`INSERT OR IGNORE` + índice `UNIQUE(sensor_index, timestamp)`) para evitar filas repetidas; esto no evita gastar puntos si se duplican llamadas al proveedor
- Worker propio que expone la API REST y actúa de proxy para los tiles del mapa (CARTO Basemaps, sin exponer la key en el HTML público)
- Dashboard HTML/CSS/JS vanilla con Chart.js y Leaflet
- Hosting en Cloudflare Pages

## Contexto institucional

Este proyecto es continuación de la iniciativa *Ciencia Ciudadana Ambiental: Escuelas de Saladillo en Acción por un Aire Limpio*. Busca desplegar sensores de bajo costo dentro y cerca de instituciones educativas urbanas y rurales de la Provincia de Buenos Aires, involucrando a los estudiantes en el monitoreo, el análisis de datos y la concientización comunitaria, con la mira puesta en aportar información de base para eventuales políticas locales de calidad del aire.

El autor (Ing. Químico) es Embajador Comunitario de OpenAQ (2023), integra el Grupo de Trabajo de Air Quality de la ECSA (European Citizen Science Association) y participa de los proyectos CanAirIO, AireCiudadano y Sensor.Community — de ahí surgen buena parte de los antecedentes técnicos y metodológicos, incluyendo la experiencia nacional de ciencia ciudadana ambiental del Ministerio de Ambiente y Desarrollo Sustentable de la Nación, el PNUD y la iniciativa open-seneca (Universidad de Cambridge), con mediciones en CABA, Rosario, Mendoza, Córdoba y Tucumán (2019–2021).

El autor también trabajó anteriormente en el Ministerio de Ambiente de la Provincia de Buenos Aires, y mantiene contacto con el CEMCA (Centro de Monitoreo de Calidad de Aire) — su panel público fue referencia de diseño para el mapa de este proyecto. Hay intención de seguir trabajando en conjunto a futuro, incluyendo colocation de sensores de bajo costo junto a estaciones oficiales certificadas.

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **EMAS** — meteorología, [app.lemeit.ar/emas](https://app.lemeit.ar/emas)
- **Aire Escolar** — este proyecto, [app.lemeit.ar/aq](https://app.lemeit.ar/aq)
- **Calidad del Agua** — protocolos municipales, [app.lemeit.ar/wq](https://app.lemeit.ar/wq)

## Links

- [Repositorio](https://github.com/lemeit/lemeit-aq)
- [Sitio en vivo](https://app.lemeit.ar/aq)
- [API pública](https://app.lemeit.ar/aq/api.html)
- [Documentación técnica](https://wiki.lemeit.ar/red-ambiental/01-aire-saladillo/)

## Estado y frescura

El 12/11/2026 se verificaron en LEMEIT nuevas lecturas y presencia en el mapa de AE-02 y AE-04. El color refleja la frescura de la última lectura, no si el equipo está físicamente encendido. Se prepara ampliar el límite de 25 a **40 minutos** para cubrir el intervalo de ingesta de 30 minutos y su margen de actualización, sin aumentar consultas al proveedor; la publicación del frontend está pendiente. La red conserva datos de sensores sin conexión reciente. [Registro técnico y validaciones](https://github.com/lemeit/lemeit-aq/pull/32).
