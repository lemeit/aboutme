---
title: "Ecuación de onda"
description: "La fórmula que describe cualquier punto de la onda en cualquier instante."
materia: "Física"
tema: "Ondas"
tags:
  - ondas
---

# Ecuación de onda

> **En una frase.** Es la función que da la altura de la onda en cada punto y en cada momento: una fórmula con dos variables.

## La forma típica

Para una onda que viaja hacia la derecha:

$$
y(x,t) = A\cos(kx - \omega t + \varphi)
$$

- $A$: [[amplitud]]
- $k$: [[numero-onda]]
- $\omega$: [[frecuencia-angular]]
- $\varphi$: fase inicial

Si viaja hacia la izquierda, el signo se invierte: $kx + \omega t$.

## Cómo se lee

La fórmula tiene dos entradas: $x$ (dónde) y $t$ (cuándo). Fijando una:

- **$t$ fijo**: se obtiene una foto de la onda en ese instante.
- **$x$ fijo**: se obtiene la oscilación de un punto a lo largo del tiempo.

Son las dos vistas del mismo fenómeno.

## La fase

El argumento $(kx - \omega t)$ es la fase. Dos puntos están **en fase** si su diferencia de fase es múltiplo de $2\pi$: oscilan igual. Están en **oposición** si difieren en $\pi$: uno sube cuando el otro baja.

Esa idea es la base de la [[interferencia]]: cuando dos ondas se superponen, suman o se cancelan según su diferencia de fase.

## La ecuación diferencial

Todo fenómeno ondulatorio satisface:

$$
\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 y}{\partial t^2}
$$

De ahí sale que la velocidad $v$ es lo que caracteriza al medio. No hace falta resolverla en secundaria, pero explica por qué la misma estructura aparece en cuerdas, sonido, luz y cuántica.

## Error típico

Confundir el movimiento de la onda con el de un punto. La ecuación da $y$ de un punto fijo: eso oscila. La onda, como forma, avanza a $v$.

## Relaciones

- **Necesitás antes:** [[onda]] · [[numero-onda]] · [[frecuencia-angular]]
- **Esto te habilita:** [[interferencia]] · [[ondas-estacionarias]]
- **Se aplica en:** [[velocidad-onda]] · [[luz]]
