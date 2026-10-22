+++
title = "Movimiento de fluidos y ecuación de Bernoulli"
date = "2026-10-22"
lastmod = "2026-10-22"
draft = false
math = true
weight = 7
description = "Balance de energía por volumen, Venturi, salida de depósitos y límites del modelo ideal."
tags = ["cap12", "fluidos"]
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 580–588"
figuras_estado = "4 figuras recuperadas del original"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** «Fluid Motion & Bernoulli’s Law», Bigler, edición de octubre de 2025, [pp. 580–588](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=580).

## Energía mecánica por unidad de volumen

Para flujo estacionario de un fluido incompresible, sin viscosidad, sin bombas ni pérdidas entre los puntos, la ecuación de Bernoulli sobre una línea de corriente es:

$$P+\rho gz+\frac12\rho v^2=\text{constante}.$$

$P$ es la presión estática del fluido, $z$ la altura respecto de un nivel común y $v$ la rapidez. Todos los términos tienen unidades de presión, equivalentes a energía por volumen:

$$1\,\mathrm{Pa}=1\,\mathrm{J/m^3}.$$

La expresión $\rho gz$ representa energía potencial gravitatoria por volumen; $\tfrac12\rho v^2$, energía cinética por volumen. La cantidad $q=\tfrac12\rho v^2$ se llama presión dinámica.

