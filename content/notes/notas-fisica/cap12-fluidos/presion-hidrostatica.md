+++
title = "Presión hidrostática"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 4
description = "Presión con la profundidad, presión atmosférica y fuerzas por diferencias de presión."
tags = ["cap12", "fluidos"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 561–565"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Hydrostatic Pressure», Bigler, edición de octubre de 2025, [pp. 561–565](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=561).

## El peso del fluido y la profundidad

En un fluido en reposo, la presión aumenta hacia abajo porque cada región debe equilibrar el peso del fluido situado encima. Consideremos una columna de área $A$ y altura $h$, con densidad uniforme $\rho$:

$$V=Ah,\qquad m=\rho Ah.$$

Si la presión superior es $P_0$ y la inferior $P$, el equilibrio vertical exige:

$$PA-P_0A-mg=0.$$

Al sustituir la masa y dividir por $A$:

$$P-P_0=\rho gh,\qquad P=P_0+\rho gh.$$

{{< figura src="/images/diagramas/cap12_columna_pp562.png" width="296" alt="Presión superficial más incremento hidrostático." caption="Presión superficial más incremento hidrostático." source="Jeff Bigler, edición octubre de 2025, p. 562. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$h$ es la **profundidad vertical por debajo del nivel de referencia**. No es la distancia recorrida a lo largo de un tubo inclinado. A igual profundidad, dentro del mismo líquido comunicado y en reposo, la presión es la misma, aunque cambie la forma del recipiente.

Con una coordenada $z$ positiva hacia arriba, la forma diferencial es $dP/dz=-\rho g$. Si la densidad no es uniforme, no se puede sustituir toda la columna por un único $\rho h$ sin justificarlo.

## Presión debida al agua y presión absoluta

El ejemplo de la p. 564 pregunta por el agua de mar a 25 m, con $\rho=1025\,\mathrm{kg/m^3}$ y $g=10\,\mathrm{m/s^2}$:

$$\Delta P=\rho gh=1025(10)(25)=256\,250\,\mathrm{Pa}=2{,}5625\,\mathrm{bar}.$$

Es el incremento debido a la columna de agua. Si la superficie está a 1 bar absoluto:

$$P_{\mathrm{abs}}=100\,000+256\,250=356\,250\,\mathrm{Pa}.$$

{{< nota-adaptacion pagina="564" origen="Texto del original: presión oceánica sin especificar referencia" >}}
La respuesta 2,56 bar del libro corresponde a la presión **manométrica**, debida al agua sobre el punto. La presión absoluta incluye además la atmosférica sobre la superficie. Se explicita la referencia para no confundir ambas magnitudes.
{{< /nota-adaptacion >}}

## Diferencias de presión y hemisferios de Magdeburgo

{{< figura src="/images/diagramas/cap12_hemisferios_pp563.png" width="327" alt="Hemisferios usados para ilustrar la presión atmosférica." caption="Hemisferios usados para ilustrar la presión atmosférica." source="Jeff Bigler, edición octubre de 2025, p. 563. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Al reducir la presión dentro de dos hemisferios unidos, la presión exterior puede ejercer una fuerza que dificulta separarlos. El efecto depende de la diferencia entre presiones, no de atribuir al vacío una fuerza de succión independiente.

Para una mitad de una esfera con radio $R$, la fuerza resultante axial es:

$$F=\Delta P\,\pi R^2.$$

Se usa el área del disco proyectado sobre el plano de separación, no el área curva total: las componentes de las fuerzas de presión se suman vectorialmente.

Con $R=0{,}06\,\mathrm m$ y $\Delta P=100\,000\,\mathrm{Pa}$:

$$F=100\,000\pi(0{,}06)^2\approx1131\,\mathrm N.$$

{{< nota-adaptacion pagina="565" origen="Texto del original: superficie usada para separar los hemisferios" >}}
El ejercicio sugiere el área esférica $4\pi R^2$ y da unos 4500 N. Para la fuerza axial que debe ejercer cada lado al separar los hemisferios corresponde el área **proyectada** $\pi R^2$, con resultado aproximado de 1130 N. Se señala esta diferencia geométrica, en revisión.
{{< /nota-adaptacion >}}

## Ejercicios del original

1. ¿Qué presión adicional produce el agua de una pileta a 3,0 m de profundidad?
2. ¿Qué diferencia de presión permite sostener una columna de agua de 1,5 m?
3. Un depósito tiene su superficie libre 40 m por encima de un punto de salida. Despreciando pérdidas y velocidad, calculá la presión manométrica allí.
4. Si el aire tuviera densidad constante de $1\,\mathrm{kg/m^3}$, ¿qué altura de columna produciría 1 bar?

{{< details title="Resultados con agua de 1000 kg/m³ y g = 10 m/s²" >}}
1. $\Delta P=30\,000\,\mathrm{Pa}=0{,}30\,\mathrm{bar}$.
2. $\Delta P=15\,000\,\mathrm{Pa}$.
3. $\Delta P=400\,000\,\mathrm{Pa}=4\,\mathrm{bar}\approx58\,\mathrm{psi}$ usando la conversión aproximada del libro.
4. $h=P/(\rho g)=100\,000/(1\cdot10)=10\,000\,\mathrm m$. Es una altura equivalente del modelo de densidad constante; no es un límite físico de la atmósfera, cuya densidad disminuye gradualmente.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.