+++
title = "Gráficos de movimiento"
date = "2026-06-26"
draft = false
math = true
weight = 7
description = "Gráficos posición-tiempo y velocidad-tiempo: pendiente, área y su relación con las ecuaciones."
tags = ["cap03", "cinemática", "gráficos", "x vs t", "v vs t", "pendiente", "área", "análisis gráfico"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Determinar velocidad y desplazamiento a partir de un gráfico $x(t)$.
- Determinar aceleración y desplazamiento a partir de un gráfico $v(t)$.
- Relacionar la pendiente y el área bajo la curva con las magnitudes físicas.

---

## Gráfico posición vs. tiempo — $x(t)$

En un gráfico de posición ($x$) en función del tiempo ($t$):

$$\text{pendiente} = \frac{\Delta x}{\Delta t} = v$$

La **pendiente** del gráfico $x(t)$ es la **velocidad**.

> 📷 *Imagen: gráfico x(t) con tres tramos: positivo, cero y negativo — Bigler pág. 216 (capturar)*

### Características del gráfico $x(t)$

| Forma de la curva | Significado |
|------------------|-------------|
| Recta con pendiente positiva | velocidad positiva constante (MRU) |
| Recta con pendiente negativa | velocidad negativa constante (MRU) |
| Recta horizontal | objeto en reposo ($v = 0$) |
| Curva cóncava hacia arriba | aceleración positiva (MRUV) |
| Curva cóncava hacia abajo | aceleración negativa (MRUV) |

> En el gráfico $x(t)$, el **valor** del eje $y$ es la posición del objeto. La **pendiente** es la velocidad.

---

## Gráfico velocidad vs. tiempo — $v(t)$

En un gráfico de velocidad ($v$) en función del tiempo ($t$):

$$\text{pendiente} = \frac{\Delta v}{\Delta t} = a \qquad \text{área bajo la curva} = \Delta x$$

La **pendiente** del gráfico $v(t)$ es la **aceleración**.
El **área entre la curva y el eje $t$** es el **desplazamiento**.

> 📷 *Imagen: gráfico v(t) con aceleración positiva, nula y negativa — Bigler pág. 218 (capturar)*

### Características del gráfico $v(t)$

| Forma | Significado |
|-------|-------------|
| Recta horizontal | velocidad constante, $a = 0$ (MRU) |
| Recta con pendiente positiva | aceleración positiva constante (MRUV) |
| Recta con pendiente negativa | aceleración negativa constante (MRUV) |
| Cruce por cero | objeto cambia de dirección |

### El área en el gráfico $v(t)$

- Área **por encima** del eje $t$ → desplazamiento positivo.
- Área **por debajo** del eje $t$ → desplazamiento negativo.
- El desplazamiento total = suma algebraica de todas las áreas.

**Ejemplo:**

> 📷 *Imagen: gráfico v(t) con áreas triangulares calculadas — Bigler pág. 220 (capturar)*

Entre $t = 0$ y $t = 4\ \text{s}$, $a = 2{,}5\ \text{m/s}^2$:

$$\Delta x = \frac{1}{2} \cdot base \cdot altura = \frac{1}{2} \cdot 4 \cdot 10 = 20\ \text{m}$$

Verificación con ecuación: $\Delta x = \frac{1}{2}at^2 = \frac{1}{2}(2{,}5)(4^2) = 20\ \text{m}$ ✓

---

## Relación entre los dos gráficos

| Gráfico $x(t)$ | ↔ | Gráfico $v(t)$ |
|----------------|---|----------------|
| pendiente = $v$ | | área = $\Delta x$ |
| recta | | $a = 0$ (horizontal) |
| parábola | | recta inclinada |
| punto más alto/bajo | | cruza el cero |

> 📷 *Imagen: par de gráficos x(t) y v(t) correspondientes — Bigler pág. 218 (capturar)*

---

## Regla general

En **cualquier** gráfico:
- La **pendiente** es la cantidad obtenida dividiendo el eje $y$ por el eje $x$.
- El **área** es la cantidad obtenida multiplicando ambos ejes.

$$\text{pendiente de } \frac{y}{x} = \frac{\Delta y}{\Delta x} \qquad \text{área de } x \cdot y$$

---

## Actividad con Tracker[^tracker]

1. Cargá un video de movimiento en Tracker[^tracker].
2. Obtené la tabla de $x$ vs. $t$.
3. Graficá $x(t)$ — ¿es recta (MRU) o parábola (MRUV)?
4. Graficá $v(t)$ — calculá la pendiente → aceleración.
5. Calculá el área bajo $v(t)$ → desplazamiento total.

---

## Para pensar

1. En un gráfico $v(t)$, el objeto está en $v = +5\ \text{m/s}$ durante 3 s, luego frena y llega a $v = -2\ \text{m/s}$ en 2 s más. ¿Cuál es el desplazamiento total?
2. Un gráfico $x(t)$ tiene una parábola que se abre hacia abajo. ¿La aceleración es positiva o negativa?
3. ¿Por qué no se puede determinar la posición de un objeto a partir de un gráfico $v(t)$ solo?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
