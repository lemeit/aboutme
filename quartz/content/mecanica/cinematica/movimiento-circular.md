---
title: "Movimiento circular"
description: "Un cuerpo que gira: por qué tiene aceleración aunque la rapidez no cambie."
materia: "Física"
tema: "Cinemática"
tags:
  - mecanica
  - cinematica
---

# Movimiento circular

> **En una frase.** Si un cuerpo se mueve en círculo, su velocidad cambia aunque el velocímetro marque siempre lo mismo: cambia la dirección.

## Descripción

La posición se describe con un ángulo, no con una distancia: hace falta un origen y un radio fijo. Para un cuerpo que recorre una circunferencia de radio $r$:

| Magnitud lineal | Magnitud angular | Relación |
|---|---|---|
| arco recorrido $s$ | ángulo $\theta$ | $s = \theta\, r$ |
| velocidad $v$ | [[velocidad-angular]] $\omega$ | $v = \omega\, r$ |
| aceleración tangencial $a_t$ | [[aceleracion-angular]] $\alpha$ | $a_t = \alpha\, r$ |

El ángulo **debe** ir en radianes para que estas relaciones funcionen; si se usa grados, aparece un factor $180/\pi$ de más.

## Las dos aceleraciones

Un cuerpo girando puede tener dos aceleraciones simultáneas y perpendiculares:

- **Centrípeta**: apunta al centro, cambia la dirección. Nunca es cero en un movimiento circular. $a_c = v^2/r = \omega^2 r$
- **Tangencial**: apunta a favor o en contra del movimiento, cambia la rapidez. Es cero si el giro es uniforme.

Cuando el giro es uniforme ([[mcu]]), solo hay centrípeta. La aceleración total es la suma vectorial de las dos.

## Error típico

Decir "en el MCU no hay aceleración porque la velocidad es constante". La **rapidez** es constante; la **velocidad** no, porque es vectorial y cambia de dirección en cada instante. Sin aceleración centrípeta el cuerpo seguiría en línea recta.

## Ejemplo

Un auto dobla en una curva de 50 m de radio a 72 km/h (20 m/s):

$$
a_c = \frac{v^2}{r} = \frac{400}{50} = 8\ \text{m/s}^2
$$

Es casi la aceleración de la gravedad. Si el rozamiento no alcanza para darla, el auto se va de largo en línea recta.

## Relaciones

- **Necesitás antes:** [[velocidad]] · [[posicion-angular]]
- **Esto te habilita:** [[aceleracion-centripeta]] · [[mcu]]
- **Se aplica en:** [[fuerza-centripeta]] · [[energia-cinetica-rotacional]]
