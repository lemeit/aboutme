+++
title = 'Agua Saladillo'
date = '2026-08-23'
lastmod = '2026-08-24'
weight = 3
draft = false
tags = ['calidad de agua', 'GitHub Actions', 'Gemini API']
description = 'Monitoreo de calidad de agua de red en Saladillo, con protocolos municipales, normativa CAA/PBA e ingesta automática de PDF.'
+++

Tercer proyecto de la red de monitoreo ambiental: calidad del agua de red en Saladillo a partir de
protocolos de muestreo municipales — arsénico, nitratos, nitritos, fluoruro, metales pesados y
parámetros bacteriológicos (coliformes totales, *Escherichia coli*, *Pseudomona aeruginosa*) sobre
decenas de puntos de la red (bombas, escuelas, jardines de infantes, domicilios). Publicado en
[wq.lemeit.ar](https://wq.lemeit.ar).

## Funcionalidad

- Resumen con filtros globales (tipo de punto, rango de fechas, estado), tarjetas de estadísticas y alertas automáticas cuando un parámetro supera el límite normativo
- Vistas desagregadas por punto y por parámetro, mapa geolocalizado (Leaflet) y tabla histórica ordenable
- Normativa: comparación contra los límites del Código Alimentario Argentino (Cap. XII) y la Ley PBA 11.820
- Exportación a CSV del dataset completo (31 parámetros + bacteriología)

## Normativa: cuando la ley escrita y la práctica difieren

El Arsénico es un caso real de discrepancia regulatoria: la Ley PBA 11.820 (Anexo A) todavía dice, en su
texto vigente, 0.05 mg/L — pero en la práctica la Provincia adhiere al valor que el Código Alimentario
Argentino adoptó de la OMS (0.01 mg/L), que es el que citan los propios protocolos municipales. En vez de
elegir un solo valor, el dashboard grafica **ambos límites** como líneas de referencia distintas, para que
la brecha entre norma escrita y práctica real quede visible en vez de oculta detrás de una sola cifra.

## Ingesta automática de protocolos

Los datos salen de protocolos de ensayo que la Municipalidad publica como PDF sueltos, sin tabla, índice
ni nombres de archivo consistentes. Un GitHub Action (disparado a mano) automatiza la parte más pesada:
descarga los PDF nuevos y le pide a la API de Gemini —gratis, lee el PDF directo, sin OCR previo— que
devuelva JSON estructurado con la tabla de determinaciones de cada protocolo (los protocolos usan al menos
tres formatos de tabla distintos: fisicoquímica, bacteriología, metales/plaguicidas). Todo lo extraído
queda en un CSV de staging para revisión humana — la extracción automática nunca escribe directo al
dashboard.

## Red de monitoreo ambiental

Este es uno de tres proyectos ambientales hermanos que comparten la misma infraestructura en Cloudflare (Pages + Workers + D1):

- **Meteorología** — [emas.lemeit.ar](https://emas.lemeit.ar)
- **Calidad del aire** — sensores PurpleAir en escuelas, [aq.lemeit.ar](https://aq.lemeit.ar)
- **Calidad del agua** — este proyecto, [wq.lemeit.ar](https://wq.lemeit.ar)

## Links

- [Repositorio](https://github.com/lemeit/agua-saladillo)
- [Sitio en vivo](https://wq.lemeit.ar)
