+++
title = "Leyes de Kepler del movimiento planetario"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 2
description = "Órbitas elípticas, áreas iguales y relación entre período y semieje mayor."
tags = ["cap08", "gravitación"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 423–425"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Kepler’s Laws of Planetary Motion», Bigler, edición de octubre de 2025, [pp. 423–425](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=423).

## De las observaciones a las relaciones matemáticas

Johannes Kepler utilizó observaciones precisas asociadas al trabajo de Tycho Brahe para establecer regularidades del movimiento planetario. Las leyes describen la forma de las órbitas, cómo cambia la rapidez y cómo se relacionan los períodos con el tamaño orbital.

{{< nota-adaptacion pagina="423" origen="Texto del original: cronología de Brahe y de las leyes de Kepler" >}}
El original fecha el observatorio de Brahe en 1571 y la publicación de las leyes entre 1617 y 1621. En la [descripción de Uraniborg del propio Brahe](https://www.cabinet.ox.ac.uk/brahes-description-uraniborg-f-42r), la construcción comienza en 1576. La [edición académica de las obras de Kepler](https://kepler.badw.de/en/on-johannes-kepler/the-planetary-laws.html) sitúa las dos primeras leyes en *Astronomia Nova* (1609) y la tercera en *Harmonice Mundi* (1619). Se identifican estas precisiones históricas como observación en revisión.
{{< /nota-adaptacion >}}

## Primera ley: órbitas elípticas

En el modelo de dos cuerpos, la órbita ligada de un planeta es una elipse, con el Sol en uno de sus focos. Una elipse es el conjunto de puntos para los que la suma de las distancias a dos focos es constante.

El semieje mayor $a$ es la mitad del eje más largo. Si $c$ es la distancia desde el centro a uno de los focos, la excentricidad es:

$$e=\frac ca,\qquad0\leq e\lt 1.$$

{{< figura src="/images/diagramas/cap08_excentricidades_pp424.png" width="560" alt="Elipses con distintos valores de excentricidad." caption="Elipses con distintos valores de excentricidad." source="Jeff Bigler, edición octubre de 2025, p. 424. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para $e=0$, ambos focos coinciden y la elipse es una circunferencia. Al aumentar $e$, la órbita se alarga. Una elipse orbital no degenerada tiene $e\lt 1$; $e=1$ no representa una elipse ordinaria.

### Excentricidades que presenta el libro

Se conserva el carácter aproximado de la tabla y se señala el valor de Marte corregido:

| Planeta | Excentricidad aproximada |
|:---|:---:|
| Mercurio | 0,206 |
| Venus | 0,007 |
| Tierra | 0,017 |
| Marte | **0,093** |
| Júpiter | 0,049 |
| Saturno | 0,052 |
| Urano | 0,047 |
| Neptuno | 0,010 |

{{< nota-adaptacion pagina="424" origen="Texto del original: Marte y clasificación de Plutón" >}}
El libro da 0,055 para Marte; la [ficha de NASA](https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html?level=1) indica aproximadamente 0,0935. Además, atribuye la clasificación de Plutón a una supuesta captura por el sistema solar. Ese no es el criterio de la [definición de la Unión Astronómica Internacional](https://iauarchive.eso.org/public/themes/pluto/): Plutón se clasifica como planeta enano porque no ha despejado la vecindad de su órbita, entre las condiciones de esa definición. La captura afirmada en el pasaje no se adopta como hecho establecido.
{{< /nota-adaptacion >}}

## Segunda ley: áreas iguales en tiempos iguales

El segmento que une el Sol con el planeta barre áreas iguales en intervalos de tiempo iguales.

{{< figura src="/images/diagramas/cap08_areas-iguales_pp424.png" width="531" alt="Áreas iguales barridas en tiempos iguales." caption="Áreas iguales barridas en tiempos iguales." source="Jeff Bigler, edición octubre de 2025, p. 424. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Cerca del Sol, el planeta recorre un arco más largo durante el mismo tiempo; lejos del Sol, un arco más corto. Por eso se mueve más rápido en el perihelio y más lento en el afelio. **No** significa que recorra distancias iguales en tiempos iguales.

Como aclaración matemática de la adaptación, un área pequeña barrida es aproximadamente $\tfrac12r^2\,d\theta$. Por tanto:

$$\frac{dA}{dt}=\frac12r^2\omega=\text{constante}.$$

La fuerza gravitatoria es central, de modo que su momento respecto del centro de atracción es cero y se conserva el momento angular. En perihelio y afelio la velocidad es perpendicular al radio, de donde $r_pv_p=r_av_a$. La rapidez cambia, aunque la tasa de barrido de área permanece constante en el modelo.

## Tercera ley: período y tamaño orbital

Para planetas cuya masa es pequeña respecto de la masa $M$ de la estrella:

$$\frac{T^2}{a^3}=\frac{4\pi^2}{GM}.$$

$T$ es el período y $a$ el semieje mayor, no la distancia instantánea al Sol. Para órbita circular, $a=r$. La misma constante corresponde a cuerpos que orbitan el mismo astro bajo estas aproximaciones.

Entre dos órbitas:

$$\left(\frac{T_2}{T_1}\right)^2=\left(\frac{a_2}{a_1}\right)^3,$$
$$T_2=T_1\left(\frac{a_2}{a_1}\right)^{3/2}.$$

Como ejemplo de aplicación de la adaptación, si un semieje mayor es cuatro veces otro, el período es $4^{3/2}=8$ veces mayor, no cuatro.

### Obtener la masa central

Reordenando:

$$M\approx\frac{4\pi^2a^3}{GT^2}.$$

Hace falta conocer **el tamaño orbital y el período**, además de $G$. En la solución exacta de dos cuerpos, el denominador de la tercera ley contiene $G(M+m)$ y $a$ corresponde a la órbita relativa; la aproximación anterior desprecia $m$ frente a $M$.

{{< nota-adaptacion pagina="425" origen="Texto del original: radio medio, unidades y masa inferida" >}}
El libro llama «radio medio» al semieje mayor; no es en general el promedio temporal de la distancia. También afirma que la masa de un planeta puede obtenerse con la masa estelar y el período: esos datos solos no bastan. Finalmente, la constante solar $9{,}5\times10^{-27}\,\mathrm{s^2/m^3}$ equivale aproximadamente a $9{,}5\times10^{-42}\,\frac{\text{año}^2}{\mathrm{m^3}}$ al usar un año de 31 557 600 s, no al valor $3\times10^{-34}$ impreso. Se explicitan estas discrepancias y las variables necesarias.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.