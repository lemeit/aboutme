+++
title = "MRU: ecuación horaria, gráficos y encuentros"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 2
draft = false
math = true
description = "Deducciones por proporcionalidad, área e integración de velocidad constante."
+++

## Modelo y condiciones

En el movimiento rectilíneo uniforme, la velocidad vectorial es constante. La trayectoria es recta y la aceleración cero. Definí eje, origen y tiempo inicial $t_0$; una velocidad negativa indica avance hacia valores decrecientes del eje.

## Recorrido intuitivo: de la definición a la ecuación

Si en intervalos iguales ocurren desplazamientos iguales, la razón $v=\Delta x/\Delta t$ es constante. Multiplicando por el tiempo:

$$\Delta x=v\Delta t.$$

Como $\Delta x=x-x_0$ y $\Delta t=t-t_0$:

$$\boxed{x(t)=x_0+v(t-t_0)}.$$

No hace falta salir del origen ni empezar el reloj en cero. Si elegimos $t_0=0$, queda $x=x_0+vt$. La ordenada inicial representa posición, no velocidad.

## Deducción gráfica

El gráfico $v(t)$ es horizontal. Su área con signo entre $t_0$ y $t$ es el rectángulo $v(t-t_0)$, que representa desplazamiento. Por eso se suma a $x_0$. La pendiente del gráfico $x(t)$ es $v$ y la del gráfico $v(t)$ es cero.

{{< figura src="/images/fisica-4to/mru.svg" width="700" alt="MRU ilustrativo: posición lineal y velocidad constante." caption="MRU ilustrativo: posición lineal y velocidad constante." source="Elaboración para Introducción a la Física. Modelos ilustrativos; no son mediciones experimentales." >}}

## Profundización analítica

La definición instantánea es $dx/dt=v$ constante. Integramos entre condiciones conocidas:

$$\int_{x_0}^{x(t)}dx'=\int_{t_0}^{t}v\,dt'.$$

El resultado es $x(t)-x_0=v(t-t_0)$. La constante de integración queda determinada por $x(t_0)=x_0$. Derivando la ecuación obtenida se recupera $dx/dt=v$ y $d^2x/dt^2=0$.

Si la velocidad cambia por tramos, se integra o calcula cada área por separado y se conserva la posición final como condición inicial del tramo siguiente. Usar una única velocidad constante sin comprobarlo cambia el modelo.

## Encuentro de dos móviles

Usá la misma referencia y el mismo reloj. Si $x_A=x_{A0}+v_At$ y $x_B=x_{B0}+v_Bt$, se encuentran cuando sus posiciones coinciden:

$$x_{A0}+v_At=x_{B0}+v_Bt.$$

Si $v_A\ne v_B$:

$$t=\frac{x_{B0}-x_{A0}}{v_A-v_B}.$$

Revisá si el resultado pertenece al intervalo físico considerado. Un tiempo negativo describe un encuentro anterior al inicio, no uno futuro. Si las velocidades son iguales, no habrá encuentro salvo que ya compartan posición.

## Ejemplo resuelto

Dos móviles A y B se mueven sobre el mismo eje con velocidades constantes. En $t=0$, A parte de $x=0$ a $+3\,\mathrm{m/s}$ y B de $x=20\,\mathrm m$ a $-2\,\mathrm{m/s}$. **¿En qué instante y posición se encuentran?** Igualamos $3t=20-2t$, obtenemos $t=4\,\mathrm s$ y $x=12\,\mathrm m$.

Como variante, suponé que B permanece en $x=20\,\mathrm m$ hasta $t=2\,\mathrm s$ y recién entonces empieza a moverse a $-2\,\mathrm{m/s}$. **Calculá el nuevo instante y la posición de encuentro.** Su ecuación durante su movimiento es $x_B=20-2(t-2)$, válida desde $t=2\,\mathrm s$. Igualando con $x_A=3t$ resulta $5t=24$: se encuentran en $t=4{,}8\,\mathrm s$, en $x=14{,}4\,\mathrm m$. Se cumple $t\ge2\,\mathrm s$. No se omite el retraso ni se usa esa ecuación antes de la salida.

## Ejercicios

1. En $t=0$, un móvil está en $x_0=5\,\mathrm m$ y comienza un MRU con velocidad $v=-2\,\mathrm{m/s}$. Hallá su posición en $t=4\,\mathrm s$ y la distancia recorrida desde $t=0$ hasta ese instante.
2. Dos móviles A y B se mueven en MRU sobre el mismo eje. En $t=0$ están en $x_{A0}=0$ y $x_{B0}=100\,\mathrm m$, con velocidades $v_A=+8\,\mathrm{m/s}$ y $v_B=-2\,\mathrm{m/s}$. Calculá el instante y la posición del encuentro.
3. Un objeto recorre dos tramos consecutivos de $6\,\mathrm m$ cada uno, el primero a rapidez constante de $2\,\mathrm{m/s}$ y el segundo a $3\,\mathrm{m/s}$, sin pausas entre ambos. Calculá el tiempo total y la rapidez media de los $12\,\mathrm m$. Explicá por qué no corresponde promediar simplemente las dos rapideces.

{{< details title="Resultados" >}}

1. $x=-3\,\mathrm m$; distancia $8\,\mathrm m$.
2. $t=10\,\mathrm s$, $x=80\,\mathrm m$.
3. Tarda $3+2=5\,\mathrm s$: rapidez media $12/5=2{,}4\,\mathrm{m/s}$. El promedio simple de rapideces requiere tiempos iguales, no distancias iguales.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
