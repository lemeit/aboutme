+++
title = "Movimiento armónico simple"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 1
description = "Fuerza restauradora, período, frecuencia, fase y energía en una oscilación ideal."
tags = ["cap11", "oscilaciones"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 534–539"
figuras_estado = "3 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Simple Harmonic Motion», Bigler, edición de octubre de 2025, [pp. 534–539](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=534).

## Oscilar alrededor del equilibrio

Un movimiento periódico repite su estado después de cierto intervalo. El **movimiento armónico simple** (MAS) es un caso particular: la aceleración es proporcional al desplazamiento respecto del equilibrio y de sentido contrario.

$$F_{\mathrm{rest}}=-kx,\qquad a=-\frac kmx=-\omega^2x.$$

La posición de equilibrio es aquella en la que la fuerza neta es cero. Si el cuerpo se coloca allí con velocidad cero, permanece en reposo; si pasa por allí con velocidad distinta de cero, no se detiene por tener fuerza neta instantánea nula.

{{< figura src="/images/diagramas/cap11_resorte-oscilacion_pp535.png" width="400" alt="Estados sucesivos de una masa unida a un resorte." caption="Estados sucesivos de una masa unida a un resorte." source="Jeff Bigler, edición octubre de 2025, p. 535. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La fuerza restauradora apunta hacia el equilibrio. Al alejarse de él, el objeto pierde rapidez; al acercarse, la gana. En los extremos de la oscilación se detiene instantáneamente y cambia de sentido.

{{< nota-adaptacion pagina="534" origen="Texto del original: definición de MAS y sentido de la aceleración" >}}
No toda oscilación periódica es armónica simple: hace falta la proporcionalidad $a=-\omega^2x$. El original dice que la aceleración «siempre frena»; en realidad frena cuando velocidad y aceleración tienen sentidos opuestos, y aumenta la rapidez cuando apuntan en el mismo sentido. La constante restauradora caracteriza el sistema, no se introduce solo para ajustar unidades.
{{< /nota-adaptacion >}}

## Amplitud, período y frecuencia

La **amplitud** $A$ es el máximo módulo del desplazamiento respecto del equilibrio. El **período** $T$, medido en segundos, es el tiempo de un ciclo completo: volver a la misma posición **con el mismo sentido de movimiento**.

La **frecuencia** $f$ es el número de ciclos por segundo:

$$f=\frac1T,\qquad T=\frac1f,\qquad1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}.$$

La frecuencia angular es $\omega=2\pi f=2\pi/T$. Un recorrido de un extremo al opuesto tarda medio período, no un período.

## La proyección de un movimiento circular

{{< figura src="/images/diagramas/cap11_proyeccion-circular_pp536.png" width="411" alt="Proyección de una trayectoria circular sobre un eje." caption="Proyección de una trayectoria circular sobre un eje." source="Jeff Bigler, edición octubre de 2025, p. 536. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Si un punto recorre una circunferencia con rapidez angular constante, su proyección sobre un diámetro oscila sinusoidalmente. El radio de la circunferencia se convierte en amplitud de la proyección. El punto que gira y su proyección tienen trayectorias diferentes, pero comparten el período.

## Posición, velocidad y aceleración

La solución del MAS ideal puede escribirse:

$$x(t)=A\cos(\omega t+\phi).$$

La fase inicial $\phi$ determina qué estado corresponde a $t=0$. Seno y coseno representan el mismo tipo de movimiento con distinta elección de fase.

{{< figura src="/images/diagramas/cap11_senoide_pp537.png" width="440" alt="Construcción de un desplazamiento sinusoidal." caption="Construcción de un desplazamiento sinusoidal." source="Jeff Bigler, edición octubre de 2025, p. 537. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Derivando respecto del tiempo:

$$v(t)=\frac{dx}{dt}=-A\omega\sin(\omega t+\phi),$$
$$a(t)=\frac{d^2x}{dt^2}=-A\omega^2\cos(\omega t+\phi)=-\omega^2x(t).$$

| Posición | Rapidez | Módulo de la aceleración |
|:---|:---:|:---:|
| Equilibrio, $x=0$ | Máxima: $A\omega$ | Cero |
| Extremos, $x=\pm A$ | Cero | Máximo: $A\omega^2$ |

Estas ecuaciones describen el oscilador ideal lineal; no cualquier movimiento periódico. La posición y la aceleración están en oposición de fase; la velocidad está desfasada un cuarto de ciclo respecto de la posición.

## Energía durante la oscilación

Para una masa y un resorte horizontal ideal:

$$E=K+U=\frac12mv^2+\frac12kx^2.$$

En un extremo $v=0$ y $x=\pm A$, por lo que:

$$E=\frac12kA^2.$$

En el equilibrio $U=0$ con esta referencia y toda la energía mecánica es cinética. Sustituyendo $k=m\omega^2$:

$$v^2=\omega^2(A^2-x^2).$$

La energía potencial aumenta al alejarse del equilibrio y disminuye al acercarse. La fuerza restauradora siempre apunta hacia el equilibrio: cuando el cuerpo se aleja, se mueve **contra** esa fuerza.

{{< nota-adaptacion pagina="539" origen="Texto del original: fuerza restauradora y alejamiento del equilibrio" >}}
El pasaje atribuye a la fuerza restauradora el alejamiento del cuerpo. En el oscilador estable, esa fuerza apunta al equilibrio; la inercia permite atravesarlo y seguir alejándose mientras la fuerza frena el movimiento. Se aclara el sentido causal sin cambiar el balance energético.
{{< /nota-adaptacion >}}

## Oscilaciones reales y amortiguamiento

En un modelo sin disipación, la amplitud se conserva. Con resistencia o rozamiento, la energía mecánica puede transformarse en energía interna y la amplitud disminuir: es una oscilación amortiguada. Para mantener una oscilación real puede ser necesario aportar energía desde afuera.

Los resortes ideales y los péndulos de pequeña amplitud son ejemplos del libro. Una onda puede producir oscilaciones de los elementos del medio, pero su dirección no tiene que ser siempre vertical: depende del tipo de onda.


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.