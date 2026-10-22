# Ampliación de los capítulos restantes de Bigler

Fecha: 22/10/2026. Registro interno; no se incluye en Hugo.

## Alcance y fuente

Se amplían las dos notas del capítulo 6 y se crean 24 notas en los capítulos 7, 8 y 10–13. Se sigue el orden temático del PDF de octubre de 2025. Se desarrollan conceptos, ecuaciones y ejemplos con condiciones explícitas, y una selección amplia de ejercicios del original. No se transcriben los listados administrativos AP/NGSS, todos los márgenes ni todos los ejercicios gráficos. Se conserva el capítulo 9 existente y las guías propias permanecen dentro de las materias, fuera de Bigler.

Fuente: `C:/Users/Of. Técnica Z6/Downloads/Notes-Physics-1.pdf`. SHA-256: `a25de16121d47e74d27a2cecd801b7ca8c2b1b3dd1ffa23eccf4c443a82a37bf`. Original y adaptación: CC BY-NC-SA 4.0. Créditos de adaptación: Prof. Lamaita, 2026.

| Nota | Páginas del original | Figuras | Avisos en revisión |
|---|---|---:|---:|
| [Fuerza aplicada con ángulo](../content/notes/notas-fisica/cap06-fuerzas-2d/fuerza-con-angulo.md) | pp. 361–371 | 9 | 4 |
| [Problemas con plano inclinado](../content/notes/notas-fisica/cap06-fuerzas-2d/plano-inclinado.md) | pp. 372–379 | 6 | 3 |
| [Fuerza centrípeta](../content/notes/notas-fisica/cap07-rotacion/fuerza-centripeta.md) | pp. 386–390 | 2 | 1 |
| [Inercia rotacional y momento de inercia](../content/notes/notas-fisica/cap07-rotacion/inercia-rotacional.md) | pp. 391–398 | 5 | 1 |
| [Momento de una fuerza y equilibrio rotacional](../content/notes/notas-fisica/cap07-rotacion/momento-fuerza.md) | pp. 399–407 | 4 | 3 |
| [Problemas de dinámica lineal y rotacional](../content/notes/notas-fisica/cap07-rotacion/dinamica-lineal-rotacional.md) | pp. 408–416 | 6 | 4 |
| [Primeros modelos del universo](../content/notes/notas-fisica/cap08-gravitacion/modelos-universo.md) | pp. 420–422 | 1 | 2 |
| [Leyes de Kepler del movimiento planetario](../content/notes/notas-fisica/cap08-gravitacion/leyes-kepler.md) | pp. 423–425 | 2 | 3 |
| [Gravitación universal](../content/notes/notas-fisica/cap08-gravitacion/gravitacion-universal.md) | pp. 426–433 | 1 | 3 |
| [Cantidad de movimiento lineal y colisiones](../content/notes/notas-fisica/cap10-momento/cantidad-movimiento.md) | pp. 500–506 | 2 | 2 |
| [Impulso y cambio de cantidad de movimiento](../content/notes/notas-fisica/cap10-momento/impulso.md) | pp. 507–513 | 3 | 1 |
| [Conservación de la cantidad de movimiento](../content/notes/notas-fisica/cap10-momento/conservacion-momento.md) | pp. 514–523 | 3 | 1 |
| [Momento angular y su conservación](../content/notes/notas-fisica/cap10-momento/momento-angular.md) | pp. 524–529 | 3 | 2 |
| [Movimiento armónico simple](../content/notes/notas-fisica/cap11-mhs/movimiento-armonico.md) | pp. 534–539 | 3 | 2 |
| [Oscilaciones de un sistema masa–resorte](../content/notes/notas-fisica/cap11-mhs/resortes.md) | pp. 540–544 | 2 | 2 |
| [Péndulos y aproximación de pequeñas oscilaciones](../content/notes/notas-fisica/cap11-mhs/pendulos.md) | pp. 545–548 | 2 | 1 |
| [Fluidos, densidad y modelos ideales](../content/notes/notas-fisica/cap12-fluidos/fluidos-densidad.md) | pp. 552–553 | 0 | 0 |
| [Presión y sus unidades](../content/notes/notas-fisica/cap12-fluidos/presion.md) | pp. 554–557 | 1 | 1 |
| [Presión hidráulica y principio de Pascal](../content/notes/notas-fisica/cap12-fluidos/presion-hidraulica.md) | pp. 558–560 | 1 | 2 |
| [Presión hidrostática](../content/notes/notas-fisica/cap12-fluidos/presion-hidrostatica.md) | pp. 561–565 | 2 | 2 |
| [Empuje y principio de Arquímedes](../content/notes/notas-fisica/cap12-fluidos/empuje.md) | pp. 566–575 | 3 | 2 |
| [Caudal y ecuación de continuidad](../content/notes/notas-fisica/cap12-fluidos/caudal-continuidad.md) | pp. 576–579 | 2 | 1 |
| [Movimiento de fluidos y ecuación de Bernoulli](../content/notes/notas-fisica/cap12-fluidos/bernoulli.md) | pp. 580–588 | 4 | 3 |
| [La rapidez de la luz y el principio de relatividad](../content/notes/notas-fisica/cap13-relatividad/rapidez-luz.md) | pp. 590–593 | 1 | 2 |
| [Contracción de longitudes y dilatación del tiempo](../content/notes/notas-fisica/cap13-relatividad/longitud-tiempo.md) | pp. 594–599 | 3 | 4 |
| [Relación relativista entre energía y momento](../content/notes/notas-fisica/cap13-relatividad/energia-momento.md) | pp. 600–601 | 0 | 2 |

