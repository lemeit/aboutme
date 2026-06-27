+++
title = "Trigonometría de ángulo recto"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Seno, coseno, tangente y su aplicación para descomponer vectores en componentes."
tags = ["cap02", "matemáticas", "trigonometría", "seno", "coseno", "tangente", "vectores", "componentes"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Usar el teorema de Pitágoras para encontrar un lado de un triángulo rectángulo.
- Aplicar seno, coseno y tangente para relacionar lados y ángulos.
- Descomponer un vector en sus componentes $x$ e $y$.
- Usar las funciones trigonométricas inversas para calcular ángulos.

---

## El triángulo rectángulo

En un triángulo rectángulo con ángulo $\theta$:

- **Hipotenusa** ($h$): el lado más largo, opuesto al ángulo recto.
- **Opuesto** ($o$): el lado opuesto al ángulo $\theta$.
- **Adyacente** ($a$): el lado que forma el ángulo $\theta$ con la hipotenusa (y no es la hipotenusa).

> 📷 *Imagen: triángulo rectángulo con lados h, o, a etiquetados — Bigler pág. 146 (capturar de PDF)*

---

## Las funciones trigonométricas

$$\sin\theta = \frac{o}{h} \qquad \cos\theta = \frac{a}{h} \qquad \tan\theta = \frac{o}{a} = \frac{\sin\theta}{\cos\theta}$$

**Mnemotecnia:** SOH — CAH — TOA

| Función | Relación | Regla |
|---------|----------|-------|
| **S**eno | **O**puesto / **H**ipotenusa | SOH |
| **C**oseno | **A**dyacente / **H**ipotenusa | CAH |
| **T**angente | **O**puesto / **A**dyacente | TOA |

### Teorema de Pitágoras

$$h^2 = o^2 + a^2 \implies h = \sqrt{o^2 + a^2}$$

---

## Descomposición de vectores

El uso más frecuente de la trigonometría en física es descomponer un vector en sus componentes horizontal ($x$) y vertical ($y$).

Si un vector tiene módulo $h$ e inclinación $\theta$ respecto a la horizontal:

$$\boxed{v_x = h \cos\theta} \qquad \boxed{v_y = h \sin\theta}$$

> **Memorizá estas dos relaciones** — las vas a usar en casi todos los problemas de fuerzas, tiro oblicuo y más.

> 📷 *Imagen: vector descompuesto en componentes con ángulo θ — Bigler pág. 148 (capturar de PDF)*

**Ejemplo — Cañón:**

Un proyectil sale con $v = 40\ \text{m/s}$ a $30°$ sobre la horizontal.

$$v_x = 40 \cos(30°) = 40 \times 0{,}866 = 34{,}6\ \text{m/s}$$
$$v_{0y} = 40 \sin(30°) = 40 \times 0{,}5 = 20{,}0\ \text{m/s}$$

---

## Funciones inversas — encontrar ángulos

Si conocés los lados y necesitás el ángulo, usás las funciones inversas:

$$\theta = \sin^{-1}\left(\frac{o}{h}\right) \qquad \theta = \cos^{-1}\left(\frac{a}{h}\right) \qquad \theta = \tan^{-1}\left(\frac{o}{a}\right)$$

En la calculadora: botón **sin⁻¹**, **cos⁻¹** o **tan⁻¹** (a veces llamado **arcsin**, **arccos**, **arctan**).

**Ejemplo:** un triángulo tiene lado opuesto 5 y hipotenusa 13. ¿Cuál es el ángulo?

$$\theta = \sin^{-1}\left(\frac{5}{13}\right) = \sin^{-1}(0{,}385) \approx 22{,}6°$$

---

## Ángulos especiales

Conviene memorizar estos valores:

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|----------|-------------|-------------|-------------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $0{,}5$ | $0{,}866$ | $0{,}577$ |
| $45°$ | $0{,}707$ | $0{,}707$ | $1$ |
| $60°$ | $0{,}866$ | $0{,}5$ | $1{,}732$ |
| $90°$ | $1$ | $0$ | indefinido |

---

## Calculadora — grados vs. radianes

Asegurate de que tu calculadora esté en **modo grados** (DEG) para todos los problemas de este curso que usen ángulos en grados. Si el resultado parece absurdo, verificá el modo.

---

## Para pensar

1. Un vector de 50 N forma un ángulo de 37° con la horizontal. ¿Cuáles son sus componentes horizontal y vertical?
2. Las componentes de un vector son $v_x = 6\ \text{m/s}$ y $v_y = 8\ \text{m/s}$. ¿Cuál es su módulo? ¿Cuál es el ángulo que forma con la horizontal?
3. ¿Por qué en el tiro oblicuo separamos el movimiento en componente horizontal y vertical?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
