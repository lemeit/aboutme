+++
title = "Energía cinética de rotación y rodadura"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 6
description = "Momento de inercia, rodadura sin deslizamiento, energía total y ejercicios de rotación."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 479–486"
figuras_estado = "0 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 479–486. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=479).

## Girar también es moverse

Un volante puede girar sobre un eje aunque su centro de masa esté quieto. Sus partículas tienen velocidades y, por tanto, energía cinética. Para un cuerpo rígido que gira alrededor de un eje:

$$K_r=\frac12I\omega^2.$$

$I$ es el **momento de inercia respecto de ese eje**, en kg·m², y $\omega$ la rapidez angular, en rad/s. El momento de inercia depende tanto de la masa como de su distribución respecto del eje: ubicar masa más lejos aumenta $I$.

La ecuación se entiende sumando la energía de las partículas: cada una tiene $v_i=r_i\omega$, de modo que $\sum\frac12m_iv_i^2=\frac12(\sum m_ir_i^2)\omega^2$.

## Traslación más rotación

Si un cuerpo rígido se traslada y gira:

$$K_{\mathrm{total}}=\frac12mv_{\mathrm{CM}}^2+\frac12I_{\mathrm{CM}}\omega^2.$$

El momento de inercia de esta descomposición se toma respecto del eje que pasa por el centro de masa y es paralelo al eje de giro. No se suma otra energía de traslación si ya se calculó toda la energía usando la rotación alrededor de un eje fijo alternativo adecuado: sería contar dos veces.

## Rodar sin deslizar

Sobre un piso en reposo, la condición de rodadura ideal es que el punto de contacto tenga velocidad instantánea nula respecto del piso. En módulos:

$$v_{\mathrm{CM}}=R\omega.$$

También se relacionan el desplazamiento del centro de masa y el giro mediante $\Delta s=R\Delta\theta$. La relación entre aceleración tangencial y angular requiere mantener esa condición durante el movimiento.

{{< nota-adaptacion pagina="479" origen="Ecuación de ángulo y arco en el original" >}}
La página muestra $\Delta\theta=2\pi r$, que mezcla un ángulo con una longitud. La página renderizada confirma esa escritura. Para una vuelta, $\Delta\theta=2\pi\,\mathrm{rad}$ y el arco recorrido es $s=2\pi R$. Para un giro cualquiera, $s=R\Delta\theta$. La relación entre avance y giro exige rodadura sin deslizamiento.
{{< /nota-adaptacion >}}

Si el objeto patina, no podemos imponer $v_{\mathrm{CM}}=R\omega$. Traslación y rotación deben analizarse por separado, relacionadas por las fuerzas y torques que actúan.

En rodadura ideal sobre un piso rígido y fijo, la fricción estática no disipa energía en el punto de contacto. Eso no implica que una rueda real nunca pierda energía: deformaciones, resistencia a la rodadura, aire o un apoyo móvil cambian el modelo.

## Cómo influye la distribución de masa

Para los siguientes cuerpos ideales de radio $R$, con eje de simetría pasando por el centro:

| Cuerpo | Momento de inercia | $K_{\mathrm{total}}$ si rueda sin deslizar |
|:---:|:---:|:---:|
| Aro delgado | $mR^2$ | $mv^2$ |
| Disco o cilindro macizo uniforme | $\frac12mR^2$ | $\frac34mv^2$ |
| Esfera maciza uniforme | $\frac25mR^2$ | $\frac7{10}mv^2$ |
| Esfera hueca de pared delgada | $\frac23mR^2$ | $\frac56mv^2$ |

Estas son idealizaciones. Una pelota de bowling real puede tener un núcleo no uniforme; una de tenis se aproxima aquí a una cáscara esférica delgada, sin deformaciones importantes.

## Ejemplo de Bigler — bola de bowling

Se modela como esfera maciza uniforme de $m=7{,}25\,\mathrm{kg}$ y $R=0{,}109\,\mathrm m$, rodando sin patinar a $8\,\mathrm{m/s}$ (p. 481):

$$\omega=\frac8{0{,}109}\approx73{,}39\,\mathrm{rad/s},$$

$$I=\frac25(7{,}25)(0{,}109)^2\approx0{,}0344569\,\mathrm{kg\,m^2}.$$

Al conservar cifras durante el cálculo:

$$K_r=\frac15mv^2=92{,}8\,\mathrm J,$$

$$K_t=\frac12mv^2=232\,\mathrm J,\qquad K_{\mathrm{total}}=324{,}8\,\mathrm J.$$

