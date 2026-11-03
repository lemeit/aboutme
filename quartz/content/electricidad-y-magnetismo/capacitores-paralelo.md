---
title: "Capacitores en paralelo"
description: "Conectados lado a lado, la capacidad total es la suma."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Capacitores en paralelo

> **En una frase.** En paralelo, todos tienen el mismo voltaje y la capacidad total es la **suma**.

## Fórmula

$$
C_{eq} = C_1 + C_2 + \dots
$$

## Por qué se comporta así

Los dos extremos están unidos, así que todos ven la misma diferencia de potencial. Pero cada uno guarda su propia carga:

$$
Q = Q_1 + Q_2 = C_1 V + C_2 V = (C_1 + C_2)V
$$

Para el mismo voltaje, más capacitores juntos guardan más carga: como si fuera uno de placas más grandes.

## La analogía

Es como poner tanques en paralelo: la superficie total de agua es la suma, y todos se llenan a la misma altura.

## Cuándo se usa

- Cuando se necesita una capacidad mayor que la disponible.
- Para repartir la carga entre varios (cada uno guarda menos).
- En filtros de fuentes, donde se ponen varios en paralelo para tener reserva.

## El riesgo

En paralelo todos tienen el mismo voltaje: si uno tiene menor tensión nominal, se puede romper, y entonces los demás ven más carga.

## Error típico

Aplicar la fórmula de serie por costumbre. En capacitores, la suma simple vale en **paralelo**.

## Ejemplo

Tres de 10 µF en paralelo:

$$
C_{eq} = 30\ \mu\text{F}
$$

## Relaciones

- **Necesitás antes:** [[capacitores-serie]]
- **Esto te habilita:** [[circuitos]] · [[capacitancia]]
- **Se aplica en:** [[capacitor]] · [[energia-almacenada-capacitor]]
