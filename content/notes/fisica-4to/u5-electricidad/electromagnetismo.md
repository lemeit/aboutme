+++
title = "Electromagnetismo, generación y transporte"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 3
draft = false
math = true
description = "Campo magnético, inducción, conversión de energía y pérdidas en líneas eléctricas."
+++

## Corriente y campo magnético

Una corriente eléctrica produce campo magnético. El campo tiene dirección y puede ejercer fuerzas sobre cargas en movimiento y conductores con corriente. En el modelo de fuerza magnética sobre una carga:

$$\vec F_B=q\vec v\times\vec B,\qquad F_B=|q|vB\sin\theta.$$

La fuerza magnética es perpendicular a la velocidad. Para una partícula, por sí sola no cambia la rapidez: $\vec F_B\cdot\vec v=0$. Esto no significa que un motor no transforme energía: en el circuito y el sistema completo intervienen también campos eléctricos, la fuente e interacciones con el rotor.

## Recorrido intuitivo: inducción

Un generador convierte trabajo mecánico en energía eléctrica mediante inducción. Cambiar el flujo magnético enlazado por un circuito puede producir fuerza electromotriz. Mantener quietos un imán y una espira en una configuración constante no produce por ese solo hecho una tensión inducida continua.

Para un campo uniforme que atraviesa una superficie plana:

$$\Phi_B=BA\cos\theta.$$

El ángulo se mide entre el campo y la **normal** a la superficie. El flujo puede cambiar porque cambian $B$, $A$ o la orientación.

Para $N$ espiras con el mismo flujo por espira, la ley de Faraday se expresa:

$$\mathcal E=-N\frac{d\Phi_B}{dt}.$$

Es una ley física contrastada, no una consecuencia de la ley de Ohm. El signo expresa la ley de Lenz: el sentido de la respuesta se opone al cambio de flujo que la produce. No significa que la tensión deba tener siempre signo negativo en cualquier referencia.

## Profundización: un generador ideal que gira

Si una espira de área $A$ gira con rapidez angular constante $\omega$ en un campo uniforme, $\theta=\omega t+\theta_0$:

$$\Phi_B(t)=BA\cos(\omega t+\theta_0).$$

Derivando y aplicando Faraday:

$$\boxed{\mathcal E(t)=NBA\omega\sin(\omega t+\theta_0)}.$$

La amplitud ideal es $NBA\omega$. La inducción genera una respuesta mecánica que exige trabajo para sostener el giro cuando se entrega energía a una carga. No aparece energía gratuita por hacer girar la espira.

En forma más general, el flujo es $\Phi_B=\int_S\vec B\cdot d\vec A$. La expresión $BA\cos\theta$ supone campo y orientación uniformes en la superficie considerada.

## Generación, transporte y distribución

Distintas centrales transforman energía de fuentes diferentes: movimiento del agua o aire, calor que impulsa turbinas, radiación solar mediante dispositivos fotovoltaicos, entre otras. No todas utilizan el mismo mecanismo de conversión; una celda fotovoltaica no es una turbina que gira.

En un modelo ideal de corriente continua, la potencia entregada es $P=VI$. Si una línea tiene resistencia $R_L$, la pérdida térmica es:

$$P_{\text{pérdida}}=I^2R_L.$$

Para una potencia transmitida fija y el mismo $R_L$, $I=P/V$, de modo que:

$$\boxed{P_{\text{pérdida}}=\frac{P^2R_L}{V^2}}.$$

Elevar la tensión permite bajar corriente y pérdidas resistivas en esas condiciones. En sistemas de alterna se usan transformadores y deben considerarse valores eficaces, factor de potencia y características de la red. La ecuación simple explica una tendencia, no calcula por sí sola una red real.

La distribución adapta niveles de tensión y lleva energía a usuarios. No se modela como un cable ideal sin resistencia ni límites de aislamiento.

## Ejercicios

1. Una espira tiene flujo que disminuye uniformemente de $0{,}08$ a $0{,}02\,\mathrm{Wb}$ en $0{,}30\,\mathrm s$. Hallá el módulo de la fem inducida.
2. En el modelo de línea anterior, ¿cómo cambia la pérdida si se duplica $V$ manteniendo potencia y resistencia?
3. Una línea de $2\,\Omega$ lleva $5\,\mathrm A$. Hallá su potencia térmica.
4. ¿Por qué «generar electricidad» no significa crear energía de la nada?

{{< details title="Resultados" >}}

1. $|\mathcal E|=0{,}06/0{,}30=0{,}20\,\mathrm V$ para una sola espira.
2. Se reduce a la cuarta parte.
3. $50\,\mathrm W$.
4. Se transforma energía de una fuente y se distribuye en salidas útiles, energía interna y otras formas.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
