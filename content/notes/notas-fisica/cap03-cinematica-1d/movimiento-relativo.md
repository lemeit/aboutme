+++
title = "Movimiento relativo y velocidades relativas"
date = "2026-06-26"
draft = false
math = true
weight = 9
description = "Marco de referencia inercial, principio de relatividad y suma de velocidades."
tags = ["cap03", "cinemática", "movimiento relativo", "velocidad relativa", "marco de referencia", "relatividad"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 228–237"
figuras_estado = "3 esquemas extraídos; fotos e ilustraciones contextuales omitidas"
visual_estado = "Pendiente: inspección visual y auto-render en navegador; LaTeX validado"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 228–237. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=228).

## Objetivos de aprendizaje

- Describir una misma situación desde observadores distintos e indicar siempre «respecto de quién».
- Distinguir cambios de referencia a velocidad constante de sistemas acelerados.
- Sumar y restar velocidades con signo y, como extensión, por componentes.

## El movimiento depende del observador

Una pasajera sentada está en reposo respecto del vehículo y se mueve respecto de la calle. Estas afirmaciones no se contradicen: comparan su posición con referencias diferentes.

Bigler ilustra esto con un tranvía de Nueva Orleans que viaja a unas 30 millas por hora. Desde el suelo, pasajeros y tranvía avanzan juntos; desde el tranvía, los pasajeros sentados están quietos y el suelo se desplaza en sentido contrario. Es una situación idealizada de viaje suave y aproximadamente uniforme.

Un **marco de referencia** incluye el observador, su sistema de coordenadas y sus relojes. Un marco **inercial** es aquel en el que un cuerpo libre de fuerza neta permanece en reposo o con velocidad constante. Si un marco es inercial, otro que se traslada con velocidad constante respecto de él también lo es. La Tierra puede aproximarse como tal en muchos problemas escolares, aunque su rotación impide que sea un marco inercial exacto.

## Principio de relatividad en mecánica clásica

Ningún experimento mecánico realizado únicamente dentro de un sistema cerrado permite distinguir su reposo de su traslación uniforme respecto de otro marco inercial. Eso no impide medir movimiento **respecto de referencias externas**, por ejemplo mirando una estación desde el tren.

La sensación de que el propio tren arranca cuando se mueve el de al lado es un ejemplo de la ambigüedad visual. Un frenado, una curva o una vibración sí pueden señalar aceleraciones; no deben confundirse con movimiento uniforme.

**Aclaración de la adaptación:** «no sentir fuerza» no prueba que se está en reposo, y tampoco exige ausencia de todas las fuerzas: sentado actúan el peso y la fuerza del asiento. El equilibrio de fuerzas y la aceleración son los conceptos pertinentes.

El original agrega ejemplos de un avión y del movimiento de la Tierra a escalas astronómicas. Aquí conservamos su idea central sin usar el cambio de huso horario como demostración de un avión inmóvil en un marco inercial: husos horarios y rotación terrestre no bastan para establecerlo. Las cifras cosmológicas y esa ilustración se omiten porque no son necesarias para la suma clásica de velocidades de esta unidad.

## Una pelota dentro de un vehículo

Si un vehículo se traslada en línea recta con velocidad constante y soltamos una pelota que inicialmente estaba en reposo respecto del vehículo, la pelota cae verticalmente **en ese marco**. Desde el suelo también conserva la velocidad horizontal que tenía al soltarla y sigue una trayectoria curva, despreciando el aire. Ambos observadores describen el mismo evento.

No se necesita empujar la pelota hacia adelante durante la caída para que conserve su velocidad horizontal. El análisis supone que el vehículo no acelera ni gira durante el intervalo.

## Notación que evita confusiones

Escribimos $v_{A/B}$ para la velocidad de A **respecto de B**. Si S es el suelo y O el observador:

$$v_{A/O}=v_{A/S}-v_{O/S}$$

Equivalentemente:

$$v_{A/S}=v_{A/O}+v_{O/S}$$

Las velocidades que se suman o restan deben expresarse sobre el mismo eje y con la misma convención de signos. En particular, $v_{A/B}=-v_{B/A}$. No conviene memorizar «si se acercan se suman» sin fijar sentidos y referencias.

Esta es la transformación **galileana**, adecuada a las velocidades de estos ejercicios, muy pequeñas frente a la de la luz. Para marcos con ejes paralelos y velocidad relativa constante $U$, se puede escribir $x'=x-Ut$ si los orígenes coinciden en $t=0$. Entonces $v'=v-U$ y $a'=a$: la velocidad cambia al cambiar de observador, pero la aceleración coincide entre estos marcos.

## Onda y regla: las tres situaciones de Bigler

Una compresión viaja por un resorte a $+2\ \mathrm{m/s}$ respecto del laboratorio. Elegimos positivo el sentido de avance de la onda, que en las figuras apunta hacia la izquierda. Un estudiante mide su paso por una regla de un metro. La onda es el objeto cuyo movimiento se compara; no se está calculando una suma relativista ni un cambio de la velocidad de la onda respecto del medio.

### Observador quieto

