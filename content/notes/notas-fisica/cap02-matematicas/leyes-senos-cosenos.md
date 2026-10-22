+++
title = "Leyes de senos y cosenos"
date = "2026-10-13"
draft = false
math = true
weight = 6
description = "Relaciones entre lados y ángulos de triángulos que no necesariamente son rectángulos."
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 152–154"
figuras_estado = "2 figuras extraídas y revisadas"
visual_estado = "Verificada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 152–154. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=152).

## Qué cambia si el triángulo no es rectángulo

Seno, coseno y tangente siguen siendo funciones de un ángulo, pero las relaciones cateto-hipotenusa no pueden aplicarse directamente a un triángulo que no tiene un ángulo recto. Las leyes de senos y cosenos conectan sus lados y ángulos sin esa condición.

En el triángulo ABC, el lado $a$ está frente al ángulo $A$, $b$ frente a $B$ y $c$ frente a $C$. Los nombres pueden cambiarse, siempre conservando esa correspondencia.

Bigler presenta estas relaciones como referencia complementaria. Para determinar un triángulo hacen falta datos suficientes e independientes. **Aclaración de esta adaptación:** tres ángulos solo fijan la forma, no el tamaño; ciertos conjuntos de dos lados y un ángulo pueden admitir dos triángulos, uno o ninguno.

{{< figura src="/images/diagramas/cap02_triangulo-general_pp152.png" width="360" alt="Triángulo ABC con lados a, b y c frente a sus respectivos ángulos." caption="Conservá la correspondencia entre lado y ángulo opuesto. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 152. Recorte del original, CC BY-NC-SA 4.0." >}}

## Ley de senos

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$$

Si conocés un par lado-ángulo opuesto y otro lado o ángulo, podés utilizar dos términos de esa igualdad para hallar la cantidad faltante. Luego, la suma $A+B+C=180^\circ$ permite completar el tercer ángulo cuando corresponde.

Por ejemplo, para hallar $b$ a partir de $a$, $A$ y $B$:

$$b=a\frac{\sin B}{\sin A}$$

Si buscás un ángulo mediante un arco seno, comprobá también su posible suplementario: $B$ y $180^\circ-B$ tienen el mismo seno. La geometría y los datos disponibles deciden qué soluciones son válidas.

## Ley de cosenos

$$c^2=a^2+b^2-2ab\cos C$$

Esta forma utiliza dos lados y el ángulo **comprendido entre ellos** para encontrar el tercer lado. Si se conocen los tres lados, puede despejarse el ángulo:

$$\cos C=\frac{a^2+b^2-c^2}{2ab}$$

$$C=\arccos\left(\frac{a^2+b^2-c^2}{2ab}\right)$$

{{< figura src="/images/diagramas/cap02_ley-cosenos_pp154.png" width="380" alt="Triángulo no rectángulo con dos lados y ángulo comprendido marcados." caption="La ley de cosenos usa el ángulo comprendido entre los dos lados conocidos. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 154. Recorte del original, CC BY-NC-SA 4.0." >}}

Las versiones para $a$ y $b$ se obtienen cambiando simultáneamente lados y ángulos correspondientes. Si $C=90^\circ$, el coseno es cero y reaparece Pitágoras: $c^2=a^2+b^2$.

## Elegir y comprobar

Usá ley de senos cuando haya un par lado-ángulo opuesto conocido que permita cerrar la relación. Usá ley de cosenos cuando se conozcan dos lados con su ángulo incluido o los tres lados. Ninguna ecuación autoriza a combinar un ángulo con un lado que no está frente a él.

Antes de aceptar un resultado, comprobá que los ángulos sumen 180°, que el lado más largo esté frente al ángulo mayor y que se satisfaga la desigualdad triangular. La calculadora debe estar en el modo correspondiente a los ángulos ingresados.

## Ejemplo propio de comprobación

Con lados $a=b=5$ y ángulo comprendido $C=60^\circ$:

$$c^2=25+25-2(5)(5)\cos60^\circ=25$$

Entonces $c=5$ y el triángulo es equilátero. El ejemplo se agrega como práctica; las pp. 152–154 presentan las leyes y sus diagramas, sin esta resolución numérica.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.