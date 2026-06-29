+++
title = "Fuerza aplicada con ángulo"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Descomposición de fuerzas en componentes, suma vectorial y resolución de problemas estáticos en 2D."
tags = ["cap06", "fuerzas 2D", "componentes", "trigonometría", "vectores", "fuerza neta", "equilibrio"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Descomponer una fuerza en sus componentes horizontal y vertical.
- Sumar fuerzas en 2D usando componentes.
- Resolver problemas estáticos con tres o más fuerzas en distintas direcciones.

---

## Fuerzas perpendiculares son independientes

Una propiedad clave de los vectores: **un vector no tiene efecto sobre otro vector perpendicular a él**.

Esto significa que podemos separar un problema en 2D en dos problemas 1D independientes:

$$F_{neta,x} = m\,a_x \qquad F_{neta,y} = m\,a_y$$

---

## Suma de fuerzas en 2D

Si tenemos fuerzas en distintas direcciones, sumamos componentes por separado y combinamos con Pitágoras:

**Ejemplo (Bigler):** fuerzas horizontales $+18\ \text{N}$ y $-6\ \text{N}$; verticales $+9\ \text{N}$ y $-4\ \text{N}$:

$$F_x = 18 + (-6) = +12\ \text{N} \qquad F_y = 9 + (-4) = +5\ \text{N}$$

$$F_{neta} = \sqrt{F_x^2 + F_y^2} = \sqrt{144 + 25} = \sqrt{169} = 13\ \text{N}$$

Dirección:

$$\theta = \tan^{-1}\left(\frac{F_y}{F_x}\right) = \tan^{-1}\left(\frac{5}{12}\right) = 22{,}6°$$

---

## Descomposición de una fuerza con ángulo

Si una fuerza $F$ actúa con ángulo $\theta$ respecto a la horizontal:

$$F_x = F\cos\theta \qquad F_y = F\sin\theta$$

**Ejemplo (Bigler):** fuerza de 50 N a 35° sobre la horizontal:

$$F_x = 50\cos(35°) = 41{,}0\ \text{N} \qquad F_y = 50\sin(35°) = 28{,}7\ \text{N}$$

---

## Fuerza aplicada con ángulo sobre superficie plana

Si el objeto solo puede moverse horizontalmente (está sobre una superficie), solo la componente horizontal produce aceleración:

$$F_{\parallel} = F\cos\theta \implies F_{neta} = F\cos\theta - F_f$$

**Ejemplo (Bigler):** un operario empuja con 200 N a 60° de la horizontal:

$$F_{\parallel} = 200\cos(60°) = 200 \times 0{,}5 = 100\ \text{N}$$

---

## Problemas estáticos con fuerzas en ángulo

Cuando un objeto está en equilibrio ($\vec{F}_{neta} = 0$) con varias fuerzas en distintas direcciones:

**Estrategia:**
1. Descomponés todas las fuerzas en componentes $x$ e $y$.
2. Sumás las componentes por separado: $\sum F_x = 0$ y $\sum F_y = 0$.
3. Usás Pitágoras y trigonometría para encontrar magnitud y dirección de la fuerza desconocida.

### Ejemplo resuelto (Bigler)

Un objeto en equilibrio tiene una fuerza de 30 N hacia arriba y 50 N hacia la derecha. ¿Cuál es la tercera fuerza $F$ que lo mantiene en equilibrio?

La fuerza $F$ debe ser igual y opuesta a la resultante de las otras dos:

$$F = \sqrt{30^2 + 50^2} = \sqrt{3400} = 58{,}3\ \text{N}$$

$$\theta = \tan^{-1}\left(\frac{30}{50}\right) = 31{,}0°\ \text{(hacia abajo a la izquierda)}$$

---

## Fuerza normal con fuerza aplicada en ángulo

Cuando una fuerza $F_{ap}$ se aplica con ángulo $\theta$ hacia arriba, la componente vertical **reduce** la fuerza normal:

$$F_N = F_g - F_{ap}\sin\theta$$

Esto es importante porque al reducir $F_N$, también se reduce la fricción $F_f = \mu F_N$.

---

## Para pensar

1. ¿Por qué conviene empujar una caja en ángulo hacia arriba en vez de horizontalmente? ¿Y cuál es la desventaja?
2. Si una fuerza de 100 N actúa a 90° de la horizontal (verticalmente), ¿cuánto contribuye al movimiento horizontal? ¿Por qué?
3. ¿Puede el equilibrio de un objeto con tres fuerzas ocurrir si todas apuntan en la misma dirección?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
