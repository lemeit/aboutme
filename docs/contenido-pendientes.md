# Estado editorial y próximos pasos

Revisión de continuidad: 21/10/2026. Documento interno, fuera de `content/`; no aparece en Hugo.

## Prioridad vigente

El 21/10/2026 se publicó el capítulo 5 mediante PR #13 y despliegue confirmado `2353b349-5995-43bd-be7e-b9dd1d85e254`. El usuario pidió priorizar directamente el capítulo 9 para sus clases del viernes 23/10: ocho notas desarrolladas, 14 figuras y una guía docente propia, todavía locales. Ver `docs/bigler-capitulo-9-ampliacion.md`. La revisión integral desde el capítulo 1 sigue abierta; ver `docs/bigler-revision-divergencias.md`.

## Qué ya está publicado

- Correcciones cotejadas de ocho notas: PR #4 integrado y producción confirmada el 14/10/2026. Despliegue `ba9b175f-33d9-41df-a1d2-c3163d37ff72`, commit de producción `1c9aff2` (incluye regeneración de PDF). Se comprobaron los cambios en las ocho URLs públicas.

- Capítulos 1 y 2: adaptación ampliada, figuras incorporadas y comprobación de escritorio/móvil registrada.
- Capítulo 3: nueve notas ampliadas/revisadas, 26 imágenes (24 nuevas) y publicación mediante PR #2. Se comprobaron online 497 expresiones KaTeX sin errores, carga de imágenes y ausencia de fragmentos de shortcodes o desplegables vacíos. Esto no equivale a una revisión visual exhaustiva de todo el capítulo en escritorio/móvil ni a una edición definitiva del libro.
- Introducción de Notas de Física: simplificada y publicada mediante PR #3, conservando fuente, edición, autoría, licencia y enlace al original.
- La corrupción de shortcodes observada en el servidor local se evitó reconstruyendo desde cero y usando `--watch=false` para la revisión. Las futuras ediciones requieren reiniciar ese servidor. Se corrigió el parámetro de cuatro desplegables y se agregó el control `scripts/check-hugo-content.py`.

## Inventario que falta desarrollar

| Parte | Estado | Trabajo siguiente |
|---|---|---|
| Capítulo 4, Cinemática 2D | 5 notas ampliadas con 9 figuras, publicadas mediante PR #11; tablas y avisos posteriores publicados mediante PR #12 | Nueva revisión editorial y visual pendiente |
| Capítulo 5, Fuerzas 1D | Diez notas ampliadas y publicadas mediante PR #13; nueve desarrolladas en la tanda de pp. 286–357 con 33 figuras nuevas | Revisión visual exhaustiva y cierre de observaciones |
| Capítulo 6, Fuerzas 2D | 2 notas breves, sin cotejo editorial registrado | Fuerzas en ángulo y plano inclinado; inventariar secciones faltantes del original |
| Capítulo 9, Energía, trabajo y potencia | Ocho notas desarrolladas en local, 14 figuras y una guía docente propia | Revisión visual/editorial y publicación cuando se autorice |
| Capítulos 7–8 y 10–13 | Solo índices, sin notas desarrolladas | Adaptación por desarrollar |

Antes de ampliar el capítulo 4 había 17 notas breves y 6 marcadores «capturar». La tanda local del capítulo 4 recupera sus cuatro marcadores con figuras cotejadas. Con la tanda local del capítulo 5 quedan **2 notas por ampliar, ambas del capítulo 6**. Se resolvieron los dos marcadores «capturar» de tensión y fricción mediante figuras extraídas y registradas. Ese conteo no representa todas las figuras ni secciones del original que faltan por recuperar.

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

## Orden histórico propuesto (reemplazado por la prioridad del capítulo 9)

1. Ampliar capítulo 4 con cotejo por páginas: recuperar ejercicios, figuras y condiciones de las ecuaciones. Corregir primero la descripción del vector centrípeto y las convenciones angulares.
2. Ampliar capítulo 5, priorizando tercera ley, diagramas, normal, tensión/poleas y fricción. Son conceptos que sostienen los problemas del capítulo siguiente.
3. Completar capítulo 6: revisar normal, rozamiento y signos, y comprobar qué apartados originales aún no tienen nota.
4. Inventariar y desarrollar capítulos 7–13, con alcance por sección antes de asignar porcentajes.
5. Revisión final transversal: símbolos (`d` distancia frente a `Δx` desplazamiento), g como módulo, supuestos ideales, redondeo, vínculos, atribución y actividades propias.

Para cada tanda: cotejo de contenido → extracción e inspección de figuras → compilación completa de Hugo → control del HTML → ejecución de KaTeX y revisión de escritorio/móvil → actualización interna → publicación solo cuando esté autorizada.

## Otros contenidos del portal

Quartz/Obsidian (apuntes propios ordenados según Serway), materiales de materias, cerveza y simulación son recorridos distintos. Este resumen los deja en una segunda ronda de revisión editorial; no afirma que ya se cotejaron, que estén actualizados o que sus instrucciones técnicas estén validadas. Seguridad, integración y healthcheck permanecen postergados por decisión del usuario.
