---
title: "Elasticidad"
description: "Cuánto se deforma un sólido cuando lo estiras o lo comprimís, y hasta dónde vuelve."
materia: "Física"
tema: "Materia"
tags:
  - materia
---

# Elasticidad

> **En una frase.** Todo sólido se deforma cuando le aplicás una fuerza; la elasticidad mide cuánto, y hasta qué punto vuelve a su forma.

## Esfuerzo y deformación

La elasticidad se describe con dos cocientes:

- **Esfuerzo** (stress): la fuerza repartida en la sección, $\sigma = F/A$, en N/m² = Pa
- **Deformación** (strain): el estiramiento relativo, $\varepsilon = \Delta L / L_0$, sin unidades

## Módulo de Young

Para un estiramiento en una dirección:

$$
E = \frac{\sigma}{\varepsilon} = \frac{F/A}{\Delta L / L_0}
$$

$E$ es el **módulo de Young**, en Pa. Es una propiedad del material: cuanto más grande, más rígido. El acero tiene un módulo mucho mayor que el hueso o la goma.

Despejando, la deformación es:

$$
\Delta L = \frac{F\, L_0}{E\, A}
$$

## Hasta dónde vale

- **Zona elástica**: al sacar la fuerza, el cuerpo recupera su forma. La relación esfuerzo-deformación es lineal y ahí vale la fórmula.
- **Límite elástico**: pasado ese punto queda deformado de forma permanente.
- **Rotura**: si se sigue estirando, se rompe.

## Por qué importa en ingeniería

Un puente o un cable no se diseñan para "no deformarse", sino para deformarse dentro de la zona elástica. El [[fuerza-elastica|resorte]] es el caso más simple de este comportamiento: la fuerza que ejerce es proporcional a su deformación.

## Error típico

Creer que un material "duro" es "elástico". Son cosas distintas: el vidrio es duro y frágil (poca zona elástica); la goma es blanda y muy elástica (mucha zona elástica).

## Ejemplo

Un alambre de 2 m y 1 mm² de sección ($A = 1\times10^{-6}\ \text{m}^2$) con $E = 2\times10^{11}\ \text{Pa}$ sosteniendo 100 N:

$$
\Delta L = \frac{100 \cdot 2}{2\times10^{11} \cdot 1\times10^{-6}} = 0,001\ \text{m} = 1\ \text{mm}
$$

## Relaciones

- **Necesitás antes:** [[fuerza]] · [[fuerza-elastica]]
- **Esto te habilita:** [[estados-de-la-materia]]
- **Se aplica en:** [[viscosidad]]
