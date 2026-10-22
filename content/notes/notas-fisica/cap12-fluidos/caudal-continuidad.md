+++
title = "Caudal y ecuación de continuidad"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 6
description = "Conservación de masa y relación entre área de sección y rapidez media de un fluido."
tags = ["cap12", "fluidos"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 576–579"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Fluid Flow», Bigler, edición de octubre de 2025, [pp. 576–579](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=576).

## Dos formas de medir cuánto fluye

El **caudal volumétrico** es el volumen que atraviesa una sección por unidad de tiempo:

$$Q=\frac{dV}{dt}.$$

Su unidad es $\mathrm{m^3/s}$; también se usa el litro por segundo, con $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$. El **caudal másico** es la masa por unidad de tiempo, $\dot m=dm/dt$, y se mide en kg/s.

Si la rapidez normal es uniforme sobre una sección $A$:

$$Q=Av.$$

Si no lo es, $v$ debe ser la rapidez normal **media sobre la sección**, o se escribe $Q=\int_A\vec v\cdot\hat n\,dA$ con una orientación definida. La rapidez de una partícula aislada no siempre coincide con ese promedio.

## Conservar masa en un conducto

En régimen estacionario, sin fugas, ramificaciones ni acumulación de masa entre dos secciones:

$$\rho_1A_1v_1=\rho_2A_2v_2.$$

Si el fluido es incompresible, la densidad se cancela:

$$A_1v_1=A_2v_2=Q.$$

{{< figura src="/images/diagramas/cap12_continuidad_pp578.png" width="560" alt="Flujo por secciones de área diferente." caption="Flujo por secciones de área diferente." source="Jeff Bigler, edición octubre de 2025, p. 578. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Una sección más angosta requiere mayor rapidez para que pase el mismo volumen por segundo. La relación no dice que el caudal deba mantenerse igual al modificar físicamente cualquier instalación: el nuevo caudal también depende de presiones, bombas y resistencias.

{{< nota-adaptacion pagina="577" origen="Texto del original: caudal constante por tener una entrada y una salida" >}}
Una entrada y una salida no bastan para garantizar el mismo caudal volumétrico: hace falta considerar régimen estacionario y densidad. En un gas compresible, lo que se conserva sin acumulación es el **caudal másico**; el volumen por segundo puede cambiar entre secciones.
{{< /nota-adaptacion >}}

## Radios, diámetros y áreas

Para sección circular, $A=\pi r^2=\pi D^2/4$. Por ello:

$$v_2=v_1\frac{A_1}{A_2}=v_1\left(\frac{r_1}{r_2}\right)^2.$$

Reducir el diámetro a la mitad reduce el área a la cuarta parte y cuadruplica la rapidez si el caudal se mantiene. No la duplica.

### Ejercicio del original

{{< figura src="/images/diagramas/cap12_tubo-ejercicio_pp579.png" width="543" alt="Radios de 0,25 m y 0,12 m del ejercicio." caption="Radios de 0,25 m y 0,12 m del ejercicio." source="Jeff Bigler, edición octubre de 2025, p. 579. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El radio de entrada es 0,25 m y el de salida 0,12 m. Con rapidez de entrada de 5,2 m/s:

$$v_2=5{,}2\left(\frac{0{,}25}{0{,}12}\right)^2\approx22{,}6\,\mathrm{m/s}.$$

Se puede comprobar que $\pi(0{,}25)^2(5{,}2)$ y $\pi(0{,}12)^2v_2$ dan el mismo caudal antes de redondear.

## Un orificio en un tanque no impone un caudal fijo

El libro distingue un conducto de caudal fijado de un depósito con orificio. Bajo el modelo ideal de depósito grande, superficie libre y salida a la misma presión, la rapidez de salida depende principalmente de la altura de líquido: $v\approx\sqrt{2gh}$.

A la misma altura, aumentar el área del orificio aumenta aproximadamente $Q=Av$; no obliga a reducir $v$ para conservar un caudal previamente impuesto. Si el tanque se vacía, la altura también cambia con el tiempo.

## Caudales de gases y condiciones de referencia

La p. 577 explica que un caudal de gas expresado como volumen depende de la temperatura y la presión. Una cifra referida a condiciones «estándar» no se compara directamente con un volumen medido en otras condiciones sin conocer esa referencia.

Las siglas CFM y SCFM del texto corresponden a pies cúbicos por minuto reales o referidos a condiciones estándar. En esta adaptación se priorizan las unidades del SI y se conserva la distinción física: para comparar equipos deben conocerse las condiciones a las que se informa el volumen.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.