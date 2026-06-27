+++
title = "Informes de laboratorio"
date = "2026-06-26"
draft = false
math = false
weight = 8
description = "Estructura y contenido de informes de laboratorio internos y formales."
tags = ["U1", "laboratorio", "informe", "redacción científica", "comunicación científica"]
+++

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
- Los datos crudos (sin procesar), no los calculados

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
| **Abstract** | Resumen de una párrafo: objetivo, método, resultado principal, conclusión |
| **Introducción** | Contexto teórico, por qué es importante el experimento |
| **Métodos** | Procedimiento detallado y reproducible |
| **Resultados** | Datos y gráficos, sin interpretación |
| **Discusión** | Interpretación, comparación con teoría, fuentes de error |
| **Conclusión** | Respuesta directa al objetivo |
| **Referencias** | Bibliografía |

> En este curso no se requieren informes formales, pero conocer su estructura es útil para cursos universitarios y proyectos de investigación.

---

## Lo que nunca debe aparecer en un informe

- Frases como "cometí un error porque..." (el error en ciencia es incerteza, no equivocación)
- Datos modificados para que coincidan con el valor esperado
- Conclusiones que no se siguen de los datos obtenidos
- Afirmaciones sin respaldo en evidencia del experimento

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
