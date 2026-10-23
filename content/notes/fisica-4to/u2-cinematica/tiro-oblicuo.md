+++
title = "Tiro oblicuo: ecuaciones y trayectoria"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 5
draft = false
math = true
description = "Deducciones por componentes, geometría, integración y eliminación del tiempo; práctica con Tracker."
+++

## Un movimiento, dos componentes

Modelamos una pelota como partícula, con campo gravitatorio uniforme y sin aire. Elegimos $x$ horizontal, $y$ positivo hacia arriba y lanzamiento en $t=0$. En ejemplos y ejercicios usá $g=10\,\mathrm{m/s^2}$ y medí el ángulo inicial $\theta$ desde la horizontal positiva hacia arriba. Para rapidez inicial $v_0$:

$$v_{0x}=v_0\cos\theta,\qquad v_{0y}=v_0\sin\theta.$$

La gravedad no tiene componente horizontal: $a_x=0$, $a_y=-g$. El tiempo es el mismo para ambos movimientos; no se resuelven como dos lanzamientos independientes con relojes diferentes.

## Recorrido intuitivo: MRU más MRUV

El avance horizontal es uniforme y el vertical tiene aceleración constante:

$$\boxed{x=x_0+v_0\cos\theta\,t},$$

$$\boxed{y=y_0+v_0\sin\theta\,t-\frac12gt^2}.$$

Las velocidades son $v_x=v_0\cos\theta$ y $v_y=v_0\sin\theta-gt$. En la cima solo se anula la componente vertical: si $v_{0x}\ne0$, la pelota sigue moviéndose.

## Deducción de la parábola

Si $v_0\cos\theta\ne0$, despejamos $t=(x-x_0)/(v_0\cos\theta)$ y sustituimos en $y(t)$:

$$\boxed{y-y_0=(x-x_0)\tan\theta-\frac{g(x-x_0)^2}{2v_0^2\cos^2\theta}}.$$

Es una función cuadrática de $x$, por eso la trayectoria ideal es parabólica. Si el lanzamiento es vertical, no se puede hacer ese despeje: $x$ permanece constante.

{{< figura src="/images/fisica-4to/tiro-oblicuo.svg" width="700" alt="Trayectoria parabólica ilustrativa y componentes de velocidad." caption="Trayectoria parabólica ilustrativa y componentes de velocidad." source="Elaboración para Introducción a la Física. Modelos ilustrativos; no son mediciones experimentales." >}}

## Altura, tiempo y alcance

Con componente vertical inicial positiva, la cima ocurre cuando $v_y=0$:

$$t_c=\frac{v_0\sin\theta}{g},\qquad H=\frac{v_0^2\sin^2\theta}{2g}.$$

Si aterriza a la misma altura, resolvemos $y-y_0=0$ y descartamos la raíz inicial:

$$T=\frac{2v_0\sin\theta}{g}.$$

Entonces $R=v_{0x}T$, y usando $2\sin\theta\cos\theta=\sin2\theta$:

$$\boxed{R=\frac{v_0^2\sin2\theta}{g}}.$$

Para $0<\theta<90^\circ$, rapidez fija y alturas inicial y final iguales, el máximo alcance se da a $45^\circ$ porque $\sin2\theta\le1$. Si cambia la altura final o hay aire, esa conclusión no se aplica automáticamente.

## Profundización analítica

Integramos las componentes de $d\vec v/dt=(0,-g)$ y luego las de $d\vec r/dt=\vec v$, usando las condiciones iniciales. Obtenemos exactamente las ecuaciones horarias anteriores.

La derivada de la trayectoria es:

$$\frac{dy}{dx}=\tan\theta-\frac{g(x-x_0)}{v_0^2\cos^2\theta}=\frac{v_y}{v_x}.$$

Al anularla se recupera la posición horizontal de la cima. La segunda derivada es negativa y constante en este modelo. Para optimizar el alcance:

$$\frac{dR}{d\theta}=\frac{2v_0^2}{g}\cos2\theta=0.$$

En el intervalo considerado resulta $\theta=\pi/4$, y la segunda derivada es negativa. Los ángulos se expresan en radianes al derivar funciones trigonométricas.

## Ejemplo resuelto

Una pelota se lanza con rapidez $v_0=10\,\mathrm{m/s}$ y ángulo $\theta=30^\circ$ sobre la horizontal; aterriza al mismo nivel del lanzamiento. **Calculá las componentes iniciales de velocidad, el tiempo de vuelo, la altura máxima ganada y el alcance horizontal**, bajo el modelo ideal de esta nota. Sus componentes iniciales son $(5\sqrt3,5)\,\mathrm{m/s}$; $T=1\,\mathrm s$, $H=1{,}25\,\mathrm m$ y $R=5\sqrt3\approx8{,}66\,\mathrm m$.

## Experiencia y Tracker

Filmá una pelota de costado con cámara fija y referencia de longitud en el plano del movimiento. Calibrá la escala y seguí su centro. Compará $x(t)$ con una recta y $y(t)$ con una parábola. Si ajustás $y=A+Bt+Ct^2$, interpretá $y_0=A$, $v_{0y}=B$ y $a_y=2C$, incluyendo unidades.

El ajuste evalúa el modelo; no mide una fuerza directamente ni obliga a que salga $g$ exacto. Revisá escala, intervalo temporal, perspectiva y resistencia del aire. Conservá video, marcas originales y residuales. Consultá la [guía de Tracker](/notes/herramientas/tracker/) y la [experiencia de movimiento](/notes/fisica-4to/u4-energia/experiencia-energia-movimiento/).

## Ejercicios

1. En $t=0$ se lanza una pelota horizontalmente con rapidez $5\,\mathrm{m/s}$ desde una altura de $20\,\mathrm m$ sobre un suelo horizontal. Hallá el tiempo hasta el impacto y la distancia horizontal desde el punto de lanzamiento hasta el impacto.
2. Una pelota se lanza a $20\,\mathrm{m/s}$ formando $45^\circ$ sobre la horizontal y aterriza al mismo nivel. Hallá su alcance horizontal y la altura máxima ganada respecto del lanzamiento.
3. Compará dos lanzamientos con la misma rapidez inicial no nula: uno a $30^\circ$ y otro a $60^\circ$ sobre la horizontal, ambos con llegada al nivel de partida. Determiná si tienen igual alcance y calculá las razones $H_{60}/H_{30}$ y $T_{60}/T_{30}$. No necesitás conocer el valor de la rapidez inicial.

{{< details title="Resultados" >}}

1. $t=2\,\mathrm s$ y $R=10\,\mathrm m$.
2. $R=40\,\mathrm m$ y $H=10\,\mathrm m$.
3. Tienen igual alcance. $H_{60}/H_{30}=3$ y $T_{60}/T_{30}=\sqrt3$; no tienen igual altura máxima ni tiempo de vuelo.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
