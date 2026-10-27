+++
title = "El primer encuentro"
description = "Dos cuerpos, intercambio de energía y equilibrio térmico."
url = "/projects/seres-termicos/libro/contacto/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 2
book_part = "fundamentos"
book_part_title = "Parte I · Del contacto al campo"
book_label = "Capítulo 1"
[build]
list = "never"
+++

Antes de explorar seres y campos, observamos un intercambio de energía entre dos cuerpos. Cada uno tiene una sola temperatura: todavía no necesitamos partículas, moléculas ni coordenadas espaciales.

Uno empieza a 80 °C y otro a 20 °C. **¿Cuál se calentará? ¿A qué temperatura se acercarán? ¿Se transfiere calor igual de rápido durante todo el proceso?**



## Qué muestra cada representación

- **Los bloques:** A y B, con su temperatura actual. El color ayuda a leer, pero no representa radiación ni una estructura microscópica.
- **La gráfica cartesiana:** X es tiempo en segundos; Y es temperatura en °C. Las curvas son dos termómetros que registran el mismo proceso. La línea punteada indica el equilibrio previsto si se mantiene el contacto.
- **La flecha:** sentido de la transferencia, del cuerpo más caliente al más frío. Al separarlos se anula el intercambio; no aparece un flujo de “frío” en dirección opuesta.
- **Los watts y joules:** la potencia indica cuánta energía pasa por segundo; el calor transferido acumula esa energía a lo largo del proceso.

## Dos ecuaciones para empezar

$$
Q=C\,\Delta T,\qquad C=m\,c
$$

Q es el calor neto recibido, en joules. C es la capacidad térmica: energía necesaria para aumentar un grado la temperatura del cuerpo. En este modelo, sin trabajo ni cambio de fase, el calor recibido es igual al cambio de energía interna. **El cuerpo tiene energía interna; el calor es energía que se transfiere.**

$$
P=G\,(T_A-T_B)
$$

Elegimos una ley de intercambio proporcional a la diferencia de temperatura, con conductancia G constante. P es positiva de A hacia B; si B está más caliente, P es negativa y la flecha cambia de sentido. La unidad W significa J/s. Esta ley de contacto determina la rapidez; no se deduce de la ley cero.

Para cuerpos con la misma capacidad térmica, 80 °C y 20 °C dan un equilibrio de 50 °C. Si B tiene el doble de masa y el mismo material, su temperatura cambia menos: el equilibrio pasa a 40 °C. Cambiar G modifica la rapidez, no ese valor final.

## Qué estamos suponiendo

La pareja está aislada del ambiente. Cada cuerpo permanece uniforme internamente, con masa y calor específico constantes. No hay trabajo, fuentes externas ni cambios de fase. Lo que pierde A lo gana B: **Q_A + Q_B = 0**. La solución de contacto se calcula con su decaimiento exponencial exacto, no con una animación inventada.

La igualdad exacta se alcanza como límite; el aviso “prácticamente en equilibrio” usa una diferencia menor que 0,1 °C. Los cuerpos y su color son esquemáticos, no una simulación de moléculas.

La experiencia introduce equilibrio térmico y conecta con conservación de energía y dirección espontánea del intercambio. **La ley cero añade transitividad:** si dos cuerpos están, por separado, en equilibrio con un mismo termómetro, tienen la misma temperatura. No afirma qué rápido intercambian calor.

## Probá antes de seguir

1. Anticipá el valor final y después iniciá el contacto.
2. Separá a los cuerpos a mitad del proceso: ¿cómo siguen las curvas?
3. Repetí con mayor conductancia: compará el valor final y la rapidez.
4. Duplicá la masa de B: ¿por qué ya no terminan en el promedio simple?
5. Probá temperaturas iguales: ¿hay transferencia neta?

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v00-contacto-termico.html" title="Capítulo 1 — El primer encuentro" height="1100" >}}
