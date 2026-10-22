+++
title = "Movimiento Rectilíneo Uniforme (MRU)"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Velocidad constante, ecuación de posición, gráficos x(t) y v(t), resolución de problemas."
tags = ["cap03", "cinemática", "MRU", "velocidad constante", "posición", "gráficos"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 185–187, 197–200, 204"
figuras_estado = "1 figura del original; tablas reconstruidas"
visual_estado = "Pendiente: inspección visual y auto-render en navegador; LaTeX validado"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 185–187, 197–200, 204. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=185).

## Objetivos de aprendizaje

- Reconocer el movimiento rectilíneo uniforme por la constancia de la velocidad.
- Diferenciar posición final, desplazamiento y distancia recorrida.
- Resolver tiempos y encuentros con unidades coherentes y comprobarlos gráficamente.

**Organización de la adaptación:** el original no tiene un apartado independiente llamado MRU. Esta nota reúne el caso de velocidad constante presentado en las páginas citadas. Los ejemplos de ciclista, cruce y encuentro se identifican como desarrollos propios; no se atribuyen como ejercicios textuales de Bigler.

## Qué debe permanecer constante

En el **movimiento rectilíneo uniforme**, un objeto se mueve a lo largo de una recta con velocidad constante: conserva módulo y sentido, por lo que su aceleración es cero. En intervalos temporales iguales realiza desplazamientos iguales.

$$a=0,\qquad v=\text{constante}$$

El reposo es el caso particular $v=0$. Un objeto que recorre una circunferencia con rapidez constante no realiza MRU: la dirección de su velocidad cambia continuamente.

## Ecuación de posición

La definición de velocidad media es $v_{\mathrm{med}}=\Delta x/\Delta t$. Como en el MRU todas las velocidades coinciden, podemos despejar:

$$\Delta x=v\Delta t$$

$$x(t)=x_i+v(t-t_i)$$

Si elegimos $t_i=0$, queda $x=x_0+vt$. El producto $vt$ es un **desplazamiento**, no la posición final a menos que $x_0=0$.

Para un intervalo de duración positiva, la distancia recorrida es:

$$d=|v|\Delta t$$

En cambio, $\Delta x$ conserva el signo de $v$. Si se despeja $\Delta t=\Delta x/v$, los signos deben dar una duración no negativa para un evento futuro dentro del modelo. Un valor negativo puede indicar que el evento ocurrió antes del instante inicial; no se corrige tomando valor absoluto sin interpretar.

## Lectura gráfica

El gráfico posición-tiempo es una recta de pendiente $v$ y ordenada inicial $x_0$. Su inclinación indica sentido de movimiento; no representa la pendiente del camino en el espacio.

{{< figura src="/images/diagramas/cap03_posicion-pendiente_pp215.png" alt="La pendiente de posición frente a tiempo representa la velocidad." width="400" caption="La pendiente de posición frente a tiempo representa la velocidad." source="Jeff Bigler, edición octubre de 2025, p. 215. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El gráfico velocidad-tiempo es horizontal. El área con signo entre esa línea y el eje temporal da $\Delta x$. Una línea horizontal situada debajo de cero significa movimiento uniforme en sentido negativo, no reposo. Los detalles se desarrollan en [Gráficos de movimiento]({{< ref "/notes/notas-fisica/cap03-cinematica-1d/graficos-movimiento.md" >}}).

## Ejemplos y comprobación de unidades

### Automóvil del original, p. 187

Un automóvil recorre 1200 m en 60 s. Si suponemos trayectoria recta sin retroceso y elegimos positivo el sentido de marcha:

$$v=\frac{1200}{60}=+20\ \mathrm{m/s}$$

Esto equivale a $72\ \mathrm{km/h}$. Si no se informa constancia de velocidad, los mismos datos solo permiten calcular la **velocidad media**; no prueban MRU. Esa es una condición adicional que debe explicitarse.

### Cruce de una calle: desarrollo propio

Una persona cruza 320 m a velocidad constante $+1{,}25\ \mathrm{m/s}$. Despejando primero:

$$\Delta t=\frac{\Delta x}{v}=\frac{320}{1{,}25}=256\ \mathrm s$$

Las unidades verifican el resultado: $\mathrm m/(\mathrm{m/s})=\mathrm s$. Este modelo supone que la persona mantiene la velocidad durante todo el recorrido.

### Ciclista con origen no nulo: desarrollo propio

Una ciclista parte de $x_0=-200\ \mathrm m$ con $v=+4\ \mathrm{m/s}$. A los 7 min han pasado 420 s:

$$x=-200+4(420)=1480\ \mathrm m$$

Su desplazamiento es $1680\ \mathrm m$ y su distancia recorrida también. Confundirlos con la posición final daría un resultado incorrecto porque no partió del origen.

### Encuentro: desarrollo propio

Dos personas se mueven sobre el mismo eje. A parte de $x=0$ a $+2\ \mathrm{m/s}$ y B parte de $x=100\ \mathrm m$ a $-3\ \mathrm{m/s}$. Si ambas conservan esas velocidades:

$$x_A=2t,\qquad x_B=100-3t$$

El encuentro exige la misma posición **en el mismo instante**. De $2t=100-3t$ obtenemos $t=20\ \mathrm s$ y $x=40\ \mathrm m$. Sustituir en ambas ecuaciones da la misma coordenada y comprueba el resultado.

## Ejercicio del original: media vuelta en una pista

En el ejercicio 1 de la serie 1, p. 204, un automóvil recorre media vuelta de una pista circular de radio 100 m con rapidez constante. Hallá distancia y módulo del desplazamiento.

$$d=\pi r\approx314\ \mathrm m,\qquad |\Delta\vec r|=2r=200\ \mathrm m$$

En una vuelta completa, $d=2\pi r\approx628\ \mathrm m$ y $\Delta\vec r=\vec0$. Es una comparación entre distancia y desplazamiento, **no un ejemplo de MRU**. No puede decirse «velocidad constante» cuando el automóvil gira.

## Actividad propia con Tracker

Filmá un objeto que se mueva aproximadamente en línea recta a velocidad constante. Calibrá la escala, elegí origen y sentido positivo, registrá posiciones y ajustá una recta $x=x_0+vt$. Compará la pendiente con $\Delta x/\Delta t$ entre puntos alejados y revisá los residuos del ajuste: una recta aproximada no significa que todas las mediciones sean exactas.

Consultá la [guía de Tracker]({{< ref "/notes/herramientas/tracker.md" >}}). La incorporación de análisis de video es una adaptación propia; Tracker fue desarrollado por Douglas Brown y Open Source Physics.

## Ejercicios propios

1. Una ciclista parte del origen y a los 3 min está a 720 m, con velocidad constante. Hallá $v$ en m/s y km/h.
2. ¿Cuánto tiempo necesita para recorrer 2 km desde la salida?
3. Esbozá sus gráficos $x(t)$ y $v(t)$ hasta 8 min.

**Comprobación:** $v=4\ \mathrm{m/s}=14{,}4\ \mathrm{km/h}$; $\Delta t=500\ \mathrm s=8\ \mathrm{min}\ 20\ \mathrm s$. A los 8 min está a 1920 m, por lo que todavía no completó los 2 km.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.