+++
title = "Diagramas de cuerpo libre"
date = "2026-06-26"
draft = false
math = true
weight = 5
description = "Cómo dibujar un DCL correcto: reglas, pasos y ejemplos."
tags = ["cap05", "fuerzas", "diagrama de cuerpo libre", "DCL", "vectores", "equilibrio"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 305–312"
figuras_estado = "3 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 305–312. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=305).

## Aislar un cuerpo para estudiar sus fuerzas

Un **diagrama de cuerpo libre** representa las fuerzas que actúan sobre el cuerpo elegido. Se lo dibuja como un punto o un esquema simple; cada flecha indica una fuerza, su sentido y una magnitud relativa. No se dibujan también las fuerzas que ese cuerpo ejerce sobre otros.

{{< figura src="/images/diagramas/cap05_dcl-rampa_pp305.png" width="500" alt="De la situación física al diagrama de cuerpo libre." caption="De la situación física al diagrama de cuerpo libre." source="Jeff Bigler, edición octubre de 2025, p. 305. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En la rampa de p. 305 aparecen peso vertical, normal perpendicular y rozamiento tangencial. El sentido del rozamiento debe justificarse por la tendencia al deslizamiento del caso representado; no se fija siempre hacia arriba para cualquier movimiento.

## Un procedimiento que evita fuerzas inventadas

1. Elegí el objeto o sistema y escribí qué contiene.
2. Enumerá los agentes externos que interactúan con él: Tierra, superficie, cuerda, fluido u otro cuerpo.
3. Dibujá por separado cada fuerza que actúa actualmente. No añadas el empuje de una mano que ya soltó al objeto.
4. Elegí ejes y declaralos. Para una rampa suelen servir direcciones paralela y perpendicular.
5. Proyectá las fuerzas y aplicá la segunda ley por componentes.
6. Revisá si los tamaños relativos de las flechas son compatibles con la aceleración indicada.

El movimiento y la aceleración pueden mostrarse en un esquema auxiliar, pero no se agregan al diagrama como si fueran fuerzas. Tampoco se dibuja la resultante como una fuerza extra además de las fuerzas cuya suma ya la produce.

## Caja tirada por una cuerda

{{< figura src="/images/diagramas/cap05_dcl-caja_pp306.png" width="310" alt="Diagrama de una caja acelerada por una cuerda." caption="Diagrama de una caja acelerada por una cuerda." source="Jeff Bigler, edición octubre de 2025, p. 306. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Con la cuerda horizontal y sin aceleración vertical:

$$N-mg=0,\qquad T-f=ma_x$$

En el ejemplo $T>f$, por lo que $a_x>0$. Esto no determina por sí solo el signo de la velocidad. El suelo y la Tierra son los agentes de normal y peso; esas dos fuerzas actúan sobre la caja y **no** forman un par de tercera ley entre sí.

## Varias fuerzas en un mismo sentido

La piedra apoyada en el fondo del agua recibe peso hacia abajo, empuje del agua hacia arriba y normal del fondo hacia arriba. Si está en reposo:

$$N+E=P$$

{{< figura src="/images/diagramas/cap05_fuerzas-1d_diagramas-cuerpo-libre_pp307.png" width="420" alt="Comparación del original entre diagramas de fuerzas sobre una piedra sumergida y apoyada." caption="Cada fuerza actúa sobre la piedra; no hay que inventar componentes horizontales para separar las flechas." source="Jeff Bigler, octubre de 2025, p. 307. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Las flechas no se encadenan como en una construcción punta-cola de suma de vectores: en este diagrama cada fuerza se asocia al mismo cuerpo. Se pueden separar ligeramente los rótulos o las flechas paralelas para que se lean, sin cambiar sus direcciones físicas.

## Dos cuerdas: sumar componentes, no módulos

{{< figura src="/images/diagramas/cap05_dcl-dos-cuerdas_pp309.png" width="430" alt="Tensiones en dos cuerdas con inclinaciones distintas." caption="Tensiones en dos cuerdas con inclinaciones distintas." source="Jeff Bigler, edición octubre de 2025, p. 309. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La masa está quieta y las cuerdas tienen inclinaciones distintas. Sean $\theta_1$ y $\theta_2$ los ángulos de cada cuerda con la horizontal:

$$T_1\cos\theta_1=T_2\cos\theta_2$$

$$T_1\sin\theta_1+T_2\sin\theta_2=mg$$

En el dibujo, la cuerda 2 es más vertical. Para cancelar componentes horizontales, su tensión debe ser mayor: $T_1<T_2$. La suma vectorial de tensiones compensa al peso; la suma de sus módulos no es igual a $mg$ en esta geometría.

{{< nota-adaptacion pagina="309" origen="Respuesta del original: tensiones de dos cuerdas" >}}
La explicación del libro habla de componentes, pero concluye que la opción D, $T_1+T_2=mg$, es correcta. Esa igualdad de módulos no corresponde al dibujo. Con los ángulos representados, la relación es $T_1<T_2$ (opción C), junto con los balances de componentes indicados arriba. Se conserva la figura y se deja explícita esta discrepancia para revisión.
{{< /nota-adaptacion >}}

## Ejercicios del original, pp. 310–312

Para cada caso, dibujá solo las fuerzas del objeto señalado y justificá sus sentidos. Esta tabla adapta las consignas y ofrece un control posterior, no reemplaza construir el diagrama.

| Caso | Fuerzas y comparación en el modelo indicado |
|---|---|
| Ave quieta en una percha | Peso y apoyo equilibrados |
| Jugador que se desliza sobre hielo sin fricción | Peso y normal; no hay fuerza horizontal para «mantenerlo» |
| Jugador que se desliza hacia una base | Peso, normal y rozamiento opuesto al deslizamiento |
| Lámpara sostenida por una cadena | Tensión hacia arriba y peso hacia abajo |
| Balde elevado a velocidad constante | Tensión y peso del balde con su contenido equilibrados |
| Paracaidista recién saltado, ya separado del avión | Peso y arrastre; si acelera hacia abajo, el peso supera al arrastre |
| Paracaidista a velocidad terminal | Peso y arrastre equilibrados en el modelo vertical simple |
| Atleta en vuelo sobre una valla, sin aire | Solo peso; no hay fuerza horizontal del salto después del despegue |
| Avión en vuelo horizontal uniforme | Peso, sustentación, propulsión y arrastre, según los ejes del modelo |
| Trineo tirado por una cuerda inclinada | Peso, normal, tensión oblicua y rozamiento |
| Anillo sostenido por tres cuerdas | Tres tensiones sobre el anillo; no agregar el peso de la masa colgada como otra fuerza directa |
| Niño y asiento de hamaca, sin rozamiento | Para el sistema niño-asiento, peso y fuerzas de las cuerdas; la resultante cambia la velocidad |
| Ardilla quieta en un techo inclinado | Peso, normal y rozamiento estático que evita el deslizamiento |
| Esquiador que baja uniformemente | Peso, normal y resistencia tangencial que equilibra la componente descendente |
| Esquiador que acelera cuesta abajo | Mismos tipos de fuerzas, con resultante descendente en el caso planteado |

{{< nota-adaptacion pagina="308" origen="Convenciones del original sobre fuerzas de resistencia" >}}
El original permite agrupar rozamiento sólido y resistencia del aire. Aquí se los distingue cuando tienen agentes, direcciones o modelos diferentes. Que haya contacto tampoco obliga a que la fricción estática sea no nula: hay que decidir si es necesaria para impedir deslizamiento.
{{< /nota-adaptacion >}}

**Control propio:** si cambiás el sistema de «niño» a «niño y asiento», cambia qué interacciones son internas. El diagrama debe corresponder al sistema elegido, no a todos los objetos del dibujo a la vez.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.