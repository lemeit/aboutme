+++
title = 'Aire Saladillo'
date = '2026-08-23'
weight = 1
draft = false
tags = ['calidad de aire', 'PurpleAir', 'IoT', 'Cloudflare D1', 'GitHub Actions']
description = 'Red de sensores PurpleAir en escuelas y jardines de infantes de Saladillo, con AQI en tiempo real.'
+++

Red de sensores [PurpleAir](https://www.purpleair.com) instalada en escuelas y jardines de infantes
de Saladillo, que mide material particulado (PM2.5/PM10), temperatura, humedad, presión y — en los
sensores PurpleAir Flex de la flota — compuestos orgánicos volátiles (VOC) en tiempo real. Publicado
en [aq.lemeit.ar](https://aq.lemeit.ar).

## Funcionalidad

- Tarjetas por sensor con velocímetro de AQI, datos actuales y mini-gráfico histórico al dar vuelta la tarjeta
- Mapa interactivo con selector de capa de datos (AQI, PM2.5, temperatura, humedad, presión, VOC), al estilo del mapa de PurpleAir
- Gráfico histórico con selector multi-parámetro — ejes Y independientes para superponer, por ejemplo, PM2.5 con temperatura — y overlay de canales A/B del sensor
- Exportación a CSV, tema claro/oscuro

## Stack

- Ingesta programada con GitHub Actions (cron cada 15 min) contra la API de PurpleAir
- Base de datos en Cloudflare D1, expuesta por un Worker propio
- Dashboard HTML/CSS/JS vanilla con Chart.js y Leaflet
- Hosting en Cloudflare Pages

## Contexto institucional

El autor trabajó anteriormente en el Ministerio de Ambiente de la Provincia de Buenos Aires, y mantiene
buena sinergia y contacto con el CEMCA (Centro de Monitoreo de Calidad de Aire), un área de ese mismo
Ministerio — su panel público fue referencia de diseño para el mapa de este proyecto. Hay intención de
seguir trabajando en conjunto a futuro, como la colocation de sensores de bajo costo junto a estaciones
oficiales certificadas para comparar y calibrar contra el equipo de referencia.

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **Meteorología** — [emas.lemeit.ar](https://emas.lemeit.ar)
- **Calidad del aire** — este proyecto, [aq.lemeit.ar](https://aq.lemeit.ar)
- **Calidad del agua** — protocolos municipales, [wq.lemeit.ar](https://wq.lemeit.ar) (en desarrollo)

## Links

- [Repositorio](https://github.com/lemeit/purpleair-saladillo)
- [Sitio en vivo](https://aq.lemeit.ar)
