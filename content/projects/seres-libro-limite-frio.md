+++
aliases = ["/projects/seres-termicos/libro/limite-frio/"]
title = "El límite del frío"
description = "Profundización conceptual sobre entropía a baja temperatura."
url = "/projects/simus/bestiario/limite-frio/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 25
book_part = "anexos"
book_part_title = "Anexos y taller"
book_label = "Anexo A"
[build]
list = "never"
+++

Este complemento se estudia después del capítulo de entropía. Explora una curva conceptual de baja temperatura para un cristal ideal.

## Qué observar

Seguí cómo cambia la entropía cuando la temperatura absoluta se acerca a cero. Distinguí un límite matemático de un procedimiento real de enfriamiento.

## Modelo y límites

No es una simulación de una heladera ni un método para alcanzar $0\,\mathrm K$. La curva no describe universalmente cualquier material, fase o proceso.

## Una curva conceptual de baja temperatura

La escena elige $C(T)=\beta T^3$, con $\beta=0{,}0003$ J/K⁴ como parámetro ilustrativo. Para un cristal perfecto con $S(0)=0$:

$$S(T)-S(0)=\int_0^T\frac{C(\tau)}{\tau}\,d\tau=\int_0^T\beta\tau^2\,d\tau=\frac{\beta T^3}{3}.$$

La energía respecto del estado de referencia se obtiene integrando $dU=C(T)dT$:

$$U(T)-U(0)=\int_0^T\beta\tau^3\,d\tau=\frac{\beta T^4}{4}.$$

| Temperatura ilustrativa (K) | Capacidad (J/K) | Entropía (J/K) | Energía respecto de 0 (J) |
| --- | --- | --- | --- |
| 1 | 0,0003 | 0,0001 | 0,000075 |
| 2 | 0,0024 | 0,0008 | 0,0012 |

El tiempo del control recorre esta curva: no es un cálculo de velocidad de enfriamiento. El límite $T\to0$ de estas funciones no demuestra que un proceso físico pueda alcanzar cero absoluto. El supuesto sobre el cristal y el régimen de baja temperatura son parte del modelo.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v04-tercera-ley.html" title="Anexo A — El límite del frío" height="1100" >}}
