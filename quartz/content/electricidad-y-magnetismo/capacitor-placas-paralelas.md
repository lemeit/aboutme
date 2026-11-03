---
title: "Capacitor de placas paralelas"
description: "El modelo más simple: dos placas planas y un campo uniforme entre ellas."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Capacitor de placas paralelas

> **En una frase.** Dos placas de área $A$ separadas una distancia $d$ guardan una capacitancia que depende solo de la geometría y del material.

## Fórmula

$$
C = \frac{\varepsilon_0\, A}{d}
$$

Con un dieléctrico de constante relativa $\varepsilon_r$:

$$
C = \frac{\varepsilon_r\,\varepsilon_0\, A}{d}
$$

- $A$: área de cada placa, en m²
- $d$: separación, en m
- $\varepsilon_0 = 8{,}85\times10^{-12}$ F/m

## Qué se deduce

- Duplicar el área duplica la capacidad.
- Duplicar la separación la reduce a la mitad.
- Poner un dieléctrico la multiplica por $\varepsilon_r$ (hasta miles en algunos cerámicos).

## El campo entre las placas

Lejos de los bordes, el campo es **uniforme**:

$$
E = \frac{V}{d} = \frac{\sigma}{\varepsilon_0}
$$

Es el caso práctico de campo uniforme que se usa en todos los problemas de partículas cargadas entre placas.

## El dieléctrico

Además de aumentar la capacidad, permite aplicar más voltaje sin que salte una chispa. Los dieléctricos tienen una rigidez dieléctrica: pasado cierto campo, conducen y se perforan.

## Error típico

Usar la fórmula con $A$ en cm² y $d$ en cm sin convertir a metros. La capacitancia sale en farad solo con unidades del SI.

## Ejemplo

Placas de $0{,}02$ m² separadas 1 mm en aire:

$$
C = \frac{8{,}85\times10^{-12}\cdot0{,}02}{0{,}001} = 1{,}77\times10^{-10}\ \text{F} \approx 177\ \text{pF}
$$

## Relaciones

- **Necesitás antes:** [[capacitancia]] · [[capacitor]]
- **Esto te habilita:** [[energia-almacenada-capacitor]]
- **Se aplica en:** [[campo-disco-cargado]] · [[diferencia-potencial]]
