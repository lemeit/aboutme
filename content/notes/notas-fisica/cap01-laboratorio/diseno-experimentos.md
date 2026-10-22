+++
title = "Diseño y realización de experimentos"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Variables, diseño experimental por diseño inverso, experimentos cualitativos y cuantitativos."
tags = ["U1", "laboratorio", "experimento", "variable independiente", "variable dependiente", "método científico"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejemplo cotejados: pp. 41–53"
figuras_estado = "1 figura extraída; flujo reconstruido"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 41–53. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=41). Traducción y adaptación desarrollada; las actividades propias se identifican aparte.
## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Distinguir entre variables de control, manipuladas y respondientes.
- Diseñar un experimento partiendo del objetivo (diseño inverso).
- Diferenciar experimentos cualitativos de cuantitativos.

---

## Cómo se diseña un experimento real

En la mayoría de las clases de ciencias, los "experimentos" ya vienen diseñados paso a paso. En la ciencia real — y en este curso — el proceso es al revés:

1. Empezás por el **objetivo**: ¿qué querés saber o medir?
2. Determinás qué necesitás medir o calcular para alcanzar ese objetivo.
3. Diseñás el procedimiento que te permita obtener esos datos.
4. Realizás el experimento y analizás los resultados.
5. Sacás conclusiones y decidís qué hacer a continuación.

Este enfoque se llama **diseño inverso** (*backward design*) o experimento por indagación (*inquiry-based*).

---

## Tipos de experimentos

### Experimentos cualitativos

Buscan determinar **si algo ocurre**, bajo qué condiciones ocurre, o cómo se ve cuando ocurre. No requieren mediciones numéricas precisas.

Preguntas de diseño:
- ¿Qué querés observar?
- ¿Qué necesitás hacer para que ocurra?
- ¿Cómo vas a saber si ocurrió?

### Experimentos cuantitativos

Buscan determinar **en qué medida** algo ocurre. Requieren mediciones y cálculos.

Preguntas de diseño:
- ¿Qué querés medir o calcular en última instancia?
- ¿Podés medirlo directamente, o necesitás una ecuación?
- ¿Qué otras cantidades necesitás medir para usar esa ecuación?
- ¿Cómo configurás las condiciones del experimento?

---

## Tipos de variables

En todo experimento hay tres tipos de variables:

| Tipo | Nombre alternativo | Definición | Ejemplo |
|------|-------------------|------------|---------|
| **Variable de control** | — | Condición que se mantiene constante para no afectar el resultado | Velocidad del viento al lanzar una pelota |
| **Variable manipulada** | Variable independiente | La que vos elegís y cambiás intencionalmente | Altura desde la que se suelta una pelota |
| **Variable respondiente** | Variable dependiente | La que cambia como resultado de la acción; se mide | Tiempo que tarda en caer |

> **Regla práctica:** la variable manipulada va en el eje horizontal del gráfico ($x$); la respondiente va en el eje vertical ($y$).

### Controles positivos y negativos (en experimentos cualitativos)

- **Control positivo:** muestra que *sí* contiene lo que el experimento debe detectar. Si el experimento falla en detectarlo, algo está mal con el procedimiento.
- **Control negativo:** muestra que *no* contiene lo que se busca. Si el experimento lo detecta de todas formas, algo está mal.

---

## ¿Cuántos datos necesito?

La cantidad de datos debe permitir evaluar la relación investigada y su incertidumbre. La significación estadística, cuando corresponde al análisis, necesita un modelo y una prueba adecuados.

Orientación didáctica propuesta por Bigler — **regla del 8 y 10**:
- Al menos **8 puntos de datos**.
- El rango de la variable manipulada debe abarcar al menos un **factor de 10** (por ejemplo, de 1 cm a 10 cm, o de 0,5 s a 5 s).

---

## El proceso de diseño experimental

