+++
title = "Resolución sistemática de problemas — Método GUESS"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Cómo identificar variables, elegir ecuaciones y resolver problemas de física paso a paso."
tags = ["cap02", "matemáticas", "resolución de problemas", "GUESS", "variables", "ecuaciones", "método"]
lastmod = "2026-10-13"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 132–145"
figuras_estado = "1 figuras extraídas y revisadas"
visual_estado = "Verificada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 132–145. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=132). Traducción y adaptación desarrollada; se señalan las aclaraciones propias.

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Identificar las magnitudes dadas en un problema a partir de sus unidades.
- Asignar las variables correctas a cada magnitud.
- Elegir la ecuación adecuada para un problema.
- Resolver problemas usando el método GUESS.

---

## La matemática como lenguaje

Las matemáticas son un lenguaje con sustantivos (números), pronombres (variables), verbos (operaciones) y oraciones (ecuaciones). Resolver un problema de física es *traducir* del español a las matemáticas.

Algunas traducciones frecuentes:

| Palabra | Operación |
|---------|-----------|
| "y", "más que" | $+$ |
| "menos que" | $-$ |
| "de", "veces" | $\times$ |
| "por", "cada" | $\div$ |
| "es", "son" | $=$ |
| "cambio en $x$" | $\Delta x$ |
| "por ciento" | $\div 100$ |

---

## Identificar magnitudes por sus unidades

En física, cada magnitud tiene una unidad característica. Cuando ves una unidad en un problema, podés identificar qué magnitud representa y qué variable le corresponde:

| Magnitud | Unidad SI | Variable |
|----------|-----------|----------|
| masa | kg | $m$ |
| longitud, distancia | m | $d$, $L$ |
| tiempo | s | $t$ |
| velocidad | m/s | $v$ |
| aceleración | m/s² | $a$ |
| fuerza | N | $F$ |
| trabajo / energía | J | $W$, $E$ |
| potencia | W | $P$ |
| presión | Pa | $P$ |
| temperatura | K | $T$ |
| cantidad de sustancia | mol | $n$ |

> **Cuidado con mayúsculas y minúsculas:** en física, la misma letra en mayúscula y minúscula puede representar magnitudes completamente distintas. Por ejemplo, $P$ puede representar potencia, $p$ cantidad de movimiento y $\rho$ densidad: su significado debe declararse.

---

## Subíndices

Cuando en un problema hay varias instancias de la misma magnitud, se usan **subíndices** para distinguirlas:

- $v_0$ o $v_i$ → velocidad inicial (en el instante $t = 0$)
- $v$ o $v_f$ → velocidad final
- $F_g$ → fuerza gravitacional (peso)
- $F_N$ → fuerza normal
- $F_f$ → fricción
- $F_T$ → tensión

> El subíndice identifica una instancia de la magnitud: $F_g$ es el símbolo completo de la fuerza gravitatoria, no el producto $F\,g$.

**Ejemplo:** "Un auto comienza con una velocidad de $5\ \text{m/s}$ y tarda $4\ \text{s}$ en llegar a $13\ \text{m/s}$."

$$v_0 = 5\ \text{m/s} \qquad t = 4\ \text{s} \qquad v = 13\ \text{m/s}$$

---

## El método GUESS

**G — Given (Datos):** identificá todas las magnitudes dadas con sus variables y unidades.

**U — Unknown (Incógnita):** identificá qué te piden calcular.

**E — Equation (Ecuación):** elegí la ecuación que contenga la incógnita y todas las variables conocidas.

**S — Solve (Despejar):** despejá la incógnita algebraicamente.

**S — Substitute (Sustituir):** reemplazá los valores numéricos y calculá.

---

## Cómo elegir la ecuación

Tenés los datos y la incógnita identificados. Revisá cada ecuación disponible:

- ¿Contiene la incógnita? Si no → descartala.
- ¿Contiene solo la incógnita y variables conocidas? Si sí → esa es la ecuación.
- ¿Contiene la incógnita pero también otra variable desconocida? → necesitás una ecuación adicional.

**Ejemplo:** velocidades $v_0$ y $v$, tiempo $t$, buscás aceleración $a$.

