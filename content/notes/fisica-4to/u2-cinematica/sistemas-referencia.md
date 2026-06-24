+++
title = "Sistemas de referencia. Posición, distancia y desplazamiento"
date = "2026-06-22"
draft = false
description = "Cómo describir la posición de un objeto. Diferencia entre distancia recorrida y desplazamiento. Velocidad escalar y velocidad vectorial."
tags = ["U2", "cinemática", "posición", "desplazamiento", "velocidad", "sistemas de referencia"]
math = true
+++

## Objetivos de aprendizaje

Al finalizar esta nota, vas a poder:

- Definir qué es un sistema de referencia y para qué sirve.
- Distinguir entre posición, distancia recorrida y desplazamiento.
- Calcular velocidad media y velocidad instantánea.
- Identificar correctamente las magnitudes escalares y vectoriales de la cinemática.
- Aplicar la convención de signos para indicar dirección en una dimensión.

---

## ¿Qué estudia la cinemática?

La **cinemática** es la parte de la mecánica que describe *cómo* se mueven los cuerpos, sin preguntarse *por qué* se mueven. Las causas del movimiento las estudia la dinámica (Unidad 3).

Para describir el movimiento necesitamos responder: ¿dónde está el objeto? ¿hacia dónde va? ¿qué tan rápido? ¿está acelerando?

---

## Sistema de referencia

Antes de poder decir "el objeto está a 5 metros" hay que responder: **5 metros desde dónde, y en qué dirección**.

Un **sistema de referencia** (o sistema de coordenadas) es el conjunto de:

1. Un **punto de referencia** (origen, el punto 0)
2. Una o más **direcciones** (ejes)
3. Una **convención de signos** (qué lado es positivo)

> **Ejemplo:** Para describir el movimiento de un auto en una ruta, elegimos un punto de referencia (por ejemplo, el semáforo de entrada a Saladillo), definimos la dirección positiva como "hacia el este", y medimos la posición del auto respecto a ese punto.

La elección del sistema de referencia es **arbitraria** — podemos elegir cualquier origen y cualquier dirección positiva. Lo importante es ser consistentes durante todo el problema.

### Posición

La **posición** ($x$) es la ubicación de un objeto respecto al origen de su sistema de referencia.

- Si el objeto está en el sentido positivo del origen: $x > 0$
- Si está en el origen: $x = 0$
- Si está en el sentido negativo: $x < 0$

$$x \quad \text{[m]} \quad \text{(vector en 1D, puede ser positiva o negativa)}$$

---

## Distancia y desplazamiento

Estas dos palabras se usan como sinónimos en el lenguaje cotidiano, pero en Física significan cosas distintas.

### Distancia recorrida

La **distancia recorrida** ($d$) es la longitud total del camino que siguió el objeto. Es un **escalar**: siempre positiva, no tiene dirección.

### Desplazamiento

El **desplazamiento** ($\Delta x$ o $\vec{d}$) es el cambio neto en la posición del objeto: cuánto se alejó de su posición inicial, y en qué dirección. Es un **vector**.

$$\Delta x = x_f - x_i$$

donde $x_f$ es la posición final y $x_i$ es la posición inicial.

> 💡 Si un objeto se mueve hacia la derecha 8 m y luego vuelve 3 m hacia la izquierda:
> - Distancia recorrida: $8 + 3 = 11$ m
> - Desplazamiento: $8 - 3 = +5$ m (hacia la derecha)

> Si vuelve exactamente al punto de partida, el desplazamiento es 0, aunque haya recorrido mucha distancia.

### Ejemplo con actividad de campo

En nuestra actividad de campo con carreras en el patio:

- Si un alumno corre 40 m de punta a punta y vuelve 40 m al punto de partida:
  - Distancia recorrida: **80 m**
  - Desplazamiento: **0 m**

- Si un alumno corre 40 m en una dirección y para ahí:
  - Distancia recorrida: **40 m**
  - Desplazamiento: **40 m** (en la dirección de la carrera)

---

## Rapidez y velocidad

### Rapidez media (*speed*)

La **rapidez media** es cuánta distancia recorre el objeto por unidad de tiempo. Es un **escalar**.

$$\bar{v} = \frac{d}{t}$$

### Velocidad media

La **velocidad media** es el desplazamiento por unidad de tiempo. Es un **vector**.

$$\bar{v} = \frac{\Delta x}{\Delta t} = \frac{x_f - x_i}{t_f - t_i}$$

En el SI, la velocidad se mide en **m/s**.

> **Conversión útil:** $1 \text{ m/s} \approx 3{,}6 \text{ km/h}$

> ⚠️ Si un objeto regresa al punto de partida, su velocidad media es **cero** (el desplazamiento es cero), aunque su rapidez media sea distinta de cero.

