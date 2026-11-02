---
title: "Frecuencia angular"
description: "El ritmo de una oscilación medido en radianes por segundo."
materia: "Física"
tema: "Ondas"
tags:
  - ondas
---

# Frecuencia angular

> **En una frase.** Es la frecuencia contada en radianes en lugar de vueltas: la misma información, multiplicada por $2\pi$.

## Definición

$$
\omega = 2\pi f = \frac{2\pi}{T}
$$

- $\omega$: frecuencia angular, en rad/s
- $f$: [[frecuencia]], en Hz
- $T$: [[periodo]], en s

Una vuelta completa son $2\pi$ radianes. Por eso la frecuencia en "radianes por segundo" es $2\pi$ veces la frecuencia en "vueltas por segundo".

## Por qué existe

Porque las funciones seno y coseno reciben radianes, no vueltas. Escribir la oscilación necesita $\omega$:

$$
x(t) = A\cos(\omega t + \varphi)
$$

Si se usara $f$ habría que escribir $\cos(2\pi f t)$ en cada fórmula. La $\omega$ está ahí para simplificar la notación, no para complicarla.

## En cada sistema

| Sistema | $\omega$ |
|---|---|
| Resorte | $\sqrt{k/m}$ |
| [[pendulo-simple]] | $\sqrt{g/L}$ |
| Circuito LC | $1/\sqrt{LC}$ |

Fijate que en el resorte no aparece la amplitud: el ritmo depende solo del sistema.

## Relación con la velocidad

En una onda, la velocidad de propagación es:

$$
v = \frac{\omega}{k}
$$

donde $k$ es el [[numero-onda]]. Es la misma relación $v = \lambda f$ escrita con las variables angulares.

## Error típico

Usar $\omega$ y $f$ como si fueran lo mismo. Un motor a 50 Hz tiene $\omega = 314$ rad/s: confundirlos cambia el resultado por un factor 6,28.

## Ejemplo

Una oscilación con período de 0,5 s:

$$
f = 2\ \text{Hz}
\qquad
\omega = 2\pi\cdot 2 \approx 12{,}6\ \text{rad/s}
$$

## Relaciones

- **Necesitás antes:** [[frecuencia]] · [[periodo]]
- **Esto te habilita:** [[movimiento-armonico-simple]] · [[ecuacion-onda]]
- **Se aplica en:** [[numero-onda]] · [[velocidad-onda]]
