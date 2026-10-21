+++
title = "Informes de laboratorio"
date = "2026-06-26"
draft = false
math = true
weight = 8
description = "Estructura y contenido de informes de laboratorio internos y formales."
tags = ["U1", "laboratorio", "informe", "redacción científica", "comunicación científica"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejemplo cotejados: pp. 98–109"
figuras_estado = "Ejemplo y flujo reconstruidos en tablas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 98–109. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=98). Traducción y adaptación desarrollada; las actividades propias se identifican aparte.
## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir entre un cuaderno de laboratorio y un informe.
- Redactar las secciones de un informe de laboratorio interno.
- Identificar qué información corresponde a cada sección.

---

## Tipos de informes

A diferencia del cuaderno de laboratorio (que es tu registro personal), un **informe de laboratorio** está escrito para comunicar el experimento a otras personas.

| Tipo | Para quién | Características |
|------|-----------|-----------------|
| **Informe interno** | Compañeros de trabajo, docentes | Confidencial, formato práctico, orientado al procedimiento |
| **Informe formal** | Publicación científica, evaluación académica | Estructura estricta, revisión de pares, lenguaje técnico preciso |

En este curso, la mayoría de los trabajos escritos serán informes internos.

---

## Estructura del informe interno

### 1. Título y fecha

El título debe ser una frase descriptiva (generalmente sin verbo) que dé información sobre el propósito del experimento.

**Ejemplo:** *Determinación de la aceleración de un cuerpo en caída libre mediante análisis de video con Tracker[^tracker]*

### 2. Objetivo

Una o dos oraciones que describan **qué se quiere determinar o calcular**. No es un resumen del experimento — es la meta.

**Ejemplo:** *Determinar experimentalmente el valor de la aceleración de la gravedad $g$ a partir del análisis del movimiento de una pelota en caída libre.*

### 3. Diseño experimental

La sección más importante. Debe explicar:

- **Qué** se intentó observar o medir.
- **Cómo** se produjeron las condiciones necesarias (las "acciones").
- Qué aspectos del resultado se observaron o midieron.

Incluye la **tabla de diseño experimental** con:

| Cantidad deseada | Ecuación | Cantidades conocidas | Cantidades medidas | Cantidades a calcular |
|-----------------|----------|---------------------|-------------------|----------------------|

Y el listado de **variables**:
- Variables de control (las que se mantienen constantes)
- Variables manipuladas (las que se cambian intencionalmente)
- Variables respondientes (las que se miden como resultado)

### 4. Materiales

Lista de equipos e instrumentos utilizados, incluyendo modelo y fabricante cuando sea relevante.

### 5. Procedimiento

Descripción de lo que se hizo realmente — no lo que se planeó hacer, sino lo que efectivamente se hizo. Incluye las diferencias respecto al plan original.

Debe ser suficientemente detallado para que otra persona pueda reproducir el experimento.

### 6. Datos y observaciones

Tabla de datos con:
- Encabezados de columna con nombre de variable y unidad: *Tiempo (s)*, *Posición (m)*
- Todos los valores medidos con la incerteza correspondiente
- Los datos originales claramente diferenciados de los resultados calculados

### 7. Análisis

- Cálculos a partir de los datos, mostrando el procedimiento.
- Gráficos con línea de mejor ajuste, pendiente calculada e incerteza propagada.
- Comparación entre el valor obtenido y el valor esperado (si se conoce).

### 8. Conclusión

Respuesta directa al objetivo del experimento, usando el esquema:

> **Claim:** [qué se determinó]
> **Evidence:** [resultado numérico con incerteza]
> **Reasoning:** [por qué ese resultado responde al objetivo]

También incluye:
- Fuentes de error identificadas (sistemático y aleatorio)
- Sugerencias para mejorar el experimento

---

## Informe formal

El informe formal sigue la estructura estándar de publicaciones científicas:

| Sección | Contenido |
|---------|-----------|
| **Abstract** | Resumen de un párrafo: objetivo, método, resultado principal, conclusión |
| **Introducción** | Contexto teórico, por qué es importante el experimento |
| **Métodos** | Procedimiento detallado y reproducible |
| **Resultados** | Datos y gráficos, sin interpretación |
| **Discusión** | Interpretación, comparación con teoría, fuentes de error |
| **Conclusión** | Respuesta directa al objetivo |
| **Referencias** | Bibliografía |

> En este curso no se requieren informes formales, pero conocer su estructura es útil para cursos universitarios y proyectos de investigación.

---

## Lo que debe evitarse en un informe

- Explicaciones vagas como “quizás hicimos mal las cuentas”, sin identificar un problema real ni evaluar su efecto
- Datos modificados para que coincidan con el valor esperado
- Conclusiones que no se siguen de los datos obtenidos
- Afirmaciones sin respaldo en evidencia del experimento

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

## Ejemplo del original: medir la fuerza de rozamiento

El informe interno del libro desarrolla un objeto que se desliza sobre una superficie horizontal hasta detenerse. Si las fuerzas verticales se equilibran y la única fuerza horizontal apreciable es el rozamiento, el módulo de esa fuerza puede obtenerse a partir de masa, distancia y tiempo de frenado.

Tomando positivo el sentido inicial y suponiendo desaceleración constante:

$$v_f=0,\qquad d=\frac{v_0+v_f}{2}\,t$$

$$v_0=\frac{2d}{t},\qquad a=\frac{v_f-v_0}{t}=-\frac{2d}{t^2}$$

$$F_{f,x}=ma,\qquad |F_f|=\frac{2md}{t^2}$$

La tabla de diseño debe mostrar cómo se encadenan esas relaciones:

| Cantidad buscada | Relación | Datos que ya se tienen | Qué se necesita obtener |
|---|---|---|---|
| $F_{f,x}$ | $F_{f,x}=ma$ | Masa $m$ | Aceleración $a$ |
| $a$ | $a=(v_f-v_0)/t$ | $v_f=0$, tiempo $t$ | Velocidad inicial $v_0$ |
| $v_0$ | $d=(v_0+v_f)t/2$ | $v_f=0$, distancia $d$, tiempo $t$ | — |

El esquema de acciones distingue dar impulso **antes** de la marca inicial, iniciar el tiempo cuando el objeto cruza esa marca y detenerlo cuando queda en reposo. Medir desde el instante del empujón incluiría una etapa con otra fuerza actuando y cambiaría el modelo. Masa, distancia y tiempo deben registrarse con sus incertidumbres.

{{< nota-adaptacion pagina="100" origen="Referencia interna del original" >}}
En la p. 100 el libro llama “ejemplo anterior” a un caso de rozamiento, aunque las pp. 47–52 desarrollan un carro con ventilador. Aquí se trata como un segundo ejemplo, no como si ambos procedimientos fueran iguales.
{{< /nota-adaptacion >}}

## Qué debe mostrar el procedimiento

Además de narrar las acciones, incluí un dibujo o fotografía del montaje, componentes rotulados, dimensiones y conexiones. Explicá cómo se mantuvieron los controles, cómo se fijaron las variables manipuladas y cómo se midieron las respondientes. Una lista de materiales genéricos no reemplaza esa información.

Los resultados numéricos de las variables respondientes pertenecen a Datos y observaciones; el procedimiento explica **cómo** se obtuvieron. Si se siguió una secuencia distinta de la planificada, registrá lo ocurrido. El original recomienda omitir pasos como “reunir materiales”: no describen cómo se generaron los datos.

## Datos medidos y resultados calculados

En el informe interno puede ser útil colocar resultados calculados junto a mediciones, siempre que las columnas indiquen claramente la diferencia y el cálculo se explique en Análisis. En el formato formal del original, Datos y observaciones contiene las mediciones; los valores calculados se presentan en Discusión.

**Adaptación para estas clases:** cualquier formato debe conservar los datos originales y permitir rastrear los resultados. No ocultes las mediciones detrás de una tabla que muestre solamente promedios o números finales.

## Argumentar el resultado

El ejemplo del original dice que una ardilla recorre 25,4 m en 6,0 s y comunica una velocidad media de aproximadamente $(4{,}2\pm0{,}5)\ \mathrm{m/s}$. Para justificar ese resultado, el informe debe explicar la medición del recorrido, la trayectoria, la definición del intervalo y las fuentes de incertidumbre. La relación $v_{\mathrm{med}}=\Delta x/\Delta t$ conecta las mediciones con la conclusión; el valor de incertidumbre no se obtiene de esos dos números nominales por sí solos.

Un análisis útil presenta las ecuaciones en un orden que permita seguir la cadena desde los datos hasta la respuesta. Si se usa regresión, debe incluir el gráfico y explicar qué se interpreta como pendiente, qué intervalo resulta compatible con el modelo y cómo se estimó la incertidumbre.

No inventes posibles equivocaciones como una lista de “fuentes de error”. Identificá limitaciones concretas: resolución del instrumento, intervalo entre cuadros de video, dificultad para localizar un borde o reacción al cronometrar. Si hubo una equivocación comprobada y sus datos se usaron, sí corresponde explicar qué pasó y evaluar su efecto; no debe ocultarse.

## Un informe formal desarrollado

El original propone comunicar el experimento a lectores de otra institución que conocen Física, pero no el montaje particular. Sus indicaciones corresponden al formato que enseña Bigler y deben adaptarse a la consigna o publicación concreta.

### Resumen o abstract

En un máximo de 200 palabras según la pauta del libro, comunicá objetivo, método, resultado principal con incertidumbre y conclusión. Se escribe después del resto porque debe resumir un trabajo ya terminado. No es una introducción con promesas de lo que se hará: debe permitir saber qué se hizo y qué se obtuvo.

### Introducción

Explicá el problema, los antecedentes necesarios, el modelo físico y por qué interesa realizar el ensayo. Citá las fuentes que aportan esos antecedentes. El lector debe conocer qué pregunta intenta responder el experimento, no recibir una colección de definiciones desconectadas.

### Materiales y métodos

Reuní diseño y procedimiento en una descripción reproducible. Justificá los valores elegidos para los controles y las variables manipuladas; acompañá el texto con un montaje rotulado. El original propone escribir en pasado y voz pasiva. **Aclaración de esta adaptación:** la voz exigida depende del formato; lo esencial es que las acciones y condiciones se expresen sin ambigüedad.

### Datos y observaciones

Presentá las mediciones con unidades e incertidumbres, introduciendo cada tabla para explicar qué debería observarse. Numerá tablas y figuras de manera independiente y consecutiva. Una tabla no debe aparecer sin ser mencionada y contextualizada en el texto.

### Discusión

Mostrá los resultados calculados y explicá su significado. Compará con el modelo o con trabajos previos, citándolos cuando corresponda. Presentá las ecuaciones relevantes, la incertidumbre, las limitaciones y el rango de validez. El lector debe poder evaluar si los resultados responden al problema inicial.

### Conclusiones y referencias

Según el esquema del original, dedicá un primer párrafo a hallazgos y limitaciones relevantes, y otro a mejoras o ensayos siguientes. Las mejoras deben responder a problemas identificados: una frase genérica como “usar mejores instrumentos” no explica qué incertidumbre se reduciría.

Incluí una bibliografía coherente con las citas del texto. El libro acepta para su curso cualquier estilo aplicado consistentemente; no hay un único estilo para toda la ciencia.

### Superíndices y subíndices

Un exponente y un índice cumplen funciones diferentes. En $d=v_0t+at^2/2$, el 0 identifica la velocidad inicial y el 2 indica una potencia del tiempo. Usá el editor de ecuaciones o las opciones de formato del programa para que esa diferencia sea visible. El texto plano `vot` confunde una letra “o” con el índice cero, y `t2` no expresa claramente $t^2$.

Los atajos que enumera la p. 109 dependen del programa y del teclado. En esta adaptación se prioriza reconocer la notación y utilizar los controles de ecuaciones, en lugar de asumir que una combinación de teclas funciona en cualquier equipo.

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
