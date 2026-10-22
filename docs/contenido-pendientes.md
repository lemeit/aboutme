# Estado editorial y próximos pasos

Revisión de continuidad: 22/10/2026. Documento interno, fuera de `content/`; no aparece en Hugo.

## Prioridad vigente

El usuario autorizó continuar los capítulos restantes y publicar siempre los cambios terminados y verificados. La tanda del 22/10/2026 desarrolla los capítulos 6–8 y 10–13: 26 notas (2 ampliadas y 24 nuevas), 70 capturas nuevas del PDF y observaciones visibles sobre discrepancias. Ver `docs/bigler-capitulos-restantes.md`. El capítulo 9 conserva sus ocho notas y su guía de clase permanece separada, en Introducción a la Física.

Todos los capítulos cuentan ahora con notas de sus temas principales. Esto no es una transcripción íntegra de cada recuadro o ejercicio del PDF ni una certificación editorial definitiva. La siguiente prioridad es la revisión transversal, completar el banco de ejercicios e inspeccionar escritorio y móvil. La nueva relectura desde el capítulo 1 sigue abierta.

## Qué ya está publicado

- Correcciones cotejadas de ocho notas: PR #4 integrado y producción confirmada el 14/10/2026. Despliegue `ba9b175f-33d9-41df-a1d2-c3163d37ff72`, commit de producción `1c9aff2` (incluye regeneración de PDF). Se comprobaron los cambios en las ocho URLs públicas.

- Capítulos 1 y 2: adaptación ampliada, figuras incorporadas y comprobación de escritorio/móvil registrada.
- Capítulo 3: nueve notas ampliadas/revisadas, 26 imágenes (24 nuevas) y publicación mediante PR #2. Se comprobaron online 497 expresiones KaTeX sin errores, carga de imágenes y ausencia de fragmentos de shortcodes o desplegables vacíos. Esto no equivale a una revisión visual exhaustiva de todo el capítulo en escritorio/móvil ni a una edición definitiva del libro.
- Introducción de Notas de Física: simplificada y publicada mediante PR #3, conservando fuente, edición, autoría, licencia y enlace al original.
- La corrupción de shortcodes observada en el servidor local se evitó reconstruyendo desde cero y usando `--watch=false` para la revisión. Las futuras ediciones requieren reiniciar ese servidor. Se corrigió el parámetro de cuatro desplegables y se agregó el control `scripts/check-hugo-content.py`.

## Estado por capítulos

| Parte | Estado de contenido | Trabajo siguiente |
|---|---|---|
| Capítulos 1–3 | Notas ampliadas; conservar los registros previos de revisión | Nueva relectura editorial integral y completar inspección visual del 3 |
| Capítulo 4 | Cinco notas ampliadas con figuras | Revisión editorial y visual |
| Capítulo 5 | Diez notas ampliadas con figuras | Revisión visual exhaustiva y cierre de observaciones |
| Capítulo 6 | Dos notas ampliadas, 15 figuras (14 nuevas) | Revisión editorial y visual |
| Capítulo 7 | Cuatro notas nuevas, 17 capturas | Revisión y completar ejercicios gráficos seleccionados de pp. 395–407 |
| Capítulo 8 | Tres notas nuevas, cuatro capturas | Revisión de fuentes históricas y cierre de observaciones |
| Capítulo 9 | Ocho notas publicadas; guía de clase fuera de Bigler | Revisión editorial y visual |
| Capítulo 10 | Cuatro notas nuevas, 11 capturas | Revisión de colisiones y diagramas de barras |
| Capítulo 11 | Tres notas nuevas, siete capturas | Revisión de oscilaciones y observación sobre fuerzas del péndulo |
| Capítulo 12 | Siete notas nuevas, 13 capturas | Revisión de modelos de presión, empuje y flujo |
| Capítulo 13 | Tres notas nuevas, cuatro capturas | Revisión conceptual y editorial de las adaptaciones de relatividad |

Los 17 resúmenes breves y los seis marcadores «capturar» del inventario inicial ya no describen el estado actual. El seguimiento por nota, con páginas fuente, figuras y revisiones pendientes, está en `docs/bigler-avance.md`. No se asignan porcentajes de cobertura integral del libro por contar notas.

## Problemas detectados que deben corregirse al ampliar

La tabla siguiente fue una revisión preliminar de afirmaciones en los archivos del sitio. **No permite atribuir los problemas a la traducción.** El cotejo posterior por páginas está en `docs/bigler-cotejo-observaciones.md` y prevalece sobre esta clasificación: varias expresiones ya están en el original; otras perdieron matices al resumirse. En particular, los signos de Atwood no se consideran un error del original. Las correcciones cotejadas se integraron mediante PR #4; la tabla conserva el diagnóstico inicial, no una lista de errores aún presentes.

