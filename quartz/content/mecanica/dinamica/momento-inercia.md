---
title: "Momento de inercia"
description: "La resistencia de un cuerpo a girar: el análogo rotacional de la masa, y depende de cómo está distribuida."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Momento de inercia

> **En una frase.** Así como la masa mide cuánto cuesta acelerar un cuerpo, el momento de inercia mide cuánto cuesta hacerlo girar.

## Definición

$$
I = \sum_i m_i r_i^2
$$

- $m_i$: masa de cada partícula
- $r_i$: distancia de esa partícula al **eje de giro**
- Unidad: kg·m²

La distancia va al cuadrado: la masa que está lejos del eje pesa mucho más que la que está cerca.

## Valores útiles

| Cuerpo | Eje | $I$ |
|---|---|---|
| Partícula | a distancia $R$ | $mR^2$ |
| Aro delgado | por el centro | $mR^2$ |
| Cilindro o disco macizo | por el centro | $\tfrac{1}{2}mR^2$ |
| Esfera maciza | por el centro | $\tfrac{2}{5}mR^2$ |
| Varilla delgada | por el centro | $\tfrac{1}{12}mL^2$ |
| Varilla delgada | por un extremo | $\tfrac{1}{3}mL^2$ |

Un aro y un disco de la misma masa y radio no giran igual: el aro tiene toda su masa lejos del eje y cuesta el doble.

## Depende del eje

El mismo cuerpo tiene distinto $I$ según por dónde pase el eje. La varilla vale $mL^2/12$ por el centro y $mL^2/3$ por el extremo.

**Teorema de los ejes paralelos**: para un eje desplazado una distancia $d$ del centro de masa:

$$
I = I_{cm} + m d^2
$$

## Por qué importa

Es el "peso" de la rotación:

- En la [[energia-cinetica-rotacional]]: $E_{c} = \tfrac{1}{2}I\omega^2$
- En la [[segunda-ley-newton-rotacional]]: $\tau = I\alpha$
- En el [[momento-angular]]: $L = I\omega$

## Error típico

Usar la fórmula de la tabla sin fijarse por dónde pasa el eje. Y no confundir con el [[centro-de-masa]]: el centro de masa dice *dónde*, el momento de inercia dice *cuánto cuesta girar alrededor*.

## Ejemplo

Un aro de 0,5 kg y 0,2 m de radio:

$$
I = mR^2 = 0{,}5 \cdot 0{,}04 = 0{,}02\ \text{kg·m}^2
$$

Un disco de la misma masa y radio tendría la mitad: $0{,}01$.

## Relaciones

- **Necesitás antes:** [[masa]] · [[torque]]
- **Esto te habilita:** [[segunda-ley-newton-rotacional]] · [[rodadura]]
- **Se aplica en:** [[energia-cinetica-rotacional]] · [[conservacion-momento-angular]]
