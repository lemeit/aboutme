+++
title = "Temperatura y escalas: deducciones y conversiones"
date = "2026-10-21"
lastmod = "2026-10-23"
weight = 1
draft = false
math = true
description = "Equilibrio térmico y relaciones afines entre Celsius, kelvin y Fahrenheit."
+++

## Temperatura, energía interna y calor

La temperatura permite comparar estados térmicos. Dos sistemas en equilibrio térmico no intercambian energía neta por diferencia de temperatura. La energía interna depende de estados y cantidad de materia; no es lo mismo que temperatura.

El calor es transferencia de energía debida a una diferencia de temperatura. No es una sustancia almacenada. Un objeto pequeño y otro grande pueden tener la misma temperatura y energías internas distintas.

## Recorrido intuitivo: escalas con distintos ceros

La escala kelvin y la Celsius tienen incrementos del mismo tamaño, pero distinto cero:

$$\boxed{T(\mathrm K)=t({}^\circ\mathrm C)+273{,}15}.$$

No se escribe grado kelvin. Una diferencia de $10\,{}^\circ\mathrm C$ corresponde a una diferencia de $10\,\mathrm K$; una temperatura de $10\,{}^\circ\mathrm C$ corresponde a $283{,}15\,\mathrm K$.

## Deducción de Celsius–Fahrenheit por proporcionalidad

Buscamos una relación afín $t_F=a\,t_C+b$. Las referencias convencionales $0\,{}^\circ\mathrm C\leftrightarrow32\,{}^\circ\mathrm F$ y $100\,{}^\circ\mathrm C\leftrightarrow212\,{}^\circ\mathrm F$ dan:

$$b=32,\qquad a=\frac{212-32}{100-0}=\frac95.$$

Así:

$$\boxed{t_F=\frac95t_C+32},\qquad\boxed{t_C=\frac59(t_F-32)}.$$

Es una relación entre números expresados en las escalas indicadas. Los puntos de congelación y ebullición del agua real dependen de condiciones como presión y composición; no se supone que cualquier muestra hierva siempre a 100 °C.

{{< figura src="/images/fisica-4to/escalas.svg" width="700" alt="Conversión afín ilustrativa entre Celsius y Fahrenheit." caption="Conversión afín ilustrativa entre Celsius y Fahrenheit." source="Elaboración para Introducción a la Física. Modelos ilustrativos; no son mediciones experimentales." >}}

## Profundización analítica

De la relación afín se obtiene $dt_F/dt_C=9/5$. Para intervalos:

$$\Delta t_F=\frac95\Delta t_C.$$

El desplazamiento de cero desaparece al restar. La conversión de una diferencia no incluye sumar 32 ni 273,15. En calorimetría se usan diferencias; en ecuaciones como eficiencia de Carnot o gas ideal se necesitan temperaturas absolutas en kelvin.

La extrapolación lineal de ciertas propiedades de gases diluidos permite motivar el cero absoluto. No significa que una sustancia real mantenga el mismo estado y la misma ley hasta $0\,\mathrm K$: pueden ocurrir cambios de fase y fallar el modelo.

## Ejemplo resuelto

Un cuerpo está inicialmente a $20\,{}^\circ\mathrm C$ y luego alcanza $30\,{}^\circ\mathrm C$. **Expresá la temperatura inicial en kelvin y Fahrenheit, y el aumento de temperatura en ambas escalas.** La temperatura inicial es $293{,}15\,\mathrm K=68\,{}^\circ\mathrm F$. El cambio es $10\,\mathrm K=18\,{}^\circ\mathrm F$, no $50\,{}^\circ\mathrm F$.

## Ejercicios

1. Convertí $25\,{}^\circ\mathrm C$ a K y °F.
2. Convertí $300\,\mathrm K$ a °C.
3. Un cuerpo pasa de $10\,{}^\circ\mathrm C$ a $35\,{}^\circ\mathrm C$. Expresá el aumento de temperatura, no la temperatura final, en K y °F.
4. ¿En qué temperatura coinciden los números Celsius y Fahrenheit? Resolvé $t=9t/5+32$.

{{< details title="Resultados" >}}

1. $298{,}15\,\mathrm K$ y $77\,{}^\circ\mathrm F$.
2. $26{,}85\,{}^\circ\mathrm C$.
3. $25\,\mathrm K$ y $45\,{}^\circ\mathrm F$.
4. $-40\,{}^\circ\mathrm C=-40\,{}^\circ\mathrm F$.

{{< /details >}}

---

Material elaborado por Prof. Lamaita, 2026. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
