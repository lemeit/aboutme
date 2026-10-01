+++
title = 'v07 — Universo esférico'
date = '2026-09-25'
lastmod = '2026-09-25'
draft = false
math = true
url = '/projects/seres-termicos/v07-3d/'
description = 'El campo térmico en 3D confinado en una esfera de plasma: ray marching volumétrico en WebGL2 y doble perspectiva — el cosmos desde afuera, el mundo desde adentro de un ser.'

[build]
list = 'never'
+++

> "Los diversos colores definían en el espacio cósmico figuras regulares e irregulares."
>
> — J. L. Borges (con M. Guerrero), *El libro de los seres imaginarios* (1957)

Borges describe un cosmos, no una grilla. El universo rectangular de las versiones
anteriores era una conveniencia numérica: sus bordes rectos no significaban nada.
En v07 el universo es una **esfera** — y el calor que llega al borde no escapa: rebota.

## La simulación

{{< sim src="/simus/seres-termicos/v07-3d.html" title="Seres Térmicos — v07, universo esférico 3D" >}}

## Dos perspectivas, una sola física

**La vista del creador** (exterior): la cámara orbita la esfera con el mouse. Se ve
una bola de plasma —naranja y cian según el signo térmico de lo que la habita— con
un resplandor en el borde (*rim glow*). Sin seres, la esfera se apaga en negro
absoluto: el vacío térmico es oscuridad.

**La vista del ser** (interior): un recuadro muestra el mundo desde adentro de uno
de los seres. Los otros aparecen como masas brillantes flotando en la penumbra; la
pared de la esfera es un horizonte difuso de calor. La tecla **Tab** pasa al ser
siguiente: la misma física, dos ontologías.

## Física

### El stencil de 7 puntos

 $$\nabla^2 T_{i,j,k} = T_{i\pm1,j,k} + T_{i,j\pm1,k} + T_{i,j,k\pm1} - 6T_{i,j,k}$$ 
### Una condición CFL más exigente

 $$k = \frac{\alpha\,\Delta t}{\Delta x^2} \leq \frac{1}{6}$$ 
En 3D cada celda tiene seis vecinos tirando de ella (contra cuatro en 2D): el paso
de tiempo permitido es un tercio menor. La condición de von Neumann se encarga de
que el universo sea estable.

### El costo de existir en 3D

Una grilla $64^3$ son 262 144 celdas × ~13 operaciones ≈ 3.4 Mflops por paso —
trivial para un CPU a 60 pasos/s. La difusión corre en CPU; el volumen se sube a la
GPU como **textura 3D** (WebGL2) para el render.

### Ray marching volumétrico

Por cada píxel, un rayo atraviesa el volumen y acumula emisión (*front-to-back*):

 $$C_{\text{out}} = C_{\text{in}} + (1-\alpha_{\text{in}})\cdot\sigma\cdot C_{\text{voxel}}, \qquad \alpha_{\text{out}} = \alpha_{\text{in}} + (1-\alpha_{\text{in}})\cdot\sigma$$ 
con $\sigma \propto |T|$ y función de transferencia de incandescencia: $T>0$ recorre rojo→naranja→blanco; $T<0$, azul→cian; $T\approx0$ es transparente.

### El cosmos cerrado

El rayo intersecta la esfera $|\mathbf{r}|^2 = R^2$, y los seres que la tocan
rebotan con reflexión especular:

 $$\mathbf{v}' = \mathbf{v} - 2(\mathbf{v}\cdot\hat{n})\,\hat{n}$$ 
Un universo finito sin bordes: el calor no se pierde nunca, solo se redistribuye —
la termodinámica de un cosmos cerrado, en un solo buffer.

---

→ [← volver al proyecto](/projects/seres-termicos/) · [v08 — Espaciotiempo](/projects/seres-termicos/v08-espaciotiempo/)