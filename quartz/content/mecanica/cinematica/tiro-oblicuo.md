---
title: "Tiro oblicuo"
description: "Un cuerpo lanzado en ángulo: movimiento rectilíneo uniforme en horizontal y caída libre en vertical."
materia: "Física"
tema: "Cinemática"
tags:
  - mecanica
  - cinematica
---

# Tiro oblicuo

> **En una frase.** Un proyectil hace dos cosas a la vez e independientes: avanza a velocidad constante y cae acelerando.

## La idea

Es una composición de dos movimientos que no se estorban:

- **Horizontal**: no hay fuerza, así que la velocidad horizontal es constante ([[mru]]).
- **Vertical**: actúa el peso, así que es una [[caida-libre]] (si se lanza hacia arriba, un [[tiro-vertical]]).

Lo que las conecta es el tiempo: el mismo $t$ para las dos.

## Ecuaciones

Ejes: $x$ horizontal, $y$ vertical hacia arriba.

$$
x(t) = x_0 + v_0\cos\theta \cdot t
$$
$$
y(t) = y_0 + v_0\sin\theta \cdot t - \tfrac{1}{2} g t^2
$$
$$
v_y(t) = v_0\sin\theta - g\,t
$$

La velocidad horizontal nunca cambia: $v_x = v_0\cos\theta$.

## Resultados útiles (con $y_0 = y_{\text{final}}$, sin aire)

- **Altura máxima**: $h_{max} = \dfrac{(v_0\sin\theta)^2}{2g}$
- **Alcance**: $R = \dfrac{v_0^2 \sin(2\theta)}{g}$
- **Tiempo de vuelo**: $t_{vuelo} = \dfrac{2v_0\sin\theta}{g}$

El alcance es máximo a 45°. Dos ángulos complementarios (por ejemplo 30° y 60°) dan el mismo alcance, con alturas distintas.

## Cuándo vale

Solo si se desprecia el aire. Con aire, la trayectoria deja de ser una parábola simétrica: el proyectil cae antes de lo previsto y el alcance máximo ya no está a 45°.

## Error típico

Tratarlo como un [[mruv]] en la dirección del lanzamiento. No: la aceleración es **vertical**, no paralela a la velocidad inicial. Por eso la velocidad se descompone y cada eje se resuelve por separado.

## Ejemplo

Una pelota sale a 20 m/s con 37° sobre la horizontal ($\sin 37° = 0{,}6$, $\cos 37° = 0{,}8$):

$$
v_x = 16\ \text{m/s} \qquad v_{0y} = 12\ \text{m/s}
$$
$$
t_{vuelo} = \frac{2 \cdot 12}{9{,}8} \approx 2{,}45\ \text{s}
\qquad
R = 16 \cdot 2{,}45 \approx 39\ \text{m}
$$

## Relaciones

- **Necesitás antes:** [[mru]] · [[caida-libre]] · [[componentes-vector]]
- **Esto te habilita:** [[movimiento-circular]]
- **Se aplica en:** [[velocidad-relativa]]
