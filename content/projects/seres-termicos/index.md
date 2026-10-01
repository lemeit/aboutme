+++
title = 'Seres Térmicos'
date = '2026-09-25'
lastmod = '2026-09-25'
weight = 10
draft = false
math = true
tags = ['física', 'simulación', 'WebGL2', 'Canvas2D', 'Borges', 'visualización', 'difusión']
description = 'Experimento de física computacional inspirado en el texto de Borges. Dos líneas de exploración: campo térmico con ciclo de vida (2D, 3D, espaciotiempo) y un bestiario de organismos térmicos con taxonomía emergente.'
+++

> "cada hombre, cada ser, era un organismo hecho de temperaturas cambiantes.
> La humanidad de la época saturnina fue un ciego y sordo e impalpable
> conjunto de calores y fríos articulados."
>
> — Jorge Luis Borges (con Margarita Guerrero), «Seres Térmicos»,
> *El libro de los seres imaginarios* (1957, ampliado en 1967)

¿Qué pasa si tomamos esa descripción como especificación física? Los seres no
tienen cuerpo sólido ni gaseoso: son distribuciones de calor y frío. Este
proyecto lo simula por dos caminos que comparten la misma columna vertebral
(la ecuación de la difusión del calor) pero discrepan en qué *es* un ser:

- **Línea CAMPO**: el ser es una fuente gaussiana con presupuesto energético.
  Nace del vacío, metaboliza, se reproduce, muere. La pregunta es ecológica.
- **Línea BESTIARIO**: el ser es un organismo articulado de temperaturas, con
  una naturaleza propia. La pregunta es taxonómica: ¿qué niveles de existencia
  térmica admiten las ecuaciones?

## Simulaciones

| Línea | Versión | Descripción | Documentación |
|-------|---------|-------------|---------------|
| Campo | **v06 — Ciclo de vida** | Campo 2D · presupuesto energético individual · nacimiento, metabolismo y muerte · gráficas en tiempo real | [ver →]({{< relref "/projects/seres-termicos/v06-ciclovida" >}}) |
| Campo | **v07 — 3D esférico** | Campo 3D en esfera de plasma · ray marching WebGL2 · doble perspectiva: cósmica e interior · Tab cambia de ser | [ver →]({{< relref "/projects/seres-termicos/v07-3d" >}}) |
| Campo | **v08 — Espaciotiempo** | Campo 2D × tiempo → volumen 3D · worldtubes borgesianos | [ver →]({{< relref "/projects/seres-termicos/v08-espaciotiempo" >}}) |
| Bestiario | **B1 — Bestiario** | Organismos articulados · 5 niveles · fichas · termotaxis · crónica | *embebida abajo* |

*Corren completamente en el navegador. No requieren instalación ni servidor.*

La simulación de la línea Bestiario está embebida abajo — la barra del
recuadro permite abrirlo en pantalla completa o en pestaña nueva.

{{< sim src="/simus/seres-termicos/bestiario.html" title="Seres Térmicos — Bestiario (línea B, v1)" >}}

### Cómo explorar el bestiario

- **Rozar** el campo deja una brasa; **mantener pulsado** sopla aliento gélido.
- **F** / **V** invocan un ser frío o un espíritu de fuego.
- **Clic sobre un ser** abre su ficha del bestiario.
- Los fríos *buscan* el calor y los sobrecalentados lo evitan: es la ley de
  Fourier volviéndose conducta. Invocá un fuego y esperá a que un vecino
  ascienda de nivel; nadie lo guioniza.

## Física

### El campo térmico (común a ambas líneas)

El sistema resuelve la ecuación del calor:

 $$\frac{\partial T}{\partial t} = \alpha \nabla^2 T$$ 
- $\alpha \nabla^2 T$: difusión — el calor fluye de zonas calientes a frías
  (laplaciano discreto de 5 puntos en 2D, 7 puntos en 3D)
- $-\lambda T$: el vacío vuelve a $T=0$ sin fuentes que lo sostengan
  (en el bestiario aparece como persistencia multiplicativa $p = 1-\lambda\Delta t$)
