+++
title = "Hacer visible un campo"
description = "Ray marching y diagnóstico de la ventana tridimensional."
url = "/projects/seres-termicos/libro/visualizacion/"
date = "2026-10-26"
lastmod = "2026-10-26"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 27
book_part = "anexos"
book_part_title = "Anexos y taller"
book_label = "Anexo C"
[build]
list = "never"
+++

Estos dos prototipos permiten examinar la representación gráfica por separado de los organismos.

## Recorrer el volumen

La primera escena explora ray marching: acumular contribuciones a lo largo de un rayo para mostrar un campo volumétrico. La intensidad depende de decisiones de visualización, no solamente del estado térmico.

{{< sim src="/simus/seres-termicos/v03-raymarching.html" title="Prototipo de visualización volumétrica" >}}

## Comprobar la ventana tridimensional

El diagnóstico permite contrastar el soporte gráfico del equipo. No agrega una ley térmica ni un capítulo de organismos.

{{< sim src="/simus/seres-termicos/test_3D.html" title="Diagnóstico gráfico tridimensional" >}}
