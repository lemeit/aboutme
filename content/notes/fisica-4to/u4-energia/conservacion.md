+++
title = "Conservación, transformaciones y balances"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 5
draft = false
math = true
description = "Elegir el sistema, contabilizar transferencias y comparar predicciones con mediciones."
+++

## Recorrido intuitivo: una cuenta entre estados

La energía no se crea ni se destruye en los procesos físicos considerados: se transforma y se transfiere. Esto no obliga a conservar la energía mecánica de un cuerpo. Un bloque que frena por rozamiento puede perder energía mecánica mientras aumenta la energía interna del bloque y el piso.

Elegí primero el sistema y dos estados. Identificá energías cinéticas, potenciales e internas y transferencias por su frontera. El mismo fenómeno admite sistemas distintos, pero no se mezclan sus balances.

Para el sistema pelota–Tierra en una caída ideal sin aire, $K_i+U_i=K_f+U_f$. Si el sistema incluye solo la pelota, la gravedad externa realiza trabajo y $\Delta K=W_g$. Ambas formas coinciden cuando no contás dos veces el mismo aporte.

## Deducción analítica del balance mecánico

En el modelo de partícula, separamos trabajo conservativo y otros trabajos:

$$\Delta K=W_{\mathrm{cons}}+W_{\mathrm{otras}}.$$

Definiendo $W_{\mathrm{cons}}=-\Delta U$, obtenemos:

$$\Delta(K+U)=W_{\mathrm{otras}}.$$

Si los otros trabajos suman cero, la energía mecánica es constante. Para un cuerpo que se deforma, gira o modifica su energía interna deben incluirse esos cambios. La ecuación no autoriza ignorarlos.

## Representación con barras

Dibujá barras iniciales y finales a una misma escala. Para una pelota de $2\,\mathrm{kg}$ soltada desde $3\,\mathrm m$ con $g=10$, la energía mecánica inicial es $60\,\mathrm J$. A $1\,\mathrm m$ de altura, $U=20\,\mathrm J$ y $K=40\,\mathrm J$, si el modelo ideal se mantiene.

Si una parte se convierte en interna, agregá esa barra o una transferencia según el sistema. No modifiques arbitrariamente la escala para que las sumas parezcan coincidir.

## Experiencia y alcance del modelo

Usá la [experiencia de movimiento](../experiencia-energia-movimiento/) para estimar $K$ de una carrera. No supongas conservación de $K+mgh$ durante toda la carrera: hay energía química, trabajo muscular, interacción con el piso y disipación.

Para estudiar un intercambio gravitatorio–cinético, una pelota en vuelo o un carrito en una rampa pueden ajustarse mejor al modelo. En una bolita que rueda también hay energía de rotación. Compará diferencias con las incertidumbres antes de atribuirlas a una violación de una ley.

## Ejemplo resuelto

Un carrito de $1\,\mathrm{kg}$ baja sin rozamiento desde $2\,\mathrm m$. Al llegar al tramo horizontal tiene $20\,\mathrm J$. Luego un rozamiento constante de $4\,\mathrm N$ lo detiene: $4L=20$, por lo tanto $L=5\,\mathrm m$. Para el sistema carrito–piso, esa energía se contabiliza como aumento de energía interna en el modelo sin otras transferencias.

## Ejercicios

1. Un cuerpo parte del reposo desde $1{,}8\,\mathrm m$, sin aire ni giro. Hallá rapidez al llegar al nivel de referencia con $g=10$.
2. Un objeto tiene $30\,\mathrm J$ de energía mecánica y al final conserva $22\,\mathrm J$. Si no hubo aporte externo y se consideran todas las otras formas, ¿cuánto se transformó o transfirió fuera de esa suma?
3. ¿Qué energía falta en $mgh=mv^2/2$ para una esfera que rueda sin deslizar?

{{< details title="Resultados" >}}

1. $6\,\mathrm{m/s}$.
2. $8\,\mathrm J$; no se destruyeron.
3. La energía cinética de rotación, $I\omega^2/2$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
