+++
title = "Cifras significativas"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Identificar dígitos significativos, reglas de redondeo en suma/resta y multiplicación/división."
tags = ["U1", "laboratorio", "cifras significativas", "redondeo", "medición", "incerteza"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 74–82"
figuras_estado = "Tablas reconstruidas; sin recortes necesarios"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 74–82. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=74). Traducción y adaptación desarrollada; las actividades propias se identifican aparte.
## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Identificar los dígitos significativos en un número.
- Contar cifras significativas correctamente.
- Redondear resultados de sumas, restas, multiplicaciones y divisiones.

---

## ¿Para qué sirven las cifras significativas?

Las **cifras significativas** (o dígitos significativos) son una forma rápida y conveniente de estimar la incerteza de un número, sin necesidad de hacer el cálculo completo de error relativo.

> **Importante:** las cifras significativas son una *aproximación* conveniente. En trabajos de laboratorio, siempre debés expresar la incerteza explícitamente con $\pm$. Las cifras significativas se usan principalmente en ejercicios de papel y en exámenes.

---

## ¿Qué es un dígito significativo?

Los **dígitos significativos** son los dígitos conservados para comunicar la precisión de un valor medido o calculado. Incluyen el último dígito informado, que puede estar estimado o haber cambiado al redondear.

### Reglas para identificarlos

**Primer dígito significativo:** el primer dígito distinto de cero.

**Último dígito significativo:**
- Para enteros sin coma decimal, el original toma como convención el último dígito distinto de cero; si la precisión no se declara, los ceros finales pueden ser ambiguos.
- Si el número **tiene coma decimal**: el último dígito mostrado (aunque sea cero).

### Ejemplos

| Número | Dígitos significativos | Cifras sig. |
|--------|----------------------|-------------|
| $13\ 000$ | **1**, **3**, 0, 0, 0 | 2 |
| $0{,}0275$ | 0, 0, **2**, **7**, **5** | 3 |
| $0{,}0150$ | 0, 0, **1**, **5**, **0** | 3 |
| $6\ 804{,}305\ 00$ | todos | 9 |
| $6{,}0 \times 10^{23}$ | **6**, **0** | 2 |
| $3400{,}$ (con coma al final) | **3**, **4**, **0**, **0** | 4 |

> Solo los ceros pueden ser insignificantes. Un dígito 1-9 siempre es significativo.

---

## Operaciones con cifras significativas

### Suma y resta

Calculá normalmente y luego **redondeá al lugar decimal de menor precisión** entre los términos.

**Ejemplo:**

$$123\ 000 + 0{,}0075 + 1\ 650 = 124\ 650{,}0075$$

El término menos preciso es $123\ 000$ (redondeado a los millares). El resultado se redondea a los millares:

$$\approx 125\ 000$$

> Ejemplo de redondeo: $100 + 37 = 137 \approx 100$ si el dato 100 solo se conoce hasta centenas. No es una igualdad aritmética exacta.

### Multiplicación y división

El resultado tiene el mismo número de cifras significativas que el **factor con menos cifras significativas**.

**Ejemplo:**

$$\frac{18{,}44\ \text{m}}{0{,}52\ \text{s}} = 35{,}46\ \text{m/s} \approx 35\ \text{m/s}$$

El divisor $0{,}52$ tiene 2 cifras significativas → el resultado también tiene 2.

---

## Cifras significativas y notación científica

En notación científica, **todos los dígitos antes del símbolo $\times$** son significativos:

$$6{,}022 \times 10^{23} \quad \rightarrow \quad 4\ \text{cifras significativas}$$

$$3 \times 10^8 \quad \rightarrow \quad 1\ \text{cifra significativa}$$

$$3{,}00 \times 10^8 \quad \rightarrow \quad 3\ \text{cifras significativas}$$

---

## Cifras significativas vs. incerteza explícita

| Situación | Qué usar |
|-----------|----------|
| Trabajo de laboratorio, informe | Incerteza explícita: $x \pm u$ |
| Ejercicio de papel, examen | Cifras significativas (aproximación) |
| Cálculos intermedios | Conservá cifras de guarda y redondeá al final |

---

## Lo que supone esta aproximación

Bigler presenta las cifras significativas como una forma práctica de representar una precisión limitada: se supone que la incertidumbre afecta el último dígito conservado. Esa convención puede orientar un ejercicio, pero no reemplaza calcular y declarar la incertidumbre en un informe.

