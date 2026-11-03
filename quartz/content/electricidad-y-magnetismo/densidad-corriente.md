---
title: "Densidad de corriente"
description: "La corriente repartida por la sección del conductor: cuánta carga pasa por unidad de área."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Densidad de corriente

> **En una frase.** Es la corriente dividida por el área del conductor: dice cuán "apretado" va el flujo de carga.

## Fórmula

$$
J = \frac{I}{A}
$$

- $J$: densidad de corriente, en A/m²
- $I$: corriente, en A
- $A$: sección transversal, en m²

La densidad de corriente es vectorial; $J=I/A$ expresa su módulo si el flujo es uniforme y perpendicular a la sección. Apunta en el sentido de la corriente convencional.

## Por qué es útil

Dos cables pueden llevar la misma corriente con secciones muy distintas. La densidad dice cuál está más exigido: es la que decide si un conductor se calienta demasiado.

Un cable de 1 mm² con 10 A va a 10 A/mm² = $10^7$ A/m², sin que ese cálculo determine por sí solo una corriente admisible: también intervienen el material, la aislación y las condiciones térmicas.

## La forma microscópica

$$
\vec{J} = n\,q\,\vec{v}_d
$$

con $n$ la densidad de portadores, $q$ su carga con signo y $\vec{v}_d$ su velocidad media vectorial de [[velocidad-arrastre]]. Para electrones, la corriente convencional y la deriva tienen sentidos opuestos; en módulos, $J=n|q|v_d$. Ahí se ve el vínculo entre la descripción macroscópica y el movimiento de los electrones.

## La ley de Ohm microscópica

$$
\vec{J} = \sigma\,\vec{E}
$$

con $\sigma$ la [[conductividad]]. Es la forma local de la ley de Ohm: el campo empuja, la densidad de corriente responde.

## Por qué el cable se calienta

La potencia disipada por unidad de volumen es $J^2/\sigma$. Si la densidad sube, el calor sube con el cuadrado: por eso un cable fino con mucha corriente se derrite.

## Error típico

Confundir corriente con densidad de corriente. La corriente es cuánta carga pasa por segundo; la densidad, cuánta por unidad de área.

## Relaciones

- **Necesitás antes:** [[corriente-electrica]]
- **Esto te habilita:** [[velocidad-arrastre]] · [[conductividad]]
- **Se aplica en:** [[resistividad]] · [[ley-de-ohm]]
