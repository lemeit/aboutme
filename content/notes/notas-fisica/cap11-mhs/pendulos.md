+++
title = "Péndulos y aproximación de pequeñas oscilaciones"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 3
description = "Fuerzas tangencial y radial, energía y período del péndulo simple."
tags = ["cap11", "oscilaciones"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 545–548"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Pendulums», Bigler, edición de octubre de 2025, [pp. 545–548](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=545).

## Modelo de péndulo simple

Un péndulo simple se modela como una masa puntual suspendida de un hilo inextensible, de masa despreciable y longitud $\ell$, con apoyo fijo. Se desprecia la resistencia del aire y el rozamiento del apoyo. La longitud se mide desde la suspensión hasta el centro de masa de la pesa.

{{< figura src="/images/diagramas/cap11_pendulo_pp545.png" width="412" alt="Péndulo: extremos y paso por la posición inferior." caption="Péndulo: extremos y paso por la posición inferior." source="Jeff Bigler, edición octubre de 2025, p. 545. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El ángulo $\theta$ se mide desde la vertical. La posición inferior corresponde al equilibrio. Un cuerpo rígido extenso que oscila alrededor de un apoyo es un péndulo físico y no tiene, en general, el mismo período que una masa puntual a una distancia cualquiera.

## Separar la dirección tangencial de la radial

Actúan el peso $mg$ y la tensión $T_s$. La tensión apunta hacia el apoyo. La componente tangencial del peso apunta hacia la posición inferior:

$$F_t=-mg\sin\theta.$$

Como la aceleración tangencial es $a_t=\ell\ddot\theta$:

$$m\ell\ddot\theta=-mg\sin\theta,$$
$$\ddot\theta+\frac g\ell\sin\theta=0.$$

La masa se cancela. Esta es la ecuación del péndulo simple ideal, sin aproximar todavía el seno.

En la dirección radial, tomando positivo hacia el apoyo:

$$T_s-mg\cos\theta=\frac{mv^2}{\ell},$$
$$T_s=mg\cos\theta+\frac{mv^2}{\ell}.$$

La tensión cambia con el ángulo y la rapidez. En el punto inferior, aunque la fuerza tangencial sea cero, la resultante puede ser radial y distinta de cero.

{{< figura src="/images/diagramas/cap11_pendulo-fuerzas_pp546.png" width="293" alt="Figura original: leer la aclaración sobre la fuerza radial omitida." caption="Figura original: leer la aclaración sobre la fuerza radial omitida." source="Jeff Bigler, edición octubre de 2025, p. 546. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

{{< nota-adaptacion pagina="546" origen="Texto y figura del original: tensión constante y fuerza neta en el punto inferior" >}}
El original afirma que la tensión permanece constante y representa fuerza neta nula abajo. En una oscilación con rapidez no nula allí, $T_s-mg=mv^2/\ell\gt 0$: existe aceleración centrípeta. La figura se conserva como captura del original, pero **su resultante central omite esa componente radial**. La detención en los extremos se explica por la componente tangencial restauradora y la energía; no por suponer siempre menor la componente vertical de una tensión constante.
{{< /nota-adaptacion >}}

## Pequeños ángulos: movimiento aproximadamente armónico

Si el ángulo es pequeño y se expresa en radianes, $\sin\theta\approx\theta$:

$$\ddot\theta+\frac g\ell\theta=0.$$

Esta ecuación tiene la forma del MAS, con:

$$\omega=\sqrt{\frac g\ell},\qquad T=2\pi\sqrt{\frac\ell g}.$$

El original toma aproximadamente $\lvert\theta\rvert\leq15^\circ$ como rango de pequeña amplitud. No es una frontera exacta: la precisión depende del error admitido. A amplitudes mayores el período depende de la amplitud y la fórmula deja de ser exacta.

Un péndulo más largo tiene mayor período; en un campo gravitatorio más débil también tarda más. La masa no aparece en el período del péndulo simple ideal.

## Un ciclo y medio ciclo

El período es el viaje de un extremo al otro **y de regreso**. El paso de un extremo al opuesto tarda $T/2$. En el ejemplo del reloj del libro, un péndulo que marca un golpe por segundo tiene período de 2 s si cada golpe corresponde a medio ciclo.

### Ejemplo: longitud de 0,20 m

Con $g=10\,\mathrm{m/s^2}$ y pequeña amplitud:

$$T=2\pi\sqrt{\frac{0{,}20}{10}}\approx0{,}889\,\mathrm s.$$

## Energía y rapidez en el punto inferior

Elegimos energía potencial cero en la posición más baja. Cuando el péndulo forma un ángulo $\theta$, la elevación es:

$$h=\ell-\ell\cos\theta=\ell(1-\cos\theta).$$

La energía mecánica es:

$$E=\frac12mv^2+mg\ell(1-\cos\theta).$$

Si se suelta desde reposo a un ángulo $\theta_0$:

$$\frac12mv_{\mathrm{abajo}}^2=mg\ell(1-\cos\theta_0),$$
$$v_{\mathrm{abajo}}=\sqrt{2g\ell(1-\cos\theta_0)}.$$

Este desarrollo explicita el uso de conservación de energía que propone la p. 547 y permite comprobar por qué la tensión inferior supera al peso. El modelo ideal no pierde amplitud; una oscilación real se amortigua por disipación.

## Ejercicios de la p. 548

1. Una lámpara de 20,0 kg cuelga de un cable de 6,0 m. Modelándola como péndulo simple de pequeña amplitud, hallá su período.
2. Un péndulo completa 24,0 oscilaciones por minuto. Hallá su longitud.
3. Un péndulo de aproximadamente 3,6 m recorre un ciclo completo. ¿Cuánto tarda? La longitud efectiva debe medirse hasta el centro de la pesa.

{{< details title="Resultados" >}}
1. $T=2\pi\sqrt{6{,}0/10}\approx4{,}87\,\mathrm s$. La masa no modifica ese resultado en el modelo.
2. $f=24/60=0{,}40\,\mathrm{Hz}$; $T=2{,}50\,\mathrm s$; $\ell=gT^2/(4\pi^2)\approx1{,}58\,\mathrm m$.
3. $T=2\pi\sqrt{3{,}6/10}\approx3{,}77\,\mathrm s$. Usar la altura del aula es una aproximación de la longitud, no una medición exacta desde la suspensión al centro de masa.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.