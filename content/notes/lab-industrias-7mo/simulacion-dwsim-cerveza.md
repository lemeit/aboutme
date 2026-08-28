+++
title = 'Simulación de una planta piloto de cerveza en DWSIM'
date = 2026-08-28
weight = 1
draft = false
description = 'Balance de materia y energía aplicado a una cervecería piloto — construcción paso a paso en el simulador de procesos abierto DWSIM.'
+++

# Simulación de una planta piloto de cerveza en DWSIM

### Trabajo práctico — Balance de materia y energía

Vas a construir, paso a paso y en DWSIM (un simulador de procesos gratuito y de código abierto), el balance de materia y energía de una planta piloto de elaboración de cerveza. Arrancamos por la teoría, seguimos instalando el programa, y terminamos con tu primer equipo simulado y verificado a mano.

## Índice

1. [Objetivos](#objetivos)
2. [Marco teórico: balance de materia y energía](#1-marco-teórico-balance-de-materia-y-energía)
3. [El proceso que vas a simular](#2-el-proceso-que-vas-a-simular)
4. [Balance de materia del proceso](#3-balance-de-materia-del-proceso)
5. [Instalar DWSIM](#4-instalar-dwsim)
6. [Primer equipo: la bomba, paso a paso](#5-primer-equipo-la-bomba-paso-a-paso)
7. [Mapa de equipos: cómo seguir armando la planta](#6-mapa-de-equipos-cómo-seguir-armando-la-planta)
8. [Cómo avanzar con el resto del TP](#7-cómo-avanzar-con-el-resto-del-tp)
9. [Qué entregar](#8-qué-entregar)

## Objetivos

- Aplicar el balance de materia y de energía a un proceso real, no a un ejercicio abstracto.
- Instalar y manejar un simulador de procesos de código abierto (DWSIM).
- Construir un flowsheet equipo por equipo, empezando por una bomba.
- Verificar a mano los resultados que entrega el simulador, para entender qué hay detrás de cada número.

## 1. Marco teórico: balance de materia y energía

Antes de tocar el simulador, repasá los dos principios que vas a aplicar en cada equipo que agregues al flowsheet.

### Balance de materia

Para cualquier volumen de control —un equipo puntual, o toda la planta— la materia que se acumula en un intervalo de tiempo es igual a la que entra menos la que sale, más lo que se genera menos lo que se consume por reacción química:

$$ \frac{dm}{dt} = \sum \dot m_{entra} - \sum \dot m_{sale} + \sum r_i V $$

En estado estacionario —o en cualquier equipo sin reacción ni acumulación— el término de acumulación es cero:

$$ \sum \dot m_{entra} = \sum \dot m_{sale} $$

Esto vale para el caudal total y para cada componente por separado (agua, azúcares, etanol, CO₂...), salvo que haya reacción química: ahí el balance por componente suma el término de generación o consumo.

### Balance de energía

Es la primera ley de la termodinámica aplicada a un sistema abierto en estado estacionario: el calor que entra menos el trabajo que sale es igual al cambio de entalpía entre la salida y la entrada (la energía cinética y potencial son despreciables frente a la entalpía en equipos de proceso):

$$ \dot Q - \dot W_s = \sum \dot m_{sale}\, h_{sale} - \sum \dot m_{entra}\, h_{entra} = \Delta \dot H $$

Cada equipo aplica una versión simplificada de esta ecuación:

| Equipo | Q̇ | Ẇₛ | Se reduce a |
|---|---|---|---|
| Bomba | 0 (adiabática) | ≠ 0 (trabajo de eje) | ΔH = −Ẇₛ |
| Calentador / enfriador | ≠ 0 | 0 | ΔH = Q̇ |
| Reactor (fermentador) | ≠ 0 (calor de reacción) | 0 | ΔH = Q̇ + calor de reacción |

La bomba de este TP es el primer caso: adiabática, sin intercambio de calor, donde todo el trabajo mecánico que le entregás al fluido se convierte en entalpía (presión + un poco de temperatura).

## 2. El proceso que vas a simular

Planta piloto de elaboración de cerveza, en dos etapas —proceso en caliente y proceso en frío—:

1. **Maceración / gelatinización** — H₂O + malta a 90 °C (30–60 min), enfriar a 65 °C y agregar enzimas (pH 5.2–5.6)
2. **Bomba 1** — trasiego al tanque de sacarificación
3. **Sacarificación + aditivos** — cáscara de arroz como ayuda filtrante · salida: sedimentos
4. **Filtro** — separa el mosto del bagazo · salida: bagazo 1
5. **Hervor + lúpulo** — hervir el mosto 60 min, agregar lúpulo y clarificante · salida: vapor
6. **Bomba 2 + sedimentador (whirlpool)** — separa el trub coagulado · salida: bagazo 2
7. **Fermentador** — se inocula la levadura (kg H₂O + kg lev.), T y pH controlados · salida: CO₂
8. **Pasteurizado** — mantener 78–85 °C
9. **Envasado** — producto terminado

Los datos de cada corriente de entrada —en kg, por lote— son los que vas a cargar en DWSIM a medida que armes cada equipo.

## 3. Balance de materia del proceso

Balance de caja negra alrededor de toda la planta: para un lote, sin acumulación,

$$ \sum_i m_{i,\,entra} = \sum_j m_{j,\,sale} $$

**Entradas conocidas**

| Corriente | Cantidad |
|---|---|
| Agua (maceración) | 475 kg |
| Malta | 162,5 kg |
| Enzimas | 0,163 kg |
| Levadura + agua de inóculo | a cargar |
| Lúpulo | a cargar |
| Agente clarificante | a cargar |

**Salidas — las calculás con DWSIM**

Bagazo 1 (filtro) · Vapor (hervor) · Sedimentos / bagazo 2 · CO₂ (fermentación) · Levadura extraída · Cerveza (producto)

Con agua + malta ya sumás **637,5 kg** de entrada conocida. Los rendimientos de cada equipo (cuánto sólido se va con el bagazo, cuánta agua se evapora en el hervor, cuánto CO₂ libera la fermentación) son las incógnitas que vas a ir cerrando a medida que agregues equipos al flowsheet.

La composición interna de los 162,5 kg de malta sale de escalar una base de referencia de 20 L por un factor ×32,5:

| Componente | Base 20 L | Escalado (×32,5) |
|---|---|---|
| A | 4,5 kg | 146,25 kg |
| B | 0,25 kg | 8,125 kg |
| C | 0,25 kg | 8,125 kg |
| **Total** | **≈ 5,0 kg** | **162,5 kg** |

$$ m_{malta} = f \cdot m_{20L} = 32.5 \times 5.0\ kg = 162.5\ kg $$

## 4. Instalar DWSIM

DWSIM es un simulador de procesos de código abierto: no pide licencia, cuenta ni pago, y corre en Windows, Linux y Mac.

1. Descargalo de **dwsim.org** (sección Downloads) y elegí el instalador de tu sistema operativo.
2. Instalalo con las opciones por defecto — no requiere activación ni registro.
3. Abrilo: vas a ver una pantalla de inicio con la opción de crear una simulación nueva.

## 5. Primer equipo: la bomba, paso a paso

Con esto solo ya tenés una simulación completa y verificable —balance de materia y de energía incluidos— antes de tocar una sola pieza más del proceso.

1. **Simulación nueva, con agua como único componente.** Elegí `New Steady-State Simulation` (o `File > New Chemical Process Model`). En *Compounds*, buscá `Water` y tildá *Added*; `Next`. En *Property Packages* elegí `Steam Tables (IAPWS-IF97)`. Dejá el resto por defecto y `Finish`.
2. **Poné dos corrientes y la bomba en el lienzo.** Del *Object Palette* arrastrá dos `Material Stream` —entrada y salida— y un `Pump` entre ambas. Renombralos: `H2O-in`, `Bomba-1`, `H2O-out`.
3. **Conectá las corrientes a la bomba.** Doble clic en la bomba → pestaña de conexiones → elegí `H2O-in` en *Inlet* y `H2O-out` en *Outlet*. (Alternativa: clic derecho en la corriente → *Connect to* → la bomba.)
4. **Cargá la corriente de entrada.** Doble clic en `H2O-in`: Temperatura 20 °C, Presión 1 atm, Caudal másico 475 kg, Composición Water = 1.
5. **Configurá la bomba.** Doble clic en `Bomba-1`. En *Calculation Mode* elegí `Outlet Pressure` (fijás la presión de salida) o `Pressure Increase` (fijás el ΔP directo). Completá `Efficiency` con 70–75 %. Dejá vacíos `Head`, `Power` y las curvas de performance.
6. **Resolvé y leé el resultado.** Activá `Flowsheet Calculator Active (F6)` y `Solve`. En `H2O-out` → *Results*: el caudal másico es idéntico al de entrada (balance de materia); la temperatura sube unas décimas de grado (balance de energía). En la bomba, *Results* también muestra la potencia consumida (`Power`, kW).

Antes de correr la simulación, calculá a mano el trabajo real y el ΔT esperados con las fórmulas de la sección siguiente.

### Qué calcula DWSIM por dentro

No es una caja negra: esto es lo que hace el bloque `Pump` al apretar `Solve`, tomado del código fuente (`Pump.vb`, repositorio de DWSIM).

1. Flash de la corriente de entrada: `Steam Tables (IAPWS-IF97)` devuelve ρ_liq y H₁ a partir de T₁, P₁ y la composición.
2. Trabajo mecánico ideal (líquido ~incompresible), corregido por eficiencia:

$$ H_2 = H_1 + \frac{P_2 - P_1}{\rho_{liq}\,\eta} $$

3. Flash presión–entalpía: con (P₂, H₂) conocidos, un flash `PressureEnthalpy` entrega el estado real de salida (T₂, ρ₂, fase).
4. Potencia consumida, vía la altura manométrica:

$$ Head = \frac{P_2-P_1}{\rho_{liq}\,g} \qquad Power = \frac{\dot m\,g\,Head}{\eta} $$

5. NPSH disponible (flash de punto de burbuja a T₁ para hallar la presión de vapor):

$$ NPSH = \frac{P_1-P_{burbuja}}{\rho_{liq}\,g} $$

6. Balance de materia, componente a componente, sin pérdida ni reacción:

$$ \dot m_{out} = \dot m_{in} \qquad w_{i,out} = w_{i,in} $$

La temperatura de salida no es un supuesto genérico: sale de una función de entalpía real del agua vía el paquete de propiedades. Y el balance de materia es literal, porque una bomba no separa fases ni reacciona.

**Ejemplo numérico** (ΔP = 100 000 Pa, η = 72 %, ρ ≈ 998 kg/m³, Cₚ ≈ 4,186 kJ/kg·K, ṁ = 0,5 kg/s):

$$ w_{ideal} = \frac{\Delta P}{\rho} = \frac{100\,000}{998} = 0.100\ kJ/kg $$

$$ w_{real} = \frac{w_{ideal}}{\eta} = \frac{0.100}{0.72} = 0.139\ kJ/kg $$

$$ \Delta T = \frac{w_{real}-w_{ideal}}{C_p} = \frac{0.139-0.100}{4.186} \approx 0.009\ °C $$

$$ Power = \dot m\,w_{real} \approx 0.5 \times 0.139 = 0.070\ kW = 70\ W $$

Es el mismo número que va a aparecer en *Results* de DWSIM: un ΔT casi imperceptible, porque calentar agua de verdad con una bomba requiere muchísima más presión de la que maneja un equipo piloto.

## 6. Mapa de equipos: cómo seguir armando la planta

| En el diagrama | Bloque en DWSIM | Primer dato a cargar |
|---|---|---|
| Maceración / gelatinización | Heater + Mixer (o CSTR) | T = 90 °C, luego 65 °C; composición malta+agua |
| Bomba 1 / Bomba 2 | `Pump` | Caudal o ΔP de salida, eficiencia ~70–75 % |
| Sacarificación + aditivos | `CSTR` con reacción de conversión | Almidón → azúcares fermentables, 60 min |
| Filtro (bagazo) | `Solids Separator` | % de sólidos como bagazo vs. mosto clarificado |
| Hervor + lúpulo | `Heater` / `Cooler` | T ebullición, 60 min, pérdida por vapor |
| Sedimentador (whirlpool) | `Solids Separator` | Eficiencia de remoción del trub |
| Fermentador | `CSTR` o `Batch Reactor` con cinética | Azúcar → etanol + CO₂ + biomasa; T 8–15 °C; 5–7 días |
| Pasteurizador | `Heater` / `Heat Exchanger` | Mantener 78–85 °C |

## 7. Cómo avanzar con el resto del TP

**Etapa 1 — Separadores sólido-líquido.** Con la bomba lista, seguí con el filtro y el sedimentador como `Solids Separator`. Acá aparece el concepto de eficiencia de separación y corriente de purga.

**Etapa 2 — Reactor de fermentación.** `CSTR` con la reacción azúcar → etanol + CO₂. Es la entrada natural a la cinética (Monod), sin necesidad de resolverla con precisión industrial todavía.

**Etapa 3 — Balance de energía del resto de la planta.** `Heater`/`Cooler` en maceración, hervor y pasteurizado: calor sensible, calor de reacción exotérmico de la fermentación, pérdidas por vapor.

**Etapa 4 — Comparar variantes.** Con la planta completa, corré el mismo flowsheet cambiando la temperatura de fermentación o la concentración de sustrato, y compará el rendimiento entre variantes.

## 8. Qué entregar

- El archivo de simulación de DWSIM con la bomba resuelta.
- El cálculo manual de verificación (trabajo real, ΔT, potencia) comparado contra el resultado del simulador.
- Una conclusión breve sobre las diferencias entre el cálculo manual y el de DWSIM, si las hay.

## Fuentes

- DWSIM – Open-Source Chemical Process Simulator — https://dwsim.org/
- DWSIM — Your First Simulation (tutorial oficial) — https://dwsim.org/tutorials/en/beginner/01-your-first-simulation.html
- DWSIM — Mixer Basics — https://dwsim.org/tutorials/en/beginner/02-mixer-basics.html
- DWSIM — Pump Class (API help) — https://dwsim.org/api_help/html/T_DWSIM_UnitOperations_UnitOperations_Pump.htm
- DWSIM — código fuente de Pump.vb — https://github.com/DanWBR/dwsim/blob/windows/DWSIM.UnitOperations/UnitOperations/Pump.vb
- DWSIM — Unit Operation and Stream Models — https://dwsim.org/docs/crossplatform/help/unitops.htm
- FOSSEE — Manual de operaciones unitarias en DWSIM — https://static.fossee.in/dwsim/manuals/Unit-Operations-DWSIM.pdf
