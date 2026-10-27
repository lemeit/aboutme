+++
aliases = ["/projects/seres-termicos/libro/entropia/"]
title = "La dirección del cambio"
description = "Del equilibrio térmico al cambio de entropía del conjunto."
url = "/projects/simus/bestiario/entropia/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 5
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 4"
[build]
list = "never"
+++

Dos cuerpos aislados del exterior intercambian energía hasta acercarse al equilibrio. Para un cuerpo de capacidad térmica constante, el cambio de entropía entre dos estados es:

$$\Delta S=C\ln\left(\frac{T_f}{T_i}\right).$$

Las temperaturas de esta razón se expresan en **kelvin**. La fórmula usa una trayectoria reversible de referencia entre estados; no afirma que el contacto real sea reversible.

## Qué observar

Seguí los cambios de entropía de A y B y luego su suma. Un cuerpo puede perder entropía mientras aumenta la del conjunto aislado.

## Modelo y límites

Cada cuerpo permanece uniforme; no hay trabajo ni cambio de fase. Esta actividad amplía el contacto del capítulo 1: no agrega organismos ni una definición de vida.

## Entropía de cada cuerpo

Para capacidad constante y sin cambio de fase, integrar $dS=C\,dT/T$ entre los estados inicial y final da:

$$\Delta S_A=C_A\ln\frac{T_A}{T_{A0}},\qquad \Delta S_B=C_B\ln\frac{T_B}{T_{B0}}.$$

Las temperaturas dentro del logaritmo son **absolutas**: en esta escena se convierten sumando 273,15 a los valores en °C. Esta integral calcula una diferencia de estado mediante un camino reversible de referencia; no afirma que el contacto real sea reversible.

Con potencia de A hacia B $\dot Q=G(T_A-T_B)$:

$$\frac{dS_{\mathrm{total}}}{dt}=\dot Q\left(\frac1{T_B}-\frac1{T_A}\right)=G\frac{(T_A-T_B)^2}{T_AT_B}\ge0.$$

El cuadrado y las temperaturas absolutas positivas explican el signo. Mientras A pierde entropía, B gana una cantidad mayor; en equilibrio la producción instantánea llega a cero. **Ejemplo ilustrativo:** dos capacidades de 100 J/K, inicialmente a 353,15 K y 293,15 K, equilibran a 323,15 K. El cambio conjunto es $100\ln(323{,}15/353{,}15)+100\ln(323{,}15/293{,}15)\approx0{,}866$ J/K. El balance energético es cero para el conjunto, pero su cambio de entropía es positivo.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v03-entropia.html" title="Capítulo 4 — La dirección del cambio" height="1100" >}}
