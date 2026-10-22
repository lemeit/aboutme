+++
title = "Introducción a los vectores"
date = "2026-06-22"
draft = false
description = "Qué es un vector, diferencia con magnitudes escalares, representación gráfica, suma vectorial y descomposición en componentes."
tags = ["U1", "vectores", "escalares", "trigonometría"]
math = true
weight = 7
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 155–165"
figuras_estado = "8 figuras extraídas y revisadas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 155–165. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=155). Traducción y adaptación desarrollada; se señalan las aclaraciones propias.

## Objetivos de aprendizaje

Al finalizar esta unidad, vas a poder:

- Distinguir entre magnitudes escalares y vectoriales.
- Representar un vector gráficamente con su módulo y dirección.
- Sumar vectores en una y dos dimensiones.
- Descomponer un vector en sus componentes x e y usando trigonometría básica.
- Aplicar el Teorema de Pitágoras para calcular el módulo de un vector resultante.

> 💡 Los vectores son una herramienta matemática, no un tema de Física en sí mismo. Los vemos acá porque los vamos a usar constantemente en cinemática (velocidad, desplazamiento, aceleración) y dinámica (fuerza).

---

## Escalares y vectores

En Física, las magnitudes se dividen en dos tipos:

**Magnitud escalar:** tiene solo un valor numérico con su unidad. No tiene dirección.

> Ejemplos: masa (5 kg), temperatura (20 °C), tiempo (3 s), energía (100 J), distancia recorrida (50 m).

**Magnitud vectorial:** tiene valor numérico (módulo) **y** dirección.

> Ejemplos: velocidad (60 km/h hacia el norte), fuerza (10 N hacia abajo), desplazamiento (3 m hacia la derecha), aceleración (9,8 m/s² hacia el centro de la Tierra).

### ¿Por qué importa la diferencia?

Porque las operaciones matemáticas son distintas. Si dos personas empujan un objeto con 10 N cada una, el resultado depende de *hacia dónde* empuja cada una:

- Si empujan en la misma dirección: fuerza resultante = 20 N
- Si empujan en direcciones opuestas: fuerza resultante = 0 N
- Si empujan en ángulo recto: fuerza resultante = 14,1 N (¡no es 20 N!)

Con escalares, 10 + 10 = 20, siempre. Con vectores, depende de la geometría.

---

## Representación gráfica de vectores

Un vector se representa como una **flecha**:

- La **longitud** de la flecha indica el módulo (cuánto).
- La **dirección y sentido** de la flecha indica hacia dónde apunta el vector.

$$\vec{v} \quad \text{(vector velocidad)} \qquad |\vec{v}| = v \quad \text{(módulo, un escalar)}$$

### Notación

En la escritura a mano, los vectores se escriben con una flecha encima:

$$\vec{F}, \quad \vec{v}, \quad \vec{a}, \quad \vec{d}$$

El módulo (valor sin dirección) se escribe sin flecha o con barras:

$$F = |\vec{F}| \qquad v = |\vec{v}|$$

### Sistemas de referencia y convención de signos

Para trabajar con vectores en una dimensión, elegimos un **sentido positivo**. Los vectores en ese sentido son positivos; los opuestos son negativos.

> **Ejemplo:** Si defino "hacia la derecha" como positivo:
> - $\vec{v} = +10 \text{ m/s}$ → el objeto se mueve hacia la derecha
> - $\vec{v} = -10 \text{ m/s}$ → el objeto se mueve hacia la izquierda

La elección del sentido positivo es **arbitraria** — lo que importa es ser consistente en todo el problema.

> Una componente $-10\ \mathrm{m/s}$ es numéricamente menor que $+5\ \mathrm{m/s}$, pero su módulo es mayor: la rapidez correspondiente es 10 m/s frente a 5 m/s.

---

## Suma de vectores

### En una dimensión

Cuando los vectores están sobre la misma recta (mismo eje), se suman algebraicamente como números con signo:

$$\vec{F}_{total} = \vec{F}_1 + \vec{F}_2$$

**Ejemplo:** Una persona empuja una caja con 8 N hacia la derecha (+8 N). La fricción ejerce 3 N hacia la izquierda (-3 N).

