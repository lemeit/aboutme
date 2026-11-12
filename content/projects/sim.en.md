+++
title = "ΣIM · Process simulation"
description = "Educational process simulator with a Spanish-language web interface and the DWSIM engine."
summary = "Educational process simulator with a Spanish-language web interface and the DWSIM engine."
date = "2026-11-12"
lastmod = "2026-11-12"
weight = 18
draft = false
+++

<img src="/images/logos/sim.svg" alt="ΣIM · Simulación de procesos" width="280">

[**Open ΣIM**](https://sim.lemeit.ar/) · [Examples](https://sim.lemeit.ar/ejemplos.html) · [Documentation](https://wiki.lemeit.ar/en/sim/)

ΣIM is an educational process simulator. It connects equipment and streams, defines operating conditions and explores mass and energy balances using DWSIM. It is under development and does not reproduce the full DWSIM desktop editor.

## Scope

Material and energy streams, mixers, splitters, heaters, coolers, multicomponent mixtures, and conversion or equilibrium reactors within the documented limits. Guided cases show model inputs and calculated results.

The browser displays the flowsheet and results; an external DWSIM engine performs calculations. Windows or Debian engines are selected manually. A reachable engine is needed to calculate: opening the editor or browsing its catalogue does not mean a simulation has run.

The current scope is steady-state operation without recycle loops. Examples are calculated model results, not experimental measurements or independent physical validation. The application interface and case guides are in Spanish.

## Identity and links

The name is **ΣIM**: Greek capital sigma followed by Latin I and M. Its subtitle is «Simulación de procesos». It is separate from [Bestiary · Thermal Beings](/en/projects/simus/bestiario/).

- [Simulator](https://sim.lemeit.ar/).
- [Guided cases](https://sim.lemeit.ar/ejemplos.html).
- [Object catalogue](https://sim.lemeit.ar/catalogo.html).
- [Wiki](https://wiki.lemeit.ar/en/sim/).
- [Source and technical documentation](https://github.com/lemeit/lemeit-sim).

ΣIM uses DWSIM and retains component attribution and licensing. The repository declares GPL-3.0-or-later; see its LICENSE for the full terms.