Los ceros iniciales ubican la coma; no agregan precisión. Los ceros entre dígitos significativos sí cuentan. Los ceros finales de un entero pueden ser ambiguos: $13\,000$ no informa por sí solo si se midió hasta unidades, decenas o millares. El original usa como convención que esos ceros se deben al redondeo. **Adaptación de notación:** para evitar ambigüedades, usá $1{,}3\times10^4$, $1{,}30\times10^4$ o $1{,}300\times10^4$ según correspondan dos, tres o cuatro cifras.

## Por qué se redondea así

En una suma, importa la posición decimal hasta la que se conocen los términos. Si un dato fue redondeado a millares, agregarle un dato expresado hasta diezmilésimas no recupera las cifras que se perdieron en el primero.

En un producto, las precisiones relativas de los factores orientan cuántas cifras conservar. El ejemplo original es:

$$34{,}52\times1{,}4=48{,}328$$

Si el factor 1,4 tiene dos cifras significativas, el resultado se informa como 48. Para comprender la limitación, compará $34{,}52\times1{,}3=44{,}876$ y $34{,}52\times1{,}5=51{,}780$. La incertidumbre del factor menos preciso tiene un efecto mucho mayor que las últimas milésimas mostradas por la calculadora.

## Operaciones combinadas: conservar cifras de guarda

No redondees los resultados intermedios. Anotá qué posición quedará limitada en cada operación, pero conservá los dígitos de la calculadora hasta terminar:

$$137{,}4\times52+120\times1{,}77$$

$$7\,144{,}8+212{,}4=7\,357{,}2$$

Aplicando la convención del original, el primer producto queda limitado a centenas; el resultado final se redondea a $7\,400$. Redondear cada producto antes de sumarlo puede dar 7 300: ese cambio es un efecto del redondeo prematuro, no del fenómeno físico.

Cuando la incertidumbre se calcula explícitamente, el original obtiene aproximadamente $7\,357{,}2\pm145{,}6$ con su regla conservadora. Ese resultado comunica más información que las cifras significativas solas.

## Números exactos

Los números que cuentan objetos, los exponentes enteros y los factores definidos exactamente no limitan las cifras significativas. Si hay exactamente 24 objetos, no hay una incertidumbre de una unidad por escribir “24”. Del mismo modo, el 2 de $A=\pi r^2$ no es una medición.

No confundas ese caso con un factor medido y redondeado a “1”. El ejemplo extremo del original $141\times1\to100$ solo corresponde a interpretar el 1 como un dato de una cifra significativa; si es un factor exacto, no impone ese redondeo.

## Ejercicios del original

1. Identificá las cifras significativas de 13 500; 26,0012; 01902; 0,000 000 025; $3{,}20\times10^2$; $6{,}0\times10^{-7}$; 150,00; 10 y 0,005 310 0. Para los enteros ambiguos, declará qué convención usás. **Adaptación:** el original escribe `320.` para señalar tres cifras; en español, es más claro escribir $3{,}20\times10^2$ cuando se requieren exactamente tres.
2. Redondeá 13 500 a millares; 26,0012 a décimas; 1902 a decenas; 0,000 025 a $10^{-5}$; 320 a decenas; $6{,}0\times10^{-7}$ a $10^{-6}$; 150 a centenas; y 10 a centenas. En casos exactamente a mitad del intervalo, indicá la regla de redondeo elegida.
3. Calculá con las cifras adecuadas: $3\,521\times220$; $13\,580{,}160/113$; $2{,}71828+22{,}4-8{,}31-62{,}4$; y $23{,}5+0{,}87\times6{,}02-105$.

**Comprobaciones para el ejercicio 3:** con 220 interpretado como dato de dos cifras, $7{,}7\times10^5$; aproximadamente 120 con tres cifras, mejor escrito $1{,}20\times10^2$; $-45{,}6$; y aproximadamente $-76$ según las posiciones decimales limitantes. Conservá todos los dígitos durante las operaciones.

## Actividades propias — Para pensar

1. ¿Cuántas cifras significativas tiene el número $0{,}00400$? ¿Y $400$? ¿Y $400{,}0$?
2. Calculá $12{,}5 \times 0{,}3$ con el redondeo correcto de cifras significativas.
3. ¿Por qué en el laboratorio las cifras significativas no son suficientes y hay que usar $\pm$?

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.


{{< nota-adaptacion pagina="76" origen="Definición verbal y convención del original" >}}
El original llama significativos a los dígitos que no fueron redondeados, pero su propio ejemplo cambia 234 567 a 235 000 y cuenta el 5 como significativo. Aquí se habla de dígitos conservados: el último no tiene por qué ser exacto ni coincidir con el dígito previo al redondeo. Los ceros finales de un entero necesitan una convención explícita o notación científica; no se conoce su precisión solo mirando el número.
{{< /nota-adaptacion >}}
