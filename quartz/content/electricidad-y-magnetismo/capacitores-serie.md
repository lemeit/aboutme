---
title: "Capacitores en serie"
description: "Conectados uno tras otro, la capacidad total es menor que la de cada uno."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Capacitores en serie

> **En una frase.** En serie, la carga es la misma en todos y la capacidad total resulta **menor** que la del más chico.

## Fórmula

$$
\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots
$$

Para dos:

$$
C_{eq} = \frac{C_1 C_2}{C_1 + C_2}
$$

## Por qué se comporta así

La misma carga $Q$ se reparte entre todos (porque la placa de uno se conecta con la del otro). Pero el voltaje se **reparte**:

$$
V = V_1 + V_2 = \frac{Q}{C_1} + \frac{Q}{C_2} = \frac{Q}{C_{eq}}
$$

Para la misma carga, más capacitores en serie implican más voltaje total: como si fueran uno más "duro" de cargar.

Es lo contrario de las resistencias, donde en serie se suman.

## El voltaje se reparte

El capacitor más chico recibe el mayor voltaje, porque $V = Q/C$. Eso es importante: en una serie, el de menor capacidad es el que puede romperse primero.

## La regla mnemotécnica

Capacitores en serie se combinan como **resistencias en paralelo**. Y en paralelo, como resistencias en serie. Es una inversión clásica.

## Error típico

Sumar las capacitancias en serie. Sumar solo vale en paralelo.

## Ejemplo

Dos de 10 µF y 10 µF en serie:

$$
C_{eq} = \frac{10\cdot10}{10+10} = 5\ \mu\text{F}
$$

La mitad de uno solo.

## Relaciones

- **Necesitás antes:** [[capacitancia]] · [[capacitor]]
- **Esto te habilita:** [[capacitores-paralelo]]
- **Se aplica en:** [[circuitos]] · [[energia-almacenada-capacitor]]
