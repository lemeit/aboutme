+++
title = "Movimiento Rectilíneo Uniformemente Variado (MRUV)"
date = "2026-06-25"
draft = false
math = true
description = "Aceleración constante, ecuaciones de movimiento y resolución de problemas."
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Definir aceleración y calcularla a partir de velocidades inicial, final y tiempo.
- Reconocer la diferencia entre velocidad constante (MRU) y aceleración constante (MRUV).
- Aplicar las ecuaciones de movimiento para resolver problemas en una dimensión.
- Identificar situaciones de caída libre como caso particular del MRUV.

---

## ¿Qué es la aceleración?

En el MRU la velocidad no cambia. En el **MRUV**, la velocidad cambia, y lo hace a una **tasa constante**: esa tasa es la **aceleración**.

$$a = \frac{\Delta v}{t} = \frac{v - v_0}{t}$$

| Símbolo | Cantidad | Unidad SI |
|---------|----------|-----------|
| $v_0$ | velocidad inicial | m/s |
| $v$ | velocidad final | m/s |
| $a$ | aceleración | m/s² |
| $t$ | tiempo | s |
| $d$ | desplazamiento | m |

> **Cómo leer m/s²:** "metros por segundo, por segundo". Si $a = 5\ \text{m/s}^2$, la velocidad aumenta $5\ \text{m/s}$ cada segundo.

### Aceleración: signo y dirección

La aceleración es un **vector**. Su signo indica si la velocidad está aumentando o disminuyendo en la dirección positiva elegida.

- $a > 0$: la velocidad se vuelve más positiva (objeto acelerando en dirección positiva, o frenando en dirección negativa).
- $a < 0$: la velocidad se vuelve más negativa (objeto frenando en dirección positiva, o acelerando en dirección negativa).

> **Importante:** en Física no usamos la palabra "desaceleración". Un objeto que frena tiene aceleración negativa (si va en dirección positiva). La aceleración siempre se describe con su signo.

### Ejemplo

Un auto parte de $v_0 = +15\ \text{m/s}$ y llega a $v = +40\ \text{m/s}$ en $t = 5\ \text{s}$.

$$a = \frac{v - v_0}{t} = \frac{40 - 15}{5} = \frac{25}{5} = +5\ \text{m/s}^2$$

La velocidad en cada segundo sería:

| $t$ (s) | 0 | 1 | 2 | 3 | 4 | 5 |
|---------|---|---|---|---|---|---|
| $v$ (m/s) | +15 | +20 | +25 | +30 | +35 | +40 |

---

## Las ecuaciones de movimiento

Para un objeto con **aceleración constante**, existen cuatro ecuaciones que relacionan posición, velocidad, aceleración y tiempo. Solo hace falta saber tres de las cinco variables ($v_0$, $v$, $a$, $t$, $d$) para encontrar las otras dos.

### Derivación (cómo se obtienen)

Partimos de la definición de velocidad media y aceleración:

$$v_{med} = \frac{d}{t} \qquad a = \frac{v - v_0}{t}$$

Con aceleración constante, la velocidad media es el promedio de la inicial y la final:

$$v_{med} = \frac{v_0 + v}{2}$$

Combinando estas relaciones se obtienen las cuatro ecuaciones:

### Tabla de ecuaciones

| Ecuación | Forma | Variables (falta) |
|----------|-------|-------------------|
| Velocidad media | $\dfrac{d}{t} = \dfrac{v_0 + v}{2}$ | $a$ |
| Definición de $a$ | $v - v_0 = at$ | $d$ |
| Posición con $a$ | $d = v_0 t + \tfrac{1}{2}at^2$ | $v$ |
| Sin tiempo | $v^2 - v_0^2 = 2ad$ | $t$ |

### ¿Cómo elegir la ecuación?

Hacé una tabla con lo que **sabés** y lo que **buscás**. Elegí la ecuación que contenga la incógnita y en la que todas las demás variables sean conocidas.

> Casos especiales:
> - "parte del reposo" → $v_0 = 0$
> - "se detiene" → $v = 0$
> - "velocidad constante" → $a = 0$
> - "caída libre" → $a = g \approx 10\ \text{m/s}^2$ hacia abajo

