+++
title = "Arrastre (Drag)"
date = "2026-06-26"
draft = false
math = true
weight = 10
description = "Fuerza de arrastre, ecuación de drag, coeficiente de arrastre y velocidad terminal."
tags = ["cap05", "fuerzas", "arrastre", "drag", "resistencia del aire", "velocidad terminal", "fluidos"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 354–357"
figuras_estado = "3 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 354–357. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=354).

## Movimiento respecto del fluido

El **arrastre** es la componente de la fuerza que un fluido ejerce en sentido opuesto al movimiento relativo del cuerpo respecto de ese fluido. El fluido puede ser aire, agua u otro líquido o gas.

La velocidad relevante es:

$$\vec v_{\mathrm{rel}}=\vec v_{\mathrm{cuerpo}}-\vec v_{\mathrm{fluido}}$$

Una bandera o un cartel quietos respecto del suelo pueden recibir arrastre si sopla viento. Un cuerpo que se mueve junto con el fluido puede tener velocidad relativa pequeña aunque ambos se desplacen respecto de la habitación.

{{< nota-adaptacion pagina="296" origen="Frase abreviada del original y del resumen anterior" >}}
«Un objeto en reposo no produce arrastre» requiere especificar reposo respecto del fluido. La formulación sin ese marco puede ser engañosa. Además, arrastre, sustentación y empuje hidrostático son contribuciones distintas: ausencia de arrastre no implica ausencia de toda fuerza del fluido.
{{< /nota-adaptacion >}}

## Modelo de arrastre cuadrático

Para las condiciones en que se usa ese modelo, el módulo se expresa como:

$$F_D=\frac12\rho C_DA v_{\mathrm{rel}}^2$$

| Símbolo | Qué representa | Unidad SI |
|---|---|---|
| $\rho$ | Densidad del fluido | kg/m³ |
| $v_{\mathrm{rel}}$ | Rapidez relativa | m/s |
| $A$ | Área frontal de referencia | m² |
| $C_D$ | Coeficiente de arrastre para esa área y condición | Sin unidad |
| $F_D$ | Módulo de la fuerza de arrastre | N |

En una dimensión, la expresión con signo puede escribirse:

$$F_{D,x}=-\frac12\rho C_DA\,v_{\mathrm{rel},x}\lvert v_{\mathrm{rel},x}\rvert$$

Así la fuerza cambia de sentido cuando cambia el movimiento relativo. Escribir simplemente «menos rapidez al cuadrado» daría el sentido incorrecto si el cuerpo se mueve en el eje negativo.

## Área frontal y orientación

{{< figura src="/images/diagramas/cap05_arrastre-area_pp355.png" width="150" alt="Área frontal: silueta proyectada sobre un plano." caption="Área frontal: silueta proyectada sobre un plano." source="Jeff Bigler, edición octubre de 2025, p. 355. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El área frontal es la silueta proyectada perpendicularmente al flujo. No es toda la superficie de la piel ni la suma de áreas que se superponen en esa vista. Cambiar de postura puede cambiar tanto el área como el coeficiente.

A coeficiente, área y densidad constantes, duplicar la rapidez multiplica por cuatro el arrastre. Duplicar el área duplica la fuerza en ese modelo. La masa del cuerpo no aparece explícitamente en esta fórmula, pero sí en la aceleración producida por la fuerza y en otros balances, como el de caída vertical.

**Ejemplo propio de cálculo, no medición:** con $\rho=1{,}2$ kg/m³, $C_D=1{,}0$, $A=0{,}50$ m² y rapidez relativa de 10 m/s:

$$F_D=\tfrac12(1{,}2)(1{,}0)(0{,}50)(10)^2=30\ \mathrm N$$

A 20 m/s serían 120 N si se mantienen las demás hipótesis.

## Coeficientes: datos de referencia, no constantes universales

{{< figura src="/images/diagramas/cap05_arrastre-formas_pp356.png" width="300" alt="Formas y coeficientes de arrastre orientativos." caption="Formas y coeficientes de arrastre orientativos." source="Jeff Bigler, edición octubre de 2025, p. 356. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Se conserva la figura del original con sus valores orientativos y direcciones de flujo. Para comparar dos coeficientes hay que usar la misma convención de área y condiciones comparables. El coeficiente depende de forma, orientación y régimen de flujo; no es solo una etiqueta fija de un objeto.

{{< nota-adaptacion pagina="356" origen="Explicación del original: gotas de lluvia y formas aerodinámicas" >}}
No se conserva como explicación general que las gotas de lluvia tengan forma de cuerpo aerodinámico alargado de mínima resistencia. Su forma depende del tamaño y del balance entre tensión superficial y fuerzas del aire; las grandes pueden achatarse por debajo y deformarse. La figura de formas se usa para comparar cuerpos idealizados, no para identificar la forma real de toda gota. [Contraste: NASA, Anatomy of a Raindrop](https://svs.gsfc.nasa.gov/vis/a010000/a011200/a011288/script_17936_00.html).
{{< /nota-adaptacion >}}

## Número de Reynolds y límites del modelo

El número de Reynolds compara efectos inerciales y viscosos para una longitud característica $L$:

$$\mathrm{Re}=\frac{\rho v_{\mathrm{rel}}L}{\eta}$$

Aquí $\eta$ es viscosidad dinámica, en Pa·s; no es el coeficiente de fricción sólido $\mu_s$ o $\mu_k$. Reynolds no tiene unidad.

{{< figura src="/images/diagramas/cap05_arrastre-flujos_pp357.png" width="480" alt="Representaciones de flujo laminar y turbulento." caption="Representaciones de flujo laminar y turbulento." source="Jeff Bigler, edición octubre de 2025, p. 357. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

La figura representa cualitativamente flujo organizado y flujo turbulento. No establece un umbral único válido para cualquier geometría. En ciertos regímenes de muy bajo Reynolds, el arrastre se aproxima mejor mediante una relación lineal con la rapidez; tomar $C_D$ constante y concluir siempre $F_D\propto v^2$ sería inadecuado.

{{< nota-adaptacion pagina="357" origen="Generalizaciones del original sobre flujo y viscosidad" >}}
Los valores de Reynolds usados para clasificar flujo en conductos no se trasladan directamente a cualquier cuerpo en un fluido. Tampoco se adopta una ley universal según la cual la viscosidad de todo fluido newtoniano disminuye al subir la temperatura. El régimen, la geometría y las propiedades del fluido deben identificarse antes de elegir el modelo. [Contraste: NASA, factores que afectan el arrastre](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/factors-that-affect-drag/) y [arrastre de una esfera](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/).
{{< /nota-adaptacion >}}

## Velocidad terminal: desarrollo adicional de la adaptación

Para un objeto que cae verticalmente respecto de aire quieto, sin empuje apreciable, a coeficiente y área constantes, una rapidez terminal satisface equilibrio entre peso y arrastre:

$$mg=\frac12\rho C_DAv_t^2$$

$$v_t=\sqrt{\frac{2mg}{\rho C_DA}}$$

La aceleración tiende a cero, pero la velocidad no es cero. Si el empuje es relevante, el balance cambia a $mg-E=F_D$. Si cambian la postura o el régimen, también cambia la predicción. Este desarrollo se agrega para conectar el apartado con los diagramas de paracaidistas de p. 311; no se presenta como un ejercicio numérico resuelto en pp. 354–357.

## Comparaciones experimentales propuestas

El original propone comparar objetos de formas distintas y observar la influencia del aire. Registrá masa, forma, área de referencia y condiciones: cambiar simultáneamente varios factores no permite atribuir cualquier diferencia a uno solo.

**Corrección de la adaptación anterior:** no se afirma que un papel arrugado y una pelota de golf tengan masas similares sin medirlas. Para una experiencia propia puede compararse una hoja extendida y luego arrugada: la masa prácticamente se conserva, pero cambian la forma y el área. No se inventan tiempos de caída; se miden y se informa la incertidumbre correspondiente.

---

Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Original de Jeff Bigler y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los ejemplos propios y las observaciones en revisión se identifican en el texto.
