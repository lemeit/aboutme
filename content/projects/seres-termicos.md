+++
title = 'Seres Térmicos'
date = '2026-09-25'
lastmod = '2026-10-26'
weight = 10
draft = false
math = true
ShowToc = true
TocOpen = true
tags = ['física', 'simulación', 'WebGL2', 'Canvas2D', 'Borges', 'visualización', 'difusión']
description = 'Desde dos cuerpos que intercambian calor hasta difusión en 3D y organismos activos: recorrido visual de termodinámica para secundaria, con animación, gráficas y ecuaciones.'
+++

> "cada hombre, cada ser, era un organismo hecho de temperaturas cambiantes.
> La humanidad de la época saturnina fue un ciego y sordo e impalpable
> conjunto de calores y fríos articulados."
>
> — Jorge Luis Borges (con Margarita Guerrero), «Seres Térmicos»,
> *El libro de los seres imaginarios* (FCE, 1957; ed. ampliada 1967)

Borges describe una cosmología imaginaria (derivada de Rudolf Steiner) en la que los seres
no tienen cuerpo sólido, líquido ni gaseoso. Son únicamente **formas térmicas**: distribuciones
de calor y frío que se articulan en el espacio cósmico.

La pregunta que guía este proyecto:

> ¿Podemos convertir esa metáfora en un sistema dinámico computacional?
> ¿Qué aspecto tendría un organismo cuya única realidad fuera su estado térmico?

El proyecto tiene dos recorridos: **el orden para aprender** y **la historia de los modelos**. Para empezar no hace falta saber derivadas ni programar. Primero leemos una temperatura, después estudiamos cómo cambia y recién entonces agregamos campos e individuos. Las versiones históricas se conservan para comparar hipótesis; no son escalones que haya que entender todos a la vez.

## Prólogo — El primer encuentro

Antes de explorar seres y campos, observamos un intercambio de energía entre dos cuerpos. Cada uno tiene una sola temperatura: todavía no necesitamos partículas, moléculas ni coordenadas espaciales.

Uno empieza a 80 °C y otro a 20 °C. **¿Cuál se calentará? ¿A qué temperatura se acercarán? ¿Se transfiere calor igual de rápido durante todo el proceso?**

{{< sim src="/simus/seres-termicos/v00-contacto-termico.html" title="Prólogo — El primer encuentro" height="1100" >}}

[Prólogo — El primer encuentro](/simus/seres-termicos/v00-contacto-termico.html). En el celular, la pestaña propia facilita recorrer la escena, la gráfica y los controles.

### Qué muestra cada representación

- **Los bloques:** A y B, con su temperatura actual. El color ayuda a leer, pero no representa radiación ni una estructura microscópica.
- **La gráfica cartesiana:** X es tiempo en segundos; Y es temperatura en °C. Las curvas son dos termómetros que registran el mismo proceso. La línea punteada indica el equilibrio previsto si se mantiene el contacto.
- **La flecha:** sentido de la transferencia, del cuerpo más caliente al más frío. Al separarlos se anula el intercambio; no aparece un flujo de “frío” en dirección opuesta.
- **Los watts y joules:** la potencia indica cuánta energía pasa por segundo; el calor transferido acumula esa energía a lo largo del proceso.

### Dos ecuaciones para empezar

$$
Q=C,Delta T,qquad C=m,c
$$

Q es el calor neto recibido, en joules. C es la capacidad térmica: energía necesaria para aumentar un grado la temperatura del cuerpo. En este modelo, sin trabajo ni cambio de fase, el calor recibido es igual al cambio de energía interna. **El cuerpo tiene energía interna; el calor es energía que se transfiere.**

$$
P=G,(T_A-T_B)
$$

Elegimos una ley de intercambio proporcional a la diferencia de temperatura, con conductancia G constante. P es positiva de A hacia B; si B está más caliente, P es negativa y la flecha cambia de sentido. La unidad W significa J/s. Esta ley de contacto determina la rapidez; no se deduce de la ley cero.

Para cuerpos con la misma capacidad térmica, 80 °C y 20 °C dan un equilibrio de 50 °C. Si B tiene el doble de masa y el mismo material, su temperatura cambia menos: el equilibrio pasa a 40 °C. Cambiar G modifica la rapidez, no ese valor final.

### Qué estamos suponiendo

La pareja está aislada del ambiente. Cada cuerpo permanece uniforme internamente, con masa y calor específico constantes. No hay trabajo, fuentes externas ni cambios de fase. Lo que pierde A lo gana B: **Q_A + Q_B = 0**. La solución de contacto se calcula con su decaimiento exponencial exacto, no con una animación inventada.

La igualdad exacta se alcanza como límite; el aviso “prácticamente en equilibrio” usa una diferencia menor que 0,1 °C. Los cuerpos y su color son esquemáticos, no una simulación de moléculas.

La experiencia introduce equilibrio térmico y conecta con conservación de energía y dirección espontánea del intercambio. **La ley cero añade transitividad:** si dos cuerpos están, por separado, en equilibrio con un mismo termómetro, tienen la misma temperatura. No afirma qué rápido intercambian calor.

### Probá antes de seguir

