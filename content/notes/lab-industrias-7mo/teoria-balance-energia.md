+++
title = 'Balance de energía: de la calorimetría a Bernoulli'
date = 2026-08-30
weight = 1
draft = false
math = true
description = 'De lo que ya sabés (balance de materia, gases ideales, calorimetría) al balance de energía y la ecuación de Bernoulli, con la mira puesta en el proyecto final: una cerveza sin TACC y sin alcohol.'
+++

Ya cerraste el balance de materia. Ahora arranca el balance de energía — y lo vamos a construir con la mira puesta en el proyecto final de la materia: diseñar, simular y justificar una cerveza **sin TACC y sin alcohol** (≤0,5 % v/v), hecha con malta de mijo u otras semillas sin gluten. Todavía no hace falta saber qué semilla exactamente — eso viene con más referencias más adelante —, pero sí hace falta el balance de energía: es lo que te va a permitir enfriar el mosto sin adivinar, dimensionar la bomba que lo mueve, y entender por dónde se va el calor cuando la fermentación libera energía.

## 0. Dónde estás parado

Balance de materia (lo que ya viste) → **balance de energía (donde estás ahora)** → Bernoulli, como caso particular → NPSH, como aplicación de Bernoulli en la succión de una bomba. Cada paso de esta guía se apoya en el anterior; no hay ningún concepto que aparezca de la nada.

## 1. Repaso: el balance de materia que ya sabés

Para cualquier volumen de control —un equipo puntual, o toda la planta cervecera— la materia que se acumula en un intervalo de tiempo es igual a la que entra menos la que sale, más lo que se genera menos lo que se consume por reacción química:

$$ \frac{dm}{dt} = \sum \dot m_{entra} - \sum \dot m_{sale} + \sum r_i V $$

En estado estacionario —o en cualquier equipo sin reacción ni acumulación— el término de acumulación es cero:

$$ \sum \dot m_{entra} = \sum \dot m_{sale} $$

Esto ya lo aplicaste al proceso completo de la cervecería piloto. El balance de energía que sigue usa exactamente la misma lógica de volumen de control — solo que en vez de contar kilos, cuenta energía.

## 2. De dónde partís para la energía

Dos herramientas que ya tenés, de otras materias:

**La ecuación de los gases ideales** — relaciona presión, volumen, temperatura y cantidad de materia de un gas:

$$ PV = nRT $$

No es una ecuación de energía: es una ecuación de estado. Pero el producto $ PV $ tiene unidades de energía (Pa·m³ = J), y ese detalle va a volver a aparecer más abajo — no por casualidad.

**La calorimetría** — cuando le entregás calor a algo y no hay ningún trabajo mecánico de por medio (nada se mueve, no hay pistón, no hay eje que gire), todo ese calor se traduce en un cambio de temperatura:

$$ Q = m\,C_p\,\Delta T $$

Esto no es un principio aparte: es un caso particular de la primera ley de la termodinámica, con el trabajo puesto en cero. Es el punto de partida para todo lo que sigue.

## 3. La primera ley, en la versión que ya usaste

La primera ley de la termodinámica dice que la energía no se crea ni se destruye, solo cambia de forma. Para un sistema cerrado (una masa fija, que no entra ni sale del recipiente):

$$ \Delta U = Q - W $$

Donde $ U $ es la energía interna del sistema (asociada al movimiento microscópico de las moléculas — macroscópicamente, la "sentís" como temperatura), $ Q $ es el calor que entra al sistema, y $ W $ es el trabajo que el sistema entrega hacia afuera.

En un calorímetro, el sistema no hace ningún trabajo: $ W=0 $, entonces $ \Delta U = Q $. Y como para líquidos el cambio de energía interna es, en la práctica, proporcional al cambio de temperatura, llegás directo a $ Q = m\,C_p\,\Delta T $.

**La idea que te tenés que llevar de acá:** la calorimetría es la primera ley con el trabajo en cero. Todo lo que viene ahora es la misma primera ley, sin esa restricción.

