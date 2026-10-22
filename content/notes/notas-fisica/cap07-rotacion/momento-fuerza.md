+++
title = "Momento de una fuerza y equilibrio rotacional"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 3
description = "Torque, brazo perpendicular, regla de la mano derecha y equilibrio de palancas."
tags = ["cap07", "rotación"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 399–407"
figuras_estado = "4 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Torque», Bigler, edición de octubre de 2025, [pp. 399–407](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=399).

## Qué mide el momento de una fuerza

Una fuerza puede producir traslación y también cambiar la rotación. La eficacia para producir giro depende de dónde se aplica respecto del eje y de su dirección. Esa magnitud es el **momento de fuerza**, también llamado torque, representado por $\vec\tau$.

$$\vec\tau=\vec r\times\vec F.$$

$\vec r$ va desde el punto de referencia hasta el punto de aplicación. El módulo es:

$$\tau=rF\sin\theta=rF_\perp=F\ell,$$

donde $\theta$ es el ángulo entre $\vec r$ y $\vec F$, $F_\perp$ es la componente perpendicular a $\vec r$ y $\ell$ es la distancia perpendicular desde el eje a la **línea de acción** de la fuerza. Esa distancia es el brazo de palanca.

Una fuerza aplicada lejos del eje no garantiza un momento grande: si apunta a lo largo de la línea que pasa por el eje, $\ell=0$ y el momento es cero. Para un $r$ y una fuerza dados, el módulo máximo se obtiene a 90°.

La unidad es $\mathrm{N\,m}$. Aunque tiene las mismas dimensiones que el joule, se escribe $\mathrm{N\,m}$ para distinguir el momento de la energía y el trabajo: describen magnitudes diferentes.

## Sentido y signos

{{< figura src="/images/diagramas/cap07_mano-derecha_pp401.png" width="356" alt="Sentido del momento por la regla de la mano derecha." caption="Sentido del momento por la regla de la mano derecha." source="Jeff Bigler, edición octubre de 2025, p. 401. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La regla de la mano derecha orienta $\vec\tau$ perpendicular al plano formado por $\vec r$ y $\vec F$. En problemas planos podemos tomar antihorario como positivo y horario como negativo. Una vez elegida la convención, se mantiene en toda la suma.

El eje de rotación es una recta; en los dibujos planos suele representarse por un punto. El fulcro es el apoyo alrededor del cual puede pivotar una palanca.

## Segunda ley para un eje fijo

Para un cuerpo rígido que gira alrededor de un eje fijo, con momento de inercia constante respecto de ese eje:

$$\sum\tau=I\alpha.$$

Si el momento neto es cero, $\alpha=0$: la velocidad angular permanece constante, y puede ser cero o no. El equilibrio rotacional por sí solo no garantiza equilibrio traslacional, que requiere además $\sum\vec F=0$.

{{< nota-adaptacion pagina="400" origen="Texto del original: definición de equilibrio rotacional" >}}
En la definición impresa aparece «fuerza neta cero» al describir la cancelación de momentos. La condición correspondiente es **momento neto cero**. Fuerza neta y momento neto son balances diferentes. La forma escalar $\sum\tau=I\alpha$ se usa aquí con las condiciones de eje fijo indicadas.
{{< /nota-adaptacion >}}

### Llave de 25 cm

Ejemplo de la p. 401: fuerza perpendicular de 20 N sobre un mango de 25 cm.

$$\tau=(0{,}25)(20)=5{,}0\,\mathrm{N\,m}.$$

{{< nota-adaptacion pagina="401" origen="Texto del original: resultado de la llave" >}}
El libro muestra el producto $0{,}25\times20$ pero da 4 N·m. El producto es **5 N·m**. Se conserva el enunciado y se explicita esta discrepancia aritmética, en revisión.
{{< /nota-adaptacion >}}

## Regla equilibrada

Una regla uniforme está apoyada en su marca de 50 cm. Cuelga un peso de 4,5 N en la marca de 20 cm y otro peso $P$ en la de 100 cm (p. 402).

{{< figura src="/images/diagramas/cap07_regla-equilibrio_pp402.png" width="541" alt="Regla apoyada en su centro con dos pesos." caption="Regla apoyada en su centro con dos pesos." source="Jeff Bigler, edición octubre de 2025, p. 402. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Los brazos se miden desde el apoyo: 0,30 m y 0,50 m. El peso de la regla pasa por el apoyo y no produce momento respecto de él.

$$4{,}5(0{,}30)-P(0{,}50)=0,$$
$$P=\frac{1{,}35}{0{,}50}=2{,}7\,\mathrm N.$$

El apoyo ejerce además una fuerza vertical que equilibra los pesos. Que no aparezca en la ecuación de momentos respecto del apoyo no significa que esa fuerza no exista.

## Subibaja con una tabla que tiene masa

Datos de las pp. 403–405: una persona de 90 kg a la izquierda, otra de 50 kg a la derecha y una tabla uniforme de 6,0 m y 20 kg. Buscamos a qué distancia $x$ del extremo izquierdo colocar el apoyo.

{{< figura src="/images/diagramas/cap07_subibaja_pp403.png" width="560" alt="Tabla cuyo peso también participa del equilibrio." caption="Tabla cuyo peso también participa del equilibrio." source="Jeff Bigler, edición octubre de 2025, p. 403. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El original divide la tabla en dos segmentos y suma sus momentos. Se obtiene lo mismo representando su peso total en el centro de masa, a 3 m del extremo izquierdo. Este desarrollo equivalente evita redondear por separado las masas de los segmentos.

Tomando antihorario positivo respecto del apoyo, y anticipando que queda a la izquierda del centro:

$$90gx-50g(6-x)-20g(3-x)=0.$$

Dividimos por $g$ y despejamos:

$$90x-300+50x-60+20x=0,$$
$$160x=360,\qquad x=2{,}25\,\mathrm m.$$

El apoyo queda a 2,25 m de la persona de 90 kg. Si hubiéramos despreciado la masa de la tabla, obtendríamos otro resultado. Puede verificarse con el centro de masa del conjunto:

$$x_{\mathrm{CM}}=\frac{90(0)+20(3)+50(6)}{90+20+50}=2{,}25\,\mathrm m.$$

## Palanca inclinada y fuerza horizontal

En la p. 405 la palanca mide 10 cm y forma 40° con la horizontal; la fuerza horizontal de 40 N apunta hacia la izquierda.

{{< figura src="/images/diagramas/cap07_palanca-oblicua_pp405.png" width="380" alt="Descomposición de una fuerza horizontal sobre una palanca inclinada." caption="Descomposición de una fuerza horizontal sobre una palanca inclinada." source="Jeff Bigler, edición octubre de 2025, p. 405. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La componente perpendicular es $40\sin40^\circ=40\cos50^\circ\approx25{,}7\,\mathrm N$. El momento es:

$$\tau=(0{,}10)(40)\sin40^\circ\approx2{,}57\,\mathrm{N\,m},$$

en sentido antihorario según el dibujo.

{{< nota-adaptacion pagina="405" origen="Texto del original: ejemplo de palanca inclinada incompleto" >}}
El desarrollo impreso termina al calcular 25,7 N, que es una componente de fuerza. Se completa el paso necesario para responder el enunciado: multiplicar por 0,10 m para obtener **2,57 N·m**.
{{< /nota-adaptacion >}}

## Extensión del original: variación del momento

El libro menciona el nombre poco habitual *rotatum* para la tasa de cambio del momento de fuerza. Para un intervalo finito, $\Delta\vec\tau/\Delta t$ es una tasa media; la tasa instantánea es $d\vec\tau/dt$.

Si $\vec\tau=\vec r\times\vec F$, la derivada general incluye dos términos:

$$\frac{d\vec\tau}{dt}=\frac{d\vec r}{dt}\times\vec F+\vec r\times\frac{d\vec F}{dt}.$$

La forma $\vec r\times d\vec F/dt$ basta cuando el vector posición del punto de aplicación es constante. Esta condición explicita el alcance de la abreviatura usada en la extensión de la p. 405.

## Ejercicios de equilibrio del original

1. En la regla de la p. 407, el apoyo está en 50 cm y cuelga un peso de 6,2 N en 30 cm. ¿Qué peso debe colocarse en 100 cm? Expresá también su masa usando $g=10\,\mathrm{m/s^2}$.
2. Una niña o niño de 35 kg se sienta a 2,0 m de un apoyo. ¿A qué distancia del otro lado debe sentarse una persona de 85 kg para equilibrarlo? La tabla está equilibrada sin personas.

{{< details title="Resultados" >}}
1. $P(0{,}50)=6{,}2(0{,}20)$, de donde $P=2{,}48\,\mathrm N$ y $m=P/g=0{,}248\,\mathrm{kg}\approx0{,}25\,\mathrm{kg}$. El libro da una masa aunque el enunciado pide un peso; aquí se presentan ambas magnitudes con sus unidades.
2. $85gd=35g(2{,}0)$, por lo que $d\approx0{,}82\,\mathrm m$.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.