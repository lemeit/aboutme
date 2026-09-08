+++
title = 'Simulación de una planta piloto de cerveza en DWSIM'
date = 2026-09-06
weight = 2
draft = false
math = true
pdf = true
description = 'Balance de materia y energía aplicado a una cervecería piloto — construcción paso a paso en el simulador de procesos abierto DWSIM.'
+++

Vas a construir, paso a paso y en DWSIM (un simulador de procesos gratuito y de código abierto), el balance de materia y energía de una planta piloto de elaboración de cerveza — el proyecto final de la materia: una cerveza **sin TACC y sin alcohol** (≤0,5 % v/v). Si todavía no viste el [marco teórico]({{< ref "teoria-balance-energia" >}}) (balance de energía, Bernoulli, NPSH), es el paso previo a esta guía — acá ya lo vas a estar aplicando directamente.

<div class="no-print">

📊 **[Abrir planilla en Google Sheets — hacé tu copia](https://docs.google.com/spreadsheets/d/1_ItL1nn0kCZN63zf5AfpR7oCiFvLgLZl/copy)** · 📥 **[Descargar (.xlsx)](https://profe.lemeit.ar/files/planilla-balance-cerveceria-dwsim.xlsx)** — balance de materia y verificación manual · 📄 **[Descargar en PDF (formato paper)](https://profe.lemeit.ar/files/pdf/simulacion-dwsim-cerveza.pdf)**

</div>

## Objetivos

- Aplicar el balance de materia y de energía a un proceso real, no a un ejercicio abstracto.
- Instalar y manejar un simulador de procesos de código abierto (DWSIM).
- Construir, de punta a punta, el flowsheet completo del proceso: mezcladores, bombas, hervor, separación de vapor, intercambiador de calor y fermentador.
- Diseñar, con datos concretos, una cerveza sin TACC y con ≤0,5 % v/v de alcohol para un lote de 600 L — el volumen de tu fermentador.
- Verificar a mano los resultados que entrega el simulador, para entender qué hay detrás de cada número.

## 1. El proceso que vas a simular

Planta piloto de elaboración de cerveza, en dos etapas —proceso en caliente y proceso en frío—, con maceración enzimática, filtrado, hervor con lúpulo, clarificación, fermentación con levadura y pasteurizado:

1. **Maceración / gelatinización** — H₂O + malta a 90 °C (30–60 min), enfriar a 65 °C y agregar enzimas (pH 5.2–5.6)
2. **Bomba 1** — trasiego al tanque de sacarificación
3. **Sacarificación + aditivos** — cáscara de arroz como ayuda filtrante · salida: sedimentos
4. **Filtro** — separa el mosto del bagazo · salida: bagazo 1
5. **Hervor + lúpulo** — hervir el mosto 60 min, agregar lúpulo y clarificante · salida: vapor
6. **Enfriador de mosto** (no está numerado en tu diagrama original, pero hace falta: bajar de ~100 °C a 20 °C antes de inocular la levadura)
7. **Bomba 2 + sedimentador (whirlpool)** — separa el trub coagulado · salida: bagazo 2
8. **Fermentador** — se inocula la levadura, T y pH controlados, conversión de azúcar acotada para quedar sin alcohol · salida: CO₂
9. **Pasteurizado** — mantener 78–85 °C
10. **Envasado** — producto terminado

Los datos de cada corriente de entrada —en kg, por lote— son los que vas a cargar en DWSIM a medida que armes cada equipo.

## 2. Balance de materia del proceso

Planteá el balance de materia como una caja negra alrededor de toda la planta: para un lote, sin acumulación,

$$ \sum_i m_{i,\,entra} = \sum_j m_{j,\,sale} $$

**El punto de partida ya no es una receta de laboratorio escalada — es el fermentador.** Vas a usar un fermentador de **600 L**, y ese dato de equipo (elegido pensando en el resto de la planta y en el cálculo de costos del proyecto) es lo que fija todos los demás números del balance, calculando hacia atrás. Así el balance cierra de punta a punta por construcción, no por casualidad — a diferencia de escalar una receta chica y ajustar después.

**Paso 1 — Concentración de azúcar en el mosto.** Para un mosto de fuerza moderada (una cerveza de mesa, sin necesidad de ser fuerte porque de entrada la vas a fermentar poco), usá ≈10 % de azúcares fermentables en masa sobre el mosto frío:

$$ m_{azúcar} = 0.10 \times V_{fermentador} \times \rho_{mosto} \approx 0.10 \times 600\ L \times 1.00\ kg/L = 60.0\ kg $$

**Paso 2 — Split maltosa/glucosa.** La hidrólisis del almidón durante la maceración deja los azúcares en una proporción fija (Córdova, ESPOCH, 2021, cerveza artesanal de quinua — la misma tesis que valida el resto de esta sección): 83 % maltosa, 17 % glucosa.

$$ m_{maltosa} = 0.83 \times 60.0 = 49.8\ kg \qquad m_{glucosa} = 0.17 \times 60.0 = 10.2\ kg $$

**Paso 3 — Malta necesaria.** La misma tesis reporta que solo ≈58 % de la malta es almidón extraíble (el resto —proteínas, cáscara, dextrinas— no se convierte en azúcar fermentable y se retira como bagazo antes del hervor):

$$ m_{malta} = \frac{m_{azúcar}}{0.58} = \frac{60.0}{0.58} \approx 103.4\ kg $$

**Paso 4 — Agua de maceración.** Con la relación estándar de 3 L de agua por kg de malta:

$$ m_{agua,\,macerado} = 3 \times m_{malta} = 3 \times 103.4 \approx 310.2\ kg $$

**Paso 5 — Agua de relleno antes del hervor.** El mosto recién macerado (agua de macerado + azúcares) todavía no tiene el volumen que necesita el hervor: hace falta agua extra, que además compensa la que se va a perder como vapor durante la hora de hervor (≈10 % del agua total, mismo supuesto que la tesis). Para llegar a los 600 kg de agua que van a quedar después de esa evaporación:

$$ m_{agua,\,total} = \frac{540.0}{0.90} \approx 600.0\ kg \qquad m_{agua,\,hervido} = 600.0 - 310.2 = 289.8\ kg $$

**Entradas conocidas**

| Corriente | Cantidad |
|---|---|
| Agua de macerado | 310,2 kg |
| Agua de hervido (relleno) | 289,8 kg |
| Malta (sin TACC) | 103,4 kg |
| Enzimas | ≈ 0,10 kg |
| Levadura + agua de inóculo | a cargar |
| Lúpulo | a cargar |
| Agente clarificante | a cargar |

**Salidas — las calculás con DWSIM**: bagazo (filtro, antes del hervor) · vapor (hervor, ≈60,0 kg) · sedimentos/trub (whirlpool) · CO₂ (fermentación) · levadura extraída · cerveza (producto, 600 L).

Con agua + malta ya sumás **703,4 kg** de entrada conocida. Los rendimientos de cada equipo que todavía no simulaste (cuánto sólido se va con el bagazo, cuánto CO₂ libera la fermentación) son las incógnitas que vas a ir cerrando a medida que agregues equipos al flowsheet.

### ¿Azúcar simple o maltosa? Qué entra al balance y qué no

No es "una u otra": el mosto que sale de la maceración trae los dos azúcares fermentables a la vez, en las proporciones que deja la hidrólisis del almidón. No es una simplificación de manual — es lo que hace, con DWSIM, un trabajo de titulación real que simuló este mismo tipo de planta (Córdova, ESPOCH, 2021): define `Water`, `Carbon dioxide`, `Ethanol`, `Glucose` y `maltose` como componentes, y carga **dos reacciones de conversión en el mismo reactor**, una por azúcar. Vas a hacer lo mismo — no importa si tu materia prima final es mijo, sorgo o quinoa: lo que fermenta siempre es la mezcla maltosa + glucosa que deja la maceración.

| Fracción | % del almidón | Masa (kg, lote 600 L) | Qué es |
|---|---|---|---|
| Maltosa | 83 % | 49,8 | Azúcar fermentable; se hidroliza con agua durante la fermentación |
| Glucosa | 17 % | 10,2 | Azúcar fermentable; reacciona directo |
| Dextrinas y otros | — | resto de los 103,4 kg de malta | Cadenas largas que la levadura no puede fermentar; quedan en la cerveza como cuerpo y dulzor residual |

Las dos reacciones de conversión que vas a cargar en el fermentador:

$$ C_6H_{12}O_6\ (\text{glucosa}) \longrightarrow 2\,CO_2 + 2\,C_2H_5OH $$

$$ C_{12}H_{22}O_{11}\ (\text{maltosa}) + H_2O \longrightarrow 4\,CO_2 + 4\,C_2H_5OH $$

¿Y la levadura, el lúpulo, la cáscara de arroz? Ninguno entra como *compuesto que reacciona* en esta simulación — y no es un atajo, es lo que hace la literatura especializada:

- **Cáscara de arroz / bagazo:** sólido insoluble, se separa físicamente antes del hervor (paso 4, Filtro). Nunca llega al fermentador.
- **Levadura:** en el reactor de conversión que vas a armar (sección 4.8) actúa como catalizador, no como reactivo, y no se carga como componente de DWSIM. Simular su crecimiento como biomasa es un nivel de detalle distinto — el modelo cinético de Monod de la [sección avanzada](#7-sección-avanzada-modelar-la-fermentación-en-el-tiempo-con-cinética-de-monod).
- **Lúpulo:** aporta amargor y aroma, no azúcares fermentables. Las reacciones entre sus humulonas y enzimas de la levadura ("biotransformación") "todavía están en estudio" y "no existen suficientes datos experimentales" — ni siquiera en la tesis que sí simuló esta planta en DWSIM.

## 3. Instalar DWSIM

DWSIM es un simulador de procesos de código abierto: no pide licencia, cuenta ni pago, y corre en Windows, Linux y Mac.

1. Descargalo de **dwsim.org** (sección Downloads) y elegí el instalador de tu sistema operativo.
2. Instalalo con las opciones por defecto — no requiere activación ni registro.
3. Abrilo: vas a ver una pantalla de inicio con la opción de crear una simulación nueva.

## 4. Armando el flowsheet completo, de las materias primas a la cerveza

Esto es lo que vas a construir: **una sola simulación continua**, con las materias primas entrando por un lado y la cerveza saliendo por el otro, siguiendo exactamente los pasos de la sección 1 — no equipos sueltos y desconectados. Antes de diseñarla, vale la pena mirar cómo lo resuelve la literatura real: la tesis de cerveza de quinua en DWSIM (Córdova, ESPOCH, 2021, ya citada) arma su flowsheet así — `Mixer` (agua + extracto con los azúcares ya calculados a mano) → `Mixer` (+ agua de relleno) → `Heater` (hervor) → separador vapor-líquido → `Cooler` → `Conversion Reactor` (fermentador). Ni bombas ni válvulas aparecen en ese flowsheet: a esta escala su efecto sobre el balance de materia y energía es despreciable (ya lo viste vos mismo con el ΔT≈0,009 °C de la bomba), así que la literatura las deja afuera del cálculo. Acá las vas a agregar igual, como equipos de trasiego entre etapas, porque construir cada tipo de equipo es un objetivo del TP en sí mismo — pero ahora ubicadas en su lugar real dentro de una única secuencia, no como ejercicios aislados.

La secuencia completa que vas a armar — los números de cada corriente son los mismos que ya calculaste en la sección 2, para un fermentador de 600 L, y de acá en más van a cerrar exactamente sin ningún ajuste posterior:

**Agua de macerado (310,2 kg) + Extracto de malta (60,0 kg de azúcares) → `Mixer` → Mosto-1 (370,2 kg) → (Bomba 1) → + Agua de hervido (289,8 kg) → `Mixer` → Mosto-2 (660,0 kg) → `Heater` (hervor) → Mosto-3 (660,0 kg) → separador de vapor → Vapor (60,0 kg) + Mosto-4 (600,0 kg) → `Cooler` → Mosto-5 (600,0 kg) → (Bomba 2 + Válvula) → `Conversion Reactor` (fermentador) → cerveza (600 L) + CO₂**

### 4.0 Preparar la simulación

Arrancá con todos los componentes que vas a necesitar de punta a punta — no hace falta ir agregándolos equipo por equipo. `New Steady-State Simulation`. En *Compounds*, agregá `Water`, `Glucose`, `maltose`, `Ethanol` y `Carbon dioxide` (base ChemSep). En *Property Packages* elegí `Steam Tables (IAPWS-IF97)` — a estas concentraciones tan diluidas de azúcar y etanol (≤0,5 % v/v) la mezcla se comporta como prácticamente agua; para una receta con alcohol normal (~5 % v/v) haría falta `NRTL`, que es lo que usa el tutorial oficial de planta de etanol de DWSIM. `Finish`.

### 4.1 Corrientes de entrada y el primer mezclador (`Mixer`)

Acá arranca el balance de materia real: agua por un lado, los azúcares que calculaste a mano en la sección 2 por el otro.

1. **Corriente `Agua-macerado`.** Water = 1. Temperatura 20 °C, Presión 1 atm. Caudal másico: 310,2 kg/h (paso 4 de la sección 2 — la convención de kg/h de acá en más equivale a decir que cada etapa dura 1 hora, ver la nota al final de la sección 4.8).
2. **Corriente `Extracto-malta`.** Los azúcares ya hidrolizados que vas a fermentar más adelante (sección 4.8) — no "malta" como tal, DWSIM no la reconoce como compuesto: maltose = 49,8 kg/h, Glucose = 10,2 kg/h (total 60,0 kg/h, pasos 1-2 de la sección 2). Temperatura 20 °C, Presión 1 atm.
3. **Agregá el `Mixer`** (*Object Palette > Mixers/Splitters*). Conectá las dos corrientes de entrada y una corriente de salida, `Mosto-1`.
4. `Solve`. En `Mosto-1` → *Results*: caudal másico = suma de las dos entradas (370,2 kg/h: Water 310,2 / maltose 49,8 / Glucose 10,2), y la temperatura sale del balance de energía del mezclado — con las dos entradas a 20 °C, la salida también da 20 °C.

**¿Y si querés fijar la temperatura de maceración en 65 °C?** Agregá un `Heater` más entre este `Mixer` y la Bomba 1 (mismo bloque que vas a usar para el hervor en la sección 4.4, `Calculation Type = Outlet Temperature = 65 °C`). No cambia nada de la lógica de acá, solo agrega un salto de temperatura más antes de seguir.

### 4.2 Primer equipo mecánico: la bomba (trasiego a la olla de cocción)

Bomba 1 del proceso (sección 1, paso 2): trasiega el mosto recién mezclado hacia la olla de cocción.

1. **Agregá una `Pump`** (*Object Palette > Pressure Changers*) entre `Mosto-1` y el segundo mezclador (sección 4.3). Nombrala `Bomba-1`.
2. La corriente de entrada ya es `Mosto-1` (sección 4.1) — no hace falta cargar nada de nuevo, se conecta directo.
3. **Caudal másico:** ya lo fijaste en 4.1 (370,2 kg/h, equivalente a decir que la etapa dura 1 hora). Si preferís una duración más realista para un trasiego —por ejemplo 15 min— recalculá: 370,2 kg / (15/60 h) ≈ 1 481 kg/h.
4. **Configurá la bomba.** *Calculation Mode* = `Pressure Increase` (o `Outlet Pressure`, ver más abajo). `Efficiency` 70–75 %. Dejá vacíos `Head`, `Power` y las curvas de performance.
5. `Solve`. En *Results*: caudal másico y composición idénticos a la entrada (balance de materia); la temperatura sube unas décimas de grado (balance de energía); la bomba muestra la potencia consumida (`Power`, kW).

### ¿Y el ΔP (o la presión de salida), cuánto tiene que ser?

No es un dato libre: sale del mismo Bernoulli extendido que viste en la [teoría]({{< ref "teoria-balance-energia" >}}). Para un trasiego de planta piloto entre dos tanques abiertos a la atmósfera, la bomba tiene que vencer la elevación entre ambos más las pérdidas de carga por fricción en la cañería:

$$ \Delta P = \rho\,g\,\Delta z + \Delta P_{fricción} $$

Si todavía no tenés el layout real de cañerías, una estimación razonable para pérdidas por fricción en tramos cortos con pocos accesorios es sumar un 20–30 % al término de elevación. Por ejemplo, para Bomba 1 (trasiego del macerador a la olla de cocción, con una elevación típica de 2–3 m en una planta piloto):

$$ \Delta P \approx \rho\,g\,\Delta z \times 1.25 = 998 \times 9.81 \times 2.5 \times 1.25 \approx 30\,600\ Pa \approx 0.3\ bar $$

Con `Pressure Increase` cargás directamente ese ΔP (≈30 000 Pa). Con `Outlet Pressure` cargás P₂ = P₁ + ΔP = 101 325 + 30 600 ≈ 131 900 Pa.

### Qué calcula DWSIM por dentro (la bomba)

No es una caja negra: esto es lo que hace el bloque `Pump` al apretar `Solve`, tomado del código fuente (`Pump.vb`, repositorio de DWSIM) — la misma secuencia que desarrollaste en la [teoría]({{< ref "teoria-balance-energia" >}}), del balance de energía a Bernoulli y NPSH.

1. Flash de la corriente de entrada: `Steam Tables (IAPWS-IF97)` devuelve ρ_liq y H₁ a partir de T₁, P₁ y la composición.
2. Trabajo mecánico ideal (líquido ~incompresible), corregido por eficiencia:

$$ H_2 = H_1 + \frac{P_2 - P_1}{\rho_{liq}\,\eta} $$

3. Flash presión–entalpía: con (P₂, H₂) conocidos, un flash `PressureEnthalpy` entrega el estado real de salida (T₂, ρ₂, fase).
4. Potencia consumida, vía la altura manométrica (Bernoulli extendido):

$$ Head = \frac{P_2-P_1}{\rho_{liq}\,g} \qquad Power = \frac{\dot m\,g\,Head}{\eta} $$

5. NPSH disponible (flash de punto de burbuja a T₁ para hallar la presión de vapor):

$$ NPSH = \frac{P_1-P_{burbuja}}{\rho_{liq}\,g} $$

6. Balance de materia, componente a componente, sin pérdida ni reacción:

$$ \dot m_{out} = \dot m_{in} \qquad w_{i,out} = w_{i,in} $$

**Ejemplo numérico** (ΔP = 100 000 Pa, η = 72 %, ρ ≈ 998 kg/m³, Cₚ ≈ 4,186 kJ/kg·K, ṁ = 0,5 kg/s — un ΔP redondo y grande a propósito, para que el efecto en la temperatura se vea en el cálculo a mano; el mosto diluido de acá se comporta casi igual que el agua pura de este ejemplo):

$$ w_{ideal} = \frac{\Delta P}{\rho} = \frac{100\,000}{998} = 0.100\ kJ/kg $$

$$ w_{real} = \frac{w_{ideal}}{\eta} = \frac{0.100}{0.72} = 0.139\ kJ/kg $$

$$ \Delta T = \frac{w_{real}-w_{ideal}}{C_p} = \frac{0.139-0.100}{4.186} \approx 0.009\ °C $$

$$ Power = \dot m\,w_{real} \approx 0.5 \times 0.139 = 0.070\ kW = 70\ W $$

Con el ΔP real de Bomba 1 (≈30 000 Pa, un tercio del de este ejemplo) el ΔT te va a salir todavía más chico — es la evidencia numérica de por qué la literatura no se molesta en incluir la bomba en el balance.

### 4.3 Agua de relleno: el segundo mezclador, antes del hervor

Como viste en la sección 2 (paso 5), el mosto recién macerado todavía no tiene el agua que necesita el hervor — hace falta completar con agua de relleno, que además compensa la que se va a evaporar durante la hora de hervor. En DWSIM esto es un segundo `Mixer`, exactamente como en el flowsheet de la tesis citada (Córdova, ESPOCH, 2021).

1. **Corriente `Agua-hervido`.** Water = 1. Temperatura 20 °C, Presión 1 atm. Caudal másico: 289,8 kg/h (paso 5 de la sección 2).
2. **Agregá un segundo `Mixer`** entre la salida de Bomba 1 y el `Heater` del hervor (sección 4.4). Conectale `Mosto-1` (ya bombeado) y `Agua-hervido`, con una salida, `Mosto-2`.
3. `Solve`. `Mosto-2` sale con 660,0 kg/h: Water 600,0 (310,2 del macerado + 289,8 de relleno), maltose 49,8, Glucose 10,2 — a 20 °C, listo para entrar a la olla de cocción.

### 4.4 Olla de cocción: el hervor

Paso 5 del proceso (sección 1). El mosto tiene que hervir una hora: esteriliza, detiene la actividad enzimática y (si agregás lúpulo) extrae amargor. En DWSIM es el mismo bloque que el enfriador de la sección 4.6, pero calentando: un `Heater`.

1. **Agregá el `Heater`** (*Object Palette > Heat Exchangers*) entre el segundo `Mixer` (sección 4.3) y el separador de vapor (sección 4.5). Conectale la entrada (`Mosto-2`) y una salida, `Mosto-3`.
2. **Configurá el `Heater`.** `Calculation Type` = Outlet Temperature; `Outlet Temperature` = 100 °C (punto de ebullición a 1 atm); `Pressure Drop` = 0 Pa.
3. `Solve`. `Mosto-3` sale a 100 °C, misma composición y caudal que `Mosto-2` (660,0 kg/h) — pero en el punto de ebullición, lista para separar el vapor.

**Ejemplo numérico** (ṁ ≈ 660 kg, Cₚ ≈ 4,0 kJ/kg·K, T₁=20 °C, T₂=100 °C):

$$ Q = \dot m\,C_p\,\Delta T = 660 \times 4.0 \times (100-20) = 211\,200\ kJ \approx 58.7\ kWh $$

Es el calor que hay que entregar por lote — la potencia del quemador o resistencia depende de cuánto tiempo quieras que tarde el hervor en arrancar, igual que en el enfriador.

### 4.5 Separando el vapor del hervor

Durante la hora de hervor se evapora agua — típicamente ≈10 % del agua presente (es el mismo supuesto que usaste en la sección 2 para calcular el agua de relleno, y el que usa la tesis de referencia). Ese vapor tiene que salir del flowsheet antes de enfriar, si no, lo estarías enfriando (y condensando) de nuevo sin necesidad.

1. **Agregá un `Component Separator`** (*Object Palette > Separators*) después del `Heater`. Entrada: `Mosto-3`. Dos salidas: `Vapor` y `Mosto-4`.
2. **Fijá la fracción de separación** por compuesto: Water → 10 % a la salida `Vapor` (90 % sigue con `Mosto-4`); Glucose y maltose → 0 % a `Vapor` (100 % se quedan en `Mosto-4`, no evaporan).
3. `Solve`. `Vapor` sale con 60,0 kg/h de agua pura (10 % de los 600,0 kg de agua). `Mosto-4` sale con 600,0 kg/h: Water 540,0, maltose 49,8, Glucose 10,2 — los mismos 600 kg de agua final que fijaste en la sección 2, y los mismos números que ya venís usando en el intercambiador y el fermentador.

### 4.6 Segundo equipo: el intercambiador de calor (enfriador de mosto)

`Mosto-4` sale a ~100 °C, y tiene que bajar a temperatura de fermentación (20 °C) antes de tocar la levadura — a esa temperatura la levadura muere. En DWSIM esto es un único bloque, el `Cooler`.

1. **Agregá el `Cooler` al flowsheet.** Desde *Object Palette > Heat Exchangers*. Conectale la entrada (`Mosto-4`, sección 4.5) y una salida, `Mosto-5`.
2. La corriente de entrada ya viene resuelta desde el separador: Temperatura 100 °C, Presión 1 atm, Caudal másico 600,0 kg/h, Composición Water 0,900, maltose 0,083, Glucose 0,017.
3. **Configurá el `Cooler`.** `Calculation Type` = Outlet Temperature; `Outlet Temperature` = 20 °C; `Pressure Drop` = 0 Pa; `Efficiency` = 100 % (acá no hay conversión mecánica en juego, solo transferencia de calor).
4. **Resolvé y leé el resultado.** `Solve`. En *Results* del `Cooler`: `Heat Removed` (kW), la potencia de refrigeración necesaria. Caudal másico y composición de salida son idénticos a los de entrada.

### Qué calcula DWSIM por dentro (el intercambiador)

Balance de energía en estado estacionario, sin trabajo de eje:

$$ \dot Q = \dot m \,(H_2 - H_1) $$

Como T₂ < T₁, Q̇ da negativo: es calor que hay que retirar. Balance de materia: sin reacción ni separación de fases, ṁ_out = ṁ_in y la composición no cambia — igual que en la bomba.

**Ejemplo numérico** (ṁ = 600 kg, Cₚ ≈ 4,0 kJ/kg·K —el mosto es 90 % agua—, T₁=100 °C, T₂=20 °C):

$$ Q = \dot m\,C_p\,\Delta T = 600 \times 4.0 \times (100-20) = 192\,000\ kJ \approx 53.3\ kWh $$

La potencia del equipo depende de cuánto tiempo quieras tardar en enfriar: en 30 min, ≈107 kW instantáneos; en 1 h, ≈53 kW. Es una decisión de diseño, igual que la eficiencia de la bomba.

### 4.7 Tercer equipo mecánico: la bomba de trasiego al fermentador (+ una válvula opcional)

Bomba 2 del proceso (sección 1, paso 7): trasiega el mosto ya frío desde el enfriador hacia el fermentador.

1. Agregá una segunda `Pump` (*Object Palette > Pressure Changers*) entre `Mosto-5` (salida del `Cooler`, sección 4.6) y la entrada del fermentador (sección 4.8). Nombrala `Bomba-2`.
2. La corriente de entrada ya es `Mosto-5` — no hace falta recargar composición: Water 540,0 kg/h, maltose 49,8 kg/h, Glucose 10,2 kg/h, 20 °C.
3. **Presión de salida:** si el fermentador está 1,5–2 m por encima del enfriador, con el mismo criterio de Bomba 1: ΔP ≈ 998 × 9,81 × 1,75 × 1,25 ≈ 21 400 Pa ≈ 0,21 bar. Cargalo en `Pressure Increase`.
4. `Efficiency` 70–75 %, igual que Bomba 1.
5. `Solve` y compará: la mezcla diluida de azúcar cambia apenas ρ y Cₚ respecto del agua pura, así que el ΔT y la potencia te van a salir muy parecidos a los de Bomba 1 — es la evidencia de que, a estas concentraciones tan bajas de azúcar, la aproximación con `Steam Tables` (en vez de `NRTL`) es razonable.

**Agregar una válvula (opcional).** Si tu fermentador es un tanque abierto a la atmósfera y Bomba 2 le da más presión de la que hace falta, podés poner una `Valve` (*Object Palette > Pressure Changers*) entre la bomba y el fermentador, para bajar la presión de vuelta a 1 atm antes de entrar — así el resto del flowsheet queda a presión atmosférica, más parecido a la realidad. Por dentro, la válvula es un throttling adiabático sin trabajo de eje:

$$ H_2 = H_1 \qquad (\text{isoentálpico, sin } \dot W_s) $$

DWSIM hace un flash presión–entalpía con (P₂, H₂) para encontrar T₂. Para un líquido casi incompresible como el mosto, el efecto Joule–Thomson es minúsculo: T₂ ≈ T₁, la válvula baja la presión prácticamente sin cambiar la temperatura — a diferencia de la bomba, que sí le agrega energía al fluido.

### 4.8 Cuarto equipo: el fermentador (reactor de conversión)

Acá es donde se decide si tu cerveza tiene alcohol o no. DWSIM no tiene un bloque "fermentador": se arma con un `Conversion Reactor` — el mismo bloque, con la misma lógica, que usa tanto el tutorial oficial de DWSIM para una planta de etanol como la tesis de cerveza de quinua citada en la sección 2. No hace falta resolver ecuaciones diferenciales de cinética para este nivel: alcanza con fijar qué porcentaje del azúcar se convierte.

1. **Armá el reactor.** `Conversion Reactor` desde *Object Palette > Reactors*. Entrada: la salida de Bomba 2 (o de la válvula, si la agregaste). Dos salidas: fase líquida (`cerveza`) y gas (`CO2`) — el reactor separa fases automáticamente.
2. La corriente de entrada ya viene resuelta desde arriba (mosto frío, lote de 600 L): Water 540,0 kg, maltose 49,8 kg, Glucose 10,2 kg (total 600,0 kg). Temperatura 20 °C, Presión 1 atm.
3. **Cargá las dos reacciones de conversión**, en *Settings > Reactions*:

| Reacción | Ecuación | Base Comp | Conversion [%] |
|---|---|---|---|
| Glucosa | C6H12O6 → 2CO2 + 2C2H5OH | Glucose | ≈ 7,5 |
| Maltosa | H2O + C12H22O11 → 4CO2 + 4C2H5OH | maltose | ≈ 7,5 |

Agregá las dos al mismo `Reaction Set` y asignaselo al reactor.

### ¿De dónde sale el ≈7,5 % de conversión?

Es el cálculo de diseño que hace "sin alcohol" a la cerveza. A 100 % de conversión producirías:

$$ m_{etanol,100} \approx (49.8+10.2)\ \text{kg azúcar} \times 0.53\ \tfrac{\text{kg etanol}}{\text{kg azúcar}} = 60.0 \times 0.53 \approx 31.8\ \text{kg} $$

(0,53 kg etanol/kg azúcar sale de la estequiometría de las dos reacciones — coincide con el 5,3 % de alcohol que la tesis citada valida contra su cerveza experimental de 5 %.) El objetivo es ≤0,5 % v/v ≈ 3,95 g/L (CAA, Art. 1080), sobre el volumen del lote (600 L, el mismo dato del que partiste en la sección 2):

$$ \text{Conversión necesaria} = \frac{P_{objetivo} \times V_{mosto}}{m_{etanol,100}} = \frac{3.95\ g/L \times 600\ L}{31\,800\ g} \approx 7.5 $$ %

Por eso `Conversion [%]` no es 100 (cerveza normal) sino ≈7,5: le decís al reactor que deje fermentar solo una fracción chica del azúcar, a propósito.

4. **Resolvé y verificá el % de alcohol.** `Solve`. En la corriente `cerveza`, pestaña *Results > Compound Properties*, mirá el `Volumetric Flow` de `Ethanol` frente al total — dividiendo esos dos caudales volumétricos obtenés el %v/v directo. Si te pasás de 3,95 g/L, bajá el `Conversion [%]` y volvé a correr: es iteración normal de diseño.

### Qué calcula DWSIM por dentro (el fermentador)

Balance de materia por componente, ahora con generación/consumo:

$$ \dot m_{i,out} = \dot m_{i,in} + \sum_r \nu_{i,r}\,\xi_r $$

Balance de energía: la fermentación es exotérmica — la tesis citada reporta un calor de reacción de −221 877 kJ/kmol de glucosa y −312 858 kJ/kmol de maltosa, a 25 °C. Si fijás el reactor en modo isotérmico (T de salida = T de entrada), DWSIM calcula cuánto calor hay que retirar para mantenerla — el dato que define el tamaño de la camisa de refrigeración del fermentador real.

> No pierdas de vista la escala: 600 L es el volumen de *lote*, no un caudal por hora. Los caudales en kg/h de toda esta sección son una convención (masa del lote / duración elegida de cada etapa) — DWSIM resuelve el flowsheet como una única "pasada" que representa tu lote completo, no una operación continua real.

### Lo que todavía falta del proceso real

Con los dos mezcladores, las dos bombas, el hervor, el separador de vapor, el intercambiador y el fermentador ya tenés un flowsheet continuo y verificable de punta a punta. Fuera de esta cadena principal quedan, del proceso de la sección 1: el filtro de bagazo (paso 4), el sedimentador/whirlpool (paso 7) y el pasteurizado (paso 9) — separaciones sólido-líquido y un `Heater` adicional que no cambian la lógica de lo que ya armaste. Los tenés anticipados en el mapa de equipos (sección 5) y en las etapas de la sección 6. Un tanque de reserva, en cambio, no aporta nada a este balance de estado estacionario — no hay acumulación que calcular; simularlo en el tiempo (llenado/vaciado) requiere pasar al modo `Dynamic Simulation` de DWSIM, que va más allá del alcance de este TP.

## 5. Mapa de equipos: cómo seguir armando la planta

| En el diagrama | Bloque en DWSIM | Detalle |
|---|---|---|
| Mezclador de materias primas | `Mixer` | Armado en la sección 4.1 |
| Bomba 1 | `Pump` | Armada en la sección 4.2 |
| Segundo mezclador (agua de relleno) | `Mixer` | Armado en la sección 4.3 |
| Sacarificación + aditivos | `CSTR` con reacción de conversión | Almidón → azúcares fermentables, 60 min (acá se simplifica: los azúcares ya entran calculados en la sección 4.1) |
| Filtro (bagazo) | `Solids Separator` | % de sólidos como bagazo vs. mosto clarificado |
| Hervor + lúpulo | `Heater` | Armado en la sección 4.4 |
| Separador de vapor | `Component Separator` | Armado en la sección 4.5 |
| Enfriador de mosto | `Cooler` | Armado en la sección 4.6 |
| Bomba 2 | `Pump` | Armada en la sección 4.7 |
| Válvula reductora (opcional) | `Valve` | Armada en la sección 4.7 |
| Sedimentador (whirlpool) | `Solids Separator` | Eficiencia de remoción del trub |
| Fermentador | `Conversion Reactor` | Armado en la sección 4.8 |
| Pasteurizador | `Heater` / `Heat Exchanger` | Mantener 78–85 °C |

## 6. Cómo avanzar con el resto del TP

**Etapa 1 — Separadores sólido-líquido.** Con el flowsheet completo de la sección 4 resuelto, seguí con el filtro de bagazo (antes del hervor) y el sedimentador de whirlpool (trub, antes de Bomba 2) como `Solids Separator`.

**Etapa 2 — Pasteurizado.** Un `Heater` más después del fermentador, con la misma lógica que el hervor de la sección 4.4, para mantener 78–85 °C.

**Etapa 3 — Comparar variantes.** Con la planta completa, corré el mismo flowsheet cambiando el `Conversion %` del fermentador o la composición del mosto, y compará rendimiento y grado alcohólico entre variantes.

**Etapa 4 — Ir más allá: dinámica temporal.** El reactor de conversión da el estado final, no la trayectoria en el tiempo. Para el perfil de fermentación día a día —o una fermentación arrestada en vez de conversión fija— ver la sección siguiente.

## 7. Sección avanzada: modelar la fermentación en el tiempo, con cinética de Monod

La sección 4 ya da una cerveza sin TACC y sin alcohol funcionando en DWSIM, con un reactor de conversión de estado estacionario. Esta sección es opcional y va un escalón más allá: en vez de fijar de entrada qué porcentaje del azúcar se convierte, modelás cómo evoluciona la fermentación minuto a minuto — útil para diseñar una fermentación *arrestada* (cortarla en un instante *t\** elegido) en vez de una conversión fija.

### Por qué acá sí hace falta un modelo cinético

El reactor de conversión de la sección 4.8 resuelve un balance de estado estacionario: dice cuánto etanol hay al final, no cómo se llegó ahí. Si necesitás la trayectoria en el tiempo hace falta un modelo distinto.

### Sustrato: semillas sin gluten

La cebada (y su malta) contienen hordeínas, que son gluten. Para una cerveza libre de gluten hay que partir de semillas que no lo tengan: mijo, sorgo, trigo sarraceno o quinoa. Estas semillas no traen actividad diastásica propia (no tienen enzimas amilolíticas activadas por el malteado) — por eso el paso de maceración donde agregás enzimas exógenas, pensado originalmente para la malta, es exactamente lo que hace falta para hidrolizar el almidón de estas semillas en azúcares fermentables.

> Para que el producto se pueda etiquetar "sin gluten" en Argentina, el contenido final tiene que ser **≤ 10 mg/kg (10 ppm)** — Código Alimentario Argentino, Art. 1383.

### Cinética de Monod + Luedeking-Piret

Crecimiento (Monod):

$$ \mu = \mu_{max} \frac{S}{K_s + S} \qquad \frac{dX}{dt} = \mu X $$

Consumo de sustrato:

$$ -\frac{dS}{dt} = \frac{1}{Y_{X/S}} \frac{dX}{dt} + m_S X $$

Formación de etanol (Luedeking-Piret, mixto):

$$ \frac{dP}{dt} = \alpha \frac{dX}{dt} + \beta X $$

Con *X* = biomasa (g/L), *S* = sustrato (g/L), *P* = etanol (g/L):

| Parámetro | Valor típico | Significado |
|---|---|---|
| $ \mu_{max} $ | 0,30–0,45 h⁻¹ | Velocidad específica máxima de crecimiento |
| $ K_s $ | 1–5 g/L | Constante de afinidad por el sustrato |
| $ Y_{X/S} $ | 0,05–0,10 g/g | Rendimiento de biomasa |
| $ \alpha $ | 2–4 g/g | Formación de etanol asociada al crecimiento |
| $ \beta $ | 0,05–0,15 g/(g·h) | Formación de etanol no asociada al crecimiento |

Una variante más completa —con inhibición por producto, útil si la fermentación se acerca a concentraciones de etanol donde la propia levadura empieza a frenar— reemplaza μ por:

$$ \mu = \mu_{max} \frac{S}{K_s+S} \cdot \frac{1}{1+P/K_i} $$

con $ K_i $ la constante de inhibición por etanol (valores de referencia: $ \mu_{max}\approx 0{,}35 $ h⁻¹, $ K_s\approx 1{,}0 $ g/L, $ K_i\approx 80 $ g/L, $ Y_{P/S}\approx 0{,}48 $ g/g).

### Diseñar el corte para que quede "sin alcohol"

Integrando el sistema —en una planilla, en Python, o en un reactor `Batch` de DWSIM con cinética definida por vos— obtenés *P(t)*. Buscás *t\** donde *P* alcanza el límite legal (0,5 % v/v ≈ 3,95 g/L):

$$ P(t^{*}) \approx 3.95\ g/L $$

Ese *t\** es el tiempo de fermentación que programás: al alcanzarlo, se interrumpe la fermentación (fermentación arrestada) enfriando rápido y separando la levadura.

| Equipo nuevo | Bloque en DWSIM | Qué hace |
|---|---|---|
| Enfriador de corte | `Cooler` | Baja la temperatura rápido para inactivar la levadura en *t\** |
| Separador de levadura | `Solids Separator` | Saca la biomasa antes de que siga fermentando en la botella |

## 8. Qué entregar

- El archivo de simulación de DWSIM con el flowsheet completo de la sección 4 resuelto: los dos mezcladores, las dos bombas, hervor, separador de vapor, intercambiador y fermentador.
- El cálculo manual de verificación de cada equipo (trabajo real y ΔT de cada bomba; calor entregado en el hervor y retirado en el intercambiador; % de conversión y grado alcohólico del fermentador) comparado contra el resultado del simulador.
- Una conclusión breve sobre las diferencias entre el cálculo manual y el de DWSIM, si las hay.

## Fuentes

- DWSIM – Open-Source Chemical Process Simulator — https://dwsim.org/
- DWSIM — Your First Simulation (tutorial oficial) — https://dwsim.org/tutorials/en/beginner/01-your-first-simulation.html
- DWSIM — Mixer Basics — https://dwsim.org/tutorials/en/beginner/02-mixer-basics.html
- DWSIM — Advanced Tutorial: Ethanol Plant (reactor de conversión + NRTL) — https://dwsim.org/tutorials/en/advanced/05-ethanol-plant.html
- DWSIM — Pump Class (API help) — https://dwsim.org/api_help/html/T_DWSIM_UnitOperations_UnitOperations_Pump.htm
- DWSIM — código fuente de Pump.vb — https://github.com/DanWBR/dwsim/blob/windows/DWSIM.UnitOperations/UnitOperations/Pump.vb
- DWSIM — Unit Operation and Stream Models — https://dwsim.org/docs/crossplatform/help/unitops.htm
- FOSSEE — Manual de operaciones unitarias en DWSIM — https://static.fossee.in/dwsim/manuals/Unit-Operations-DWSIM.pdf
- [Córdova Beltrán, C. X. (2021). *Simulación y modelamiento de un proceso de producción de cerveza artesanal a base de quinua*. Tesis, ESPOCH.](/files/cordova-2021-espoch-cerveza-quinua-dwsim.pdf) (PDF)
- [Monte Sastre, E. (2021). *Modelling and simulation of a continuous beer production plant using Simulink*. Trabajo de Fin de Grado, Universidad Carlos III de Madrid.](/files/monte-sastre-2021-simulink-cerveza.pdf) (PDF)
- [Julián-Ricardo, M. C., Baltá-García, J. G., Pérez-Sánchez, E. J. y Pérez-Sánchez, A. (2018). *Simulación del proceso de producción de cerveza a escala piloto*. Afinidad, LXXV(581), 39–45.](/files/julian-ricardo-2018-superpro-cerveza-piloto.pdf) (PDF, simulación en SuperPro Designer)
- Código Alimentario Argentino — [Cap. XIII, Bebidas Fermentadas: Cervezas](https://www.argentina.gob.ar/sites/default/files/anmat-capitulo_xiii_beb_fermentadasactualiz_2018-12.pdf) (límite de 0,5 % v/v para cerveza sin alcohol, Art. 1080)
- [Límite de gluten en Argentina — 10 mg/kg](https://www.argentina.gob.ar/sites/default/files/capitulo_xvii_dieteticosactualiz_2025-09_0.pdf) (Art. 1383, CAA)
