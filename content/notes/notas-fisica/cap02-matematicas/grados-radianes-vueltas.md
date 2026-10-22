+++
tags = ["cap02", "matemáticas", "ángulos", "grados", "radianes"]
title = "Grados, radianes y vueltas"
date = "2026-10-13"
draft = false
math = true
weight = 9
description = "Medidas de ángulos, longitud de arco y elección del modo de la calculadora."
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 171–173"
figuras_estado = "2 figuras extraídas y revisadas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
lastmod = "2026-10-21"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 171–173. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=171).

## Tres formas de expresar un ángulo

Un grado es $1/360$ de una vuelta completa. Una vuelta o revolución representa un giro completo. Un radián es el ángulo central que corresponde a un arco de longitud igual al radio.

$$1\ \text{vuelta}=360^\circ=2\pi\ \mathrm{rad}$$

El radián aparece de forma natural al relacionar el arco $s$ de una circunferencia con su radio $r$:

$$\theta=\frac{s}{r},\qquad s=r\theta$$

{{< nota-adaptacion pagina="171" origen="Texto del original: arco y radio" >}}
Una frase de la p. 171 dice que el ángulo es arco multiplicado por radio. La relación correcta es el cociente $s/r$. Esa división entre longitudes explica que el ángulo en radianes sea adimensional; el símbolo rad sigue siendo útil para aclarar qué magnitud se expresa.
{{< /nota-adaptacion >}}

{{< figura src="/images/diagramas/cap02_radian_pp171.png" width="320" alt="Arco de circunferencia de longitud igual al radio, que define un ángulo de un radián." caption="La definición relaciona arco y radio. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 171. Recorte del original, CC BY-NC-SA 4.0." >}}

## Valores de referencia

| Grados | Fracción de vuelta | Radianes |
|---|---|---|
| 0° | 0 | 0 |
| 90° | 1/4 | $\pi/2$ |
| 180° | 1/2 | $\pi$ |
| 270° | 3/4 | $3\pi/2$ |
| 360° | 1 | $2\pi$ |

En una circunferencia de radio uno, la longitud del arco tiene el mismo valor numérico que el ángulo en radianes. La p. 172 representa ángulos, coordenadas y fracciones de vuelta sobre esa circunferencia unitaria.

{{< figura src="/images/diagramas/cap02_circulo-unitario_pp172.png" width="620" alt="Circunferencia unitaria con ángulos en grados y radianes y coordenadas cartesianas." caption="Los puntos permiten relacionar ángulos y coordenadas. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 172. Recorte del original, CC BY-NC-SA 4.0." >}}

## Convertir sin cambiar el ángulo

$$\theta_{\mathrm{rad}}=\theta_{\mathrm{grados}}\frac{\pi}{180}$$

$$\theta_{\mathrm{grados}}=\theta_{\mathrm{rad}}\frac{180}{\pi}$$

El ejemplo original convierte 225°:

$$225^\circ\frac{2\pi\ \mathrm{rad}}{360^\circ}=\frac{5\pi}{4}\ \mathrm{rad}$$

Un radián equivale aproximadamente a 57,3°. Aunque sea adimensional, no se puede insertar el número de grados en una fórmula como $s=r\theta$ sin convertirlo: 90° corresponde a $\pi/2$ rad, no a 90 rad.

## Elegir el modo de la calculadora

DEG interpreta entradas de funciones trigonométricas en grados; RAD, en radianes. La elección depende de cómo se expresó el ángulo, no del nombre del tema. Un problema de rotación puede dar datos iniciales en grados que deban convertirse.

Comprobá un valor conocido antes de resolver: en DEG, $\sin30^\circ=0{,}5$; en RAD, $\sin(\pi/6)=0{,}5$. Si esos controles fallan, revisá la entrada y el modo.

## Práctica propia

Para un radio de 2 m y un giro de 90°, el arco es $s=2(\pi/2)=\pi$ m. Para 0,75 vueltas, el ángulo es $3\pi/2$ rad. Estos dos ejemplos se agregan como comprobación de las relaciones del original.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.