+++
title = 'Experiencia: medir el movimiento y estimar la energía'
date = '2026-10-21'
weight = 3
draft = false
math = true
description = 'Medición con cinta u odómetro, carrera, cronometraje, estadística y análisis de video con Tracker.'
+++

¿Podés estimar tu energía cinética al correr? Vas a medir masa, distancia y tiempo, comparar intentos y analizar qué información aporta un video. La actividad retoma la unidad de **mediciones**: elegir instrumentos, registrar unidades y resolución, estimar incertidumbres y distinguir datos de resultados calculados.

Usá la [guía de estudio](../guia-clase/) y las [deducciones de las ecuaciones](../deducciones-energia/) para interpretar tus resultados.

[**Descargar la planilla de mediciones y video (Excel)**](/files/energia-movimiento.xlsx)

La hoja **Mediciones** sirve para hasta cinco intentos de una misma persona; completá masa, distancia y tiempos. Los márgenes son opcionales para calcular la estimación de incertidumbre. **Video** recibe posiciones exportadas de Tracker y usa la masa de Mediciones. **Grupo** reúne hasta 30 participantes: copiá como valores el código, la masa y una rapidez representativa, indicando cómo la elegiste. Podés registrar aparte la media de las energías de sus intentos para compararla con la energía de esa rapidez representativa. Las celdas amarillas se completan; las de cálculo conservan fórmulas.

## 1. Pregunta e hipótesis

Antes de medir, escribí qué esperás que ocurra:

- Para una misma persona, ¿qué efecto tendrá correr más rápido sobre la energía de traslación?
- ¿La persona más rápida será necesariamente la que tenga mayor energía cinética?
- Si repetís el recorrido, ¿obtendrás exactamente el mismo tiempo?
- ¿La energía calculada con distancia y tiempo será la del instante final?

Las hipótesis se contrastan con datos. No cambies una medición para que coincida con tu predicción.

## 2. Instrumentos y preparación del tramo

Necesitás cinta métrica u odómetro de rueda, balanza, cronómetro, marcas para el piso y una planilla. Para la segunda parte, un celular con cámara fija y Tracker.

1. Elegí con el grupo un tramo recto y despejado, con espacio para entrar y detenerse fuera del sector medido. Podés realizarlo caminando o con un carrito si esa modalidad resulta más adecuada.
2. **Medí el recorrido antes de correr.** Marcá inicio y final: la distancia nominal elegida no reemplaza su medición.
3. Con cinta, mantenela alineada y evitá tramos flojos. Si necesitás recolocarla, marcá los extremos de cada segmento y sumá las longitudes; anotá cuántas colocaciones hiciste.
4. Con odómetro, verificá el cero, recorré la misma línea y evitá que la rueda patine o salte. Contrastá su lectura sobre una longitud medida con cinta: esa comprobación no equivale por sí sola a una calibración certificada.
5. Medí nuevamente el tramo en sentido contrario o con otra persona. Registrá ambas lecturas antes de decidir una estimación de distancia.
6. Medí la masa con la balanza, en kg. Si el instrumento indica fuerza en N, no interpretes esa lectura como masa sin convertirla mediante un modelo.

Registrá instrumento, unidad, menor división o incremento de lectura, procedimiento y posibles dificultades. La resolución **no es automáticamente toda la incertidumbre**: también importan alineación, recolocación de cinta, estado del piso y reacción al cronometrar.

| Magnitud | Instrumento | Lecturas originales | Resolución | Estimación adoptada y motivo |
|:---:|:---:|:---:|:---:|:---|
| Distancia | Cinta u odómetro | Completar | Completar | Completar |
| Masa | Balanza | Completar | Completar | Completar |
| Tiempo | Cronómetro o video | Completar | Completar | Completar |

Si estimás, por ejemplo, $d=(20{,}0\pm0{,}1)\,\mathrm m$, explicá cómo obtuviste ese margen. Es solo un ejemplo de escritura; no es una medición de tu recorrido.

