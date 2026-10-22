+++
title = "Termodinámica, reversibilidad y entropía"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 3
draft = false
math = true
description = "Principios, balances de calor y trabajo, procesos irreversibles y lectura estadística de entropía."
+++

## Energía interna y equilibrio

La energía interna reúne contribuciones microscópicas del sistema; no es la energía cinética de traslación de su centro de masa. La temperatura no es toda esa energía: dos masas distintas pueden tener igual temperatura y distinta energía interna.

El principio cero establece la transitividad del equilibrio térmico y fundamenta comparar temperaturas mediante un termómetro. El primer principio expresa el balance energético; el segundo restringe qué procesos son posibles y en qué sentido pueden ocurrir.

## Recorrido intuitivo: primer principio

Para un sistema cerrado, sin cambios de energías cinética y potencial macroscópicas, elegimos $Q>0$ hacia el sistema y $W>0$ cuando el sistema realiza trabajo sobre el entorno:

$$\boxed{\Delta U=Q-W}.$$

Si recibe $500\,\mathrm J$ por calor y realiza $200\,\mathrm J$ de trabajo, aumenta su energía interna $300\,\mathrm J$. Si se comprime y el entorno hace trabajo sobre él, el trabajo realizado por el sistema es negativo y puede aumentar $U$.

Otra convención usa trabajo recibido positivo y escribe $\Delta U=Q+W_{\mathrm{sobre}}$. Son equivalentes si se mantienen los signos: $W_{\mathrm{sobre}}=-W$.

## Deducción gráfica del trabajo de expansión

En un pistón con área $A$ y presión externa $p_{\mathrm{ext}}$, un desplazamiento pequeño produce $dV=A\,dx$. El trabajo realizado es:

$$\delta W=F\,dx=p_{\mathrm{ext}}A\,dx=p_{\mathrm{ext}}\,dV.$$

Sumando:

$$\boxed{W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV}.$$

Es un área con signo en un gráfico presión externa–volumen. En expansión $dV>0$ y en compresión $dV<0$. Para un proceso cuasiestático reversible, la presión del gas coincide en el límite con la externa; fuera de ese caso no se reemplazan sin justificación.

## Profundización analítica: gas ideal

Un gas ideal en expansión isotérmica reversible cumple $p=nRT/V$ con $T$ constante:

$$W=nRT\int_{V_i}^{V_f}\frac{dV}{V}=nRT\ln\frac{V_f}{V_i}.$$

Para un gas ideal, la energía interna depende solo de la temperatura, de modo que en esa isotérmica $\Delta U=0$ y $Q=W$. Isotérmico no significa «sin intercambio de calor».

Adiabático significa $Q=0$, por lo que $\Delta U=-W$. Para gas ideal con capacidades constantes en una expansión adiabática reversible:

$$nC_VdT=-p\,dV=-\frac{nRT}{V}dV.$$

Dividiendo por $nT$ e integrando:

$$C_V\ln\frac{T_f}{T_i}=-R\ln\frac{V_f}{V_i}.$$

Con $C_P-C_V=R$ y $\gamma=C_P/C_V$, resulta $TV^{\gamma-1}=\text{constante}$ y $pV^\gamma=\text{constante}$. Aquí $C_V,C_P$ son capacidades molares, no calores específicos por kg. Estas relaciones no se extienden a cualquier proceso adiabático irreversible.

## Reversible e irreversible

Un proceso reversible es un límite ideal que puede invertirse dejando sistema y entorno sin cambios netos. Requiere, entre otras condiciones, ausencia de disipación y diferencias impulsoras infinitesimales. Hacer algo lentamente no garantiza reversibilidad si hay rozamiento.

Son irreversibles el flujo espontáneo de calor entre temperaturas distintas, el rozamiento y la mezcla espontánea de gases. Una expansión libre puede realizar trabajo cero aunque aumente el volumen; no se calcula su trabajo usando la curva reversible de otro proceso con los mismos extremos.

## Entropía: energía y multiplicidad no son lo mismo

La entropía es una función de estado, con unidades J/K. Para una trayectoria reversible:

$$\boxed{\Delta S=\int_i^f\frac{\delta Q_{\mathrm{rev}}}{T}}.$$

Se usa temperatura absoluta. Para un cuerpo con $c$ constante que cambia de temperatura, una trayectoria reversible de referencia permite calcular:

$$\Delta S=mc\ln\frac{T_f}{T_i}.$$

El proceso real puede ser irreversible: la diferencia de entropía se calcula entre los estados usando una trayectoria reversible posible, no reemplazando cualquier calor real dentro de la integral reversible.

El balance general puede escribirse como cambio de entropía = transferencia + producción interna, con producción no negativa. Para un sistema aislado, $\Delta S\ge0$. Un sistema no aislado puede disminuir su entropía transfiriéndola al entorno.

### Lectura estadística

En el modelo de microestados accesibles equiprobables, $S=k_B\ln\Omega$. $\Omega$ cuenta configuraciones microscópicas compatibles con un estado macroscópico. Para sistemas independientes, las multiplicidades se multiplican; el logaritmo convierte ese producto en suma, de acuerdo con la aditividad de la entropía.

«Desorden» puede servir de imagen inicial, pero no es una definición universal ni se calcula mirando cuán acomodado está un objeto. Por ejemplo, una secuencia particular de diez monedas tiene la misma probabilidad que otra; lo más probable es una **clase** de resultados con muchas secuencias compatibles, no una secuencia elegida porque parezca desordenada.

## Segundo principio y máquinas térmicas

Una máquina cíclica recibe $Q_h$ de una fuente caliente, entrega $Q_c$ a otra fría y realiza $W=Q_h-Q_c$ en magnitudes positivas:

$$\eta=\frac W{Q_h}=1-\frac{Q_c}{Q_h}.$$

Para un ciclo reversible entre dos fuentes, la variación total de entropía es cero: $Q_h/T_h=Q_c/T_c$. Así se obtiene el límite:

$$\boxed{\eta_{\mathrm{rev}}=1-\frac{T_c}{T_h}}.$$

Las temperaturas se expresan en kelvin. Las irreversibilidades reducen el rendimiento frente a ese límite para las mismas fuentes. Conservar energía no significa que toda pueda transformarse en trabajo útil mediante una máquina cíclica.

El tercer principio relaciona la entropía con el límite de temperatura cero para sistemas ideales apropiados; no autoriza obtener $0\,\mathrm K$ mediante un número finito de procesos de enfriamiento ordinarios.

## Ejercicios

1. Un sistema recibe $800\,\mathrm J$ y realiza trabajo de $300\,\mathrm J$. Hallá $\Delta U$.
2. Una expansión a presión externa constante de $100\,\mathrm{kPa}$ aumenta el volumen $0{,}002\,\mathrm{m^3}$. Hallá $W$.
3. Una máquina recibe $1000\,\mathrm J$ y entrega $600\,\mathrm J$ a la fuente fría. Hallá trabajo y rendimiento.
4. Hallá el rendimiento reversible máximo entre $500$ y $300\,\mathrm K$.

{{< details title="Resultados" >}}

1. $500\,\mathrm J$.
2. $200\,\mathrm J$.
3. $W=400\,\mathrm J$ y $\eta=40\,\%$.
4. $40\,\%$. Es un límite ideal, no una predicción de cualquier máquina real.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
