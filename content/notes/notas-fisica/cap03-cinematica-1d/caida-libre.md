+++
title = "Caída Libre"
date = "2026-06-26"
draft = false
math = true
weight = 7
description = "MRUV con a = g. Caída desde el reposo, lanzamiento vertical y punto más alto."
tags = ["cap03", "cinemática", "caída libre", "gravedad", "lanzamiento vertical", "MRUV"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 194, 201–203, 206–208, 212–214"
figuras_estado = "1 figura extraída; problemas reconstruidos con signos explícitos"
visual_estado = "Pendiente: inspección visual y auto-render en navegador; LaTeX validado"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 194, 201–203, 206–208, 212–214. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=194).

## Objetivos de aprendizaje

- Reconocer el modelo de caída libre y fijar una convención de signos para la vertical.
- Resolver caídas y lanzamientos verticales con aceleración constante.
- Distinguir altura, desplazamiento y distancia total, y elegir la raíz temporal pertinente.

## Qué significa «libre»

Un objeto está en **caída libre** cuando la gravedad es la única interacción relevante para su movimiento. Puede estar bajando, subiendo o tener velocidad vertical cero durante un instante. No necesita haber sido soltado desde el reposo.

Cerca de la superficie terrestre y para diferencias de altura pequeñas, aproximamos la aceleración gravitatoria como uniforme. Su módulo es $g\approx9{,}8\ \mathrm{m/s^2}$. Siguiendo la elección didáctica de Bigler, en los ejemplos de esta nota usamos **$g=10\ \mathrm{m/s^2}$**, salvo indicación contraria. Es una aproximación, no un valor exacto ni universal.

La masa no aparece en estas ecuaciones. Esto no significa que una pluma y una piedra caigan igual en el aire: el modelo exige que la resistencia del aire sea despreciable. Un cuerpo sobre una rampa tampoco está en caída libre, porque el apoyo restringe su movimiento.

## Convención: g es un módulo positivo

En esta adaptación $g>0$ representa el módulo de la aceleración gravitatoria. La componente $a_y$ depende del sentido elegido:

| Sentido positivo | Componente gravitatoria |
|---|---|
| Hacia arriba | $a_y=-g$ |
| Hacia abajo | $a_y=+g$ |

Con positivo hacia arriba y tiempo inicial cero:

$$y=y_0+v_0t-\frac12gt^2$$

$$v=v_0-gt$$

$$v^2=v_0^2-2g(y-y_0)$$

También vale $\Delta y=(v_0+v)t/2$ mientras la aceleración sea constante. No deben sustituirse valores con signos de otra convención a mitad del problema. Bigler a veces usa $g$ para la componente con signo; aquí la distinción entre $g$ y $a_y$ evita esa ambigüedad.

## Caída desde el reposo

Si soltamos el objeto a altura $h$ sobre el suelo, $y_0=h$, $v_0=0$ y el impacto sucede en $y=0$:

$$0=h-\frac12gt^2\quad\Rightarrow\quad t=\sqrt{\frac{2h}{g}}$$

La raíz negativa corresponde a una prolongación matemática anterior al instante inicial y se descarta para la caída pedida. La velocidad al llegar es:

$$v=-\sqrt{2gh}$$

La rapidez es su módulo. El ejemplo del gato desde 1,8 m da rapidez $6\ \mathrm{m/s}$; el desarrollo con positivo hacia abajo está en [MRUV]({{< ref "/notes/notas-fisica/cap03-cinematica-1d/mruv.md" >}}).

## Lanzamiento hacia arriba y regreso a la misma altura

Durante el ascenso, $v>0$ y $a_y<0$: la rapidez disminuye. En el punto más alto, $v=0$ pero $a_y=-g$. Durante el descenso, $v<0$ y $a_y<0$: la rapidez aumenta.

De $0=v_0-gt$:

$$t_{\mathrm{subida}}=\frac{v_0}{g},\qquad h_{\max}-y_0=\frac{v_0^2}{2g}$$

Si vuelve a la **misma altura de salida**, sin resistencia del aire:

$$T=\frac{2v_0}{g},\qquad v_f=-v_0$$

La subida y la bajada duran lo mismo y las rapideces en una misma altura son iguales. Estas simetrías no permiten duplicar el tiempo de subida si el punto de llegada está a otra altura.

Para la manzana de la p. 203, $v_0=8\ \mathrm{m/s}$: la subida dura 0,8 s, el ascenso es de 3,2 m y el regreso ocurre a los 1,6 s. Las tres cantidades no son intercambiables.

## Lanzamiento desde un acantilado, serie 2, ejercicio 5

Una piedra se lanza hacia arriba a 12,0 m/s desde un borde situado 75,0 m sobre el suelo. Elegimos el suelo como origen y positivo hacia arriba:

$$y=75+12t-5t^2$$

Para el impacto, $y=0$:

$$t=\frac{12\pm\sqrt{12^2+4(5)(75)}}{10}$$

La raíz positiva es $t\approx5{,}2546\ \mathrm s$; la negativa, aproximadamente $-2{,}8546\ \mathrm s$, no corresponde a un instante posterior al lanzamiento.

$$v=12-10t\approx-40{,}55\ \mathrm{m/s}$$

La piedra sube primero $12^2/(2\cdot10)=7{,}2\ \mathrm m$ y después baja $75+7{,}2=82{,}2\ \mathrm m$. Por eso:

$$d=7{,}2+82{,}2=89{,}4\ \mathrm m,\qquad\Delta y=-75\ \mathrm m$$

El original da 5,25 s, 40,5 m/s hacia abajo y 89,4 m. Son resultados compatibles con esta aproximación; conservá más cifras durante el cálculo y redondeá al final.

