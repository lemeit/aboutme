+++
title = "Movimiento Rectilíneo Uniforme (MRU)"
date = "2026-06-22"
draft = false
description = "Movimiento con velocidad constante: ecuación, gráficos x(t) y v(t), y resolución de problemas."
tags = ["U2", "cinemática", "MRU", "gráficos", "velocidad constante"]
math = true
weight = 2
+++

## Objetivos de aprendizaje

Al finalizar esta nota, vas a poder:

- Describir las condiciones del movimiento rectilíneo uniforme (MRU).
- Aplicar la ecuación de posición del MRU para resolver problemas.
- Interpretar y construir gráficos $x(t)$ y $v(t)$ para el MRU.
- Relacionar la pendiente del gráfico $x(t)$ con la velocidad.
- Identificar MRU en situaciones reales y en análisis con Tracker.

---

## ¿Qué es el MRU?

El **movimiento rectilíneo uniforme** es aquel en que un objeto se desplaza en línea recta con **velocidad constante**: misma rapidez y misma dirección en todo momento.

Condiciones del MRU:
- Trayectoria **rectilínea** (sobre una línea recta)
- Velocidad **constante** (sin aceleración: $a = 0$)

> **Ejemplo cotidiano:** Un auto en autopista a velocidad crucero constante. Un corredor manteniendo su ritmo en la recta. Una pelota sobre una superficie perfectamente lisa.

---

## Ecuación del MRU

Si la aceleración es cero, la única ecuación que necesitamos es:

$$\Delta x = v \cdot t$$

O en su forma completa, incluyendo la posición inicial $x_0$:

$$x = x_0 + v \cdot t$$

donde:

| Símbolo | Significado | Unidad |
|---|---|---|
| $x$ | posición final | m |
| $x_0$ | posición inicial | m |
| $v$ | velocidad (constante) | m/s |
| $t$ | tiempo | s |

> 💡 Esta es la ecuación de una **función lineal**: $x$ depende de $t$ de manera proporcional. Recordá de matemática: $y = b + m \cdot x$, donde $m$ es la pendiente. Acá la "pendiente" es la velocidad $v$.

---

## Gráficos del MRU

### Gráfico posición vs. tiempo — $x(t)$

En el MRU, el gráfico $x(t)$ es una **línea recta**.

- La **pendiente** de esa recta es la velocidad: $v = \dfrac{\Delta x}{\Delta t}$
- Una pendiente positiva → objeto moviéndose en dirección positiva
- Una pendiente negativa → objeto moviéndose en dirección negativa
- Una línea horizontal (pendiente cero) → objeto en reposo

| Situación | Gráfico $x(t)$ |
|---|---|
| Reposo | Línea horizontal |
| MRU en dirección + | Línea recta con pendiente positiva |
| MRU en dirección − | Línea recta con pendiente negativa |
| Mayor velocidad | Línea más inclinada |

### Gráfico velocidad vs. tiempo — $v(t)$

En el MRU, el gráfico $v(t)$ es una **línea horizontal** (la velocidad no cambia).

- El **área** bajo el gráfico $v(t)$ entre dos instantes es el desplazamiento en ese intervalo:

$$\Delta x = v \cdot \Delta t = \text{área del rectángulo bajo la curva}$$

---

## Diagramas de puntos

Un diagrama de puntos es una forma sencilla de visualizar el movimiento: se marca la posición del objeto a intervalos de tiempo iguales.

En el **MRU**, los puntos están **igualmente espaciados** — el objeto recorre la misma distancia en cada intervalo de tiempo.

$$\bullet \quad \bullet \quad \bullet \quad \bullet \quad \bullet \quad \bullet$$

Si los puntos se acercan → el objeto frena.
Si los puntos se alejan → el objeto acelera.
Si están parejos → MRU.

---

## Resolución de problemas — método GUESS

Para resolver cualquier problema de cinemática, seguimos estos pasos:

1. **G** — *Given*: anotá todos los datos del problema con sus unidades
2. **U** — *Unknown*: identificá qué hay que encontrar
3. **E** — *Equation*: escribí la ecuación que relaciona esas variables
4. **S** — *Substitute*: sustituí los valores (con unidades)
5. **S** — *Solve*: resolvé y verificá el resultado

---

## Ejemplos resueltos

**Ejemplo 1 — calcular velocidad:**

Un auto recorre 1 200 m en 60 s a velocidad constante. ¿Cuál es su velocidad?

| | |
|---|---|
| **G** | $\Delta x = 1\,200$ m, $t = 60$ s |
| **U** | $v = ?$ |
| **E** | $\Delta x = v \cdot t$ |
| **S** | $v = \dfrac{\Delta x}{t} = \dfrac{1\,200}{60}$ |
| **S** | $v = 20$ m/s |

---

**Ejemplo 2 — calcular tiempo:**

Una persona camina a 1,25 m/s. ¿Cuánto tarda en recorrer 320 m?

$$t = \frac{\Delta x}{v} = \frac{320 \text{ m}}{1{,}25 \text{ m/s}} = 256 \text{ s}$$

---

**Ejemplo 3 — posición en función del tiempo:**

Un ciclista parte de $x_0 = 50$ m con velocidad $v = 8$ m/s. ¿Dónde está a los 10 s?

$$x = x_0 + v \cdot t = 50 + 8 \cdot 10 = 130 \text{ m}$$

---

**Ejemplo 4 — MRU en dirección negativa:**

Un objeto parte de $x_0 = 80$ m moviéndose hacia el origen con $v = -5$ m/s. ¿Cuándo llega al origen?

Queremos $x = 0$:

$$0 = 80 + (-5) \cdot t \quad \Rightarrow \quad t = \frac{80}{5} = 16 \text{ s}$$

---

## Conexión con la actividad de campo

En nuestra **actividad de carreras** en el patio, analizamos el movimiento con Tracker:

- Si el corredor mantiene velocidad constante, el gráfico $x(t)$ en Tracker es una **línea recta**.
- La pendiente de esa recta (calculada automáticamente por Tracker) es la **velocidad media** del corredor.
- En el gráfico $v(t)$ de Tracker, verás una línea aproximadamente horizontal — eso es MRU.

> **Para pensar:** ¿En qué parte de una carrera de 40 m es más probable ver MRU? ¿Al inicio, en el medio o al final?

---

## Ejercicios

1. Un tren viaja a velocidad constante de 25 m/s. ¿Cuánto tiempo tarda en recorrer 5 km?

2. Un auto parte de $x_0 = 0$ con $v = 15$ m/s. Calculá su posición a los 0, 2, 4, 6 y 8 s. Graficá $x(t)$.

3. Del gráfico $x(t)$ de un objeto, la pendiente es $-3$ m/s. ¿Qué podés decir sobre su movimiento?

4. Dos ciclistas parten del mismo punto al mismo tiempo. El primero va a 6 m/s y el segundo a 10 m/s en la misma dirección. ¿A qué distancia están entre sí a los 30 s?

5. En el análisis con Tracker de una carrera de 40 m, obtenés los siguientes datos:

| $t$ (s) | $x$ (m) |
|---|---|
| 0 | 0 |
| 1 | 5,8 |
| 2 | 11,7 |
| 3 | 17,5 |
| 4 | 23,3 |
| 5 | 29,1 |
| 6 | 34,9 |

Graficá $x(t)$, calculá la pendiente y determiná la velocidad media del corredor.

---

*Adaptado de [Bigler, J. — Class Notes for Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf) (CC BY-NC-SA 4.0). Traducción, adaptación al Diseño Curricular DGCyE e integración pedagógica con actividades de campo con Tracker: Prof. Ing. Luciano Lamaita, 2026.*
