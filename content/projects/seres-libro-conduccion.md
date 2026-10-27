+++
aliases = ["/projects/seres-termicos/libro/conduccion/"]
title = "Una pendiente conduce calor"
description = "Temperatura frente a posición y conducción estacionaria."
url = "/projects/simus/bestiario/conduccion/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 6
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 5"
[build]
list = "never"
+++

Mantenemos los extremos de una barra a temperaturas fijas. En un medio homogéneo, la ley de Fourier en una dimensión relaciona flujo y pendiente:

$$q_x=-k\frac{dT}{dx},\qquad P=Aq_x.$$

$q_x$ es flujo de calor por área en W/m², $k$ conductividad en W/(m·K), $A$ sección en m² y $P$ potencia en W.

## Qué observar

Compará la pendiente del perfil $T(x)$ y el sentido de la transferencia. X representa posición, no tiempo. Un perfil que no cambia con el tiempo puede sostener un flujo de energía.

## Modelo y límites

La barra intercambia con reservorios que mantienen sus extremos. Es un estado estacionario, no un sistema aislado que termina necesariamente uniforme. El anexo de la recta permite volver sobre esta diferencia.

## Del gradiente a la potencia

Para una barra homogénea en régimen estacionario, sin fuentes y con conductividad constante, $d^2T/dx^2=0$. Integrar dos veces produce una recta. Al fijar los extremos:

$$T(x)=T_A+\frac{T_B-T_A}{L}x,\qquad \frac{dT}{dx}=\frac{T_B-T_A}{L}.$$

Fourier relaciona ese gradiente con la densidad de flujo $j_x=-k\,dT/dx$ y la potencia $\dot Q=A j_x$:

$$\dot Q=-kA\frac{T_B-T_A}{L}.$$

**Ejemplo ilustrativo:** $T_A=80$ °C, $T_B=20$ °C, $L=1$ m, $k=1$ W/(m·K), $A=0{,}01$ m². El gradiente es $-60$ K/m, la densidad de flujo es $+60$ W/m² y la potencia es $+0{,}6$ W hacia la derecha. Duplicar el área duplica la potencia, pero no la densidad de flujo. El perfil estacionario no necesita cambiar con el tiempo para conducir energía.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v05-conduccion-fourier.html" title="Capítulo 5 — Una pendiente conduce calor" height="1100" >}}
