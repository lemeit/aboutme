# Seres Térmicos como relato interactivo

Reorganización del 26 de octubre de 2026. Alcance acordado: todo Seres Térmicos y sus accesos desde el portal; no convertir las otras materias o proyectos en este libro.

## Lectura y orden

La portada sigue en `/projects/seres-termicos/`. El prólogo, 23 capítulos y seis anexos forman una secuencia de lectura con índice lateral, capítulo actual y enlaces anterior/siguiente arriba y abajo. En móvil el índice se abre a pedido, sin un selector de actividades.

1. Prólogo literario.
2. Parte I: contacto, calorimetría, primera ley, entropía, Fourier y difusión 1D–3D.
3. Parte II: fuentes, gradientes, Gray–Scott y FitzHugh–Nagumo.
4. Parte III: individuos, anatomía, perspectiva espacial e historia temporal.
5. Parte IV: comparación de V4.1 a V4.6, distinguiendo nuevas hipótesis de cambios de visualización.
6. Anexos: baja temperatura, perfil estacionario, visualización y diagnóstico, guía de 52 ecuaciones, memoria con bibliografía y mapa de versiones.

El orden corresponde a requisitos conceptuales y comparación de modelos, no pretende inventar una cronología de creación. Los identificadores de archivo se conservan. Una nueva representación no se presenta como nueva física.

## Implementación

- Las páginas de lectura tienen `layout = "seres-libro"`, `book_id`, `book_order`, `book_part` y `book_label`.
- `data/seres_book_chapters.json` registra el inventario y el identificador lógico que permite recuperar cada página con `Site.GetPage`. `build.list = never` mantiene los capítulos fuera del listado general de proyectos; por eso no se usa `Site.RegularPages` para construir el índice.
- `data/seres_book.json` define las partes; `layouts/_default/seres-libro.html`, su parcial de navegación y `assets/css/extended/seres-book.css` presentan el relato respetando la paleta existente.
- Las 27 simulaciones se incorporan sin cambiar sus motores. Se elimina el selector de actividades de los ocho capítulos introductorios y se reemplazan los accesos por enlaces de lectura. Los controles físicos propios de cada simulación siguen disponibles.
- `volver-al-libro.js` ofrece acceso al capítulo al abrir una escena directamente; en las escenas integradas se omite ese script para evitar controles de lectura duplicados.
- Se reparan `Q=C\,\Delta T`, `C=m\,c` y `P=G\,(T_A-T_B)`.
- La memoria conserva el documento previo y las referencias. Se aclara allí que la termotaxis no se deduce de Fourier y que un umbral de reproducción no se alcanza en una reserva que solo disminuye desde su valor inicial.

## Rutas conservadas

- `/simus/seres-termicos/` ahora tiene `index.html` y remite a la inicio del relato; antes no existía ese índice y daba 404.
- `/simus/seres-termicos/termodinamica.html` remite a la misma portada para evitar un segundo índice parcial.
- Los HTML individuales permanecen en sus rutas anteriores.
- Las fichas anteriores de ciclo vital, universo y tiempo, y el mapa de denominaciones, remiten al capítulo o anexo correspondiente.
- La guía de ecuaciones conserva `/projects/seres-termicos/guia-fisica/` y sus 52 ecuaciones.
- Las presentaciones inglesa y china remiten al relato en español sin prometer capítulos traducidos.

## Verificación

Compilar Hugo y ejecutar:

```powershell
hugo --minify --destination C:/GitHub/aboutme/work/hugo-seres-libro
python scripts/check-seres-book.py C:/GitHub/aboutme/work/hugo-seres-libro --base 087f7d7
python scripts/check-hugo-content.py C:/GitHub/aboutme/work/hugo-seres-libro
node scripts/check-seres-book-browser.cjs C:/GitHub/aboutme/work/hugo-seres-libro
```

El control del libro verifica páginas, enlaces internos y anclas, inventario completo de simulaciones, redirecciones, conservación de las 52 ecuaciones y equivalencia de los scripts de cálculo respecto de la base. Solo se permite retirar el manejador del selector de navegación antiguo. Los accesos de Quartz se conservan, pero Quartz se compila por separado y no se afirma validarlo mediante Hugo.

La prueba de navegador requiere Playwright y Chrome, y usa un servidor local aislado. Se ejecutó con 31 páginas de lectura, 27 simulaciones y 207 fórmulas renderizadas; sin errores de ejecución. Comprueba anterior/siguiente e índice, ausencia del selector antiguo, apertura del índice móvil, ausencia de desbordamiento horizontal, regreso desde los simuladores y conservación de energía en el contacto de prueba.

La revisión visual cubre portada, capítulo de contacto, escritorio, móvil e índice móvil, y modo oscuro. No sustituye una revisión científica integral de todos los modelos históricos.


## Integración directa de las escenas · octubre de 2026

El relato incorpora las escenas sin `iframe`. El shortcode `sim` usa `layouts/partials/sim-native.html` solo en las páginas con `book_id = "seres-termicos"`. Hugo toma el cuerpo, estilos y scripts de los HTML autónomos, que siguen siendo la fuente única de cada modelo. El adaptador no ejecuta texto mediante `eval` ni descarga otra página en el navegador.

`relato-simulacion.js` monta los controles y gráficos en el mismo documento, dentro de Shadow DOM para aislar estilos e identificadores. Las consultas del motor se limitan a esa escena. Los tamaños de ventana y las coordenadas absolutas de interacción se adaptan al área disponible; las ecuaciones y los algoritmos de los archivos fuente se conservan. La animación deja de solicitar cuadros cuando la escena queda fuera de vista.

Se eliminan de la vista integrada la cabecera, navegación y pie de la página autónoma. «Ampliar simulación» mueve el mismo componente a un diálogo modal, sin volver a crear el modelo ni perder su estado; Escape o «Volver al relato» lo devuelven a su posición. «Abrir por separado» conserva el acceso al HTML autónomo. Las rutas publicadas con `/libro/` se mantienen por compatibilidad, aunque la presentación visible dice «relato».

Validación actualizada: 31 páginas de lectura, 30 instancias integradas de los 27 modelos (tres reaparecen en la memoria histórica), ausencia de iframes, controles de contacto, apertura/cierre del diálogo, vista de 390 px sin desbordamiento horizontal y pruebas físicas incorporadas de los modelos que las exponen. Se mantienen además los controles de las versiones autónomas y del índice.
