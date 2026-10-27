+++
aliases = ["/projects/seres-termicos/libro/tiempo/"]
title = "La huella del tiempo"
description = "Representar la historia de un campo como un volumen."
url = "/projects/simus/bestiario/tiempo/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 17
book_part = "individuos"
book_part_title = "Parte III · De las formas a los individuos"
book_label = "Capítulo 16"
[build]
list = "never"
+++

Se acumulan estados sucesivos de un campo bidimensional. El tercer eje visual contiene tiempo: una trayectoria puede aparecer como un tubo.

## Qué observar

Compará un estado instantáneo con su historia acumulada. Identificá dónde empieza y termina la huella de una fuente y qué significa recorrer el eje temporal.

## Modelo y límites

Es una visualización de datos espacio–tiempo. No añade una tercera dimensión espacial a la dinámica ni constituye una simulación de relatividad general.

## El tercer eje guarda historia

El estado térmico sigue siendo una malla **bidimensional** de $80\times60$ celdas. La textura de dibujo tiene 64 cortes de historia. Su definición conceptual es:

$$\mathcal T(i,j,m)=\theta_{i,j}(n_m).$$

Aquí $m$ identifica un registro guardado; $n_m$ identifica el paso del modelo en ese registro. El tercer eje es tiempo almacenado, no un vecino espacial: no se agrega una segunda derivada térmica respecto de él.

El control de velocidad de historia acumula una cantidad por paso. Cuando alcanza uno, guarda un corte y resta uno al acumulador. Por eso no debe atribuirse a las capas una separación fija en segundos físicos. Al llenarse la memoria circular, los nuevos registros reemplazan a los más antiguos.

**Ejemplo ilustrativo de lectura, no datos de la ejecución:**

| Registro de una celda fija | Estado guardado |
| --- | --- |
| $m=0$ | $0{,}8$ |
| $m=1$ | $0{,}6$ |
| $m=2$ | $0{,}4$ |
| $m=3$ | $0{,}2$ |

La columna de estados se convierte en una sucesión de capas visibles. Una fuente que se mueve deja una trayectoria en ese volumen de historia. No son cuatro dimensiones físicas ni una simulación relativista. La imagen mezcla capas mediante composición volumétrica; el color es una codificación de los estados registrados. Las reglas de reserva, nacimientos y reproducción conservan las limitaciones del capítulo de individuos.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v08-espaciotiempo.html" title="Capítulo 16 — La huella del tiempo" height="1100" >}}
