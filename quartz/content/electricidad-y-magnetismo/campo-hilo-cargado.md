---
title: "Campo de un hilo cargado"
description: "El campo alrededor de un alambre largo: cae con la distancia, no con su cuadrado."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Campo de un hilo cargado

> **En una frase.** Alrededor de un hilo muy largo y cargado, el campo apunta radialmente y cae con la primera potencia de la distancia.

## El resultado

Para un hilo con densidad lineal de carga $\lambda$, a distancia $r$ del eje:

$$
E = \frac{\lambda}{2\pi\varepsilon_0\, r}
= \frac{2k\lambda}{r}
$$

La dirección es radial, saliendo o entrando según el signo.

## Por qué cae con $1/r$ y no con $1/r^2$

Porque el hilo es infinitamente largo: al alejarse no solo aumenta la distancia, también "se ve" más hilo. Los dos efectos se compensan parcialmente, y el resultado es una caída más lenta.

Es el mismo fenómeno que en la gravitación con un cilindro infinito.

## Cómo se obtiene

Integrando el campo de cada elemento del hilo. Las componentes a lo largo del hilo se cancelan por simetría; queda solo la radial. Con la ley de Gauss sale en dos líneas.

## El caso práctico

Un hilo real y finito se comporta así en puntos **cerca del centro** y lejos de los extremos. Cerca de las puntas, el campo se abre.

## Error típico

Usar $1/r^2$ porque "el campo siempre cae con el cuadrado". Eso vale para cargas puntuales; para distribuciones extendidas, la geometría cambia la potencia.

## Relaciones

- **Necesitás antes:** [[campo-carga-puntual]] · [[campo-disco-cargado]]
- **Esto te habilita:** [[lineas-campo-electrico]]
- **Se aplica en:** [[potencial-electrico]] · ley de gauss