## 4. El problema nuevo: un sistema por el que fluye materia

El calorímetro es un **sistema cerrado**: la masa de agua adentro es siempre la misma masa de agua. La bomba, el intercambiador y el fermentador de tu proyecto son distintos — el mosto entra por un lado y sale por el otro, y en todo momento hay materia nueva pasando por adentro. Eso es un **sistema abierto**, o **volumen de control**.

El balance de materia de la sección 1 ya es la versión de sistema abierto para la masa. Al balance de energía le falta todavía un ingrediente: la primera ley que conocés fue pensada para una masa fija, y no contempla que la materia misma, al entrar y salir, también carga energía con ella.

## 5. Trabajo de flujo y entalpía

Pensá en una parcela de fluido que está por entrar al volumen de control. Para que entre, el fluido que ya está adentro tiene que "correrse" y hacerle lugar — y eso requiere trabajo, el mismo tipo de trabajo de expansión que aparece al lado de la ecuación de los gases ideales: presión por volumen.

Empujar un volumen $ V $ de fluido contra una presión $ P $ cuesta un trabajo:

$$ W_{flujo} = P\,V $$

A esto se lo llama **trabajo de flujo**, y es distinto del trabajo de eje ($ W_s $: el que hace girar un rotor, como el motor de una bomba). El trabajo de flujo no lo pone ningún motor: lo pone la presión del fluido mismo, como condición de estar entrando o saliendo de un volumen de control.

Como este trabajo de flujo aparece siempre, en cada corriente que entra o sale, conviene definir una propiedad que ya lo tenga incorporado. Esa propiedad es la **entalpía**:

$$ H = U + P\,V $$

La entalpía es energía interna más trabajo de flujo — la "energía total" que carga una corriente que fluye. Cuando DWSIM calcula el estado de una corriente, lo que reporta es entalpía, no energía interna sola: es la variable natural para todo lo que fluye por un flowsheet.

## 6. El balance de energía para un sistema abierto

Con la entalpía definida, el balance de energía de un sistema abierto en estado estacionario queda:

$$ \dot Q - \dot W_s = \Delta \dot H + \Delta\!\left(\frac{v^2}{2}\right)\dot m + \Delta(g z)\,\dot m $$

El calor que entra menos el trabajo de eje que sale es igual al cambio de entalpía entre salida y entrada, más el cambio de energía cinética, más el cambio de energía potencial de la corriente. En la mayoría de los equipos de proceso (bombas chicas, intercambiadores, reactores) los términos cinético y potencial son mucho más chicos que el cambio de entalpía, y se desprecian — pero los vas a necesitar para llegar a Bernoulli.

Cada equipo de la planta aplica una versión simplificada de esta misma ecuación:

| Equipo | Q̇ | Ẇₛ | Se reduce a |
|---|---|---|---|
| Bomba | 0 (adiabática) | ≠ 0 (trabajo de eje) | ΔH = −Ẇₛ |
| Intercambiador / enfriador | ≠ 0 | 0 | ΔH = Q̇ |
| Reactor (fermentador) | ≠ 0 (calor de reacción) | 0 | ΔH = Q̇ + calor de reacción |

## 7. El caso particular que es Bernoulli

Achicá la ecuación general para un tramo de cañería sin bomba ni turbina ($ \dot W_s=0 $), sin intercambio de calor ($ \dot Q=0 $), con un líquido incompresible y sin fricción. Sin fricción y sin calor agregado, la temperatura no cambia ($ \Delta U \approx 0 $); para un líquido incompresible, $ v=1/\rho $ es constante, así que:

$$ \Delta h \approx \frac{\Delta P}{\rho} $$

Reemplazando en el balance general (por unidad de masa, con $ \dot Q=\dot W_s=0 $) y reordenando entre el punto 1 (entrada) y el 2 (salida):

$$ \frac{P_1}{\rho} + \frac{v_1^2}{2} + g z_1 = \frac{P_2}{\rho} + \frac{v_2^2}{2} + g z_2 $$

