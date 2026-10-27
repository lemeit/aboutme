+++
aliases = ["/projects/seres-termicos/libro/formas-iniciales/"]
title = "Las formas del campo"
description = "Comparar anatomías iniciales que se disuelven por difusión."
url = "/projects/simus/bestiario/formas-iniciales/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 19
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 18"
[build]
list = "never"
+++

Se agregan distintas anatomías iniciales al campo tridimensional. Las formas son condiciones iniciales, no cuerpos que se sostienen por metabolismo.

## Qué observar

Compará las formas al comienzo y después de evolucionar el mismo modelo pasivo. Una figura reconocible puede perder su contorno mientras el campo sigue existiendo.

## Modelo y límites

La difusión pasiva suaviza diferencias. Elegir una anatomía inicial no introduce identidad, control ni reproducción.

## De la ecuación del calor a una actualización

Para un medio homogéneo sin fuentes posteriores:

$$\frac{\partial\theta}{\partial t}=\alpha\left(\frac{\partial^2\theta}{\partial x^2}+\frac{\partial^2\theta}{\partial y^2}+\frac{\partial^2\theta}{\partial z^2}\right).$$

En una malla de separación $h$, cada segunda derivada se aproxima por $(\theta_+-2\theta+\theta_-)/h^2$. Al sumar los tres ejes aparece el stencil de seis vecinos $L_3\theta=\sum_{\text{seis vecinos}}\theta-6\theta_{i,j,k}$. Euler explícito aproxima la derivada temporal y da:

$$\theta_{i,j,k}^{n+1}=\theta_{i,j,k}^n+rL_3\theta^n,\qquad r=\frac{\alpha\Delta t}{h^2}.$$

La fórmula se puede leer como $(1-6r)\theta+r\sum\theta_{\mathrm{vecinos}}$. Con $0\le r\le1/6$, sus pesos son no negativos y suman uno. Esa es la condición usual de estabilidad para este esquema uniforme de difusión pura. No significa que cualquier ecuación con fuentes sea estable por cumplirla.

**Ejemplo ilustrativo:** centro $0{,}8$, seis vecinos de $0{,}2$ y $r=0{,}1$.

| Operación | Resultado |
| --- | --- |
| Suma de vecinos | $6(0{,}2)=1{,}2$ |
| Stencil | $1{,}2-6(0{,}8)=-3{,}6$ |
| Incremento | $0{,}1(-3{,}6)=-0{,}36$ |
| Nuevo centro | $0{,}8-0{,}36=0{,}44$ |

Es una actualización de una celda, no una serie temporal calculada suponiendo que sus vecinos permanezcan fijos. El programa actualiza toda la malla desde el mismo estado anterior y almacena el resultado en Float32.

## De una anatomía inicial a una condición matemática

Las cinco formas se construyen sumando gaussianas sobre una malla de $56^3$ celdas. La geometría inicial elige dónde hay campo; **no agrega fuerzas ni metabolismo**. El dominio tiene lado 2, de modo que $h=2/55$, y el paso nominal es $\Delta t=0{,}04$.

Si el cociente nominal $r_0=\alpha\Delta t/h^2$ es demasiado grande, el programa subdivide el paso para que cada subpaso cumpla $r\le0{,}15$. La difusión lleva el campo hacia el ambiente de los bordes; no borra una figura mediante una animación de transparencia.

## Del campo a la vista

La escala de color es fija: permite comparar intensidades entre instantes, a diferencia de una normalización por el máximo de cada cuadro. El corte científico muestra una sección local; la vista volumétrica compone varios puntos de un rayo. No se deben comparar sus píxeles como si representaran una misma temperatura local. Las estadísticas numéricas proceden del campo, no de la luminosidad de la pantalla.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_2.html" title="Capítulo 18 — Las formas del campo" height="1100" >}}
