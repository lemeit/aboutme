# Identidad lemeit — L caligráfica

Variante B «Pluma», elegida por Luciano Lamaita el 26 de octubre de 2026 a partir de su boceto manuscrito. El símbolo está dibujado como curvas vectoriales; no depende de una tipografía instalada.

## Archivos

- `static/images/logos/lemeit.svg`: símbolo naranja oscuro `#9B3D00` para fondos claros, transparente.
- `static/images/logos/lemeit-oscuro.svg`: símbolo naranja `#C45A00` para fondos oscuros, transparente.
- `static/favicon.svg`: adaptación óptica con trazo reforzado y fondo carbón `#1A1612`, diseñada para tamaños pequeños.

La ruta del favicon permanece igual para conservar las referencias existentes. Una aplicación externa que use esa URL podrá mostrar el símbolo nuevo cuando renueve su caché; no se modifica desde este repositorio la configuración de la wiki de proyectos. El logotipo de Conceptos/Quartz y los logos de materias mantienen sus identidades actuales.

## Animación futura

Idea acordada para explorar más adelante: una secuencia de puntos sugiere una curva, se convierte en un trazo continuo y termina formando la L. Es una metáfora visual, no una deducción ni una definición formal de línea a partir de puntos.

El camino principal tiene identificador `trazo` y el refuerzo de pluma `pluma`, para poder animar el recorrido cuando se solicite. Mantener una versión estática y respetar `prefers-reduced-motion` en esa implementación futura. Esta versión no incorpora animación.
