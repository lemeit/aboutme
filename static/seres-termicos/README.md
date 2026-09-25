# Seres Térmicos — Documentación del proyecto

Experimento computacional de física y literatura.
Partida de un texto de Borges; destino: emergencia, vida y muerte en un campo de reacción-difusión.

---

## El texto de partida

> "cada hombre, cada ser, era un organismo hecho de temperaturas cambiantes.
> La humanidad de la época saturnina fue un ciego y sordo e impalpable
> conjunto de calores y fríos articulados."
>
> — Jorge Luis Borges, *Seres Térmicos*

Borges describe una cosmología imaginaria (derivada de Rudolf Steiner) en la que los seres
no tienen cuerpo sólido, líquido ni gaseoso. Son únicamente **formas térmicas**: distribuciones
de calor y frío que se articulan en el espacio cósmico.

La pregunta que guía este proyecto:

> ¿Podemos convertir esa metáfora en un sistema dinámico computacional?
> ¿Qué aspecto tendría un organismo cuya única realidad fuera su estado térmico?

---

## El límite de la física lineal

El primer intento usa la **ecuación del calor**:

$$\frac{\partial T}{\partial t} = \alpha \nabla^2 T$$

Esta ecuación describe cómo se difunde el calor en un medio. Es elegante y
correcta para describir difusión, pero tiene un problema fundamental:
**es lineal**. Todo sistema regido por ella evoluciona inevitablemente hacia
el equilibrio térmico. Las estructuras se disuelven. No puede haber organismos,
porque no hay nada que los mantenga lejos del equilibrio.

Con fuentes externas (los "seres" como gaussianas) y acoplamiento al gradiente ∇T:

$$\vec{F}_i = -\text{type}_i \cdot k \cdot \nabla T(\vec{x}_i)$$

se obtiene movimiento más interesante, pero los "seres" siguen siendo
**objetos programados** que se mueven en un campo pasivo. No emergen.
No se reproducen. No mueren espontáneamente.

---

## El salto: estructuras disipativas y no linealidad

**Ilya Prigogine** (Premio Nobel de Química, 1977) demostró que los sistemas
lejos del equilibrio termodinámico pueden **auto-organizarse**:
mantener estructuras ordenadas consumiendo energía del entorno. Llamó a
estas estructuras *disipativas*.

Ejemplos reales: las células de Bénard (convección), el oscilador de
Belousov-Zhabotinsky, y —en última instancia— los seres vivos.

La condición necesaria es:

$$\sigma_{\text{interna}} < \dot{S}_{\text{exportada}}$$

El sistema genera entropía internamente, pero la exporta al entorno
más rápido de lo que la acumula. Mientras eso ocurra, la estructura existe.
Cuando deja de ocurrir, se disuelve.

Para modelar esto computacionalmente se necesitan tres ingredientes que
la ecuación del calor no tiene:

1. **No linealidad** — términos como $uv^2$ (autocatálisis)
2. **Dos campos acoplados** — un activador y un inhibidor
3. **Fuente de energía externa** — que mantenga el sistema lejos del equilibrio

---

## La física que sí produce vida: Gray-Scott (1984)

Las ecuaciones de reacción-difusión de Gray-Scott son:

$$\frac{\partial u}{\partial t} = D_u \nabla^2 u \;-\; uv^2 \;+\; F(1-u)$$

$$\frac{\partial v}{\partial t} = D_v \nabla^2 v \;+\; uv^2 \;-\; (F+k)\,v$$

### Variables

| Variable | Interpretación física | Interpretación poética |
|----------|----------------------|----------------------|
| $u(x,y,t)$ | Concentración del sustrato (alimento) | El vacío cósmico, fuente de energía |
| $v(x,y,t)$ | Concentración del producto (organismo) | El ser térmico |

### Términos

| Término | Ecuación | Significado |
|---------|----------|-------------|
| $D_u \nabla^2 u$ | en $\partial u/\partial t$ | El sustrato difunde en el espacio |
| $D_v \nabla^2 v$ | en $\partial v/\partial t$ | El organismo difunde (se mueve) |
| $-uv^2$ | en $\partial u/\partial t$ | El organismo *consume* sustrato |
| $+uv^2$ | en $\partial v/\partial t$ | El organismo se *reproduce* usando sustrato (autocatálisis) |
| $F(1-u)$ | en $\partial u/\partial t$ | El sustrato se *repone* desde el exterior (feed rate) |
| $-(F+k)v$ | en $\partial v/\partial t$ | El organismo *muere* a tasa $k$ |

El término clave es $uv^2$: para que $v$ se reproduzca necesita encontrar
$u$ (alimento). Si no hay alimento, $v$ desaparece. Este es el mecanismo
de competencia y extinción.