### Velocidad instantánea

La **velocidad instantánea** es la velocidad en un instante preciso de tiempo — el límite de la velocidad media cuando $\Delta t \to 0$. En la práctica, es lo que indica el velocímetro de un auto en cada momento.

Si la velocidad es constante, la velocidad instantánea coincide con la velocidad media.

### Movimiento uniforme

El **movimiento rectilíneo uniforme (MRU)** es aquel en que la velocidad es constante: misma rapidez y misma dirección en todo momento.

$$\Delta x = v \cdot t$$

---

## Variables de la cinemática — resumen

| Variable | Símbolo | Tipo | Unidad SI |
|---|---|---|---|
| Posición | $x$ | Vector | m |
| Distancia recorrida | $d$ | Escalar | m |
| Desplazamiento | $\Delta x$ | Vector | m |
| Tiempo | $t$ | Escalar | s |
| Rapidez media | $\bar{v}$ | Escalar | m/s |
| Velocidad media | $\bar{v}$ | Vector | m/s |
| Velocidad instantánea | $v$ | Vector | m/s |
| Aceleración | $a$ | Vector | m/s² |

### Convención de signos

Para movimiento en una dimensión, los vectores se expresan con signo:

| Situación | Signo |
|---|---|
| Objeto a la derecha del origen | $x > 0$ |
| Objeto a la izquierda del origen | $x < 0$ |
| Movimiento hacia el sentido positivo | $v > 0$ |
| Movimiento hacia el sentido negativo | $v < 0$ |
| Velocidad creciendo en sentido positivo | $a > 0$ |
| Velocidad decreciendo en sentido positivo | $a < 0$ |

> La elección de qué dirección es positiva es libre — lo que importa es mantenerla igual en todo el problema.

---

## Ejemplos resueltos

**Ejemplo 1 — velocidad media:**

Un auto recorre 1 200 m en 60 s. ¿Cuál es su velocidad media?

$$\bar{v} = \frac{\Delta x}{t} = \frac{1\,200 \text{ m}}{60 \text{ s}} = 20 \text{ m/s}$$

---

**Ejemplo 2 — tiempo de viaje:**

Una persona camina a velocidad media de 1,25 m/s y recorre 320 m. ¿Cuánto tiempo tardó?

$$\bar{v} = \frac{\Delta x}{t} \quad \Rightarrow \quad t = \frac{\Delta x}{\bar{v}} = \frac{320 \text{ m}}{1{,}25 \text{ m/s}} = 256 \text{ s}$$

---

**Ejemplo 3 — desplazamiento con cambio de dirección:**

Un alumno corre 12 m hacia el este, luego 5 m hacia el norte (actividad de campo, Tracker).

- Distancia recorrida: $12 + 5 = 17$ m
- Desplazamiento (módulo): $\sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$ m
- Dirección: $\theta = \arctan\left(\dfrac{5}{12}\right) \approx 22{,}6°$ al norte del este

---

## Conexión con el experimento de campo

En nuestra actividad de carreras con Tracker:

- La **posición** en cada fotograma es la magnitud que Tracker mide en el eje $x$.
- La **velocidad media** entre dos fotogramas es $\Delta x / \Delta t$.
- El gráfico $x(t)$ que genera Tracker muestra la posición en función del tiempo — una línea recta indica velocidad constante (MRU).
- La **pendiente** de ese gráfico es la velocidad: $v = \Delta x / \Delta t$.

---

## Ejercicios

1. Un ciclista recorre 300 m hacia el norte, luego 400 m hacia el este. Calculá: (a) la distancia total recorrida, (b) el módulo del desplazamiento, (c) la dirección del desplazamiento.

2. Un auto parte del reposo y alcanza 90 km/h en 10 s. Expresá la velocidad final en m/s. ¿Cuál es la velocidad media durante ese intervalo?

3. Un estudiante sale de su casa y camina 500 m hasta la escuela, luego vuelve 200 m porque olvidó algo, y finalmente continúa hasta la escuela. (a) ¿Cuánto recorrió en total? (b) ¿Cuál es su desplazamiento final?

4. Un corredor completa 400 m (una vuelta a la pista) en 52 s. (a) ¿Cuál es su rapidez media? (b) ¿Cuál es su velocidad media? Justificá la diferencia.

5. En el análisis con Tracker de una carrera de 40 m, el gráfico $x(t)$ muestra una línea recta con pendiente 6 m/s. ¿Qué significa eso sobre el movimiento del corredor?

---

*Adaptado de [Bigler, J. — Class Notes for Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf) (CC BY-NC-SA 4.0). Traducción, adaptación al Diseño Curricular DGCyE e integración pedagógica con actividades de campo con Tracker: Prof. Ing. Luciano Lamaita, 2026.*
