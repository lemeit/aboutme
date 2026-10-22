+++
title = "Formas, fuentes y uso de la energía"
date = "2026-10-21"
lastmod = "2026-10-21"
weight = 6
draft = false
math = true
description = "Transformaciones cotidianas, recursos, combustibles fósiles, alternativas y eficiencia."
+++

## Forma y fuente no son lo mismo

Cinética, potencial, interna y química describen contribuciones energéticas. Sol, viento, agua en altura y combustibles son fuentes o recursos mediante los cuales se realizan transformaciones. Electricidad no identifica por sí sola la fuente primaria utilizada.

En una central, «generar energía» suele significar convertir energía disponible en una forma aprovechable. No significa crearla de la nada. Una batería almacena energía en su sistema químico y un embalse en el sistema agua–Tierra.

## Recorrido intuitivo: cadenas de transformación

- En una central hidroeléctrica, la disminución de energía potencial del agua puede transformarse en movimiento, trabajo de turbina y energía eléctrica.
- En una central térmica, la energía de una fuente caliente se transfiere y una parte se convierte en trabajo. Otra parte se entrega al entorno.
- En una celda fotovoltaica, un dispositivo convierte parte de la energía de radiación en energía eléctrica sin necesitar una turbina.
- Un aerogenerador extrae parte de la energía del aire en movimiento; el aire debe seguir circulando.

Las pérdidas de energía útil no son destrucción de energía. La eficiencia depende de qué entrada y salida se comparen:

$$\eta=\frac{E_{\text{útil}}}{E_{\mathrm{entrada}}}.$$

## Profundización: potencia y disponibilidad

Para potencia variable:

$$E=\int P(t)\,dt.$$

Dos equipos con igual potencia máxima no necesariamente entregan igual energía anual. Depende del tiempo y de cómo varía su producción. Compará energías en el mismo intervalo, además de potencias nominales.

Para una caída de agua ideal de altura $H$ y caudal volumétrico $Q_v$, durante $\Delta t$ pasa una masa $\Delta m=\rho Q_v\Delta t$. Por tanto:

$$\frac{\Delta U_g}{\Delta t}=\rho Q_vgH,\qquad P_{\text{útil}}\approx\eta\rho Q_vgH.$$

Para un flujo uniforme de aire de densidad $\rho$, rapidez $v$ y sección $A$, la masa que cruza por segundo es $\rho Av$. Su flujo de energía cinética es:

$$P_{\mathrm{flujo}}=\frac12(\rho Av)v^2=\frac12\rho Av^3.$$

No es automáticamente la potencia capturada por una turbina: extraer energía modifica el flujo y hay límites aerodinámicos y pérdidas. La ecuación muestra por qué la rapidez del aire tiene un efecto fuerte en ese modelo.

## Combustibles fósiles y alternativas

Los combustibles fósiles liberan energía en reacciones químicas y su uso puede producir emisiones de gases de efecto invernadero y contaminantes. Un análisis completo también considera extracción, transporte, infraestructura y residuos. Una fuente renovable se repone mediante flujos naturales en la escala considerada, pero eso no significa ausencia de impactos.

Compará alternativas por servicio prestado, energía obtenida, disponibilidad temporal, almacenamiento, materiales, territorio y efectos ambientales. Evitá concluir que una tecnología es siempre la mejor sin definir contexto y criterios.

## Ejemplo resuelto

Una instalación idealizada recibe $1000\,\mathrm J$ y entrega $300\,\mathrm J$ de energía útil. Su rendimiento es $30\,\%$. Los $700\,\mathrm J$ restantes deben contabilizarse en otras formas o transferencias. Si dos etapas sucesivas tienen rendimientos $\eta_1$ y $\eta_2$ sobre sus respectivas entradas, el rendimiento conjunto es $\eta_1\eta_2$, no su suma.

## Actividad y ejercicios

1. Dibujá la cadena de transformaciones desde una fuente hasta una lámpara, identificando conversiones y salidas al entorno.
2. Dos etapas tienen rendimientos del $80\,\%$ y $75\,\%$. Hallá rendimiento conjunto.
3. Una fuente entrega $2\,\mathrm{kW}$ constantes durante $3\,\mathrm h$. Hallá energía.
4. En el modelo de flujo de aire, ¿cómo cambia la potencia disponible si se duplica $v$, manteniendo $\rho$ y $A$?

{{< details title="Resultados" >}}

2. $0{,}80\times0{,}75=0{,}60$, es decir $60\,\%$.
3. $6\,\mathrm{kWh}=21{,}6\,\mathrm{MJ}$.
4. Se multiplica por ocho. No implica que una turbina real pueda mantener el mismo régimen ni capturar toda esa potencia.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
