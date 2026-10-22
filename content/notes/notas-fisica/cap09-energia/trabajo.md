+++
title = "Trabajo de una fuerza"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 3
description = "Trabajo positivo y negativo, fuerza oblicua, áreas y teorema trabajo–energía."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 454–463"
figuras_estado = "7 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 454–463. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=454).

## Transferir energía mediante una fuerza

Una fuerza puede transferir energía cuando se desplaza su punto de aplicación. En el modelo de partícula, si la fuerza es constante:

$$W_F=\vec F\cdot\Delta\vec r=F\,d\cos\theta.$$

$d$ es el módulo del desplazamiento y $\theta$ el ángulo entre fuerza y desplazamiento. El trabajo es escalar y se mide en joules.

| Ángulo | Trabajo de esa fuerza | Ejemplo |
|:---:|:---:|:---:|
| Menor que $90^\circ$ | Positivo | Tirar de un carrito en el sentido en que avanza |
| $90^\circ$ | Cero | Peso de una caja que se desplaza horizontalmente |
| Mayor que $90^\circ$ | Negativo | Rozamiento cinético sobre un bloque que desliza |

El signo no indica este u oeste. Indica el resultado del producto entre la componente de la fuerza y el desplazamiento.

## Trabajo de cada fuerza y trabajo neto

Cada fuerza tiene su propio trabajo. El **trabajo neto** es la suma:

$$W_{\mathrm{neto}}=\sum_i W_i=\Delta K.$$

Esta es la forma del teorema trabajo–energía para una partícula o la traslación del centro de masa usando la fuerza resultante y su desplazamiento. Para un cuerpo extenso que gira o se deforma, el trabajo real de las fuerzas requiere seguir sus puntos de aplicación y puede cambiar otras energías.

{{< nota-adaptacion pagina="454" origen="Trabajo de una fuerza frente a trabajo neto" >}}
La definición inicial menciona una fuerza neta, pero una fuerza individual también puede realizar trabajo. Se distingue $W_F$ del trabajo neto y de los balances de energía del sistema. La igualdad trabajo neto–cambio de energía cinética se aplica con las condiciones indicadas; no se usa $W=\Delta E$ indistintamente para cualquier fuerza.
{{< /nota-adaptacion >}}

Si un cuerpo asciende a velocidad constante, su energía cinética no cambia y el trabajo neto es cero. Sin embargo, la fuerza que lo eleva puede hacer trabajo positivo y el peso trabajo negativo. **Resultante nula no significa que todos los trabajos sean nulos.**

### Carrito contra rozamiento — ejemplo de Bigler

Una fuerza horizontal de $750\,\mathrm N$ mueve un carrito $20\,\mathrm m$ contra un rozamiento de $250\,\mathrm N$ (p. 456):

$$W_F=(750)(20)=15\,000\,\mathrm J,$$

$$W_f=-(250)(20)=-5000\,\mathrm J,$$

$$W_{\mathrm{neto}}=10\,000\,\mathrm J=\Delta K.$$

El peso y la normal hacen trabajo nulo en este tramo horizontal. Los $5000\,\mathrm J$ asociados al deslizamiento no desaparecen: se relacionan con el aumento de energía interna del conjunto carrito–piso.

## Fuerza inclinada