| Prioridad | Archivo | Problema concreto | Tratamiento necesario |
|---|---|---|---|
| Alta | `cap04-cinematica-2d/movimiento-centripeto.md` | Define la aceleración centrípeta como «constante hacia el centro». | En MCU el módulo es constante pero la dirección del vector cambia. Separar componente radial de aceleración total cuando varía la rapidez. |
| Alta | `cap05-fuerzas-1d/tipos-fuerzas.md` | La tensión «es su propia fuerza de reacción». | Identificar pares de tercera ley entre dos cuerpos; no atribuir acción y reacción al mismo cuerpo ni tratar tensión como su propia reacción. |
| Alta | `cap05-fuerzas-1d/tension.md` | La tabla relaciona 1, 2 o 3 poleas directamente con ventaja 1, 2 o 3; pregunta cuántas poleas bastan para cierta carga. | La ventaja ideal depende de los ramales que sostienen la parte móvil y su geometría. Mostrar el montaje, no deducirla del número de ruedas. |
| Alta | `cap05-fuerzas-1d/friccion.md` | Generaliza «siempre μk < μs» y usa `Ff=μN` como paso genérico también para fricción estática. | Explicar el modelo y su rango de validez; en estática calcular la fuerza necesaria y verificar su límite, en cinética usar la relación aproximada correspondiente. |
| Alta | `cap06-fuerzas-2d/fuerza-con-angulo.md` | Afirma que un vector no tiene efecto sobre otro perpendicular; después reconoce que una componente vertical modifica normal y fricción horizontal. | Las ecuaciones se proyectan por componentes; las restricciones y la fricción pueden acoplar el problema. Explicar ese vínculo y las condiciones de contacto. |
| Media | `cap05-fuerzas-1d/tipos-fuerzas.md`, `friccion.md` | Presentan `N=mg` en horizontal y `N<mg` en rampa sin condiciones. | Exigir contacto, aceleración perpendicular nula y ausencia de otras componentes normales; incluir fuerzas aplicadas y posibilidad de pérdida de contacto. |
| Media | `cap06-fuerzas-2d/plano-inclinado.md` | Coloca siempre la fricción cuesta arriba y asocia pendiente cero con reposo. | La fricción se opone al deslizamiento relativo o su tendencia; puede apuntar cuesta abajo si el cuerpo sube. Aceleración cero no implica reposo. |
| Media | `cap04-cinematica-2d/aceleracion-angular.md` | Presenta ecuaciones angulares sin explicitar aceleración constante y equipara aceleración del ciclista con tangencial del borde. | Fijar eje/signos, usar radianes y aclarar rodadura sin deslizamiento; distinguir aceleración del centro, componentes de un punto del borde y relación cinemática entre traslación y giro. |
| Media | `cap05-fuerzas-1d/fuerza-gravitacional.md` | Usa distancia entre centros de masa en la ley inversa al cuadrado como regla general. | Precisar masas puntuales o cuerpos esféricamente simétricos; no extenderla sin más a cualquier distribución de masa. |
| Media | `cap05-fuerzas-1d/tension.md` | En el ejemplo de Atwood mezcla g con signo y g como módulo y redondea antes de calcular tensión. | Usar ejes por cuerpo y un módulo gravitatorio positivo; conservar cifras hasta el final y aclarar cuerda/polea ideales. |

## Documentación que quedó desactualizada

El seguimiento conserva descripciones históricas de trabajo local y bloqueos del navegador. La publicación y el chequeo online posterior de capítulo 3 deben leerse como el estado más reciente. El chequeo online de sintaxis/estructura está hecho; la revisión visual exhaustiva sigue pendiente. Los porcentajes de avance siguen sin calcularse porque falta inventariar la cobertura de todas las secciones del original.

La documentación de despliegue describe Quartz como independiente, pero el registro de Cloudflare muestra una compilación conjunta de Hugo y Quartz y copia del resultado a `/conceptos/`. Esa diferencia requiere aclaración documental, sin migrar ni reconfigurar el alojamiento en esta revisión.

## Siguiente ronda

1. Relectura editorial transversal desde el capítulo 1, manteniendo los avisos de adaptación en revisión.
2. Completar ejercicios y figuras de las páginas que aún tengan cobertura selectiva; comprobar atribuciones de terceros antes de reutilizarlas.
3. Inspección visual en escritorio y móvil: tablas, fórmulas, pies de figura y desplegables.
4. Cerrar observaciones solo cuando haya evidencia suficiente; conservar trazabilidad al PDF.

Para cada tanda: cotejo → extracción e inspección de figuras → compilación completa de Hugo → control del HTML y KaTeX → actualización interna → publicación autorizada de forma permanente por el usuario. La inspección visual no se da por hecha cuando solo se verificó el HTML.

## Otros contenidos del portal

Quartz/Obsidian (apuntes propios ordenados según Serway), materiales de materias, cerveza y simulación son recorridos distintos. Este resumen los deja en una segunda ronda de revisión editorial; no afirma que ya se cotejaron, que estén actualizados o que sus instrucciones técnicas estén validadas. Seguridad, integración y healthcheck permanecen postergados por decisión del usuario.