{{< figura src="/images/diagramas/cap12_bernoulli-altura_pp582.png" width="416" alt="Dos puntos de un flujo a distinta altura y sección." caption="Dos puntos de un flujo a distinta altura y sección." source="Jeff Bigler, edición octubre de 2025, p. 582. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Entre dos secciones:

$$P_1+\rho gz_1+\frac12\rho v_1^2=P_2+\rho gz_2+\frac12\rho v_2^2.$$

No son necesariamente estados «antes y después» del mismo lugar: pueden ser dos puntos de una corriente estacionaria.

## Interpretar el trabajo de las presiones

Una porción de volumen $\Delta V$ que entra recibe un trabajo de presión $P_1\Delta V$; al salir realiza un trabajo $P_2\Delta V$. El trabajo neto de presión es $(P_1-P_2)\Delta V$.

Al igualarlo al aumento de energía cinética y potencial:

$$(P_1-P_2)\Delta V=\frac12\rho\Delta V(v_2^2-v_1^2)+\rho g\Delta V(z_2-z_1).$$

Dividiendo por el volumen se recupera Bernoulli. Este desarrollo precisa el vínculo con conservación de energía presentado en las pp. 581–584.

{{< nota-adaptacion pagina="580" origen="Texto del original: presión dinámica y alcance de Bernoulli" >}}
El original atribuye la presión dinámica al arrastre de partículas vecinas. Aquí se define como **energía cinética por volumen**, $\tfrac12\rho v^2$. No es una presión isotrópica adicional que cualquier manómetro mida directamente. La constante de Bernoulli requiere las hipótesis indicadas y, en general, se compara a lo largo de una línea de corriente. «Mayor velocidad, menor presión» no es una regla universal entre puntos arbitrarios.
{{< /nota-adaptacion >}}

## Tubo de Venturi

{{< figura src="/images/diagramas/cap12_venturi_pp583.png" width="443" alt="Presiones estáticas en un tubo de Venturi." caption="Presiones estáticas en un tubo de Venturi." source="Jeff Bigler, edición octubre de 2025, p. 583. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

En un tubo horizontal ideal, $z_1=z_2$. Si la sección se reduce y el caudal permanece constante, continuidad exige $v_2\gt v_1$. Entonces:

$$P_2-P_1=\frac12\rho(v_1^2-v_2^2)\lt 0.$$

La presión estática es menor en la garganta. Si el tubo cambia de altura o hay una bomba, no alcanza comparar solo velocidades.

## Teorema de Torricelli

{{< figura src="/images/diagramas/cap12_torricelli_pp585.png" width="560" alt="Salida por orificios bajo una superficie libre." caption="Salida por orificios bajo una superficie libre." source="Jeff Bigler, edición octubre de 2025, p. 585. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Tomamos un punto 1 en la **superficie libre** de un tanque grande y un punto 2 en el chorro a la salida. Ambos están aproximadamente a presión atmosférica. La superficie desciende lentamente, por lo que $v_1\approx0$. Si el desnivel es $h=z_1-z_2$:

$$\rho gz_1=\rho gz_2+\frac12\rho v_2^2,$$
$$v_2=\sqrt{2gh}.$$

La rapidez coincide con la de caída libre desde ese desnivel, dentro del modelo ideal. La geometría del orificio, la viscosidad y las pérdidas modifican el resultado real.

{{< nota-adaptacion pagina="585" origen="Texto del original: puntos y alturas usados en Torricelli" >}}
La nota final compara puntos junto al mismo orificio asignándoles alturas gravitatorias distintas y velocidad interior nula. La deducción anterior compara la **superficie libre y la salida**, con un mismo origen de alturas. El término $\rho gz$ es energía potencial por volumen, no una presión que se vuelve cero por dejar de tener agua encima. La presión atmosférica se cancela por ser igual en los dos puntos.
{{< /nota-adaptacion >}}

## Ejemplos numéricos del original

### Conducto cuyo diámetro se reduce a la mitad

Con rapidez inicial de 0,30 m/s, la sección final vale un cuarto de la inicial. Por continuidad:

$$v_2=4v_1=1{,}2\,\mathrm{m/s}.$$

El diámetro inicial de 0,40 m corresponde a radio de 0,20 m; el diámetro final de 0,20 m corresponde a radio de 0,10 m.

### Conducto que sube 2,5 m

Datos de la p. 587: $\rho=1250\,\mathrm{kg/m^3}$, $P_1=45\,000\,\mathrm{Pa}$, $v_1=1{,}5\,\mathrm{m/s}$ y $v_2=3{,}4\,\mathrm{m/s}$; $z_2-z_1=2{,}5\,\mathrm m$.

$$P_2=P_1+\frac12\rho(v_1^2-v_2^2)-\rho g(z_2-z_1),$$
$$P_2=45\,000+1406{,}25-7225-31\,250=7931{,}25\,\mathrm{Pa}.$$

La presión disminuye tanto por la subida como por el aumento de rapidez. Las dos presiones deben usar la misma referencia absoluta o manométrica.

### Conducto que desciende (p. 588)

{{< figura src="/images/diagramas/cap12_tubo-descenso_pp588.png" width="293" alt="Conducto que desciende de A a B." caption="Conducto que desciende de A a B." source="Jeff Bigler, edición octubre de 2025, p. 588. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El agua pasa por A a 4,8 m/s y 52,0 kPa. Baja 14,8 m hasta B, donde el área es el doble. Continuidad da $v_B=2{,}4\,\mathrm{m/s}$. Con $\rho=1000\,\mathrm{kg/m^3}$ y $g=10\,\mathrm{m/s^2}$:

$$P_B=P_A+\rho g(14{,}8)+\frac12\rho(v_A^2-v_B^2),$$
$$P_B=52\,000+148\,000+8640=208\,640\,\mathrm{Pa}\approx208{,}6\,\mathrm{kPa}.$$

El signo de la altura es importante: al descender, ese término aumenta la presión disponible en B.

## Sustentación y demostraciones con aire

La p. 586 relaciona diferencias de presión con la fuerza sobre un ala y menciona demostraciones al soplar sobre papel. Bernoulli puede conectar presión y velocidad cuando se aplican sus hipótesis; la fuerza total requiere integrar presiones y esfuerzos sobre la superficie y considerar cómo el objeto cambia el flujo.

{{< nota-adaptacion pagina="586" origen="Texto del original: reparto de la sustentación entre Bernoulli y tercera ley" >}}
La descripción por diferencias de presión y la descripción por cambio de cantidad de movimiento del aire son compatibles. No son dos fuentes independientes de sustentación a las que se pueda asignar, sin un modelo concreto, una parte «principal» y otra secundaria. Se evita esa división del pasaje original.
{{< /nota-adaptacion >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.