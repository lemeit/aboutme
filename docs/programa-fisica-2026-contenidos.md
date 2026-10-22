# Introducción a la Física — correspondencia con el programa 2026

Fuente consultada con Google Drive el 21/10/2026: [programa y planificación anual del usuario](https://docs.google.com/document/d/1CSiEPSuOA2zY14uRteScM8nIV54i-5sV/edit). El documento fuente no se modifica. El orden corresponde a su programa temático; no se publican como cronograma vigente las fechas previstas ni los enlaces de Classroom que aparecen como marcadores en el documento.

| Unidad del programa | Implementación en Hugo | Cobertura |
|---|---|---|
| 1. Presentaciones y generalidades | `u1-generalidades/`, 2 notas | Diagnóstico, ciencia, observación, hipótesis, ley, teoría, modelo, variables, gráficos, SI, conversiones, notación científica y herramientas digitales |
| 2. Cinemática | `u2-cinematica/`, 5 notas | Mediciones, SI, vectores, referencias, trayectorias, MRU, encuentros, MRUV, gravedad, caída libre, tiro vertical/oblicuo, gráficos y Tracker |
| 3. Dinámica | `u3-dinamica/`, 2 notas | Tres leyes de Newton, masa/peso, resultante, DCL, plano inclinado y contraste de fuerzas con aceleración |
| 4. Energía de un sistema | `u4-energia/`, 6 notas | Guía, deducciones y experiencia existentes; desarrollo de trabajo/potencia, conservación, formas/fuentes, fósiles, alternativas y eficiencia |
| 5. Energía eléctrica | `u5-electricidad/`, 3 notas | Circuitos, corriente, tensión, resistencias, Ohm, potencia/consumo, electromagnetismo, generación, transporte y distribución |
| 6. Energía térmica | `u6-energia-termica/`, 3 notas | Escalas, calorimetría, energía interna, principios, procesos, reversibilidad y entropía con lectura estadística |

Total: 21 notas. Las tres notas desarrolladas previamente de energía se conservan. Las secciones con `draft=true` y cuerpo vacío se desarrollan y habilitan; no se ocultan enlaces existentes ni se cambian sus rutas.

## Dos niveles de deducción

Se separa recorrido intuitivo/algebraico/gráfico de profundización analítica. Las demostraciones explicitan hipótesis y condiciones iniciales. El cálculo es ampliación y no se presenta como un requisito impuesto por el programa.

No se presentan Newton, Hooke, Ohm o Faraday como leyes universales derivables por álgebra. Se distinguen definición, ley empírica, hipótesis de modelo y consecuencia matemática. En particular se limita $F=ma$ a masa constante, $V=RI$ al régimen óhmico apropiado, $Q=mc\Delta T$ a condiciones y capacidad constante, y $pV^\gamma$ al gas ideal adiabático reversible con capacidades constantes.

El programa ubica cinemática en la unidad 2 y no incluye movimiento circular dentro de ese bloque. Los temas de rotación previamente incluidos en energía permanecen como profundización; no se agrega un requisito curricular nuevo en cinemática.

## Gráficos y actividades

Seis SVG propios: MRU, MRUV, tiro oblicuo, Ohm, escalas y áreas de trabajo. Generados con Matplotlib; script `scripts/generate-fisica-4to-figures.py`. Curvas calculadas e identificadas como modelos ilustrativos, no mediciones. Se inspeccionaron las previsualizaciones.

Las prácticas se enlazan con la experiencia y la planilla existentes. La fuerza inferida como ma desde Tracker no se presenta como medición independiente que verifique la misma ley. Las carreras no se tratan automáticamente como sistemas de energía mecánica constante.

## Verificación

Hugo --minify correcto; 6 unidades en orden 1–6, 21 notas sin borradores vacíos; 1048 expresiones KaTeX estrictas sin errores; 202 enlaces internos y anclas; 6 gráficos; 38 controles numéricos representativos. Control estructural existente de Bigler sin errores. Revisión visual exhaustiva del portal en escritorio/móvil y revisión pedagógica final pendientes.

La publicación está autorizada por el usuario junto con la armonización previa de créditos (commit `ae26185`). Los materiales nuevos conservan «Prof. Lamaita». Quartz no se modifica.
