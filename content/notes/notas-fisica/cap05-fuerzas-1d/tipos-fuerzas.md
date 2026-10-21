+++
title = "Tipos de fuerzas"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Catálogo de fuerzas: peso, tensión, normal, fricción, empuje, resorte, arrastre y sustentación."
tags = ["cap05", "fuerzas", "peso", "tensión", "normal", "fricción", "empuje", "resorte", "arrastre"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 291–298"
figuras_estado = "2 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 291–298. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=291).

## Antes de nombrar una fuerza: elegí el cuerpo

Una fuerza representa una interacción. Preguntá siempre **quién ejerce la fuerza y sobre qué cuerpo actúa**. Sobre un mismo cuerpo pueden actuar varias fuerzas; su suma vectorial es la resultante:

$$\vec F_{\mathrm{neta}}=\sum_i\vec F_i$$

Que haya movimiento no prueba que la resultante tenga ese mismo sentido. La resultante determina la aceleración; un cuerpo que se mueve hacia la derecha puede tener aceleración hacia la izquierda y estar frenando.

{{< figura src="/images/diagramas/cap05_tipos-caja_pp292.png" width="500" alt="Peso, normal, tensión y rozamiento sobre una caja." caption="Peso, normal, tensión y rozamiento sobre una caja." source="Jeff Bigler, edición octubre de 2025, p. 292. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Sobre la caja del dibujo actúan la Tierra, el suelo y la cuerda. Si no hay aceleración vertical y la cuerda tira horizontalmente, peso y normal se equilibran. En horizontal, la tensión supera al rozamiento en el ejemplo, por lo que la aceleración apunta a la derecha.

{{< nota-adaptacion pagina="292" origen="Texto del original: fuerza resultante y movimiento" >}}
El original dice que la resultante determina hacia dónde se moverá el objeto. Aquí se distingue dirección de aceleración de dirección de velocidad: para predecir el movimiento también hace falta conocer la velocidad inicial.
{{< /nota-adaptacion >}}

## Fuerzas habituales y direcciones

| Interacción | Símbolo usado | Dirección y condiciones |
|---|---|---|
| Peso | $\vec P$ o $\vec F_g$ | En el campo terrestre local, hacia abajo; $\vec P=m\vec g$ |
| Tensión | $\vec T$ | A lo largo de una cuerda tensa, tirando del cuerpo |
| Fuerza aplicada de contacto | $\vec F_a$ | Según el empuje o tracción que ejerce el agente identificado |
| Fuerza elástica | $\vec F_s$ | En el modelo de Hooke, opuesta a la deformación respecto de la longitud natural |
| Normal | $\vec N$ | Perpendicular a la superficie de contacto |
| Rozamiento | $\vec f$ | Tangencial al contacto; se opone al deslizamiento relativo o a su tendencia |
| Empuje de un fluido | $\vec E$ | Hacia arriba en un fluido en reposo bajo gravedad uniforme |
| Arrastre | $\vec F_D$ | Opuesto a la velocidad relativa al fluido |
| Sustentación | $\vec F_L$ | Perpendicular al flujo relativo; no necesariamente vertical en cualquier maniobra |
| Eléctrica | $\vec F_e$ | Depende de cargas y configuración; puede atraer o repeler |
| Magnética | $\vec F_B$ | Depende del sistema y del campo; requiere su modelo específico |

Las fuerzas de contacto necesitan interacción entre cuerpos; el peso no requiere que el cuerpo toque el suelo. «Opuesta», «de contacto» y «de reacción» no son tres familias excluyentes. La tercera ley se aplica a cada interacción, también a la gravitación.

## Tensión y pares de tercera ley

{{< figura src="/images/diagramas/cap05_tipos-cuerda_pp294.png" width="420" alt="Persona y pared conectadas por una cuerda." caption="Persona y pared conectadas por una cuerda." source="Jeff Bigler, edición octubre de 2025, p. 294. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

{{< nota-adaptacion pagina="294" origen="Texto del original: tensión como su propia reacción" >}}
La cuerda tira de la persona y la persona tira de la cuerda: esas son fuerzas de un par, sobre cuerpos distintos. Las fuerzas que la cuerda ejerce sobre la persona y sobre la pared no forman por sí solas ese mismo par. La expresión original «su propia reacción» puede ocultar esta distinción. Se identifica cada agente y receptor antes de sumar fuerzas.
{{< /nota-adaptacion >}}

En una cuerda ideal de masa despreciable, sometida a las condiciones del modelo, la tensión puede tener el mismo módulo a lo largo de ella. Eso no significa que las fuerzas sobre un solo cuerpo se cancelen por ser «acción y reacción».

## Normal y rozamiento: el modelo decide el valor

La normal no es siempre igual al peso. Sobre un bloque en horizontal, sin otras componentes verticales, sin aceleración vertical y con contacto:

$$N-mg=0\quad\Rightarrow\quad N=mg$$

Si alguien tira hacia arriba, empuja hacia abajo o el soporte acelera, hay que volver a la ecuación vertical. En una rampa simple, con peso y normal como únicas fuerzas perpendiculares y sin aceleración perpendicular, $N=mg\cos\theta$.

{{< nota-adaptacion pagina="295" origen="Definiciones del original y condiciones omitidas en el resumen anterior" >}}
La normal es una fuerza de contacto perpendicular, no una fórmula fija. El rozamiento se refiere al movimiento relativo de las superficies: puede impulsar un cuerpo hacia adelante, como ocurre al caminar, aunque se oponga al deslizamiento en el contacto. No se decide su sentido mirando solo la velocidad del cuerpo respecto del suelo.
{{< /nota-adaptacion >}}

## Fuerzas en fluidos y campos

Un cuerpo quieto respecto de la habitación puede recibir arrastre si el aire o el agua se mueven respecto de él. El empuje hidrostático proviene del balance de presiones del fluido; no necesita que se observe una subida de nivel en un recipiente. La sustentación y el arrastre son componentes de la fuerza aerodinámica respecto del flujo.

Las cargas del mismo signo se repelen y las opuestas se atraen en el modelo electrostático elemental. En magnetismo, la regla de polos es una descripción introductoria de imanes; no reemplaza el análisis de campos y cargas en movimiento. Estos temas se profundizan fuera de esta unidad de mecánica.

## Resultante, equilibrio y cambio de fuerza

La unidad SI es $1\ \mathrm N=1\ \mathrm{kg\,m/s^2}$. Resultante cero permite reposo o velocidad constante; no equivale a ausencia de interacciones. Para estudiar equilibrio rotacional también hará falta analizar torques.

La extensión de p. 298 presenta la tasa de cambio de fuerza. Para masa constante:

$$\frac{d\vec F_{\mathrm{neta}}}{dt}=m\frac{d\vec a}{dt}$$

Se conserva como ampliación matemática, sin confundir fuerza con su tasa de cambio ni usarla como una fuerza adicional en el diagrama.

**Actividad propia:** para un libro sobre una mesa, una lámpara colgada y una pelota en vuelo sin aire, enumerá agentes y fuerzas. En el último caso, después de soltarla no queda una «fuerza del lanzamiento»; el peso es la única fuerza del modelo.

---

Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Original de Jeff Bigler y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los ejemplos propios y las observaciones en revisión se identifican en el texto.
