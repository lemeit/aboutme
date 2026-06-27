+++
title = "Movimiento angular — velocidad y posición"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Longitud de arco, velocidad angular, velocidad tangencial y conversión de unidades."
tags = ["cap04", "cinemática 2D", "movimiento angular", "velocidad angular", "radianes", "rotación"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Describir la posición de un objeto en movimiento circular usando coordenadas polares.
- Calcular la velocidad angular a partir del cambio de ángulo y el tiempo.
- Relacionar velocidad angular con velocidad tangencial.
- Convertir entre RPM, rev/s y rad/s.

---

## Coordenadas polares para la rotación

Si un objeto se mueve en círculo, su posición se describe con:
- $r$: distancia al centro de la circunferencia.
- $\theta$: ángulo respecto a una referencia (en **radianes**).

> **Radián:** ángulo cuyo arco tiene la misma longitud que el radio. $2\pi\ \text{rad} = 360°$.

---

## Longitud de arco

La **longitud de arco** $s$ es la distancia recorrida a lo largo de la circunferencia:

$$s = r\,\theta \qquad (\theta \text{ en radianes})$$

---

## Velocidad angular

La **velocidad angular** ($\omega$, omega) es la tasa de cambio del ángulo:

$$\omega = \frac{\Delta\theta}{t}$$

Unidad: $\text{rad/s}$

**Analogía con la velocidad lineal:**

| Lineal | Angular |
|--------|---------|
| $v = \dfrac{\Delta x}{t}$ | $\omega = \dfrac{\Delta\theta}{t}$ |
| m/s | rad/s |

---

## Velocidad tangencial

La **velocidad tangencial** ($v_T$) es la velocidad lineal instantánea de un punto sobre el cuerpo girante — su dirección es siempre tangente al círculo:

$$v_T = r\,\omega$$

---

## Conversión de unidades

**RPM a rad/s:**

$$\omega\left(\frac{\text{rad}}{\text{s}}\right) = \text{RPM} \times \frac{1\ \text{min}}{60\ \text{s}} \times \frac{2\pi\ \text{rad}}{1\ \text{rev}}$$

**Ejemplo:** motor a 2400 RPM:

$$\omega = 2400 \times \frac{1}{60} \times 2\pi = \frac{4800\pi}{60} = 80\pi \approx 251\ \text{rad/s}$$

---

## Ejemplos resueltos

### Ejemplo 1 — Palo de golf (Bigler)

Un golfista balancea un palo de 1,1 m de longitud con $\omega = 5{,}0\ \text{rad/s}$.

$$v_T = r\,\omega = 1{,}1 \times 5{,}0 = 5{,}5\ \text{m/s}$$

### Ejemplo 2 — Moneda sobre un disco girante (Bigler)

Una moneda está a $r = 0{,}25\ \text{m}$ del centro de un disco que da 1 vuelta cada 2 s. Distancia recorrida en 10 s:

$$\omega = \frac{2\pi}{2} = \pi\ \text{rad/s}$$

$$s = r\,\omega\,t = 0{,}25 \times \pi \times 10 = 2{,}5\pi \approx 7{,}85\ \text{m}$$

---

## Extensión — Jerk angular

Del mismo modo que el jerk es el cambio de aceleración lineal, el **jerk angular** ($\zeta$, zeta) es el cambio de aceleración angular:

$$\zeta = \frac{\Delta\alpha}{t}$$

---

## Para pensar

1. ¿Por qué los radianes son adimensionales?
2. Un punto está al doble de distancia del centro que otro punto en el mismo disco girante. ¿Cómo se comparan sus velocidades tangenciales?
3. El Sol gira sobre su eje cada 25 días (aprox). ¿Cuál es su velocidad angular en rad/s?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
