---
title: "Proceso reversible"
description: "Un proceso ideal que se puede deshacer pasando por los mismos estados: la referencia de la termodinámica."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Proceso reversible

> **En una frase.** Es un proceso tan lento y sin pérdidas que puede recorrerse al revés y devolver todo a su lugar.

## Qué lo define

Un proceso es reversible si, al invertirlo, el sistema y el entorno vuelven **exactamente** a sus estados iniciales, sin dejar rastro.

Condiciones que exige:

- Sin rozamiento
- Sin turbulencia: cuasiestático, paso a paso
- Diferencias de temperatura infinitésimas entre el sistema y el foco
- Sin transferencia de calor a través de una diferencia finita

## Por qué es una idealización

Para que la temperatura del gas sea siempre "casi" la del foco, el intercambio tiene que ser lentísimo. Un proceso así tardaría un tiempo infinito y no serviría para producir potencia.

Es una **referencia teórica**: sirve para calcular el máximo posible, no para describir nada real.

## Reversible y entropía

En un proceso reversible, la entropía del universo no cambia:

$$
\Delta S_{\text{universo}} = 0
$$

Todo lo que es real genera entropía. Por eso el [[ciclo-carnot]], que es reversible, marca el techo de rendimiento.

## Dónde se usa

- Para definir cuál sería el trabajo máximo entre dos estados.
- Para el cálculo de $\Delta S$: aunque el proceso real sea irreversible, se calcula la variación de entropía **imaginando** un camino reversible entre los mismos extremos.
- Para comparar el rendimiento real de una máquina con su límite.

## Error típico

Decir que un proceso real es reversible "porque se puede deshacer". Que se pueda volver al estado inicial no alcanza: si hay rozamiento, el calor generado quedó en el ambiente y el entorno no volvió a su estado.

## Relaciones

- **Necesitás antes:** [[proceso-termodinamico]]
- **Esto te habilita:** [[ciclo-carnot]] · [[entropia]]
- **No confundir con:** [[proceso-irreversible]]