1. Anticipá el valor final y después iniciá el contacto.
2. Separá a los cuerpos a mitad del proceso: ¿cómo siguen las curvas?
3. Repetí con mayor conductancia: compará el valor final y la rapidez.
4. Duplicá la masa de B: ¿por qué ya no terminan en el promedio simple?
5. Probá temperaturas iguales: ¿hay transferencia neta?

### El relato continúa

[Entrar al recorrido visual completo](/simus/seres-termicos/termodinamica.html). Las nueve actividades están disponibles; los detalles de cada modelo quedan plegados dentro de su página.

| Parte del relato | Abrir actividad | Qué explora |
| --- | --- | --- |
| Prólogo | [Prólogo — El primer encuentro](/simus/seres-termicos/v00-contacto-termico.html) | Contacto entre cuerpos uniformes |
| Acto I | [Acto I — El calor deja una huella](/simus/seres-termicos/v01-calor-capacidad.html) | Calorimetría ideal |
| Acto II | [Acto II — La energía cruza la frontera](/simus/seres-termicos/v02-primera-ley.html) | Balance de energía prescrito |
| Acto III | [Acto III — La dirección del cambio](/simus/seres-termicos/v03-entropia.html) | Contacto y entropía en kelvin |
| Acto IV | [Acto IV — El límite del frío](/simus/seres-termicos/v04-tercera-ley.html) | Curva conceptual a baja temperatura |
| Acto V | [Acto V — Una pendiente conduce calor](/simus/seres-termicos/v05-conduccion-fourier.html) | Conducción estacionaria con reservorios |
| Acto VI | [Acto VI — El calor recorre una línea](/simus/seres-termicos/v06-difusion-1d.html) | Difusión conservativa en una dimensión |
| Acto VII | [Acto VII — La línea se vuelve superficie](/simus/seres-termicos/v07-difusion-2d.html) | Difusión conservativa en dos dimensiones |
| Acto VIII | [Acto VIII — El calor habita un volumen](/simus/seres-termicos/v08-difusion-3d.html) | Difusión conservativa en tres dimensiones |

El Interludio de la [Interludio — Una recta de temperaturas](/simus/seres-termicos/v00-temperatura.html) conserva su ruta. Es un complemento para el perfil estacionario: allí X es posición; en el contacto animado X es tiempo. Este orden de enseñanza no cambia la numeración histórica de los archivos v01–v08 ni V4.1–V4.6.

La [guía física y cronológica completa](/projects/seres-termicos/guia-fisica/) reúne las 52 ecuaciones y los límites de cada modelo. Podés dejarla para después de explorar los primeros pasos.

El recorrido que sigue documenta esas ramas. **Un patrón no demuestra vida biológica; una regla de conducta programada tampoco se deduce de la ley de Fourier.**

---

## Acto IX — El campo que disuelve

El primer intento usa la **ecuación del calor**:


$$
\frac{\partial T}{\partial t} = \alpha \nabla^2 T
$$

Esta ecuación describe cómo se difunde el calor en un medio. Es elegante y correcta para
describir difusión. Sin fuentes y con condiciones de borde adecuadas, las diferencias de temperatura se suavizan. Con bordes aislantes se alcanza una temperatura uniforme; con temperaturas impuestas puede mantenerse un perfil no uniforme, como en el Interludio de la recta. La difusión pasiva por sí sola no define metabolismo, reproducción ni organismos.

**v01 — el campo**: seres como fuentes gaussianas sobre esa ecuación. Son agentes y fuentes prescritos: se mueven e intercambian aportes con un campo persistente. Esta versión no implementa un ciclo vital autónomo.

**v02 — gradiente** acopla los seres al campo: leen $\nabla T$ y responden.


$$
\vec{F}_i = -\text{type}_i \cdot k \cdot \nabla T(\vec{x}_i)
$$

Los calientes huyen del gradiente, los fríos lo siguen: se persiguen a través del medio
que ellos mismos calientan y enfrían. El movimiento es más interesante, pero los "seres"
siguen siendo **objetos programados** en un campo pasivo. No emergen. No se reproducen.
No mueren espontáneamente.

▶ [Acto IX · Escena I — El campo que disuelve](/simus/seres-termicos/v01-campo.html) · [Acto IX · Escena II — Seguir el gradiente](/simus/seres-termicos/v02-gradiente.html)

{{< sim src="/simus/seres-termicos/v02-gradiente.html" title="v02 — seres leyendo el gradiente" height="700" >}}

---

## Interludio — El salto: estructuras disipativas

**Ilya Prigogine** (Premio Nobel de Química, 1977) demostró que los sistemas lejos del
equilibrio termodinámico pueden **auto-organizarse**: mantener estructuras ordenadas
consumiendo energía del entorno. Llamó a estas estructuras *disipativas*.

Ejemplos reales: las células de Bénard (convección), el oscilador de Belousov-Zhabotinsky,
y —en última instancia— los seres vivos. Un balance que ayuda a describirlos es:

$$
\frac{dS}{dt}=\dot S_e+\dot S_i,\qquad \dot S_i\geq0
$$
El término de intercambio con el entorno es $\dot S_e$ y la producción interna es $\dot S_i$. En un estado estacionario la entropía del sistema no cambia: el intercambio compensa la producción interna. Este balance no es un criterio suficiente para identificar vida.

La rama de reacción-difusión que exploramos a continuación usa tres ingredientes propios de ese modelo; no son requisitos universales para todo sistema abierto:

1. **No linealidad** — términos como $uv^2$ (autocatálisis)
2. **Dos campos acoplados** — un activador y un inhibidor
3. **Fuente de energía externa** — que mantenga el sistema lejos del equilibrio

---

## Acto X — Las formas que aparecen

Las ecuaciones de reacción-difusión de Gray-Scott son:


$$
\frac{\partial u}{\partial t} = D_u \nabla^2 u \;-\; uv^2 \;+\; F(1-u)
$$


$$
\frac{\partial v}{\partial t} = D_v \nabla^2 v \;+\; uv^2 \;-\; (F+k)\,v
$$

### Variables

| Variable | Interpretación física | Interpretación poética |
|----------|----------------------|----------------------|
| $u(x,y,t)$ | Concentración del sustrato (alimento) | El vacío cósmico, fuente de energía |
| $v(x,y,t)$ | Concentración del producto autocatalítico | Analogía visual del ser; no es temperatura |

### Términos

| Término | Ecuación | Significado |
|---------|----------|-------------|
| $D_u \nabla^2 u$ | en $\partial u/\partial t$ | El sustrato difunde en el espacio |
| $D_v \nabla^2 v$ | en $\partial v/\partial t$ | La concentración de producto difunde; no es locomoción de un individuo |
| $-uv^2$ | en $\partial u/\partial t$ | El organismo *consume* sustrato |
| $+uv^2$ | en $\partial v/\partial t$ | Se forma producto por autocatálisis; una división de manchas puede aparecer según el régimen |
| $F(1-u)$ | en $\partial u/\partial t$ | El sustrato se *repone* desde el exterior (feed rate) |
| $-(F+k)v$ | en $\partial v/\partial t$ | El organismo *muere* a tasa $k$ |

El término clave es $uv^2$: para que $v$ se reproduzca necesita encontrar $u$ (alimento).
Si no hay alimento, $v$ desaparece. Este es el mecanismo de competencia y extinción.

### Mapa de comportamientos según (F, k)

| F | k | Comportamiento |
|---|---|----------------|
| 0.035 | 0.065 | Manchas que se dividen (reproducción) |
| 0.055 | 0.062 | Patrones coralinos, filamentos |
| 0.025 | 0.055 | Manchas estables, pulsan |
| 0.037 | 0.060 | Auto-replicación caótica |
| 0.060 | 0.062 | Laberintos, ondas espirales |

Con las mismas ecuaciones y distintos parámetros pueden aparecer manchas, filamentos o colapso. Son patrones de concentración, no organismos biológicos. El resultado depende también de la semilla, la malla y la resolución numérica.

▶ [Acto X · Escena I — Las manchas encuentran una forma](/simus/seres-termicos/v04-grayscott.html) · [Acto X · Escena II — Las ondas recorren el medio](/simus/seres-termicos/v05-fhn.html)

### Crecimiento, división y desaparición de patrones

En algunos regímenes, una mancha puede crecer, dividirse o desaparecer. Llamar a esas acciones “nacimiento” o “muerte” es una analogía. No todas las configuraciones recorren ese ciclo ni existe necesariamente una identidad individual de cada mancha.

El estado uniforme $u=1$, $v=0$ es una solución exacta. Sin una semilla o perturbación que introduzca producto, la dinámica determinista no lo genera de la nada, porque $uv^2=0$. La difusión redistribuye concentración; la reacción transforma las especies y los términos externos mantienen abierto el sistema.

### El límite conceptual

La descripción de Borges es notablemente precisa como metáfora física:

| Borges | Gray-Scott |
|--------|-----------|
| "organismo hecho de temperaturas cambiantes" | $v(x,y,t)$: concentración que fluctúa en el tiempo |
| "calores y fríos articulados" | los dos campos $u$ y $v$ acoplados |
| "ciego y sordo e impalpable" | no hay geometría fija; la forma es el estado instantáneo del campo |
| etapa saturnina: solo calor, sin materia sólida | campo continuo sin partículas discretas |
| "el calor es una sustancia más sutil que un gas" | $v$ como campo de concentración: no es un objeto, es una distribución |

Pero tanto Gray-Scott como FitzHugh-Nagumo tienen un problema conceptual respecto al cuento:

- **Gray-Scott** puede estabilizarse. Las manchas alcanzan un estado estático y se detienen.
  El campo es colectivo: no hay individuos distinguibles.
- **FitzHugh–Nagumo** puede producir ondas y espirales en ciertos parámetros; también admite otros regímenes.
  Tampoco hay individuos: es una *multitud* uniforme, no un conjunto articulado de seres.

Borges no describe una textura. Describe *seres*: entidades que nacen, existen brevemente
y mueren en el vacío cósmico. El "ciego y sordo e impalpable **conjunto**" implica que cada
elemento puede *contarse*. Eso requiere un modelo diferente.

