+++
title = "Introducción a los vectores"
date = "2026-06-22"
draft = false
description = "Qué es un vector, diferencia con magnitudes escalares, representación gráfica, suma vectorial y descomposición en componentes."
tags = ["U1", "vectores", "escalares", "trigonometría"]
math = true
weight = 1
+++

## Objetivos de aprendizaje

Al finalizar esta unidad, vas a poder:

- Distinguir entre magnitudes escalares y vectoriales.
- Representar un vector gráficamente con su módulo y dirección.
- Sumar vectores en una y dos dimensiones.
- Descomponer un vector en sus componentes x e y usando trigonometría básica.
- Aplicar el Teorema de Pitágoras para calcular el módulo de un vector resultante.

> 💡 Los vectores son una herramienta matemática, no un tema de Física en sí mismo. Los vemos acá porque los vamos a usar constantemente en cinemática (velocidad, desplazamiento, aceleración) y dinámica (fuerza).

---

## Escalares y vectores

En Física, las magnitudes se dividen en dos tipos:

**Magnitud escalar:** tiene solo un valor numérico con su unidad. No tiene dirección.

> Ejemplos: masa (5 kg), temperatura (20 °C), tiempo (3 s), energía (100 J), distancia recorrida (50 m).

**Magnitud vectorial:** tiene valor numérico (módulo) **y** dirección.

> Ejemplos: velocidad (60 km/h hacia el norte), fuerza (10 N hacia abajo), desplazamiento (3 m hacia la derecha), aceleración (9,8 m/s² hacia el centro de la Tierra).

### ¿Por qué importa la diferencia?

Porque las operaciones matemáticas son distintas. Si dos personas empujan un objeto con 10 N cada una, el resultado depende de *hacia dónde* empuja cada una:

- Si empujan en la misma dirección: fuerza resultante = 20 N
- Si empujan en direcciones opuestas: fuerza resultante = 0 N
- Si empujan en ángulo recto: fuerza resultante = 14,1 N (¡no es 20 N!)

Con escalares, 10 + 10 = 20, siempre. Con vectores, depende de la geometría.

---

## Representación gráfica de vectores

Un vector se representa como una **flecha**:

- La **longitud** de la flecha indica el módulo (cuánto).
- La **dirección y sentido** de la flecha indica hacia dónde apunta el vector.

$$\vec{v} \quad \text{(vector velocidad)} \qquad |\vec{v}| = v \quad \text{(módulo, un escalar)}$$

### Notación

En la escritura a mano, los vectores se escriben con una flecha encima:

$$\vec{F}, \quad \vec{v}, \quad \vec{a}, \quad \vec{d}$$

El módulo (valor sin dirección) se escribe sin flecha o con barras:

$$F = |\vec{F}| \qquad v = |\vec{v}|$$

### Sistemas de referencia y convención de signos

Para trabajar con vectores en una dimensión, elegimos un **sentido positivo**. Los vectores en ese sentido son positivos; los opuestos son negativos.

> **Ejemplo:** Si defino "hacia la derecha" como positivo:
> - $\vec{v} = +10 \text{ m/s}$ → el objeto se mueve hacia la derecha
> - $\vec{v} = -10 \text{ m/s}$ → el objeto se mueve hacia la izquierda

La elección del sentido positivo es **arbitraria** — lo que importa es ser consistente en todo el problema.

> ⚠️ Una velocidad de $-10$ m/s **no es menor** que $+5$ m/s en el sentido físico: el primer objeto se mueve **más rápido** (módulo 10 vs. módulo 5), pero en sentido contrario.

---

## Suma de vectores

### En una dimensión

Cuando los vectores están sobre la misma recta (mismo eje), se suman algebraicamente como números con signo:

$$\vec{F}_{total} = \vec{F}_1 + \vec{F}_2$$

**Ejemplo:** Una persona empuja una caja con 8 N hacia la derecha (+8 N). La fricción ejerce 3 N hacia la izquierda (-3 N).

$$\vec{F}_{total} = +8 \text{ N} + (-3 \text{ N}) = +5 \text{ N} \quad \text{(hacia la derecha)}$$

### En dos dimensiones — vectores perpendiculares

Cuando los vectores forman un ángulo de 90°, usamos el **Teorema de Pitágoras** para calcular el módulo del vector resultante:

$$|\vec{R}| = \sqrt{|\vec{A}|^2 + |\vec{B}|^2}$$

**Ejemplo:** Un barco navega 6 km hacia el este y luego 8 km hacia el norte. ¿Cuánto se desplazó del punto de partida?

