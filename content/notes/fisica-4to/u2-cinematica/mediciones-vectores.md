+++
title = "Mediciones, referencias y vectores"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 1
draft = false
math = true
description = "SI, incertidumbre, posición, trayectoria y operaciones vectoriales."
+++

## Medir antes de modelar

Una medición compara una magnitud con una unidad mediante un procedimiento. Registrá instrumento, unidad, resolución y condiciones. La resolución no representa por sí sola toda la incertidumbre: también influyen alineación, reacción humana y variación del objeto.

Una forma de comunicar el resultado es $d=(20{,}0\pm0{,}1)\,\mathrm m$, explicando cómo se estimó el margen. Repetir permite reconocer dispersión, pero no elimina un sesgo común a todas las lecturas. Conservá los datos originales antes de calcular promedios.

En la [experiencia de carrera y Tracker](/notes/fisica-4to/u4-energia/experiencia-energia-movimiento/) vas a medir el tramo con cinta u odómetro, registrar tiempos y analizar incertidumbres y estadística.

### Unidades base del SI

| Magnitud base | Unidad | Símbolo |
|:---:|:---:|:---:|
| Longitud | metro | m |
| Masa | kilogramo | kg |
| Tiempo | segundo | s |
| Corriente eléctrica | ampere | A |
| Temperatura termodinámica | kelvin | K |
| Cantidad de sustancia | mol | mol |
| Intensidad luminosa | candela | cd |

Las unidades derivadas se forman con productos y cocientes: $1\,\mathrm N=1\,\mathrm{kg\,m/s^2}$ y $1\,\mathrm J=1\,\mathrm{kg\,m^2/s^2}$. Un prefijo modifica el tamaño de unidad, no la magnitud física: $1\,\mathrm{km}=1000\,\mathrm m$. Expresá siempre las unidades de los ejes y de los resultados.

## Recorrido intuitivo: posición y trayectoria

Elegí una referencia, un origen, ejes y un reloj. La posición indica dónde está el objeto respecto de esa elección. La trayectoria es el conjunto de posiciones recorridas; no es lo mismo que el gráfico de posición frente al tiempo.

En una recta, el desplazamiento es $\Delta x=x_f-x_i$. La distancia recorrida suma las longitudes de todos los tramos y nunca es negativa. Si caminás $3\,\mathrm m$ a la derecha y volvés $1\,\mathrm m$, el desplazamiento es $+2\,\mathrm m$ y la distancia $4\,\mathrm m$.

La velocidad media es $\overline v_x=\Delta x/\Delta t$; la rapidez media es distancia total dividida por tiempo total. No se reemplaza una por otra cuando hay cambios de sentido.

## Vectores y componentes

Un vector tiene módulo, dirección y sentido. En dos dimensiones:

$$\vec r=x\hat\imath+y\hat\jmath,\qquad\Delta\vec r=(x_f-x_i)\hat\imath+(y_f-y_i)\hat\jmath.$$

Para sumar vectores, sumá componentes: $(A_x,A_y)+(B_x,B_y)=(A_x+B_x,A_y+B_y)$. El módulo de la suma no es, en general, la suma de módulos.

Si un vector de módulo $A$ forma un ángulo $\theta$ medido desde el eje $x$ positivo:

$$A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2}.$$

Las dos primeras expresiones salen de los cocientes trigonométricos de un triángulo rectángulo; la última, de Pitágoras. Los signos de las componentes dependen del cuadrante.

## Profundización con cálculo: magnitudes instantáneas

Acortamos el intervalo de observación:

$$\vec v(t)=\lim_{\Delta t\to0}\frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t}=\frac{d\vec r}{dt}.$$

La aceleración mide cómo cambia la velocidad vectorial:

$$\vec a=\frac{d\vec v}{dt}=\frac{d^2\vec r}{dt^2}.$$

La rapidez es $v=\|\vec v\|$. Puede mantenerse constante mientras cambia la dirección de $\vec v$: en ese caso hay aceleración aunque no cambie la rapidez.

Si conocemos las velocidades, reconstruimos desplazamientos:

$$\vec r_f-\vec r_i=\int_{t_i}^{t_f}\vec v(t)\,dt.$$

En una dimensión, la distancia recorrida es $L=\int_{t_i}^{t_f}|v_x(t)|\,dt$. El valor absoluto hace que las contribuciones de ambos sentidos se sumen como longitudes.

## Ejemplo y práctica

Un desplazamiento tiene componentes $\Delta x=3\,\mathrm m$ y $\Delta y=4\,\mathrm m$ sobre ejes perpendiculares. **Calculá su módulo y explicá si ese dato determina la distancia recorrida.** Por Pitágoras, su módulo es $\sqrt{3^2+4^2}=5\,\mathrm m$. No significa que la trayectoria haya medido 5 m: eso depende del camino.

1. Caminás $5\,\mathrm m$ hacia el este y $2\,\mathrm m$ hacia el oeste en un tiempo total de $7\,\mathrm s$. Tomá el este como sentido positivo. Hallá desplazamiento, distancia, velocidad media y rapidez media.
2. Un vector de módulo $10\,\mathrm m$ forma un ángulo de $30^\circ$ medido desde el eje $x$ positivo hacia el eje $y$ positivo. Hallá sus componentes sobre esos ejes perpendiculares.
3. La posición de una partícula es $\vec r(t)=(2\,\mathrm{m/s})t\,\hat\imath+(1\,\mathrm{m/s^2})t^2\,\hat\jmath$, para $t\ge0$. Derivá sus componentes para obtener $\vec v(t)$ y $\vec a(t)$; luego evaluá ambos vectores en $t=2\,\mathrm s$, con sus unidades.

{{< details title="Resultados" >}}

1. Desplazamiento $+3\,\mathrm m$, distancia $7\,\mathrm m$, velocidad media $3/7\,\mathrm{m/s}$ y rapidez media $1\,\mathrm{m/s}$.
2. $(5\sqrt3,5)\,\mathrm m$.
3. $\vec v(t)=(2\,\mathrm{m/s})\hat\imath+(2\,\mathrm{m/s^2})t\,\hat\jmath$ y $\vec a=(2\,\mathrm{m/s^2})\hat\jmath$; en $t=2\,\mathrm s$, $\vec v=(2,4)\,\mathrm{m/s}$ y $\vec a=(0,2)\,\mathrm{m/s^2}$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