---

## Acto XI — Contar a los individuos

En lugar de una PDE global que genera patrones, cada ser tiene su propia variable interna
de energía.

**Campo de fondo** (medio térmico modelado, con agentes como fuentes):

Aquí T es una variable relativa a la referencia ambiental. La palabra “vacío” pertenece a la metáfora visual: la difusión presupone un medio, no conducción por un vacío material.


$$
\frac{\partial T}{\partial t} = \alpha \nabla^2 T \;-\; \lambda T \;+\; \sum_i S_i(x,y)
$$

- $-\lambda T$: relajación del campo hacia la referencia por intercambio con un ambiente externo
- $S_i$: cada ser inyecta calor/frío proporcional a su energía

**Fuente del ser $i$** (su "cuerpo" térmico):


$$
S_i(x,y) = \underset{\text{amplitud}}{\frac{E_i}{E_0}} \cdot A \cdot \underset{\text{cuerpo gaussiano}}{e^{-\frac{(x-x_i)^2+(y-y_i)^2}{2\sigma_i^2}}} \cdot \underset{\text{pulso vital}}{\left[1 + a\sin(\omega_i t + \phi_i)\right]}
$$

**Drenaje energético** (metabolismo constante):


$$
\frac{dE_i}{dt} = -\mu
$$

La energía se consume simplemente por existir. No hay forma de recargarla desde afuera:
cada ser tiene un tiempo de vida acotado desde el nacimiento.

### Ciclo de vida explícito

A diferencia del ciclo emergente de Gray-Scott, estas etapas **están programadas** como
reglas sobre la energía individual:

- **NACIMIENTO** — evento aleatorio programado → nuevo ser con $E_i = E_0$
- **EXISTENCIA** — el ser inyecta su gaussiana térmica en el campo $T$; su "cuerpo" es visible mientras $E_i > 0$ 
- **METABOLISMO** — $E_i$ decrece a tasa $\mu$; el ser pulsa, se mueve por deriva + ruido
- **REPRODUCCIÓN** — si $E_i > 2E_0$ → se divide en dos seres (el campo recibe dos cuerpos más pequeños)
- **MUERTE** — cuando $E_i \leq 0$ → el ser se elimina; deja de inyectar calor → su cuerpo se disipa (el modelo relaja el campo hacia la referencia mediante el término $-\lambda T$)

### Diferencia fundamental con los enfoques anteriores

| Propiedad | Gray-Scott / FHN | Enfoque B |
|-----------|-----------------|-----------|
| Individuos distinguibles | No | Sí |
| Ciclo de vida programado | No (emerge) | Sí (explícito) |
| Estado sin patrones o individuos | Sí, según régimen e inicialización | Sí, según las reglas de nacimiento |
| Conteo de individuos | Requiere definir cómo identificar manchas | Explícito por construcción |
| "Conjunto articulado" de Borges | No | Sí |

La diferencia conceptual: Gray-Scott y FHN producen *campo* que se auto-organiza.
El Enfoque B produce *individuos* que habitan un campo pasivo. Los seres no emergen de
las ecuaciones; las ecuaciones describen cómo cada ser nace y muere.

▶ [documentación completa de v06 →](/projects/seres-termicos/v06-ciclovida/)

---

## Acto XII — Un bestiario de calor

El Enfoque B resuelve los individuos (presupuesto energético, nacimiento, muerte), pero su
cuerpo es una gaussiana: un punto con brillo. La cita de Borges dice algo más exigente:
«calores y fríos **articulados**». Articulado implica partes internas acopladas — anatomía.
B1 es la línea que explora esa anatomía.

### La cita como especificación

| Cláusula del texto | Requisito técnico |
|--------------------|-------------------|
| «organismo hecho de temperaturas cambiantes» | el ser no tiene geometría propia: su estado es un vector de temperaturas |
| «calores y fríos articulados» | el cuerpo es una cadena acoplada donde el calor difunde entre partes |
| «espíritus del fuego o arcángeles animaron los cuerpos» | hay una fuente interna —el *fuego innato*— que sostiene al cuerpo contra la disipación |

### El cuerpo: una cadena de órganos

Cada ser es una cadena de $N$ órganos con temperaturas $T_i$:


$$
\frac{dT_i}{dt} = \underset{\text{latido}}{A_i\sin(\omega_i t+\varphi_i)} + \underset{\text{absorción}}{\kappa\,T_{\text{campo}}(x_i,y_i)} + \underset{\text{fuego innato}}{k_r(T_{\text{set}}-T_i)} - \underset{\text{disipación}}{\lambda\,T_i} + \underset{\text{difusión interna}}{D\,(T_{i-1}+T_{i+1}-2T_i)}
$$

- Las frecuencias $\omega_i$ se sortean en $[0.10, 0.40]$ Hz: casi siempre inconmensurables
  entre sí. La combinación puede dar oscilaciones complejas; con precisión finita y acoplamientos no se justifica afirmar que jamás se repetirá.
- El término $D$ es el laplaciano 1D: el calor fluye por el cuerpo como por una varilla.
  Una onda térmica nacida en la cabeza recorre hasta la cola: eso es la *articulación*.
