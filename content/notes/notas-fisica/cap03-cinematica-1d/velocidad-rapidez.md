+++
title = "Rapidez y velocidad"
date = "2026-06-26"
lastmod = "2026-10-13"
draft = false
math = true
weight = 2
description = "Distancia, desplazamiento, rapidez y velocidad: valores medios e instantáneos, signos y ejemplos resueltos."
tags = ["cap03", "cinemática", "velocidad", "rapidez", "velocidad media", "MRU"]
traduccion_estado = "Revisada"
cotejo_estado = "Revisado: pp. 184–187"
figuras_estado = "2 extraídas y revisadas"
visual_estado = "Revisada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición de octubre de 2025, sección *Linear Motion, Speed & Velocity*, páginas 184–187. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=184).

**Alcance:** traducción y adaptación desarrollada de esas cuatro páginas, conservando su contenido conceptual, tabla de variables y dos ejemplos. Los sistemas de coordenadas, la posición y el desplazamiento de las páginas 182–183 se trabajan en [Sistemas de referencia]({{< ref "sistemas-referencia" >}}); aquí se repasan como contexto. Las aclaraciones de notación y las actividades propias se identifican por separado.

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir distancia y desplazamiento, y rapidez y velocidad.
- Calcular rapidez media y velocidad media.
- Interpretar el signo de la velocidad en una dimensión.
- Reconocer qué significa que una velocidad sea constante.

Una respuesta sobre velocidad debe incluir magnitud, sentido y unidad. Una respuesta sobre rapidez incluye magnitud y unidad, sin dirección.

## Distancia y desplazamiento: un repaso necesario

La **distancia recorrida** es la longitud total del camino seguido. Es una magnitud escalar, siempre positiva o cero. El **desplazamiento** describe el cambio entre la posición inicial y la final: es vectorial, con módulo, dirección y sentido.

Si avanzás 12 unidades hacia el este y después 5 hacia el norte, recorriste $12 + 5 = 17$ unidades. El módulo del desplazamiento es:

$$
|\Delta\vec{x}| = \sqrt{12^2 + 5^2} = 13
$$

El desplazamiento apunta desde el punto inicial al final, unos $23^\circ$ al norte del este.

{{< figura src="/images/diagramas/cap03_velocidad_distancia-desplazamiento_pp184.png" alt="Recorrido desde A hasta B: 12 unidades al este y 5 al norte; desplazamiento diagonal de 13 unidades." caption="Distancia recorrida: 17 unidades. Módulo del desplazamiento: 13 unidades. Las etiquetas de la figura se conservan en inglés." source="Jeff Bigler, edición octubre de 2025, p. 184. Recorte del original, CC BY-NC-SA 4.0." >}}

> **Aclaración de esta adaptación:** el original indica $37^\circ$ en esta figura y en el texto, pero para catetos 12 y 5 corresponde $\arctan(5/12) \approx 22{,}6^\circ$. Se conserva la figura original para hacer visible la diferencia y se utiliza el valor correcto en la explicación.

Si el movimiento es rectilíneo y no invierte el sentido, distancia y módulo del desplazamiento coinciden. Para otros recorridos, hay que calcular ambas cantidades por separado.

## Cambio por unidad de tiempo

Una **tasa de cambio** indica cuánto cambia una magnitud durante un intervalo de tiempo. Un objeto está en **movimiento** cuando su posición cambia con el tiempo respecto del sistema de referencia elegido.

La rapidez indica qué tan rápido se recorre el camino; la velocidad describe cómo cambia la posición.

## Rapidez

La **rapidez instantánea** indica qué tan rápido se mueve un objeto en un instante. Es escalar: no incluye dirección y nunca es negativa. Si se mantuviera durante cierto intervalo, la distancia que recorrería dividida por ese tiempo daría su valor.

La **rapidez media** se calcula usando la distancia total y el intervalo completo:

$$
\text{rapidez media} = \frac{\text{distancia total recorrida}}{\Delta t}
$$

Si la rapidez es constante, su valor instantáneo coincide con la rapidez media en cualquier intervalo del movimiento.

> **Aclaración de esta adaptación:** la fórmula de rapidez media también es válida cuando la rapidez cambia. En ese caso describe el recorrido completo, sin afirmar que el objeto se haya movido siempre con ese valor.

## Velocidad

La **velocidad** es vectorial: describe la tasa de cambio de la posición e incluye dirección y sentido. La rapidez instantánea es el **módulo** de la velocidad instantánea:

$$
\text{rapidez instantánea} = |\vec{v}|
$$

