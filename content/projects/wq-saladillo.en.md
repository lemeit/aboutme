+++
date = "2026-08-23"
summary = "Monitoring drinking-water quality in Saladillo, with municipal reports, Argentine and provincial reference limits, and automated PDF ingestion."
title = "Agua Saladillo"
description = "Monitoring drinking-water quality in Saladillo, with municipal reports, Argentine and provincial reference limits, and automated PDF ingestion."
weight = 3
lastmod = "2026-10-27"
draft = false
+++

Agua Saladillo organises water-analysis results published in municipal PDF reports, making them easier to explore by sampling point, parameter and date. Sampling points include pumping wells, schools, kindergartens and homes.

## Information available

The dataset includes physicochemical parameters such as arsenic, nitrate, nitrite, fluoride and metals, alongside bacteriological results such as total coliforms, *Escherichia coli* and *Pseudomonas aeruginosa*. Availability depends on the original report.

Users can filter records, inspect individual points on a Leaflet map, compare historical values, sort results and export CSV data. Reference lines help users compare results with the thresholds described in the Spanish regulatory discussion; the original reports and their context remain essential when interpreting a result.

## From PDF to reviewed data

Municipal reports are unstructured documents. A manually triggered workflow downloads new files and uses Gemini to extract structured results from different report formats. Extracted data is staged for **human review before publication**, rather than being written automatically to the public dashboard.

The project connects document processing, structured environmental data and a public web interface.

[Open dashboard](https://app.lemeit.ar/wq/) · [Source code](https://github.com/lemeit/lemeit-wq)

Related projects: [air quality](/en/projects/aq-saladillo/) and [weather stations](/en/projects/ema-saladillo/).

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/wq-saladillo/).

