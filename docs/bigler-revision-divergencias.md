# Revisión de divergencias desde el capítulo 1

Inicio: 21/10/2026. Registro interno; no se publica como panel de seguimiento.

## Criterio editorial

- Cada discrepancia detectada se identifica en el contenido como **Nota de adaptación · En revisión**, con la página pertinente cuando corresponde al original.
- Se separan error aritmético o de notación del original, formulación ambigua o modelo limitado, diferencia introducida en la adaptación y problema de presentación web.
- No se modifica el PDF ni se atribuye al autor una pérdida de fidelidad de nuestra síntesis. Las correcciones propuestas conservan atribución y licencia.
- «Ampliada» describe desarrollo de contenido; no equivale a cotejo editorial definitivo. «En revisión» no afirma que el autor haya reconocido una errata.

## Alcance de esta tanda

Primera relectura del capítulo 1, recuperación y rotulado transversal de discrepancias ya localizadas en capítulos 1–6 y comprobación técnica del conjunto de 45 notas (59 páginas con índices). La nueva revisión detallada no está terminada en todos los capítulos: marcar un pasaje conocido no equivale a cotejar de nuevo cada frase y ejercicio. La ampliación de fuerzas se pausa para atender esta revisión.

## Hallazgos y acciones del capítulo 1

| Nota | Pasaje y origen | Acción |
|---|---|---|
| Conocimiento científico | Terminología de error/incertidumbre; formulaciones absolutas en la síntesis | Se distingue error de incertidumbre y se limita el alcance de leyes y revisión de pares. |
| Prácticas científicas | p. 34: texto dice siete prácticas y desarrollo enumera tres grupos | Se conserva la distinción AP/NGSS y se marca en revisión. |
| Diseño de experimentos | p. 45: interpretación de significación y regla 8/10 | Nota en revisión; no se interpreta el umbral como probabilidad de que una conclusión sea falsa. |
| Error e incertidumbre | pp. 58, 62–64: vocabulario, dispersión, media, semirrango | Se mantiene distinción entre s y s/raíz(n); se marca la media 2,9/3,1 de p. 64 como divergencia aritmética. |
| Gráficos | pp. 63, 83, 86–88: R/R², mínimos cuadrados, barras, supuestos | Notas visibles; se corrige el criterio verbal de mínimos cuadrados y se añade v0=0 en la actividad propia de Tracker. |
| Cifras significativas | pp. 74–78: dígitos conservados frente a no redondeados; enteros ambiguos | Se aclara que el último dígito significativo puede cambiar al redondear; convención explícita. |
| Cuaderno | pp. 92–97: correcciones de registro y solapamiento | Se distingue corrección trazable de ocultamiento; se evitan afirmaciones institucionales universales. |
| Informes | p. 100: alude como anterior a un ejemplo distinto | Se conserva como ejemplo independiente y se marca en revisión. |
| Unidades y dimensiones | Complemento propio, sin sección equivalente en cap. 1 | Se corrigen terminología y coherencia de unidades; no se atribuye ese problema al original. |

## Incidencias técnicas del conjunto

- Capítulo 4, nota 5: valores absolutos con barras literales rompían las celdas Markdown. Se usa lvert/rvert y se centra el contenido de sus tablas.
- Mismo defecto en Caída libre y Sistemas de referencia (capítulo 3): fórmulas partidas en celdas. Se sustituyen las barras por comandos LaTeX.
- El control estructural incorpora detección de delimitadores matemáticos sin pareja en celdas. Validar sintaxis de fórmulas aisladas no detectaba este error de segmentación.
- La revisión visual de la nueva tanda sigue pendiente; las comprobaciones antiguas no se heredan como prueba de esta versión.

## Inventario de la nueva revisión

