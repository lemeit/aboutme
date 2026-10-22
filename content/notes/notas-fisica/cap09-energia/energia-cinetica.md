+++
title = "Energía y energía cinética"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 1
description = "Energía, unidades, sistema de referencia y energía cinética de traslación."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 441–444"
figuras_estado = "0 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 441–444. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=441).

## Una magnitud para seguir las transformaciones

La **energía** es una magnitud física que permite llevar una cuenta de las transformaciones y transferencias en un sistema. Por ejemplo: un cuerpo que cae aumenta su rapidez; un resorte comprimido puede impulsar un carrito; el rozamiento puede aumentar la energía interna de dos superficies. No son procesos idénticos, pero sus balances se expresan en la misma unidad.

Para analizar uno de estos procesos primero elegimos el **sistema**: el conjunto de cuerpos que vamos a estudiar. Lo que queda afuera es el entorno. Luego identificamos qué formas de energía cambian y qué transferencias atraviesan la frontera del sistema.

La energía es **escalar**: no tiene una dirección espacial. Un valor negativo de energía potencial depende de la referencia elegida; no es una flecha que apunte hacia un lado.

## Unidad: el joule

En el Sistema Internacional:

$$1\,\mathrm J=1\,\mathrm{N\,m}=1\,\mathrm{kg\,m^2/s^2}.$$

Una fuerza se expresa en newtons; una energía, en joules. Tener una fuerza aplicada no significa automáticamente que haya una transferencia de energía por trabajo: también importa el desplazamiento del punto de aplicación.

## Energía cinética de traslación

En el modelo clásico, la energía asociada al movimiento de traslación de un cuerpo de masa constante es:

$$K_t=\frac12mv_{\mathrm{CM}}^2.$$

Aquí $m$ es la masa en kg y $v_{\mathrm{CM}}$ la **rapidez del centro de masa**, en m/s. Para un objeto tratado como partícula escribimos simplemente $K=\frac12mv^2$.

- Si duplicamos la masa y mantenemos la rapidez, $K$ se duplica.
- Si duplicamos la rapidez y mantenemos la masa, $K$ se multiplica por cuatro.
- Cambiar de sentido sin cambiar de rapidez no cambia $K$.
- Si $v=0$, la energía cinética de traslación es cero en ese sistema de referencia.

La ecuación sirve para velocidades pequeñas comparadas con la de la luz. No describe por sí sola la rotación ni las deformaciones internas de un cuerpo.

## El sistema de referencia importa

Una mochila apoyada en un colectivo que se mueve tiene energía cinética respecto de la calle y puede tener energía cinética de traslación nula respecto del colectivo. No hay contradicción: las velocidades se midieron desde referencias distintas. Todo el balance debe realizarse en una misma referencia; aquí usamos referencias inerciales o aproximadamente inerciales.

{{< nota-adaptacion pagina="442" origen="Alcance de la energía cinética del sistema en el original" >}}
La energía cinética de traslación del centro de masa no es necesariamente toda la energía cinética del sistema. Puede haber rotación y movimiento relativo de sus partes aunque el centro de masa esté quieto. Se explicita además la dependencia del sistema de referencia, indicada en los objetivos de p. 436.
{{< /nota-adaptacion >}}

Un conjunto de partículas puede tener el centro de masa en reposo y aun así tener energía cinética: basta con que algunas se muevan respecto de él. Una rueda que gira sobre un eje fijo es un ejemplo macroscópico.

## Ejemplo resuelto — automóvil del original

Bigler propone un auto de $1200\,\mathrm{kg}$ que se mueve a $15\,\mathrm{m/s}$ (p. 444):

$$K=\frac12(1200)(15)^2=135\,000\,\mathrm J=135\,\mathrm{kJ}.$$

Si el mismo auto pasa a $30\,\mathrm{m/s}$:

$$K'=\frac12(1200)(30)^2=540\,000\,\mathrm J=4K.$$

La segunda cuenta es una extensión de la adaptación. El resultado no significa que siempre haga falta cuatro veces más combustible: solo compara la energía cinética final en el modelo.

## Energía interna, temperatura y calor

Las partículas de un material tienen movimientos e interacciones microscópicas. La **energía interna** reúne esas contribuciones; no se reduce a la energía de traslación del objeto completo.

**Temperatura** y **energía interna** no son sinónimos. En un gas ideal, la temperatura absoluta se relaciona con la energía cinética media de traslación por partícula. Esa relación no permite identificar temperatura con toda la energía microscópica de cualquier material.

El **calor** es una transferencia de energía debida a una diferencia de temperatura. No es una sustancia almacenada dentro del objeto. Durante un frenado, parte de la energía mecánica se transforma en energía interna; luego puede transferirse al entorno por calor.

{{< nota-adaptacion pagina="443" origen="Simplificaciones sobre energía interna, temperatura y calor" >}}
Se amplía la definición del original: la energía interna puede incluir energía cinética y potencial microscópica; la temperatura no es simplemente la media de todas esas energías. Se reserva calor para la transferencia debida a una diferencia de temperatura.
{{< /nota-adaptacion >}}

## Para pensar y practicar

1. Dos carritos tienen la misma masa. Uno va a $2\,\mathrm{m/s}$ y el otro a $6\,\mathrm{m/s}$. ¿Cuántas veces mayor es la energía cinética del segundo?
2. Una pelota cambia de velocidad de $+4$ a $-4\,\mathrm{m/s}$. ¿Cambió su energía cinética? ¿Hubo necesariamente aceleración?
3. Calculá $K$ de una pelota de $0{,}50\,\mathrm{kg}$ a $8\,\mathrm{m/s}$.
4. ¿Puede un ventilador tener energía cinética con el centro de masa quieto?

{{< details title="Orientaciones y resultados" >}}

1. Nueve veces: depende del cuadrado de la rapidez.
2. No cambió $K$ entre los estados, pero sí cambió la velocidad: durante el cambio hubo aceleración. Esto no asegura que el trabajo de cada fuerza sea cero.
3. $K=16\,\mathrm J$.
4. Sí: sus aspas tienen energía cinética de rotación.

{{< /details >}}

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.