+++
title = "Fuerza gravitacional y campos de fuerza"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Ley de gravitación universal, campo gravitacional, peso aparente y fuerzas g."
tags = ["cap05", "fuerzas", "gravitación", "campo gravitacional", "peso", "peso aparente", "g-force"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 299–304"
figuras_estado = "2 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 299–304. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=299).

## Peso y modelo de gravitación

El **peso** es la fuerza gravitatoria que actúa sobre un cuerpo. En esta unidad se utiliza principalmente el modelo de campo uniforme cerca de la superficie terrestre:

$$\vec P=m\vec g$$

La masa se mide en kg y el peso en N. Cambiar de lugar puede modificar el campo y el peso sin cambiar la masa del objeto.

Para dos masas puntuales, el módulo de su atracción newtoniana es:

$$F_g=G\frac{m_1m_2}{r^2},\qquad G\approx6{,}67\times10^{-11}\ \mathrm{N\,m^2/kg^2}$$

La fuerza apunta hacia el otro cuerpo. No se asigna un signo negativo universal al módulo: el signo de una componente depende del eje. El carácter atractivo se expresa mediante la dirección del vector.

{{< nota-adaptacion pagina="299" origen="Presentación del original: alcance de la ley y explicación microscópica" >}}
La fórmula entre centros puede usarse para cuerpos esféricamente simétricos sin superposición, pero no para cualquier distribución de masa. El original añade una explicación mediante gravitones e interacciones entre bosones de Higgs; no se adopta como hecho establecido en estas notas. Se mantiene el modelo newtoniano y se distingue esa cuestión de las propuestas de gravedad cuántica. [Contraste: CERN, gravitones](https://home.web.cern.ch/science/physics/extra-dimensions-gravitons-and-tiny-black-holes).
{{< /nota-adaptacion >}}

## Campo gravitacional y unidades

Si se modela la Tierra mediante una distribución esférica, fuera de ella:

$$g(r)=\frac{GM_T}{r^2}$$

Cerca de la superficie, para cambios pequeños de posición, se aproxima por un mismo valor. Como en el libro, usamos $g=10\ \mathrm{N/kg}$ salvo que el problema indique otro dato. La equivalencia de unidades es:

$$1\ \mathrm{N/kg}=1\ \mathrm{m/s^2}$$

El campo describe fuerza por unidad de masa. En caída libre sin otras fuerzas, esa misma cantidad es la aceleración del cuerpo. No hay que sumar «campo» y «peso» como si fueran dos fuerzas.

**Ejemplo de p. 301:** un bloque de 7 kg tiene peso de módulo $P=7(10)=70$ N. Si elegimos arriba positivo, $P_y=-70$ N. Son el mismo peso descrito mediante un módulo o mediante una componente.

## Elegir el sistema no cambia la interacción

{{< figura src="/images/diagramas/cap05_gravedad-pelota_pp302.png" width="280" alt="Sistema formado solo por la pelota." caption="Sistema formado solo por la pelota." source="Jeff Bigler, edición octubre de 2025, p. 302. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si estudiamos solo la pelota, la Tierra queda fuera del sistema y su fuerza gravitatoria es externa. El campo es una forma de describir esa acción de la Tierra.

{{< figura src="/images/diagramas/cap05_gravedad-tierra-pelota_pp302.png" width="280" alt="Sistema Tierra y pelota." caption="Sistema Tierra y pelota." source="Jeff Bigler, edición octubre de 2025, p. 302. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si incluimos Tierra y pelota, su interacción gravitatoria es interna. Aparecen fuerzas iguales en módulo y opuestas sobre los dos cuerpos; sus aceleraciones son diferentes por la diferencia de masas. Cambiar los límites del sistema no cambia la fuerza física.

## Peso aparente: qué mide una balanza

En el caso de una persona apoyada sobre una balanza, la lectura en newtons corresponde al módulo de la normal que la balanza ejerce sobre ella. Se llama **peso aparente** en este contexto; no necesariamente coincide con $mg$.

Con arriba positivo, si solo actúan peso y normal:

$$N-mg=ma_y\quad\Rightarrow\quad N=m(g+a_y)$$

| Situación del modelo | Lectura de la balanza |
|---|---|
| Reposo o velocidad vertical constante | $N=mg$ |
| Aceleración hacia arriba | $N>mg$ |
| Aceleración hacia abajo, menor que $g$ en módulo | $0<N<mg$ |
| Caída libre conjunta, sin contacto que sostenga | $N=0$ |

El ascensor puede estar subiendo y desacelerando: entonces la aceleración es hacia abajo y la lectura disminuye. Hay que mirar la aceleración, no solamente el sentido de la velocidad.

**Comprobación propia:** para 60 kg y $a_y=+2\ \mathrm{m/s^2}$, $N=720$ N; para $a_y=-2\ \mathrm{m/s^2}$, $N=480$ N. En ambos casos el peso gravitatorio sigue siendo 600 N con el mismo $g$.

## Empuje del agua y aparente ingravidez

Si una persona está quieta apoyada en el fondo de una pileta, el agua también ejerce empuje hacia arriba. El balance vertical es:

$$N+E-mg=0\quad\Rightarrow\quad N=mg-E$$

La fuerza neta es cero; la lectura del apoyo no es la resultante. En caída libre, la lectura puede ser cero aunque el peso gravitatorio no lo sea. Lo mismo explica la aparente ingravidez orbital en el modelo correspondiente.

## Qué significa expresar una lectura en «g»

Para este ejemplo vertical puede compararse la fuerza de apoyo con el peso de referencia mediante $n=N/(mg)$. Es una razón sin unidad: 2 no significa dos campos gravitatorios ni dos fuerzas peso.

{{< nota-adaptacion pagina="304" origen="Tablas fisiológicas y comparación de aceleraciones del original" >}}
No se trasladan a esta adaptación los límites de tolerancia humana como valores universales: dependen de dirección, duración y condiciones, y no se verificaron aquí con fuentes médicas. La tabla original tampoco permite mezclar sin aclaración aceleración horizontal, lectura de apoyo vertical y campo gravitatorio local. Se conserva la comparación física de fuerzas y el enlace al PDF para consultar su presentación.
{{< /nota-adaptacion >}}

**Para pensar:** ¿por qué una balanza en un ascensor puede cambiar su lectura sin que cambie la masa? ¿Cómo puede existir peso con lectura cero? Dibujá las fuerzas antes de responder.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.