## 3. Elegir qué movimiento vas a estudiar

### Tramo con rapidez aproximadamente constante

Entrá al sector medido después de haber comenzado a moverte. Cronometrá desde que una referencia acordada del cuerpo cruza el inicio hasta que cruza el final. Usá el mismo criterio en todos los intentos.

$$\overline v_{\mathrm{rapidez}}=\frac{d}{\Delta t}.$$

Para una trayectoria recta sin cambio de sentido, su valor coincide con el módulo de la velocidad media. Si la rapidez varió poco, estimamos:

$$K_{\mathrm{est}}=\frac12m\left(\frac d{\Delta t}\right)^2.$$

Es energía de traslación estimada a partir de la rapidez media del tramo, no gasto metabólico ni energía total de todos los movimientos del cuerpo.

### Carrera desde el reposo

Si arrancás parado y acelerás, $d/\Delta t$ sigue siendo rapidez media, pero **no es la rapidez final**. Solamente si justificás aceleración constante desde reposo:

$$d=\frac12a(\Delta t)^2,\quad v_f=a\Delta t\quad\Rightarrow\quad v_f=\frac{2d}{\Delta t}.$$

En ese modelo $K_f=\frac12m(2d/\Delta t)^2=4K_{\mathrm{est}}$. No multipliques automáticamente por cuatro las carreras reales: una persona no suele mantener aceleración constante durante todo el recorrido. El video permitirá evaluar esa hipótesis.

## 4. Repeticiones y registro

Realizá al menos tres intentos comparables, sin buscar necesariamente la máxima rapidez. Alterná funciones: medir, cronometrar, registrar y analizar. Anotá si cambió el recorrido, el modo de salida o el criterio de cronometraje.

Usá un código de participante en las tablas compartidas. Conservá los registros de masa y video según las pautas de la clase; no hace falta publicar datos personales para presentar el análisis.

| Intento | Tiempo, s | Rapidez media, m/s | $K_{\mathrm{est}}$, J | Observaciones |
|:---:|:---:|:---:|:---:|:---|
| 1 | Medir | Calcular | Calcular | Registrar |
| 2 | Medir | Calcular | Calcular | Registrar |
| 3 | Medir | Calcular | Calcular | Registrar |

No borres un dato porque sea distinto: primero revisá qué ocurrió. Si excluís un intento por un motivo concreto, conservá la lectura original y explicá la decisión en el informe.

### Ejemplo de cálculo, no dato experimental

Para $m=60\,\mathrm{kg}$, $d=20\,\mathrm m$ y $\Delta t=5\,\mathrm s$:

$$\overline v=4\,\mathrm{m/s},\qquad K_{\mathrm{est}}=480\,\mathrm J.$$

Esto no demuestra que la rapidez final fuera $4\,\mathrm{m/s}$ ni que se hayan consumido solo $480\,\mathrm J$ de energía química.

## 5. Promedios, mediana y dispersión

Para $n$ repeticiones de una misma persona en condiciones comparables:

$$\overline v=\frac1n\sum_{j=1}^n v_j,\qquad\overline K=\frac1n\sum_{j=1}^n K_j.$$

La **mediana** es el valor central al ordenar las observaciones; si la cantidad es par, se promedian los dos centrales. Comparala con la media para analizar valores alejados.

La desviación estándar muestral de las rapideces es:

$$s_v=\sqrt{\frac{\sum_{j=1}^n(v_j-\overline v)^2}{n-1}}.$$

Se expresa en m/s y describe dispersión entre repeticiones. No mide solamente el error del instrumento: puede incluir variación real del movimiento. Con pocos intentos su estimación es limitada.

Si $\overline v>0$, el coeficiente de variación es $CV=100s_v/\overline v$ en porcentaje. No lo uses para convertir la experiencia en una clasificación deportiva: el objetivo es analizar mediciones y modelos.

