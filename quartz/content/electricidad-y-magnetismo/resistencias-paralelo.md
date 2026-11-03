---
title: "Resistencias en paralelo"
description: "Lado a lado: todas tienen el mismo voltaje y la resistencia total es menor que la más chica."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Resistencias en paralelo

> **En una frase.** En paralelo, todas ven el mismo voltaje y la corriente se reparte: la resistencia total baja.

## Fórmula

$$
\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots
$$

Para dos:

$$
R_{eq} = \frac{R_1 R_2}{R_1 + R_2}
$$

## Por qué baja

Porque hay más caminos para la corriente. Cada rama extra es una puerta más: la oposición total disminuye.

Por eso $R_{eq}$ siempre es **menor que la menor** de las resistencias, y si una es cero (cortocircuito), todo el conjunto es cero.

## Propiedades

- El **voltaje** es el mismo en todas.
- La **corriente** se reparte: pasa más por la de menor resistencia.
- Si se corta una rama, las demás siguen funcionando (las instalaciones de las casas).

## El divisor de corriente

$$
I_1 = I\,\frac{R_2}{R_1 + R_2}
$$

Fijate que es la resistencia **de la otra** rama la que aparece arriba: más corriente por donde hay menos resistencia.

## Por qué la instalación es en paralelo

Cada artefacto recibe 220 V y funciona igual si otro está apagado. En serie, apagar uno apagaría todos y cada uno recibiría un voltaje menor.

## Error típico

Sumar las resistencias en paralelo. Sumar vale en serie. Y no olvidar invertir al final: la fórmula da $1/R$.

## Ejemplo

Dos de 100 Ω y 100 Ω en paralelo:

$$
R_{eq} = \frac{100\cdot100}{200} = 50\ \Omega
$$

La mitad. Con una de 100 y otra de 300: 75 Ω.

## Relaciones

- **Necesitás antes:** [[resistencias-serie]] · [[ley-de-ohm]]
- **Esto te habilita:** [[ley-kirchhoff-nodos]]
- **Se aplica en:** [[circuitos]] · cortocircuito
