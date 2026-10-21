+++
title = "Gráficos de movimiento"
date = "2026-06-26"
draft = false
math = true
weight = 8
description = "Gráficos posición-tiempo y velocidad-tiempo: pendiente, área y su relación con las ecuaciones."
tags = ["cap03", "cinemática", "gráficos", "x vs t", "v vs t", "pendiente", "área", "análisis gráfico"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 215–227"
figuras_estado = "10 figuras extraídas; tablas y ejercicios reconstruidos"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 215–227. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=215).

## Objetivos de aprendizaje

- Obtener velocidad de la pendiente de $x(t)$ y aceleración de la pendiente de $v(t)$.
- Calcular desplazamiento como área con signo bajo $v(t)$ y recuperar posición si se conoce la inicial.
- Pasar de una representación a otra y justificar los intervalos de reposo, frenado e inversión de sentido.

## Leer primero los ejes

Un gráfico de movimiento no es un dibujo del camino. El eje horizontal suele representar tiempo; el vertical puede representar posición, velocidad o aceleración. La interpretación de una curva cambia completamente según cuál de esas magnitudes esté graficada.

| Gráfico | Valor del eje vertical | Pendiente | Área con signo respecto del tiempo |
|---|---|---|---|
| $x(t)$ | Posición | Velocidad | No representa el desplazamiento |
| $v(t)$ | Velocidad | Aceleración | Desplazamiento |
| $a(t)$ | Aceleración | Tasa de cambio de la aceleración | Cambio de velocidad |

La última fila es una extensión de las relaciones usadas en el capítulo. Las unidades ayudan a comprobar: $\mathrm m/\mathrm s$ para la pendiente de $x(t)$, $(\mathrm{m/s})/\mathrm s=\mathrm{m/s^2}$ para la de $v(t)$ y $(\mathrm{m/s})\mathrm s=\mathrm m$ para el área bajo $v(t)$.

{{< nota-adaptacion pagina="216" origen="Texto del original: definición de pendiente" >}}
La pendiente es cambio vertical dividido por cambio horizontal, $\Delta y/\Delta x$. Una frase del original invierte verbalmente los ejes, aunque la fórmula que muestra es correcta.
{{< /nota-adaptacion >}}

## Posición frente a tiempo

La pendiente de una secante entre dos puntos da la velocidad media del intervalo:

$$v_{\mathrm{med}}=\frac{x_2-x_1}{t_2-t_1}$$

La pendiente de la tangente en un punto da la velocidad instantánea si la curva es suave. Una recta corresponde a velocidad constante; una horizontal, a reposo. Una curva revela que la pendiente cambia y por tanto cambia la velocidad.

