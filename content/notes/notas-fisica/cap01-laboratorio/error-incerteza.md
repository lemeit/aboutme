+++
title = "Error e incerteza en las mediciones"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Error aleatorio y sistemático, incerteza absoluta y relativa, propagación de error."
tags = ["cap01", "laboratorio", "error", "incerteza", "error sistemático", "error aleatorio", "cifras significativas"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 54–73"
figuras_estado = "9 figuras extraídas y revisadas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 54–73. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=54). Traducción y adaptación desarrollada; las actividades propias se identifican aparte.
## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir entre error aleatorio y error sistemático.
- Expresar una medición con su incerteza absoluta: $x \pm u$.
- Calcular el error relativo y el error porcentual.
- Propagar la incerteza en cálculos simples.

---

## Error, incertidumbre y equivocación

Bigler usa “error” de manera amplia para hablar de incertidumbre. **Aclaración de esta adaptación:** en medición, el error es la diferencia respecto de un valor de referencia; la incertidumbre describe el margen asociado al resultado. Una equivocación al transcribir o aplicar una fórmula es otra cosa y debe identificarse y corregirse.

Si informás $(2{,}4 \pm 0{,}1)\ \mathrm{km}$, el ±0,1 km comunica incertidumbre. No significa por sí solo que el odómetro esté roto ni que se conozca el error real.

En el análisis, distinguí limitaciones de medición de equivocaciones comprobadas. No inventes posibles fallas para explicar cualquier diferencia con el valor esperado.

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

{{< figura src="/images/diagramas/cap01_exactitud-precision_pp55.png" alt="Cuatro blancos: baja o alta dispersión combinada con bajo o alto desvío respecto del centro." caption="La agrupación de puntos permite distinguir dispersión aleatoria y desplazamiento sistemático. Etiquetas originales en inglés." source="Jeff Bigler, edición octubre de 2025, p. 55. Recorte del original, CC BY-NC-SA 4.0." >}}

**Ejemplo de la edad del docente:**
- Si cuatro estudiantes estiman la edad de un docente de 50 años y dan 72, 73, 77, 78 años → alta precisión (cercanas entre sí) pero baja exactitud (lejos del valor real). Hay **alto error sistemático**.
- Si otros cuatro dan 10, 31, 77, 98 años → el promedio es 54 (cerca del valor real), pero alto error aleatorio.

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

Como pauta del original, estimá **un dígito más allá** de la división más pequeña cuando la escala y la lectura lo permitan.

{{< figura src="/images/diagramas/cap01_lectura-analogica_pp60.png" alt="Dos velocímetros: escala visible y subdivisiones imaginadas para estimar un dígito adicional." caption="Ejemplo de estimación sobre una escala analógica. El original usa millas por hora." source="Jeff Bigler, edición octubre de 2025, p. 60. Recorte del original, CC BY-NC-SA 4.0." >}}

| Instrumento | División más pequeña | Estimá hasta | Incerteza |
|-------------|---------------------|-------------|-----------|
| Regla | 1 mm | 0,1 mm | ±0,1 mm |
| Probeta 25 mL | 0,2 mL | 0,02 mL | ±0,02 mL |
| Termómetro | 1 °C | 0,1 °C | ±0,1 °C |

---

## Error relativo y error porcentual

El **error relativo** (R.E.) expresa la incerteza como fracción del valor medido:

$$\text{R.E.} = \frac{u}{|x|}$$

El **error porcentual** es el error relativo multiplicado por 100:

$$\text{E\%} = \frac{u}{|x|} \times 100$$

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

{{< figura src="/images/diagramas/cap01_area-incertidumbre_pp66.png" alt="Rectángulo de base 10 cm con incertidumbre 2 cm y altura 8 cm con incertidumbre 1 cm." caption="Las franjas muestran qué bordes se conocen con incertidumbre." source="Jeff Bigler, edición octubre de 2025, p. 66. Recorte del original, CC BY-NC-SA 4.0." >}}

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

## Estimar no es prometer certeza absoluta

La expresión $(22{,}3\pm0{,}3)\ \mathrm{cm}$ comunica un resultado junto con su incertidumbre. El intervalo 22,0–22,6 cm expresa el margen indicado por el método, no una garantía de que el valor verdadero se encuentre allí. Hace falta decir cómo se estimó la incertidumbre y, si proviene de estadística, qué cobertura representa.

El original también presenta $22{,}3(3)\ \mathrm{cm}$: el número entre paréntesis corresponde a la incertidumbre en los últimos dígitos escritos. Es equivalente aquí a $(22{,}3\pm0{,}3)\ \mathrm{cm}$. Valor e incertidumbre deben tener la misma unidad y ser coherentes en su posición decimal.

En instrumentos digitales conviene consultar la especificación del fabricante. Que una balanza muestre centésimas de gramo no demuestra que su incertidumbre sea 0,01 g. Si una lectura fluctúa, una estimación por semirrango no debe quedar por debajo del límite instrumental relevante.

La tabla de lecturas analógicas del original propone estimar un dígito adicional. **Aclaración de esta adaptación:** esa estimación depende de la visibilidad, el instrumento y el procedimiento; no constituye una precisión universal ni garantiza una incertidumbre de una décima de división. En líquidos con menisco cóncavo, la lectura de la probeta se hace a la altura de los ojos y en la parte inferior del menisco.

{{< figura src="/images/diagramas/cap01_longitud-incierta_pp58.png" alt="Una longitud de 9 cm con un borde derecho difuso y un margen de 1 cm." caption="Ejemplo de incertidumbre absoluta de una longitud." source="Jeff Bigler, edición octubre de 2025, p. 58. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap01_menisco_pp61.png" alt="Lectura de la parte inferior del menisco de una probeta al nivel de los ojos." caption="El ejemplo original registra 32,0 mL y estima una incertidumbre de 0,1 mL. Esa estimación depende del instrumento y de la lectura." source="Jeff Bigler, edición octubre de 2025, p. 61. Recorte del original, CC BY-NC-SA 4.0." >}}

## Mediciones repetidas e independientes

Las repeticiones permiten evaluar dispersión si se vuelven a generar las condiciones del ensayo. Mirar diez veces una pantalla que no cambia no equivale a diez ensayos independientes. La independencia también exige considerar efectos compartidos: una calibración incorrecta puede afectar todos los resultados.

Para valores $x_1,\ldots,x_n$, la media y la desviación estándar muestral son:

$$\bar{x}=\frac1n\sum_{i=1}^n x_i$$

$$s=\sqrt{\frac{\sum_{i=1}^n(x_i-\bar{x})^2}{n-1}}$$

La incertidumbre estándar de la media, bajo las hipótesis habituales de independencia y variabilidad comparable, es:

$$u_{\bar{x}}=\frac{s}{\sqrt n}$$

{{< nota-adaptacion pagina="63" origen="Texto del original: interpretación estadística" >}}
$s$ describe la dispersión de observaciones; $s/\sqrt n$ describe la incertidumbre estadística de la media. No son la misma cantidad. La conocida cobertura aproximada del 68 % para una distribución normal se refiere a un intervalo de una desviación estándar de esa distribución. No debe trasladarse automáticamente a cualquier semirrango ni confundirse con un intervalo de confianza de la media.
{{< /nota-adaptacion >}}

{{< figura src="/images/diagramas/cap01_dispersion-ajuste_pp62.png" alt="Distancias entre puntos medidos y una recta de ajuste." caption="Los residuos muestran la diferencia entre los datos y el modelo ajustado." source="Jeff Bigler, edición octubre de 2025, p. 62. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap01_distribucion-normal_pp63.png" alt="Distribución normal con media y marcas a una, dos y tres desviaciones estándar." caption="La figura ilustra la dispersión de una distribución normal; no representa automáticamente la incertidumbre de cualquier media." source="Jeff Bigler, edición octubre de 2025, p. 63. Recorte del original, CC BY-NC-SA 4.0." >}}

El original utiliza diez mediciones como umbral didáctico y, para pocas observaciones, propone una estimación por semirrango. Ese número no es una frontera matemática: con muestras pequeñas también puede hacerse estadística, pero aumentan las limitaciones y deben explicitarse.

{{< nota-adaptacion pagina="64" origen="Texto del original: media aritmética" >}}
Por ejemplo, para recorridos de 3,1 m, 2,9 m y 3,3 m, la media es 3,1 m y el semirrango es 0,2 m. **Corrección del original:** la página 64 escribe 2,9 m como media en una frase; las operaciones y el resultado correcto son $(3{,}1\pm0{,}2)\ \mathrm{m}$ para esta estimación.
{{< /nota-adaptacion >}}

## Sumas y restas: incertidumbres absolutas

En el método conservador que enseña Bigler, al sumar o restar magnitudes se suman sus incertidumbres absolutas. Aunque se resten los valores, las incertidumbres no se cancelan:

$$z=x-y,\qquad u_z\approx u_x+u_y$$

El ejemplo de la página 68 es:

$$ (8{,}45\pm0{,}15)\ \mathrm{cm}-(5{,}43\pm0{,}12)\ \mathrm{cm}$$

$$z=3{,}02\ \mathrm{cm},\qquad u_z=0{,}15+0{,}12=0{,}27\ \mathrm{cm}$$

El resultado se expresa como $(3{,}02\pm0{,}27)\ \mathrm{cm}$.

{{< figura src="/images/diagramas/cap01_suma-incertidumbre_pp67.png" alt="Dos recorridos en el mismo sentido con incertidumbres en los extremos." caption="En el enfoque conservador del original, las incertidumbres absolutas se suman al sumar longitudes." source="Jeff Bigler, edición octubre de 2025, p. 67. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap01_resta-incertidumbre_pp68.png" alt="Recorrido de ida y vuelta parcial: el desplazamiento se resta, las incertidumbres se suman." caption="Restar valores no significa restar sus incertidumbres en este método." source="Jeff Bigler, edición octubre de 2025, p. 68. Recorte del original, CC BY-NC-SA 4.0." >}}

## Productos, cocientes, potencias y raíces

Para productos y cocientes se combinan incertidumbres relativas porque las incertidumbres absolutas pueden tener unidades distintas. En una potencia, se multiplica la incertidumbre relativa por el valor absoluto del exponente. Para una raíz cuadrada, ese factor es $1/2$.

$$z=x^p y^q,\qquad\frac{u_z}{|z|}\approx |p|\frac{u_x}{|x|}+|q|\frac{u_y}{|y|}$$

Este es un cálculo conservador de primer orden, útil en el enfoque del original cuando las incertidumbres son relativamente pequeñas. No es la única regla de propagación: para incertidumbres estándar independientes suele combinarse en cuadratura; las correlaciones y las dependencias entre variables requieren otro tratamiento.

### Ejemplo del original: fuerza neta

Sean $m=(2{,}50\pm0{,}15)\ \mathrm{kg}$ y $a=(0{,}30\pm0{,}06)\ \mathrm{m/s^2}$. El valor nominal es:

$$F=ma=0{,}75\ \mathrm{N}$$

$$\frac{u_m}{m}=0{,}06,\qquad \frac{u_a}{a}=0{,}20$$

$$u_F\approx(0{,}06+0{,}20)\,0{,}75=0{,}195\ \mathrm{N}$$

Redondeando la incertidumbre a dos cifras, $F=(0{,}75\pm0{,}20)\ \mathrm{N}$.

### Ejemplo con raíz: tiempo de caída

Para una caída desde el reposo, $d=gt^2/2$, por lo que:

$$t=\sqrt{\frac{2d}{g}}$$

Con $d=(1{,}8\pm0{,}2)\ \mathrm{m}$ y $g=(9{,}81\pm0{,}02)\ \mathrm{m/s^2}$:

$$t\approx0{,}606\ \mathrm{s}$$

$$\frac{u_t}{t}\approx\frac12\left(\frac{0{,}2}{1{,}8}+\frac{0{,}02}{9{,}81}\right)\approx0{,}0566$$

$$u_t\approx0{,}034\ \mathrm{s}$$

{{< nota-adaptacion pagina="70" origen="Ejemplo numérico del original: cociente invertido" >}}
Podemos informar $(0{,}61\pm0{,}03)\ \mathrm{s}$. **Corrección del original:** en la p. 70 se invierten distancia y aceleración y se obtiene 3,30 s. La expresión correcta debe tener unidades de tiempo: $d/g$ tiene unidad $\mathrm{s^2}$; $g/d$ no.
{{< /nota-adaptacion >}}

## Ejercicios del original: incertidumbre

Las letras M, S y A del libro señalan prioridad: necesarios, recomendados y de mayor desafío. En cada caso justificá el cálculo antes de consultar la respuesta.

1. **M.** En un relevo de cuatro corredores, los tiempos son $(10{,}52\pm0{,}02)$ s, $(10{,}61\pm0{,}01)$ s, $(10{,}44\pm0{,}03)$ s y $(10{,}21\pm0{,}02)$ s. Calculá el total y su incertidumbre. **Comprobación:** $(41{,}78\pm0{,}08)$ s.
2. **S.** Desde la escuela viajás 3,4 millas hasta la casa de un amigo y luego volvés 1,2 millas por el mismo camino hacia tu casa. Ambas distancias tienen incertidumbre 0,1 millas. ¿Qué distancia separa escuela y casa? **Comprobación:** $(2{,}2\pm0{,}2)$ millas.
3. **M.** Una pelota recorre $(18{,}44\pm0{,}05)$ m en $(0{,}52\pm0{,}02)$ s. Calculá la rapidez media, las incertidumbres relativas y el resultado final. **Comprobación:** valor nominal 35,46 m/s; incertidumbres relativas 0,0027 y 0,0385; total 0,0412; incertidumbre absoluta 1,46 m/s antes del redondeo. Para interpretar velocidad, debe especificarse trayectoria y sentido.
4. **S.** Una roca de $(8{,}15\pm0{,}25)$ kg está a $(27{,}3\pm1{,}1)$ m sobre el nivel de referencia. Usá $U=mgh$ y $g=(9{,}81\pm0{,}02)$ m/s². **Comprobación:** valor nominal 2 183 J e incertidumbre conservadora aproximada 159 J.
5. **S.** Un vehículo recorre $(127\pm1)$ millas en $(1{,}9\pm0{,}0083)$ h. Compará la rapidez media y su incertidumbre con 65 mi/h. **Comprobación:** aproximadamente $(66{,}8\pm0{,}8)$ mi/h; el límite inferior estimado sigue por encima de 65 mi/h. Es un ejercicio de medición, no una evaluación jurídica.

## Actividades propias — Para pensar

1. Medís la temperatura del agua cinco veces con el mismo termómetro y obtenés siempre 98 °C, cuando el valor real es 100 °C. ¿Qué tipo de error es? ¿Cómo lo corregirías?
2. ¿Por qué tomar más mediciones reduce el error aleatorio pero no el sistemático?
3. Si medís una longitud de 5 cm con una incerteza de 0,5 cm, ¿cuál es el error porcentual? ¿Ese nivel de incerteza es aceptable para un trabajo de laboratorio?

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.