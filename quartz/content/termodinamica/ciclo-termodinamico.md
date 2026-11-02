---
title: "Ciclo termodinámico"
description: "Un sistema que vuelve siempre al mismo estado: el corazón de toda máquina térmica."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Ciclo termodinámico

> **En una frase.** En un ciclo el sistema vuelve al punto de partida, así que su energía interna no cambia: todo el calor neto se convierte en trabajo.

## La idea

Una serie de [[proceso-termodinamico|procesos]] que devuelven el sistema a su estado inicial. Como la [[energia-interna]] es función de estado:

$$
\Delta U_{\text{ciclo}} = 0
\quad\Longrightarrow\quad
Q_{\text{neto}} = W_{\text{neto}}
$$

Todo lo que entra como calor sale como trabajo (si el ciclo produce) o al revés (si consume).

## El área encerrada

En el diagrama $P$-$V$, un ciclo encierra un área. Esa área **es** el trabajo neto:

- Giro **horario**: el área se recorre expandiendo a presión alta y comprimiendo a presión baja. Produce trabajo: es una [[maquina-termica]].
- Giro **antihorario**: consume trabajo para mover calor de frío a caliente. Es un [[refrigerador]].

## Partes del ciclo

Un ciclo típico alterna cuatro etapas: dos de intercambio de calor (una caliente, una fría) y dos de trabajo (compresión y expansión). El [[ciclo-carnot]] es el caso ideal, con dos isotermas y dos adiabáticas.

## Rendimiento

$$
\eta = \frac{W_{\text{neto}}}{Q_{\text{entrada}}}
$$

Siempre menor que 1: una parte del calor tiene que salir hacia la fuente fría. No es una limitación de la ingeniería, es la [[segunda-ley-termodinamica]].

## Error típico

Calcular $\Delta U$ del ciclo distinto de cero. Si es un ciclo completo, vuelve al mismo estado y $\Delta U = 0$ por definición.

## Ejemplo

Un ciclo recibe 500 J de calor de la fuente caliente y entrega 350 J a la fría. El trabajo neto es:

$$
W = 500 - 350 = 150\ \text{J}
\qquad
\eta = \frac{150}{500} = 30\%
$$

## Relaciones

- **Necesitás antes:** [[energia-interna]] · [[trabajo-gas]]
- **Esto te habilita:** [[maquina-termica]] · [[ciclo-carnot]]
- **Se aplica en:** [[refrigerador]] · [[rendimiento]]
