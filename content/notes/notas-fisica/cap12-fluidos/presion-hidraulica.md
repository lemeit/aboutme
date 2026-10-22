+++
title = "Presión hidráulica y principio de Pascal"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 3
description = "Transmisión de un incremento de presión, elevadores y conservación de volumen y trabajo."
tags = ["cap12", "fluidos"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 558–560"
figuras_estado = "1 figura recuperada del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Hydraulic Pressure», Bigler, edición de octubre de 2025, [pp. 558–560](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=558).

## Un incremento de presión transmitido por un fluido

El principio de Pascal establece que un incremento de presión aplicado a un fluido confinado en equilibrio se transmite a su interior y a las paredes. En un modelo de dos pistones a la misma altura, sin pérdidas ni rozamiento:

$$P_1=P_2,\qquad\frac{F_1}{A_1}=\frac{F_2}{A_2}.$$

Las fuerzas son las cargas netas que producen la diferencia de presión, después de tener en cuenta la presión exterior y, cuando corresponda, el peso de los pistones.

{{< figura src="/images/diagramas/cap12_elevador_pp559.png" width="560" alt="Elevador hidráulico y relación entre áreas y fuerzas." caption="Elevador hidráulico y relación entre áreas y fuerzas." source="Jeff Bigler, edición octubre de 2025, p. 559. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si $A_2$ es cien veces $A_1$, la fuerza disponible en el pistón grande es cien veces la aplicada al pequeño. La ventaja mecánica ideal es:

$$\frac{F_2}{F_1}=\frac{A_2}{A_1}.$$

{{< nota-adaptacion pagina="558" origen="Texto del original: igualdad de presión en todo el fluido" >}}
La presión no es igual en todos los puntos de un líquido bajo gravedad: aumenta con la profundidad. Lo que se transmite sin disminución en el modelo estático es el **incremento aplicado**. La igualdad directa entre presiones de ambos pistones supone igual altura o corrección de la diferencia hidrostática.
{{< /nota-adaptacion >}}

## Por qué no se obtiene energía gratis

Al mover un pistón debe desplazarse el mismo volumen de líquido al otro lado, si el fluido es incompresible y no hay fugas:

$$A_1d_1=A_2d_2.$$

Por tanto:

$$\frac{d_1}{d_2}=\frac{A_2}{A_1}.$$

Combinando con la relación de fuerzas:

$$F_1d_1=F_2d_2.$$

La ganancia en fuerza se paga con mayor recorrido de entrada. En la figura de la p. 559, 150 N aplicados sobre 0,01 m² producen una sobrepresión de 15 000 Pa; en 1,0 m² se obtienen 15 000 N. Para elevar la carga 10 cm, el pistón pequeño debe recorrer idealmente 10 m.

## Ejemplo de dimensionamiento

Una fuerza de 25 N actúa sobre $A_1=0{,}50\,\mathrm{m^2}$. Se necesita equilibrar una carga de 500 N:

$$\frac{25}{0{,}50}=\frac{500}{A_2},$$
$$A_2=\frac{500(0{,}50)}{25}=10\,\mathrm{m^2}.$$

Los valores corresponden al ejercicio del libro, aunque las áreas sean grandes comparadas con aparatos cotidianos. El área, no el radio, aparece en la proporcionalidad; si se duplican radios, las áreas se cuadruplican.

## Ejercicios de la p. 560

1. Una carga de 700 N está sobre un pistón de 1 m². El pistón de entrada tiene área 0,10 m². Hallá la fuerza de equilibrio ideal.
2. El libro propone comparar una fuerza de 10 N sobre la sección de una manguera de radio 0,015 m con la fuerza que produciría esa misma presión sobre una base de radio 0,60 m. Calculá esa extrapolación ideal.

{{< details title="Resultados y alcance" >}}
1. $F_1=700(0{,}10)/1=70\,\mathrm N$. Para iniciar un ascenso real deben considerarse rozamientos y las condiciones de movimiento.
2. La razón de áreas es $(0{,}60/0{,}015)^2=1600$; la fuerza extrapolada es $10(1600)=16\,000\,\mathrm N$.
{{< /details >}}

{{< nota-adaptacion pagina="560" origen="Texto del original: predicción de carga de un aerodeslizador" >}}
El segundo cálculo aparece aplicado a una aspiradora que impulsa aire bajo un aerodeslizador. **No basta** para predecir su capacidad real: el aire está en flujo, puede escapar y la presión bajo la base depende del funcionamiento del soplador y de las fugas. Se conserva la razón de áreas como ejercicio algebraico condicionado, sin presentar 16 000 N como capacidad comprobada de ese equipo.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.