Bigler usa $\vec{v}$ sin subíndice para la velocidad instantánea. Al comparar el principio y el final de un intervalo, $\vec{v}_0$ representa la velocidad inicial y $\vec{v}$ la final. El subíndice $0$ señala el instante inicial.

La **velocidad media** es el desplazamiento dividido por el tiempo transcurrido:

$$
\vec{v}_{\mathrm{med}} = \frac{\Delta\vec{x}}{\Delta t}
$$

En una dimensión se trabaja con la componente sobre el eje elegido:

$$
v_{\mathrm{med}} = \frac{x_f - x_i}{t_f - t_i}
$$

El subíndice “med” recuerda que la velocidad media no tiene por qué coincidir con la inicial ni con la final. El original utiliza “ave.” (*average*); aquí se adapta al español y se escribe $\Delta t$ para explicitar el intervalo, que Bigler abrevia como $t$.

Si el movimiento es rectilíneo y no cambia de sentido, el módulo de la velocidad media coincide con la rapidez media. Si hay una vuelta o cambia la trayectoria, la distancia puede superar el módulo del desplazamiento: entonces la rapidez media es mayor que el módulo de la velocidad media.

## El signo en una dimensión

Elegí primero un sentido positivo sobre el eje:

| Velocidad instantánea | Interpretación |
|---|---|
| $v > 0$ | Se mueve en el sentido positivo. |
| $v < 0$ | Se mueve en el sentido negativo. |
| $v = 0$ | Está en reposo en ese instante. |

Una velocidad negativa indica sentido, no menor rapidez: $-8\ \mathrm{m/s}$ corresponde a una rapidez de $8\ \mathrm{m/s}$.

Si un objeto vuelve al punto de partida, su desplazamiento y su velocidad media son cero, aunque haya recorrido una distancia considerable. Esto no significa que haya estado quieto durante todo el intervalo.

{{< figura src="/images/diagramas/cap03_velocidad_signos-y-regreso_pp185.png" alt="Un eje define el sentido positivo hacia la derecha. Un objeto que avanza tiene velocidad positiva, otro que retrocede tiene velocidad negativa, y una vuelta completa tiene velocidad media cero." caption="En ambos sentidos la rapidez es positiva. En una vuelta completa, la rapidez media es positiva y la velocidad media es cero. Etiquetas originales en inglés." source="Jeff Bigler, edición octubre de 2025, p. 185. Recorte del original, CC BY-NC-SA 4.0." >}}

## Unidades y movimiento uniforme

En el sistema metro-kilogramo-segundo, rapidez y velocidad se expresan en $\mathrm{m/s}$:

$$
1\ \mathrm{m/s} = 3{,}6\ \mathrm{km/h} \approx 2{,}24\ \mathrm{mi/h}
$$

El **movimiento uniforme** tiene velocidad constante: se mantienen rapidez, dirección y sentido. Una rapidez constante por sí sola no garantiza velocidad constante; al recorrer una curva cambia la dirección.

## Variables del movimiento lineal

La tabla de la página 186 reúne las variables de la unidad. En una dimensión, aquí se escriben componentes con signo; en un tratamiento vectorial se agregan flechas.

| Símbolo | Magnitud | Unidad SI |
|---|---|---|
| $x$ | Posición final | $\mathrm{m}$ |
| $x_0$ | Posición inicial | $\mathrm{m}$ |
| $d$ | Distancia recorrida | $\mathrm{m}$ |
| $\Delta x$ | Desplazamiento sobre el eje | $\mathrm{m}$ |
| $h$ | Altura respecto del nivel elegido | $\mathrm{m}$ |
| $v$ | Velocidad final o instantánea, según el contexto | $\mathrm{m/s}$ |
| $v_0$ | Velocidad inicial | $\mathrm{m/s}$ |
| $v_{\mathrm{med}}$ | Velocidad media | $\mathrm{m/s}$ |
| $a$ | Aceleración | $\mathrm{m/s^2}$ |
| $g$ | Aceleración de la gravedad | $\mathrm{m/s^2}$ |
| $\Delta t$ | Tiempo transcurrido | $\mathrm{s}$ |

Bigler también escribe el desplazamiento como $\vec{d}$. Aquí se reserva $d$ para distancia y $\Delta x$ para desplazamiento. Por convención, $g$ designa la aceleración gravitatoria, como la de un objeto en caída libre, y $a$ la aceleración en general.

La aceleración media describe el cambio de velocidad por unidad de tiempo:

$$
a_{\mathrm{med}} = \frac{\Delta v}{\Delta t} = \frac{v_f-v_i}{\Delta t}
$$

