+++
title = "Tensión y poleas"
date = "2026-06-26"
draft = false
math = true
weight = 7
description = "Tensión en cuerdas, poleas simples, ventaja mecánica y máquina de Atwood."
tags = ["cap05", "fuerzas", "tensión", "polea", "Atwood", "ventaja mecánica", "cuerdas"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 324–336"
figuras_estado = "8 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 324–336. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=324).

## Qué mide la tensión

La tensión es la interacción de tracción transmitida por una cuerda, cadena o cable. Sobre el objeto unido a ella actúa a lo largo de la cuerda y tirando hacia su interior; una cuerda flexible no empuja un bloque como una barra rígida.

El modelo ideal utiliza cuerda de masa despreciable, inextensible y tensa, y poleas de masa y rozamiento despreciables. Bajo esas condiciones se usa un mismo módulo $T$ en cada tramo de la **misma cuerda**. Cuerdas diferentes no tienen por qué compartir tensión.

{{< figura src="/images/diagramas/cap05_tension-dinamometro_pp324.png" width="460" alt="Dinamómetro en una cuerda unida a una pared." caption="Dinamómetro en una cuerda unida a una pared." source="Jeff Bigler, edición octubre de 2025, p. 324. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El dinamómetro de la figura lee 100 N: mide la tensión que lo estira, no la suma de los módulos de las fuerzas opuestas que actúan en sus extremos.

{{< nota-adaptacion pagina="324" origen="Definición del original: tensión y tercera ley" >}}
Se mantiene la aclaración de p. 294: «su propia reacción» no identifica correctamente por sí sola los cuerpos del par. La cuerda tira de un cuerpo y ese cuerpo tira de la cuerda. Dos fuerzas sobre extremos distintos de un dinamómetro no se suman como dos pesos sobre un mismo gancho.
{{< /nota-adaptacion >}}

{{< figura src="/images/diagramas/cap05_tension-dos-pesas_pp325.png" width="400" alt="Dinamómetro entre dos pesas iguales." caption="Dinamómetro entre dos pesas iguales." source="Jeff Bigler, edición octubre de 2025, p. 325. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el montaje equilibrado con dos pesos de 5 N, la lectura es 5 N. Ni cero por estar equilibrado ni 10 N por sumar los dos módulos: la resultante y la tensión son cantidades distintas.

## Polea fija: cambiar la dirección

{{< figura src="/images/diagramas/cap05_polea-fija_pp326.png" width="190" alt="Polea fija: cambia el sentido de la fuerza." caption="Polea fija: cambia el sentido de la fuerza." source="Jeff Bigler, edición octubre de 2025, p. 326. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para levantar lentamente una carga de peso 100 N mediante esta polea ideal fija, la tensión necesaria es 100 N. Tirar de 10 cm de cuerda eleva la carga 10 cm. La polea cambia el sentido de la fuerza, pero no reduce su módulo en este montaje.

## Polea móvil y ramales sustentantes

{{< figura src="/images/diagramas/cap05_polea-movil_pp326.png" width="210" alt="Dos ramales sostienen la parte móvil." caption="Dos ramales sostienen la parte móvil." source="Jeff Bigler, edición octubre de 2025, p. 326. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Dos tramos verticales de la misma cuerda sostienen la parte móvil. Si su peso total es 100 N y se eleva sin aceleración:

$$2T=100\ \mathrm N\quad\Rightarrow\quad T=50\ \mathrm N$$

Para elevar 10 cm la carga hay que tirar de 20 cm de cuerda. Se intercambia fuerza por recorrido, no se obtiene energía extra.

{{< figura src="/images/diagramas/cap05_poleas-tres-ramales_pp327.png" width="210" alt="Montaje con tres ramales sustentantes." caption="Montaje con tres ramales sustentantes." source="Jeff Bigler, edición octubre de 2025, p. 327. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el montaje siguiente sostienen la carga tres ramales; para 100 N corresponde $T=100/3$ N y 30 cm de cuerda por cada 10 cm de elevación.

{{< nota-adaptacion pagina="327" origen="Caso mixto: ejemplos del original y regla del resumen anterior" >}}
La ventaja ideal depende de los ramales que sostienen la parte móvil y de sus direcciones, no del número de ruedas por sí solo. Para $n$ ramales paralelos verticales, tensión común y movimiento sin aceleración, $nT=W$. Hay que incluir en $W$ el peso de la parte móvil si no es despreciable. Si los ramales están inclinados, se suman sus componentes verticales.
{{< /nota-adaptacion >}}

En esos montajes ideales, $F_{\mathrm{entrada}}\,d_{\mathrm{entrada}}=W\,h$. Las pérdidas reales y las aceleraciones requieren otro balance.

## Máquina de Atwood: dos masas colgantes

{{< figura src="/images/diagramas/cap05_atwood_pp328.png" width="200" alt="Máquina de Atwood con masas de 5 y 10 kg." caption="Máquina de Atwood con masas de 5 y 10 kg." source="Jeff Bigler, edición octubre de 2025, p. 328. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Sean $m_1=5$ kg y $m_2=10$ kg, con $g=10\ \mathrm{m/s^2}$. Elegimos positivo hacia arriba para la masa 1 y hacia abajo para la 2, siguiendo el movimiento de la cuerda. Con $g$ como módulo positivo:

$$T-m_1g=m_1a$$
$$m_2g-T=m_2a$$

Sumando las ecuaciones escalares compatibles con esos ejes:

$$a=\frac{(m_2-m_1)g}{m_1+m_2}=\frac{10}{3}\ \mathrm{m/s^2}$$

$$T=m_1(g+a)=\frac{200}{3}\ \mathrm N\approx66{,}7\ \mathrm N$$

La tensión queda entre 50 N y 100 N. Las aceleraciones tienen el mismo módulo, pero sentidos espaciales opuestos; no son el mismo vector.

{{< nota-adaptacion pagina="329" origen="Caso mixto: redondeo del original y cálculo del resumen anterior" >}}
El original usa 66,6 N con valores intermedios redondeados. Aquí se conserva la fracción hasta el final. La expresión anterior de nuestra síntesis $5(3{,}3+10)=66{,}6$ tampoco era aritméticamente correcta: ese producto da 66,5. Los signos por bloque del original son una convención válida; no se los presenta como errata.
{{< /nota-adaptacion >}}

## Carro y masa colgante

{{< figura src="/images/diagramas/cap05_atwood-mesa_pp331.png" width="480" alt="Carro de 10 kg y masa colgante de 4 kg." caption="Carro de 10 kg y masa colgante de 4 kg." source="Jeff Bigler, edición octubre de 2025, p. 331. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para un carro de masa total 10 kg, sin fricción, y una masa colgante de 4 kg:

$$T=m_1a,\qquad m_2g-T=m_2a$$

$$a=\frac{m_2g}{m_1+m_2}=\frac{40}{14}\approx2{,}86\ \mathrm{m/s^2}$$

$$T=m_1a=\frac{200}{7}\approx28{,}6\ \mathrm N$$

Se suman las ecuaciones **a lo largo de la cuerda**, con las coordenadas compatibles elegidas. No se está afirmando que las tensiones horizontal y vertical se cancelen como vectores del plano en una suma aislada de los dos bloques: la polea fija cambia su dirección y recibe una fuerza del soporte.

Si actúa un rozamiento cinético conocido $f$ sobre el carro que se mueve hacia la polea:

$$T-f=m_1a,\qquad m_2g-T=m_2a$$

$$a=\frac{m_2g-f}{m_1+m_2}$$

Para un sistema inicialmente quieto, antes de imponer rozamiento cinético hay que comprobar si la fricción estática puede mantenerlo en reposo.

## Ejercicios del original y controles

{{< figura src="/images/diagramas/cap05_poleas-ejercicio_pp333.png" width="140" alt="Montaje del ejercicio de carga de 120 N." caption="Montaje del ejercicio de carga de 120 N." source="Jeff Bigler, edición octubre de 2025, p. 333. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

1. En el montaje de p. 333, contá los **seis ramales** que sostienen el conjunto móvil. Para una carga total de 120 N, la ventaja ideal es 6; la fuerza de entrada es 20 N y elevar 0,50 m exige tirar de 3,0 m de cuerda.
2. Derivá para mesa sin fricción $a=m_2g/(m_1+m_2)$ y $T=m_1m_2g/(m_1+m_2)$.
3. Para $m_1=2$ kg en la mesa y $m_2=6$ kg colgante: $a=7{,}5\ \mathrm{m/s^2}$ y $T=15$ N.
4. Para Atwood con 3 kg y 8 kg: $a=50/11\approx4{,}55\ \mathrm{m/s^2}$ y $T=480/11\approx43{,}6$ N.
5. Para 3 kg en mesa, 5 kg colgantes y rozamiento cinético de 10 N contra el movimiento del carro: $a=5{,}0\ \mathrm{m/s^2}$ y $T=25$ N.

Los controles numéricos son para revisar el procedimiento: elegí ejes, escribí una ecuación por cuerpo y recién después eliminá la tensión o la aceleración.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.