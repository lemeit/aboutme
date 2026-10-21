# Energía — material para estudiantes

21/10/2026. Alcance autorizado: reescribir la guía para alumnos, deducir las ecuaciones, agregar ejercicios y una experiencia que reúna medición, estadística y Tracker. Publicación autorizada expresamente por el usuario.

- `content/notes/fisica-4to/u4-energia/guia-clase.md`: tono dirigido al estudiante, ejemplos resueltos, 28 ejercicios con respuestas; weight 1 en lugar del 10 que la plantilla mostraba literalmente.
- `deducciones-energia.md`: trabajo y segunda ley; cinética con aceleración constante y deducción general; definición de potencial; gravedad uniforme y universal; aproximación mgh; Hooke por integral y área; resorte vertical; conservación y rotación.
- `experiencia-energia-movimiento.md`: medir el tramo con cinta/odómetro; masa y tiempo; resolución e incertidumbre; cronometraje y repeticiones; medias, mediana y dispersión; diferencia entre media de K y K de la media; propuesta nueva de Tracker. No se presenta como experiencia con Tracker ya realizada.
- `static/files/energia-movimiento.xlsx`: plantilla sin mediciones inventadas. Tres hojas: Mediciones (cinco intentos por persona), Video (100 posiciones, diferencias centrales interiores) y Grupo (30 participantes). Las energías se rotulan como estimadas; no se identifican con gasto metabólico ni con energía final obtenida de rapidez media.

Las páginas están dentro de Introducción a la Física. No se modifica el contenido de Bigler ni Quartz. Se mantiene la redirección desde la URL antigua de la guía.

## Verificación

Hugo `--minify` correcto. 326 expresiones KaTeX en modo estricto sin errores; 60 enlaces internos y anclas comprobados, desplegables no vacíos, 20 controles numéricos de la ejercitación. Control estructural de las notas de Bigler existente: sin errores.

Planilla creada con Artifact Tool: recalculada y probada con datos temporales retirados antes de exportar; comprobados cálculos individuales, medias, comparación de grupo, diferencias centrales y tiempos inválidos. Inspección visual de las tres hojas y del bloque estadístico. XLSX exportado con fórmulas y tres hojas; no se ha validado en una sesión nativa de Excel. Revisión visual exhaustiva del sitio en escritorio y móvil pendiente.

Ayuda oficial consultada para Tracker: https://opensourcephysics.github.io/tracker-website/help/gettingstarted.html y https://opensourcephysics.github.io/tracker-website/help/stick.html. La actividad enlaza también la guía existente del portal.
