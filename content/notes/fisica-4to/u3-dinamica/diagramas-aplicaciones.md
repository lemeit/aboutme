+++
title = "Diagramas de cuerpo libre y aplicaciones"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 2
draft = false
math = true
description = "Descomposición de fuerzas, plano inclinado y contraste experimental con Tracker."
+++

## Construir el diagrama

Elegí un cuerpo o sistema y dibujá solo las fuerzas que otros agentes ejercen sobre él. No agregues su velocidad como si fuera una fuerza ni dibujes la resultante además de todas sus componentes como una interacción extra.

1. Identificá peso, apoyos, cuerdas y contactos relevantes.
2. Elegí ejes convenientes.
3. Descomponé fuerzas inclinadas sin contarlas de nuevo.
4. Sumá componentes y aplicá $\sum F_x=ma_x$, $\sum F_y=ma_y$.
5. Revisá signos, unidades y condiciones de contacto.

## Recorrido intuitivo: un plano inclinado

Tomá un plano fijo de ángulo $\alpha$ y un bloque. Elegí $x$ paralelo al plano hacia abajo e $y$ perpendicular hacia afuera. Por geometría, las componentes del peso son:

$$P_x=mg\sin\alpha,\qquad P_y=-mg\cos\alpha.$$

Si solo actúan peso y normal y el bloque no se separa ni acelera perpendicularmente:

$$N-mg\cos\alpha=0\quad\Rightarrow\quad N=mg\cos\alpha.$$

Sin rozamiento, en el eje paralelo:

$$ma_x=mg\sin\alpha\quad\Rightarrow\quad\boxed{a_x=g\sin\alpha}.$$

La masa se cancela. La aceleración no es $g$ a lo largo de cualquier plano; depende del ángulo.

## Con rozamiento: condiciones antes de sustituir

En el modelo de deslizamiento, $f_k\approx\mu_kN$, opuesto a la velocidad relativa de contacto. Si el bloque ya baja por el plano:

$$ma_x=mg\sin\alpha-\mu_kmg\cos\alpha,$$

$$a_x=g(\sin\alpha-\mu_k\cos\alpha).$$

Un resultado negativo significa que el bloque que baja se frena; no autoriza prolongar el mismo rozamiento cinético después de detenerse.

En reposo, la fricción estática se ajusta: $0\le f_s\le\mu_sN$. Para sostener el bloque, $f_s=mg\sin\alpha$ debe cumplir ese límite. La condición es $\tan\alpha\le\mu_s$ en este caso de fuerzas.

## Profundización analítica

Para aceleración constante y un bloque que parte del reposo sobre una rampa sin rozamiento:

$$x(t)=\frac12g\sin\alpha\,t^2.$$

Esto combina la fuerza resultante con dos integraciones de la aceleración. Si una fuerza adicional depende de posición o velocidad, hay que resolver:

$$m\frac{d^2x}{dt^2}=mg\sin\alpha+F_{\mathrm{adicional}}(x,\dot x,t).$$

No toda ecuación de movimiento es cuadrática en el tiempo. La solución debe satisfacer condiciones iniciales y mantenerse dentro del régimen físico supuesto.

## Experiencia: empujes, arranques y frenadas

Estudiá un carrito o un objeto que pueda desplazarse de forma controlada. Compará movimientos con distintas masas y registrá video de costado, calibrado con una longitud conocida.

Tracker permite estimar posición, velocidad y aceleración. Si conocés la masa, $m\vec a$ estima la **resultante**, no una fuerza individual. Para correlacionar fuerza aplicada con aceleración, la fuerza aplicada necesita medirse independientemente, por ejemplo con un dinamómetro, y hay que considerar el rozamiento.

Si obtenés la fuerza únicamente mediante $F=ma$ y luego usás esa misma cuenta para verificar $F=ma$, no hiciste una comprobación independiente. Registrá este límite en tu informe.

## Ejemplo y ejercicios

Para $m=2\,\mathrm{kg}$, plano de $30^\circ$ sin rozamiento y $g=10$, $N=10\sqrt3\approx17{,}32\,\mathrm N$ y $a=5\,\mathrm{m/s^2}$ hacia abajo del plano.

1. En ese plano, si el bloque parte del reposo, ¿qué rapidez alcanza luego de $1\,\mathrm m$?
2. Un carrito de $3\,\mathrm{kg}$ recibe un empuje horizontal de $15\,\mathrm N$ y rozamiento de $6\,\mathrm N$. Hallá aceleración.
3. ¿Siempre vale $N=mg$? Proponé un contraejemplo usando esta nota.

{{< details title="Resultados" >}}

1. $v=\sqrt{2a\Delta x}=\sqrt{10}\approx3{,}16\,\mathrm{m/s}$.
2. $3\,\mathrm{m/s^2}$ en el sentido del empuje.
3. No. En el plano inclinado sin otras fuerzas normales, $N=mg\cos\alpha$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
