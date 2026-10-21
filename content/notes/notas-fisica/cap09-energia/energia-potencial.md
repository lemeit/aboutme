+++
title = "Energía potencial y energía mecánica"
date = "2026-10-21"
lastmod = "2026-10-21"
draft = false
math = true
weight = 2
description = "Referencia de energía potencial, gravedad uniforme y variable, resortes y sistema físico."
tags = ["cap09", "energía", "trabajo", "potencia"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 445–453"
figuras_estado = "1 figuras del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 445–453. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=445).

## Energía asociada a la configuración

La **energía potencial** permite describir interacciones conservativas a partir de la configuración del sistema: posiciones relativas, separación entre cuerpos o deformación de un resorte. Un cuerpo elevado y la Tierra forman un sistema con energía potencial gravitatoria; un resorte deformado puede almacenar energía potencial elástica.

No es una propiedad determinada solamente por la masa de un objeto. Si decimos «la pelota tiene energía potencial gravitatoria», estamos dando por supuesta su interacción con la Tierra y una referencia de alturas.

{{< nota-adaptacion pagina="445" origen="Definición inicial de energía potencial" >}}
La definición inicial la restringe a fuerzas atractivas y presenta el cero en infinito como obligatorio. Se adopta una definición que también incluye interacciones repulsivas y resortes, con un cero de referencia elegido. El propio capítulo menciona después interacciones repulsivas y sus objetivos de p. 437 reconocen la elección del cero.
{{< /nota-adaptacion >}}

## Elegir el cero

El nivel de energía potencial cero se elige por conveniencia. Lo que interviene en un balance es la **diferencia**:

$$\Delta U=U_f-U_i.$$

Cambiar todos los valores de $U$ por la misma constante no cambia las predicciones. Una mesa puede ser la referencia $h=0$; entonces el suelo, situado debajo, tiene altura negativa. Eso no genera energía negativa «imposible»: solo modifica la cuenta de referencia.

## Cerca de la superficie terrestre

Si el campo gravitatorio puede considerarse uniforme y elegimos el eje vertical positivo hacia arriba:

$$\Delta U_g=mg(h_f-h_i)=mg\Delta h.$$

Si fijamos $U_g=0$ en $h=0$, resulta $U_g=mgh$. En los ejemplos usamos $g=10\,\mathrm{m/s^2}$ para mantener el criterio numérico de Bigler. Con $9{,}8\,\mathrm{m/s^2}$ cambian ligeramente los resultados.

{{< figura src="/images/diagramas/cap09_altura-referencia_pp447.png" width="340" alt="Altura desde la superficie y distancia al centro terrestre." caption="Altura desde la superficie y distancia al centro terrestre." source="Jeff Bigler, edición octubre de 2025, p. 447. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

**Subir** aumenta $U_g$; **bajar** la disminuye. Importa la diferencia de altura, no la longitud del camino recorrido.

### Ejemplo — masa de 2 kg a 3 m

Con el suelo como referencia:

$$U_g=(2)(10)(3)=60\,\mathrm J.$$

Si se eleva de $3$ a $5\,\mathrm m$, el aumento es $40\,\mathrm J$, aunque la energía potencial final sea $100\,\mathrm J$.

{{< nota-adaptacion pagina="447" origen="Resultado aritmético del original" >}}
El ejemplo escrito como $(2)(10)(3)$ aparece resuelto como $30\,\mathrm J$, pero corresponde $60\,\mathrm J$. La p. 448 sí utiliza $60\,\mathrm J$ para ese mismo caso. Se conserva el dato y se corrige la cuenta, pendiente de revisión editorial.
{{< /nota-adaptacion >}}

### Ejercicio del original — escalera

Una persona de $60\,\mathrm{kg}$ sube una altura de $10\,\mathrm m$ (p. 453):

$$\Delta U_g=(60)(10)(10)=6000\,\mathrm J.$$

Este es el aumento de energía potencial gravitatoria del sistema persona–Tierra. El gasto metabólico de la persona no tiene por qué coincidir con este valor.

## Gravedad a grandes distancias

La expresión $mgh$ deja de ser adecuada si el cambio de altura es comparable con el radio del planeta. Para dos masas puntuales o cuerpos esféricamente simétricos sin superposición, elegimos $U_g(\infty)=0$:

$$U_g(r)=-\frac{GMm}{r}.$$

$r$ es la distancia entre centros. El signo negativo expresa que el sistema ligado tiene menos energía que el estado de separación infinita elegido como cero. No hay que quitarlo al usar la ecuación en un balance.

$$\Delta U_g=GMm\left(\frac1{r_i}-\frac1{r_f}\right).$$

Al pasar a una distancia mayor, esta diferencia es positiva. Si $r_i=R$ y $r_f=R+h$:

$$\Delta U_g=\frac{GMmh}{R(R+h)}\approx mgh\quad\text{si }h\ll R.$$

La aproximación usa $g=GM/R^2$. No se obtiene suponiendo que la fuerza variable vale lo mismo en todo el recorrido.

{{< nota-adaptacion pagina="450" origen="Derivación y signo de la energía gravitatoria en pp. 446–450" >}}
Multiplicar una fuerza gravitatoria variable por una distancia no sustituye el cálculo del trabajo a lo largo del recorrido. Se utiliza $U_g=-GMm/r$ con cero en infinito y se deriva $mgh$ como aproximación para alturas pequeñas. El signo de la energía potencial no se descarta como si indicara una dirección espacial de transferencia.
{{< /nota-adaptacion >}}

### Tierra y Luna — control del ejercicio original

Con $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$, $M=5{,}97\times10^{24}\,\mathrm{kg}$, $m=7{,}35\times10^{22}\,\mathrm{kg}$ y separación media aproximada $r=3{,}84\times10^8\,\mathrm m$:

$$U_g\approx-7{,}62\times10^{28}\,\mathrm J.$$

La magnitud coincide con el resultado de control de p. 453; se explicita el signo para la referencia en infinito. No es la energía total de la órbita: también hay energía cinética.

## Resorte ideal

Para un resorte que cumple Hooke:

$$U_e=\frac12kx^2.$$

$x=\ell-\ell_0$ mide la deformación desde su **longitud natural**, y $k$ se expresa en N/m. Tanto estirar como comprimir aumenta $U_e$ respecto del estado sin deformar. Por ejemplo, $k=200\,\mathrm{N/m}$ y $x=0{,}10\,\mathrm m$ dan $U_e=1\,\mathrm J$.

{{< nota-adaptacion pagina="450" origen="Referencia para la deformación del resorte" >}}
En $U_e=\frac12kx^2$, $x$ se mide desde la longitud natural del resorte ideal. En un resorte vertical cargado, esa posición no coincide con el equilibrio del sistema masa–resorte–Tierra; medir desde el equilibrio requiere incluir también la gravedad.
{{< /nota-adaptacion >}}

## Energía mecánica

La suma de las energías cinéticas y potenciales relevantes es la **energía mecánica**:

$$E_m=K+U_g+U_e.$$

Si hay rotación también se incluye su energía cinética. Que $E_m$ se conserve depende de las interacciones y del sistema elegido; no alcanza con afirmar que «la energía siempre se conserva».

## Una precisión sobre otras formas de energía

Los sistemas químicos y eléctricos también tienen energías asociadas a interacciones. Formar un enlace puede liberar energía; romperlo requiere aportarla. El balance de una reacción depende del conjunto de enlaces y estados iniciales y finales.

{{< nota-adaptacion pagina="452" origen="Terminología de energía química en pp. 449 y 452" >}}
La energía química no se identifica en general con energía libre ni con entalpía de formación. La entropía no es una cantidad de energía térmica dispersa: sus unidades son J/K. Se retira esa equivalencia y se mantiene aquí el alcance mecánico; un tratamiento de energía libre exige especificar el potencial termodinámico y sus condiciones.
{{< /nota-adaptacion >}}

## Para practicar

1. Un libro de $2\,\mathrm{kg}$ está a $0{,}8\,\mathrm m$ sobre el suelo. Calculá $U_g$ usando el suelo como cero y luego usando la mesa donde está apoyado como cero.
2. El mismo libro cae hasta el suelo. ¿Cuánto vale $\Delta U_g$ con cada referencia?
3. Si duplicamos la deformación de un resorte ideal, ¿cuánto cambia su energía elástica?

{{< details title="Resultados y explicación" >}}

1. $16\,\mathrm J$ respecto del suelo; $0\,\mathrm J$ respecto de la mesa.
2. $-16\,\mathrm J$ con ambas referencias. Cambia el cero, no la diferencia entre estados.
3. Se cuadruplica.

{{< /details >}}

---

Traducción y adaptación al español: Prof. Ing. Luciano Lamaita, 2026. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las ampliaciones y actividades propias se identifican en el contenido.
