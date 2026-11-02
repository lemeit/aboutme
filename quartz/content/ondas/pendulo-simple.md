---
title: "Péndulo simple"
description: "Una masa colgando de un hilo: el oscilador más antiguo y el que mide la gravedad."
materia: "Física"
tema: "Ondas"
tags:
  - ondas
---

# Péndulo simple

> **En una frase.** Una masa puntual colgada de un hilo sin masa: para oscilaciones chicas se comporta como un movimiento armónico simple.

## El modelo

Idealizaciones: hilo inextensible y sin masa, masa puntual, sin rozamiento, amplitud pequeña (menos de unos 15°).

## Período

$$
T = 2\pi\sqrt{\frac{L}{g}}
$$

- $L$: largo del hilo, en m
- $g$: 9,8 m/s²

**No aparece la masa.** Un péndulo de 100 g y otro de 10 kg con el mismo largo tardan lo mismo. Es lo que descubrió Galileo y lo que permite usarlo como reloj.

## Por qué no depende de la amplitud

Para ángulos chicos, $\sin\theta \approx \theta$, y la fuerza restauradora queda proporcional al desplazamiento. Ahí el péndulo es un [[movimiento-armonico-simple]]. Con amplitudes grandes la aproximación falla y el período crece un poco.

## Medir la gravedad

Despejando:

$$
g = \frac{4\pi^2 L}{T^2}
$$

Con un hilo y un cronómetro se mide $g$ con buena precisión. Es uno de los experimentos clásicos de laboratorio: se mide el período para varios largos y se grafica $T^2$ contra $L$, cuya pendiente da $g$.

## La energía

Como en cualquier oscilador: se intercambia entre cinética (al pasar por el punto más bajo) y potencial gravitatoria (en los extremos).

## Error típico

Usar la fórmula con amplitudes grandes, o medir el largo desde el punto de suspensión hasta el borde de la masa en lugar de hasta su centro. Y contar mal: un período es ida **y** vuelta; medir 10 oscilaciones y dividir por 10 reduce el error.

## Ejemplo

Un péndulo de 2 m:

$$
T = 2\pi\sqrt{\frac{2}{9{,}8}} \approx 2{,}84\ \text{s}
$$

En la Luna, con $g = 1{,}6$, tardaría 7 s.

## Relaciones

- **Necesitás antes:** [[movimiento-armonico-simple]] · [[gravedad]]
- **Esto te habilita:** [[pendulo-fisico]]
- **Se aplica en:** [[periodo]] · [[energia-total-mas]]
