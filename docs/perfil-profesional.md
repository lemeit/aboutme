# Perfil personal y trayectoria web

## Páginas y diseño

- `hugo.toml`: presentación breve de la portada, menú «Trayectoria» y correo del pie.
- `content/about.md`: biografía, intereses, proyectos e hitos personales.
- `content/cv.md`: selección de experiencia, docencia, proyectos, formación y producción académica.
- `layouts/profile.html` y `assets/css/extended/profile.css`: presentación compartida, navegación entre páginas, foco visible, texto justificado en pantallas amplias y alineado al inicio en pantallas angostas. Estilos acotados al perfil; en modo oscuro los enlaces usan un naranja más claro para mejorar el contraste.

La versión web no ofrece descarga de PDF. Se conserva `/about/` y se agrega `/cv/`; los materiales educativos y los proyectos mantienen sus rutas. Quartz no se modifica ni se incluye en la validación de Hugo.

## Fuentes

Biografía e intereses: contenido del portal. Títulos, cargos, períodos y publicaciones: CV original de Drive consultado el 23/10/2026, sin modificarlo. Premio de octubre de 2026 y capacitaciones recientes: información aportada por Luciano en esta conversación. No se incorporan datos personales privados, números de afiliación, DNI ni CUIL.

Se aplicaron las correcciones de Luciano: encabezado centrado en ingeniería y docencia de Física y Química; nombres completos de organismos provinciales; Refinería La Plata separada de YPF SA; Licenciatura en Química como estudios parciales sin graduación. Para contacto público se usa el alias `info@lemeit.ar` y se evita exponer el correo personal. Se omitieron la línea de las nueve capacitaciones y 128 horas y el subtítulo «Geotecnologías y programación». En la web se abreviaron algunos nombres de cursos para facilitar la lectura.

La organización personal de «Sobre mí» toma como referencia https://olivi-eh.dev/about/: intereses y una cronología breve, sin copiar sus experiencias personales. Para distinguir CV amplio, résumé y perfil académico se consultaron https://capd.mit.edu/resources/cvs/ y perfiles de ingeniería del MIT y Stanford.

## Referencias que requieren contraste adicional

- La noticia institucional https://www.vialidad.gba.gov.ar/noticias/2572 no pudo consultarse; el premio se incorpora como dato aportado por Luciano.
- Las tres publicaciones se transcriben según el CV, sin agregar DOI ni rangos de páginas no documentados.
- La entrada sobre arsénico del CV contiene una discrepancia entre el nombre «COPIME 2009» y la fecha 2010 en la lista de congresos, y una diferencia en la inicial de Ramirez. Se conserva el premio de 2009 de la sección de distinciones y se omite la presentación dudosa.
- La entrada de 2003 mezcla dos eventos y queda fuera de esta selección.
- No se asignan fechas de inicio a las materias actuales del Instituto Niño Jesús: el CV no las detalla y el portal documenta las materias.

Para una futura descarga, generar el CV completo desde una fuente de datos compartida y validar el PDF antes de enlazarlo. No agregar el Word original ni certificados privados al repositorio.
