+++
title = 'De dónde salen las ecuaciones de energía'
lastmod = "2026-10-23"
date = '2026-10-21'
weight = 2
draft = false
math = true
description = 'Deducción paso a paso de la energía cinética, gravitatoria y elástica, con hipótesis y referencias.'
+++

Las ecuaciones de energía relacionan las leyes de las fuerzas con el trabajo. Vamos a reconstruir sus pasos, explicar los cuadrados y los factores $1/2$, e identificar las condiciones de cada expresión. Esta es una ampliación para la materia. La [guía completa de la unidad](../guia-clase/) reúne conceptos, ejemplos y ejercicios; esta página profundiza sus deducciones sin repetir ese recorrido.

## 1. Trabajo y segunda ley

En una referencia inercial, para una partícula de masa constante:

$$\vec F_{\mathrm{neta}}=m\vec a.$$

El trabajo de una fuerza constante es:

$$W=\vec F\cdot\Delta\vec r=F\Delta r\cos\theta.$$

El producto escalar toma la componente paralela al desplazamiento. Para una fuerza variable dividimos el recorrido en tramos pequeños y sumamos sus trabajos. Al hacer esos tramos cada vez menores:

$$W=\lim\sum_j\vec F_j\cdot\Delta\vec r_j=\int_i^f\vec F\cdot d\vec r.$$

La integral representa una suma continua. En una dimensión es el área con signo entre $F_x(x)$ y el eje de posiciones.

Partimos de la definición mecánica de trabajo y de leyes físicas contrastadas experimentalmente. Las fórmulas de energía que deducimos heredan las condiciones de esos modelos.

## 2. Energía cinética sin cálculo diferencial

Para movimiento rectilíneo con aceleración constante, la cinemática da:

$$v_f=v_i+a\Delta t,\qquad\Delta x=\frac{v_i+v_f}{2}\Delta t.$$

Multiplicamos la segunda por $2a$ y usamos $a\Delta t=v_f-v_i$:

$$2a\Delta x=(v_i+v_f)(v_f-v_i)=v_f^2-v_i^2.$$

El trabajo de la resultante constante es $W_{\mathrm{neto}}=ma\Delta x$. Reemplazando:

$$W_{\mathrm{neto}}=\frac12m(v_f^2-v_i^2)=\frac12mv_f^2-\frac12mv_i^2.$$

La misma expresión aparece evaluada al final y al principio. La definimos como energía cinética, con cero para el reposo:

$$\boxed{K=\frac12mv^2},\qquad\boxed{W_{\mathrm{neto}}=K_f-K_i}.$$

El factor $1/2$ surge de la relación entre aceleración, desplazamiento y cambio del cuadrado de la rapidez. No se agrega para ajustar unidades.

## 3. Energía cinética con fuerza variable

Ahora quitamos la hipótesis de aceleración constante. Usamos $d\vec r=\vec v\,dt$ y $\vec a=d\vec v/dt$:

$$dW_{\mathrm{neto}}=m\frac{d\vec v}{dt}\cdot\vec v\,dt=m\vec v\cdot d\vec v.$$

Por la regla del producto:

$$d(\vec v\cdot\vec v)=d(v^2)=2\vec v\cdot d\vec v.$$

Así:

$$dW_{\mathrm{neto}}=d\left(\frac12mv^2\right).$$

Sumando desde el estado inicial al final:

$$W_{\mathrm{neto}}=\int_i^f d\left(\frac12mv^2\right)=\frac12mv_f^2-\frac12mv_i^2.$$

Esto permite fuerzas variables y trayectorias curvas, manteniendo masa constante y mecánica clásica. Para velocidades comparables con la de la luz hace falta otra expresión.

En un cuerpo extenso, $mv_{\mathrm{CM}}^2/2$ es energía de traslación del centro de masa: no incluye automáticamente rotación o movimientos internos. El trabajo real sobre un cuerpo que gira o se deforma requiere seguir los puntos de aplicación.

**Unidades:** $[K]=\mathrm{kg}(\mathrm{m/s})^2=\mathrm J$.

## 4. Definir energía potencial

Una fuerza conservativa tiene un trabajo que depende de las configuraciones inicial y final, no del camino. Definimos:

$$\boxed{U_f-U_i=-W_{\mathrm{cons}}=-\int_i^f\vec F_{\mathrm{cons}}\cdot d\vec r}.$$

