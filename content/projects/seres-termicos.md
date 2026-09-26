+++
title = 'Seres Térmicos'
date = '2026-09-25'
lastmod = '2026-09-25'
weight = 10
draft = false
math = true
tags = ['física', 'simulación', 'WebGL2', 'Borges', 'visualización']
description = 'Experimento de física computacional inspirado en el cuento de Borges. Simulaciones interactivas de campos térmicos con ciclo de vida, renderizado volumétrico 3D y visualización espaciotemporal.'
+++

> "cada hombre, cada ser, era un organismo hecho de temperaturas cambiantes.
> La humanidad de la época saturnina fue un ciego y sordo e impalpable
> conjunto de calores y fríos articulados."
>
> — Jorge Luis Borges, *Seres Térmicos* (en *Atlas*, 1984)

¿Qué pasa si tomamos esa descripción como especificación física? Los seres no tienen cuerpo sólido ni gaseoso: son distribuciones de calor y frío que nacen del vacío, consumen energía, se reproducen y mueren. Este proyecto es el intento de simularlo.

## Simulaciones

| Versión | Descripción | Abrir |
|---------|-------------|-------|
| **v06 — Ciclo de vida** | Campo 2D · presupuesto energético individual · nacimiento, metabolismo y muerte · gráficas en tiempo real | [▶ abrir](https://lemeit.github.io/simus/seres-termicos/v06-ciclovida.html) |
| **v07 — 3D esférico** | Campo 3D en esfera de plasma · ray marching WebGL2 · doble perspectiva: cósmica e interior · rotar con mouse · Tab para cambiar de ser | [▶ abrir](https://lemeit.github.io/simus/seres-termicos/v07-3d.html) |
| **v08 — Espaciotiempo** | Campo 2D × tiempo → volumen 3D · worldtubes borgesianos · Espacio para pausar | [▶ abrir](https://lemeit.github.io/simus/seres-termicos/v08-espaciotiempo.html) |

*Corren completamente en el navegador. No requieren instalación ni servidor.*

## Física

### El campo térmico

El sistema resuelve la ecuación del calor con fuentes individuales y disipación del vacío:

$$\frac{\partial T}{\partial t} = \alpha \nabla^2 T - \lambda T + \sum_i S_i(\mathbf{r}, t)$$

- $\alpha \nabla^2 T$: difusión — el calor fluye de zonas calientes a frías (laplaciano discreto de 5 puntos en 2D, 7 puntos en 3D)
- $-\lambda T$: el vacío vuelve a $T=0$ sin seres que lo sostengan
- $\sum_i S_i$: cada ser inyecta (o extrae) calor en su posición

### El cuerpo de un ser

Cada ser $i$ existe como una gaussiana en el campo:

$$S_i(\mathbf{r}, t) = \frac{E_i}{E_0} \cdot A \cdot \exp\!\left(-\frac{|\mathbf{r}-\mathbf{r}_i|^2}{2\sigma_i^2}\right) \cdot \bigl[1 + a\sin(\omega_i t + \phi_i)\bigr]$$

El factor $E_i/E_0$ apaga el cuerpo gradualmente conforme el ser pierde energía. El término oscilatorio $\sin(\omega_i t + \phi_i)$ da a cada ser su propio pulso vital.

### Metabolismo y ciclo de vida

La energía se drena a tasa constante — existir tiene un costo:

$$\frac{dE_i}{dt} = -\mu \qquad \Rightarrow \qquad t_{\text{vida}} = \frac{E_0}{\mu}$$

Las condiciones del ciclo completo:

| Evento | Condición |
|--------|-----------|
| Nacimiento | fluctuación aleatoria en el vacío |
| Reproducción | $E_i > r \cdot E_0$ → dos seres con $E = 0.6\,E_0$ y $0.4\,E_0$ |
| Muerte | $E_i \leq 0$ → el cuerpo desaparece; $-\lambda T$ disipa el calor residual |

### Discretización numérica

El campo se integra con Euler explícito. En 2D:

$$T_{i,j}^{n+1} = T_{i,j}^n + k\underbrace{\bigl(T_{i+1,j}+T_{i-1,j}+T_{i,j+1}+T_{i,j-1}-4T_{i,j}\bigr)}_{\nabla^2 T \text{ discreto}} - \lambda\,T_{i,j}^n + S_{i,j}^n$$

La estabilidad requiere $k = \alpha\,\Delta t/\Delta x^2 \leq 1/4$ en 2D y $\leq 1/6$ en 3D (condición de von Neumann). El código usa $k \approx 0.04$, bien dentro del margen estable.

### Visualización 3D: ray marching

El campo $T(x,y,z)$ es un escalar en cada punto del espacio; para verlo se lanza un rayo por cada píxel y se acumulan contribuciones a lo largo del rayo (composición front-to-back):

$$C_{\text{out}} = C_{\text{in}} + (1-\alpha_{\text{in}}) \cdot \sigma \cdot C_{\text{voxel}}, \qquad \sigma \propto |T|$$

En v07 el universo está confinado en una **esfera** (intersección rayo-esfera: $|\mathbf{r}|^2 = R^2$). Desde afuera se ve una bola de plasma naranja/cian. Desde adentro —la vista desde uno de los seres— los otros seres aparecen como masas brillantes flotando en la penumbra.

### Espaciotiempo (v08)

Acumulando $N$ frames del campo 2D como capas en el eje $z$, se construye el volumen:

$$\mathcal{T}(x, y, \tau) = T\!\left(x, y,\; t_0 + \tau\,\Delta t\right)$$

En esa representación un ser que vive $F$ frames es un **tubo** de longitud $F$ en el eje temporal. El nacimiento es el inicio del tubo, la muerte es su fin, y la reproducción es una bifurcación geométrica — exactamente la imagen borgiana: no objetos que se mueven, sino formas en el tiempo.

## Código fuente

[github.com/lemeit/simus](https://github.com/lemeit/simus) — todo en HTML/JS puro, sin dependencias, sin build step.
