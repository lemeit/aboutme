# Capítulo 9 — ampliación y preparación de clase

Fecha: 21/10/2026. Seguimiento interno, fuera de `content/`.

## Alcance

Ocho notas desarrolladas a partir de las pp. 441–494 de la edición octubre de 2025, con inventario previo de pp. 435–440. No se traducen como contenido de clase los listados curriculares AP/NGSS. Se conserva atribución y licencia CC BY-NC-SA 4.0. La guía de clase es una propuesta propia, identificada como tal y separada del cómputo de secciones traducidas.

| Nota | Fuente | Figuras |
|---|---|---:|
| Energía y energía cinética | 441–444 | 0 |
| Energía potencial y energía mecánica | 445–453 | 1 |
| Trabajo de una fuerza | 454–463 | 7 |
| Conservación de la energía | 464–476 | 6 |
| Trabajo en la rotación | 477–478 | 0 |
| Energía cinética de rotación y rodadura | 479–486 | 0 |
| Rapidez de escape y energía orbital | 487–489 | 0 |
| Potencia, energía y rendimiento | 490–494 | 0 |

14 figuras extraídas directamente del PDF, inspeccionadas mediante láminas de contacto y registradas en `scripts/bigler-figure-regions.json` y `static/images/diagramas/bigler-figures.json`. Se omiten el dibujo de personaje comercial, la foto de competencia sobre tronco, la cinta transportadora y las repeticiones de plantillas LOL vacías. Las imágenes se conservan sin traducir sus etiquetas y con fuente por página.

## Observaciones en revisión

- 442–443: energía cinética del centro de masa frente a movimientos internos; distinción entre energía interna, temperatura y calor.
- 445–450: definición demasiado restrictiva de energía potencial; elección del cero y signo gravitatorio; derivación mediante fuerza variable frente a multiplicar fuerza por distancia.
- 447: la cuenta `(2)(10)(3)` se imprime como 30 J, mientras que corresponde 60 J y la página siguiente usa ese valor.
- 449/452: se retiran equivalencias entre energía química, energía libre, entalpía y entropía. El desarrollo termodinámico queda fuera de alcance.
- 450: deformación elástica desde longitud natural, no automáticamente desde equilibrio cargado.
- 454–456/460: trabajo individual frente a neto; elevar a velocidad constante no significa aceleración g.
- 459: intervalos del gráfico fuerza–posición en metros, aunque el párrafo original escribe segundos.
- 462–463: figura con coordenadas de cambios de pendiente no rotuladas. Se conservan respuestas posteriores como controles aproximados del original y no como integración exacta medida sobre píxeles. Para evaluación exacta se propone el gráfico de p. 459.
- 464/467–469: aislado frente a cerrado; altura constante implica cambio potencial cero, no necesariamente potencial cero. Aporte del motor depende de la frontera del sistema.
- 473: para rapidez máxima del péndulo falta explicitar altura del punto más bajo. No se propone una experiencia con masa pesada cerca de la cara.
- 474: rapidez obtenida por energía y condición adicional de contacto en un rizo.
- 475: constante elástica con unidad errónea N/kg; se usa N/m. Se distingue contacto de un resorte que solo empuja de un bloque unido al resorte.
- 479: la ecuación `Δθ=2πr` es dimensionalmente incorrecta, confirmada en la página renderizada. Una vuelta es 2π rad; el arco es 2πR.
- 481: el ejemplo de bowling informa 185,6 J. Sustituyendo sus datos en K=Iω²/2 se obtiene 92,8 J. Se conserva la idealización de esfera uniforme.
- 485: el problema que deduce I de vueltas y tiempo requiere aceleración angular constante desde reposo; se explicita la hipótesis. El trabajo de frenado sobre el objeto es negativo.
- 487–489: escape como límite en infinito, signo de U y energía total; comparación ideal lunar sin atribuirla a la trayectoria real de Apollo 11; energía orbital de traslación frente a giro propio del satélite.
- 490–491: potencia media frente a instantánea y condiciones de sus ecuaciones.

Las observaciones no se presentan como fe de erratas reconocida por el autor. Los avisos públicos conservan «En revisión» y permiten consultar el original.

## Uso docente

La guía propia propone un recorrido central adaptable de 80 minutos, un caso integrador resuelto, una experiencia de rampa con registro de datos vacío y preguntas de salida. Rotación y escape quedan como profundización. No se inventan mediciones ni se afirma que pueda cubrirse todo el capítulo en un único encuentro.

## Validación

- Hugo `--minify`: correcto.
- Control estructural: 68 páginas de Bigler, 124 referencias de imágenes, sin errores.
- 506 expresiones del capítulo, incluida la guía, procesadas con KaTeX sin errores de sintaxis.
- 18 controles numéricos representativos, figuras y enlaces internos comprobados.
- Pendiente: revisión visual real en navegador de escritorio y móvil y revisión editorial integral; no equiparar cobertura temática con edición definitiva.
- Publicación de esta tanda del capítulo 9 no realizada. Quartz no modificado.
