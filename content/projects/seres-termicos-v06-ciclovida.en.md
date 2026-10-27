+++
date = "2026-09-25"
aliases = ["/en/projects/seres-termicos/v06-ciclovida/"]
title = "Chapter 13 — Counting individuals"
description = "Individual energy budgets, births and deaths in a thermal field."
weight = 0
lastmod = "2026-10-27"
draft = false
url = '/en/projects/simus/bestiario/v06-ciclovida/'
math = true
[build]
list = 'never'
+++

Each agent has an identity, position and finite reserve. The actual discrete update is $E_i^{n+1}=E_i^n-0.15\mu$: the decrement is per model step, not per calibrated second. For fixed controls, an initial reserve $E_b$ is exhausted after $\lceil E_b/(0.15\mu)\rceil$ steps.

Sources leave Gaussian footprints in a two-dimensional field; their amplitude depends on $E_i/E_{0,i}$. The deposited heat is not an exact energy transfer deducted from the reserve. External stochastic births are prescribed. With a fixed initial reserve and a reproduction threshold above it, individuals that only lose energy cannot reach that threshold: births should not be presented as emergent reproduction.

The chapter now includes equations, a worked example and live tables with pause and manual advancement. A manual advance runs one original animation frame, which contains two model steps.

The full narrative, equations and controls are in Spanish.

[Open the complete chapter in Spanish](/projects/simus/bestiario/individuos/) · [Back to the Bestiary](/en/projects/simus/bestiario/)

{{< sim src="/simus/seres-termicos/v06-ciclovida.html" title="Counting individuals" >}}
