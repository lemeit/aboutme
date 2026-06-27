+++
title = "Sistemas de referencia. Posición, distancia y desplazamiento"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Sistema de coordenadas, posición, distancia escalar y desplazamiento vectorial."
tags = ["cap03", "cinemática", "posición", "desplazamiento", "distancia", "sistemas de referencia", "vectores"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Definir sistema de referencia y origen de coordenadas.
- Distinguir entre posición, distancia y desplazamiento.
- Usar signos positivos y negativos para indicar dirección en 1D.

---

## Sistema de referencia y coordenadas

Un **sistema de coordenadas** es un marco para describir la posición de un objeto, basado en su distancia (en una o más direcciones) desde un punto definido llamado **origen**.

La **dirección** indica hacia dónde apunta o se mueve un objeto dentro del sistema de coordenadas. En una dimensión, la dirección puede ser positiva o negativa.

> La elección del sistema de referencia es arbitraria — podés elegir cualquier punto como origen y cualquier dirección como positiva. Lo importante es ser consistente dentro del mismo problema.

---

## Posición

La **posición** ($x$) es la ubicación de un objeto respecto al origen de su sistema de coordenadas. Es un vector — puede ser positiva, negativa o cero.

$$x = \text{distancia desde el origen, con signo}$$

---

## Distancia vs. desplazamiento

| Magnitud | Tipo | Definición | Signo |
|----------|------|-----------|-------|
| **Distancia** ($d$) | Escalar | Longitud total del camino recorrido | Siempre ≥ 0 |
| **Desplazamiento** ($\Delta x$) | Vector | Diferencia entre posición final e inicial | Puede ser +, − o 0 |

$$\Delta x = x_f - x_i$$

**Ejemplo:** un objeto viaja 12 m al este y luego 5 m al norte.

- Distancia total: $12 + 5 = 17\ \text{m}$
- Desplazamiento: $\sqrt{12^2 + 5^2} = 13\ \text{m}$ a $22{,}6°$ del este

> 📷 *Imagen: diagrama de distancia vs. desplazamiento en 2D — Bigler pág. 183 (capturar)*

**En una dimensión:** si un objeto va 7 m en la dirección negativa desde el origen:

$$\Delta x = -7\ \text{m} \quad \text{(7 m en dirección negativa)}$$

---

## Cuando distancia y desplazamiento difieren

Si el objeto **no cambia de dirección**, la distancia y el módulo del desplazamiento son iguales.

Si el objeto **cambia de dirección**, la distancia total es mayor que el módulo del desplazamiento.

**Ejemplo:** alguien camina 3 m al norte y vuelve 3 m al sur.
- Distancia: $3 + 3 = 6\ \text{m}$
- Desplazamiento: $0\ \text{m}$ (volvió al punto de partida)

> **Nota:** en los problemas de física, a veces se usa la palabra "distancia" cuando en realidad se quiere decir "desplazamiento". Interpretá según el contexto y las unidades.

---

## Variables de la cinemática lineal

| Variable | Magnitud | Unidad SI | Tipo |
|----------|----------|-----------|------|
| $x$, $x_0$ | posición final / inicial | m | vector |
| $\Delta x$, $d$ | desplazamiento | m | vector |
| $v$, $v_0$ | velocidad final / inicial | m/s | vector |
| $v_{med}$ | velocidad media | m/s | vector |
| $a$ | aceleración | m/s² | vector |
| $g$ | aceleración de la gravedad | m/s² | vector |
| $t$ | tiempo | s | escalar |

---

## Para pensar

1. Un corredor completa una vuelta de 400 m a una pista circular. ¿Cuál es su distancia recorrida? ¿Cuál es su desplazamiento?
2. ¿Puede el desplazamiento de un objeto ser mayor que la distancia recorrida? ¿Por qué?
3. Si la posición de un objeto es $x = -5\ \text{m}$, ¿qué significa el signo negativo?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
