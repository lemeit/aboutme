---
title: "Ley de Kirchhoff de mallas"
description: "Recorriendo un lazo cerrado, la suma de los voltajes es cero."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Ley de Kirchhoff de mallas

> **En una frase.** Si se recorre un circuito cerrado y se vuelve al punto de partida, la suma de las diferencias de potencial es cero.

## Enunciado

$$
\sum \Delta V = 0
$$

a lo largo de una malla en el modelo de circuito concentrado de corriente continua. Se supone que no hay un flujo magnético variable enlazando la malla; si lo hay, debe incluirse la fem inducida.

## De dónde sale

Es la conservación de la energía: volver al mismo punto significa que el potencial es el mismo que al empezar. Lo que sube en una fuente baja en las resistencias.

## Los dos signos

Al recorrer la malla:

- **Batería**: si se pasa de negativo a positivo, $+\mathcal{E}$; al revés, $-\mathcal{E}$.
- **Resistencia**: si se va en el sentido de la corriente, $-IR$ (caída); al revés, $+IR$.

## Cómo se aplica junto con los nodos

1. Asignar una corriente a cada rama, con un sentido supuesto.
2. Aplicar nodos: $\sum I = 0$.
3. Aplicar mallas: $\sum \Delta V = 0$.
4. Resolver el sistema.

Con $n$ ramas hacen falta $n$ ecuaciones independientes.

## Un caso simple

Una batería de 12 V con dos resistencias de 100 Ω en serie:

$$
12 - 100I - 100I = 0
\quad\Longrightarrow\quad
I = 0{,}06\ \text{A}
$$

## Error típico

Cambiar de criterio de signos a mitad del recorrido. Hay que fijar una convención y sostenerla en toda la malla. El error de signo es, de lejos, el más frecuente en estos ejercicios.

## Relaciones

- **Necesitás antes:** [[ley-kirchhoff-nodos]] · [[fuerza-electromotriz]]
- **Esto te habilita:** [[circuitos]] · [[resistencias-serie]]
- **Se aplica en:** [[puente-wheatstone]] · [[circuito-rl]]
