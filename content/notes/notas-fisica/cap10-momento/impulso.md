+++
title = "Impulso y cambio de cantidad de movimiento"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 2
description = "Fuerza media, áreas bajo gráficos fuerza-tiempo y cambios de sentido en un impacto."
tags = ["cap10", "cantidad de movimiento"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 507–513"
figuras_estado = "3 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Impulse», Bigler, edición de octubre de 2025, [pp. 507–513](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=507).

## Una fuerza actuando durante un intervalo

El impulso de la fuerza neta es igual al cambio de cantidad de movimiento:

$$\vec J=\Delta\vec p=\vec p_f-\vec p_i.$$

Si la fuerza es constante, $\vec J=\vec F_{\mathrm{neta}}\Delta t$. Si varía, se usa la fuerza media o se integra:

$$\vec J=\vec F_{\mathrm{media}}\Delta t=\int_{t_i}^{t_f}\vec F_{\mathrm{neta}}(t)\,dt.$$

El impulso se mide en $\mathrm{N\,s}$ y es vectorial. No es fuerza ni energía. El impulso acumula fuerza en el tiempo; el trabajo acumula la componente de fuerza a lo largo del desplazamiento.

Para una masa constante, $\Delta\vec p=m\Delta\vec v$. La forma instantánea es $\vec F_{\mathrm{neta}}=d\vec p/dt$. El cociente $\Delta\vec p/\Delta t$ representa la fuerza neta media, y solo coincide con la instantánea si esta es constante o se toma el límite.

## Área bajo el gráfico fuerza-tiempo

{{< figura src="/images/diagramas/cap10_impulso-area_pp508.png" width="560" alt="Áreas positivas y negativas en un gráfico fuerza-tiempo." caption="Áreas positivas y negativas en un gráfico fuerza-tiempo." source="Jeff Bigler, edición octubre de 2025, p. 508. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En una dimensión, las áreas por encima del eje temporal dan impulso positivo y las que quedan debajo, negativo. Se suman con signo. Para rectángulos, triángulos y trapecios se emplean las áreas geométricas; para una curva general, la integral.

Un impulso negativo no obliga a que el cuerpo termine moviéndose en sentido negativo. Primero hay que calcular $p_f=p_i+J$.

## Ejemplo del original: pelota de béisbol

La pelota tiene masa 0,145 kg. Llega a 38 m/s y sale a 52 m/s en el sentido opuesto tras 3,0 ms de contacto. Elegimos positivo el sentido inicial:

$$v_i=+38\,\mathrm{m/s},\qquad v_f=-52\,\mathrm{m/s}.$$

{{< figura src="/images/diagramas/cap10_beisbol-barras_pp509.png" width="560" alt="Balance de momento para una pelota que invierte su velocidad." caption="Balance de momento para una pelota que invierte su velocidad." source="Jeff Bigler, edición octubre de 2025, p. 509. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$p_i=0{,}145(38)=5{,}51\,\mathrm{N\,s},$$
$$p_f=0{,}145(-52)=-7{,}54\,\mathrm{N\,s},$$
$$J=p_f-p_i=-7{,}54-5{,}51=-13{,}05\,\mathrm{N\,s}.$$

El tiempo es $3{,}0\times10^{-3}\,\mathrm s$, de modo que:

$$F_{\mathrm{media}}=\frac{-13{,}05}{0{,}0030}=-4350\,\mathrm N.$$

Se necesitan 5,51 N·s para anular el momento inicial y otros 7,54 N·s para invertirlo hasta el valor final. Restar solo los módulos de las velocidades daría un resultado incorrecto.

{{< nota-adaptacion pagina="509" origen="Texto del original: fuerza calculada durante el impacto" >}}
El cociente impulso/tiempo da una **fuerza media**, no necesariamente la fuerza máxima. Además, $\Delta p$ corresponde al impulso neto sobre la pelota; identificarlo con el del bate supone despreciar durante esos 3 ms los impulsos de las otras fuerzas, como el peso.
{{< /nota-adaptacion >}}

## Ejercicio gráfico del original

Un bloque de 2,0 kg parte con $v_0=+3{,}0\,\mathrm{m/s}$. La fuerza del gráfico de la p. 511 es la fuerza neta horizontal:

{{< figura src="/images/diagramas/cap10_fuerza-tiempo_pp511.png" width="495" alt="Fuerza aplicada al bloque en función del tiempo." caption="Fuerza aplicada al bloque en función del tiempo." source="Jeff Bigler, edición octubre de 2025, p. 511. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Su momento inicial es $p_0=2(3)=6\,\mathrm{N\,s}$.

- De 0 a 2 s, el área es un trapecio: $J=[(2+6)/2](2)=8\,\mathrm{N\,s}$. Por tanto, $p_2=14\,\mathrm{N\,s}$ y $v_2=7{,}0\,\mathrm{m/s}$.
- De 2 a 5 s, el rectángulo añade $6(3)=18\,\mathrm{N\,s}$.
- De 5 a 6 s, el triángulo positivo añade $6(1)/2=3\,\mathrm{N\,s}$.

Hasta 6 s se acumulan $8+18+3=29\,\mathrm{N\,s}$. Así, $p_6=6+29=35\,\mathrm{N\,s}$ y $v_6=17{,}5\,\mathrm{m/s}$.

Entre 6 y 11 s las áreas son negativas: un triángulo de 2 N·s, un rectángulo de 8 N·s y otro triángulo de 4 N·s. Por ello:

$$J_{6\to11}=-(2+8+4)=-14\,\mathrm{N\,s},$$
$$p_{11}=35-14=21\,\mathrm{N\,s},\qquad v_{11}=10{,}5\,\mathrm{m/s}.$$

El bloque se frena durante ese tramo, pero todavía se mueve en sentido positivo.

## Rebotar o detenerse

En las pp. 512–513, dos bolas de 0,10 kg caen desde 1,25 m. Con $g=10\,\mathrm{m/s^2}$ y positivo hacia arriba:

$$v_i=-\sqrt{2gh}=-5{,}0\,\mathrm{m/s},\qquad p_i=-0{,}50\,\mathrm{N\,s}.$$

La primera rebota hasta 0,80 m, por lo que sale a $+4{,}0\,\mathrm{m/s}$:

$$p_f=+0{,}40\,\mathrm{N\,s},\qquad J=0{,}40-(-0{,}50)=0{,}90\,\mathrm{N\,s}.$$

Su coeficiente de restitución contra la mesa ideal inmóvil es $e=4/5=0{,}8$. La segunda no rebota: $p_f=0$ y $J=0{,}50\,\mathrm{N\,s}$. Rebotar produce un cambio de momento mayor que simplemente detenerse desde la misma velocidad.

Los impulsos calculados son netos; aproximarlos por los de la mesa requiere que el impulso del peso durante el contacto sea pequeño.

## Tiempo de frenado y fuerza media

Para el mismo cambio de momento, aumentar el tiempo de contacto reduce el módulo de la fuerza media. Una deformación que evita el rebote también puede reducir el cambio de momento frente a un impacto que invierte la velocidad. Son dos aspectos distintos de los ejemplos de amortiguación discutidos en el libro.

### Ejercicios de la p. 510

1. Una persona de 100 kg pasa de reposo a 0,67 m/s durante 0,020 s. Hallá el impulso y la fuerza neta media.
2. Un automóvil de 800 kg se detiene desde 10 m/s en 0,50 s. Elegí positivo el sentido inicial y hallá impulso y fuerza media.

{{< details title="Resultados" >}}
1. $J=100(0{,}67)=67\,\mathrm{N\,s}$ y $F_{\mathrm{media}}=67/0{,}020=3350\,\mathrm N$.
2. $J=800(0-10)=-8000\,\mathrm{N\,s}$ y $F_{\mathrm{media}}=-16\,000\,\mathrm N$. El signo indica que el impulso y la fuerza neta media se oponen al movimiento inicial.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.