+++
title = "Tiro Oblicuo (Movimiento Proyectil)"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Movimiento en dos dimensiones: componentes horizontal y vertical independientes."
tags = ["U2", "Cinemática", "tiro oblicuo", "proyectil", "movimiento 2D", "vectores"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Comprender que el movimiento proyectil combina MRU horizontal con MRUV vertical de forma independiente.
- Separar un lanzamiento en sus componentes $x$ e $y$.
- Resolver problemas básicos de tiro horizontal y lanzamiento con ángulo.

---

## ¿Qué es un proyectil?

Un **proyectil** es cualquier objeto lanzado que, una vez en el aire, solo está sometido a la gravedad (despreciamos el aire).

**Ejemplos:** una pelota pateada, una piedra arrojada, agua que sale de una manguera horizontal.

> **La clave del tiro oblicuo:** el movimiento horizontal y el vertical son **independientes entre sí**. La gravedad solo afecta al movimiento vertical; el movimiento horizontal se mantiene constante.

---

## Dos movimientos simultáneos

| Dirección | Movimiento | Aceleración | Ecuación |
|-----------|-----------|-------------|---------|
| Horizontal ($x$) | MRU | $a_x = 0$ | $x = v_x \cdot t$ |
| Vertical ($y$) | MRUV (caída libre) | $a_y = g$ | $y = v_{0y}\,t + \tfrac{1}{2}g\,t^2$ |

El **tiempo** es la variable que vincula ambas direcciones: el mismo $t$ vale para $x$ e $y$.

---

## Tiro horizontal

El objeto sale con velocidad puramente horizontal ($v_{0y} = 0$). Es el caso más sencillo.

$$x = v_x \cdot t \qquad y = \tfrac{1}{2}g\,t^2$$

**Estrategia:**
1. Con la ecuación vertical encontrás el tiempo de vuelo $t$ a partir de la altura $h$.
2. Con ese $t$ calculás el alcance horizontal $x$.

### Ejemplo

Una pelota rueda por una mesa y cae desde $h = 1{,}25\ \text{m}$ con velocidad horizontal $v_x = 3\ \text{m/s}$. ¿Dónde cae?

**Paso 1 — tiempo de vuelo** (positivo hacia abajo, $v_{0y}=0$):

$$h = \tfrac{1}{2}g\,t^2 \implies 1{,}25 = 5\,t^2 \implies t^2 = 0{,}25 \implies t = 0{,}5\ \text{s}$$

**Paso 2 — alcance horizontal:**

$$x = v_x \cdot t = 3 \times 0{,}5 = 1{,}5\ \text{m}$$

> La pelota cae $1{,}5\ \text{m}$ adelante de la mesa.

---

## Lanzamiento con ángulo

Si el objeto sale con velocidad $v_0$ formando un ángulo $\theta$ con la horizontal, hay que descomponer el vector velocidad inicial:

$$v_{0x} = v_0 \cos\theta \qquad v_{0y} = v_0 \sin\theta$$

Luego cada componente sigue sus propias ecuaciones (horizontal = MRU, vertical = MRUV).

**Dato clave:** el ángulo que maximiza el alcance horizontal es $\theta = 45°$.

---

## Experimento mental — Bigler

Bigler propone este experimento: soltás una pelota y al mismo instante golpeás otra horizontalmente desde la misma altura. ¿Cuál llega primero al suelo?

**Ambas llegan al mismo tiempo.** La velocidad horizontal no afecta la caída vertical — ambas tienen la misma aceleración hacia abajo y la misma altura inicial.

---

## Trayectoria parabólica

La combinación de movimiento horizontal uniforme + caída libre produce una trayectoria **parabólica**. Esto se puede verificar eliminando $t$ entre las dos ecuaciones:

$$y = \frac{g}{2\,v_x^2}\,x^2$$

que es la ecuación de una parábola.

---

## Actividad de campo — Tracker[^tracker]

1. Filmá una pelota lanzada horizontalmente desde una mesa (o lanzada con ángulo desde el suelo).
2. En Tracker[^tracker] marcá la posición en cada cuadro.
3. Graficá $x(t)$ y $y(t)$ por separado.
4. Verificá que $x(t)$ es una recta (MRU) y $y(t)$ es una parábola (MRUV).
5. Calculá $v_x$ desde la pendiente de $x(t)$ y $g$ desde la curvatura de $y(t)$.

> **Pregunta guía:** ¿el valor de $g$ que obtenés del video coincide con $10\ \text{m/s}^2$? ¿Qué podría hacer que no coincida exactamente?

---

## Para pensar

1. ¿Por qué la trayectoria de un proyectil es una parábola y no una recta?
2. Si lanzás dos pelotas desde la misma altura —una horizontalmente y la otra simplemente la soltás— ¿cuál llega primero al suelo?
3. Un arquero apunta directo al blanco (horizontalmente). ¿La flecha llega al blanco, por encima o por debajo? ¿Por qué?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
