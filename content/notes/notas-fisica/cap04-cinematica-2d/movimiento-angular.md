+++
title = "Movimiento angular — velocidad y posición"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Longitud de arco, velocidad angular, velocidad tangencial y conversión de unidades."
tags = ["cap04", "cinemática 2D", "movimiento angular", "velocidad angular", "radianes", "rotación"]
lastmod = "2026-10-14"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 258–261"
figuras_estado = "2 figuras extraídas; tres ejercicios recuperados"
visual_estado = "Pendiente: revisión en navegador"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 258–261. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=258).

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Describir la posición de un objeto en movimiento circular usando coordenadas polares.
- Calcular la velocidad angular a partir del cambio de ángulo y el tiempo.
- Relacionar velocidad angular con velocidad tangencial.
- Convertir entre RPM, rev/s y rad/s.

---

## Coordenadas polares para la rotación

Si un objeto se mueve en círculo, su posición se describe con:
- $r$: distancia al centro de la circunferencia.
- $\theta$: ángulo respecto a una referencia (en **radianes**).

> **Radián:** ángulo cuyo arco tiene la misma longitud que el radio. $2\pi\ \text{rad} = 360°$.

---

## Longitud de arco

La **longitud de arco** permite describir el recorrido sobre la circunferencia. Para un radio fijo, el desplazamiento de arco con signo es:

$$\Delta s=r\Delta\theta\qquad(\Delta\theta\text{ en radianes})$$

---

## Velocidad angular

La **velocidad angular** ($\omega$, omega) es la tasa de cambio del ángulo:

$$\omega_{\mathrm{med}}=\frac{\Delta\theta}{\Delta t}$$

Unidad: $\text{rad/s}$. Si el giro es uniforme, la velocidad angular instantánea coincide con la media; de otro modo la media describe el intervalo completo, no cada instante.

**Analogía con la velocidad lineal:**

| Lineal | Angular |
|--------|---------|
| $v = \dfrac{\Delta x}{t}$ | $\omega = \dfrac{\Delta\theta}{t}$ |
| m/s | rad/s |

---

## Velocidad tangencial

La **velocidad tangencial** ($v_T$) es la velocidad lineal instantánea de un punto sobre el cuerpo girante — su dirección es siempre tangente al círculo:

$$v_T = r\,\omega$$

---

## Conversión de unidades

**RPM a rad/s:**

$$\omega\left(\frac{\text{rad}}{\text{s}}\right) = \text{RPM} \times \frac{1\ \text{min}}{60\ \text{s}} \times \frac{2\pi\ \text{rad}}{1\ \text{rev}}$$

**Ejemplo:** motor a 2400 RPM:

$$\omega = 2400 \times \frac{1}{60} \times 2\pi = \frac{4800\pi}{60} = 80\pi \approx 251\ \text{rad/s}$$

---

## Ejemplos resueltos

### Ejemplo 1 — Palo de golf (Bigler)

En el ejercicio 3 de la p. 261, el radio efectivo del conjunto brazo y palo es 1,1 m y la velocidad angular media del giro es 5,0 rad/s. El valor siguiente es la rapidez tangencial media si se conserva radio y sentido; no se atribuye ese valor a cada instante de un giro variable.

$$v_T = r\,\omega = 1{,}1 \times 5{,}0 = 5{,}5\ \text{m/s}$$

### Ejemplo 2 — Moneda sobre un disco girante (Bigler)

Una moneda está a $r = 0{,}25\ \text{m}$ del centro de un disco que da 1 vuelta cada 2 s. Distancia recorrida en 10 s:

$$\omega = \frac{2\pi}{2} = \pi\ \text{rad/s}$$

$$s = r\,\omega\,t = 0{,}25 \times \pi \times 10 = 2{,}5\pi \approx 7{,}85\ \text{m}$$

---

## Extensión — Jerk angular

Del mismo modo que el jerk es el cambio de aceleración lineal, el **jerk angular** ($\zeta$, zeta) es el cambio de aceleración angular:

