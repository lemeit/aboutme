+++
date = "2026-09-25"
aliases = ["/en/projects/seres-termicos/v07-3d/"]
title = "Chapter 15 — The world that contains them"
description = "A three-dimensional thermal field with external and internal viewpoints."
weight = 0
lastmod = "2026-10-27"
draft = false
url = '/en/projects/simus/bestiario/v07-3d/'
math = true
[build]
list = 'never'
+++

The numerical field uses a rectangular $64\times48\times32$ grid and a six-neighbour diffusion update. Sources are added before $\theta^{n+1}=\theta^n+0.10\alpha L_3\theta^n-\lambda\theta^n$; boundary faces copy adjacent interior cells.

The spherical confinement of the agents and the spherical shape used in rendering do not turn that rectangular solver into diffusion on a spherical domain. Reflection reverses the normal velocity component: $\mathbf v'=\mathbf v-2(\mathbf v\cdot\mathbf n)\mathbf n$.

The external and internal cameras show the same model from different positions. Ray marching combines several depths in each pixel, so brightness is not a direct reading of a single voxel. The live table reads actual field values by grid indices; pause and manual advancement allow comparison. A frame may contain several numerical steps.

The full narrative, equations and controls are in Spanish.

[Open the complete chapter in Spanish](/projects/simus/bestiario/universo/) · [Back to the Bestiary](/en/projects/simus/bestiario/)

{{< sim src="/simus/seres-termicos/v07-3d.html" title="The world that contains them" >}}
