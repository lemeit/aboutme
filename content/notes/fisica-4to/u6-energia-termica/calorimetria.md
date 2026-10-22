+++
title = "Calorimetría y balances térmicos"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 2
draft = false
math = true
description = "Origen de Q = mcΔT, capacidad calorífica, mezcla ideal y cambios de fase."
+++

## Qué relacionamos

En un proceso definido, aportar energía por calor puede aumentar temperatura, cambiar de fase o producir otros cambios. No siempre hay una subida de temperatura.

## Recorrido intuitivo: masa, material y temperatura

Si no hay cambio de fase y el calor específico se mantiene aproximadamente constante, una masa mayor requiere proporcionalmente más energía para el mismo cambio de temperatura. Para una misma masa, un cambio de temperatura doble requiere el doble de energía en ese modelo:

$$\boxed{Q=mc(T_f-T_i)}.$$

El calor específico $c$ depende del material y de las condiciones del proceso. Sus unidades son $\mathrm{J/(kg\,K)}$. Si $Q$ se define positivo hacia el cuerpo, calentarlo da $Q>0$ y enfriarlo da $Q<0$ en este modelo.

## Profundización analítica: de la definición a la ecuación

Para un proceso especificado, definimos capacidad calorífica $C=\delta Q/dT$ y capacidad específica $c=C/m$. El símbolo $\delta Q$ recuerda que calor es transferencia y depende del proceso, no una función de estado almacenada.

Entonces:

$$\delta Q=mc(T)\,dT.$$

Integrando:

$$\boxed{Q=m\int_{T_i}^{T_f}c(T)\,dT}.$$

Si $c$ es constante, sale de la integral y obtenemos $Q=mc\Delta T$. Es una consecuencia de esa aproximación, no una ecuación universal para cualquier proceso. Para gases se distingue capacidad a presión constante de capacidad a volumen constante.

En un gráfico $c(T)$, el área multiplicada por masa da $Q$ para el proceso correspondiente. En un gráfico $Q$ frente a $T$ con $c$ constante, la pendiente es $mc$.

## Mezcla ideal: deducir la temperatura final

Si dos cuerpos intercambian solo calor entre ellos, sin pérdidas ni cambios de fase y sin capacidad calorífica relevante del recipiente:

$$Q_1+Q_2=0.$$

Con calores específicos constantes:

$$m_1c_1(T_f-T_1)+m_2c_2(T_f-T_2)=0.$$

Agrupamos $T_f$ y despejamos:

$$\boxed{T_f=\frac{m_1c_1T_1+m_2c_2T_2}{m_1c_1+m_2c_2}}.$$

Es una media ponderada por capacidades caloríficas. Solo es el promedio simple cuando ambas capacidades son iguales. Si el recipiente absorbe energía, hay que sumar su término.

## Ejemplo resuelto

Se mezclan idealmente $0{,}20\,\mathrm{kg}$ de agua a $80\,{}^\circ\mathrm C$ y $0{,}30\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$, suponiendo mismo $c$ constante:

$$T_f=\frac{0{,}20(80)+0{,}30(20)}{0{,}50}=44\,{}^\circ\mathrm C.$$

La temperatura final queda entre las iniciales. No se usa 50 °C por promediar temperaturas sin considerar las masas.

## Cambio de fase

Durante una transición ideal a temperatura y presión constantes, puede intercambiarse energía sin cambiar $T$. Se usa $Q=mL$, con $L$ calor latente específico del proceso. No se aplica $mc\Delta T$ a ese tramo para concluir que el calor es cero.

Si hay calentamiento, transición y nuevo calentamiento, se suman los tres aportes con sus datos y condiciones. Las magnitudes $c$ y $L$ no son iguales ni tienen las mismas unidades.

## Ejercicios

Usá $c=4200\,\mathrm{J/(kg\,K)}$ como aproximación para el agua en estos ejercicios.

1. ¿Qué calor recibe $0{,}50\,\mathrm{kg}$ de agua al subir $10\,\mathrm K$?
2. Un cuerpo de $2\,\mathrm{kg}$ tiene $c=500\,\mathrm{J/(kg\,K)}$. Si recibe $3000\,\mathrm J$ sin otras transformaciones, ¿cuánto aumenta su temperatura?
3. Mezclá idealmente masas iguales de la misma sustancia a $10$ y $50\,{}^\circ\mathrm C$, sin transición. Hallá temperatura final.
4. Si un material tiene $L=200\,\mathrm{kJ/kg}$, ¿cuánta energía requiere transformar $0{,}10\,\mathrm{kg}$ en el proceso al que corresponde ese dato?

{{< details title="Resultados" >}}

1. $21\,000\,\mathrm J$.
2. $3\,\mathrm K$.
3. $30\,{}^\circ\mathrm C$ bajo las hipótesis indicadas.
4. $20\,\mathrm{kJ}$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