### Mapa de comportamientos según (F, k)

Los parámetros $F$ (reposición de alimento) y $k$ (muerte) determinan
qué tipo de organismo emerge:

| F | k | Comportamiento |
|---|---|----------------|
| 0.035 | 0.065 | Manchas que se dividen (reproducción) |
| 0.055 | 0.062 | Patrones coralinos, filamentos |
| 0.025 | 0.055 | Manchas estables, pulsan |
| 0.037 | 0.060 | Auto-replicación caótica |
| 0.060 | 0.062 | Laberintos, ondas espirales |

No hay seres "programados". Con la misma ecuación y distintos parámetros
emergen organismos completamente diferentes.

---

## Ciclo de vida emergente

Con Gray-Scott los seres tienen un ciclo de vida real:

```
NACIMIENTO:    fluctuación local de v supera un umbral
               (perturbación inicial o espontánea)

CRECIMIENTO:   v se expande consumiendo u en su entorno
               La velocidad depende de la disponibilidad de alimento

REPRODUCCIÓN:  cuando v crece demasiado, la zona central se agota
               → la mancha se divide en dos (mitosis química)

COMPETENCIA:   dos manchas compiten por el u disponible entre ellas
               Si el espacio es limitado, una puede absorber o eliminar a la otra

MUERTE:        cuando u local cae a cero, v no puede sostenerse
               La mancha se disuelve → campo uniforme u=1, v=0

EXTINCIÓN:     si k es demasiado alto o F demasiado bajo,
               todas las manchas mueren y el sistema llega al equilibrio
```

Esto no está programado explícitamente. Sale de $uv^2$ y de la competencia
entre difusión y reacción.

---

## Relación con el cuento de Borges

La descripción de Borges es notablemente precisa como metáfora física:

| Borges | Gray-Scott |
|--------|-----------|
| "organismo hecho de temperaturas cambiantes" | $v(x,y,t)$: concentración que fluctúa en el tiempo |
| "calores y fríos articulados" | los dos campos $u$ y $v$ acoplados |
| "ciego y sordo e impalpable" | no hay geometría fija; la forma es el estado instantáneo del campo |
| etapa saturnina: solo calor, sin materia sólida | campo continuo sin partículas discretas |
| "el calor es una sustancia más sutil que un gas" | $v$ como campo de concentración: no es un objeto, es una distribución |

La diferencia con Borges/Steiner:
en la física moderna el calor no es una sustancia (esa era la teoría del *calórico*, descartada en el siglo XIX).
Pero la imagen de **un ser que es solo una distribución en un campo continuo**
coincide exactamente con lo que Gray-Scott produce: no hay objeto, hay un
patrón de concentración que se mantiene, crece, se divide y desaparece.

---

## Por qué Gray-Scott y FHN no son suficientes para Borges

Tanto Gray-Scott como FitzHugh-Nagumo producen patrones emergentes genuinamente no lineales.
Pero ambos tienen un problema conceptual respecto al cuento:

- **Gray-Scott** puede estabilizarse. Las manchas alcanzan un estado estático y se detienen.
  El campo es colectivo: no hay individuos distinguibles.

- **FitzHugh-Nagumo** nunca se detiene, pero produce baldosas infinitas de espirales.
  Tampoco hay individuos: es una *multitud* uniforme, no un conjunto articulado de seres.

Borges no describe una textura. Describe *seres*: entidades que nacen, existen brevemente
y mueren en el vacío cósmico. El "ciego y sordo e impalpable **conjunto**" implica que
cada elemento puede *contarse*. Eso requiere un modelo diferente.

---

## Enfoque B: presupuesto energético explícito

En lugar de una PDE global que genera patrones, cada ser tiene su propia variable interna de energía.

### Ecuaciones del ciclo de vida

**Campo de fondo** (vacío cósmico con seres como fuentes):

$$\frac{\partial T}{\partial t} = \alpha \nabla^2 T \;-\; \lambda T \;+\; \sum_i S_i(x,y)$$

- $\lambda T$: el vacío vuelve a cero sin seres que lo mantengan
- $S_i$: cada ser inyecta calor/frío proporcional a su energía

**Fuente del ser $i$** (su "cuerpo" térmico):

$$S_i(x,y) = \frac{E_i}{E_0} \cdot A \cdot \exp\!\left(-\frac{|\mathbf{r}-\mathbf{r}_i|^2}{2\sigma_i^2}\right) \cdot [1 + a\sin(\omega_i t + \phi_i)]$$

El factor oscilatorio hace que cada ser "pulse" a su propia frecuencia (vida interna).

**Drenaje energético** (metabolismo constante):

$$\frac{dE_i}{dt} = -\mu$$