{{< figura src="/images/diagramas/cap09_carrito_pp460.png" width="480" alt="Fuerza oblicua aplicada al carrito." caption="Fuerza oblicua aplicada al carrito." source="Jeff Bigler, edición octubre de 2025, p. 460. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En p. 460, una fuerza de $150\,\mathrm N$ forma $60^\circ$ con un desplazamiento horizontal de $500\,\mathrm m$:

$$W_F=(150)(500)\cos60^\circ=37\,500\,\mathrm J.$$

Se calcula el trabajo de **esa fuerza**. Para obtener $\Delta K$ todavía hay que sumar el trabajo de las demás fuerzas.

{{< figura src="/images/diagramas/cap09_fuerza-oblicua_pp463.png" width="480" alt="Fuerza de 100 N y desplazamiento horizontal." caption="Fuerza de 100 N y desplazamiento horizontal." source="Jeff Bigler, edición octubre de 2025, p. 463. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el ejercicio de p. 463, $100\,\mathrm N$ a $25^\circ$ por debajo de la horizontal desplazan un carro $10\,\mathrm m$:

$$W_F=(100)(10)\cos25^\circ\approx906\,\mathrm J.$$

La componente vertical no hace trabajo si el movimiento es horizontal, pero puede modificar la normal y, por tanto, el rozamiento.

## Levantar una caja: trabajo y aceleración

Una caja de $60\,\mathrm{kg}$ sube $1{,}5\,\mathrm m$ a rapidez constante (p. 460). La fuerza aplicada es $F=mg=600\,\mathrm N$:

$$W_F=900\,\mathrm J,\qquad W_g=-900\,\mathrm J,\qquad W_{\mathrm{neto}}=0.$$

Si elegimos caja–Tierra, el trabajo externo de quien levanta la caja aumenta $U_g$ en $900\,\mathrm J$. Si elegimos solo la caja, el trabajo aplicado y el gravitatorio se compensan. No se contabilizan a la vez $W_g$ y $\Delta U_g$ como aportes independientes.

{{< nota-adaptacion pagina="460" origen="Regla del original sobre aceleración al elevar cuerpos" >}}
El ascenso a velocidad constante tiene aceleración cero: $F_{\mathrm{aplicada}}=mg$ se obtiene del equilibrio de fuerzas, no de tomar $a=g$ en la segunda ley para la resultante. Si el cuerpo acelera hacia arriba, y solo actúan peso y fuerza aplicada, $F_{\mathrm{aplicada}}=m(g+a)$.
{{< /nota-adaptacion >}}

## Trabajo gravitatorio y recorridos

Una fuerza **conservativa** realiza un trabajo que depende de las posiciones inicial y final, no del camino. Para la gravedad:

$$W_g=-\Delta U_g.$$

{{< figura src="/images/diagramas/cap09_trabajo-caminos_pp457.png" width="480" alt="Dos maneras de alcanzar la misma altura." caption="Dos maneras de alcanzar la misma altura." source="Jeff Bigler, edición octubre de 2025, p. 457. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el modelo sin rozamiento, elevar un bloque directamente o por una rampa hasta la misma altura requiere el mismo aumento de energía potencial. A rapidez constante, la rampa reduce la fuerza aplicada a cambio de aumentar el recorrido.

{{< figura src="/images/diagramas/cap09_friccion-caminos_pp457.png" width="480" alt="Recorridos de distinta longitud entre dos posiciones." caption="Recorridos de distinta longitud entre dos posiciones." source="Jeff Bigler, edición octubre de 2025, p. 457. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Para el rozamiento cinético, con módulo constante y una superficie en reposo, $W_f=-f_kL$, donde $L$ es la longitud recorrida. Un camino más largo puede disipar más energía aunque una las mismas posiciones.

{{< figura src="/images/diagramas/cap09_rampa-345_pp458.png" width="480" alt="Rampa de 5 m y altura de 3 m." caption="Rampa de 5 m y altura de 3 m." source="Jeff Bigler, edición octubre de 2025, p. 458. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El ejemplo de p. 458 usa un bloque de $2\,\mathrm{kg}$ y una rampa de $5\,\mathrm m$ que asciende $3\,\mathrm m$. Con $\mu_k=0{,}4$, fuerza aplicada paralela a la rampa y sin aceleración normal:

$$N=mg\cos\theta=(20)\frac45=16\,\mathrm N,$$

$$f_k=6{,}4\,\mathrm N,\qquad -W_f=(6{,}4)(5)=32\,\mathrm J.$$

La elevación requiere $\Delta U_g=60\,\mathrm J$. Si se sube a rapidez constante, la persona debe aportar $60+32=92\,\mathrm J$ de trabajo. Esta última suma completa el balance del ejemplo original.

## Fuerza variable: áreas con signo

Si la fuerza cambia con la posición, no se reemplaza sin justificación por un único valor:

$$W_F=\int_{x_i}^{x_f}F_x(x)\,dx.$$

No hace falta integrar formalmente para resolver gráficos formados por rectángulos y triángulos. Calculamos las áreas entre la curva y el eje horizontal: positivas arriba, negativas abajo.

{{< figura src="/images/diagramas/cap09_trabajo-grafico_pp459.png" width="480" alt="Trabajo como área con signo en un gráfico fuerza–posición." caption="Trabajo como área con signo en un gráfico fuerza–posición." source="Jeff Bigler, edición octubre de 2025, p. 459. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En p. 459:

| Intervalo de posición | Figura | Trabajo |
|:---:|:---:|:---:|
| $0$ a $3\,\mathrm m$ | Rectángulo | $9\,\mathrm J$ |
| $3$ a $4{,}5\,\mathrm m$ | Triángulo positivo | $2{,}25\,\mathrm J$ |
| $4{,}5$ a $6\,\mathrm m$ | Triángulo negativo | $-2{,}25\,\mathrm J$ |
| Total | Suma algebraica | $9\,\mathrm J$ |

{{< nota-adaptacion pagina="459" origen="Unidades de los intervalos del gráfico" >}}
El texto del original llama segundos a los intervalos $0$–$3$, $3$–$4{,}5$ y $4{,}5$–$6$, pero el eje horizontal de la figura está en metros. Se corrige a intervalos de posición; un gráfico fuerza–tiempo daría impulso, no trabajo.
{{< /nota-adaptacion >}}

## Actividades del original

1. Levantar $30\,\mathrm{kg}$ una altura de $1{,}5\,\mathrm m$ a rapidez constante: calculá el trabajo aplicado y el del peso.
2. Un auto de $3000\,\mathrm{kg}$ acelera de $5$ a $15\,\mathrm{m/s}$ en un tramo horizontal. Calculá el trabajo neto.
3. Una persona de $60\,\mathrm{kg}$ sube $3\,\mathrm m$. Calculá el aumento de energía potencial.
4. Un perro tira de un trineo con $500\,\mathrm N$ horizontales a lo largo de $10\,\mathrm m$, contra $200\,\mathrm N$ de rozamiento. Calculá el trabajo de cada fuerza y el neto.

{{< details title="Resultados para comprobar" >}}

1. $450\,\mathrm J$ aplicado; $-450\,\mathrm J$ gravitatorio.
2. $\Delta K=\frac12(3000)(15^2-5^2)=300\,000\,\mathrm J$.
3. $1800\,\mathrm J$.
4. Perro: $5000\,\mathrm J$; rozamiento: $-2000\,\mathrm J$; peso y normal: cero; neto: $3000\,\mathrm J$.

{{< /details >}}

### Lectura de un gráfico más complejo

{{< figura src="/images/diagramas/cap09_fuerza-posicion_pp462.png" width="480" alt="Ejercicio de fuerza variable frente a la posición." caption="Ejercicio de fuerza variable frente a la posición." source="Jeff Bigler, edición octubre de 2025, p. 462. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El ejercicio de pp. 462–463 parte de $m=2\,\mathrm{kg}$ y $v_i=4\,\mathrm{m/s}$, de modo que $K_i=16\,\mathrm J$. Entre $0$ y $2\,\mathrm m$, $W=8\,\mathrm J$: entonces $K=24\,\mathrm J$ y $v\approx4{,}90\,\mathrm{m/s}$.

Para los tramos siguientes, el original da áreas de control de aproximadamente $50\,\mathrm J$ entre $0$ y $9\,\mathrm m$, y $-40\,\mathrm J$ entre $9$ y $20\,\mathrm m$. Con esos valores, obtiene $K(9)=66\,\mathrm J$ y $K(20)=26\,\mathrm J$. Usá la figura para identificar áreas positivas y negativas y explicar el procedimiento.

{{< nota-adaptacion pagina="462" origen="Precisión de la figura y respuestas de pp. 462–463" >}}
La figura rasterizada no rotula las coordenadas de todos los cambios de pendiente y las respuestas posteriores se presentan como valores de control del original. No se certifican como integrales exactas de segmentos obtenidos midiendo píxeles. Para una evaluación numérica de áreas exactas conviene usar el gráfico de p. 459 o proporcionar explícitamente las coordenadas.
{{< /nota-adaptacion >}}

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.