+++
title = "Movimiento Rectilíneo Uniformemente Variado (MRUV)"
date = "2026-06-26"
draft = false
math = true
weight = 6
description = "Aceleración constante, ecuaciones de movimiento, tabla de resolución y ejemplos completos."
tags = ["cap03", "cinemática", "MRUV", "aceleración constante", "ecuaciones de movimiento", "gráficos"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 197–200, 202–206, 209–211"
figuras_estado = "Sin recortes adicionales; ecuaciones y tablas reconstruidas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 197–200, 202–206, 209–211. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=197).

## Objetivos de aprendizaje

- Derivar las ecuaciones para una componente del movimiento con aceleración constante.
- Elegir una ecuación por las variables conocidas y la incógnita, sin perder los signos.
- Seleccionar soluciones físicamente compatibles y separar tramos si cambian las condiciones.

## Modelo y notación

El **movimiento rectilíneo uniformemente variado** tiene aceleración constante en una recta. Usaremos $t$ para el tiempo transcurrido desde el instante inicial, $v_0$ y $v$ para las velocidades inicial y final, y $\Delta x=x-x_0$ para el desplazamiento.

Las ecuaciones también incluyen el caso límite $a=0$; cuando queremos destacar una variación efectiva de velocidad, hablamos de MRUV con $a\ne0$. Si $a$ cambia, hay que dividir el movimiento en tramos o usar otro método.

{{< nota-adaptacion pagina="199" origen="Notación vectorial del original" >}}
Bigler escribe flechas vectoriales incluso en $v^2$ y $a\Delta x$ y advierte que no son productos vectoriales bien definidos. Aquí escribimos **componentes escalares con signo en un eje fijo**. Así, $v^2$ es el cuadrado de una componente y el producto $a\Delta x$ es un producto de números con sus unidades.
{{< /nota-adaptacion >}}

## Derivación paso a paso

### Velocidad final

De $a=(v-v_0)/t$, con aceleración constante:

$$v=v_0+at$$

### Velocidad media y desplazamiento

Una velocidad que cambia linealmente en el tiempo tiene como media el promedio de sus extremos:

$$v_{\mathrm{med}}=\frac{v_0+v}{2}$$

$$\Delta x=\frac{v_0+v}{2}\,t$$

Esta igualdad entre media y promedio de extremos **no vale en general** para aceleración variable. La definición $v_{\mathrm{med}}=\Delta x/t$ sí conserva su validez.

### Posición en función del tiempo

Sustituyendo $v=v_0+at$:

$$\Delta x=\frac{v_0+(v_0+at)}{2}\,t=v_0t+\frac12at^2$$

$$x=x_0+v_0t+\frac12at^2$$

El primer término del desplazamiento es lo que aportaría la velocidad inicial constante; el segundo expresa la contribución de la variación de velocidad. Si $a$ es negativa, esa contribución también puede ser negativa.

### Relación sin tiempo

Multiplicando $v-v_0=at$ por $v+v_0$ y usando la expresión de $\Delta x$:

$$v^2-v_0^2=a\,t(v+v_0)=2a\Delta x$$

$$v^2=v_0^2+2a\Delta x$$

Esta derivación evita dividir por $a$ y deja claro cómo se eliminó el tiempo.

## Elegir por la variable ausente

| Ecuación | Variable que no aparece |
|---|---|
| $\Delta x=(v_0+v)t/2$ | $a$ |
| $v=v_0+at$ | $\Delta x$ |
| $\Delta x=v_0t+at^2/2$ | $v$ |
| $v^2=v_0^2+2a\Delta x$ | $t$ |

Hacé primero una tabla de $\Delta x$, $v_0$, $v$, $a$ y $t$. Escribí qué se conoce, qué se busca y qué variable no hace falta. La ecuación elegida debe contener la incógnita y solamente datos conocidos o deducidos del enunciado. Si quedan dos incógnitas, necesitás una segunda relación independiente.

| Expresión del enunciado | Dato que permite usar |
|---|---|
| Parte del reposo | $v_0=0$ |
| Se detiene | $v=0$ en ese instante |
| Velocidad constante | $a=0$ |
| Caída libre próxima a la Tierra | $a$ apunta hacia abajo, módulo aproximadamente $g$ |
| Punto más alto de un lanzamiento vertical | $v=0$, pero $a$ sigue siendo gravitatoria |

El tiempo transcurrido es no negativo. Velocidad, aceleración y desplazamiento pueden tener signos diferentes. Al extraer una raíz cuadrada, considerá las ramas posibles y seleccioná la compatible con el evento pedido.

## Ejemplos del original

### Gato que cae desde una heladera, p. 202

Un gato cae desde el reposo desde 1,8 m. El ejemplo idealiza el salto como una caída con $v_0=0$ y desprecia el aire. Elegimos positivo hacia abajo y $g=10\ \mathrm{m/s^2}$.

| Variable | Valor |
|---|---|
| $\Delta x$ | $+1{,}8\ \mathrm m$ |
| $v_0$ | $0$ |
| $a$ | $+10\ \mathrm{m/s^2}$ |
| $v$ | Incógnita |
| $t$ | No necesario |

$$v=\pm\sqrt{v_0^2+2a\Delta x}=\pm6\ \mathrm{m/s}$$

Antes de tocar el suelo el gato se mueve hacia abajo: la rama pertinente es $v=+6\ \mathrm{m/s}$. Un salto con impulso inicial distinto de cero exigiría otro dato para $v_0$.

### Manzana lanzada hacia arriba, p. 203

Una manzana sale con $v_0=+8\ \mathrm{m/s}$ y retorna a la misma altura. Con positivo hacia arriba, $a=-10\ \mathrm{m/s^2}$ y $\Delta x=0$:

$$0=8t-5t^2=t(8-5t)$$

Las soluciones son $t=0$ y $t=1{,}6\ \mathrm s$. La primera corresponde al lanzamiento y la segunda al regreso. No se debe dividir por $t$ antes de advertir que se está descartando una raíz.

### Frenado con paracaídas, serie 1, ejercicios 6–7

Suponemos aceleración de frenado constante, positivo en el sentido inicial, $v_0>0$, $a<0$ y $v=0$:

$$\Delta x=-\frac{v_0^2}{2a}$$

El resultado es positivo porque $a$ es negativa. Si se usa $b=|a|$ como módulo de frenado, la misma relación es $\Delta x=v_0^2/(2b)$; no deben mezclarse las dos convenciones.

Para $v_0=80\ \mathrm{m/s}$ y $a=-4\ \mathrm{m/s^2}$:

$$\Delta x=-\frac{80^2}{2(-4)}=800\ \mathrm m$$

El tiempo hasta detenerse es 20 s. Extender la misma fórmula a tiempos mayores predeciría movimiento hacia atrás; el modelo de frenado hasta la detención termina allí.

## Serie 1: ejercicios de movimiento, pp. 204–206

Se conservan los números originales; los ejercicios sobre trayectoria circular y caída libre están desarrollados en las notas correspondientes. Intentá resolver antes de abrir las comprobaciones.

2. Un ascensor sube a 11 m/s y 3,0 s después sigue subiendo a 5,0 m/s. Hallá la aceleración media.
3. Un automóvil parte del reposo con aceleración constante de $2{,}5\ \mathrm{m/s^2}$ durante 12 s. ¿Qué distancia recorre?
4. Un objeto parte del reposo y llega a $+20{,}0\ \mathrm{m/s}$ en 5,0 s. Hallá $a$.
5. Un objeto parte del reposo y llega a $+70\ \mathrm{m/s}$ en 10 s con aceleración constante. Hallá $a$ y el desplazamiento.

{{< details title="Comprobaciones de la serie 1" >}}

| Ejercicio original | Relación | Resultado |
|---|---|---|
| 2 | $(5-11)/3$ | $a_{\mathrm{med}}=-2\ \mathrm{m/s^2}$, positivo hacia arriba |
| 3 | $at^2/2$ | $180\ \mathrm m$ |
| 4 | $(20-0)/5$ | $+4\ \mathrm{m/s^2}$ |
| 5 | $a=70/10$, $\Delta x=(0+70)10/2$ | $+7\ \mathrm{m/s^2}$ y $+350\ \mathrm m$ |

{{< /details >}}

## Serie 2: combinar relaciones, pp. 209–211

1. Un automóvil parte del reposo 50 m al oeste de una señal. Acelera uniformemente hacia el este hasta 20 m/s en 15 s. Hallá su posición respecto de la señal.
2. Otro automóvil parte del reposo 50 m al oeste de la señal y llega a 20 m/s al estar 50 m al este. Hallá su aceleración constante.
3. Durante 10 s un automóvil tiene velocidad media de 25 m/s y aceleración constante de $2\ \mathrm{m/s^2}$. Hallá las velocidades inicial y final.
4. Un automóvil termina a 30 m/s tras avanzar 80 m en 4 s con aceleración constante. Hallá $v_0$ y $a$.

{{< details title="Desarrollo y comprobaciones de la serie 2" >}}

1. Con este positivo, $x_0=-50\ \mathrm m$ y $\Delta x=(0+20)15/2=150\ \mathrm m$. Entonces $x_f=-50+150=+100\ \mathrm m$.
2. El desplazamiento es $+50-(-50)=100\ \mathrm m$, no 50 m. De $a=(v^2-v_0^2)/(2\Delta x)$ resulta $+2\ \mathrm{m/s^2}$.
3. Deben cumplirse $v+v_0=50$ y $v-v_0=20$, en m/s. Sumando y restando, $v_0=15\ \mathrm{m/s}$ y $v=35\ \mathrm{m/s}$.
4. Como $80=(v_0+30)4/2$, $v_0=10\ \mathrm{m/s}$. Luego $a=(30-10)/4=5\ \mathrm{m/s^2}$.

Los cuatro problemas suponen movimiento sobre una recta y aceleración constante; una velocidad media sola no permite inferir los extremos si falta esa condición.

{{< /details >}}

## Gráficos y actividad propia con Tracker

En un MRUV, $v(t)$ es una recta de pendiente $a$ y $x(t)$ es una parábola con concavidad determinada por el signo de $a$. La relación entre pendientes y áreas se desarrolla en [Gráficos de movimiento]({{< ref "/notes/notas-fisica/cap03-cinematica-1d/graficos-movimiento.md" >}}), que conserva las figuras originales.

Como adaptación propia, filmá un carrito sobre una rampa y ajustá $x=x_0+v_0t+at^2/2$. Compará el coeficiente cuadrático con la pendiente de $v(t)$. Graficar $x$ frente a $t^2$ da una recta solo cuando el término $v_0t$ es nulo o se ha eliminado: no sirve como criterio general si el objeto ya tenía velocidad inicial.

Consultá la [guía de Tracker]({{< ref "/notes/herramientas/tracker.md" >}}), desarrollado por Douglas Brown y Open Source Physics. Diferencias pequeñas entre ajustes deben interpretarse considerando calibración, incertidumbre y perspectiva, no declarando automáticamente un cambio de ley física.

---

Adaptado de Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Las aclaraciones y actividades propias se identifican en el texto.
