---
title: "Leyes de Kepler"
description: "Las tres regularidades del movimiento planetario, que Newton después explicó con su ley de gravitación."
materia: "Física"
tema: "Gravitación"
tags:
  - gravitacion
---

# Leyes de Kepler

> **En una frase.** Los planetas no giran en círculos perfectos: recorren elipses, y lo hacen más rápido cuando están más cerca del Sol.

## Primera ley: órbitas elípticas

Cada planeta describe una elipse con el Sol en uno de los focos (no en el centro).

La distancia no es constante: hay un punto más cercano (perihelio) y uno más lejano (afelio).

## Segunda ley: áreas iguales

La línea que une el planeta con el Sol barre áreas iguales en tiempos iguales.

$$
\frac{dA}{dt} = \text{constante}
$$

Es una forma de decir que **conserva el momento angular**: cerca del Sol va rápido, lejos va lento. Es exactamente el mismo principio que el patinador que cierra los brazos.

## Tercera ley: períodos y distancias

El cuadrado del período orbital es proporcional al cubo del semieje mayor:

$$
T^2 \propto a^3
$$

Para el sistema solar, con $T$ en años y $a$ en unidades astronómicas, la constante es 1: $T^2 = a^3$.

En forma general, deducida de la gravitación:

$$
T^2 = \frac{4\pi^2}{GM}\,a^3
$$

## Cómo se usan

- **Medir masas**: conociendo $T$ y $a$ de un satélite se despeja la masa del cuerpo central. Así se pesó el Sol, y así se detectaron agujeros negros por el movimiento de estrellas cercanas.
- **Predecir posiciones** de planetas y cometas.
- **Poner satélites** en órbita: la altura determina el período.

## Lo que no explican

Kepler describió **cómo** se mueven, no **por qué**. La explicación llegó con la ley de gravitación de Newton: las tres leyes se deducen de una sola fuerza central que cae con el cuadrado de la distancia.

Dato histórico: cuando se aplicaron a Urano, las órbitas no daban exacto; ese desvío fue la pista que llevó a descubrir Neptuno.

## Error típico

Usar la distancia media en lugar del semieje mayor, o poner $T$ en segundos y $a$ en kilómetros sin ajustar la constante. Lo más seguro: usar unidades coherentes y la forma general con $G$ y $M$.

## Relaciones

- **Necesitás antes:** [[campo-gravitatorio]] · [[gravedad]]
- **Esto te habilita:** [[energia-potencial-gravitatoria-general]]
- **Se aplica en:** [[conservacion-momento-angular]] · [[relatividad-general]]
