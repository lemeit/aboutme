---
title: "Resistencia interna"
description: "La resistencia propia de la fuente, que hace caer el voltaje cuando circula corriente."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Resistencia interna

> **En una frase.** Toda fuente tiene una resistencia adentro, y por eso el voltaje que entrega baja cuando le pedís corriente.

## El modelo

Una fuente real se representa como una fem ideal en serie con una resistencia $r$:

$$
V_{\text{bornes}} = \mathcal{E} - I\,r
$$

- $\mathcal{E}$: [[fuerza-electromotriz]]
- $r$: resistencia interna
- $I$: corriente que circula

## Qué implica

- **Sin carga** ($I = 0$): el voltaje en bornes es igual a la fem.
- **Con carga**: el voltaje cae, y la caída es proporcional a la corriente.
- **Cortocircuito**: toda la fem cae dentro de la fuente, que se calienta.

## La potencia disipada adentro

$$
P_r = I^2\,r
$$

Esa energía no llega al circuito: se convierte en calor dentro de la pila o el generador. Por eso una pila se calienta cuando se exige mucho.

## Ejemplos

- Pila alcalina: décimas de ohm.
- Batería de auto: centésimas de ohm, pero mucha corriente.
- Fuente de laboratorio: muy baja, por eso mantiene el voltaje.
- Panel solar: tiene una curva característica en lugar de una recta.

## Consecuencia práctica

Conectar un aparato de mucha corriente a una fuente con resistencia interna alta hace que el voltaje se derrumbe. Es lo que pasa cuando el auto no arranca con la batería descargada: la fem está, pero la resistencia interna subió.

## Error típico

Ignorarla en los problemas de circuitos. En muchos ejercicios se desprecia, pero si el enunciado la da, hay que restarla del voltaje disponible.

## Relaciones

- **Necesitás antes:** [[fuerza-electromotriz]]
- **Esto te habilita:** [[ley-kirchhoff-mallas]]
- **Se aplica en:** [[resistencias-serie]] · [[circuitos]]
