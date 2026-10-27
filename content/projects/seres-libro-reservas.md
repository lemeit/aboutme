+++
aliases = ["/projects/seres-termicos/libro/reservas/"]
title = "Nacer y extinguirse"
description = "Incorporar intercambio conservativo y reservas individuales."
url = "/projects/simus/bestiario/reservas/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 22
book_part = "evolucion"
book_part_title = "Parte IV · Evolución del modelo tridimensional"
book_label = "Capítulo 21"
[build]
list = "never"
+++

Se combinan cuerpos articulados, movimiento tridimensional, intercambio con el campo y reservas individuales. La energía térmica firmada y el presupuesto disponible para actuar son variables diferentes.

## Qué observar

Seguí la reserva de un individuo y el estado de sus órganos. Compará las etapas de aparición, desarrollo y extinción con las transferencias que informa el modelo.

## Modelo y límites

Las reglas de nacimiento y conducta están programadas. No sumes indiscriminadamente calor firmado y reserva como si fueran una contabilidad molecular completa. Los balances y sus límites se desarrollan en el anexo físico.

{{< balance-organos >}}

## Movimiento en un baño externo

El centro usa una regla estocástica, no una fuerza que se deduzca de la ecuación del calor:

$$d\mathbf v=(-0{,}45\mathbf v-0{,}007s\nabla\theta)\,dt+\sigma\,d\mathbf W,\qquad d\mathbf x=\mathbf v\,dt.$$

La fricción amortigua la velocidad; el ruido representa agitación de un baño externo; la respuesta al gradiente depende de la polaridad. La difusión de posiciones y las articulaciones son hipótesis adicionales. No se resuelven fluidos ni Navier–Stokes.

## De los vóxeles a la imagen

Esta versión proyecta vóxeles mediante núcleos luminosos suaves y suma aditiva. No oculta geométricamente las muestras que quedan detrás como una superficie opaca. La codificación de textura usa cero en 128, mientras la escala de color fija destaca un intervalo menor. Saturar la imagen no recorta la física. Las viñetas leen eventos y posiciones reales, pero sus rótulos son anotaciones. La tabla inferior permite comparar reserva, órgano y campo sin confundirlos con el brillo.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/seres_termicos_V4_4.html" title="Capítulo 21 — Nacer y extinguirse" height="1100" >}}
