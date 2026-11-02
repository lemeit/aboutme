---
title: "Conservación del momento angular"
description: "Si no hay torque externo, un cuerpo que gira sigue girando, y acelera al recoger los brazos."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Conservación del momento angular

> **En una frase.** Si nadie hace torque desde afuera, el producto $I\omega$ no cambia: si el cuerpo se achica, gira más rápido.

## Enunciado

$$
\sum \vec{\tau}_{\text{ext}} = 0
\quad\Longrightarrow\quad
\vec{L} = I\vec{\omega} = \text{constante}
$$

donde $L$ es el [[momento-angular]]. Si $I$ baja, $\omega$ sube; si $I$ sube, $\omega$ baja.

## El ejemplo de la bailarina

Con los brazos abiertos tiene mucho $I$ y gira despacio. Al cerrarlos, la masa se acerca al eje, $I$ se reduce a la mitad y el giro se duplica. No hay torque externo: la energía cinética **aumenta** porque el cuerpo hace trabajo al acercar los brazos con sus propios músculos.

Es el mismo caso del patinador, del clavadista que se ovilla y de la gimnasta.

## Dónde aparece

- **Giroscopio**: mantiene su eje de giro y por eso estabiliza barcos y drones.
- **Tierra**: conserva su momento angular, por eso el día tiene la duración que tiene.
- **Estrella que colapsa**: una estrella que se contrae hasta ser una enana o un púlsar multiplica su velocidad de giro.
- **Saltos y piruetas**.

## Comparación con el movimiento rectilíneo

| Traslación | Rotación |
|---|---|
| $p = mv$ | $L = I\omega$ |
| si $\sum F = 0$, $p$ constante | si $\sum\tau = 0$, $L$ constante |

## Error típico

Aplicarla cuando hay un torque externo, como el rozamiento del eje o el peso respecto de un punto que no coincide con el centro de masa. También se olvida que $I$ puede cambiar: la conservación es del **producto**, no de cada factor.

## Ejemplo

Un patinador con $I_1 = 4\ \text{kg·m}^2$ girando a 2 rad/s cierra los brazos y baja a $I_2 = 1{,}5\ \text{kg·m}^2$:

$$
\omega_2 = \omega_1 \frac{I_1}{I_2} = 2 \cdot \frac{4}{1{,}5} \approx 5{,}3\ \text{rad/s}
$$

## Relaciones

- **Necesitás antes:** [[momento-angular]] · [[momento-inercia]]
- **Esto te habilita:** [[segunda-ley-newton-rotacional]]
- **Se aplica en:** [[energia-cinetica-rotacional]] · [[gravitacion/index|Gravitación]]
