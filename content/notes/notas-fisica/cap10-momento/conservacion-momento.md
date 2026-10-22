+++
title = "Conservación de la cantidad de movimiento"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 3
description = "Sistema, impulso externo, choques unidos y separados y retroceso al lanzar una masa."
tags = ["cap10", "cantidad de movimiento"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 514–523"
figuras_estado = "3 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Conservation of Linear Momentum», Bigler, edición de octubre de 2025, [pp. 514–523](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=514).

## Definir el sistema antes de conservar

Para un sistema de cuerpos, el momento total es $\vec P=\sum_i m_i\vec v_i$. Su balance es:

$$\vec P_f=\vec P_i+\vec J_{\mathrm{externo}}.$$

En el modelo newtoniano habitual, las fuerzas internas de interacción entre los cuerpos se cancelan en el balance del sistema. Si el impulso externo es cero o despreciable durante el intervalo:

$$\vec P_f=\vec P_i.$$

La condición es sobre el **impulso externo**, no sobre la inexistencia de todas las fuerzas. En un choque horizontal breve, el peso y las normales pueden equilibrarse o tener un impulso horizontal despreciable, mientras las fuerzas de contacto entre los objetos son muy grandes.

El subíndice 1 o 2 identifica al cuerpo; $i$ y $f$ identifican el instante. Mantener esa distinción evita mezclar la velocidad inicial de un cuerpo con la final del otro.

{{< figura src="/images/diagramas/cap10_colision-barras_pp516.png" width="560" alt="Balance de momentos iniciales y finales de dos cuerpos." caption="Balance de momentos iniciales y finales de dos cuerpos." source="Jeff Bigler, edición octubre de 2025, p. 516. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El gráfico de barras del original representa dos cuerpos que comienzan con momentos $+3$ y $-1$ N·s: su suma es $+2$ N·s. Si después el primero tiene $+1{,}5$ N·s, el segundo debe tener $+0{,}5$ N·s cuando el impulso externo es nulo.

## Cuerpos que se separan después del choque

En una dimensión:

$$m_1v_{1i}+m_2v_{2i}+J_{\mathrm{ext}}=m_1v_{1f}+m_2v_{2f}.$$

Si falta una sola velocidad, se despeja. Si faltan ambas, una ecuación de momento no alcanza: hace falta otro dato físico, por ejemplo elasticidad, restitución o una medición.

### Ejemplo: pelota de fútbol y pelota de vóley

Datos de la p. 520, tomando este positivo:

| Cuerpo | Masa | Velocidad inicial | Velocidad final |
|:---|:---:|:---:|:---:|
| Pelota de fútbol | 0,43 kg | +5,0 m/s | −3,87 m/s |
| Pelota de vóley | 0,27 kg | −6,5 m/s | Desconocida |

Despreciando el impulso externo:

$$0{,}43(5{,}0)+0{,}27(-6{,}5)=0{,}43(-3{,}87)+0{,}27v_f,$$
$$v_f=\frac{0{,}395+1{,}6641}{0{,}27}\approx+7{,}63\,\mathrm{m/s}.$$

La pelota de vóley termina hacia el este. El signo se obtiene del cálculo, sin imponer de antemano el sentido del resultado.

## Choque perfectamente inelástico

Cuando los objetos quedan unidos, comparten la velocidad final:

$$m_1v_{1i}+m_2v_{2i}=(m_1+m_2)v_f.$$

En la p. 518, una masa de 8,0 kg a $+5{,}0\,\mathrm{m/s}$ choca con otra de 12 kg inicialmente quieta:

{{< figura src="/images/diagramas/cap10_choque-unidos_pp518.png" width="419" alt="Choque de 8 kg y 12 kg con velocidad final común." caption="Choque de 8 kg y 12 kg con velocidad final común." source="Jeff Bigler, edición octubre de 2025, p. 518. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$v_f=\frac{8(5)+12(0)}{8+12}=+2{,}0\,\mathrm{m/s}.$$

El momento total vale 40 N·s antes y después. Como comprobación adicional de la adaptación:

$$K_i=\frac12(8)(5)^2=100\,\mathrm J,$$
$$K_f=\frac12(20)(2)^2=40\,\mathrm J.$$

Los 60 J de diferencia se transforman en energía interna y otras formas. La conservación del momento no implica conservación de la energía cinética.

## Separación y retroceso

Un sistema puede empezar unido y separarse. Aunque cambie la energía cinética por trabajo interno, el momento total se conserva si el impulso externo es despreciable.

En la p. 519, una persona con su patineta tiene masa conjunta de 60 kg y lleva una caja de 5,0 kg. Se desplazan hacia el oeste a 3,0 m/s. La caja es lanzada hacia el este y termina a 2,0 m/s **respecto del suelo**.

{{< figura src="/images/diagramas/cap10_patineta_pp519.png" width="293" alt="Lanzamiento de una caja desde una patineta." caption="Lanzamiento de una caja desde una patineta." source="Jeff Bigler, edición octubre de 2025, p. 519. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Tomamos oeste positivo:

$$(60+5)(+3)=60v_f+5(-2),$$
$$v_f=\frac{195+10}{60}\approx+3{,}42\,\mathrm{m/s}.$$

La persona sigue hacia el oeste y aumenta su rapidez. Si los 2,0 m/s se hubieran dado respecto de la persona, habría que transformar esa velocidad antes de usar el balance; sería un problema distinto.

## Centro de masa

Para masa total constante $M$:

$$\vec v_{\mathrm{CM}}=\frac{\vec P}{M}.$$

Si el impulso externo es nulo, el centro de masa mantiene su velocidad aunque los cuerpos choquen, se deformen o se separen. Es una comprobación útil del signo y tamaño de los resultados.

## Ejercicios del original

1. Una masa de 10 kg a 4,0 m/s es atrapada por una persona de 70 kg inicialmente quieta. En el modelo horizontal sin impulso externo apreciable, ¿a qué velocidad se mueve el conjunto?
2. Una bola de boliche de 6,0 kg pasa de 3,5 a 2,77 m/s al golpear un bolo de 0,70 kg inicialmente quieto. Hallá la velocidad del bolo.
3. Una persona de 80 kg salta de un carro de 40 kg inicialmente en reposo y termina a $+3\,\mathrm{m/s}$ respecto del suelo. Hallá la velocidad del carro.
4. Un automóvil de 730 kg a 10 m/s queda unido a otro de 2500 kg inicialmente quieto. Hallá la velocidad común.
5. Una bola de billar de 0,16 kg va al este a 0,50 m/s; otra de 0,17 kg va al oeste a 1,0 m/s y termina al este a 0,40 m/s. Hallá la velocidad final de la primera y el coeficiente de restitución.

{{< details title="Desarrollo breve y resultados" >}}
1. $v_f=10(4)/(10+70)=0{,}50\,\mathrm{m/s}$ en el sentido de la masa incidente.
2. $v_f=6(3{,}5-2{,}77)/0{,}70\approx6{,}26\,\mathrm{m/s}$ en el sentido inicial. La respuesta 6,25 m/s del libro es compatible con redondear datos intermedios.
3. $0=80(3)+40v_c$; $v_c=-6\,\mathrm{m/s}$.
4. $v_f=730(10)/(730+2500)\approx2{,}26\,\mathrm{m/s}$, que redondea a 2,3 m/s.
5. Con este positivo: $0{,}16(0{,}50)+0{,}17(-1)=0{,}16v_f+0{,}17(0{,}40)$, de donde $v_f=-0{,}9875\,\mathrm{m/s}$. La razón de separación y aproximación es $e=[0{,}40-(-0{,}9875)]/[0{,}50-(-1)]=0{,}925$. La energía cinética no se conserva: $e\lt 1$.
{{< /details >}}

{{< nota-adaptacion pagina="515" origen="Texto del original: formulación de conservación y separación de cuerpos" >}}
El sistema debe delimitarse y el impulso externo debe evaluarse. La ecuación con $J_{\mathrm{externo}}$ es un **balance**; solo con impulso externo nulo se conserva el momento. En una separación puede aumentar la energía cinética a expensas de energía interna, sin crear momento total del sistema. Las referencias del libro a «explosión» se entienden en ese sentido amplio.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.