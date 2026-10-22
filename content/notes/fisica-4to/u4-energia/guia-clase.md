+++
title = 'Energía, trabajo y potencia — guía de estudio'
date = '2026-10-21'
lastmod = '2026-10-21'
weight = 1
aliases = ['/notes/notas-fisica/cap09-energia/guia-clase/']
draft = false
math = true
description = 'Explicaciones, ejemplos resueltos y ejercicios para estudiar energía y sus transformaciones.'
+++

¿Por qué un objeto que cae llega cada vez más rápido? ¿Qué cambia al comprimir un resorte? ¿Cómo se comparan dos motores que elevan la misma carga? Para responder vamos a relacionar fuerzas, movimiento y cambios de energía.

Podés estudiar las [deducciones matemáticas paso a paso](../deducciones-energia/) y realizar la [experiencia de medición, carrera y análisis con Tracker](../experiencia-energia-movimiento/).

Este material pertenece a **Introducción a la Física — 4° año**. Complementa el [capítulo 9 de la traducción y adaptación de Bigler](/notes/notas-fisica/cap09-energia/). También podés consultar el [original en inglés, pp. 435–494](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=435). Esta guía no forma parte de la traducción.

## Antes de calcular

Elegí el sistema y los estados que vas a comparar. Anotá datos con unidades, convertí al SI y explicá qué interacciones considerás. Usamos $g=10\,\mathrm{m/s^2}$, salvo indicación contraria.

| Magnitud | Símbolo | Unidad |
|:---:|:---:|:---:|
| Masa | $m$ | kg |
| Rapidez | $v$ | m/s |
| Fuerza | $F$ | N |
| Trabajo o energía | $W$, $K$, $U$ | J |
| Potencia | $P$ | W |

Una respuesta incluye planteo, reemplazo con unidades, resultado e interpretación. Conservá cifras durante el cálculo y redondeá al final según la precisión de los datos.

## 1. Energía cinética

$$K=\frac12mv^2.$$

La rapidez depende de la referencia. Si duplicás la masa manteniendo $v$, la energía se duplica; si duplicás $v$ manteniendo la masa, se cuadruplica.

**Ejemplo resuelto:** una persona de $60\,\mathrm{kg}$ corre a $4\,\mathrm{m/s}$ respecto del suelo:

$$K=\frac12(60)(4)^2=480\,\mathrm J.$$

Es la energía estimada de traslación del cuerpo: no incluye por sí sola el movimiento relativo de brazos y piernas ni el gasto metabólico.

**Otro ejemplo:** un carrito de $2\,\mathrm{kg}$ tiene $36\,\mathrm J$. Despejando:

$$v=\sqrt{\frac{2K}{m}}=\sqrt{\frac{2(36)}2}=6\,\mathrm{m/s}.$$

### Practicá

1. Calculá $K$ de una pelota de $0{,}50\,\mathrm{kg}$ a $8\,\mathrm{m/s}$.
2. Ciclista y bicicleta tienen $80\,\mathrm{kg}$ en total. Calculá la energía de traslación a $18\,\mathrm{km/h}$, sin incluir el giro de las ruedas.
3. Un cuerpo de $5\,\mathrm{kg}$ tiene $250\,\mathrm J$. Hallá su rapidez.
4. Una pelota pasa de $+3$ a $-3\,\mathrm{m/s}$. ¿Cambió $K$ entre esos estados? ¿Cambió su velocidad?

{{< details title="Resultados de energía cinética" >}}

1. $16\,\mathrm J$.
2. $18\,\mathrm{km/h}=5\,\mathrm{m/s}$; $K=1000\,\mathrm J$.
3. $10\,\mathrm{m/s}$.
4. No cambió $K$: la rapidez es la misma. Sí cambió la velocidad al invertirse el sentido.

{{< /details >}}

## 2. Energía potencial gravitatoria

En un campo gravitatorio aproximadamente uniforme:

$$\Delta U_g=mg(h_f-h_i).$$

