---
title: "Energía interna de un gas ideal"
description: "Depende solo de la temperatura: si no cambió T, no cambió la energía interna."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Energía interna de un gas ideal

> **En una frase.** En un gas ideal las partículas no se atraen, así que toda la energía interna es cinética: depende solo de la temperatura.

## Fórmula

$$
U = \tfrac{3}{2}\,nRT
$$

para un gas monoatómico (helio, neón, argón). Para uno diatómico (oxígeno, nitrógeno), a temperatura ambiente:

$$
U = \tfrac{5}{2}\,nRT
$$

- $n$: moles
- $R = 8{,}314\ \text{J/(mol·K)}$
- $T$: temperatura en kelvin

La forma general es $U = \tfrac{f}{2}nRT$, con $f$ los grados de libertad: 3 para monoatómico, 5 para diatómico.

## La consecuencia importante

$U$ depende **solo de $T$**. Entonces:

- Si el proceso empieza y termina a la misma temperatura, $\Delta U = 0$.
- En un [[proceso-termodinamico|proceso isotérmico]] todo el calor se convierte en trabajo.
- Si el volumen cambia pero la temperatura no, la energía interna no cambia.

## Por qué

En el modelo de gas ideal no hay fuerzas entre partículas, así que no existe energía potencial interna. Toda la energía está en el movimiento de las moléculas, y eso es exactamente lo que mide la temperatura.

Para un gas real, a altas presiones, esto deja de valer: hay que sumar la energía de las interacciones.

## Relación con la primera ley

$$
\Delta U = Q - W
$$

Si $\Delta U = 0$: $Q = W$. Todo el calor entregado se fue en trabajo de expansión, sin calentar el gas.

## Error típico

Calcular $\Delta U$ con $P$ y $V$ en lugar de $T$, o usar $\tfrac{3}{2}$ para un gas diatómico. La fórmula depende del tipo de gas.

## Ejemplo

Dos moles de helio a 300 K:

$$
U = \tfrac{3}{2}\cdot 2\cdot 8{,}314\cdot 300 \approx 7480\ \text{J}
$$

Si la temperatura sube a 400 K, $\Delta U \approx 2490$ J.

## Relaciones

- **Necesitás antes:** [[gas-ideal]] · [[energia-interna]]
- **Esto te habilita:** [[proceso-termodinamico]] · [[capacidad-calorifica]]
- **Se aplica en:** [[primera-ley-termodinamica]] · [[ciclo-termodinamico]]
