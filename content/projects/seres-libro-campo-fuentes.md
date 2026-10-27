+++
aliases = ["/projects/seres-termicos/libro/campo-fuentes/"]
title = "El campo que disuelve"
description = "Agregar fuentes prescritas a un campo que difunde."
url = "/projects/simus/bestiario/campo-fuentes/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 10
book_part = "patrones"
book_part_title = "Parte II · Del campo a las formas"
book_label = "Capítulo 9"
[build]
list = "never"
+++

Sobre un campo difusivo se colocan agentes que aportan fuentes gaussianas. Cada fuente tiene una posición y una amplitud programadas.

## Qué observar

Compará la forma localizada de una fuente con la huella extendida en el medio. El campo conserva historia mientras difunde y se relaja según las reglas del prototipo.

## Modelo y límites

El campo usa una variable térmica relativa. Las fuentes son impuestas y no prueban un balance energético cerrado de cada agente. Un objeto que se mueve y emite un campo no es todavía un organismo autónomo.

## De una ecuación a una malla

La imagen guarda un número por celda: $\theta_{i,j}$. Es una variable térmica **relativa**, con valores positivos y negativos; no una lectura en grados Celsius ni una temperatura absoluta negativa. La malla tiene 220 columnas y 160 filas.

La idea continua combina difusión, relajación hacia cero y fuentes:

$$
\frac{\partial\theta}{\partial t}
=\alpha\nabla^2\theta-\lambda\theta+S.
$$

Para calcularla, reemplazamos el espacio continuo por celdas y el tiempo por actualizaciones. Con separación $h$, la diferencia centrada aproxima la segunda derivada:

$$
\frac{\partial^2\theta}{\partial x^2}
\approx\frac{\theta_{i+1,j}-2\theta_{i,j}+\theta_{i-1,j}}{h^2}.
$$

Sumando las direcciones X e Y obtenemos la suma de cinco puntos:

$$
L_{i,j}=
\theta_{i-1,j}+\theta_{i+1,j}
+\theta_{i,j-1}+\theta_{i,j+1}-4\theta_{i,j},
\qquad \nabla^2\theta\approx L/h^2.
$$

Si el centro supera el promedio de sus vecinos, $L$ es negativo y la difusión reduce su valor. Si está por debajo, sucede lo contrario.

## Una actualización, en el orden del programa

1. **Leer el estado anterior.** Se toman el centro y sus cuatro vecinos del mismo paso.
2. **Difundir.** Se calcula $\theta+rL$. Aquí $r=0{,}22$ es el coeficiente numérico equivalente a $\alpha\Delta t/h^2$; no se presenta como una difusividad medida en m²/s.
3. **Relajar.** El resultado completo se multiplica por $d=0{,}994$:

$$
\widetilde\theta=d(\theta+rL).
$$

4. **Mover las fuentes y sumar su aporte.** Cada fuente aporta una gaussiana alrededor de su nueva posición:

$$
s_b(i,j)=A_b p_b\,0{,}12\,
\exp\left[-\frac{(i-x_b)^2+(j-y_b)^2}{2\sigma_b^2}\right],
\qquad
p_b=0{,}65+0{,}35\sin(n\omega_b+\phi_b).
$$

La gaussiana se evalúa dentro de un entorno finito de cada fuente. El valor final es el campo relajado más esos aportes. Este orden importa: **en esta versión las fuentes se agregan después de difundir**.

5. **Guardar y colorear.** Los buffers usan Float32. El color se obtiene de $\theta/100$, limitado a $[-1,1]$ para dibujar. Saturar el color no recorta el campo calculado.

El bucle normal agrupa tres actualizaciones por cuadro. El contador de la tabla cuenta actualizaciones del modelo, no segundos físicos. Los bordes copian las celdas interiores vecinas; las fuentes y la relajación hacen que este no sea un sistema energético aislado.

## Leer los números que forman la imagen

Debajo de la escena aparece **Del cálculo al color**. Pausá y avanzá un paso: verás la vecindad inicial, el término difusivo, la relajación, el aporte efectivo de las fuentes y el resultado realmente guardado. La muestra RGB usa la misma función de color que el dibujo.

Elegí otra celda por sus índices de columna y fila. Cada celda de esta malla se pinta inicialmente como un bloque de 4 × 4 píxeles; después el navegador ajusta la imagen al espacio disponible. La tabla no es una colección de datos inventados para ilustrar la fórmula: observa los buffers de esa ejecución.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v01-campo.html" title="Capítulo 9 — El campo que disuelve" height="1100" >}}
