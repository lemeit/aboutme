+++
tags = ["cap02", "matemáticas", "coordenadas", "coordenadas polares", "coordenadas cilíndricas", "coordenadas esféricas"]
title = "Coordenadas polares, cilíndricas y esféricas"
date = "2026-10-13"
draft = false
math = true
weight = 10
description = "Cómo representar una posición y convertir entre sistemas de coordenadas con convenciones explícitas."
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 174–177"
figuras_estado = "2 figuras extraídas y revisadas"
visual_estado = "Verificada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 174–177. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=174).

## Elegir una representación de la posición

En coordenadas cartesianas, un punto se representa mediante componentes $(x,y)$ o $(x,y,z)$ respecto de ejes y un origen. En polares se utiliza la distancia al origen y un ángulo. El sistema apropiado es el que facilita representar las relaciones del problema.

Estas representaciones no cambian la posición física. Cambian los números y las variables que se usan para describirla. Siempre deben fijarse origen, ejes, referencia angular y sentido de ángulos positivos.

## Coordenadas polares

Un punto plano tiene coordenadas $(r,\theta)$, con $r\ge0$ y ángulo medido desde la referencia elegida. En la convención matemática usual de estas notas, 0° corresponde al eje x positivo y los ángulos crecen en sentido antihorario.

El original describe Lynn respecto de Boston como 10 millas a 52° al norte del este. Esa es una descripción polar. Una brújula suele medir rumbo desde el norte y en sentido horario, de modo que el mismo rumbo sería 38° al este del norte. No mezcles las dos referencias.

{{< figura src="/images/diagramas/cap02_coordenadas-boston_pp175.png" width="430" alt="Mapa del ejemplo que ubica Lynn respecto de Boston mediante distancia y ángulo." caption="Ejemplo geográfico de coordenadas polares. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 175. Recorte del original, CC BY-NC-SA 4.0." >}}

## Convertir de cartesianas a polares

$$r=\sqrt{x^2+y^2}$$

La razón $y/x$ ayuda a encontrar el ángulo, pero el cuadrante debe conservarse. Si está disponible, usá $\theta=\operatorname{atan2}(y,x)$. Para $x=0$, determiná el sentido vertical sin dividir por cero. En el origen $r=0$, el ángulo no está determinado.

Para el ejemplo original $(5,12)$:

$$r=\sqrt{5^2+12^2}=13$$

$$\theta=\arctan(12/5)\approx67{,}38^\circ\approx1{,}176\ \mathrm{rad}$$

Se obtiene $(13,67{,}38^\circ)$. En otro cuadrante, el arco tangente simple no bastaría para asignar la dirección.

## Convertir de polares a cartesianas

$$x=r\cos\theta,\qquad y=r\sin\theta$$

Para $(8,25^\circ)$:

$$x=8\cos25^\circ\approx7{,}25,\qquad y=8\sin25^\circ\approx3{,}38$$

Los puntos $(3,60^\circ)$ y $(4,210^\circ)$ de la p. 176 ilustran radios y cuadrantes diferentes. El segundo tiene ambas componentes negativas aunque su radio sea positivo.

{{< figura src="/images/diagramas/cap02_puntos-polares_pp176.png" width="440" alt="Plano polar con los puntos de radio 3 a 60 grados y radio 4 a 210 grados." caption="El radio es positivo; los signos de las componentes dependen del cuadrante. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 176. Recorte del original, CC BY-NC-SA 4.0." >}}

## Coordenadas cilíndricas

Las coordenadas $(r,\theta,z)$ agregan altura a la representación polar de la proyección en el plano horizontal. Aquí $r$ es la distancia al eje z, no la distancia total al origen en tres dimensiones.

$$x=r\cos\theta,\qquad y=r\sin\theta,\qquad z=z$$

Para volver: $r=\sqrt{x^2+y^2}$ y el ángulo se determina por las componentes horizontales. Esta representación resulta útil cuando la simetría se organiza alrededor de un eje.

## Coordenadas esféricas

El original utiliza $(r,\theta,\phi)$: $r$ es distancia al origen, $\theta$ el ángulo horizontal y $\phi$ el ángulo medido desde la dirección vertical positiva. Las convenciones para estas letras cambian entre libros; hay que declararlas.

Con esa elección:

$$x=r\sin\phi\cos\theta$$
$$y=r\sin\phi\sin\theta$$
$$z=r\cos\phi$$

**Desarrollo adicional de esta adaptación:** las fórmulas explicitan la convención descrita por el original. Para $r>0$, $r=\sqrt{x^2+y^2+z^2}$ y $\phi=\arccos(z/r)$. En los puntos del eje vertical, el ángulo horizontal es indeterminado.

Longitud y latitud geográficas son una referencia familiar, pero la latitud se mide desde el ecuador. No es la misma variable que el ángulo polar medido desde el eje: con esta convención, latitud = $90^\circ-\phi$ en una aproximación esférica.

## Utilizar el sistema que simplifica

Para una trayectoria recta suelen ser útiles las cartesianas; para una rotación alrededor de un centro, las polares separan radio y giro. No es necesario convertir continuamente si el problema ya puede resolverse con su representación natural. Sí hay que convertir al comparar datos escritos en sistemas distintos.

Las coordenadas cilíndricas y esféricas se presentan como ampliación de referencia. El original señala que la mayoría de sus problemas AP de este nivel se trabajan en una o dos dimensiones.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.