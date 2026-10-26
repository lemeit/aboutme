+++
title = "Act XI — Counting individuals"
description = "Individual energy budgets, births and deaths in a thermal field."
weight = 0
lastmod = '2026-10-25'
draft = false
url = '/en/projects/seres-termicos/v06-ciclovida/'
math = true
[build]
list = 'never'
+++

This simulation belongs to the **Individuals** line of [Thermal Beings](/en/projects/seres-termicos/). Unlike a reaction–diffusion texture, each being has an identity, a position and a finite energy budget.

## Simulation

Controls are in Spanish.

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="Thermal Beings — v06, life cycle" >}}

## What to observe

- Random fluctuations introduce new individuals.
- Each individual pulses at its own frequency.
- Its source amplitude falls with its remaining energy, so its body fades gradually.
- Live plots track births, deaths and population changes; extinction is possible.

## Model

The field follows diffusion, linear dissipation and the sum of individual sources:

$$\frac{\partial T}{\partial t}=\alpha\nabla^2T-\lambda T+\sum_i S_i.$$

Each source has a Gaussian spatial profile, modulated by its remaining energy and an oscillation. Energy decreases at a constant rate, $dE_i/dt=-\mu$, giving an unperturbed lifetime $E_0/\mu$. Births are stochastic; reproduction follows the model's energy threshold and allocation rules. Individuals are removed when their energy reaches zero.

Explicit Euler integration uses a five-point Laplacian and a timestep within the two-dimensional diffusion stability limit.

[Back to the project](/en/projects/seres-termicos/) · [Next: spherical universe](/en/projects/seres-termicos/v07-3d/)

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/seres-termicos/v06-ciclovida/).

