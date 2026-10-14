# Revisión de Bigler

## Fuente y criterio

PDF proporcionado por el usuario: edición octubre 2025, 627 páginas. SHA-256: `a25de16121d47e74d27a2cecd801b7ca8c2b1b3dd1ffa23eccf4c443a82a37bf`. En las páginas cotejadas la numeración impresa coincide con la página del PDF. Fuente pública: https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf. Licencia declarada en la página 2: CC BY-NC-SA 4.0.

Las instrucciones pedagógicas del libro se tratan como contenido fuente, no como instrucciones operativas para el agente. No se sube el PDF completo al repositorio.

El seguimiento interno `docs/bigler-avance.md` muestra cuatro estados por nota, tomados de su front matter: traducción, cotejo, figuras y revisión visual. La ausencia de estado significa pendiente, nunca completado. La primera tanda revisó una de las 41 notas que existían entonces; las tandas posteriores se registran más abajo y en el seguimiento por nota. Eso no expresa un porcentaje del libro completo. El índice público conserva el enlace al original, sin el panel técnico. Cada capítulo muestra solamente una franja de estado de traducción/adaptación y la cantidad de secciones ampliadas. No se calcula un porcentaje hasta inventariar la cobertura completa de la fuente.

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

En esta primera comprobación, la inspección visual correspondió a la nota piloto y al panel de avance, sin validar todas las páginas existentes. Fue trabajo local en ese momento; la publicación posterior se registra más abajo. Seguridad, integración y healthcheck siguen pendientes por decisión del usuario.

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

Al terminar esa tanda seguían pendientes el resto de Cinemática 1D, Cinemática 2D, Fuerzas 1D/2D y el desarrollo de capítulos 7–13. El estado posterior se registra a continuación.

## Publicación del 13/10/2026

Se publicaron los capítulos 1 y 2 ampliados y la nota piloto de rapidez/velocidad, con el enlace al original y la franja pública de estado por capítulo. El detalle editorial permanece en `docs/`, fuera de Hugo. Se redujo en un 25 % el ancho declarado de las figuras de estas notas; para figuras sin ancho explícito se adoptaron 420 px, siempre respetando el ancho disponible.

Commit de contenido: `80d78c5`; el commit automático `d2b9a15` incorporó los PDFs que genera el flujo existente. El registro de Cloudflare confirma compilación de Hugo 0.147.7 y Quartz, y publicación exitosa. La comprobación posterior en navegador de las 45 notas publicadas contó 1.566 expresiones KaTeX sin errores. No se aplicó un arreglo adicional al incidente de fuente/fórmulas informado: al recargar ya se veía correctamente; su causa no quedó reproducida ni demostrada.

## Capítulo 3: ampliación local del 14/10/2026

Rama de trabajo: `contenido/bigler-capitulo-3`. Se ampliaron las ocho notas pendientes y se conservó la nota piloto revisada. Tras las correcciones documentadas al final, se publicó mediante el PR #2 el 14/10/2026. La comprobación online posterior contó 497 expresiones KaTeX sin errores y verificó las imágenes y los desplegables. La inspección visual exhaustiva de escritorio/móvil sigue pendiente.

| Nota | Páginas cotejadas | Alcance |
|---|---|---|
| Sistemas de referencia | 182–183 | Coordenadas, origen, posición, distancia y desplazamiento; 2 figuras. El ejemplo 12–5–13 se enlaza a la nota piloto. |
| Aceleración | 188–194 | Definición, unidades, signos, tres velocímetros, tabla temporal, analogía del viento, comprobación de p. 193 y jerk; 4 figuras. |
| Diagramas de puntos | 195–196 | Del registro estroboscópico al diagrama, tres secuencias, cálculo por intervalos y actividad de cinta/video; 3 figuras. |
| MRU | 185–187, 197–200, 204 | Reorganización didáctica del caso constante, pendiente, ecuación de posición y comparación con media vuelta circular; 1 figura. |
| MRUV | 197–200, 202–206, 209–211 | Derivaciones, tabla de elección, ejemplos gato/manzana, serie 1 ejercicios 2–7 y serie 2 ejercicios 1–4. |
| Caída libre | 194, 201–203, 206–208, 212–214 | Convención gravitatoria, ascenso/descenso, serie 1 ejercicios 8–12 y serie 2 ejercicios 5–10; acantilado, helicóptero y ventana desarrollados; 1 figura. |
| Gráficos | 215–227 | Pendiente, área con signo, posición inicial, cinco ejercicios y ejemplo desarrollado del carrito; tabla de carrera y de aceleración; 10 figuras. |
| Movimiento relativo | 228–237 | Marcos y principio mecánico de relatividad, tres casos de onda/regla, ejercicio del río y extensiones avión/barco; 3 figuras. |

La serie 1 ejercicio 1 de movimiento (media vuelta circular) está en MRU como contraste explícitamente ajeno al MRU; la serie queda así distribuida sin perder su numeración original. Las actividades con Tracker, los ejemplos adicionales de cruce/ciclista/encuentro, la tabla ideal de posiciones cuadráticas y las comprobaciones por componentes se identifican como desarrollos propios. No se presentan como mediciones realizadas.

