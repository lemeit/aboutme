+++
title = "MRUV: deducción de las ecuaciones"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 3
draft = false
math = true
description = "Métodos algebraico, gráfico e integral para aceleración constante; signos y frenado."
+++

## Hipótesis

El MRUV describe movimiento rectilíneo con aceleración constante. Escribimos $\tau=t-t_0$. Las componentes $v$ y $a$ tienen signo. Una aceleración negativa no implica siempre frenar: se reduce la rapidez cuando velocidad y aceleración tienen signos opuestos.

## Recorrido intuitivo: velocidad

De $a=(v-v_0)/\tau$, constante, despejamos:

$$\boxed{v=v_0+a\tau}.$$

La velocidad cambia igual cantidad en cada intervalo igual. Esta regularidad es una hipótesis del modelo, no una conclusión obtenida de medir solamente dos posiciones.

## Deducción gráfica: posición

El gráfico $v(t)$ es una recta. El desplazamiento es su área con signo. Lo separamos en un rectángulo de base $\tau$ y altura $v_0$ y un triángulo de altura $a\tau$:

$$\Delta x=v_0\tau+\frac12\tau(a\tau).$$

Así:

$$\boxed{x=x_0+v_0\tau+\frac12a\tau^2}.$$

También es el área del trapecio:

$$\boxed{\Delta x=\frac{v_0+v}{2}\tau}.$$

Esta media de velocidades inicial y final es válida por la linealidad de $v(t)$. No se generaliza a cualquier aceleración variable.

{{< figura src="/images/fisica-4to/mruv.svg" width="700" alt="MRUV ilustrativo: área de velocidad y pendiente de aceleración." caption="MRUV ilustrativo: área de velocidad y pendiente de aceleración." source="Elaboración para Introducción a la Física. Modelos ilustrativos; no son mediciones experimentales." >}}

## Eliminar el tiempo

Multiplicamos la ecuación del trapecio por $2a$ y usamos $a\tau=v-v_0$:

$$2a\Delta x=(v_0+v)a\tau=(v_0+v)(v-v_0)=v^2-v_0^2.$$

Por lo tanto:

$$\boxed{v^2=v_0^2+2a\Delta x}.$$

Esta ecuación no determina por sí sola el signo de la velocidad: $v=\pm\sqrt{v_0^2+2a\Delta x}$. La trayectoria y el intervalo permiten elegir la rama adecuada. Si el radicando es negativo, esa posición no es alcanzable con los datos del modelo.

## Profundización analítica: dos integraciones

Partimos de $dv/dt=a$ constante:

$$v-v_0=\int_{t_0}^{t}a\,dt'=a\tau.$$

Como $dx/dt=v_0+a(t-t_0)$:

$$x-x_0=\int_{t_0}^{t}[v_0+a(t'-t_0)]\,dt'=v_0\tau+\frac12a\tau^2.$$

La regla de la cadena da $a=dv/dt=v\,dv/dx$ en tramos donde puede usarse $v$ como función de posición. Integrando $v\,dv=a\,dx$ obtenemos $(v^2-v_0^2)/2=a\Delta x$. En un cambio de sentido se analizan las ramas de movimiento sin dividir por una velocidad que se anula.

Para aceleración variable se conservan las relaciones integrales:

$$v(t)=v_0+\int_{t_0}^{t}a(s)\,ds,\qquad x(t)=x_0+\int_{t_0}^{t}v(s)\,ds.$$

La forma cuadrática anterior solo aparece cuando $a$ es constante. Derivar $x(t)$ una y dos veces es una comprobación de la deducción.

## Ejemplo resuelto — frenado

En $t=0$, un móvil lleva velocidad $v_0=+10\,\mathrm{m/s}$ sobre un eje recto y comienza a frenar con aceleración constante $a=-2\,\mathrm{m/s^2}$. **¿Cuánto tarda en detenerse y qué distancia recorre durante el frenado?** Se detiene cuando $0=10-2t$: $t=5\,\mathrm s$. Recorre $\Delta x=10(5)-(5)^2=25\,\mathrm m$.

Si el mecanismo solo frena hasta detenerlo, no se prolonga la aceleración negativa para inventar un movimiento hacia atrás. Hay que cambiar de tramo y de modelo después de la detención.

## Distancia frente a desplazamiento

Otro móvil tiene $v_0=-4\,\mathrm{m/s}$ en $t=0$ y aceleración constante $a=+2\,\mathrm{m/s^2}$ durante $4\,\mathrm s$. **Calculá su desplazamiento y su distancia recorrida en ese intervalo.** El desplazamiento es $-4(4)+(4)^2=0$. Pero la distancia no es cero: el cambio de sentido ocurre en $t=2\,\mathrm s$, y las dos áreas triangulares de $|v|$ suman $4+4=8\,\mathrm m$.

## Ejercicios

1. Un móvil parte del reposo en $t=0$ y se mueve sobre un eje recto con aceleración constante $a=+3\,\mathrm{m/s^2}$ durante $4\,\mathrm s$. Hallá su velocidad final y su desplazamiento durante ese intervalo.
2. Un móvil comienza a frenar en $t=0$ con velocidad $v_0=+6\,\mathrm{m/s}$ y aceleración constante $a=-1{,}5\,\mathrm{m/s^2}$. Hallá el tiempo de frenado y la distancia recorrida hasta su primera detención.
3. Un móvil pasa de velocidad $+2\,\mathrm{m/s}$ a $+8\,\mathrm{m/s}$ mientras se desplaza $+15\,\mathrm m$ sobre un eje recto, con aceleración constante y sin cambiar de sentido. Hallá la aceleración y la duración de ese tramo.

{{< details title="Resultados" >}}

1. $12\,\mathrm{m/s}$ y $24\,\mathrm m$.
2. $4\,\mathrm s$ y $12\,\mathrm m$.
3. $a=(64-4)/(2\cdot15)=2\,\mathrm{m/s^2}$; $t=(8-2)/2=3\,\mathrm s$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
