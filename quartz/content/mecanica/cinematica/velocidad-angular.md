---
title: "Velocidad angular"
description: "A qué ritmo gira un cuerpo: radianes por segundo."
materia: "Física"
tema: "Cinemática"
tags:
  - mecanica
  - cinematica
---

# Velocidad angular

> **En una frase.** Es el ángulo que gira un cuerpo por segundo; no dice cuán rápido se mueve un punto, sino cuán rápido da vueltas el cuerpo.

## Definición

$$
\omega = \frac{\Delta\theta}{\Delta t}
$$

- $\omega$ (omega): velocidad angular, en rad/s
- $\Delta\theta$: ángulo girado, en rad
- $\Delta t$: tiempo, en s

Es la versión angular de la [[velocidad]]: misma idea, otra variable.

## Relación con la velocidad lineal

Un punto a distancia $r$ del eje recorre un arco $s = \theta r$ en el mismo tiempo, así que:

$$
v = \omega\, r
$$

Esto explica algo que sorprende: en un disco que gira, **todos los puntos tienen la misma $\omega$ pero distinta $v$**. Un punto del borde va más rápido que uno cerca del centro, aunque giren juntos. En una calesita, el borde te marea más que el centro.

## Período y frecuencia

Una vuelta completa son $2\pi$ rad:

$$
\omega = \frac{2\pi}{T} = 2\pi f
$$

con $T$ el período del giro y $f$ la frecuencia en vueltas por segundo (Hz).

## Sentido

Es un vector perpendicular al plano de giro (regla de la mano derecha), pero en un curso inicial se trabaja con su valor y el signo: positivo antihorario, negativo horario.

## Error típico

Confundir $\omega$ (rad/s) con $f$ (vueltas/s). Un motor a 3000 rpm tiene $f = 50$ Hz y $\omega = 2\pi \cdot 50 \approx 314$ rad/s. Son el mismo giro expresado de dos formas; mezclarlas multiplica o divide por $2\pi$.

## Ejemplo

Una rueda de bicicleta de 0,35 m de radio gira a 2 vueltas por segundo:

$$
\omega = 2\pi \cdot 2 \approx 12{,}6\ \text{rad/s}
\qquad
v = \omega r = 12{,}6 \cdot 0{,}35 \approx 4{,}4\ \text{m/s}
$$

## Relaciones

- **Necesitás antes:** [[posicion-angular]] · [[mcu]]
- **Esto te habilita:** [[aceleracion-angular]] · [[mcu]]
- **Se aplica en:** [[energia-cinetica-rotacional]]
