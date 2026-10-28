+++
title = 'Identidad visual'
description = 'La firma caligráfica, los colores del sitio y la física de su animación.'
date = '2026-10-28'
lastmod = '2026-10-28'
author = 'Prof. Lamaita'
math = true
ShowToc = true
[build]
  list = 'never'
+++


La identidad reúne mi apellido, la escritura matemática y el trabajo con modelos. El diseño busca acompañar la lectura de apuntes, proyectos y experiencias sin competir con ellos.

## Una L como firma

La **L caligráfica** remite a Lamaita y a la escritura a mano de los cuadernos científicos. Su forma evoca también el símbolo $\mathcal{L}$ utilizado para el **lagrangiano**, una función que permite formular las ecuaciones de movimiento. Es una asociación visual: la letra tiene un trazado diseñado, no surge espontáneamente de una ley física.

En el encabezado funciona como una firma pequeña, junto al nombre. Se dibuja una vez y después permanece quieta para facilitar la lectura. Aquí puede verse con más detalle: un punto sigue una trayectoria y deja una línea luminosa; al completar el trazo aparece el lagrangiano del modelo.

{{< brand-demo >}}
$$
\mathcal{L}(\mathbf r,\dot{\mathbf r},t)
=\underbrace{\frac12 m\lVert\dot{\mathbf r}\rVert^2}_{T}
-\underbrace{\frac12 k\lVert\mathbf r-\mathbf r_0(t)\rVert^2}_{V}.
$$
{{< /brand-demo >}}

## La física detrás del trazo

La punta tiene una posición $\mathbf r=(x,y)$ y sigue un objetivo móvil $\mathbf r_0(t)$ que recorre la L. El modelo equivale a una masa unida a ese objetivo mediante un resorte: la energía cinética es $T$ y la energía potencial elástica es $V$. El lagrangiano es su diferencia, $\mathcal{L}=T-V$.

Para que la punta se estabilice se agrega amortiguamiento viscoso, descrito por la función de disipación de Rayleigh:

$$
\mathcal{R}=\frac12 c\lVert\dot{\mathbf r}\rVert^2,
\qquad
\frac{d}{dt}\frac{\partial\mathcal{L}}{\partial\dot r_i}
-\frac{\partial\mathcal{L}}{\partial r_i}
=-\frac{\partial\mathcal{R}}{\partial\dot r_i},
\quad r_i\in\{x,y\}.
$$

Así se obtiene la ecuación que mueve la punta:

$$
m\ddot{\mathbf r}=k\bigl(\mathbf r_0(t)-\mathbf r\bigr)-c\dot{\mathbf r}.
$$

La animación usa $m=1$, $k=144$ y $c=18$ en coordenadas y tiempo internos del dibujo, sin representar una medición física. Integra la ecuación con Euler semiimplícito y pasos de hasta $1/120$ de segundo. El objetivo recorre la letra en ocho segundos; el pequeño retraso de la punta respecto de ese objetivo resulta de la dinámica. El brillo es un recurso gráfico. Como el objetivo se mueve y existe disipación, la energía mecánica de la punta no se conserva.

## Color, tipografía y navegación

- **Paleta X-Wing, inspirada en Poe Dameron:** naranja quemado `#9B3D00`, crema `#FAF7F2` y tonos oscuros cálidos. El naranja destaca enlaces y detalles; el fondo claro deja protagonismo al contenido. El modo oscuro utiliza un fondo `#1A1612` y adapta los acentos para mantener la lectura.
- **Tipografía sin serif:** el portal usa la familia de interfaz disponible en cada sistema —por ejemplo, Segoe UI— y alternativas equivalentes. Favorece una lectura sencilla sin imponer una tipografía decorativa al texto. El contenido en chino utiliza Noto Sans SC; las ecuaciones conservan su composición matemática.
- **Firma caligráfica y estructura minimalista:** la expresividad queda concentrada en la L; los textos, botones y separadores mantienen formas sencillas. Los logotipos de las materias y herramientas conservan una familia de trazos y colores coherente.
- **Hugo y PaperMod:** proporcionan la estructura del portal, con estilos propios para apuntes, proyectos y simulaciones. El encabezado compacto permanece disponible durante la lectura; reúne el nombre, los idiomas y la navegación. El mapa de conceptos utiliza Quartz, una presentación distinta para explorar relaciones entre ideas.

La animación respeta la preferencia de movimiento reducido del dispositivo: en ese caso se muestra la firma terminada y la ecuación directamente.