$$\vec{F}_{total} = +8 \text{ N} + (-3 \text{ N}) = +5 \text{ N} \quad \text{(hacia la derecha)}$$

### En dos dimensiones — vectores perpendiculares

Cuando los vectores forman un ángulo de 90°, usamos el **Teorema de Pitágoras** para calcular el módulo del vector resultante:

$$|\vec{R}| = \sqrt{|\vec{A}|^2 + |\vec{B}|^2}$$

**Ejemplo:** Un barco navega 6 km hacia el este y luego 8 km hacia el norte. ¿Cuánto se desplazó del punto de partida?

$$|\vec{R}| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10 \text{ km}$$

> 💡 La suma de vectores no es suma aritmética: $6 + 8 = 14$ km sería la distancia recorrida, pero el desplazamiento (vector) es solo 10 km.

Para encontrar la **dirección** del vector resultante, usamos trigonometría:

$$\tan \theta = \frac{|\vec{B}|}{|\vec{A}|} = \frac{8}{6} \approx 1{,}33 \quad \Rightarrow \quad \theta = \arctan(1{,}33) \approx 53°$$

El desplazamiento resultante es **10 km a 53° al norte del este**.

---

## Descomposición de vectores en componentes

En muchos problemas es necesario hacer el proceso inverso: **descomponer** un vector en sus componentes horizontal (x) y vertical (y).

Si un vector $\vec{v}$ tiene módulo $v$ y forma un ángulo $\theta$ con el eje horizontal:

$$v_x = v \cdot \cos\theta$$
$$v_y = v \cdot \sin\theta$$

Y para reconstruir el módulo a partir de las componentes:

$$v = \sqrt{v_x^2 + v_y^2}$$

**Ejemplo típico — tiro oblicuo:**

Una pelota se lanza con velocidad inicial $v_0 = 20$ m/s a un ángulo de 30° sobre la horizontal.

$$v_{0x} = 20 \cdot \cos(30°) = 20 \cdot 0{,}866 = 17{,}3 \text{ m/s}$$
$$v_{0y} = 20 \cdot \sin(30°) = 20 \cdot 0{,}5 = 10{,}0 \text{ m/s}$$

Sin resistencia del aire, la componente horizontal $v_x$ se mantiene constante durante el vuelo.
La componente vertical $v_y$ cambia por efecto de la gravedad; $v_{0y}$ designa su valor inicial.

> Esta idea — tratar las dos componentes como **movimientos independientes** — es la clave para resolver cualquier problema de tiro oblicuo. La vamos a usar en detalle en la unidad de cinemática.

---

## Tabla de magnitudes escalares y vectoriales en Física

| Magnitud | Tipo | Unidad SI |
|---|---|---|
| Masa | Escalar | kg |
| Tiempo | Escalar | s |
| Temperatura | Escalar | K |
| Energía | Escalar | J |
| Distancia recorrida | Escalar | m |
| Rapidez (*speed*) | Escalar | m/s |
| Desplazamiento | **Vector** | m |
| Velocidad | **Vector** | m/s |
| Aceleración | **Vector** | m/s² |
| Fuerza | **Vector** | N |
| Peso | **Vector** | N |

> 💡 **Distancia ≠ Desplazamiento.** Si caminás 5 m hacia adelante y después 5 m hacia atrás, recorriste 10 m (escalar), pero tu desplazamiento es 0 m (vector). Esta distinción aparece constantemente en cinemática.

---

## Repaso de trigonometría básica

Para trabajar con vectores en 2D necesitamos seno, coseno y tangente. En un triángulo rectángulo con ángulo $\theta$:

$$\sin\theta = \frac{\text{cateto opuesto}}{\text{hipotenusa}} \qquad \cos\theta = \frac{\text{cateto adyacente}}{\text{hipotenusa}} \qquad \tan\theta = \frac{\text{cateto opuesto}}{\text{cateto adyacente}}$$

