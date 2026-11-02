---
title: "Conservación del momentum"
description: "Si no hay fuerzas externas, la cantidad de movimiento total de un sistema no cambia."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Conservación del momentum

> **En una frase.** Lo que se mueve no cambia su cantidad de movimiento total si nadie empuja desde afuera.

## Enunciado

$$
\sum \vec{F}_{\text{ext}} = 0 \quad\Longrightarrow\quad \vec{p}_{\text{total}} = \text{constante}
$$

donde $\vec{p} = m\vec{v}$ es el [[momentum-lineal]]. La igualdad es vectorial: se conserva por separado en cada eje.

## De dónde sale

Viene de la [[newton-tercera]]. Si dos cuerpos interactúan, las fuerzas son iguales y opuestas, así que los impulsos que se dan son iguales y opuestos:

$$
\Delta \vec{p}_1 = -\Delta \vec{p}_2
\quad\Longrightarrow\quad
\Delta(\vec{p}_1 + \vec{p}_2) = 0
$$

No hace falta conocer la fuerza: alcanza con comparar antes y después. Para eso sirve: **evita tener que analizar el instante del golpe**, que es justamente el momento donde la fuerza es imposible de medir.

## Cuándo vale

Vale si la resultante externa es nula o despreciable durante el fenómeno:

- **Choques**: duran milésimas y las fuerzas internas son enormes comparadas con el rozamiento.
- **Explosiones**: igual, pero al revés.
- **Patines o hielo**: el rozamiento es muy chico.
- **Cohetes**: en el vacío, el sistema cohete + gas conserva su momentum.

## Cuándo no

Si hay una fuerza externa neta: el frenado de un auto, un cuerpo que cae con el peso actuando. Ahí $\vec{p}$ cambia, y el cambio es exactamente el [[impulso]] de esa fuerza externa.

## Error típico

Aplicarla al conjunto pero olvidar un cuerpo del conjunto. Si el sistema es "el bloque", el piso ejerce fuerza externa y no se conserva; si el sistema es "bloque + Tierra", sí.

## Ejemplo

Un carrito de 2 kg a 3 m/s choca contra otro de 4 kg en reposo, y quedan unidos:

$$
2 \cdot 3 + 4 \cdot 0 = (2+4)\,v
\quad\Longrightarrow\quad
v = 1\ \text{m/s}
$$

El momentum se conserva; la energía cinética no (es un [[choque-perfectamente-inelastico]]).

## Relaciones

- **Necesitás antes:** [[momentum-lineal]] · [[impulso]]
- **Esto te habilita:** [[choque-elastico]] · [[choque-inelastico]]
- **Se aplica en:** [[movimiento-centro-masa]] · [[conservacion-momento-angular]]
