+++
aliases = ["/projects/seres-termicos/libro/volumen-inicial/"]
title = "El primer volumen térmico"
description = "Examinar la base funcional de la serie V4."
url = "/projects/simus/bestiario/volumen-inicial/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 18
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 17"
[build]
list = "never"
+++

La serie V4 retoma un campo térmico tridimensional persistente. Esta primera versión conservada permite examinar la base volumétrica antes de incorporar modelos más complejos.

## Qué observar

Reconocé la geometría del dominio y compará una región localizada con el campo que queda al difundirse. Separá lo que calcula la malla de lo que muestra la cámara.

## Modelo y límites

Es una versión histórica para comparar implementación y visualización. El código V4.1 no significa capítulo 4 ni el prototipo Gray–Scott v04: son ramas diferentes.

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

## Los números de esta versión

La malla tiene $48^3$ celdas. Su control modifica directamente $r$, inicialmente $0{,}105$ y como máximo $0{,}16$; no mide $\alpha$ en m²/s. El contador muestra pasos. Los bordes permanecen en cero.

El estado inicial suma cinco gaussianas positivas, $\theta(\mathbf x,0)=\sum_b a_b\exp[-|\mathbf x-\mathbf x_b|^2/(2\sigma_b^2)]$. Después no hay órganos activos ni una reserva que alimente esas formas.

## Lo que calcula y lo que muestra

Para el render se codifica cada estado como $q=\operatorname{round}[255\operatorname{clip}_{[0,1]}(\theta)]$ en una textura de un canal. Se pierde precisión en la textura, no en el campo Float32. La visualización usa el máximo instantáneo para resaltar intensidad relativa: una forma puede seguir siendo brillante mientras desciende su valor absoluto. La proyección suma muestras en profundidad. También se conserva un defecto histórico de esta versión en el avance del rayo, corregido en la siguiente; no debe confundirse con una nueva ley del campo.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_1.html" title="Capítulo 17 — El primer volumen térmico" height="1100" >}}
