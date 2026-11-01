---
title: "Teorema trabajo-energía"
description: "El trabajo neto sobre un cuerpo es igual al cambio de su energía cinética."
materia: "Física"
tema: "Energía"
---

# Teorema trabajo-energía

> **En una frase.** Todo el trabajo que se hace sobre un cuerpo termina convertido en energía de movimiento: el trabajo neto es el cambio de la energía cinética.

## Enunciado

$$
W_{\text{neto}} = \Delta E_c = E_{c,f} - E_{c,i} = \tfrac{1}{2} m v_f^2 - \tfrac{1}{2} m v_i^2
$$

- $W_{\text{neto}}$: trabajo de **todas** las fuerzas que actúan sobre el cuerpo, en J
- $E_c$: [[energia-cinetica]] del cuerpo

## De dónde sale

Es consecuencia directa de la segunda ley de Newton. Si sobre un cuerpo actúa una fuerza neta constante a lo largo de una distancia:

$$
W = F\,d = (m a)\, d
\qquad\text{y}\qquad
v_f^2 = v_i^2 + 2ad \;\Rightarrow\; ad = \frac{v_f^2 - v_i^2}{2}
$$

Sustituyendo, $W = \tfrac{1}{2}m v_f^2 - \tfrac{1}{2} m v_i^2$. La cuenta no depende de cómo varíe la fuerza, solo del resultado: por eso es un teorema y vale siempre.

## Qué implica

- Si el trabajo neto es **positivo**, el cuerpo acelera.
- Si es **negativo**, frena (el rozamiento hace trabajo negativo).
- Si es **cero**, la rapidez no cambia: puede haber fuerzas, pero no cambian el módulo de $v$.

## Error típico

Sumar todas las fuerzas *menos* el rozamiento "porque no impulsa". El teorema usa el trabajo **neto**: si el rozamiento está, su trabajo (negativo) entra en la cuenta. Si se lo ignora, el resultado da un cuerpo que acelera más de lo que en realidad puede.

## Ejemplo

Un auto de 1000 kg que frena de 20 m/s a 0 en 40 m. El trabajo del rozamiento es:

$$
W = \Delta E_c = 0 - \tfrac{1}{2}\cdot 1000\cdot 400 = -200\,000\ \text{J}
$$

Y la fuerza media de frenado: $F = W/d = 200\,000/40 = 5000$ N, opuesta al movimiento.

## Relaciones

- **Necesitás antes:** [[trabajo]] · [[energia-cinetica]]
- **Esto te habilita:** [[fuerzas-conservativas]] · [[conservacion-de-la-energia]]
- **Se aplica en:** [[trabajo-fuerza-variable]]
