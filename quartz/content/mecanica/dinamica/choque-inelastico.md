---
title: "Choque inelástico"
description: "Un choque donde se conserva el momentum pero no la energía cinética."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Choque inelástico

> **En una frase.** Los cuerpos chocan, se deforman y parte de la energía de movimiento se convierte en calor: solo se conserva el momentum.

## Qué se conserva

$$
\vec{p}_{\text{antes}} = \vec{p}_{\text{después}}
\qquad\text{pero}\qquad
E_{c,\text{después}} < E_{c,\text{antes}}
$$

Es el caso **normal**: todos los choques reales son inelásticos en algún grado. El [[choque-elastico]] es el caso límite ideal.

## A dónde va la energía

A deformación permanente, calor, sonido y chispas. La energía no desaparece: se transforma. El balance completo es el de [[fuerzas-no-conservativas]]:

$$
E_{c,i} = E_{c,f} + Q
$$

## Coeficiente de restitución

Mide cuánto rebota:

$$
e = \frac{v_2' - v_1'}{v_1 - v_2}
$$

- $e = 1$: elástico
- $0 < e < 1$: inelástico (lo habitual: una pelota de tenis ronda 0,7–0,8)
- $e = 0$: perfectamente inelástico, los cuerpos quedan pegados

## Cómo se resuelve

1. Plantear conservación de momentum (siempre).
2. Usar el dato de $e$ o la condición de "quedan unidos".
3. **No** plantear conservación de energía cinética salvo que el enunciado diga que es elástico.

## Error típico

Igualar las energías cinéticas "porque la energía se conserva". Se conserva la energía **total**, no la mecánica. Si el choque es inelástico, la energía mecánica baja y el resto aparece como calor.

## Ejemplo

Un auto de 1000 kg a 20 m/s choca contra otro de 1500 kg detenido y quedan enganchados ($e = 0$):

$$
v' = \frac{1000\cdot 20}{2500} = 8\ \text{m/s}
$$

Energía antes: 200 kJ. Después: 80 kJ. Los 120 kJ restantes se fueron en deformar los autos.

## Relaciones

- **Necesitás antes:** [[conservacion-momentum]] · [[energia-cinetica]]
- **Esto te habilita:** [[choques]] · [[choque-perfectamente-inelastico]]
- **No confundir con:** [[choque-elastico]]
