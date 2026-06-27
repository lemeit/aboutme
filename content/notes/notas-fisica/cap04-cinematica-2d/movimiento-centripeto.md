+++
title = "Movimiento centrípeto"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Aceleración centrípeta, período, frecuencia y movimiento circular uniforme."
tags = ["cap04", "cinemática 2D", "movimiento centrípeto", "aceleración centrípeta", "período", "frecuencia", "MCU"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Explicar por qué un objeto en movimiento circular está acelerando aunque su rapidez sea constante.
- Calcular la aceleración centrípeta.
- Relacionar período y frecuencia con velocidad y radio.

---

## ¿Por qué hay aceleración en el movimiento circular?

Un objeto en movimiento circular uniforme (MCU) tiene **rapidez constante** pero su **dirección cambia continuamente**. Como la velocidad es un vector (módulo + dirección), el cambio de dirección implica cambio de velocidad, y por lo tanto **aceleración**.

Esta aceleración apunta siempre **hacia el centro** del círculo.

> 📷 *Imagen: vector velocidad tangente al círculo y aceleración apuntando al centro — Bigler pág. 266 (capturar)*

---

## Aceleración centrípeta

La **aceleración centrípeta** ($a_c$) es la aceleración constante hacia el centro que mantiene al objeto en su trayectoria circular:

$$\boxed{a_c = \frac{v^2}{r} = r\,\omega^2}$$

Unidad: m/s² (igual que cualquier aceleración)

> **Centrípeto** significa "hacia el centro". La aceleración centrípeta no es un nuevo tipo de fuerza — es la dirección de la aceleración resultante de cualquier fuerza que mantenga al objeto en círculo.

---

## Período y frecuencia

| Magnitud | Símbolo | Unidad | Definición |
|----------|---------|--------|-----------|
| **Período** | $T$ | s | Tiempo para completar una vuelta |
| **Frecuencia** | $f$ | Hz = 1/s | Vueltas por segundo |

$$T = \frac{1}{f} \qquad f = \frac{1}{T}$$

**Velocidad tangencial a partir del período:**

$$v = \frac{2\pi r}{T}$$

---

## Ejemplo resuelto — Masa en cuerda (Bigler)

Una pesa gira en una cuerda de $r = 0{,}65\ \text{m}$, dando 10 vueltas en 6,5 s. ¿Cuál es la aceleración centrípeta?

**Sin velocidad angular:**

$$\text{Distancia por vuelta:}\ s = 2\pi r = 2\pi \times 0{,}65 = 4{,}08\ \text{m}$$
$$\text{Distancia total:}\ 4{,}08 \times 10 = 40{,}8\ \text{m}$$
$$v = \frac{40{,}8}{6{,}5} = 6{,}28\ \text{m/s}$$
$$a_c = \frac{v^2}{r} = \frac{(6{,}28)^2}{0{,}65} = \frac{39{,}4}{0{,}65} = 60{,}7\ \text{m/s}^2$$

Esto es $\frac{60{,}7}{10} \approx 6{,}1\ g$.

**Con velocidad angular:**

$$\omega = \frac{10 \times 2\pi}{6{,}5} = 9{,}67\ \text{rad/s}$$
$$a_c = r\,\omega^2 = 0{,}65 \times (9{,}67)^2 = 60{,}7\ \text{m/s}^2\ ✓$$

---

## Balde con agua en círculo vertical

Si girás un balde de agua en un círculo vertical, el agua no se cae porque la aceleración centrípeta (hacia el centro) es mayor o igual que $g$. En el punto más alto, la condición mínima es:

$$a_c \geq g \implies \frac{v^2}{r} \geq g \implies v_{min} = \sqrt{gr}$$

---

## Para pensar

1. ¿Por qué la aceleración centrípeta apunta hacia el centro y no en la dirección del movimiento?
2. Si duplicás la velocidad de un objeto en MCU (mismo radio), ¿en qué factor cambia la aceleración centrípeta?
3. La Tierra gira alrededor del Sol. ¿Qué fuerza produce la aceleración centrípeta de la Tierra?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
