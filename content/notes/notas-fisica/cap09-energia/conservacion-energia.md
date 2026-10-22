+++
title = "Conservación de la energía"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 4
description = "Balances de energía, sistemas, caídas, rozamiento, resortes y cohete ideal."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 464–476"
figuras_estado = "6 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 464–476. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=464).

## Conservar energía no siempre es conservar energía mecánica

En un sistema **aislado**, que no intercambia materia ni energía con el entorno, la energía total permanece constante. Puede cambiar de forma: de energía potencial a cinética, de energía mecánica a interna o de energía química a otras formas.

La energía mecánica $E_m=K+U$ solo permanece constante cuando no hay transferencias ni transformaciones que cambien esa suma. El rozamiento puede disminuirla sin violar la conservación de la energía total.

{{< nota-adaptacion pagina="464" origen="Uso de sistema cerrado en el original" >}}
Se usa aislado para el sistema que no intercambia materia ni energía. Cerrado suele reservarse para un sistema que no intercambia materia pero puede intercambiar energía. Se distingue además conservación de energía total de conservación de energía mecánica.
{{< /nota-adaptacion >}}

## Elegir sistema y estados

Antes de sustituir números:

1. Dibujá la situación y elegí los estados inicial y final.
2. Indicá qué cuerpos forman el sistema.
3. Elegí el cero de altura y una referencia para las velocidades.
4. Identificá las energías presentes en cada estado.
5. Agregá transferencias o aumentos de energía interna que correspondan.
6. Escribí el balance y recién después reemplazá datos.

Si solo se intercambia energía por trabajo externo y no cambia la energía interna:

$$K_i+U_i+W_{\mathrm{ext}}=K_f+U_f.$$

Si tampoco hay trabajo externo:

$$K_i+U_i=K_f+U_f.$$

Para un bloque que desliza sobre un piso, una opción es incluir bloque y piso en el sistema:

$$K_i+U_i=K_f+U_f+\Delta E_{\mathrm{int}}.$$

En el modelo de rozamiento cinético constante, piso fijo y sin otras pérdidas, $\Delta E_{\mathrm{int}}=f_kL$. **No sumar además $-f_kL$ como otra pérdida en el mismo balance.**

## Diagramas de barras y balances LOL

