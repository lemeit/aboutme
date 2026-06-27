+++
title = "Resolución sistemática de problemas — Método GUESS"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Cómo identificar variables, elegir ecuaciones y resolver problemas de física paso a paso."
tags = ["cap02", "matemáticas", "resolución de problemas", "GUESS", "variables", "ecuaciones", "método"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Identificar las magnitudes dadas en un problema a partir de sus unidades.
- Asignar las variables correctas a cada magnitud.
- Elegir la ecuación adecuada para un problema.
- Resolver problemas usando el método GUESS.

---

## La matemática como lenguaje

Las matemáticas son un lenguaje con sustantivos (números), pronombres (variables), verbos (operaciones) y oraciones (ecuaciones). Resolver un problema de física es *traducir* del español a las matemáticas.

Algunas traducciones frecuentes:

| Palabra | Operación |
|---------|-----------|
| "y", "más que" | $+$ |
| "menos que" | $-$ |
| "de", "veces" | $\times$ |
| "por", "cada" | $\div$ |
| "es", "son" | $=$ |
| "cambio en $x$" | $\Delta x$ |
| "por ciento" | $\div 100$ |

---

## Identificar magnitudes por sus unidades

En física, cada magnitud tiene una unidad característica. Cuando ves una unidad en un problema, podés identificar qué magnitud representa y qué variable le corresponde:

| Magnitud | Unidad SI | Variable |
|----------|-----------|----------|
| masa | kg | $m$ |
| longitud, distancia | m | $d$, $L$ |
| tiempo | s | $t$ |
| velocidad | m/s | $v$ |
| aceleración | m/s² | $a$ |
| fuerza | N | $F$ |
| trabajo / energía | J | $W$, $E$ |
| potencia | W | $P$ |
| presión | Pa | $P$ |
| temperatura | K | $T$ |
| cantidad de sustancia | mol | $n$ |

> **Cuidado con mayúsculas y minúsculas:** en física, la misma letra en mayúscula y minúscula puede representar magnitudes completamente distintas. Por ejemplo, $W$ (trabajo) y $w$ (peso) son cosas distintas.

---

## Subíndices

Cuando en un problema hay varias instancias de la misma magnitud, se usan **subíndices** para distinguirlas:

- $v_0$ o $v_i$ → velocidad inicial (en el instante $t = 0$)
- $v$ o $v_f$ → velocidad final
- $F_g$ → fuerza gravitacional (peso)
- $F_N$ → fuerza normal
- $F_f$ → fricción
- $F_T$ → tensión

> El subíndice es parte de la variable — $F_g$ es una variable distinta de $F$.

**Ejemplo:** "Un auto comienza con una velocidad de $5\ \text{m/s}$ y tarda $4\ \text{s}$ en llegar a $13\ \text{m/s}$."

$$v_0 = 5\ \text{m/s} \qquad t = 4\ \text{s} \qquad v = 13\ \text{m/s}$$

---

## El método GUESS

**G — Given (Datos):** identificá todas las magnitudes dadas con sus variables y unidades.

**U — Unknown (Incógnita):** identificá qué te piden calcular.

**E — Equation (Ecuación):** elegí la ecuación que contenga la incógnita y todas las variables conocidas.

**S — Solve (Despejar):** despejá la incógnita algebraicamente.

**S — Substitute (Sustituir):** reemplazá los valores numéricos y calculá.

---

## Cómo elegir la ecuación

Tenés los dados y la incógnita identificados. Revisá cada ecuación disponible:

- ¿Contiene la incógnita? Si no → descartala.
- ¿Contiene solo la incógnita y variables conocidas? Si sí → esa es la ecuación.
- ¿Contiene la incógnita pero también otra variable desconocida? → necesitás una ecuación adicional.

**Ejemplo:** velocidades $v_0$ y $v$, tiempo $t$, buscás aceleración $a$.

| Ecuación | ¿Tiene $a$? | ¿Tiene variables desconocidas? | ¿Usable? |
|----------|------------|-------------------------------|----------|
| $v - v_0 = at$ | ✅ | No | ✅ |
| $d = v_0 t + \tfrac{1}{2}at^2$ | ✅ | Sí ($d$) | ❌ |
| $v^2 - v_0^2 = 2ad$ | ✅ | Sí ($d$) | ❌ |

---

## Ejemplo resuelto completo

**Problema:** Una fuerza neta de 30 N actúa sobre un objeto de 1,5 kg. ¿Cuál es la aceleración?

**G — Datos:**
$$F = 30\ \text{N} \qquad m = 1{,}5\ \text{kg}$$

**U — Incógnita:**
$$a = ?\ \text{m/s}^2$$

**E — Ecuación:**
$$F = ma \quad \text{(Segunda Ley de Newton)}$$

**S — Despejar:**
$$a = \frac{F}{m}$$

**S — Sustituir:**
$$a = \frac{30}{1{,}5} = 20\ \text{m/s}^2$$

---

## Para pensar

1. Un problema dice: "Un objeto cae desde el reposo durante 3 s." ¿Cuáles son las variables dadas? ¿Cuál es el valor implícito de $v_0$?
2. ¿Por qué es mejor despejar algebraicamente *antes* de sustituir números?
3. Si una ecuación tiene la incógnita pero también otra variable desconocida, ¿qué hacés?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
