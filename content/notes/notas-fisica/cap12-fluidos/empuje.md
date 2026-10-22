+++
title = "Empuje y principio de Arquímedes"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 5
description = "Resultante de presiones, volumen desplazado, flotación y peso aparente."
tags = ["cap12", "fluidos"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 566–575"
figuras_estado = "3 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Buoyancy», Bigler, edición de octubre de 2025, [pp. 566–575](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=566).

## De la diferencia de presiones al empuje

Un cuerpo rodeado por un líquido recibe fuerzas de presión en toda su superficie. Como la presión crece con la profundidad, la resultante puede apuntar hacia arriba: es el **empuje**.

{{< figura src="/images/diagramas/cap12_empuje-presiones_pp568.png" width="405" alt="Presiones sobre un cuerpo sumergido y resultante hacia arriba." caption="Presiones sobre un cuerpo sumergido y resultante hacia arriba." source="Jeff Bigler, edición octubre de 2025, p. 568. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para un bloque prismático de área horizontal $A$ y altura sumergida $h$, la presión inferior supera a la superior en $\rho gh$. Las fuerzas laterales se cancelan y la resultante vertical es:

$$F_B=(P_{\mathrm{abajo}}-P_{\mathrm{arriba}})A=\rho ghA=\rho V_dg.$$

El principio de Arquímedes generaliza el resultado: el empuje es igual al peso del fluido desplazado,

$$F_B=\rho_{\mathrm{fluido}}V_dg=m_dg.$$

$V_d$ es el volumen de la **parte sumergida**, no necesariamente el volumen total del objeto. La densidad de la fórmula es la del fluido.

## Flotar, hundirse o quedar suspendido

{{< figura src="/images/diagramas/cap12_volumen-desplazado_pp570.png" width="432" alt="Parte sumergida y volumen de agua desplazado." caption="Parte sumergida y volumen de agua desplazado." source="Jeff Bigler, edición octubre de 2025, p. 570. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si el cuerpo flota en reposo sin otras fuerzas verticales:

$$F_B=mg,\qquad\rho_fV_d=m.$$

Para un objeto de densidad media $\rho_o$ y volumen total $V$:

$$\frac{V_d}{V}=\frac{\rho_o}{\rho_f}.$$

Si su densidad media es menor que la del líquido, puede equilibrarse con una parte fuera de él. Si es igual, puede estar completamente sumergido en equilibrio indiferente bajo este modelo uniforme; si es mayor y no hay otras fuerzas que lo sostengan, el peso supera al empuje máximo y comienza a hundirse.

Un barco de acero puede flotar porque importa su densidad **media incluyendo el volumen interior que excluye agua**, no solo la densidad del material de sus paredes.

{{< nota-adaptacion pagina="569" origen="Texto del original: empuje como reacción del peso y máximo empuje" >}}
Empuje y peso actúan sobre el mismo cuerpo, por lo que no forman un par de acción y reacción. El empuje no necesita ser igual al peso: lo es en ciertas condiciones de equilibrio. Alcanzar la inmersión completa tampoco implica necesariamente hundirse; con densidades iguales puede haber equilibrio. Se reemplaza la analogía del original con una «fuerza de reacción» por el balance de fuerzas y el volumen desplazado.
{{< /nota-adaptacion >}}

## Peso aparente

{{< figura src="/images/diagramas/cap12_peso-aparente_pp570.png" width="560" alt="Peso aparente en un dinamómetro y agua desplazada." caption="Peso aparente en un dinamómetro y agua desplazada." source="Jeff Bigler, edición octubre de 2025, p. 570. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si un cuerpo está suspendido de un dinamómetro y en reposo dentro del líquido, sin tocar el fondo:

$$T+F_B-mg=0,\qquad T=mg-F_B.$$

La lectura del dinamómetro es el peso aparente bajo esas condiciones. No es automáticamente la fuerza neta: en reposo la fuerza neta es cero. Si cae libremente en el líquido, deben considerarse su aceleración y, cuando corresponda, el arrastre.

Si descansa sobre el fondo, puede existir una normal adicional. El uso del empuje de Arquímedes exige que el fluido ejerza las presiones supuestas sobre la superficie; un contacto sellado con el fondo puede modificar esa situación.

## Ejemplo: barco que desplaza 35 000 toneladas

Con $1\,\mathrm t=1000\,\mathrm{kg}$ y agua marina de $1025\,\mathrm{kg/m^3}$:

$$m_d=3{,}5\times10^7\,\mathrm{kg},$$
$$V_d=\frac{m_d}{\rho_f}\approx34\,146\,\mathrm{m^3},$$
$$F_B=m_dg=3{,}5\times10^8\,\mathrm N$$

usando $g=10\,\mathrm{m/s^2}$. En equilibrio, esa fuerza coincide con el peso total del barco y su carga.

## Ejemplo idealizado de globos con helio

El original propone calcular cuántos globos esféricos de radio 0,14 m sostendrían una masa de 16 kg. Usa $\rho_{\mathrm{aire}}=1{,}200\,\mathrm{kg/m^3}$, $\rho_{\mathrm{He}}=0{,}166\,\mathrm{kg/m^3}$ y masa de envoltura más hilo de 0,00237 kg por globo.

$$V_g=\frac43\pi(0{,}14)^3\approx0{,}0115\,\mathrm{m^3}.$$

Cada globo desplaza una masa de aire $\rho_{\mathrm{aire}}V_g$ y debe sostener también su helio y su envoltura. La masa útil por globo es:

$$m_{\text{útil}}=(\rho_{\mathrm{aire}}-\rho_{\mathrm{He}})V_g-m_{\mathrm{envoltura}}\approx0{,}00952\,\mathrm{kg}.$$

El umbral de equilibrio es $n=16/m_{\text{útil}}$, del orden de **1680 globos**, según los redondeos del libro. Es un cálculo idealizado con los supuestos dados, no un resultado experimental. Ignorar helio, hilos y envolturas subestima mucho el número.

## Ejercicios del original

1. Un bloque de $0{,}12\times0{,}07\times0{,}09\,\mathrm m$ y masa 0,50 kg flota en agua de $1000\,\mathrm{kg/m^3}$. Hallá el volumen sumergido, el volumen desplazado si se sumerge por completo y la masa adicional máxima antes de perder flotación parcial.
2. Un barco cargado tiene masa de 15 200 toneladas. ¿Qué volumen de agua de mar de $1025\,\mathrm{kg/m^3}$ desplaza?
3. Una caja cúbica de lado 0,11 m, con masa propia despreciable en este modelo, recibe arena de $3500\,\mathrm{kg/m^3}$. Hallá el volumen de arena en el umbral de inmersión completa en agua.

{{< details title="Resultados" >}}
1. $V_d=m/\rho_f=5{,}00\times10^{-4}\,\mathrm{m^3}$. El volumen total es $7{,}56\times10^{-4}\,\mathrm{m^3}$. Puede sostener como máximo una masa total de 0,756 kg en el límite, por lo que la carga adicional es 0,256 kg.
2. $V_d=15\,200\,000/1025\approx14\,829\,\mathrm{m^3}$.
3. $V_{\mathrm{caja}}=0{,}11^3=0{,}001331\,\mathrm{m^3}$. La masa límite es 1,331 kg; $V_{\mathrm{arena}}=1{,}331/3500\approx3{,}80\times10^{-4}\,\mathrm{m^3}$.
{{< /details >}}

{{< nota-adaptacion pagina="575" origen="Texto del original: caja de masa despreciable llamada neutra" >}}
El enunciado equipara «flotabilidad neutra» con poder despreciar el peso de la caja. No son lo mismo: flotabilidad neutra significa equilibrio entre peso y empuje con el cuerpo sumergido. El cálculo se conserva usando la hipótesis realmente necesaria: **masa propia despreciable**, antes de añadir la arena.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.