## Figuras

70 capturas nuevas, más la figura previa de la rampa de p. 373: 71 imágenes distintas referenciadas en esta tanda. Se inspeccionan las imágenes originales mediante láminas de contacto. Se extraen bitmaps completos desde el PDF para conservar sus etiquetas; la rueda de p. 398 se captura mediante renderizado a 300 dpi porque contiene trazos vectoriales que no aparecen al extraer el bitmap. No se incorporan como si fueran de Bigler las viñetas comerciales o ilustraciones que el libro acredita a terceros con permisos particulares.

Cada imagen nueva tiene región/página y método en `scripts/bigler-figure-regions.json`, y archivo y fuente en `static/images/diagramas/bigler-figures.json`. En las notas, cada pie identifica autor, edición, página, etiquetas en inglés y licencia. Las anchuras se limitan a 220–420 px según la figura y al ancho disponible en móvil.

## Observaciones principales

- Cap. 6: signo decimal del ángulo (p. 363), condiciones de la fuerza neta (364), sentido de la equilibrante introducido erróneamente en la adaptación anterior (366), ángulo peso/normal y módulos frente a componentes (374), peso mg frente a ma (375).
- Cap. 7: condición del péndulo cónico (388), rapidez al acortar cuerda (392), equilibrio de momentos frente a fuerza neta (400), producto 0,25×20=5 y no 4 (401), ejemplo de palanca incompleto (405), reacción de bisagra ideal (411), aceleraciones corregidas de polea maciza y doble al incluir inercias efectivas de los bloques (412 y 416).
- Cap. 8: firmamento y observación aparente (420), decreto de 1616 frente a 1560 (422), cronología de Brahe y Kepler (423), excentricidad de Marte y clasificación de Plutón (424), semieje mayor y unidades de tercera ley (425), mes sinódico (426), simetría esférica y dependencia inversa al cuadrado (427), radio terrestre y resultados coherentes (430).
- Cap. 10: signo de restitución (501), alcance del péndulo de Newton (505), fuerza media del impacto (509), balance frente a conservación (515), momento angular frente a conversión de momento lineal (525), resultado del impacto en puerta: 0,480 rad/s (528).
- Cap. 11: MAS no equivale a cualquier periodicidad ni aceleración siempre frenante (534), fuerza restauradora al alejarse (539), referencia de energía y signo de escalar (541), masa móvil frente a masa del resorte (543), tensión variable y aceleración radial inferior del péndulo (546). La figura original de esta última página se conserva junto a una aclaración explícita de su limitación.
- Cap. 12: referencia manométrica (556, 564), incremento de Pascal y desnivel (558), límite del aerodeslizador (560), hemisferios: área proyectada y no superficie esférica (565), empuje no es reacción del peso (569), masa despreciable frente a flotabilidad neutra (575), flujo estacionario e incompresible (577), presión dinámica y condiciones de Bernoulli (580), puntos de Torricelli (585), sustentación como descripciones compatibles (586).
- Cap. 13: fecha de fijación de c y marcos inerciales (592), razón del índice de refracción (593), longitud propia y simultaneidad (595), tiempo propio/gravedad (597), dominio de observadores estáticos y horizonte (598), contextos ficticios inconsistentes (599), masa invariante y límite clásico de energía cinética (600–601).

Los avisos se presentan como «Nota de adaptación · En revisión»: no equivalen a erratas reconocidas por el autor. Las correcciones de la adaptación anterior se distinguen de las divergencias del PDF. Los datos históricos adicionales enlazan las fuentes consultadas: decreto de 1616, descripción de Brahe, edición académica de Kepler, IAU, NASA, BIPM y apuntes universitarios de relatividad.

## Verificación

- `hugo --minify --destination work/hugo-bigler-resto`: compilación ejecutada correctamente (553 páginas del portal, incluyendo alias).
- Control estructural global de Bigler: 92 páginas, 194 referencias de imágenes, sin errores estructurales.
- Inspección del HTML de las 26 notas: 871 expresiones extraídas y ejecutadas con KaTeX 0.16.9 en modo estricto, sin errores; 321 enlaces localizados y archivos de las 71 figuras comprobados.
- 45 comprobaciones numéricas independientes: fuerzas, poleas, momentos, colisiones, osciladores, presión, flujo y relatividad.
- Registro de 70 regiones nuevas sin nombres duplicados y con correspondencia en el manifiesto.
- `git diff --check` sin incidencias.

## Pendientes reales

La revisión visual completa de escritorio y móvil no se da por realizada: el navegador había presentado un bloqueo en la sesión. La validación de HTML y KaTeX no sustituye ese control. Todos los estados visuales de estas notas continúan pendientes.

Queda completar la transcripción/adaptación de todos los ejercicios gráficos de inercia y palancas de pp. 395–407, revisar redondeos y condiciones de los nuevos ejercicios, y continuar la nueva revisión transversal desde el capítulo 1. Las notas cubren todos los temas principales de los capítulos desarrollados, pero no se asigna un porcentaje de traducción integral por número de notas.

## Publicación

Autorización permanente del usuario: «publicar siempre». La tanda se integra mediante PR hacia main y se verifica el despliegue de Git que compila Hugo y Quartz; no se cambia configuración de Cloudflare ni contenido de Quartz. El resultado definitivo del despliegue se informa después de observar su estado y comprobar las URLs.
