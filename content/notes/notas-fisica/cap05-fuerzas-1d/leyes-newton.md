+++
title = "Leyes de Newton del movimiento"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Las tres leyes de Newton: inercia, F=ma y acción-reacción. Sistemas y fuerzas internas."
tags = ["cap05", "fuerzas", "Newton", "inercia", "fuerza neta", "acción", "reacción", "equilibrio"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 280–285"
figuras_estado = "Figura existente conservada; sistemas reconstruidos en tabla"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 280–285. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=280).

## Objetivos de aprendizaje

- Identificar sobre qué cuerpo actúa cada fuerza antes de sumarlas.
- Distinguir velocidad constante de aceleración y masa de peso.
- Reconocer pares de tercera ley y elegir los límites del sistema.
- Explicar qué pueden cambiar las fuerzas internas y qué corresponde al centro de masa.

## Fuerza neta y unidad

Una fuerza es una interacción de empuje o tracción y tiene módulo y dirección. La fuerza **neta** o resultante es la suma vectorial de las fuerzas que actúan sobre el cuerpo elegido:

$$\vec F_{\mathrm{neta}}=\sum_i\vec F_i$$

El signo de cada componente corresponde al eje que elegimos. No se suman directamente los módulos de fuerzas opuestas. Como ejemplo propio, 12 N hacia la derecha y 5 N hacia la izquierda dan una resultante de 7 N hacia la derecha.

En el SI:

$$1\ \mathrm N=1\ \mathrm{kg\,m/s^2}$$

Un newton es una unidad de fuerza, no de masa. Cerca de la Tierra un kilogramo tiene un peso aproximado de 10 N si usamos la elección didáctica $g=10\ \mathrm{m/s^2}$. Una libra-fuerza corresponde aproximadamente a 4,45 N; no debe confundirse con la libra como unidad de masa.

## Primera ley: inercia

En un marco inercial, un objeto conserva el reposo o el movimiento rectilíneo uniforme cuando la fuerza neta es cero. Puede haber varias fuerzas que se equilibran; no es necesario que no actúe ninguna.

$$\sum\vec F=\vec0\quad\Rightarrow\quad\vec a=\vec0$$

Un libro sobre una mesa está en reposo con peso y normal equilibrados. Un objeto que ya se mueve puede conservar velocidad constante con resultante cero. Una fuerza sostenida no es un requisito para mantener velocidad: es un requisito para cambiarla, dentro de este modelo.

La **inercia** es la resistencia a cambiar el movimiento y está asociada a la masa. No es una fuerza que deba añadirse al diagrama. Un objeto conserva masa e inercia aunque su peso cambie al pasar a otro campo gravitatorio. Bigler propone medir inercia mediante una balanza inercial: responde a la dinámica de una masa, sin depender únicamente de su peso.

{{< figura src="/images/diagramas/cap05_fuerzas-1d_leyes-newton_pp281.png" width="380" alt="Ilustración del personaje Wile E. Coyote usada por el libro" caption="Ilustración de Bigler para discutir inercia; la escena animada no representa literalmente una caída real." source="Jeff Bigler, p. 281. Ilustración reproducida en el original." >}}

**Aclaración de la adaptación:** una escena de un personaje suspendido en el vacío no elimina la gravedad. Si no hay apoyo, comienza a acelerar hacia abajo; conservar una componente horizontal no significa conservar la velocidad vectorial completa.

## Segunda ley: fuerza resultante y aceleración

Para un cuerpo de masa constante en un marco inercial:

$$\sum\vec F=m\vec a$$

La aceleración tiene la dirección de la fuerza neta, no necesariamente la dirección de la velocidad. Una fuerza neta puede aumentar la rapidez, reducirla o cambiar la dirección del movimiento. No se identifica directamente con «la dirección hacia donde va» el cuerpo.

Al duplicar la resultante sobre la misma masa se duplica la aceleración. Para la misma resultante, duplicar la masa reduce la aceleración a la mitad. La relación es instantánea: una fuerza variable puede generar aceleración variable, aunque se use la misma ley.

**Comprobación propia:** para una masa de 2 kg y resultante $+7\ \mathrm N$, $a=+3{,}5\ \mathrm{m/s^2}$. Si la velocidad era negativa, al principio esa aceleración puede frenar el objeto; no demuestra por sí sola que ya se mueva hacia la derecha.

## Tercera ley: una interacción, dos cuerpos

Si A ejerce una fuerza sobre B, B ejerce simultáneamente sobre A una fuerza igual en módulo y opuesta en dirección:

$$\vec F_{A\to B}=-\vec F_{B\to A}$$

