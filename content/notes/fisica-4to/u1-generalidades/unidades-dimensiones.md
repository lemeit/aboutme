+++
title = "Unidades, dimensiones y medición"
date = "2026-06-22"
draft = false
description = "El Sistema Internacional de Unidades, prefijos métricos, notación científica y cifras significativas."
tags = ["U1", "SI", "unidades", "notación científica", "cifras significativas", "medición"]
math = true
+++

## Objetivos de aprendizaje

Al finalizar esta unidad, vas a poder:

- Identificar las 7 unidades base del Sistema Internacional (SI).
- Usar prefijos métricos para expresar múltiplos y submúltiplos.
- Convertir entre unidades del sistema métrico.
- Escribir y operar números en notación científica.
- Identificar y aplicar cifras significativas en mediciones y cálculos.
- Distinguir entre error aleatorio y error sistemático, y entre precisión y exactitud.

---

## El Sistema Internacional de Unidades (SI)

El **Sistema Internacional de Unidades** (SI), conocido popularmente como "sistema métrico", es un sistema de medición basado en cantidades naturales y potencias de 10.

Es el sistema que usan los científicos en todo el mundo — y el que usamos en Argentina.

### Las 7 unidades base

| Unidad | Símbolo | Cantidad que mide |
|---|---|---|
| metro | m | longitud |
| kilogramo | kg | masa |
| segundo | s | tiempo |
| kelvin | K | temperatura |
| mol | mol | cantidad de sustancia |
| ampere | A | corriente eléctrica |
| candela | cd | intensidad luminosa |

Todas las demás unidades del SI son **unidades derivadas**, combinaciones de estas siete.

> **Ejemplos de unidades derivadas:**
> - Velocidad: m/s (metro por segundo)
> - Fuerza: N = kg⋅m/s² (newton)
> - Energía: J = kg⋅m²/s² (joule)
> - Potencia: W = kg⋅m²/s³ (watt)

### El sistema MKS

En Física usamos el sistema **MKS** (metro-kilogramo-segundo). Esto significa que antes de aplicar cualquier fórmula, hay que asegurarse de que todas las cantidades estén expresadas en estas unidades base.

> ⚠️ **Regla clave:** Si tenés una velocidad en km/h, hay que convertirla a m/s antes de usarla en una ecuación. Si tenés una masa en gramos, hay que convertirla a kilogramos. Esta es una de las fuentes más comunes de errores en Física.

---

## Prefijos métricos

El sistema métrico usa **prefijos** para indicar múltiplos y submúltiplos de las unidades base:

| Factor | Prefijo | Símbolo | Ejemplo |
|---|---|---|---|
| $10^{12}$ | tera | T | 1 TB = $10^{12}$ bytes |
| $10^{9}$ | giga | G | 1 GHz = $10^{9}$ Hz |
| $10^{6}$ | mega | M | 1 MW = $10^{6}$ W |
| $10^{3}$ | kilo | k | 1 km = 1 000 m |
| $10^{2}$ | hecto | h | 1 hPa = 100 Pa |
| $10^{1}$ | deca | da | — |
| $10^{0}$ | — | — | unidad base |
| $10^{-1}$ | deci | d | 1 dm = 0,1 m |
| $10^{-2}$ | centi | c | 1 cm = 0,01 m |
| $10^{-3}$ | mili | m | 1 mm = 0,001 m |
| $10^{-6}$ | micro | μ | 1 μm = $10^{-6}$ m |
| $10^{-9}$ | nano | n | 1 nm = $10^{-9}$ m |
| $10^{-12}$ | pico | p | — |

> 💡 **Los más usados en este curso:** kilo (k), centi (c), mili (m), micro (μ).

### Conversiones entre prefijos

Para convertir de un prefijo a otro, simplemente se mueve la coma decimal:

- Si el prefijo es **más grande** → el número es **más chico** (la coma se mueve a la izquierda).
- Si el prefijo es **más chico** → el número es **más grande** (la coma se mueve a la derecha).

**Ejemplo:**
$$2{,}5 \text{ km} = 2\,500 \text{ m} = 250\,000 \text{ cm}$$

$$68 \text{ kJ} = 68\,000 \text{ J}$$

$$325 \text{ ms} = 0{,}325 \text{ s}$$

---

## Notación científica

La **notación científica** es una forma compacta de escribir números muy grandes o muy pequeños.

Se escribe como un número entre 1 y 10, multiplicado por una potencia de 10:

$$N = a \times 10^n \quad \text{donde } 1 \leq a < 10$$

**Ejemplos:**

| Número | Notación científica |
|---|---|
| 1 000 000 | $1 \times 10^6$ |
| 0,000 075 | $7{,}5 \times 10^{-5}$ |
| 602 000 000 000 000 000 000 000 | $6{,}02 \times 10^{23}$ |
| 0,000 000 000 663 | $6{,}63 \times 10^{-34}$ |

### Operaciones con notación científica

**Suma y resta:** hay que igualar los exponentes primero, luego sumar o restar los coeficientes.

$$3{,}50 \times 10^{-6} + 2{,}7 \times 10^{-7} = 3{,}50 \times 10^{-6} + 0{,}27 \times 10^{-6} = 3{,}77 \times 10^{-6}$$