Esta es la **ecuación de Bernoulli**. No es un principio nuevo: es el mismo balance de energía de la sección 6, con calor, trabajo de eje y fricción puestos en cero.

## 8. Bernoulli extendido: con bomba y con pérdidas

Un sistema de cañerías real casi nunca cumple esas tres condiciones a la vez: casi siempre hay una bomba y casi siempre hay fricción (energía mecánica que se degrada a calor, no recuperable como presión o velocidad útil). La versión de Bernoulli para diseñar sistemas de bombeo reincorpora esos dos términos:

$$ \frac{P_1}{\rho} + \frac{v_1^2}{2} + g z_1 + w_{bomba} = \frac{P_2}{\rho} + \frac{v_2^2}{2} + g z_2 + h_{pérdidas} $$

Con $ w_{bomba} $ el trabajo que la bomba entrega por unidad de masa, y $ h_{pérdidas} $ la energía disipada por fricción en cañerías y accesorios. Es la misma ecuación de la sección 7, con dos términos que antes valían cero y ahora no.

## 9. NPSH: la otra aplicación de Bernoulli — que el líquido no hierva en la succión

Hay una segunda pregunta, además de "cuánta presión gana el fluido": ¿qué pasa en la **entrada** de la bomba, antes de que el rotor empiece a empujar? Ahí es donde aparece el NPSH (*Net Positive Suction Head*), y es Bernoulli aplicado al tramo de cañería que va desde el tanque de origen hasta la boca de succión de la bomba.

Por Bernoulli, si la velocidad del fluido aumenta en algún punto de la cañería (por un estrechamiento, por ejemplo) o si hay pérdidas por fricción antes de llegar a la bomba, la presión local en ese punto **baja**. Y acá conectás con algo que ya sabés de calorimetría y cambio de fase: un líquido hierve cuando su presión de vapor iguala a la presión a la que está sometido — el agua hierve a 100 °C a 1 atm, pero a menor presión hierve a menor temperatura. Si la presión en la succión de la bomba cae lo suficiente, el líquido puede empezar a vaporizarse ahí mismo, **sin que nadie le agregue calor**, solo por la caída de presión. Esas burbujas de vapor colapsan violentamente al llegar a la zona de alta presión dentro de la bomba — eso es cavitación, y con el tiempo destruye el rotor.

El NPSH disponible es, justamente, el margen entre la presión real en la succión y la presión de vapor del líquido a esa temperatura, expresado como altura de columna de líquido (las mismas unidades de $ P/\rho g $ que ya usás en Bernoulli):

$$ NPSH_{disponible} = \frac{P_1 - P_{vapor}(T_1)}{\rho\,g} $$

Si el NPSH disponible en tu instalación es menor que el NPSH que el fabricante exige para esa bomba (un dato de placa, ligado al diseño del rotor), hay riesgo de cavitación — independientemente de si la bomba tiene presión de sobra en la **salida**. Es un chequeo aparte, y hay que hacerlo siempre.

Así calcula DWSIM la presión de vapor que necesita para esta cuenta: un flash de punto de burbuja a la temperatura de entrada $ T_1 $ —el mismo tipo de cálculo que le pedís al paquete de propiedades cuando pensás "¿a qué presión hierve este líquido a esta temperatura?"— te da $ P_{burbuja} $, que es la presión de vapor:

$$ NPSH = \frac{P_1 - P_{burbuja}}{\rho_{liq}\,g} $$

Para el mosto de tu proyecto esto importa especialmente en dos lugares: la succión de la bomba que saca el mosto caliente del hervor (a mayor temperatura, mayor presión de vapor, y por lo tanto menos margen de NPSH disponible — es más fácil cavitar bombeando líquido caliente que frío), y cualquier tramo de cañería con pérdidas altas antes de una bomba.

## 10. Cerrando el círculo: la bomba de tu proyecto

