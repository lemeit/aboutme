+++
title = "Supuestos estándar en Física"
date = "2026-06-26"
draft = false
math = true
weight = 1
description = "Las suposiciones ideales que usamos para simplificar problemas de Física."
tags = ["cap02", "matemáticas", "supuestos", "idealización", "resolución de problemas"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo y ejercicios cotejados: pp. 114–116"
figuras_estado = "Sin figuras; tablas reconstruidas"
visual_estado = "Pendiente: revisar cambios editoriales del 21/10/2026"
revision_estado = "En revisión: divergencias y notas de adaptación, 21/10/2026"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 114–116. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=114). Traducción y adaptación desarrollada; se señalan las aclaraciones propias.

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Explicar por qué es necesario hacer supuestos en Física.
- Identificar los supuestos estándar que se aplican salvo indicación contraria.
- Reconocer cuándo un supuesto no es válido en un problema específico.

---

## ¿Por qué hacer supuestos?

En la vida cotidiana, hacemos supuestos constantemente: al cruzar la calle asumís que los autos lejanos van lo suficientemente lento; al comer asumís que la comida no te va a causar una reacción alérgica.

En Física, es imposible medir y calcular absolutamente todo lo que ocurre en una situación real. Los **supuestos** son afirmaciones no declaradas que se consideran verdaderas para poder resolver un problema.

> **supuesto:** algo que no se declara explícitamente pero se considera cierto para tomar una decisión o resolver un problema.

---

## Supuestos estándar en este curso

El original propone estas convenciones para sus ejercicios introductorios. Aplicá cada una solo si es compatible con el enunciado y explicitala cuando sea relevante:

### Sobre constantes y variables
- Las constantes son constantes — por ejemplo, la aceleración de la gravedad tiene el mismo valor en todas las partes del problema.
- Las variables cambian de la manera descrita por las ecuaciones relevantes.

### Sobre objetos y máquinas
- Las máquinas ideales y otros objetos que no son el foco del problema tienen masa, inercia y fricción despreciables.
- Por ejemplo, una polea puede tener masa despreciable en un problema, pero masa significativa en otro — el enunciado lo aclara.

### Sobre fricción
- Si el problema no da suficiente información para determinar la fricción, podés asumir que la **fricción cinética** entre superficies es despreciable.
- El hielo siempre se considera sin fricción, salvo que se indique lo contrario.

### Sobre resistencia del aire
- Si el problema no menciona resistencia del aire y no es parte central del problema, podés asumir que es despreciable.
- Esto es lo que permite tratar la caída libre como MRUV puro.

### Sobre la masa de los objetos
- La masa de un objeto generalmente puede considerarse concentrada en un **punto** en el espacio 3D.
- Excepción: problemas de centro de masa o torque donde la distribución importa.

### Sobre energía
- Toda la energía puede contabilizarse al convertirse de una forma a otra.
- En una colisión elástica se conserva la energía cinética; no debe suponerse esto para toda colisión.

### Sobre sólidos y líquidos
- La expansión o contracción de sólidos y líquidos por cambios de temperatura o presión es despreciable (excepto en problemas de dilatación térmica).

### Sobre gases
- En el gas ideal se omiten interacciones entre moléculas excepto durante sus colisiones elásticas.

### Sobre cables eléctricos
- Los cables tienen resistencia despreciable (excepto en problemas de circuitos donde la resistencia interna importa).

---

## ¿Cuándo no aplica un supuesto?

Si un problema menciona explícitamente algo — fricción, resistencia del aire, masa de la polea — entonces ese supuesto **no aplica** y hay que incluirlo en el análisis.

Si no estás seguro, preguntá al docente. En un examen escrito, declarás el supuesto que hacés y continuás.

---

## Un supuesto es parte del modelo

No se trata de decidir arbitrariamente qué existe, sino de reconocer qué efectos se incluyen en un modelo para la pregunta que se quiere resolver. Una idealización puede omitir un efecto pequeño o aislar una relación para estudiarla. Que una ecuación produzca un resultado no demuestra que todos sus supuestos describan el montaje real.

En las pp. 114–116 Bigler propone convenciones para su curso introductorio. Por ejemplo, tratar una polea como ideal evita tener que calcular su aceleración angular y la distribución de su masa. Si otro problema pide estudiar precisamente la rotación de esa polea, aquella simplificación ya no sirve.

## Qué consecuencias tiene cada idealización

| Supuesto | Qué permite hacer | Cuándo debe revisarse |
|---|---|---|
| Gravedad aproximadamente uniforme | Usar un mismo $g$ en una caída cercana a la superficie | Grandes cambios de altura o gravitación orbital |
| Resistencia del aire despreciable | Aplicar las ecuaciones de caída con aceleración constante | Objetos livianos, superficies grandes o velocidades elevadas |
| Cuerda y polea ideales | Omitir masa, rozamiento y energía de rotación de esos elementos | Cuando se da masa o inercia de la polea o se estudian pérdidas |
| Objeto puntual | Describir traslación sin detallar tamaño ni distribución de masa | Centro de masa, torque, rotación o contacto extendido |
| Cable ideal | Omitir caída de potencial a lo largo del cable | Si se da su resistencia o interesa la pérdida de energía |
| Dilatación despreciable | Mantener dimensiones y volumen en el modelo | Problemas térmicos o de compresibilidad |

El hielo no es físicamente “sin fricción”: el original lo utiliza así en ciertos ejercicios. Del mismo modo, desconocer un coeficiente de rozamiento no prueba que el rozamiento sea nulo. Si el enunciado no alcanza para decidir, explicitá qué modelo elegís y qué limitación introduce.

## Energía total y energía mecánica

Conservar la energía total no implica que se conserve la energía mecánica de los cuerpos considerados. En una colisión puede transformarse energía cinética en energía interna, sonido o deformación. Una colisión elástica conserva la energía cinética; una colisión inelástica no. La palabra “ideal” debe venir acompañada de la condición específica que se supone.

## Gas ideal

{{< nota-adaptacion pagina="115" origen="Formulación abreviada del original: colisiones en un gas ideal" >}}
En el modelo elemental de gas ideal se desprecia el volumen de las moléculas frente al del recipiente y se omiten interacciones entre ellas **excepto durante colisiones**, que se consideran elásticas. Esa es una precisión respecto de la formulación abreviada del original: decir que no interactúan al colisionar sería contradictorio. El modelo deja de ser adecuado en condiciones donde las interacciones y el tamaño molecular importan.
{{< /nota-adaptacion >}}

## Declarar y comprobar

Una respuesta útil puede comenzar: “Supongo movimiento rectilíneo, aceleración constante y resistencia del aire despreciable en el intervalo analizado”. Después comprobá si los datos o las condiciones disponibles respaldan esas aproximaciones.

Si el enunciado incluye un efecto antes omitido, volvé a las ecuaciones del modelo. No basta con mantener la ecuación ideal y agregar una frase final sobre pérdidas. Si falta información para cuantificar ese efecto, indicá qué dato haría falta o expresá el resultado simbólicamente.

## Actividades propias — Para pensar

1. Un libro de texto dice que un proyectil sigue una trayectoria parabólica perfecta. ¿Qué supuesto se está haciendo? ¿En qué situaciones reales ese supuesto falla notablemente?
2. ¿Por qué es necesario asumir que la masa de una polea es despreciable para simplificar el problema de un sistema de poleas?
3. Si no pudiéramos hacer supuestos, ¿sería posible resolver algún problema de Física con las herramientas matemáticas de la escuela secundaria? ¿Por qué?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