**Multiplicación:** se multiplican los coeficientes y se **suman** los exponentes.

$$\left(6{,}2 \times 10^{8}\right) \times \left(2{,}0 \times 10^{-10}\right) = 12{,}4 \times 10^{-2} = 1{,}24 \times 10^{-1}$$

**División:** se dividen los coeficientes y se **restan** los exponentes.

$$\frac{6{,}2 \times 10^{8}}{2{,}0 \times 10^{-2}} = 3{,}1 \times 10^{10}$$

### En la calculadora

Las calculadoras científicas tienen una tecla **EE** (o **EXP** o **×10ˣ**) para ingresar notación científica directamente.

Para ingresar $6{,}6 \times 10^{-34}$: presionás `6.6` → `EE` → `-34`.

> ⚠️ No escribas $6{,}6 \times 10^{-34}$ como `6.6 × 10 ^ (-34)` en la calculadora — esto puede dar errores por el orden de operaciones (PEMDAS). Siempre usá la tecla **EE**.

---

## Cifras significativas

Las **cifras significativas** indican la precisión de una medición. No podemos afirmar que una medición es más precisa de lo que realmente es.

### Reglas para identificar cifras significativas

1. Todos los dígitos distintos de cero son significativos: `13,5` → 3 cifras.
2. Los ceros entre dígitos significativos son significativos: `6 804` → 4 cifras.
3. Los ceros a la izquierda del primer dígito no son significativos: `0,0275` → 3 cifras.
4. Los ceros al final de un número *con punto decimal* son significativos: `0,0150` → 3 cifras; `3400,` → 4 cifras.
5. Los ceros al final de un número *sin punto decimal* son ambiguos: `13 000` → entre 2 y 5 cifras (se resuelve con notación científica).

**Ejemplos:**

| Número | Cifras significativas |
|---|---|
| 13 500 | 3 (los ceros finales sin punto decimal son ambiguos) |
| 26,0012 | 6 |
| 0,000 000 025 | 2 |
| 320, | 3 (el punto decimal al final indica que el cero es significativo) |
| $6{,}0 \times 10^{-7}$ | 2 |

### Operaciones con cifras significativas

**Suma y resta:** el resultado se redondea al mismo decimal que el número con menos decimales.

$$13{,}6 + 1{,}25 + 0{,}007 = 14{,}857 \rightarrow 14{,}9$$

**Multiplicación y división:** el resultado tiene tantas cifras significativas como el número con *menos* cifras significativas.

$$3{,}521 \times 220 = 774{,}62 \rightarrow 770 \quad (2 \text{ cifras})$$

---

## Error, exactitud y precisión

> 💡 En ciencia, **"error" no significa equivocación** — significa el rango de incertidumbre de una medición.

### Definiciones

**Error aleatorio:** variaciones impredecibles en una medición. Al repetir la medición, los resultados varían al azar alrededor del valor real. Se reduce tomando más mediciones.

**Error sistemático:** desviación constante en la misma dirección. No se corrige repitiendo mediciones — indica un problema en el instrumento o el método.

**Exactitud:** qué tan cerca está la medición del valor real. Alta exactitud = bajo error sistemático.

**Precisión:** qué tan consistentes son mediciones repetidas entre sí. Alta precisión = bajo error aleatorio.

> Un instrumento puede ser **preciso pero inexacto** (siempre da el mismo resultado, pero equivocado) o **exacto pero impreciso** (centrado en el valor real, pero con mucha variabilidad).

### Incertidumbre

Al expresar una medición, siempre se indica la incertidumbre:

$$d = (2{,}4 \pm 0{,}1) \text{ m}$$

Esto significa que el valor real está entre 2,3 m y 2,5 m.

La **incertidumbre relativa** expresa el error como fracción del valor medido:

$$\text{E.R.} = \frac{\text{incertidumbre}}{\text{valor medido}} = \frac{0{,}1}{2{,}4} \approx 4{,}2\%$$

---

## Ejercicios

**Conversiones de unidades:**

1. $2{,}5 \text{ m} = \text{\_\_\_\_} \text{ cm}$
2. $18 \text{ mL} = \text{\_\_\_\_} \text{ L}$
3. $68 \text{ kJ} = \text{\_\_\_\_} \text{ J}$
4. $6\,500 \text{ mg} = \text{\_\_\_\_} \text{ kg}$
5. $325 \text{ ms} = \text{\_\_\_\_} \text{ s}$

**Notación científica:**

6. Escribí en notación científica: $387\,000\,000$
7. Escribí en forma decimal: $1{,}06 \times 10^{-7}$
8. Calculá: $\dfrac{3{,}75 \times 10^{8}}{1{,}25 \times 10^{4}}$

**Cifras significativas:**

9. ¿Cuántas cifras significativas tiene $0{,}005\,310\,0$?
10. Calculá con las cifras significativas correctas: $3\,521 \times 220$

---

*Adaptado de [Bigler, J. — Class Notes for Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf) (CC BY-NC-SA 4.0). Traducción, adaptación al Diseño Curricular DGCyE e integración pedagógica: Prof. Ing. Luciano Lamaita, 2026.*
