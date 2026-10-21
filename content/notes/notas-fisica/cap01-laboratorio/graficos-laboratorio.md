+++
title = "Gráficos y análisis de datos en laboratorio"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Construcción de gráficos, línea de mejor ajuste, pendiente y linealización de ecuaciones."
tags = ["U1", "laboratorio", "gráficos", "línea de mejor ajuste", "pendiente", "linealización", "análisis de datos"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 83–91"
figuras_estado = "3 gráficos extraídos y revisados"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 83–91. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=83). Traducción y adaptación desarrollada; las actividades propias se identifican aparte.
## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Construir un gráfico correcto a partir de datos experimentales.
- Trazar una línea de mejor ajuste (*best-fit line*).
- Calcular la pendiente y relacionarla con una magnitud física.
- Linealizar una ecuación para obtener una relación lineal graficable.

---

## ¿Por qué graficar?

En lugar de medir una sola vez y calcular, o medir varias veces y promediar, graficar una relación a lo largo de un rango de valores permite evaluar su forma y estimar parámetros; mejorar la confiabilidad requiere un modelo y un tratamiento de incertidumbres adecuados.

La idea central: si podés transformar la ecuación de tu experimento en la forma $y = m \cdot x + b$, entonces la **pendiente del gráfico** $m$ es la magnitud que querés medir. Al usar muchos puntos en lugar de uno, el error de cada medición individual afecta menos al resultado final.

---

## Cómo construir un gráfico correcto

1. **Variable manipulada en el eje $x$** (horizontal); **variable respondiente en el eje $y$** (vertical).
2. **Escala uniforme:** las divisiones deben estar igualmente espaciadas en cada eje.
3. **Título y rótulos:** cada eje lleva el nombre de la variable y su unidad. Ejemplo: *Tiempo (s)*, *Posición (m)*.
4. **Marcar los puntos con precisión:** usá un punto pequeño y rodealo con un círculo o cruz para que se vea claramente.
5. **Línea de mejor ajuste con regla:** la recta no tiene que pasar por todos los puntos. En mínimos cuadrados ordinarios se minimiza la suma de los cuadrados de los residuos verticales; no se exige contar igual cantidad de puntos de cada lado.
6. **No unir los puntos:** no se conectan de punto a punto como en un gráfico de zigzag.

{{< figura src="/images/diagramas/cap01_hooke-ajuste_pp85.png" alt="Datos de fuerza del resorte frente a elongación, con ajuste F igual a 19,6 por x." caption="Ajuste del ejemplo de Hooke. Ejes originales en inglés. La pendiente representa la constante elástica." source="Jeff Bigler, edición octubre de 2025, p. 85. Recorte del original, CC BY-NC-SA 4.0." >}}

---

## Calcular la pendiente

La pendiente de la línea de mejor ajuste se calcula con:

$$m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$$

> **Importante:** elegí dos puntos que estén **sobre la línea de mejor ajuste**, no necesariamente puntos de datos. Usá puntos bien separados para mayor precisión.

---

## Linealización

**Linealizar** significa reorganizar una ecuación para que tenga la forma $y = m \cdot x + b$, de modo que al graficar las variables correctas se obtenga una recta.

### Ejemplo — Ley de Hooke

La ecuación del resorte es:

$$F_s = k \cdot x$$

Comparando con $y = m \cdot x + b$:

| En $y = mx + b$ | En $F_s = kx$ |
|----------------|---------------|
| $y$ | $F_s$ (fuerza) → eje $y$ |
| $x$ | $x$ (desplazamiento) → eje $x$ |
| $m$ (pendiente) | $k$ (constante del resorte) |
| $b$ (ordenada al origen) | $0$ |

Si graficamos $F_s$ vs. $x$ y trazamos la línea de mejor ajuste, la **pendiente es la constante del resorte** $k$.

### Ejemplo — Cinemática (MRUV)

La ecuación de posición es $x = \frac{1}{2}a \cdot t^2$ (partiendo del reposo desde el origen). No es lineal en $t$, pero si graficamos $x$ vs. $t^2$:

$$x = \underbrace{\frac{a}{2}}_{m} \cdot \underbrace{t^2}_{x_{eje}}$$

La pendiente del gráfico $x$ vs. $t^2$ es $\frac{a}{2}$, de donde:

$$a = 2 \cdot \text{pendiente}$$

---

## Regresión lineal con calculadora o computadora