La energía se consume simplemente por existir. No hay forma de recargarla desde afuera: cada ser tiene un tiempo de vida acotado desde el nacimiento.

### Ciclo de vida

```
NACIMIENTO:    fluctuación aleatoria en el vacío
               → nuevo ser con E_i = E_0

EXISTENCIA:    el ser inyecta su Gaussiana térmica en el campo T
               su "cuerpo" es visible mientras E_i > 0

METABOLISMO:   E_i decrece a tasa μ en cada paso de tiempo
               el ser pulsa, se mueve por deriva + ruido

REPRODUCCIÓN:  si E_i > 2·E_0 → se divide en dos seres
               (el campo recibe dos cuerpos más pequeños)

MUERTE:        cuando E_i ≤ 0 → el ser se elimina
               deja de inyectar calor → su cuerpo se disipa
               (el vacío absorbe el calor residual por λ·T)
```

### Diferencia fundamental con los enfoques anteriores

| Propiedad | Gray-Scott / FHN | Enfoque B |
|-----------|-----------------|-----------|
| Individuos distinguibles | No | Sí |
| Ciclo de vida programado | No (emerge) | Sí (explícito) |
| Puede haber 0 seres | No | Sí (vacío total) |
| Puede haber 3 seres | No (mínimo una textura) | Sí |
| "Conjunto articulado" de Borges | No | Sí |

La diferencia conceptual: Gray-Scott y FHN producen *campo* que se auto-organiza.
El Enfoque B produce *individuos* que habitan un campo pasivo.
Los seres no emergen de las ecuaciones; las ecuaciones describen cómo cada ser nace y muere.

---

## Secuencia de versiones

| Archivo | Física | Estado |
|---------|--------|--------|
| `index.html` (v01) | Ecuación del calor 2D, seres como fuentes gaussianas | ✓ funciona |
| `v02-gradiente.html` | Acoplamiento seres↔campo via ∇T | ✓ funciona |
| `test_3D.html` | Diagnóstico WebGL2 + textura 3D | ✓ funciona |
| `v03-raymarching.html` | Ray marching volumétrico 3D | en desarrollo |
| `v04-grayscott.html` | Reacción-difusión Gray-Scott 2D | ✓ funciona |
| `v05-fhn.html` | FitzHugh-Nagumo: espirales perpetuas | ✓ funciona |
| `v06-ciclovida.html` | **Enfoque B**: presupuesto energético, ciclo de vida individual | ✓ funciona |

---

## Notas técnicas

### Discretización de Gray-Scott

El esquema explícito de Euler en grilla 2D:

$$u_{i,j}^{n+1} = u_{i,j}^n + \Delta t \left[ D_u \nabla^2 u_{i,j}^n - u_{i,j}^n (v_{i,j}^n)^2 + F(1 - u_{i,j}^n) \right]$$

$$v_{i,j}^{n+1} = v_{i,j}^n + \Delta t \left[ D_v \nabla^2 v_{i,j}^n + u_{i,j}^n (v_{i,j}^n)^2 - (F+k) v_{i,j}^n \right]$$

Donde el laplaciano discreto es:

$$\nabla^2 f_{i,j} = f_{i+1,j} + f_{i-1,j} + f_{i,j+1} + f_{i,j-1} - 4 f_{i,j}$$

Condición de estabilidad numérica (von Neumann):
$$\Delta t \leq \frac{\Delta x^2}{4 \max(D_u, D_v)}$$

Con $\Delta x = 1$, $D_u = 0.21$, $D_v = 0.05$: $\Delta t \leq 1.19$. Se usa $\Delta t = 1$.

### Colormap

$v \in [0, 1]$ se mapea a color:
- $v \approx 0$: negro/azul profundo (vacío cósmico, solo sustrato)
- $v \approx 0.3$: azul violáceo (organismo naciente)
- $v \approx 0.6$: naranja (organismo activo)
- $v \approx 1$: blanco (máxima concentración, núcleo del ser)

---

## Bibliografía y referencias

- Borges, J.L. — *Seres Térmicos* (en *Atlas*, 1984)
- Gray, P. & Scott, S.K. — *Chemical Oscillations and Instabilities* (1994)
- Prigogine, I. & Stengers, I. — *La nueva alianza* (1979)
- Turing, A.M. — *The Chemical Basis of Morphogenesis* (1952)
- Pearson, J.E. — *Complex Patterns in a Simple System* (Science, 1993) — mapa completo de patrones Gray-Scott
- Schrödinger, E. — *¿Qué es la vida?* (1944) — estructuras que se mantienen lejos del equilibrio

---

*Proyecto en desarrollo. Luciano Lamaita — lemeit.ar*