- $\kappa$ acopla el cuerpo al medio y un splat gaussiano devuelve temperatura al campo:
  acoplamiento bidireccional ser↔campo. Sin eso no hay ecología.

### Fuego innato y niveles como equilibrios

A diferencia del Enfoque B (drenaje constante $-\mu$), aquí cada ser relaja hacia una
naturaleza térmica propia, $T_{\text{set}}$. En campo neutro, la ODE del cuerpo tiene un
único equilibrio:


$$
T^* = \frac{k_r}{k_r+\lambda}\,T_{\text{set}} \approx 0.86\,T_{\text{set}} \qquad (k_r = 0.5,\; \lambda = 0.08)
$$

El nivel del bestiario **no está programado**: se lee de la temperatura media $\bar T$ del cuerpo.

| $\bar T$ | Nivel |
|----------|-------|
| $\bar T < -0.55$ | Forma Térmica |
| $-0.55 \leq \bar T < -0.15$ | Cuerpo Saturnino |
| $-0.15 \leq \bar T < 0.25$ | Ser Articulado |
| $0.25 \leq \bar T < 0.68$ | Cuerpo Encendido |
| $\bar T \geq 0.68$ | Espíritu del Fuego |

Un ser con $T_{\text{set}} = +0.9$ estabiliza en $\bar T \approx 0.78$: Espíritu del Fuego.
Uno con $-0.9$: Forma Térmica. Los cinco umbrales son los cinco estados de la cosmogonía
saturnina del texto.

### El ascenso es termodinámico, no guion

Como el campo acopla vecinos, un cuerpo neutro que se acerca a un espíritu absorbe su
campo, sube su $\bar T$ y cruza umbrales. En la simulación la frase de Borges es literal:
**los espíritus del fuego animan los cuerpos** — sin una sola línea de código que lo
coreografíe. Solo Fourier.

### Termotaxis: conducta sin conducta


$$
\vec{F} = v\,\sigma(\bar T)\,\nabla T, \qquad \sigma(\bar T) = 1-2\,S(\bar T)
$$

donde $S$ es un smoothstep: frío ($\sigma=+1$) asciende el gradiente térmico; caliente
($\sigma=-1$) lo evita. Es la estructura de la quimiotaxis bacteriana (Berg) con temperatura
en lugar de nutriente. El cursor no existe en el código de los seres: dibujar una brasa
crea un gradiente, y los fríos lo escalan. *Buscar el fuego* es una consecuencia de la ley
de Fourier, no una función.

### Render: hacer visible la física

- **LUT de incandescencia**: $T \in [-1,1]$ mapeado a hielo profundo → vacío casi negro →
  rojo → ámbar → blanco. El vacío térmico es oscuridad.
- **Cuerpos translúcidos**: cada segmento entre órganos se dibuja con opacidad
  $\propto |T_i - T_{i+1}|$ — la ley de Fourier ($q \propto \nabla T$) convertida en canal
  alfa. Un ser en equilibrio interno es *invisible*: solo brilla donde el calor fluye.
  El «impalpable» emerge del render.
- **Bloom**: dos reducciones sucesivas del campo sumadas aditivamente — el resplandor sale
  del propio campo, no es un truco pintado.
- **Worldlines**: con persistencia alta ($p \approx 0.999$) y difusión baja, cada ser pinta
  su historia en el plano — el equivalente 2D de los worldtubes de v08.

▶ [Acto XII — Un bestiario de calor](/simus/seres-termicos/bestiario.html)

{{< sim src="/simus/seres-termicos/bestiario.html" title="B1 — Bestiario: organismos articulados" >}}

---

## Acto XIII — El mundo y la huella del tiempo

Borges describe un cosmos, no una grilla. La geometría rectangular de los primeros modelos
es una conveniencia numérica, no una decisión física.

### Universo esférico (v07)

En v07 el universo es una **esfera**:

- El ray marching intersecta el rayo con la esfera en lugar del cubo: $|\mathbf{r}|^2 = R^2$ - Los seres rebotan en la pared esférica con reflexión especular: $\mathbf{v}' = \mathbf{v} - 2(\mathbf{v}\cdot\hat{n})\hat{n}$ - Desde afuera se ve una **bola de plasma** (naranja/cian según tipo) con *rim glow* en el borde
- El vacío es negro puro; sin seres la esfera se oscurece completamente

**Doble perspectiva: dios e individuo.** La vista exterior ("el creador") orbita la esfera
con el mouse: la totalidad del universo desde fuera. La vista interior ("el ser") es un
recuadro (PIP) desde adentro de uno de los seres: los otros aparecen como masas brillantes
flotando en la penumbra; la pared de la esfera es un horizonte difuso de calor. La misma
física, dos ontologías. **Tab** pasa al ser siguiente.

▶ [documentación completa de v07 →](/projects/seres-termicos/v07-3d/)

### Espaciotiempo (v08)

Esta es la visualización más borgiana: se acumula la **historia completa** del campo 2D
como si el tiempo fuera una tercera dimensión espacial:


$$
\mathcal{T}(x, y, \tau) = T(x, y, t_0 + \tau \cdot \Delta T)
$$

