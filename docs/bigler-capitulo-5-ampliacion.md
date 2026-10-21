# Capítulo 5 — ampliación y cotejo del 21/10/2026

Estado: tanda local, sin publicar. La autorización de publicación de las notas de adaptación anteriores no se interpreta como publicación automática de este desarrollo nuevo.

## Cobertura

Newton ya estaba ampliada. Esta tanda desarrolla las otras nueve secciones de pp. 286–357 y consulta también las pp. 275–279 como índice y marco del capítulo. Los diez temas del índice de p. 275 tienen ahora notas ampliadas; esto no es una traducción literal de todos los márgenes ni una certificación editorial final.

| Nota | Fuente | Fórmulas | Imágenes en la página | Avisos en revisión |
|---|---|---|---|---|
| Leyes de Newton del movimiento | Desarrollo cotejado: pp. 280–285 | 10 | 1 | 1 |
| Centro de masa | Desarrollo cotejado: pp. 286–290 | 10 | 4 | 1 |
| Tipos de fuerzas | Desarrollo cotejado: pp. 291–298 | 18 | 2 | 3 |
| Fuerza gravitacional y campos de fuerza | Desarrollo cotejado: pp. 299–304 | 20 | 2 | 2 |
| Diagramas de cuerpo libre | Desarrollo cotejado: pp. 305–312 | 9 | 4 | 2 |
| Segunda Ley de Newton — aplicaciones | Desarrollo cotejado: pp. 313–323 | 20 | 2 | 1 |
| Tensión y poleas | Desarrollo cotejado: pp. 324–336 | 32 | 8 | 3 |
| Fricción | Desarrollo cotejado: pp. 337–347 | 23 | 3 | 1 |
| Resortes y Ley de Hooke | Desarrollo cotejado: pp. 348–353 | 31 | 6 | 4 |
| Arrastre (Drag) | Desarrollo cotejado: pp. 354–357 | 22 | 3 | 3 |

## Figuras

33 figuras nuevas se extrajeron de los bitmaps del PDF, conservando etiquetas y resolución nativa. Se registraron sus cajas y nombres de recursos para repetir la extracción con el script existente. El SHA-256 del PDF coincide con el manifiesto previo. Se inspeccionaron las dos hojas de contacto y la imagen del ejercicio de poleas de p. 333. Se evitó usar la ilustración decorativa con marca de agua de p. 314: se recuperó su diagrama de fuerzas independiente.

El capítulo usa 35 imágenes distintas: 33 nuevas y 2 ya existentes (Newton p. 281 y la comparación de diagramas de p. 307). No se afirma que se hayan reproducido todas las ilustraciones de cada ejercicio: los casos de pp. 310–312 se reconstruyen en una tabla de fuerzas y condiciones.

## Observaciones de adaptación

- Centro de masa, p. 286: no se conserva sin límites la equivalencia de cualquier fuerza con una masa puntual.
- Tipos de fuerzas, pp. 292–296: se distingue aceleración de velocidad, pares de tercera ley y movimiento relativo de superficies o fluidos.
- Gravitación, p. 299: se separa el modelo newtoniano de la explicación microscópica no adoptada como hecho; se conserva la precisión sobre simetría esférica.
- Peso aparente, pp. 303–304: no se presenta normal como resultante ni se reproducen umbrales médicos como universales.
- Diagramas, p. 309: las componentes del dibujo dan T1<T2; la respuesta D del original suma módulos como si fueran verticales.
- Segunda ley, p. 315: se verificó visualmente la tabla con 5 kg frente al enunciado y operación con 75 kg. Se usa 75 kg.
- Tensión, pp. 324–336: se distinguen ramales de ruedas, coordenadas a lo largo de la cuerda de suma vectorial espacial, y lectura de tensión de resultante. Atwood mantiene sus ejes válidos y calcula sin redondeo prematuro.
- Fricción, pp. 337–347: se conserva casi siempre, se verifica desigualdad estática y equilibrio límite, y se limita el cálculo de frenado al deslizamiento del modelo.
- Resortes, pp. 348–353: longitud natural frente a equilibrio cargado; serie como suma de recíprocos; propagación de cambios de tensión en Slinky; YA/L limitado a barra axial. La inconsistencia algebraica de p. 351 se comprobó también en la página renderizada.
- Arrastre, pp. 354–357: signo de la fuerza, área frontal y dependencia de CD del régimen; se señalan generalizaciones sobre Reynolds, viscosidad y forma de gotas. Se identifica velocidad terminal como desarrollo adicional y se retira la comparación no medida de masas del resumen anterior.

Cada observación se muestra como «Nota de adaptación · En revisión» cuando corresponde; el seguimiento detallado queda interno.

## Validación

- Hugo --minify: correcto.
- Control estructural: 59 páginas, 110 referencias de imágenes, sin errores.
- Capítulo 5: 195 expresiones procesadas con KaTeX 0.16.9 sin errores.
- Referencias de imágenes y enlaces internos de las diez notas comprobados; las 33 figuras nuevas se usan.
- Siete controles numéricos de resultados representativos correctos.
- Pendiente: revisión visual de escritorio y móvil; no se considera sustituida por las comprobaciones anteriores.
- Quartz, seguridad, integración y healthcheck fuera de alcance en esta tanda.

## Fuentes de contraste

- CERN: https://home.web.cern.ch/science/physics/extra-dimensions-gravitons-and-tiny-black-holes
- NASA, forma de gotas: https://svs.gsfc.nasa.gov/vis/a010000/a011200/a011288/script_17936_00.html
- NASA, arrastre: https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/factors-that-affect-drag/
- NASA, esfera y Reynolds: https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/