{{< figura src="/images/diagramas/cap03_onda-observador-quieto_pp232.png" alt="Medición de la onda desde un observador quieto." width="500" caption="Medición de la onda desde un observador quieto." source="Jeff Bigler, edición octubre de 2025, p. 232. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La velocidad relativa es $2-0=2\ \mathrm{m/s}$. La onda tarda $1/2=0{,}5\ \mathrm s$ en recorrer el metro de regla.

### Observador que va al encuentro de la onda

{{< figura src="/images/diagramas/cap03_onda-observador-acerca_pp233.png" alt="El observador se mueve hacia la onda." width="500" caption="El observador se mueve hacia la onda." source="Jeff Bigler, edición octubre de 2025, p. 233. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si el estudiante se mueve a $-1\ \mathrm{m/s}$, la velocidad de la onda respecto de él es $2-(-1)=3\ \mathrm{m/s}$. El tiempo entre el paso por los extremos de su regla es $1/3\approx0{,}33\ \mathrm s$.

### Observador que sigue a la onda

{{< figura src="/images/diagramas/cap03_onda-observador-aleja_pp234.png" alt="El observador se mueve en el mismo sentido que la onda." width="500" caption="El observador se mueve en el mismo sentido que la onda." source="Jeff Bigler, edición octubre de 2025, p. 234. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si se mueve a $+1\ \mathrm{m/s}$, la velocidad relativa es $2-1=1\ \mathrm{m/s}$ y el paso por la regla dura 1 s. Si acompañara la onda a $+2\ \mathrm{m/s}$, su velocidad relativa sería cero y la onda no atravesaría la regla de un extremo al otro.

## Ejercicio 1: dos personas en un río, pp. 235–236

La corriente va al sur a 2 m/s. Jack nada al sur a 2 m/s **respecto del agua** y Jill al norte a 2 m/s **respecto del agua**. Tomamos norte positivo.

$$v_{\mathrm{agua/suelo}}=-2\ \mathrm{m/s}$$

$$v_{\mathrm{Jack/suelo}}=-2+(-2)=-4\ \mathrm{m/s}$$

$$v_{\mathrm{Jill/suelo}}=+2+(-2)=0$$

Por tanto, Jack respecto de Jill va a 4 m/s al sur; Jill respecto de Jack, a 4 m/s al norte. Desde la orilla, Jack va al sur a 4 m/s y Jill está en reposo. Jill sigue nadando respecto del agua: estar quieta respecto de la orilla no significa que esté quieta en todos los marcos.

## Extensión del original: velocidades en dos dimensiones

Los dos últimos problemas ya requieren vectores en el plano, aunque el libro los incluye al final de este capítulo. Se conservan como extensión y se resuelven por componentes.

### Ejercicio 2: avión y viento, p. 236

Un avión vuela hacia el este a 125 m/s respecto del aire. El viento lleva al aire hacia el norte a 40 m/s respecto del suelo. Con este y norte positivos:

$$\vec v_{\text{avión/suelo}}=(125,40)\ \mathrm{m/s}$$

$$|\vec v|=\sqrt{125^2+40^2}\approx131{,}24\ \mathrm{m/s}$$

$$\theta=\arctan\left(\frac{40}{125}\right)\approx17{,}7^\circ$$

La trayectoria respecto del suelo lleva rumbo $17{,}7^\circ$ al norte del este. La dirección del fuselaje respecto del aire sigue siendo este: no son el mismo rumbo.

### Ejercicio 3: persona que camina sobre un barco, p. 237

El barco avanza respecto del agua a 10 m/s, $30^\circ$ al norte del este; la corriente es de 1 m/s al norte. Una persona camina a 2 m/s respecto del barco en dirección perpendicular, $30^\circ$ al oeste del norte. La atribución de los 10 m/s al agua se explicita aquí para que la suma esté bien definida.

$$\vec v_{\mathrm{persona/suelo}}=\vec v_{\mathrm{persona/barco}}+\vec v_{\mathrm{barco/agua}}+\vec v_{\mathrm{agua/suelo}}$$

El original pide construir la suma gráficamente, sin exigir un resultado numérico. Dibujá los tres vectores a escala uniendo origen con extremo. Como comprobación propia por componentes:

$$v_x=10\cos30^\circ-2\sin30^\circ\approx7{,}66\ \mathrm{m/s}$$

$$v_y=10\sin30^\circ+1+2\cos30^\circ\approx7{,}73\ \mathrm{m/s}$$

Su módulo es aproximadamente $10{,}88\ \mathrm{m/s}$ y la dirección $45{,}3^\circ$ al norte del este. La malla vacía de la fuente se reemplaza por la construcción en papel o en una herramienta gráfica.

## Para comprobar tu interpretación

1. Indicá la referencia de cada velocidad antes de sustituir números.
2. Verificá que los subíndices intermedios encadenen: persona/barco, barco/agua, agua/suelo.
3. Si obtenés velocidad relativa cero, explicá qué dos objetos conservan su separación; no afirmes reposo absoluto.
4. Si el observador acelera o gira, no supongas sin revisión que conserva el carácter inercial durante todo el intervalo.

---

Adaptado de Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones y actividades propias se identifican en el texto.
