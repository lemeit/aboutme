---
title: "Péndulo físico"
description: "Cualquier cuerpo que oscila colgado de un eje: la versión general del péndulo."
materia: "Física"
tema: "Ondas"
tags:
  - ondas
---

# Péndulo físico

> **En una frase.** No hace falta una masa puntual ni un hilo: cualquier cuerpo rígido que se cuelga de un eje y oscila es un péndulo, y su período depende de cómo está repartida su masa.

## Fórmula

$$
T = 2\pi\sqrt{\frac{I}{m\,g\,d}}
$$

- $I$: [[momento-inercia]] del cuerpo respecto del eje de suspensión
- $m$: masa del cuerpo
- $d$: distancia del eje al [[centro-de-masa]]

## Diferencia con el péndulo simple

En el [[pendulo-simple]] toda la masa está a la misma distancia $L$ y $I = mL^2$. Reemplazando:

$$
T = 2\pi\sqrt{\frac{mL^2}{mgL}} = 2\pi\sqrt{\frac{L}{g}}
$$

O sea: el péndulo simple es un caso particular del físico. El físico sirve para una varilla, una chapa, una puerta que oscila, un objeto irregular.

## El péndulo equivalente

Todo péndulo físico puede reemplazarse por uno simple de largo:

$$
L_{eq} = \frac{I}{m\,d}
$$

Ese largo no siempre coincide con la distancia al centro de masa: puede ser mayor.

## Por qué importa

- Permite medir momentos de inercia experimentalmente: se cuelga el objeto y se mide el período.
- Explica por qué una varilla colgada de un extremo oscila más lento que una masa puntual del mismo largo.
- Aparece en el diseño de mecanismos y en el estudio de edificios que oscilan.

## Error típico

Usar $I$ respecto del centro de masa en lugar de respecto del **eje de suspensión**. Hay que aplicar el teorema de los ejes paralelos: $I_{eje} = I_{cm} + md^2$.

## Ejemplo

Una varilla de 1 kg y 1 m colgada de un extremo. Ahí $I = \tfrac{1}{3}mL^2 = 0{,}333$ y $d = 0{,}5$ m:

$$
T = 2\pi\sqrt{\frac{0{,}333}{1\cdot 9{,}8\cdot 0{,}5}} \approx 1{,}64\ \text{s}
$$

El péndulo simple de 1 m daba 2 s: este oscila más rápido.

## Relaciones

- **Necesitás antes:** [[pendulo-simple]] · [[momento-inercia]]
- **Esto te habilita:** [[periodo]]
- **Se aplica en:** [[centro-de-masa]] · [[energia-total-mas]]
