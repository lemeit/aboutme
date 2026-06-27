+++
title = "Caída Libre"
date = "2026-06-26"
draft = false
math = true
weight = 7
description = "MRUV con a = g. Caída desde el reposo, lanzamiento vertical y punto más alto."
tags = ["cap03", "cinemática", "caída libre", "gravedad", "lanzamiento vertical", "MRUV"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Reconocer la caída libre como MRUV con $a = g$.
- Aplicar la tabla de variables y las ecuaciones de movimiento a problemas de caída libre.
- Analizar los tres casos típicos: caída desde el reposo, lanzamiento hacia arriba, y sube y vuelve.

---

## Definición

La **caída libre** es el movimiento de un objeto que acelera libremente hacia el centro de la Tierra por efecto de la gravedad, cuando los efectos de otras fuerzas (fricción del aire) son despreciables.

$$g \approx 9{,}806\ \text{m/s}^2 \approx 10\ \text{m/s}^2 \quad \text{(valor de trabajo)}$$

Cuando un objeto está en caída libre, reemplazamos $a$ por $g$ en las ecuaciones.

> **Importante:** un objeto sobre una rampa **no está en caída libre**, aunque la gravedad sea la causa del movimiento — la rampa restringe su trayectoria.

---

## La gravedad es un vector

El signo de $g$ depende de la dirección positiva elegida:

| Convención | $g$ | Cuándo usarla |
|-----------|-----|---------------|
| Positivo hacia abajo | $+10\ \text{m/s}^2$ | Caída desde el reposo sin lanzamiento hacia arriba |
| Positivo hacia arriba | $-10\ \text{m/s}^2$ | Lanzamientos verticales hacia arriba |

---

## Estrategia para resolver problemas de caída libre

1. Elegí la dirección positiva.
2. Completá la tabla de variables con dirección y valor.
3. Identificá la ecuación que tiene la incógnita y todas las demás variables conocidas.
4. Despejá y sustituí.

### Tabla tipo para caída libre

| Variable | Dir. | Valor |
|----------|------|-------|
| $\Delta x$ | | |
| $v_0$ | | |
| $v$ | | |
| $a = g$ | | $\pm 10\ \text{m/s}^2$ |
| $t$ | N/A | |

---

## Tres situaciones típicas

### 1. Caída desde el reposo

$v_0 = 0$, positivo hacia abajo.

**Ejemplo:** una piedra se deja caer desde 5 m. ¿Cuánto tarda en llegar al suelo?

| Variable | Dir. | Valor |
|----------|------|-------|
| $\Delta x$ | ↓ | $+5\ \text{m}$ |
| $v_0$ | — | $0$ |
| $a = g$ | ↓ | $+10\ \text{m/s}^2$ |
| $t$ | — | $?$ |

$$\Delta x = \tfrac{1}{2}g t^2 \implies t = \sqrt{\frac{2\Delta x}{g}} = \sqrt{\frac{2 \times 5}{10}} = \sqrt{1} = 1\ \text{s}$$

---

### 2. Lanzamiento vertical hacia arriba

$v_0 > 0$ (hacia arriba), $a = -g$ (hacia abajo). Positivo hacia arriba.

**Condición clave en el punto más alto:** $v = 0$ (se detiene un instante).

> ¿La aceleración en el punto más alto es cero? **No.** La gravedad sigue actuando: $a = -g = -10\ \text{m/s}^2$. La velocidad es cero por un instante, pero la aceleración nunca lo es durante el vuelo.

**Altura máxima:**

$$v^2 - v_0^2 = 2a\Delta x \quad \text{con } v = 0:$$
$$\Delta x_{max} = \frac{-v_0^2}{2a} = \frac{v_0^2}{2g}$$

**Ejemplo (Bigler):** se lanza una manzana hacia arriba con $v_0 = 8\ \text{m/s}$. ¿A qué altura llega?

$$\Delta x_{max} = \frac{8^2}{2 \times 10} = \frac{64}{20} = 3{,}2\ \text{m}$$

---

### 3. Sube y vuelve al mismo punto

Si el objeto regresa a la misma altura de lanzamiento:

| Propiedad | Valor |
|-----------|-------|
| Desplazamiento total | $\Delta x = 0$ |
| Tiempo de subida | = tiempo de bajada |
| Velocidad final | $\|v\| = \|v_0\|$, dirección opuesta |

**Ejemplo (Bigler):** la manzana es lanzada con $v_0 = +8\ \text{m/s}$ y vuelve al mismo punto. ¿Cuánto tiempo estuvo en el aire?

$$0 = v_0 t + \tfrac{1}{2}at^2 = t\left(v_0 + \tfrac{1}{2}at\right)$$

$$t = 0 \quad \text{(instante de lanzamiento)} \quad \text{o} \quad t = \frac{-2v_0}{a} = \frac{-2 \times 8}{-10} = 1{,}6\ \text{s}$$

---

## Más ejemplos resueltos

### Pelota disparada hacia arriba con $v_0 = 30\ \text{m/s}$ (Bigler)

**a) Altura máxima:**

$$\Delta x_{max} = \frac{v_0^2}{2g} = \frac{900}{20} = 45\ \text{m}$$

**b) Tiempo total de vuelo:**

$$t_{total} = \frac{2v_0}{g} = \frac{2 \times 30}{10} = 6{,}0\ \text{s}$$

### Torre de 125 m — ¿cuántos segundos cae? (Bigler)

$$\Delta x = \tfrac{1}{2}g t^2 \implies t = \sqrt{\frac{2 \times 125}{10}} = \sqrt{25} = 5{,}0\ \text{s}$$

---

## Para pensar

1. Se dejan caer simultáneamente una piedra de 1 kg y otra de 10 kg desde la misma altura. ¿Cuál llega primero? Justificá.
2. Un objeto tiene $v = 0$ en un instante. ¿Eso significa que está en reposo? ¿Puede tener aceleración?
3. ¿Por qué la caída libre es un MRUV? ¿Qué condición se asume?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