### Promediar antes o después del cuadrado

Para una misma masa:

$$\overline K=\frac12m\,\overline{v^2},\qquad K(\overline v)=\frac12m\overline v^{\,2}.$$

No son iguales en general. Expandiendo $(v_j-\overline v)^2$ y sumando:

$$\overline{v^2}-\overline v^{\,2}=\frac1n\sum_{j=1}^n(v_j-\overline v)^2=\frac{n-1}{n}s_v^2.$$

Por tanto:

$$\overline K-K(\overline v)=\frac12m\frac{n-1}{n}s_v^2\ge0.$$

En la planilla vas a comparar ambos resultados. Tampoco coincide necesariamente $d/\overline t$ con la media de los cocientes $d/t_j$. Para rapidez media del conjunto de recorridos se divide la **distancia total por el tiempo total**, lo que pondera por duración.

Si comparás participantes distintos, no reemplaces sus masas por una masa media para calcular todas las energías. Calculá primero cada $K_j$ con su masa y explicá qué conjunto estás promediando.

## 6. Incertidumbres y cifras

Para márgenes pequeños y una estimación conservadora por suma de contribuciones:

$$\frac{\delta v}{v}\approx\frac{\delta d}{d}+\frac{\delta t}{t},$$

$$\frac{\delta K}{K}\approx\frac{\delta m}{m}+2\frac{\delta d}{d}+2\frac{\delta t}{t}.$$

Se obtienen de $v=d/t$ y $K=md^2/(2t^2)$ mediante variaciones relativas de primer orden. No son una fórmula universal de incertidumbre estadística: para incertidumbres estándar independientes se combinan contribuciones en cuadratura.

La sensibilidad al tiempo es importante porque aparece al cuadrado. Que el cronómetro muestre centésimas no significa que una reacción manual tenga esa misma precisión. Una estimación instrumental común no desaparece al repetir intentos: promediar no corrige por sí solo un sesgo de distancia.

No informes muchos decimales solamente porque la calculadora los muestra. Conservá precisión interna y justificá el redondeo final con las incertidumbres.

## 7. Actividad nueva con Tracker

Esta segunda parte propone incorporar análisis de video al registro con cronómetro. Antes de comenzar, consultá la [guía de Tracker del sitio](/notes/herramientas/tracker/).

### Filmación y escala

1. Filmá un tramo corto que permita distinguir posiciones. Mantené la cámara fija, de costado, con el eje óptico aproximadamente perpendicular al plano del movimiento. No sigas al corredor girando el celular.
2. Colocá una referencia de longitud medida **en el mismo plano del movimiento**. Una regla cerca de la cámara no calibra correctamente a una persona situada mucho más lejos.
3. Conservá el intervalo temporal real. Si usás cámara lenta, verificá la relación entre cuadros grabados y reproducción antes de calcular velocidades.
4. Elegí un punto corporal visible y repetible, por ejemplo una marca a la altura de la cintura. Su seguimiento aproxima el movimiento global, pero no mide exactamente el centro de masa del cuerpo durante la zancada.

### Trabajo en el programa

1. Abrí el video y seleccioná un intervalo útil.
2. Usá la vara de calibración para asignar la longitud medida. Definí origen y ejes, con $x$ en la dirección del recorrido.
3. Creá un punto de masa, ingresá la masa en kg y marcá la misma referencia en los cuadros del intervalo. Revisá marcas que salten a otro punto.
4. Observá $x(t)$ y las componentes de velocidad. Un tramo de $x(t)$ aproximadamente recto es compatible con velocidad aproximadamente constante; una curva puede indicar aceleración o problemas de medición.
5. Exportá $t$, $x$ e $y$ en s y m a la hoja **Video** de la planilla. También podés usar las velocidades calculadas por Tracker para compararlas con las de esa hoja; no reemplaces los datos originales de posición.

