---
title: "Centro de masa"
description: "El punto que representa al cuerpo entero: donde se puede suponer aplicada toda su masa."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Centro de masa

> **En una frase.** Todo cuerpo, por más irregular que sea, se mueve como si toda su masa estuviera concentrada en un punto: el centro de masa.

## Definición

Para un sistema de partículas:

$$
\vec{r}_{cm} = \frac{m_1\vec{r}_1 + m_2\vec{r}_2 + \dots}{m_1 + m_2 + \dots}
= \frac{1}{M}\sum_i m_i \vec{r}_i
$$

En coordenadas, y para un cuerpo continuo, las sumas se vuelven integrales. En la práctica se usan tres cuentas, una por eje.

## Dónde queda

- **Cuerpo homogéneo y simétrico**: coincide con el centro geométrico.
- **Objeto compuesto**: se calcula como un promedio pesado por masa. Una mancuerna tiene su centro de masa cerca del extremo más pesado.
- **Cuerpo hueco**: puede estar fuera del material. El centro de masa de un anillo está en el centro del agujero.

No confundir con el **centro de gravedad**: coinciden si el campo gravitatorio es uniforme, que es el caso en un aula. A escalas astronómicas se separan.

## Por qué importa

Simplifica cualquier problema: en lugar de seguir cada partícula, se sigue un solo punto. El [[movimiento-centro-masa]] obedece a las leyes de Newton como si fuera una partícula con toda la masa del sistema.

## Error típico

Confundirlo con el punto de apoyo o con el centro de un dibujo. En una barra con un extremo más pesado, el centro de masa está desplazado hacia ese lado, y es lo que decide si se cae o no.

## Ejemplo

Dos masas unidas por una varilla de 1 m: 2 kg en $x = 0$ y 6 kg en $x = 1$ m.

$$
x_{cm} = \frac{2\cdot 0 + 6\cdot 1}{2+6} = 0{,}75\ \text{m}
$$

Está a 75 cm del extremo liviano, tres veces más cerca de la masa grande.

## Relaciones

- **Necesitás antes:** [[masa]] · [[posicion]]
- **Esto te habilita:** [[movimiento-centro-masa]] · [[conservacion-momentum]]
- **Se aplica en:** [[choques]] · [[equilibrio-traslacional]]