| Capítulo | Nota | Estado de esta nueva pasada | Avisos visibles |
|---|---|---|---|
| cap01 | Cifras significativas | Primera relectura; resolución editorial en revisión | 1 |
| cap01 | ¿Qué es la Física? El conocimiento científico | Primera relectura; resolución editorial en revisión | 1 |
| cap01 | El cuaderno de laboratorio | Primera relectura; resolución editorial en revisión | 1 |
| cap01 | Diseño y realización de experimentos | Primera relectura; resolución editorial en revisión | 1 |
| cap01 | Error e incerteza en las mediciones | Primera relectura; resolución editorial en revisión | 2 |
| cap01 | Gráficos y análisis de datos en laboratorio | Primera relectura; resolución editorial en revisión | 3 |
| cap01 | Informes de laboratorio | Primera relectura; resolución editorial en revisión | 1 |
| cap01 | Prácticas científicas | Primera relectura; resolución editorial en revisión | 1 |
| cap01 | Unidades, dimensiones y medición | Primera relectura; resolución editorial en revisión | 1 |
| cap02 | Resolución simbólica de ecuaciones | Nueva relectura pendiente | 0 |
| cap02 | Resolución sistemática de problemas — Método GUESS | Nueva relectura pendiente | 0 |
| cap02 | El Sistema Internacional de Unidades y Notación Científica | Nueva relectura pendiente | 0 |
| cap02 | Supuestos estándar en Física | Nueva relectura pendiente | 0 |
| cap02 | Trigonometría de ángulo recto | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap02 | Coordenadas polares, cilíndricas y esféricas | Nueva relectura pendiente | 0 |
| cap02 | Grados, radianes y vueltas | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap02 | Leyes de senos y cosenos | Nueva relectura pendiente | 0 |
| cap02 | Multiplicación de vectores | Nueva relectura pendiente | 0 |
| cap02 | Introducción a los vectores | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap03 | Aceleración lineal | Nueva relectura pendiente | 0 |
| cap03 | Caída Libre | Nueva relectura pendiente | 0 |
| cap03 | Diagramas de puntos | Nueva relectura pendiente | 0 |
| cap03 | Gráficos de movimiento | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap03 | Movimiento relativo y velocidades relativas | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap03 | Movimiento Rectilíneo Uniforme (MRU) | Nueva relectura pendiente | 0 |
| cap03 | Movimiento Rectilíneo Uniformemente Variado (MRUV) | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap03 | Sistemas de referencia. Posición, distancia y desplazamiento | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap03 | Rapidez y velocidad | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap04 | Aceleración angular | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap04 | Resumen: cinemática lineal y rotacional | Pasajes conocidos señalados; nueva relectura integral pendiente | 2 |
| cap04 | Movimiento angular — velocidad y posición | Nueva relectura pendiente | 0 |
| cap04 | Movimiento centrípeto | Pasajes conocidos señalados; nueva relectura integral pendiente | 2 |
| cap04 | Tiro Oblicuo (Movimiento Proyectil) | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap05 | Arrastre (Drag) | Nueva relectura pendiente | 0 |
| cap05 | Centro de masa | Nueva relectura pendiente | 0 |
| cap05 | Diagramas de cuerpo libre | Nueva relectura pendiente | 0 |
| cap05 | Fricción | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap05 | Fuerza gravitacional y campos de fuerza | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap05 | Leyes de Newton del movimiento | Nueva relectura pendiente | 0 |
| cap05 | Resortes y Ley de Hooke | Nueva relectura pendiente | 0 |
| cap05 | Segunda Ley de Newton — aplicaciones | Nueva relectura pendiente | 0 |
| cap05 | Tensión y poleas | Pasajes conocidos señalados; nueva relectura integral pendiente | 2 |
| cap05 | Tipos de fuerzas | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap06 | Fuerza aplicada con ángulo | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |
| cap06 | Problemas con plano inclinado | Pasajes conocidos señalados; nueva relectura integral pendiente | 1 |

## Fuentes de contraste metrológico

- VIM3, error de medición: https://jcgm.bipm.org/vim/en/2.16.html
- VIM3, incertidumbre: https://jcgm.bipm.org/vim/en/2.26.html
- NIST, mínimos cuadrados: https://www.itl.nist.gov/div898/handbook/pmd/section4/pmd431.htm

## Comprobaciones de esta tanda

- 40 avisos públicos en 31 notas, todos con estado «En revisión». No se publica un panel global de auditoría.
- Compilación completa de Hugo correcta; 59 páginas y 80 imágenes sin errores estructurales.
- 1 854 expresiones procesadas por KaTeX 0.16.9 sin errores de sintaxis. Las comprobaciones estáticas no certifican la revisión conceptual ni visual.
- Publicación de esta tanda autorizada por el usuario el 21/10/2026; pendiente verificar el despliegue.

## Nuevos pasajes cotejados al revisar matemáticas

- p. 115: gas ideal y colisiones; se conserva la aclaración de modelo.
- p. 121: el factor MKS/cgs depende de las dimensiones; fuerza y energía requieren factores distintos.
- p. 129: se distinguen las ramas de una raíz de la elección física de tiempo positivo.
- p. 156: la comparación de componentes con signo no debe reemplazarse por la de sus módulos.
- p. 157: trasladar una flecha en una suma no autoriza cambiar arbitrariamente una fuerza aplicada sin revisar torque.
- pp. 151 y 171: ejercicio geométrico de golf y relación arco/radio, respectivamente.

## Orden para continuar

Completar el cotejo de fórmulas, ejemplos, figuras y atribuciones del capítulo 1; seguir por matemáticas (2), cinemática (3–4) y fuerzas (5–6). Los capítulos 7–13 solo tienen índices y requieren desarrollo antes de poder comparar una adaptación. Ninguna tanda nueva se publica automáticamente.

## Registro de avisos

