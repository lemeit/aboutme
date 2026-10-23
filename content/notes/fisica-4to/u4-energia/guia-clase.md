+++
title = 'Energía de un sistema — guía completa de la unidad'
date = '2026-10-21'
lastmod = '2026-10-23'
weight = 1
aliases = ['/notes/notas-fisica/cap09-energia/guia-clase/', '/notes/fisica-4to/u4-energia/trabajo-energia/', '/notes/fisica-4to/u4-energia/conservacion/', '/notes/fisica-4to/u4-energia/energias-alternativas/']
draft = false
math = true
description = 'Conceptos, ejemplos y actividades de toda la unidad: energías, trabajo, conservación, potencia, fuentes y uso de la energía.'
+++

¿Por qué un objeto que cae llega cada vez más rápido? ¿Qué cambia al comprimir un resorte? ¿Cómo se comparan dos motores que elevan la misma carga? Para responder vamos a relacionar fuerzas, movimiento y cambios de energía.

Esta es la **guía de toda la Unidad 4**. Reúne las explicaciones, los ejemplos resueltos y la práctica de sus temas en un único recorrido:

- [Energía cinética](#1-energía-cinética).
- [Energía potencial gravitatoria](#2-energía-potencial-gravitatoria) y [elástica](#3-energía-potencial-elástica).
- [Trabajo de una fuerza](#4-trabajo-de-una-fuerza).
- [Conservación, transformaciones y balances](#5-conservación-y-transformación).
- [Potencia y rendimiento](#6-potencia-y-rendimiento).
- [Formas, fuentes y uso de la energía](#7-formas-fuentes-y-uso-de-la-energía).
- [Profundización sobre rotación y gravitación](#8-profundización-rotación-y-gravitación).

Las [deducciones matemáticas paso a paso](../deducciones-energia/) amplían el origen de las ecuaciones. La [experiencia de medición, carrera y análisis con Tracker](../experiencia-energia-movimiento/) aplica los conceptos a datos que vas a obtener. Son complementos de esta guía.

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

En los ejercicios de movimiento, tomá el suelo como referencia, salvo que se indique otra. Modelá los cuerpos por su movimiento de traslación, excepto cuando se pida incluir rotación. En los ejercicios de resortes, suponé resortes ideales de masa despreciable y elegí energía elástica cero en su longitud natural. Las preguntas de comparación pueden resolverse sin datos numéricos: justificá la respuesta con la relación entre las magnitudes.

## 1. Energía cinética

La energía cinética $K$ está asociada al movimiento. Para la traslación de un cuerpo de masa $m$ con rapidez $v$, en el modelo clásico:

$$K=\frac12mv^2.$$

La rapidez depende de la referencia. Si duplicás la masa manteniendo $v$, la energía se duplica; si duplicás $v$ manteniendo la masa, se cuadruplica.

**Ejemplo resuelto — calcular la energía:** una persona de masa $m=60\,\mathrm{kg}$ corre con rapidez $v=4\,\mathrm{m/s}$ respecto del suelo. **¿Cuál es su energía cinética de traslación respecto del suelo?**

La incógnita es $K$. Reemplazamos la masa y la rapidez en $K=\frac12mv^2$:

$$K=\frac12(60)(4)^2=480\,\mathrm J.$$

Es la energía estimada de traslación del cuerpo: no incluye por sí sola el movimiento relativo de brazos y piernas ni el gasto metabólico.

**Ejemplo resuelto — calcular la rapidez:** un carrito de masa $m=2\,\mathrm{kg}$ tiene una energía cinética de traslación $K=36\,\mathrm J$ respecto del suelo. **¿Con qué rapidez se mueve?** No consideramos el giro de las ruedas.

La incógnita es $v$. Partimos de $K=\frac12mv^2$, multiplicamos por $2/m$ y tomamos la raíz positiva porque buscamos una rapidez:

$$v=\sqrt{\frac{2K}{m}}=\sqrt{\frac{2(36)}2}=6\,\mathrm{m/s}.$$

### Practicá

1. Calculá $K$ de una pelota de $0{,}50\,\mathrm{kg}$ a $8\,\mathrm{m/s}$.
2. Ciclista y bicicleta tienen $80\,\mathrm{kg}$ en total. Calculá la energía de traslación a $18\,\mathrm{km/h}$, sin incluir el giro de las ruedas.
3. Un cuerpo de masa $5\,\mathrm{kg}$ tiene una energía cinética de traslación de $250\,\mathrm J$. Hallá su rapidez.
4. Una misma pelota, de masa constante, pasa de una velocidad de $+3\,\mathrm{m/s}$ a otra de $-3\,\mathrm{m/s}$ sobre el mismo eje y respecto del suelo. Compará su energía cinética en esos dos estados y explicá si cambió su velocidad. No hace falta conocer su masa para esta comparación.

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

**Ejemplo resuelto:** un libro de masa $2\,\mathrm{kg}$ sube desde una altura de $0{,}80\,\mathrm m$ hasta $1{,}50\,\mathrm m$, ambas medidas desde el suelo. **Calculá el cambio de energía potencial gravitatoria del sistema libro–Tierra.** Luego compará las energías inicial y final usando dos referencias: cero en el suelo y cero en la posición inicial.

Primero calculamos la diferencia de alturas y aplicamos $\Delta U_g=mg(h_f-h_i)$:

$$\Delta U_g=(2)(10)(1{,}50-0{,}80)=14\,\mathrm J.$$

Respecto del suelo, $U_i=16\,\mathrm J$ y $U_f=30\,\mathrm J$. Con cero en la posición inicial serían $0$ y $14\,\mathrm J$: el cambio sigue siendo $14\,\mathrm J$.

### Practicá

5. Una mochila de $4\,\mathrm{kg}$ está a $1{,}2\,\mathrm m$ del suelo. Calculá $U_g$ con cero en el suelo.
6. Una persona de $50\,\mathrm{kg}$ sube $6\,\mathrm m$. Hallá $\Delta U_g$.
7. Un objeto de $3\,\mathrm{kg}$ desciende de $5$ a $2\,\mathrm m$. Calculá $\Delta U_g$ y el trabajo del peso.
8. Retomá el objeto y las alturas del ejercicio 7. Elegí ahora $U_g=0$ en la posición final, a $2\,\mathrm m$ del suelo. Calculá $U_i$, $U_f$ y $\Delta U_g$. Indicá si cambia el trabajo del peso respecto del ejercicio 7.

{{< details title="Resultados de energía gravitatoria" >}}

5. $48\,\mathrm J$.
6. $3000\,\mathrm J$.
7. $\Delta U_g=-90\,\mathrm J$ y $W_g=+90\,\mathrm J$.
8. $U_i=90\,\mathrm J$, $U_f=0$, $\Delta U_g=-90\,\mathrm J$. El trabajo del peso sigue siendo $+90\,\mathrm J$; cambia la referencia, pero no la diferencia de energía.

{{< /details >}}

## 3. Energía potencial elástica

Para un resorte ideal que cumple Hooke:

$$U_e=\frac12kx^2.$$

$k$ se expresa en N/m; $x$ es deformación desde la longitud natural, en m. Estirar o comprimir la misma distancia almacena igual energía en este modelo.

**Ejemplo resuelto:** un resorte ideal tiene constante elástica $k=200\,\mathrm{N/m}$ y se comprime $10\,\mathrm{cm}$ respecto de su longitud natural. **¿Cuánta energía potencial elástica almacena?** Convertimos la compresión a metros: $|x|=0{,}10\,\mathrm m$, y aplicamos $U_e=\frac12kx^2$:

$$U_e=\frac12(200)(0{,}10)^2=1\,\mathrm J.$$

No usamos fuerza máxima por distancia: la fuerza aumenta durante la deformación. En este caso ideal, su valor medio es la mitad del máximo. La [deducción](../deducciones-energia/#7-resorte-ideal) explica ese factor.

### Practicá

9. Hallá $U_e$ para $k=500\,\mathrm{N/m}$ y $x=0{,}040\,\mathrm m$.
10. Un resorte de $100\,\mathrm{N/m}$ almacena $2\,\mathrm J$. Hallá el módulo de su deformación.
11. En un mismo resorte ideal, la deformación pasa de un valor no nulo $x$ a $3x$, manteniendo constante $k$. ¿Por qué factor cambia $U_e$? Justificá con la fórmula.
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

Sostener un objeto inmóvil no produce trabajo mecánico sobre él, aunque la persona consuma energía química. Una fuerza transfiere energía por trabajo cuando se desplaza su punto de aplicación. En un cuerpo que gira o se deforma, no alcanza con seguir solamente el centro de masa.

### Interpretar el área de un gráfico

En un gráfico de componente de fuerza $F_x$ frente a posición $x$, el área con signo representa el trabajo. Una fuerza constante da un rectángulo; una fuerza que crece linealmente desde cero puede dar un triángulo. La pendiente tiene unidades N/m y no es trabajo.

Para una fuerza variable, la suma de pequeños trabajos se escribe mediante una integral:

$$W=\int_i^f\vec F\cdot d\vec r.$$

Para una partícula de masa constante, la segunda ley conduce a:

$$W_{\mathrm{neto}}=\int_i^f m\vec v\cdot d\vec v=\frac12mv_f^2-\frac12mv_i^2.$$

La [deducción detallada](../deducciones-energia/#3-energía-cinética-con-fuerza-variable) explica por qué aparece el cuadrado de la rapidez. Conocer el trabajo de una sola fuerza no permite conocer $\Delta K$ si faltan los trabajos de las demás.

**Ejemplo resuelto:** empujás un carrito sobre un piso horizontal con una fuerza constante de $30\,\mathrm N$, paralela y en el sentido de un desplazamiento de $4\,\mathrm m$. El rozamiento constante es de $10\,\mathrm N$ y se opone al movimiento; las otras fuerzas son el peso y la normal. **Calculá el trabajo de cada fuerza, el trabajo neto y el cambio de energía cinética del carrito.**

Para el empuje usamos $\theta=0^\circ$; para el rozamiento, $180^\circ$. Peso y normal son perpendiculares al desplazamiento:

$$W_F=120\,\mathrm J,\quad W_f=-40\,\mathrm J,\quad W_{\mathrm{neto}}=80\,\mathrm J.$$

La energía cinética aumenta $80\,\mathrm J$. Peso y normal hacen trabajo cero en ese tramo horizontal.

### Practicá

13. Una fuerza constante de $50\,\mathrm N$ actúa en el mismo sentido que un desplazamiento rectilíneo de $3\,\mathrm m$. Calculá el trabajo de esa fuerza.
14. Una fuerza constante de $40\,\mathrm N$ forma $60^\circ$ con un desplazamiento horizontal rectilíneo de $5\,\mathrm m$. Calculá el trabajo de esa fuerza, sin identificarlo automáticamente con el trabajo neto.
15. Una caja de masa $10\,\mathrm{kg}$ se eleva verticalmente $2\,\mathrm m$ a rapidez constante. Actúan únicamente el peso y una fuerza aplicada hacia arriba; despreciá la resistencia del aire. Hallá el trabajo de la fuerza aplicada, el trabajo del peso y el trabajo neto.
16. Una fuerza paralela al movimiento y dirigida hacia $+x$ aumenta linealmente desde $0\,\mathrm N$ en $x=0$ hasta $12\,\mathrm N$ en $x=3\,\mathrm m$. El cuerpo se desplaza entre esas posiciones hacia $+x$. Dibujá el gráfico $F_x$–$x$ y calculá el trabajo de esa fuerza mediante el área bajo la recta.

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

La energía no se crea ni se destruye en los procesos considerados: se transforma y se transfiere. **Conservar energía total no obliga a conservar energía mecánica.** Un bloque que frena puede perder energía mecánica mientras aumenta la energía interna del bloque y del piso.

Para el sistema pelota–Tierra en una caída ideal, el balance es $\Delta(K+U_g)=0$. Si se estudia solo la pelota como partícula, la gravedad es una fuerza externa y se escribe $\Delta K=W_g$. No sumes ambas expresiones como si fueran aportes diferentes.

### Balance mecánico y barras de energía

En el modelo de partícula, al separar los trabajos conservativos de los otros trabajos:

$$\Delta K=W_{\mathrm{cons}}+W_{\mathrm{otras}},\qquad W_{\mathrm{cons}}=-\Delta U,$$

$$\Delta(K+U)=W_{\mathrm{otras}}.$$

La energía mecánica se conserva cuando esos otros trabajos suman cero. Si el cuerpo gira, se deforma o cambia su energía interna, ampliá el balance para incluirlo.

Podés representar el balance con barras iniciales y finales a la misma escala, distinguiendo $K$, $U$ y energía interna. Si hay una transferencia a través de la frontera del sistema, representala aparte e indicá su sentido.

**Ejemplo resuelto:** un objeto de masa $2\,\mathrm{kg}$ se suelta desde el reposo a $3\,\mathrm m$ sobre el suelo. Despreciá la resistencia del aire. **Calculá su rapidez y su energía cinética justo antes de tocar el suelo.** Elegimos el sistema objeto–Tierra y energía potencial cero en el suelo. Como $K_i=0$ y $U_f=0$, la conservación de energía mecánica da:

$$mgh=\frac12mv_f^2\quad\Rightarrow\quad v_f=\sqrt{2gh}=\sqrt{60}\approx7{,}75\,\mathrm{m/s}.$$

Justo antes del suelo tiene $60\,\mathrm J$ de energía cinética. El choque posterior puede transformar energía en deformación, sonido y energía interna.

Para comprobar el balance en un estado intermedio, a $1\,\mathrm m$ sobre el suelo $U_g=(2)(10)(1)=20\,\mathrm J$ y $K=60-20=40\,\mathrm J$. Las dos contribuciones siguen sumando $60\,\mathrm J$.

**Otro ejemplo:** un carrito de masa $0{,}50\,\mathrm{kg}$ está inicialmente en reposo contra un resorte ideal de constante $200\,\mathrm{N/m}$, comprimido $0{,}10\,\mathrm m$. Se libera el carrito sobre una pista horizontal sin rozamiento. Despreciá la energía de giro de las ruedas. **¿Qué rapidez alcanza cuando el resorte recupera su longitud natural?** La altura no cambia y la energía elástica inicial se convierte en energía cinética de traslación:

$$\frac12kx^2=\frac12mv^2\quad\Rightarrow\quad v=x\sqrt{\frac{k}{m}}=2\,\mathrm{m/s}.$$

### Practicá

17. Un cuerpo se suelta desde el reposo a $5\,\mathrm m$ sobre el suelo. Hallá su rapidez cuando está a $2\,\mathrm m$ sobre el mismo suelo. Despreciá la resistencia del aire y considerá únicamente el movimiento de traslación.
18. Un carrito de masa $2\,\mathrm{kg}$ está inicialmente en reposo contra un resorte de $400\,\mathrm{N/m}$ comprimido $0{,}10\,\mathrm m$. Se libera sobre una pista horizontal sin rozamiento. Despreciá el giro de las ruedas. Hallá su rapidez cuando el resorte recupera la longitud natural.
19. Un bloque de masa $1\,\mathrm{kg}$ se desliza sobre un piso horizontal con rapidez inicial $4\,\mathrm{m/s}$. Luego actúan únicamente el peso, la normal y un rozamiento constante de $2\,\mathrm N$, opuesto al movimiento. ¿Qué distancia recorre hasta detenerse?
20. Una pelota de masa $0{,}20\,\mathrm{kg}$ se suelta desde el reposo a $2\,\mathrm m$ sobre el suelo y, después del choque, rebota hasta una altura máxima de $1{,}5\,\mathrm m$. Despreciá el aire y el giro de la pelota. Compará la energía mecánica del sistema pelota–Tierra en esas dos alturas máximas, usando el suelo como cero. ¿En cuántos joules disminuyó? ¿Implica esto que desapareció energía? Explicá.

{{< details title="Resultados de conservación" >}}

17. Desciende $3\,\mathrm m$: $v\approx7{,}75\,\mathrm{m/s}$.
18. $v=\sqrt2\approx1{,}41\,\mathrm{m/s}$.
19. $K_i=8\,\mathrm J$; $fL=8\,\mathrm J$: $L=4\,\mathrm m$.
20. $mg(2-1{,}5)=1\,\mathrm J$. No desapareció: esa disminución de energía mecánica se contabiliza como energía interna, deformación, sonido o transferencias al entorno, según el sistema elegido.

{{< /details >}}

### Para interpretar un balance

Un bloque que se desliza sobre un piso tiene inicialmente $30\,\mathrm J$ de energía mecánica y al final $22\,\mathrm J$. Durante el tramo no hay un motor ni otra fuente que aporte energía mecánica. **¿Cuánto disminuyó esa energía y cómo puede contabilizarse sin suponer que se destruyó?** Disminuyó $8\,\mathrm J$. Para un sistema bloque–piso sin otras transferencias, esa cantidad aumenta su energía interna; con una frontera diferente pueden aparecer transferencias al entorno.

En una carrera, no supongas conservación de $K+mgh$ durante todo el recorrido: intervienen energía química, trabajo muscular y disipación. Una pelota en vuelo o un carrito en una rampa pueden ajustarse mejor al modelo mecánico ideal. Si una bolita rueda, también tiene energía de rotación. Compará las diferencias con las incertidumbres antes de atribuirlas a una violación de una ley.

## 6. Potencia y rendimiento

$$P_{\mathrm{media}}=\frac{W}{\Delta t},\qquad 1\,\mathrm W=1\,\mathrm{J/s}.$$

Un kWh es energía: $1\,\mathrm{kWh}=3{,}6\times10^6\,\mathrm J$. El rendimiento es $\eta=E_{\text{útil}}/E_{\mathrm{entrada}}$.

### Potencia instantánea: profundización

Si el trabajo acumulado cambia con el tiempo, $P=dW/dt$. Usando $dW=\vec F\cdot d\vec r$:

$$P=\vec F\cdot\frac{d\vec r}{dt}=\vec F\cdot\vec v.$$

La velocidad corresponde al punto de aplicación de la fuerza. En rotación sobre un eje fijo, $dW=\tau\,d\theta$ y $P=\tau\omega$. Son productos instantáneos; el promedio de un producto no es, en general, el producto de los promedios.

**Ejemplo resuelto:** un motor eleva una carga de masa $20\,\mathrm{kg}$ una altura de $3\,\mathrm m$ en $6\,\mathrm s$, con igual rapidez inicial y final. Considerá como energía útil el aumento de energía potencial gravitatoria. El rendimiento del motor es del $75\,\%$. **Calculá el trabajo útil, la potencia útil media y la energía de entrada necesaria.**

El trabajo útil es $mgh$ y la potencia útil media es ese trabajo dividido por el tiempo:

$$W_{\text{útil}}=mgh=600\,\mathrm J,\qquad P_{\text{útil,media}}=100\,\mathrm W.$$

Con rendimiento del $75\,\%$, requiere $600/0{,}75=800\,\mathrm J$ de entrada. El gasto metabólico o consumo eléctrico no se obtienen solamente de $mgh$.

### Practicá

21. Una persona de masa $60\,\mathrm{kg}$ asciende una altura vertical de $4\,\mathrm m$ en $8\,\mathrm s$, con igual rapidez inicial y final. Considerá útil únicamente el aumento de energía potencial gravitatoria. Hallá la potencia útil media, sin estimar el gasto metabólico.
22. Un motor A entrega $600\,\mathrm J$ de trabajo útil en $3\,\mathrm s$; otro motor B entrega los mismos $600\,\mathrm J$ en $6\,\mathrm s$. Calculá la potencia útil media de cada uno e indicá cuál es mayor y por qué factor.
23. Un equipo consume $1{,}5\,\mathrm{kW}$ constantes durante $20$ minutos. Calculá la energía en kWh y J.
24. Un motor entrega $400\,\mathrm W$ útiles con rendimiento del $80\,\%$. Hallá la potencia de entrada en régimen estable.

{{< details title="Resultados de potencia" >}}

21. $300\,\mathrm W$.
22. $P_A=200\,\mathrm W$ y $P_B=100\,\mathrm W$. La potencia de A es el doble porque realiza el mismo trabajo en la mitad del tiempo.
23. $0{,}50\,\mathrm{kWh}=1{,}8\times10^6\,\mathrm J$.
24. $500\,\mathrm W$.

{{< /details >}}

## 7. Formas, fuentes y uso de la energía

### Distinguir forma de fuente

Cinética, potencial, interna y química describen contribuciones energéticas. Sol, viento, agua en altura y combustibles son fuentes o recursos que permiten transformaciones. La electricidad no identifica por sí sola la fuente primaria utilizada.

En una central, «generar energía» significa convertir energía disponible en una forma aprovechable; no crearla de la nada. Una batería almacena energía en su sistema químico y un embalse en el sistema agua–Tierra.

### Cadenas de transformación

- En una central hidroeléctrica, la disminución de energía potencial del agua puede convertirse en movimiento, trabajo de turbina y energía eléctrica.
- En una central térmica, parte de la energía recibida de una fuente caliente se convierte en trabajo y otra parte se entrega al entorno.
- Una celda fotovoltaica convierte parte de la energía de radiación en energía eléctrica sin necesitar una turbina.
- Un aerogenerador extrae parte de la energía del aire en movimiento; el aire debe seguir circulando.

Las pérdidas de energía útil no son destrucción de energía. Para calcular rendimiento, especificá qué contás como entrada y qué como salida útil.

**Ejemplo resuelto:** una instalación recibe $1000\,\mathrm J$ y entrega $300\,\mathrm J$ de energía útil durante un mismo proceso, sin acumular energía. **Calculá el rendimiento y la energía que debe contabilizarse en otras salidas.** El rendimiento es $\eta=300/1000=0{,}30=30\,\%$ y las otras salidas suman $700\,\mathrm J$.

Si dos etapas sucesivas tienen rendimientos $\eta_1$ y $\eta_2$, y toda la salida útil de la primera alimenta a la segunda, entonces:

$$E_1=\eta_1E_{\mathrm{entrada}},\qquad E_{\mathrm{útil}}=\eta_2E_1,$$

$$\eta_{\mathrm{conjunto}}=\eta_1\eta_2.$$

No se suman los rendimientos.

### Fuentes, combustibles fósiles y alternativas

Los combustibles fósiles liberan energía en reacciones químicas; su uso puede producir emisiones de gases de efecto invernadero y contaminantes. El análisis incluye extracción, transporte, infraestructura y residuos. Una fuente renovable se repone mediante flujos naturales en la escala considerada; eso no implica ausencia de impactos.

Para comparar alternativas definí el servicio que se necesita, la energía obtenida en un mismo intervalo, la disponibilidad temporal, el almacenamiento, los materiales y los efectos ambientales. Dos equipos con igual potencia máxima no necesariamente entregan igual energía anual.

### Profundización: energía de flujos de agua y aire

Si la potencia varía, la energía transferida es el área del gráfico potencia–tiempo:

$$E=\int_{t_i}^{t_f}P(t)\,dt.$$

Para agua de densidad $\rho$ que atraviesa una caída ideal de altura $H$, con caudal volumétrico constante $Q_v$, en un intervalo $\Delta t$ pasa una masa $\Delta m=\rho Q_v\Delta t$. Si la contribución aprovechable es la pérdida de potencial gravitatorio:

$$\frac{\Delta U_{g,\mathrm{disponible}}}{\Delta t}=\rho Q_vgH,\qquad P_{\mathrm{útil}}\approx\eta\rho Q_vgH.$$

Para aire uniforme de densidad $\rho$, rapidez $v$ y sección $A$, la masa que cruza por segundo es $\rho Av$. El flujo de energía cinética es:

$$P_{\mathrm{flujo}}=\frac12(\rho Av)v^2=\frac12\rho Av^3.$$

No es automáticamente la potencia capturada por una turbina: extraer energía modifica el flujo y hay límites aerodinámicos y pérdidas.

### Actividades sobre fuentes y transformaciones

25. Para una central hidroeléctrica que alimenta una lámpara, dibujá una cadena desde el agua del embalse hasta la luz emitida. Identificá las transformaciones en turbina, generador y lámpara, y señalá al menos dos salidas de energía al entorno. Es una actividad cualitativa: no asignes rendimientos numéricos sin datos.
26. Dos etapas sucesivas tienen rendimientos de $80\,\%$ y $75\,\%$. Toda la salida útil de la primera entra en la segunda y no hay aportes intermedios. Calculá el rendimiento conjunto y la energía útil final si entran $1000\,\mathrm J$ a la primera.
27. Una fuente entrega una potencia constante de $2\,\mathrm{kW}$ durante $3\,\mathrm h$. Calculá la energía entregada en kWh y J.
28. En el modelo de flujo de aire anterior, se duplica la rapidez inicial no nula manteniendo $\rho$ y $A$. Calculá la razón entre la nueva potencia del flujo y la inicial. Explicá por qué ese factor no garantiza la misma variación de potencia útil en una turbina real.

{{< details title="Orientaciones y resultados sobre fuentes" >}}

25. Potencial gravitatoria del agua → movimiento del agua → trabajo sobre la turbina → conversión electromagnética en el generador → energía transferida eléctricamente → radiación y energía interna en la lámpara. Puede haber transferencias térmicas y sonido en turbina, generador y cables. La respuesta debe indicar qué se transforma y dónde.
26. $\eta=0{,}80\times0{,}75=0{,}60=60\,\%$. La primera entrega $800\,\mathrm J$ y la segunda $600\,\mathrm J$ útiles.
27. $E=6\,\mathrm{kWh}=2{,}16\times10^7\,\mathrm J$.
28. $P_{\mathrm{nuevo}}/P_{\mathrm{inicial}}=2^3=8$. El modelo describe el flujo disponible; una turbina real tiene un régimen de operación, límites y rendimiento que pueden cambiar.

{{< /details >}}

## 8. Profundización: rotación y gravitación

Consultá [trabajo rotacional](/notes/notas-fisica/cap09-energia/trabajo-rotacional/), [energía de rotación](/notes/notas-fisica/cap09-energia/energia-cinetica-rotacional/) y [rapidez de escape](/notes/notas-fisica/cap09-energia/velocidad-escape/).

29. Un torque constante de $4\,\mathrm{N\,m}$ actúa alrededor de un eje fijo, en el mismo sentido que un giro de $\pi/2\,\mathrm{rad}$. Calculá el trabajo de ese torque usando $W=\tau\Delta\theta$.
30. Un rotor tiene momento de inercia $I=0{,}20\,\mathrm{kg\,m^2}$ respecto de su eje fijo de giro y rapidez angular $\omega=10\,\mathrm{rad/s}$. Hallá su energía cinética de rotación usando $K_r=\frac12I\omega^2$.
31. Un disco macizo uniforme de masa $2\,\mathrm{kg}$ rueda sin deslizar; su centro de masa se mueve a $3\,\mathrm{m/s}$ respecto del suelo. Calculá sus energías cinéticas de traslación, rotación y total. Usá $I=mR^2/2$ respecto del eje central y $\omega=v/R$. Mostrá por qué no hace falta un valor numérico del radio $R$.
32. Dos planetas esféricos A y B tienen la misma masa $M$, pero $R_B=2R_A$. Despreciá la atmósfera, la rotación y la influencia de otros cuerpos. Usando $v_e=\sqrt{2GM/R}$, calculá la razón $v_{e,B}/v_{e,A}$ e indicá en cuál es menor la rapidez de escape desde la superficie. No se necesitan valores numéricos de $G$, $M$ ni $R_A$.

{{< details title="Resultados de profundización" >}}

29. $W=2\pi\approx6{,}28\,\mathrm J$.
30. $K_r=10\,\mathrm J$.
31. $K_t=9\,\mathrm J$, $K_r=4{,}5\,\mathrm J$ y total $13{,}5\,\mathrm J$, usando $I=mR^2/2$ y $v=R\omega$.
32. En el de mayor radio es la del otro dividida por $\sqrt2$. Se supone planeta esférico, sin atmósfera ni rotación y sin otros cuerpos influyentes.

{{< /details >}}

## De las cuentas a tus mediciones

En la [experiencia de carrera y Tracker](../experiencia-energia-movimiento/) vas a medir masa, distancia y tiempo, estimar energías y analizar repeticiones. Distinguí rapidez media de instantánea, comparación entre personas de repetición de un intento, y dispersión de datos de incertidumbre instrumental.

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
