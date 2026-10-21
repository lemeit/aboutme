+++
title = "Trabajo en la rotación"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 5
description = "Torque, ángulo en radianes y transferencia de energía en una rotación."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 477–478"
figuras_estado = "0 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 477–478. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=477).

## De una fuerza a un torque

Una fuerza aplicada a un cuerpo puede hacerlo trasladarse, girar o ambas cosas. Su efecto sobre la rotación respecto de un eje se describe mediante el **torque** o momento de la fuerza.

Para una fuerza aplicada a distancia $r$ del eje:

$$\tau=rF\sin\varphi=rF_\perp.$$

$\varphi$ es el ángulo entre el vector que va del eje al punto de aplicación y la fuerza. Si la fuerza es perpendicular a la llave o palanca, $\sin\varphi=1$. El torque respecto del eje lleva signo según el sentido de giro elegido.

Tener torque no garantiza trabajo: debe existir desplazamiento angular. Una llave sobre una tuerca trabada puede transmitir torque sin que la tuerca gire.

## Trabajo de un torque constante

Para una rotación alrededor de un eje fijo:

$$W_\tau=\tau\,\Delta\theta.$$

Se usa el torque de la fuerza considerada respecto de ese eje y el ángulo recorrido **en radianes**. Si el torque cambia, la forma general es:

$$W_\tau=\int_{\theta_i}^{\theta_f}\tau(\theta)\,d\theta.$$

La derivación para una fuerza tangencial es directa: un punto a distancia $r$ recorre $ds=r\,d\theta$. Entonces $dW=F_\perp ds=(rF_\perp)d\theta=\tau\,d\theta$.

| Traslación de una partícula | Rotación sobre eje fijo |
|:---:|:---:|
| Fuerza paralela $F_\parallel$ | Torque $\tau$ |
| Desplazamiento $\Delta x$ | Ángulo $\Delta\theta$ en rad |
| $W=F_\parallel\Delta x$ si es constante | $W=\tau\Delta\theta$ si es constante |

El trabajo es positivo si el torque favorece el giro que ocurre y negativo si se opone a él.

## Ejemplo de Bigler — llave de 36 cm

Una fuerza perpendicular de $100\,\mathrm N$ se aplica al extremo de una llave de $36\,\mathrm{cm}$ y gira un tornillo $30^\circ$ (p. 478). Suponemos que el torque se mantiene constante durante el giro.

**Convertimos unidades:** $r=0{,}36\,\mathrm m$ y $\Delta\theta=30\pi/180=\pi/6\,\mathrm{rad}$.

**Calculamos el torque:**

$$\tau=(0{,}36)(100)=36\,\mathrm{N\,m}.$$

**Calculamos el trabajo:**

$$W=(36)\frac\pi6=6\pi\,\mathrm J\approx18{,}85\,\mathrm J.$$

Si se gira el doble de ángulo con el mismo torque, el trabajo se duplica. Si se aplica la fuerza más cerca del eje, el torque y el trabajo para ese ángulo disminuyen.

## Torque y trabajo: mismas dimensiones, magnitudes distintas

El torque se expresa en N·m y el trabajo en J, aunque $1\,\mathrm J=1\,\mathrm{N\,m}$. El torque describe el efecto rotacional de una fuerza y tiene dirección axial en la descripción vectorial; el trabajo es una transferencia escalar de energía.

{{< nota-adaptacion pagina="478" origen="Relación entre torque y trabajo" >}}
El original los llama magnitudes no relacionadas. Son magnitudes distintas, pero sí se relacionan mediante el trabajo de un torque durante un giro. Se mantiene la advertencia de no intercambiarlas solo porque compartan dimensiones.
{{< /nota-adaptacion >}}

## Si el torque es el resultante

Para un cuerpo rígido de momento de inercia constante que gira sobre un eje fijo:

$$W_{\mathrm{neto,rot}}=\Delta K_r=\frac12I\omega_f^2-\frac12I\omega_i^2.$$

Si hay un torque motor y otro de rozamiento, cada uno realiza su trabajo. La diferencia entre el aporte del motor y lo transformado por rozamiento cambia la energía cinética de rotación.

### Extensión resuelta — arranque de un rotor

Un rotor de $I=0{,}50\,\mathrm{kg\,m^2}$ gira desde el reposo por acción de un torque neto constante de $2\,\mathrm{N\,m}$ durante un ángulo de $4\,\mathrm{rad}$:

$$W_{\mathrm{neto}}=(2)(4)=8\,\mathrm J,$$

$$\omega_f=\sqrt{\frac{2W}{I}}=\sqrt{32}\approx5{,}66\,\mathrm{rad/s}.$$

No se necesitó conocer el tiempo. Si además quisiéramos calcularlo, necesitaríamos relacionar el giro con la aceleración angular.

## Actividades propias

1. Un torque constante de $5\,\mathrm{N\,m}$ hace girar un eje media vuelta. Calculá el trabajo.
2. Un freno ejerce un torque opuesto al giro de módulo $3\,\mathrm{N\,m}$ durante $2\,\mathrm{rad}$. ¿Qué signo tiene su trabajo?
3. ¿Por qué no se puede reemplazar $30^\circ$ por el número $30$ en $W=\tau\Delta\theta$?
4. Un motor hace $100\,\mathrm J$ y el rozamiento realiza $-30\,\mathrm J$. ¿Cuánto cambia la energía cinética de un rotor sobre eje fijo?

{{< details title="Resultados" >}}

1. Media vuelta es $\pi\,\mathrm{rad}$: $W=5\pi\approx15{,}7\,\mathrm J$.
2. $W=-6\,\mathrm J$.
3. La relación entre arco y ángulo que fundamenta la fórmula exige radianes. $30^\circ=\pi/6\,\mathrm{rad}$.
4. Aumenta $70\,\mathrm J$ si esos son todos los trabajos.

{{< /details >}}

---

Traducción y adaptación al español: Prof. Ing. Luciano Lamaita, 2026. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las ampliaciones y actividades propias se identifican en el contenido.
