+++
title = "Caída Libre"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "La gravedad como aceleración constante. Caída, lanzamiento vertical y punto más alto."
tags = ["U2", "Cinemática", "caída libre", "gravedad", "lanzamiento vertical", "MRUV"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Reconocer la caída libre como un caso particular del MRUV con $a = g$.
- Aplicar las ecuaciones de movimiento a problemas de caída y lanzamiento vertical.
- Identificar las condiciones especiales: punto más alto, sube y vuelve, caída desde el reposo.

---

## ¿Qué es la caída libre?

**Caída libre** es el movimiento de un objeto que acelera hacia el centro de la Tierra bajo el efecto de la gravedad, cuando los efectos de otras fuerzas (como el aire) son despreciables.

$$g \approx 9{,}8\ \text{m/s}^2 \approx 10\ \text{m/s}^2 \quad \text{(valor de trabajo)}$$

> **Importante:** un objeto que baja por una rampa **no** está en caída libre, aunque la gravedad sea la causa del movimiento. La rampa limita su trayectoria y el objeto no cae libremente.

### ¿Por qué todos los objetos caen igual?

Galileo demostró —supuestamente desde la Torre de Pisa— que objetos de distinta masa caen con la misma aceleración. Esto vale **siempre que el aire sea despreciable**. En presencia de aire, una pluma cae más lento que una moneda porque la resistencia aerodinámica es comparativamente mayor para la pluma.

---

## La gravedad es un vector

Al ser un vector, $g$ puede ser positiva o negativa según el sistema de referencia elegido. La convención más común:

| Convención | $g$ | Cuándo usarla |
|-----------|-----|---------------|
| Positivo hacia abajo | $+10\ \text{m/s}^2$ | Solo hay caída (sin lanzamiento hacia arriba) |
| Positivo hacia arriba | $-10\ \text{m/s}^2$ | Lanzamientos verticales hacia arriba |

> **Regla práctica:** elegí el positivo en la dirección del movimiento inicial. Si el objeto cae desde el reposo, positivo hacia abajo es más cómodo.

---

## Ecuaciones — igual que el MRUV, con $a = g$

| Ecuación | Uso |
|----------|-----|
| $v = v_0 + g\,t$ | velocidad en cualquier instante |
| $x = x_0 + v_0\,t + \tfrac{1}{2}g\,t^2$ | posición en cualquier instante |
| $v^2 = v_0^2 + 2g\,\Delta x$ | velocidad final sin usar $t$ |

---

## Situaciones típicas

### 1. Caída desde el reposo

El objeto parte con $v_0 = 0$ desde una altura $h$. Positivo hacia abajo.

$$x = \tfrac{1}{2}g\,t^2 \qquad v = g\,t$$

**Ejemplo:** ¿Cuánto tarda en caer una piedra desde 20 m?

$$20 = \tfrac{1}{2} \cdot 10 \cdot t^2 \implies t^2 = 4 \implies t = 2\ \text{s}$$

Velocidad al llegar: $v = 10 \times 2 = 20\ \text{m/s}$

---

### 2. Lanzamiento vertical hacia arriba

El objeto sube, se detiene un instante y vuelve a caer. Positivo hacia arriba → $g = -10\ \text{m/s}^2$.

**Condición clave — punto más alto:**

$$v = 0 \quad \text{(se detiene un instante)}$$

> ¿La aceleración en el punto más alto es cero? **No.** La gravedad sigue actuando: $a = g = -10\ \text{m/s}^2$. La velocidad es cero por un instante, pero la aceleración no lo es nunca durante el vuelo.

**Altura máxima** (partiendo de $x_0 = 0$):

$$v^2 = v_0^2 - 2g\,h_{max} \implies h_{max} = \frac{v_0^2}{2g}$$

---

### 3. Sube y vuelve al mismo punto

Si el objeto regresa a la misma altura desde donde fue lanzado:

- El desplazamiento total es $\Delta x = 0$
- El tiempo de subida **es igual** al tiempo de bajada
- La rapidez al llegar es **igual** a la rapidez inicial: $|v| = |v_0|$, pero en dirección contraria

---

## Ejemplos resueltos

### Ejemplo 1 — Caída

Un gato salta desde una heladera de $1{,}8\ \text{m}$ de altura. ¿Con qué velocidad llega al suelo? (Positivo hacia abajo, $v_0 = 0$)

$$v^2 = 2 \cdot 10 \cdot 1{,}8 = 36 \implies v = 6\ \text{m/s}$$

---

### Ejemplo 2 — Lanzamiento hacia arriba

Se lanza una manzana hacia arriba con $v_0 = 8\ \text{m/s}$. La manzana vuelve a caer al mismo punto. ¿Cuánto tiempo estuvo en el aire? (Positivo hacia arriba, $g = -10\ \text{m/s}^2$, $\Delta x = 0$)

$$0 = v_0\,t - \tfrac{1}{2}g\,t^2 = t\left(v_0 - \tfrac{1}{2}g\,t\right)$$

La solución $t = 0$ es el instante inicial. La otra:

$$t = \frac{2\,v_0}{g} = \frac{2 \times 8}{10} = 1{,}6\ \text{s}$$

---

### Ejemplo 3 — Altura máxima

¿A qué altura llegó la manzana del ejemplo anterior?

$$h_{max} = \frac{v_0^2}{2g} = \frac{64}{20} = 3{,}2\ \text{m}$$

---

## Para pensar

1. Se dejan caer simultáneamente una piedra de 1 kg y otra de 5 kg desde la misma altura. ¿Cuál llega primero? ¿Por qué?
2. Si lanzás una pelota hacia arriba y la atrapás en el mismo punto, ¿la velocidad al atraparla es mayor, igual o menor que al lanzarla?
3. Un objeto tiene $v = 0$ en un instante. ¿Eso significa que está en reposo? ¿Puede tener aceleración en ese instante?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación al Diseño Curricular DGCyE: Prof. Ing. Luciano Lamaita, 2026.*
