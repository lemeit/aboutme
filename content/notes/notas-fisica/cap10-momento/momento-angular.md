+++
title = "Momento angular y su conservación"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 4
description = "Momento de una partícula, rotación rígida, impulso angular y redistribución de masa."
tags = ["cap10", "cantidad de movimiento"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 524–529"
figuras_estado = "3 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Angular Momentum», Bigler, edición de octubre de 2025, [pp. 524–529](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=524).

## Momento angular respecto de un punto o eje

Para una partícula:

$$\vec L=\vec r\times\vec p.$$

$\vec r$ se mide desde el origen elegido. Su módulo es $L=rmv\sin\theta$, siendo $\theta$ el ángulo entre posición y velocidad. La unidad es $\mathrm{kg\,m^2/s}$. Su orientación se obtiene con la regla de la mano derecha; no apunta tangencialmente como la velocidad.

Para un cuerpo rígido que gira alrededor de un eje fijo, la componente respecto de ese eje cumple:

$$L=I\omega.$$

La relación vectorial $\vec L=I\vec\omega$ con un único escalar $I$ requiere un eje principal apropiado; aquí los problemas son de rotación alrededor de ejes de simetría o ejes fijos especificados.

{{< nota-adaptacion pagina="525" origen="Texto del original: conversión de momento lineal en angular" >}}
Una partícula que se mueve en línea recta ya puede tener momento angular respecto de un punto. $\vec L=\vec r\times\vec p$ no describe una sustancia en que se «convierte» el momento lineal: son magnitudes distintas y dependen de referencias distintas. En el impacto contra una puerta, se estudia el momento angular respecto de la bisagra porque su impulso tiene momento nulo respecto de ese eje.
{{< /nota-adaptacion >}}

## Momento externo e impulso angular

Respecto de un origen inercial fijo, el balance general es:

$$\frac{d\vec L}{dt}=\vec\tau_{\mathrm{externo}},$$
$$\vec L_f-\vec L_i=\int_{t_i}^{t_f}\vec\tau_{\mathrm{externo}}\,dt.$$

Con momento externo constante, $\Delta\vec L=\vec\tau_{\mathrm{externo}}\Delta t$; si varía, el producto usa su valor medio. Si su impulso angular es nulo, $\vec L_f=\vec L_i$.

Para un sistema que conserva $L$ sobre el mismo eje:

$$I_i\omega_i=I_f\omega_f.$$

Al acercar masa al eje disminuye $I$ y aumenta $\omega$. La energía cinética de rotación no tiene por qué conservarse durante esa redistribución: puede haber trabajo interno.

## Rueda y silla giratoria

{{< figura src="/images/diagramas/cap10_rueda-silla_pp526.png" width="472" alt="Inversión de una rueda y respuesta de la persona en la silla." caption="Inversión de una rueda y respuesta de la persona en la silla." source="Jeff Bigler, edición octubre de 2025, p. 526. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si la rueda tiene inicialmente momento angular vertical hacia arriba y se invierte hasta que apunta hacia abajo, cambia su momento angular. En el modelo sin momento externo apreciable respecto del eje vertical, la persona y la silla adquieren el momento necesario para conservar la suma.

Si la rueda pasa de $+L$ a $-L$, su cambio es $-2L$, no $-L$. La persona-silla debe adquirir $+2L$ si partía sin giro. La conservación es vectorial: invertir el eje de una rueda no equivale a mantener el mismo estado por conservar solo la rapidez de giro.

## Ejemplo: disco de vinilo

En la p. 527: radio 0,15 m, masa 0,150 kg y velocidad final de $33\tfrac13$ rpm, alcanzada desde reposo en 0,35 s. Modelamos el disco uniforme:

$$I=\frac12mR^2=\frac12(0{,}150)(0{,}15)^2=1{,}6875\times10^{-3}\,\mathrm{kg\,m^2},$$
$$\omega=\frac{100}{3}\frac{2\pi}{60}\approx3{,}49\,\mathrm{rad/s},$$
$$L=I\omega\approx5{,}89\times10^{-3}\,\mathrm{kg\,m^2/s}.$$

El momento externo medio es:

$$\tau_{\mathrm{media}}=\frac{\Delta L}{\Delta t}\approx\frac{5{,}89\times10^{-3}}{0{,}35}=1{,}68\times10^{-2}\,\mathrm{N\,m}.$$

## Cilindros que terminan girando juntos

Ejercicio de la p. 528: un cilindro de 250 kg y radio 2,60 m gira a 4,00 rad/s. Se coloca encima otro cilindro de 500 kg y el mismo radio, inicialmente sin giro. Si no hay momento externo sobre el eje y finalmente giran juntos:

$$I_1\omega_i=(I_1+I_2)\omega_f.$$

Para cilindros macizos uniformes, el factor $R^2/2$ se cancela:

$$\omega_f=\frac{250}{250+500}(4{,}00)=1{,}33\,\mathrm{rad/s}.$$

El rozamiento entre cilindros cambia sus momentos individuales, pero es interno al sistema. Parte de la energía cinética se transforma en energía interna.

## Bala que queda incrustada en una puerta

La puerta tiene masa 50 kg y ancho 0,75 m. Una bala de 0,030 kg llega perpendicular a ella a 400 m/s y se incrusta en su centro, a 0,375 m de las bisagras.

{{< figura src="/images/diagramas/cap10_bala-puerta_pp528.png" width="293" alt="Bala que impacta en el centro de una puerta." caption="Bala que impacta en el centro de una puerta." source="Jeff Bigler, edición octubre de 2025, p. 528. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Durante el impacto se desprecia el impulso angular externo alrededor de la bisagra. Antes:

$$L_i=m_bv_b\frac w2.$$

Después, bala y puerta comparten $\omega_f$:

$$L_f=\left(\frac13Mw^2+m_b\frac{w^2}{4}\right)\omega_f.$$

Así:

$$\omega_f=\frac{0{,}030(400)(0{,}375)}{\frac13(50)(0{,}75)^2+0{,}030(0{,}375)^2}\approx0{,}480\,\mathrm{rad/s}.$$

{{< nota-adaptacion pagina="528" origen="Texto del original: respuesta del impacto contra la puerta" >}}
Con los datos impresos y el modelo indicado de puerta como varilla por un extremo, el resultado es aproximadamente **0,480 rad/s**, no 0,45 rad/s. La inercia de la bala se incluye en el estado final. El momento lineal de bala y puerta no se conserva por el impulso de la bisagra, pero su momento angular respecto de ella sí se aproxima como conservado durante el choque.
{{< /nota-adaptacion >}}

## Insecto sobre un disco

El disco tiene masa $M$, radio $R$ e inercia $I_d=\tfrac12MR^2$. Un insecto de masa $m$, tratado como partícula, va desde el centro hasta el borde sin momento externo apreciable.

{{< figura src="/images/diagramas/cap10_insecto-disco_pp529.png" width="479" alt="Cambio de distribución de masa en un disco que gira." caption="Cambio de distribución de masa en un disco que gira." source="Jeff Bigler, edición octubre de 2025, p. 529. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Al inicio no contribuye al momento de inercia alrededor del eje, porque $r=0$. Al final añade $mR^2$:

$$\frac12MR^2\omega_i=\left(\frac12MR^2+mR^2\right)\omega_f,$$
$$\omega_f=\frac{M}{M+2m}\omega_i.$$

Para los datos de la p. 529, $M=0{,}130\,\mathrm{kg}$, $m=0{,}0125\,\mathrm{kg}$ y $\omega_i=11{,}0\,\mathrm{rad/s}$:

$$\omega_f=\frac{0{,}130}{0{,}155}(11{,}0)\approx9{,}23\,\mathrm{rad/s}.$$

El radio se cancela bajo estas hipótesis. El resultado supone que al final el insecto comparte la velocidad angular del disco.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.