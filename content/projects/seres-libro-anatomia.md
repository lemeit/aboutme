+++
title = "Un bestiario de calor"
description = "Pasar de una fuente puntual a partes internas acopladas."
url = "/projects/seres-termicos/libro/anatomia/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 15
book_part = "individuos"
book_part_title = "Parte III · De las formas a los individuos"
book_label = "Capítulo 14"
[build]
list = "never"
+++

Los cuerpos se representan mediante cadenas de órganos con estados térmicos y acoplamientos internos. La forma visible depende de esos estados y de cómo se dibujan.

## Qué observar

Compará el estado de distintos órganos, el conjunto del cuerpo y el medio. Observá qué cambia al acercarse cuerpos calientes y fríos y qué partes permanecen sostenidas por el control interno.

## Modelo y límites

Difusión, fuentes internas, consignas de control y termotaxis cumplen papeles distintos. El llamado «fuego innato» pertenece a la hipótesis de organismo. Buscar una temperatura es una regla del modelo, no una consecuencia de Fourier. Los nombres del bestiario son una interpretación literaria.

## Dos estados que se influyen

El programa guarda un campo plano $\theta_{i,j}$ y una cadena de órganos por ser, con estados $\theta_k$. Aunque el archivo llama `T` a estas variables, aquí usamos $\theta$ para recordar que son **valores térmicos relativos y adimensionales**: no son mediciones en °C. Las posiciones del dibujo se expresan en píxeles; no representan distancias en metros.

La cadena se acopla por su **orden de órganos**, no por la distancia entre sus puntos en la pantalla. Dos órganos dibujados cerca pueden no ser vecinos en la cadena.

## 1. Cómo cambia un órgano

La regla combina cinco aportes:

$$
\frac{d\theta_k}{dt}=
\underbrace{a_k\ell\sin(\omega_k t+\phi_k)}_{\text{latido}}
+\underbrace{0{,}22\theta_m(\mathbf{x}_k)}_{\text{lectura del medio}}
+\underbrace{0{,}5(\theta_{\mathrm{set}}-\theta_k)}_{\text{restauración}}
-\underbrace{0{,}08\theta_k}_{\text{disipación}}
+\underbrace{2{,}6(\theta_{k-1}+\theta_{k+1}-2\theta_k)}_{\text{acoplamiento interno}}.
$$

| Aporte | Qué hace en este prototipo |
| --- | --- |
| Latido | Una oscilación prescrita; $\ell$ es el control «latido». Cada órgano tiene amplitud, frecuencia angular y fase propias. |
| Lectura del medio | Suma una fracción del campo local. Depende de $\theta_m$, no de la diferencia $\theta_m-\theta_k$. |
| Restauración | Empuja hacia la consigna $\theta_{\mathrm{set}}$ asignada al ser. |
| Disipación | Acerca el órgano a cero: reduce los valores positivos y aumenta los negativos. |
| Acoplamiento | Suaviza diferencias entre vecinos de la cadena. En cada extremo se usa el propio órgano como vecino faltante. |

La suma de vecinos aparece al sumar dos diferencias: $(\theta_{k-1}-\theta_k)+(\theta_{k+1}-\theta_k)$. En una cadena aislada esos términos se cancelan al sumar todos los órganos. El latido, la lectura del medio y el control sí pueden cambiar su promedio.

### De la derivada al próximo valor

Euler explícito aproxima $d\theta_k/dt$ por $(\theta_k^{n+1}-\theta_k^n)/\Delta t$. Si llamamos $R_k^n$ a la suma de los cinco aportes:

$$
\theta_k^{n+1}=\operatorname{clip}_{[-1{,}2,\,1{,}2]}
\left(\theta_k^n+\Delta t\,R_k^n\right).
$$

Todos los incrementos de una cadena se calculan antes de actualizar sus órganos. El código almacena esos incrementos en Float32 y después limita el resultado al intervalo indicado. El recorte es una regla numérica del prototipo, no una ley térmica.

**Cálculo ilustrativo, no lectura de la escena:** tomemos $\theta_k=0{,}4$, vecinos $0{,}2$ y $0{,}6$, medio $0{,}1$, consigna $0{,}8$, latido instantáneo $0{,}1$ y $\Delta t=0{,}02$.