1. Decidir qué querés determinar.
2. Identificar las ecuaciones relevantes.
3. Determinar qué cantidades necesitás medir.
4. Definir las variables: ¿cuáles controlás, cuáles manipulás, cuál es la respondiente?
5. Planificar cómo medirlas con precisión.
6. Realizar el experimento y registrar los datos.
7. Analizar y sacar conclusiones.

---

## Actividad propia de campo — Tracker[^tracker]

Usando la app **Tracker[^tracker]**, podés realizar experimentos cuantitativos de cinemática:

1. Filmás el movimiento (pelota, corredor, carrito).
2. Tracker[^tracker] analiza el video cuadro por cuadro.
3. Obtenés posición, velocidad y aceleración como función del tiempo.
4. Identificás variables: el tiempo $t$ es la coordenada independiente del gráfico y la posición $x$ es la magnitud observada. El tiempo muestreado no necesariamente es una variable manipulada experimentalmente.

> **Pregunta:** en un experimento con Tracker[^tracker], ¿qué serían las variables de control? (Pensá en condiciones que deben mantenerse iguales en cada toma.)

---

## Del objetivo a las mediciones: el diseño completo

La pregunta inicial no debe ser “¿qué hago primero?”, sino “¿qué necesito determinar?”. Para cada cantidad buscada, decidí si ya la conocés, si podés consultarla, si podés medirla directamente o si debés calcularla. Cuando necesitás calcularla, elegí una ecuación que la contenga y repetí el análisis para las demás cantidades de esa ecuación.

El proceso termina cuando cada cantidad necesaria tiene una forma concreta de obtenerse. Recién entonces elegís el orden de las acciones y escribís el procedimiento. Al diseñar trabajás desde el resultado hacia los datos; al ejecutar avanzás desde las acciones hacia el resultado.

Una **acción**, en el vocabulario del original, es algo que debe ocurrir para generar un dato. Soltar un carro y esperar a que cruce una marca son acciones. Medir la masa del carro antes de soltarlo es una medición. Esta distinción ayuda a identificar qué cosas deben suceder al mismo tiempo: soltar el carro e iniciar el cronómetro, por ejemplo.

## Ejemplo del original: fuerza neta sobre un carro con ventilador

{{< figura src="/images/diagramas/cap01_carro-ventilador_pp47.png" width="320" alt="El ventilador impulsa aire hacia la izquierda y el carro acelera hacia la derecha." caption="Carro con ventilador del ejemplo original. Etiquetas en inglés." source="Jeff Bigler, edición octubre de 2025, p. 47. Recorte del original, CC BY-NC-SA 4.0." >}}

Queremos determinar la fuerza neta sobre un carro que parte del reposo y acelera sobre una pista recta. En el ejemplo no tenemos un sensor para medirla directamente. Podemos usar la segunda ley de Newton:

$$F_{\mathrm{net}} = ma$$

La masa se mide con una balanza; la aceleración todavía es desconocida. Si el carro parte del reposo y la aceleración es aproximadamente constante:

$$d = v_0t + \frac12 at^2,\qquad v_0=0$$

$$a = \frac{2d}{t^2}$$

La tabla de diseño queda completa al identificar masa, distancia y tiempo como mediciones accesibles:

| Cantidad buscada | Relación utilizada | Cantidades conocidas | Qué se mide | Qué falta calcular |
|---|---|---|---|---|
| $F_{\mathrm{net}}$ | $F_{\mathrm{net}}=ma$ | — | Masa $m$ | Aceleración $a$ |
| $a$ | $d=v_0t+at^2/2$ | $v_0=0$ | Distancia $d$ y tiempo $t$ | — |

Cada símbolo debe aparecer como cantidad buscada, conocida, medida o calculada. Si queda un símbolo sin clasificar, el diseño todavía está incompleto.

### Variables y acciones

En esta propuesta se repiten ensayos con diferentes masas totales del carro. Se mantiene la distancia entre las marcas, el ajuste del ventilador y la condición de partida desde el reposo.

