+++
title = "El Sistema Internacional de Unidades y Notación Científica"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Unidades base del SI, prefijos métricos, conversiones y notación científica."
tags = ["cap02", "matemáticas", "SI", "unidades", "prefijos", "notación científica", "conversiones"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Identificar las 7 unidades base del SI.
- Aplicar prefijos métricos para convertir entre múltiplos y submúltiplos.
- Expresar y operar números en notación científica.
- Usar correctamente la calculadora con notación científica.

---

## El Sistema Internacional de Unidades (SI)

Una **unidad** es una medida específicamente definida. Las unidades describen el *tipo* de magnitud y la *cantidad base*.

> Toda medición es un número multiplicado por su unidad. La expresión "75 m" significa "75 veces la distancia de 1 metro". El número y la unidad son *ambos* necesarios — decir "12" cuando se quiere decir "12 g" sería tan absurdo como decir "12" cuando se quiere decir "12 × 3".

El SI (sistema métrico) se basa en cantidades naturales y potencias de 10. Tiene **7 unidades base**:

| Unidad | Símbolo | Magnitud |
|--------|---------|----------|
| metro | m | longitud |
| kilogramo | kg | masa |
| segundo | s | tiempo |
| kelvin | K | temperatura |
| mol | mol | cantidad de sustancia |
| ampere | A | corriente eléctrica |
| candela | cd | intensidad luminosa |

Todas las demás unidades del SI son combinaciones de estas siete. Por ejemplo:

- Velocidad: $\text{m/s}$ (longitud / tiempo)
- Fuerza: $\text{N} = \text{kg} \cdot \text{m/s}^2$ (masa × aceleración)
- Energía: $\text{J} = \text{kg} \cdot \text{m}^2/\text{s}^2$

### Sistema MKS vs. cgs

En este curso usamos exclusivamente el sistema **MKS** (metro-kilogramo-segundo). Antes de aplicar cualquier fórmula, hay que asegurarse de que todas las magnitudes estén en unidades MKS.

---

## Prefijos métricos

Los prefijos indican multiplicar la unidad por una potencia de 10:

| Prefijo | Símbolo | Factor |
|---------|---------|--------|
| giga | G | $10^9$ |
| mega | M | $10^6$ |
| kilo | k | $10^3$ |
| hecto | h | $10^2$ |
| deca | da | $10^1$ |
| — | — | $10^0 = 1$ |
| deci | d | $10^{-1}$ |
| centi | c | $10^{-2}$ |
| mili | m | $10^{-3}$ |
| micro | μ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| pico | p | $10^{-12}$ |

> 📷 *Imagen: tabla completa de prefijos del SI — Bigler pág. 119 (capturar de PDF)*

### Conversiones entre prefijos

Para convertir, movés el punto decimal:
- Si el prefijo *aumenta* (unidad más grande), el número *disminuye* → movés el decimal a la izquierda.
- Si el prefijo *disminuye* (unidad más pequeña), el número *aumenta* → movés el decimal a la derecha.

**Ejemplo:** $2{,}5\ \text{m} = ?\ \text{cm}$

El metro ($10^0$) al centímetro ($10^{-2}$): el prefijo disminuye en $10^2$, entonces el número aumenta × 100:

$$2{,}5\ \text{m} = 250\ \text{cm}$$

### Reglas de formato del SI

- Siempre hay un espacio entre el número y la unidad: $75\ \text{m}$, no $75\text{m}$.
- Los símbolos de unidades no llevan punto (excepto al final de oración).
- Los símbolos derivados de nombres propios van en mayúscula: $\text{N}$ (Newton), $\text{Pa}$ (Pascal).
- No se usa plural en los símbolos: $25\ \text{kg}$, no $25\ \text{kgs}$.
- Los prefijos son parte del símbolo y van pegados: $\text{km}$, no $\text{k m}$.

---

## Notación científica

La notación científica escribe un número como un valor entre 1 y 10, multiplicado por una potencia de 10:

$$a \times 10^n \quad \text{donde} \quad 1 \leq a < 10$$

**Ejemplos:**

| Número | Notación científica |
|--------|-------------------|
| $1\ 000$ | $1 \times 10^3$ |
| $0{,}000\ 075$ | $7{,}5 \times 10^{-5}$ |
| $602\ 000\ 000\ 000\ 000\ 000\ 000\ 000$ | $6{,}02 \times 10^{23}$ |

**Regla del decimal:**
- Exponente **positivo** → decimal se mueve a la **derecha** → número más grande.
- Exponente **negativo** → decimal se mueve a la **izquierda** → número más pequeño.

---

## Operaciones con notación científica

### Suma y resta
Igualá los exponentes primero, luego operá los significandos:

$$(3{,}50 \times 10^{-6}) + (2{,}7 \times 10^{-7}) = (3{,}50 \times 10^{-6}) + (0{,}27 \times 10^{-6}) = 3{,}77 \times 10^{-6}$$

### Multiplicación y división
Operá los significandos y sumá/restá los exponentes:

$$\frac{6{,}2 \times 10^8}{3{,}1 \times 10^{10}} = \frac{6{,}2}{3{,}1} \times 10^{8-10} = 2{,}0 \times 10^{-2}$$

### Potencias
Elevá el significando al exponente y multiplicá el exponente de la potencia de 10:

$$(3{,}00 \times 10^8)^2 = (3{,}00)^2 \times 10^{8 \times 2} = 9{,}00 \times 10^{16}$$

---

## Notación científica en la calculadora

Las calculadoras científicas tienen un botón específico para notación científica: **EE**, **EXP** o **×10ˣ**.

| Lo que tipeás | Lo que muestra | Lo que escribís |
|---------------|---------------|-----------------|
| `6.6 EE -34` | `6.6E-34` | $6{,}6 \times 10^{-34}$ |
| `1.52 EE 12` | `1.52E12` | $1{,}52 \times 10^{12}$ |

> **Importante:** siempre usá el botón EE (no escribas `× 10 ^`). Si no lo usás, podrías obtener errores de orden de operaciones (PEMDAS). Y siempre poné paréntesis alrededor del denominador en fracciones.

---

## Ejercicios

1. Convertí: $68\ \text{kJ} =$ \_\_\_\_\_\_ J
2. Convertí: $325\ \text{ms} =$ \_\_\_\_\_\_ s
3. Expresá en notación científica: $387\ 000\ 000$
4. Expresá como número: $1{,}06 \times 10^{-7}$
5. Calculá: $(2{,}8 \times 10^6)(1{,}4 \times 10^{-2})$

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