| Archivo | Página | Origen cotejado | Estado |
|---|---|---|---|
| cap01-laboratorio/cifras-significativas.md | 76 | Definición verbal y convención del original | En revisión |
| cap01-laboratorio/conocimiento-cientifico.md | 31 | Terminología del original y síntesis de esta adaptación | En revisión |
| cap01-laboratorio/cuaderno-laboratorio.md | 96 | Recomendaciones del original y generalizaciones de esta adaptación | En revisión |
| cap01-laboratorio/diseno-experimentos.md | 45 | Interpretación estadística del original | En revisión |
| cap01-laboratorio/error-incerteza.md | 63 | Texto del original: interpretación estadística | En revisión |
| cap01-laboratorio/error-incerteza.md | 64 | Texto del original: media aritmética | En revisión |
| cap01-laboratorio/error-incerteza.md | 70 | Ejemplo numérico del original: cociente invertido | En revisión |
| cap01-laboratorio/graficos-laboratorio.md | 86 | Método gráfico propuesto por el original | En revisión |
| cap01-laboratorio/graficos-laboratorio.md | 63 | Notación y criterio orientativo del original | En revisión |
| cap01-laboratorio/graficos-laboratorio.md | 83 | Formulación didáctica del original y actividad propia de Tracker | En revisión |
| cap01-laboratorio/informe-laboratorio.md | 100 | Referencia interna del original | En revisión |
| cap01-laboratorio/practicas-cientificas.md | 34 | Texto del original: recuento de prácticas AP | En revisión |
| cap01-laboratorio/unidades-dimensiones.md | No corresponde: material propio | Material complementario propio; no es un error atribuido a Bigler | En revisión |
| cap02-matematicas/cap02-ecuaciones.md | 129 | Despeje del original y notación de la adaptación | En revisión |
| cap02-matematicas/cap02-si-notacion.md | 121 | Generalización del original: factores MKS y cgs | En revisión |
| cap02-matematicas/cap02-supuestos.md | 115 | Formulación abreviada del original: colisiones en un gas ideal | En revisión |
| cap02-matematicas/cap02-trigonometria.md | 151 | Ejercicio del original: geometría y lanzamiento | En revisión |
| cap02-matematicas/grados-radianes-vueltas.md | 171 | Texto del original: arco y radio | En revisión |
| cap02-matematicas/vectores-intro.md | 157 | Alcance físico de la representación vectorial | En revisión |
| cap02-matematicas/vectores-intro.md | 156 | Comparación del original: componente y módulo | En revisión |
| cap03-cinematica-1d/graficos-movimiento.md | 216 | Texto del original: definición de pendiente | En revisión |
| cap03-cinematica-1d/graficos-movimiento.md | 223 | Atribución histórica y tabla del original | En revisión |
| cap03-cinematica-1d/movimiento-relativo.md | 230 | Ejemplos de referencia del original; omisiones identificadas | En revisión |
| cap03-cinematica-1d/mruv.md | 199 | Notación vectorial del original | En revisión |
| cap03-cinematica-1d/sistemas-referencia.md | 183 | Terminología del original: vector posición | En revisión |
| cap03-cinematica-1d/velocidad-rapidez.md | 184 | Figura y texto del original: ángulo | En revisión |
| cap04-cinematica-2d/aceleracion-angular.md | 265 | Respuesta numérica del original | En revisión |
| cap04-cinematica-2d/cinematica-lineal-rotacional.md | 271 | Comentario de la tabla del original | En revisión |
| cap04-cinematica-2d/cinematica-lineal-rotacional.md | 265 | Respuesta numérica del original | En revisión |
| cap04-cinematica-2d/movimiento-centripeto.md | 267 | Definición del original: módulo y dirección | En revisión |
| cap04-cinematica-2d/movimiento-centripeto.md | 268 | Clasificación del movimiento en el original | En revisión |
| cap04-cinematica-2d/tiro-oblicuo.md | 245 | Operación numérica mostrada en el original | En revisión |
| cap05-fuerzas-1d/friccion.md | 338 | Adaptación anterior: pérdida del matiz del original | En revisión |
| cap05-fuerzas-1d/fuerza-gravitacional.md | 299 | Adaptación anterior: generalización del modelo del original | En revisión |
| cap05-fuerzas-1d/leyes-newton.md | 282 | Notación del original: igualdad de módulos y oposición vectorial | En revisión |
| cap05-fuerzas-1d/tension.md | 327 | Caso mixto: ejemplos del original y generalización del resumen | En revisión |
| cap05-fuerzas-1d/tension.md | 329 | Caso mixto: redondeo original y operación de la adaptación | En revisión |
| cap05-fuerzas-1d/tipos-fuerzas.md | 294 | Texto del original: tensión y tercera ley | En revisión |
| cap06-fuerzas-2d/fuerza-con-angulo.md | 361 | Texto del original: independencia de componentes | En revisión |
| cap06-fuerzas-2d/plano-inclinado.md | 372 | Adaptación anterior: generalización del ejemplo de descenso | En revisión |
