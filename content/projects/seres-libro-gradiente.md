+++
title = "Seguir el gradiente"
description = "Acoplar el movimiento de agentes a las diferencias del campo."
url = "/projects/seres-termicos/libro/gradiente/"
date = "2026-10-26"
lastmod = "2026-10-26"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 11
book_part = "patrones"
book_part_title = "Parte II · Del campo a las formas"
book_label = "Capítulo 10"
[build]
list = "never"
+++

Los agentes ya no se mueven completamente al margen del medio: leen su gradiente y responden según una regla de movimiento.

## Qué observar

Seguí un agente y compará su dirección con la distribución térmica cercana. Observá cómo el movimiento de una fuente cambia a su vez el campo que encuentran los demás.

## Modelo y límites

La regla de respuesta al gradiente está programada. La ley de Fourier describe transferencia de calor; no deduce por sí sola que un individuo deba perseguir o evitar una temperatura.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v02-gradiente.html" title="Capítulo 10 — Seguir el gradiente" height="1100" >}}