Si usás Desmos, Excel o una calculadora científica:

1. Ingresás los pares de datos $(x_i, y_i)$.
2. Pedís una regresión lineal (*linear regression* o *línea de tendencia*).
3. El programa devuelve:
   - La **pendiente** $m$
   - La **ordenada al origen** $b$
   - El **coeficiente de determinación** $R^2$

> El original usa $R^2=0{,}9$ como referencia orientativa. La evaluación del ajuste también requiere analizar residuos, incertidumbres y el modelo físico.

---

## Actividad — Tracker[^tracker] + gráficos

En experimentos con Tracker[^tracker]:

1. Obtenés la tabla de posición $x$ vs. tiempo $t$.
2. Para MRU: graficás $x$ vs. $t$ → recta → pendiente = velocidad.
3. Para MRUV desde el reposo: graficás $x$ vs. $t^2$ → recta → pendiente = $a/2$, con ordenada $x_0$. Si $v_0\ne0$, hay que considerar además el término $v_0t$.
4. Calculás $a$ y comparás con el valor esperado ($g = 10\ \text{m/s}^2$ en caída libre).

---

## Ejemplo completo del original: constante de un resorte

Se mide la fuerza al estirar un resorte distintas distancias, dentro del rango en el que su comportamiento puede aproximarse por la ley de Hooke:

| Elongación $x$ (m) | Fuerza medida $F_s$ (N) |
|---|---|
| 0,00 | 0,0 |
| 0,05 | 0,9 |
| 0,10 | 1,7 |
| 0,15 | 2,7 |
| 0,20 | 4,1 |
| 0,25 | 5,1 |
| 0,30 | 5,8 |

La relación entre módulos es $F_s=kx$. Por eso la fuerza va en el eje vertical, la elongación en el horizontal y la pendiente tiene unidad $\mathrm{N/m}$. El ajuste que presenta el libro fuerza el paso por el origen y da aproximadamente $k=19{,}6\ \mathrm{N/m}$.

**Aclaración de esta adaptación:** en notación vectorial la fuerza recuperadora apunta en sentido opuesto al desplazamiento, $F_{s,x}=-kx$. Aquí se grafica el módulo de la fuerza necesaria para sostener la elongación. Forzar el origen debe justificarse por el modelo y por el ajuste del cero instrumental; no es una opción automática para cualquier regresión.

## Barras de incertidumbre y pendientes posibles

Si cada medición de fuerza tiene incertidumbre 0,5 N, una barra vertical se extiende desde $F_s-0{,}5$ hasta $F_s+0{,}5$. Así se ve qué desviaciones pueden ser compatibles con la incertidumbre estimada y cuáles requieren investigar el procedimiento o el modelo.

{{< figura src="/images/diagramas/cap01_hooke-barras_pp86.png" alt="Datos de fuerza y elongación con barras verticales de incertidumbre y recta de ajuste." caption="Las barras del ejemplo representan una incertidumbre de 0,5 N en la fuerza." source="Jeff Bigler, edición octubre de 2025, p. 86. Recorte del original, CC BY-NC-SA 4.0." >}}

Bigler propone dibujar una recta de pendiente máxima y otra de pendiente mínima compatibles con las barras. El intervalo de pendientes muestra cómo la incertidumbre de los datos afecta la constante calculada.

