+++
title = "Fricción"
date = "2026-06-26"
draft = false
math = true
weight = 8
description = "Fricción estática y cinética, coeficiente de fricción, resolución de problemas con fricción."
tags = ["cap05", "fuerzas", "fricción", "coeficiente de fricción", "fricción estática", "fricción cinética"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir entre fricción estática y cinética.
- Calcular la fuerza de fricción usando el coeficiente correspondiente.
- Resolver problemas combinados de fuerzas con fricción.

---

## ¿Qué es la fricción?

La **fricción** ($\vec{F}_f$) es una fuerza que se opone al deslizamiento (o al intento de deslizamiento) de una superficie sobre otra.

Características:
- Es una fuerza de **contacto** y de **reacción**.
- Siempre es **paralela** a la interfaz entre las superficies.
- Opuesta al movimiento o al intento de movimiento.

---

## Fricción estática vs. cinética

| Tipo | Cuándo actúa | Fórmula |
|------|-------------|---------|
| **Estática** ($F_{f,s}$) | Objeto en reposo, con fuerza aplicada | $F_{f,s} \leq \mu_s F_N$ |
| **Cinética** ($F_{f,k}$) | Objeto en movimiento | $F_{f,k} = \mu_k F_N$ |

> La ecuación de fricción estática es una **desigualdad**: cuando el objeto está en reposo, la fricción se iguala a la fuerza aplicada (no necesariamente al valor máximo $\mu_s F_N$). Recién cuando la fuerza aplicada supera ese máximo, el objeto comienza a moverse.

Siempre: $\mu_k < \mu_s$ — es más difícil arrancar que mantener el movimiento.

---

## Coeficiente de fricción

El **coeficiente de fricción** ($\mu$) es un número adimensional que depende de los materiales en contacto:

$$\mu = \frac{F_f}{F_N}$$

---

## Gráfico fuerza aplicada vs. fricción

> 📷 *Imagen: gráfico de fuerza aplicada vs. fuerza de fricción mostrando fricción estática y cinética — Bigler pág. 339 (capturar)*

Mientras el objeto está en reposo, la fricción es igual a la fuerza aplicada (pendiente 1). Cuando la fuerza supera el máximo estático, el objeto arranca y la fricción cae al valor cinético (constante).

---

## Pasos para resolver problemas con fricción

1. Calculá el peso: $F_g = mg$
2. Calculá la fuerza normal: si la superficie es horizontal, $F_N = F_g$
3. Determiná si la fricción es estática (objeto quieto) o cinética (objeto en movimiento)
4. Calculá: $F_f = \mu F_N$ (con el $\mu$ correspondiente)
5. Determiná la fuerza neta: $F_{neta} = F_{aplicada} + F_f$ (cuidado con los signos)

---

## Ejemplo resuelto (Bigler)

Una persona empuja una caja de 40 kg a velocidad constante. El coeficiente de fricción cinética es $\mu_k = 0{,}35$. ¿Cuánta fuerza aplica?

Como la velocidad es constante, $F_{neta} = 0$, por lo que la fuerza aplicada es exactamente igual a la fricción:

$$F_N = F_g = mg = 40 \times 10 = 400\ \text{N}$$

$$F_f = \mu_k F_N = 0{,}35 \times 400 = 140\ \text{N}$$

La persona aplica $140\ \text{N}$.

---

## Para pensar

1. ¿Por qué los neumáticos de un auto que frena sin bloquearse recorren menos distancia que uno que patinan?
2. ¿Puede la fricción ser mayor que la fuerza aplicada? ¿Cuándo?
3. ¿Por qué la fricción cinética es siempre menor que la fricción estática máxima?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
