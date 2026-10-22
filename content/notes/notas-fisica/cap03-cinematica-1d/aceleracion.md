+++
title = "Aceleración lineal"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Aceleración como cambio de velocidad, signo y dirección, caída libre como caso especial."
tags = ["cap03", "cinemática", "aceleración", "MRUV", "caída libre", "gravedad"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 188–194"
figuras_estado = "4 figuras extraídas; tablas reconstruidas"
visual_estado = "Pendiente: inspección visual y auto-render en navegador; LaTeX validado"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 188–194. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=188).

## Objetivos de aprendizaje

- Calcular aceleración con velocidades inicial y final, intervalo temporal y unidades correctas.
- Describir los cambios de rapidez y de sentido sin confundirlos con el signo de la aceleración.
- Reconocer cuándo una aceleración media representa también la aceleración durante todo el intervalo.

## Una tasa de cambio de la velocidad

La aceleración media mide cuánto cambia la velocidad por unidad de tiempo:

$$a_{\mathrm{med}}=\frac{\Delta v}{\Delta t}=\frac{v_f-v_i}{t_f-t_i}$$

En una dimensión usamos componentes con signo. Si la aceleración es **uniforme**, es constante y coincide con la media en cualquier intervalo: $a=a_{\mathrm{med}}$. Bigler adopta este modelo en los problemas algebraicos de esta unidad; no es una propiedad de todos los movimientos reales.

La unidad es $\mathrm{m/s^2}$: una aceleración de $+5\ \mathrm{m/s^2}$ significa que la velocidad aumenta en $+5\ \mathrm{m/s}$ cada segundo. Es una variación de velocidad, no una distancia de cinco metros por segundo.

## Acelerar no significa siempre ir más rápido

En física, acelerar significa cambiar la velocidad. Esto puede cambiar la rapidez, la dirección o ambas. En una recta, el signo de $a$ indica hacia qué sentido cambia $v$; el signo de $v$ indica hacia dónde se mueve el objeto.

| Velocidad | Aceleración | Cambio de la rapidez mientras no cambie el sentido |
|---|---|---|
| $v>0$ | $a>0$ | Aumenta |
| $v>0$ | $a<0$ | Disminuye |
| $v<0$ | $a>0$ | Disminuye |
| $v<0$ | $a<0$ | Aumenta |

**Aclaración:** «desaceleración» se usa en el lenguaje cotidiano para indicar una disminución de rapidez. No está prohibida en física, pero en estos apuntes preferimos indicar el vector aceleración y explicar si el objeto frena. Aceleración negativa no es sinónimo de frenado.

En el ejemplo del automóvil de Bigler, tanto el acelerador como el freno y el volante pueden cambiar la velocidad: los primeros pueden cambiar su módulo y el volante su dirección. El movimiento con cambio de dirección se estudiará más adelante.

## Tres casos con un «velocímetro vectorial»

Los instrumentos dibujados por Bigler muestran velocidad con signo. Un velocímetro común muestra solamente rapidez. En los tres casos siguientes se adopta una aceleración constante durante 5 s.

### 1. De +15 a +40 m/s

