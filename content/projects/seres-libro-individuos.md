+++
aliases = ["/projects/seres-termicos/libro/individuos/"]
title = "Contar a los individuos"
description = "Introducir identidad y una reserva individual finita."
url = "/projects/simus/bestiario/individuos/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 14
book_part = "individuos"
book_part_title = "Parte III · De las formas a los individuos"
book_label = "Capítulo 13"
[build]
list = "never"
+++

Cada agente tiene identidad, posición y una reserva $E_i$ asignada al nacer. Una descripción esquemática representa su gasto mediante:

$$\frac{dE_i}{dt}=-\mu.$$

## Qué observar

Seguí un mismo individuo desde su aparición hasta que se agota. Compará la población contada con el campo que dejan sus fuentes. Nacimiento y eliminación son eventos programados.

## Modelo y límites

La reserva no se recarga desde el campo en esta versión. Un umbral de reproducción previsto en el código no implica que se alcance si la energía solo disminuye desde el valor inicial. El mecanismo no demuestra vida ni una fluctuación física del vacío.

## Del presupuesto al ciclo de vida

La ecuación inicial es una abreviatura. La actualización **real por paso** resta una cantidad fija:

$$E_i^{n+1}=E_i^n-0{,}15\mu.$$

No se multiplica por el tiempo entre cuadros. Un cuadro ejecuta dos pasos. Para un individuo con reserva inicial $E_b$, control fijo $\mu>0$ y sin otros cambios, después de $n$ pasos queda $E_b-0{,}15\mu n$. Se elimina en el primer paso para el que ese valor es no positivo:

$$n_{\mathrm{agotamiento}}=\left\lceil\frac{E_b}{0{,}15\mu}\right\rceil.$$

**Ejemplo ilustrativo:** con $E_b=30$ y $\mu=2$, cada paso consume $0{,}3$ y el agotamiento llega al paso 100. No son cien segundos físicos.

| Paso | Reserva calculada |
| --- | --- |
| 0 | 30 |
| 1 | 29,7 |
| 10 | 27 |
| 50 | 15 |
| 100 | 0: se elimina al individuo |

## De la reserva a la fuente visible

Antes de descontar la reserva, cada individuo deposita una gaussiana de amplitud:

$$a_i=s_iA\frac{E_i}{E_{0,i}}\,[0{,}70+0{,}30\sin(n\omega_i+\phi_i)]\,0{,}10,$$

$$\Delta\theta(x,y)=a_i\exp\left[-\frac{(x-x_i)^2+(y-y_i)^2}{2\sigma_i^2}\right].$$

$s_i=\pm1$ determina la polaridad. La amplitud se reduce con $E_i/E_{0,i}$ y oscila por un latido prescrito. El código omite el depósito si $|a_i|\le0{,}01$; la región de la gaussiana también es finita. El campo recibe estas fuentes y luego difunde y se relaja. La fuente y el gasto de reserva son reglas distintas: no hay igualdad automática entre calor depositado y presupuesto consumido.

## Nacer, contar y representar

Los nacimientos externos ensayan una probabilidad $0{,}02$ varias veces por paso, según el control, con un límite de población. No se deducen de la ecuación del calor. El estado inicial de cada reserva pertenece a $[0{,}5E_0,E_0]$.

La condición de reproducción $E_i>rE_0$ no se alcanza con $E_0$ fijo y $r\ge1{,}2$, porque la reserva solo decrece. No debe confundirse un nacimiento externo con reproducción. Las gráficas de población y tasas suavizan sus valores con $y_n=0{,}06x_n+0{,}94y_{n-1}$: por eso el trazo puede mostrar valores no enteros aunque el número de individuos sea entero.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="Capítulo 13 — Contar a los individuos" height="1100" >}}
