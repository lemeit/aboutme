+++
title = "Rapidez de escape y energía orbital"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 7
description = "Escape gravitatorio, referencia en infinito y diferencia entre escapar y orbitar."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 487–489"
figuras_estado = "0 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 487–489. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=487).

## Escapar no es alcanzar una altura cualquiera

En el modelo de un planeta esférico, aislado y fijo, la **rapidez de escape** desde una distancia $r$ de su centro es la mínima rapidez inicial para que un cuerpo se aleje indefinidamente sin propulsión posterior. Se desprecia la atmósfera, la rotación del planeta y la influencia de otros cuerpos.

Aunque suele llamarse «velocidad de escape», la fórmula calcula una **rapidez**: un módulo. Además debe existir una trayectoria que no intercepte la superficie del planeta.

La gravedad no se apaga al alcanzar cierta altura. Su intensidad disminuye con la distancia. Para el escape límite, el cuerpo se aleja y su rapidez tiende a cero cuando la distancia tiende a infinito.

## Por qué no sirve usar un único valor de g

En una caída de pocos metros podemos usar $\Delta U_g=mg\Delta h$. Para escapar, las distancias dejan de ser pequeñas frente al radio planetario y el campo cambia:

$$g(r)=\frac{GM}{r^2},\qquad U_g(r)=-\frac{GMm}{r}.$$

Se eligió $U_g(\infty)=0$. La energía mecánica del cuerpo respecto de un planeta mucho más masivo es:

$$E=\frac12mv^2-\frac{GMm}{r}.$$

## Derivación por conservación de energía

Para el escape límite, en infinito tanto la energía potencial como la cinética tienden a cero. Por conservación:

$$\frac12mv_e^2-\frac{GMm}{r}=0,$$

$$v_e=\sqrt{\frac{2GM}{r}}.$$

La masa del cuerpo pequeño se cancela. La independencia de $m$ corresponde a este modelo; no significa que lanzar un vehículo pesado demande la misma energía que lanzar uno liviano.

{{< nota-adaptacion pagina="488" origen="Derivación de la energía potencial para el escape" >}}
Se reemplaza el producto de una fuerza gravitatoria variable por una distancia por el balance con $U_g=-GMm/r$. El escape límite tiene energía total cero: no se iguala energía cinética positiva a una energía potencial negativa sin atender al cambio de estado.
{{< /nota-adaptacion >}}

## Ejemplo terrestre

Con los datos usados por Bigler, $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$, $M=5{,}97\times10^{24}\,\mathrm{kg}$ y $R=6{,}37\times10^6\,\mathrm m$:

$$v_e\approx1{,}12\times10^4\,\mathrm{m/s}=11{,}2\,\mathrm{km/s}.$$

Si se parte de una altura $h$, se usa $r=R+h$ en la misma ecuación. Es la rapidez necesaria **en ese punto**, no la que un motor tiene que producir necesariamente de una sola vez.

## Ejemplo lunar

Para la Luna, con $M_L=7{,}35\times10^{22}\,\mathrm{kg}$ y $R_L=1{,}74\times10^6\,\mathrm m$:

$$v_{e,L}=\sqrt{\frac{2GM_L}{R_L}}\approx2374\,\mathrm{m/s}\approx2{,}37\,\mathrm{km/s}.$$

El ejercicio de p. 489 usa estos datos para comparar los pozos gravitatorios terrestre y lunar. No calcula una trayectoria real de ida o regreso de una misión espacial.

{{< nota-adaptacion pagina="489" origen="Contexto de la comparación con Apollo 11" >}}
La rapidez de escape ideal de un cuerpo aislado no equivale al presupuesto de velocidades de una misión Tierra–Luna. No hace falta escapar del sistema terrestre para alcanzar una trayectoria de transferencia hacia la Luna. Se conserva el cálculo lunar sin afirmar que reproduzca los encendidos o velocidades reales de la misión.
{{< /nota-adaptacion >}}

## Escape y órbita circular son situaciones distintas

Un satélite puede permanecer ligado al planeta en una órbita. En una órbita circular ideal, la gravedad proporciona la aceleración centrípeta:

$$\frac{GMm}{r^2}=\frac{mv_c^2}{r}\quad\Rightarrow\quad v_c=\sqrt{\frac{GM}{r}}.$$

En el mismo radio:

$$v_e=\sqrt2\,v_c.$$

La energía de la órbita circular es:

$$K=\frac{GMm}{2r},\qquad U_g=-\frac{GMm}{r},\qquad E=-\frac{GMm}{2r}.$$

| Energía total | Situación en el modelo gravitatorio ideal |
|:---:|:---:|
| $E<0$ | Trayectoria ligada si no colisiona; circular o elíptica |
| $E=0$ | Escape límite |
| $E>0$ | Escape con rapidez no nula en infinito, si la trayectoria no colisiona |

En una órbita circular, $K$, $U_g$, $E$ y el momento angular permanecen constantes. En una elíptica, el satélite acelera al acercarse y frena al alejarse: cambian $K$ y $U_g$, pero su suma y el momento angular se conservan en el modelo de fuerza central sin perturbaciones.

{{< nota-adaptacion pagina="489" origen="Nombre de la energía cinética orbital" >}}
Para el satélite tratado como partícula, la energía cinética de la órbita es la de su movimiento traslacional respecto del planeta. No es automáticamente energía de giro del satélite sobre su propio eje. Esa rotación, si se estudia, requiere un término adicional distinto.
{{< /nota-adaptacion >}}

## Actividades propias

1. Si la distancia de partida al centro se duplica, ¿qué ocurre con $v_e$?
2. Si un planeta tiene el doble de masa y el mismo radio, ¿cómo cambia la rapidez de escape superficial?
3. Un cuerpo sale con el doble de masa, desde el mismo radio y con la misma rapidez. ¿Qué ocurre con su energía cinética? ¿Y con la condición de escape?
4. ¿Llegar a una altura de $400\,\mathrm{km}$ garantiza quedar en órbita circular?

{{< details title="Orientaciones" >}}

1. Se divide por $\sqrt2$.
2. Se multiplica por $\sqrt2$.
3. La energía cinética y la magnitud de la potencial se duplican; la rapidez de escape requerida no cambia.
4. No. También importa la velocidad en ese punto y su dirección. Alcanzar altura con velocidad solo vertical no equivale a establecer una órbita circular.

{{< /details >}}

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.