{{< figura src="/images/diagramas/cap03_velocimetros-positivo_pp190.png" alt="Velocidad inicial +15 m/s y final +40 m/s." width="560" caption="Velocidad inicial +15 m/s y final +40 m/s." source="Jeff Bigler, edición octubre de 2025, p. 190. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$a=\frac{40-15}{5}=+5\ \mathrm{m/s^2}$$

El automóvil se mueve siempre en sentido positivo y aumenta su rapidez. La variación es $+25\ \mathrm{m/s}$.

| Tiempo (s) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Velocidad (m/s) | +15 | +20 | +25 | +30 | +35 | +40 |

### 2. De −20 a −30 m/s

{{< figura src="/images/diagramas/cap03_velocimetros-negativo_pp191.png" alt="Velocidad inicial −20 m/s y final −30 m/s." width="560" caption="Velocidad inicial −20 m/s y final −30 m/s." source="Jeff Bigler, edición octubre de 2025, p. 191. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$a=\frac{-30-(-20)}{5}=-2\ \mathrm{m/s^2}$$

Aunque $-30<-20$, la rapidez pasa de 20 a 30 m/s. El automóvil gana rapidez mientras se mueve en sentido negativo. Restar una velocidad negativa exige conservar los paréntesis.

### 3. De −15 a +10 m/s

{{< figura src="/images/diagramas/cap03_velocimetros-inversion_pp192.png" alt="Velocidad inicial −15 m/s y final +10 m/s." width="560" caption="Velocidad inicial −15 m/s y final +10 m/s." source="Jeff Bigler, edición octubre de 2025, p. 192. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$a=\frac{10-(-15)}{5}=+5\ \mathrm{m/s^2}$$

La aceleración es positiva todo el tiempo, pero el movimiento tiene dos etapas. Durante los primeros 3 s el automóvil se mueve en sentido negativo y frena; en $t=3\ \mathrm s$ su velocidad es cero. Durante los 2 s restantes se mueve y gana rapidez en sentido positivo. Usando $v=-15+5t$, se verifica el instante de inversión.

Una velocidad nula durante un instante no implica aceleración nula. Tampoco es correcto describir los cinco segundos únicamente como «el automóvil acelera hacia adelante» sin indicar que primero iba hacia atrás.

## Otra imagen: una acción que empuja siempre hacia el mismo lado

{{< figura src="/images/diagramas/cap03_viento-aceleracion_pp193.png" alt="El movimiento puede cambiar de sentido aunque la aceleración conserve el suyo." width="430" caption="El movimiento puede cambiar de sentido aunque la aceleración conserve el suyo." source="Jeff Bigler, edición octubre de 2025, p. 193. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el dibujo, el automóvil empieza hacia la derecha y la aceleración apunta a la izquierda. Primero frena, se detiene y después gana rapidez hacia la izquierda. El viento es una **analogía** para visualizar una fuerza neta orientada en un sentido. No garantiza aceleración constante en un automóvil real: el modelo requiere que la fuerza neta y la masa permitan esa aproximación.

## Caída libre y aceleración de la gravedad

Si actúa esencialmente la gravedad, un cuerpo próximo a la superficie terrestre tiene aceleración aproximadamente constante dirigida hacia abajo. Bigler usa $10\ \mathrm{m/s^2}$ como aproximación didáctica; para cálculos más precisos suele emplearse $9{,}8\ \mathrm{m/s^2}$.

Una pelota lanzada hacia arriba sigue acelerando hacia abajo durante el ascenso, en el punto más alto y durante el descenso. Un cuerpo apoyado sobre una rampa no está en caída libre porque la superficie restringe su movimiento. La elección de signos y los problemas se desarrollan en [Caída libre]({{< ref "/notes/notas-fisica/cap03-cinematica-1d/caida-libre.md" >}}).

## Comprobación del original, p. 193

Un automóvil pasa de $+30$ a $-10\ \mathrm{m/s}$ en 10 s. Calculá su aceleración y describí el movimiento suponiéndola constante.

$$a=\frac{-10-30}{10}=-4\ \mathrm{m/s^2}$$

La velocidad $v=30-4t$ se anula a los $7{,}5\ \mathrm s$. Primero avanza y frena; luego retrocede y aumenta su rapidez durante $2{,}5\ \mathrm s$. El cambio total de velocidad es $-40\ \mathrm{m/s}$.

## Extensión y actividad

El **jerk** o tirón es la tasa de cambio de la aceleración. Su valor medio es $j_{\mathrm{med}}=\Delta a/\Delta t$, en $\mathrm{m/s^3}$. En el modelo de aceleración constante, vale cero dentro de cada tramo. No debe confundirse con aceleración grande.

La propuesta original de caminar con combinaciones de signos y usar un carro con ventilador permite practicar estas ideas. Antes de observar, indicá el sentido positivo y predecí si velocidad y aceleración apuntan en el mismo sentido. Nunca deduzcas el signo de $a$ solamente a partir de la palabra «frena».

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.