+++
title = "Rapidez y velocidad"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Rapidez escalar vs. velocidad vectorial, velocidad media e instantánea, movimiento uniforme."
tags = ["cap03", "cinemática", "velocidad", "rapidez", "velocidad media", "MRU"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir entre rapidez (escalar) y velocidad (vector).
- Calcular la velocidad media a partir de desplazamiento y tiempo.
- Identificar el movimiento uniforme (MRU).

---

## Rapidez vs. velocidad

| Magnitud | Tipo | Definición |
|----------|------|-----------|
| **Rapidez** | Escalar | Tasa a la que se mueve un objeto; siempre ≥ 0 |
| **Velocidad** ($\vec{v}$) | Vector | Tasa de cambio de posición; tiene dirección |

La velocidad instantánea tiene el mismo valor que la rapidez instantánea, pero incluye la dirección.

$$v_{med} = \frac{\Delta x}{t} = \frac{x_f - x_i}{t}$$

Unidad SI: $\text{m/s}$ (también: $1\ \text{m/s} \approx 2{,}24\ \text{mi/h} \approx 3{,}6\ \text{km/h}$)

---

## Signo de la velocidad en 1D

En una dimensión, el signo indica la dirección:

- $v > 0$ → objeto moviéndose en la dirección positiva
- $v < 0$ → objeto moviéndose en la dirección negativa
- $v = 0$ → objeto en reposo (en ese instante)

> Si un objeto regresa a su punto de partida, su **velocidad media es cero** (el desplazamiento es cero), aunque su rapidez media sea mayor que cero.

---

## Movimiento uniforme (MRU)

El **movimiento uniforme** es el movimiento a velocidad constante: misma rapidez y misma dirección.

$$x = x_0 + v \cdot t$$

La ecuación de velocidad media se convierte en la ecuación de posición del MRU.

---

## Velocidad media vs. velocidad instantánea

- **Velocidad media:** calculada sobre un intervalo de tiempo ($\bar{v} = \Delta x / \Delta t$).
- **Velocidad instantánea:** velocidad en un instante preciso (la pendiente del gráfico $x$ vs. $t$ en ese punto).

Si la velocidad es constante, velocidad media e instantánea coinciden.

---

## Ejemplos resueltos

**Ejemplo 1:** un auto recorre 1 200 m en 60 s. ¿Cuál es su velocidad media?

$$v_{med} = \frac{d}{t} = \frac{1200}{60} = 20\ \text{m/s}$$

**Ejemplo 2:** una persona camina a $1{,}25\ \text{m/s}$ durante una distancia de 320 m. ¿Cuánto tardó?

$$v_{med} = \frac{d}{t} \implies t = \frac{d}{v_{med}} = \frac{320}{1{,}25} = 256\ \text{s}$$

---

## Actividad con Tracker[^tracker]

1. Filmá un objeto moviéndose a velocidad aproximadamente constante.
2. Graficá $x$ vs. $t$ — debe ser una recta.
3. Calculá la pendiente → es la velocidad media.
4. Compará con $v = \Delta x / t$.

---

## Para pensar

1. Un corredor completa 400 m (una vuelta) en 52 s. ¿Cuál es su rapidez media? ¿Cuál es su velocidad media? ¿Por qué difieren?
2. ¿Puede un objeto tener rapidez media positiva y velocidad media cero? ¿Cuándo?
3. ¿Qué representa la pendiente en un gráfico $x(t)$?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
