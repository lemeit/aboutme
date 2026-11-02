---
title: "Ecuación de los espejos"
description: "La fórmula que relaciona objeto, imagen y foco, con la regla de signos que hay que respetar."
materia: "Física"
tema: "Ondas"
tags:
  - ondas
---

# Ecuación de los espejos

> **En una frase.** Una sola ecuación resuelve todos los espejos esféricos, si se respetan los signos.

## La ecuación

$$
\frac{1}{p} + \frac{1}{q} = \frac{1}{f}
$$

- $p$: distancia del objeto al espejo (siempre positiva en esta convención)
- $q$: distancia de la imagen al espejo
- $f$: distancia focal

## La regla de signos

| Magnitud | Positivo | Negativo |
|---|---|---|
| $f$ | espejo cóncavo | espejo convexo |
| $q$ | imagen **real**, delante | imagen **virtual**, detrás |
| $M$ | imagen derecha | imagen invertida |

Si $q$ sale negativo, la imagen es virtual: se forma detrás del espejo y no se puede proyectar.

## El aumento

$$
M = -\frac{q}{p}
$$

$|M| > 1$ agranda, $|M| < 1$ achica. El signo indica orientación.

## Cómo se resuelve

1. Identificar $f$ con su signo (cóncavo positivo, convexo negativo).
2. Escribir $p$ positivo.
3. Despejar $q$.
4. Calcular $M$ y interpretar los signos.

## El caso del espejo plano

Un espejo plano es un esférico con $R \to \infty$, o sea $f \to \infty$. Entonces $1/f = 0$ y queda $q = -p$: imagen virtual a la misma distancia. Recuperamos el resultado conocido.

## Error típico

Poner $f$ positivo en un convexo. Y no interpretar el signo de $q$: si da negativo y se lo toma como distancia "real", el resultado no tiene sentido físico.

## Ejemplo

Espejo cóncavo de 30 cm de radio ($f = +15$ cm), objeto a 45 cm:

$$
\frac{1}{q} = \frac{1}{15} - \frac{1}{45} = \frac{2}{45}
\quad\Longrightarrow\quad
q = 22{,}5\ \text{cm}
$$

Imagen real a 22,5 cm, con $M = -0{,}5$: invertida y a la mitad.

## Relaciones

- **Necesitás antes:** [[espejo-esferico]]
- **Esto te habilita:** [[aumento-espejos]]
- **Se aplica en:** [[espejo-concavo]] · [[espejo-convexo]]
