+++
title = "Error e incerteza en las mediciones"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Error aleatorio y sistemático, incerteza absoluta y relativa, propagación de error."
tags = ["U1", "laboratorio", "error", "incerteza", "error sistemático", "error aleatorio", "cifras significativas"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir entre error aleatorio y error sistemático.
- Expresar una medición con su incerteza absoluta: $x \pm u$.
- Calcular el error relativo y el error porcentual.
- Propagar la incerteza en cálculos simples.

---

## El error en ciencia no es una equivocación

> En ciencia, **"error" significa incerteza** — no una equivocación. Si medís que la distancia a tu escuela es $(2{,}4 \pm 0{,}1)\ \text{km}$, el ±0,1 km no significa que el odómetro está roto; significa que la distancia real podría ser entre 2,3 km y 2,5 km.

Cuando analices tus resultados, nunca uses la palabra "error" para referirte a errores cometidos en el procedimiento.

---

## Error aleatorio y error sistemático

### Error aleatorio

Variaciones impredecibles en las mediciones, causadas por factores que cambian al azar de una medición a la siguiente.

- Hace que las mediciones se dispersen alrededor del valor real.
- **No** tiene una causa única identificable.
- Se reduce tomando más mediciones y promediando.

### Error sistemático

Desviaciones consistentes en la misma dirección, causadas por un problema en el instrumento o en el procedimiento.

- Hace que todas las mediciones sean más altas (o más bajas) que el valor real.
- **Tiene** una causa identificable (instrumento mal calibrado, punto cero incorrecto, etc.).
- **No** se reduce tomando más mediciones — hay que corregir la causa.

### Exactitud y precisión

Estos términos se usan en algunos libros de física secundaria:

| Término | Significado en ciencia |
|---------|----------------------|
| **Exactitud** (accuracy) | Qué tan cercanas están las mediciones al valor real (bajo error sistemático) |
| **Precisión** (precision) | Qué tan cercanas están las mediciones entre sí (bajo error aleatorio) |

> 📷 *Imagen: los cuatro blancos de tiro con arco mostrando combinaciones de alta/baja exactitud y precisión — Bigler pág. 55 (capturar de PDF)*

**Ejemplo de la edad del docente:**
- Si cinco estudiantes estiman la edad de un docente de 50 años y dan 72, 73, 77, 78 años → alta precisión (cercanas entre sí) pero baja exactitud (lejos del valor real). Hay **alto error sistemático**.
- Si otros cinco dan 10, 31, 77, 98 años → el promedio es 54 (cerca del valor real), pero alto error aleatorio.

---

## Incerteza de una medición

### Notación

Una medición se expresa como:

$$x \pm u$$

donde $x$ es el valor medido y $u$ es la **incerteza absoluta**.

**Ejemplo:** $22{,}3 \pm 0{,}3\ \text{cm}$ significa que el valor real está probablemente entre $22{,}0\ \text{cm}$ y $22{,}6\ \text{cm}$.

> La incerteza y el valor deben expresarse con el **mismo número de decimales**: $32{,}0 \pm 0{,}1\ \text{mL}$ es correcto; $32 \pm 0{,}1\ \text{mL}$ es incorrecto.

### Instrumentos digitales

- Si la lectura es estable: la incerteza es $\pm 1$ en el último dígito (salvo que el fabricante indique otro valor).
- Si la lectura fluctúa: registrá el promedio entre el valor máximo y mínimo, y la incerteza es la mitad del rango:

$$u = \frac{x_{max} - x_{min}}{2}$$

**Ejemplo:** una balanza oscila entre 3,46 g y 3,58 g.

$$\bar{x} = \frac{3{,}46 + 3{,}58}{2} = 3{,}52\ \text{g} \qquad u = \frac{3{,}58 - 3{,}46}{2} = 0{,}06\ \text{g}$$

Se registra: $3{,}52 \pm 0{,}06\ \text{g}$

### Instrumentos analógicos

Siempre estimá **un dígito más allá** de la división más pequeña del instrumento.

> 📷 *Imagen: velocímetro con estimación del dígito extra — Bigler pág. 60 (capturar de PDF)*

| Instrumento | División más pequeña | Estimá hasta | Incerteza |
|-------------|---------------------|-------------|-----------|
| Regla | 1 mm | 0,1 mm | ±0,1 mm |
| Probeta 25 mL | 0,2 mL | 0,02 mL | ±0,02 mL |
| Termómetro | 1 °C | 0,1 °C | ±0,1 °C |

---

## Error relativo y error porcentual

El **error relativo** (R.E.) expresa la incerteza como fracción del valor medido:

$$\text{R.E.} = \frac{u}{x}$$

El **error porcentual** es el error relativo multiplicado por 100:

$$\text{E\%} = \frac{u}{x} \times 100$$

**Ejemplo:** una longitud de $9 \pm 1\ \text{cm}$:

$$\text{R.E.} = \frac{1}{9} = 0{,}111 \qquad \text{E\%} = 11{,}1\%$$

> El error relativo no tiene unidades — es adimensional.

---

## Propagación de incerteza

Cuando calculás algo a partir de mediciones con incerteza, la incerteza se **propaga** al resultado.

### Método: error relativo

Para multiplicaciones y divisiones, sumás los errores relativos:

$$\text{R.E.}_{resultado} = \text{R.E.}_1 + \text{R.E.}_2 + \ldots$$

**Ejemplo:** un rectángulo mide $(10 \pm 2)\ \text{cm}$ de base y $(8 \pm 1)\ \text{cm}$ de altura. ¿Cuál es el área y su incerteza?

$$A = 10 \times 8 = 80\ \text{cm}^2$$

$$\text{R.E.}_{base} = \frac{2}{10} = 0{,}20 \qquad \text{R.E.}_{altura} = \frac{1}{8} = 0{,}125$$

$$\text{R.E.}_{área} = 0{,}20 + 0{,}125 = 0{,}325$$

$$u_{área} = 0{,}325 \times 80 = 26\ \text{cm}^2$$

$$A = (80 \pm 26)\ \text{cm}^2$$

### Método alternativo: "girá tres veces" (*crank three times*)

1. Calculá con los valores nominales → resultado central.
2. Calculá con los valores que dan el resultado **mínimo** → límite inferior.
3. Calculá con los valores que dan el resultado **máximo** → límite superior.
4. La incerteza es la mitad del rango: $u = \frac{max - min}{2}$.

Este método es más intuitivo pero más laborioso en cálculos de varios pasos.

---

## Para pensar

1. Medís la temperatura del agua cinco veces con el mismo termómetro y obtenés siempre 98 °C, cuando el valor real es 100 °C. ¿Qué tipo de error es? ¿Cómo lo corregirías?
2. ¿Por qué tomar más mediciones reduce el error aleatorio pero no el sistemático?
3. Si medís una longitud de 5 cm con una incerteza de 0,5 cm, ¿cuál es el error porcentual? ¿Ese nivel de incerteza es aceptable para un trabajo de laboratorio?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