En la bomba de la planta piloto, la entrada y la salida tienen el mismo diámetro de cañería ($ \Delta(v^2/2)\approx 0 $) y no hay cambio de altura relevante ($ \Delta(gz)\approx 0 $). El balance general de la sección 6 se reduce a:

$$ -\dot W_s = \Delta \dot H \qquad \Longrightarrow \qquad w_{bomba} = \frac{\Delta P}{\rho} $$

que es exactamente la parte de presión de Bernoulli. La diferencia entre Bernoulli ideal (lo que calculás a mano en un primer paso) y lo que hace DWSIM por dentro está en un solo lugar: **la eficiencia**. Una bomba real no es 100 % eficiente — parte del trabajo se disipa por fricción interna, y esa parte no se pierde (la energía no se crea ni se destruye) sino que aparece como un pequeño aumento de temperatura. Por eso DWSIM calcula:

$$ h_2 = h_1 + \frac{P_2 - P_1}{\rho\,\eta} $$

Con los mismos números que vas a usar en la guía de simulación ($ \Delta P = 100\,000 $ Pa, $ \eta = 72\,\% $, $ \rho \approx 998 $ kg/m³, $ C_p \approx 4{,}186 $ kJ/kg·K):

$$ w_{ideal} = \frac{\Delta P}{\rho} = \frac{100\,000}{998} = 0.100\ \tfrac{\text{kJ}}{\text{kg}} \quad (\text{Bernoulli, sin pérdidas}) $$

$$ w_{real} = \frac{w_{ideal}}{\eta} = \frac{0.100}{0.72} = 0.139\ \tfrac{\text{kJ}}{\text{kg}} \quad (\text{lo que realmente entrega el motor}) $$

$$ \Delta T = \frac{w_{real} - w_{ideal}}{C_p} = \frac{0.139 - 0.100}{4.186} \approx 0.009\ ^{\circ}\text{C} $$

Ese $ \Delta T $, aunque chico, es la evidencia de que estás usando el balance de energía completo y no la versión ideal de Bernoulli, que por construcción da siempre $ \Delta T=0 $. Bernoulli te dice cuánta presión gana el fluido; el balance de energía completo te dice, además, adónde fue a parar la energía que no se convirtió en presión útil; y el NPSH te dice si, camino a la bomba, el fluido corre riesgo de hervir antes de tiempo.

## 11. Mapa conceptual

| Ya sabías | Es un caso particular de | Lo nuevo que agrega |
|---|---|---|
| Balance de materia | — | Punto de partida para el balance de energía (misma lógica de volumen de control) |
| Gases ideales ($ PV=nRT $) | — | $ PV $ tiene unidades de energía: la semilla del trabajo de flujo |
| Calorimetría ($ Q=mC_p\Delta T $) | Primera ley con $ W=0 $, sistema cerrado | — |
| Primera ley ($ \Delta U = Q-W $) | — | Sistema cerrado: masa fija |
| Balance de energía, sistema abierto | Primera ley + trabajo de flujo (entalpía) + términos cinético/potencial | Masa que entra y sale con energía propia |
| Bernoulli | Balance de energía con $ \dot Q=0 $, $ \dot W_s=0 $, sin fricción | — |
| Bernoulli extendido (bomba y pérdidas) | Balance de energía con fricción explícita | El término de pérdidas |
| NPSH | Bernoulli aplicado a la succión, con la presión de vapor como límite | El riesgo de cavitación |
| Balance de energía completo (DWSIM) | El balance general, sin ninguna simplificación | Entalpía real vía tablas de propiedades — la fricción aparece como ΔT |

No hay una ecuación de Bernoulli por un lado y un balance de energía por otro: hay una sola ecuación de conservación, y Bernoulli —con o sin bomba, con o sin NPSH— es lo que queda cuando le apagás (o le prendés) los términos correctos. Con esto ya tenés la base para la [guía de simulación paso a paso en DWSIM]({{< ref "simulacion-dwsim-cerveza" >}}), donde vas a aplicar exactamente estas ecuaciones a la bomba, el intercambiador y el fermentador de tu proyecto.
