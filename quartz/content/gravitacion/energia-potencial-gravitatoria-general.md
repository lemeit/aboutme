---
title: "Energía potencial gravitatoria general"
description: "La versión exacta, que sirve a cualquier distancia: negativa y con el cero en el infinito."
materia: "Física"
tema: "Gravitación"
tags:
  - gravitacion
---

# Energía potencial gravitatoria general

> **En una frase.** Cuando la altura ya no es chica frente al radio de la Tierra, hay que usar la fórmula exacta: la energía potencial es negativa y tiende a cero en el infinito.

## Fórmula

$$
E_p = -G\,\frac{M\,m}{r}
$$

- $M$ y $m$: las dos masas
- $r$: distancia entre los **centros** (no la altura sobre el suelo)
- El cero está en $r \to \infty$

El signo negativo no es un capricho: significa que el sistema está **atado**. Para separar las masas hasta el infinito hay que entregar energía.

## Por qué no sirve $mgh$

$mgh$ es una aproximación que vale solo si $h \ll R$. Viene de desarrollar la fórmula exacta cerca de la superficie:

$$
\Delta E_p = mg\,h
$$

Con $h$ de metros, el error es despreciable. Con $h$ de miles de kilómetros (satélites), no.

## Relación con la fuerza

La fuerza es la pendiente (el gradiente) de la energía potencial:

$$
F = -\frac{dE_p}{dr} = -G\frac{Mm}{r^2}
$$

El signo menos indica que la fuerza apunta hacia donde la energía baja: hacia la otra masa.

## Velocidad de escape

Igualando la energía mecánica total a cero (llegar al infinito con velocidad cero):

$$
\tfrac{1}{2}mv^2 - G\frac{Mm}{R} = 0
\quad\Longrightarrow\quad
v = \sqrt{\frac{2GM}{R}}
$$

Para la Tierra: $v \approx 11{,}2$ km/s.

## Energía en órbita

Para una órbita circular:

$$
E = -\frac{GMm}{2r}
$$

Negativa: el satélite está atado. Y la energía cinética es la mitad del módulo de la potencial, un resultado que aparece en todos los problemas orbitales.

## Error típico

Usar $r$ como la altura sobre la superficie. $r$ se mide desde el centro del planeta. Y no sumar el radio terrestre al calcular la energía de un satélite.

## Relaciones

- **Necesitás antes:** [[campo-gravitatorio]]
- **Esto te habilita:** [[leyes-kepler]] 
- **Se aplica en:** [[energia-potencial-gravitatoria]] · [[conservacion-de-la-energia]]
