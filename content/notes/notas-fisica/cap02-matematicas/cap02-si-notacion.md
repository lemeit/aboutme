+++
title = "El Sistema Internacional de Unidades y Notación Científica"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Unidades base del SI, prefijos métricos, conversiones y notación científica."
tags = ["cap02", "matemáticas", "SI", "unidades", "prefijos", "notación científica", "conversiones"]
lastmod = "2026-10-13"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 117–127"
figuras_estado = "Sin figuras; tablas reconstruidas"
visual_estado = "Verificada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 117–127. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=117). Traducción y adaptación desarrollada; se señalan las aclaraciones propias.

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
|---|---|---|
| quetta | Q | $10^{30}$ |
| ronna | R | $10^{27}$ |
| yotta | Y | $10^{24}$ |
| zetta | Z | $10^{21}$ |
| exa | E | $10^{18}$ |
| peta | P | $10^{15}$ |
| tera | T | $10^{12}$ |
| giga | G | $10^9$ |
| mega | M | $10^6$ |
| kilo | k | $10^3$ |
| hecto | h | $10^2$ |
| deca | da | $10^1$ |
| sin prefijo | — | $10^0$ |
| deci | d | $10^{-1}$ |
| centi | c | $10^{-2}$ |
| mili | m | $10^{-3}$ |
| micro | μ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| pico | p | $10^{-12}$ |
| femto | f | $10^{-15}$ |
| atto | a | $10^{-18}$ |
| zepto | z | $10^{-21}$ |
| yocto | y | $10^{-24}$ |
| ronto | r | $10^{-27}$ |
| quecto | q | $10^{-30}$ |

La tabla completa de la p. 119 se reconstruye aquí como tabla accesible, sin necesidad de capturar una imagen.

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

> **Importante:** EE facilita ingresar un número como una sola cantidad. También se puede usar una expresión con potencias, si se colocan los paréntesis adecuados. En un cociente, encerrá el denominador completo para evitar interpretaciones distintas.

---

## Ejercicios propios de práctica

1. Convertí: $68\ \text{kJ} =$ \_\_\_\_\_\_ J
2. Convertí: $325\ \text{ms} =$ \_\_\_\_\_\_ s
3. Expresá en notación científica: $387\ 000\ 000$
4. Expresá como número: $1{,}06 \times 10^{-7}$
5. Calculá: $(2{,}8 \times 10^6)(1{,}4 \times 10^{-2})$

---

## Dimensión, unidad y prefijo

La dimensión indica qué tipo de magnitud se mide; la unidad indica con qué referencia se expresa. Centímetro y pulgada miden longitud, pero una pulgada equivale exactamente a 2,54 cm. Cambiar de unidad no cambia la longitud del objeto: cambia el número que la representa.

Un prefijo multiplica la unidad por una potencia de diez. La tabla tiene saltos de una potencia y de tres potencias; no basta con contar filas. Compará exponentes. Por ejemplo, $35\ \mathrm{cm}=35\times10^{-2}\ \mathrm{m}=0{,}35\ \mathrm{m}$.

La presión atmosférica de referencia del ejemplo se expresa de tres maneras equivalentes:

$$101\,325\ \mathrm{Pa}=101{,}325\ \mathrm{kPa}=0{,}101325\ \mathrm{MPa}$$

**Aclaración de esta adaptación:** no se apilan prefijos. Para múltiplos y submúltiplos de masa se aplican prefijos al gramo: miligramo, kilogramo, etc. La presencia histórica de “kilo” en la unidad base kilogramo no autoriza escribir un segundo prefijo delante de kg.

## Definiciones por constantes

El original explica que desde 2019 el SI se define fijando valores exactos de constantes. Estos valores no son mediciones que haya que volver a redondear al definir las unidades:

| Constante | Valor exacto de definición |
|---|---|
| Constante de Planck $h$ | $6{,}62607015\times10^{-34}\ \mathrm{J\,s}$ |
| Carga elemental $e$ | $1{,}602176634\times10^{-19}\ \mathrm{C}$ |
| Constante de Boltzmann $k$ | $1{,}380649\times10^{-23}\ \mathrm{J/K}$ |
| Constante de Avogadro $N_A$ | $6{,}02214076\times10^{23}\ \mathrm{mol^{-1}}$ |
| Velocidad de la luz en el vacío $c$ | $299\,792\,458\ \mathrm{m/s}$ |
| Frecuencia de la transición hiperfina del cesio-133 | $9\,192\,631\,770\ \mathrm{Hz}$ |
| Eficacia luminosa de radiación de $540\times10^{12}$ Hz | $683\ \mathrm{lm/W}$ |

Las realizaciones de las unidades mediante instrumentos sí tienen incertidumbre. Esa diferencia permite distinguir una definición exacta de una medición experimental.

## MKS y cgs: comparar mediante dimensiones

El sistema MKS usa metro, kilogramo y segundo para mecánica; el cgs usa centímetro, gramo y segundo. Los factores de conversión de unidades derivadas se obtienen aplicando **cada exponente**, no usando un factor universal.

$$1\ \mathrm{N}=1\ \mathrm{kg\,m/s^2}=10^5\ \mathrm{dyn}$$

$$1\ \mathrm{J}=1\ \mathrm{kg\,m^2/s^2}=10^7\ \mathrm{erg}$$

**Corrección del original:** la p. 121 generaliza un factor $10^5$ para unidades correspondientes, pero para energía el factor es $10^7$ porque la longitud aparece al cuadrado. En estas notas se usa SI; la comparación ilustra por qué hay que revisar dimensiones y exponentes.

## Escritura de unidades

El símbolo no lleva plural ni punto propio: 25 kg, no “25 kgs”. Mayúsculas y minúsculas importan: mW y MW difieren por un factor $10^9$. Los símbolos basados en nombres de personas comienzan con mayúscula, como N y Pa; el nombre de la unidad se escribe en minúscula en español: newton, pascal.

Los productos pueden escribirse con un punto medio o un espacio, como N·m. Los cocientes pueden escribirse como fracciones, con barra o con exponentes negativos. Entre número y unidad se deja un espacio; para ángulos en grados, el símbolo va junto al número, como $30^\circ$.

En estas notas se usa coma decimal y espacio para agrupar miles. Los números no se separan con puntos de miles porque esos puntos pueden confundirse con una marca decimal en otras convenciones.

## Ejercicios del original: conversiones

Convertí los seis datos de la p. 123 y comprobá que la magnitud permanece igual:

| Dato | Conversión de comprobación |
|---|---|
| 2,5 m | 250 cm |
| 18 mL | 0,018 L |
| 68 kJ | 68 000 J |
| 6 500 mg | 0,0065 kg |
| 101 kPa | 101 000 Pa |
| 325 ms | 0,325 s |

## Ejercicios del original: notación científica

1. Convertí $2{,}65\times10^9$ a escritura decimal: 2 650 000 000.
2. Convertí 387 000 000 a notación científica: $3{,}87\times10^8$.
3. Convertí $1{,}06\times10^{-7}$ a decimal: 0,000 000 106.
4. Convertí 0,000 000 065: $6{,}5\times10^{-8}$.
5. Calculá $(2{,}8\times10^6)(1{,}4\times10^{-2})$: $3{,}92\times10^4$, o $3{,}9\times10^4$ con dos cifras significativas.
6. Calculá $(3{,}75\times10^8)/(1{,}25\times10^4)$: $3{,}00\times10^4$.
7. Calculá $(1{,}2\times10^{-3})/(5{,}0\times10^{-1})$: $2{,}4\times10^{-3}$.

En notación científica normalizada, el valor absoluto del significando de un número no nulo está entre 1 inclusive y 10 exclusive. Un número negativo conserva su signo: $-4{,}81\times10^{-7}$. El exponente indica escala, no el signo del número. Cero se escribe simplemente como 0.

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