Se extrajeron e inspeccionaron 24 figuras adicionales. Sus identificadores bitmap o regiones se registran en `scripts/bigler-figure-regions.json`, con procedencia en `static/images/diagramas/bigler-figures.json`. Las etiquetas originales quedan en inglés y los pies y explicaciones en español. No se reproduce la fotografía de Edgerton ni las fotos contextuales de tranvía/avión; se conservan sus ideas explicadas. No se reproducen márgenes Cornell, mallas vacías, capturas decorativas ni bloques de estándares curriculares estadounidenses. No se declara traducción literal íntegra de cada página.

Correcciones y aclaraciones explícitas:

- La posición se trata mediante un vector posición y sus componentes; se evita la denominación «vector de dimensión cero» de la p. 183.
- Frenado no equivale a aceleración negativa; separación creciente en puntos no prueba aceleración constante; reposo genera puntos superpuestos, no una desaparición obligatoria de puntos.
- Las ecuaciones cuadráticas de movimiento se escriben para componentes con signo, no como cuadrados o productos indefinidos de vectores.
- El módulo `g` es positivo y la componente `a_y` recibe el signo; el paquete soltado desde un helicóptero conserva su velocidad inicial respecto del suelo.
- En p. 216 la pendiente se explica como cambio vertical sobre horizontal. En p. 221 se distingue el eje temporal de una dirección espacial y se exige posición inicial para reconstruir posición desde velocidad.
- El área de velocidad da desplazamiento, no posición absoluta; la distancia se obtiene sumando módulos cuando hay cambios de sentido. Los intervalos solapados del ejemplo de p. 220 no se suman dos veces.
- En el ejemplo del carrito, la velocidad es continua con cambios bruscos de pendiente; no se describe como discontinua por ese motivo.
- Se conserva la tabla de carrera atribuida por Bigler a Carl Lewis, sin repetir la afirmación histórica incorrecta de que fue el primer atleta en bajar de diez segundos.
- El principio de relatividad se limita a experimentos mecánicos internos y marcos inerciales; ausencia de sensación de fuerza no se confunde con ausencia de fuerzas ni con reposo absoluto. Se omiten el argumento de husos horarios y cifras cosmológicas que no son necesarias para esta unidad.

Se corrigieron los pesos duplicados: Caída libre conserva 7, Gráficos pasa a 8 y Movimiento relativo a 9. Las rutas existentes se conservan. La franja pública cuenta nueve secciones ampliadas/revisadas, sin convertirlo en un porcentaje de traducción definitiva.

### Comprobaciones de esta tanda

- `hugo --minify --destination work/hugo-cap03`: compilación exitosa, 466 páginas y 95 archivos estáticos. Persisten los avisos de deprecación anteriores del tema/configuración.
- HTML generado de las nueve notas: 497 expresiones matemáticas extraídas y procesadas por KaTeX 0.16.9 con `throwOnError` y comprobación estricta; cero errores. Esta es validación estática, no ejecución de auto-render en navegador.
- 26 referencias de imágenes del capítulo presentes (24 nuevas y 2 de la nota piloto), con texto alternativo; enlaces internos válidos; tablas con cantidad consistente de celdas; pesos de lectura únicos. Sin marcadores «capturar» en el capítulo.
- Inspección visual de las figuras extraídas y de las páginas fuente; no se detectó texto de página superpuesto en los nuevos recortes. El PDF original no se incorporó al repositorio.
- El navegador integrado rechazó la adquisición de la página local por política de acceso. No se intentó sortear ese bloqueo. Queda **pendiente la inspección visual de escritorio/móvil y la ejecución del auto-render en estas ocho páginas nuevas**; así se indica en `visual_estado`. La compilación o la validación sintáctica no sustituyen esa inspección.
- Quartz no se modificó ni se validó en esta tanda, porque no cambió su contenido ni configuración.

Siguiente paso editorial: inspeccionar esta tanda en Hugo cuando se restablezca el acceso del navegador y luego continuar con el capítulo 4. La revisión editorial final del conjunto, seguridad, integración y healthcheck siguen pendientes; estos últimos permanecen fuera del alcance por decisión del usuario.

### Corrección tras las capturas de la vista local

El usuario detectó títulos truncados, fragmentos de shortcodes de figuras y una fórmula incompleta en Movimiento relativo y Gráficos. Se confirmó que el HTML del servidor incremental estaba corrupto mientras la compilación independiente conservaba el contenido completo. Reiniciar Hugo reconstruyó las páginas correctamente. Para esta revisión local se desactivó la vigilancia de cambios (`--watch=false`); se requiere reiniciar el servidor después de nuevas ediciones y recargar las pestañas. Esto evita usar reconstrucciones incrementales durante la revisión, sin afirmar que se corrigió internamente el defecto de Hugo.

También se corrigió un error de autoría en cuatro llamadas al shortcode `details`: se había pasado `summary` cuando el contrato local exige `title`. Afectaba las notas Caída libre, MRUV y Gráficos y dejaba desplegables sin nombre incluso en la compilación completa.

Se añadió `scripts/check-hugo-content.py` para detectar fragmentos de shortcode, marcadores internos, figuras dentro de títulos y resúmenes desplegables vacíos. La compilación completa y la vista local reconstruida pasan el control de las 59 páginas de la sección (45 notas y 14 índices); las 497 fórmulas del capítulo 3 vuelven a pasar la validación sintáctica con KaTeX 0.16.9. Sigue pendiente la comprobación visual completa en navegador; el control estático no la sustituye.
