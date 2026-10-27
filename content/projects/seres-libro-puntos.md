+++
aliases = ["/projects/seres-termicos/libro/puntos/"]
title = "Mirar sin halos"
description = "Comparar el render volumétrico con puntos del mismo estado."
url = "/projects/simus/bestiario/puntos/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 23
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 22"
[build]
list = "never"
+++

Una vista simultánea muestra centros u órganos sin el resplandor del render. Permite comprobar qué parte de una figura corresponde a datos y qué parte a su representación.

## Qué observar

Identificá un cuerpo en la vista volumétrica y en los puntos. Compará su posición, partes internas y evolución sin atribuir al halo una interacción que el código no calcula.

## Modelo y límites

Los puntos representan cuerpos u órganos, no moléculas de un gas. Esta versión cambia la observación del estado, no añade por ese solo hecho una nueva ley física.

## La física se conserva

El intercambio y el presupuesto son los de [Nacer y extinguirse](/projects/simus/bestiario/reservas/), donde se desarrollan sus ecuaciones y un cálculo completo. Para recordar la separación:

$$q=G(\theta_o-\theta_m),\qquad \Delta\theta_o=-q\delta t/C,\qquad \sum_c\Delta V\Delta\theta_c=q\delta t.$$

El signo positivo de $q$ calienta el medio y enfría al órgano; invertir la diferencia invierte ambos cambios. El controlador consume reserva mediante $|P_k|$ y el medio difunde con seis vecinos. Esta versión no añade un término físico por dibujar puntos.

## Qué representan los puntos y el volumen

| Representación | Dato del que procede | Cómo interpretarla |
| --- | --- | --- |
| Centro de un ser | Vector de posición del individuo | Es una posición del modelo, no una molécula. |
| Órganos | Posiciones y estados de sus siete órganos | La articulación es una regla de geometría. |
| Vóxeles luminosos | Campo térmico almacenado | Un píxel acumula contribuciones en profundidad. |
| Corte científico | Valores sobre un plano de la malla | Permite comparar estados locales con una escala fija. |

La intensidad no es proporcional sin más a la temperatura de un único órgano. Si un píxel recibe contribuciones $\mathbf c_1,\ldots,\mathbf c_M$, la composición aditiva suma esas contribuciones antes de la conversión final a pantalla: superponer más muestras puede aumentar el brillo sin aumentar cada temperatura local.

El recuadro de puntos ayuda a distinguir geometría y campo. No muestra partículas microscópicas ni una estructura de cuatro dimensiones. Compará en la tabla inferior el estado de un mismo vóxel antes y después de avanzar; cambiar de representación o cámara no es, por sí solo, una transferencia de energía.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_5.html" title="Capítulo 22 — Mirar sin halos" height="1100" >}}