Un ser que vive $F$ frames no es un punto que se desplaza: es un **tubo** de longitud $F$ en el eje temporal. El nacimiento es el inicio del tubo, la muerte su fin, la reproducción
una cúspide donde el tubo se bifurca. En esta representación los seres no "se mueven": su
vida entera es una forma geométrica tridimensional — formas en el tiempo, no en el espacio.

**Espacio** pausa la acumulación para mirar el volumen.

▶ [documentación completa de v08 →](/projects/seres-termicos/v08-espaciotiempo/)

---

## Correspondencia completa con el cuento

| Fragmento del cuento | Modelo computacional |
|----------------------|---------------------|
| "organismo hecho de temperaturas cambiantes" | Gaussiana $S_i(x,y,z,t)$ cuya amplitud varía con $E_i(t)$ |
| "calores y fríos articulados" | Seres de tipo +1 y -1 con campo $T \in \mathbb{R}$; en B1, cadena articulada de órganos |
| "ciego y sordo e impalpable" | No hay colisiones sólidas; el ser ES su distribución en el campo |
| "conjunto" (contable, no textura) | Enfoque B: individuos con índice, $N$ varía entre 0 y $N_{\max}$ |
| El ser que nace de la nada | $p_{\text{birth}}$ por frame: regla aleatoria de nacimiento; no una fluctuación cuántica |
| El ser que se disuelve al morir | Cuando $E_i \leq 0$: la gaussiana desaparece, $\lambda T$ absorbe el calor residual |
| La reproducción como división | $E_i > r \cdot E_0 \Rightarrow$ bifurcación: dos gaussianas a partir de una |
| "época saturnina" (tiempo primordial) | La simulación corre sin tiempo discreto externo; solo el campo evoluciona |
| Vista del universo como totalidad | Vista exterior de la esfera (v07): el cosmos como bola de plasma |
| Vista desde adentro del ser | PIP interior (v07): el mundo como nebulosa de masas térmicas |
| La historia del ser como forma geométrica | v08: el tubo espaciotemporal en $\mathcal{T}(x,y,\tau)$ |
| Nacimiento = inicio, muerte = fin | En v08: el tubo comienza en $\tau_{\text{nac}}$ y termina en $\tau_{\text{muerte}}$ |
| Reproducción = bifurcación geométrica | En v08: cúspide donde el tubo se divide en dos worldtubes |
| "espíritus del fuego animaron los cuerpos" | B1: el campo del arcángel eleva la $\bar T$ de los cuerpos vecinos — ascenso termodinámico, no guion |

---

## El aparato numérico (común a todas las líneas)

### El laplaciano discreto (stencil de 5 puntos en 2D)


$$
\nabla^2 T_{i,j} \approx \frac{T_{i+1,j} + T_{i-1,j} - 2T_{i,j}}{\Delta x^2} + \frac{T_{i,j+1} + T_{i,j-1} - 2T_{i,j}}{\Delta y^2}
$$

Con $\Delta x = \Delta y = 1$ (unidades de grilla):


$$
\nabla^2 T_{i,j} = T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1} - 4T_{i,j}
$$

En 3D el stencil tiene 7 puntos (6 vecinos + centro):


$$
\nabla^2 T_{i,j,k} = T_{i\pm1,j,k} + T_{i,j\pm1,k} + T_{i,j,k\pm1} - 6T_{i,j,k}
$$

### El esquema numérico (Euler explícito)


$$
T_{i,j}^{n+1} = T_{i,j}^n + k\,\underset{\text{laplaciano discreto}}{\left(T_{i+1,j}^n + T_{i-1,j}^n + T_{i,j+1}^n + T_{i,j-1}^n - 4T_{i,j}^n\right)} - \lambda\,\Delta t \cdot T_{i,j}^n + \Delta t \cdot \sum_i S_i(i,j)
$$

donde $k = \alpha \cdot \Delta t / \Delta x^2$.

**Condición de estabilidad de von Neumann (2D):**


$$
k \leq \frac{1}{4} \quad \Rightarrow \quad \Delta t \leq \frac{\Delta x^2}{4\alpha}
$$

**En 3D** la condición es más estricta:


$$
k \leq \frac{1}{6} \quad \Rightarrow \quad \Delta t \leq \frac{\Delta x^2}{6\alpha}
$$

### Por qué corre todo esto en un HTML

Al discretizar sobre una grilla, la ecuación se convierte en **aritmética pura**. Por celda:
4 lecturas + 4 sumas + 2 multiplicaciones = **~10 operaciones**. Con una grilla 280×200 =
56.000 celdas a 120 pasos/segundo:


$$
56.000 \times 120 \times 10 \approx 67 \text{ Mflops/s}
$$

Un CPU moderno hace **10.000 Mflops/s**: usamos menos del 1% de su capacidad. La dificultad
de las EDPs vive en el análisis matemático; numéricamente son loops sobre arrays.

### Discretización de Gray-Scott


$$
u_{i,j}^{n+1} = u_{i,j}^n + \Delta t \left[ D_u \nabla^2 u_{i,j}^n - u_{i,j}^n (v_{i,j}^n)^2 + F(1 - u_{i,j}^n) \right]
$$


