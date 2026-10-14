+++
title = "Sistemas de referencia. Posición, distancia y desplazamiento"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Sistema de coordenadas, posición, distancia escalar y desplazamiento vectorial."
tags = ["cap03", "cinemática", "posición", "desplazamiento", "distancia", "sistemas de referencia", "vectores"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 182–183"
figuras_estado = "2 figuras extraídas; ejemplo enlazado a Rapidez y velocidad"
visual_estado = "Pendiente: inspección visual y auto-render en navegador; LaTeX validado"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 182–183. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=182).

## Objetivos de aprendizaje

- Elegir un origen, un eje, una unidad y un sentido positivo antes de asignar signos.
- Distinguir una posición de un cambio de posición y de la longitud de un recorrido.
- Describir una misma situación en distintas coordenadas sin cambiar el movimiento físico.

## El sistema que usamos para describir el movimiento

Un **sistema de coordenadas** permite indicar dónde está un objeto respecto de un punto elegido, el **origen**. En movimiento rectilíneo alcanza con un eje, por ejemplo $x$, una escala en metros y un sentido positivo. El otro sentido será negativo. Un **sistema de referencia** agrega el observador y los relojes con los que se registran posiciones y tiempos.

Antes de resolver un problema, dibujá el eje e indicá qué punto es $x=0$. Si elegís el este como positivo, una posición de $-5\ \mathrm m$ está cinco metros al oeste del origen. El signo no indica que el objeto esté moviéndose: podría estar quieto, acercándose al origen o alejándose.

La elección es convencional. Otro observador puede ubicar el origen en otro lugar o invertir el eje. Sus números serán diferentes, pero una descripción coherente dará las mismas predicciones sobre encuentros, tiempos y distancias.

## Posición: una coordenada con signo

La posición $x(t)$ indica la ubicación en cada instante. En una recta puede ser positiva, negativa o cero. En dos dimensiones se usan $(x,y)$ o una distancia al origen y un ángulo $(r,\theta)$; consultá [coordenadas polares]({{< ref "/notes/notas-fisica/cap02-matematicas/coordenadas-polares-cilindricas-esfericas.md" >}}).

**Aclaración de la adaptación:** el original denomina a la posición un «vector de dimensión cero». Aquí usamos la formulación habitual: $\vec r$ es el vector posición respecto de un origen y $x$ es su componente en un eje. Un punto geométrico no tiene extensión, pero eso no convierte al vector posición en un vector de dimensión cero.

{{< figura src="/images/diagramas/cap03_posicion-eje_pp183.png" alt="Posiciones a ambos lados del origen." width="420" caption="Posiciones a ambos lados del origen." source="Jeff Bigler, edición octubre de 2025, p. 183. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

## Desplazamiento: dónde termina respecto de dónde empezó

$$\Delta x=x_f-x_i$$

Los subíndices $i$ y $f$ significan inicial y final. Un desplazamiento positivo indica que la posición final es mayor que la inicial; no obliga a que todo el trayecto se haya realizado en sentido positivo.

Por ejemplo, desde $x_i=3\ \mathrm m$ hasta $x_f=-4\ \mathrm m$:

$$\Delta x=(-4)-(+3)=-7\ \mathrm m$$

{{< figura src="/images/diagramas/cap03_desplazamiento-negativo_pp183.png" alt="Desplazamiento de siete unidades en sentido negativo." width="420" caption="Desplazamiento de siete unidades en sentido negativo." source="Jeff Bigler, edición octubre de 2025, p. 183. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Al trasladar el origen, ambas posiciones cambian en la misma cantidad y su diferencia se conserva. Al invertir el eje, cambia el signo de $\Delta x$, pero no su módulo ni la distancia recorrida.

## Distancia: cuánto camino se recorrió

La **distancia recorrida** $d$ es la longitud total del camino. Es escalar y no negativa. El desplazamiento depende solo de los extremos; la distancia depende también de la trayectoria.

| Magnitud | Información que expresa | ¿Puede ser negativa? |
|---|---|---|
| Posición $x$ | Ubicación respecto del origen | Sí |
| Desplazamiento $\Delta x$ | Cambio neto de posición | Sí, como componente en 1D |
| Módulo $|\Delta x|$ | Separación entre los extremos | No |
| Distancia $d$ | Longitud de todo el recorrido | No |

Siempre se cumple $d\ge |\Delta x|$. La igualdad corresponde a un recorrido recto sin retrocesos; si hay cambios de sentido, deben sumarse las longitudes de los tramos.

**Ejemplo del original:** recorrer 12 unidades al este y 5 al norte da una distancia de 17 unidades y un desplazamiento de módulo 13. El diagrama y la aclaración de su ángulo están en [Rapidez y velocidad]({{< ref "/notes/notas-fisica/cap03-cinematica-1d/velocidad-rapidez.md" >}}). No corresponde sumar componentes perpendiculares para obtener el módulo del desplazamiento.

**Ejemplo propio en una recta:** una persona pasa de $x=1$ a $x=6$ y después vuelve a $x=3$, en metros. Recorre $5+3=8\ \mathrm m$, aunque su desplazamiento es $3-1=2\ \mathrm m$. Si regresara a $x=1$, el desplazamiento sería cero y la distancia sería $10\ \mathrm m$.

## Cómo leer «distancia» en un enunciado

Bigler advierte que el lenguaje cotidiano a veces usa «distancia» para referirse al desplazamiento. En esta adaptación se reserva $d$ para la longitud del camino y $\Delta x$ para el desplazamiento. Si el problema pide una dirección o una posición final, revisá cuál de las dos magnitudes necesitás; las unidades de metros por sí solas no las distinguen.

## Actividad y comprobaciones

La propuesta de caminar en ambos sentidos y volver al punto de partida procede del original. Marcá un origen en el piso, elegí un sentido positivo y registrá cada tramo antes de calcular.

1. Una corredora completa una vuelta de 400 m y termina donde empezó. ¿Cuánto valen $d$ y $\Delta\vec r$?
2. ¿Qué podés afirmar del movimiento si únicamente sabés que $x=-5\ \mathrm m$?
3. Recalculá el ejemplo propio al invertir el eje. ¿Qué cambia y qué se conserva?

**Comprobación:** en la vuelta completa, $d=400\ \mathrm m$ y $\Delta\vec r=\vec0$. Una posición negativa no permite deducir el sentido de movimiento. Al invertir el eje cambian los signos de las coordenadas y del desplazamiento; la distancia de 8 m se conserva.

---

Adaptado de Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones y actividades propias se identifican en el texto.
