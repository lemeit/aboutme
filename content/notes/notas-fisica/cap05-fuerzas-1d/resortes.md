+++
title = "Resortes y Ley de Hooke"
date = "2026-06-26"
draft = false
math = true
weight = 9
description = "Constante de resorte, Ley de Hooke, resortes en serie y paralelo, límite elástico."
tags = ["cap05", "fuerzas", "resorte", "Ley de Hooke", "constante de resorte", "elasticidad"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Aplicar la Ley de Hooke para calcular la fuerza de un resorte.
- Relacionar la constante de resorte con la rigidez del resorte.
- Calcular la constante equivalente de resortes en serie y paralelo.

---

## Definiciones

**Resorte:** dispositivo hecho de material elástico (generalmente metal) que puede volver a su forma natural después de ser extendido o comprimido.

**Posición de equilibrio:** posición del resorte cuando no hay fuerza sobre él.

**Constante de resorte** ($k$): fuerza necesaria para extender o comprimir el resorte una distancia unitaria. Unidad: N/m.

> A mayor $k$, más rígido el resorte. Un Slinky tiene $k \approx 0{,}5\ \text{N/m}$; un resorte de puerta de garaje puede tener $k \approx 700\ \text{N/m}$.

---

## Ley de Hooke

> **Robert Hooke, siglo XVII:** la fuerza de un resorte es proporcional a su deformación.

$$\vec{F}_s = -k\,\vec{x}$$

donde:
- $k$ = constante del resorte (N/m)
- $x$ = desplazamiento desde la posición de equilibrio (m)
- El signo negativo indica que la fuerza siempre apunta **hacia el equilibrio**

---

## Ejemplo resuelto

Un peso de 7 N cuelga de un resorte y lo estira 0,25 m. ¿Cuál es la constante del resorte?

$$k = \frac{F_s}{x} = \frac{7}{0{,}25} = 28\ \text{N/m}$$

---

## Resortes en paralelo y en serie

### En paralelo

Dos resortes que jalan del mismo objeto en la misma dirección. Las fuerzas se suman:

$$k_{eq} = k_1 + k_2 + \ldots$$

### En serie

Dos resortes conectados en secuencia. Es como un resorte más largo — se necesita menos fuerza para el mismo desplazamiento:

$$\frac{1}{k_{eq}} = \frac{1}{k_1} + \frac{1}{k_2} + \ldots$$

---

## Límite elástico

Si se estira un resorte más allá de su **límite elástico** (punto de fluencia), se deforma permanentemente y no vuelve a su forma original. Si se estira aún más, se rompe.

El **Módulo de Young** ($Y$) describe la rigidez del material en la región elástica lineal:

$$k = Y \cdot \frac{A}{L}$$

donde $A$ es el área de la sección transversal y $L$ es la longitud del resorte.

---

## Para pensar

1. Si colgás el doble de peso de un resorte, ¿cuánto más se estira? ¿Por qué?
2. ¿Por qué un resorte de mayor constante es más "duro" de estirar?
3. ¿Qué significa que la fuerza del resorte sea negativa en la ecuación de Hooke?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
