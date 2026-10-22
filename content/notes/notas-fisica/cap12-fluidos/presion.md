+++
title = "Presión y sus unidades"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 2
description = "Fuerza normal por unidad de área, presión absoluta y manométrica y reparto de cargas."
tags = ["cap12", "fluidos"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 554–557"
figuras_estado = "1 figura recuperada del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Pressure», Bigler, edición de octubre de 2025, [pp. 554–557](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=554).

## Fuerza distribuida sobre una superficie

La presión media es la fuerza perpendicular distribuida sobre un área:

$$P=\frac{F_\perp}{A}.$$

{{< figura src="/images/diagramas/cap12_presion_pp554.png" width="397" alt="La presión relaciona fuerza normal y área de contacto." caption="La presión relaciona fuerza normal y área de contacto." source="Jeff Bigler, edición octubre de 2025, p. 554. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Una misma fuerza produce mayor presión si se concentra sobre un área menor. Si la distribución no es uniforme, la presión local es $dF_\perp/dA$ y $F_\perp=\int P\,dA$.

La presión es escalar. La fuerza debida a ella sobre una superficie tiene dirección normal a esa superficie; no es necesario asignar una única dirección vectorial a la presión del fluido.

## Unidades

$$1\,\mathrm{Pa}=1\,\mathrm{N/m^2}=1\,\mathrm{kg/(m\,s^2)}.$$

| Unidad | Equivalencia |
|:---|:---:|
| bar | $100\,000\,\mathrm{Pa}$ |
| atmósfera estándar | $101\,325\,\mathrm{Pa}$ |
| kilopascal | $1000\,\mathrm{Pa}$ |

El libro aproxima una atmósfera a un bar para simplificar. La unidad psi significa libra-fuerza por **pulgada cuadrada**. No es por pulgada cúbica, como aparece en una de las escrituras de la p. 555.

## Presión absoluta y manométrica

La presión absoluta toma como referencia el vacío. La manométrica mide la diferencia respecto de la atmósfera local:

$$P_{\mathrm{man}}=P_{\mathrm{abs}}-P_{\mathrm{atm}}.$$

Una presión manométrica cero indica igualdad con el ambiente, no vacío. Para convertir entre ambas hay que conocer o adoptar la presión atmosférica. Un neumático desinflado que permanece comunicado con el ambiente puede tener presión absoluta cercana a una atmósfera y manométrica cero.

### Ejemplo del libro

Una fuerza perpendicular de 25 N sobre un pistón de $0{,}05\,\mathrm{m^2}$ produce:

$$P=\frac{25}{0{,}05}=500\,\mathrm{Pa}.$$

Antes de dividir se debe expresar el área en metros cuadrados. Convertir centímetros a metros y luego elevar al cuadrado no es lo mismo que dividir el valor de un área por cien: $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$.

## Ejercicios del original

1. ¿Por qué unas raquetas para nieve reducen el hundimiento, con el mismo peso?
2. Un libro de 5,0 kg se apoya sobre un globo con sobrepresión de 0,20 bar. Estimá el área de contacto en el modelo ideal que iguala la fuerza de presión y el peso.
3. Una caja de papel tiene masa 22,7 kg y base de $0{,}119\,\mathrm{m^2}$. Hallá la presión media de contacto.
4. Un automóvil de 1000 kg reparte su peso por igual entre cuatro neumáticos a 2,2 bar de presión manométrica. Estimá el área de apoyo de cada uno, despreciando otros efectos de rigidez del neumático.
5. Una persona de 75 kg se sienta sobre un taburete de 3 kg con cuatro patas de diámetro 2,50 cm. Suponiendo reparto uniforme, calculá la presión media bajo cada pata.

{{< details title="Resultados con g = 10 m/s²" >}}
1. Aumentan el área de apoyo y reducen la presión media para el mismo peso.
2. $A=50/20\,000=0{,}0025\,\mathrm{m^2}$.
3. $P=227/0{,}119\approx1908\,\mathrm{Pa}$.
4. Cada rueda soporta 2500 N; $A=2500/220\,000\approx0{,}0114\,\mathrm{m^2}$.
5. Cada pata soporta $(75+3)10/4=195\,\mathrm N$. Su radio es 0,0125 m; $P=195/[\pi(0{,}0125)^2]\approx3{,}97\times10^5\,\mathrm{Pa}$.
{{< /details >}}

{{< nota-adaptacion pagina="556" origen="Texto del original: presión del globo y modelos de contacto" >}}
El enunciado del globo no aclara la referencia de los 0,2 bar. Para el resultado publicado debe interpretarse como **sobrepresión respecto del ambiente**. Los cálculos de áreas de apoyo son aproximaciones estáticas; la estructura del globo o neumático puede aportar fuerzas adicionales que ese modelo simplificado no incluye.
{{< /nota-adaptacion >}}

La p. 557 compara además el mismo peso sobre áreas distintas. Para 75 kg y un área de 0,60 m², la presión media es 1250 Pa. La comparación matemática ilustra la dependencia inversa con el área; no describe por sí sola la respuesta mecánica de los materiales de contacto.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.