---
title: "Choque elástico"
description: "Un choque donde se conservan el momentum y la energía cinética."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Choque elástico

> **En una frase.** Chocan, rebotan y no se pierde energía de movimiento: lo que se deformó vuelve a su lugar.

## Qué se conserva

$$
\vec{p}_{\text{antes}} = \vec{p}_{\text{después}}
\qquad\text{y}\qquad
E_{c,\text{antes}} = E_{c,\text{después}}
$$

Las dos condiciones a la vez. Con dos cuerpos y una dimensión alcanzan para resolver las dos velocidades finales.

## Fórmulas (una dimensión)

$$
v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1 + \frac{2m_2}{m_1 + m_2}\,v_2
$$
$$
v_2' = \frac{2m_1}{m_1 + m_2}\,v_1 + \frac{m_2 - m_1}{m_1 + m_2}\,v_2
$$

No hace falta memorizarlas: con las dos ecuaciones de conservación se llega igual.

## Casos que conviene reconocer

- **Masas iguales**: intercambian velocidades. Si una estaba quieta, la otra se queda quieta.
- **Blanco muy masivo** ($m_2 \gg m_1$): el liviano rebota con velocidad parecida a la que traía. Es el caso de una pelota contra una pared.
- **Proyectil muy masivo** ($m_1 \gg m_2$): el liviano sale al doble de la velocidad del grande.

## Cuándo es elástico de verdad

Casi nunca a nivel macroscópico. Lo es, en buena aproximación, el choque entre bolas de acero o de billar, y el de moléculas de un gas ideal. Un choque de plastilina no lo es.

Lo que define el grado de elasticidad es el **coeficiente de restitución**: $e = 1$ para elástico, $e = 0$ para perfectamente inelástico.

## Error típico

Aplicar conservación de energía cinética a cualquier choque. En un choque real siempre se pierde algo en deformación, sonido y calor. La energía cinética solo se conserva si el enunciado dice que el choque es elástico.

## Ejemplo

Bola de 1 kg a 4 m/s contra otra de 3 kg quieta:

$$
v_1' = \frac{1-3}{4}\cdot 4 = -2\ \text{m/s}
\qquad
v_2' = \frac{2\cdot 1}{4}\cdot 4 = 2\ \text{m/s}
$$

La primera rebota a 2 m/s; la segunda sale a 2 m/s. Se verifica: $E_c$ inicial $= 8$ J, final $= 2 + 6 = 8$ J. ✓

## Relaciones

- **Necesitás antes:** [[conservacion-momentum]] · [[energia-cinetica]]
- **Esto te habilita:** [[choques]]
- **No confundir con:** [[choque-inelastico]]
