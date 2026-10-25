+++
title = "EMAS — weather stations"
description = "An integrated dashboard for local weather-station data."
weight = 2
lastmod = '2026-10-25'
draft = false
+++

EMAS brings together weather observations from several sources in Saladillo and the surrounding area. A common interface makes it easier to explore local conditions and historical records.

## Data sources

| Station | Source |
|---|---|
| EMA-EET | School station, through SNIH/INA |
| EMA-CFR | Centro de Formación Rural, extracted from its web page |
| EMA-DC | Defensa Civil / aerodrome, using OCR on Meteobridge output |
| EMA-CS | Clima Saladillo, Falucho, through Meteotemplate JSON |
| EMA-25C | 25Clima, 25 de Mayo, through Weather Underground |

The 25 de Mayo station is being incorporated; permanent dashboard inclusion depends on confirmation of access with its operator. Data availability and update times vary by source.

## What the dashboard offers

A responsive dashboard, station map, historical charts, wind roses and CSV export. A public API provides date-range queries. Spatial interpolation is a visual aid for exploring observations, rather than a replacement for measurements at each location.

## Implementation

Python collectors combine HTTP requests, HTML parsing and Tesseract OCR. Scheduled GitHub Actions collect observations. Historical storage migrated from Supabase to Cloudflare D1 in August 2026, with a Worker providing API access and compatibility routes. The browser interface uses JavaScript and a CARTO map proxy.

[Open dashboard](https://app.lemeit.ar/emas/) · [Source code](https://github.com/lemeit/lemeit-emas)

Related projects: [air quality](/en/projects/aq-saladillo/) and [water quality](/en/projects/wq-saladillo/).

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/ema-saladillo/).

