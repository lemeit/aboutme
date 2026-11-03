---
title: "Campo de una carga puntual"
description: "Cómo decae el campo eléctrico con la distancia alrededor de una carga."
materia: "Física"
tema: "Electricidad y Magnetismo"
tags:
  - electricidad
---

# Campo de una carga puntual

> **En una frase.** Alrededor de una carga puntual el campo apunta radialmente y cae con el cuadrado de la distancia.

## Fórmula

$$
E = k\,\frac{|q|}{r^2}
$$

- $E$: campo eléctrico, en N/C
- $k$: [[constante-coulomb]]
- $q$: carga fuente
- $r$: distancia a la carga

La dirección es radial: **sale** si la carga es positiva, **entra** si es negativa.

## De dónde sale

Es la [[ley-de-coulomb]] dividida por la carga de prueba:

$$
E = \frac{F}{q_0} = k\frac{|q||q_0|}{r^2}\cdot\frac{1}{|q_0|}
$$

El campo no depende de la carga que lo mide: es propiedad del espacio alrededor de la fuente.

## Superposición

Con varias cargas, el campo total es la suma **vectorial** de los campos individuales. Se calcula cada uno como si los demás no existieran y se suman componente por componente.

## Comparación con la gravedad

$$
g = G\frac{M}{r^2}
\qquad
E = k\frac{|q|}{r^2}
$$

La misma estructura, pero el campo eléctrico puede ser atractivo o repulsivo, y es muchísimo más intenso.

## Error típico

Usar el signo de la carga y además darle dirección al vector por separado. Lo práctico: calcular el **módulo** con $|q|$ y asignar la dirección según el signo, hacia afuera o hacia adentro.

## Ejemplo

Una carga de $2\ \mu\text{C}$ a 30 cm:

$$
E = 9\times10^9\cdot\frac{2\times10^{-6}}{0{,}09} = 2\times10^5\ \text{N/C}
$$

Sale de la carga, porque es positiva.

## Relaciones

- **Necesitás antes:** [[campo-electrico]] · [[ley-de-coulomb]]
- **Esto te habilita:** [[lineas-campo-electrico]] · [[dipolo-electrico]]
- **Se aplica en:** [[diferencia-potencial]] · [[trabajo-campo-electrico]]