El signo menos indica que un trabajo positivo de esa interacción reduce su energía potencial. La ecuación determina diferencias: sumar una constante a todos los valores de $U$ no modifica ningún trabajo.

En una dimensión, para un potencial diferenciable:

$$\boxed{F_x=-\frac{dU}{dx}}.$$

Podemos comprobar cada deducción: derivar $U$ y cambiar el signo debe devolver la fuerza usada.

## 5. Gravedad uniforme: mgh

Elegimos un eje $y$ positivo hacia arriba. Para alturas pequeñas cerca de la superficie terrestre:

$$F_{g,y}=-mg.$$

Como $m$ y $g$ son constantes:

$$W_g=\int_{y_i}^{y_f}(-mg)\,dy=-mg(y_f-y_i).$$

Por definición:

$$\Delta U_g=-W_g=mg(y_f-y_i).$$

Eligiendo $U_g=0$ en $y=0$:

$$\boxed{U_g(y)=mgy}.$$

Si llamamos $h$ a la altura sobre ese nivel, obtenemos $U_g=mgh$. No aparece $1/2$ porque el peso no aumenta con la altura en este modelo: el gráfico fuerza–posición tiene área rectangular.

**Comprobación:** $-d(mgy)/dy=-mg$.

Si elevás lentamente una carga, la fuerza aplicada es aproximadamente $+mg$: hace trabajo positivo mientras el peso hace trabajo negativo. La aceleración puede ser cero; no se reemplaza $a$ por $g$ al calcular la resultante.

## 6. Gravedad variable y referencia en infinito

Fuera de un cuerpo esféricamente simétrico de masa $M$, para una masa $m$ sin superposición, elegimos la dirección radial positiva hacia afuera:

$$F_r=-\frac{GMm}{r^2}.$$

$r$ es distancia al centro. La fuerza varía: multiplicar un único valor de $F$ por todo el recorrido no da su trabajo.

$$W_g=-GMm\int_{r_i}^{r_f}r^{-2}\,dr.$$

Como una primitiva de $r^{-2}$ es $-r^{-1}$:

$$W_g=GMm\left[\frac1r\right]_{r_i}^{r_f}=GMm\left(\frac1{r_f}-\frac1{r_i}\right).$$

Luego:

$$U_f-U_i=GMm\left(\frac1{r_i}-\frac1{r_f}\right).$$

La función con esa diferencia es $U_g(r)=-GMm/r+C$. Al elegir $U_g\to0$ cuando $r\to\infty$, resulta $C=0$:

$$\boxed{U_g(r)=-\frac{GMm}{r}}.$$

El signo negativo indica que separar esas masas hasta infinito exige aportar energía. No representa una dirección espacial y no se descarta en un balance.

**Comprobación:**

$$-\frac{d}{dr}\left(-\frac{GMm}{r}\right)=-\frac{GMm}{r^2}.$$

### Recuperar mgh

Para pasar desde el radio $R$ hasta $R+h$:

$$\Delta U_g=-\frac{GMm}{R+h}+\frac{GMm}{R}=\frac{GMmh}{R(R+h)}.$$

Con $g_0=GM/R^2$:

$$\Delta U_g=\frac{mg_0h}{1+h/R}.$$

Si $h/R\ll1$, el denominador es aproximadamente uno:

$$\boxed{\Delta U_g\approx mg_0h}.$$

Aquí $mgh$ es un cambio respecto de la superficie, no el valor absoluto con cero en infinito. Hay que mantener la misma referencia al comparar ecuaciones.

## 7. Resorte ideal

Medimos $x$ desde la longitud natural de un resorte que cumple Hooke:

$$F_e=-kx.$$

Para $x>0$ la fuerza apunta hacia el origen; para $x<0$ también es restauradora. Su trabajo es:

$$W_e=\int_{x_i}^{x_f}(-kx)\,dx=-k\left[\frac{x^2}{2}\right]_{x_i}^{x_f}=-\frac12k(x_f^2-x_i^2).$$

Entonces:

$$\Delta U_e=-W_e=\frac12kx_f^2-\frac12kx_i^2.$$

Con cero en la longitud natural:

$$\boxed{U_e=\frac12kx^2}.$$

El cuadrado hace que estirar o comprimir aumente la energía respecto de ese estado. La expresión requiere comportamiento lineal ideal; no describe por sí sola deformaciones permanentes, histéresis o pérdidas.

