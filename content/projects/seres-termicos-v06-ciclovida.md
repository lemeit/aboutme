+++
title = 'v06 — Ciclo de vida'
date = '2026-09-25'
lastmod = '2026-09-25'
draft = false
math = true
url = '/projects/seres-termicos/v06-ciclovida/'
description = 'El ser como presupuesto energético: nace del vacío, metaboliza, se reproduce y muere. Campo térmico 2D con ciclo de vida completo y gráficas en tiempo real.'

[build]
list = 'never'
+++

> "un ciego y sordo e impalpable **conjunto** de calores y fríos articulados."
>
> — J. L. Borges (con M. Guerrero), *El libro de los seres imaginarios* (1957)

La palabra decisiva de la cita es *conjunto*: un conjunto se cuenta. Gray-Scott
produce texturas —manchas que se dividen pero que no tienen identidad—: no se puede
preguntar "¿cuántos seres hay ahora?". v06 introduce esa contabilidad. Cada ser es
un individuo con índice, posición y una cuenta regresiva firmada al nacer.

## La simulación

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="Seres Térmicos — v06, ciclo de vida" >}}

## Qué mirar

- **Nacimientos**: una fluctuación del vacío enciende un ser nuevo. No hay causa
  visible: la cosmogonía del texto es literal, el ser *empieza*.
- **El pulso**: cada ser late a su frecuencia propia $\omega_i$. Dos seres casi
  nunca comparten frecuencia: el conjunto late en cuasi-período, y el patrón global
  no se repite.
- **La muerte gradual**: el cuerpo no se apaga de un corte. El factor $E_i/E_0$   atenúa la gaussiana mientras la energía se drena, y $-\lambda T$ absorbe el
  calor residual: el vacío *digiere* al ser.
- **Las gráficas en tiempo real**: registran la vida del conjunto. La población
  sube en ráfagas de nacimientos y cae con las muertes; no hay equilibrio estable.
- **La extinción total es posible**: si en un tramo no hay nacimientos, la población
  puede llegar a cero. Vacío absoluto, $T=0$: algo que una textura de
  reacción-difusión nunca muestra. Hay ecología, con todo lo que implica.

## Física

### El campo

 $$\frac{\partial T}{\partial t} = \alpha \nabla^2 T \;-\; \lambda T \;+\; \sum_i S_i(x,y,t)$$ 
El vacío tiende a $T=0$ ($-\lambda T$); los seres son las únicas fuentes.

### El cuerpo: una gaussiana que se apaga

 $$S_i(\mathbf{r}, t) = \frac{E_i}{E_0} \cdot A \cdot \exp\!\left(-\frac{|\mathbf{r}-\mathbf{r}_i|^2}{2\sigma_i^2}\right) \cdot \bigl[1 + a\sin(\omega_i t + \phi_i)\bigr]$$ 
 $E_i/E_0$ apaga el cuerpo *mientras* el ser muere — el factor desciende con la
energía y la forma se desvanece sin discontinuidad.

### El metabolismo

 $$\frac{dE_i}{dt} = -\mu \qquad \Rightarrow \qquad t_{\text{vida}} = \frac{E_0}{\mu}$$ 
Existir tiene costo fijo y no hay recarga: cada ser nace con su tiempo de vida
firmado. Lo que pase en ese intervalo —acercarse a otro, dividirse— es lo único
que la existencia le deja variar.

### Las reglas del ciclo

| Evento | Condición |
|--------|-----------|
| Nacimiento | fluctuación aleatoria en el vacío ($p_{\text{birth}}$ por paso) |
| Reproducción | $E_i > r \cdot E_0$ → $E_i \to 0.6\,E_0$ + hijo con $0.4\,E_0$ |
| Muerte | $E_i \leq 0$ → el ser se elimina; $\lambda T$ disipa el resto |

### Integración

Euler explícito con el laplaciano de 5 puntos, $k \approx 0.04 \ll 1/4$ (condición de von Neumann en 2D): estabilidad con margen amplio.

---

→ [← volver al proyecto](/projects/seres-termicos/) · [v07 — Universo esférico](/projects/seres-termicos/v07-3d/)