+++
title = "ΣIM · Simulación de procesos"
description = "Simulador educativo de procesos con interfaz web en español y motor DWSIM."
summary = "Simulador educativo de procesos con interfaz web en español y motor DWSIM."
date = "2026-11-12"
lastmod = "2026-11-12"
weight = 18
draft = false
+++

<img src="/images/logos/sim.svg" alt="ΣIM · Simulación de procesos" width="280">

[**Abrir ΣIM**](https://sim.lemeit.ar/) · [Ejemplos](https://sim.lemeit.ar/ejemplos.html) · [Documentación](https://wiki.lemeit.ar/sim/)

ΣIM es un simulador de procesos con fines pedagógicos. Permite conectar equipos y corrientes, definir condiciones y estudiar balances de materia y energía mediante el motor DWSIM. Es un proyecto en desarrollo; su interfaz web no reproduce todas las funciones del editor de DWSIM.

## Qué permite explorar

- Corrientes de materia y energía, mezcladores, divisores, calentadores y enfriadores.
- Mezclas multicomponente y selección de modelos de propiedades físicas.
- Reactores de conversión y equilibrio dentro del alcance documentado.
- Ejemplos guiados, condiciones de entrada y resultados calculados para comparar.

## Cómo funciona

El navegador presenta el diagrama y los resultados; el cálculo lo realiza un motor DWSIM externo. Se conserva la selección manual de motores Windows o Debian. Para obtener resultados se necesita un motor disponible: abrir el editor o consultar su catálogo no equivale a ejecutar una simulación.

El alcance actual es de régimen estacionario, sin recirculaciones. Los ejemplos son resultados de modelos calculados, no mediciones experimentales ni una validación física independiente.

## Identidad y otros proyectos

La marca propia es **ΣIM** —sigma griega mayúscula, I y M latinas— y su bajada es «Simulación de procesos». El dominio y el repositorio conservan `sim`. La portada de Lemeit lo representa con un croquis de equipos y corrientes; ese dibujo no es un flowsheet validado.

Es un proyecto distinto de [Bestiario · Seres Térmicos](/projects/simus/bestiario/), el relato interactivo de modelos físicos.

## Enlaces

- [Simulador](https://sim.lemeit.ar/).
- [Ejemplos y guía de casos](https://sim.lemeit.ar/ejemplos.html).
- [Catálogo de objetos](https://sim.lemeit.ar/catalogo.html).
- [Wiki](https://wiki.lemeit.ar/sim/).
- [Código y documentación técnica](https://github.com/lemeit/lemeit-sim).

ΣIM utiliza DWSIM y conserva las atribuciones y licencias de sus componentes. El repositorio declara GPL-3.0-or-later; las condiciones completas están en su archivo LICENSE.
