+++
title = "Segunda Ley de Newton — aplicaciones"
date = "2026-06-26"
draft = false
math = true
weight = 6
description = "Aplicación de F=ma con DCL, problemas combinados de fuerzas y cinemática, estrategia GUESS encadenado."
tags = ["cap05", "fuerzas", "Newton", "Segunda Ley", "F=ma", "GUESS", "diagrama de cuerpo libre", "cinemática"]
+++

## Objetivos de aprendizaje

Al finalizar esta sección, vas a poder:

- Aplicar la Segunda Ley de Newton para calcular fuerza, masa o aceleración.
- Combinar ecuaciones de fuerzas con ecuaciones de movimiento (GUESS encadenado).
- Resolver problemas con múltiples fuerzas usando DCL.

---

## Segunda Ley — repaso

$$\vec{F}_{neta} = \sum \vec{F} = m\,\vec{a} \qquad \text{o bien} \qquad a = \frac{F_{neta}}{m}$$

**Equilibrio estático:** $F_{neta} = 0$ y el objeto está en reposo.
**Equilibrio dinámico:** $F_{neta} = 0$ y el objeto se mueve a velocidad constante.

---

## Estrategia GUESS encadenado

Cuando un problema combina fuerzas y cinemática, necesitás dos tablas GUESS conectadas por la aceleración $a$:

```
Ecuaciones de movimiento         Segunda Ley de Newton
────────────────────────         ─────────────────────
d  →  ?                          Fnet →  Fnet
v₀ →  0                          m    →  m (dato)
v  →  dato                   ←a→  a   →  a
a  →  a  ─────────────────────
t  →  dato
```

---

## Ejemplos resueltos

### Ejemplo 1 — Fuerza neta simple (Bigler)

Una fuerza neta de 50 N actúa sobre un carrito de 35 kg. ¿Cuál es la aceleración?

$$a = \frac{F_{neta}}{m} = \frac{50}{35} = 1{,}43\ \text{m/s}^2$$

---

### Ejemplo 2 — Dos fuerzas opuestas (Bigler)

Dos niños tiran de un juguete (masa 0,6 kg): Jamie hacia la izquierda con 40 N y Edward hacia la derecha con 60 N. ¿Cuál es la aceleración? (Positivo = derecha)

$$F_{neta} = -40 + 60 = +20\ \text{N}$$
$$a = \frac{20}{0{,}6} = +33{,}3\ \text{m/s}^2 \quad \text{(hacia la derecha)}$$

---

### Ejemplo 3 — Combinado fuerzas + cinemática (Bigler)

Una persona aplica 100 N a un carrito de 75 kg desde el reposo. ¿Cuánto recorre hasta llegar a $4{,}0\ \text{m/s}$?

**Paso 1 — Segunda Ley:**

$$a = \frac{F_{neta}}{m} = \frac{100}{75} = 1{,}3\ \text{m/s}^2$$

**Paso 2 — Ecuación de movimiento** (con $v_0 = 0$, $v = 4{,}0\ \text{m/s}$, $a = 1{,}3\ \text{m/s}^2$):

$$v^2 - v_0^2 = 2a\,d \implies d = \frac{v^2}{2a} = \frac{16}{2{,}6} = 6\ \text{m}$$

---

### Ejemplo 4 — Fuerza aplicada con fricción (Bigler)

Un bloque de 5 kg debe acelerarse de reposo a $6{,}0\ \text{m/s}$ en 1,5 s, contra una fricción de 2 N. ¿Cuánta fuerza aplicada se necesita?

**Paso 1 — aceleración:**

$$a = \frac{v - v_0}{t} = \frac{6{,}0}{1{,}5} = 4{,}0\ \text{m/s}^2$$

**Paso 2 — fuerza neta:**

$$F_{neta} = ma = 5 \times 4{,}0 = 20\ \text{N}$$

**Paso 3 — fuerza aplicada** (recordá que la fricción es negativa):

$$F_{neta} = F_a + F_f \implies 20 = F_a + (-2) \implies F_a = 22\ \text{N}$$

---

## Para pensar

1. Un objeto se mueve a velocidad constante. ¿Hay fuerzas sobre él? ¿Hay fuerza neta?
2. ¿Puede haber fuerza neta sin aceleración? ¿Y aceleración sin fuerza neta?
3. Si duplicás la fuerza neta sobre un objeto (misma masa), ¿qué pasa con la aceleración? ¿Y si duplicás la masa (misma fuerza)?

---

*Adaptado de [Jeff Bigler — Physics 1: Mechanics in Plain English](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf), licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Traducción y adaptación: Prof. Ing. Luciano Lamaita, 2026.*
