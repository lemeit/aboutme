+++
aliases = ["/projects/seres-termicos/libro/fuentes-articuladas/"]
title = "Frío y fuego articulados"
description = "Sostener anatomías mediante fuentes térmicas externas."
url = "/projects/simus/bestiario/fuentes-articuladas/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 21
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 20"
[build]
list = "never"
+++

Las fuentes articuladas mantienen estados calientes o fríos respecto de una referencia. La persistencia de la forma requiere aportes que no deben ocultarse en el balance.

## Qué observar

Compará el campo pasivo con la respuesta de órganos sostenidos por sus fuentes. Distinguí una temperatura relativa negativa de una temperatura absoluta negativa.

## Modelo y límites

El sistema es abierto y las fuentes son externas. Una forma sostenida no implica que el cuerpo haya obtenido por sí mismo la reserva necesaria.

## El órgano como fuente prescrita

Cada órgano tiene estado $u_k$, dos vecinos en su cadena y una consigna que oscila. La regla implementada es:

$$g_k=b_k[1+0{,}23\ell\sin(1{,}3t+0{,}6k+B)],$$
$$u_k'=u_k+\Delta t\{0{,}4(u_{k-1}+u_{k+1}-2u_k)+0{,}8(g_k-u_k)\}.$$

$b_k$ es la consigna basal positiva o negativa, $\ell$ el control de latido y $B$ el índice del cuerpo. En cada extremo de una cadena se repite el propio valor como vecino faltante. Primero se copian los estados anteriores: un órgano no lee a su vecino parcialmente actualizado.

La suma de diferencias suaviza la cadena; el segundo término restaura la consigna. **Ejemplo ilustrativo:** con $u_k=0{,}4$, vecinos $0{,}2$ y $0{,}6$, $g_k=0{,}8$ y $\Delta t=0{,}04$, el acoplamiento es cero y el incremento es $0{,}04\cdot0{,}8(0{,}8-0{,}4)=0{,}0128$; queda $u_k'=0{,}4128$.

## Del órgano al campo tridimensional

El órgano añade una gaussiana de amplitud proporcional a $0{,}36P u_k'\Delta t$, donde $P$ es el control de potencia. Su ancho depende de si es el primer órgano de la cadena. El campo difunde con seis vecinos en $56^3$ celdas y subpasos $r=\alpha\delta t/h^2\le0{,}15$.

Después del depósito se aplica la relajación exacta de $\dot\theta=-0{,}22\theta$ durante el paso:

$$\theta'=e^{-0{,}22\Delta t}\theta.$$

| Etapa | Qué cambia |
| --- | --- |
| Difusión | Redistribuye el campo existente y permite pérdidas por bordes. |
| Órganos y fuentes | Actualiza los órganos e inyecta el aporte prescrito. |
| Relajación | Multiplica el campo resultante por el factor exponencial. |

El orden es el del programa, no una suma simultánea de todos los términos. Con $\Delta t=0{,}04$, el factor de relajación es aproximadamente $0{,}99124$. Las fuentes y la relajación tienen contadores firmados de aporte y pérdida; no se resta al órgano exactamente el calor depositado. No hay aún una reserva individual finita.

## Dejar de sostener la forma

Al apagar las fuentes se congelan sus órganos y su movimiento prescrito y también se desactiva esa relajación. Queda la difusión pasiva del campo acumulado. La anatomía que se disuelve no se borra mediante una transparencia programada. El volumen luminoso sigue siendo una composición de muestras; el corte permite examinar un plano local.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_3.html" title="Capítulo 20 — Frío y fuego articulados" height="1100" >}}
