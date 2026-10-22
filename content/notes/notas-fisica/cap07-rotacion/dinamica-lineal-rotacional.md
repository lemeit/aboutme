+++
title = "Problemas de dinámica lineal y rotacional"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 4
description = "Equilibrio de vigas y resolución acoplada de masas y poleas con momento de inercia."
tags = ["cap07", "rotación"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 408–416"
figuras_estado = "6 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Solving Linear & Rotational Force/Torque Problems», Bigler, edición de octubre de 2025, [pp. 408–416](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=408).

## Relaciones entre traslación y rotación

El libro organiza las magnitudes lineales y angulares como pares análogos:

| Traslación | Rotación alrededor de un eje fijo |
|:---|:---|
| Posición $x$ | Posición angular $\theta$ |
| Velocidad $v$ | Velocidad angular $\omega$ |
| Aceleración $a$ | Aceleración angular $\alpha$ |
| Masa $m$ | Momento de inercia $I$ |
| Fuerza neta $\sum F=ma$ | Momento neto $\sum\tau=I\alpha$ |

Para un punto a distancia fija $R$ del eje, el arco recorrido satisface $s=R\theta$, de donde:

$$v_t=R\omega,\qquad a_t=R\alpha.$$

La aceleración tangencial cambia la rapidez; la radial, $a_c=R\omega^2$, cambia la dirección. La relación $a_t=R\alpha$ no representa toda la aceleración de un punto que gira.

{{< nota-adaptacion pagina="409" origen="Texto del original: unidades del radián y sustitución de magnitudes" >}}
El radián es la unidad del SI para el ángulo plano y tiene dimensión uno, pues expresa un cociente de longitudes. **Sí hay que convertir grados o vueltas a radianes** para usar directamente $s=R\theta$ y sus derivadas. La analogía entre fórmulas lineales y angulares tampoco permite sustituir símbolos sin verificar las condiciones físicas de cada ecuación.
{{< /nota-adaptacion >}}

## Equilibrio de una viga con cuerda y bisagra

Una viga uniforme horizontal de longitud $L$ y peso $W$ está articulada a la pared. Una cuerda en su extremo forma 40° con la horizontal, como en la p. 411.

{{< figura src="/images/diagramas/cap07_viga_pp411.png" width="293" alt="Fuerzas sobre una viga articulada." caption="Fuerzas sobre una viga articulada." source="Jeff Bigler, edición octubre de 2025, p. 411. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La bisagra ideal ejerce componentes de fuerza $H_x,H_y$, pero no un par resistente. Tomamos momentos respecto de ella para eliminar esas fuerzas de la ecuación de giro:

$$TL\sin40^\circ-W\frac L2=0,$$
$$T=\frac{W}{2\sin40^\circ}.$$

Luego imponemos equilibrio de fuerzas:

$$H_x-T\cos40^\circ=0,\qquad H_y+T\sin40^\circ-W=0.$$

Así, $H_x=T\cos40^\circ$ y $H_y=W/2$. La fuerza de la bisagra no es igual a la tensión: sus componentes deben equilibrar **todas** las otras fuerzas.

{{< nota-adaptacion pagina="411" origen="Texto del original: momento atribuido a la pared" >}}
El pasaje dice que la pared debe aplicar un momento que contrarreste al de la cuerda y cambia el extremo de referencia. Para una **bisagra ideal**, respecto del mismo apoyo el momento de su fuerza es cero; el peso de la viga equilibra al de la cuerda. Todos los momentos de una ecuación deben calcularse respecto del mismo punto. Una unión empotrada sería otro modelo y sí podría transmitir un par.
{{< /nota-adaptacion >}}

## Polea con masa: por qué cambian las tensiones

Si una polea tiene momento de inercia, hace falta un momento neto para acelerarla. En una cuerda que no desliza, los dos tramos pueden tener tensiones diferentes. Usar simultáneamente $T_1=T_2$ y una aceleración angular no nula para una polea con $I\gt 0$ sería incompatible con el balance de momentos.

### Ejemplo del original: 23 kg, 14 kg y una polea de 40 kg

{{< figura src="/images/diagramas/cap07_polea-maciza_pp412.png" width="293" alt="Masas de 23 kg y 14 kg con polea maciza." caption="Masas de 23 kg y 14 kg con polea maciza." source="Jeff Bigler, edición octubre de 2025, p. 412. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Datos de la p. 412: $m_1=23\,\mathrm{kg}$, $m_2=14\,\mathrm{kg}$, $R=0{,}350\,\mathrm m$, polea cilíndrica maciza de masa $M=40\,\mathrm{kg}$. El bloque de 23 kg parte del reposo a 0,50 m del suelo. Suponemos eje sin rozamiento, cuerda ligera e inextensible y ausencia de deslizamiento.

Para el bloque que baja y el que sube:

$$m_1g-T_1=m_1a,$$
$$T_2-m_2g=m_2a.$$

Para la polea:

$$(T_1-T_2)R=I\alpha,\qquad a=R\alpha.$$

Por tanto:

$$T_1-T_2=\frac{I}{R^2}a.$$

Sumando las ecuaciones de las masas y sustituyendo esta diferencia:

$$(m_1-m_2)g=\left(m_1+m_2+\frac I{R^2}\right)a,$$
$$a=\frac{(m_1-m_2)g}{m_1+m_2+I/R^2}.$$

Como $I=\tfrac12MR^2=2{,}45\,\mathrm{kg\,m^2}$, resulta $I/R^2=20\,\mathrm{kg}$ y, con $g=10\,\mathrm{m/s^2}$:

$$a=\frac{90}{23+14+20}\approx1{,}58\,\mathrm{m/s^2},$$
$$\alpha=\frac aR\approx4{,}51\,\mathrm{rad/s^2}.$$

Las tensiones son:

$$T_1=23(10-a)\approx193{,}7\,\mathrm N,$$
$$T_2=14(10+a)\approx162{,}1\,\mathrm N.$$

El momento **sobre la polea** es:

$$\tau_{\mathrm{polea}}=(T_1-T_2)R\approx11{,}1\,\mathrm{N\,m}.$$

El tiempo hasta que el bloque toca el suelo, mientras se mantienen estas condiciones, se obtiene de $h=\tfrac12at^2$:

$$t=\sqrt{\frac{2h}{a}}\approx0{,}796\,\mathrm s.$$

{{< nota-adaptacion pagina="412" origen="Texto del original: pesos usados como fuerzas sobre la polea" >}}
El libro calcula $(m_1-m_2)gR=31{,}5\,\mathrm{N\,m}$ y lo divide solo por la inercia de la polea. Los pesos actúan sobre los bloques; las fuerzas que ejercen momento sobre la polea son las tensiones. Al acelerar los bloques, $T_1\neq m_1g$ y $T_2\neq m_2g$. El sistema completo también tiene la inercia efectiva de las masas: $I_{\mathrm{ef}}=I+(m_1+m_2)R^2$. Con ella, el momento impulsor de 31,5 N·m conduce al mismo $\alpha\approx4{,}51\,\mathrm{rad/s^2}$. Se reemplazan los resultados impresos de 12,9 rad/s², 4,5 m/s² y 0,47 s por el desarrollo acoplado, en revisión.
{{< /nota-adaptacion >}}

## Vigas: ejercicios de las pp. 413–415

### Carga en el extremo y cuerda a 30° de la horizontal

Una viga uniforme pesa 100 N y sostiene una masa de 25 kg en su extremo. La cuerda también se une al extremo.

{{< figura src="/images/diagramas/cap07_viga-carga_pp413.png" width="293" alt="Bolsa de 25 kg al extremo de la viga." caption="Bolsa de 25 kg al extremo de la viga." source="Jeff Bigler, edición octubre de 2025, p. 413. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Respecto de la bisagra:

$$TL\sin30^\circ-250L-100\frac L2=0,$$
$$T=\frac{250+50}{\sin30^\circ}=600\,\mathrm N.$$

La cuerda vertical que sostiene la bolsa tiene tensión de 250 N; no es la misma cuerda de soporte de la viga.

### Soporte a un cuarto de la longitud

La masa del extremo es 75 kg y la viga pesa 100 N. La cuerda se fija a $L/4$ de la bisagra y forma **30° con la pared vertical**, es decir 60° con la viga horizontal.

{{< figura src="/images/diagramas/cap07_viga-cuarto_pp414.png" width="293" alt="Cuerda fijada a un cuarto de la longitud." caption="Cuerda fijada a un cuarto de la longitud." source="Jeff Bigler, edición octubre de 2025, p. 414. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$T\frac L4\sin60^\circ-750L-100\frac L2=0,$$
$$T=\frac{4(750+50)}{\sin60^\circ}\approx3695\,\mathrm N.$$

El brazo pequeño exige una tensión grande. Confundir el ángulo medido desde la pared con el medido desde la viga produce otro resultado.

### Viga inclinada y cuerda horizontal

Una viga de peso 100 N forma 37° con el piso. Una masa de 25 kg cuelga a $2L/3$ del apoyo y una cuerda horizontal tira del extremo.

{{< figura src="/images/diagramas/cap07_viga-inclinada_pp415.png" width="293" alt="Carga sobre una viga inclinada." caption="Carga sobre una viga inclinada." source="Jeff Bigler, edición octubre de 2025, p. 415. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Tomando momentos respecto del apoyo inferior:

$$TL\sin37^\circ-250\frac{2L}{3}\cos37^\circ-100\frac L2\cos37^\circ=0,$$
$$T=\left(\frac{500}{3}+50\right)\frac{\cos37^\circ}{\sin37^\circ}\approx288\,\mathrm N.$$

## Polea doble con radios diferentes

La p. 416 plantea $m_1=2\,\mathrm{kg}$ a radio $R_1=0{,}25\,\mathrm m$ y $m_2=3{,}5\,\mathrm{kg}$ a $R_2=0{,}40\,\mathrm m$. El momento de inercia de la polea es $1{,}5\,\mathrm{kg\,m^2}$.

{{< figura src="/images/diagramas/cap07_polea-doble_pp416.png" width="293" alt="Dos radios y dos aceleraciones lineales diferentes." caption="Dos radios y dos aceleraciones lineales diferentes." source="Jeff Bigler, edición octubre de 2025, p. 416. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Elegimos positivo el giro en que baja la masa 2 y sube la masa 1. La cuerda no desliza, por lo que $a_1=R_1\alpha$ y $a_2=R_2\alpha$; las aceleraciones lineales no tienen el mismo módulo.

$$T_1-m_1g=m_1R_1\alpha,$$
$$m_2g-T_2=m_2R_2\alpha,$$
$$T_2R_2-T_1R_1=I\alpha.$$

Eliminando las tensiones:

$$\alpha=\frac{m_2gR_2-m_1gR_1}{I+m_1R_1^2+m_2R_2^2}.$$

$$\alpha=\frac{14-5}{1{,}5+2(0{,}25)^2+3{,}5(0{,}40)^2}\approx4{,}12\,\mathrm{rad/s^2}.$$

$$a_1\approx1{,}03\,\mathrm{m/s^2}\quad\text{hacia arriba},$$
$$a_2\approx1{,}65\,\mathrm{m/s^2}\quad\text{hacia abajo}.$$

El momento neto sobre la polea es $I\alpha\approx6{,}18\,\mathrm{N\,m}$.

{{< nota-adaptacion pagina="416" origen="Texto del original: dinámica de la polea doble" >}}
Los 9 N·m que indica el libro son el momento impulsor de los pesos en la coordenada angular del **sistema completo**. No son el momento neto sobre la polea sola. Dividirlos únicamente por 1,5 kg·m² omite las inercias efectivas de ambas masas. El planteo acoplado anterior corrige los valores impresos de 6 rad/s², 1,5 m/s² y 2,4 m/s²; se deja identificado como observación en revisión.
{{< /nota-adaptacion >}}

## Cómo comprobar el planteo

En los problemas de equilibrio, verificá tanto las fuerzas como los momentos respecto del mismo punto. En los de movimiento, calculá las tensiones desde cada masa y comprobá luego el momento sobre la polea. Las relaciones geométricas de no deslizamiento conectan los balances: traslación y rotación tienen ecuaciones distintas, pero sus incógnitas están acopladas.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.