{{< nota-adaptacion pagina="282" origen="Notación del original: igualdad de módulos y oposición vectorial" >}}
Para los módulos se puede escribir $F_{A\to B}=F_{B\to A}$. **Aclaración de la adaptación — p. 282:** el original escribe una igualdad al presentar las fuerzas iguales y opuestas; aquí se diferencia explícitamente la igualdad de módulos de la oposición vectorial mediante el signo menos.
{{< /nota-adaptacion >}}

Las fuerzas del par actúan sobre cuerpos distintos. Por eso no se cancelan en el diagrama de fuerzas de un solo cuerpo. Sí se compensan al sumar fuerzas internas de un sistema que incluye ambos cuerpos, según el modelo newtoniano.

| Ejemplo del original | Fuerza sobre un cuerpo | Fuerza pareja sobre el otro |
|---|---|---|
| Mano y cuerda | La cuerda tira de la mano | La mano tira de la cuerda |
| Automóvil que empuja un camión | El automóvil empuja el camión | El camión empuja el automóvil |
| Cohete y gases | Los gases empujan el cohete | El cohete empuja los gases |
| Ala y aire | El aire ejerce fuerza sobre el ala | El ala ejerce fuerza sobre el aire |
| Mano y pared | La pared ejerce fuerza sobre la mano | La mano ejerce fuerza sobre la pared |

Los pares no son «una fuerza aplicada» y «la resultante». Tampoco son necesariamente el peso y la normal de un libro, porque ambas actúan sobre el libro. La pareja del peso sobre el libro es la atracción gravitatoria que el libro ejerce sobre la Tierra; la pareja de la normal es la fuerza de contacto que el libro ejerce sobre la mesa.

El ejemplo del ala es una descripción de la interacción con el aire, no un modelo completo de aerodinámica. Las demostraciones del original se utilizan para identificar cuerpos y fuerzas, sin convertirlas en instrucciones para reproducir acciones que lastimen a alguien.

## Elegir sistema y entorno

El **sistema** es el objeto o conjunto de objetos que decidimos estudiar; el **entorno** es lo que dejamos fuera. La misma interacción puede ser externa o interna según esa elección.

| Elección del ejemplo de pp. 284–285 | Interacción gravitatoria Tierra–pelota | Qué permite analizar |
|---|---|---|
| Solo la pelota | Externa: la Tierra está fuera | Aceleración de la pelota bajo su peso |
| Tierra y pelota juntas | Interna: ambas pertenecen al sistema | Movimiento del centro de masa conjunto y movimiento relativo de sus partes |

Para un sistema de masa total constante:

$$\sum\vec F_{\mathrm{externas}}=M\vec a_{\mathrm{CM}}$$

**Aclaración de la adaptación:** las fuerzas internas pueden cambiar posiciones relativas, deformar el sistema o hacer moverse sus partes, aunque no cambien por sí solas el movimiento del centro de masa. No es correcto extender «la resultante externa es cero» a «ninguna parte puede moverse».

Cuando una pelota cae, Tierra y pelota se atraen con fuerzas de igual módulo, pero sus aceleraciones tienen módulos diferentes porque sus masas son muy diferentes. La aceleración de la Tierra es extremadamente pequeña, no exactamente cero. Por eso se reformula la pregunta anterior «¿por qué la Tierra no se mueve?» como «¿por qué su movimiento es imperceptible a esta escala?».

La p. 285 usa el ejemplo de personas saltando y una cifra de población. Aquí se conserva el razonamiento del centro de masa sin usar una cifra poblacional como dato actual ni afirmar que todas las partes de un sistema permanecen inmóviles. No hace falta actualizar una estadística para explicar esa ley.

## Demostraciones y controles de comprensión

Bigler propone carros con ventilador, objetos con cuerdas y dos personas sobre una plataforma de ruedas. En cada caso conviene predecir qué fuerzas son externas antes de observar el movimiento.

En el modelo de dos personas y una cuerda sobre un carro sin fuerzas externas horizontales, tirar entre ellas no acelera el centro de masa del conjunto. Si una persona sale del carro y se apoya en el suelo, cambia el sistema y puede ejercer una fuerza externa sobre el carro y la persona que quedó. Esto no demuestra que cada persona y el carro sean incapaces de moverse entre sí en el primer caso.

1. ¿Qué distingue fuerza neta nula de ausencia de fuerzas?
2. Si acción y reacción son iguales, ¿por qué el camión puede acelerar?
3. ¿La fuerza que una mesa ejerce sobre un libro es la reacción al peso del libro?
4. ¿Qué cambia al pasar del sistema pelota al sistema Tierra–pelota?

**Comprobaciones:** fuerzas no nulas pueden equilibrarse. Para el camión se suman las fuerzas sobre el camión, no la reacción que actúa sobre el automóvil. Normal y peso no son un par de tercera ley. Al cambiar los límites del sistema cambia la clasificación de la interacción como interna o externa, sin cambiar la interacción física.

---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.