{{< nota-adaptacion pagina="481" origen="Resultado del ejemplo de bowling" >}}
El original informa $185{,}6\,\mathrm J$, pero con $I=\frac25mR^2$ y $K_r=\frac12I\omega^2$ corresponde $92{,}8\,\mathrm J$. El resultado publicado equivale a omitir el factor $1/2$ de la última ecuación. Se conservan los datos y el modelo de esfera uniforme; la observación continúa en revisión.
{{< /nota-adaptacion >}}

## Ejemplo de Bigler — pelota de tenis

Una pelota de $58\,\mathrm g$ y diámetro $6{,}75\,\mathrm{cm}$ recorre $5\,\mathrm m$ en $1{,}25\,\mathrm s$ (p. 483). Para usar $v=d/t$ como rapidez en la cuenta, suponemos movimiento uniforme. Con rodadura sin deslizamiento y el modelo de esfera hueca:

$$v=4\,\mathrm{m/s},\qquad K_t=0{,}464\,\mathrm J,$$

$$K_r=\frac13mv^2\approx0{,}309\,\mathrm J,$$

$$K_{\mathrm{total}}\approx0{,}773\,\mathrm J.$$

El radio se usa para calcular $I$ y $\omega$; al combinar ambas expresiones se cancela en la energía para un mismo modelo de forma y rapidez.

## Rodadura por una rampa

Si $I=\beta mR^2$, el cuerpo parte del reposo y desciende una altura $h$ sin patinar ni disipar energía:

$$mgh=\frac12mv^2+\frac12I\frac{v^2}{R^2}=\frac12m(1+\beta)v^2,$$

$$v=\sqrt{\frac{2gh}{1+\beta}}.$$

Una parte de la energía potencial se convierte en rotación. Por eso no corresponde usar simplemente $v=\sqrt{2gh}$, que sería el resultado para una partícula que desliza sin rozamiento y sin girar.

Para el disco de p. 486, rampa de longitud $1\,\mathrm m$ y ángulo $15^\circ$:

$$h=\sin15^\circ\,\mathrm m,\qquad v=\sqrt{\frac{4gh}3}\approx1{,}86\,\mathrm{m/s}.$$

## Volante que se frena

Un cilindro macizo de $2000\,\mathrm{kg}$ y **diámetro** $25\,\mathrm{cm}$ gira a $3600\,\mathrm{rpm}$ (p. 485). Su radio es $0{,}125\,\mathrm m$, y:

$$\omega=3600\frac{2\pi}{60}=120\pi\,\mathrm{rad/s},$$

$$I=\frac12mR^2=15{,}625\,\mathrm{kg\,m^2},$$

$$K_r=\frac12I\omega^2\approx1{,}11\times10^6\,\mathrm J.$$

Para detenerlo, el trabajo neto **sobre** el volante es $-1{,}11\times10^6\,\mathrm J$. La magnitud de energía que debe retirar el frenado es positiva. Es necesario distinguir esos dos enunciados.

## Práctica del original

1. Esfera maciza de $0{,}100\,\mathrm{kg}$, $R=0{,}0254\,\mathrm m$, $\omega=1\,\mathrm{rad/s}$, en rodadura sin deslizamiento: calculá $K_r$, $K_t$ y el total.
2. Un objeto sobre eje fijo parte del reposo y recibe $250\,\mathrm J$ netos. Da $20$ vueltas en $4\,\mathrm s$. Suponiendo aceleración angular constante, hallá $I$.
3. Una esfera maciza de $2\,\mathrm{kg}$ rueda sin patinar y baja su rapidez de $5$ a $1\,\mathrm{m/s}$. ¿Cuánto cambia su energía cinética total?

{{< details title="Resultados y condiciones" >}}

1. $K_r=1{,}29032\times10^{-5}\,\mathrm J$; $K_t=3{,}2258\times10^{-5}\,\mathrm J$; total $4{,}51612\times10^{-5}\,\mathrm J$.
2. $\Delta\theta=40\pi\,\mathrm{rad}$; con arranque desde reposo y aceleración constante, $\omega_f=2\Delta\theta/t=20\pi\,\mathrm{rad/s}$. Por tanto $I=2W/\omega_f^2\approx0{,}12665\,\mathrm{kg\,m^2}$. Sin una hipótesis sobre cómo cambia la rapidez angular, vueltas y tiempo solo dan la rapidez angular media y no determinan este resultado.
3. $\Delta K=\frac7{10}(2)(1^2-5^2)=-33{,}6\,\mathrm J$. La energía retirada tiene magnitud $33{,}6\,\mathrm J$.

{{< /details >}}

---

Traducción y adaptación al español: Prof. Ing. Luciano Lamaita, 2026. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las ampliaciones y actividades propias se identifican en el contenido.
