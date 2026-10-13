+++
title = "Trigonometría de ángulo recto"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Seno, coseno, tangente y su aplicación para descomponer vectores en componentes."
tags = ["cap02", "matemáticas", "trigonometría", "seno", "coseno", "tangente", "vectores", "componentes"]
lastmod = "2026-10-13"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 146–151"
figuras_estado = "6 figuras extraídas y revisadas"
visual_estado = "Verificada: escritorio y móvil"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 146–151. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=146). Traducción y adaptación desarrollada; se señalan las aclaraciones propias.

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Usar el teorema de Pitágoras para encontrar un lado de un triángulo rectángulo.
- Aplicar seno, coseno y tangente para relacionar lados y ángulos.
- Descomponer un vector en sus componentes $x$ e $y$.
- Usar las funciones trigonométricas inversas para calcular ángulos.

---

## El triángulo rectángulo

En un triángulo rectángulo con ángulo $\theta$:

- **Hipotenusa** ($h$): el lado más largo, opuesto al ángulo recto.
- **Opuesto** ($o$): el lado opuesto al ángulo $\theta$.
- **Adyacente** ($a$): el lado que forma el ángulo $\theta$ con la hipotenusa (y no es la hipotenusa).

{{< figura src="/images/diagramas/cap02_triangulo-rectangulo_pp146.png" width="320" alt="Triángulo rectángulo con hipotenusa h, cateto opuesto o y adyacente a respecto de theta." caption="Los nombres de los catetos dependen del ángulo de referencia. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 146. Recorte del original, CC BY-NC-SA 4.0." >}}

---

## Las funciones trigonométricas

$$\sin\theta = \frac{o}{h} \qquad \cos\theta = \frac{a}{h} \qquad \tan\theta = \frac{o}{a} = \frac{\sin\theta}{\cos\theta}$$

**Mnemotecnia:** SOH — CAH — TOA

| Función | Relación | Regla |
|---------|----------|-------|
| **S**eno | **O**puesto / **H**ipotenusa | SOH |
| **C**oseno | **A**dyacente / **H**ipotenusa | CAH |
| **T**angente | **O**puesto / **A**dyacente | TOA |

### Teorema de Pitágoras

$$h^2 = o^2 + a^2 \implies h = \sqrt{o^2 + a^2}$$

---

## Descomposición de vectores

El uso más frecuente de la trigonometría en física es descomponer un vector en sus componentes horizontal ($x$) y vertical ($y$).

Si un vector tiene módulo $h$ e inclinación $\theta$ respecto a la horizontal:

$$\boxed{v_x = h \cos\theta} \qquad \boxed{v_y = h \sin\theta}$$

> **Memorizá estas dos relaciones** — las vas a usar en casi todos los problemas de fuerzas, tiro oblicuo y más.

{{< figura src="/images/diagramas/cap02_componentes_pp148.png" width="340" alt="Vector inclinado descompuesto en dos componentes perpendiculares." caption="La componente adyacente se obtiene con coseno y la opuesta con seno. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 148. Recorte del original, CC BY-NC-SA 4.0." >}}

{{< figura src="/images/diagramas/cap02_canon-componentes_pp148.png" width="420" alt="Velocidad de lanzamiento del proyectil de 40 m/s a 30 grados respecto de la horizontal." caption="Datos del ejemplo del original. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 148. Recorte del original, CC BY-NC-SA 4.0." >}}

**Ejemplo — Cañón:**

Un proyectil sale con $v = 40\ \text{m/s}$ a $30°$ sobre la horizontal.

$$v_x = 40 \cos(30°) = 40 \times 0{,}866 = 34{,}6\ \text{m/s}$$
$$v_{0y} = 40 \sin(30°) = 40 \times 0{,}5 = 20{,}0\ \text{m/s}$$

---

## Funciones inversas — encontrar ángulos

Si conocés los lados y necesitás el ángulo, usás las funciones inversas:

$$\theta = \sin^{-1}\left(\frac{o}{h}\right) \qquad \theta = \cos^{-1}\left(\frac{a}{h}\right) \qquad \theta = \tan^{-1}\left(\frac{o}{a}\right)$$

En la calculadora: botón **sin⁻¹**, **cos⁻¹** o **tan⁻¹** (a veces llamado **arcsin**, **arccos**, **arctan**).

**Ejemplo:** un triángulo tiene lado opuesto 5 y hipotenusa 13. ¿Cuál es el ángulo?

$$\theta = \sin^{-1}\left(\frac{5}{13}\right) = \sin^{-1}(0{,}385) \approx 22{,}6°$$

---

## Ángulos especiales

Conviene memorizar estos valores:

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|----------|-------------|-------------|-------------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $0{,}5$ | $0{,}866$ | $0{,}577$ |
| $45°$ | $0{,}707$ | $0{,}707$ | $1$ |
| $60°$ | $0{,}866$ | $0{,}5$ | $1{,}732$ |
| $90°$ | $1$ | $0$ | indefinido |

