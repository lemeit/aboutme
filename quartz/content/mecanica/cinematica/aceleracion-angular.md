---
title: "Aceleración angular"
description: "A qué ritmo cambia el giro: la versión angular de la aceleración."
materia: "Física"
tema: "Cinemática"
---

# Aceleración angular

> **En una frase.** Es cuánto cambia la velocidad angular por segundo: si el giro se acelera o se frena.

## Definición

$$
\alpha = \frac{\Delta\omega}{\Delta t}
$$

- $\alpha$ (alfa): aceleración angular, en rad/s²
- $\Delta\omega$: cambio de [[velocidad-angular]]
- $\Delta t$: tiempo

## Relación con la aceleración tangencial

Un punto a distancia $r$ del eje cambia su velocidad lineal según:

$$
a_t = \alpha\, r
$$

Es una aceleración **tangencial**, la que cambia la rapidez. La **centrípeta** ($a_c = \omega^2 r$) es otra cosa: cambia la dirección y existe aunque $\alpha = 0$.

| | Qué cambia | Fórmula |
|---|---|---|
| $a_t$ | la rapidez | $\alpha r$ |
| $a_c$ | la dirección | $\omega^2 r$ |

## Ecuaciones del movimiento circular uniformemente variado

Son las mismas del [[mruv]], con las variables angulares:

$$
\omega = \omega_0 + \alpha t
$$
$$
\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2
$$
$$
\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta
$$

Vale solo si $\alpha$ es constante.

## Error típico

Usar $a = \alpha r$ como "la" aceleración del punto. Un punto en un disco que acelera tiene **dos** aceleraciones: la tangencial por $\alpha$ y la centrípeta por $\omega$. La aceleración total es la suma vectorial, y su módulo es $a = \sqrt{a_t^2 + a_c^2}$.

## Ejemplo

Un ventilador arranca de 0 y llega a 30 rad/s en 5 s:

$$
\alpha = \frac{30}{5} = 6\ \text{rad/s}^2
\qquad
\theta = \tfrac{1}{2}\cdot 6\cdot 25 = 75\ \text{rad} \approx 12\ \text{vueltas}
$$

## Relaciones

- **Necesitás antes:** [[velocidad-angular]] · [[mruv]]
- **Esto te habilita:** [[movimiento-circular]]
- **Se aplica en:** [[trabajo-rotacional]]
