+++
title = "Gráficos y análisis de datos en laboratorio"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Construcción de gráficos, línea de mejor ajuste, pendiente y linealización de ecuaciones."
tags = ["U1", "laboratorio", "gráficos", "línea de mejor ajuste", "pendiente", "linealización", "análisis de datos"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Construir un gráfico correcto a partir de datos experimentales.
- Trazar una línea de mejor ajuste (*best-fit line*).
- Calcular la pendiente y relacionarla con una magnitud física.
- Linealizar una ecuación para obtener una relación lineal graficable.

---

## ¿Por qué graficar?

En lugar de medir una sola vez y calcular, o medir varias veces y promediar, **graficar una relación a lo largo de un rango de valores da un resultado más confiable y con menor incerteza.**

La idea central: si podés transformar la ecuación de tu experimento en la forma $y = m \cdot x + b$, entonces la **pendiente del gráfico** $m$ es la magnitud que querés medir. Al usar muchos puntos en lugar de uno, el error de cada medición individual afecta menos al resultado final.

---

## Cómo construir un gráfico correcto

1. **Variable manipulada en el eje $x$** (horizontal); **variable respondiente en el eje $y$** (vertical).
2. **Escala uniforme:** las divisiones deben estar igualmente espaciadas en cada eje.
3. **Título y rótulos:** cada eje lleva el nombre de la variable y su unidad. Ejemplo: *Tiempo (s)*, *Posición (m)*.
4. **Marcar los puntos con precisión:** usá un punto pequeño y rodealo con un círculo o cruz para que se vea claramente.
5. **Línea de mejor ajuste con regla:** la línea no tiene que pasar por todos los puntos — se traza de modo que minimice la distancia total a todos los puntos. Los puntos deben quedar aproximadamente distribuidos de ambos lados.
6. **No unir los puntos:** no se conectan de punto a punto como en un gráfico de zigzag.

> 📷 *Imagen: ejemplo de gráfico de fuerza vs. desplazamiento con línea de mejor ajuste — Bigler pág. 85 (capturar de PDF)*

---

## Calcular la pendiente

La pendiente de la línea de mejor ajuste se calcula con:

$$m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$$

> **Importante:** elegí dos puntos que estén **sobre la línea de mejor ajuste**, no necesariamente puntos de datos. Usá puntos bien separados para mayor precisión.

---

## Linealización

**Linealizar** significa reorganizar una ecuación para que tenga la forma $y = m \cdot x + b$, de modo que al graficar las variables correctas se obtenga una recta.

### Ejemplo — Ley de Hooke

La ecuación del resorte es:

$$F_s = k \cdot x$$

Comparando con $y = m \cdot x + b$:

| En $y = mx + b$ | En $F_s = kx$ |
|----------------|---------------|
| $y$ | $F_s$ (fuerza) → eje $y$ |
| $x$ | $x$ (desplazamiento) → eje $x$ |
| $m$ (pendiente) | $k$ (constante del resorte) |
| $b$ (ordenada al origen) | $0$ |

Si graficamos $F_s$ vs. $x$ y trazamos la línea de mejor ajuste, la **pendiente es la constante del resorte** $k$.

### Ejemplo — Cinemática (MRUV)

La ecuación de posición es $x = \frac{1}{2}a \cdot t^2$ (partiendo del reposo desde el origen). No es lineal en $t$, pero si graficamos $x$ vs. $t^2$:

$$x = \underbrace{\frac{a}{2}}_{m} \cdot \underbrace{t^2}_{x_{eje}}$$

La pendiente del gráfico $x$ vs. $t^2$ es $\frac{a}{2}$, de donde:

$$a = 2 \cdot \text{pendiente}$$

---

## Regresión lineal con calculadora o computadora

Si usás Desmos, Excel o una calculadora científica:

1. Ingresás los pares de datos $(x_i, y_i)$.
2. Pedís una regresión lineal (*linear regression* o *línea de tendencia*).
3. El programa devuelve:
   - La **pendiente** $m$
   - La **ordenada al origen** $b$
   - El **coeficiente de correlación** $R^2$

> Un $R^2$ menor a 0,9 indica que los datos no son lineales, que hay un punto problemático, o que hubo un error en el experimento.

---

## Actividad — Tracker[^tracker] + gráficos

En experimentos con Tracker[^tracker]:

1. Obtenés la tabla de posición $x$ vs. tiempo $t$.
2. Para MRU: graficás $x$ vs. $t$ → recta → pendiente = velocidad.
3. Para MRUV: graficás $x$ vs. $t^2$ → recta → pendiente = $a/2$.
4. Calculás $a$ y comparás con el valor esperado ($g = 10\ \text{m/s}^2$ en caída libre).

---

## Para pensar

1. Tenés datos de posición y tiempo de un MRUV. ¿Por qué no podés obtener la aceleración graficando $x$ vs. $t$ directamente?
2. Si la línea de mejor ajuste de tu experimento no pasa por el origen, ¿qué podría significar físicamente?
3. ¿Por qué una línea de mejor ajuste da un resultado más confiable que un promedio de dos mediciones?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
