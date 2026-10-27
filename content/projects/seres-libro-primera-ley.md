+++
aliases = ["/projects/seres-termicos/libro/primera-ley/"]
title = "La energía cruza la frontera"
description = "Distinguir calor, trabajo y energía interna."
url = "/projects/simus/bestiario/primera-ley/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 4
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 3"
[build]
list = "never"
+++

Elegí primero el sistema y su frontera. Con $Q>0$ recibido y $W>0$ realizado por el sistema, sin cambios de energías cinética y potencial macroscópicas:

$$\Delta U=Q-W.$$

## Qué observar

Compará el calor acumulado, el trabajo acumulado y la variación de energía interna. Verificá sus signos: recibir calor y realizar trabajo no tienen el mismo efecto en el balance.

## Modelo y límites

La actividad prescribe transferencias para mostrar su contabilidad. No resuelve un motor ni deduce esas transferencias a partir de un gas microscópico.

## Del balance instantáneo a las curvas

Con la convención indicada, la tasa de energía interna es $dU/dt=\dot Q-\dot W$. Si las dos tasas son constantes, integrar desde el comienzo da:

$$Q(t)=\dot Q\,t,\qquad W(t)=\dot W\,t,\qquad \Delta U(t)=(\dot Q-\dot W)t.$$

**Ejemplo ilustrativo:** recibir 80 W y entregar 30 W de trabajo deja una tasa neta de 50 W. No son tres aportes independientes: la tercera curva es la diferencia de las otras dos.

| Tiempo (s) | Calor recibido (J) | Trabajo realizado (J) | Variación interna (J) |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 1 | 80 | 30 | 50 |
| 10 | 800 | 300 | 500 |

Una tasa neta negativa significa que disminuye $U$ respecto del inicio; no demuestra que la energía interna absoluta sea negativa. Las curvas no permiten calcular temperatura sin especificar además una relación entre $U$ y el estado del sistema.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v02-primera-ley.html" title="Capítulo 3 — La energía cruza la frontera" height="1100" >}}
