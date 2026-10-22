+++
title = "Contracción de longitudes y dilatación del tiempo"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 2
description = "Longitud propia, tiempo propio, reloj de luz y condiciones de comparación entre marcos."
tags = ["cap13", "relatividad"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 594–599"
figuras_estado = "3 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Length Contraction & Time Dilation», Bigler, edición de octubre de 2025, [pp. 594–599](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=594).

## Factor de Lorentz

Para velocidad relativa $v$ entre marcos inerciales:

$$\gamma=\frac1{\sqrt{1-v^2/c^2}},\qquad\lvert v\rvert\lt c.$$

{{< figura src="/images/diagramas/cap13_factor-lorentz_pp595.png" width="560" alt="Crecimiento del factor de Lorentz." caption="Crecimiento del factor de Lorentz." source="Jeff Bigler, edición octubre de 2025, p. 595. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para $v=0$, $\gamma=1$. Si $v\ll c$, su diferencia respecto de uno es pequeña; al acercarse $v$ a $c$ por debajo, aumenta sin límite. No se sustituye $v=c$ para describir un observador material.

## Contracción de longitudes

La **longitud propia** $L_0$ se mide en el marco donde el objeto está en reposo. Un observador que lo ve moverse mide su longitud paralela al movimiento mediante posiciones de los dos extremos **simultáneas en su propio marco**:

$$L=\frac{L_0}{\gamma}=L_0\sqrt{1-v^2/c^2}.$$

La dimensión transversal no se contrae por esta relación. El objeto no se encuentra acortado para quienes están en reposo con él: la comparación relaciona mediciones hechas desde marcos diferentes, con sus propios criterios de simultaneidad.

{{< nota-adaptacion pagina="595" origen="Texto del original: longitudes en el propio marco y reciprocidad de gamma" >}}
El pasaje sugiere que las distancias del propio marco del objeto tienden a cero. La contracción corresponde a la medición desde un marco donde el objeto se mueve. Además, la relación consistente es $L_0/L=\gamma$, no $L/L_0=\gamma$. Se explicita la elección de marcos y la simultaneidad necesaria para medir una longitud.
{{< /nota-adaptacion >}}

## Un reloj que utiliza luz

Imaginemos dos espejos separados verticalmente una distancia $d$, entre los cuales viaja un pulso de luz. En el marco del reloj, el tiempo de ida y vuelta es su intervalo propio:

$$\Delta\tau=\frac{2d}{c}.$$

{{< figura src="/images/diagramas/cap13_reloj-reposo_pp596.png" width="293" alt="Recorrido de la luz en el marco del reloj." caption="Recorrido de la luz en el marco del reloj." source="Jeff Bigler, edición octubre de 2025, p. 596. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En un marco donde el reloj se mueve horizontalmente a velocidad $v$, la luz recorre una trayectoria oblicua más larga:

{{< figura src="/images/diagramas/cap13_reloj-movimiento_pp596.png" width="560" alt="Recorrido oblicuo de la luz desde otro marco inercial." caption="Recorrido oblicuo de la luz desde otro marco inercial." source="Jeff Bigler, edición octubre de 2025, p. 596. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para medio ciclo, el teorema de Pitágoras da:

$$\left(\frac{c\Delta t}{2}\right)^2=d^2+\left(\frac{v\Delta t}{2}\right)^2.$$

Por tanto:

$$(c^2-v^2)\Delta t^2=4d^2,$$
$$\Delta t=\frac{2d/c}{\sqrt{1-v^2/c^2}}=\gamma\Delta\tau.$$

El **tiempo propio** es el que mide el reloj entre sucesos que ocurren en el mismo lugar de su marco: emisión y recepción en el mismo espejo. El otro marco asigna un intervalo mayor. No existe un marco universalmente «estacionario» privilegiado.

## Simultaneidad y viajes de ida y vuelta

La simultaneidad de sucesos distantes depende del marco. Para comparar edades tras una ida y vuelta hay que sumar el tiempo propio sobre toda la trayectoria; el viajero cambia de marco durante el retorno. No basta decir que cada persona ve siempre a la otra moverse de forma simétrica, pues sus trayectorias entre los encuentros son distintas.

## Ejemplo de la nave Enterprise

La nave ficticia del ejemplo mide 420 m en reposo y se quiere que su longitud medida sea 25 m, en la dirección del movimiento:

$$\frac{L}{L_0}=\sqrt{1-v^2/c^2},$$
$$\frac vc=\sqrt{1-\left(\frac{25}{420}\right)^2}\approx0{,}99823.$$

Es aproximadamente $2{,}993\times10^8\,\mathrm{m/s}$ usando el redondeo de $c$ del libro. Se trata de una longitud medida con simultaneidad definida; la apariencia fotográfica de un objeto también depende del tiempo que tarda la luz de cada punto en llegar al observador.

## Extensión del original: gravedad y relojes

La p. 597 introduce un tema de **relatividad general**, que se mantiene separado de la comparación de marcos inerciales anterior. Para un reloj estático en el exterior de un cuerpo esférico no rotante:

$$d\tau=\sqrt{1-\frac{2GM}{rc^2}}\,dt,$$

donde $t$ es el tiempo coordenado normalizado al de un observador estático muy lejano. La fórmula supone $r\gt 2GM/c^2$. No compara simplemente un reloj «en movimiento» con otro «en reposo».

{{< nota-adaptacion pagina="597" origen="Texto del original: tiempo propio y dilatación gravitatoria" >}}
El tiempo propio no significa tiempo «en ausencia de gravedad»: es el que mide localmente un reloj a lo largo de su trayectoria. La fórmula gravitatoria exige especificar qué relojes se comparan y no se deriva de la relatividad especial. Se precisan esas condiciones en lugar de conservar las etiquetas de marcos móviles del pasaje.
{{< /nota-adaptacion >}}

### Radio de Schwarzschild

La expresión $r_s=2GM/c^2$ caracteriza el horizonte del modelo esférico no rotante. Da aproximadamente 3 km para una masa solar y 9 mm para una masa terrestre; esos números no significan que el Sol o la Tierra actuales sean agujeros negros.

{{< nota-adaptacion pagina="598" origen="Texto del original: tiempo imaginario dentro de un agujero negro" >}}
Que la raíz de la fórmula para un **reloj estático exterior** deje de ser real al sustituir $r\lt r_s$ no demuestra que «el tiempo sea imaginario» o deje de transcurrir. Ese observador estático no puede existir allí y la fórmula está fuera de su dominio. Un observador en caída puede cruzar el horizonte en tiempo propio finito. La imposibilidad de escapar del horizonte se describe con la geometría causal, no como detención de todo reloj. Véase el [tratamiento de relatividad de la Universidad de Southampton, sección de agujeros negros](https://www.southampton.ac.uk/~doug/relativity/Advanced_relativity.pdf).
{{< /nota-adaptacion >}}

## Ejercicios de la p. 599

1. Un viaje idealizado tiene rapidez de 0,7$c$ durante los tramos y dura 25 años en el marco terrestre, despreciando tiempos de maniobra. ¿Cuánto tiempo propio transcurre a bordo?
2. Una persona de 16 años espera en la Tierra. Sus padres de 48 años viajan y regresan habiendo envejecido 10 años; al volver tienen la misma edad que quien esperó. En el modelo de tramos a igual rapidez y maniobras breves, hallá esa rapidez.
3. La nave Voyager ficticia tiene longitud propia de 120 m y viaja a $2{,}88\times10^8\,\mathrm{m/s}$. Hallá su longitud contraída usando $c\approx3{,}00\times10^8\,\mathrm{m/s}$.

{{< details title="Resultados y supuestos" >}}
1. $\Delta\tau=25\sqrt{1-0{,}7^2}\approx17{,}85$ años. Se calcula el efecto temporal; no se conserva como destino Andrómeda, pues esa duración y rapidez no permiten una ida y vuelta a esa galaxia.
2. Los padres vuelven con 58 años; quien esperó debe envejecer $58-16=42$ años. $\gamma=42/10=4{,}2$, por lo que $v/c=\sqrt{1-1/4{,}2^2}\approx0{,}971$. No es necesario suponer un «centro del universo» como destino.
3. $L=120\sqrt{1-0{,}96^2}=33{,}6\,\mathrm m$. El valor coincide con la respuesta del libro al usar esa aproximación de $c$.
{{< /details >}}

{{< nota-adaptacion pagina="599" origen="Texto del original: destinos de los ejercicios de viaje" >}}
Los destinos «Andrómeda» y «centro del universo» de los dos primeros enunciados no se usan como datos físicos válidos del cálculo. Se conserva la comparación de edades y velocidades como idealización matemática, identificando la modificación de contexto.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.