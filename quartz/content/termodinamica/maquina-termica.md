---
title: "Máquina térmica"
description: "Un dispositivo que toma calor de una fuente caliente y lo convierte en trabajo, nunca del todo."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Máquina térmica

> **En una frase.** Toma calor de un foco caliente, hace trabajo y descarga el resto a un foco frío: nunca convierte todo el calor en trabajo.

## Esquema

$$
Q_{\text{caliente}} = W + Q_{\text{frío}}
$$

- $Q_H$: calor absorbido del foco caliente
- $W$: trabajo entregado
- $Q_C$: calor cedido al foco frío

Siempre $Q_C > 0$: una parte del calor **tiene** que descargarse. Sin foco frío no hay máquina, solo calor acumulado.

## Rendimiento

$$
\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}
$$

Menor que 100 % siempre. El máximo teórico lo da el [[ciclo-carnot|Carnot]], que depende solo de las temperaturas:

$$
\eta_{Carnot} = 1 - \frac{T_C}{T_H}
$$

## Ejemplos reales

| Máquina | $\eta$ típico |
|---|---|
| Motor naftero | 25–35 % |
| Motor diésel | 35–45 % |
| Central a vapor | 35–40 % |
| Turbina de gas | 40–60 % |

El resto se va como calor por el escape y el radiador, no como "pérdida por mal diseño": es inevitable.

## Por qué no se puede llegar al 100 %

Para convertir el calor en trabajo, hace falta una diferencia de temperatura. Si el gas se expandiera hasta la temperatura del ambiente, ya no puede seguir entregando trabajo. El foco frío es necesario, y por eso una máquina que solo tuviera un foco no funcionaría. Ese es el enunciado de Kelvin-Planck de la [[segunda-ley-termodinamica]].

## Qué mejora el rendimiento

Subir la temperatura del foco caliente, no enfriar el frío. Por eso los motores modernos trabajan a temperaturas cada vez más altas y con materiales que las resistan.

## Error típico

Pensar que una máquina mejor podría llegar al 100 % con mejor tecnología. El límite es termodinámico, no tecnológico.

## Relaciones

- **Necesitás antes:** [[ciclo-termodinamico]] · [[trabajo-gas]]
- **Esto te habilita:** [[ciclo-carnot]] · [[refrigerador]]
- **Se aplica en:** [[rendimiento]] · [[segunda-ley-termodinamica]]
