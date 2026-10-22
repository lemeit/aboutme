+++
title = "Diagramas de puntos"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Representación del movimiento mediante posiciones a intervalos de tiempo iguales."
tags = ["cap03", "cinemática", "diagrama de puntos", "representación del movimiento", "MRU", "MRUV"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 195–196"
figuras_estado = "3 secuencias del original extraídas; fotografía histórica no reproducida"
visual_estado = "Pendiente: inspección visual y auto-render en navegador; LaTeX validado"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 195–196. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=195).

## Objetivos de aprendizaje

- Construir una secuencia de posiciones registradas a intervalos temporales iguales.
- Inferir cambios de rapidez y sentido sin confundir separación espacial con intervalo temporal.
- Reconocer qué datos faltan antes de calcular velocidades o aceleraciones.

## De una fotografía estroboscópica a un modelo de puntos

Bigler introduce el tema con la fotografía *Bob Running*, de Harold «Doc» Edgerton. Explica que una cámara con el obturador abierto y destellos periódicos registra sucesivas posiciones de una persona que corre. Si entre cada destello transcurre el mismo tiempo y los desplazamientos son iguales, la velocidad es aproximadamente constante.

Aquí se utilizan los esquemas didácticos del libro, sin reproducir la fotografía histórica. Reemplazar a la persona por un punto permite concentrarse en la posición, dejando de lado la postura del cuerpo. Es un modelo de partícula: se sigue un punto representativo del objeto.

Un **diagrama de puntos** representa posiciones sucesivas separadas por un intervalo temporal constante $\Delta t$. La distancia entre puntos puede variar; lo que debe mantenerse constante es el tiempo entre registros.

## Tres secuencias del original

### Separaciones iguales

{{< figura src="/images/diagramas/cap03_puntos-uniforme_pp196.png" alt="Posiciones sucesivas con separaciones iguales." width="500" caption="Posiciones sucesivas con separaciones iguales." source="Jeff Bigler, edición octubre de 2025, p. 196. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si cada intervalo dura 1 s y los desplazamientos tienen el mismo módulo y sentido, la velocidad es constante. No alcanza con observar puntos equidistantes: también debemos conocer el orden temporal y la trayectoria seguida entre ellos.

### Separaciones crecientes

{{< figura src="/images/diagramas/cap03_puntos-acelera_pp196.png" alt="Posiciones sucesivas con separaciones crecientes." width="500" caption="Posiciones sucesivas con separaciones crecientes." source="Jeff Bigler, edición octubre de 2025, p. 196. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si se leen de izquierda a derecha, los puntos cada vez más separados indican que la rapidez aumenta. Esto evidencia una variación de velocidad, pero **no demuestra por sí solo que la aceleración sea constante**. Para afirmarlo deben compararse los cambios de velocidad en intervalos iguales.

### Separaciones decrecientes

{{< figura src="/images/diagramas/cap03_puntos-frena_pp196.png" alt="Posiciones sucesivas con separaciones decrecientes." width="500" caption="Posiciones sucesivas con separaciones decrecientes." source="Jeff Bigler, edición octubre de 2025, p. 196. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Leída de izquierda a derecha, la secuencia indica menor rapidez. En ese caso $v>0$ y $a<0$. Si el movimiento fuera de derecha a izquierda, habría que reconsiderar el orden de los registros y los signos. Un dibujo sin flecha ni tiempos puede admitir más de una interpretación.

Cuando un objeto queda en reposo, los puntos de registros posteriores se superponen. Que los puntos «desaparezcan» no demuestra que se detuvo: también puede haberse interrumpido la medición o haber salido del campo de la cámara.

## De posiciones a velocidades

Entre dos registros consecutivos:

$$\bar v_k=\frac{x_{k+1}-x_k}{\Delta t}$$

Esta es la velocidad media del intervalo y se representa en su instante central. No debe asignarse automáticamente como velocidad instantánea al primer punto. Si el movimiento tiene aceleración constante, coincide con la velocidad en el punto medio temporal.

**Ejemplo numérico propio:** posiciones medidas idealmente cada segundo:

| Tiempo (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Posición (m) | 0 | 1 | 4 | 9 | 16 |

Los desplazamientos sucesivos son 1, 3, 5 y 7 m. Las velocidades medias son 1, 3, 5 y 7 m/s y corresponden a $t=0{,}5$, $1{,}5$, $2{,}5$ y $3{,}5\ \mathrm s$. Cambian en $2\ \mathrm{m/s}$ por segundo, compatibles con $a=2\ \mathrm{m/s^2}$ y $x=t^2$ en este modelo ideal.

No son datos experimentales: la tabla se construyó para mostrar cómo funciona el cálculo. En una medición real hay incertidumbre de posición y de tiempo.

## Construir un diagrama que pueda interpretarse

1. Marcá el origen, el eje, la unidad y el sentido positivo.
2. Indicá el intervalo temporal y el orden de los puntos; podés numerarlos.
3. Representá cada posición a escala, sin separar artificialmente puntos superpuestos.
4. Describí el movimiento desde el primer registro hasta el último, incluyendo cambios de sentido.
5. Si calculás velocidades, usá desplazamientos con signo e intervalos temporales correctos.

## Actividad de registro

Bigler propone una cinta de papel con un dispositivo que marca a intervalos regulares. Verificá su frecuencia real: no todos producen 60 marcas por segundo. Si la frecuencia es $f$, el intervalo entre marcas es $1/f$. Al agrupar, por ejemplo, cinco intervalos, el tiempo es $5/f$, no $1/f$.

**Adaptación propia con video:** en [Tracker]({{< ref "/notes/herramientas/tracker.md" >}}), calibrá la escala, comprobá la frecuencia de cuadros y marcá el mismo punto del objeto. Compará las separaciones de las posiciones con las pendientes del gráfico $x(t)$. Tracker fue desarrollado por Douglas Brown y Open Source Physics.

## Para pensar y comprobar

1. ¿Podés hallar una rapidez en m/s si conocés los tiempos, pero no la escala de la imagen?
2. ¿Los puntos equidistantes permiten conocer el sentido de movimiento sin numeración?
3. ¿Toda secuencia de separaciones crecientes corresponde a un MRUV?

**Comprobaciones:** falta una escala de longitudes para la primera pregunta y un orden temporal para la segunda. En la tercera, hay que comprobar que las velocidades cambian por cantidades iguales en tiempos iguales; el mero crecimiento de las separaciones no basta.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.