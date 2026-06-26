+++
title = "Cifras significativas"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Identificar dígitos significativos, reglas de redondeo en suma/resta y multiplicación/división."
tags = ["U1", "laboratorio", "cifras significativas", "redondeo", "medición", "incerteza"]
+++

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

Los **dígitos significativos** son los dígitos de un número que no han sido redondeados. Son la parte "medida" del número.

### Reglas para identificarlos

**Primer dígito significativo:** el primer dígito distinto de cero.

**Último dígito significativo:**
- Si el número **no tiene coma decimal**: el último dígito distinto de cero.
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

> Ejemplo extremo: $100 + 37 = 100$ (porque 100 está redondeado a las centenas).

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
| Cálculos intermedios | Guardá un dígito extra, redondeá al final |

---

## Para pensar

1. ¿Cuántas cifras significativas tiene el número $0{,}00400$? ¿Y $400$? ¿Y $400{,}0$?
2. Calculá $12{,}5 \times 0{,}3$ con el redondeo correcto de cifras significativas.
3. ¿Por qué en el laboratorio las cifras significativas no son suficientes y hay que usar $\pm$?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación al Diseño Curricular DGCyE: Prof. Ing. Luciano Lamaita, 2026.*
