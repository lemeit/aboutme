+++
title = "Thermal Beings"
description = "Literature, heat diffusion and exploratory simulations."
weight = 5
lastmod = '2026-10-26'
draft = false
+++

Read the complete [interactive narrative in Spanish](/projects/seres-termicos/), from the prologue to the advanced models. Technical file names remain available in its version map.





**Thermal Beings** explores a literary image through computational models: the thermal beings described by Jorge Luis Borges with Margarita Guerrero in *El libro de los seres imaginarios* (1957).

The project asks how patterns of heat and cold might suggest bodies, behaviour and a world of their own. These are exploratory mathematical models, not experimental evidence for living thermal organisms.

## Five lines of exploration

1. **The thermal field:** diffusion and localised sources, using Fourier's heat equation.
2. **Emergent patterns:** Gray–Scott and FitzHugh–Nagumo reaction–diffusion systems.
3. **Individuals:** entities with identity, position and a finite energy budget, including birth, reproduction rules and death.
4. **Articulated bodies:** internal thermal conduction, organ-like structures and movement in response to thermal conditions.
5. **The cosmos:** three-dimensional environments and representations of a field's history as a spacetime volume.

## Explore the simulations

- **[v06 — Life cycle](/en/projects/seres-termicos/v06-ciclovida/):** individual energy budgets in a two-dimensional thermal field.
- **[v07 — Spherical universe](/en/projects/seres-termicos/v07-3d/):** a three-dimensional field viewed from outside and from an individual's perspective.
- **[v08 — Spacetime](/en/projects/seres-termicos/v08-espaciotiempo/):** the recent history of a two-dimensional field becomes a three-dimensional volume.

The simulation controls are in Spanish. The English pages explain what to observe and link to the complete Spanish technical documentation.

## Models and numerical methods

Diffusion redistributes the scalar field; local sources, dissipation and behaviour rules determine each model's evolution. Explicit numerical integration requires an appropriate timestep: for the standard diffusion stencil on a uniform grid, the diffusion coefficient in timestep units must not exceed 1/4 in two dimensions or 1/6 in three dimensions.

Some models use signed fields to represent heat and cold visually. Their interpretation follows the assumptions of each simulation and should not be confused with an absolute-temperature scale.

## Development and attribution

The literary source is credited to Borges and Guerrero. Development of lines I–V involved Claude (Anthropic), with exploratory ChatGPT drafts; the articulated-body B1 model and integration involved GLM (Zhipu AI), through iteration and review by the author.

[Simulation repository](https://github.com/lemeit/simus) · [Simulation collection](https://lemeit.github.io/simus/) · [Design explorations](https://design.lemeit.ar/)

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/seres-termicos/).

