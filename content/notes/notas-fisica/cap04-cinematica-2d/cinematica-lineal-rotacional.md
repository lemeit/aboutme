+++
title = "Resumen: cinemática lineal y rotacional"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Tabla comparativa completa de variables y ecuaciones lineales vs. angulares. Estrategia de resolución."
tags = ["cap04", "cinemática 2D", "rotación", "cinemática lineal", "cinemática rotacional", "tabla resumen"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Identificar la variable angular correspondiente a cada variable lineal.
- Usar la tabla comparativa para elegir la ecuación correcta en cualquier problema.
- Resolver problemas que combinen movimiento lineal y rotacional.

---

## Variables: lineal vs. angular

Cada variable lineal tiene su **análogo angular exacto**:

| Variable | Lineal | Unidad | Angular | Unidad |
|----------|--------|--------|---------|--------|
| Posición / ángulo | $x$ | m | $\theta$ | rad |
| Desplazamiento | $\Delta x$ | m | $\Delta\theta$ | rad |
| Velocidad | $v$ | m/s | $\omega$ | rad/s |
| Aceleración | $a$ | m/s² | $\alpha$ | rad/s² |
| Tiempo | $t$ | s | $t$ | s |

**Relaciones entre sistemas:**

$$s = r\,\theta \qquad v_T = r\,\omega \qquad a_T = r\,\alpha \qquad a_c = \frac{v^2}{r} = r\,\omega^2$$

> **Nota:** el radián es adimensional (es una razón de longitudes), por eso las unidades de $v_T = r\omega$ quedan en m/s y no en m·rad/s.

---

## Ecuaciones: lineal vs. angular

| Lineal | Angular | Descripción |
|--------|---------|-------------|
| $\Delta x = x - x_0$ | $\Delta\theta = \theta - \theta_0$ | Desplazamiento |
| $v_{med} = \dfrac{\Delta x}{t} = \dfrac{v_0+v}{2}$ | $\omega_{med} = \dfrac{\Delta\theta}{t} = \dfrac{\omega_0+\omega}{2}$ | Velocidad media |
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ | Velocidad con aceleración |
| $\Delta x = v_0 t + \tfrac{1}{2}at^2$ | $\Delta\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$ | Posición con aceleración |
| $v^2 - v_0^2 = 2a\Delta x$ | $\omega^2 - \omega_0^2 = 2\alpha\Delta\theta$ | Sin tiempo |
| $a_c = v^2/r = r\omega^2$ | — | Aceleración centrípeta |

---

## Condiciones especiales

| Lineal | Angular |
|--------|---------|
| "parte del reposo" → $v_0 = 0$ | "empieza sin girar" → $\omega_0 = 0$ |
| "se detiene" → $v = 0$ | "deja de girar" → $\omega = 0$ |
| "velocidad constante" → $a = 0$ | "velocidad angular constante" → $\alpha = 0$ |
| "caída libre" → $a = g$ | — |

---

## Estrategia GUESS aplicada a problemas rotacionales

El método GUESS funciona igual que en la cinemática lineal:

1. **G:** identificá las variables dadas con sus valores.
2. **U:** identificá la incógnita.
3. **E:** elegí la ecuación que contiene la incógnita y todas las variables conocidas.
4. **S:** despejá algebraicamente.
5. **S:** sustituí y calculá.

---

## Ejemplo resuelto — Tocadiscos (Bigler)

Un tocadiscos a 33⅓ RPM se apaga y se detiene en 26 s. ¿Cuál es la aceleración angular?

**Convertir RPM a rad/s:**

$$\omega_0 = 33{,}33\ \text{RPM} \times \frac{2\pi}{60} = \frac{33{,}33 \times 2\pi}{60} = 3{,}49\ \text{rad/s}$$

**Tabla:**

| Variable | Valor |
|----------|-------|
| $\omega_0$ | $3{,}49\ \text{rad/s}$ |
| $\omega$ | $0$ (se detiene) |
| $t$ | $26\ \text{s}$ |
| $\alpha$ | $?$ |

$$\alpha = \frac{\omega - \omega_0}{t} = \frac{0 - 3{,}49}{26} = -0{,}134\ \text{rad/s}^2$$

El signo negativo indica desaceleración.

---

## Para pensar

1. ¿Qué tienen en común la velocidad tangencial y la velocidad lineal? ¿En qué difieren?
2. En un carrusel, ¿todos los puntos tienen la misma velocidad angular? ¿Y la misma velocidad tangencial?
3. ¿Por qué no se puede usar $v_{med}$ o $\omega_{med}$ cuando hay aceleración distinta de cero?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
