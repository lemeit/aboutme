+++
title = "Diagramas de cuerpo libre"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Cómo dibujar un DCL correcto: reglas, pasos y ejemplos."
tags = ["cap05", "fuerzas", "diagrama de cuerpo libre", "DCL", "fuerzas", "vectores", "equilibrio"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Dibujar un diagrama de cuerpo libre (DCL) correcto para cualquier situación.
- Identificar todas las fuerzas que actúan sobre un objeto.
- Indicar la dirección positiva cuando hay fuerzas opuestas.

---

## ¿Qué es un diagrama de cuerpo libre?

Un **diagrama de cuerpo libre (DCL)** es un esquema que representa todas las fuerzas que actúan sobre un objeto.

- El objeto se representa como un **punto** (o caja simple).
- Cada fuerza es una **flecha** que parte del punto, en la dirección exacta de la fuerza.
- El largo relativo de las flechas indica la magnitud relativa de las fuerzas.

> 📷 *Imagen: DCL de una caja en una rampa con $F_g$, $F_N$ y $F_f$ — Bigler pág. 305 (capturar)*

---

## Pasos para dibujar un DCL

**1. ¿Actúa la gravedad?** (En casi todos los problemas terrestres, sí.)
- Dibujá $\vec{F}_g$ apuntando hacia abajo.

**2. ¿Algo sostiene al objeto?**
- Superficie plana → fuerza normal $\vec{F}_N$, perpendicular a la superficie.
- Cuerda, hilo → tensión $\vec{F}_T$, a lo largo del hilo.

**3. ¿Hay una fuerza que empuja o jala?**
- Cuerda → tensión $\vec{F}_T$, a lo largo del hilo.
- Empuje directo → thrust $\vec{F}_t$, en la dirección del empuje.
- Solo incluí fuerzas que actúan **ahora** (no las del pasado).

**4. ¿Hay fricción?**
- Si dos superficies están en contacto → casi siempre hay $\vec{F}_f$, paralela a la superficie y opuesta al movimiento.
- El hielo se considera sin fricción salvo que se indique lo contrario.
- La resistencia del aire se incluye en $\vec{F}_f$ salvo que se pida por separado.

**5. ¿Se necesita indicar la dirección positiva?**
- Si hay fuerzas opuestas y vas a calcular → indicá cuál dirección es positiva con una flecha y un "+" en el diagrama.

---

## Errores comunes

| Error | Correcto |
|-------|---------|
| Las flechas no parten del punto central | Todas las flechas parten del punto que representa el objeto |
| Flechas desviadas de su dirección real | Cada flecha debe apuntar en la dirección exacta de la fuerza |
| Incluir la velocidad como si fuera una fuerza | La velocidad **no es** una fuerza y no aparece en el DCL |
| Omitir la fuerza normal | Si hay superficie → hay normal |

> 📷 *Imagen: DCL de una caja acelerada por cuerda con $F_g$, $F_N$, $F_T$, $F_f$ — Bigler pág. 306 (capturar)*

---

## Ejemplos

### Caja en equilibrio sobre una mesa

Fuerzas: $\vec{F}_g$ (↓) y $\vec{F}_N$ (↑). Como no hay aceleración: $F_N = F_g$.

### Caja acelerada por una cuerda

Fuerzas: $\vec{F}_g$ (↓), $\vec{F}_N$ (↑), $\vec{F}_T$ (→), $\vec{F}_f$ (←).

Como la caja acelera hacia la derecha: $F_T > F_f$, entonces $F_{neta} = F_T - F_f > 0$.

### Piedra en el fondo de una pileta

Fuerzas: $\vec{F}_g$ (↓), $\vec{F}_N$ (↑), $\vec{F}_b$ (↑).

Como no hay aceleración: $F_N + F_b = F_g$.

> 📷 *Imagen: DCL correcto e incorrectos de una piedra en el fondo de una pileta — Bigler pág. 307 (capturar)*

---

## Ejercicios para practicar (Bigler)

Dibujá el DCL para cada situación:

1. Un pájaro posado sin moverse sobre una rama.
2. Un jugador de hockey deslizándose a velocidad constante (sin fricción).
3. Un paracaidista en caída libre (justo después de saltar).
4. Un paracaidista en velocidad terminal.
5. Un avión en vuelo horizontal a velocidad constante.
6. Un esquiador descendiendo una pendiente a velocidad constante.
7. Un esquiador acelerando cuesta abajo.

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