- Fuentes: en la línea Campo, $\sum_i S_i(\mathbf{r},t)$; en el Bestiario,
  el cuerpo de cada ser escribe su temperatura sobre el campo y absorbe la del medio

### Línea CAMPO

#### El cuerpo de un ser

Cada ser $i$ existe como una gaussiana en el campo:

 $$S_i(\mathbf{r}, t) = \frac{E_i}{E_0} \cdot A \cdot \exp\!\left(-\frac{|\mathbf{r}-\mathbf{r}_i|^2}{2\sigma_i^2}\right) \cdot \bigl[1 + a\sin(\omega_i t + \phi_i)\bigr]$$ 
El factor $E_i/E_0$ apaga el cuerpo gradualmente conforme el ser pierde
energía. El término oscilatorio da a cada ser su propio pulso vital.

#### Metabolismo y ciclo de vida

La energía se drena a tasa constante — existir tiene un costo:

 $$\frac{dE_i}{dt} = -\mu \qquad \Rightarrow \qquad t_{\text{vida}} = \frac{E_0}{\mu}$$ 
| Evento | Condición |
|--------|-----------|
| Nacimiento | fluctuación aleatoria en el vacío |
| Reproducción | $E_i > r \cdot E_0$ → dos seres con $E = 0.6\,E_0$ y $0.4\,E_0$ |
| Muerte | $E_i \leq 0$ → el cuerpo desaparece; $-\lambda T$ disipa el calor residual |

#### Discretización numérica

El campo se integra con Euler explícito. En 2D:

 $$T_{i,j}^{n+1} = T_{i,j}^n + k\underbrace{\bigl(T_{i+1,j}+T_{i-1,j}+T_{i,j+1}+T_{i,j-1}-4T_{i,j}\bigr)}_{\nabla^2 T \text{ discreto}} - \lambda\,T_{i,j}^n + S_{i,j}^n$$ 
La estabilidad requiere $k = \alpha\,\Delta t/\Delta x^2 \leq 1/4$ en 2D y
 $\leq 1/6$ en 3D (condición de von Neumann). El código usa $k \approx 0.04$,
bien dentro del margen estable.

#### Visualización 3D: ray marching

El campo $T(x,y,z)$ es un escalar en cada punto; para verlo se lanza un rayo
por cada píxel y se acumulan contribuciones a lo largo del rayo
(composición front-to-back):

 $$C_{\text{out}} = C_{\text{in}} + (1-\alpha_{\text{in}}) \cdot \sigma \cdot C_{\text{voxel}}, \qquad \sigma \propto |T|$$ 
En v07 el universo está confinado en una **esfera**
($|\mathbf{r}|^2 = R^2$). Desde afuera, una bola de plasma naranja/cian.
Desde adentro —la vista de uno de los seres— los demás aparecen como masas
brillantes flotando en la penumbra.

#### Espaciotiempo (v08)

Acumulando $N$ frames del campo 2D como capas en el eje $z$:

 $$\mathcal{T}(x, y, \tau) = T\!\left(x, y,\; t_0 + \tau\,\Delta t\right)$$ 
Un ser que vive $F$ frames es un **tubo** de longitud $F$ en el eje temporal.
El nacimiento es el inicio del tubo, la muerte su fin, la reproducción una
bifurcación geométrica — exactamente la imagen borgiana: no objetos que se
mueven, sino formas en el tiempo.

### Línea BESTIARIO (B1)

#### La cita como especificación

Tres cláusulas del texto, tres decisiones de diseño:

| Cláusula | Requisito técnico |
|----------|-------------------|
| «organismo hecho de temperaturas cambiantes» | el ser no tiene geometría propia: su estado es un vector de temperaturas |
| «calores y fríos articulados» | el cuerpo es una cadena acoplada donde el calor difunde entre partes |
| «espíritus del fuego animaron los cuerpos» | hay una fuente interna —un *fuego innato*— que sostiene al cuerpo contra la disipación |

#### El cuerpo: una cadena de órganos