| Variable | Papel en el experimento | Cómo se obtiene |
|---|---|---|
| Masa total $m$ | Manipulada | Balanza, incluyendo las masas agregadas |
| Distancia $d$ | Controlada y medida | Regla o cinta entre inicio y final |
| Velocidad inicial $v_0$ | Controlada | Soltar desde el reposo, sin empujar |
| Tiempo $t$ | Respondiente | Cronómetro entre liberación y cruce final |
| Ajuste del ventilador | Controlado | Mismo ajuste y condiciones de funcionamiento |

**Aclaración de esta adaptación:** controlar el ventilador no demuestra automáticamente que la fuerza neta sea constante. Hay que considerar rozamiento, variaciones de batería y cualquier cambio de la pista. La ecuación utilizada supone aceleración constante; el experimento debe permitir evaluar esa aproximación.

### Procedimiento derivado del diseño

1. Preparar una pista recta y marcar inicio y final.
2. Medir la separación entre marcas y su incertidumbre.
3. Medir la masa total del carro y su incertidumbre.
4. Colocar el mismo punto del carro en la marca inicial.
5. Mantenerlo en reposo mientras se enciende el ventilador.
6. Soltarlo sin impulso e iniciar el cronómetro simultáneamente.
7. Detener el cronómetro cuando ese mismo punto del carro cruce la marca final.
8. Registrar el tiempo, su incertidumbre y cualquier incidencia.
9. Agregar masa, medir nuevamente la masa total y repetir.

Elegir el frente del carro como referencia evita comparar un inicio medido con una parte y un final medido con otra. El registro debe describir lo que realmente se hizo, incluidas las diferencias respecto del plan.

## Cuántos datos y qué rango

Bigler propone para su curso la regla **8 y 10**: al menos ocho puntos y un rango de la variable manipulada que abarque un factor diez. Es una orientación didáctica, no una garantía de significación estadística. El rango viable depende del equipo y de que el modelo siga siendo válido; no conviene imponer un factor diez si destruye esas condiciones.

{{< nota-adaptacion pagina="45" origen="Interpretación estadística del original" >}}
La significación se evalúa con un modelo y un análisis adecuados. No se demuestra contando puntos, y un umbral del 5 % no significa que haya un 5 % de probabilidad de que la conclusión sea falsa. Además de variar las condiciones, repetir ensayos permite estimar la dispersión.
{{< /nota-adaptacion >}}

## Analizar en el orden inverso

En el ejemplo, calculá primero $a=2d/t^2$ para cada ensayo y después relacioná aceleración y masa. Si la fuerza neta permanece constante:

$$a = F_{\mathrm{net}}\left(\frac1m\right)$$

Graficar $a$ en función de $1/m$ debería producir una recta cuya pendiente tiene unidad de newton y representa $F_{\mathrm{net}}$. Un resultado que no sigue esa relación exige revisar el modelo, los controles y los datos, no cambiar los datos para obtener una recta.

La tabla y la secuencia de acciones también permiten explicar el diseño en una evaluación: indicá qué medir, cuándo medirlo, qué ecuaciones utilizar y cómo el gráfico responde al objetivo. El original propone abreviar estos pasos para sus preguntas AP; la misma lógica sirve para comunicar un experimento escolar.

## Actividades propias — Para pensar

1. Querés saber si un auto de juguete rueda más lejos sobre alfombra o sobre piso liso. ¿Es un experimento cualitativo o cuantitativo? ¿Cuáles son las variables?
2. ¿Por qué es importante tener un control negativo en un experimento?
3. Si solo tenés 3 puntos de datos y todos dan el mismo resultado, ¿podés afirmar con confianza que el resultado es correcto? ¿Por qué?

---

[^tracker]: 🔬 **Nota:** Tracker no forma parte del texto original de Bigler. Es una adaptación propia para trabajar los conceptos en clase con análisis de video. [**Tracker Online**](https://opensourcephysics.github.io/tracker-online/) es una herramienta gratuita desarrollada por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/).

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.