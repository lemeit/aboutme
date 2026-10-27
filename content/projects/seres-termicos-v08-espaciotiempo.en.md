+++
date = "2026-09-25"
aliases = ["/en/projects/seres-termicos/v08-espaciotiempo/"]
title = "Chapter 16 — The trace of time"
description = "A thermal field’s recent history represented as a volume."
weight = 0
lastmod = "2026-10-27"
draft = false
url = '/en/projects/simus/bestiario/v08-espaciotiempo/'
math = true
[build]
list = 'never'
+++

The thermal model remains two-dimensional, with $80\times60$ cells. A volume stores 64 historical slices: $\mathcal T(i,j,m)=\theta_{i,j}(n_m)$. The third axis is recorded time, not a third spatial direction for heat diffusion.

A circular buffer replaces older records when full. The history-speed control affects how cuts are recorded; it does not establish a calibrated time interval in seconds. Moving sources leave visible trajectories through this record. This is not a relativistic or four-dimensional physical simulation.

The reserve and birth rules retain the limitations of Counting individuals. The live table reads the current two-dimensional field and reports stored slices. Pause and manual advancement operate on the original animation; the rendered pixel combines several historical layers.

The full narrative, equations and controls are in Spanish.

[Open the complete chapter in Spanish](/projects/simus/bestiario/tiempo/) · [Back to the Bestiary](/en/projects/simus/bestiario/)

{{< sim src="/simus/seres-termicos/v08-espaciotiempo.html" title="The trace of time" >}}