**Valores que conviene tener presentes:**

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| 0° | 0 | 1 | 0 |
| 30° | 0,5 | 0,866 | 0,577 |
| 45° | 0,707 | 0,707 | 1 |
| 60° | 0,866 | 0,5 | 1,732 |
| 90° | 1 | 0 | — |

---

## Ejercicios propios de práctica

1. Clasificá cada una de las siguientes magnitudes como escalar o vectorial: temperatura, velocidad del viento, masa de un objeto, fuerza gravitatoria, tiempo, desplazamiento.

2. Un auto recorre 40 km hacia el este y luego 30 km hacia el norte. Calculá el módulo y la dirección del desplazamiento total.

3. Una fuerza de 50 N actúa a 37° sobre la horizontal. Calculá sus componentes horizontal y vertical.

4. Dos fuerzas actúan sobre un objeto: $\vec{F}_1 = 12$ N hacia la derecha y $\vec{F}_2 = 5$ N hacia arriba. Calculá el módulo y la dirección de la fuerza resultante.

5. Un corredor se mueve 100 m hacia el este, luego 100 m hacia el norte, luego 100 m hacia el oeste. ¿Cuál es su desplazamiento total? ¿Y la distancia recorrida?

---

## Trasladar flechas y modelar fuerzas

Para sumar vectores libres, una flecha puede trasladarse sin cambiar su módulo, dirección ni sentido. Las representaciones punta-cola y origen común producen la misma suma. La **resultante** es el vector obtenido, no la suma aritmética de módulos.

{{< nota-adaptacion pagina="157" origen="Alcance físico de la representación vectorial" >}}
El punto de aplicación de una fuerza sí puede importar físicamente. Mover una fuerza a otro lugar del cuerpo puede cambiar su torque. La libertad de trasladar flechas en una suma geométrica no significa que cualquier fuerza aplicada en cualquier punto tenga el mismo efecto sobre un cuerpo rígido.
{{< /nota-adaptacion >}}

En el método punta-cola, la segunda flecha comienza donde termina la primera. La resultante une el origen de la primera con el extremo de la última. En origen común se completa el paralelogramo y la diagonal expresa la resultante. Los recorridos sucesivos suelen representarse punta-cola; fuerzas que actúan simultáneamente sobre un mismo punto, con origen común.

{{< figura src="/images/diagramas/cap02_suma-perpendicular_pp158.png" width="480" alt="Suma de dos vectores perpendiculares de módulos 6 y 8 con resultante de módulo 10." caption="El módulo de la suma se obtiene con Pitágoras, no sumando 6 y 8. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 158. Recorte del original, CC BY-NC-SA 4.0." >}}

## Sumar por componentes

Para vectores que no son perpendiculares, descomponé cada uno según los mismos ejes, sumá sus componentes y reconstruí el resultado:

$$R_x=A_x+B_x,\qquad R_y=A_y+B_y$$

$$|\vec R|=\sqrt{R_x^2+R_y^2}$$

El ángulo debe ubicarse en el cuadrante correcto. $\arctan(R_y/R_x)$ por sí solo puede perder esa información; la función $\operatorname{atan2}(R_y,R_x)$ o el examen de los signos resuelve la ambigüedad. También se puede trabajar con las leyes de senos y cosenos cuando la geometría lo permite.

{{< figura src="/images/diagramas/cap02_suma-oblicua_pp159.png" width="600" alt="Suma de dos vectores no perpendiculares representada mediante un paralelogramo." caption="La misma resultante puede representarse con origen común o punta-cola. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 159. Recorte del original, CC BY-NC-SA 4.0." >}}

## Escalares con signo

Una magnitud escalar no se define por ser positiva, sino por no tener dirección vectorial. Trabajo, carga eléctrica, diferencias de volumen y energía potencial respecto de un nivel elegido pueden tener signo. Una diferencia $\Delta V$ escalar puede ser negativa porque disminuye el volumen, sin representar una dirección espacial.

{{< nota-adaptacion pagina="156" origen="Comparación del original: componente y módulo" >}}
Una componente de velocidad negativa indica sentido según el eje. Comparando componentes, $-10<+5$; comparando rapidez, $|-10|>|+5|$. **Corrección del original:** no se debe cambiar la desigualdad entre números para expresar que un móvil tiene mayor rapidez.
{{< /nota-adaptacion >}}

