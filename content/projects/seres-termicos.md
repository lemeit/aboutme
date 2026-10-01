+++
title = 'Seres Térmicos'
date = '2026-09-25'
lastmod = '2026-09-25'
weight = 10
draft = false
math = true
tags = ['física', 'simulación', 'WebGL2', 'Canvas2D', 'Borges', 'visualización', 'difusión']
description = 'Laboratorio de hipótesis físicas inspirado en el texto de Borges: cinco líneas de simulación que exploran qué es un ser hecho de temperaturas — del campo que disuelve a los organismos articulados, del cosmos esférico al espaciotiempo.'
+++

> "cada hombre, cada ser, era un organismo hecho de temperaturas cambiantes.
> La humanidad de la época saturnina fue un ciego y sordo e impalpable
> conjunto de calores y fríos articulados."
>
> — Jorge Luis Borges (con Margarita Guerrero), «Seres Térmicos»,
> *El libro de los seres imaginarios* (1957, ampliado en 1967)

¿Qué significa, físicamente, ser «un organismo hecho de temperaturas cambiantes»?

Este proyecto no es un software que se perfecciona: es un **laboratorio de
hipótesis**. Cada simulación encarna una respuesta posible, y cada respuesta
deja abierta la pregunta que la siguiente intenta responder. Las líneas no se
suceden ni se reemplazan — **coexisten**, como coexisten las interpretaciones
de un texto.

## I. El campo que disuelve

*¿Qué puede el calor solo?*

La hipótesis mínima: seres como fuentes gaussianas sobre la ecuación del calor.
La respuesta es la de la termodinámica clásica — un no elegante. La ecuación es
lineal: todo sistema regido por ella se disuelve hacia el equilibrio. Las
estructuras nacen y mueren, pero nada las sostiene.

→ [v01](https://github.com/lemeit/simus) · [v02 — gradiente](https://github.com/lemeit/simus)

## II. La vida que emerge

*¿Puede la física no lineal fabricar vida?*

Reacción-difusión (Gray-Scott, FitzHugh-Nagumo): dos campos acoplados, no
linealidad, energía del entorno. La respuesta es sí — estructuras disipativas
que nacen, crecen, se dividen y mueren. Pero el triunfo tiene un límite: el
campo produce *texturas*, no individuos. No se puede preguntar «¿cuántos seres
hay?». El «conjunto» de Borges se cuenta; las manchas de Gray-Scott, no.

→ [v04 — Gray-Scott](https://github.com/lemeit/simus) · [v05 — FHN](https://github.com/lemeit/simus) · [análisis completo](https://github.com/lemeit/simus#la-f%C3%ADsica-que-s%C3%AD-produce-vida-gray-scott-1984)

## III. Los individuos

*¿Qué es un conjunto contable?*

Cada ser con su propia variable interna: un presupuesto energético que se drena
por existir. Nacimiento por fluctuación del vacío, metabolismo, reproducción
por división, muerte. Ahora sí: hay un conjunto que se cuenta, una población
que sube y baja, extinción total posible. Ecología con todo lo que implica.

→ [v06 — ciclo de vida](/projects/seres-termicos/v06-ciclovida/)

## IV. La anatomía

*¿Qué es un cuerpo articulado?*

«Calores y fríos **articulados**»: articulado implica partes internas acopladas.
Cada ser es una cadena de órganos donde el calor difunde como por una varilla,
con una naturaleza propia —el *fuego innato*— que sostiene el cuerpo contra la
disipación. La taxonomía no está programada: los cinco niveles (de Forma
Térmica a Espíritu del Fuego) son estados de equilibrio termodinámico, y el
ascenso de un ser ocurre cuando el campo de un vecino lo anima. La ley de
Fourier vuelve conducta (termotaxis) y se vuelve render (un cuerpo en
equilibrio interno es invisible: solo brilla donde fluye el calor).

→ [B1 — bestiario](/simus/seres-termicos/bestiario.html)

{{< sim src="/simus/seres-termicos/bestiario.html" title="Seres Térmicos — Bestiario (línea IV, B1)" >}}

## V. El cosmos

*¿Dónde viven, y cómo se ven desde afuera del tiempo?*

Borges describe un cosmos, no una grilla: v07 confina el campo en una esfera
— un universo finito sin bordes, visto desde afuera como bola de plasma y desde
adentro de un ser como nebulosa en la penumbra. Y v08 acumula el tiempo como
dimensión espacial: los seres dejan de moverse y devienen *worldtubes* —
tubos que nacen, se bifurcan al reproducirse y terminan. Nacimientos, vidas y
muertes coexistiendo como geometría.

→ [v07 — universo esférico](/projects/seres-termicos/v07-3d/) · [v08 — espaciotiempo](/projects/seres-termicos/v08-espaciotiempo/)

## Índice

| Línea | Pregunta | Sims | Documentación |
|-------|----------|------|---------------|
| I — El campo que disuelve | ¿qué puede el calor solo? | v01, v02 | [README del repo](https://github.com/lemeit/simus) |
| II — La vida que emerge | ¿vida sin individuos? | v04, v05 | [README del repo](https://github.com/lemeit/simus) |
| III — Los individuos | ¿qué es un conjunto contable? | v06 | [ver →](/projects/seres-termicos/v06-ciclovida/) |
| IV — La anatomía | ¿qué es un cuerpo articulado? | B1 | *embebida arriba* |
| V — El cosmos | ¿dónde y cuándo viven? | v07, v08 | [v07 →](/projects/seres-termicos/v07-3d/) · [v08 →](/projects/seres-termicos/v08-espaciotiempo/) |

*Las simulaciones corren completamente en el navegador. El código fuente
completo y el desarrollo teórico: [github.com/lemeit/simus](https://github.com/lemeit/simus).*