$$
v_{i,j}^{n+1} = v_{i,j}^n + \Delta t \left[ D_v \nabla^2 v_{i,j}^n + u_{i,j}^n (v_{i,j}^n)^2 - (F+k) v_{i,j}^n \right]
$$

Condición de estabilidad (von Neumann):


$$
\Delta t \leq \frac{\Delta x^2}{4 \max(D_u, D_v)}
$$

Con $\Delta x = 1$, $D_u = 0.21$, $D_v = 0.05$: $\Delta t \leq 1.19$. Se usa $\Delta t = 1$.

### Colormap

La concentración $v \in [0, 1]$ se mapea a color: $v \approx 0$ negro/azul profundo
(vacío cósmico), $v \approx 0.3$ azul violáceo (organismo naciente), $v \approx 0.6$ naranja (organismo activo), $v \approx 1$ blanco (núcleo del ser).

### Ray marching volumétrico (v07)

El campo $T(x,y,z)$ asigna un valor escalar a cada punto del espacio tridimensional. La temperatura no es una cuarta dimensión espacial. En v08, en cambio, el tercer eje visual representa el historial temporal de un campo 2D. Para verlo se
usa **direct volume rendering**: por cada píxel, un rayo atraviesa el volumen y acumula
color + opacidad según una función de transferencia, en GPU (WebGL2 fragment shader):


$$
T > 0: \text{rojo} \to \text{naranja} \to \text{blanco} \quad (\text{calor})
$$


$$
T < 0: \text{azul} \to \text{teal} \to \text{cyan} \quad (\text{frío})
$$


$$
T \approx 0: \text{transparente} \quad (\text{vacío cósmico})
$$

La composición front-to-back:


$$
C_{\text{out}} = C_{\text{in}} + (1-\alpha_{\text{in}}) \cdot \sigma \cdot C_{\text{voxel}}
$$


$$
\alpha_{\text{out}} = \alpha_{\text{in}} + (1-\alpha_{\text{in}}) \cdot \sigma
$$

donde $\sigma$ es el coeficiente de extinción, proporcional a $|T|$.

---

## Acto XIV — Cuerpos que nacen y resisten

Esta serie retoma la visualización volumétrica y luego agrega cuerpos articulados. No se debe confundir **V4.4** con el archivo antiguo **v04-grayscott.html**. Las fuentes de energía, las reservas de trabajo disponible y el calor firmado del campo tienen papeles distintos.

| Identificador técnico | Qué cambia | Escena del relato |
| --- | --- | --- |
| V4.1 | Base funcional con textura 3D R8; archivo histórico. | [Acto XIV · Escena I — El primer volumen térmico](/simus/seres-termicos/seres_termicos_V4_1.html) |
| V4.2 | Cinco anatomías iniciales y difusión pasiva persistente. | [Acto XIV · Escena II — Las formas del campo](/simus/seres-termicos/seres_termicos_V4_2.html) |
| V4.2.1 | Vista compacta y calidad automática. | [Acto XIV · Escena III — Una ventana al campo](/simus/seres-termicos/seres_termicos_V4_2_1.html) |
| V4.3 | Fuentes articuladas calientes o frías, sostenidas desde el exterior. | [Acto XIV · Escena IV — Frío y fuego articulados](/simus/seres-termicos/seres_termicos_V4_3.html) |
| V4.4 | Intercambio conservativo, reservas individuales, ciclo vital y movimiento 3D. | [Acto XIV · Escena V — Nacer y extinguirse](/simus/seres-termicos/seres_termicos_V4_4.html) |
| V4.5 | Vista simultánea de centros u órganos sin halos: mismo estado, otra representación. | [Acto XIV · Escena VI — Mirar sin halos](/simus/seres-termicos/seres_termicos_V4_5.html) |
| V4.6 | Amenazas externas y respuesta adaptativa con costes explícitos. | [Acto XIV · Escena VII — Resistir hasta agotarse](/simus/seres-termicos/seres_termicos_V4_6.html) |

La defensa es una hipótesis de control programada: regulación, escape y ahorro. No aparece por aplicar difusión ni constituye una demostración de voluntad o de vida. Los puntos del recuadro representan cuerpos u órganos, no moléculas de un gas. La luminosidad y los halos ayudan a observar el campo; no son radiación térmica calculada.

Para parámetros, ecuaciones y límites, consultar la [guía física y cronológica completa](/projects/seres-termicos/guia-fisica/). El Prólogo agrega el punto de entrada didáctico; la futura edición V4.7 simplificada sigue siendo una propuesta.

---

## Archivos técnicos del relato

