+++
title = "Ley de Ohm, potencia y consumo eléctrico"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 2
draft = false
math = true
description = "Relación empírica V–I, resistencia, modelo microscópico y deducción de potencia y energía."
+++

## Recorrido intuitivo: medir una relación

En un resistor óhmico bajo condiciones estables, especialmente de temperatura, la tensión es proporcional a la corriente:

$$\boxed{V=RI}.$$

La constante $R$ se expresa en ohms, $1\,\Omega=1\,\mathrm{V/A}$. La ley de Ohm es una relación empírica de ciertos materiales y regímenes, no una propiedad universal de cualquier componente. Un diodo o una lámpara que cambia mucho su temperatura no tiene por qué producir una recta $V(I)$.

En un gráfico con $I$ horizontal y $V$ vertical, la pendiente de una recta óhmica es $R$. Si intercambiás los ejes, la pendiente es $1/R$. El cociente $V/I$ y la pendiente diferencial $dV/dI$ pueden diferir en un elemento no lineal.

{{< figura src="/images/fisica-4to/ohm.svg" width="700" alt="Resistor óhmico ilustrativo: pendiente de tensión frente a corriente." caption="Resistor óhmico ilustrativo: pendiente de tensión frente a corriente." source="Elaboración para Introducción a la Física. Modelos ilustrativos; no son mediciones experimentales." >}}

## Ejemplo y contraste

Un resistor óhmico de $R=100\,\Omega$ se conecta a una fuente de tensión continua de $V=5\,\mathrm V$. **Calculá la corriente y determiná cuánto valdría si la tensión aumentara a $10\,\mathrm V$, manteniendo la misma resistencia.** Aplicamos $I=V/R$: inicialmente $I=0{,}050\,\mathrm A$ y luego $I=0{,}100\,\mathrm A$. La corriente se duplica.

Para contrastar el modelo, medí varios pares $I,V$ con un resistor adecuado y fuente de baja tensión. Construí el gráfico y evaluá si una recta es compatible con los datos. Cambios de temperatura y resistencias de conexión pueden afectar el resultado. No calcules todos los valores usando $V=RI$ y los presentes como mediciones que verifican esa misma ley.

## Profundización: modelo microscópico

En un conductor uniforme de longitud $L$ y sección $A$, con campo aproximadamente uniforme, $E=V/L$. Si el material admite $J=\sigma E$ y la densidad de corriente es uniforme, $I=JA$:

$$I=\sigma\frac VL A\quad\Rightarrow\quad V=\frac{L}{\sigma A}I.$$

Así:

$$\boxed{R=\rho\frac LA},\qquad\rho=1/\sigma.$$

Se deduce de ese modelo material; no demuestra universalmente $J=\sigma E$. Duplicar longitud duplica $R$ y duplicar sección la reduce a la mitad, manteniendo material y temperatura.

## Potencia: de energía por carga a energía por tiempo

Para una carga que atraviesa una caída de tensión de magnitud $V$, la energía transferida al receptor es $dE=V\,dq$. Dividimos por $dt$:

$$\boxed{P=\frac{dE}{dt}=V\frac{dq}{dt}=VI}.$$

La convención de receptor toma corriente entrando por el terminal de mayor potencial: $P>0$ significa absorción. Para un resistor óhmico, sustituir $V=RI$ da:

$$\boxed{P=I^2R=\frac{V^2}{R}}.$$

Estas dos últimas formas requieren la relación óhmica. En un receptor general se conserva el producto instantáneo $p(t)=v(t)i(t)$ con la convención indicada.

## Energía y consumo

Si la potencia es constante, $E=P\Delta t$. Si varía:

$$E=\int_{t_i}^{t_f}P(t)\,dt.$$

El área de potencia–tiempo es energía. $1\,\mathrm{kWh}=1000\,\mathrm W\times3600\,\mathrm s=3{,}6\times10^6\,\mathrm J$. Un equipo de $60\,\mathrm W$ durante $2\,\mathrm h$ transfiere $0{,}12\,\mathrm{kWh}$, si mantiene esa potencia todo el intervalo.

Para corriente alterna, la potencia media es el promedio temporal del producto $v(t)i(t)$. Multiplicar valores eficaces da la potencia activa solo bajo las condiciones correspondientes; en un resistor ideal sinusoidal, tensión y corriente están en fase.

## Ejercicios

1. Un resistor óhmico de $20\,\Omega$ está conectado a una fuente ideal de $12\,\mathrm V$ de corriente continua. Su resistencia permanece constante. Hallá la corriente que lo atraviesa y la potencia eléctrica que disipa.
2. Un gráfico tiene corriente $I$ en el eje horizontal y tensión $V$ en el vertical. La recta pasa por $(0{,}10\,\mathrm A,2\,\mathrm V)$ y $(0{,}30\,\mathrm A,6\,\mathrm V)$. Hallá su pendiente con unidades y explicá qué magnitud representa si el elemento es óhmico.
3. Un equipo de $1{,}2\,\mathrm{kW}$ funciona $30$ minutos a potencia constante. Hallá energía en kWh y J.
4. ¿Qué sucede con $P=V^2/R$ si se duplica $V$ y se mantiene $R$?

{{< details title="Resultados" >}}

1. $I=0{,}60\,\mathrm A$ y $P=7{,}2\,\mathrm W$.
2. $R=(6-2)/(0{,}30-0{,}10)=20\,\Omega$.
3. $0{,}60\,\mathrm{kWh}=2{,}16\times10^6\,\mathrm J$.
4. La potencia se cuadruplica, si el componente conserva el régimen óhmico y la resistencia.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
