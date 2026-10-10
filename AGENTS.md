# Instrucciones para agentes — aboutme / profe.lemeit.ar

## Proyecto
Portal personal y educativo de Física de Luciano Lamaita. Integra un sitio Hugo/PaperMod con notas, proyectos y materiales pedagógicos, y un mapa de conceptos Quartz/Obsidian en `quartz/`, publicado bajo `/conceptos/`. Leer `README.md` y la configuración de cada generador antes de modificar.

## Flujo Git y despliegue
- Trabajar en ramas por tarea; proponer PR hacia `main`. No fusionar, publicar ni alterar Cloudflare sin aprobación.
- El push a `main` puede desplegar el portal. Hugo y Quartz tienen compilaciones distintas: no confundir sus directorios de salida ni asumir que un build valida ambos.
- No editar archivos generados ni incluir `public/`, secretos, tokens o archivos locales.
- Respetar las rutas y enlaces existentes, especialmente `/notes/` y `/conceptos/`.

## Contenido y rigor docente
- Escribir en español claro, adecuado a secundaria de Argentina, con terminología y unidades físicas correctas.
- No inventar resultados experimentales, referencias, citas, imágenes ni atribuciones. Distinguir modelos, hipótesis y datos medidos.
- Las notas de Jeff Bigler son traducciones y adaptaciones autorizadas; conservar atribución, licencia CC BY-NC-SA 4.0 y trazabilidad de la fuente. No eliminar avisos de licencia ni atribuir textos originales a otro autor.
- Mantener coherencia entre apuntes de Hugo y mapa de conceptos de Quartz cuando una tarea afecte ambos. No duplicar ni sincronizar contenido masivamente sin indicación.
- Preservar el orden de secciones controlado por `weight`, metadatos y front matter.

## Diseño
- Conservar identidad visual de la marca y la paleta X-Wing existente; no sustituir el tema global por uno genérico.
- En PaperMod, el modo oscuro se configura mediante `:root[data-theme="dark"]`. Ver `assets/css/extended/custom.css` y `README.md` antes de alterar estilos.
- Respetar navegación, accesibilidad, visualización móvil y los enlaces entre Hugo y Quartz.

## Verificación
- Para Hugo, revisar `hugo.toml` y validar con `hugo --minify` si Hugo está disponible.
- Para Quartz, consultar sus scripts y configuración en `quartz/`; instalar dependencias con el método documentado y ejecutar el build compatible con la versión instalada.
- No afirmar que una compilación pasó sin haberla ejecutado. Al finalizar detallar archivos, pruebas, riesgos y pasos pendientes.