{{< figura src="/images/diagramas/cap03_posicion-signos_pp216.png" alt="Pendiente positiva, nula y negativa en gráficos de posición." width="600" caption="Pendiente positiva, nula y negativa en gráficos de posición." source="Jeff Bigler, edición octubre de 2025, p. 216. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Una curva que desciende indica velocidad negativa, aunque toda la curva esté por encima de $x=0$. La altura en el gráfico indica posición; la inclinación indica velocidad. Son informaciones distintas.

### Ejemplo por tramos de la p. 216

En la figura, la posición aumenta de 0 a 8 m entre 0 y 2 s, se mantiene en 8 m hasta 4 s y baja a 0 m entre 4 y 8 s.

{{< figura src="/images/diagramas/cap03_posicion-tramos_pp216.png" alt="Un viaje de ida, espera y regreso." width="480" caption="Un viaje de ida, espera y regreso." source="Jeff Bigler, edición octubre de 2025, p. 216. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

| Intervalo | Cálculo de pendiente | Interpretación |
|---|---|---|
| 0–2 s | $(8-0)/(2-0)=+4\ \mathrm{m/s}$ | Avanza uniformemente |
| 2–4 s | $0$ | Permanece quieto |
| 4–8 s | $(0-8)/(8-4)=-2\ \mathrm{m/s}$ | Vuelve uniformemente |

La distancia total es $8+8=16\ \mathrm m$ y el desplazamiento neto es cero. En los vértices de este modelo por tramos la velocidad cambia abruptamente: no se les asigna una única pendiente instantánea.

{{< figura src="/images/diagramas/cap03_posicion-caracteristicas_pp217.png" alt="Características de un gráfico posición-tiempo." width="620" caption="Características de un gráfico posición-tiempo." source="Jeff Bigler, edición octubre de 2025, p. 217. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En una curva suave, concavidad hacia arriba significa aceleración positiva; concavidad hacia abajo, negativa. Eso no determina por sí solo si el móvil gana o pierde rapidez: también hay que considerar el signo de la pendiente.

## Velocidad frente a tiempo

La altura de la curva es la velocidad. Una horizontal fuera del eje representa velocidad constante no nula. La pendiente, en cambio, representa aceleración:

$$a_{\mathrm{med}}=\frac{v_2-v_1}{t_2-t_1}$$

Si el tramo es recto, esa aceleración es constante. Una recta inclinada puede representar aceleración positiva con velocidad negativa: el móvil frena hasta llegar a cero y después puede invertir el sentido.

### Área con signo

Para un tramo de velocidad constante, $\Delta x=v\Delta t$ es el área de un rectángulo. Para un tramo lineal, $\Delta x=(v_1+v_2)\Delta t/2$ es el área con signo de un trapecio. Si cruza el eje, conviene dividirlo en las regiones positiva y negativa.

{{< figura src="/images/diagramas/cap03_areas-velocidad_pp219.png" alt="Áreas para velocidad constante y para velocidad variable." width="600" caption="Áreas para velocidad constante y para velocidad variable." source="Jeff Bigler, edición octubre de 2025, p. 219. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Las áreas por encima de cero aportan desplazamiento positivo; las de abajo, negativo. Para obtener **distancia recorrida**, sumamos los módulos de esas contribuciones. Para obtener **posición final**, sumamos el desplazamiento a la posición inicial:

$$x_f=x_i+\Delta x$$

No puede obtenerse una posición absoluta solamente a partir de $v(t)$ sin conocer al menos una posición de referencia. El gráfico tampoco representa dos direcciones espaciales a la vez: su eje horizontal es tiempo, no una segunda coordenada de posición. Se aclara así una frase confusa de la p. 221.

### Ejemplo de áreas, p. 220

{{< figura src="/images/diagramas/cap03_areas-tramos_pp220.png" alt="Áreas de intervalos seleccionados de velocidad-tiempo." width="620" caption="Áreas de intervalos seleccionados de velocidad-tiempo." source="Jeff Bigler, edición octubre de 2025, p. 220. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Entre 0 y 4 s, la velocidad crece desde 0 hasta 10 m/s: $a=10/4=2{,}5\ \mathrm{m/s^2}$. Entre 4 y 6 s conserva 10 m/s: $a=0$.

| Intervalo | Figura geométrica | Desplazamiento |
|---|---|---|
| 0–2 s | Triángulo de base 2 s y altura 5 m/s | $+5\ \mathrm m$ |
| 0–4 s | Triángulo de base 4 s y altura 10 m/s | $+20\ \mathrm m$ |
| 4–6 s | Rectángulo de base 2 s y altura 10 m/s | $+20\ \mathrm m$ |

El desplazamiento total entre 0 y 6 s es 40 m. **No se suman 5+20+20:** el primer intervalo está incluido en el segundo. En este ejemplo la velocidad nunca es negativa y por eso distancia y desplazamiento tienen el mismo valor numérico.

{{< figura src="/images/diagramas/cap03_velocidad-caracteristicas_pp221.png" alt="Pendientes y áreas con signo en velocidad-tiempo." width="620" caption="Pendientes y áreas con signo en velocidad-tiempo." source="Jeff Bigler, edición octubre de 2025, p. 221. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

## Ejercicios originales 1 y 2, p. 222

### 1. Interpretar una curva posición-tiempo

{{< figura src="/images/diagramas/cap03_ejercicio-posicion_pp222.png" alt="Ejercicio 1: curva de posición frente a tiempo." width="450" caption="Ejercicio 1: curva de posición frente a tiempo." source="Jeff Bigler, edición octubre de 2025, p. 222. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Describí lo que ocurre entre 2 y 4 s y entre 6 y 7 s. Identificá intervalos de reposo, velocidad constante y aceleración.

**Orientación para comprobar:** entre 2 y 4 s el tramo es aproximadamente recto y creciente, con pendiente cercana a $+18\ \mathrm{m/s}$ según la cuadrícula. Entre 6 y 7 s la posición es constante, alrededor de 72 m, y $v=0$. Las transiciones curvas indican aceleración; los tramos rectos inclinados, velocidad constante no nula. Los límites de las transiciones se leen de un dibujo y no deben presentarse como mediciones exactas.

### 2. Pendientes y áreas de una curva velocidad-tiempo

{{< figura src="/images/diagramas/cap03_ejercicio-velocidad_pp222.png" alt="Ejercicio 2: velocidad con inversión de sentido." width="450" caption="Ejercicio 2: velocidad con inversión de sentido." source="Jeff Bigler, edición octubre de 2025, p. 222. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Calculá: a) aceleración entre 2 y 4 s; b) velocidad y aceleración entre 4 y 6 s; c) desplazamientos entre 2–4 s, 6–10 s y 0–10 s.

En el dibujo, $v$ pasa de 0 a 6 m/s entre 2 y 4 s, conserva 6 m/s hasta 6 s y luego baja linealmente hasta −10 m/s en 10 s. Así, en el último tramo cruza cero a los 7,5 s.

{{< details title="Comprobación de pendientes y áreas" >}}

- Entre 2–4 s, $a=(6-0)/2=+3\ \mathrm{m/s^2}$ y el desplazamiento es $2(6)/2=+6\ \mathrm m$.
- Entre 4–6 s, $v=+6\ \mathrm{m/s}$, $a=0$ y el desplazamiento es $+12\ \mathrm m$.
- Entre 6–10 s, $a=(-10-6)/4=-4\ \mathrm{m/s^2}$. Las áreas son $+4{,}5\ \mathrm m$ hasta 7,5 s y $-12{,}5\ \mathrm m$ después; su suma es $-8\ \mathrm m$.
- Entre 0–10 s, $\Delta x=0+6+12-8=+10\ \mathrm m$.

Como extensión propia, la distancia total es $6+12+4{,}5+12{,}5=35\ \mathrm m$. El área negativa se resta para desplazamiento y se suma en módulo para distancia.

{{< /details >}}

## Ejercicio 3: construir v(t), p. 223

{{< figura src="/images/diagramas/cap03_ejercicio-conversion_pp223.png" alt="Ejercicio 3: obtener velocidad a partir de posición." width="450" caption="Ejercicio 3: obtener velocidad a partir de posición." source="Jeff Bigler, edición octubre de 2025, p. 223. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El gráfico original une los puntos $(t,x)=(0,10)$, $(5,35)$, $(10,35)$, $(15,50)$ y $(20,0)$, con tiempo en segundos y posición en metros. Dibujá $v(t)$ y calculá el desplazamiento en cada intervalo de 5 s.

| Intervalo | Velocidad por pendiente | Desplazamiento por área |
|---|---|---|
| 0–5 s | $+5\ \mathrm{m/s}$ | $+25\ \mathrm m$ |
| 5–10 s | $0$ | $0$ |
| 10–15 s | $+3\ \mathrm{m/s}$ | $+15\ \mathrm m$ |
| 15–20 s | $-10\ \mathrm{m/s}$ | $-50\ \mathrm m$ |

El desplazamiento total es $-10\ \mathrm m$ y la distancia 90 m. Al sumar $x_0=10\ \mathrm m$ al desplazamiento se recupera la posición final cero. En los vértices, las velocidades laterales son diferentes: el dibujo idealiza cambios instantáneos.

## Ejercicio 4: datos de una carrera, p. 223

{{< nota-adaptacion pagina="223" origen="Atribución histórica y tabla del original" >}}
El libro presenta esta tabla atribuida a la carrera de 100 m de Carl Lewis de 1991, con tiempo final 9,86 s. Conservamos los **datos publicados por Bigler**, sin presentarlos como mediciones propias. La afirmación histórica de que fue el primer atleta en bajar de 10 s se deja en revisión y no se usa como dato del ejercicio. Esta revisión no verifica independientemente los parciales de la carrera.
{{< /nota-adaptacion >}}

| Posición (m) | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Tiempo (s) | 0 | 1,88 | 2,96 | 3,88 | 4,77 | 5,61 | 6,45 | 7,29 | 8,12 | 8,97 | 9,86 |

Ubicá tiempo en el eje horizontal y posición en el vertical. Luego calculá $\bar v=10/\Delta t$ para cada tramo y representá esa velocidad media en el punto medio temporal. Las primeras velocidades son aproximadamente 5,32; 9,26 y 10,87 m/s; entre 50 y 60 m, $10/(6{,}45-5{,}61)\approx11{,}90\ \mathrm{m/s}$.

La rapidez media de toda la carrera es $100/9{,}86\approx10{,}14\ \mathrm{m/s}$ y no coincide con cada rapidez por tramo. Un ajuste a la porción aproximadamente lineal permite estimar una velocidad casi constante, sin obligar a que todos los puntos caigan exactamente sobre una recta.

## Ejercicio 5: ascensor por etapas, p. 224

Un ascensor sube 4,0 m: acelera desde el reposo durante 0,5 s hasta una velocidad $v$, mantiene esa velocidad 9,5 s y frena uniformemente hasta detenerse en 0,5 s. Dibujá su gráfico velocidad-tiempo.

El tiempo total es 10,5 s. Las áreas de los dos triángulos y el rectángulo deben sumar 4,0 m:

$$4{,}0=\frac12(0{,}5)v+9{,}5v+\frac12(0{,}5)v=10v$$

Por tanto, $v=+0{,}4\ \mathrm{m/s}$. La aceleración inicial es $+0{,}8\ \mathrm{m/s^2}$ y la final $-0{,}8\ \mathrm{m/s^2}$, tomando arriba positivo. El tramo uniforme va de $t=0{,}5$ a $t=10\ \mathrm s$; confundir duración de tramo con instante final desplaza el gráfico.

## Ejemplo de respuesta desarrollada, pp. 225–227

Bigler presenta un carrito de 0,50 kg sobre una pista recta y el siguiente gráfico. La masa no es necesaria para las preguntas cinemáticas.

{{< figura src="/images/diagramas/cap03_ejemplo-carrito_pp225.png" alt="Velocidad del carrito en el ejemplo desarrollado." width="600" caption="Velocidad del carrito en el ejemplo desarrollado." source="Jeff Bigler, edición octubre de 2025, p. 225. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

1. **Reposo:** $v=0$ en $t=4\ \mathrm s$ y $t=18\ \mathrm s$.
2. **Aumento de rapidez:** la curva se aleja del eje cero entre 4–9 s y 18–20 s. No alcanza con elegir intervalos de pendiente positiva.
3. **Posición a los 9 s si $x_0=2{,}0\ \mathrm m$:** el área de 0–4 s es $+1{,}6\ \mathrm m$ y la de 4–9 s es $-2{,}5\ \mathrm m$. Entonces $\Delta x=-0{,}9\ \mathrm m$ y $x(9)=+1{,}1\ \mathrm m$.
4. **Aceleración:** se obtiene de la pendiente de cada tramo recto, no de la altura de $v(t)$.

| Intervalo (s) | Aceleración (m/s²) |
|---|---|
| 0–9 | −0,2 |
| 9–12 | +0,2 |
| 12–17 | 0 |
| 17–20 | +0,4 |
| 20–25 | 0 |

La gráfica de velocidad es continua y tiene **cambios bruscos de pendiente**, no saltos de velocidad. En los instantes de cambio de tramo no se asigna una aceleración única mediante una derivada ordinaria. La respuesta es una sucesión de horizontales en $a(t)$.

La parte adicional de proyectiles que menciona el original se deja para Cinemática 2D. Se reconstruyen aquí todas las preguntas cinemáticas desarrolladas en estas páginas.

## Actividad propia de contraste

En [Tracker]({{< ref "/notes/herramientas/tracker.md" >}}), obtené $x(t)$ y $v(t)$ de un video breve. Compará el desplazamiento leído en $x(t)$ con el área aproximada por trapecios de $v(t)$. Usá los mismos tiempos de inicio y fin; después sumá los módulos de áreas si querés estimar distancia. La actividad es una adaptación propia y no un conjunto de resultados experimentales del libro.

---

Adaptado de Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones y actividades propias se identifican en el texto.
