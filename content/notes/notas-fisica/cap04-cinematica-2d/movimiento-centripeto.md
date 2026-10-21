+++
title = "Movimiento centrípeto"
date = "2026-06-26"
draft = false
math = true
weight = 4
description = "Aceleración centrípeta, período, frecuencia y movimiento circular uniforme."
tags = ["cap04", "cinemática 2D", "movimiento centrípeto", "aceleración centrípeta", "período", "frecuencia", "MCU"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 266–269"
figuras_estado = "1 figura extraída; ejercicio del balde desarrollado"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 266–269. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=266).

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Explicar por qué un objeto en movimiento circular está acelerando aunque su rapidez sea constante.
- Calcular la aceleración centrípeta.
- Relacionar período y frecuencia con velocidad y radio.

---

## ¿Por qué hay aceleración en el movimiento circular?

Un objeto en movimiento circular uniforme (MCU) tiene **rapidez constante** pero su **dirección cambia continuamente**. Como la velocidad es un vector (módulo + dirección), el cambio de dirección implica cambio de velocidad, y por lo tanto **aceleración**.

Esta aceleración apunta siempre **hacia el centro** del círculo.

{{< figura src="/images/diagramas/cap04_velocidad-aceleracion-circular_pp266.png" width="360" alt="Velocidad tangencial y aceleración dirigida hacia el centro." caption="Velocidad tangencial y aceleración dirigida hacia el centro." source="Jeff Bigler, edición octubre de 2025, p. 266. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

---

## Aceleración centrípeta

La **aceleración centrípeta** ($a_c$) es la componente de la aceleración dirigida hacia el centro de la trayectoria circular:

$$\boxed{a_c = \frac{v^2}{r} = r\,\omega^2}$$

Unidad: m/s² (igual que cualquier aceleración)

{{< nota-adaptacion pagina="267" origen="Definición del original: módulo y dirección" >}}
El original la llama «constante». En el movimiento circular uniforme es constante su **módulo**, pero la dirección del vector cambia al recorrer el círculo. Si la rapidez varía, también hay una componente tangencial y la aceleración total no apunta necesariamente al centro.
{{< /nota-adaptacion >}}

> **Centrípeto** significa "hacia el centro". La aceleración centrípeta no es un nuevo tipo de fuerza — es la dirección de la aceleración resultante de cualquier fuerza que mantenga al objeto en círculo.

---

## Período y frecuencia

| Magnitud | Símbolo | Unidad | Definición |
|----------|---------|--------|-----------|
| **Período** | $T$ | s | Tiempo para completar una vuelta |
| **Frecuencia** | $f$ | Hz = 1/s | Vueltas por segundo |

$$T = \frac{1}{f} \qquad f = \frac{1}{T}$$

**Velocidad tangencial a partir del período:**

$$v = \frac{2\pi r}{T}$$

---

## Ejemplo resuelto — Masa en cuerda (Bigler)

Una pesa gira en una cuerda de $r = 0{,}65\ \text{m}$, dando 10 vueltas en 6,5 s. ¿Cuál es la aceleración centrípeta?

**Sin velocidad angular:**

$$\text{Distancia por vuelta:}\ s = 2\pi r = 2\pi \times 0{,}65 = 4{,}08\ \text{m}$$
$$\text{Distancia total:}\ 4{,}08 \times 10 = 40{,}8\ \text{m}$$
$$v = \frac{40{,}8}{6{,}5} = 6{,}28\ \text{m/s}$$
$$a_c = \frac{v^2}{r} = \frac{(6{,}28)^2}{0{,}65} = \frac{39{,}4}{0{,}65} = 60{,}7\ \text{m/s}^2$$

Esto es $\frac{60{,}7}{10} \approx 6{,}1\ g$.

**Con velocidad angular:**

$$\omega = \frac{10 \times 2\pi}{6{,}5} = 9{,}67\ \text{rad/s}$$
$$a_c = r\,\omega^2 = 0{,}65 \times (9{,}67)^2 = 60{,}7\ \text{m/s}^2\ ✓$$

---

## Balde con agua en círculo vertical

En el modelo del ejercicio de Bigler, p. 269, consideramos el agua acompañando al balde y el punto más alto del círculo. Allí el peso y la fuerza de contacto del balde apuntan hacia el centro. La condición de contacto mínimo se obtiene de $mg+N=mv^2/r$ con $N\ge0$:

$$a_c \geq g \implies \frac{v^2}{r} \geq g \implies v_{min} = \sqrt{gr}$$

---

## Para pensar

1. ¿Por qué la aceleración centrípeta apunta hacia el centro y no en la dirección del movimiento?
2. Si duplicás la velocidad de un objeto en MCU (mismo radio), ¿en qué factor cambia la aceleración centrípeta?
3. La Tierra gira alrededor del Sol. ¿Qué fuerza produce la aceleración centrípeta de la Tierra?

## Período, frecuencia y velocidad angular

En MCU de radio fijo:

$$|v|=\frac{2\pi r}{T},\qquad |\omega|=\frac{2\pi}{T}=2\pi f$$

$$a_c=\frac{4\pi^2r}{T^2}=4\pi^2rf^2$$

Para la pesa de 0,65 m y diez vueltas en 6,5 s, $T=0{,}65\ \mathrm s$, $f\approx1{,}538\ \mathrm{Hz}$ y $a_c=0{,}65(20\pi/6{,}5)^2\approx60{,}73\ \mathrm{m/s^2}$. El resultado 60,7 del original se conserva. «6,1 g» compara módulos usando la aproximación didáctica $g=10$; no significa que haya seis fuerzas gravitatorias.

## Movimiento periódico y movimiento armónico

{{< nota-adaptacion pagina="268" origen="Clasificación del movimiento en el original" >}}
El original llama al movimiento circular una forma de movimiento armónico simple porque se repite. Repetirse lo hace **periódico**, pero no convierte la trayectoria circular completa en una oscilación rectilínea armónica. La proyección de un MCU sobre un diámetro sí sigue un movimiento armónico simple. Se distingue así la trayectoria de sus proyecciones; el tema de oscilaciones se desarrolla en su capítulo propio.
{{< /nota-adaptacion >}}

## Ejercicio del balde completo, p. 269

La longitud conjunta del brazo y del balde es 0,90 m. En el punto más alto, el valor límite corresponde a $N=0$, por lo que:

$$v_{\min}=\sqrt{gr}=\sqrt{10(0{,}90)}=3{,}0\ \mathrm{m/s}$$

Si se mantiene una rapidez mayor, el balde puede ejercer una fuerza de contacto hacia el centro. Si la rapidez es menor, el cálculo exigiría una normal negativa y se pierde el contacto del modelo. Esta condición se aplica a ese punto; no supone que la rapidez de un círculo vertical real sea uniforme ni describe cualquier distribución o agitación del agua.

## Aceleración radial y tangencial

Para un punto que recorre una circunferencia de radio fijo y cambia su rapidez, las componentes radial y tangencial son perpendiculares:

$$a_c=\frac{v^2}{r},\qquad a_T=r\alpha,\qquad |\vec a|=\sqrt{a_c^2+a_T^2}$$

No hay que sustituir $a_T$ por $a_c$ en una ecuación de cambio de rapidez. En MCU, $a_T=0$ pero $a_c\ne0$; si cambia la rapidez, aparecen ambas componentes. Para producir aceleración radial puede intervenir tensión, gravedad, normal u otras fuerzas; «centrípeta» nombra la componente resultante hacia el centro, no una fuerza adicional que se agrega al diagrama.

## Predicción propia

Si una cuerda deja de ejercer la fuerza que mantenía el giro horizontal, el objeto inicia su trayectoria con velocidad tangente, no con una velocidad radial hacia afuera. Después puede actuar gravedad u otra fuerza. Es una forma de interpretar la propuesta original de observar la trayectoria al soltar el objeto, sin confundir velocidad inicial con su evolución posterior.

---

Adaptado de Jeff Bigler. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones propias se identifican en el texto.
