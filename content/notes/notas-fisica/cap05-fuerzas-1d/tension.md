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
- La tensión viaja en **ambas direcciones** a lo largo de la cuerda simultáneamente.
- En una cuerda ideal (masa despreciable, inextensible), la tensión es la **misma en todos los puntos** de la cuerda.
- La dirección es siempre **a lo largo de la cuerda**.

> **Ejemplo:** una persona jala una cuerda con 100 N conectada a una pared. La tensión en la cuerda es 100 N — la pared no "agrega" fuerza, solo la transmite. Si reemplazamos la pared por otra persona que jala con 100 N, la tensión sigue siendo 100 N (no 200 N).

---

## Poleas

Una **polea** es una rueda que cambia la dirección de la tensión en una cuerda, sin cambiar su magnitud (polea ideal = sin masa ni fricción).

Con una polea simple, se necesita la misma fuerza para levantar un peso, pero la dirección cambia (p. ej., jalar hacia abajo para levantar algo).

---

## Ventaja mecánica

Al agregar más poleas, se reduce la fuerza necesaria a cambio de aumentar la distancia que hay que jalar:

$$\text{Ventaja mecánica} = \frac{\text{peso del objeto}}{\text{fuerza aplicada}} = \text{número de cuerdas que sostienen el peso}$$

| Poleas | Fuerza necesaria | Distancia a jalar |
|--------|-----------------|-------------------|
| 1 | $F_g$ | $d$ |
| 2 | $F_g/2$ | $2d$ |
| 3 | $F_g/3$ | $3d$ |

> La ventaja mecánica reduce la fuerza pero **no reduce el trabajo** — se conserva la energía.

---

## Máquina de Atwood

La **máquina de Atwood** (George Atwood, 1784) es un sistema con una polea simple y dos masas unidas por una cuerda. Se usa para verificar experimentalmente las leyes de Newton.

> 📷 *Imagen: diagrama de la máquina de Atwood con dos masas — Bigler pág. 328 (capturar)*

### Resolución (Bigler)

Masas: $m_1 = 5\ \text{kg}$ (izquierda), $m_2 = 10\ \text{kg}$ (derecha). Dirección positiva = sentido horario.

**Fuerzas:**
$$F_1 = m_1 g = 5 \times (-10) = -50\ \text{N} \qquad F_2 = m_2 g = 10 \times (+10) = +100\ \text{N}$$

**Fuerza neta del sistema:**
$$F_{neta} = +100 + (-50) = +50\ \text{N}$$

**Aceleración:**
$$a = \frac{F_{neta}}{m_{total}} = \frac{50}{15} = +3{,}3\ \text{m/s}^2$$

**Tensión en la cuerda** (aplicando 2ª Ley al bloque 1):
$$F_{T} - m_1 g = m_1 a \implies F_T = m_1(a + g) = 5(3{,}3 + 10) = 66{,}6\ \text{N}$$

> La tensión (66,6 N) debe ser mayor que el peso del bloque más liviano (50 N) y menor que el peso del más pesado (100 N). Verificar esto es un buen control del resultado.

---

## Variante — masa sobre mesa

Si una de las masas está sobre una mesa horizontal (en un carrito sin fricción), la fuerza neta es solo la gravedad sobre la masa colgante:

$$F_{neta} = m_{colgante} \cdot g \qquad a = \frac{m_{colgante} \cdot g}{m_{total}}$$

---

## Para pensar

1. ¿Por qué la tensión en una cuerda ideal es la misma en todos sus puntos?
2. En la máquina de Atwood, si las dos masas son iguales, ¿cuál es la aceleración? ¿Y la tensión?
3. ¿Cuántas poleas necesitás para levantar 500 N aplicando solo 100 N?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
