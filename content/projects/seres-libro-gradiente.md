+++
title = "Seguir el gradiente"
description = "Acoplar el movimiento de agentes a las diferencias del campo."
url = "/projects/seres-termicos/libro/gradiente/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 11
book_part = "patrones"
book_part_title = "Parte II · Del campo a las formas"
book_label = "Capítulo 10"
[build]
list = "never"
+++

Los agentes ya no se mueven completamente al margen del medio: leen su gradiente y responden según una regla de movimiento.

## Qué observar

Seguí un agente y compará su dirección con la distribución térmica cercana. Observá cómo el movimiento de una fuente cambia a su vez el campo que encuentran los demás.

## Modelo y límites

La regla de respuesta al gradiente está programada. La ley de Fourier describe transferencia de calor; no deduce por sí sola que un individuo deba perseguir o evitar una temperatura.

## Dos cálculos que se relacionan

Esta escena guarda un campo relativo $\theta$ en una malla de 240 × 180 celdas y una lista de agentes con posición y velocidad. Primero actualiza el campo; después utiliza sus diferencias espaciales para modificar el movimiento.

La malla es una tabla bidimensional de números. Los índices $(i,j)$ identifican columna y fila; en esta pantalla $j$ aumenta hacia abajo. No son coordenadas medidas en metros.

## Primero: fuentes, difusión y relajación

1. **Inyectar las fuentes.** Las gaussianas se suman al campo anterior, formando un estado intermedio:

$$
\theta^*=\theta^n+S^n.
$$

2. **Leer los vecinos de ese estado intermedio.** Se calcula:

$$
L^*_{i,j}=
\theta^*_{i-1,j}+\theta^*_{i+1,j}
+\theta^*_{i,j-1}+\theta^*_{i,j+1}-4\theta^*_{i,j}.
$$

3. **Actualizar la celda.** El código aplica:

$$
\theta^{n+1}_{i,j}
=\theta^*_{i,j}
+rL^*_{i,j}-\lambda\theta^*_{i,j},
\qquad r=0{,}14\,\alpha_{\rm control}.
$$

La relajación se resta del estado intermedio. No es la multiplicación del resultado completo que usamos en el capítulo anterior. Los bordes se completan copiando el vecino interior.

4. **Guardar en Float32.** Todas las celdas interiores se calculan a partir del mismo buffer de entrada; luego se intercambian los buffers. Así una celda no usa, por accidente, vecinos que ya avanzaron de paso.

En reproducción normal se hacen dos actualizaciones del campo por cuadro. El botón de avance manual realiza una sola actualización y la correspondiente actualización del movimiento.

## Después: leer el gradiente para moverse

En el campo ya actualizado, las diferencias centradas aproximan el gradiente local, tomando una celda como unidad de distancia:

$$
g_x\approx\frac{\theta_{i+1,j}-\theta_{i-1,j}}2,
\qquad
g_y\approx\frac{\theta_{i,j+1}-\theta_{i,j-1}}2.
$$

El gradiente apunta hacia valores crecientes de $\theta$. La contribución programada a la velocidad es:

$$
\Delta\mathbf v_{\rm grad}
=-s\,\kappa\,\mathbf g\,\delta,
\qquad \kappa=0{,}04\,k_{\rm control}.
$$

Con $s=+1$, el agente responde hacia valores menores; con $s=-1$, hacia mayores. Esta regla es una hipótesis del prototipo, no una fuerza en newtons deducida de Fourier. También intervienen una atracción débil al centro, ruido aleatorio, amortiguación y un límite de rapidez. Por eso el gradiente solo no permite reconstruir toda la trayectoria.

## De la celda al color

El campo base se colorea con $\theta/120$ limitado a $[-1,1]$. Después se dibujan los agentes como marcas luminosas. La muestra RGB de la tabla corresponde al **campo antes de superponer esas marcas**.

En **Del cálculo al color**, pausá y avanzá un paso. La tabla distingue el aporte previo de las fuentes, la vecindad que entra en la difusión y el valor guardado. También muestra el gradiente de la celda elegida. Cambiar la celda examinada observa otro lugar; no añade una fuente ni altera el campo.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v02-gradiente.html" title="Capítulo 10 — Seguir el gradiente" height="1100" >}}