$$|\vec{R}| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10 \text{ km}$$

> 💡 La suma de vectores no es suma aritmética: $6 + 8 = 14$ km sería la distancia recorrida, pero el desplazamiento (vector) es solo 10 km.

Para encontrar la **dirección** del vector resultante, usamos trigonometría:

$$\tan \theta = \frac{|\vec{B}|}{|\vec{A}|} = \frac{8}{6} \approx 1{,}33 \quad \Rightarrow \quad \theta = \arctan(1{,}33) \approx 53°$$

El desplazamiento resultante es **10 km a 53° al norte del este**.

---

## Descomposición de vectores en componentes

En muchos problemas es necesario hacer el proceso inverso: **descomponer** un vector en sus componentes horizontal (x) y vertical (y).

Si un vector $\vec{v}$ tiene módulo $v$ y forma un ángulo $\theta$ con el eje horizontal:

$$v_x = v \cdot \cos\theta$$
$$v_y = v \cdot \sin\theta$$

Y para reconstruir el módulo a partir de las componentes:

$$v = \sqrt{v_x^2 + v_y^2}$$

**Ejemplo típico — tiro oblicuo:**

Una pelota se lanza con velocidad inicial $v_0 = 20$ m/s a un ángulo de 30° sobre la horizontal.

$$v_{0x} = 20 \cdot \cos(30°) = 20 \cdot 0{,}866 = 17{,}3 \text{ m/s}$$
$$v_{0y} = 20 \cdot \sin(30°) = 20 \cdot 0{,}5 = 10{,}0 \text{ m/s}$$

La componente horizontal $v_{0x}$ se mantiene constante durante el vuelo.
La componente vertical $v_{0y}$ cambia por efecto de la gravedad.

> Esta idea — tratar las dos componentes como **movimientos independientes** — es la clave para resolver cualquier problema de tiro oblicuo. La vamos a usar en detalle en la unidad de cinemática.

---

## Tabla de magnitudes escalares y vectoriales en Física

| Magnitud | Tipo | Unidad SI |
|---|---|---|
| Masa | Escalar | kg |
| Tiempo | Escalar | s |
| Temperatura | Escalar | K |
| Energía | Escalar | J |
| Distancia recorrida | Escalar | m |
| Rapidez (*speed*) | Escalar | m/s |
| Desplazamiento | **Vector** | m |
| Velocidad | **Vector** | m/s |
| Aceleración | **Vector** | m/s² |
| Fuerza | **Vector** | N |
| Peso | **Vector** | N |

> 💡 **Distancia ≠ Desplazamiento.** Si caminás 5 m hacia adelante y después 5 m hacia atrás, recorriste 10 m (escalar), pero tu desplazamiento es 0 m (vector). Esta distinción aparece constantemente en cinemática.

---

## Repaso de trigonometría básica

Para trabajar con vectores en 2D necesitamos seno, coseno y tangente. En un triángulo rectángulo con ángulo $\theta$:

$$\sin\theta = \frac{\text{cateto opuesto}}{\text{hipotenusa}} \qquad \cos\theta = \frac{\text{cateto adyacente}}{\text{hipotenusa}} \qquad \tan\theta = \frac{\text{cateto opuesto}}{\text{cateto adyacente}}$$

**Valores que conviene tener presentes:**

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| 0° | 0 | 1 | 0 |
| 30° | 0,5 | 0,866 | 0,577 |
| 45° | 0,707 | 0,707 | 1 |
| 60° | 0,866 | 0,5 | 1,732 |
| 90° | 1 | 0 | — |

---

## Ejercicios

1. Clasificá cada una de las siguientes magnitudes como escalar o vectorial: temperatura, velocidad del viento, masa de un objeto, fuerza gravitatoria, tiempo, desplazamiento.

2. Un auto recorre 40 km hacia el este y luego 30 km hacia el norte. Calculá el módulo y la dirección del desplazamiento total.

3. Una fuerza de 50 N actúa a 37° sobre la horizontal. Calculá sus componentes horizontal y vertical.

4. Dos fuerzas actúan sobre un objeto: $\vec{F}_1 = 12$ N hacia la derecha y $\vec{F}_2 = 5$ N hacia arriba. Calculá el módulo y la dirección de la fuerza resultante.

5. Un corredor se mueve 100 m hacia el este, luego 100 m hacia el norte, luego 100 m hacia el oeste. ¿Cuál es su desplazamiento total? ¿Y la distancia recorrida?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*