+++
title = 'Balance de materia de la cerveza: guía y calculadora interactiva'
date = 2026-10-20
weight = 4
proyecto = 'cerveceria-piloto'
proyecto_orden = 2
draft = false
description = 'Balance de materia por lote con volumen editable, tres niveles de detalle, diagramas y planilla Excel; vinculado con la simulación en DWSIM.'
+++

Esta herramienta forma parte del [proyecto integrador final]({{< ref "proyecto-integrador-final" >}}). Permite seguir las corrientes de una cervecería, revisar el cierre del balance y preparar los datos que después se contrastan en la [guía de balances y simulación en DWSIM]({{< ref "simulacion-dwsim-cerveza" >}}).

## Abrir la herramienta

- [Abrir la guía y calculadora de balance de materia](/simuladores/balance-materia-cerveza/).
- [Descargar la planilla Excel con los tres niveles](/files/balance-materia-cerveza.xlsx).
- [Continuar con el proceso en DWSIM]({{< ref "simulacion-dwsim-cerveza" >}}).

La página funciona con datos locales del navegador. No hace falta cargar un archivo para comenzar. Los botones para guardar y cargar casos conservan los parámetros en un archivo JSON; no importan archivos de simulación de DWSIM.

## Tres niveles para un mismo problema

| Nivel | Qué permite analizar |
|---|---|
| Simple | Masa total de agua, malta, aditivos y levadura; CO₂ ingresado y bagazo estimado mediante una relación volumétrica. |
| Con fermentación | Azúcares recuperados, conversión, etanol y CO₂ calculados, conservando las cantidades de receta ingresadas. |
| Diseño completo | Materia prima y agua calculadas desde la composición del mosto, dosis de auxiliares, trub, bagazo húmedo y mermas sucesivas. |

El volumen inicial es **320 L de cerveza terminada**, pero puede modificarse. En los niveles de receta se puede elegir si se escalan las masas al cambiar ese volumen. Los modelos con fermentación permiten calcular la conversión para un objetivo alcohólico —por ejemplo, **0,5 % v/v**— o ingresar una conversión y estimar el alcohol resultante. No se utiliza un porcentaje fijo de conversión como rendimiento general.

Los niveles utilizan distintos supuestos: el bagazo por relación de volúmenes y el bagazo como sólido equivalente más agua retenida son alternativas de modelado. No corresponde combinar sus ecuaciones sin revisar la base.

## Cómo relacionarla con DWSIM

1. Definí la base de cálculo y justificá los datos de entrada.
2. Resolvé las corrientes y revisá el cierre del balance en la herramienta.
3. En la [guía de simulación]({{< ref "simulacion-dwsim-cerveza" >}}), identificá los equipos y las corrientes que representan esas operaciones.
4. Igualá volumen objetivo, composición, pérdidas y duración de las operaciones antes de comparar resultados.
5. Explicá cualquier diferencia por los límites del sistema y los modelos utilizados.

La guía de DWSIM conserva su ejemplo de 600 L. Cambiar el volumen de la calculadora no vuelve automáticamente equivalentes ambos modelos. La capacidad del tanque, la carga al fermentador y el volumen final envasado deben distinguirse.

Si el agua se despeja de la ecuación, el cierre es algebraico: **no verifica un ensayo**. Para una comprobación experimental se necesitan entradas y salidas medidas de forma independiente. Las densidades y cantidades precargadas son datos didácticos editables, no mediciones verificadas de la planta.

Para continuar con las necesidades térmicas y mecánicas del proceso, consultá el [marco teórico del balance de energía]({{< ref "teoria-balance-energia" >}}).

Las operaciones y corrientes también deben corresponderse con el [layout de la planta piloto]({{< ref "layout-planta-piloto" >}}). Para revisar sus implicancias ambientales y las de los servicios auxiliares, continuá con el [encuadre ambiental y el simulador de NCA]({{< ref "encuadre-ambiental-nca" >}}).
