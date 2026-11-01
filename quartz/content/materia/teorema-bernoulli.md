---
title: "Teorema de Bernoulli"
description: "Dónde el fluido va rápido, la presión baja: el principio detrás del Venturi y del rociador."
materia: "Física"
tema: "Materia"
tags:
  - materia
---

# Teorema de Bernoulli

> **En una frase.** En un fluido que circula, la energía se reparte entre presión, velocidad y altura: si una sube, otra baja.

## Ecuación

Para un fluido incompresible y sin rozamiento, a lo largo de una línea de corriente:

$$
P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constante}
$$

Los tres términos son energía por unidad de volumen:

| Término | Qué representa | Unidad |
|---|---|---|
| $P$ | energía de presión | Pa |
| $\tfrac{1}{2}\rho v^2$ | energía cinética por volumen | Pa |
| $\rho g h$ | energía potencial por volumen | Pa |

Comparando dos puntos a la misma altura:

$$
P_1 + \tfrac{1}{2}\rho v_1^2 = P_2 + \tfrac{1}{2}\rho v_2^2
$$

## Qué dice y qué no dice

Dice que **a mayor velocidad, menor presión** en esa línea de corriente. No dice que "el aire rápido hace fuerza hacia arriba" sin más: para explicar la sustentación de un ala hay que mirar cómo el ala desvía el aire, no solo la diferencia de velocidades.

## Dónde se ve

- **Tubo de Venturi**: un estrechamiento acelera el fluido y baja la presión; se usa para medir caudal.
- **Rociador de pintura** y carburador: el aire rápido aspira el líquido.
- **Techo volado por el viento**: el aire rápido arriba baja la presión y la cubierta se levanta.
- **Pelota con efecto**: la rotación cambia la velocidad del aire a un lado y la curva.

## Condiciones

- Fluido incompresible (vale bien para líquidos)
- Sin viscosidad (sin pérdidas por rozamiento)
- Flujo estacionario, a lo largo de una misma línea de corriente

Si hay mucha [[viscosidad]] o el flujo es turbulento, la ecuación deja de valer tal cual.

## Error típico

Aplicarla entre dos puntos que no están en la misma línea de corriente, o entre dos recipientes distintos. Bernoulli vale **a lo largo de una línea de corriente**, no entre cualquier par de puntos del sistema.

## Ejemplo

Por un caño horizontal entra agua a 1 m/s y 200 kPa; se estrecha y sale a 4 m/s:

$$
P_2 = P_1 + \tfrac{1}{2}\rho\left(v_1^2 - v_2^2\right)
= 200\,000 + \tfrac{1}{2}\cdot1000\cdot(1 - 16)
= 192\,500\ \text{Pa}
$$

## Relaciones

- **Necesitás antes:** [[ecuacion-continuidad]] · [[presion]]
- **Esto te habilita:** [[viscosidad]]
- **No confundir con:** [[principio-pascal]]
