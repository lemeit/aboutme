+++
title = "Tensión y poleas"
date = "2026-06-26"
draft = false
math = true
weight = 7
description = "Tensión en cuerdas, poleas simples, ventaja mecánica y máquina de Atwood."
tags = ["cap05", "fuerzas", "tensión", "polea", "Atwood", "ventaja mecánica", "cuerdas"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Calcular la tensión en cuerdas con y sin poleas.
- Resolver problemas con la máquina de Atwood.
- Calcular la ventaja mecánica de sistemas de poleas.

---

## Definición

La **tensión** ($\vec{F}_T$) es la fuerza de tracción que actúa a lo largo de una cuerda, hilo, cable, etc.

Propiedades clave:
- La cuerda ejerce fuerzas de tracción sobre los cuerpos unidos a sus extremos. Los pares de tercera ley deben identificarse entre la cuerda y cada cuerpo, no como dos fuerzas que se cancelan sobre un mismo bloque.
- En una cuerda ideal (masa despreciable, inextensible), la tensión es la **misma en todos los puntos** de la cuerda.
- La dirección es siempre **a lo largo de la cuerda**.

> **Ejemplo:** una persona jala una cuerda con 100 N conectada a una pared. La tensión en la cuerda es 100 N — la pared no "agrega" fuerza, solo la transmite. Si reemplazamos la pared por otra persona que jala con 100 N, la tensión sigue siendo 100 N (no 200 N).

---

## Poleas

Una **polea** es una rueda que cambia la dirección de la tensión en una cuerda, sin cambiar su magnitud (polea ideal = sin masa ni fricción).

Con una **polea fija ideal**, se necesita una fuerza igual al peso para levantar la carga a velocidad constante, pero cambia la dirección de aplicación. Una polea móvil tiene otra geometría y puede aportar ventaja mecánica.

---

## Ventaja mecánica

En un sistema ideal con ramales paralelos que sostienen la parte móvil, y elevación a velocidad constante, cada ramal soporta la misma tensión. Si hay $n$ ramales sustentantes:

$$\text{Ventaja mecánica} = \frac{\text{peso del objeto}}{\text{fuerza aplicada}} = \text{número de cuerdas que sostienen el peso}$$

| Ramales sustentantes $n$ | Fuerza necesaria | Distancia a jalar para elevar $d$ |
|--------|-----------------|-------------------|
| 1 | $F_g$ | $d$ |
| 2 | $F_g/2$ | $2d$ |
| 3 | $F_g/3$ | $3d$ |

> **Aclaración de la adaptación — Bigler, pp. 326–327:** el original relaciona poleas y ramales en los montajes que dibuja. Esa correspondencia no es universal: hay que contar los ramales que sostienen la parte móvil, no las ruedas. La tabla expresa ese conteo; supone ramales paralelos, cuerda y poleas ideales y peso de la parte móvil incluido en la carga.

La ventaja mecánica ideal reduce la fuerza pero **no reduce el trabajo**: aumentar la distancia compensa la reducción de fuerza. Con rozamiento, el trabajo de entrada es mayor.

---

## Máquina de Atwood

La **máquina de Atwood** (George Atwood, 1784) es un sistema con una polea simple y dos masas unidas por una cuerda. Se usa para verificar experimentalmente las leyes de Newton.

> 📷 *Imagen: diagrama de la máquina de Atwood con dos masas — Bigler pág. 328 (capturar)*

### Resolución (Bigler)

Masas: $m_1=5\ \text{kg}$ (izquierda), $m_2=10\ \text{kg}$ (derecha). Conservamos la elección de Bigler, pp. 328–329: positivo hacia arriba para el bloque 1 y hacia abajo para el bloque 2, siguiendo la cuerda. Aquí $g=10\ \mathrm{m/s^2}$ es un **módulo positivo**; los signos se asignan en cada ecuación. Suponemos cuerda y polea sin masa y sin rozamiento.

**Fuerzas:**
$$F_{g,1}=-m_1g=-50\ \mathrm N,\qquad F_{g,2}=+m_2g=+100\ \mathrm N$$

**Fuerza neta del sistema:**
$$F_{neta} = +100 + (-50) = +50\ \text{N}$$

**Aceleración:**
$$a=\frac{50}{15}=\frac{10}{3}\ \mathrm{m/s^2}\approx+3{,}33\ \mathrm{m/s^2}$$

**Tensión en la cuerda** (aplicando 2ª Ley al bloque 1):
$$F_T-m_1g=m_1a\quad\Rightarrow\quad F_T=5\left(\frac{10}{3}+10\right)=\frac{200}{3}\ \mathrm N\approx66{,}7\ \mathrm N$$

El bloque 2 comprueba el mismo resultado: $m_2g-F_T=m_2a$, por lo que $F_T=10(10-10/3)=200/3\ \mathrm N$. Es mayor que 50 N y menor que 100 N.

> **Aclaración del cálculo — Bigler, p. 329:** el original presenta 66,6 N con cifras intermedias redondeadas. Aquí conservamos la fracción hasta el final y obtenemos aproximadamente 66,7 N. La expresión del resumen anterior $5(3{,}3+10)=66{,}6$ no era aritméticamente correcta: ese producto vale 66,5. Los signos originales responden a la convención por bloque y no se consideran un error.

---

## Variante — masa sobre mesa

Si una de las masas está sobre una mesa horizontal (en un carrito sin fricción), la fuerza neta es solo la gravedad sobre la masa colgante:

$$F_{neta} = m_{colgante} \cdot g \qquad a = \frac{m_{colgante} \cdot g}{m_{total}}$$

---

## Para pensar

1. ¿Por qué la tensión en una cuerda ideal es la misma en todos sus puntos?
2. En la máquina de Atwood, si las dos masas son iguales, ¿cuál es la aceleración? ¿Y la tensión?
3. En un montaje ideal con ramales sustentantes paralelos, ¿cuántos ramales necesitás para elevar uniformemente una carga de 500 N aplicando 100 N? ¿Por qué el número de ruedas, sin un dibujo, no basta para responder?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
