+++
aliases = ["/projects/seres-termicos/libro/recta-temperaturas/"]
title = "Una recta de temperaturas"
description = "Un complemento estacionario para el capítulo de conducción."
url = "/projects/simus/bestiario/recta-temperaturas/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 26
book_part = "anexos"
book_part_title = "Anexos y taller"
book_label = "Anexo B"
[build]
list = "never"
+++

La gráfica muestra temperatura frente a posición en una barra con temperaturas impuestas en sus extremos. Comparala con el perfil del capítulo de Fourier.

## Qué observar

Identificá la unidad de cada eje y el signo de la pendiente. Una recta espacial no es una evolución temporal de dos termómetros.

## Modelo y límites

Es una representación estacionaria. No calcula el proceso transitorio por el cual se alcanzó ese perfil.

## De dos extremos a toda la recta

En una barra de longitud $L$, con extremos $T_A,T_B$, el perfil lineal es $T(x)=a+bx$. Imponer $T(0)=T_A$ da $a=T_A$; imponer $T(L)=T_B$ da $b=(T_B-T_A)/L$. Por eso:

$$T(x)=T_A+\frac{T_B-T_A}{L}x,\qquad \frac{dT}{dx}=\frac{T_B-T_A}{L}.$$

La escena usa $L=1\,\mathrm m$. Con extremos de 60 °C y 20 °C, $T(x)=60-40x$ y la pendiente es $-40\,\mathrm{K/m}$. Una diferencia de 1 °C equivale a una diferencia de 1 K.

| Posición (m) | Temperatura del ejemplo (°C) |
| --- | --- |
| 0 | 60 |
| 0,25 | 50 |
| 0,50 | 40 |
| 0,75 | 30 |
| 1 | 20 |

La tabla de la escena se recalcula con los controles. Es un perfil lineal prescrito, no una simulación de su establecimiento en el tiempo: no hay un paso temporal que avanzar. Con conductividad positiva, Fourier da $q_x=-k\,dT/dx$, opuesto al gradiente.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v00-temperatura.html" title="Anexo B — Una recta de temperaturas" height="1100" >}}
