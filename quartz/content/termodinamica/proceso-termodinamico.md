---
title: "Proceso termodinámico"
description: "Un camino entre dos estados: lo que importa no es solo el principio y el final."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Proceso termodinámico

> **En una frase.** Es el camino que sigue un sistema para pasar de un estado a otro, y ese camino decide cuánto calor y cuánto trabajo se intercambian.

## Los procesos típicos

| Proceso | Se mantiene | Qué pasa |
|---|---|---|
| **Isotérmico** | $T$ constante | el gas se expande o comprime muy lentamente |
| **Isóbaro** | $P$ constante | pistón libre |
| **Isocórico** | $V$ constante | recipiente rígido |
| **Adiabático** | sin intercambio de calor | paredes aisladas o proceso muy rápido |

En los cuatro vale la [[primera-ley-termodinamica]], pero cada uno simplifica un término distinto:

- Isotérmico: $\Delta U = 0$, entonces $Q = W$.
- Isocórico: $W = 0$, entonces $Q = \Delta U$.
- Adiabático: $Q = 0$, entonces $\Delta U = -W$.

## El camino, no solo los extremos

Dos procesos pueden unir los mismos dos estados y no intercambiar el mismo calor ni el mismo trabajo. Lo que sí es igual en los dos es el cambio de [[energia-interna]], porque es función de estado.

Esa es la razón por la que no tiene sentido hablar de "el calor que tiene un gas": el calor es una transferencia, no una propiedad.

## Procesos reversibles e irreversibles

- [[proceso-reversible]]: se puede deshacer pasando por los mismos estados. Es una idealización.
- [[proceso-irreversible]]: tiene una dirección. Todos los reales lo son.

## Ciclos

Si el proceso vuelve al estado inicial, $\Delta U = 0$ y el sistema recorre un [[ciclo-termodinamico]]. Ahí el trabajo neto es el área encerrada en el diagrama $P$-$V$.

## Error típico

Suponer que "isotérmico" significa "sin calor". Isotérmico significa temperatura constante, y para mantenerla hay que entregar o quitar calor; lo que vale cero es $\Delta U$, no $Q$.

## Relaciones

- **Necesitás antes:** [[variables-estado]]
- **Esto te habilita:** [[trabajo-gas]] · [[ciclo-termodinamico]]
- **Se aplica en:** [[maquina-termica]] · [[refrigerador]]