$$\zeta_{\mathrm{med}}=\frac{\Delta\alpha}{\Delta t}$$

Su unidad es $\mathrm{rad/s^3}$. Si la aceleración angular es constante durante un tramo, el jerk angular en ese tramo es cero; no significa que la velocidad angular sea constante.

---

## Para pensar

1. ¿Por qué los radianes son adimensionales?
2. Un punto está al doble de distancia del centro que otro punto en el mismo disco girante. ¿Cómo se comparan sus velocidades tangenciales?
3. Un disco ideal completa una vuelta cada 25 días. ¿Cuál es su velocidad angular en rad/s? Esta pregunta propia usa un giro rígido ideal; no modela la rotación diferencial del Sol.

## Convenciones y límites de la analogía

Elegí un sentido positivo, por ejemplo antihorario, y un ángulo de referencia. Un desplazamiento de $-\pi/2$ rad significa un cuarto de vuelta horario, no una distancia negativa. Si el giro no cambia de sentido, la longitud recorrida es $r|\Delta\theta|$; si invierte, hay que sumar las longitudes de cada tramo.

Los ángulos de posición pueden representarse módulo $2\pi$, pero para contar vueltas y calcular velocidades hay que conservar el ángulo acumulado. Después de cinco vueltas, la posición angular coincide con la inicial módulo $2\pi$, mientras el desplazamiento acumulado es $10\pi$ rad.

La relación $v_T=r\omega$ vincula componentes tangenciales con signo si se usa la misma orientación del arco. Para rapideces se usa $|v_T|=r|\omega|$. En un cuerpo rígido con eje fijo, todos los puntos tienen la misma velocidad angular, pero el módulo de velocidad tangencial aumenta con su distancia al eje. El punto del eje tiene $r=0$ y no recorre una circunferencia.

{{< figura src="/images/diagramas/cap04_arco-radianes_pp258.png" width="350" alt="Arco, radio y ángulo en radianes." caption="Arco, radio y ángulo en radianes." source="Jeff Bigler, edición octubre de 2025, p. 258. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

## Ejercicios completos del original, p. 261

### 1. Rueda que desenrolla una cuerda

Una rueda de radio 20 cm debe desenrollar 40 cm de cuerda. Suponemos que la cuerda no desliza sobre el borde y que el radio efectivo no cambia.

{{< figura src="/images/diagramas/cap04_rueda-cuerda_pp261.png" width="280" alt="Rueda de radio 20 cm que desenrolla una cuerda." caption="Rueda de radio 20 cm que desenrolla una cuerda." source="Jeff Bigler, edición octubre de 2025, p. 261. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$|\Delta\theta|=\frac{s}{r}=\frac{0{,}40}{0{,}20}=2\ \mathrm{rad}$$

Esto equivale a $2\cdot180/\pi\approx114{,}6^\circ$, no dos vueltas. No hay dato de tiempo, por lo que no se obtiene una velocidad angular.

### 2. Brazo de una lanzadora

El brazo gira un tercio de vuelta en 0,1 s. El ángulo recorrido es $2\pi/3$ rad y:

$$|\omega_{\mathrm{med}}|=\frac{2\pi/3}{0{,}1}\approx20{,}94\ \mathrm{rad/s}$$

El dato es una media del intervalo. No demuestra que la velocidad angular sea constante, y tampoco permite hallar la rapidez lineal de la mano sin conocer el radio efectivo.

### 3. Palo de golf

El cálculo $1{,}1(5{,}0)=5{,}5\ \mathrm{m/s}$ ya desarrollado corresponde a los datos del tercer ejercicio. Radio y velocidad angular bastan para esa relación; no permiten deducir por sí solos la aceleración del giro.

## Comprobación de la moneda

En los 10 s del ejemplo de p. 260 se completan cinco vueltas. La distancia es 7,85 m, pero el desplazamiento vectorial entre posición final e inicial es cero. Esta diferencia entre trayectoria y extremos también existe en rotación: no se debe usar la distancia recorrida como si fuera desplazamiento cartesiano.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.