{{< figura src="/images/diagramas/cap01_hooke-pendientes_pp87.png" alt="Recta de ajuste entre una recta de pendiente mayor y otra menor, compatibles con las barras del ejemplo." caption="Construcción de pendientes extremas utilizada en el original." source="Jeff Bigler, edición octubre de 2025, p. 87. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< nota-adaptacion pagina="86" origen="Método gráfico propuesto por el original" >}}
La obligación de que una recta atraviese todas las barras es una construcción conservadora del original, no un requisito general de una regresión estadística. Para incertidumbres estándar, pueden existir puntos fuera de sus barras aun con un modelo adecuado. No se modifica una recta solo para obligarla a pasar por todos los puntos; se evalúan residuos, supuestos y cobertura de las incertidumbres.
{{< /nota-adaptacion >}}

Como aproximación escolar, el original propone propagar las mayores incertidumbres relativas de las mediciones. Hay que indicar que es una estimación conservadora; no es el error estándar de la pendiente que calcula un ajuste. Tampoco se puede dividir por un dato cero para obtener incertidumbre relativa.

## Dos linealizaciones del ejemplo eléctrico

La potencia en un elemento resistivo satisface $P=I^2R$.

**Corriente constante, resistencia variable:** si en cada ensayo mantenés la misma corriente y variás $R$, el gráfico de $P$ frente a $R$ tiene pendiente $I^2$. Entonces $I=\sqrt{\text{pendiente}}$.

**Resistencia constante, corriente variable:** si mantenés $R$ y variás $I$, graficá $P$ frente a $I^2$. La pendiente representa $R$.

Estos experimentos son distintos. La misma ecuación no autoriza a variar todo a la vez: para interpretar una pendiente, el parámetro que se quiere determinar debe permanecer constante durante la serie.

## Reconocer formas y comprobarlas

| Relación propuesta | Qué graficar para obtener una recta | Qué representa la pendiente |
|---|---|---|
| $y=ax+b$ | $y$ frente a $x$ | $a$ |
| $y=ax^2+b$ | $y$ frente a $x^2$ | $a$ |
| $y=a/x$ | $y$ frente a $1/x$ | $a$ |
| $y=a/x^2$ | $y$ frente a $1/x^2$ | $a$ |
| $y=a\sqrt{x}$ | $y$ frente a $\sqrt{x}$ | $a$ |

La forma visual sugiere una relación, pero no demuestra su validez. Un tramo pequeño de una curva puede parecer recto. Hay que usar el modelo físico, el rango de datos y el análisis de residuos para decidir si la transformación tiene sentido.

{{< nota-adaptacion pagina="63" origen="Notación y criterio orientativo del original" >}}
$R$ es un coeficiente de correlación y $R^2$ es un coeficiente de determinación; no son nombres intercambiables. El umbral 0,9 que propone el libro es orientativo. Un $R^2$ alto no demuestra ausencia de sesgo ni confirma por sí solo el modelo físico.
{{< /nota-adaptacion >}}

## Ejercicios de linealización del original

En cada caso identificá qué se mantiene constante, qué se modifica y qué se mide. Escribí la ecuación como $Y=MX+B$ y explicá qué representa $M$.

1. Para determinar una aceleración constante, medís velocidades y tiempos. Graficá $v$ frente a $t$: $v=v_0+at$, pendiente $a$ y ordenada $v_0$. Si parte del reposo, $v_0=0$.
2. Para determinar una energía cinética constante, relacioná $v^2$ con $1/m$: $v^2=2K/m$, pendiente $2K$. **Condición necesaria:** la serie debe mantener la misma energía cinética; medir masas y velocidades arbitrarias no produce esa recta.
3. Para determinar una fuerza gravitatoria constante con $F_g=Gm_1m_2/r^2$, manteniendo $Gm_1$ conocido, graficá $r^2$ frente a $m_2$: la pendiente es $Gm_1/F_g$. **Condición necesaria:** cada par masa-distancia debe corresponder a la misma fuerza.
4. Para determinar una aceleración centrípeta constante, relacioná $v^2$ con $r$: $v^2=a_cr$, cuya pendiente es $a_c$. Si $a_c$ cambia entre ensayos, la interpretación debe modificarse.

Las condiciones se explicitan en esta adaptación porque los enunciados de las pp. 90–91 no las desarrollan. Antes de ajustar una recta, preguntá si la magnitud interpretada como pendiente realmente es constante.

## Actividades propias — Para pensar

1. Tenés datos de posición y tiempo de un MRUV. ¿Por qué no podés obtener la aceleración graficando $x$ vs. $t$ directamente?
2. Si la línea de mejor ajuste de tu experimento no pasa por el origen, ¿qué podría significar físicamente?
3. ¿Por qué una línea de mejor ajuste da un resultado más confiable que un promedio de dos mediciones?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*


{{< nota-adaptacion pagina="83" origen="Formulación didáctica del original y actividad propia de Tracker" >}}
El original habla de minimizar distancias al trazar la recta. Se precisa aquí el criterio de mínimos cuadrados ordinarios: sumar los cuadrados de los residuos, no sus valores absolutos ni las distancias perpendiculares. No todo método de ajuste usa el mismo criterio. La actividad propia también requería explicitar reposo inicial para que posición frente a tiempo al cuadrado sea lineal. [Contraste: NIST, mínimos cuadrados](https://www.itl.nist.gov/div898/handbook/pmd/section4/pmd431.htm).
{{< /nota-adaptacion >}}
