+++
title = "Fuerza centrípeta"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 1
description = "Resultante radial, curvas, lazos verticales y fuerzas en sistemas de referencia en rotación."
tags = ["cap07", "rotación"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 386–390"
figuras_estado = "2 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Centripetal Force», Bigler, edición de octubre de 2025, [pp. 386–390](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=386).

## Cambiar de dirección requiere aceleración

Un objeto que describe una circunferencia con rapidez constante no tiene velocidad constante: cambia la dirección de su vector velocidad. La variación apunta, en el límite de intervalos pequeños, hacia el centro de la trayectoria.

{{< figura src="/images/diagramas/cap07_velocidad-circular_pp386.png" width="316" alt="Cambio de velocidad en el movimiento circular." caption="Cambio de velocidad en el movimiento circular." source="Jeff Bigler, edición octubre de 2025, p. 386. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La aceleración radial o centrípeta tiene módulo:

$$a_c=\frac{v^2}{r}=r\omega^2.$$

La segunda igualdad utiliza $v=r\omega$, con $\omega$ en radianes por segundo. En movimiento circular uniforme, el **módulo** de esta aceleración es constante, pero el vector cambia de dirección al avanzar el objeto.

## Qué significa fuerza centrípeta

La segunda ley exige una resultante dirigida al centro:

$$\sum F_{\mathrm{radial}}=ma_c=\frac{mv^2}{r}=mr\omega^2.$$

{{< figura src="/images/diagramas/cap07_fuerza-radial_pp387.png" width="307" alt="Velocidad tangente y resultante radial." caption="Velocidad tangente y resultante radial." source="Jeff Bigler, edición octubre de 2025, p. 387. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

«Centrípeta» describe el papel de una fuerza o resultante, no una interacción nueva. Puede ser la tensión de una cuerda, el rozamiento de los neumáticos, la gravedad o una combinación de fuerzas. En el diagrama se dibujan esas interacciones y se calcula su suma radial: **no se agrega otra flecha centrípeta a las mismas fuerzas**.

Si desaparece la fuerza que curvaba la trayectoria y no queda ninguna otra, el objeto sigue la tangente con su velocidad instantánea. Si queda la gravedad, por ejemplo, el movimiento posterior puede ser parabólico; no basta cortar una cuerda para garantizar una recta indefinida.

## Marco inercial y marco que gira

Desde un marco aproximadamente inercial, el objeto acelera hacia el centro por fuerzas de interacción. Desde un marco que gira con él, se introduce la fuerza inercial centrífuga, hacia afuera, para escribir las ecuaciones en ese marco no inercial. Su módulo en rotación uniforme es $m\omega^2r$.

No constituye la reacción de tercera ley de la fuerza centrípeta: ambas descripciones se refieren al mismo cuerpo y a marcos distintos. Las fuerzas de acción y reacción actúan sobre cuerpos diferentes. El ejemplo del ascensor del original compara este efecto con el cambio de peso aparente por aceleración: la sensación depende de las fuerzas de contacto.

## Montaña rusa: parte inferior de una curva

Ejemplo de la p. 388: un coche de 300 kg pasa por la parte inferior de una curva de radio 50 m a 20 m/s. El centro de curvatura está arriba. Tomando positivo hacia arriba:

$$N-mg=\frac{mv^2}{r}.$$

Por tanto, con $g=10\,\mathrm{m/s^2}$:

$$N=mg+\frac{mv^2}{r}=3000+2400=5400\,\mathrm N.$$

La fuerza de la pista es 5400 N; la **fuerza neta** es 2400 N hacia arriba. La normal no coincide con la resultante porque también actúa el peso.

## Bola atada a una cuerda

El libro toma una bola de 20 g, radio de giro de 60 cm y 80 vueltas por minuto, y pide despreciar la gravedad. En SI:

$$m=0{,}020\,\mathrm{kg},\qquad r=0{,}60\,\mathrm m,$$
$$f=\frac{80}{60}\,\mathrm{Hz},\qquad\omega=2\pi f\approx8{,}38\,\mathrm{rad/s}.$$

$$v=2\pi rf\approx5{,}03\,\mathrm{m/s},$$
$$T=mr\omega^2\approx0{,}842\,\mathrm N.$$

Calcular con $mv^2/r$ da el mismo resultado.

{{< nota-adaptacion pagina="388" origen="Texto del original: círculo horizontal despreciando la gravedad" >}}
Se conserva la idealización explícita del libro. Si la bola está realmente suspendida solo de una cuerda y actúa el peso, la cuerda se inclina: su componente vertical equilibra $mg$ y la horizontal produce la aceleración centrípeta. En ese péndulo cónico, la tensión total no es simplemente $mv^2/r$.
{{< /nota-adaptacion >}}

## Parte superior de una curva y pérdida de contacto

En la cima de una colina, el centro de curvatura está abajo:

$$mg-N=\frac{mv^2}{r},\qquad N=mg-\frac{mv^2}{r}.$$

Para el pasajero de 50 kg, $v=15\,\mathrm{m/s}$ y $r=30\,\mathrm m$ (p. 389):

$$N=500-\frac{50(15)^2}{30}=125\,\mathrm N=\frac14mg.$$

Es su peso aparente por contacto con el asiento. Si el cálculo exigiera una normal negativa y no hay sujeción que tire del pasajero, se pierde contacto y cambia la trayectoria.

En la parte superior de un lazo vertical, con el pasajero por dentro del círculo, peso y normal pueden apuntar ambos al centro:

$$mg+N=\frac{mv^2}{r}.$$

En el límite de contacto, $N=0$, de donde $v_{\min}=\sqrt{gr}$. Para $r=40\,\mathrm m$, el resultado del ejercicio de la p. 390 es $20\,\mathrm{m/s}$.

## Ejercicios del original

1. Una bola de 0,5 kg gira en un círculo de radio 0,70 m y completa 15 vueltas en 10 s. Hallá la resultante radial.
2. Un automóvil de 3000 kg toma una curva horizontal de radio 100 m a 22 m/s. Hallá el rozamiento que requiere esa trayectoria, suponiendo que es la única fuerza horizontal.
3. En «The Rotor», el cilindro tiene diámetro 6 m y gira a 56 rpm. Calculá la normal que siente una persona de 90 kg contra la pared.

{{< details title="Resultados y planteos" >}}
1. $\omega=2\pi(15/10)=3\pi\,\mathrm{rad/s}$; $F_c=0{,}5(0{,}70)(3\pi)^2\approx31{,}1\,\mathrm N$.
2. $f_s=mv^2/r=14\,520\,\mathrm N$. Para evitar deslizamiento debe cumplirse $f_s\leq\mu_sN$; en esta curva plana, $N=mg$.
3. El radio es **3 m**, no 6 m. $N=mr(2\pi\,56/60)^2\approx9285\,\mathrm N$. La normal es radial; si el piso baja, el rozamiento estático vertical puede sostener el peso. Son balances distintos.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.