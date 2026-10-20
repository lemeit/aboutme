+++
title = 'Evaluación económica de la cervecería: guía de VAN, TIR y flujo de fondos'
date = 2026-10-20
weight = 7
proyecto = 'cerveceria-piloto'
proyecto_orden = 5
draft = false
description = 'Guía interactiva por etapas para construir la inversión, los costos y el flujo de fondos de la cervecería, calcular VAN y TIR y explorar la sensibilidad.'
+++

La evaluación económica forma parte del [proyecto integrador final]({{< ref "proyecto-integrador-final" >}}). Utiliza el diseño de la planta y los balances para estimar inversión, consumos, producción vendible y costos. El objetivo es justificar los datos antes de interpretar los indicadores.

## Abrir la herramienta

- [Abrir la guía y calculadora de evaluación económica](/simuladores/evaluacion-economica-cerveza/).
- [Descargar el HTML para trabajar sin conexión](/simuladores/evaluacion-economica-cerveza/index.html).

La guía abre en blanco. **Cargar ejemplo** utiliza importes y producción ficticios, independientes de la cervecería de 320 L: no son precios actuales ni un presupuesto del proyecto. Todos los valores son editables.

## Del proceso al flujo de fondos

| Etapa | Qué se construye |
|---|---|
| Criterio | Moneda y fecha base, horizonte, tasa real anual e hipótesis de cierre. |
| Inversión | Obra, equipos, montaje, contingencias y capital de trabajo inicial. |
| Operación | Capacidad anual vendible, utilización, precio y costos variables y fijos. |
| Proyección | Valores por año, depreciación, reinversiones y aumentos del capital de trabajo. |
| Resultados | VAN, TIR cuando corresponde, recupero simple y descontado, equilibrio operativo y sensibilidad. |
| Conclusión | Interpretación, fuentes, supuestos y decisiones que necesitan revisión. |

El modelo evalúa el proyecto **antes de financiación**, con flujos al cierre de cada año y moneda constante. La tasa de descuento debe ser real y coherente con esos flujos. El impuesto al resultado es una hipótesis simplificada editable; no determina obligaciones fiscales. La depreciación afecta ese impuesto, pero no es una salida de efectivo. El rescate se carga neto de gastos e impuestos y el capital de trabajo se recupera solo en la proporción que efectivamente se libera al cierre.

El VAN incluye el desembolso del año 0. La herramienta informa la TIR cuando el flujo tiene un único cambio de signo; si hay varios, evita presentar una raíz ambigua. El punto de equilibrio corresponde a la operación de caja y no incluye la recuperación de la inversión.

## Cómo usar los datos del proyecto

1. Partí del [layout de la planta]({{< ref "layout-planta-piloto" >}}) para presupuestar los equipos, instalaciones y servicios.
2. Tomá los consumos y las pérdidas del [balance de materia]({{< ref "balance-materia-interactivo" >}}). Dividí los costos del lote por los litros finales vendibles.
3. Considerá las demandas del [balance de energía]({{< ref "teoria-balance-energia" >}}) y revisá sus condiciones en la [simulación en DWSIM]({{< ref "simulacion-dwsim-cerveza" >}}).
4. Convertí lotes a producción anual con una cantidad de lotes justificada por los equipos y el ciclo. Si la base es 320 L finales por lote, capacidad anual = 320 L/lote × lotes/año; la utilización comercial se aplica después, evitando descontar las mermas dos veces.
5. Incluí en inversión y costos los tratamientos, servicios y requisitos identificados en el [encuadre ambiental]({{< ref "encuadre-ambiental-nca" >}}).
6. Registrá fecha y origen de los precios; compará escenarios sin confundir datos medidos, cotizaciones e hipótesis.

Las herramientas se relacionan mediante estos datos y criterios: no transfieren valores automáticamente entre páginas.

## Guardar y entregar

**Guardar datos JSON** conserva parámetros, proyección y notas de trabajo. **Cargar evaluación guardada (JSON)** retoma ese archivo; no abre Excel ni archivos de DWSIM. Los datos se procesan en el navegador y no se envían a un servidor. Cerrar la página sin guardar pierde los cambios.

**Descargar flujo CSV** permite abrir la tabla en una planilla de cálculo. **Imprimir / PDF** incluye todas las etapas de la guía. La herramienta contiene las explicaciones de las ecuaciones y referencias metodológicas para contrastar los resultados.
