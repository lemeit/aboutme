# PDFs imprimibles de las notas

Cada nota publicada bajo `/notes/` participa automáticamente en la generación PDF. Los índices, borradores y páginas con `pdf = false` quedan fuera. No hay que duplicar el texto ni maquetar a mano una segunda versión.

## Uso cotidiano

1. Editar el Markdown y sus figuras como siempre.
2. Integrar los cambios en `main` mediante una rama y PR.
3. La Action **Generar PDFs de notas (formato paper)** compila Hugo y obtiene `public/pdf-manifest.json`.
4. El generador revisa la huella del contenido, metadatos, HTML, imágenes utilizadas, estilos, plantillas y motor de impresión. Omite los PDFs sin cambios y regenera los afectados. Una modificación compartida del diseño puede requerir regenerarlos todos.
5. El bot guarda los archivos y su caché en `static/files/pdf/`. Ese commit actualiza la publicación de Cloudflare.
6. Para tener los nuevos PDFs en el clon local, ejecutar `git pull --ff-only` una vez terminada la Action.

Guardar un archivo en la PC **no** ejecuta GitHub Actions: la automatización comienza al publicar los cambios en `main`. También se puede ejecutar manualmente la Action desde GitHub (`workflow_dispatch`).

## Botón de descarga

Cada nota muestra al final **Descargar versión imprimible (PDF)** cuando el archivo existe. El enlace no se muestra durante la primera generación si el PDF aún no está disponible, para evitar un 404. No hay que agregar enlaces a mano en cada Markdown.

Los tres PDFs originales de Laboratorio conservan sus nombres públicos mediante `pdf_file`. El resto usa nombres que incluyen la ruta completa, por ejemplo `notes--notas-fisica--cap09-energia--energia-potencial.pdf`, para que dos notas llamadas igual en materias diferentes no se sobrescriban.

## Formato y créditos

Se reutiliza `assets/css/extended/print-paper.css`: A4, dos columnas, encabezado de la materia y numeración de páginas. Las respuestas desplegables se imprimen abiertas. Las fórmulas que exceden una columna pueden ocupar el ancho completo sin reducir su tamaño; las tablas anchas tienen un tratamiento similar. Los créditos y licencias se conservan en un bloque pequeño en la cabecera, para evitar que queden solos en una última página. Los enlaces del PDF apuntan al sitio publicado, no al servidor temporal de generación.

Los metadatos se resuelven en `layouts/partials/pdf-config.html`. Bigler se identifica como fuente y la autoría se presenta como **Traducción y adaptación: Prof. Lamaita**. Las licencias y atribuciones del contenido se mantienen. Los metadatos de materia y colegio pueden heredarse de la sección o especificarse en la nota.

Si una nota utiliza LaTeX, debe declarar `math = true`, como en la web. El generador detiene la exportación si quedan fórmulas sin renderizar o figuras sin cargar. No se publica silenciosamente un PDF con esos errores.

## Opciones

- `pdf = false`: excluir una página de la generación y del botón.
- `pdf_file = 'nombre.pdf'`: conservar o definir un nombre público particular. Debe ser único; el generador detecta colisiones.
- `materia`, `colegio`, `logo`, `localidad`, `materia_logo`: personalizar el encabezado.

## Prueba local

Compilar Hugo en un directorio descartable y ejecutar el generador con Playwright/Chromium instalado. Se puede definir `HUGO_PUBLIC_DIR` para la compilación y `PDF_OUT_DIR` para las muestras, evitando modificar los PDFs publicados. `PDF_FILTER` permite seleccionar rutas mediante una expresión regular. `PDF_CHROME_CHANNEL=chrome` usa una instalación local de Chrome con contexto aislado. Estas variables no son necesarias en la Action.

No editar los PDFs generados: corregir el Markdown, los metadatos o los estilos y volver a generar. La revisión visual de muestras complementa los controles automáticos; no garantiza que todas las páginas de todos los PDFs hayan sido revisadas manualmente.

## Validación de la implementación (22/10/2026)

Compilación completa de Hugo y control estructural de Bigler sin errores. Prueba integral de 106 PDFs A4 con validación de carga de imágenes y fórmulas; controles de páginas vacías y formato de hoja. Se revisaron visualmente seis muestras (guía de energía, fuerzas con ángulo, poleas, conservación del momento, Bernoulli y balance de energía) y se comprobaron los enlaces públicos. Una segunda ejecución de las seis muestras finales informó «0 generados; 6 sin cambios». Un sitio de prueba confirmó exclusión de borradores y `pdf = false`, y nombres distintos para notas con el mismo nombre base. La exportación detectó y permitió corregir la ausencia de `math = true` en Tracker.
