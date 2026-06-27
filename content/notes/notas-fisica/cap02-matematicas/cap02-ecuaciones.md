+++
title = "Resolución simbólica de ecuaciones"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Cómo despejar variables en ecuaciones físicas antes de sustituir números."
tags = ["cap02", "matemáticas", "álgebra", "despeje", "ecuaciones", "resolución simbólica"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Reorganizar ecuaciones algebraicas para despejar cualquier variable.
- Resolver problemas simbólicamente antes de sustituir valores numéricos.
- Combinar dos ecuaciones para eliminar una variable intermedia.

---

## ¿Por qué resolver simbólicamente?

En física, frecuentemente nos interesa más la *relación* entre las magnitudes que el número concreto de un caso particular.

**Ejemplo:** una persona de 65 kg acelera en bicicleta desde el reposo hasta $10\ \text{m/s}$ en 12 s. ¿Qué fuerza se aplicó?

**Solución numérica directa:**

$$a = \frac{v - v_0}{t} = \frac{10 - 0}{12} = 0{,}83\ \text{m/s}^2 \qquad F = ma = 65 \times 0{,}83 = 54{,}2\ \text{N}$$

Correcto, pero responde *solo este caso*.

**Solución simbólica:**

Combinamos $v - v_0 = at$ (con $v_0 = 0$) y $F = ma$:

$$a = \frac{v}{t} \implies F = m \cdot \frac{v}{t} = \frac{mv}{t}$$

Esta expresión vale para *cualquier* problema de este tipo. Además permite ver directamente que:
- Si aumenta la masa → aumenta la fuerza.
- Si aumenta el tiempo → disminuye la fuerza.

> Resolver simbólicamente da una relación universal; resolver numéricamente da un número que responde una sola pregunta.

---

## Técnica: deshacer el orden de operaciones

Despejar una variable es "deshacer PEMDAS" aplicando operaciones inversas:

### 1. Suma y resta → operar el inverso

$$a + c = b \implies a = b - c$$

### 2. Multiplicación y división → operar el inverso

$$\frac{n}{r} = s \implies n = s \cdot r \qquad \qquad xy = z \implies x = \frac{z}{y}$$

> Cuando la variable que querés despejar está en el denominador, multiplicá ambos lados por ese denominador para "limpiar la fracción" antes de continuar.

### 3. Potencias → raíces (y viceversa)

$$t^2 = 4ab \implies t = \sqrt{4ab} = 2\sqrt{ab}$$

$$\sqrt{x} = k \implies x = k^2$$

### 4. Paréntesis → eliminalos cuando no queda nada afuera

Cuando solo quedan paréntesis y nada fuera, los eliminás y repetís los pasos anteriores.

---

## Ejemplo completo — combinando dos ecuaciones

**Problema:** tenés $F = ma$ pero no conocés $a$. Solo conocés $m$, $v_0 = 0$, $v$ y $t$.

**Paso 1:** encontrá una ecuación que contenga $a$:

$$v - v_0 = at \quad \text{con } v_0 = 0 \implies v = at \implies a = \frac{v}{t}$$

**Paso 2:** sustituí en la primera ecuación:

$$F = m \cdot a = m \cdot \frac{v}{t} = \frac{mv}{t}$$

Ahora $F$ está expresada solo en términos de las cantidades conocidas.

---

## Ejemplos de despeje

### Despejar $t$ de $x = x_0 + v_0 t + \tfrac{1}{2}at^2$

Si $x_0 = 0$ y $v_0 = 0$:

$$x = \tfrac{1}{2}at^2 \implies t^2 = \frac{2x}{a} \implies t = \sqrt{\frac{2x}{a}}$$

### Despejar $v_0$ de $v^2 = v_0^2 + 2a \Delta x$

$$v_0^2 = v^2 - 2a \Delta x \implies v_0 = \sqrt{v^2 - 2a \Delta x}$$

### Despejar $a$ de $v = v_0 + at$

$$at = v - v_0 \implies a = \frac{v - v_0}{t}$$

---

## Para pensar

1. ¿Por qué es mejor despejar la variable primero y sustituir números al final, en lugar de sustituir números en cada paso?
2. De la ecuación $F = \frac{mv}{t}$, ¿qué pasa con la fuerza si duplicás la velocidad? ¿Y si duplicás el tiempo?
3. Despejá $m$ de $E_k = \tfrac{1}{2}mv^2$.

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