| Término | Sustitución | Resultado |
| --- | --- | --- |
| Latido | Dato del ejemplo | $0{,}1$ |
| Medio | $0{,}22(0{,}1)$ | $0{,}022$ |
| Restauración | $0{,}5(0{,}8-0{,}4)$ | $0{,}2$ |
| Disipación | $-0{,}08(0{,}4)$ | $-0{,}032$ |
| Vecinos | $2{,}6(0{,}2+0{,}6-2\cdot0{,}4)$ | $0$ |
| Suma $R_k$ | $0{,}1+0{,}022+0{,}2-0{,}032$ | $0{,}29$ |
| Incremento | $0{,}02(0{,}29)$ | $0{,}0058$ |
| Nuevo estado | $0{,}4+0{,}0058$ | $0{,}4058$ |

No se activa el recorte en este ejemplo. Los últimos decimales de una ejecución pueden diferir por el almacenamiento Float32.

### Un equilibrio sencillo, con condiciones

Con órganos uniformes, medio neutro y latido anulado, desaparecen tres aportes. En equilibrio:

$$
0=0{,}5(\theta_{\mathrm{set}}-\theta^*)-0{,}08\theta^*,
\qquad
\theta^*=\frac{0{,}5}{0{,}58}\theta_{\mathrm{set}}
\approx0{,}8621\theta_{\mathrm{set}}.
$$

Es una solución del caso simplificado; no predice el estado instantáneo de un cuerpo que late, se desplaza y recibe un campo variable.

## 2. Cómo los órganos dejan una huella

Después de actualizar sus temperaturas, cada órgano deposita dos gaussianas en el campo. Para desplazamientos enteros de celda $p,q$ respecto del centro redondeado del órgano:

$$
\Delta\theta_{p,q}^{(r)}
=c_r\theta_k\exp\left[-\frac{p^2+q^2}{r^2}\right],
\quad -r\le p,q\le r,
\qquad (r,c_r)=(1,0{,}50),\ (3,0{,}16).
$$

En la celda central se suman $0{,}66\theta_k$. Con el órgano ilustrativo anterior serían $0{,}267828$ antes de difundir. El entorno recibe valores menores según la exponencial; las huellas de varios órganos se superponen.

**Este depósito se aplica por cuadro, sin multiplicarlo por $\Delta t$ ni normalizar la gaussiana.** Tampoco se resta del órgano exactamente lo que recibe el campo. Por eso esta rama representa organismos sostenidos desde fuera y no un intercambio energético conservativo. El despertar y las acciones del puntero agregan otras perturbaciones prescritas.

## 3. Cómo se extiende y atenúa el campo

Después de los depósitos, cada subpaso actualiza una celda interior mediante:

$$
L_{i,j}=\theta_{i-1,j}+\theta_{i+1,j}
+\theta_{i,j-1}+\theta_{i,j+1}-4\theta_{i,j},
\qquad
\theta'_{i,j}=\theta_{i,j}+K_{\mathrm{eff}}L_{i,j}.
$$

La expresión aproxima la ecuación del calor: $K_{\mathrm{eff}}$ cumple el papel de $\alpha\Delta t/h^2$. En una malla cuadrada explícita, el límite usual es $K_{\mathrm{eff}}\le1/4$ para la difusión pura; el programa lo limita a $0{,}24$.

Con tamaño de celda `CELL` en píxeles, el programa calcula:

$$
K_{\mathrm{req}}=K\left(\frac{6}{\mathrm{CELL}}\right)^2,
\qquad K_{\mathrm{eff}}=\min(0{,}24,K_{\mathrm{req}}),
\qquad N_{\mathrm{iter}}=\max\left(2,\left\lceil\frac{K_{\mathrm{req}}}{0{,}24}\right\rceil\right).
$$

Repite la difusión $N_{\mathrm{iter}}$ veces y luego aplica la persistencia $p$:

$$
\theta^{\mathrm{final}}_{i,j}
=\operatorname{clip}_{[-1{,}6,\,1{,}6]}
\left(p\,\theta^{(N_{\mathrm{iter}})}_{i,j}\right),
\qquad p=0{,}992\ \text{al iniciar}.
$$

La persistencia es un factor **por cuadro**. Si se quisiera escribirla como una relajación exponencial para un intervalo fijo, $p=e^{-\lambda\Delta t}$ daría $\lambda=-\ln(p)/\Delta t$. Aquí el intervalo varía: no se debe interpretar $p$ como una constante física medida. La calidad adaptativa cambia la malla y los subpasos; no garantiza una evolución idéntica por segundo entre dispositivos.

