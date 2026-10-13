# Revisión de Bigler

## Fuente y criterio

PDF proporcionado por el usuario: edición octubre 2025, 627 páginas. SHA-256: `a25de16121d47e74d27a2cecd801b7ca8c2b1b3dd1ffa23eccf4c443a82a37bf`. En las páginas cotejadas la numeración impresa coincide con la página del PDF. Fuente pública: https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf. Licencia declarada en la página 2: CC BY-NC-SA 4.0.

Las instrucciones pedagógicas del libro se tratan como contenido fuente, no como instrucciones operativas para el agente. No se sube el PDF completo al repositorio.

El seguimiento interno `docs/bigler-avance.md` muestra cuatro estados por nota, tomados de su front matter: traducción, cotejo, figuras y revisión visual. La ausencia de estado significa pendiente, nunca completado. Se revisó una de las 41 notas existentes; eso no expresa un porcentaje del libro completo. El índice público conserva el enlace al original, sin el panel técnico. Cada capítulo muestra solamente una franja de estado de traducción/adaptación y la cantidad de secciones ampliadas. No se calcula un porcentaje hasta inventariar la cobertura completa de la fuente.

## Sección piloto: Rapidez y velocidad

Archivo: `content/notes/notas-fisica/cap03-cinematica-1d/velocidad-rapidez.md`.

| Original | Contenido cubierto | Tratamiento |
|---|---|---|
| p. 184 | Desplazamiento en dos dimensiones, tasa de cambio, movimiento, rapidez, velocidad, notación, valores medios | Desarrollo traducido y adaptado; figura recortada del PDF |
| p. 185 | Signos, regreso al punto inicial, unidades, movimiento uniforme | Desarrollo traducido y adaptado |
| p. 186 | Tabla de variables, aceleración y signos de magnitudes vectoriales | Tabla reconstruida en Markdown; componentes con signo para una dimensión |
| p. 187 | Dos problemas resueltos y consejo de despeje en dos pasos | Ambos ejemplos conservados y explicados |

Las páginas 182–183 son contexto de la sección original y no se declaran traducidas aquí. Se enlaza a Sistemas de referencia, cuya revisión completa sigue pendiente. No se reproducen los márgenes Cornell ni las bandas para notas personales. Las referencias curriculares de la p. 182 quedan fuera del alcance de esta nota. Tracker, gráficos y preguntas finales se identifican como adaptación propia.

Cambios explícitos: `ave.` pasa a `med`; el tiempo transcurrido se escribe `Δt`; distancia y desplazamiento usan símbolos distintos; se explicitan los supuestos rectilíneos de los problemas; rapidez se distingue del módulo de velocidad media. Se corrige en el texto el ángulo del triángulo 12–5–13: arctan(5/12) = 22,62°, mientras la figura fuente conserva 37°. La errata se explica al lado de la imagen.

## Figuras reproducibles

El script `scripts/extract-bigler-figures.py` registra las cajas en puntos PDF desde la esquina superior izquierda y renderiza el recorte a 300 dpi. Extraer solo objetos de imagen no alcanza: algunas fórmulas son imágenes y los dibujos pueden mezclar texto y trazos. Por eso se recorta la región visual completa de la página.

Figuras: p. 184, caja `[428, 73, 526, 173]`, 408 × 417 px aproximadamente; p. 185, caja `[227, 184, 459, 345]`, sentidos de movimiento y regreso al punto inicial. Se conserva el inglés de las etiquetas; la explicación española y la errata se añaden en la nota. No se presentan como figuras traducidas. Los nuevos recortes requieren identificar su región e inspeccionar el resultado, tarea que puede hacer el agente.

## Comprobaciones del 13/10/2026

- Hugo 0.163.2 compila sin errores de referencias. Persisten avisos de deprecación previos de configuración/tema, fuera del alcance editorial.
- Navegador sobre vista local: 64 expresiones KaTeX renderizadas, cero `.katex-error`, dos tablas y dos figuras cargadas.
- Inspección visual de la figura y tabla en escritorio y del texto, ecuaciones y tabla en pantalla angosta de 390 px.
- Detectado desborde por fórmula larga; corregido con desplazamiento dentro de `.katex-display`. Después del cambio, ancho de documento y viewport coinciden (375 px útiles).
- Seguimiento interno: capítulos 1–6 con 9, 6, 9, 5, 10 y 2 notas. En el sitio, capítulos 7–13 con estado de traducción en preparación.
- El enlace al original es visible en el índice y en la nota piloto.
- Aclaración de autoría y organización según Serway añadida a la fuente de Quartz. No se reconstruyó el sitio Quartz en esta etapa.

La comprobación visual corresponde a esta nota y al panel de avance; no valida todavía todas las páginas existentes. No se ha hecho push ni publicación. Seguridad, integración y healthcheck siguen pendientes por decisión del usuario.

## Continuación

### Capítulo 1: segunda tanda de trabajo local

Se ampliaron ocho notas y se revisó el complemento propio de unidades. Correspondencias: Conocimiento científico, pp. 23–33; Prácticas científicas, pp. 34–40; Diseño experimental, pp. 41–53; Error e incerteza, pp. 54–73; Cifras significativas, pp. 74–82; Gráficos, pp. 83–91; Cuaderno, pp. 92–97; Informes, pp. 98–109. La nota de unidades no se contabiliza como una sección traducida del capítulo 1.

