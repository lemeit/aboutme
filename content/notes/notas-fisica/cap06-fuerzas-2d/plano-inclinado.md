+++
title = "Problemas con plano inclinado"
date = "2026-06-26"
draft = false
math = true
weight = 2
description = "Fuerzas sobre un objeto en una rampa: componentes paralela y perpendicular, fricción y máquina de Atwood modificada."
tags = ["cap06", "fuerzas 2D", "plano inclinado", "rampa", "normal", "fricción", "Atwood", "trigonometría"]
revision_estado = "En revisión: divergencias y notas de adaptación, 22/10/2026"
lastmod = "2026-10-22"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 372–379"
figuras_estado = "6 figuras del original; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador de escritorio y móvil"
+++

**Fuente:** «Ramp Problems», Bigler, edición de octubre de 2025, [pp. 372–379](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=372).

## Elegir ejes sobre la rampa

El peso apunta verticalmente hacia abajo. La normal es perpendicular a la superficie: en una rampa no es vertical. Para evitar descomponer todas las fuerzas, elegimos un eje paralelo al plano y otro perpendicular.

{{< figura src="/images/diagramas/cap06_fuerzas-2d_plano-inclinado_pp373.png" width="375" alt="Peso, normal y resultante sobre una rampa" caption="Peso, normal y resultante en el modelo sin rozamiento." source="Jeff Bigler, edición octubre de 2025, p. 373. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Consideremos primero un bloque sobre una rampa fija, sin rozamiento, con peso y normal como únicas fuerzas. La resultante apunta cuesta abajo, paralela al plano. **La fuerza neta no es una tercera interacción**: es la suma vectorial de peso y normal que el dibujo representa para ayudar al cálculo.

## Geometría de las componentes del peso

Tomemos positivo cuesta abajo y positivo perpendicular hacia afuera. Si la rampa forma un ángulo $\theta$ con la horizontal:

{{< figura src="/images/diagramas/cap06_rampa-geometria_pp374.png" width="293" alt="Geometría de las componentes del peso." caption="Geometría de las componentes del peso." source="Jeff Bigler, edición octubre de 2025, p. 374. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

El ángulo entre el peso y la dirección perpendicular **hacia adentro** del plano es $\theta$. Por trigonometría:

$$F_{g,\parallel}=mg\sin\theta,\qquad F_{g,\perp}=-mg\cos\theta.$$

La normal tiene componente positiva $N$. Si el bloque sigue una rampa recta fija, sin aceleración perpendicular y sin otras fuerzas en ese eje:

$$N-mg\cos\theta=0\quad\Longrightarrow\quad N=mg\cos\theta.$$

| Magnitud | Expresión | Condición |
|:---|:---:|:---|
| Componente del peso cuesta abajo | $mg\sin\theta$ | Geometría de la proyección |
| Componente del peso hacia el plano | $mg\cos\theta$ | Módulo de la proyección perpendicular |
| Normal | $N=mg\cos\theta$ | Contacto, $a_\perp=0$ y sin otras fuerzas perpendiculares |
| Fuerza neta cuesta abajo | $mg\sin\theta$ | Solo peso y normal, sin rozamiento |

{{< nota-adaptacion pagina="374" origen="Texto del original: ángulo entre peso y normal y signo de la normal" >}}
El texto dice que el ángulo entre la gravedad y la normal es $\theta$. Entre las **flechas** del peso y de la normal hacia afuera, el ángulo es $180^\circ-\theta$; el ángulo $\theta$ corresponde al peso y la perpendicular hacia adentro. Además, la expresión impresa $F_N=-F_g\cos\theta$ comunica sentidos opuestos: no significa que el módulo de la normal sea negativo. Aquí se distinguen componentes con signo y módulos positivos.
{{< /nota-adaptacion >}}

### Comprobar los extremos

Para $\theta=0^\circ$, el plano es horizontal: la componente paralela del peso vale cero y $N=mg$ en este modelo. Para $\theta\to90^\circ$, la componente paralela tiende a $mg$ y la normal tiende a cero. El último caso es el límite ideal de este modelo, sin otras fuerzas; no permite afirmar caída libre para cualquier situación con una pared vertical.

## Aceleración sin rozamiento

La proyección de la segunda ley da:

$$mg\sin\theta=ma,$$
$$a=g\sin\theta.$$

La masa se cancela: sobre la misma rampa ideal todos los bloques tienen la misma aceleración. La fuerza neta, en cambio, sí depende de la masa.

### Ejemplo del original: 2,5 kg y 35°

Con $g=10\,\mathrm{m/s^2}$, el peso es $mg=25\,\mathrm N$:

$$F_{\mathrm{neta},\parallel}=25\sin35^\circ\approx14{,}3\,\mathrm N,$$
$$a=\frac{14{,}3}{2{,}5}\approx5{,}7\,\mathrm{m/s^2}.$$

La normal vale $N=25\cos35^\circ\approx20{,}5\,\mathrm N$.

{{< nota-adaptacion pagina="375" origen="Texto del original: escritura del peso en el ejemplo" >}}
El desarrollo del libro escribe $F_g=ma$ al calcular el peso con el valor 10. La relación que corresponde a ese cálculo es $F_g=mg$; la aceleración del bloque por la rampa es distinta de $g$. Se conserva el resultado numérico del ejemplo y se precisa la notación.
{{< /nota-adaptacion >}}

## Qué cambia cuando hay rozamiento

Si el bloque **desliza cuesta abajo**, el rozamiento cinético apunta cuesta arriba. Con la misma elección de ejes y sin otras fuerzas:

$$f_k=\mu_kN=\mu_kmg\cos\theta,$$
$$mg\sin\theta-\mu_kmg\cos\theta=ma,$$
$$a=g(\sin\theta-\mu_k\cos\theta).$$

Si $a\lt 0$, el bloque que baja está frenando. La expresión no permite suponer que, al detenerse, empezará a subir: al cesar el deslizamiento hay que analizar el rozamiento estático.

Si el bloque **sube**, tanto el peso paralelo como el rozamiento apuntan cuesta abajo. Conservando positivo cuesta abajo:

$$a=g(\sin\theta+\mu_k\cos\theta).$$

La aceleración es positiva aunque la velocidad sea negativa: el bloque que sube pierde rapidez.

En reposo, el rozamiento necesario para equilibrar el peso paralelo es $f_s=mg\sin\theta$. El equilibrio es posible si:

$$mg\sin\theta\leq\mu_smg\cos\theta\quad\Longrightarrow\quad\tan\theta\leq\mu_s.$$

Estas precisiones desarrollan las condiciones del modelo de fricción aplicado al ejercicio del esquiador de la p. 377.

### Esquiador con velocidad constante

El original supone descenso lento y resistencia del aire despreciable. La velocidad constante implica aceleración cero:

$$mg\sin\theta-\mu_kmg\cos\theta=0,$$
$$\tan\theta=\mu_k,\qquad\theta=\arctan\mu_k.$$

La tabla E del libro usa aproximadamente $\mu_k=0{,}05$ para esquí encerado sobre nieve: $\theta\approx2{,}9^\circ$. El dato es aproximado; no representa cualquier condición de nieve o de material.

{{< nota-adaptacion pagina="377" origen="Adaptación anterior: generalización del descenso uniforme" >}}
$\tan\theta=\mu_k$ describe el descenso uniforme bajo las hipótesis del ejemplo. No es una ley para cualquier cuerpo sobre cualquier rampa. El sentido del rozamiento depende del deslizamiento relativo o de su tendencia, y la fórmula de la normal requiere verificar el balance perpendicular.
{{< /nota-adaptacion >}}

## Una masa colgante y otra sobre una rampa

En la máquina de Atwood modificada de la p. 376, $m_h=24\,\mathrm{kg}$ cuelga y $m_r=8\,\mathrm{kg}$ está sobre una rampa sin rozamiento de $25^\circ$.

{{< figura src="/images/diagramas/cap06_atwood-rampa_pp376.png" width="293" alt="Masa colgante y bloque sobre la rampa." caption="Masa colgante y bloque sobre la rampa." source="Jeff Bigler, edición octubre de 2025, p. 376. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Suponemos cuerda inextensible y de masa despreciable, polea ideal y tramos tensos. Ambas masas tienen el mismo módulo de aceleración y la tensión tiene el mismo módulo en los dos tramos. Tomamos positivo hacia abajo para la masa colgante y cuesta arriba para la masa sobre la rampa.

{{< figura src="/images/diagramas/cap06_atwood-componentes_pp376.png" width="293" alt="Componentes de fuerzas para cada masa." caption="Componentes de fuerzas para cada masa." source="Jeff Bigler, edición octubre de 2025, p. 376. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Las ecuaciones de cada cuerpo son:

$$m_hg-T=m_ha,$$
$$T-m_rg\sin\theta=m_ra.$$

Al sumarlas, la tensión se elimina algebraicamente:

$$m_hg-m_rg\sin\theta=(m_h+m_r)a,$$
$$a=\frac{g(m_h-m_r\sin\theta)}{m_h+m_r}.$$

Esta suma combina **proyecciones sobre el recorrido de cada masa**; las aceleraciones físicas apuntan en direcciones distintas. No se están sumando fuerzas vectoriales perpendiculares como si fueran colineales.

$$a=\frac{240-80\sin25^\circ}{32}\approx6{,}44\,\mathrm{m/s^2}.$$

La masa de 24 kg baja y la de 8 kg sube por la rampa. El libro propone continuar para hallar la tensión. Desarrollando ese paso:

$$T=m_h(g-a)\approx24(10-6{,}44)\approx85{,}4\,\mathrm N.$$

Se comprueba con la otra masa: $T=m_r(a+g\sin25^\circ)$. No se debe redondear $a$ antes de la comprobación.

### Incorporar rozamiento en la rampa

Si la masa colgante baja y el bloque sobre el plano sube, el rozamiento de ese bloque apunta cuesta abajo:

$$m_hg-T=m_ha,$$
$$T-m_rg\sin\theta-\mu_km_rg\cos\theta=m_ra,$$
$$a=\frac{m_hg-m_rg\sin\theta-\mu_km_rg\cos\theta}{m_h+m_r}.$$

La fórmula supone ese sentido de deslizamiento. Un resultado negativo significa aceleración opuesta al sentido elegido; para decidir si un sistema inicialmente en reposo arranca hay que usar el límite estático, no imponer fricción cinética.

## Ejercicios del original

### 1. Bloque sobre rampa ideal (p. 377)

Un bloque de 10 kg está sobre una rampa sin rozamiento de 30°. Calculá su aceleración. Usá $g=10\,\mathrm{m/s^2}$.

{{< details title="Resultado" >}}
$a=g\sin30^\circ=5{,}0\,\mathrm{m/s^2}$ cuesta abajo. El peso es 100 N, pero la fuerza neta paralela es 50 N.
{{< /details >}}

### 2. Sistema de 30 kg y 10 kg (p. 378)

Una masa de 30 kg cuelga de una polea ideal y está unida a otra de 10 kg sobre una rampa de 30°.

{{< figura src="/images/diagramas/cap06_ejercicio-atwood_pp378.png" width="293" alt="Ejercicio con masa colgante de 30 kg." caption="Ejercicio con masa colgante de 30 kg." source="Jeff Bigler, edición octubre de 2025, p. 378. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Calculá la aceleración: a) sin rozamiento; b) cuando el bloque sube por la rampa y $\mu_k=0{,}30$.

{{< details title="Desarrollo y resultados" >}}
Sin rozamiento:

$$a=\frac{300-100\sin30^\circ}{40}=6{,}25\,\mathrm{m/s^2}.$$

Con deslizamiento hacia arriba de la masa sobre la rampa:

$$N=100\cos30^\circ\approx86{,}6\,\mathrm N,$$
$$f_k=0{,}30N\approx26{,}0\,\mathrm N,$$
$$a=\frac{300-50-26{,}0}{40}\approx5{,}60\,\mathrm{m/s^2}.$$

La masa colgante baja en ambos casos. La tensión se calcula con $T=30(10-a)$; resulta 112,5 N sin rozamiento y aproximadamente 132 N con rozamiento.
{{< /details >}}

### 3. Dos rampas (p. 379)

Dos masas, 17 kg sobre una rampa de 45° y 15 kg sobre otra de 60°, están unidas por una cuerda ligera que pasa por una polea ideal. Las superficies no tienen rozamiento.

{{< figura src="/images/diagramas/cap06_dos-rampas_pp379.png" width="293" alt="Masas sobre rampas de 45 y 60 grados." caption="Masas sobre rampas de 45 y 60 grados." source="Jeff Bigler, edición octubre de 2025, p. 379. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

Determiná el sentido del movimiento al soltarlas desde el reposo y el módulo de la aceleración.

{{< details title="Comparación de fuerzas y solución" >}}
Comparamos las componentes de los pesos:

$$17g\sin45^\circ\approx120{,}2\,\mathrm N,$$
$$15g\sin60^\circ\approx129{,}9\,\mathrm N.$$

La masa de 15 kg baja por su rampa aunque sea la de menor masa. Para ese sentido positivo:

$$15g\sin60^\circ-T=15a,$$
$$T-17g\sin45^\circ=17a.$$

Por suma de las ecuaciones:

$$a=\frac{15g\sin60^\circ-17g\sin45^\circ}{15+17}\approx0{,}303\,\mathrm{m/s^2}.$$

El resultado coincide con la respuesta del original usando $g=10\,\mathrm{m/s^2}$.
{{< /details >}}


---

Traducción y adaptación al español: Prof. Lamaita, 2026. Texto original: [Jeff Bigler — *Physics 1: Mechanics in Plain English*](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), edición de octubre de 2025. Original y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Las aclaraciones y actividades propias se identifican en el texto.