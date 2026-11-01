---
title: "Energía cinética rotacional"
description: "La energía de un cuerpo que gira: media masa por radio al cuadrado por omega al cuadrado."
materia: "Física"
tema: "Energía"
tags:
  - mecanica
  - energia
---

# Energía cinética rotacional

> **En una frase.** Un cuerpo que gira guarda energía aunque su centro esté quieto: cada pedazo se mueve, y sumados dan una energía de rotación.

## Fórmula

$$
E_{c,\text{rot}} = \tfrac{1}{2} I \omega^2
$$

- $I$: **momento de inercia** del cuerpo respecto del eje de giro, en kg·m²
- $\omega$: [[velocidad-angular]], en rad/s

## De dónde sale

Cada partícula del cuerpo se mueve con $v = \omega r$. Sumando $\tfrac{1}{2}m_i v_i^2$ para todas:

$$
E_c = \sum \tfrac{1}{2} m_i (\omega r_i)^2 = \tfrac{1}{2}\left(\sum m_i r_i^2\right)\omega^2
$$

El paréntesis es el momento de inercia: $I = \sum m_i r_i^2$. Es el análogo rotacional de la masa: mide cuánto cuesta hacer girar al cuerpo.

## Depende de cómo está distribuida la masa

Dos cuerpos de la misma masa pueden tener $I$ muy distinto. Un cilindro macizo y un aro del mismo radio y masa: el aro tiene toda la masa lejos del eje, así que su $I$ es mayor y cuesta más acelerarlo angularmente.

Por eso una bailarina que recoge los brazos gira más rápido: al acercar la masa al eje baja $I$, y si no hay torque externo, $\omega$ sube para conservar el momento angular.

## El caso general

Un cuerpo que gira y además se traslada tiene las dos energías:

$$
E_c = \tfrac{1}{2} m v_{cm}^2 + \tfrac{1}{2} I \omega^2
$$

Por ejemplo, una rueda que baja una pendiente: se traslada y gira a la vez.

## Error típico

Usar la masa del cuerpo como si fuera una partícula en el borde. El $I$ no es $m r^2$ salvo en un aro delgado; depende de la forma. Para una esfera maciza es $\tfrac{2}{5}mr^2$; para un cilindro macizo, $\tfrac{1}{2}mr^2$.

## Ejemplo

Un volante de $I = 0{,}5\ \text{kg·m}^2$ girando a 20 rad/s:

$$
E_{c,\text{rot}} = \tfrac{1}{2}\cdot 0{,}5\cdot 400 = 100\ \text{J}
$$

Esa energía es la que entrega al frenar, y por eso los volantes se usan para almacenar energía.

## Relaciones

- **Necesitás antes:** [[energia-cinetica]] · [[velocidad-angular]]
- **Esto te habilita:** [[conservacion-de-la-energia]]
- **Se aplica en:** [[trabajo-rotacional]]
