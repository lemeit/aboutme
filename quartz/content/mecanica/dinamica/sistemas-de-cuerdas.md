---
title: "Sistemas de cuerdas"
description: "Cuerpos unidos por sogas y poleas: la tensión es la misma en toda la cuerda y todos se mueven juntos."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Sistemas de cuerdas

> **En una frase.** Una cuerda ideal transmite la misma tensión de punta a punta, y los cuerpos que une comparten la aceleración.

## Las dos reglas

1. **Cuerda ideal** (sin masa y sin estiramiento): la tensión $T$ es la misma en todos sus puntos.
2. **Cuerda tensa**: todos los cuerpos unidos se mueven con la misma aceleración (en módulo), aunque en direcciones distintas.

Con poleas, un cuerpo que baja 1 m hace subir al otro 1 m: la aceleración es la misma.

## Cómo se resuelve

1. Elegir un sentido de movimiento.
2. Escribir la segunda ley **para cada cuerpo por separado**, con su propio diagrama.
3. Usar la misma $T$ y la misma $a$ en todas las ecuaciones.
4. Sumar o despejar.

Nunca se escribe una sola ecuación para todo el sistema sin mirar las tensiones: eso es lo que hace perder los signos.

## La máquina de Atwood

Dos masas colgando de una polea:

$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g
\qquad
T = \frac{2m_1m_2}{m_1 + m_2}\,g
$$

Si las masas son iguales, $a = 0$ y $T = mg$. Si una es mucho mayor, $a \to g$.

## Polea con masa

Si la polea tiene momento de inercia, las tensiones a cada lado **no** son iguales: la diferencia es la que la hace girar.

$$
(T_1 - T_2)\,R = I\,\alpha
$$

En los problemas de secundaria casi siempre se desprecia la masa de la polea, y entonces $T_1 = T_2$.

## Error típico

Usar la misma tensión cuando la polea tiene masa, o sumar las fuerzas de los dos cuerpos como si fueran uno solo sin verificar que la aceleración sea la misma.

## Ejemplo

Atwood con 3 kg y 1 kg:

$$
a = \frac{3-1}{3+1}\cdot 9{,}8 = 4{,}9\ \text{m/s}^2
\qquad
T = \frac{2\cdot 3\cdot 1}{4}\cdot 9{,}8 = 14{,}7\ \text{N}
$$

El peso del liviano es 9,8 N y la tensión 14,7 N: por eso sube.

## Relaciones

- **Necesitás antes:** [[newton-segunda]] · [[fuerza]]
- **Esto te habilita:** [[leyes-newton-aplicaciones]]
- **Se aplica en:** [[plano-inclinado]] · [[momento-inercia]]
