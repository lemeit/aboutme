+++
title = 'EMAS'
date = '2026-06-18'
lastmod = '2026-09-16'
weight = 2
draft = false
tags = ['meteorología', 'IoT', 'Cloudflare D1', 'GitHub Actions', 'scraping']
description = 'Red de estaciones meteorológicas automáticas (EMA) en Buenos Aires, con datos en tiempo real.'
+++

Red de estaciones meteorológicas automáticas (EMA) distribuidas en Saladillo y 25 de Mayo, Buenos Aires.
Publicado en [emas.lemeit.ar](https://emas.lemeit.ar).

## Estaciones

| Código | Nombre | Método |
|--------|--------|--------|
| EMA-EET | EEST N°1 "Gral. Savio" | API SNIH/INA |
| EMA-CFR | Centro de Formación Rural | HTML scraping |
| EMA-DC | Defensa Civil — Aeródromo | OCR imagen Meteobridge |
| EMA-CS | Clima Saladillo — B° Falucho | JSON Meteotemplate |
| EMA-25C | 25Clima — 25 de Mayo | API Weather Underground (PWS `IDEMAY14`) |

**EMA-25C** (incorporándose en septiembre 2026): primera estación fuera del partido de Saladillo — 25 de Mayo, cerca de la Esc. Ed. Artística N°1 "Lola Mora". Es la estación pública "25Clima" (25clima.ar), operada por N-TecLab, consultada vía API de Weather Underground con key propia. Pendiente de confirmación con el operador antes de darle carácter permanente en el dashboard.

## Stack

- Scrapers en Python (requests, BeautifulSoup, pytesseract/Tesseract OCR para EMA-DC)
- Ingesta programada con GitHub Actions (cron horario), escribiendo a D1 vía su API HTTP
- Base de datos en Cloudflare D1 (migrada desde Supabase en agosto 2026, ~30.200 filas de historial), expuesta por un Worker propio con rutas compatibles con el formato anterior
- Dashboard responsive (HTML/CSS/JS vanilla) con mapa de tiles CARTO (proxy en el Worker para no exponer la key), rosa de vientos y análisis espacial interpolado entre estaciones
- API pública en [emas.lemeit.ar/api.html](https://emas.lemeit.ar/api.html) — CORS abierto, sin autenticación, con soporte de rangos de fechas y exportación CSV

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **EMAS** — este proyecto, [emas.lemeit.ar](https://emas.lemeit.ar)
- **Aire Escolar** — calidad del aire, [aq.lemeit.ar](https://aq.lemeit.ar)
- **Calidad del Agua** — protocolos municipales, [wq.lemeit.ar](https://wq.lemeit.ar)

## Links

- [Repositorio](https://github.com/lemeit/lemeit-emas)
- [Sitio en vivo](https://emas.lemeit.ar)
- [API pública](https://emas.lemeit.ar/api.html)
- [Documentación técnica](https://wiki.lemeit.ar/red-ambiental/02-ema-saladillo/)
