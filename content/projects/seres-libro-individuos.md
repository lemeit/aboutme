+++
title = "Contar a los individuos"
description = "Introducir identidad y una reserva individual finita."
url = "/projects/seres-termicos/libro/individuos/"
date = "2026-10-26"
lastmod = "2026-10-26"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 14
book_part = "individuos"
book_part_title = "Parte III · De las formas a los individuos"
book_label = "Capítulo 13"
[build]
list = "never"
+++

Cada agente tiene identidad, posición y una reserva $E_i$ asignada al nacer. En este prototipo la reserva disminuye a una tasa prescrita:

$$\frac{dE_i}{dt}=-\mu.$$

## Qué observar

Seguí un mismo individuo desde su aparición hasta que se agota. Compará la población contada con el campo que dejan sus fuentes. Nacimiento y eliminación son eventos programados.

## Modelo y límites

La reserva no se recarga desde el campo en esta versión. Un umbral de reproducción previsto en el código no implica que se alcance si la energía solo disminuye desde el valor inicial. El mecanismo no demuestra vida ni una fluctuación física del vacío.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="Capítulo 13 — Contar a los individuos" height="1100" >}}
