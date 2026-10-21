+++
title = "Fricción"
date = "2026-06-26"
draft = false
math = true
weight = 8
description = "Fricción estática y cinética, coeficiente de fricción, resolución de problemas con fricción."
tags = ["cap05", "fuerzas", "fricción", "coeficiente de fricción", "fricción estática", "fricción cinética"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 337–347"
figuras_estado = "3 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 337–347. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=337).

## Qué movimiento se opone al rozamiento

El rozamiento es una fuerza tangencial de contacto que se opone al deslizamiento relativo entre superficies o a su tendencia. Intervienen rugosidad, deformaciones e interacciones microscópicas; no se explica únicamente como dientes rígidos que encajan.

{{< figura src="/images/diagramas/cap05_friccion-superficies_pp337.png" width="410" alt="Esquema de superficies rugosas en contacto." caption="Esquema de superficies rugosas en contacto." source="Jeff Bigler, edición octubre de 2025, p. 337. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La figura es un esquema cualitativo del original, no una medición microscópica ni una fórmula que permita calcular el coeficiente a partir de la rugosidad dibujada.

## Estático y cinético

Se usa **rozamiento estático** cuando las superficies no deslizan una respecto de otra, y **cinético** cuando sí lo hacen. Un objeto que avanza puede tener contacto estático con el suelo; estar quieto respecto del aula no alcanza para decidir el tipo de rozamiento.

En el modelo escolar de rozamiento seco, para módulos y con contacto:

$$0\le f_s\le\mu_sN,\qquad f_k\approx\mu_kN$$

Los coeficientes son adimensionales y corresponden a un par de superficies en determinadas condiciones. La estática se ajusta a la fuerza tangencial requerida hasta su máximo; no es siempre igual a $\mu_sN$.

{{< nota-adaptacion pagina="338" origen="Original y adaptación anterior: transición y comparación de coeficientes" >}}
Bigler dice «casi siempre» al comparar rozamiento cinético y máximo estático. La síntesis anterior decía «siempre»; se corrige esa pérdida de matiz. En el modelo ideal, estar exactamente en el máximo estático todavía permite equilibrio límite; no significa que el objeto necesariamente ya esté deslizando. La transición ocurre cuando ya no puede sostenerse la condición estática.
{{< /nota-adaptacion >}}

## El ejemplo de 10 N y 9 N

El original considera un máximo estático de 10 N y una fuerza cinética de 9 N. Mientras una fuerza horizontal de 5 N intenta mover la caja y nada más actúa tangencialmente, $f_s=5$ N y la caja permanece quieta. Al exigir más de 10 N no puede mantenerse ese equilibrio estático en el modelo.

Una vez que la caja desliza, si se aplican 9 N y el rozamiento cinético es 9 N, la resultante horizontal es cero: sigue moviéndose con velocidad constante. Aplicar más de 9 N produce aceleración, manteniendo las mismas condiciones de contacto y coeficiente.

{{< figura src="/images/diagramas/cap05_friccion-grafico_pp339.png" width="380" alt="Rozamiento estático y cinético frente a la fuerza aplicada." caption="Rozamiento estático y cinético frente a la fuerza aplicada." source="Jeff Bigler, edición octubre de 2025, p. 339. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El tramo horizontal del gráfico representa la aproximación cinética usada en el ejemplo. No es una ley universal independiente de normal, velocidad, temperatura o estado de las superficies.

## Primero la normal; después, el régimen

1. Dibujá las fuerzas e identificá los contactos.
2. Calculá la normal con el balance perpendicular. Usá $N=mg$ solo si no hay otras componentes verticales, no hay aceleración vertical y se mantiene el contacto horizontal.
3. Si no hay deslizamiento, obtené la fricción **necesaria** de las ecuaciones y verificá $f_s\le\mu_sN$.
4. Si hay deslizamiento, calculá $f_k$ con el modelo correspondiente y oponé su sentido al movimiento relativo.
5. Volvé a la suma de fuerzas para hallar la resultante y la aceleración.

Si la fricción fuera la única fuerza horizontal sobre un bloque que desliza a la derecha, con derecha positiva:

$$ma_x=-\mu_kN$$

En horizontal y bajo las condiciones anteriores, $a_x=-\mu_kg$. Esa ecuación describe el deslizamiento hasta detenerse. No se prolonga después del reposo para predecir que la misma fricción hará arrancar el bloque hacia atrás.

## Ejemplo original: caja de 40 kg

{{< figura src="/images/diagramas/cap05_friccion-caja_pp344.png" width="300" alt="Caja que se empuja horizontalmente." caption="Caja que se empuja horizontalmente." source="Jeff Bigler, edición octubre de 2025, p. 344. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La caja se mueve a velocidad constante; la fuerza aplicada es horizontal y $\mu_k=0{,}35$. Usando $g=10\ \mathrm{m/s^2}$:

$$N=mg=400\ \mathrm N$$
$$f_k=0{,}35(400)=140\ \mathrm N$$

Como $a_x=0$, la persona aplica 140 N en sentido opuesto al rozamiento. Si tirara con una cuerda inclinada hacia arriba, la normal cambiaría: este resultado no se copia sin revisar el nuevo diagrama.

## Coeficientes y ejercicios de las pp. 345–347

La tabla E de p. 608 ofrece **valores aproximados**, no constantes universales de cualquier objeto hecho con esos materiales:

| Par de superficies del ejercicio | $\mu_s$ | $\mu_k$ |
|---|:---:|:---:|
| Acero sobre acero | 0,74 | 0,57 |
| Madera seca sobre madera seca | 0,42 | 0,30 |
| Caucho sobre asfalto seco | 0,85 | 0,67 |
| Caucho sobre hielo | No indicado | 0,15 |

Para 15 kg de acero sobre acero, $N=150$ N: máximo estático 111 N y fuerza cinética 85,5 N. Para el escritorio de 74 kg sobre madera seca, $N=740$ N: máximo estático 310,8 N y fuerza cinética 222 N. La fricción real antes de comenzar a deslizar puede ser menor que esos máximos.

En el vehículo del ejercicio, que **patina** desde 15 m/s, el modelo de fricción cinética constante da:

$$d=\frac{v_0^2}{2\mu_kg}$$

Con los coeficientes del libro: aproximadamente 16,8 m sobre asfalto seco y 75 m sobre hielo. Son resultados del modelo del ejercicio, no distancias medidas ni una predicción completa de frenado con neumáticos, ABS y reacción del conductor.

Para la piedra de curling que se detiene tras recorrer $d$ en tiempo $t$, con aceleración constante:

$$d=\frac{v_0t}{2},\qquad a=-\frac{v_0}{t}=-\frac{2d}{t^2}$$

$$\mu_k=\frac{2d}{gt^2}$$

Con 38 m y 8,0 s resulta $\mu_k=76/640\approx0{,}119$, coherente con 0,12. La masa se cancela bajo estas hipótesis; cambiar el régimen físico puede cambiar esa conclusión.

---

Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Original de Jeff Bigler y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los ejemplos propios y las observaciones en revisión se identifican en el texto.
