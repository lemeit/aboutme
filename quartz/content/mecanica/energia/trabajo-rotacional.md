---
title: "Trabajo rotacional"
description: "El trabajo de un torque: cuánta energía se transfiere al girar un cuerpo."
materia: "Física"
tema: "Energía"
tags:
  - mecanica
  - energia
---

# Trabajo rotacional

> **En una frase.** Así como una fuerza que empuja hace trabajo, un torque que hace girar también: es el torque por el ángulo girado.

## Fórmula

Para un torque constante alrededor del eje de giro:

$$
W = \tau \, \Delta\theta
$$

- $W$: trabajo, en J
- $\tau$: [[torque]], en N·m
- $\Delta\theta$: ángulo girado, en **radianes**

Si el torque varía con el ángulo:

$$
W = \int_{\theta_i}^{\theta_f} \tau\, d\theta
$$

## Potencia rotacional

La potencia entregada al girar es:

$$
P = \tau \, \omega
$$

Análoga a $P = F v$ en el movimiento rectilíneo. Un motor potente entrega mucho torque a muchas vueltas; un motor de fuerza entrega mucho torque a pocas.

## Relación con la energía cinética

Es el mismo [[teorema-trabajo-energia]], en versión angular:

$$
W_{\text{neto}} = \Delta E_{c,\text{rot}} = \tfrac{1}{2} I \omega_f^2 - \tfrac{1}{2} I \omega_i^2
$$

## Quién hace trabajo y quién no

Solo hace trabajo el torque que gira al cuerpo en su mismo sentido. Una fuerza **radial** (como la centrípeta) no hace trabajo rotacional: no produce torque respecto del centro, porque su brazo es cero.

## Error típico

Usar el ángulo en grados. La fórmula $W = \tau\Delta\theta$ exige radianes: si se usa grados, el trabajo sale $\pi/180$ veces más chico. Es el mismo cuidado que en $s = \theta r$.

## Ejemplo

Una llave de 0,3 m con 50 N aplicados perpendicularmente gira un perno media vuelta:

$$
\tau = 50\cdot 0{,}3 = 15\ \text{N·m}
\qquad
W = 15 \cdot \pi \approx 47\ \text{J}
$$

Si el giro se hace en 1 s, la potencia media es $\approx 47$ W.

## Relaciones

- **Necesitás antes:** [[torque]] · [[trabajo]]
- **Esto te habilita:** [[energia-cinetica-rotacional]]
- **Se aplica en:** [[potencia]]
