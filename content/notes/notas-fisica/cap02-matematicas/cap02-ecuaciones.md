+++
title = "Resolución simbólica de ecuaciones"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Cómo despejar variables en ecuaciones físicas antes de sustituir números."
tags = ["cap02", "matemáticas", "álgebra", "despeje", "ecuaciones", "resolución simbólica"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 128–131"
figuras_estado = "Sin figuras; tablas reconstruidas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 128–131. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=128). Traducción y adaptación desarrollada; se señalan las aclaraciones propias.

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Reorganizar ecuaciones algebraicas para despejar cualquier variable.
- Resolver problemas simbólicamente antes de sustituir valores numéricos.
- Combinar dos ecuaciones para eliminar una variable intermedia.

---

## ¿Por qué resolver simbólicamente?

En física, frecuentemente nos interesa más la *relación* entre las magnitudes que el número concreto de un caso particular.

**Ejemplo:** una persona de 65 kg acelera en bicicleta desde el reposo hasta $10\ \text{m/s}$ en 12 s. ¿Qué fuerza se aplicó?

**Solución numérica directa:**

$$a = \frac{10-0}{12}\ \mathrm{m/s^2} \approx0{,}8333\ \mathrm{m/s^2}$$

$$F=65\frac{10}{12}\ \mathrm{N}\approx54{,}2\ \mathrm{N}$$

Correcto, pero responde *solo este caso*.

**Solución simbólica:**

Combinamos $v - v_0 = at$ (con $v_0 = 0$) y $F = ma$:

$$a = \frac{v}{t} \implies F = m \cdot \frac{v}{t} = \frac{mv}{t}$$

Esta expresión vale para *cualquier* problema de este tipo. Además permite ver directamente que:
- Si aumenta la masa → aumenta la fuerza.
- Si aumenta el tiempo → disminuye la fuerza.

> Resolver simbólicamente da una relación válida bajo las hipótesis del modelo; resolver numéricamente evalúa esa relación para un caso concreto.

---

## Técnica: deshacer el orden de operaciones

Despejar una variable es "deshacer PEMDAS" aplicando operaciones inversas:

### 1. Suma y resta → operar el inverso

$$a + c = b \implies a = b - c$$

### 2. Multiplicación y división → operar el inverso

$$\frac{n}{r} = s \implies n = s \cdot r \qquad \qquad xy = z \implies x = \frac{z}{y}$$

> Cuando la variable que querés despejar está en el denominador, multiplicá ambos lados por ese denominador para "limpiar la fracción" antes de continuar.

### 3. Potencias → raíces (y viceversa)

$$t^2 = 4ab \implies t = \pm 2\sqrt{ab}$$

$$\sqrt{x} = k \implies x = k^2\qquad (x\ge0,\ k\ge0)$$

### 4. Paréntesis → eliminalos cuando no queda nada afuera

Cuando solo quedan paréntesis y nada fuera, los eliminás y repetís los pasos anteriores.

---

## Ejemplo completo — combinando dos ecuaciones

**Problema:** tenés $F = ma$ pero no conocés $a$. Solo conocés $m$, $v_0 = 0$, $v$ y $t$.

**Paso 1:** encontrá una ecuación que contenga $a$:

$$v - v_0 = at \quad \text{con } v_0 = 0 \implies v = at \implies a = \frac{v}{t}$$

**Paso 2:** sustituí en la primera ecuación:

$$F = m \cdot a = m \cdot \frac{v}{t} = \frac{mv}{t}$$

Ahora $F$ está expresada solo en términos de las cantidades conocidas.

---

## Ejemplos de despeje

### Despejar $t$ de $x = x_0 + v_0 t + \tfrac{1}{2}at^2$

Si $x_0 = 0$ y $v_0 = 0$:

$$x = \tfrac{1}{2}at^2 \implies t^2 = \frac{2x}{a} \implies t = \sqrt{\frac{2x}{a}}$$

### Despejar $v_0$ de $v^2 = v_0^2 + 2a \Delta x$

$$v_0^2 = v^2 - 2a \Delta x \implies v_0 = \pm\sqrt{v^2 - 2a \Delta x}$$

### Despejar $a$ de $v = v_0 + at$

$$at = v - v_0 \implies a = \frac{v - v_0}{t}$$

---

## Mantener condiciones y signos durante el despeje

La expresión general para el ejemplo del ciclista, suponiendo fuerza neta constante en una dimensión, es:

$$F_{\mathrm{net}}=m\frac{v_f-v_i}{\Delta t}$$

Si parte del reposo, $v_i=0$ y queda $F_{\mathrm{net}}=mv_f/\Delta t$. Esta relación permite comparar situaciones con las mismas hipótesis: duplicar la masa duplica la fuerza necesaria para el mismo cambio de velocidad en el mismo tiempo; duplicar el tiempo reduce la fuerza a la mitad. Si la fuerza varía, la relación con el cambio total de velocidad expresa la fuerza neta media, para masa constante.

**Aclaración de esta adaptación:** los 65 kg del ejemplo original se toman como la masa del sistema modelado. Si se calcula la fuerza sobre persona y bicicleta, debe incluirse la masa total pertinente, no ignorarse la bicicleta sin declararlo.

## Despejar una variable del denominador

En $n/r=s$, suponiendo $r\ne0$, multiplicá por $r$ y obtené $n=sr$. Si buscás $r$, luego dividí por $s$, siempre que $s\ne0$: $r=n/s$. No intercambies símbolos de lugar sin identificar qué operación se realizó en ambos miembros.

## Raíces y soluciones posibles

De $t^2=4ab$ se obtiene algebraicamente $t=\pm2\sqrt{ab}$ cuando el radicando permite una solución real. Si $t$ representa un intervalo de tiempo positivo, la situación física selecciona la raíz positiva. Del mismo modo, al conocer $v_0^2$ se conoce un módulo, no automáticamente el sentido de una velocidad.

{{< nota-adaptacion pagina="129" origen="Despeje del original y notación de la adaptación" >}}
El ejemplo original selecciona una raíz positiva sin discutir la otra rama. El despeje algebraico general de una ecuación cuadrática requiere considerar ambas raíces reales; cuando se calcula un tiempo transcurrido no negativo, la situación física permite elegir la positiva. Se corrigió la presentación inicial de esta nota para no contradecir esa distinción.
{{< /nota-adaptacion >}}

## Ejercicios del original

### 1. Eliminar una variable intermedia

Se conocen $a=2bc$ y $e=c^2d$. Expresá $e$ en función de $a$, $b$ y $d$.

$$c=\frac{a}{2b},\qquad e=\left(\frac{a}{2b}\right)^2d=\frac{a^2d}{4b^2}$$

El despeje requiere $b\ne0$. Se sustituyó una expresión completa, con paréntesis antes de elevarla al cuadrado.

### 2. Identificar dependencias

Se conocen $w=\tfrac32xy^2$ y $z=q/y$. Expresá $z$ usando $q$, $w$ y $x$:

$$y^2=\frac{2w}{3x}$$

Para la rama $y>0$:

$$z=q\sqrt{\frac{3x}{2w}}$$

Si $y<0$, corresponde la rama con signo negativo. Los denominadores deben ser distintos de cero y el radicando debe ser admisible.

Para comparar factores positivos manteniendo los demás constantes, $z$ crece linealmente con $q$, como la raíz cuadrada de $x$ y como la inversa de la raíz de $w$. Duplicar $q$ duplica $z$; duplicar $x$ lo multiplica por $\sqrt2$; dividir $w$ por dos también lo multiplica por $\sqrt2$.

La pregunta del original sobre “qué variable produce el mayor cambio” necesita especificar qué cambios se comparan. Para el mismo factor multiplicativo positivo, $q$ produce una dependencia más fuerte que las raíces. No se puede maximizar una expresión sin conocer qué valores están permitidos.

## Actividades propias — Para pensar

1. ¿Por qué es mejor despejar la variable primero y sustituir números al final, en lugar de sustituir números en cada paso?
2. De la ecuación $F = \frac{mv}{t}$, ¿qué pasa con la fuerza si duplicás la velocidad? ¿Y si duplicás el tiempo?
3. Despejá $m$ de $E_k = \tfrac{1}{2}mv^2$.

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
