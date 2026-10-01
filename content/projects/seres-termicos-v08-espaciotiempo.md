+++
title = 'v08 — Espaciotiempo'
date = '2026-09-25'
lastmod = '2026-09-25'
draft = false
math = true
url = '/projects/seres-termicos/v08-espaciotiempo/'
description = 'El campo 2D acumulado a lo largo del tiempo como volumen 3D: worldtubes. Los seres no se mueven — su vida entera es una forma geométrica.'

[build]
list = 'never'
+++

> "Los humanos vistos en cuatro dimensiones son «grandes milpiés»: cada instante
> de su vida, uno junto al otro, para siempre."
>
> — paráfrasis de Kurt Vonnegut, *Matadero cinco* (1969)

*Esta simulación pertenece a la Línea V — [El cosmos](/projects/seres-termicos/): dónde viven y cómo se ven en el tiempo.*

Esta es la visualización más borgiana del proyecto. En lugar de mirar la
simulación *pasar*, v08 acumula la historia del campo como si el tiempo fuera una
tercera dimensión espacial. El resultado no muestra objetos que se mueven: muestra
**formas en el tiempo**.

## La simulación

{{< sim src="/simus/seres-termicos/v08-espaciotiempo.html" title="Seres Térmicos — v08, espaciotiempo" >}}

(**Espacio** pausa la acumulación: el volumen queda congelado para mirarlo.)

## Qué se ve

Un ser que vive $F$ frames no es un punto que se desplaza: es un **tubo** de
longitud $F$ en el eje temporal.

- El **nacimiento** es el extremo inicial del tubo.
- La **muerte** es su fin: el tubo termina y el calor residual se difunde
  radialmente en la cola.
- Su **diámetro** varía con la energía $E_i(t)$: el tubo se adelgaza mientras
  el ser muere.
- La **reproducción** es una cúspide: el tubo se bifurca en dos worldtubes.

Un ser que nunca se mueve es un cilindro. Uno que deriva, un tubo diagonal. La
historia completa de cada organismo es una pieza escultórica en un volumen que no
deja de crecer.

## Física

### El campo espaciotemporal

 $$\mathcal{T}(x, y, \tau) = T\!\left(x, y,\; t_0 + \tau\,\Delta t\right), \qquad \tau \in [0, N]$$ 
Los últimos $N$ frames del campo 2D se apilan como capas en el eje $\tau$ (un buffer circular: cada frame nuevo entra y el más viejo sale). El volumen es un
objeto fijo: la **historia reciente del universo**, completa y simultánea.

### Bloque universo

En esta representación no hay "ahora" privilegiado: nacimientos, vidas y muertes
coexisten como geometría. Mirar la simulación en vivo y mirar el volumen
espaciotemporal son dos modos de conocer lo mismo — experiencia y memoria.
La imagen borgiana se vuelve literal: los seres de la época saturnina no son cosas
que *hayan existido*; son formas que *son*, extendidas en el tiempo.

### La misma idea, memoria del campo

En el [bestiario](/projects/seres-termicos/), el modo de *persistencia alta* logra
un efecto emparentado sin construir volumen: el campo, casi sin difusión, guarda
su propia historia y cada ser pinta su línea de vida en el plano. Allí la memoria
es física (la ecuación misma); aquí es arquitectónica (un buffer que acumula).

---

→ [← volver al proyecto](/projects/seres-termicos/) · [v07 — Universo esférico](/projects/seres-termicos/v07-3d/)