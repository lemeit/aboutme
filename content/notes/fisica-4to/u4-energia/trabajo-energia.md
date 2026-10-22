+++
title = "Trabajo, energía y potencia: relaciones fundamentales"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 4
draft = false
math = true
description = "Componentes, áreas y derivadas para conectar fuerzas con cambios de energía."
+++

## Recorrido intuitivo

Una fuerza transfiere energía por trabajo cuando se desplaza su punto de aplicación. Para una fuerza constante y desplazamiento rectilíneo:

$$W=Fd\cos\theta.$$

El factor $\cos\theta$ selecciona la componente paralela. Una fuerza perpendicular no hace trabajo sobre una partícula durante ese desplazamiento. Sostener un objeto quieto no produce trabajo mecánico sobre él, aunque la persona consuma energía química.

Para un carrito tratado como partícula, el trabajo de la resultante es $\Delta K$. El trabajo de una sola fuerza no se identifica con el neto sin considerar las otras. En una elevación uniforme, la fuerza aplicada hace trabajo positivo y el peso negativo, con trabajo neto cero.

## Deducción gráfica y cálculo

Dividimos el recorrido en tramos y sumamos $F_\parallel\Delta s$. En el límite:

$$W=\int\vec F\cdot d\vec r.$$

En una dimensión, el área de $F_x(x)$ con signo da trabajo. Un rectángulo representa fuerza constante; un triángulo puede representar una fuerza que crece linealmente desde cero. La pendiente de ese gráfico tiene unidades N/m y no es trabajo.

Usando $\vec F_{\mathrm{neta}}=m\,d\vec v/dt$ y $d\vec r=\vec v\,dt$, para masa constante:

$$W_{\mathrm{neto}}=\int m\vec v\cdot d\vec v=\frac12mv_f^2-\frac12mv_i^2.$$

La [deducción completa de las energías](../deducciones-energia/) explica cada paso y las referencias de energía potencial gravitatoria y elástica.

## Potencia media e instantánea

La potencia media es $\overline P=W/\Delta t$. Si el trabajo se va acumulando:

$$P=\frac{dW}{dt}=\vec F\cdot\frac{d\vec r}{dt}=\vec F\cdot\vec v.$$

La velocidad corresponde al punto de aplicación. En rotación sobre eje fijo, $dW=\tau\,d\theta$ y $P=\tau\omega$. Los productos son instantáneos: el promedio de un producto no es en general producto de promedios.

## Ejemplo resuelto

Una fuerza de $50\,\mathrm N$ a $60^\circ$ del avance actúa durante $4\,\mathrm m$. Su trabajo es $50(4)\cos60^\circ=100\,\mathrm J$. Si el tramo dura $5\,\mathrm s$, su potencia media es $20\,\mathrm W$.

No podemos concluir que toda esa energía aumentó $K$ sin conocer otros trabajos. Si el rozamiento hace $-40\,\mathrm J$ y no hay otros aportes, $\Delta K=60\,\mathrm J$.

## Ejercicios

1. Una fuerza constante de $20\,\mathrm N$ actúa durante $3\,\mathrm m$ a $90^\circ$ del desplazamiento. Hallá su trabajo.
2. Un gráfico fuerza–posición es un rectángulo de altura $10\,\mathrm N$ y base $2\,\mathrm m$. Hallá trabajo.
3. Un motor realiza $600\,\mathrm J$ en $4\,\mathrm s$. Hallá potencia media.
4. ¿Se puede obtener una fuerza a partir de una energía sin conocer recorrido o configuración?

{{< details title="Resultados" >}}

1. Cero.
2. $20\,\mathrm J$.
3. $150\,\mathrm W$.
4. No en general. Hace falta información sobre cómo cambia la energía con la posición y sobre qué interacción se modela.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