En una dimensión, el desplazamiento es positivo si el cambio de posición ocurre en el sentido positivo, y negativo si ocurre en el opuesto. La aceleración es positiva si la velocidad se vuelve más positiva o menos negativa; es negativa si se vuelve menos positiva o más negativa. Su signo, por sí solo, no indica si aumenta o disminuye la rapidez. Este tema continúa en [Aceleración]({{< ref "aceleracion" >}}).

## Ejemplos resueltos del original

### 1. Un auto recorre 1 200 m en 60 s

¿Cuál es su velocidad media?

**Aclaración de esta adaptación:** suponemos recorrido rectilíneo sin inversión del sentido y elegimos como positivo el sentido del movimiento. Así, la distancia corresponde a un desplazamiento de $+1\,200\ \mathrm{m}$. Si solo conociéramos distancia y tiempo, sin información de trayectoria, podríamos calcular rapidez media pero no determinar velocidad media.

$$
v_{\mathrm{med}} = \frac{\Delta x}{\Delta t}
= \frac{+1\,200\ \mathrm{m}}{60\ \mathrm{s}}
= +20\ \mathrm{m/s}
$$

El signo expresa el sentido elegido; la rapidez media es $20\ \mathrm{m/s}$.

### 2. Una persona camina 320 m a 1,25 m/s

¿Cuánto tiempo tarda, si su velocidad media es $1{,}25\ \mathrm{m/s}$?

Suponemos nuevamente movimiento rectilíneo sin invertir el sentido: $\Delta x=+320\ \mathrm{m}$. La pregunta pide un **intervalo de tiempo**.

$$
v_{\mathrm{med}} = \frac{\Delta x}{\Delta t}
$$

Bigler recomienda despejar la variable del denominador en dos pasos. Primero multiplicamos ambos miembros por $\Delta t$:

$$
v_{\mathrm{med}}\,\Delta t = \Delta x
$$

Después dividimos por $v_{\mathrm{med}}$:

$$
\Delta t = \frac{\Delta x}{v_{\mathrm{med}}}
= \frac{320\ \mathrm{m}}{1{,}25\ \mathrm{m/s}}
= 256\ \mathrm{s}
$$

Las unidades se simplifican a segundos. Separar las operaciones permite seguir el razonamiento y evita intercambiar incorrectamente las variables.

## Adaptaciones propias: práctica y comprobación

Este apartado se agregó para las clases de Luciano Lamaita; no forma parte de las páginas 184–187 del original.

### Movimiento uniforme y gráficos

Si la velocidad es constante en una dimensión:

$$
x_f = x_i + v\,(t_f-t_i)
$$

En el gráfico posición-tiempo, la pendiente de la recta representa la velocidad. Si la velocidad cambia, la pendiente entre dos puntos representa la velocidad media del intervalo; la pendiente de la tangente representa la velocidad instantánea.

### Actividad con Tracker

1. Filmá un objeto moviéndose aproximadamente en línea recta a velocidad constante.
2. Elegí el origen, el sentido positivo y la escala de longitudes.
3. Obtené el gráfico posición-tiempo y ajustá una recta.
4. Compará la pendiente con $\Delta x/\Delta t$ entre dos puntos.
5. Explicá qué significa el signo y qué cambiaría si invirtieras el sentido positivo.

Consultá la [guía de Tracker]({{< ref "/notes/herramientas/tracker.md" >}}). Tracker fue desarrollado por Douglas Brown y el proyecto Open Source Physics.

### Para pensar

1. Un corredor completa una vuelta de 400 m en 52 s. ¿Cuál es su rapidez media? ¿Cuál es su velocidad media? Explicá la diferencia usando distancia y desplazamiento.
2. ¿Puede un objeto tener rapidez media positiva y velocidad media cero? Proponé un recorrido.
3. Si la velocidad es $-5\ \mathrm{m/s}$, ¿cuál es la rapidez? ¿Qué dato permite interpretar el signo?
4. ¿Qué representa la pendiente entre dos puntos del gráfico posición-tiempo? ¿Y la de una tangente?

**Comprobación de la primera pregunta:** rapidez media $400/52 \approx 7{,}69\ \mathrm{m/s}$; velocidad media cero, porque termina donde empezó.

---

*Traducción y adaptación al español de Jeff Bigler, edición octubre de 2025, pp. 184–187. Se reorganizaron las explicaciones, se explicitó el intervalo de tiempo, se adaptó la notación y se agregaron aclaraciones y actividades identificadas. Adaptación para el sitio de Prof. Ing. Luciano Lamaita. Original y adaptación: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).*
