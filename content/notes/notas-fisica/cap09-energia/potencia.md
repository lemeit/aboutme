+++
title = "Potencia, energía y rendimiento"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 8
description = "Potencia media e instantánea, kWh, motores, rotación y ejercicios con unidades."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 490–494"
figuras_estado = "0 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 490–494. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=490).

## La misma energía en tiempos distintos

Dos motores pueden elevar la misma carga a la misma altura y realizar el mismo trabajo útil. El que lo hace en menos tiempo desarrolla mayor **potencia media**:

$$P_{\mathrm{media}}=\frac{W}{\Delta t}.$$

Más generalmente, para una transferencia de energía identificada, $P_{\mathrm{media}}=\Delta E_{\mathrm{transferida}}/\Delta t$. Antes de usar la fórmula conviene aclarar si hablamos de potencia eléctrica de entrada, potencia mecánica del eje, potencia útil sobre una carga o rapidez de aumento de una energía determinada.

La unidad es el **watt**:

$$1\,\mathrm W=1\,\mathrm{J/s}=1\,\mathrm{kg\,m^2/s^3}.$$

No confundir la letra $W$ que representa trabajo con el símbolo $\mathrm W$ de la unidad watt. El contexto y las unidades permiten distinguirlos.

## Potencia instantánea

La potencia de una fuerza en un instante es:

$$P_F=\vec F\cdot\vec v=Fv\cos\theta.$$

Aquí se usa la velocidad del **punto de aplicación** de la fuerza. En el modelo de partícula coincide con la del cuerpo. Si la fuerza se opone al movimiento, su potencia es negativa: retira energía mecánica en ese proceso.

Para una rotación alrededor de un eje fijo:

$$P_\tau=\tau\omega.$$

$\omega$ debe estar en rad/s. El torque puede ser constante o variar: esta ecuación es instantánea. Para potencia media hay que promediar el producto a lo largo del intervalo; el producto de dos promedios no es válido en general.

{{< nota-adaptacion pagina="491" origen="Igualdades de potencia y condiciones" >}}
La cadena de igualdades del original combina potencia media, instantánea y cambios de energía. Se separan sus condiciones: $W/\Delta t$ es media; $\vec F\cdot\vec v$ y $\tau\omega$ son instantáneas; $\Delta(K+U)/\Delta t$ representa la potencia neta sobre esa suma solo si no intervienen otras transformaciones o transferencias.
{{< /nota-adaptacion >}}

## Energía en kilowatt-hora

El **kWh es una unidad de energía**, no de potencia:

$$1\,\mathrm{kWh}=(1000\,\mathrm W)(3600\,\mathrm s)=3{,}6\times10^6\,\mathrm J.$$

Un dispositivo de $2\,\mathrm{kW}$ funcionando $3\,\mathrm h$ con esa potencia constante transfiere $6\,\mathrm{kWh}$. Si la potencia varía o el equipo enciende y apaga, hay que sumar la energía de cada tramo.

## Ejemplo de Bigler — fuerza de un motor

Un motor aplica $500\,\mathrm N$ en la dirección del desplazamiento a lo largo de $100\,\mathrm m$ durante $25\,\mathrm s$ (p. 492):

$$W=(500)(100)=50\,000\,\mathrm J,$$

$$P_{\mathrm{media}}=\frac{50\,000}{25}=2000\,\mathrm W=2\,\mathrm{kW}.$$

Como la fuerza es constante, también puede usarse la velocidad media en esa dirección: $\overline v=4\,\mathrm{m/s}$ y $P_{\mathrm{media}}=F\overline v$.

## Ejemplo de Bigler — una lámpara y una masa que cae

Una lámpara de $60\,\mathrm W$ debe recibir energía durante un minuto. Un generador ideal convierte en electricidad la disminución de energía potencial de una masa de $1\,\mathrm{kg}$ (p. 492).

$$E=P\Delta t=(60)(60)=3600\,\mathrm J,$$

$$mgh=E\quad\Rightarrow\quad h=\frac{3600}{(1)(10)}=360\,\mathrm m.$$

Es un cálculo ideal de balance, no el diseño de un generador. Suponer rendimiento del 100 % y campo uniforme simplifica la cuenta; tampoco especifica cómo regular la potencia para sostenerla constante durante toda la caída.

## Rendimiento — ampliación de la adaptación

Un equipo real suele entregar como energía útil solo una parte de la energía que recibe:

$$\eta=\frac{E_{\text{útil}}}{E_{\mathrm{entrada}}}.$$

Para potencias medias referidas al mismo intervalo:

$$\eta=\frac{P_{\text{útil}}}{P_{\mathrm{entrada}}}.$$

En un motor idealizado con $\eta=0{,}80$ que entrega $2\,\mathrm{kW}$ mecánicos:

$$P_{\mathrm{entrada}}=\frac2{0{,}80}=2{,}5\,\mathrm{kW}.$$

La diferencia se transforma en otras formas, por ejemplo energía interna. No significa destrucción de energía. El rendimiento depende de cómo se defina la salida útil y de las condiciones de operación; aquí no se está atribuyendo ese valor a un equipo real.

## Ejemplo rotacional del original

El volante de p. 494 se aproxima a un cilindro macizo uniforme, $m=2500\,\mathrm{kg}$ y diámetro $30\,\mathrm{cm}$. Parte del reposo y llega a $1800\,\mathrm{rpm}$ en $60\,\mathrm s$:

$$R=0{,}15\,\mathrm m,\quad I=\frac12mR^2=28{,}125\,\mathrm{kg\,m^2},$$

$$\omega_f=1800\frac{2\pi}{60}=60\pi\,\mathrm{rad/s}.$$

El trabajo neto necesario es:

$$W_{\mathrm{neto}}=\frac12I\omega_f^2\approx4{,}996\times10^5\,\mathrm J.$$

$$P_{\mathrm{neta,media}}=\frac{W_{\mathrm{neto}}}{60}\approx8{,}33\,\mathrm{kW}.$$

Si hay pérdidas, el motor debe entregar más. Estos datos no permiten afirmar que esa sea también la potencia instantánea en cada momento.

## Ejercicios del original

| Caso | Cálculo del modelo | Resultado |
|:---:|:---:|:---:|
| Motor de $9000\,\mathrm W$, fuerza $300\,\mathrm N$, recorrido $850\,\mathrm m$ | $t=Fd/P$ | $28{,}3\,\mathrm s$ |
| Malacate de $720\,\mathrm W$, fuerza media respecto del recorrido $1500\,\mathrm N$, recorrido $2{,}3\,\mathrm m$ | $t=W/P$ | $4{,}79\,\mathrm s$ |
| Persona de $65\,\mathrm{kg}$ asciende $5{,}2\,\mathrm m$ en $10{,}4\,\mathrm s$ | $P_{\text{útil}}=mg\Delta h/t$ | $325\,\mathrm W$ |
| Persona de $75\,\mathrm{kg}$ lleva balde de $21\,\mathrm{kg}$ hasta $23\,\mathrm m$ en $45\,\mathrm s$ | $P=(75+21)g(23)/45$ | $490{,}7\,\mathrm W$ |
| Persona de $55\,\mathrm{kg}$ lleva el mismo balde hasta $23\,\mathrm m$ en $35\,\mathrm s$ | $P=(55+21)g(23)/35$ | $499{,}4\,\mathrm W$ |
| Grúa ideal de $12\,\mathrm{kW}$ eleva $3500\,\mathrm{kg}$ hasta $6\,\mathrm m$ | $t_{\min}=mgh/P$ | $17{,}5\,\mathrm s$ |

Para los problemas de ascenso se comparan estados con la misma rapidez inicial y final. Las potencias de las personas son potencias mecánicas útiles; no son su consumo metabólico.

El tiempo de la grúa es una cota ideal por balance energético: un movimiento real puede requerir más tiempo por límites de fuerza, aceleración y control de carga. En el malacate, multiplicar fuerza media por distancia exige que sea la media adecuada respecto del recorrido; no cualquier promedio temporal de una fuerza variable.

## Preguntas de cierre

1. ¿Un motor más potente siempre realiza más trabajo?
2. ¿Qué diferencia hay entre una factura de $100\,\mathrm{kWh}$ y una potencia de $100\,\mathrm{kW}$?
3. Si duplicamos el tiempo para elevar la misma carga a igual altura, ¿qué ocurre con la potencia media útil?
4. ¿Puede una potencia instantánea ser negativa?

{{< details title="Orientaciones" >}}

1. No: también importa el tiempo de funcionamiento y la potencia efectivamente entregada.
2. kWh mide energía; kW mide la rapidez de transferencia de energía.
3. Se reduce a la mitad, manteniendo el mismo trabajo útil.
4. Sí. Por ejemplo, la potencia de una fuerza de frenado opuesta a la velocidad es negativa.

{{< /details >}}

---

Traducción y adaptación al español: Prof. Ing. Luciano Lamaita, 2026. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las ampliaciones y actividades propias se identifican en el contenido.
