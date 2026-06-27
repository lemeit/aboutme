+++
title = "Movimiento relativo y velocidades relativas"
date = "2026-06-26"
draft = false
math = true
weight = 8
description = "Marco de referencia inercial, principio de relatividad y suma de velocidades."
tags = ["cap03", "cinemática", "movimiento relativo", "velocidad relativa", "marco de referencia", "relatividad"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Definir marco de referencia y marco de referencia inercial.
- Explicar el principio de relatividad del movimiento.
- Calcular velocidades relativas sumando vectores de velocidad.

---

## Marco de referencia

**Relatividad:** el concepto de que el movimiento solo puede describirse *respecto a un observador*, que puede estar en movimiento o en reposo relativo al objeto observado.

**Marco de referencia:** la posición y velocidad del observador que mira un objeto en movimiento relativo a él.

**Marco de referencia inercial:** un marco de referencia que está en reposo o en movimiento a velocidad constante (sin aceleración).

---

## El principio de relatividad

> **No existe ningún experimento que permita determinar de manera concluyente si estás en movimiento uniforme o en reposo.**

Si tu velocidad es constante (sin aceleración), no sentís ninguna fuerza neta — y no podés distinguir entre estar quieto o moviéndote uniformemente.

**Ejemplo clásico:** estás en un tren detenido en la estación. El tren del andén de al lado empieza a moverse. Por un momento, creés que sos vos quien se mueve — hasta que mirás el andén y te das cuenta de que estás quieto.

Ambas descripciones son igualmente válidas:
1. El tranvía se mueve a 50 km/h y el suelo está quieto.
2. El tranvía está quieto y el suelo se mueve a 50 km/h hacia atrás.

Ninguna es "más correcta" que la otra — ambas son marcos de referencia inerciales válidos.

---

## Velocidades relativas

Cuando tanto el objeto como el observador están en movimiento, la **velocidad relativa** es la suma (o diferencia) vectorial de sus velocidades.

$$v_{relativa} = v_{objeto} + v_{observador}$$

donde los signos indican la dirección.

### Casos en 1D

**Observador acercándose al objeto** (direcciones opuestas):

$$v_{rel} = v_{objeto} + v_{observador} \quad \text{(magnitudes se suman)}$$

**Observador alejándose del objeto** (misma dirección):

$$v_{rel} = v_{objeto} - v_{observador} \quad \text{(magnitudes se restan)}$$

---

## Ejemplos

### Ejemplo 1 — Onda en una cuerda

Una onda viaja a $2\ \text{m/s}$. Un observador corre *hacia* la onda a $1\ \text{m/s}$.

$$v_{rel} = 2 + 1 = 3\ \text{m/s}$$

Si el observador corre *en la misma dirección* que la onda a $1\ \text{m/s}$:

$$v_{rel} = 2 - 1 = 1\ \text{m/s}$$

Si el observador corre a la misma velocidad que la onda, la onda le parece estacionaria: $v_{rel} = 0$.

### Ejemplo 2 — Río y nadadores

Un río fluye a $2\ \text{m/s}$ hacia el sur. Jack nada *a favor* de la corriente a $2\ \text{m/s}$ (relativo al agua). Jill nada *en contra* de la corriente a $2\ \text{m/s}$ (relativo al agua).

- Velocidad de Jack respecto a la orilla: $2 + 2 = 4\ \text{m/s}$ al sur.
- Velocidad de Jill respecto a la orilla: $2 - 2 = 0\ \text{m/s}$ (¡Jill está quieta respecto a la orilla!).
- Velocidad de Jack respecto a Jill: $4 - 0 = 4\ \text{m/s}$ al sur.

---

## Suma vectorial en 2D

En dos dimensiones, las velocidades se suman como vectores. Si un avión vuela al este a $125\ \text{m/s}$ y el viento sopla al norte a $40\ \text{m/s}$:

$$v_{resultante} = \sqrt{125^2 + 40^2} = \sqrt{15625 + 1600} = \sqrt{17225} \approx 131\ \text{m/s}$$

$$\theta = \tan^{-1}\left(\frac{40}{125}\right) \approx 17{,}7°\ \text{al norte del este}$$

---

## Para pensar

1. Estás en un tren moviéndose a 100 km/h y caminás hacia adelante dentro del vagón a 5 km/h. ¿A qué velocidad te movés respecto al suelo?
2. ¿Por qué el principio de relatividad implica que no existe un "observador absoluto" privilegiado?
3. Si dos autos se acercan el uno al otro, cada uno a 60 km/h, ¿a qué velocidad se acercan según cada conductor?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
