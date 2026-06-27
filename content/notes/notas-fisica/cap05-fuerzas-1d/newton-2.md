+++
title = "Segunda Ley de Newton — Fuerza y aceleración"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "La fuerza neta sobre un objeto produce una aceleración proporcional a su masa."
tags = ["U3", "Dinámica", "Newton", "fuerza neta", "masa", "aceleración", "diagrama cuerpo libre"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Enunciar la Segunda Ley de Newton y aplicar $F = ma$.
- Construir diagramas de cuerpo libre para situaciones simples.
- Calcular fuerza, masa o aceleración dado los otros dos valores.

---

## Segunda Ley de Newton

> **"Una fuerza neta sobre un objeto produce una aceleración en la dirección de esa fuerza, proporcional a la fuerza e inversamente proporcional a la masa."**

$$\vec{F}_{neta} = m \cdot \vec{a}$$

O en sus formas equivalentes:

$$a = \frac{F_{neta}}{m} \qquad m = \frac{F_{neta}}{a}$$

| Símbolo | Cantidad | Unidad |
|---------|----------|--------|
| $F_{neta}$ | Fuerza neta | N = kg·m/s² |
| $m$ | Masa | kg |
| $a$ | Aceleración | m/s² |

> **Relaciones clave:**
> - A **mayor fuerza** → mayor aceleración (masa constante)
> - A **mayor masa** → menor aceleración (fuerza constante)

---

## Peso y masa

El **peso** es la fuerza gravitacional sobre un objeto:

$$F_g = m \cdot g \qquad g \approx 10\ \text{m/s}^2$$

> **Masa ≠ Peso.** La masa es una propiedad intrínseca del objeto (kg). El peso es una fuerza que depende de la gravedad local (N). En la Luna, tu masa es la misma pero tu peso es menor.

---

## Diagrama de cuerpo libre (DCL)

Un **diagrama de cuerpo libre** es un esquema donde se representa el objeto como un punto y se dibujan todas las fuerzas que actúan sobre él como vectores.

**Pasos para construirlo:**
1. Dibujá el objeto como un punto o caja simple.
2. Identificá todas las fuerzas que actúan sobre él.
3. Dibujá cada fuerza como una flecha desde el objeto, en la dirección y sentido correcto.
4. Etiquetá cada fuerza con su símbolo.

### Ejemplo — Caja sobre una mesa con fuerza aplicada

Una caja de 5 kg sobre una mesa recibe una fuerza horizontal de 20 N. La fricción es 8 N.

```
        F_ap = 20 N →
   ←    [CAJA]    →
   F_f = 8 N      F_N ↑
                  F_g ↓
```

**Dirección horizontal:**
$$F_{neta} = F_{ap} - F_f = 20 - 8 = 12\ \text{N}$$
$$a = \frac{F_{neta}}{m} = \frac{12}{5} = 2{,}4\ \text{m/s}^2$$

**Dirección vertical:** la caja no se mueve verticalmente → $F_N = F_g = mg = 5 \times 10 = 50\ \text{N}$

---

## Tipos de fuerzas comunes

### Peso ($F_g$)
$$F_g = mg$$
Siempre hacia abajo. Un objeto de 2 kg tiene un peso de $2 \times 10 = 20\ \text{N}$.

### Fuerza normal ($F_N$)
Fuerza perpendicular a la superficie de contacto, que impide que el objeto la atraviese. En una superficie horizontal: $F_N = F_g$.

### Fricción ($F_f$)
Fuerza que se opone al movimiento relativo entre superficies en contacto. Siempre contraria al movimiento o intento de movimiento.

### Tensión ($F_T$)
Fuerza transmitida por una cuerda, hilo o cable. Actúa a lo largo del hilo, alejándose del objeto.

---

## Ejemplos resueltos

### Ejemplo 1 — Fuerza neta

Un objeto de 4 kg acelera a 3 m/s². ¿Cuál es la fuerza neta?

$$F_{neta} = ma = 4 \times 3 = 12\ \text{N}$$

### Ejemplo 2 — Masa

Una fuerza de 30 N produce una aceleración de 6 m/s². ¿Cuál es la masa del objeto?

$$m = \frac{F}{a} = \frac{30}{6} = 5\ \text{kg}$$

### Ejemplo 3 — Sistema con fricción

Una persona empuja una caja de 10 kg con 40 N. La fricción es 15 N. ¿Cuál es la aceleración?

$$a = \frac{F_{ap} - F_f}{m} = \frac{40 - 15}{10} = \frac{25}{10} = 2{,}5\ \text{m/s}^2$$

---

## Para pensar

1. Si duplicás la fuerza sobre un objeto (misma masa), ¿qué pasa con la aceleración?
2. Dos objetos reciben la misma fuerza. Uno tiene el doble de masa que el otro. ¿Cómo se comparan sus aceleraciones?
3. Un objeto en caída libre: ¿qué fuerza actúa? ¿Cuál es la aceleración? ¿Coincide con $F = ma$?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
