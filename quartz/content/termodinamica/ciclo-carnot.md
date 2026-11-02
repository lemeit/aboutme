---
title: "Ciclo de Carnot"
description: "El ciclo ideal entre dos temperaturas: ningún motor real puede superarlo."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Ciclo de Carnot

> **En una frase.** Es el ciclo más eficiente posible entre dos temperaturas dadas, y su rendimiento depende solo de esas dos temperaturas.

## Las cuatro etapas

1. **Expansión isotérmica** a $T_H$: absorbe $Q_H$ del foco caliente.
2. **Expansión adiabática**: se enfría hasta $T_C$ sin intercambiar calor.
3. **Compresión isotérmica** a $T_C$: cede $Q_C$ al foco frío.
4. **Compresión adiabática**: vuelve a $T_H$.

## El rendimiento

$$
\eta_{Carnot} = 1 - \frac{T_C}{T_H}
$$

con las temperaturas **en kelvin**. Nada más: no depende del gas, de la presión ni del tamaño. Solo de los dos focos.

## Qué implica

- Es un **límite superior**: ningún motor real entre esas temperaturas puede superarlo.
- Para acercarse, hay que aumentar $T_H$ o bajar $T_C$.
- Una máquina que trabajara con un solo foco tendría $\eta = 1$ y sería imposible: eso demuestra la [[segunda-ley-termodinamica]].
- El cero absoluto pondría $\eta = 100$ %, pero es inalcanzable ([[tercera-ley-termodinamica]]).

## Por qué es ideal e irrealizable

Sus etapas son [[proceso-reversible|reversibles]]: se hacen infinitamente despacio, sin rozamiento y sin diferencias finitas de temperatura. Eso tardaría tiempo infinito y no entregaría potencia. Los motores reales son irreversibles y por eso rinden menos.

## Ejemplo numérico

Una central que trabaja entre 500 °C (773 K) y 30 °C (303 K):

$$
\eta = 1 - \frac{303}{773} \approx 61\%
$$

Una central real entre esas temperaturas rinde 35–40 %. La diferencia es la irreversibilidad.

## Error típico

Calcularlo con Celsius: $1 - 30/500$ da 94 %, un disparate. Y usarlo como si fuera el rendimiento esperado de un motor real: es el techo teórico, no el valor de diseño.

## Relaciones

- **Necesitás antes:** [[maquina-termica]] · [[proceso-reversible]]
- **Esto te habilita:** [[segunda-ley-termodinamica]] · [[entropia]]
- **Se aplica en:** [[refrigerador]] · [[rendimiento]]
