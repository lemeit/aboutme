+++
title = "Fuerza aplicada con ángulo"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Descomposición de fuerzas en componentes, suma vectorial y resolución de problemas estáticos en 2D."
tags = ["cap06", "fuerzas 2D", "componentes", "trigonometría", "vectores", "fuerza neta", "equilibrio"]
revision_estado = "En revisión: divergencias y notas de adaptación, 22/10/2026"
lastmod = "2026-10-22"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 361–371"
figuras_estado = "9 figuras del original; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
+++

**Fuente:** «Force Applied at an Angle», Bigler, edición de octubre de 2025, [pp. 361–371](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=361).

## Fuerzas en dos dimensiones

Una fuerza es una magnitud vectorial: para describirla hacen falta su módulo, dirección y sentido. Dos fuerzas perpendiculares no se suman aritméticamente como si actuaran sobre la misma recta. Elegimos ejes, proyectamos cada fuerza y aplicamos la segunda ley en cada dirección:

$$\sum F_x=ma_x,\qquad \sum F_y=ma_y.$$

Una componente es la proyección de una fuerza sobre un eje; no es una interacción adicional. En un diagrama se puede representar la fuerza o reemplazarla por sus componentes para calcular, pero no sumar ambas representaciones como fuerzas distintas.

{{< nota-adaptacion pagina="361" origen="Texto del original: independencia de fuerzas perpendiculares" >}}
La proyección sobre un eje de una fuerza perpendicular a él es cero. Esto permite escribir dos ecuaciones, pero no garantiza que todo el problema esté desacoplado: una tracción vertical puede modificar la normal y, mediante el rozamiento, la aceleración horizontal. La independencia de componentes no permite ignorar estas relaciones.
{{< /nota-adaptacion >}}

## Sumar fuerzas por componentes

En el ejemplo de la p. 362 actúan 18 N a la derecha, 6 N a la izquierda, 9 N hacia arriba y 4 N hacia abajo. Tomando positivos derecha y arriba:

