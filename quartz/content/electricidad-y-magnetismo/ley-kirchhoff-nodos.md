---
title: "Ley de Kirchhoff de nodos"
description: "La corriente que entra a un nodo es la que sale: es la conservación de la carga aplicada."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Ley de Kirchhoff de nodos

> **En una frase.** En cualquier punto donde se junten conductores, la suma de corrientes que entran es igual a la suma de las que salen.

## Enunciado

$$
\sum I_{\text{entra}} = \sum I_{\text{sale}}
$$

o, con signos:

$$
\sum I = 0
$$

tomando positivas las que entran y negativas las que salen.

## De dónde sale

Es la [[ley-conservacion-carga]] aplicada a un punto. La carga no se acumula en un nodo: lo que llega tiene que seguir.

## Para qué sirve

Permite plantear ecuaciones en circuitos con varias ramas, donde no se puede simplificar a serie o paralelo. Junto con la [[ley-kirchhoff-mallas]], da tantas ecuaciones como incógnitas.

## Cómo se aplica

1. Marcar el sentido de cada corriente (si te equivocás, el resultado da negativo y listo).
2. Elegir los nodos (no hace falta usarlos todos: uno es redundante).
3. Escribir la suma.

## Un ejemplo chico

Tres ramas en un nodo: entran $I_1$ e $I_2$, sale $I_3$:

$$
I_1 + I_2 = I_3
$$

Es el mismo reparto que en el [[resistencias-paralelo|paralelo]]: la corriente total se abre en las ramas.

## Error típico

Elegir mal el sentido y asustarse con el signo negativo. El signo negativo solo significa que la corriente va al revés de lo que supusiste: el módulo es el correcto.

## Relaciones

- **Necesitás antes:** [[corriente-electrica]] · [[ley-conservacion-carga]]
- **Esto te habilita:** [[ley-kirchhoff-mallas]]
- **Se aplica en:** [[circuitos]] · [[resistencias-paralelo]]
