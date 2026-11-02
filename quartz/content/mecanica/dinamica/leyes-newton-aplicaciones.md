---
title: "Aplicaciones de las leyes de Newton"
description: "El método para resolver cualquier problema de dinámica: diagrama de cuerpo libre, ejes y ecuaciones."
materia: "Física"
tema: "Dinámica"
tags:
  - mecanica
  - dinamica
---

# Aplicaciones de las leyes de Newton

> **En una frase.** Casi todos los problemas de dinámica se resuelven con el mismo procedimiento de cinco pasos; lo que cambia es qué fuerzas aparecen.

## El método

1. **Elegir el cuerpo** que se va a analizar. Si hay varios, uno por vez.
2. **Dibujar el diagrama de cuerpo libre**: solo las fuerzas que *otros* le hacen. Peso, normal, tensión, rozamiento, fuerza aplicada.
3. **Elegir los ejes**. Conviene alinear uno con la aceleración; en un plano inclinado, los ejes van paralelos y perpendiculares al plano.
4. **Descomponer** cada fuerza que no esté sobre un eje.
5. **Plantear** $\sum F_x = m a_x$ y $\sum F_y = m a_y$, y resolver.

Si el cuerpo no acelera en un eje, esa componente da cero. Eso suele dar la normal o la tensión sin esfuerzo.

## Las fuerzas que aparecen siempre

- **Peso**: $mg$, siempre hacia abajo.
- **Normal**: perpendicular a la superficie, no siempre $mg$.
- **Tensión**: a lo largo de la cuerda, tirando del cuerpo.
- **Rozamiento**: paralelo a la superficie, opuesto al movimiento (o al intento de movimiento).
- **Fuerza aplicada**: la que diga el problema.

## Casos típicos

- **Ascensor**: si acelera hacia arriba, $N > mg$; si acelera hacia abajo, $N < mg$; si se corta el cable, $N = 0$.
- **Bloque sobre mesa**: $N = mg$ y el rozamiento máximo es $\mu_s N$.
- **Dos cuerpos apilados**: hay que analizarlos por separado; el de arriba solo siente el rozamiento con el de abajo.
- **Plano inclinado**: los ejes giran con el plano, no con la horizontal.

## Error típico

El más común no es de cuentas: es **dibujar mal**. Poner una fuerza que no existe (la "fuerza de la inercia"), omitir el rozamiento, o dibujar la normal apuntando hacia el piso. También equivocarse de sistema de referencia: si el cuerpo acelera, conviene usar ejes inerciales.

## Ejemplo

Un ascensor de 500 kg sube acelerando a 2 m/s². Tensión del cable:

$$
T - mg = ma
\quad\Longrightarrow\quad
T = 500(9{,}8 + 2) = 5900\ \text{N}
$$

Si subiera a velocidad constante, la tensión sería 4900 N.

## Relaciones

- **Necesitás antes:** [[newton-primera]] · [[newton-segunda]] · [[newton-tercera]]
- **Esto te habilita:** [[plano-inclinado]] · [[sistemas-de-cuerdas]]
- **Se aplica en:** [[rozamiento]] · [[fuerza-normal]] · [[fuerza-centripeta]]
