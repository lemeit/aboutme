+++
title = "Movimiento Rectilíneo Uniforme (MRU)"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Velocidad constante, ecuación de posición, gráficos x(t) y v(t), resolución de problemas."
tags = ["cap03", "cinemática", "MRU", "velocidad constante", "posición", "gráficos"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Reconocer y describir un movimiento rectilíneo uniforme.
- Aplicar la ecuación $x = x_0 + v \cdot t$ para calcular posición, velocidad o tiempo.
- Interpretar gráficos $x(t)$ y $v(t)$ para el MRU.
- Resolver problemas con el método GUESS.

---

## Definición

El **Movimiento Rectilíneo Uniforme (MRU)** es el movimiento de un objeto que se desplaza en línea recta con velocidad constante.

Condición: $a = 0 \implies v = v_0 = v_{med} = \text{constante}$

---

## Ecuación de movimiento

$$\boxed{x = x_0 + v \cdot t}$$

Equivalentemente, usando desplazamiento:

$$\Delta x = v \cdot t \qquad \text{donde} \quad v_{med} = \frac{\Delta x}{t}$$

| Variable | Magnitud | Unidad |
|----------|----------|--------|
| $x$ | posición final | m |
| $x_0$ | posición inicial | m |
| $v$ | velocidad (constante) | m/s |
| $t$ | tiempo | s |

> Si el objeto **parte del reposo o del origen**: $x_0 = 0$.
> Si **se detiene**: $v = 0$ → pero eso ya no es MRU.

---

## Gráficos del MRU

**Gráfico $x(t)$:** recta con pendiente = $v$

$$\text{pendiente} = \frac{\Delta x}{\Delta t} = v$$

> 📷 *Imagen: gráfico x(t) con pendiente positiva, cero y negativa — Bigler pág. 216 (capturar)*

**Gráfico $v(t)$:** recta horizontal

$$v = \text{constante} \implies \text{línea horizontal}$$

El **área bajo la curva** en el gráfico $v(t)$ es el desplazamiento:

$$\Delta x = v \cdot t = \text{área del rectángulo bajo la recta}$$

---

## Tabla de resolución de problemas

Para elegir la ecuación correcta, hacé una tabla con lo que sabés y lo que buscás:

| Situación | Condición |
|-----------|-----------|
| "parte del reposo" | $v_0 = 0$ |
| "se detiene" | $v = 0$ |
| "velocidad constante" | $a = 0$, use $\Delta x = v \cdot t$ |

---

## Ejemplos resueltos

### Ejemplo 1 — Velocidad media

Un auto recorre 1 200 m en 60 s. ¿Cuál es su velocidad media?

**G:** $\Delta x = 1200\ \text{m}$, $t = 60\ \text{s}$ · **U:** $v = ?$

$$v = \frac{\Delta x}{t} = \frac{1200}{60} = 20\ \text{m/s}$$

---

### Ejemplo 2 — Tiempo

Una persona camina a $1{,}25\ \text{m/s}$. ¿Cuánto tarda en recorrer 320 m?

**G:** $v = 1{,}25\ \text{m/s}$, $\Delta x = 320\ \text{m}$ · **U:** $t = ?$

$$t = \frac{\Delta x}{v} = \frac{320}{1{,}25} = 256\ \text{s}$$

---

### Ejemplo 3 — Posición

Un ciclista sale de $x_0 = 0$ a $v = 4\ \text{m/s}$. ¿Dónde está a los 7 min?

$$x = x_0 + v \cdot t = 0 + 4 \times (7 \times 60) = 4 \times 420 = 1680\ \text{m}$$

---

### Ejemplo 4 — Pista circular

Un auto da una vuelta completa a una pista circular de radio 100 m a velocidad constante.

- **Distancia recorrida:** $2\pi r = 2\pi \times 100 \approx 628\ \text{m}$
- **Desplazamiento:** $0\ \text{m}$ (volvió al punto de partida)
- **Velocidad media:** $0\ \text{m/s}$ (desplazamiento / tiempo = 0)
- **Rapidez media:** $\frac{628\ \text{m}}{t}$ (depende del tiempo)

---

## Actividad con Tracker

1. Filmá un objeto moviéndose a velocidad aproximadamente constante (por ejemplo, un carrito rodando en una superficie plana).
2. Marcá la posición cuadro a cuadro.
3. Graficá $x(t)$ — si es una recta, el movimiento es MRU.
4. Calculá la pendiente → es la velocidad.
5. Compará con $v = \Delta x / t$ medido directamente.

---

## Ejercicios

1. Una ciclista sale de $x_0 = 0$ a velocidad constante. A los 3 min está a 720 m. Calculá su velocidad en m/s y km/h.
2. ¿Cuánto tiempo tardará en recorrer 2 km?
3. Esbozá el gráfico $x(t)$ entre $t = 0$ y $t = 8\ \text{min}$ y el gráfico $v(t)$ correspondiente.

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación al Diseño Curricular DGCyE: Prof. Ing. Luciano Lamaita, 2026.*
