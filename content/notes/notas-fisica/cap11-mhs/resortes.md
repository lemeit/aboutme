+++
title = "Oscilaciones de un sistema masa–resorte"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 2
description = "Ley de Hooke, energía elástica, período e interpretación de una balanza inercial."
tags = ["cap11", "oscilaciones"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 540–544"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Springs», Bigler, edición de octubre de 2025, [pp. 540–544](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=540).

## Fuerza de un resorte ideal

Dentro de su régimen lineal, un resorte ejerce una fuerza que se opone a su deformación respecto de la longitud natural:

$$F_s=-kx.$$

La constante $k$ se mide en $\mathrm{N/m}$ y depende del material y la geometría del resorte. Cuanto mayor es $k$, mayor fuerza hace falta para producir la misma deformación. El modelo supone que no se supera el rango elástico lineal.

{{< figura src="/images/diagramas/cap11_resorte-hooke_pp541.png" width="560" alt="Resorte sin deformar, comprimido y estirado." caption="Resorte sin deformar, comprimido y estirado." source="Jeff Bigler, edición octubre de 2025, p. 541. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El signo de $x$ depende del eje elegido; el signo menos indica que la fuerza del resorte se opone a esa deformación. La fuerza externa necesaria para sostenerlo deformado cuasiestáticamente es opuesta a la que ejerce el resorte.

## Energía potencial elástica

Como $F_s=-dU/dx$, al elegir $U=0$ en la longitud natural:

$$U(x)=\int_0^xkx'\,dx'=\frac12kx^2.$$

El resorte tiene energía tanto al comprimirse como al estirarse. Para un oscilador horizontal ideal, la energía total es $E=\tfrac12kA^2$.

{{< nota-adaptacion pagina="541" origen="Texto del original: energía escalar y signo de la energía potencial" >}}
La expresión elástica es no negativa por $k\gt 0$, el cuadrado de la deformación y la referencia elegida. No lo es simplemente por ser una magnitud escalar: una energía potencial escalar puede ser negativa si se utiliza otra referencia, como la gravitatoria con cero en el infinito.
{{< /nota-adaptacion >}}

## Período del sistema masa–resorte

Para una masa $m$ y un resorte de masa despreciable, sin disipación:

$$m\frac{d^2x}{dt^2}=-kx.$$

Comparando con $a=-\omega^2x$:

$$\omega=\sqrt{\frac km},\qquad T=2\pi\sqrt{\frac mk},\qquad f=\frac1{2\pi}\sqrt{\frac km}.$$

Aumentar la masa aumenta el período; aumentar la rigidez lo reduce. En el modelo lineal, el período no depende de la amplitud. Si la masa del resorte no puede despreciarse o el resorte deja de ser lineal, la fórmula necesita modificación.

## Resorte vertical: dos referencias distintas

Para una masa colgante, el equilibrio está desplazado respecto de la longitud natural. Con positivo hacia abajo:

$$mg-kx_{\mathrm{eq}}=0,\qquad x_{\mathrm{eq}}=\frac{mg}{k}.$$

Si $q=x-x_{\mathrm{eq}}$ es el desplazamiento desde el equilibrio:

$$m\ddot q=mg-k(x_{\mathrm{eq}}+q)=-kq.$$

Por eso el período vuelve a ser $2\pi\sqrt{m/k}$. La energía potencial **total** del sistema masa–resorte–Tierra, expresada desde el equilibrio, tiene forma $\tfrac12kq^2+C$. La energía elástica sola sigue usando la deformación $x$ desde la longitud natural.

## Ejemplo del libro: k = 2,7 N/m

Se comprime 0,30 m un resorte de constante $2{,}7\,\mathrm{N/m}$. Para el oscilador se toma una masa móvil de 0,10 kg:

$$\lvert F_s\rvert=k\lvert x\rvert=2{,}7(0{,}30)=0{,}81\,\mathrm N,$$
$$U=\frac12(2{,}7)(0{,}30)^2=0{,}1215\,\mathrm J\approx0{,}12\,\mathrm J,$$
$$T=2\pi\sqrt{\frac{0{,}10}{2{,}7}}\approx1{,}21\,\mathrm s.$$

{{< nota-adaptacion pagina="543" origen="Texto del original: masa asignada al resorte y fuerza para comprimirlo" >}}
El enunciado dice «resorte con masa de 0,1 kg», pero utiliza la fórmula del oscilador de resorte de masa despreciable, donde $m$ es la **masa móvil acoplada**. Se explicita esa interpretación necesaria para obtener el período publicado. Además, se distingue el módulo de la fuerza para sostener la compresión de la fuerza restauradora, cuyo signo depende del eje.
{{< /nota-adaptacion >}}

## Balanza inercial

{{< figura src="/images/diagramas/cap11_balanza-inercial_pp542.png" width="560" alt="Balanza inercial del original." caption="Balanza inercial del original." source="Jeff Bigler, edición octubre de 2025, p. 542. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Una bandeja montada sobre elementos elásticos puede calibrarse con masas conocidas. Al medir el período de una masa desconocida, se infiere su inercia. En el modelo ideal:

$$m=\frac{kT^2}{4\pi^2}.$$

Un instrumento real debe incluir la inercia de la bandeja y su calibración. El método no requiere obtener la masa a partir del peso, por lo que puede usarse en condiciones en que una balanza gravitatoria convencional no funciona de la misma manera.

## Ejercicios de la p. 544

1. Una masa de 100,0 g cuelga de un resorte de $50{,}0\,\mathrm{N/m}$. Desde el equilibrio se baja 1,0 cm y se suelta. Hallá la fuerza adicional necesaria para mantener ese desplazamiento y la frecuencia.
2. Un automóvil de 1000 kg oscila verticalmente con período de 2,0 s. Hallá la constante elástica equivalente de sus suspensiones en este modelo.

{{< details title="Resultados y referencias" >}}
1. Desde el equilibrio, la fuerza adicional es $kq=50(0{,}010)=0{,}50\,\mathrm N$. La frecuencia es $f=(1/2\pi)\sqrt{50/0{,}100}\approx3{,}56\,\mathrm{Hz}$. La deformación estática inicial por el peso no debe confundirse con la amplitud adicional de 1,0 cm.
2. $k=4\pi^2m/T^2\approx9870\,\mathrm{N/m}$. Es la rigidez **total equivalente**, no necesariamente la de cada resorte por separado.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.