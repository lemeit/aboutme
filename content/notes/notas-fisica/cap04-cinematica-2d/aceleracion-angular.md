+++
title = "Aceleración angular"
date = "2026-06-26"
draft = false
math = true
weight = 3
description = "Aceleración angular, ecuaciones rotacionales paralelas a las lineales y aceleración tangencial."
tags = ["cap04", "cinemática 2D", "aceleración angular", "rotación", "ecuaciones rotacionales"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 262–265"
figuras_estado = "Ecuaciones y problemas reconstruidos; sin recortes necesarios"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 262–265. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=262).

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Calcular la aceleración angular a partir de velocidades angulares y tiempo.
- Aplicar las ecuaciones rotacionales paralelas a las ecuaciones lineales.
- Relacionar aceleración angular con aceleración tangencial.

---

## Aceleración angular

La **aceleración angular media** ($\alpha_{\mathrm{med}}$) es el cambio de velocidad angular dividido por el tiempo transcurrido. Si es constante, coincide con $\alpha$ durante todo el intervalo. En las expresiones siguientes $t$ representa ese tiempo transcurrido, no un instante arbitrario:

$$\alpha = \frac{\Delta\omega}{t} = \frac{\omega - \omega_0}{t}$$

Unidad: $\text{rad/s}^2$

**Analogía con la aceleración lineal:**

| Lineal | Angular |
|--------|---------|
| $a = \dfrac{v - v_0}{t}$ | $\alpha = \dfrac{\omega - \omega_0}{t}$ |
| m/s² | rad/s² |

---

## Aceleración tangencial

La **aceleración tangencial** ($a_T$) es la componente tangencial de la aceleración de un punto de un cuerpo rígido que gira alrededor de un eje fijo. Además puede tener aceleración radial, incluso cuando $\alpha=0$:

$$a_T = r\,\alpha$$

---

## Ecuaciones rotacionales

Para un eje fijo y **aceleración angular constante**, las ecuaciones del MRUV tienen la siguiente analogía rotacional. Los ángulos se expresan en radianes y los signos se fijan con un sentido de giro; $\Delta x$ en la columna lineal representa desplazamiento con signo, no longitud total del recorrido:

| Lineal | Angular |
|--------|---------|
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ |
| $\Delta x=v_0t+\tfrac12at^2$ | $\Delta\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$ |
| $v^2-v_0^2=2a\Delta x$ | $\omega^2 - \omega_0^2 = 2\alpha\Delta\theta$ |

---

## Ejemplo resuelto — Bicicleta (Bigler)

Un ciclista acelera de $7{,}5\ \text{m/s}$ a $10{,}0\ \text{m/s}$ en $5{,}0\ \text{s}$. Las ruedas tienen radio $r = 0{,}343\ \text{m}$. ¿Cuál es la aceleración angular?

> **Aclaración de la adaptación — Bigler, pp. 263–264:** se supone rodadura **sin deslizamiento**, radio constante y variación uniforme de velocidad. Así, la rapidez del centro de la rueda es $r\omega$ y su aceleración de traslación es $r\alpha$. No se está identificando esa aceleración con la aceleración total de un punto del borde respecto del suelo; el borde también participa del giro. El resultado del ejemplo se conserva.

**Método 1 — desde la aceleración tangencial:**

$$a_T = \frac{v - v_0}{t} = \frac{10{,}0 - 7{,}5}{5{,}0} = 0{,}5\ \text{m/s}^2$$

$$\alpha = \frac{a_T}{r} = \frac{0{,}5}{0{,}343} = 1{,}46\ \text{rad/s}^2$$

**Método 2 — desde las velocidades angulares:**

$$\omega_0 = \frac{v_0}{r} = \frac{7{,}5}{0{,}343} = 21{,}87\ \text{rad/s} \qquad \omega = \frac{10{,}0}{0{,}343} = 29{,}15\ \text{rad/s}$$

$$\alpha = \frac{\omega - \omega_0}{t} = \frac{29{,}15 - 21{,}87}{5{,}0} = 1{,}46\ \text{rad/s}^2$$

Ambos métodos dan el mismo resultado. ✓

---

## Para pensar

1. Un tocadiscos a 33⅓ RPM se apaga y se detiene en 26 s. ¿Cuál es su aceleración angular?
2. ¿Qué significa que $\alpha$ sea negativa para un objeto que estaba girando?
3. Si duplicás el radio de una rueda manteniendo la misma aceleración angular, ¿qué pasa con la aceleración tangencial del borde?

## De la aceleración al ángulo acumulado

Con eje fijo y aceleración angular constante, $\omega=\omega_0+\alpha t$. Su media durante el intervalo es $(\omega_0+\omega)/2$, por lo que:

$$\Delta\theta=\frac{\omega_0+\omega}{2}t=\omega_0t+\frac12\alpha t^2$$

Al eliminar el tiempo se obtiene $\omega^2-\omega_0^2=2\alpha\Delta\theta$. Son ecuaciones para componentes con signo alrededor de un eje elegido, no cuadrados de vectores. Si la aceleración angular varía, las definiciones de medias siguen siendo válidas, pero estas relaciones con aceleración constante no pueden aplicarse sin revisión.

En un gráfico $\theta(t)$, la pendiente indica $\omega$. En $\omega(t)$, la pendiente indica $\alpha$ y el área con signo indica desplazamiento angular. Si $\omega$ es positiva y $\alpha$ negativa, el giro frena; si ambos son negativos, aumenta la rapidez angular en sentido horario. El signo negativo de $\alpha$ solo no prueba frenado.

## Problemas del tocadiscos, p. 265

### 1. Resultado simbólico

Un plato gira inicialmente a $\omega_0$ y se detiene con aceleración constante en tiempo $T$. De $0=\omega_0+\alpha T$:

$$\alpha=-\frac{\omega_0}{T}$$

El signo es opuesto al de la velocidad inicial. Como extensión propia, su desplazamiento antes de detenerse es $\Delta\theta=\omega_0T/2$. El tiempo de detención es el final del modelo: prolongar una aceleración negativa indefinidamente predeciría inversión del giro.

### 2. Plato de 33⅓ rpm

Conservando $33\tfrac13=100/3$ vueltas por minuto, y tomando positivo el giro inicial:

$$\omega_0=\frac{100}{3}\frac{2\pi}{60}=\frac{10\pi}{9}\ \mathrm{rad/s}$$

$$\alpha=-\frac{10\pi/9}{26}=-\frac{5\pi}{117}\ \mathrm{rad/s^2}\approx-0{,}1343\ \mathrm{rad/s^2}$$

{{< nota-adaptacion pagina="265" origen="Respuesta numérica del original" >}}
El original indica −0,135 rad/s². Usando el dato de 33⅓ rpm sin redondearlo antes, el resultado es aproximadamente −0,1343; se explicita esta pequeña diferencia de redondeo. En 26 s recorre $130\pi/9\approx45{,}38$ rad, unas 7,22 vueltas, bajo el modelo uniforme.
{{< /nota-adaptacion >}}

## Control del ejemplo de bicicleta

La cuenta directa $(10-7{,}5)/(5\cdot0{,}343)$ da $1{,}4577\ \mathrm{rad/s^2}$, compatible con 1,46. Si la rueda patina, $v_{\mathrm{centro}}=r\omega$ deja de ser la relación de rodadura usada y el dato de velocidad de la bicicleta no basta para hallar su giro. El resultado del original se conserva dentro de sus supuestos.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.