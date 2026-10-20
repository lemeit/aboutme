+++
title = 'Proyecto integrador final: diseño y evaluación de una cervecería piloto'
date = 2026-10-20
weight = 5
proyecto = 'cerveceria-piloto'
proyecto_portada = true
draft = false
description = 'Recorrido del proyecto integrador: proceso y layout, balances de materia y energía, simulación, evaluación económica y encuadre ambiental.'
+++

El proyecto integrador final de Laboratorio de Industrias reúne el diseño del proceso, los balances, la simulación y la evaluación de una cervecería piloto. Cada parte aporta información a las demás: una decisión sobre volumen de producción cambia las necesidades de equipos, servicios, espacio e inversión.

## Recorrido de trabajo y materiales

| Parte del proyecto | Pregunta que responde | Material disponible |
|---|---|---|
| Proceso y distribución de la planta | ¿Qué operaciones se necesitan y cómo se ubican? | [Layout preliminar de la planta piloto]({{< ref "layout-planta-piloto" >}}). |
| Balance de materia | ¿Qué masas entran, se transforman y salen por lote? | [Guía y calculadora interactiva]({{< ref "balance-materia-interactivo" >}}), con planilla Excel y diagrama. |
| Balance de energía | ¿Cuánto calor y trabajo requieren las operaciones? | [De la calorimetría a Bernoulli]({{< ref "teoria-balance-energia" >}}). |
| Simulación del proceso | ¿Cómo se representan y contrastan los balances en los equipos? | [Secuencia de los balances y simulación en DWSIM]({{< ref "simulacion-dwsim-cerveza" >}}). |
| Evaluación económica | ¿Qué inversión y costos requiere el diseño y cómo se evalúan sus flujos de fondos? | Etapa del proyecto: la guía específica de VAN y TIR todavía no está incorporada a este apartado. |
| Encuadre ambiental | ¿Qué características del establecimiento determinan su encuadre y sus requisitos ambientales? | [Guía de encuadre ambiental y simulador de NCA]({{< ref "encuadre-ambiental-nca" >}}), con buscador de actividades ARBA. |

La simulación es una herramienta para revisar el diseño, no una parte desconectada de los balances. Del mismo modo, la evaluación económica y el encuadre ambiental pueden exigir volver sobre los equipos, los tratamientos, la localización y los costos.

## Una misma base de cálculo

Antes de comparar resultados, anotá el volumen de **producto terminado**, la densidad utilizada, el tamaño del lote y las pérdidas consideradas. La calculadora interactiva abre con **320 L finales**, mientras que la guía de DWSIM conserva su ejemplo de **600 L**. Son ejemplos distintos: para contrastarlos hay que igualar sus bases y sus supuestos.

La capacidad geométrica del fermentador no equivale al volumen final envasado. Tampoco una masa por lote equivale a un caudal: para cargar kg/h en una simulación se necesita la duración de la operación.

## Qué reunir para justificar el proyecto

- Un esquema del proceso y un layout con sus criterios de circulación y servicios.
- Los datos y las hipótesis del balance de materia, sus corrientes y el cierre por operación y global.
- Los balances de energía con unidades, condiciones y propiedades utilizadas.
- La comparación entre cálculo manual, herramienta interactiva y simulación, explicando las diferencias.
- El análisis de inversión, costos y flujos de fondos, con el origen de los valores usados.
- El encuadre ambiental y su respaldo: ubicación, equipos, corrientes, residuos y riesgos.

Estos puntos organizan el trabajo; no constituyen por sí solos una rúbrica de calificación. En todas las partes hay que distinguir **datos medidos, datos de fuentes y supuestos del modelo**.
