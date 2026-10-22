+++
title = "Relación relativista entre energía y momento"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 3
description = "Masa invariante, energía de reposo, energía cinética y límite de bajas velocidades."
tags = ["cap13", "relatividad"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 600–601"
figuras_estado = "Sin figura técnica específica en el pasaje original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Energy-Momentum Relation», Bigler, edición de octubre de 2025, [pp. 600–601](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=600).

## Conservar la distinción entre masa, energía y momento

En mecánica no relativista usamos $\vec p=m\vec v$ y $K=\tfrac12mv^2$. A velocidades próximas a $c$, las expresiones deben reemplazarse por las relativistas.

Usamos $m$ para la **masa invariante**, también llamada masa en reposo. Para una partícula masiva:

$$\vec p=\gamma m\vec v,\qquad E=\gamma mc^2,$$

con $\gamma=(1-v^2/c^2)^{-1/2}$. La energía y el momento asignados cambian entre marcos; la masa invariante no cambia por describir la misma partícula desde otro marco.

{{< nota-adaptacion pagina="600" origen="Texto del original: momento propio constante y masa relativista" >}}
El original argumenta que el momento del cuerpo en su propio marco debe conservarse y que por eso su masa aumenta. En su marco de reposo, el momento lineal del cuerpo es **cero**; conservarlo en un sistema no significa darle el mismo valor en todos los marcos. La terminología histórica «masa relativista» designa $E/c^2=\gamma m$, pero no es la masa invariante empleada aquí. Véanse las [notas de relatividad del MIT sobre energía y momento](https://web.mit.edu/sahughes/www/8.033/lec06.pdf).
{{< /nota-adaptacion >}}

## Energía de reposo y energía cinética

Cuando $v=0$, $\gamma=1$ y la energía es:

$$E_0=mc^2.$$

La energía cinética es el exceso respecto de la energía de reposo:

$$K=E-E_0=(\gamma-1)mc^2.$$

La relación $E=mc^2$ con masa invariante describe la energía **de reposo**. La relación $E=\gamma mc^2$ describe la energía total de esa partícula en otro marco. No hay una contradicción entre ambas: se refieren a estados cinemáticos distintos.

Para una masa positiva, al acercarse $v$ a $c$, $\gamma$, $E$ y el módulo de $p$ crecen sin límite. Acelerar esa partícula hasta $c$ requeriría energía sin límite dentro del modelo. La fórmula de $\gamma$ no se aplica a un fotón como si tuviera un marco de reposo.

## Deducir la relación energía–momento

Partimos de las dos expresiones relativistas:

$$E^2=\gamma^2m^2c^4,$$
$$p^2c^2=\gamma^2m^2v^2c^2.$$

Restando:

$$E^2-p^2c^2=\gamma^2m^2c^4\left(1-\frac{v^2}{c^2}\right).$$

Como $\gamma^2(1-v^2/c^2)=1$:

$$E^2=p^2c^2+m^2c^4.$$

Esta es la relación energía–momento. Para una partícula de energía positiva:

$$E=\sqrt{p^2c^2+m^2c^4}.$$

Si $p=0$, se recupera $E_0=mc^2$. Para una partícula sin masa invariante, como el fotón en el vacío, la relación da $E=pc$.

{{< nota-adaptacion pagina="601" origen="Texto del original: uso relativista de K = p²/(2m)" >}}
El pasaje usa $K=p^2/(2m)$ con momento relativista y luego presenta la relación energía–momento como una corrección necesaria a una discrepancia. Aquella fórmula cinética es **no relativista**: no puede extenderse a cualquier rapidez cambiando solo $p$ o $m$. La identidad relativista se deduce de las expresiones coherentes de $E$ y $p$ como arriba; no exige corregir la energía de reposo.
{{< /nota-adaptacion >}}

## Recuperar la mecánica de bajas velocidades

Para $v\ll c$, la expansión de $(1-x)^{-1/2}$ con $x=v^2/c^2$ es:

$$\gamma=1+\frac12\frac{v^2}{c^2}+\frac38\frac{v^4}{c^4}+\cdots.$$

Entonces:

$$K=(\gamma-1)mc^2=\frac12mv^2+\frac38m\frac{v^4}{c^2}+\cdots.$$

El primer término es la energía cinética clásica. También $p=\gamma mv\approx mv$. La aproximación newtoniana funciona cuando los términos siguientes son pequeños respecto de la precisión requerida.

## Ejemplo de comparación de la adaptación

Para una partícula de masa invariante $m$ que se mueve a $v=0{,}60c$:

$$\gamma=\frac1{\sqrt{1-0{,}60^2}}=1{,}25,$$
$$p=0{,}75mc,\qquad E=1{,}25mc^2,\qquad K=0{,}25mc^2.$$

La comprobación es:

$$E^2-p^2c^2=(1{,}25^2-0{,}75^2)m^2c^4=m^2c^4.$$

Si se usara $K=\tfrac12mv^2$, se obtendría $0{,}18mc^2$, que subestima la energía cinética a esa rapidez. Este ejemplo es una aclaración propia para mostrar el alcance de la aproximación, no un ejercicio tomado del PDF.

Esta sección del original no contiene una figura técnica específica; se conserva su desarrollo algebraico sin añadir una captura de otra temática.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.