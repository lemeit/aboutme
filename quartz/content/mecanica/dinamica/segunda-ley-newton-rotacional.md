---
title: "Segunda ley de Newton rotacional"
description: "El torque produce aceleración angular: la versión rotacional de F = ma."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Segunda ley de Newton rotacional

> **En una frase.** Para que un cuerpo cambie su giro hace falta torque, y cuesta más cuanto mayor es su momento de inercia.

## La ley

$$
\sum \vec{\tau} = I \, \vec{\alpha}
$$

- $\sum\vec{\tau}$: torque neto respecto del eje de giro, en N·m
- $I$: [[momento-inercia]] del cuerpo respecto de ese eje, en kg·m²
- $\alpha$: [[aceleracion-angular]], en rad/s²

Es la misma estructura que $F = ma$: torque ocupa el lugar de fuerza, $I$ el de masa, $\alpha$ el de aceleración.

## Cómo se usa

1. Elegir el eje de rotación (normalmente el que pasa por el soporte).
2. Calcular el torque de cada fuerza respecto de ese eje: $\tau = F\,d_\perp$.
3. Sumarlos con signo (horario negativo, antihorario positivo).
4. Despejar $\alpha$ y, si hace falta, integrar para obtener $\omega$ y $\theta$.

## Qué produce y qué no

- Una fuerza que pasa por el eje produce torque **cero**: no hace girar.
- Una fuerza perpendicular al brazo produce el máximo torque.
- El torque es nulo si la fuerza es paralela a la línea que une el punto de aplicación con el eje.

## Casos

- **Polea con masa**: la cuerda ejerce torque en el borde, y la polea tiene $I = \tfrac{1}{2}mR^2$. Si se desprecia la masa de la polea, se puede usar directamente $T_1 = T_2$.
- **Puerta**: se abre con menos fuerza cuanto más lejos del bisagra se empuja.
- **Volante**: mucho $I$ y poco $\alpha$ con el mismo torque.

## Error típico

Usar $\sum F = ma$ para el giro, o calcular torque con la distancia al centro en lugar de la distancia **perpendicular** a la línea de acción. Si la fuerza no es perpendicular, va $d_\perp = d\sin\theta$.

## Ejemplo

Un disco de 2 kg y 0,3 m de radio ($I = \tfrac{1}{2}mR^2 = 0{,}09$) recibe un torque de 0,45 N·m:

$$
\alpha = \frac{\tau}{I} = \frac{0{,}45}{0{,}09} = 5\ \text{rad/s}^2
$$

En 2 s desde el reposo: $\omega = 10$ rad/s.

## Relaciones

- **Necesitás antes:** [[torque]] · [[momento-inercia]]
- **Esto te habilita:** [[rodadura]] · [[trabajo-rotacional]]
- **Se aplica en:** [[conservacion-momento-angular]]
