+++
title = 'Simulación de una planta piloto de cerveza en DWSIM'
date = 2026-08-28
weight = 2
draft = false
math = true
description = 'Balance de materia y energía aplicado a una cervecería piloto — construcción paso a paso en el simulador de procesos abierto DWSIM.'
+++

Vas a construir, paso a paso y en DWSIM (un simulador de procesos gratuito y de código abierto), el balance de materia y energía de una planta piloto de elaboración de cerveza — el proyecto final de la materia: una cerveza **sin TACC y sin alcohol** (≤0,5 % v/v). Si todavía no viste el [marco teórico]({{< ref "teoria-balance-energia" >}}) (balance de energía, Bernoulli, NPSH), es el paso previo a esta guía — acá ya lo vas a estar aplicando directamente.

📊 **[Abrir planilla en Google Sheets — hacé tu copia](https://docs.google.com/spreadsheets/d/1_ItL1nn0kCZN63zf5AfpR7oCiFvLgLZl/copy)** · 📥 **[Descargar (.xlsx)](/files/planilla-balance-cerveceria-dwsim.xlsx)** — balance de materia y verificación manual

## Objetivos

- Aplicar el balance de materia y de energía a un proceso real, no a un ejercicio abstracto.
- Instalar y manejar un simulador de procesos de código abierto (DWSIM).
- Construir un flowsheet equipo por equipo: bomba, intercambiador de calor y fermentador.
- Diseñar, con datos concretos, una cerveza sin TACC y con ≤0,5 % v/v de alcohol para un lote de 650 L.
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

**Entradas conocidas**

| Corriente | Cantidad |
|---|---|
| Agua (maceración) | 475 kg |
| Malta (sin TACC) | 162,5 kg |
| Enzimas | 0,163 kg |
| Levadura + agua de inóculo | a cargar |
| Lúpulo | a cargar |
| Agente clarificante | a cargar |

**Salidas — las calculás con DWSIM**: bagazo 1 (filtro) · vapor (hervor) · sedimentos / bagazo 2 · CO₂ (fermentación) · levadura extraída · cerveza (producto).

Con agua + malta ya sumás **637,5 kg** de entrada conocida. Los rendimientos de cada equipo (cuánto sólido se va con el bagazo, cuánta agua se evapora en el hervor, cuánto CO₂ libera la fermentación) son las incógnitas que vas a ir cerrando a medida que agregues equipos al flowsheet.

La composición interna de los 162,5 kg de malta sale de escalar una base de referencia de 20 L por un factor ×32,5 — el mismo factor que te lleva de esa base al lote real de **650 L** del proyecto:

$$ m_{malta} = f \cdot m_{20L} = 32.5 \times 5.0\ kg = 162.5\ kg $$

### ¿Azúcar simple o maltosa? Qué entra al balance y qué no

No es "una u otra": el mosto que sale de la maceración trae los dos azúcares fermentables a la vez, en las proporciones que deja la hidrólisis del almidón. No es una simplificación de manual — es lo que hace, con DWSIM, un trabajo de titulación real que simuló este mismo tipo de planta (Córdova, ESPOCH, 2021, cerveza artesanal de quinua): define `Water`, `Carbon dioxide`, `Ethanol`, `Glucose` y `maltose` como componentes, y carga **dos reacciones de conversión en el mismo reactor**, una por azúcar. Vas a hacer lo mismo — no importa si tu materia prima final es mijo, sorgo o quinoa: lo que fermenta siempre es la mezcla maltosa + glucosa que deja la maceración.

| Fracción | % del almidón | Masa (kg, lote 650 L) | Qué es |
|---|---|---|---|
| Maltosa | ≈ 83 % | ≈ 78,2 | Azúcar fermentable; se hidroliza con agua durante la fermentación |
| Glucosa | ≈ 17 % | ≈ 16,0 | Azúcar fermentable; reacciona directo |
| Dextrinas y otros | — | resto | Cadenas largas que la levadura no puede fermentar; quedan en la cerveza como cuerpo y dulzor residual |

(Los 162,5 kg de malta tienen ≈58 % de almidón extraíble ≈ 94,2 kg, repartido 83/17 entre maltosa y glucosa. El resto —proteínas, cáscara, dextrinas— no se convierte en azúcar fermentable.)

Las dos reacciones de conversión que vas a cargar en el fermentador:

$$ C_6H_{12}O_6\ (\text{glucosa}) \longrightarrow 2\,CO_2 + 2\,C_2H_5OH $$

$$ C_{12}H_{22}O_{11}\ (\text{maltosa}) + H_2O \longrightarrow 4\,CO_2 + 4\,C_2H_5OH $$

¿Y la levadura, el lúpulo, la cáscara de arroz? Ninguno entra como *compuesto que reacciona* en esta simulación — y no es un atajo, es lo que hace la literatura especializada:

- **Cáscara de arroz / bagazo:** sólido insoluble, se separa físicamente antes del hervor (paso 4, Filtro). Nunca llega al fermentador.
- **Levadura:** en el reactor de conversión que vas a armar (sección 5) actúa como catalizador, no como reactivo, y no se carga como componente de DWSIM. Simular su crecimiento como biomasa es un nivel de detalle distinto — el modelo cinético de Monod de la [sección avanzada](#9-sección-avanzada-modelar-la-fermentación-en-el-tiempo-con-cinética-de-monod).
- **Lúpulo:** aporta amargor y aroma, no azúcares fermentables. Las reacciones entre sus humulonas y enzimas de la levadura ("biotransformación") "todavía están en estudio" y "no existen suficientes datos experimentales" — ni siquiera en la tesis que sí simuló esta planta en DWSIM.

## 3. Instalar DWSIM

DWSIM es un simulador de procesos de código abierto: no pide licencia, cuenta ni pago, y corre en Windows, Linux y Mac.

1. Descargalo de **dwsim.org** (sección Downloads) y elegí el instalador de tu sistema operativo.
2. Instalalo con las opciones por defecto — no requiere activación ni registro.
3. Abrilo: vas a ver una pantalla de inicio con la opción de crear una simulación nueva.

## 4. Primer equipo: la bomba, paso a paso

Con esto solo ya tenés una simulación completa y verificable —balance de materia y de energía incluidos— antes de tocar una sola pieza más del proceso.

1. **Simulación nueva, con agua como único componente.** Elegí `New Steady-State Simulation` (o `File > New Chemical Process Model`). En *Compounds*, buscá `Water` y tildá *Added*; `Next`. En *Property Packages* elegí `Steam Tables (IAPWS-IF97)`. Dejá el resto por defecto y `Finish`.
2. **Poné dos corrientes y la bomba en el lienzo.** Del *Object Palette* arrastrá dos `Material Stream` —entrada y salida— y un `Pump` entre ambas. Renombralos: `H2O-in`, `Bomba-1`, `H2O-out`.
3. **Conectá las corrientes a la bomba.** Doble clic en la bomba → pestaña de conexiones → elegí `H2O-in` en *Inlet* y `H2O-out` en *Outlet*.
4. **Cargá la corriente de entrada.** Doble clic en `H2O-in`: Temperatura 20 °C, Presión 1 atm, Caudal másico 475 kg, Composición Water = 1.
5. **Configurá la bomba.** Doble clic en `Bomba-1`. En *Calculation Mode* elegí `Outlet Pressure` (fijás la presión de salida) o `Pressure Increase` (fijás el ΔP directo). Completá `Efficiency` con 70–75 %. Dejá vacíos `Head`, `Power` y las curvas de performance.
6. **Resolvé y leé el resultado.** Activá `Flowsheet Calculator Active (F6)` y `Solve`. En `H2O-out` → *Results*: el caudal másico es idéntico al de entrada (balance de materia); la temperatura sube unas décimas de grado (balance de energía). En la bomba, *Results* también muestra la potencia consumida (`Power`, kW).

### Qué calcula DWSIM por dentro

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

**Ejemplo numérico** (ΔP = 100 000 Pa, η = 72 %, ρ ≈ 998 kg/m³, Cₚ ≈ 4,186 kJ/kg·K, ṁ = 0,5 kg/s):

$$ w_{ideal} = \frac{\Delta P}{\rho} = \frac{100\,000}{998} = 0.100\ kJ/kg $$

$$ w_{real} = \frac{w_{ideal}}{\eta} = \frac{0.100}{0.72} = 0.139\ kJ/kg $$

$$ \Delta T = \frac{w_{real}-w_{ideal}}{C_p} = \frac{0.139-0.100}{4.186} \approx 0.009\ °C $$

$$ Power = \dot m\,w_{real} \approx 0.5 \times 0.139 = 0.070\ kW = 70\ W $$

Es el mismo número que va a aparecer en *Results* de DWSIM: un ΔT casi imperceptible, porque calentar agua de verdad con una bomba requiere muchísima más presión de la que maneja un equipo piloto.

## 5. Segundo equipo: el intercambiador de calor (enfriador de mosto)

Después del hervor el mosto sale a ~100 °C, y tiene que bajar a temperatura de fermentación (20 °C) antes de tocar la levadura — a esa temperatura la levadura muere. En DWSIM esto es un único bloque, el `Cooler`.

1. **Agregá el `Cooler` al flowsheet.** Desde *Object Palette > Heat Exchangers*. Conectale una entrada (mosto que sale del hervor) y una salida (hacia el fermentador).
2. **Cargá la corriente de entrada.** Temperatura 100 °C, Presión 1 atm, Caudal másico ≈ 700 kg (agua + maltosa + glucosa, sección 2), Composición aproximada: Water ≈ 0,90, maltose ≈ 0,09, Glucose ≈ 0,02.
3. **Configurá el `Cooler`.** `Calculation Type` = Outlet Temperature; `Outlet Temperature` = 20 °C; `Pressure Drop` = 0 Pa; `Efficiency` = 100 % (acá no hay conversión mecánica en juego, solo transferencia de calor).
4. **Resolvé y leé el resultado.** `Solve`. En *Results* del `Cooler`: `Heat Removed` (kW), la potencia de refrigeración necesaria. Caudal másico y composición de salida son idénticos a los de entrada.

### Qué calcula DWSIM por dentro

Balance de energía en estado estacionario, sin trabajo de eje:

$$ \dot Q = \dot m \,(H_2 - H_1) $$

Como T₂ < T₁, Q̇ da negativo: es calor que hay que retirar. Balance de materia: sin reacción ni separación de fases, ṁ_out = ṁ_in y la composición no cambia — igual que en la bomba.

**Ejemplo numérico** (ṁ ≈ 700 kg, Cₚ ≈ 4,0 kJ/kg·K —el mosto es >90 % agua—, T₁=100 °C, T₂=20 °C):

$$ Q = \dot m\,C_p\,\Delta T = 700 \times 4.0 \times (100-20) = 224\,000\ kJ $$

Son ≈62 kWh de calor a retirar por lote. La potencia del equipo depende de cuánto tiempo quieras tardar en enfriar: en 30 min, ≈124 kW instantáneos; en 1 h, ≈62 kW. Es una decisión de diseño, igual que la eficiencia de la bomba.

## 6. Tercer equipo: el fermentador (reactor de conversión)

Acá es donde se decide si tu cerveza tiene alcohol o no. DWSIM no tiene un bloque "fermentador": se arma con un `Conversion Reactor` — el mismo bloque, con la misma lógica, que usa tanto el tutorial oficial de DWSIM para una planta de etanol como la tesis de cerveza de quinua citada en la sección 2. No hace falta resolver ecuaciones diferenciales de cinética para este nivel: alcanza con fijar qué porcentaje del azúcar se convierte.

1. **Agregá los componentes que faltan.** En *Compounds*, además de `Water`: `Glucose`, `maltose`, `Ethanol`, `Carbon dioxide` (base ChemSep).
2. **Property package: seguí con Steam Tables.** Como el objetivo es ≤0,5 % v/v de etanol, la mezcla queda muy diluida — `Steam Tables (IAPWS-IF97)` alcanza. Para una receta con alcohol normal (~5 % v/v) conviene `NRTL` — lo que usa el tutorial oficial de planta de etanol de DWSIM, porque ahí sí la mezcla agua-etanol deja de comportarse como ideal.
3. **Armá el reactor.** `Conversion Reactor` desde *Object Palette > Reactors*. Entrada: el mosto frío que sale del intercambiador. Dos salidas: fase líquida (`cerveza`) y gas (`CO2`) — el reactor separa fases automáticamente.
4. **Cargá la corriente de entrada** (mosto frío, lote de 650 L): Water ≈ 632 kg, maltose ≈ 63,2 kg, Glucose ≈ 6,4 kg (total ≈ 701,6 kg). Temperatura 20 °C, Presión 1 atm.
5. **Cargá las dos reacciones de conversión**, en *Settings > Reactions*:

| Reacción | Ecuación | Base Comp | Conversion [%] |
|---|---|---|---|
| Glucosa | C6H12O6 → 2CO2 + 2C2H5OH | Glucose | ≈ 7–8 |
| Maltosa | H2O + C12H22O11 → 4CO2 + 4C2H5OH | maltose | ≈ 7–8 |

Agregá las dos al mismo `Reaction Set` y asignaselo al reactor.

### ¿De dónde sale el 7–8 % de conversión?

Es el cálculo de diseño que hace "sin alcohol" a la cerveza. A 100 % de conversión producirías:

$$ m_{etanol,100\%} \approx (63.2+6.4)\ kg\ azúcar \times 0.53\ \tfrac{kg\ etanol}{kg\ azúcar} \approx 37\ kg $$

(0,53 kg etanol/kg azúcar sale de la estequiometría de las dos reacciones — coincide con el 5,3 % de alcohol que la tesis citada valida contra su cerveza experimental de 5 %.) El objetivo es ≤0,5 % v/v ≈ 3,95 g/L (CAA, Art. 1080):

$$ \text{Conversión necesaria} = \frac{P_{objetivo} \times V_{mosto}}{m_{etanol,100\%}} = \frac{3.95\ g/L \times 700\ L}{37\,000\ g} \approx 7.5\ \% $$

Por eso `Conversion [%]` no es 100 (cerveza normal) sino ≈7–8: le decís al reactor que deje fermentar solo una fracción chica del azúcar, a propósito.

6. **Resolvé y verificá el % de alcohol.** `Solve`. En la corriente `cerveza`, pestaña *Results > Compound Properties*, mirá el `Volumetric Flow` de `Ethanol` frente al total — dividiendo esos dos caudales volumétricos obtenés el %v/v directo. Si te pasás de 3,95 g/L, bajá el `Conversion [%]` y volvé a correr: es iteración normal de diseño.

### Qué calcula DWSIM por dentro

Balance de materia por componente, ahora con generación/consumo:

$$ \dot m_{i,out} = \dot m_{i,in} + \sum_r \nu_{i,r}\,\xi_r $$

Balance de energía: la fermentación es exotérmica — la tesis citada reporta un calor de reacción de −221 877 kJ/kmol de glucosa y −312 858 kJ/kmol de maltosa, a 25 °C. Si fijás el reactor en modo isotérmico (T de salida = T de entrada), DWSIM calcula cuánto calor hay que retirar para mantenerla — el dato que define el tamaño de la camisa de refrigeración del fermentador real.

> No pierdas de vista la escala: 650 L es el volumen de *lote*, no un caudal por hora. Cargá los kilos del lote directamente como caudal másico de la corriente — DWSIM resuelve el flowsheet como una única "pasada" que representa tu lote completo, no una operación continua real.

## 7. Mapa de equipos: cómo seguir armando la planta

| En el diagrama | Bloque en DWSIM | Detalle |
|---|---|---|
| Maceración / gelatinización | Heater + Mixer (o CSTR) | T = 90 °C, luego 65 °C; composición malta+agua |
| Bomba 1 / Bomba 2 | `Pump` | Armada en la sección 4 |
| Sacarificación + aditivos | `CSTR` con reacción de conversión | Almidón → azúcares fermentables, 60 min |
| Filtro (bagazo) | `Solids Separator` | % de sólidos como bagazo vs. mosto clarificado |
| Hervor + lúpulo | `Heater` | T ebullición, 60 min, pérdida por vapor |
| Enfriador de mosto | `Cooler` | Armado en la sección 5 |
| Sedimentador (whirlpool) | `Solids Separator` | Eficiencia de remoción del trub |
| Fermentador | `Conversion Reactor` | Armado en la sección 6 |
| Pasteurizador | `Heater` / `Heat Exchanger` | Mantener 78–85 °C |

## 8. Cómo avanzar con el resto del TP

**Etapa 1 — Separadores sólido-líquido.** Con la bomba, el intercambiador y el fermentador resueltos, seguí con el filtro (bagazo) y el sedimentador de whirlpool (trub) como `Solids Separator`.

**Etapa 2 — Balance de energía del resto de la planta.** `Heater`/`Cooler` en maceración (65–67 °C), hervor y pasteurizado (78–85 °C): calor sensible y pérdidas por vapor, con la misma lógica que el intercambiador de la sección 5.

**Etapa 3 — Comparar variantes.** Con la planta completa, corré el mismo flowsheet cambiando el `Conversion %` del fermentador o la composición del mosto, y compará rendimiento y grado alcohólico entre variantes.

**Etapa 4 — Ir más allá: dinámica temporal.** El reactor de conversión da el estado final, no la trayectoria en el tiempo. Para el perfil de fermentación día a día —o una fermentación arrestada en vez de conversión fija— ver la sección siguiente.

## 9. Sección avanzada: modelar la fermentación en el tiempo, con cinética de Monod

Las secciones 4 a 6 ya dan una cerveza sin TACC y sin alcohol funcionando en DWSIM, con un reactor de conversión de estado estacionario. Esta sección es opcional y va un escalón más allá: en vez de fijar de entrada qué porcentaje del azúcar se convierte, modelás cómo evoluciona la fermentación minuto a minuto — útil para diseñar una fermentación *arrestada* (cortarla en un instante *t\** elegido) en vez de una conversión fija.

### Por qué acá sí hace falta un modelo cinético

El reactor de conversión de la sección 6 resuelve un balance de estado estacionario: dice cuánto etanol hay al final, no cómo se llegó ahí. Si necesitás la trayectoria en el tiempo hace falta un modelo distinto.

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

Integrando el sistema —en una planilla, en Python, o en un reactor `Batch` de DWSIM con cinética definida por vos— obtenés *P(t)*. Buscás *t\** donde *P* alcanza el límite legal:

$$ P(t^{*}) = 0.5\ \%v/v \approx 3.95\ g/L $$

Ese *t\** es el tiempo de fermentación que programás: al alcanzarlo, se interrumpe la fermentación (fermentación arrestada) enfriando rápido y separando la levadura.

| Equipo nuevo | Bloque en DWSIM | Qué hace |
|---|---|---|
| Enfriador de corte | `Cooler` | Baja la temperatura rápido para inactivar la levadura en *t\** |
| Separador de levadura | `Solids Separator` | Saca la biomasa antes de que siga fermentando en la botella |

## 10. Qué entregar

- El archivo de simulación de DWSIM con la bomba, el intercambiador y el fermentador resueltos.
- El cálculo manual de verificación de cada equipo (trabajo real y ΔT de la bomba; calor retirado en el intercambiador; % de conversión y grado alcohólico del fermentador) comparado contra el resultado del simulador.
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
- [Límite de gluten en Argentina — 10 mg/kg](https://celiaquia.info/valor-de-gluten-maximo-permitido-en-alimentos-para-celiacos/) (Art. 1383, CAA)
