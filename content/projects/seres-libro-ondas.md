+++
title = "Las ondas recorren el medio"
description = "Explorar activación, recuperación y medios excitables."
url = "/projects/seres-termicos/libro/ondas/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 13
book_part = "patrones"
book_part_title = "Parte II · Del campo a las formas"
book_label = "Capítulo 12"
[build]
list = "never"
+++

FitzHugh–Nagumo combina un campo de activación y otro de recuperación. Es una rama diferente de Gray–Scott, aunque ambas puedan dibujarse con colores semejantes.

## Qué observar

Seguí el avance de una perturbación y la región que queda detrás. Según parámetros y condiciones iniciales, pueden aparecer frentes, espirales u otros regímenes.

## Modelo y límites

Activación y recuperación no son temperaturas termodinámicas ni individuos contables. Las ondas son estados de un medio excitable; no equivalen a cuerpos que transportan su propia anatomía.

## Activación y recuperación en cada celda

La malla de 256 × 192 celdas guarda dos variables adimensionales. $u$ representa activación; $v$, recuperación. El color se calcula a partir de **$u$**. Ninguna de las dos es una temperatura en grados.

Esta implementación usa la siguiente variante de FitzHugh–Nagumo:

$$
\frac{\partial u}{\partial t}
=D_u\nabla^2u+u-\frac{u^3}{3}-v,
$$

$$
\frac{\partial v}{\partial t}
=\varepsilon(u+\beta-\gamma v).
$$

La primera ecuación combina acoplamiento espacial y respuesta local no lineal. La segunda modifica la recuperación en cada celda; aquí **$v$ no difunde**. Existen otras convenciones del modelo, descritas por [Izhikevich y FitzHugh](https://www.scholarpedia.org/article/FitzHugh-Nagumo).

## Construir una actualización

1. **Leer $u$, $v$ y los cuatro vecinos de $u$** del mismo estado anterior.
2. **Calcular el laplaciano discreto:**

$$
L_u=u_{\rm arriba}+u_{\rm abajo}
+u_{\rm izquierda}+u_{\rm derecha}-4u.
$$

Los bordes son periódicos: el campo continúa por el lado opuesto de la malla.

3. **Separar las contribuciones:**

$$
\text{difusión}=0{,}5L_u,\qquad
\text{activación}=u-\frac{u^3}{3}-v,
$$

$$
\text{recuperación}=\varepsilon(u+\beta-\gamma v).
$$

4. **Multiplicar por el paso temporal del modelo**, $\Delta t=0{,}1$, y sumar al valor anterior:

$$
u^{n+1}=u^n+0{,}1\left(0{,}5L_u+u^n-\frac{(u^n)^3}{3}-v^n\right),
$$

$$
v^{n+1}=v^n+0{,}1\,\varepsilon(u^n+\beta-\gamma v^n).
$$

5. **Guardar en Float32 y dibujar.** La tabla permite comparar esa suma con el valor realmente almacenado. A diferencia de Gray–Scott, este paso no recorta los campos a $[0,1]$.

## Del número a la onda visible

Para elegir el color, el programa transforma $u$ mediante $(u+2)/4$ y una paleta por tramos. Esa elección de colores ayuda a distinguir estados del modelo; no calcula radiación ni transporte de materia.

Una onda aparece cuando distintas celdas cambian de activación en una secuencia espacial. La imagen completa resulta de repetir el mismo cálculo local sobre toda la malla. El dibujo de una espiral depende de parámetros y condiciones iniciales: sembrar un frente roto no garantiza el mismo régimen en todos los casos.

La reproducción agrupa ocho pasos por cuadro. **Avanzar un paso** ejecuta una sola actualización, de duración $0{,}1$ en unidades del modelo, sin equipararla a una décima de segundo físico.

## Leer una actualización real

Pausá en **Del cálculo al color**. Elegí una celda y examiná sus vecinos, la difusión de $u$, las respuestas locales y los dos resultados. La muestra RGB corresponde al $u$ guardado. El historial permite seguir esa celda cuando se activa y se recupera.

Cambiar la celda observada no estimula el medio. En cambio, hacer clic en la imagen conserva la interacción original que añade una perturbación.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v05-fhn.html" title="Capítulo 12 — Las ondas recorren el medio" height="1100" >}}
