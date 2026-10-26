+++
title = "La línea se vuelve superficie"
description = "Pasar de vecinos en una dirección a un campo en dos dimensiones."
url = "/projects/seres-termicos/libro/difusion-superficie/"
date = "2026-10-26"
lastmod = "2026-10-26"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 8
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 7"
[build]
list = "never"
+++

Cada celda intercambia energía con sus vecinas en dos direcciones espaciales. El mapa de color representa la temperatura de una placa.

## Qué observar

Compará el mapa completo con el corte de temperatura a mitad de altura. Son dos representaciones del mismo estado. Observá la extensión de una región caliente y la disminución de sus diferencias con el entorno.

## Modelo y límites

Es difusión conservativa con bordes aislados y sin fuentes. Las celdas son una discretización del medio: no representan moléculas ni seres individuales.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v07-difusion-2d.html" title="Capítulo 7 — La línea se vuelve superficie" height="1100" >}}
