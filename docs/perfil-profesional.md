# Perfil y trayectoria dentro de Sobre mí

`content/about.md` reúne presentación, intereses, trayectoria, formación, publicaciones y contacto. Se elimina la pestaña principal Trayectoria y se ofrecen accesos internos en `layouts/profile.html`. `assets/css/extended/profile.css` mantiene los estilos acotados y la paleta del sitio.

`/cv/` conserva una página de compatibilidad que enlaza y redirige a `/about/#trayectoria`, con canonical hacia `/about/` y exclusión de indexación. Las rutas `/notes/`, `/conceptos/` y los proyectos no cambian. Quartz no se modifica.

## Descargas públicas

El shortcode `cv-downloads` enlaza `static/cv/luciano-lamaita-resumen-es.pdf` y `static/cv/luciano-lamaita-resumen-en.pdf`. Son resúmenes de dos páginas, derivados de la edición revisada el 25/10/2026. Solo contienen localidad, info@lemeit.ar y enlaces profesionales. No incluyen Gmail personal, teléfono, domicilio, DNI, CUIL, fecha de nacimiento ni fotografía. Las fuentes privadas y los documentos de envío permanecen fuera del repositorio.

Fuente principal: CV completo revisado por Luciano en Google Docs, https://docs.google.com/document/d/1akqpT3TojpGsIdtbOaJqT8Klwi-D6d8asegzqpbWBMI/edit. Los editables y versiones se mantienen en su carpeta de Drive. Para nuevas ediciones, conservar las rutas de descarga, revisar el PDF completo y comprobar que no se incorporen datos privados.

## Contenido

Experiencia en cronología inversa, con énfasis en laboratorios, calidad, aguas, investigación y ambiente. Licenciatura en Química como estudios parciales sin graduación; YPF S.A. separada de la refinería; Instituto Niño Jesús como antecedente docente de Química de 2019. Se incorporan OpenAQ, ECSA, CanAirIO, AireCiudadano y Sensor.Community y la continuidad de Ciencia Ciudadana Ambiental en Aire Escolar, distinguiendo objetivos de resultados.

Se conservan atribución, autorización y licencia CC BY-NC-SA 4.0 de Jeff Bigler. Referencias y premios según el CV revisado, sin agregar DOI ni mediciones de impacto.

## Verificación

Ejecutar `hugo --minify`; comprobar navegación, anclas, compatibilidad de `/cv/`, descargas, contacto público, escritorio, móvil y modo oscuro. Compilar Hugo no valida Quartz. Publicar requiere aprobación de Luciano.
