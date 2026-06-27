+++
title = "Arrastre (Drag)"
date = "2026-06-26"
draft = false
math = true
weight = 10
description = "Fuerza de arrastre, ecuación de drag, coeficiente de arrastre y velocidad terminal."
tags = ["cap05", "fuerzas", "arrastre", "drag", "resistencia del aire", "velocidad terminal", "fluidos"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Explicar el origen de la fuerza de arrastre.
- Identificar los factores que afectan el arrastre.
- Calcular la fuerza de arrastre en situaciones simples.
- Definir y calcular la velocidad terminal.

---

## ¿Qué es el arrastre?

El **arrastre** ($\vec{F}_D$) es la fuerza que ejercen las partículas de un fluido (líquido o gas) resistiendo el movimiento de un objeto a través de él.

Es similar a la fricción: es una fuerza de **contacto** y de **reacción**, opuesta al movimiento relativo del objeto respecto al fluido.

> Un objeto en reposo no produce arrastre — el arrastre es causado por el movimiento relativo.

---

## Ecuación de arrastre

$$F_D = \frac{1}{2}\,\rho\,v^2\,C_D\,A$$

donde:
- $\rho$ = densidad del fluido (kg/m³)
- $v$ = velocidad relativa del objeto respecto al fluido (m/s)
- $C_D$ = coeficiente de arrastre (adimensional, depende de la forma)
- $A$ = área de sección transversal del objeto en la dirección del movimiento (m²)

---

## Coeficiente de arrastre ($C_D$)

El $C_D$ depende de la forma del objeto — cumple la misma función que el coeficiente de fricción $\mu$ en problemas de superficies sólidas.

| Objeto | $C_D$ |
|--------|-------|
| Esfera | 0,47 |
| Cilindro (eje perpendicular) | 1,0 |
| Cubo | 1,05 |
| Paracaídas | 1,75 |
| Ciclista | 0,90 |
| Auto moderno | 0,28–0,36 |
| Paracaidista vertical | 0,70 |
| Cuerpo aerodinámico | 0,04 |

> La forma de las gotas de lluvia es el resultado del arrastre que las moldea hasta tener la forma de menor resistencia.

---

## Velocidad terminal

Cuando un objeto cae libremente, la fuerza de arrastre aumenta con la velocidad. En algún momento:

$$F_D = F_g \implies F_{neta} = 0 \implies a = 0$$

El objeto alcanza la **velocidad terminal** — cae a velocidad constante sin acelerar más.

$$v_{terminal} = \sqrt{\frac{2\,m\,g}{\rho\,C_D\,A}}$$

---

## Flujo laminar y turbulento

- **Flujo laminar:** las partículas del fluido se mueven en líneas paralelas ordenadas (velocidades bajas, $Re < 2300$). El arrastre es bajo.
- **Flujo turbulento:** las partículas se mezclan desordenadamente (velocidades altas). El arrastre aumenta significativamente.

El **número de Reynolds** ($Re$) caracteriza el tipo de flujo:

$$Re = \frac{\rho\,v\,L}{\mu_{viscosidad}}$$

---

## Para pensar

1. ¿Por qué un paracaidista abre el paracaídas para reducir su velocidad, si eso aumenta el área de sección transversal?
2. ¿Por qué los autos deportivos tienen formas tan redondeadas y bajas?
3. Un papel arrugado y una pelota de golf tienen masas similares. ¿Cuál cae más rápido? ¿Por qué?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