| Ecuación | ¿Tiene $a$? | ¿Tiene variables desconocidas? | ¿Usable? |
|----------|------------|-------------------------------|----------|
| $v - v_0 = at$ | ✅ | No | ✅ |
| $d = v_0 t + \tfrac{1}{2}at^2$ | ✅ | Sí ($d$) | ❌ |
| $v^2 - v_0^2 = 2ad$ | ✅ | Sí ($d$) | ❌ |

---

## Ejemplo resuelto completo

**Problema:** Una fuerza neta de 30 N actúa sobre un objeto de 1,5 kg. ¿Cuál es la aceleración?

**G — Datos:**
$$F = 30\ \text{N} \qquad m = 1{,}5\ \text{kg}$$

**U — Incógnita:**
$$a = ?\ \text{m/s}^2$$

**E — Ecuación:**
$$F = ma \quad \text{(Segunda Ley de Newton)}$$

**S — Despejar:**
$$a = \frac{F}{m}$$

**S — Sustituir:**
$$a = \frac{30}{1{,}5} = 20\ \text{m/s}^2$$

---

## Las palabras requieren contexto

“Más que” puede describir una suma, pero “es mayor que” expresa una desigualdad. “Por” puede indicar multiplicación o una razón según el enunciado. El método no consiste en reemplazar cada palabra por un símbolo: consiste en interpretar la situación y representar la relación entre cantidades.

| Expresión | Relación posible |
|---|---|
| Es al menos | $\ge$ |
| Es como máximo | $\le$ |
| Es mayor que | $>$ |
| Es menor que | $<$ |
| Cambio de una cantidad | Valor final menos inicial |

Las unidades ayudan a reconocer el tipo de magnitud, pero no siempre alcanzan para identificarla: trabajo, calor y distintas formas de energía se expresan en joules. La pregunta física determina qué símbolo y ecuación corresponden.

## Completar la tabla de magnitudes

El original también incluye área ($A$, m²), volumen ($V$, m³), altura ($h$, m), cantidad de movimiento ($p$, N·s o kg·m/s), densidad ($\rho$, kg/m³), calor ($Q$, J) y carga eléctrica ($q$ o $Q$, C).

No confundas el símbolo de la potencia $P$ con la unidad watt W, ni el trabajo $W$ con esa unidad. Los símbolos son convenciones: una misma letra puede utilizarse para cosas distintas en problemas diferentes, así que debe definirse su significado. En estas notas se prefiere $p$ para presión cuando hace falta distinguirla de potencia.

## Un subíndice no es un factor

En $F_g=mg$, el subíndice de la izquierda identifica la fuerza gravitatoria. No es un factor que pueda cancelarse con la aceleración $g$ de la derecha. $F_g$ constituye un símbolo completo para una cantidad.

En el ejemplo de una caja sobre una mesa, las cuatro fuerzas se distinguen como $F_g$ (peso), $F_N$ (normal), $F_T$ (tensión) y $F_f$ (rozamiento). Sus sentidos y componentes se representan antes de decidir qué ecuación utilizar.

{{< figura src="/images/diagramas/cap02_fuerzas-subindices_pp134.png" width="320" alt="Caja con peso hacia abajo, normal hacia arriba, tensión hacia la derecha y rozamiento hacia la izquierda." caption="Las cuatro fuerzas se distinguen por sus subíndices. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 134. Recorte del original, CC BY-NC-SA 4.0." >}}

## Ejemplo cinemático completo del original

El auto pasa de $v_0=5\ \mathrm{m/s}$ a $v_f=13\ \mathrm{m/s}$ en $\Delta t=4\ \mathrm{s}$. Se busca la aceleración, suponiendo que es constante.

Elegimos $v_f-v_0=a\Delta t$ porque contiene la incógnita y todos los datos conocidos. Las ecuaciones que incluyen desplazamiento requieren un dato que no tenemos. Despejando:

$$a=\frac{v_f-v_0}{\Delta t}=\frac{13-5}{4}\ \mathrm{m/s^2}=2\ \mathrm{m/s^2}$$

La dirección depende del eje elegido. Como las velocidades aumentan en el sentido positivo, aquí la aceleración es positiva.

## Unidades, sustitución y comprobación

El original permite hacer el cálculo numérico sin escribir unidades en todos los pasos para evitar confundir sus letras con variables. **Adaptación de estas notas:** las unidades se conservan cuando ayudan a comprobar dimensiones y se distinguen tipográficamente mediante letra recta. Si se omiten en un cálculo intermedio, deben verificarse y restituirse al final.

