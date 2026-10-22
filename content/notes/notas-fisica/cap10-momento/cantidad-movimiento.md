+++
title = "Cantidad de movimiento lineal y colisiones"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 1
description = "Momento lineal, energía cinética, tipos de colisión y coeficiente de restitución."
tags = ["cap10", "cantidad de movimiento"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 500–506"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Linear Momentum», Bigler, edición de octubre de 2025, [pp. 500–506](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=500).

## Masa en movimiento

La cantidad de movimiento lineal, también llamada momento lineal, es:

$$\vec p=m\vec v.$$

Es vectorial y tiene la misma dirección y sentido que la velocidad. Su unidad es $\mathrm{kg\,m/s}$, equivalente a $\mathrm{N\,s}$. En una dimensión elegimos un sentido positivo y conservamos los signos; en dos dimensiones sumamos componentes.

Un cuerpo en reposo tiene momento lineal cero en ese marco de referencia, pero conserva su masa e inercia. La inercia no es sinónimo de cantidad de movimiento: la masa mide la respuesta a una fuerza, mientras que $\vec p$ también depende de la velocidad.

{{< figura src="/images/diagramas/cap10_choque-camion_pp502.png" width="560" alt="Transferencia de momento entre dos vehículos." caption="Transferencia de momento entre dos vehículos." source="Jeff Bigler, edición octubre de 2025, p. 502. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El choque entre un camión en movimiento y un automóvil inicialmente detenido ilustra una transferencia: el automóvil adquiere momento y el camión cambia el suyo. Para analizar si la suma se conserva hay que definir el sistema y evaluar el impulso de fuerzas externas durante el choque.

## Momento y energía cinética son magnitudes distintas

$$\vec p=m\vec v,\qquad K=\frac12mv^2.$$

El momento es vectorial; la energía cinética es escalar. Para un cuerpo de masa constante y velocidad no relativista:

$$p^2=m^2v^2\quad\Longrightarrow\quad K=\frac{p^2}{2m}.$$

Dos cuerpos con momentos opuestos pueden tener momento total cero y energía cinética total positiva. Además, $K_{\mathrm{total}}$ no se calcula en general como $p_{\mathrm{total}}^2/(2M)$: esa expresión describe solo la parte asociada al movimiento del centro de masa y omite el movimiento relativo.

El original presenta un contexto histórico sobre las discusiones entre magnitudes proporcionales a $mv$ y a $mv^2$. En esta adaptación se utilizan las definiciones actuales, sin tomar aquellas denominaciones históricas como definiciones de las magnitudes modernas.

## Clasificar una colisión

| Tipo | Energía cinética de traslación del sistema | Estado posterior |
|:---|:---|:---|
| Elástica ideal | Se conserva | Los cuerpos se separan |
| Inelástica | Disminuye y se transforma en otras formas | Pueden separarse o quedar unidos |
| Perfectamente inelástica | Los cuerpos adquieren una velocidad común | Quedan unidos |

La energía total se conserva al incluir calentamiento, deformaciones, sonido y otras transferencias. Que disminuya $K$ no significa que la energía desaparezca. La conservación del momento depende del impulso externo, no de que la colisión sea elástica.

Los choques macroscópicos reales pueden aproximarse como elásticos cuando las pérdidas son pequeñas para la precisión buscada. Los fenómenos microscópicos también pueden ser elásticos o inelásticos: no basta decir «son moléculas» para garantizar elasticidad.

## Coeficiente de restitución

Para un choque frontal unidimensional, con el cuerpo 1 aproximándose al 2 de modo que $v_{1i}-v_{2i}\gt 0$:

$$e=\frac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}.$$

Es la razón entre la rapidez relativa de separación y la de aproximación, medidas sobre la línea del impacto. $e=1$ corresponde al modelo elástico y $e=0$ a velocidad relativa final nula en esa dirección. Para colisiones pasivas ordinarias, $0\leq e\leq1$.

{{< nota-adaptacion pagina="501" origen="Texto del original: signo y alcance del coeficiente de restitución" >}}
La fórmula impresa usa el mismo orden de resta en numerador y denominador, sin el signo menos que requiere esa convención. Se escribe aquí como razón de **rapideces** relativas positivas. En un rebote contra un piso ideal inmóvil, el otro cuerpo no «deja de existir»: se aproxima su velocidad como cero. Para la pelota, $e=\lvert v_f\rvert/\lvert v_i\rvert$, no el cociente con signo negativo. En más dimensiones se aplica a las componentes normales al contacto.
{{< /nota-adaptacion >}}

## Velocidades finales en un choque elástico frontal

Si el impulso externo es despreciable:

$$m_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}.$$

La elasticidad añade:

$$\frac12m_1v_{1i}^2+\frac12m_2v_{2i}^2=\frac12m_1v_{1f}^2+\frac12m_2v_{2f}^2.$$

Para la solución de colisión no trivial, ambas ecuaciones dan $v_{1i}-v_{2i}=v_{2f}-v_{1f}$. Sustituyendo en la conservación del momento:

$$v_{1f}=\frac{(m_1-m_2)v_{1i}+2m_2v_{2i}}{m_1+m_2},$$
$$v_{2f}=\frac{2m_1v_{1i}+(m_2-m_1)v_{2i}}{m_1+m_2}.$$

Estas expresiones son para choques frontales en una dimensión. Con masas iguales intercambian velocidades; si el segundo cuerpo estaba quieto, el primero puede detenerse y transferirle su velocidad.

En un choque inelástico no se puede imponer además $K_i=K_f$: hace falta otro dato, como una velocidad final, el coeficiente de restitución o la condición de que queden unidos.

## El péndulo de Newton

{{< figura src="/images/diagramas/cap10_pendulo-newton_pp505.png" width="331" alt="Una bola entra y una bola sale en el péndulo de Newton." caption="Una bola entra y una bola sale en el péndulo de Newton." source="Jeff Bigler, edición octubre de 2025, p. 505. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el modelo habitual de esferas iguales alineadas y choques casi elásticos, al soltar una bola se observa salir otra del extremo opuesto con rapidez aproximadamente igual. El momento y la energía cinética ayudan a entender ese resultado.

Si entra una bola de masa $m$ con rapidez $v$, el momento es $mv$ y la energía $\tfrac12mv^2$. Si salieran dos bolas iguales a $v/2$, su momento sería también $mv$, pero su energía sería:

$$2\left[\frac12m\left(\frac v2\right)^2\right]=\frac14mv^2,$$

la mitad de la inicial. Ese resultado no corresponde al modelo casi elástico observado. En el aparato real, rozamientos, sonido y deformaciones reducen progresivamente la amplitud.

{{< nota-adaptacion pagina="505" origen="Texto del original: fuerzas externas y unicidad del resultado" >}}
El aparato tiene peso y tensiones externas. Durante el breve choque se aproxima como despreciable su **impulso horizontal** frente al de contacto. Además, momento y energía por sí solos no determinan todas las velocidades de un sistema de muchas bolas: intervienen la geometría y el modelo de contacto. Se evita presentar la conservación como una prueba de unicidad para cualquier configuración.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.