{{< figura src="/images/diagramas/cap09_montana-barras_pp467.png" width="480" alt="Transformación entre energía potencial y cinética en una pista ideal." caption="Transformación entre energía potencial y cinética en una pista ideal." source="Jeff Bigler, edición octubre de 2025, p. 467. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En una pista ideal, las barras de energía potencial y cinética cambian, pero su suma permanece igual. El cero de energía potencial se eligió en la posición más baja del dibujo, no porque allí desaparezca la gravedad.

{{< figura src="/images/diagramas/cap09_balance-lol_pp468.png" width="480" alt="Balance LOL con transferencia de energía." caption="Balance LOL con transferencia de energía." source="Jeff Bigler, edición octubre de 2025, p. 468. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El esquema LOL separa estado inicial, transferencia y estado final. Las barras son una ayuda cualitativa: conviene rotularlas con el sistema y el cero elegido. Si una energía es cero, explicá por qué.

{{< nota-adaptacion pagina="467" origen="Referencia de energía potencial en pp. 467–469" >}}
Que la altura no cambie implica $\Delta U_g=0$, no necesariamente $U_g=0$. Este último valor exige elegir allí el cero. También se aclara qué incluye el sistema al representar al motor como aporte de trabajo.
{{< /nota-adaptacion >}}

## Caída de una pelota — 2 kg desde 3 m

{{< figura src="/images/diagramas/cap09_caida-energias_pp465.png" width="480" alt="Caída ideal de una pelota: potencial a cinética." caption="Caída ideal de una pelota: potencial a cinética." source="Jeff Bigler, edición octubre de 2025, p. 465. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Sistema pelota–Tierra, sin aire, pelota soltada desde el reposo, suelo como cero:

$$E_m=mgh_i=(2)(10)(3)=60\,\mathrm J.$$

| Altura | $U_g$ | $K$ | Rapidez |
|:---:|:---:|:---:|:---:|
| $3\,\mathrm m$ | $60\,\mathrm J$ | $0$ | $0$ |
| $1{,}5\,\mathrm m$ | $30\,\mathrm J$ | $30\,\mathrm J$ | $5{,}48\,\mathrm{m/s}$ |
| Justo antes del suelo | $0$ | $60\,\mathrm J$ | $7{,}75\,\mathrm{m/s}$ |

El choque con el suelo es otro proceso. La deformación, el sonido y el aumento de energía interna impiden afirmar que toda la energía mecánica siga siendo la misma después del impacto.

## Ejemplo resuelto — aumentar la rapidez

{{< figura src="/images/diagramas/cap09_auto-balance_pp469.png" width="480" alt="Balance de energía cinética del automóvil." caption="Balance de energía cinética del automóvil." source="Jeff Bigler, edición octubre de 2025, p. 469. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El auto de p. 469 tiene $875\,\mathrm{kg}$ y pasa de $22$ a $44\,\mathrm{m/s}$ sobre terreno horizontal:

$$K_i=211\,750\,\mathrm J,\qquad K_f=847\,000\,\mathrm J,$$

$$\Delta K=635\,250\,\mathrm J.$$

Ese es el aumento de energía cinética. En el modelo sin otras variaciones coincide con el aporte mecánico efectivo. Si el sistema incluye auto, motor y combustible, el origen de ese aumento es una disminución de energía química, con otras transformaciones; no se trata necesariamente de energía que cruza desde fuera del auto.

## Ejemplo resuelto — caída de 15 m

Para una masa de $80\,\mathrm{kg}$ soltada desde $15\,\mathrm m$, sin resistencia del aire (situación de pp. 470–471):

{{< figura src="/images/diagramas/cap09_caida-balance_pp470.png" width="480" alt="Sistema cuerpo–Tierra durante una caída ideal." caption="Sistema cuerpo–Tierra durante una caída ideal." source="Jeff Bigler, edición octubre de 2025, p. 470. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$mgh_i=\frac12mv_f^2,$$

$$K_f=12\,000\,\mathrm J,\qquad v_f=\sqrt{2gh_i}\approx17{,}3\,\mathrm{m/s}.$$

La masa se cancela en la rapidez final, pero no en la energía. La ecuación entrega rapidez; si el eje positivo apunta hacia arriba, la componente final de velocidad es negativa.

## Resorte al final de una rampa

{{< figura src="/images/diagramas/cap09_resorte-rampa_pp475.png" width="480" alt="Bloque que baja y comprime un resorte horizontal." caption="Bloque que baja y comprime un resorte horizontal." source="Jeff Bigler, edición octubre de 2025, p. 475. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El bloque de p. 475 tiene $4\,\mathrm{kg}$, parte del reposo desde $5\,\mathrm m$ y comprime un resorte horizontal de $k=4{,}0\times10^4\,\mathrm{N/m}$. No hay rozamiento; la rampa y el resorte se consideran ideales.

En la compresión máxima la rapidez vuelve a ser cero:

$$mgh=\frac12kx_{\max}^2,$$

$$x_{\max}=\sqrt{\frac{2mgh}{k}}=0{,}10\,\mathrm m.$$

Que la rapidez sea cero en ese instante no implica equilibrio: el resorte ejerce una fuerza que invierte el movimiento.

En el siguiente ejercicio, un bloque de $1{,}6\,\mathrm{kg}$ parte contra un resorte de $1000\,\mathrm{N/m}$ comprimido $0{,}020\,\mathrm m$:

$$\frac12kx^2=\frac12mv^2\quad\Rightarrow\quad v=0{,}50\,\mathrm{m/s}.$$

{{< nota-adaptacion pagina="475" origen="Unidad y contacto con el resorte en el ejercicio 7" >}}
La constante aparece con unidad N/kg; se interpreta como N/m, unidad coherente de una constante de Hooke. En un resorte que solo empuja al bloque, el contacto termina al recuperar la longitud natural porque la fuerza de contacto llega a cero. Un bloque unido al resorte puede continuar y estirarlo.
{{< /nota-adaptacion >}}

## Cuando hay rozamiento — extensión de la adaptación

Un bloque de $2\,\mathrm{kg}$ parte del reposo desde $2\,\mathrm m$ de altura por una rampa sin rozamiento. Luego recorre un piso horizontal con $f_k=5\,\mathrm N$ hasta detenerse:

$$mgh=f_kL\quad\Rightarrow\quad L=\frac{(2)(10)(2)}5=8\,\mathrm m.$$

La energía mecánica inicial era $40\,\mathrm J$. Al final se transformó en energía interna del sistema bloque–piso. El resultado supone que el bloque no pierde energía en la transición y que el rozamiento es constante.

## Cohete ideal — combinar fuerzas y energía

El ejercicio de p. 476 aproxima la masa como constante: $m=0{,}200\,\mathrm{kg}$, empuje de $10\,\mathrm N$ durante $1\,\mathrm s$, lanzamiento desde el reposo y sin arrastre.

Durante el empuje:

$$F_{\mathrm{neto}}=10-2=8\,\mathrm N,\qquad a=40\,\mathrm{m/s^2},$$

$$v_1=40\,\mathrm{m/s},\qquad h_1=\frac12at^2=20\,\mathrm m.$$

Después del apagado:

$$\frac12mv_1^2=mg(h_{\max}-h_1)\quad\Rightarrow\quad h_{\max}=100\,\mathrm m.$$

El trabajo del empuje fue $10\times20=200\,\mathrm J$, igual al aumento final de energía potencial en este modelo. El trabajo neto durante el empuje fue $160\,\mathrm J$; los otros $40\,\mathrm J$ aumentaron $U_g$.

Un cohete real pierde masa y expulsa gases. Este ejercicio no sustituye ese análisis; usa un móvil ideal de masa fija con fuerza de empuje prescrita.

## Actividades del original con controles

| Situación | Planteo ideal | Resultado |
|:---:|:---:|:---:|
| Salto con pértiga hasta $4\,\mathrm m$ | $\frac12mv_i^2=mgh$ | $v_i\approx8{,}94\,\mathrm{m/s}$ |
| Lémur de $40$ a $15\,\mathrm m$, con $v_i=2\,\mathrm{m/s}$ | $v_f^2=v_i^2+2g(40-15)$ | $v_f\approx22{,}45\,\mathrm{m/s}$ |
| Péndulo desciende $0{,}25\,\mathrm m$ desde el reposo | $v=\sqrt{2g\Delta h}$ | $2{,}24\,\mathrm{m/s}$ |
| Carro de $20\,\mathrm{m/s}$ a una altura $15\,\mathrm m$ mayor | $v_f^2=20^2-2(10)(15)$ | $10\,\mathrm{m/s}$ |

Los resultados suponen las idealizaciones de cada enunciado, no mediciones reales. El caso de salto con pértiga solo compara energías; no representa todos los movimientos del cuerpo ni de la pértiga.

{{< nota-adaptacion pagina="473" origen="Datos del péndulo y condición de contacto del rizo" >}}
La rapidez máxima de un péndulo depende de la diferencia de altura entre la liberación y su punto más bajo. Dar solo la altura del mentón sobre el piso no fija esa diferencia; el resultado $5{,}39\,\mathrm{m/s}$ presupone una caída de $1{,}45\,\mathrm m$. No se presenta como determinado sin ese dato adicional. En los rizos se agrega la condición de contacto que no resuelve por sí sola el balance energético.
{{< /nota-adaptacion >}}

Para un carro que recorre un rizo circular, obtener una rapidez real por energía **no garantiza** que permanezca en contacto con la pista. En el punto más alto de un rizo interior, el modelo de contacto unilateral exige $v^2\ge gR$. Es una condición adicional de fuerzas, no una nueva conservación.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.