{{< figura src="/images/diagramas/cap06_suma-fuerzas_pp362.png" width="313" alt="Fuerzas aplicadas al mismo objeto." caption="Fuerzas aplicadas al mismo objeto." source="Jeff Bigler, edición octubre de 2025, p. 362. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$F_x=18-6=12\,\mathrm N,\qquad F_y=9-4=5\,\mathrm N.$$

Las fuerzas sobre un mismo eje se suman con signo. Luego se calcula el módulo de la resultante:

$$F_{\mathrm{neta}}=\sqrt{F_x^2+F_y^2}=\sqrt{12^2+5^2}=13\,\mathrm N.$$

{{< figura src="/images/diagramas/cap06_resultante_pp362.png" width="293" alt="Resultante de 12 N y 5 N." caption="Resultante de 12 N y 5 N." source="Jeff Bigler, edición octubre de 2025, p. 362. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$\theta=\arctan\left(\frac5{12}\right)\approx22{,}6^\circ.$$

La resultante apunta 22,6° por encima de la horizontal hacia la derecha. La tangente determina una inclinación, pero también hay que mirar los signos de las componentes para elegir el cuadrante. Si conocemos la masa, la aceleración tiene la misma dirección y su módulo es $13/m$ en unidades del SI.

## Descomponer una fuerza oblicua

Si el ángulo $\theta$ se mide desde el semieje horizontal positivo:

$$F_x=F\cos\theta,\qquad F_y=F\sin\theta.$$

El coseno corresponde al cateto adyacente al ángulo dado. Si el ángulo se midiera desde la vertical, se intercambiarían las funciones para esos ejes. Los signos dependen del sentido de las componentes.

En la p. 363, $F=50\,\mathrm N$ y $\theta=35^\circ$:

{{< figura src="/images/diagramas/cap06_descomposicion_pp363.png" width="293" alt="Proyecciones de una fuerza de 50 N." caption="Proyecciones de una fuerza de 50 N." source="Jeff Bigler, edición octubre de 2025, p. 363. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$F_x=50\cos35^\circ\approx40{,}96\,\mathrm N,$$
$$F_y=50\sin35^\circ\approx28{,}68\,\mathrm N.$$

Sus valores redondeados son 41,0 N y 28,7 N. No suman 50 N porque son proyecciones perpendiculares; satisfacen $F_x^2+F_y^2=F^2$.

### Agregar otras fuerzas al mismo objeto

El original agrega 20 N hacia la izquierda y 30 N hacia abajo:

{{< figura src="/images/diagramas/cap06_fuerza-oblicua_pp363.png" width="560" alt="Fuerza oblicua y fuerzas adicionales." caption="Fuerza oblicua y fuerzas adicionales." source="Jeff Bigler, edición octubre de 2025, p. 363. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$\sum F_x=50\cos35^\circ-20\approx20{,}96\,\mathrm N,$$
$$\sum F_y=50\sin35^\circ-30\approx-1{,}32\,\mathrm N.$$

$$F_{\mathrm{neta}}\approx\sqrt{20{,}96^2+(-1{,}32)^2}\approx21{,}00\,\mathrm N,$$
$$\theta\approx\arctan\left(\frac{-1{,}32}{20{,}96}\right)\approx-3{,}6^\circ.$$

Apunta hacia la derecha y ligeramente hacia abajo. Conviene conservar cifras intermedias para no perder esa pequeña componente vertical.

{{< nota-adaptacion pagina="363" origen="Texto del original: cociente de componentes en el cálculo del ángulo" >}}
En el desarrollo impreso aparece el decimal −0,630. El cociente de las componentes es aproximadamente **−0,0630**, que conduce al resultado final de −3,6° indicado por el propio libro. Aquí se explicita la corrección decimal; permanece en revisión editorial.
{{< /nota-adaptacion >}}

## Fuerza oblicua y movimiento horizontal

En la p. 364, un operario aplica 200 N a 60° respecto de la horizontal. Su componente horizontal vale:

$$F_x=200\cos60^\circ=100\,\mathrm N.$$

Esos 100 N son la contribución de esa fuerza al balance horizontal. Si existen otras fuerzas horizontales, hay que incluirlas. La componente vertical también importa para el contacto con el suelo.

{{< nota-adaptacion pagina="364" origen="Texto del original: identificación de la componente paralela con la fuerza neta" >}}
La igualdad $F_{\mathrm{neta},x}=F\cos\theta$ requiere que no existan otras fuerzas horizontales o que su suma sea cero. Con rozamiento, por ejemplo, el balance es $F\cos\theta-f=ma_x$. La componente vertical no puede descartarse al calcular la normal.
{{< /nota-adaptacion >}}

## Equilibrio con fuerzas en ángulo

El equilibrio traslacional exige $\sum F_x=0$ y $\sum F_y=0$. Puede corresponder a reposo o a velocidad constante. Si se estudia un cuerpo extenso, además debe verificarse el equilibrio de momentos; esta sección trata el balance de fuerzas.

La estrategia de las pp. 365–366 consiste en descomponer, sumar por eje, imponer equilibrio y reconstruir la fuerza desconocida.

### Ejemplo: equilibrar 50 N y 30 N

En el dibujo original, las fuerzas conocidas son **50 N hacia la derecha y 30 N hacia abajo**:

{{< figura src="/images/diagramas/cap06_equilibrio_pp366.png" width="329" alt="Equilibrante hacia arriba a la izquierda." caption="Equilibrante hacia arriba a la izquierda." source="Jeff Bigler, edición octubre de 2025, p. 366. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$F_x+50=0,\qquad F_y-30=0,$$
$$F_x=-50\,\mathrm N,\qquad F_y=+30\,\mathrm N.$$

$$F=\sqrt{50^2+30^2}\approx58{,}3\,\mathrm N,$$
$$\alpha=\arctan\left(\frac{30}{50}\right)\approx31{,}0^\circ.$$

La fuerza apunta **31,0° por encima de la horizontal hacia la izquierda**.

{{< nota-adaptacion pagina="366" origen="Adaptación anterior: sentido del ejemplo de equilibrio" >}}
La versión anterior de esta nota había cambiado los 30 N del dibujo a una fuerza hacia arriba y, por lo tanto, ubicaba la equilibrante hacia abajo. El original muestra 30 N hacia abajo y la equilibrante hacia arriba a la izquierda. Se restituye la orientación del libro; no se atribuye este error al original.
{{< /nota-adaptacion >}}

### Ejemplo: componentes que equilibran 75 N

La fuerza de 75 N apunta hacia arriba a la izquierda, a 50° de la horizontal izquierda. Las otras fuerzas deben cancelar sus proyecciones:

{{< figura src="/images/diagramas/cap06_equilibrio-75_pp366.png" width="295" alt="Equilibrio de una fuerza de 75 N." caption="Equilibrio de una fuerza de 75 N." source="Jeff Bigler, edición octubre de 2025, p. 366. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$F_1=75\cos50^\circ\approx48{,}2\,\mathrm N\quad\text{hacia la derecha},$$
$$F_2=75\sin50^\circ\approx57{,}5\,\mathrm N\quad\text{hacia abajo}.$$

## Tracción oblicua, normal y rozamiento

En los ejercicios 5 y 6 (pp. 370–371), una caja pesa 200 N. Se tira de ella con 160 N a 60° sobre la horizontal y el rozamiento tiene módulo 75 N hacia la izquierda:

{{< figura src="/images/diagramas/cap06_normal-traccion_pp370.png" width="293" alt="Normal y aceleración con tracción oblicua." caption="Normal y aceleración con tracción oblicua." source="Jeff Bigler, edición octubre de 2025, p. 370. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si la caja mantiene contacto y $a_y=0$:

$$N+F\sin\theta-mg=0,$$
$$N=mg-F\sin\theta.$$

$$N=200-160\sin60^\circ\approx61{,}4\,\mathrm N.$$

Horizontalmente:

$$F\cos\theta-f=ma_x.$$

Con $g=10\,\mathrm{m/s^2}$, $m=200/10=20\,\mathrm{kg}$, de modo que:

$$a_x=\frac{160\cos60^\circ-75}{20}=0{,}25\,\mathrm{m/s^2}.$$

El rozamiento se da como dato; no hace falta inventar un coeficiente. Si en otro problema se usa $f_k=\mu_kN$, se está suponiendo deslizamiento y ese modelo de fricción. En reposo, el rozamiento estático se ajusta hasta un máximo $\mu_sN$.

Si se empuja **hacia abajo** con ángulo $\theta$ bajo la horizontal, la misma proyección conduce a $N=mg+F\sin\theta$. Si la tracción hacia arriba exigiera $N\lt 0$, el supuesto de contacto falla: la superficie no puede tirar del objeto hacia abajo.

## Ejercicios del original

Se conservan los datos de las pp. 367–369. Elegí ejes y dibujá las fuerzas antes de calcular.

1. Actúan 15 N y 10 N hacia la derecha, y 20 N hacia la izquierda. Determiná la resultante.
2. Sobre un bloque de 4,5 kg sin rozamiento actúan 3,7 N horizontales hacia la derecha y 5,9 N a 43° sobre esa horizontal. Calculá la aceleración horizontal.

{{< figura src="/images/diagramas/cap06_ejercicio-bloque_pp367.png" width="293" alt="Ejercicio de aceleración horizontal." caption="Ejercicio de aceleración horizontal." source="Jeff Bigler, edición octubre de 2025, p. 367. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

3. Un bloque está en equilibrio bajo 20 N a la derecha, 15 N hacia abajo y una fuerza desconocida. Determiná las componentes, módulo y dirección de esa fuerza.
4. Actúan 10 N a la derecha, 3 N hacia abajo y 12 N a 30° sobre la horizontal derecha. Calculá las componentes y la resultante.

{{< figura src="/images/diagramas/cap06_ejercicio-resultante_pp369.png" width="303" alt="Ejercicio de suma de tres fuerzas." caption="Ejercicio de suma de tres fuerzas." source="Jeff Bigler, edición octubre de 2025, p. 369. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

{{< details title="Resultados y comprobación por componentes" >}}
1. $F_x=15+10-20=5\,\mathrm N$, hacia la derecha.
2. $a_x=(3{,}7+5{,}9\cos43^\circ)/4{,}5\approx1{,}78\,\mathrm{m/s^2}$, que redondea a $1{,}8\,\mathrm{m/s^2}$.
3. $R_x=-20\,\mathrm N$, $R_y=15\,\mathrm N$; $R=25\,\mathrm N$, a 36,9° sobre la horizontal izquierda.
4. $F_x=10+12\cos30^\circ\approx20{,}4\,\mathrm N$; $F_y=-3+12\sin30^\circ=3{,}0\,\mathrm N$. El módulo es aproximadamente 20,6 N y la inclinación 8,4° sobre la horizontal derecha.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.