Se incorporaron los ejercicios de incertidumbre, cifras significativas y gráficos, y se desarrollaron los ejemplos de carro con ventilador y frenado por rozamiento. Los márgenes Cornell, retratos históricos y tablas de normas curriculares se adaptaron o se omitieron en la presentación web; el texto no se declara reproducción literal de cada frase. Se reconstruyen diagramas de procedimiento mediante secuencias y tablas. La tabla de formas gráficas de la p. 89 se expresa en relaciones y transformaciones, sin reproducir sus cinco dibujos.

Se extrajeron 14 recortes adicionales registrados en `scripts/bigler-figure-regions.json`; se conserva la imagen de la p. 30 aportada previamente. Las figuras de Understanding Science mantienen su atribución específica. Se inspeccionó una hoja de contacto de todos los recortes.

Correcciones o aclaraciones: p. 64, media 3,1 m en lugar de 2,9 m; p. 70, tiempo de caída `sqrt(2d/g)` en lugar de la expresión invertida; diferencia entre dispersión y error estándar de la media; carácter orientativo de la regla 8 y 10; diferencia entre R y R²; supuestos constantes en los ejercicios de linealización; distinción entre marcos AP, NGSS y Massachusetts; el ejemplo de rozamiento de la p. 100 no es el carro con ventilador de las pp. 47–52. Las adaptaciones matemáticas se explicitan en las notas.

Verificación local: nueve páginas sin errores KaTeX; quince imágenes cargadas (dos en Conocimiento, una en Diseño, nueve en Error y tres en Gráficos). Se habilitó matemática en Cuaderno e Informes, que tenían fórmulas pese a `math=false`. Se comprobó escritorio y móvil; se corrigió el desborde de tablas mediante un contenedor de desplazamiento en el render hook de tablas, aplicado solamente a las notas de Bigler. Basado en la documentación oficial de Hugo: https://gohugo.io/render-hooks/tables/.

El estado “Ampliada” registra esta tanda de adaptación desarrollada; no establece todavía que el capítulo sea una edición definitiva. Continúan pendientes la revisión editorial final del conjunto y la comprobación visual de las demás notas del libro.

### Capítulo 2: Matemáticas

Se ampliaron las seis notas existentes y se incorporaron cuatro apartados ausentes. Correspondencias: Supuestos, pp. 114–116; SI y notación científica, pp. 117–127; Resolución simbólica, pp. 128–131; GUESS, pp. 132–145; Trigonometría rectángula, pp. 146–151; Leyes de senos y cosenos, pp. 152–154; Vectores y escalares, pp. 155–165; Multiplicación de vectores, pp. 166–170; Grados, radianes y vueltas, pp. 171–173; Coordenadas, pp. 174–177. La numeración de lectura ahora ubica Vectores en séptimo lugar, eliminando la duplicación de peso con Supuestos.

Se recuperaron los ejercicios de conversiones, notación, despejes, GUESS (20), trigonometría y vectores, con comprobaciones y condiciones explícitas. Se reconstruyen tablas numéricas en Markdown. Se omiten bromas basadas en juegos de palabras ingleses y capturas específicas de modelos de calculadora; se conserva la explicación del modo DEG/RAD. Las transformaciones cilíndricas y esféricas se añaden como desarrollo matemático identificado respecto de la explicación original.

Se incorporaron 24 figuras. Para las que son bitmaps completos se extrae el objeto de imagen nativo con pypdf y se compone su transparencia sobre blanco, preservando los píxeles originales. Esto evita capturar fragmentos de texto que el PDF coloca junto a una figura. Para figuras que combinan gráficos y texto de página se mantiene el recorte Poppler. El registro guarda el identificador del objeto o la región, la página y el hash de la fuente. Se inspeccionaron los recortes y se corregieron los dos casos con texto superpuesto.

Correcciones y aclaraciones: la conversión cgs de energía es 10⁷ erg por joule y no el factor universal 10⁵ que generaliza la p. 121; un escalar negativo invierte el sentido de un vector; las componentes -10 y +5 conservan su orden numérico aunque sus módulos se comparen al revés; un escalar puede tener signo; arco dividido por radio en la p. 171; selección de ramas en raíces; cuadrantes en conversiones polares; masa total del sistema del ciclista y no redondeo prematuro; “ideal” no implica automáticamente colisión elástica; el ángulo de lanzamiento de golf de la p. 151 no se determina físicamente solo con altura y distancia.

Comprobaciones: diez páginas con expresiones KaTeX efectivamente renderizadas y cero errores; 24 imágenes cargadas; ancho de documento igual al viewport en escritorio de 1200 px (1185 útiles) y móvil de 390 px (375 útiles). Se inspeccionaron ecuaciones de coordenadas, tabla de constantes y figura de componentes en contexto. El servidor Hugo necesitó una reconstrucción completa después de añadir el render hook; no se confundió ausencia de renderizado con cero errores. La compilación completa vuelve a incluir KaTeX.

Aplicar el mismo ciclo a los capítulos restantes. Siguen pendientes el resto de Cinemática 1D, Cinemática 2D, Fuerzas 1D/2D y el desarrollo de capítulos 7–13. El trabajo sigue local, sin commit, push ni despliegue.
