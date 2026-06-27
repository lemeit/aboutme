+++
title = "Diagramas de puntos"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Representación del movimiento mediante posiciones a intervalos de tiempo iguales."
tags = ["cap03", "cinemática", "diagrama de puntos", "representación del movimiento", "MRU", "MRUV"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Representar el movimiento de un objeto con un diagrama de puntos.
- Describir el movimiento de un objeto a partir de su diagrama de puntos.
- Distinguir entre MRU y MRUV en un diagrama de puntos.

---

## ¿Qué es un diagrama de puntos?

Un **diagrama de puntos** (*dot diagram* o *ticker tape diagram*) muestra la posición de un objeto en **intervalos de tiempo iguales**. Cada punto representa la ubicación del objeto en un instante dado.

La idea viene de la fotografía estroboscópica: en una habitación oscura, se abre el obturador de una cámara y un flash estroboscópico ilumina el objeto a intervalos regulares. Cada destello captura una imagen de la posición del objeto.

> 📷 *Imagen: "Bob Running" de Harold Edgerton — Bigler pág. 195 (capturar)*

---

## Interpretar un diagrama de puntos

La **separación entre puntos** indica la velocidad:

| Separación | Significado |
|-----------|-------------|
| Puntos **equidistantes** | Velocidad constante → **MRU** |
| Puntos cada vez **más separados** | Velocidad creciente → aceleración positiva |
| Puntos cada vez **más juntos** | Velocidad decreciente → aceleración negativa |
| Puntos **juntos** | Objeto lento o casi detenido |

> 📷 *Imagen: diagramas de puntos para MRU y MRUV — Bigler pág. 196 (capturar)*

---

## Conexión con las ecuaciones

En el MRU, los puntos están igualmente espaciados porque la distancia recorrida en cada intervalo de tiempo es la misma:

$$\Delta x = v \cdot \Delta t = \text{constante}$$

En el MRUV, la distancia entre puntos consecutivos aumenta (o disminuye) de manera uniforme, porque:

$$\Delta x_n = v_0 \Delta t + \frac{1}{2}a(\Delta t)^2 \cdot n$$

---

## Actividad — cinta de papel

El experimento clásico usa una **cinta de papel** que pasa por un contador de ticks electrónico (que hace marcas cada 1/60 s). Al tirar la cinta, los puntos quedan registrados:

1. Separaciones iguales → velocidad constante.
2. Separaciones crecientes → aceleración (MRUV).
3. Medís las distancias entre puntos → calculás velocidades en cada intervalo.
4. Graficás velocidad vs. tiempo → pendiente = aceleración.

Con Tracker[^tracker] podés lograr el mismo resultado digitalmente, marcando la posición cuadro a cuadro en un video.

---

## Para pensar

1. Un diagrama de puntos muestra 5 puntos igualmente espaciados seguidos de 5 puntos con separación creciente. ¿Cómo describís ese movimiento?
2. ¿Cómo distinguís en un diagrama de puntos si el objeto se aleja o se acerca al origen?
3. Si los puntos de un diagrama están cada vez más juntos hasta desaparecer, ¿qué está haciendo el objeto?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
