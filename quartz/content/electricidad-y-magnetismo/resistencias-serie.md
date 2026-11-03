---
title: "Resistencias en serie"
description: "Una tras otra: la misma corriente pasa por todas y los voltajes se suman."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Resistencias en serie

> **En una frase.** En serie, la corriente es la misma en todas y la resistencia total es la suma.

## Fórmula

$$
R_{eq} = R_1 + R_2 + \dots
$$

## Por qué se suman

Porque la misma corriente atraviesa todas, y cada una produce su propia caída de voltaje:

$$
V = I R_1 + I R_2 = I(R_1 + R_2)
$$

El efecto es el de una resistencia más larga: más material, más oposición.

## Propiedades

- La **corriente** es la misma en todos los elementos.
- El **voltaje** se reparte en proporción a cada resistencia.
- La resistencia total es **mayor** que la mayor de todas.
- Si se corta una, se corta todo el circuito (las luces de Navidad viejas).

## El divisor de tensión

Es la aplicación directa:

$$
V_1 = V\,\frac{R_1}{R_1 + R_2}
$$

La mayor resistencia se lleva la mayor parte del voltaje. Es la base de los potenciómetros y de los sensores.

## Comparación con capacitores

Serie en resistencias = suma. Serie en capacitores = inversa de la suma. Es la inversión clásica que conviene memorizar con la lógica, no de memoria.

## Error típico

Sumar los voltajes como si fueran iguales, o suponer que la corriente se reparte. En serie, la corriente **no** se divide: es la misma.

## Ejemplo

Dos de 100 Ω y 200 Ω en serie con 12 V:

$$
R_{eq} = 300\ \Omega,\quad I = \frac{12}{300} = 40\ \text{mA}
$$

Y los voltajes: 4 V y 8 V.

## Relaciones

- **Necesitás antes:** [[ley-de-ohm]] · [[circuitos]]
- **Esto te habilita:** [[resistencias-paralelo]] · [[ley-kirchhoff-mallas]]
- **Se aplica en:** divisor de tension · [[resistencia-interna]]