Si elegís $U_g=0$ en $h=0$, escribís $U_g=mgh$. El cero es una elección; las diferencias no dependen de ella. La energía corresponde a la interacción cuerpo–Tierra.

**Ejemplo resuelto:** un libro de $2\,\mathrm{kg}$ sube de $0{,}80$ a $1{,}50\,\mathrm m$:

$$\Delta U_g=(2)(10)(1{,}50-0{,}80)=14\,\mathrm J.$$

Respecto del suelo, $U_i=16\,\mathrm J$ y $U_f=30\,\mathrm J$. Con cero en la posición inicial serían $0$ y $14\,\mathrm J$: el cambio sigue siendo $14\,\mathrm J$.

### Practicá

5. Una mochila de $4\,\mathrm{kg}$ está a $1{,}2\,\mathrm m$ del suelo. Calculá $U_g$ con cero en el suelo.
6. Una persona de $50\,\mathrm{kg}$ sube $6\,\mathrm m$. Hallá $\Delta U_g$.
7. Un objeto de $3\,\mathrm{kg}$ desciende de $5$ a $2\,\mathrm m$. Calculá $\Delta U_g$ y el trabajo del peso.
8. ¿En qué cambia el ejercicio anterior si elegís el cero en la posición final?

{{< details title="Resultados de energía gravitatoria" >}}

5. $48\,\mathrm J$.
6. $3000\,\mathrm J$.
7. $\Delta U_g=-90\,\mathrm J$ y $W_g=+90\,\mathrm J$.
8. Cambian los valores individuales de $U_i$ y $U_f$, pero no su diferencia ni el trabajo gravitatorio.

{{< /details >}}

## 3. Energía potencial elástica

Para un resorte ideal que cumple Hooke:

$$U_e=\frac12kx^2.$$

$k$ se expresa en N/m; $x$ es deformación desde la longitud natural, en m. Estirar o comprimir la misma distancia almacena igual energía en este modelo.

**Ejemplo resuelto:** $k=200\,\mathrm{N/m}$ y compresión de $10\,\mathrm{cm}=0{,}10\,\mathrm m$:

$$U_e=\frac12(200)(0{,}10)^2=1\,\mathrm J.$$

