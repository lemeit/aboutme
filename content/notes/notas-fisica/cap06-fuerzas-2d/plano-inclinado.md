+++
title = "Problemas con plano inclinado"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Fuerzas sobre un objeto en una rampa: componentes paralela y perpendicular, fricción y máquina de Atwood modificada."
tags = ["cap06", "fuerzas 2D", "plano inclinado", "rampa", "normal", "fricción", "Atwood", "trigonometría"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Calcular las componentes del peso paralela y perpendicular a un plano inclinado.
- Determinar la fuerza normal y la aceleración de un objeto sobre una rampa.
- Resolver problemas de máquina de Atwood modificada con rampa.

---

## El problema de la rampa

Cuando un objeto está sobre una rampa con ángulo $\theta$, la fuerza normal **no se opone directamente** a la gravedad — es perpendicular a la superficie de la rampa.

![Diagrama de cuerpo libre — caja sobre mesa](/images/diagramas/cap06_fuerzas-2d_plano-inclinado_pp373.png)
> 📷 *Imagen: diagrama de un bloque en una rampa con $F_g$, $F_N$ y $F_{neta}$ — Bigler pág. 373 (capturar)*

---

## Descomposición del peso en la rampa

Por geometría, el ángulo entre $\vec{F}_g$ y la normal a la rampa es el mismo que el ángulo de inclinación $\theta$. Esto da:

| Componente | Dirección | Expresión |
|-----------|-----------|-----------|
| Paralela a la rampa (↓ rampa) | Produce aceleración | $F_{\parallel} = F_g\sin\theta$ |
| Perpendicular a la rampa | Igual y opuesta a $F_N$ | $F_N = F_g\cos\theta$ |

**Verificación de casos extremos:**
- $\theta = 0°$ (horizontal): $F_{\parallel} = 0$, $F_N = F_g$ ✓ (objeto en reposo)
- $\theta = 90°$ (vertical): $F_{\parallel} = F_g$, $F_N = 0$ ✓ (caída libre)

---

## Aceleración sobre rampa sin fricción

$$F_{neta} = F_g\sin\theta = mg\sin\theta$$

$$a = \frac{F_{neta}}{m} = g\sin\theta$$

> La aceleración **no depende de la masa** — todos los objetos aceleran igual en la misma rampa sin fricción (igual que en la caída libre).

### Ejemplo resuelto (Bigler)

Un bloque de 2,5 kg en una rampa sin fricción de 35°:

$$F_{neta} = mg\sin\theta = 2{,}5 \times 10 \times \sin(35°) = 25 \times 0{,}574 = 14{,}3\ \text{N}$$

$$a = \frac{14{,}3}{2{,}5} = 5{,}7\ \text{m/s}^2$$

---

## Rampa con fricción

Si hay fricción, la fuerza de fricción actúa hacia arriba de la rampa (opuesta al movimiento):

$$F_{neta} = F_g\sin\theta - F_f = mg\sin\theta - \mu_k mg\cos\theta = mg(\sin\theta - \mu_k\cos\theta)$$

**Velocidad constante** (equilibrio dinámico): $F_{neta} = 0$

$$mg\sin\theta = \mu_k mg\cos\theta \implies \tan\theta = \mu_k$$

---

## Máquina de Atwood modificada con rampa

Una masa cuelga de una polea y la otra está sobre una rampa. La fuerza neta sobre el sistema es:

$$F_{neta} = F_{g,colgante} - F_{g,rampa}\sin\theta$$

### Ejemplo resuelto (Bigler)

Masa colgante: 24 kg. Masa en rampa: 8 kg, $\theta = 25°$ (sin fricción).

$$F_{neta} = (24)(10) - (8)(10)\sin(25°) = 240 - 80 \times 0{,}423 = 240 - 33{,}8 = 206{,}2\ \text{N}$$

$$a = \frac{206{,}2}{24 + 8} = \frac{206{,}2}{32} = 6{,}44\ \text{m/s}^2$$

---

## Para pensar

1. ¿Por qué la aceleración en una rampa sin fricción no depende de la masa?
2. Un esquiador baja a velocidad constante. ¿Qué información te da eso sobre el ángulo y el coeficiente de fricción?
3. ¿Qué pasa con la fuerza normal a medida que la rampa se hace más empinada?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
