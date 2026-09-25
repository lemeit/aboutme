+++
title = 'Seres Térmicos'
date = '2026-09-25'
lastmod = '2026-09-25'
weight = 10
draft = false
tags = ['física', 'simulación', 'WebGL2', 'Borges', 'visualización']
description = 'Experimento de física computacional inspirado en el cuento "Seres Térmicos" de Jorge Luis Borges. Simulaciones interactivas de campos térmicos con ciclo de vida, renderizado volumétrico 3D y visualización espaciotemporal.'
+++

Experimento computacional de física y literatura, inspirado en el texto de **Jorge Luis Borges**:

> "cada hombre, cada ser, era un organismo hecho de temperaturas cambiantes.
> La humanidad de la época saturnina fue un ciego y sordo e impalpable
> conjunto de calores y fríos articulados."

Los seres no tienen cuerpo sólido ni gaseoso: son distribuciones gaussianas de calor y frío
que nacen del vacío, consumen energía, se reproducen y mueren.

## Simulaciones

| Versión | Descripción | Abrir |
|---------|-------------|-------|
| **v06 — Ciclo de vida** | Campo 2D · presupuesto energético individual · gráficas en tiempo real | [▶ abrir](https://lemeit.github.io/simus/seres-termicos/v06-ciclovida.html) |
| **v07 — 3D esférico** | Campo 3D · esfera de plasma · ray marching WebGL2 · vista interior del ser | [▶ abrir](https://lemeit.github.io/simus/seres-termicos/v07-3d.html) |
| **v08 — Espaciotiempo** | Campo 2D × tiempo → volumen 3D · worldtubes de Borges | [▶ abrir](https://lemeit.github.io/simus/seres-termicos/v08-espaciotiempo.html) |

*Las simulaciones corren completamente en el navegador — no hay servidor, no hay datos enviados.*

## Física

El sistema resuelve la **ecuación del calor** con fuentes individuales (los seres) y amortiguación del vacío:

$$\frac{\partial T}{\partial t} = \alpha \nabla^2 T - \lambda T + \sum_i S_i(\mathbf{r}, t)$$

Cada ser tiene un **presupuesto energético** $E_i(t)$ que se drena a tasa constante (metabolismo $\mu$).
Cuando $E_i \leq 0$ el ser muere; cuando $E_i > r \cdot E_0$ se reproduce.
La visualización 3D usa **ray marching volumétrico** sobre una textura 3D en WebGL2.

→ [Documentación técnica completa (ecuaciones, estabilidad numérica, conexión con Borges)](https://github.com/lemeit/simus/blob/main/seres-termicos/README.md)

## Repositorio

Código fuente en [github.com/lemeit/simus](https://github.com/lemeit/simus).