En los bordes laterales el vecino que falta se toma como cero; arriba y abajo se repite el valor de la propia fila. Estas condiciones distintas también limitan una interpretación del campo como sistema aislado.

## 4. De dónde sale el movimiento

El gradiente local se estima con diferencias centradas en índices de malla:

$$
g_x=\frac{\theta_{i+1,j}-\theta_{i-1,j}}2,
\qquad g_y=\frac{\theta_{i,j+1}-\theta_{i,j-1}}2.
$$

No se divide por una distancia en metros. El centro recibe una respuesta programada al gradiente, modulada por su media térmica $\bar\theta$:

$$
z=\operatorname{clip}_{[0,1]}\left(\frac{\bar\theta-0{,}10}{0{,}60}\right),
\qquad S=3z^2-2z^3,\qquad d=1-2S,
$$

$$
\mathbf v'=(\mathbf v+140d\,\mathbf g\,\Delta t)\,0{,}12^{\Delta t}.
$$

Con media baja, $d=1$ y la respuesta apunta hacia valores crecientes; con media alta, $d=-1$ e invierte el sentido. A esto se agregan oscilaciones prescritas, repulsión entre centros y confinamiento en los bordes. Se limita la rapidez a 46 píxeles por unidad de tiempo del modelo y se actualiza $\mathbf x'=\mathbf x+\mathbf v\Delta t$.

Las articulaciones también tienen movimiento propio: $\varphi_k'=\varphi_k+w_k\Delta t$, radio $r_k=r_{0k}[1+0{,}22\sin(t\,\rho_k+\psi_k)]$ y posición:

$$
x_k=x_c+r_k\cos\varphi_k,
\qquad y_k=y_c+0{,}78r_k\sin\varphi_k.
$$

Estas reglas producen la anatomía móvil. **La ecuación del calor por sí sola no produce ese movimiento ni esas articulaciones.**

## 5. De los números a lo que se ve

En modo temperatura, el campo se limita a $[-1,1]$ **para elegir el color**. El índice de la paleta es:

$$
q=\left\lfloor127{,}5\,[\operatorname{clip}_{[-1,1]}(\theta)+1]\right\rfloor.
$$

Ese índice elige uno de los 256 colores de una tabla interpolada. El campo almacenado puede superar ese rango de color. En modo gradiente se colorea la magnitud de diferencias vecinas, escalada por $5{,}5$ y limitada a uno; la fórmula usa diferencias completas, sin el factor $1/2$ empleado para mover los centros.

La imagen final suaviza y amplía la malla, suma dos capas de brillo y superpone órganos y conexiones. Por eso el color final de un píxel **no es una lectura directa de una sola celda**. El azul representa frío relativo; no emisión azul de un cuerpo frío.

La ficha de un ser sí permite leer su media $\bar\theta=\sum_k\theta_k/N$, los estados de sus extremos y su consigna. El indicador llamado «flujo interno» calcula:

$$
F_{\mathrm{ficha}}=\frac1{N-1}\sum_{k=1}^{N-1}|\theta_{k+1}-\theta_k|.
$$

Es una **diferencia media entre vecinos**, no un flujo de calor en watts. Los rótulos «Hz» y «s» de la ficha corresponden al reloj del prototipo; no documentan una calibración experimental.

| Media $\bar\theta$ | Nombre asignado |
| --- | --- |
| Menor que $-0{,}55$ | Forma térmica |
| Desde $-0{,}55$ hasta menos de $-0{,}15$ | Cuerpo saturnino |
| Desde $-0{,}15$ hasta menos de $0{,}25$ | Ser articulado |
| Desde $0{,}25$ hasta menos de $0{,}68$ | Cuerpo encendido |
| Desde $0{,}68$ | Espíritu del fuego |

Los estados se calculan; los nombres y los umbrales están elegidos por el autor del prototipo.

## Explorar la simulación

Usá «PAUSA» para detener la evolución y hacé clic en un ser para abrir su ficha. **Al tocar un cuerpo también se lo perturba**: la selección no es una medición pasiva, incluso en pausa. Compará media, extremos y consigna con las ecuaciones anteriores. Este prototipo tiene su propio botón de pausa y fichas; no incorpora el panel «Del cálculo al color» ni el avance de un paso de las cuatro escenas de la Parte II. La tabla resuelta de este capítulo es un ejemplo didáctico, identificado como tal.

{{< sim src="/simus/seres-termicos/bestiario.html" title="Capítulo 14 — Un bestiario de calor" height="1100" >}}
