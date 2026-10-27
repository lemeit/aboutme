+++
aliases = ["/projects/seres-termicos/libro/defensa/"]
title = "Resistir hasta agotarse"
description = "Explorar amenazas externas y respuestas de control con costes."
url = "/projects/simus/bestiario/defensa/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 24
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 23"
[build]
list = "never"
+++

Una perturbación externa activa respuestas programadas de regulación, escape o ahorro. Cada acción tiene costes en la reserva del individuo.

## Qué observar

Compará una situación sin amenaza con otra perturbada. Seguí la reserva, el estado del cuerpo y los indicadores del evento; una respuesta puede prolongar la existencia sin volver ilimitado el presupuesto.

## Modelo y límites

La adaptación es una hipótesis de control, no una demostración de voluntad, aprendizaje autónomo ni vida emergente. Es la última versión implementada conservada en este recorrido; las propuestas posteriores siguen siendo propuestas.

## La base y los términos nuevos

El intercambio $q=G(\theta_o-\theta_m)$, el depósito normalizado en el medio y las capacidades térmicas conservan la lógica de [Nacer y extinguirse](/projects/simus/bestiario/reservas/). Se añaden amenazas y respuestas programadas; no cambia el significado del calor firmado ni se convierte la reserva en temperatura.

## Un baño externo localizado

La amenaza térmica tiene posición $\mathbf x_b$, ancho $\sigma$, intensidad $P$ y estado impuesto $\theta_b$. Su peso local es:

$$w(\mathbf x)=\exp[-|\mathbf x-\mathbf x_b|^2/(2\sigma^2)].$$

La celda se acerca al baño mediante una relajación exponencial:

$$\theta'=\theta_b+(\theta-\theta_b)\exp[-0{,}75P w\Delta t].$$

Se obtiene al resolver $d(\theta-\theta_b)/dt=-0{,}75Pw(\theta-\theta_b)$ con los parámetros fijos durante el paso. El intercambio de calor con el campo es $\Delta Q=\Delta V(\theta'-\theta)$; el baño es externo.

**Ejemplo ilustrativo:** centro de la amenaza ($w=1$), $\theta=0{,}2$, $\theta_b=0{,}8$, $P=2$ y $\Delta t=0{,}04$.

| Operación | Resultado aproximado |
| --- | --- |
| Exponente | $-0{,}75(2)(0{,}04)=-0{,}06$ |
| Factor | $e^{-0{,}06}=0{,}941765$ |
| Estado nuevo | $0{,}8+(0{,}2-0{,}8)(0{,}941765)=0{,}234941$ |
| Cambio local | $+0{,}034941$ |

## Extraer reserva es una operación distinta

El sifón no cambia directamente la temperatura: descuenta del presupuesto una cantidad limitada por lo que queda disponible:

$$\Delta E_{\mathrm{extraída}}=\min(E,\,0{,}00035P w\Delta t),\qquad E'=E-\Delta E_{\mathrm{extraída}}.$$

Así nunca extrae más reserva de la disponible. El baño térmico altera $\theta$; el sifón altera $E$. Son perturbaciones diferentes, aun cuando su región visible pueda parecerse.

## Responder tiene un coste

La detección modifica la ganancia del controlador, la consigna térmica, la actividad y la respuesta de movimiento. Su balance reúne:

$$\frac{dE}{dt}=-\sum_k|P_k|-\mu a_{\mathrm{act}}-P_{\mathrm{escape}}-D.$$

Ahorrar reduce actividad y consigna; escapar agrega movimiento y coste mecánico; regular usa la reserva para aproximar los órganos a sus estados objetivo. Las funciones de respuesta y sus umbrales están programados. No son aprendizaje ni selección natural.

Para comparar resultados, mantené las mismas condiciones iniciales y distinguí reserva común, reserva del ser, calor del campo y calor de los órganos. La tabla inferior lee esas magnitudes por separado. Las viñetas y los puntos proyectados ayudan a seguir eventos, pero no agregan fuerzas ni cambian las ecuaciones.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_6.html" title="Capítulo 23 — Resistir hasta agotarse" height="1100" >}}