## El mismo movimiento con dos convenciones

El ejemplo de las pp. 164–165 lanza una pelota verticalmente con rapidez inicial 15 m/s y utiliza $g=10\ \mathrm{m/s^2}$ como aproximación didáctica. Para $t=0{,}5$ s y positivo hacia arriba:

$$v_0=+15\ \mathrm{m/s},\qquad a=-10\ \mathrm{m/s^2}$$

$$\Delta y=15(0{,}5)+\frac12(-10)(0{,}5)^2=+6{,}25\ \mathrm{m}$$

Si elegís positivo hacia abajo, $v_0=-15$ m/s y $a=+10$ m/s²:

$$\Delta y=-15(0{,}5)+\frac12(10)(0{,}5)^2=-6{,}25\ \mathrm{m}$$

Ambas respuestas describen la misma posición, 6,25 m por encima del punto inicial. Cambió la representación, no el movimiento. Todas las componentes deben ser coherentes con los ejes elegidos.

## Componentes de un proyectil

Si se omite la resistencia del aire y se considera gravedad uniforme, $a_x=0$ y $a_y=-g$ para positivo hacia arriba. Las ecuaciones se aplican a cada componente:

$$\Delta x=v_{0x}t$$

$$\Delta y=v_{0y}t-\frac12gt^2$$

La separación permite resolver cada ecuación, pero ambas comparten el **mismo tiempo**. Que las componentes se analicen por separado no significa que correspondan a dos movimientos con relojes diferentes.

## Ejercicios del original

Las figuras de la p. 161 proponen identificar módulo y dirección en tres flechas, y construir la suma de dos vectores en tres disposiciones. La dirección debe expresarse respecto de la horizontal indicada, conservando el sentido de cada flecha. Una unidad indicada como lb se mantiene tal como aparece en esa figura fuente.

{{< figura src="/images/diagramas/cap02_vector-ejercicio-1_pp161.png" width="360" alt="Vector de módulo 8,5 a 28 grados por encima de la horizontal." caption="Ejercicio 1: identificá módulo y dirección. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 161. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap02_vector-ejercicio-2_pp161.png" width="360" alt="Vector de 4,5 lb que apunta desde R hacia T, con ángulo marcado de 110 grados respecto de la horizontal." caption="Ejercicio 2: identificá módulo y dirección. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 161. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap02_vector-ejercicio-3_pp161.png" width="360" alt="Vector de 12 lb que apunta de J a K, 70 grados por debajo de la horizontal." caption="Ejercicio 3: identificá módulo y dirección. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 161. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap02_vector-ejercicio-4_pp161.png" width="360" alt="Vectores u y v con origen común: uno horizontal y otro oblicuo hacia arriba." caption="Ejercicio 4: dibujá la resultante de la suma. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 161. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap02_vector-ejercicio-5_pp161.png" width="360" alt="Vectores u y v con origen común: uno hacia la izquierda y otro oblicuo hacia arriba a la derecha." caption="Ejercicio 5: dibujá la resultante de la suma. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 161. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap02_vector-ejercicio-6_pp161.png" width="360" alt="Vectores u y v con origen común, oblicuos hacia arriba a izquierda y derecha." caption="Ejercicio 6: dibujá la resultante de la suma. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 161. Recorte del original, CC BY-NC-SA 4.0." >}}

Para los ejercicios 7 y 8 de la p. 162, $\vec A$ tiene módulo 9 y apunta a la derecha; $\vec B$ tiene módulo 12 y apunta hacia abajo. El original define aquí el eje vertical positivo hacia abajo.

$$\vec A+\vec B=(9,12),\qquad |\vec A+\vec B|=15$$

La suma apunta $53{,}13^\circ$ por debajo de la horizontal positiva. En la resta:

$$\vec A-\vec B=(9,-12),\qquad |\vec A-\vec B|=15$$

La resta apunta $53{,}13^\circ$ por encima de esa horizontal. Al restar, se suma el vector opuesto, no se restan directamente los módulos.

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.