La calibración y el seguimiento se describen en la [ayuda oficial de inicio](https://opensourcephysics.github.io/tracker-website/help/gettingstarted.html) y en la [ayuda de la vara de calibración](https://opensourcephysics.github.io/tracker-website/help/stick.html).

### De posición a velocidad y energía

Con muestras interiores de tiempo creciente, la planilla aproxima:

$$v_x(t_i)\approx\frac{x_{i+1}-x_{i-1}}{t_{i+1}-t_{i-1}},\qquad v_y(t_i)\approx\frac{y_{i+1}-y_{i-1}}{t_{i+1}-t_{i-1}}.$$

Para cuadros uniformemente espaciados, es una diferencia central que estima la derivada en $t_i$. Para intervalos irregulares, el cociente es una pendiente entre extremos y pierde esa propiedad de centrado preciso: revisá el muestreo.

$$v_i=\sqrt{v_{x,i}^2+v_{y,i}^2},\qquad K_i=\frac12mv_i^2.$$

Los extremos quedan sin derivada en esta plantilla. Tracker puede usar otros algoritmos o suavizados: no esperes igualdad exacta punto por punto. Las pequeñas fluctuaciones de posición se amplifican al derivar; no atribuyas cada oscilación de $K$ a una fuerza real.

Para una carrera predominantemente horizontal, podés comparar también $K_x=mv_x^2/2$. En cualquier caso, una sola marca corporal no incorpora el movimiento de todas las partes: hablá de una **estimación de energía de traslación**.

### Comparación entre métodos

Construí gráficos de posición–tiempo, rapidez–tiempo y energía–tiempo. Identificá un mismo intervalo y compará:

- $d/\Delta t$ del cronómetro con el cociente de distancias y tiempos del video.
- $K_{\mathrm{est}}$ con los valores de $K(t)$ del tramo, sin equiparar automáticamente promedio de energías con energía de la rapidez media.
- Las repeticiones del marcado de un mismo video con las repeticiones de carreras distintas: las primeras exploran el procedimiento de análisis; las segundas incluyen cambios reales entre movimientos.

No calcules la potencia metabólica de una persona dividiendo esta energía estimada por el tiempo. Como extensión, $\Delta K/\Delta t$ es la tasa media de cambio de la energía de traslación considerada, no la potencia química total del cuerpo.

## 8. Alternativa con carrito o bolita

Un carrito sobre un tramo horizontal facilita aproximar el objeto por una partícula. Una bolita que rueda permite estudiar además la rotación. Medí su masa, calibrá el video y liberala desde una rampa baja con recepción al final.

Para una esfera maciza uniforme que rueda sin deslizar, sin pérdidas apreciables:

$$mgh=\frac12mv^2+\frac12I\omega^2,\quad I=\frac25mR^2,\quad\omega=\frac vR,$$

$$mgh=\frac7{10}mv^2\quad\Rightarrow\quad v=\sqrt{\frac{10gh}7}.$$

La energía de traslación sola no tiene por qué igualar $mgh$. Si el modelo no coincide con el video, revisá altura del centro de masa, deslizamiento, calibración y posibles pérdidas antes de sacar conclusiones.

## 9. Entrega y discusión

Presentá pregunta, hipótesis, instrumentos, mediciones originales, cálculos, gráficos y conclusiones. Incluí unidades, criterio de incertidumbre, condiciones del movimiento y limitaciones del modelo.

Respondé:

1. ¿Qué aprendiste al medir el tramo con dos procedimientos?
2. ¿Qué aporte a la incertidumbre fue más importante y por qué?
3. ¿Cuál es la diferencia entre media y mediana de tus intentos?
4. ¿Por qué $\overline K$ y $K(\overline v)$ pueden diferir?
5. ¿Qué evidencia del video permite aceptar o rechazar rapidez aproximadamente constante?
6. ¿Se puede deducir el gasto alimentario a partir de esta experiencia? Explicá los límites del modelo.

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).