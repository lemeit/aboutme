+++
title = "Caída libre y tiro vertical"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 4
draft = false
math = true
description = "Modelo de gravedad uniforme: altura, velocidad, tiempo de vuelo y elección de signos."
+++

## Modelo y referencia

En caída libre ideal solo actúa la gravedad. Cerca de la superficie terrestre tomamos $g$ constante y despreciamos la resistencia del aire. Elegimos $y$ positivo hacia arriba: $a_y=-g$, tanto durante la subida como durante la bajada. En los ejemplos y ejercicios usamos $g=10\,\mathrm{m/s^2}$ y el suelo como $y=0$. Escribimos $\tau=t-t_0$; si el lanzamiento ocurre en $t_0=0$, entonces $\tau=t$.

## Recorrido intuitivo

Se aplican las ecuaciones del MRUV, reemplazando $x$ por $y$ y $a$ por $-g$:

$$v_y=v_{0y}-g\tau,$$

$$y=y_0+v_{0y}\tau-\frac12g\tau^2,$$

$$v_y^2=v_{0y}^2-2g(y-y_0).$$

Si se suelta desde reposo y cae una altura $H$, $-H=-gt^2/2$:

$$t=\sqrt{\frac{2H}{g}},\qquad v_y=-\sqrt{2gH}.$$

El tiempo futuro es la raíz positiva. La rapidez final es el módulo de esa velocidad.

## Altura máxima y regreso

Si $v_{0y}>0$, en la cima $v_y=0$:

$$t_{\mathrm{subida}}=\frac{v_{0y}}g.$$

Sustituyendo ese tiempo en la ecuación de posición:

$$y_{\max}-y_0=\frac{v_{0y}^2}{g}-\frac12\frac{v_{0y}^2}{g}=\frac{v_{0y}^2}{2g}.$$

Para volver a la misma altura, $0=v_{0y}t-gt^2/2$. Factorizamos $t(v_{0y}-gt/2)=0$: la raíz $t=0$ es el lanzamiento y la otra es $T=2v_{0y}/g$.

Si el punto final está a otra altura, hay que resolver la cuadrática completa. No se duplica automáticamente el tiempo de subida.

## Deducción gráfica

En $v_y(t)$ la pendiente es $-g$. El área positiva hasta la cima es un triángulo de base $v_{0y}/g$ y altura $v_{0y}$, de donde sale $\Delta y=v_{0y}^2/(2g)$. Para el regreso al mismo nivel, las áreas positiva y negativa se compensan.

## Profundización analítica

Integramos $dv_y/dt=-g$ desde $t_0$:

$$v_y(t)-v_{0y}=-g(t-t_0).$$

La segunda integración da $y-y_0=v_{0y}(t-t_0)-g(t-t_0)^2/2$. El máximo de $y$ ocurre cuando $dy/dt=0$ y $d^2y/dt^2=-g<0$.

En la cima, velocidad vertical cero no significa aceleración cero. Si $g$ varía significativamente con la altura, deja de ser MRUV y estas formas no son exactas.

## Ejemplo resuelto

En $t=0$ se lanza una pelota verticalmente hacia arriba desde $y_0=1\,\mathrm m$ con $v_{0y}=+10\,\mathrm{m/s}$. **Calculá el tiempo de subida, la altura máxima sobre el suelo, el tiempo hasta tocar el suelo y la velocidad justo antes del impacto.** Llega a la cima en $1\,\mathrm s$ y a $y_{\max}=6\,\mathrm m$. Para tocar el suelo:

$$0=1+10t-5t^2\quad\Rightarrow\quad t=\frac{10+\sqrt{120}}{10}\approx2{,}095\,\mathrm s.$$

La otra raíz es negativa y no pertenece al movimiento posterior al lanzamiento. La velocidad de llegada es aproximadamente $-10{,}95\,\mathrm{m/s}$.

## Ejercicios

1. En $t=0$ se suelta una pelota desde el reposo a $20\,\mathrm m$ sobre el suelo. Hallá el tiempo de caída y la rapidez justo antes del impacto, usando el modelo ideal de esta nota.
2. En $t=0$ se lanza un objeto verticalmente hacia arriba con velocidad inicial $+20\,\mathrm{m/s}$. Hallá el tiempo hasta la cima, la altura ganada respecto del punto de lanzamiento y el tiempo total hasta regresar a ese mismo nivel.
3. ¿Cuáles son velocidad y aceleración en la cima del ejercicio anterior?

{{< details title="Resultados" >}}

1. $2\,\mathrm s$ y $20\,\mathrm{m/s}$.
2. $2\,\mathrm s$, $20\,\mathrm m$ y $4\,\mathrm s$.
3. $v_y=0$ y $a_y=-10\,\mathrm{m/s^2}$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
