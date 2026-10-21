+++
title = "Resortes y Ley de Hooke"
date = "2026-06-26"
draft = false
math = true
weight = 9
description = "Constante de resorte, Ley de Hooke, resortes en serie y paralelo, límite elástico."
tags = ["cap05", "fuerzas", "resorte", "Ley de Hooke", "constante de resorte", "elasticidad"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 348–353"
figuras_estado = "6 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 348–353. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=348).

## Deformación y fuerza elástica

Un resorte puede deformarse y recuperar aproximadamente su forma cuando se retira la carga, dentro de ciertas condiciones. El original distingue resortes de espiras cerradas, usados principalmente en tracción, de resortes con espiras separadas, que pueden comprimirse o estirarse según su diseño.

{{< figura src="/images/diagramas/cap05_resorte-traccion_pp348.png" width="310" alt="Resorte de espiras cerradas." caption="Resorte de espiras cerradas." source="Jeff Bigler, edición octubre de 2025, p. 348. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}
{{< figura src="/images/diagramas/cap05_resorte-compresion_pp348.png" width="310" alt="Resorte de espiras separadas." caption="Resorte de espiras separadas." source="Jeff Bigler, edición octubre de 2025, p. 348. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El modelo de **resorte ideal** desprecia su masa y supone una relación lineal entre fuerza y deformación. No todos los resortes reales cumplen ese modelo para cualquier elongación; algunos de tracción también presentan tensión inicial.

## Ley de Hooke y convención de signos

Sea $x$ una coordenada a lo largo del resorte y $x_{\mathrm{nat}}$ la posición que corresponde a su longitud natural, sin carga. La deformación con signo es $\Delta x=x-x_{\mathrm{nat}}$.

$$F_{s,x}=-k\Delta x$$

La constante $k>0$ se mide en N/m. Para el mismo módulo de deformación, un $k$ mayor produce una fuerza mayor. El signo menos indica fuerza recuperadora: se opone a la deformación, no necesariamente a la velocidad del bloque.

Si el eje es positivo hacia la derecha, estirar hacia la derecha da $\Delta x>0$ y fuerza hacia la izquierda. Comprimir da $\Delta x<0$ y fuerza hacia la derecha. En ambos casos el módulo es $F_s=k\lvert\Delta x\rvert$ dentro del rango lineal.

{{< nota-adaptacion pagina="348" origen="Original y resumen anterior: longitud natural y posición de equilibrio" >}}
No siempre coinciden «fuerza del resorte nula» y «equilibrio del sistema». Un bloque quieto colgado de un resorte vertical lo estira: la fuerza elástica equilibra al peso. Se distingue la longitud natural del resorte del equilibrio del conjunto sometido a gravedad.
{{< /nota-adaptacion >}}

## Ejemplo del original: peso de 7 N

Se cuelga lentamente un peso de 7 N y el sistema queda en reposo con una elongación de 0,25 m. El balance de fuerzas exige que el módulo de la fuerza elástica sea 7 N:

$$k=\frac{7\ \mathrm N}{0{,}25\ \mathrm m}=28\ \mathrm{N/m}$$

No se obtiene un $k$ negativo por el signo recuperador: ese signo pertenece a la relación entre componentes. En vertical, para una masa $m$ en reposo y sin otras fuerzas:

$$k\Delta\ell_{\mathrm{eq}}=mg$$

Si se mide una coordenada $y$ respecto de ese equilibrio cargado, la resultante es $F_{\mathrm{neta}}=-ky$. Esa expresión es para la resultante alrededor del equilibrio; la fuerza del resorte por sí sola sigue incluyendo la deformación respecto de su longitud natural.

## Resortes en paralelo

{{< figura src="/images/diagramas/cap05_resortes-paralelo_pp351.png" width="430" alt="Dos resortes en paralelo." caption="Dos resortes en paralelo." source="Jeff Bigler, edición octubre de 2025, p. 351. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Con extremos comunes que se desplazan juntos, ambos resortes tienen la misma deformación $\Delta x$. Sus fuerzas recuperadoras se suman:

$$F_{\mathrm{total},x}=-(k_1+k_2)\Delta x$$

$$k_{\mathrm{eq}}=k_1+k_2+\cdots$$

La equivalencia supone resortes lineales alineados y apoyos adecuados; tener dos resortes en el mismo dibujo no basta para llamarlos «en paralelo».

## Resortes en serie

{{< figura src="/images/diagramas/cap05_resortes-serie_pp351.png" width="430" alt="Dos resortes en serie." caption="Dos resortes en serie." source="Jeff Bigler, edición octubre de 2025, p. 351. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para conexiones intermedias de masa despreciable y el mismo esfuerzo axial transmitido, cada resorte recibe el mismo módulo de fuerza. Las elongaciones se suman:

$$\Delta\ell=\Delta\ell_1+\Delta\ell_2=\frac{F}{k_1}+\frac{F}{k_2}$$

$$\frac1{k_{\mathrm{eq}}}=\frac1{k_1}+\frac1{k_2}+\cdots$$

Para dos resortes, $k_{\mathrm{eq}}=k_1k_2/(k_1+k_2)$; con más de dos conviene conservar la suma de recíprocos. **Comprobación propia:** tres resortes iguales de constante $k$ en serie equivalen a $k/3$, mientras que en paralelo equivalen a $3k$.

{{< nota-adaptacion pagina="351" origen="Desarrollo del original: combinación en serie" >}}
El original escribe una suma de fuerzas en el desarrollo de serie y también una fracción de producto de constantes dividido por su suma que no es válida en general para tres o más resortes. Se usa la igualdad de fuerzas transmitidas, la suma de elongaciones y la suma de recíprocos. No se cambia la regla correcta para dos resortes ni la equivalencia de paralelo.
{{< /nota-adaptacion >}}

## Slinky: una masa distribuida

{{< figura src="/images/diagramas/cap05_slinky-caida_pp350.png" width="320" alt="Secuencia de caída de un resorte extendido." caption="Secuencia de caída de un resorte extendido." source="Jeff Bigler, edición octubre de 2025, p. 350. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El resorte blando del ejemplo se estira bajo su propio peso: su tensión y deformación no son uniformes a lo largo de él. Al soltar el extremo superior, el cambio de tensión se propaga; en la demostración idealizada el extremo inferior puede permanecer casi inmóvil durante un intervalo inicial.

{{< nota-adaptacion pagina="350" origen="Explicación del original: caída de un resorte extendido" >}}
La aceleración gravitatoria del centro de masa proviene de la resultante externa, el peso, cuando se desprecia el aire. Las fuerzas elásticas internas no son la causa de esa aceleración del centro de masa; sí cambian la forma y el movimiento de sus partes. El retraso del extremo inferior requiere analizar la propagación del cambio de tensión, no deducir que todas las partes aceleran igual desde el instante de suelta.
{{< /nota-adaptacion >}}

## Límite del modelo y propiedades del material

{{< figura src="/images/diagramas/cap05_resorte-limite_pp352.png" width="440" alt="Curva de esfuerzo y deformación del original." caption="Curva de esfuerzo y deformación del original." source="Jeff Bigler, edición octubre de 2025, p. 352. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La gráfica del original relaciona esfuerzo $\sigma=F/A$ y deformación relativa $\varepsilon=\Delta L/L$. En su tramo elástico lineal, la pendiente es el módulo de Young $Y=\sigma/\varepsilon$, con unidad Pa. La constante de un resorte y el módulo de Young no son la misma magnitud: una depende también de su geometría.

{{< nota-adaptacion pagina="352" origen="Alcance de la fórmula del original y de la síntesis anterior" >}}
La relación $k=YA/L$ corresponde al modelo de una barra recta sometida a tracción axial uniforme, con pequeñas deformaciones; no se aplica directamente a cualquier resorte helicoidal tomando la longitud del resorte y el área del alambre. Tampoco deben identificarse sin matices fin de linealidad, límite elástico y fluencia: el gráfico es una representación de un comportamiento material particular.
{{< /nota-adaptacion >}}

## Ejercicios originales de p. 353

1. Un resorte de suspensión con $k=42\,000$ N/m soporta 3 000 N: $\Delta\ell=3000/42000\approx0{,}0714$ m, aproximadamente 7 cm. Se supone reparto igual del peso entre los cuatro apoyos del modelo.
2. Una puerta de peso 400 N recibe 25 N de ayuda hacia arriba y dos resortes paralelos la sostienen sin aceleración. Los resortes ejercen 375 N en total. Con elongación 1,05 m: $k_{\mathrm{eq}}=375/1{,}05\approx357{,}1$ N/m y cada resorte tiene aproximadamente 178,6 N/m si son iguales.
3. Comparando con resortes ideales de 0,5 N/m a la misma elongación, harían falta aproximadamente 714 en paralelo para esa constante equivalente. Es una comparación del modelo, no un diseño real de una puerta.

**Actividad propia:** medí elongación y fuerza dentro del rango reversible del resorte escolar y graficá fuerza frente a elongación. Distinguí datos medidos de ajuste y examiná si el cero y la linealidad son compatibles con las incertidumbres.

---

Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Original de Jeff Bigler y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los ejemplos propios y las observaciones en revisión se identifican en el texto.