No usamos fuerza máxima por distancia: la fuerza aumenta durante la deformación. En este caso ideal, su valor medio es la mitad del máximo. La [deducción](../deducciones-energia/#7-resorte-ideal) explica ese factor.

### Practicá

9. Hallá $U_e$ para $k=500\,\mathrm{N/m}$ y $x=0{,}040\,\mathrm m$.
10. Un resorte de $100\,\mathrm{N/m}$ almacena $2\,\mathrm J$. Hallá el módulo de su deformación.
11. Si la deformación se triplica, ¿por qué factor cambia $U_e$?
12. Un resorte de $300\,\mathrm{N/m}$ pasa de estar estirado $0{,}10$ a $0{,}20\,\mathrm m$. Calculá $\Delta U_e$ y el trabajo del resorte.

{{< details title="Resultados de energía elástica" >}}

9. $0{,}40\,\mathrm J$.
10. $0{,}20\,\mathrm m$.
11. Se multiplica por nueve.
12. $\Delta U_e=4{,}5\,\mathrm J$ y $W_e=-4{,}5\,\mathrm J$.

{{< /details >}}

## 4. Trabajo de una fuerza

Para una fuerza constante:

$$W_F=Fd\cos\theta.$$

$\theta$ es el ángulo entre fuerza y desplazamiento. El trabajo es positivo si la fuerza favorece el desplazamiento, negativo si se opone y cero si es perpendicular. Para una partícula de masa constante:

$$W_{\mathrm{neto}}=\Delta K.$$

Cada fuerza puede hacer trabajo. Para obtener el neto hay que sumar todos sus aportes.

**Ejemplo resuelto:** empujás un carrito horizontalmente con $30\,\mathrm N$ durante $4\,\mathrm m$, contra un rozamiento de $10\,\mathrm N$:

$$W_F=120\,\mathrm J,\quad W_f=-40\,\mathrm J,\quad W_{\mathrm{neto}}=80\,\mathrm J.$$

La energía cinética aumenta $80\,\mathrm J$. Peso y normal hacen trabajo cero en ese tramo horizontal.

### Practicá

13. Una fuerza de $50\,\mathrm N$ actúa en el sentido del desplazamiento durante $3\,\mathrm m$. Calculá su trabajo.
14. Una fuerza de $40\,\mathrm N$ forma $60^\circ$ con un desplazamiento horizontal de $5\,\mathrm m$. Calculá su trabajo.
15. Una caja de $10\,\mathrm{kg}$ sube $2\,\mathrm m$ a rapidez constante. Hallá los trabajos aplicado, gravitatorio y neto.
16. Una fuerza aumenta linealmente de $0$ a $12\,\mathrm N$ mientras un cuerpo avanza de $0$ a $3\,\mathrm m$. Calculá el trabajo mediante el área del gráfico fuerza–posición.

{{< details title="Resultados de trabajo" >}}

13. $150\,\mathrm J$.
14. $100\,\mathrm J$.
15. $+200\,\mathrm J$, $-200\,\mathrm J$ y $0$. La rapidez constante implica $\Delta K=0$.
16. Área triangular: $W=\frac12(3)(12)=18\,\mathrm J$.

{{< /details >}}

## 5. Conservación y transformación

Si no hay transferencias externas ni transformaciones que cambien la energía mecánica:

$$K_i+U_i=K_f+U_f.$$

Con rozamiento puede disminuir la energía mecánica y aumentar la interna. Elegí el sistema y evitá contabilizar a la vez trabajo gravitatorio y cambio de potencial como dos aportes independientes.

**Ejemplo resuelto:** un objeto de $2\,\mathrm{kg}$ se suelta desde $3\,\mathrm m$, sin aire. Sistema objeto–Tierra, suelo como cero:

$$mgh=\frac12mv_f^2\quad\Rightarrow\quad v_f=\sqrt{2gh}=\sqrt{60}\approx7{,}75\,\mathrm{m/s}.$$

Justo antes del suelo tiene $60\,\mathrm J$ de energía cinética. El choque posterior puede transformar energía en deformación, sonido y energía interna.

**Otro ejemplo:** un carrito de $0{,}50\,\mathrm{kg}$ parte contra un resorte horizontal de $200\,\mathrm{N/m}$ comprimido $0{,}10\,\mathrm m$. Sin rozamiento:

$$\frac12kx^2=\frac12mv^2\quad\Rightarrow\quad v=x\sqrt{\frac{k}{m}}=2\,\mathrm{m/s}.$$

### Practicá

17. Un cuerpo se suelta desde $5\,\mathrm m$. Hallá su rapidez cuando está a $2\,\mathrm m$ del suelo, sin aire.
18. Un carrito de $2\,\mathrm{kg}$ parte contra un resorte de $400\,\mathrm{N/m}$ comprimido $0{,}10\,\mathrm m$. Hallá su rapidez al recuperar el resorte la longitud natural, sin rozamiento.
19. Un bloque de $1\,\mathrm{kg}$ lleva $4\,\mathrm{m/s}$ y frena por un rozamiento constante de $2\,\mathrm N$. ¿Qué distancia recorre?
20. Una pelota de $0{,}20\,\mathrm{kg}$ cae desde $2\,\mathrm m$ y rebota hasta $1{,}5\,\mathrm m$. Comparando los estados de reposo en las alturas máximas, ¿cuánta energía mecánica dejó de tener?

{{< details title="Resultados de conservación" >}}

17. Desciende $3\,\mathrm m$: $v\approx7{,}75\,\mathrm{m/s}$.
18. $v=\sqrt2\approx1{,}41\,\mathrm{m/s}$.
19. $K_i=8\,\mathrm J$; $fL=8\,\mathrm J$: $L=4\,\mathrm m$.
20. $mg(2-1{,}5)=1\,\mathrm J$. Esa energía se transformó y pudo transferirse al entorno.

{{< /details >}}

## 6. Potencia y rendimiento

$$P_{\mathrm{media}}=\frac{W}{\Delta t},\qquad 1\,\mathrm W=1\,\mathrm{J/s}.$$

Un kWh es energía: $1\,\mathrm{kWh}=3{,}6\times10^6\,\mathrm J$. El rendimiento es $\eta=E_{\text{útil}}/E_{\mathrm{entrada}}$.

**Ejemplo resuelto:** una carga de $20\,\mathrm{kg}$ sube $3\,\mathrm m$ en $6\,\mathrm s$, con igual rapidez inicial y final:

$$W_{\text{útil}}=mgh=600\,\mathrm J,\qquad P_{\text{útil,media}}=100\,\mathrm W.$$

Con rendimiento del $75\,\%$, requiere $600/0{,}75=800\,\mathrm J$ de entrada. El gasto metabólico o consumo eléctrico no se obtienen solamente de $mgh$.

### Practicá

21. Una persona de $60\,\mathrm{kg}$ sube $4\,\mathrm m$ en $8\,\mathrm s$. Hallá la potencia útil media.
22. Un motor entrega $600\,\mathrm J$ en $3\,\mathrm s$. Comparalo con otro que entrega lo mismo en $6\,\mathrm s$.
23. Un equipo consume $1{,}5\,\mathrm{kW}$ constantes durante $20$ minutos. Calculá la energía en kWh y J.
24. Un motor entrega $400\,\mathrm W$ útiles con rendimiento del $80\,\%$. Hallá la potencia de entrada en régimen estable.

{{< details title="Resultados de potencia" >}}

21. $300\,\mathrm W$.
22. $200\,\mathrm W$ y $100\,\mathrm W$.
23. $0{,}50\,\mathrm{kWh}=1{,}8\times10^6\,\mathrm J$.
24. $500\,\mathrm W$.

{{< /details >}}

## 7. Profundización: rotación y gravitación

Consultá [trabajo rotacional](/notes/notas-fisica/cap09-energia/trabajo-rotacional/), [energía de rotación](/notes/notas-fisica/cap09-energia/energia-cinetica-rotacional/) y [rapidez de escape](/notes/notas-fisica/cap09-energia/velocidad-escape/).

25. Un torque constante de $4\,\mathrm{N\,m}$ hace girar un eje $\pi/2\,\mathrm{rad}$. Calculá el trabajo.
26. Un rotor de $I=0{,}20\,\mathrm{kg\,m^2}$ gira a $10\,\mathrm{rad/s}$. Hallá $K_r$.
27. Un disco macizo uniforme de $2\,\mathrm{kg}$ rueda sin deslizar a $3\,\mathrm{m/s}$. Calculá las energías de traslación, rotación y total.
28. Un planeta tiene la misma masa que otro y el doble de radio. Compará sus rapideces de escape superficiales usando $v_e=\sqrt{2GM/R}$.

{{< details title="Resultados de profundización" >}}

25. $W=2\pi\approx6{,}28\,\mathrm J$.
26. $K_r=10\,\mathrm J$.
27. $K_t=9\,\mathrm J$, $K_r=4{,}5\,\mathrm J$ y total $13{,}5\,\mathrm J$, usando $I=mR^2/2$ y $v=R\omega$.
28. En el de mayor radio es la del otro dividida por $\sqrt2$. Se supone planeta esférico, sin atmósfera ni rotación y sin otros cuerpos influyentes.

{{< /details >}}

## De las cuentas a tus mediciones

En la [experiencia de carrera y Tracker](../experiencia-energia-movimiento/) vas a medir masa, distancia y tiempo, estimar energías y analizar repeticiones. Distinguí rapidez media de instantánea, comparación entre personas de repetición de un intento, y dispersión de datos de incertidumbre instrumental.

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).