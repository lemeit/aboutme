+++
aliases = ["/projects/seres-termicos/libro/calor-capacidad/"]
title = "El calor deja una huella"
description = "Relacionar calor recibido, masa y cambio de temperatura."
url = "/projects/simus/bestiario/calor-capacidad/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 3
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 2"
[build]
list = "never"
+++

Una fuente entrega energía a un cuerpo uniforme. Con calor específico constante, sin trabajo ni cambio de fase:

$$Q=mc\,\Delta T=C\,\Delta T.$$

$m$ es masa en kg, $c$ calor específico en J/(kg·K), $C$ capacidad térmica en J/K y $Q$ energía recibida por calor en J. La variación de temperatura puede expresarse en K o °C: el incremento tiene el mismo tamaño.

## Qué observar

Compará el cambio de temperatura al recibir la misma energía con masas diferentes. Después mantené la masa y compará materiales. Identificá magnitudes y unidades en la gráfica antes de interpretar su pendiente.

## Modelo y límites

La temperatura es uniforme en cada instante. La ecuación no describe una transición de fase ni incluye trabajo mecánico.

## De la energía recibida a la temperatura

Con potencia constante $P$, durante un tiempo $t$ se reciben $Q=Pt$. La capacidad térmica es $C=mc$ y, sin pérdidas ni trabajo, $dU=C\,dT=\delta Q$. Al integrar desde $T_0$:

$$\int_{T_0}^{T}C\,dT=\int_0^tP\,dt,\qquad C(T-T_0)=Pt,\qquad T(t)=T_0+\frac{P}{mc}t.$$

La pendiente $P/(mc)$ tiene unidades K/s. **Ejemplo ilustrativo:** $m=0{,}1$ kg, $c=1000$ J/(kg·K), $P=100$ W y $T_0=20$ °C dan $C=100$ J/K y una subida de 1 K/s. A los 10 s, $Q=1000$ J y $T=30$ °C; duplicar la masa reduce a la mitad la subida, sin cambiar la energía recibida. La tabla de la escena usa los parámetros elegidos, no estos datos si modificás los controles.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v01-calor-capacidad.html" title="Capítulo 2 — El calor deja una huella" height="1100" >}}
