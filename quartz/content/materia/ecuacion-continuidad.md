---
title: "Ecuación de continuidad"
description: "Lo que entra a un caño es lo que sale: si el caño se angosta, el fluido se acelera."
materia: "Física"
tema: "Materia"
---

# Ecuación de continuidad

> **En una frase.** Un fluido incompresible no se acumula ni desaparece: si el caño se achica, tiene que pasar más rápido.

## Fórmula

Para un fluido incompresible que circula por un conducto de sección variable:

$$
A_1 v_1 = A_2 v_2
$$

- $A$: área de la sección transversal, en m²
- $v$: velocidad del fluido en esa sección, en m/s

El producto $A v$ es el [[caudal]], y es el mismo en todo el conducto.

## Por qué

Es conservación de la masa. Lo que entra por un extremo en un segundo tiene que salir por el otro: si no, el fluido se estaría comprimiendo o acumulando. Para un líquido, que prácticamente no se comprime, la conclusión es directa.

Con gases la masa también se conserva, pero la densidad cambia, así que la forma completa es:

$$
\rho_1 A_1 v_1 = \rho_2 A_2 v_2
$$

## Consecuencias

- Una manguera con el pulgar en la punta: el agua sale más rápido porque el área es menor.
- Un río se acelera en un estrechamiento.
- En una vena estrecha, la sangre va más rápido (por eso silba una arteria tapada).

## Error típico

Aplicarla a un fluido compresible sin corregir la densidad, o creer que "más rápido" significa "más caudal". El caudal es el mismo en todo el caño; lo que cambia es la velocidad.

## Ejemplo

Un caño de 4 cm² que se reduce a 1 cm², con 2 m/s en la parte ancha:

$$
v_2 = v_1 \frac{A_1}{A_2} = 2 \cdot \frac{4}{1} = 8\ \text{m/s}
$$

## Relaciones

- **Necesitás antes:** [[caudal]]
- **Esto te habilita:** [[teorema-bernoulli]]
- **Se aplica en:** [[viscosidad]]
