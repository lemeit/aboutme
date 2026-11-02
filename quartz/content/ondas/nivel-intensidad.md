---
title: "Nivel de intensidad"
description: "La escala en decibeles: cómo se comparan sonidos cuando el rango va de uno a un billón."
materia: "Física"
tema: "Ondas"
tags:
  - ondas
---

# Nivel de intensidad

> **En una frase.** El nivel en decibeles es una escala logarítmica para manejar intensidades que varían en doce órdenes de magnitud.

## Fórmula

$$
\beta = 10\log_{10}\!\left(\frac{I}{I_0}\right)
$$

- $\beta$: nivel de intensidad, en decibeles (dB)
- $I$: [[intensidad-sonora]], en W/m²
- $I_0 = 10^{-12}$ W/m²: umbral de audición, la referencia

## Qué significa la escala

Cada **10 dB** equivale a multiplicar por 10 la intensidad:

| Nivel | Intensidad relativa |
|---|---|
| 0 dB | $I_0$ (apenas audible) |
| 10 dB | 10 veces |
| 20 dB | 100 veces |
| 30 dB | 1000 veces |

Sumar 3 dB equivale a duplicar la intensidad, porque $\log_{10}2 \approx 0{,}3$.

## Valores de referencia

| Sonido | dB |
|---|---|
| Umbral de audición | 0 |
| Biblioteca | 30 |
| Conversación | 60 |
| Tránsito intenso | 80 |
| Concierto de rock | 110 |
| Umbral del dolor | 120 |
| Avión despegando cerca | 130 |

## Por qué logarítmica

El oído percibe proporciones, no diferencias. Pasar de $10^{-6}$ a $10^{-5}$ suena "un poco más fuerte", no diez veces: la escala en dB refleja mejor la sensación que la intensidad lineal.

## Dos sonidos juntos

**No se suman los decibeles.** Dos fuentes de 60 dB dan 63 dB, no 120. Como cada una duplica la intensidad, se suman 3 dB.

## El riesgo auditivo

Por encima de 85 dB sostenidos hay riesgo de daño. 100 dB durante minutos puede dejarlo. Y como la escala es logarítmica, 10 dB más son diez veces más energía, no "un poco más".

## Error típico

Promediar decibeles como si fueran metros. Y olvidar que la referencia $I_0$ es $10^{-12}$, no cero: 0 dB no es "silencio absoluto", es el umbral de audición.

## Relaciones

- **Necesitás antes:** [[intensidad-sonora]]
- **Esto te habilita:** [[sonido]]
- **Se aplica en:** [[ultrasonido]] · [[efecto-doppler]]
