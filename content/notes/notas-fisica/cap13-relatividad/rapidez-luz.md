+++
title = "La rapidez de la luz y el principio de relatividad"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 1
description = "Luz en el vacío, marcos inerciales y límites de la suma clásica de velocidades."
tags = ["cap13", "relatividad"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 590–593"
figuras_estado = "1 figura recuperada del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Speed of Light», Bigler, edición de octubre de 2025, [pp. 590–593](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=590).

## La luz tarda en propagarse

El libro introduce el problema con las observaciones de Ole Rømer sobre los eclipses de las lunas de Júpiter en 1676. Los intervalos observados variaban al cambiar la distancia entre la Tierra y Júpiter. Interpretar esas diferencias como tiempo de viaje de la luz permitió reconocer que su propagación no era instantánea.

La regularidad de un fenómeno astronómico puede usarse como reloj, pero la señal no llega inmediatamente al observador. Hay que distinguir el instante de emisión o del suceso y el de recepción de la luz.

## Electromagnetismo y ondas

Las ecuaciones de Maxwell relacionan campos eléctricos y magnéticos con cargas, corrientes y variaciones de los propios campos. En el vacío admiten ondas electromagnéticas que se propagan con rapidez:

$$c=\frac1{\sqrt{\mu_0\varepsilon_0}}.$$

El libro identifica la luz como una onda electromagnética. La permitividad $\varepsilon_0$ y la permeabilidad $\mu_0$ aparecen en la descripción del vacío. Esta relación conecta óptica y electromagnetismo, pero por sí sola no permite conservar la suma galileana de velocidades y al mismo tiempo hacer invariante $c$.

## Dos postulados de relatividad especial

La formulación que se utiliza aquí es:

1. Las leyes físicas tienen la misma forma en todos los **marcos inerciales**, aquellos que no están acelerados unos respecto de otros.
2. La rapidez de la luz en el vacío es la misma para todos esos observadores, independientemente del movimiento de la fuente.

En el SI:

$$c=299\,792\,458\,\mathrm{m/s}\quad\text{exactamente}.$$

Se distingue **rapidez**, un módulo escalar, de velocidad vectorial: la luz puede propagarse en distintas direcciones. No existe un marco inercial de reposo de un fotón al que se pueda transformar mediante una velocidad relativa igual a $c$.

{{< nota-adaptacion pagina="592" origen="Texto del original: marcos de referencia y fecha del valor exacto de c" >}}
El principio se enuncia aquí para **marcos inerciales**, no indiscriminadamente para todo sistema acelerado. La nota del original atribuye a 2019 la definición exacta de la rapidez de la luz; la [resolución de la CGPM de 1983](https://www.bipm.org/en/committees/cg/cgpm/17-1983/resolution-1) ya definía el metro mediante el recorrido de la luz en 1/299 792 458 s. La reorganización del SI en 2019 conserva ese valor.
{{< /nota-adaptacion >}}

## Por qué no se suma c a la rapidez del observador

{{< figura src="/images/diagramas/cap13_luz-observadores_pp593.png" width="413" alt="Observadores con movimiento relativo y una señal luminosa." caption="Observadores con movimiento relativo y una señal luminosa." source="Jeff Bigler, edición octubre de 2025, p. 593. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para objetos lentos, la transformación clásica $u'=u-v$ describe bien las velocidades relativas. Si se aplicara a una señal luminosa, observadores en movimiento medirían valores diferentes de $c$, en contradicción con el postulado.

Como aclaración matemática de la adaptación, la transformación relativista unidimensional es:

$$u'=\frac{u-v}{1-uv/c^2}.$$

Si $u=c$ y $\lvert v\rvert\lt c$:

$$u'=\frac{c-v}{1-v/c}=c.$$

Si la señal se mueve en el sentido negativo, se obtiene $u'=-c$. Para velocidades mucho menores que $c$, el producto $uv/c^2$ es pequeño y se recupera aproximadamente la resta clásica. El cambio no está en que cada observador vea una luz distinta, sino en cómo se relacionan sus mediciones de espacio y tiempo.

## Luz en un medio material

La rapidez de propagación de fase en un medio transparente se relaciona con el índice de refracción:

$$n=\frac{c}{v_{\mathrm{fase}}}.$$

En medios ordinarios transparentes puede ser menor que $c$. Eso no contradice la invariancia de la rapidez de la luz **en el vacío**; el medio define además un estado de movimiento que debe considerarse.

{{< nota-adaptacion pagina="593" origen="Texto del original: índice de refracción" >}}
El pasaje invierte la razón al definir el índice como rapidez en el medio dividida por rapidez en el vacío. La definición utilizada aquí es **$n=c/v_{\mathrm{fase}}$**. Se evita generalizar que ambos parámetros electromagnéticos del material deban ser siempre mayores que los del vacío; la respuesta óptica depende del material y de la frecuencia.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.