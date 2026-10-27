+++
aliases = ["/projects/seres-termicos/libro/ventana/"]
title = "Una ventana al campo"
description = "Reconocer una mejora de presentación sin confundirla con nueva física."
url = "/projects/simus/bestiario/ventana/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 20
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 19"
[build]
list = "never"
+++

Esta variante compacta la presentación y adapta la calidad de visualización. Se conserva para comparar la experiencia de observar un mismo tipo de campo.

## Qué observar

Compará encuadre, legibilidad y coste gráfico con las versiones previas. Una imagen más clara o fluida no demuestra que el modelo físico sea más completo.

## Modelo y límites

El cambio principal es de interfaz y visualización. No se presenta como una etapa conceptual obligatoria antes de los cuerpos activos.

## La misma ecuación, otra forma de observarla

Esta versión conserva la malla térmica de $56^3$, el dominio de lado 2 y las condiciones iniciales de [Las formas del campo](/projects/simus/bestiario/formas-iniciales/). Para un subpaso:

$$\theta^{n+1}=\theta^n+r\left(\sum_{\text{seis vecinos}}\theta^n-6\theta^n\right),\qquad r=\alpha\delta t/h^2\le0{,}15.$$

La suma aproxima las tres segundas derivadas espaciales y el cociente temporal es Euler explícito. El desarrollo completo y la tabla resuelta están en el capítulo anterior. No hay una ecuación térmica nueva en esta versión.

## Dos resoluciones distintas

| Magnitud | Qué modifica |
| --- | --- |
| Malla física $56^3$ | Los estados y vecinos que evolucionan por difusión. |
| Resolución de render | La cantidad de píxeles de la imagen. |
| Muestras del rayo | La cantidad de puntos usados para componer cada píxel del volumen. |

La calidad gráfica adaptativa cambia las dos últimas, no la malla física. En una composición volumétrica el color acumula contribuciones de distintos puntos; reducir muestras puede cambiar el aspecto y los detalles visibles sin modificar los valores del campo.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_2_1.html" title="Capítulo 19 — Una ventana al campo" height="1100" >}}
