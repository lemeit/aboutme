+++
title = "Tiro Oblicuo (Movimiento Proyectil)"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Movimiento en 2D: componentes independientes horizontal (MRU) y vertical (MRUV). Tiro horizontal y con ángulo."
tags = ["cap04", "cinemática 2D", "tiro oblicuo", "proyectil", "movimiento 2D", "vectores", "trigonometría"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 242–257"
figuras_estado = "6 figuras extraídas; ejercicios y tablas reconstruidos"
visual_estado = "Pendiente: revisión en navegador"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 242–257. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=242).

## Objetivos de aprendizaje

- Resolver un lanzamiento horizontal o inclinado usando componentes y un tiempo común.
- Elegir una referencia vertical y conservar los signos durante todo el cálculo.
- Interpretar velocidad, aceleración y altura máxima sin confundir sus componentes.
- Reconocer las condiciones de las fórmulas de alcance y los límites del modelo.

## Un objeto en vuelo bajo la acción de la gravedad

Un **proyectil** es un objeto que, después del lanzamiento, se mueve principalmente por la acción de la gravedad. Una pelota o una piedra permiten estudiar este modelo si la resistencia del aire puede despreciarse. El impulso de lanzamiento fija la velocidad inicial; no hace falta una fuerza horizontal continua para conservar su componente horizontal.

Adoptamos una región próxima a la superficie terrestre, gravedad uniforme y un marco aproximadamente inercial. En los ejemplos usamos $g=10\ \mathrm{m/s^2}$, como Bigler. Aquí $g$ es un **módulo positivo**, no una componente con signo. Elegimos $x$ horizontal y positivo hacia la derecha; $y$ vertical y positivo hacia arriba.

## Dos ecuaciones, un mismo movimiento

Las componentes se analizan por separado porque, **en este modelo**, $a_x=0$ y $a_y=-g$. La independencia no es una regla universal para cualquier par de vectores perpendiculares: con resistencia del aire o restricciones, el planteo puede cambiar. Es una aclaración de la formulación del original, p. 242.

| Magnitud | Horizontal | Vertical |
|---|---|---|
| Aceleración | $a_x=0$ | $a_y=-g$ |
| Velocidad | $v_x=v_{0x}$ | $v_y=v_{0y}-gt$ |
| Posición | $x=x_0+v_{0x}t$ | $y=y_0+v_{0y}t-gt^2/2$ |

El tiempo transcurrido $t$ es el mismo en ambas columnas. Usar un tiempo para el avance horizontal y otro para la caída describiría dos eventos distintos, no la posición del mismo objeto.

Si preferís elegir abajo positivo en una caída horizontal, $a_y=+g$ y el desplazamiento hacia abajo es positivo. Esa convención también es válida, pero hay que transformar **todos** los signos. No se cambia $g$ de módulo a componente a mitad del problema.

## Estrategia de resolución

1. Dibujá el origen, los ejes, la posición inicial y el punto o nivel de llegada.
2. Identificá $v_{0x}$ y $v_{0y}$; si hay ángulo, calculá las componentes.
3. Usá la condición de llegada para obtener el tiempo. Si se conoce una altura suele convenir empezar por $y(t)$; si se conoce la distancia horizontal a una valla, puede convenir empezar por $x(t)$.
4. Elegí la raíz temporal posterior al lanzamiento que corresponda al evento pedido.
5. Sustituí ese mismo tiempo para obtener la otra coordenada o componente de velocidad.

La recomendación de Bigler de resolver primero la vertical es útil para muchos problemas, pero no es obligatoria cuando los datos permiten hallar el tiempo horizontalmente.

## Lanzamiento horizontal: pelota desde 1,5 m

En la p. 245, una pelota sale horizontalmente a 5 m/s desde 1,5 m de altura. Tomamos el suelo como $y=0$, por lo que $y_0=1{,}5\ \mathrm m$ y $v_{0y}=0$.

$$0=1{,}5-5t^2\quad\Rightarrow\quad t=\sqrt{0{,}3}\approx0{,}5477\ \mathrm s$$

$$\Delta x=5\sqrt{0{,}3}\approx2{,}74\ \mathrm m$$

