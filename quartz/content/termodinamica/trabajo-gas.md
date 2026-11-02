---
title: "Trabajo de un gas"
description: "El trabajo que hace un gas al expandirse: el área bajo la curva en el diagrama P-V."
materia: "Física"
tema: "Termodinámica"
tags:
  - termodinamica
---

# Trabajo de un gas

> **En una frase.** Un gas que empuja un pistón hace trabajo, y ese trabajo es el área bajo su curva en el diagrama $P$-$V$.

## Fórmula

$$
W = \int P\, dV
$$

Con presión constante se simplifica:

$$
W = P \, \Delta V
$$

Con $P$ en pascal y $V$ en m³, el trabajo sale en joule.

## Signos

| Situación | Signo | Qué pasa |
|---|---|---|
| El gas se expande | $W > 0$ | el gas hace trabajo, entrega energía |
| El gas se comprime | $W < 0$ | se hace trabajo **sobre** el gas |
| Volumen constante | $W = 0$ | no hay desplazamiento |

Es la convención de la [[primera-ley-termodinamica]]: positivo cuando el trabajo lo hace el sistema.

## El diagrama P-V

En un gráfico de presión contra volumen:

- El trabajo es el **área** bajo la curva.
- Si el proceso va de izquierda a derecha (expandir), el área suma.
- Si va de derecha a izquierda (comprimir), resta.

Un [[ciclo-termodinamico]] encierra un área: si el giro es horario, el gas entrega trabajo neto; si es antihorario, lo consume.

## Por qué el camino importa

El mismo par de estados puede alcanzarse por caminos distintos, con áreas distintas y por lo tanto trabajos distintos. Eso es lo que hace que el trabajo no sea una función de estado.

## Aplicación

Es el principio de cualquier motor: el gas empuja y mueve un pistón. El [[maquina-termica|motor de combustión]] y la turbina de vapor funcionan así.

## Error típico

Calcular $W = P\Delta V$ en un proceso donde la presión cambia. Esa fórmula vale **solo** a presión constante; en los otros casos hay que integrar o medir el área.

## Ejemplo

Un gas a 100 kPa se expande de 2 L a 5 L a presión constante:

$$
W = 100\,000 \cdot (0{,}005 - 0{,}002) = 300\ \text{J}
$$

## Relaciones

- **Necesitás antes:** [[proceso-termodinamico]] · [[presion]]
- **Esto te habilita:** [[ciclo-termodinamico]] · [[maquina-termica]]
- **Se aplica en:** [[primera-ley-termodinamica]] · [[energia-interna-gas-ideal]]
