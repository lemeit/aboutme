+++
aliases = ["/projects/seres-termicos/libro/reaccion-difusion/"]
title = "Las manchas encuentran una forma"
description = "Explorar la rama Gray–Scott y sus campos de concentración."
url = "/projects/simus/bestiario/reaccion-difusion/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 12
book_part = "patrones"
book_part_title = "Parte II · Del campo a las formas"
book_label = "Capítulo 11"
[build]
list = "never"
+++

Aquí cambiamos de modelo. Gray–Scott combina difusión, reacción y alimentación externa para producir patrones de dos campos, $u$ y $v$.

## Qué observar

Compará regímenes y semillas iniciales: pueden aparecer manchas, filamentos, división de patrones o desaparición. No todos los parámetros producen el mismo resultado.

## Modelo y límites

Los campos son concentraciones abstractas, **no temperaturas**. Una mancha que se divide no demuestra reproducción biológica ni define por sí sola la identidad de un individuo. Esta rama amplía la exploración de formas; no es una deducción de la ecuación del calor.

## Dos tablas de números, una imagen

Cada posición de la malla de 256 × 192 celdas guarda dos variables: $u$ y $v$. Son concentraciones adimensionales del modelo. La imagen colorea **$v$**; $u$ participa en el cálculo aunque no tenga un color independiente.

El modelo combina dos procesos. La difusión relaciona celdas vecinas; la reacción modifica las variables dentro de una misma celda:

$$
\frac{\partial u}{\partial t}
=D_u\nabla^2u-uv^2+F(1-u),
$$

$$
\frac{\partial v}{\partial t}
=D_v\nabla^2v+uv^2-(F+k)v.
$$

El término $uv^2$ consume $u$ y produce $v$. La alimentación $F(1-u)$ repone $u$; el término $(F+k)v$ retira $v$. Alimentación y retirada describen un sistema abierto. Esta rama se basa en el modelo Gray–Scott, estudiado por [John E. Pearson](https://arxiv.org/abs/patt-sol/9304003).

## Cómo se obtiene el siguiente valor

1. **Elegir una celda y leer sus vecinos.** Se forman dos laplacianos discretos:

$$
L_u=u_{\rm arriba}+u_{\rm abajo}
+u_{\rm izquierda}+u_{\rm derecha}-4u,
$$

y una expresión igual para $L_v$.

2. **Calcular la reacción local** $R=uv^2$ con los valores anteriores de esa celda.
3. **Sumar los términos de cada variable:**

$$
f_u=0{,}21L_u-R+F(1-u),
\qquad
f_v=0{,}05L_v+R-(F+k)v.
$$

Los coeficientes corresponden a esta implementación, con separación de malla tomada como unidad.

4. **Avanzar con Euler explícito**, aquí con $\Delta t=1$:

$$
u_{\rm bruto}^{n+1}=u^n+\Delta t\,f_u,
\qquad
v_{\rm bruto}^{n+1}=v^n+\Delta t\,f_v.
$$

5. **Aplicar el límite del prototipo y guardar.** El programa recorta ambos resultados a $[0,1]$ y los almacena en Float32. Ese recorte es una decisión numérica de esta implementación, no un término de las ecuaciones continuas. La tabla muestra el resultado bruto y el valor finalmente guardado.
6. **Repetir en toda la malla y colorear $v$.** Hay bordes periódicos: el vecino que queda fuera por un lado se lee del lado opuesto. No son paredes aislantes.

Los valores nuevos se escriben en buffers separados. La reproducción normal agrupa ocho pasos por cuadro; el avance manual ejecuta uno. El contador representa pasos del modelo y no segundos de una reacción química medida.

## Reconstruir un píxel

En **Del cálculo al color**, pausá para leer una actualización real. La primera celda examinada se elige en una región con $v$ alto de esa ejecución, para que los términos no sean todos nulos.

Compará los vecinos, la difusión, la reacción y los aportes externos. Después comprobá el resultado guardado y su muestra RGB. Cambiá $F$ o $k$ y avanzá otra vez: la tabla registra los parámetros que efectivamente se usaron en cada paso.

Las semillas incluyen ruido. Dos reinicios pueden generar patrones diferentes aunque conserven los mismos parámetros. Los últimos ocho registros pertenecen a la celda seleccionada, no son promedios de la imagen.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v04-grayscott.html" title="Capítulo 11 — Las manchas encuentran una forma" height="1100" >}}
