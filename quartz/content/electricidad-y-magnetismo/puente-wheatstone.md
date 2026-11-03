---
title: "Puente de Wheatstone"
description: "Cuatro resistencias y un galvanómetro: el método clásico para medir una resistencia desconocida."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Puente de Wheatstone

> **En una frase.** Un circuito de cuatro resistencias en rombo que, cuando el galvanómetro marca cero, revela el valor de la resistencia desconocida.

## El montaje

Dos ramas en paralelo, cada una con dos resistencias, y un galvanómetro entre los puntos medios.

```
      R1        R2
  A --/\/\--B--/\/\-- C
             |
           (G)
             |
  D --/\/\--E--/\/\-- C
      R3        Rx
```

## La condición de equilibrio

Cuando el galvanómetro marca cero (no pasa corriente entre $B$ y $E$), se cumple:

$$
\frac{R_1}{R_2} = \frac{R_3}{R_x}
\quad\Longrightarrow\quad
R_x = R_3\,\frac{R_2}{R_1}
$$

## Por qué funciona

En equilibrio, los dos puntos medios están al **mismo potencial**. Eso implica que las caídas de voltaje en las dos ramas son proporcionales, y de ahí sale la relación entre resistencias.

Como no circula corriente por el galvanómetro, no hay error de carga: el método es de **comparación**, no de lectura directa.

## Por qué es tan preciso

No depende de la exactitud del galvanómetro ni del voltaje de la fuente: solo de la relación entre resistencias. Por eso sirve para medir con precisión de décimas de por mil.

## Aplicaciones

- Medición de precisión de resistencias.
- **Sensores**: galgas extensométricas, termistores y celdas de carga son un brazo del puente. Una deformación o un cambio de temperatura desequilibra el puente y se lee como voltaje.
- Balanzas electrónicas.

## Error típico

Suponer que el galvanómetro marca cero siempre. El puente está en equilibrio solo para una relación de resistencias: hay que ajustar una de ellas hasta anular la lectura.

## Relaciones

- **Necesitás antes:** [[resistencias-serie]] · [[resistencias-paralelo]] · [[ley-kirchhoff-nodos]]
- **Esto te habilita:** [[circuitos]]
- **Se aplica en:** [[amperimetro]] · [[voltimetro]]
