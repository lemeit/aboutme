# Revisión de consignas — Introducción a la Física

Revisión editorial del 23 de octubre de 2026. Alcance: las seis unidades de `content/notes/fisica-4to/`, incluidos ejemplos, ejercicios, preguntas conceptuales y experiencia de medición. No modifica la traducción de Bigler ni el mapa Quartz.

## Criterio aplicado

- Formular la pregunta antes de resolver un ejemplo.
- Identificar magnitudes y unidades, referencia, estado inicial e intervalo cuando sean necesarios.
- Explicitar las condiciones que permiten resolver el problema: velocidad o aceleración constantes, fuerzas presentes, ausencia de rozamiento, circuito ideal, aislamiento térmico, etc.
- Distinguir un problema numérico de una comparación simbólica o actividad conceptual. Cuando no se necesita un dato numérico, explicar por qué.
- Hacer corresponder las respuestas orientativas con lo solicitado.
- En actividades experimentales, pedir datos reales y separar las ampliaciones opcionales de los cálculos comunes.

## Cambios por unidad

| Unidad | Revisión |
|---|---|
| 1. Generalidades | Situación propuesta frente a medición real; hipótesis contrastables; alcance del modelo de partícula y verificación dimensional. |
| 2. Cinemática | Referencias y reloj, MRU/MRUV explícitos, consignas de encuentros y frenado, gravedad y signos, altura de llegada, unidades de funciones y comparación de lanzamientos. |
| 3. Dinámica | Preguntas de los ejemplos, fuerzas incluidas, dirección y sentido, condiciones de normal y fricción; diferenciar aceleración de velocidad. |
| 4. Energía | Una guía completa con 32 actividades; integración de apuntes superpuestos; datos, incógnitas y modelos de cada ejemplo y ejercicio. |
| 5. Electricidad | Fuente y resistores ideales, signos de carga y potencial, sentidos de corrientes en el nodo, magnitudes y unidades de ejes y condiciones de inducción. |
| 6. Energía térmica | Condiciones de mezcla y calentamiento, cambio de fase definido, convención de trabajo y calor, ciclo térmico y temperaturas de las fuentes. |

## Organización de Energía

La unidad tiene tres materiales: guía completa, deducciones matemáticas y experiencia. La guía incorpora trabajo, balances y fuentes; las deducciones y la experiencia cumplen funciones complementarias.

Las rutas `trabajo-energia/`, `conservacion/` y `energias-alternativas/` son aliases Hugo hacia `guia-clase/`. Se conserva también el alias histórico desde Bigler. Los PDFs de la guía se regeneran con el flujo existente; los antiguos PDFs de los apuntes integrados no se borran ni se ofrecen en el nuevo índice.

## Verificación

- `hugo --minify`: compilación ejecutada.
- Control estructural existente: 92 páginas de Bigler y 194 referencias a imágenes, sin errores estructurales.
- Enlaces internos y anclas de las 25 páginas actuales de la materia (18 notas y 7 índices), incluidos tres redirects: verificados en el HTML compilado.
- Recalculados 29 resultados numéricos de la guía; los tres restantes son respuestas conceptuales. Cotejadas consignas y respuestas del resto de las unidades mediante lectura editorial.
- Generados los 18 PDFs de la materia con validación de imágenes cargadas y fórmulas renderizadas. Comprobados tamaño A4 y ausencia de páginas de texto vacías; inspección visual de las seis páginas de la guía y diez páginas de muestra de las otras unidades.

La revisión aclara el material existente; no implica una prueba experimental de las actividades ni una ampliación exhaustiva de todos los temas del programa.
