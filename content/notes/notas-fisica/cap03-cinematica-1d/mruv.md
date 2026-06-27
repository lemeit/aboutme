+++
title = "Movimiento Rectilíneo Uniformemente Variado (MRUV)"
date = "2026-06-26"
draft = false
math = true
weight = 6
description = "Aceleración constante, ecuaciones de movimiento, tabla de resolución y ejemplos completos."
tags = ["cap03", "cinemática", "MRUV", "aceleración constante", "ecuaciones de movimiento", "gráficos"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Reconocer el MRUV y sus condiciones.
- Derivar y aplicar las cuatro ecuaciones de movimiento.
- Elegir la ecuación correcta según las variables disponibles.
- Resolver problemas usando el método GUESS con tabla de variables.
- Interpretar gráficos $x(t)$ y $v(t)$ para el MRUV.

---

## Definición

El **Movimiento Rectilíneo Uniformemente Variado (MRUV)** es el movimiento de un objeto que se desplaza en línea recta con **aceleración constante** ($a = \text{cte} \neq 0$).

---

## Derivación de las ecuaciones de movimiento

### Punto de partida

La velocidad media es:

$$v_{med} = \frac{\Delta x}{t} \implies \Delta x = v_{med} \cdot t$$

Con aceleración constante, la velocidad media es el promedio de inicial y final:

$$v_{med} = \frac{v_0 + v}{2}$$

La aceleración es:

$$a = \frac{v - v_0}{t} \implies v - v_0 = at$$

### Las cuatro ecuaciones

Combinando estas relaciones se obtienen las cuatro ecuaciones de Newton:

$$\boxed{\frac{\Delta x}{t} = \frac{v_0 + v}{2}} \qquad \text{(sin } a\text{)}$$

$$\boxed{v = v_0 + at} \qquad \text{(sin } \Delta x\text{)}$$

$$\boxed{\Delta x = v_0 t + \tfrac{1}{2}at^2} \qquad \text{(sin } v\text{)}$$

$$\boxed{v^2 - v_0^2 = 2a \Delta x} \qquad \text{(sin } t\text{)}$$

### Resumen

| Ecuación | Variable ausente |
|----------|-----------------|
| $\dfrac{\Delta x}{t} = \dfrac{v_0 + v}{2}$ | $a$ |
| $v = v_0 + at$ | $\Delta x$ |
| $\Delta x = v_0 t + \tfrac{1}{2}at^2$ | $v$ |
| $v^2 - v_0^2 = 2a \Delta x$ | $t$ |

---

## Cómo elegir la ecuación — tabla de variables

Para cada problema, hacé una tabla con dirección y valor de cada variable:

| Variable | Dirección | Valor |
|----------|-----------|-------|
| $\Delta x$ | ↑ o ↓ | ? o dado |
| $v_0$ | ↑ o ↓ | ? o dado |
| $v$ | ↑ o ↓ | ? o dado |
| $a$ | ↑ o ↓ | ? o dado |
| $t$ | N/A | ? o dado |

Elegís la ecuación que contiene la incógnita y en la que todas las demás variables son conocidas.

### Condiciones especiales

| Situación en el enunciado | Condición |
|--------------------------|-----------|
| "parte del reposo" | $v_0 = 0$ |
| "se detiene" | $v = 0$ |
| "velocidad constante" | $a = 0$ |
| "caída libre" | $a = g \approx 10\ \text{m/s}^2$ hacia abajo |
| "altura máxima" | $v = 0$ en ese instante |

---

## Representación con vectores positivos y negativos

Las variables de posición, velocidad y aceleración son **vectores** — en 1D su signo indica dirección:

- **Posición:** positiva si está del lado positivo del origen.
- **Velocidad:** positiva si se mueve en la dirección positiva.
- **Aceleración:** positiva si la velocidad "tiende hacia positivo" (aumenta en dirección positiva o disminuye en dirección negativa).

Un objeto puede tener velocidad positiva y aceleración negativa al mismo tiempo (está frenando). Un objeto puede tener velocidad cero y aún estar acelerando.

---

## Gráficos del MRUV

**Gráfico $x(t)$:** parábola

- Cóncava hacia arriba → $a > 0$ (velocidad creciente en dirección positiva)
- Cóncava hacia abajo → $a < 0$

**Gráfico $v(t)$:** recta inclinada

- Pendiente = aceleración $a$
- Área bajo la curva = desplazamiento $\Delta x$

> 📷 *Imagen: gráfico v(t) con área triangular y cálculo de desplazamiento — Bigler pág. 220 (capturar)*

---

## Ejemplos resueltos

### Ejemplo 1 — Gato saltando (caída libre)

Un gato salta desde una heladera de 1,8 m. ¿Con qué velocidad llega al suelo?

**Tabla** (positivo = hacia abajo):

| Variable | Dir | Valor |
|----------|-----|-------|
| $\Delta x$ | ↓ | $+1{,}8\ \text{m}$ |
| $v_0$ | — | $0$ |
| $v$ | ↓ | $?$ |
| $a = g$ | ↓ | $+10\ \text{m/s}^2$ |
| $t$ | — | N/A |

Uso $v^2 - v_0^2 = 2a\Delta x$:

$$v^2 = 2 \times 10 \times 1{,}8 = 36 \implies v = 6\ \text{m/s}$$

---

### Ejemplo 2 — Manzana lanzada hacia arriba

Una manzana es lanzada hacia arriba con $v_0 = 8\ \text{m/s}$. Cae al mismo punto de lanzamiento. ¿Cuánto tiempo estuvo en el aire?

**Tabla** (positivo = hacia arriba):

| Variable | Dir | Valor |
|----------|-----|-------|
| $\Delta x$ | — | $0$ |
| $v_0$ | ↑ | $+8\ \text{m/s}$ |
| $a$ | ↓ | $-10\ \text{m/s}^2$ |
| $t$ | — | $?$ |

Uso $\Delta x = v_0 t + \tfrac{1}{2}at^2$:

$$0 = 8t - 5t^2 = t(8 - 5t)$$

Soluciones: $t = 0$ (instante inicial) y $t = \frac{8}{5} = 1{,}6\ \text{s}$ ✓

---

### Ejemplo 3 — Auto con freno paracaídas

Un auto de carreras va a $80\ \text{m/s}$ cuando abre un paracaídas que le produce una desaceleración de $4\ \text{m/s}^2$. ¿Cuántos metros recorre hasta detenerse?

**Tabla** (positivo = dirección del movimiento):

| Variable | Valor |
|----------|-------|
| $v_0$ | $+80\ \text{m/s}$ |
| $v$ | $0$ |
| $a$ | $-4\ \text{m/s}^2$ |
| $\Delta x$ | $?$ |

Uso $v^2 - v_0^2 = 2a\Delta x$:

$$0 - 6400 = 2(-4)\Delta x \implies \Delta x = \frac{6400}{8} = 800\ \text{m}$$

---

## Actividad con Tracker[^tracker]

1. Filmá un objeto que acelera (pelota rodando por una rampa, carrito con peso colgante).
2. Graficá $x(t)$ — debe ser una parábola.
3. Graficá $x$ vs. $t^2$ — si el movimiento es MRUV desde el reposo, debe ser una **recta** con pendiente $a/2$.
4. Calculá $a = 2 \times \text{pendiente}$ y compará con el valor esperado.

---

## Para pensar

1. Un objeto tiene $v_0 > 0$ y $a < 0$. ¿Qué pasa con su velocidad? ¿En qué momento cambia de dirección?
2. Dos objetos salen del reposo con la misma aceleración pero desde posiciones distintas. ¿Tienen la misma velocidad después de 5 s? ¿Y la misma posición?
3. En el gráfico $v(t)$ de un MRUV, ¿qué significa que la recta cruce el eje horizontal?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación al Diseño Curricular DGCyE: Prof. Ing. Luciano Lamaita, 2026.*
