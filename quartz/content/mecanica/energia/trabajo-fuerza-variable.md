---
title: "Trabajo de una fuerza variable"
description: "Cuando la fuerza cambia a lo largo del camino, el trabajo es el área bajo la gráfica."
materia: "Física"
tema: "Energía"
---

# Trabajo de una fuerza variable

> **En una frase.** Si la fuerza no es constante, el trabajo se calcula sumando pedacitos: es el área bajo la curva de fuerza contra posición.

## Fórmula

$$
W = \int_{x_i}^{x_f} F_x\, dx
$$

Para el caso simples donde la fuerza va en la dirección del movimiento. Si la fuerza cambia de dirección, se usa el producto escalar: $W = \int \vec{F}\cdot d\vec{r}$.

## Cómo se lee la gráfica

En un gráfico $F$ contra $x$:

- El trabajo es el **área** entre la curva y el eje.
- Área arriba del eje: trabajo positivo.
- Área abajo: trabajo negativo.
- Si la curva sube y baja, se suman las áreas con su signo.

Esta es la razón por la que el trabajo no es simplemente "fuerza por distancia": eso vale solo si $F$ es constante.

## El caso del resorte

La fuerza elástica crece con el estiramiento, $F = kx$. El área bajo esa recta es un triángulo:

$$
W = \int_0^{x} kx'\,dx' = \tfrac{1}{2} k x^2
$$

Y de ahí sale la [[energia-potencial-elastica]]: $E_{p,el} = \tfrac{1}{2}kx^2$.

## Otros casos

- **Gravedad lejos de la superficie**: $F = GmM/r^2$ no es constante; su integral da la energía potencial general.
- **Fuerza de un gas**: $W = \int P\, dV$, la misma idea con presión y volumen.

## Error típico

Usar $W = F \cdot d$ con la fuerza máxima o con la fuerza final. Con fuerza variable hay que integrar o calcular el área; multiplicar el valor final por la distancia sobreestima el trabajo (geométricamente, sería el rectángulo que envuelve al triángulo).

## Ejemplo

Un resorte de $k = 200$ N/m se estira de 0 a 10 cm:

$$
W = \tfrac{1}{2}\cdot 200\cdot (0{,}1)^2 = 1\ \text{J}
$$

La fuerza al final es 20 N, pero el trabajo no es $20 \cdot 0{,}1 = 2$ J: es la mitad, porque al principio la fuerza era cero.

## Relaciones

- **Necesitás antes:** [[trabajo]] · [[teorema-trabajo-energia]]
- **Esto te habilita:** [[energia-potencial-elastica]] · [[fuerzas-conservativas]]
- **Se aplica en:** [[trabajo-rotacional]]
