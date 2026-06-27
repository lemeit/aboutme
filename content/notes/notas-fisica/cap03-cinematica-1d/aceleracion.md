+++
title = "Aceleración lineal"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Aceleración como cambio de velocidad, signo y dirección, caída libre como caso especial."
tags = ["cap03", "cinemática", "aceleración", "MRUV", "caída libre", "gravedad"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Calcular la aceleración a partir de velocidades inicial, final y tiempo.
- Interpretar el signo de la aceleración en relación con el movimiento.
- Identificar la caída libre como MRUV con $a = g$.

---

## Definición de aceleración

La **aceleración** ($\vec{a}$) es la tasa de cambio de velocidad:

$$a = \frac{\Delta v}{t} = \frac{v - v_0}{t}$$

Unidad SI: $\text{m/s}^2$ (metros por segundo, por segundo).

> En este curso, la aceleración será siempre **uniforme** (constante) salvo indicación contraria.

---

## Aceleración es un vector

En una dimensión, el **signo** indica la dirección del cambio de velocidad:

- $a > 0$ → la velocidad se vuelve más positiva (o menos negativa)
- $a < 0$ → la velocidad se vuelve más negativa (o menos positiva)

> En física **no usamos la palabra "desaceleración"**. Un objeto que frena tiene aceleración negativa (si se mueve en dirección positiva). Siempre describimos la aceleración con su signo.

### Los tres automovilistas

Bigler usa el ejemplo de un "velocímetro vectorial" (positivo = adelante, negativo = atrás):

**Caso 1:** $v_0 = +15\ \text{m/s}$, $v = +40\ \text{m/s}$, $t = 5\ \text{s}$

$$a = \frac{40 - 15}{5} = +5\ \text{m/s}^2 \quad \text{(acelera hacia adelante)}$$

**Caso 2:** $v_0 = -20\ \text{m/s}$, $v = -30\ \text{m/s}$, $t = 5\ \text{s}$

$$a = \frac{-30 - (-20)}{5} = -2\ \text{m/s}^2 \quad \text{(acelera hacia atrás — más rápido en neg.)}$$

**Caso 3:** $v_0 = -15\ \text{m/s}$, $v = +10\ \text{m/s}$, $t = 5\ \text{s}$

$$a = \frac{+10 - (-15)}{5} = +5\ \text{m/s}^2 \quad \text{(frena, se detiene, y acelera hacia adelante)}$$

> 📷 *Imagen: velocímetros vectoriales mostrando los tres casos — Bigler pág. 190-192 (capturar)*

---

## Notas importantes sobre la aceleración

- Un objeto puede tener velocidad positiva y aceleración negativa al mismo tiempo (está frenando).
- Un objeto puede tener velocidad cero y aceleración distinta de cero (en ese instante cambia de dirección).
- Si el signo de la velocidad cambia, el objeto cambió de dirección.

---

## Caída libre — MRUV con $a = g$

La **caída libre** es el movimiento de un objeto que acelera libremente por la gravedad, sin otros efectos apreciables (sin fricción del aire).

$$g \approx 9{,}8\ \text{m/s}^2 \approx 10\ \text{m/s}^2 \quad \text{(valor de trabajo)}$$

> Un objeto sobre una rampa **no está en caída libre** aunque la gravedad sea la causa del movimiento — la rampa restringe su trayectoria.

Por convención, usamos $g$ para la aceleración gravitacional y $a$ para cualquier otra aceleración.

---

## Extensión — Jerk (tirón)

Del mismo modo que la aceleración es el cambio en velocidad, el cambio en aceleración respecto al tiempo se llama **jerk** (tirón):

$$j = \frac{\Delta a}{t}$$

No se trabaja en este curso, pero es una magnitud real usada en ingeniería de transporte.

---

## Para pensar

1. Un auto comienza con $v_0 = +30\ \text{m/s}$ y después de 10 s tiene $v = -10\ \text{m/s}$. Calculá la aceleración y describí el movimiento.
2. ¿Puede un objeto acelerar si tiene velocidad cero? ¿Podés dar un ejemplo?
3. ¿Por qué no usamos la palabra "desaceleración" en física?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
