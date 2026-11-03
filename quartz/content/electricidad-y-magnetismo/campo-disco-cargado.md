---
title: "Campo de un disco cargado"
description: "El campo sobre el eje de un disco: un resultado que mezcla el anillo y la lámina infinita."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Campo de un disco cargado

> **En una frase.** Sobre el eje de un disco uniformemente cargado, el campo se calcula sumando anillos, y da una expresión que depende de la distancia.

## El resultado

Para un disco de radio $R$ con densidad superficial $\sigma$, sobre su eje a distancia $x$:

$$
E = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{x}{\sqrt{x^2 + R^2}}\right)
$$

## Cómo se llega

Se descompone el disco en anillos concéntricos. El campo de cada anillo tiene una componente axial, y las componentes laterales se cancelan por simetría. Se integra desde 0 hasta $R$.

## Los dos límites

**Muy cerca** ($x \ll R$): el paréntesis tiende a 1 y queda:

$$
E \approx \frac{\sigma}{2\varepsilon_0}
$$

Es el campo de una **lámina infinita**: constante, no depende de la distancia. Es el caso del campo entre las placas de un capacitor.

**Muy lejos** ($x \gg R$): el campo se comporta como el de una carga puntual con la carga total del disco.

## Por qué importa

Es el puente conceptual entre la carga puntual y el plano infinito, y la versión eléctrica de un resultado que aparece en gravitación con las láminas de masa.

## Error típico

Usar $\sigma/2\varepsilon_0$ a cualquier distancia. Vale solo cerca del disco; lejos hay que usar la fórmula completa o la de carga puntual.

## Relaciones

- **Necesitás antes:** [[campo-carga-puntual]] · [[lineas-campo-electrico]]
- **Esto te habilita:** [[capacitor-placas-paralelas]]
- **Se aplica en:** [[campo-hilo-cargado]] · ley de gauss
