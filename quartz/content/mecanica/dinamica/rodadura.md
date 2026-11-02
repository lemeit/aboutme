---
title: "Rodadura"
description: "Un cuerpo que rueda sin resbalar: se traslada y gira a la vez, con v = ωR."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Rodadura

> **En una frase.** Rodar sin resbalar es moverse y girar al mismo tiempo, con la velocidad de avance atada a la de giro.

## Condición de rodadura

$$
v_{cm} = \omega\, R
\qquad\text{y}\qquad
a_{cm} = \alpha\, R
$$

Vale para **rodadura sin deslizamiento**: el punto de contacto con el piso no se mueve respecto de él.

## El punto de contacto

Es la clave del asunto:

- El punto de abajo está **en reposo** en cada instante (por eso hay rozamiento estático y no cinético).
- El punto de arriba se mueve al **doble** de la velocidad del centro.

## Energía de un cuerpo que rueda

$$
E_c = \tfrac{1}{2}m v_{cm}^2 + \tfrac{1}{2}I_{cm}\omega^2
$$

Son dos energías a la vez: traslación del centro de masa y rotación alrededor de él. Con $v = \omega R$ se puede escribir todo en función de $v$.

## Bajando un plano inclinado

Sin deslizar, la energía potencial se reparte entre las dos formas:

$$
mgh = \tfrac{1}{2}mv^2 + \tfrac{1}{2}I\omega^2
$$

Despejando, para un cuerpo que parte del reposo:

$$
v = \sqrt{\frac{2gh}{1 + I/(mR^2)}}
$$

Por eso **llega primero el que tiene menor $I/(mR^2)$**: una esfera maciza le gana a un disco, y los dos le ganan a un aro. No depende de la masa ni del radio, solo de cómo está repartida.

## Cuándo deja de rodar

Si el plano es muy empinado o el rozamiento es insuficiente, el cuerpo **desliza** además de girar. Ahí $v \ne \omega R$ y hay que agregar el rozamiento cinético.

## Error típico

Usar solo $E_c = \tfrac{1}{2}mv^2$ en un cuerpo que rueda. Falta la mitad rotacional, y el resultado da una velocidad mayor que la real.

## Ejemplo

Una esfera maciza ($I = \tfrac{2}{5}mR^2$) que baja 1 m:

$$
v = \sqrt{\frac{2\cdot 9{,}8\cdot 1}{1 + 2/5}} = \sqrt{\frac{19{,}6}{1{,}4}} \approx 3{,}7\ \text{m/s}
$$

Un aro desde la misma altura llega a 3,1 m/s.

## Relaciones

- **Necesitás antes:** [[momento-inercia]] · [[energia-cinetica-rotacional]]
- **Esto te habilita:** [[conservacion-de-la-energia]]
- **Se aplica en:** [[plano-inclinado]] · [[rozamiento]]