{{< figura src="/images/diagramas/cap04_tiro-horizontal_pp245.png" width="560" alt="Trayectoria de la pelota lanzada horizontalmente." caption="Trayectoria de la pelota lanzada horizontalmente." source="Jeff Bigler, edición octubre de 2025, p. 245. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el impacto $v_y=-10\sqrt{0{,}3}\approx-5{,}48\ \mathrm{m/s}$ mientras $v_x=+5\ \mathrm{m/s}$. La velocidad total apunta hacia adelante y hacia abajo. Su módulo, como comprobación propia, es $\sqrt{5^2+5{,}48^2}\approx7{,}42\ \mathrm{m/s}$.

**Aclaración de cálculo:** el original muestra $5(0{,}55)=2{,}74$ con un tiempo ya redondeado. Para obtener 2,74 m se conserva el valor de la raíz hasta el final; el producto literal $5(0{,}55)$ da 2,75 m.

Un objeto soltado y otro lanzado horizontalmente desde la misma altura llegan al mismo nivel al mismo tiempo si ambos parten simultáneamente con $v_{0y}=0$ y obedecen el mismo modelo sin aire.

## Lanzamiento con ángulo

Si la rapidez inicial es $v_0$ y el ángulo $\theta$ se mide por encima del eje horizontal positivo:

$$v_{0x}=v_0\cos\theta,\qquad v_{0y}=v_0\sin\theta$$

{{< figura src="/images/diagramas/cap04_componentes-lanzamiento_pp246.png" width="400" alt="Componentes de la velocidad inicial." caption="Componentes de la velocidad inicial." source="Jeff Bigler, edición octubre de 2025, p. 246. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La componente horizontal permanece constante; la vertical disminuye durante todo el vuelo. En el punto más alto $v_y=0$, pero generalmente $v_x\ne0$: **la pelota no queda en reposo** y su aceleración tampoco es cero.

{{< figura src="/images/diagramas/cap04_velocidad-en-vuelo_pp246.png" width="560" alt="La componente vertical cambia durante el vuelo." caption="La componente vertical cambia durante el vuelo." source="Jeff Bigler, edición octubre de 2025, p. 246. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

### Ejemplo del pájaro de Angry Birds, pp. 247–248

Sale a 20 m/s con $\theta=40^\circ$ y llega a la misma altura. Sin redondear prematuramente:

$$v_{0x}=20\cos40^\circ\approx15{,}32\ \mathrm{m/s}$$

$$v_{0y}=20\sin40^\circ\approx12{,}86\ \mathrm{m/s}$$

Como $\Delta y=0$:

$$0=t\left(v_{0y}-\frac g2t\right)$$

Las raíces son $t=0$, lanzamiento, y $T=2v_{0y}/g\approx2{,}571\ \mathrm s$, regreso al nivel inicial. El alcance es:

$$R=v_{0x}T=\frac{2v_0^2\sin\theta\cos\theta}{g}\approx39{,}39\ \mathrm m$$

{{< figura src="/images/diagramas/cap04_trayectoria-pajaro_pp248.png" width="560" alt="Trayectoria del ejemplo de lanzamiento a 40 grados." caption="Trayectoria del ejemplo de lanzamiento a 40 grados." source="Jeff Bigler, edición octubre de 2025, p. 248. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El texto original alterna valores intermedios redondeados y una componente gravitatoria negativa. Aquí conservamos $g>0$, signos explícitos y cifras internas; el resultado final de 39,4 m se mantiene.

## Alcance, trayectoria y sus condiciones

Si salida y llegada están a la **misma altura**, para una rapidez inicial fija y sin aire:

$$R=\frac{v_0^2\sin(2\theta)}g$$

El máximo se obtiene a $45^\circ$ porque allí $\sin(2\theta)=1$. Esta conclusión **no es universal**: cambia si la altura de llegada es diferente, hay techo u otro obstáculo o actúa resistencia del aire. Es una aclaración de la recomendación abreviada de la p. 246.

Eliminando $t$ para $v_{0x}\ne0$:

$$y-y_0=\frac{v_{0y}}{v_{0x}}(x-x_0)-\frac{g}{2v_{0x}^2}(x-x_0)^2$$

La trayectoria es parabólica dentro del modelo. Un lanzamiento estrictamente vertical, $v_{0x}=0$, sigue una recta vertical y no admite esta eliminación dividiendo por $v_{0x}$. Al tocar el suelo termina el modelo de vuelo: el impacto no implica necesariamente detenerse en todas las direcciones, como simplifica la p. 244.

## Gráficos y problema de la valla

### Selección de gráficos, pp. 249–250

{{< figura src="/images/diagramas/cap04_graficos-proyectil_pp249.png" width="620" alt="Opciones de velocidad y aceleración verticales." caption="Opciones de velocidad y aceleración verticales." source="Jeff Bigler, edición octubre de 2025, p. 249. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Elegí qué par representa $v_y(t)$ y $a_y(t)$ tomando arriba positivo. La opción D muestra velocidad vertical lineal decreciente y aceleración constante negativa. Las opciones con aceleración variable o nula son incompatibles con el vuelo ideal. Cuando $v_y$ cruza cero, no se anula $a_y$.

### Una pelota que apenas supera una valla, p. 251

{{< figura src="/images/diagramas/cap04_pelota-valla_pp251.png" width="600" alt="Condición de paso por una valla." caption="Condición de paso por una valla." source="Jeff Bigler, edición octubre de 2025, p. 251. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La valla está a distancia horizontal $d$. La pelota sale a rapidez $v_0$ y ángulo $\theta$ y apenas pasa por su parte superior, de altura $h$ respecto de la salida. El tiempo y la velocidad vertical allí son:

$$t=\frac{d}{v_0\cos\theta}$$

$$v_y=v_0\sin\theta-\frac{gd}{v_0\cos\theta}$$

La condición adicional de altura, como desarrollo propio, es $h=d\tan\theta-gd^2/(2v_0^2\cos^2\theta)$. No debe confundirse «apenas superar» con estar en el punto más alto: solo ocurriría si además $v_y=0$ en la valla.

## Ejercicios originales, pp. 252–257

Se conserva la numeración y se usa $g=10\ \mathrm{m/s^2}$. En los lanzamientos inclinados 6 y 7 se explicita que salida y llegada tienen el mismo nivel; no se pretende calcular un alcance real con aire.

| Nº | Enunciado adaptado |
|---|---|
| 1 | Una persona sale horizontalmente de un acantilado a 1,6 m/s y llega al agua 3,0 s después. Hallá altura y distancia a la base. |
| 2 | Una pelota sale horizontalmente de un techo de 56 m y cae a 45 m de la base. Hallá su rapidez inicial. |
| 3 | Un tigre salta horizontalmente desde altura $h$ a rapidez $v_0$. Obtené la distancia a la base simbólicamente. |
| 4 | Aplicá el modelo anterior para $h=7{,}5\ \mathrm m$ y $v_0=4{,}5\ \mathrm{m/s}$. |
| 5 | Un avión vuela horizontalmente a 45 m/s a 160 m de altura. ¿A qué distancia horizontal del destino debe soltar un paquete? |
| 6 | Una pelota sale a 10,0 m/s con ángulo de 40,0°. Hallá el alcance al regresar al nivel inicial. |
| 7 | El ejemplo del cañón del libro usa 439 m/s y 5,00°. Hallá el alcance ideal al mismo nivel, sin aire. |
| 8 | Una competencia ideal tiene un techo 3,00 m por encima del nivel de lanzamiento y rapidez inicial máxima de 20,0 m/s. Hallá componente vertical máxima, ángulo y alcance al mismo nivel. |

{{< details title="Comprobaciones de los ocho ejercicios" >}}

1. $h=gT^2/2=45\ \mathrm m$ y $R=v_{0x}T=4{,}8\ \mathrm m$.
2. $T=\sqrt{2(56)/10}\approx3{,}347\ \mathrm s$; $v_{0x}=45/T\approx13{,}45\ \mathrm{m/s}$.
3. $R=v_0\sqrt{2h/g}$. El paquete o animal conserva la componente horizontal inicial al comenzar el vuelo.
4. $T=\sqrt{1{,}5}\ \mathrm s$ y $R\approx5{,}51\ \mathrm m$.
5. $T=\sqrt{32}\ \mathrm s$ y $R=45\sqrt{32}\approx254{,}56\ \mathrm m$; debe soltar antes de llegar al destino. No es un procedimiento operativo de lanzamiento: solo un modelo escolar.
6. $R=10^2\sin80^\circ/10\approx9{,}85\ \mathrm m$.
7. $R=439^2\sin10^\circ/10\approx3346{,}65\ \mathrm m$, consistente con los 3347 m del original. Es una predicción del modelo sin aire, no una validación histórica de alcance efectivo.
8. $v_{0y,\max}=\sqrt{2gh}=\sqrt{60}\approx7{,}746\ \mathrm{m/s}$. A rapidez total 20 m/s, $\theta=\arcsin(\sqrt{60}/20)\approx22{,}79^\circ$, $v_{0x}=\sqrt{400-60}\approx18{,}44\ \mathrm{m/s}$ y $R=2v_{0x}v_{0y}/g\approx28{,}57\ \mathrm m$. El techo hace inviable la opción de 45°; se supone altura de lanzamiento cero y se trata el proyectil como partícula.

{{< /details >}}

## Actividad propia con Tracker

Filmá una pelota con cámara fija, escala en el plano de movimiento y lanzamiento corto. En [Tracker]({{< ref "/notes/herramientas/tracker.md" >}}), ajustá $x(t)$ con una recta y $y(t)$ con una cuadrática. El coeficiente de $t^2$ vertical corresponde a $-g/2$ si arriba es positivo; no es directamente $g$. Compará el tiempo de llegada leído de ambas coordenadas y revisá perspectiva e incertidumbre.

Esta actividad es propia de la adaptación; Tracker fue desarrollado por Douglas Brown y Open Source Physics. No se presentan mediciones inventadas. Para pensar: ¿qué componente de velocidad se anula en la altura máxima y cuál suele conservarse?, ¿qué datos invalidarían el alcance máximo a 45°?

---

Adaptado de Jeff Bigler. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones propias se identifican en el texto.
