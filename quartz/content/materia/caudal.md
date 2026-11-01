---
title: "Caudal"
description: "Qué volumen de fluido pasa por una sección en un segundo, y a qué velocidad viaja."
materia: "Física"
tema: "Materia"
---

# Caudal

> **En una frase.** El caudal dice cuánta agua pasa por un caño por segundo; la velocidad dice a qué ritmo la atraviesa.

## Definición

$$
Q = \frac{V}{t}
$$

- $Q$: caudal, en m³/s
- $V$: volumen que atraviesa una sección, en m³
- $t$: tiempo, en s

En la práctica también se usa L/s o m³/h. $1\ \text{m}^3/\text{s} = 1000\ \text{L/s}$.

## Relación con la velocidad

Si el fluido viaja a velocidad $v$ por un caño de sección $A$, en un tiempo $t$ avanza una "columna" de volumen $A \cdot v \cdot t$:

$$
Q = A \cdot v
$$

de donde

$$
v = \frac{Q}{A}
$$

Esta es la forma más útil: **para un caudal dado, la velocidad es inversamente proporcional al área**. Estrechar un caño acelera el fluido.

## Caudal másico

Si lo que interesa es la masa por segundo:

$$
\dot{m} = \rho \, Q = \rho \, A \, v
$$

Se usa en balances de materia, por ejemplo en una planta.

## Error típico

Confundir caudal con velocidad. Un río ancho puede llevar mucho caudal y poca velocidad; una manguera fina lleva poco caudal y mucha velocidad. Son cosas distintas y se relacionan por el área.

## Ejemplo

Una canilla llena un balde de 10 L en 40 s:

$$
Q = \frac{0{,}010}{40} = 0{,}00025\ \text{m}^3/\text{s} = 0{,}25\ \text{L/s}
$$

Si la canilla tiene 1 cm² de salida ($1\times10^{-4}\ \text{m}^2$):

$$
v = \frac{0{,}00025}{1\times10^{-4}} = 2{,}5\ \text{m/s}
$$

## Relaciones

- **Necesitás antes:** [[densidad]]
- **Esto te habilita:** [[ecuacion-continuidad]] · [[teorema-bernoulli]]
- **Se aplica en:** [[viscosidad]]
