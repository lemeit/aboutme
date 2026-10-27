+++
aliases = ["/projects/seres-termicos/libro/difusion-volumen/"]
title = "El calor habita un volumen"
description = "Leer tres cortes y una representación de un mismo campo tridimensional."
url = "/projects/simus/bestiario/difusion-volumen/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 9
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 8"
[build]
list = "never"
+++

La temperatura depende de tres coordenadas. Un volumen es difícil de observar de una sola vez; por eso comparamos cortes y una vista oblicua de sus celdas.

## Qué observar

Recorré los cortes X, Y y Z. Buscá la misma región caliente en las distintas vistas y seguí cómo cambia. Cambiar el plano de observación no modifica el fenómeno.

## Modelo y límites

La simulación describe difusión conservativa en un volumen aislado. Los cubos dibujados son celdas del cálculo, no partículas materiales.

La experiencia comienza con **dos mitades a 80 °C y 20 °C**. Compará las vistas inicial y actual: la frontera térmica se suaviza y la media permanece en 50 °C. En «Condición inicial» también podés elegir la zona caliente localizada del ejemplo original; su media y su energía inicial son diferentes.

## Cómo sale el esquema de la ecuación

En un medio homogéneo, la conservación de energía y Fourier dan $\rho c\,\partial_tT=k\nabla^2T$, es decir $\partial_tT=\alpha\nabla^2T$, con $\alpha=k/(\rho c)$. Cada segunda derivada se aproxima por diferencias centradas. En 3 dimensiones y malla uniforme:

$$T_i^{n+1}=T_i^n+r\sum_{j\text{ vecino de }i}(T_j^n-T_i^n),\qquad r=\frac{\alpha\delta t}{h^2}.$$

El código implementa esa suma por pares: resta a una celda lo mismo que suma a su vecina. En las caras exteriores no hay transferencia; esa es la condición aislada. La suma de los valores de la malla permanece constante salvo redondeo, y la media no cambia.

Para $d$ dimensiones, un punto interior tiene $2d$ vecinos y peso central $1-2dr$. Exigir pesos no negativos da $r\le1/(2d)$. La implementación usa un límite más conservador, $\delta t\le0{,}4h^2/(d\alpha)$, y puede ejecutar varios subpasos por cuadro.

**Ejemplo ilustrativo de una cara:** entre celdas de 80 °C y 20 °C, con $r=0{,}1$, se transfiere una diferencia $0{,}1(80-20)=6$ K: quedarían 74 °C y 26 °C si ese fuera el único intercambio. Su suma sigue siendo 100 °C. En la malla completa se suman simultáneamente los aportes de todas las caras, siempre usando los estados anteriores.

La tabla debajo de la escena lee una celda y sus vecinos reales. Sus índices son direcciones de la malla; un cuadro manual puede contener varios subpasos. Los mapas de color y cortes muestran esos estados, mientras las flechas dibujadas solo indican el sentido del intercambio: no son partículas microscópicas.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v08-difusion-3d.html" title="Capítulo 8 — El calor habita un volumen" height="1100" >}}
