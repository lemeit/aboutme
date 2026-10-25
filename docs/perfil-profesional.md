# Perfil y trayectoria dentro de Sobre mí

`content/about.md` reúne presentación, intereses, trayectoria, formación, publicaciones y contacto. Se elimina la pestaña principal Trayectoria y se ofrecen accesos internos en `layouts/profile.html`. `assets/css/extended/profile.css` mantiene los estilos acotados y la paleta del sitio.

`/cv/` conserva una página de compatibilidad que enlaza y redirige a `/about/#trayectoria`, con canonical hacia `/about/` y exclusión de indexación. Las rutas `/notes/`, `/conceptos/` y los proyectos no cambian. Quartz no se modifica.

## Descargas públicas

El shortcode `cv-downloads` enlaza `static/cv/luciano-lamaita-resumen-es.pdf` y `static/cv/luciano-lamaita-resumen-en.pdf`. Son resúmenes de dos páginas, derivados de la edición revisada el 25/10/2026. Solo contienen localidad, info@lemeit.ar y enlaces profesionales. No incluyen Gmail personal, teléfono, domicilio, DNI, CUIL, fecha de nacimiento ni fotografía. Las fuentes privadas y los documentos de envío permanecen fuera del repositorio.

Fuente principal: CV completo revisado por Luciano en Google Docs, https://docs.google.com/document/d/1akqpT3TojpGsIdtbOaJqT8Klwi-D6d8asegzqpbWBMI/edit. Los editables y versiones se mantienen en su carpeta de Drive. Para nuevas ediciones, conservar las rutas de descarga, revisar el PDF completo y comprobar que no se incorporen datos privados.

## Contenido

La edición pública v02 recupera el diseño del resumen original: columna principal para perfil y experiencia, y lateral para contacto, enlaces, competencias, herramientas, idiomas, formación y redes. Conserva dos páginas por idioma, tipografía Segoe UI y acentos de la paleta del sitio. El código de versión queda a la izquierda del pie y la paginación a la derecha. No usa escalas gráficas de competencias ni incorpora los datos personales del original.

Experiencia en cronología inversa, con énfasis en laboratorios, calidad, aguas, investigación y ambiente. Licenciatura en Química como estudios parciales sin graduación; YPF S.A. separada de la refinería; Instituto Niño Jesús como antecedente docente de Química de 2019. Se incorporan OpenAQ, ECSA, CanAirIO, AireCiudadano y Sensor.Community y la continuidad de Ciencia Ciudadana Ambiental en Aire Escolar, distinguiendo objetivos de resultados.

Se conservan atribución, autorización y licencia CC BY-NC-SA 4.0 de Jeff Bigler. Referencias y premios según el CV revisado, sin agregar DOI ni mediciones de impacto.

## Verificación

Ejecutar `hugo --minify`; comprobar navegación, anclas, compatibilidad de `/cv/`, descargas, contacto público, escritorio, móvil y modo oscuro. Compilar Hugo no valida Quartz. Publicar requiere aprobación de Luciano.

## Primera versión bilingüe

- ES: `/`, `/about/`, `/projects/`; EN: `/en/`, `/en/about/`, `/en/projects/`.
- Trayectoria integrada en Sobre mí; PDF público correspondiente al idioma seleccionado.
- Apuntes y Quartz en español, sin duplicación automática.
- Fichas inglesas adaptadas; documentación técnica extensa y controles de aplicaciones identificados como disponibles en español.
- Selector ES/EN entre páginas equivalentes, con inicio como alternativa cuando no existe traducción.

## Chino simplificado

`/zh/`, `/zh/about/` y `/zh/projects/` ofrecen el mismo alcance de traducción que el inglés. El selector muestra 中文 y mantiene la página equivalente. El perfil enlaza `static/cv/luciano-lamaita-resumen-zh.pdf`, de dos páginas con el mismo diseño lateral. Noto Sans SC mantiene una estética sans serif coherente con el portal y se incrusta en el PDF; la web aloja los subconjuntos y su licencia OFL localmente. El chino no se agrega a los idiomas hablados del CV: el documento es una traducción.
