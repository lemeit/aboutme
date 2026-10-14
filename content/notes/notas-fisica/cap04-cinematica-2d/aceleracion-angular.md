+++
title = "Aceleración angular"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Aceleración angular, ecuaciones rotacionales paralelas a las lineales y aceleración tangencial."
tags = ["cap04", "cinemática 2D", "aceleración angular", "rotación", "ecuaciones rotacionales"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Calcular la aceleración angular a partir de velocidades angulares y tiempo.
- Aplicar las ecuaciones rotacionales paralelas a las ecuaciones lineales.
- Relacionar aceleración angular con aceleración tangencial.

---

## Aceleración angular

La **aceleración angular media** ($\alpha_{med}$) es el cambio de velocidad angular dividido por el tiempo transcurrido. Si es constante, coincide con $\alpha$ durante todo el intervalo. En las expresiones siguientes $t$ representa ese tiempo transcurrido, no un instante arbitrario:

$$\alpha = \frac{\Delta\omega}{t} = \frac{\omega - \omega_0}{t}$$

Unidad: $\text{rad/s}^2$

**Analogía con la aceleración lineal:**

| Lineal | Angular |
|--------|---------|
| $a = \dfrac{v - v_0}{t}$ | $\alpha = \dfrac{\omega - \omega_0}{t}$ |
| m/s² | rad/s² |

---

## Aceleración tangencial

La **aceleración tangencial** ($a_T$) es la componente tangencial de la aceleración de un punto de un cuerpo rígido que gira alrededor de un eje fijo. Además puede tener aceleración radial, incluso cuando $\alpha=0$:

$$a_T = r\,\alpha$$

---

## Ecuaciones rotacionales

Para un eje fijo y **aceleración angular constante**, las ecuaciones del MRUV tienen la siguiente analogía rotacional. Los ángulos se expresan en radianes y los signos se fijan con un sentido de giro; $d$ en la columna lineal representa desplazamiento con signo, no longitud total del recorrido:

| Lineal | Angular |
|--------|---------|
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ |
| $d = v_0 t + \tfrac{1}{2}at^2$ | $\Delta\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$ |
| $v^2 - v_0^2 = 2ad$ | $\omega^2 - \omega_0^2 = 2\alpha\Delta\theta$ |

---

## Ejemplo resuelto — Bicicleta (Bigler)

Un ciclista acelera de $7{,}5\ \text{m/s}$ a $10{,}0\ \text{m/s}$ en $5{,}0\ \text{s}$. Las ruedas tienen radio $r = 0{,}343\ \text{m}$. ¿Cuál es la aceleración angular?

> **Aclaración de la adaptación — Bigler, pp. 263–264:** se supone rodadura **sin deslizamiento**, radio constante y variación uniforme de velocidad. Así, la rapidez del centro de la rueda es $r\omega$ y su aceleración de traslación es $r\alpha$. No se está identificando esa aceleración con la aceleración total de un punto del borde respecto del suelo; el borde también participa del giro. El resultado del ejemplo se conserva.

**Método 1 — desde la aceleración tangencial:**

$$a_T = \frac{v - v_0}{t} = \frac{10{,}0 - 7{,}5}{5{,}0} = 0{,}5\ \text{m/s}^2$$

$$\alpha = \frac{a_T}{r} = \frac{0{,}5}{0{,}343} = 1{,}46\ \text{rad/s}^2$$

**Método 2 — desde las velocidades angulares:**

$$\omega_0 = \frac{v_0}{r} = \frac{7{,}5}{0{,}343} = 21{,}87\ \text{rad/s} \qquad \omega = \frac{10{,}0}{0{,}343} = 29{,}15\ \text{rad/s}$$

$$\alpha = \frac{\omega - \omega_0}{t} = \frac{29{,}15 - 21{,}87}{5{,}0} = 1{,}46\ \text{rad/s}^2$$

Ambos métodos dan el mismo resultado. ✓

---

## Para pensar

1. Un tocadiscos a 33⅓ RPM se apaga y se detiene en 26 s. ¿Cuál es su aceleración angular?
2. ¿Qué significa que $\alpha$ sea negativa para un objeto que estaba girando?
3. Si duplicás el radio de una rueda manteniendo la misma aceleración angular, ¿qué pasa con la aceleración tangencial del borde?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
