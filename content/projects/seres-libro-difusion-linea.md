+++
title = "El calor recorre una línea"
description = "Observar cómo se redistribuye una temperatura no uniforme."
url = "/projects/seres-termicos/libro/difusion-linea/"
date = "2026-10-26"
lastmod = "2026-10-26"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 7
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 6"
[build]
list = "never"
+++

Ahora el perfil cambia con el tiempo. Las regiones vecinas intercambian energía y suavizan las diferencias:

$$\frac{\partial T}{\partial t}=\alpha\frac{\partial^2T}{\partial x^2}.$$

## Qué observar

Seguí una zona caliente y sus vecinas. Distinguí el perfil espacial en un instante de la historia temporal de un termómetro fijo.

## Modelo y límites

La actividad usa extremos aislados y difusión sin fuentes. La energía se redistribuye: no desaparece al bajar la temperatura máxima. La difusividad $\alpha$ y el tamaño de la malla condicionan la escala temporal y la estabilidad numérica.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v06-difusion-1d.html" title="Capítulo 6 — El calor recorre una línea" height="1100" >}}
