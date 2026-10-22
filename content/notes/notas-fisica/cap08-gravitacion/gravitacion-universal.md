+++
title = "Gravitación universal"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 3
description = "Atracción entre masas, campo gravitatorio, órbitas y dependencia con la distancia."
tags = ["cap08", "gravitación"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 426–433"
figuras_estado = "1 figura recuperada del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Universal Gravitation», Bigler, edición de octubre de 2025, [pp. 426–433](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=426).

## Una misma interacción para la caída y las órbitas

Una órbita requiere que la dirección de la velocidad cambie. Newton relacionó el movimiento de los astros con la misma interacción que hace caer a los cuerpos cerca de la superficie terrestre: la gravitación.

En el modelo newtoniano, dos masas puntuales se atraen con una fuerza cuyo módulo es:

$$F_g=G\frac{m_1m_2}{r^2},$$

con $r$ igual a la distancia entre ellas y $G\approx6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$. Duplicar una de las masas duplica la fuerza; duplicar la distancia la reduce a la cuarta parte.

La fuerza sobre cada cuerpo apunta hacia el otro. Sus módulos son iguales y sus sentidos opuestos, aunque sus aceleraciones pueden ser distintas por tener masas diferentes.

Si $\hat r$ apunta desde la masa central hacia la masa de prueba, la fuerza sobre esta última es:

$$\vec F_g=-\frac{GMm}{r^2}\hat r.$$

El signo describe la orientación respecto de ese vector unitario; no reemplaza la información de dirección.

## Cuerpos extendidos y distancia al centro

Para una distribución esféricamente simétrica, el campo exterior es el mismo que produciría toda la masa concentrada en su centro. Esto permite usar $r=R+h$ para un cuerpo situado a altura $h$ sobre un planeta de radio $R$.

{{< nota-adaptacion pagina="427" origen="Texto del original: justificación de la distancia al centro terrestre" >}}
La sustitución de la Tierra por una masa puntual no se deduce de promediar las distancias a sus puntos. Corresponde al resultado para una distribución esférica, obtenido sumando vectorialmente sus contribuciones. En la superficie, la dependencia es **inversamente** proporcional a $R^2$ para masa fija; el pasaje dice «proporcional al cuadrado». Para cuerpos sin simetría esférica, el modelo puntual es una aproximación cuyo alcance debe comprobarse.
{{< /nota-adaptacion >}}

## La Luna y la aceleración orbital

El original utiliza el período orbital lunar de unos 27,3 días y su distancia aproximada de 60 radios terrestres. En una aproximación circular:

$$v=\frac{2\pi r}{T},\qquad a_c=\frac{v^2}{r}=\frac{4\pi^2r}{T^2}.$$

La gravitación proporciona esa aceleración radial. El mes sinódico —entre fases equivalentes— dura unos 29,5 días, porque durante la órbita lunar también cambia la posición de la Tierra respecto del Sol.

{{< nota-adaptacion pagina="426" origen="Texto del original: mes sinódico y órbita lunar" >}}
La diferencia entre los meses sidéreo y sinódico se relaciona con la **traslación terrestre alrededor del Sol**, no con la rotación diaria de la Tierra. Las órbitas planetarias tampoco son círculos exactos: el cálculo circular anterior es una aproximación para interpretar la aceleración gravitatoria.
{{< /nota-adaptacion >}}

## Balanza de torsión y constante gravitatoria

{{< figura src="/images/diagramas/cap08_balanza-torsion_pp428.png" width="560" alt="Balanza de torsión presentada en el original." caption="Balanza de torsión presentada en el original." source="Jeff Bigler, edición octubre de 2025, p. 428. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El libro presenta el experimento de Cavendish de 1797–1798: la atracción de esferas grandes sobre esferas pequeñas produce una torsión muy débil de un hilo. Al medirla puede relacionarse la fuerza con las masas y las distancias. La constante $G$ transforma la proporcionalidad de la ley en una igualdad cuantitativa.

El valor empleado en los cálculos del texto, $6{,}67\times10^{-11}$ en SI, es una aproximación. No debe confundirse con $g$, que depende de la masa que produce el campo y de la posición de observación.

## Relación entre G y g

Al dividir la fuerza sobre una masa de prueba por esa masa:

$$g=\frac{F_g}{m}=\frac{GM}{r^2}.$$

En forma vectorial, $\vec g=-GM\hat r/r^2$. La unidad $\mathrm{N/kg}$ expresa campo gravitatorio; es equivalente dimensionalmente a $\mathrm{m/s^2}$, la aceleración de caída libre en este modelo.

En la superficie, $r=R$; a altura $h$, $r=R+h$. Para un planeta esférico:

$$\frac{g(h)}{g(0)}=\left(\frac R{R+h}\right)^2.$$

La aproximación $g\approx10\,\mathrm{m/s^2}$ del libro simplifica problemas terrestres cercanos a la superficie. No debe extenderse sin cambios a la Luna ni a grandes alturas.

### Ejemplo: peso de una persona de 75 kg

Con los datos del enunciado de la p. 431, $M=5{,}97\times10^{24}\,\mathrm{kg}$ y $R=6{,}37\times10^6\,\mathrm m$:

$$g=\frac{(6{,}67\times10^{-11})(5{,}97\times10^{24})}{(6{,}37\times10^6)^2}\approx9{,}81\,\mathrm{m/s^2},$$
$$F_g=75g\approx736\,\mathrm N.$$

Con $g=10$ se obtienen 750 N, aproximadamente un 2 % más.

{{< nota-adaptacion pagina="430" origen="Texto del original: radio terrestre usado en la sustitución" >}}
Las pp. 430–431 alternan radios de $6{,}37\times10^6$ y $6{,}38\times10^6$ m manteniendo el resultado de 9,81 N/kg. Con los otros datos impresos, el segundo radio produce aproximadamente **9,78 N/kg**. Se mantiene aquí un juego de datos coherente: el radio de 6,37 millones de metros del enunciado y su resultado de 9,81 N/kg.
{{< /nota-adaptacion >}}

### Ejemplo: gravedad lunar

Con $M_L=7{,}35\times10^{22}\,\mathrm{kg}$ y $R_L=1{,}74\times10^6\,\mathrm m$:

$$g_L=\frac{GM_L}{R_L^2}\approx1{,}62\,\mathrm{m/s^2}.$$

La masa de una persona no cambia al ir a la Luna; sí cambia su peso por la diferencia del campo gravitatorio.

### Ejemplo: triplicar la distancia

Manteniendo las masas:

$$F'_g=\frac{Gm_1m_2}{(3r)^2}=\frac19F_g.$$

También puede resolverse como cociente entre estados:

$$\frac{F'_g}{F_g}=\frac{m'_1}{m_1}\frac{m'_2}{m_2}\left(\frac r{r'}\right)^2.$$

Esta forma explicita qué variables cambian y cuáles permanecen constantes.

## De la gravitación a una órbita circular

Si la gravitación es la única fuerza radial de un satélite de masa pequeña:

$$\frac{GMm}{r^2}=\frac{mv^2}{r},\qquad v=\sqrt{\frac{GM}{r}}.$$

Con $v=2\pi r/T$:

$$T^2=\frac{4\pi^2}{GM}r^3.$$

Así se recupera la tercera ley para órbitas circulares. El satélite no está fuera de la gravedad: está en caída libre mientras su movimiento tangencial hace que siga la curvatura orbital.

El episodio de la predicción y observación de Neptuno en la p. 429 ilustra el uso del modelo gravitatorio para interpretar perturbaciones en otra órbita, la de Urano. La interacción de un tercer cuerpo produce pequeñas desviaciones respecto de la órbita ideal de dos cuerpos.

## Ejercicios de las pp. 432–433

1. Calculá la fuerza entre la Tierra y el Sol usando $M_T=5{,}97\times10^{24}\,\mathrm{kg}$, $M_S=1{,}99\times10^{30}\,\mathrm{kg}$ y separación $1{,}50\times10^{11}\,\mathrm m$.
2. Calculá la gravedad superficial de Marte con masa aproximada $6{,}42\times10^{23}\,\mathrm{kg}$ y radio $3{,}40\times10^6\,\mathrm m$.
3. Un planeta tiene $g=5{,}0\,\mathrm{m/s^2}$ y radio $2{,}0\times10^6\,\mathrm m$. Hallá su masa.
4. Una persona de 80 kg está en la superficie terrestre y después a $4{,}0\times10^6\,\mathrm m$ de altura. Calculá su peso en ambos casos, usando el radio terrestre anterior.

{{< details title="Resultados y distancias que deben usarse" >}}
1. $F=GM_TM_S/r^2\approx3{,}52\times10^{22}\,\mathrm N$.
2. $g=GM/R^2\approx3{,}70\,\mathrm{m/s^2}$.
3. $M=gR^2/G\approx3{,}0\times10^{23}\,\mathrm{kg}$.
4. En la superficie, $F\approx80(9{,}81)=785\,\mathrm N$. En altura se utiliza $r=(6{,}37+4{,}0)\times10^6\,\mathrm m$, no la altura sola: $F\approx296\,\mathrm N$.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.