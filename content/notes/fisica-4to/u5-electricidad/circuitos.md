+++
title = "Circuitos: corriente, tensión, serie y paralelo"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 1
draft = false
math = true
description = "Definiciones y deducciones de corriente, diferencia de potencial y resistencias equivalentes."
+++

## Del generador al circuito

Un circuito contiene una fuente, conductores y elementos receptores o de control. Una fuente mantiene diferencias de potencial mediante conversiones de energía; no crea carga continuamente ni entrega la misma corriente a cualquier conexión.

En un modelo de corriente continua estable, la carga no se acumula indefinidamente en un nodo. Un circuito abierto interrumpe el camino conductor. Un cortocircuito ofrece una resistencia muy pequeña: la corriente real queda limitada por la fuente y las resistencias presentes, no por un valor infinito físicamente realizable.

## Recorrido intuitivo: corriente y diferencia de potencial

Si una carga $\Delta q$ atraviesa una sección en tiempo $\Delta t$:

$$I_{\mathrm{media}}=\frac{\Delta q}{\Delta t},\qquad 1\,\mathrm A=1\,\mathrm{C/s}.$$

La diferencia de potencial es cambio de energía potencial eléctrica por unidad de carga:

$$\Delta V=\frac{\Delta U_e}{q},\qquad 1\,\mathrm V=1\,\mathrm{J/C}.$$

No confundas corriente con rapidez de las cargas ni voltaje con energía total. La corriente convencional se define en el sentido de movimiento de carga positiva; los electrones en un conductor metálico se desplazan en sentido opuesto.

## Profundización: conservación de carga

Instantáneamente, $I=dq/dt$. Para un nodo:

$$\sum I_{\mathrm{entrada}}-\sum I_{\mathrm{salida}}=\frac{dQ_{\mathrm{nodo}}}{dt}.$$

En régimen estacionario, el término derecho es cero. Esta es la base de la regla de nodos. La regla de sumas de tensión en una malla se aplica en el modelo de circuito concentrado, contabilizando adecuadamente fuentes e inducción; no se extrapola sin cuidado a campos magnéticos variables.

## Resistencias en serie: deducción

En serie circula la misma corriente por cada resistencia. Para resistores óhmicos, $V_1=IR_1$ y $V_2=IR_2$. La tensión total es:

$$V=V_1+V_2=I(R_1+R_2).$$

Definimos $V=IR_{\mathrm{eq}}$:

$$\boxed{R_{\mathrm{eq}}=R_1+R_2+\cdots}.$$

La regla no se obtiene sumando tensiones arbitrariamente: depende de la misma corriente y de que las caídas se describan con esos modelos de resistor.

## Resistencias en paralelo: deducción

Los extremos de cada rama se conectan a los mismos nodos: tienen igual tensión $V$. La corriente total es la suma de las ramas:

$$I=I_1+I_2=\frac V{R_1}+\frac V{R_2}=V\left(\frac1{R_1}+\frac1{R_2}\right).$$

Al usar $I=V/R_{\mathrm{eq}}$:

$$\boxed{\frac1{R_{\mathrm{eq}}}=\frac1{R_1}+\frac1{R_2}+\cdots}.$$

Para exactamente dos resistencias, reordenar fracciones da $R_{\mathrm{eq}}=R_1R_2/(R_1+R_2)$. Esa forma no se generaliza multiplicando y sumando tres o más sin otra deducción. Con resistencias positivas, la equivalente en paralelo es menor que la menor rama.

## Ejemplo resuelto

Dos resistores óhmicos de $6\,\Omega$ y $3\,\Omega$ se conectan en paralelo a una fuente ideal de $6\,\mathrm V$ de corriente continua, con cables de resistencia despreciable. **Calculá la resistencia equivalente, la corriente en cada rama y la corriente total.** Tienen $1/R_{\mathrm{eq}}=1/6+1/3=1/2$, de modo que $R_{\mathrm{eq}}=2\,\Omega$. A $6\,\mathrm V$, las corrientes son $1$ y $2\,\mathrm A$, y la total $3\,\mathrm A$.

## Actividad y ejercicios

Armá primero un esquema o simulación. Si se realiza un circuito físico en clase, usá la fuente de baja tensión y los componentes indicados para la experiencia; no se conecta esta práctica a la red domiciliaria. Medí corriente con el amperímetro en serie y tensión con el voltímetro en paralelo, respetando sus rangos y las indicaciones del equipo.

1. Por una sección de un conductor atraviesa una carga neta de $+12\,\mathrm C$ en un mismo sentido durante $4\,\mathrm s$. Hallá el módulo de la corriente media.
2. Una carga positiva $q=+2\,\mathrm C$ pasa de un punto A a otro B y su energía potencial eléctrica aumenta $\Delta U_e=+10\,\mathrm J$. Hallá $V_B-V_A$, incluyendo el signo.
3. Dos resistores óhmicos tienen resistencias de $4\,\Omega$ y $8\,\Omega$. Dibujá dos circuitos ideales: uno con ambos en serie y otro con ambos en paralelo. Calculá la resistencia equivalente de cada conexión; despreciá la resistencia de los cables.
4. En un nodo en régimen estacionario se unen exactamente tres ramas. Por una entran $0{,}30\,\mathrm A$ y por otra salen $0{,}12\,\mathrm A$. Calculá la corriente de la tercera rama e indicá si entra o sale.

{{< details title="Resultados" >}}

1. $3\,\mathrm A$.
2. $5\,\mathrm V$.
3. Serie $12\,\Omega$; paralelo $8/3\approx2{,}67\,\Omega$.
4. $0{,}18\,\mathrm A$ salientes.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
