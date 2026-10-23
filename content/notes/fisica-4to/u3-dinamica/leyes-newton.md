+++
title = "Leyes de Newton, masa y peso"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 1
draft = false
math = true
description = "Principios de la dinámica, resultante vectorial y relación entre masa y peso."
+++

## Del movimiento a sus interacciones

La cinemática describe cómo cambia la posición. La dinámica relaciona esos cambios con interacciones. Una fuerza no es algo que un objeto lleve consigo: es una interacción ejercida por otro cuerpo o por un campo.

## Recorrido intuitivo: las tres leyes

**Primera ley:** en una referencia inercial, si la fuerza resultante es cero, la velocidad permanece constante. El reposo es un caso particular. No hace falta una fuerza neta para mantener velocidad constante; sí para cambiarla.

**Segunda ley:** para masa constante, la aceleración depende de la suma vectorial de fuerzas:

$$\boxed{\sum\vec F=m\vec a}.$$

No se reemplaza la resultante por una sola fuerza aplicada si actúan también otras. En componentes: $\sum F_x=ma_x$, $\sum F_y=ma_y$.

**Tercera ley:** si A ejerce una fuerza sobre B, B ejerce sobre A otra de igual módulo y dirección opuesta:

$$\vec F_{A\to B}=-\vec F_{B\to A}.$$

Actúan en cuerpos distintos. No se cancelan en el diagrama de un solo cuerpo. El peso y la normal no son un par de tercera ley: ambos pueden actuar sobre el mismo objeto.

Estas leyes son principios físicos contrastados experimentalmente. No se deducen universalmente de una manipulación algebraica; sí deducimos sus consecuencias bajo condiciones definidas.

## Masa y peso

La masa se mide en kg y expresa inercia en este modelo. El peso es una fuerza gravitatoria:

$$\vec P=m\vec g.$$

Una masa de $5\,\mathrm{kg}$ tiene un peso aproximado de $50\,\mathrm N$ si $g=10\,\mathrm{m/s^2}$. Cambiar de planeta cambia el peso sin cambiar por eso la masa.

La fuerza de una balanza es una fuerza de apoyo, no necesariamente el peso. Si un ascensor acelera verticalmente hacia arriba y solo actúan normal y peso sobre la persona:

$$N-mg=ma_y\quad\Rightarrow\quad N=m(g+a_y).$$

Si $a_y=0$, $N=mg$. Esta igualdad depende de la situación, no es la definición universal de normal.

## Profundización analítica: cantidad de movimiento

Para una partícula, la formulación dinámica se expresa como $\sum\vec F=d\vec p/dt$, con $\vec p=m\vec v$. Si la masa es constante:

$$\frac{d(m\vec v)}{dt}=m\frac{d\vec v}{dt}=m\vec a.$$

Para sistemas con intercambio de masa no basta con insertar una masa variable en $F=ma$: hay que definir el sistema y contabilizar el flujo de cantidad de movimiento.

Integrando una fuerza neta conocida:

$$\Delta\vec p=\int_{t_i}^{t_f}\vec F_{\mathrm{neta}}(t)\,dt.$$

El área bajo un gráfico fuerza–tiempo es **impulso**, en N·s; bajo fuerza–posición es trabajo, en J. Las gráficas se interpretan por las magnitudes y unidades de sus ejes.

## Ejemplo resuelto

Una caja de masa $4\,\mathrm{kg}$ sobre un piso horizontal recibe dos fuerzas horizontales: $20\,\mathrm N$ hacia la derecha y $8\,\mathrm N$ hacia la izquierda. Peso y normal se equilibran verticalmente y no hay otras fuerzas. **Calculá la fuerza resultante y la aceleración, tomando la derecha como positiva. ¿Se puede deducir el sentido de la velocidad solo con estos datos?** La resultante es $12\,\mathrm N$ y $a_x=12/4=3\,\mathrm{m/s^2}$. La aceleración apunta a la derecha, pero la caja podría estar moviéndose hacia la izquierda y frenando en ese instante.

## Ejercicios

1. Un objeto de $2\,\mathrm{kg}$ acelera a $1{,}5\,\mathrm{m/s^2}$. Hallá la resultante.
2. Una masa de $6\,\mathrm{kg}$ está en reposo sobre una mesa horizontal y solo recibe peso y normal. Hallá ambas fuerzas con $g=10\,\mathrm{m/s^2}$.
3. Identificá la reacción al peso de un libro ejercido por la Tierra.
4. Una persona de masa $60\,\mathrm{kg}$ permanece apoyada en el piso de un ascensor que acelera hacia arriba a $2\,\mathrm{m/s^2}$. Sobre ella solo actúan su peso y la normal del piso. Usá $g=10\,\mathrm{m/s^2}$ y hallá el módulo de la normal.

{{< details title="Resultados" >}}

1. $3\,\mathrm N$ en la dirección de la aceleración.
2. Peso $60\,\mathrm N$ hacia abajo y normal $60\,\mathrm N$ hacia arriba.
3. La atracción gravitatoria del libro sobre la Tierra. No es la normal de la mesa.
4. $720\,\mathrm N$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