---

## Calculadora — grados vs. radianes

Asegurate de que tu calculadora esté en **modo grados** (DEG) para todos los problemas de este curso que usen ángulos en grados. Si el resultado parece absurdo, verificá el modo.

---

## Por qué el ángulo determina una razón

En triángulos rectángulos semejantes, los lados correspondientes cambian por el mismo factor. Por eso el cociente entre cateto opuesto e hipotenusa no depende del tamaño del triángulo: depende del ángulo. Esa razón define el seno; de manera análoga se definen coseno y tangente.

Elegir el ángulo de referencia importa. Si cambiás de un ángulo agudo al otro, se intercambian opuesto y adyacente, pero la hipotenusa sigue siendo el lado frente al ángulo recto. Las relaciones se pueden obtener de una tabla o de la calculadora.

{{< figura src="/images/diagramas/cap02_triangulos-semejantes_pp147.png" width="520" alt="Dos triángulos rectángulos de distinto tamaño con el mismo ángulo agudo." caption="Los cocientes entre lados correspondientes permanecen iguales. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 147. Recorte del original, CC BY-NC-SA 4.0." >}}

## Invertir una función no es tomar el recíproco

Si $\sin\theta=5/13$, el arco seno busca un ángulo cuyo seno sea esa razón:

$$\theta=\arcsin(5/13)\approx22{,}62^\circ$$

La tecla $\sin^{-1}$ representa esta función inversa, no $1/\sin\theta$. El recíproco es otra función. En un triángulo rectángulo, el otro ángulo agudo es $90^\circ-\theta$.

En estas descomposiciones el ángulo se mide desde el eje horizontal positivo; si el enunciado lo mide desde otro eje, primero identificá qué componente es adyacente. En otros cuadrantes, seno y coseno incorporan el signo correcto de las componentes.

{{< figura src="/images/diagramas/cap02_angulo-inverso_pp149.png" width="420" alt="Triángulo con cateto opuesto 5 e hipotenusa 13." caption="El arco seno de 5/13 determina el ángulo. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 149. Recorte del original, CC BY-NC-SA 4.0." >}}

## Ejercicios del original

Para los ejercicios 1–5, $C$ es la hipotenusa, $A$ el cateto adyacente a $\theta$ y $B$ el opuesto:

{{< figura src="/images/diagramas/cap02_ejercicios-triangulo_pp150.png" width="280" alt="Triángulo de práctica: C hipotenusa, A adyacente y B opuesto al ángulo theta." caption="La figura no está a escala. Las etiquetas se conservan como aparecen en el original." source="Jeff Bigler, edición octubre de 2025, p. 150. Recorte del original, CC BY-NC-SA 4.0." >}}

1. Si $A=5$ y $C=13$, calculá $B$. **Comprobación:** $B=12$.
2. Con esos mismos datos, calculá $\sin\theta$. **Comprobación:** $12/13$.
3. Si $C=20$ y $\theta=50^\circ$, calculá ambos catetos. **Comprobación:** $A\approx12{,}86$ y $B\approx15{,}32$.
4. Si $A=100$ y $C=150$, calculá $\theta$. **Comprobación:** aproximadamente $48{,}19^\circ$.
5. Si $B=100$ y $C=150$, calculá $\theta$. **Comprobación:** aproximadamente $41{,}81^\circ$.
6. Una pelota está a 10 m del pie de una elevación de 2,5 m. Calculá el ángulo de la línea que une su posición con la cima: $\arctan(2{,}5/10)\approx14{,}04^\circ$. **Aclaración de esta adaptación:** el original presenta ese valor como un ángulo mínimo de lanzamiento de golf; una trayectoria real es curva y para determinar el ángulo de lanzamiento también se necesita la rapidez inicial u otras condiciones. Aquí se resuelve el problema geométrico que esos dos datos permiten plantear.
7. Una fuerza de 80 N forma $40^\circ$ sobre la horizontal. Hallá su componente horizontal. **Comprobación:** $F_x=80\cos40^\circ\approx61{,}28$ N.

Mostrá qué razón se usa y cómo se despeja la incógnita, en lugar de escribir únicamente el resultado de una tecla.

## Actividades propias — Para pensar

1. Un vector de 50 N forma un ángulo de 37° con la horizontal. ¿Cuáles son sus componentes horizontal y vertical?
2. Las componentes de un vector son $v_x = 6\ \text{m/s}$ y $v_y = 8\ \text{m/s}$. ¿Cuál es su módulo? ¿Cuál es el ángulo que forma con la horizontal?
3. ¿Por qué en el tiro oblicuo separamos el movimiento en componente horizontal y vertical?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
