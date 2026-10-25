+++
title = "v08 — Spacetime"
description = "A thermal field’s recent history represented as a volume."
weight = 0
lastmod = '2026-10-25'
draft = false
url = '/en/projects/seres-termicos/v08-espaciotiempo/'
math = true
[build]
list = 'never'
+++

This simulation belongs to the **Cosmos** line of [Thermal Beings](/en/projects/seres-termicos/). Rather than watching a two-dimensional field evolve only in the present, it stacks recent frames along a third axis representing time.

## Simulation

Controls are in Spanish. **Space** pauses accumulation so the volume can be inspected.

{{< sim src="/simus/seres-termicos/v08-espaciotiempo.html" title="Thermal Beings — v08, spacetime" >}}

## What to observe

An individual's history forms a **worldtube**. Birth marks its beginning and death its end. A stationary individual produces a vertical tube; motion produces a slanted or curved one. Changing energy changes its diameter, and reproduction creates a branch.

## Model

The displayed volume is a sequence of samples of the two-dimensional field:

$$\mathcal{T}(x,y,\tau)=T(x,y,t_0+\tau\Delta t).$$

A circular buffer retains recent frames, replacing the oldest as new ones arrive. The third axis is a record of time, not an additional physical spatial dimension. The underlying simulation and the historical volume are two views of the same process.

This differs from retaining traces through weak diffusion: here, memory is stored explicitly in a buffer. The literary framing also draws on the image of lives extended through time in Kurt Vonnegut's *Slaughterhouse-Five* (1969).

[Back to the project](/en/projects/seres-termicos/) · [Spherical universe](/en/projects/seres-termicos/v07-3d/)

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/seres-termicos/v08-espaciotiempo/).

