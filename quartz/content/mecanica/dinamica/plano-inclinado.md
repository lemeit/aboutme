---
title: "Plano inclinado"
description: "Un cuerpo sobre una rampa: el peso se descompone y solo una parte lo acelera."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Plano inclinado

> **En una frase.** En una rampa, el peso sigue siendo el mismo, pero solo una parte tira del cuerpo a lo largo del plano.

## Las dos componentes del peso

Con un ángulo $\theta$ respecto de la horizontal:

$$
P_{\parallel} = m g \sin\theta \qquad\text{(a lo largo del plano)}
$$
$$
P_{\perp} = m g \cos\theta \qquad\text{(perpendicular, contra el plano)}
$$

La normal no es $mg$: es $N = mg\cos\theta$ (si no hay otras fuerzas verticales). Ese error es el más común de todos.

## Sin rozamiento

La única fuerza a lo largo del plano es $P_{\parallel}$, así que:

$$
a = g \sin\theta
$$

La masa se cancela: **todos los cuerpos bajan con la misma aceleración**, igual que en la caída libre. A 30°, $a \approx 4{,}9$ m/s².

## Con rozamiento

$$
a = g\,(\sin\theta - \mu_k \cos\theta)
$$

- Si $\mu_k > \tan\theta$, el cuerpo no baja: se queda.
- El **ángulo crítico** en que empieza a moverse por sí solo es $\theta_c = \arctan(\mu_s)$.

## Por qué las rampas

Alargar el camino reduce la fuerza necesaria para subir: el trabajo total ($mgh$) es el mismo, pero repartido. Es el principio de la rampa, del camino de montaña y del tornillo.

## Error típico

Poner $N = mg$ y después usar ese valor en el rozamiento. En un plano inclinado la normal es menor, y con ella el rozamiento máximo.

## Ejemplo

Un bloque en una rampa de 30° con $\mu_k = 0{,}2$:

$$
a = 9{,}8 \cdot (0{,}5 - 0{,}2 \cdot 0{,}866) = 9{,}8 \cdot (0{,}5 - 0{,}173) \approx 3{,}2\ \text{m/s}^2
$$

Sin rozamiento bajaría con 4,9 m/s².

## Relaciones

- **Necesitás antes:** [[newton-segunda]] · [[fuerza-normal]]
- **Esto te habilita:** [[rodadura]] · [[fuerzas-no-conservativas]]
- **Se aplica en:** [[rozamiento]] · [[sistemas-de-cuerdas]]