Cada ser es una cadena de $N$ órganos con temperaturas $T_i$:

 $$\frac{dT_i}{dt} = \underbrace{A_i\sin(\omega_i t+\varphi_i)}_{\text{latido}} + \underbrace{\kappa\,T_{\text{campo}}(x_i,y_i)}_{\text{absorción}} + \underbrace{k_r(T_{\text{set}}-T_i)}_{\text{fuego innato}} - \underbrace{\lambda T_i}_{\text{disipación}} + \underbrace{D\,(T_{i-1}+T_{i+1}-2T_i)}_{\text{difusión interna}}$$ 
- Las frecuencias $\omega_i$ se sortean en $[0.10, 0.40]$ Hz: dos seres casi
  nunca comparten frecuencia y el conjunto es cuasi-periódico — el patrón
  global no se repite nunca.
- El término $D$ es el laplaciano 1D: el calor fluye por el cuerpo como por
  una varilla. Una onda térmica nacida en la cabeza recorre el ser hasta la
  cola: eso es la *articulación*.
- $\kappa$ acopla el cuerpo al medio; un splat gaussiano devuelve temperatura
  al campo. El acoplamiento es bidireccional: sin eso no hay ecología.

#### Los niveles son equilibrios, no estados

En campo neutro, la ODE del cuerpo tiene un único equilibrio:

 $$T^* = \frac{k_r}{k_r+\lambda}\,T_{\text{set}} \approx 0.86\,T_{\text{set}} \qquad (k_r = 0.5,\; \lambda = 0.08)$$ 
El nivel del bestiario se **lee** de la temperatura media $\bar T$ — no es un
sprite ni un contador programado:

| $\bar T$ | Nivel |
|----------|-------|
| $\bar T < -0.55$ | Forma Térmica |
| $-0.55 \leq \bar T < -0.15$ | Cuerpo Saturnino |
| $-0.15 \leq \bar T < 0.25$ | Ser Articulado |
| $0.25 \leq \bar T < 0.68$ | Cuerpo Encendido |
| $\bar T \geq 0.68$ | Espíritu del Fuego |

Un ser con $T_{\text{set}} = +0.9$ estabiliza en $\bar T \approx 0.78$:
Espíritu del Fuego. Uno con $-0.9$: Forma Térmica. Y como el campo acopla
vecinos, un cuerpo neutro que se acerca a un espíritu sube su $\bar T$ y
cruza umbrales: el ascenso es termodinámico, no guion.

#### Termotaxis: conducta sin conducta

 $$\vec{F} = v\,\sigma(\bar T)\,\nabla T, \qquad \sigma(\bar T) = 1-2\,S(\bar T)$$ 
donde $S$ es un smoothstep: frío ($\sigma=+1$) asciende el gradiente térmico;
caliente ($\sigma=-1$) lo evita. Es la estructura de la quimiotaxis
bacteriana, con temperatura en lugar de nutriente. El cursor no existe en el
código de los seres: al dibujar una brasa creás un gradiente, y ellos lo
escalan. *Buscar el fuego* es una consecuencia, no una función.

#### Render: hacer visible la física

- **LUT de incandescencia**: $T \in [-1,1]$ mapeado a hielo profundo → vacío
  casi negro → rojo → ámbar → blanco. El vacío térmico es oscuridad.
- **Cuerpos translúcidos**: cada segmento entre órganos se dibuja con
  opacidad $\propto |T_i - T_{i+1}|$ — la ley de Fourier ($q \propto \nabla T$)
  convertida en canal alfa. Un ser en equilibrio interno es *invisible*:
  solo brilla donde el calor fluye. El «impalpable» emerge del render.
- **Worldlines**: con persistencia alta ($p \approx 0.999$) y difusión baja,
  cada ser pinta su historia en el plano — el equivalente 2D de los
  worldtubes de v08, pero escrito por la memoria del campo en vez de
  construirse explícitamente.

## Código fuente

[github.com/lemeit/simus](https://github.com/lemeit/simus) — todo en
HTML/JS puro, sin dependencias, sin build step.