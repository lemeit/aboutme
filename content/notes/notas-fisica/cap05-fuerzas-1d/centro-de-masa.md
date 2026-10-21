+++
title = "Centro de masa"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Definición, cálculo y aplicaciones del centro de masa de un sistema."
tags = ["cap05", "fuerzas", "centro de masa", "sistemas", "equilibrio"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 286–290"
figuras_estado = "4 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 286–290. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=286).

## Qué representa el centro de masa

El **centro de masa** resume cómo está distribuida la masa de un cuerpo o sistema. Su posición es un promedio de posiciones ponderado por masas: las partes más masivas tienen más peso en ese promedio. No tiene por qué coincidir con el centro geométrico ni dividir la masa en dos mitades iguales.

{{< nota-adaptacion pagina="286" origen="Definición simplificada del original y del resumen anterior" >}}
Concentrar toda la masa en un punto permite describir la traslación mediante la fuerza externa resultante. No conserva automáticamente cualquier efecto de las fuerzas: para analizar rotación, torque, deformaciones o campos no uniformes puede ser necesario conocer la distribución de masa. Por eso no se mantiene sin condiciones la frase «sin cambiar el resultado de cualquier fuerza».
{{< /nota-adaptacion >}}

{{< figura src="/images/diagramas/cap05_centro-martillo_pp287.png" width="440" alt="Centro de masa de un martillo." caption="Centro de masa de un martillo." source="Jeff Bigler, edición octubre de 2025, p. 287. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La cabeza del martillo concentra más masa que un tramo del mango de la misma longitud. Su centro de masa se encuentra cerca de la cabeza; no se obtiene simplemente tomando la mitad de su longitud.

## Puede cambiar de lugar y quedar fuera del cuerpo

En una persona, mover brazos o tronco cambia la distribución de masa respecto de su cuerpo. El centro de masa puede quedar fuera de la materia que lo forma, como en un anillo o en ciertas posturas. Esto no significa que haya masa material acumulada en el hueco: es una posición calculada.

{{< figura src="/images/diagramas/cap05_centro-posturas_pp287.png" width="380" alt="El centro de masa cambia con la postura." caption="El centro de masa cambia con la postura." source="Jeff Bigler, edición octubre de 2025, p. 287. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El dibujo del original ilustra ese cambio con distintas posturas. La línea punteada es una referencia; no representa una fuerza ni una trayectoria obligatoria.

## Cálculo por componentes

Para masas discretas, con masa total $M=\sum_i m_i>0$:

$$\vec r_{\mathrm{CM}}=\frac{\sum_i m_i\vec r_i}{M}$$

En una dimensión:

$$x_{\mathrm{CM}}=\frac{m_1x_1+m_2x_2+\cdots}{m_1+m_2+\cdots}$$

Cada coordenada se mide desde el **mismo origen**, con la misma unidad y convención de signos. El numerador tiene unidad kg·m; al dividir por kg queda una longitud. En dos o tres dimensiones se calcula un promedio análogo para cada componente.

## Ejemplo del original: sube y baja

Dos personas de 59 kg y 71 kg se ubican en los extremos de una tabla de 3,5 m cuya masa se desprecia. Elegimos $x_1=0$ para la persona de 59 kg y $x_2=3{,}5$ m para la otra:

$$x_{\mathrm{CM}}=\frac{59(0)+71(3{,}5)}{59+71}=\frac{248{,}5}{130}\ \mathrm m\approx1{,}91\ \mathrm m$$

Está a 1,91 m del extremo de 59 kg y a 1,59 m del de 71 kg: queda más cerca de la persona más masiva. **Aclaración de la adaptación:** 59 y 71 kg son masas, no pesos. Si la tabla tiene masa apreciable, debe agregarse al promedio con la posición de su propio centro de masa.

**Comprobación propia:** si la tabla fuera uniforme y de masa $m_t$, su contribución sería $m_t(1{,}75)$ en el numerador y $m_t$ en el denominador. Al aumentar mucho esa masa, el centro de masa total se aproxima al centro de la tabla.

## Equilibrio y método de la plomada

En gravedad aproximadamente uniforme, el centro de gravedad coincide con el centro de masa. Para un cuerpo colgado que llega al reposo, la vertical que pasa por la suspensión también pasa por ese centro. Repitiendo la suspensión desde otro punto se obtiene otra vertical; su intersección permite localizarlo.

{{< figura src="/images/diagramas/cap05_centro-plomada_pp289.png" width="370" alt="Método de suspensión y plomada." caption="Método de suspensión y plomada." source="Jeff Bigler, edición octubre de 2025, p. 289. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

No debe interpretarse «se equilibra en su centro de masa» como una condición suficiente para cualquier apoyo: también hay que revisar fuerzas, torques y estabilidad. En un cuerpo apoyado, la línea vertical del peso debe quedar dentro de la región de apoyo para evitar el vuelco en el modelo estático simple.

## Movimiento del sistema

Para masa total constante, en un marco inercial:

$$\sum\vec F_{\mathrm{ext}}=M\vec a_{\mathrm{CM}}$$

Las fuerzas internas pueden cambiar la configuración del sistema, pero se cancelan en el balance total de fuerzas del modelo newtoniano. Si la resultante externa es cero, el centro de masa mantiene su velocidad, aunque las partes se muevan entre sí.

{{< figura src="/images/diagramas/cap05_centro-trayectoria_pp290.png" width="540" alt="Trayectoria del centro de masa de un objeto que gira." caption="Trayectoria del centro de masa de un objeto que gira." source="Jeff Bigler, edición octubre de 2025, p. 290. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En el martillo lanzado y girando, la trayectoria del centro de masa es parabólica si se desprecia el aire y el campo gravitatorio es uniforme. Los extremos del martillo no recorren esa misma parábola. Para una actividad propia con video, compará el seguimiento del centro de masa con el de un extremo; justificá primero cómo localizaste el centro.

## Para comprobar

1. ¿Por qué el promedio simple de posiciones no sirve si las masas son distintas?
2. ¿Qué cambia si se agrega la masa de la tabla al ejemplo?
3. ¿Puede moverse una parte del sistema si su centro de masa permanece quieto?

**Respuestas orientativas:** se pondera por masa; cambia tanto el numerador como la masa total; sí, las fuerzas internas pueden generar movimiento relativo.

---

Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Original de Jeff Bigler y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los ejemplos propios y las observaciones en revisión se identifican en el texto.
