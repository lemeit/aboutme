+++
title = "Multiplicación de vectores"
date = "2026-10-13"
draft = false
math = true
weight = 8
description = "Producto por un escalar, producto escalar y producto vectorial, con trabajo y torque como ejemplos."
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 166–170"
figuras_estado = "3 figuras extraídas y revisadas"
visual_estado = "Verificada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 166–170. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=166).

## No hay una única operación entre vectores

El original distingue producto escalar, producto vectorial y producto tensorial. Producen objetos diferentes y no pueden intercambiarse. En estas notas se desarrollan los dos primeros; el tensorial se menciona como una operación de nivel más avanzado, que combina componentes y produce un tensor de segundo orden.

## Multiplicar por un escalar

Si $\vec B=k\vec A$, su módulo es $|k|\,|\vec A|$. Si $k>0$, conserva el sentido; si $k<0$, lo invierte; si $k=0$, el resultado es el vector cero, que no tiene una dirección determinada.

En un movimiento de velocidad constante, $\Delta\vec x=\vec v\Delta t$. Para un intervalo positivo, el desplazamiento tiene el sentido de la velocidad. En un resorte ideal, $\vec F_s=-k\vec x$: el signo negativo expresa que la fuerza recuperadora se opone al desplazamiento respecto del equilibrio.

## Producto escalar

$$\vec A\cdot\vec B=AB\cos\theta$$

Aquí $A$ y $B$ son módulos y $\theta$ es el ángulo entre los vectores. El resultado es un escalar y tiene las unidades del producto de las magnitudes. Para vectores perpendiculares es cero; con ángulo obtuso es negativo.

El trabajo de una fuerza constante es:

$$W=\vec F\cdot\Delta\vec x=F\,|\Delta\vec x|\cos\theta$$

El producto selecciona la componente de la fuerza paralela al desplazamiento. No corresponde multiplicar módulos sin considerar el ángulo, salvo que los vectores tengan la relación adecuada.

## Producto vectorial

El resultado $\vec A\times\vec B$ es un vector perpendicular al plano de ambos. Su módulo es:

$$|\vec A\times\vec B|=AB\sin\theta$$

El ángulo se toma entre 0° y 180°. Si los vectores son paralelos o antiparalelos, el producto es cero. Para determinar el sentido, orientá los dedos de la mano derecha desde el primer vector hacia el segundo por el ángulo menor: el pulgar indica el sentido del resultado.

{{< figura src="/images/diagramas/cap02_mano-derecha_pp168.png" width="300" alt="Mano derecha orientada para indicar el sentido del producto vectorial." caption="Los dedos giran del primer vector al segundo y el pulgar señala el resultado. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 168. Recorte del original, CC BY-NC-SA 4.0." >}}

El orden importa:

$$\vec B\times\vec A=-(\vec A\times\vec B)$$

En un dibujo plano, un punto dentro de un círculo representa una flecha que sale de la hoja; una cruz, una flecha que entra. Los signos recuerdan la punta y la cola de una flecha vista de frente.

## Torque

Para una fuerza aplicada en un punto cuyo vector de posición respecto del eje u origen es $\vec r$:

$$\vec\tau=\vec r\times\vec F,\qquad |\vec\tau|=rF\sin\theta$$

{{< figura src="/images/diagramas/cap02_torque-llave_pp169.png" width="340" alt="Llave girando alrededor de una tuerca y fuerza aplicada en su extremo." caption="El brazo y la fuerza determinan el torque respecto del eje. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 169. Recorte del original, CC BY-NC-SA 4.0." >}}

El ejemplo de una llave ilustra que una fuerza perpendicular a la llave produce el módulo $rF$. Una fuerza paralela no produce ese torque. El punto de aplicación y el orden del producto importan; por eso no basta con conocer solamente el módulo de la fuerza.

## Ejercicio del original

{{< figura src="/images/diagramas/cap02_ejercicio-productos_pp170.png" width="360" alt="Vector A de módulo 18 a 70 grados sobre un vector B horizontal de módulo 15." caption="Geometría del ejercicio de ambos productos. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 170. Recorte del original, CC BY-NC-SA 4.0." >}}

En la p. 170, $\vec A$ tiene módulo 18 y forma 70° por encima de $\vec B$, que tiene módulo 15 y apunta horizontalmente a la derecha. Se piden ambos productos:

$$\vec A\cdot\vec B=18(15)\cos70^\circ\approx92{,}35$$

$$|\vec A\times\vec B|=18(15)\sin70^\circ\approx253{,}72$$

Para $\vec A\times\vec B$, la rotación desde A hacia B en el dibujo es horaria: el resultado entra en la hoja. Para $\vec B\times\vec A$, sale. La figura no da unidades para esos módulos; si las magnitudes tuvieran unidades, el producto también las tendría.

**Aclaración de esta adaptación:** se distingue el vector torque de su módulo, y se explicita que un escalar negativo invierte el sentido. Los juegos de palabras en inglés de la p. 169 se omiten para concentrar la lectura en las operaciones físicas.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.