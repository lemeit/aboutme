+++
title = 'Aire Saladillo'
date = '2026-08-23'
lastmod = '2026-08-25'
weight = 1
draft = false
tags = ['calidad de aire', 'PurpleAir', 'IoT', 'Cloudflare D1', 'GitHub Actions']
description = 'Red de sensores PurpleAir en escuelas y jardines de infantes de Saladillo, con AQI en tiempo real.'
+++

Red de sensores [PurpleAir](https://www.purpleair.com) instalada en escuelas y jardines de infantes
de Saladillo para la determinación de material particulado (PM2.5/PM10), temperatura, humedad, presión y compuestos orgánicos volátiles (VOC) en tiempo real. Publicado
en [aq.lemeit.ar](https://aq.lemeit.ar).

## Funcionalidad

- Tarjetas por sensor con velocímetro de AQI, datos actuales y mini-gráfico histórico al dar vuelta la tarjeta
- Mapa interactivo con selector de capa de datos (AQI, PM2.5, temperatura, humedad, presión, VOC), al estilo del mapa de PurpleAir
- Gráfico histórico con selector multi-parámetro — ejes Y independientes para superponer, por ejemplo, PM2.5 con temperatura — y overlay de canales A/B del sensor
- Exportación a CSV, tema claro/oscuro

## Stack

- Ingesta programada contra la API de PurpleAir cada 15 min. Tres disparadores corren en paralelo para máxima confiabilidad (Cron Trigger de Cloudflare, GitHub Actions y un cron externo), y los datos se deduplican (eliminan repetidos) automáticamente en la base
- Base de datos en Cloudflare D1, expuesta por un Worker propio
- Dashboard HTML/CSS/JS vanilla con Chart.js y Leaflet
- Hosting en Cloudflare Pages

## Contexto institucional

Este proyecto se enmarca en una iniciativa más amplia de ciencia ciudadana ambiental — *Escuelas de
Saladillo en Acción por un Aire Limpio* — que busca desplegar sensores de bajo costo dentro y cerca de
instituciones educativas urbanas y rurales del partido, involucrando a los estudiantes en el monitoreo,
el análisis de datos y la concientización comunitaria, con la mira puesta en aportar información de base
para eventuales ordenanzas municipales de calidad del aire.

El autor (Ing. Químico) es Embajador Comunitario de OpenAQ (2023), integra el Grupo de Trabajo de Air
Quality de la ECSA (European Citizen Science Association) y participa de los proyectos CanAirIO,
AireCiudadano y Sensor.Community — de ahí surgen buena parte de los antecedentes técnicos y
metodológicos del proyecto, incluyendo la experiencia nacional de ciencia ciudadana ambiental del
Ministerio de Ambiente y Desarrollo Sustentable de la Nación, el PNUD y la iniciativa open-seneca
(Universidad de Cambridge), con mediciones en CABA, Rosario, Mendoza, Córdoba y Tucumán (2019–2021).

Como parte de esta iniciativa está prevista la instalación de un monitor Clarity Node-S (con panel solar
y transmisión celular) y un monitor AirGradient Open Air (por WiFi) en una escuela rural y un jardín de
infantes urbano — que además de material particulado, temperatura y humedad podrían sumar a futuro la
medición de CO2 mencionada en el roadmap de este proyecto.

El autor también trabajó anteriormente en el Ministerio de Ambiente de la Provincia de Buenos Aires, y
mantiene buena sinergia y contacto con el CEMCA (Centro de Monitoreo de Calidad de Aire), un área de ese
mismo Ministerio — su panel público fue referencia de diseño para el mapa de este proyecto. Hay intención
de seguir trabajando en conjunto a futuro, como la colocation de sensores de bajo costo junto a
estaciones oficiales certificadas para comparar y calibrar contra el equipo de referencia.

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **Meteorología** — [emas.lemeit.ar](https://emas.lemeit.ar)
- **Calidad del aire** — este proyecto, [aq.lemeit.ar](https://aq.lemeit.ar)
- **Calidad del agua** — protocolos municipales, [wq.lemeit.ar](https://wq.lemeit.ar)

## Links

- [Repositorio](https://github.com/lemeit/purpleair-saladillo)
- [Sitio en vivo](https://aq.lemeit.ar)
