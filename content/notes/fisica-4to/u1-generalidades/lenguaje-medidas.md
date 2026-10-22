+++
title = "Variables, gráficos, unidades y notación científica"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 2
draft = false
math = true
description = "Álgebra, conversiones, órdenes de magnitud y lectura de gráficos."
+++

## Una cantidad incluye unidad

Escribir una distancia como «20» deja información incompleta. Expresala como $20\,\mathrm m$. En el SI usamos metro, segundo y kilogramo para longitud, tiempo y masa. Las unidades derivadas se construyen con ellas: $[v]=\mathrm{m/s}$ y $[a]=\mathrm{m/s^2}$.

## Recorrido intuitivo: convertir sin cambiar la magnitud

Multiplicá por un factor igual a uno:

$$72\,\frac{\mathrm{km}}{\mathrm h}\frac{1000\,\mathrm m}{1\,\mathrm{km}}\frac{1\,\mathrm h}{3600\,\mathrm s}=20\,\mathrm{m/s}.$$

Las unidades se cancelan como factores algebraicos. En superficies y volúmenes también se eleva el factor: $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$, no $10^{-2}\,\mathrm{m^2}$.

## Notación científica y orden de magnitud

Una escritura normalizada es $a\times10^n$ con $1\le a<10$ para números positivos. Así, $0{,}00032=3{,}2\times10^{-4}$. El exponente ayuda a comparar escalas. Si se pide potencia de diez más cercana, debe indicarse ese criterio; no siempre coincide con tomar solamente el exponente de la notación normalizada.

## Despejes con sentido físico

De $v=d/t$ se obtiene $d=vt$ y $t=d/v$, con $v\ne0$ para la última expresión. De $K=mv^2/2$ resulta $v=\sqrt{2K/m}$ para la rapidez y masa positiva. La velocidad con signo puede tener dos sentidos; elegir una raíz requiere interpretar el movimiento.

## Leer gráficos

Identificá magnitudes y unidades en los dos ejes. Un punto es un par de valores; la altura de la curva no es su pendiente. En $x(t)$, la pendiente representa velocidad, mientras que en $v(t)$ representa aceleración. Un área bajo un gráfico tiene unidades del producto de las unidades de sus ejes.

## Profundización: dimensiones y cambios de escala

Una ecuación física debe ser dimensionalmente homogénea. En $x=x_0+vt$, $[vt]=L$; en $x=x_0+at$ el segundo término tiene dimensión $L/T$, de modo que no se puede sumar a una longitud.

La consistencia dimensional es necesaria, pero no suficiente: $K=mv^2$ tiene las dimensiones correctas aunque le falte el factor $1/2$. Para obtenerlo hay que deducir la relación física.

Si reexpresás un gráfico mediante $X=\alpha x$ y $T=\beta t$, la pendiente cambia como $dX/dT=(\alpha/\beta)dx/dt$. Los números dependen de las unidades; la magnitud física representada no cambia.

## Ejercicios

1. Convertí $54\,\mathrm{km/h}$ a m/s y $2{,}5\,\mathrm{min}$ a s.
2. Convertí $350\,\mathrm g$ a kg y $25\,\mathrm{cm^2}$ a m².
3. Escribí $4\,500\,000$ y $0{,}000081$ en notación científica.
4. Verificá las dimensiones de $v^2=v_0^2+2a\Delta x$.

{{< details title="Resultados" >}}

1. $15\,\mathrm{m/s}$ y $150\,\mathrm s$.
2. $0{,}350\,\mathrm{kg}$ y $0{,}0025\,\mathrm{m^2}$.
3. $4{,}5\times10^6$ y $8{,}1\times10^{-5}$.
4. Todos los términos tienen dimensión $L^2/T^2$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
