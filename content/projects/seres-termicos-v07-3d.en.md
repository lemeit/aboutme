+++
title = "v07 — Spherical universe"
description = "A three-dimensional thermal field with external and internal viewpoints."
weight = 0
lastmod = '2026-10-25'
draft = false
url = '/en/projects/seres-termicos/v07-3d/'
math = true
[build]
list = 'never'
+++

This simulation belongs to the **Cosmos** line of [Thermal Beings](/en/projects/seres-termicos/). A spherical domain replaces the rectangular grids of earlier versions.

## Simulation

Controls are in Spanish. Drag to orbit the external camera; **Tab** selects the next individual for the internal view.

{{< sim src="/simus/seres-termicos/v07-3d.html" title="Thermal Beings — v07, spherical universe" >}}

## Two perspectives

The external view shows the field as a luminous volume, with warm and cool colours and a glowing rim. The internal inset shows the same environment from an individual's position: other beings appear as luminous masses and the boundary as a diffuse horizon.

## Model and rendering

A seven-point Laplacian integrates diffusion on a three-dimensional grid. For uniform spacing, the explicit diffusion coefficient must satisfy:

$$\frac{\alpha\Delta t}{\Delta x^2}\leq\frac16.$$

The CPU updates the field, which is uploaded as a 3D texture for WebGL2 rendering. Volume ray marching accumulates emission and opacity along each viewing ray. Values near zero are transparent; positive and negative values use different colour ranges.

Individuals reflect at the spherical boundary. The boundary and field rules define an idealised computational world, rather than a model of a physical plasma.

[Back to the project](/en/projects/seres-termicos/) · [Next: spacetime](/en/projects/seres-termicos/v08-espaciotiempo/)

---

This English overview presents the project’s purpose and main features. [Read the full project documentation in Spanish](/projects/seres-termicos/v07-3d/).