## Paquete soltado desde un helicóptero, serie 2, ejercicios 6–7

Un helicóptero asciende a velocidad $v_0$ y suelta un paquete desde altura $h$. **Soltar no significa que la velocidad del paquete respecto del suelo sea cero**: inicialmente conserva la del helicóptero. Despreciamos la resistencia del aire.

Con $g>0$ y positivo hacia arriba, al llegar al suelo:

$$0=h+v_0t-\frac12gt^2$$

$$t=\frac{v_0+\sqrt{v_0^2+2gh}}{g}$$

Se eligió la raíz que da tiempo positivo. Esta forma utiliza el módulo $g$ y no debe mezclarse con una expresión escrita usando una componente gravitatoria negativa. Para $v_0=5{,}50\ \mathrm{m/s}$ y $h=100\ \mathrm m$, resulta $t\approx5{,}06\ \mathrm s$.

El paquete asciende un poco más antes de caer. Su altura adicional máxima es $v_0^2/(2g)\approx1{,}51\ \mathrm m$, lo cual ayuda a interpretar por qué tarda más que un objeto soltado desde el reposo a 100 m.

## Piedra que pasa por una ventana, serie 2, ejercicio 10

Una piedra soltada desde el reposo tarda 0,30 s en pasar una ventana de 2,2 m de altura. ¿Desde qué distancia por encima del borde superior fue soltada?

{{< figura src="/images/diagramas/cap03_ventana-caida_pp214.png" alt="La piedra ya tiene velocidad al entrar en la ventana de 2,2 m." width="360" caption="La piedra ya tiene velocidad al entrar en la ventana de 2,2 m." source="Jeff Bigler, edición octubre de 2025, p. 214. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para el tramo de la ventana elegimos positivo hacia abajo. Si $u$ es la velocidad al llegar al borde superior:

$$2{,}2=u(0{,}30)+\frac12(10)(0{,}30)^2$$

$$u=\frac{2{,}2-0{,}45}{0{,}30}\approx5{,}83\ \mathrm{m/s}$$

Antes de la ventana la piedra ya había acelerado desde el reposo, de modo que $u^2=2gd$. Por tanto:

$$d=\frac{u^2}{2g}\approx1{,}70\ \mathrm m$$

Usar $v_0=0$ en el tramo de la ventana sería incorrecto. El reposo corresponde al punto de suelta, no al borde superior.

## Ejercicios del original y resultados de control

Los números permiten volver a las series del PDF. En todos se desprecia el aire y se usa $g=10\ \mathrm{m/s^2}$.

| Serie y ejercicio | Enunciado adaptado |
|---|---|
| 1–8, p. 206 | Una pelota sale verticalmente hacia arriba a 30 m/s desde el suelo. Hallá altura máxima y tiempo de regreso. |
| 1–9, p. 207 | Un ladrillo se suelta desde 5,0 m. Hallá el tiempo hasta el suelo. |
| 1–10, p. 207 | Una pelota se suelta desde una torre de 125 m. Hallá el tiempo de caída. |
| 1–11, p. 207 | Una gota se desprende desde el reposo a 20 m del suelo. Hallá la rapidez de impacto. |
| 1–12, p. 208 | Una piedra se lanza hacia arriba a 35 m/s. Hallá el ascenso máximo respecto de la salida. |
| 2–8, p. 213 | Una pelota vuelve al suelo 3,2 s después de ser lanzada verticalmente hacia arriba. Hallá la distancia total recorrida. |
| 2–9, p. 214 | Un canguro alcanza un ascenso de 2,7 m y vuelve al nivel de salida. Hallá su tiempo total en el aire. |

{{< details title="Comprobaciones" >}}

| Ejercicio | Relación utilizada | Resultado |
|---|---|---|
| 1–8 | $h=v_0^2/(2g)$, $T=2v_0/g$ | $45\ \mathrm m$, $6{,}0\ \mathrm s$ |
| 1–9 | $t=\sqrt{2h/g}$ | $1{,}0\ \mathrm s$ |
| 1–10 | La misma relación | $5{,}0\ \mathrm s$ |
| 1–11 | $\lvert v\rvert=\sqrt{2gh}$ | $20\ \mathrm{m/s}$ |
| 1–12 | $h=v_0^2/(2g)$ | $61{,}25\ \mathrm m$ antes del redondeo |
| 2–8 | $v_0=gT/2=16\ \mathrm{m/s}$, $d=2h$ | $25{,}6\ \mathrm m$ |
| 2–9 | $T=2\sqrt{2h/g}$ | $1{,}47\ \mathrm s\approx1{,}5\ \mathrm s$ |

Los resultados con varias cifras muestran el cálculo con $g=10$; no atribuyen esa precisión al modelo ni a los datos.

{{< /details >}}

## Control del modelo y actividad propia

Antes de entregar una solución, verificá: ¿el sentido de $a_y$ es hacia abajo?, ¿el tiempo es posterior a la salida?, ¿la velocidad al impactar apunta al suelo?, ¿se sumaron ambos tramos si se pide distancia y hubo inversión de sentido?

Como actividad propia, se puede analizar en [Tracker]({{< ref "/notes/herramientas/tracker.md" >}}) un lanzamiento vertical corto, con cámara fija y escala en el plano del movimiento. Ajustá $y(t)$ y estimá la componente de aceleración; no se presenta una medición inventada de $g$. La calibración, la perspectiva y el intervalo entre cuadros limitan la precisión. Tracker fue desarrollado por Douglas Brown y Open Source Physics.

---

Adaptado de Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones y actividades propias se identifican en el texto.