GUESS termina con una respuesta con unidades, pero también conviene comprobar signo, orden de magnitud y compatibilidad con el modelo. Si falta una variable para la ecuación elegida, tratala como una nueva incógnita y buscá otra relación que permita obtenerla antes de volver al problema principal.

## Ejercicios del original

Los primeros tres piden identificar datos e incógnita; los siguientes tres, reconocer además la relación. Los restantes entrenan el proceso completo y utilizan temas que se desarrollan más adelante o en otras notas del autor.

1. Un auto recorre 90 m en 4,5 s: identificá desplazamiento, intervalo y velocidad media buscada. Para hablar de velocidad, suponé recorrido rectilíneo sin invertir el sentido.
2. Una fuerza neta de 100 N actúa sobre 5,0 kg: identificá $F$, $m$ y $a$.
3. Una resistencia de 25 Ω tiene una diferencia de potencial de 110 V: identificá $R$, $\Delta V$ e $I$.
4. Un yunque de 95 kg está a 150 m sobre el nivel de referencia: indicá datos y relación para su energía potencial, $U=mgh$.
5. Un bloque tiene cantidad de movimiento 18 N·s y rapidez 3 m/s: reconocé $p=mv$ para hallar masa.
6. Expresá simbólicamente la masa en función de $p$ y $v$: $m=p/v$, con magnitudes y signos interpretados según el movimiento.
7. Una onda tiene rapidez 300 m/s y longitud de onda 10 m. Usá $v=f\lambda$: $f=30$ Hz.
8. Un fotón tiene frecuencia $6\times10^{15}$ Hz. Usá $E=hf$: aproximadamente $3{,}98\times10^{-18}$ J con $h=6{,}626\times10^{-34}$ J·s. El libro da $3{,}96\times10^{-18}$ J usando una aproximación más redondeada de $h$.
9. Una fuerza de 10 000 N actúa sobre un pistón de 2,0 m². Usá $p=F/A$: 5 000 Pa.
10. Derivá $a=(v_f-v_0)/\Delta t$ para una aceleración constante.
11. Un auto pasa de 60 m/s a 80 m/s en 5,0 s: $a=4{,}0\ \mathrm{m/s^2}$ en el sentido positivo elegido.
12. Con normal 100 N y coeficiente cinético 0,35, el módulo del rozamiento es $F_f=\mu_kF_N=35$ N; el sentido se opone al deslizamiento relativo.
13. Un secador de 1 200 W opera con 110 V: usando $P=I\Delta V$, $I\approx10{,}9$ A en el modelo del ejercicio.
14. De $K=mv^2/2$, obtené la rapidez $|v|=\sqrt{2K/m}$. El signo de una componente de velocidad no se determina solo con energía cinética.
15. Con masa 1 200 kg y energía cinética 240 000 J: rapidez 20 m/s.
16. Para luz en plástico de índice 1,40, usá $v=c/n$: aproximadamente $2{,}14\times10^8$ m/s. El índice y la ecuación corresponden al modelo óptico del problema.
17. Un gas se comprime 0,05 m³ a presión constante 100 000 Pa. Con $\Delta V<0$, el trabajo realizado **sobre** el gas es $W_{\mathrm{sobre}}=-p\Delta V=5\,000$ J.
18. De $1/f=1/s_o+1/s_i$, derivá $f=s_os_i/(s_o+s_i)$, con las distancias y sus signos definidos por el modelo de espejo o lente elegido.
19. Con distancias positivas 0,8 m y 0,6 m del ejemplo: $f\approx0{,}343$ m.
20. Para un fotón de longitud de onda 400 nm, usá $p=h/\lambda$ y convertí $400\ \mathrm{nm}=4\times10^{-7}\ \mathrm{m}$: $p\approx1{,}66\times10^{-27}$ N·s con la constante indicada arriba.

Las comprobaciones no reemplazan el procedimiento: identificá datos, explicitá el modelo, despejá y verificá unidades en cada ejercicio.

## Actividades propias — Para pensar

1. Un problema dice: "Un objeto cae desde el reposo durante 3 s." ¿Cuáles son las variables dadas? ¿Cuál es el valor implícito de $v_0$?
2. ¿Por qué es mejor despejar algebraicamente *antes* de sustituir números?
3. Si una ecuación tiene la incógnita pero también otra variable desconocida, ¿qué hacés?

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.