---

## Caída libre

La **caída libre** es el caso particular del MRUV en que la aceleración es la gravedad terrestre:

$$g \approx 9{,}8\ \text{m/s}^2 \approx 10\ \text{m/s}^2 \text{ (valor de trabajo)}$$

La gravedad siempre actúa **hacia abajo**. Si elegimos el positivo hacia arriba, entonces $a = -10\ \text{m/s}^2$.

### Situaciones típicas

| Situación | Condición inicial | Condición final / clave |
|-----------|------------------|------------------------|
| Caída desde el reposo | $v_0 = 0$ | $a = g$ hacia abajo |
| Lanzamiento vertical hacia arriba | $v_0 > 0$ (hacia arriba) | En el punto más alto: $v = 0$ |
| Sube y vuelve al punto inicial | $d = 0$ | $\|v\| = \|v_0\|$, dirección opuesta |

> **Aclaración:** un objeto que baja por una rampa no está en caída libre, aunque la gravedad sea la causa del movimiento. La rampa restringe su trayectoria.

---

## Ejemplos resueltos

### Ejemplo 1 — Frenada

Un auto viaja a $v_0 = 30\ \text{m/s}$ y frena uniformemente hasta detenerse en $t = 6\ \text{s}$.
¿Cuánto espacio recorre hasta detenerse?

**Datos:** $v_0 = 30\ \text{m/s}$, $v = 0$, $t = 6\ \text{s}$, busco $d$.

Uso $\dfrac{d}{t} = \dfrac{v_0 + v}{2}$:

$$d = t \cdot \frac{v_0 + v}{2} = 6 \cdot \frac{30 + 0}{2} = 6 \cdot 15 = 90\ \text{m}$$

---

### Ejemplo 2 — Caída libre

Un gato salta desde una heladera de $1{,}8\ \text{m}$ de altura. ¿Con qué velocidad llega al suelo?

**Datos:** $d = 1{,}8\ \text{m}$, $v_0 = 0$, $a = g = +10\ \text{m/s}^2$ (abajo = positivo), busco $v$.

Uso $v^2 - v_0^2 = 2ad$:

$$v^2 = 2 \cdot 10 \cdot 1{,}8 = 36 \implies v = 6\ \text{m/s}$$

---

### Ejemplo 3 — Lanzamiento hacia arriba

Se lanza una pelota hacia arriba con $v_0 = 15\ \text{m/s}$. ¿A qué altura máxima llega?

**Datos:** $v_0 = +15\ \text{m/s}$ (positivo = arriba), $v = 0$ (máxima altura), $a = -10\ \text{m/s}^2$, busco $d$.

$$d = \frac{v^2 - v_0^2}{2a} = \frac{0 - 225}{2 \cdot (-10)} = \frac{-225}{-20} = 11{,}25\ \text{m}$$

---

## Actividad de campo — Carrera en el patio

Usarás la app **Tracker** para filmar a un compañero corriendo desde el reposo y medir la aceleración.

1. Filmá a alguien saliendo desde el reposo y acelerando 10–15 metros.
2. Cargá el video en Tracker y marcá la posición en cada cuadro.
3. Graficá $v(t)$: si el movimiento es MRUV, el gráfico debe ser una **recta con pendiente** $a$.
4. Calculá la aceleración media desde la pendiente.
5. Compará con el valor obtenido de las ecuaciones usando $v_0$, $v$ final y $t$.

> **Pregunta guía:** ¿es la aceleración de una persona al saltar desde el reposo constante durante toda la carrera, o solo en algún tramo?

---

## Para pensar

1. Un objeto tiene velocidad positiva y aceleración negativa. ¿Está acelerando o frenando? ¿Puede cambiar de dirección?
2. En el punto más alto de un lanzamiento vertical, $v = 0$. ¿La aceleración también es cero en ese instante? ¿Por qué?
3. Dos objetos se dejan caer desde la misma altura: uno pesa 1 kg y el otro 10 kg. ¿Cuál llega primero al suelo?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación al Diseño Curricular DGCyE: Prof. Ing. Luciano Lamaita.*
