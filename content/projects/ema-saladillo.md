+++
title = 'Red EMA Saladillo'
date = '2026-06-18'
lastmod = '2026-08-23'
draft = false
tags = ['meteorología', 'IoT', 'Cloudflare D1', 'GitHub Actions']
description = 'Red de estaciones meteorológicas automáticas para la EEST N°1 de Saladillo.'
+++

Red de cuatro estaciones meteorológicas automáticas (EMA) distribuidas en Saladillo,
desarrollada para la EEST N°1 "Gral. Savio". Publicado en [emas.lemeit.ar](https://emas.lemeit.ar).

## Estaciones

| ID | Ubicación |
|---|---|
| EMA-EET | EEST N°1 "Gral. Savio" |
| EMA-CFR | Centro de Formación Rural |
| EMA-DC | Defensa Civil · Aeródromo |
| EMA-CS | Clima Saladillo · B° Falucho |

## Stack

- Scrapers en Python (requests, BeautifulSoup, pytesseract)
- Ingesta programada con GitHub Actions (cron horario)
- Base de datos en Cloudflare D1, expuesta por un Worker propio
- Dashboard responsive (HTML/CSS/JS vanilla), con mapa, rosa de vientos y análisis espacial interpolado entre estaciones
- Análisis de microclima e isla de calor urbana

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **Meteorología** — este proyecto, [emas.lemeit.ar](https://emas.lemeit.ar)
- **Calidad del aire** — sensores PurpleAir en escuelas, [aq.lemeit.ar](https://aq.lemeit.ar)
- **Calidad del agua** — protocolos municipales, [wq.lemeit.ar](https://wq.lemeit.ar) (en desarrollo)

## Links

- [Repositorio](https://github.com/lemeit/ema-saladillo)
- [Sitio en vivo](https://emas.lemeit.ar)