| Línea | Archivo | Física | Desarrollo | Documentación |
|-------|---------|--------|------------|---------------|
| 00 | `v00-contacto-termico.html` | Dos cuerpos uniformes, contacto, equilibrio y conservación | Inicio didáctico animado | [Prólogo — El primer encuentro](/simus/seres-termicos/v00-contacto-termico.html) |
| Complemento | `v00-temperatura.html` | Perfil estacionario 1D: recta de temperaturas | Gráfica T(x) | [Interludio — Una recta de temperaturas](/simus/seres-termicos/v00-temperatura.html) |
| I | `v01-campo.html` | Ecuación del calor 2D, seres como fuentes gaussianas | Claude · borrador ChatGPT | [Acto IX · Escena I — El campo que disuelve](/simus/seres-termicos/v01-campo.html) |
| I | `v02-gradiente.html` | Acoplamiento seres↔campo via ∇T | Claude · borrador ChatGPT | [Acto IX · Escena II — Seguir el gradiente](/simus/seres-termicos/v02-gradiente.html) |
| V | `v03-raymarching.html` | Ray marching volumétrico 3D (base técnica) | Claude · borrador ChatGPT | [Interludio técnico — Hacer visible un campo](/simus/seres-termicos/v03-raymarching.html) |
| II | `v04-grayscott.html` | Reacción-difusión Gray-Scott 2D | Claude · borrador ChatGPT | [Acto X · Escena I — Las manchas encuentran una forma](/simus/seres-termicos/v04-grayscott.html) |
| II | `v05-fhn.html` | FitzHugh-Nagumo: espirales perpetuas | Claude · borrador ChatGPT | [Acto X · Escena II — Las ondas recorren el medio](/simus/seres-termicos/v05-fhn.html) |
| III | `v06-ciclovida.html` | **Enfoque B**: presupuesto energético, ciclo de vida | Claude · borrador ChatGPT | [ficha →](/projects/seres-termicos/v06-ciclovida/) |
| V | `v07-3d.html` | Campo 3D + esfera volumétrica (WebGL2) + PIP interior | Claude · borrador ChatGPT | [ficha →](/projects/seres-termicos/v07-3d/) |
| V | `v08-espaciotiempo.html` | Campo 2D × tiempo → volumen 3D de worldtubes | Claude · borrador ChatGPT | [ficha →](/projects/seres-termicos/v08-espaciotiempo/) |
| IV | `bestiario.html` (B1) | **Línea BESTIARIO**: organismo articulado, taxonomía por equilibrios | GLM (Zhipu AI) | [Acto XII — Un bestiario de calor](/simus/seres-termicos/bestiario.html) |

Nota sobre la numeración: hasta v08 las versiones son secuenciales (la línea del campo).
B1 es una **bifurcación**, no una continuación: B de *bestiario*, 1 por ser la primera
versión de esa línea. Ambas comparten la columna vertebral
($\nabla^2 T - \lambda T$ + fuentes) y difieren en el modelo del cuerpo.

Nota de metodología: las líneas I–V se desarrollaron con Claude (Anthropic) a partir
de un borrador exploratorio iniciado con ChatGPT (OpenAI), cuyo desarrollo continúa
allí hacia una versión final. La línea bestiario (B1) y la integración documental del
proyecto se desarrollaron con GLM (Zhipu AI) en diálogo iterativo con el autor.

---

## Bibliografía y referencias

**Fuentes literarias**

- Borges, J.L. & Guerrero, M. — «Seres Térmicos», *El libro de los seres imaginarios*
  (FCE, México, 1957; ed. ampliada 1967). Entrada del bestiario que da la especificación del proyecto.
- Steiner, R. — *Die Geheimwissenschaft im Umriss* (1907). Cosmogonía saturnina que Borges
  cita en la entrada: la fuente última de la imagen.
- Vonnegut, K. — *Slaughterhouse-Five* (1969). Los humanos vistos en 4D como "grandes
  milpiés": la imagen detrás de v08 y de las worldlines de B1.

**Física y matemática**

- Fourier, J.B.J. — *Théorie analytique de la chaleur* (1822). La difusión del campo; en B1,
  también el render ($q \propto \nabla T$ como canal alfa).
- Turing, A.M. — *The Chemical Basis of Morphogenesis* (1952). El origen del acoplamiento reacción-difusión.
- Gray, P. & Scott, S.K. — *Chemical Oscillations and Instabilities* (1994). Las ecuaciones de la línea emergente.
- Pearson, J.E. — *Complex Patterns in a Simple System* (Science, 1993). Mapa completo de patrones Gray-Scott.
- Prigogine, I. & Stengers, I. — *La nueva alianza* (1979). Estructuras disipativas: el marco conceptual del proyecto.
- Schrödinger, E. — *¿Qué es la vida?* (1944). Estructuras que se mantienen lejos del equilibrio.
- Berg, H.C. & Brown, D.A. — *Chemotaxis in Escherichia coli* (Nature, 1972). La estructura de la termotaxis de B1.
- Murray, J.D. — *Mathematical Biology* (Springer, 3ª ed. 2003). Quimiotaxis y morfogénesis: el marco general.

---

## Código fuente

- **Repositorio de las simulaciones**: [github.com/lemeit/simus](https://github.com/lemeit/simus)
  — HTML/JS puro, sin dependencias, sin build step. Espejo jugable: [lemeit.github.io/simus](https://lemeit.github.io/simus/)
- **Sistema de diseño**: [design.lemeit.ar](https://design.lemeit.ar)
- **README técnico completo**: [README del repo](https://github.com/lemeit/simus/blob/main/README.md)

_*Proyecto en desarrollo._