+++
title = "Resumen: cinemática lineal y rotacional"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Tabla comparativa completa de variables y ecuaciones lineales vs. angulares. Estrategia de resolución."
tags = ["cap04", "cinemática 2D", "rotación", "cinemática lineal", "cinemática rotacional", "tabla resumen"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 270–273"
figuras_estado = "Tablas reconstruidas; sin figuras en estas páginas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 270–273. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=270).

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Identificar la variable angular correspondiente a cada variable lineal.
- Usar la tabla comparativa para elegir la ecuación correcta en cualquier problema.
- Resolver problemas que combinen movimiento lineal y rotacional.

---

## Variables: lineal vs. angular

Para un eje fijo, las variables lineales y angulares tienen la siguiente correspondencia cinemática:

| Variable | Lineal | Unidad | Angular | Unidad |
|:---:|:---:|:---:|:---:|:---:|
| Posición / ángulo | $x$ | m | $\theta$ | rad |
| Desplazamiento | $\Delta x$ | m | $\Delta\theta$ | rad |
| Velocidad | $v$ | m/s | $\omega$ | rad/s |
| Aceleración | $a$ | m/s² | $\alpha$ | rad/s² |
| Tiempo | $t$ | s | $t$ | s |

**Relaciones entre sistemas:**

$$\Delta s=r\Delta\theta\qquad v_T=r\omega\qquad a_T=r\alpha\qquad a_c=\frac{v^2}{r}=r\omega^2$$

Aquí $\Delta s$ es desplazamiento de arco con signo. La longitud recorrida coincide con su módulo solo si no se invierte el giro; $\Delta\theta$ es el ángulo acumulado respecto de la posición inicial, no necesariamente el ángulo de posición respecto de cero.

> **Nota:** el radián es adimensional (es una razón de longitudes), por eso las unidades de $v_T = r\omega$ quedan en m/s y no en m·rad/s.

---

## Ecuaciones: lineal vs. angular

En la tabla, $t$ es tiempo transcurrido y las ecuaciones de movimiento usan aceleración lineal o angular constante. La igualdad entre velocidad media y promedio de extremos requiere esa condición; no forma parte de la definición general.

| Lineal | Angular | Descripción |
|:---:|:---:|:---:|
| $\Delta x = x - x_0$ | $\Delta\theta = \theta - \theta_0$ | Desplazamiento |
| $v_{med} = \dfrac{\Delta x}{t} = \dfrac{v_0+v}{2}$ | $\omega_{med} = \dfrac{\Delta\theta}{t} = \dfrac{\omega_0+\omega}{2}$ | Velocidad media |
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ | Velocidad con aceleración |
| $\Delta x = v_0 t + \tfrac{1}{2}at^2$ | $\Delta\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$ | Posición con aceleración |
| $v^2 - v_0^2 = 2a\Delta x$ | $\omega^2 - \omega_0^2 = 2\alpha\Delta\theta$ | Sin tiempo |
| $a_c = v^2/r = r\omega^2$ | — | Aceleración centrípeta |

---

## Condiciones especiales

| Lineal | Angular |
|:---:|:---:|
| "parte del reposo" → $v_0 = 0$ | "empieza sin girar" → $\omega_0 = 0$ |
| "se detiene" → $v = 0$ | "deja de girar" → $\omega = 0$ |
| "velocidad constante" → $a = 0$ | "velocidad angular constante" → $\alpha = 0$ |
| "caída libre" → componente vertical $a_y=\pm g$, según el eje | — |

---

## Estrategia GUESS aplicada a problemas rotacionales

El método GUESS funciona igual que en la cinemática lineal:

1. **G:** identificá las variables dadas con sus valores.
2. **U:** identificá la incógnita.
3. **E:** elegí la ecuación que contiene la incógnita y todas las variables conocidas.
4. **S:** despejá algebraicamente.
5. **S:** sustituí y calculá.

---

## Ejemplo resuelto — Tocadiscos (Bigler)

Un tocadiscos a 33⅓ RPM se apaga y se detiene en 26 s. ¿Cuál es la aceleración angular?

**Convertir RPM a rad/s:**

$$\omega_0 = 33{,}33\ \text{RPM} \times \frac{2\pi}{60} = \frac{33{,}33 \times 2\pi}{60} = 3{,}49\ \text{rad/s}$$

**Tabla:**

| Variable | Valor |
|:---:|:---:|
| $\omega_0$ | $3{,}49\ \text{rad/s}$ |
| $\omega$ | $0$ (se detiene) |
| $t$ | $26\ \text{s}$ |
| $\alpha$ | $?$ |

$$\alpha = \frac{\omega - \omega_0}{t} = \frac{0 - 3{,}49}{26} = -0{,}134\ \text{rad/s}^2$$

Como se tomó positivo el giro inicial, la aceleración negativa lo frena. El signo por sí solo no determina disminución de rapidez angular.

---

## Para pensar

1. ¿Qué tienen en común la velocidad tangencial y la velocidad lineal? ¿En qué difieren?
2. En un carrusel, ¿todos los puntos tienen la misma velocidad angular? ¿Y la misma velocidad tangencial?
3. ¿Por qué la definición de velocidad media sigue siendo válida con aceleración, pero no se puede sustituir automáticamente la velocidad instantánea por esa media?

## Aclaración sobre velocidades medias, p. 271

{{< nota-adaptacion pagina="271" origen="Comentario de la tabla del original" >}}
El comentario del original dice que no pueden usarse $v_{\mathrm{med}}$ y $\omega_{\mathrm{med}}$ si hay aceleración. Tomado literalmente contradice las definiciones de medias y los ejemplos anteriores. En esta adaptación se precisa:
{{< /nota-adaptacion >}}

- $v_{\mathrm{med}}=\Delta x/\Delta t$ y $\omega_{\mathrm{med}}=\Delta\theta/\Delta t$ son válidas aunque las velocidades cambien.
- No se reemplaza una velocidad instantánea por la media sin justificarlo.
- El promedio de valores inicial y final da la media temporal cuando la velocidad cambia linealmente, es decir, cuando la aceleración correspondiente es constante.

Por ejemplo, desde el reposo con $a=2\ \mathrm{m/s^2}$ durante 4 s, la velocidad final es 8 m/s y la media 4 m/s. El desplazamiento es $4(4)=16$ m, no $8(4)=32$ m. Este ejemplo es una comprobación propia.

## Elegir ecuaciones sin confundir modelos

Las recomendaciones de la p. 273 requieren identificar primero si se pide una coordenada, un desplazamiento, una longitud recorrida, una rapidez o una componente con signo. No basta con que aparezca la misma letra en una tabla.

| Situación | Relación apropiada | Condiciones |
|:---:|:---:|:---:|
| Cuerda que desenrolla una rueda | $s=r\lvert\Delta\theta\rvert$ | Radio fijo, sin deslizamiento, sin inversión del giro |
| Giro uniforme de un disco | $\lvert v_T\rvert=r\lvert\omega\rvert$ | Medir radio desde el eje |
| Frenado angular uniforme | $\alpha=(\omega-\omega_0)/t$ | Eje fijo y aceleración constante para describir todo el intervalo |
| Giro circular con rapidez constante | $a_c=v^2/r$ | $a_T=0$, pero vector aceleración variable en dirección |
| Rueda que rueda sobre el suelo | $v_{\mathrm{centro}}=r\lvert\omega\rvert$ | Rodadura sin deslizamiento |

El resumen conserva componentes con signo para las ecuaciones de un eje y módulos para la comparación radial. No se elevan al cuadrado vectores completos ni se identifica longitud de arco con desplazamiento cartesiano.

## Ejemplo del tocadiscos y control de redondeo

{{< nota-adaptacion pagina="265" origen="Respuesta numérica del original" >}}
El problema de 33⅓ rpm y 26 s proviene de la p. 265 y se desarrolla en [Aceleración angular]({{< ref "/notes/notas-fisica/cap04-cinematica-2d/aceleracion-angular.md" >}}). El cálculo con valores exactos da $\alpha=-5\pi/117\approx-0{,}1343\ \mathrm{rad/s^2}$; el original indica −0,135. Se conserva visible el origen y se aclara la diferencia de redondeo, sin repetir el problema como si fuera otro ejercicio de las pp. 270–273.
{{< /nota-adaptacion >}}

Este resumen es una tabla de consulta, no una licencia para usar cualquier ecuación en cualquier movimiento. Para problemas con aire, eje móvil, radio variable o aceleración no uniforme hay que revisar el modelo antes de sustituir números.

---

Adaptado de Jeff Bigler. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones propias se identifican en el texto.
