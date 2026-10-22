+++
title = "Inercia rotacional y momento de inercia"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 2
description = "Distribución de masa, eje de giro, cuerpos compuestos y teorema de ejes paralelos."
tags = ["cap07", "rotación"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 391–398"
figuras_estado = "5 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Rotational Inertia», Bigler, edición de octubre de 2025, [pp. 391–398](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=391).

## La masa no alcanza para describir la rotación

La inercia traslacional depende de la masa. Para cambiar una rotación también importa **cómo se distribuye esa masa respecto del eje**. Dos cuerpos con la misma masa pueden responder de forma distinta al mismo momento de fuerza.

El momento de inercia $I$ mide esa resistencia al cambio de velocidad angular. Su unidad es $\mathrm{kg\,m^2}$. Siempre debe indicarse respecto de qué eje se calcula.

Para una partícula de masa $m$, a distancia perpendicular $r$ del eje:

$$I=mr^2.$$

Para varias partículas:

$$I=\sum_i m_ir_i^2.$$

Duplicar una masa a igual distancia duplica su contribución; duplicar su distancia la cuadruplica. Para un cuerpo extendido, la expresión continua es:

$$I=\int r_\perp^2\,dm.$$

La integral explicita la suma de las contribuciones de todos sus elementos. No se puede sustituir un cuerpo extendido por toda su masa en el centro de masa para estudiar cualquier rotación: se perdería su distribución.

{{< nota-adaptacion pagina="392" origen="Texto del original: acortar una cuerda y conservar la rapidez" >}}
El libro imagina acortar la cuerda conservando la rapidez tangencial. Esa conservación no se sigue de la inercia: al tirar de la cuerda puede realizarse trabajo. Si la fuerza es central y el momento externo respecto del centro es cero, se conserva el momento angular $L=mr^2\omega$, no en general la rapidez $v=r\omega$. La fórmula $I=mr^2$ se conserva, pero no se deduce de aquella afirmación.
{{< /nota-adaptacion >}}

## Fórmulas para cuerpos regulares

Las expresiones de la p. 393 corresponden a distribuciones uniformes y a los ejes especificados. $R$ es el radio y $L$ la longitud.

| Cuerpo y eje | Momento de inercia |
|:---|:---:|
| Partícula, a distancia $r$ | $mr^2$ |
| Aro delgado, eje central perpendicular a su plano | $mR^2$ |
| Disco o cilindro macizo, eje de simetría | $\tfrac12mR^2$ |
| Cáscara esférica delgada, diámetro | $\tfrac23mR^2$ |
| Esfera maciza, diámetro | $\tfrac25mR^2$ |
| Aro delgado, un diámetro de su plano | $\tfrac12mR^2$ |
| Varilla delgada, eje perpendicular por el centro | $\tfrac1{12}mL^2$ |
| Varilla delgada, eje perpendicular por un extremo | $\tfrac13mL^2$ |

Un cilindro hueco de pared gruesa no tiene en general $I=mR^2$: esa expresión supone una pared delgada. Una puerta rectangular uniforme que gira alrededor de un borde vertical se modela con $I=\tfrac13mL^2$, siendo $L$ su ancho perpendicular a las bisagras.

### Ejemplo del libro: cilindro de latón

Datos: densidad $8500\,\mathrm{kg/m^3}$, radio $0{,}10\,\mathrm m$, altura $0{,}20\,\mathrm m$, giro alrededor del eje de simetría.

$$V=\pi R^2h=\pi(0{,}10)^2(0{,}20)\approx0{,}00628\,\mathrm{m^3},$$
$$m=\rho V\approx53{,}4\,\mathrm{kg},$$
$$I=\frac12mR^2\approx0{,}267\,\mathrm{kg\,m^2}.$$

La longitud interviene en la masa a través del volumen; la fórmula de giro alrededor del eje longitudinal utiliza el radio.

## Teorema de ejes paralelos

Si conocemos $I_{\mathrm{CM}}$ respecto de un eje que pasa por el centro de masa, el momento respecto de otro eje **paralelo** a distancia $d$ vale:

$$I=I_{\mathrm{CM}}+Md^2.$$

{{< figura src="/images/diagramas/cap07_ejes-paralelos_pp394.png" width="293" alt="Ejes paralelos, uno por el centro de masa." caption="Ejes paralelos, uno por el centro de masa." source="Jeff Bigler, edición octubre de 2025, p. 394. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$M$ es la masa total y $d$ la distancia entre los ejes. Entre ejes paralelos de una misma orientación, el que pasa por el centro de masa da el valor mínimo.

Para una varilla delgada, pasar del centro al extremo supone $d=L/2$:

$$I_{\mathrm{extremo}}=\frac1{12}ML^2+M\left(\frac L2\right)^2=\frac13ML^2.$$

Esta comprobación muestra por qué no alcanza con cambiar el eje en el dibujo manteniendo la misma fórmula.

## Cuerpos compuestos

Todos los aportes deben calcularse respecto del **mismo eje** y luego sumarse. Si un componente no tiene su centro sobre ese eje, se aplica primero el teorema de ejes paralelos.

### Cilindro de 50 kg (ejercicio de la p. 395)

{{< figura src="/images/diagramas/cap07_cilindro_pp395.png" width="381" alt="Cilindro con radio de 20 cm." caption="Cilindro con radio de 20 cm." source="Jeff Bigler, edición octubre de 2025, p. 395. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El radio es 20 cm, es decir 0,20 m. Para un cilindro macizo sobre su eje longitudinal:

$$I=\frac12(50)(0{,}20)^2=1{,}0\,\mathrm{kg\,m^2}.$$

No se utiliza como radio la longitud de 2 m.

### Martillo (p. 397)

{{< figura src="/images/diagramas/cap07_martillo_pp397.png" width="472" alt="Modelo compuesto de mango y cabeza de martillo." caption="Modelo compuesto de mango y cabeza de martillo." source="Jeff Bigler, edición octubre de 2025, p. 397. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El dibujo modela un mango uniforme de 2 kg y 30 cm, girando por un extremo, y una cabeza de 5 kg concentrada a 30 cm del eje. Con esa aproximación:

$$I=\frac13(2)(0{,}30)^2+5(0{,}30)^2=0{,}060+0{,}450=0{,}510\,\mathrm{kg\,m^2}.$$

La contribución de la cabeza supone que su tamaño puede despreciarse frente a su distancia al eje. Si no fuera así, habría que sumar su momento respecto de su propio centro más el término de ejes paralelos.

### Ruedas y eje (p. 397)

{{< figura src="/images/diagramas/cap07_ruedas-eje_pp397.png" width="560" alt="Discos y cilindro con un eje común." caption="Discos y cilindro con un eje común." source="Jeff Bigler, edición octubre de 2025, p. 397. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Cada disco tiene masa 2 kg y diámetro 1 m; el eje cilíndrico tiene masa 1 kg y diámetro 20 cm. Girando alrededor del eje común:

$$I=2\left[\frac12(2)(0{,}50)^2\right]+\frac12(1)(0{,}10)^2=0{,}505\,\mathrm{kg\,m^2}.$$

Los diámetros se dividen por dos antes de elevar los radios al cuadrado. La separación de 2 m entre ruedas no cambia el resultado para ese eje longitudinal.

## Práctica del original y lectura de diagramas

Las pp. 395–398 proponen partículas, esferas, aros, varillas y una rueda con rayos. Para cada figura:

1. Identificá el eje y convertí las distancias a metros.
2. Distinguí longitud, radio y diámetro.
3. Elegí la fórmula de cada componente y sumá respecto del mismo eje.
4. Comprobá que la unidad final sea $\mathrm{kg\,m^2}$.

{{< figura src="/images/diagramas/cap07_rueda-rayos_pp398.png" width="560" alt="Rueda con aro de 2 kg y ocho rayos de 0,5 kg cada uno" caption="Ejercicio original de la rueda con ocho rayos." source="Jeff Bigler, edición octubre de 2025, p. 398. Captura renderizada del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En la rueda de la p. 398, el aro exterior tiene masa 2 kg y diámetro 1 m; los ocho rayos, de 0,5 kg cada uno, van del centro al borde. Su radio es 0,50 m y cada rayo se trata como varilla que gira por un extremo:

$$I=2(0{,}50)^2+8\left[\frac13(0{,}5)(0{,}50)^2\right]\approx0{,}83\,\mathrm{kg\,m^2}.$$

Este resultado no incluye una masa de cubo central adicional: el modelo del ejercicio no la proporciona.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.