### Deducción gráfica sin integrales

Para estirar lentamente desde $0$ hasta $x>0$, la fuerza externa necesaria aumenta linealmente de $0$ a $kx$. Su trabajo es el área triangular:

$$W_{\mathrm{aplicada}}=\frac{\text{base}\times\text{altura}}2=\frac{x(kx)}2=\frac12kx^2.$$

Sin pérdidas ni cambio apreciable de energía cinética, ese trabajo aumenta $U_e$. La fuerza media es $kx/2$, no la máxima $kx$. Con signos consistentes se obtiene energía positiva también al comprimir.

**Comprobaciones:** $-d(kx^2/2)/dx=-kx$ y $[kx^2]=(\mathrm{N/m})\mathrm{m^2}=\mathrm J$.

{{< figura src="/images/fisica-4to/areas-trabajo.svg" width="700" alt="Áreas rectangular y triangular en gráficos de fuerza aplicada frente a desplazamiento." caption="La fuerza constante da un área rectangular; el resorte ideal deformado lentamente, una triangular." source="Elaboración para Introducción a la Física. Modelos ilustrativos, no mediciones." >}}

### Resorte vertical: longitud natural y equilibrio

Si $x$ es elongación positiva hacia abajo, el potencial combinado masa–resorte–Tierra, salvo una constante, es:

$$U(x)=\frac12kx^2-mgx.$$

El equilibrio está en $x_{\mathrm{eq}}=mg/k$. Completando el cuadrado:

$$U(x)=\frac12k\left(x-\frac{mg}{k}\right)^2-\frac{m^2g^2}{2k}.$$

Con $z=x-x_{\mathrm{eq}}$, queda $U=kz^2/2+\text{constante}$. Esta es la energía potencial **combinada**, no solamente la del resorte. Su energía elástica sigue siendo $kx^2/2$, medida desde la longitud natural.

## 8. Conservación de energía mecánica

Separamos los trabajos de las interacciones representadas por $U$ de los otros trabajos:

$$\Delta K=W_{\mathrm{cons}}+W_{\mathrm{otras}}=-\Delta U+W_{\mathrm{otras}}.$$

Por lo tanto:

$$\boxed{\Delta(K+U)=W_{\mathrm{otras}}}.$$

En ese modelo de partícula, si los otros trabajos suman cero:

$$\boxed{K_i+U_i=K_f+U_f}.$$

Si aparecen deformaciones, disipación o movimientos internos no representados, hay que ampliar el balance. Para un sistema bloque–piso, la energía mecánica perdida por deslizamiento puede aumentar su energía interna; no se destruye energía.

## 9. Energía de rotación

Las partículas de un cuerpo rígido que gira sobre un eje tienen rapidez $v_j=r_j\omega$. Sumando:

$$K_r=\sum_j\frac12m_jv_j^2=\frac12\left(\sum_jm_jr_j^2\right)\omega^2.$$

Definimos el momento de inercia respecto de ese eje, $I=\sum_jm_jr_j^2$:

$$\boxed{K_r=\frac12I\omega^2}.$$

Si además se traslada, la descomposición respecto del centro de masa es $K=mv_{\mathrm{CM}}^2/2+I_{\mathrm{CM}}\omega^2/2$. Esto explica por qué una bolita que rueda no transforma todo su potencial solamente en traslación.

## Revisá tu comprensión

1. En la deducción de energía cinética de la sección 3, ¿qué hipótesis permite sacar $m$ fuera de la integral $\int m\vec v\cdot d\vec v$?
2. ¿Por qué una fuerza constante produce potencial lineal y una fuerza de Hooke uno cuadrático?
3. ¿Qué cambia al sumar $100\,\mathrm J$ a todos los valores de un potencial?
4. ¿Alcanza la rapidez media de una carrera para calcular la energía cinética final?

{{< details title="Orientaciones" >}}

1. Masa constante.
2. Porque $\Delta U=-\int F\,dx$: integrar una constante produce una función lineal; integrar una función proporcional a $x$, una cuadrática.
3. No cambian diferencias, trabajos ni fuerzas derivadas del potencial.
4. No en general: hace falta conocer la evolución del movimiento o agregar una hipótesis justificada. Vas a analizarlo en la [experiencia](../experiencia-energia-movimiento/).

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Referencias: [Bigler original](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=441) y [traducción y adaptación](/notes/notas-fisica/cap09-energia/).
