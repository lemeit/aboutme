+++
title = "Tiro Oblicuo (Movimiento Proyectil)"
date = "2026-06-26"
draft = false
math = true
weight = 8
description = "Movimiento en 2D: componentes independientes horizontal (MRU) y vertical (MRUV). Tiro horizontal y con ángulo."
tags = ["cap03", "cinemática", "tiro oblicuo", "proyectil", "movimiento 2D", "vectores", "trigonometría"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Comprender que el movimiento proyectil combina MRU horizontal con MRUV vertical de forma independiente.
- Identificar el tiempo como variable que vincula ambas dimensiones.
- Resolver problemas de tiro horizontal y lanzamiento con ángulo.
- Interpretar gráficos de trayectoria parabólica.

---

## ¿Qué es un proyectil?

Un **proyectil** es un objeto que es propulsado (arrojado, disparado, etc.) y que, una vez en el aire, solo está sometido a la gravedad (despreciamos el aire).

**Ejemplos:** una pelota pateada, una piedra arrojada, una bala, el Angry Bird de la honda.

---

## La clave: movimientos independientes

Como los vectores perpendiculares no se afectan mutuamente, el movimiento horizontal y el vertical son **completamente independientes** y se analizan por separado con sus propias ecuaciones.

| Dirección | Movimiento | Aceleración | Ecuaciones |
|-----------|-----------|-------------|-----------|
| Horizontal ($x$) | MRU | $a_x = 0$ | $d_x = v_x \cdot t$ |
| Vertical ($y$) | MRUV | $a_y = g$ | $v_y = v_{0y} + gt$ · $d_y = v_{0y}t + \tfrac{1}{2}gt^2$ · $v_y^2 - v_{0y}^2 = 2gd_y$ |

**El tiempo $t$ es el mismo en ambas dimensiones** — es la variable que vincula el problema horizontal con el vertical.

---

## Estrategia general de resolución

1. **Separar** la velocidad inicial en componentes $v_x$ y $v_{0y}$ (si hay ángulo).
2. **Resolver el problema vertical primero** → obtenés el tiempo de vuelo $t$.
3. **Usar ese tiempo en el problema horizontal** → calculás el alcance $d_x$.

> Cuando la dirección es solo hacia abajo, tomamos hacia abajo como positivo.
> Cuando hay lanzamiento hacia arriba, tomamos hacia arriba como positivo y $g = -10\ \text{m/s}^2$.

---

## Tiro horizontal

El objeto sale con velocidad puramente horizontal ($v_{0y} = 0$).

$$d_x = v_x \cdot t \qquad d_y = \tfrac{1}{2}g\,t^2$$

### Ejemplo resuelto (Bigler)

Una pelota es lanzada horizontalmente a $5\ \text{m/s}$ desde 1,5 m de altura. ¿Dónde cae?

**Vertical** (positivo hacia abajo, $v_{0y} = 0$):

$$d_y = \tfrac{1}{2}g\,t^2 \implies 1{,}5 = 5\,t^2 \implies t^2 = 0{,}3 \implies t = 0{,}55\ \text{s}$$

**Horizontal:**

$$d_x = v_x \cdot t = 5 \times 0{,}55 = 2{,}74\ \text{m}$$

> 📷 *Imagen: trayectoria parabólica del tiro horizontal — Bigler pág. 245 (capturar)*

---

## Lanzamiento con ángulo

Si el objeto sale con velocidad $v_0$ y ángulo $\theta$ respecto a la horizontal, hay que descomponer:

$$v_x = v_0 \cos\theta \qquad v_{0y} = v_0 \sin\theta$$

> 📷 *Imagen: descomposición de velocidad en ángulo — Bigler pág. 246 (capturar)*

### Ejemplo resuelto — Angry Bird (Bigler)

Un pájaro es lanzado a $20\ \text{m/s}$ con ángulo de $40°$. Cae al mismo nivel de lanzamiento. ¿Cuál es el alcance?

**Descomposición:**

$$v_x = 20\cos(40°) = 15{,}3\ \text{m/s} \qquad v_{0y} = 20\sin(40°) = 12{,}9\ \text{m/s}$$

**Vertical** (positivo hacia arriba, $d_y = 0$ porque cae al mismo nivel):

$$0 = v_{0y}\,t + \tfrac{1}{2}(-g)t^2 = t\left(v_{0y} - \tfrac{g}{2}\,t\right)$$

$$t = 0 \quad \text{o} \quad t = \frac{2\,v_{0y}}{g} = \frac{2 \times 12{,}9}{10} = 2{,}57\ \text{s}$$

**Horizontal:**

$$d_x = v_x \cdot t = 15{,}3 \times 2{,}57 = 39{,}4\ \text{m}$$

> 📷 *Imagen: trayectoria del Angry Bird con componentes — Bigler pág. 248 (capturar)*

---

## Datos útiles

- El ángulo que **maximiza el alcance horizontal** es $\theta = 45°$.
- Un objeto **lanzado horizontalmente** y otro **soltado** desde la misma altura tocan el suelo al mismo tiempo (ambos tienen la misma aceleración vertical y $v_{0y} = 0$).
- La trayectoria es una **parábola** — se puede demostrar eliminando $t$ entre las ecuaciones de $x$ e $y$.

---

## Actividad con Tracker[^tracker]

1. Filmá una pelota lanzada horizontalmente desde una mesa, o con ángulo desde el suelo.
2. En Tracker[^tracker] marcá la posición cuadro a cuadro.
3. Graficá $x(t)$ y $y(t)$ por separado.
4. Verificá que $x(t)$ es una recta (MRU) y $y(t)$ es una parábola (MRUV).
5. Calculá $v_x$ desde la pendiente de $x(t)$ y $g$ desde la curvatura de $y(t)$.

---

## Para pensar

1. ¿Por qué la trayectoria de un proyectil es una parábola y no una recta?
2. Dos objetos son lanzados desde la misma altura: uno horizontalmente y el otro simplemente soltado. ¿Cuál llega primero al suelo? ¿Por qué?
3. Un arquero apunta directamente al blanco (horizontalmente). ¿La flecha llega al blanco, por encima o por debajo? ¿Qué debería hacer el arquero para acertar?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación al Diseño Curricular DGCyE: Prof. Ing. Luciano Lamaita, 2026.*
