+++
title = "Segunda Ley de Newton — aplicaciones"
date = "2026-06-26"
draft = false
math = true
weight = 6
description = "Aplicación de F=ma con DCL, problemas combinados de fuerzas y cinemática, estrategia GUESS encadenado."
tags = ["cap05", "fuerzas", "Newton", "Segunda Ley", "F=ma", "GUESS", "diagrama de cuerpo libre", "cinemática"]
lastmod = "2026-10-21"
traduccion_estado = "Ampliada"
cotejo_estado = "Desarrollo cotejado: pp. 313–323"
figuras_estado = "2 figuras recuperadas en esta tanda; ver fuente de cada figura"
visual_estado = "Pendiente: revisión en navegador"
revision_estado = "En revisión: observaciones de adaptación identificadas"
+++

**Fuente:** Jeff Bigler, *Physics 1: Mechanics in Plain English*, edición octubre de 2025, pp. 313–323. [Consultar el original (PDF)](https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf#page=313).

## Del diagrama a la ecuación

La segunda ley se aplica a un cuerpo o sistema de masa constante, en un marco inercial:

$$\sum\vec F=m\vec a$$

Primero se identifican las fuerzas; después se suman sus componentes. No se multiplica una fuerza aislada por la masa ni se supone que la fuerza aplicada sea necesariamente la resultante.

En una dimensión:

$$F_{1x}+F_{2x}+\cdots=ma_x$$

El signo de cada componente proviene del eje. Para un cuerpo extendido, la ecuación describe el movimiento del centro de masa; el equilibrio completo puede requerir también balance de torques.

## Equilibrio y aceleración

| Resultante | Qué permite afirmar |
|---|---|
| Cero | La velocidad permanece constante; puede ser cero o no |
| Hacia la derecha | La aceleración apunta a la derecha; la velocidad inicial todavía importa |
| Variable con el tiempo | La aceleración puede variar; no se aplican automáticamente las ecuaciones de aceleración constante |

Bigler llama equilibrio estático al caso de reposo y equilibrio dinámico al de velocidad constante. En esta unidad usamos esa distinción para la traslación del sistema elegido.

## Ejemplos originales de fuerzas opuestas

Para el carro de 35 kg sometido a una resultante de $+50$ N:

$$a_x=\frac{50}{35}\ \mathrm{m/s^2}\approx+1{,}43\ \mathrm{m/s^2}$$

En el juguete de 0,60 kg, Jamie tira hacia la izquierda con 40 N y Edward hacia la derecha con 60 N. Elegimos derecha positiva:

{{< figura src="/images/diagramas/cap05_segunda-juguete_pp314.png" width="420" alt="Diagrama del juguete tirado en sentidos opuestos." caption="Diagrama del juguete tirado en sentidos opuestos." source="Jeff Bigler, edición octubre de 2025, p. 314. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$F_{\mathrm{neta},x}=-40+60=+20\ \mathrm N$$

$$a_x=\frac{20}{0{,}60}\approx+33{,}3\ \mathrm{m/s^2}$$

El diagrama incluye las fuerzas sobre el juguete. Las fuerzas que el juguete ejerce sobre cada niño no se agregan a esa misma suma.

## Conectar fuerzas con cinemática

Un carro de libros de 75 kg parte del reposo. Actúa una **resultante constante** de 100 N y se pregunta cuánto se desplaza hasta llegar a 4,0 m/s.

$$a=\frac{100}{75}=\frac43\ \mathrm{m/s^2}$$

$$v^2-v_0^2=2a\Delta x\quad\Rightarrow\quad\Delta x=\frac{16}{2(4/3)}=6{,}0\ \mathrm m$$

No se necesita conocer el tiempo para usar esa ecuación. Si se quiere comprobarlo, $t=v/a=3{,}0$ s y $\Delta x=at^2/2=6{,}0$ m.

{{< nota-adaptacion pagina="315" origen="Tabla y redondeo del ejemplo original" >}}
El enunciado y la operación usan 75 kg, pero la tabla de datos imprime 5 kg. Se conserva 75 kg, compatible con la aceleración y el resultado. También se mantienen cifras de guarda: usar 1,3 m/s² antes del último paso cambia ligeramente la cuenta, aunque el resultado escolar siga siendo aproximadamente 6 m.
{{< /nota-adaptacion >}}

## Fuerza aplicada y fricción no son la misma incógnita

El bloque de 5,0 kg pasa del reposo a 6,0 m/s en 1,5 s mientras una fricción de 2,0 N se opone al deslizamiento. Se supone aceleración constante y fuerza aplicada horizontal.

{{< figura src="/images/diagramas/cap05_segunda-bloque_pp317.png" width="290" alt="Diagrama del bloque acelerado sobre el suelo." caption="Diagrama del bloque acelerado sobre el suelo." source="Jeff Bigler, edición octubre de 2025, p. 317. Figura del original; etiquetas en inglés. CC BY-NC-SA 4.0." >}}

$$a_x=\frac{6-0}{1{,}5}=4{,}0\ \mathrm{m/s^2}$$

$$F_a-2=5(4)\quad\Rightarrow\quad F_a=22\ \mathrm N$$

La resultante es 20 N, pero la fuerza aplicada es 22 N. El balance vertical justifica normal y peso iguales en este caso; no intervienen en la suma horizontal.

## Ejercicios del original, pp. 319–323

Resolvé antes de consultar los controles. Los resultados utilizan $g=10\ \mathrm{m/s^2}$ y los supuestos indicados en el libro.

| Ejercicio adaptado | Control de resultado |
|---|---|
| Canoa: 225 N y 165 N, ambas al este | 390 N al este |
| Canoa: 225 N al oeste y 165 N al este | 60 N al oeste |
| Perros: 135 N y 143 N al este, 153 N al oeste | 125 N al este; con trineo y conductor de 250 kg, $a=0{,}50\ \mathrm{m/s^2}$ |
| Disco: resultante 10 N y aceleración 50 m/s² | Masa 0,20 kg |
| Caja de 12 kg: 15 N netos durante 6,0 s desde reposo | Rapidez 7,5 m/s |
| Carro de 0,60 kg: 1,2 m en 4,0 s desde reposo, aceleración constante | $a=0{,}15\ \mathrm{m/s^2}$; resultante 0,090 N |
| Persona de 44 kg quieta sobre una o dos balanzas | Peso 440 N; reparto igual: 220 N por balanza |
| Astronauta de 70 kg con aceleración 0,36 m/s²; nave de $10^4$ kg | Fuerza de módulo 25,2 N; nave $0{,}00252\ \mathrm{m/s^2}$ en sentido opuesto |
| Desde reposo hasta $v$ en tiempo $t$, masa constante | Resultante media $mv/t$; constante si lo es la aceleración |
| Estudiante de 60 kg: de 0 a 16 m/s en 4 s | 240 N netos |
| Elevar 60 kg con aceleración 2 m/s² | Fuerza aplicada 720 N; resultante 120 N |
| Aparato que pesa 400 N en Tierra; campo en Mercurio de 3,6 N/kg | Masa 40 kg; peso 144 N |
| Caja de 500 kg: empuje 1 200 N y aceleración 0,5 m/s² | Rozamiento 950 N opuesto al empuje |

**Comprobación propia:** en el ejercicio de elevar 60 kg, restá el peso a la fuerza aplicada. Si usás 120 N como fuerza total hacia arriba, el balance no produce la aceleración pedida.

## Método de resolución

Elegí sistema y ejes, dibujá las fuerzas, escribí su suma y reconocé qué cantidad falta. Si necesitás aceleración, podés obtenerla de una relación cinemática compatible con el modelo. Al terminar, comprobá signos, unidades y que la fuerza encontrada sea aplicada o neta según lo que se preguntó.

---

Traducción y adaptación pedagógica: Prof. Ing. Luciano Lamaita, 2026. Original de Jeff Bigler y adaptación bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los ejemplos propios y las observaciones en revisión se identifican en el texto.
