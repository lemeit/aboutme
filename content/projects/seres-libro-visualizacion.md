+++
aliases = ["/projects/seres-termicos/libro/visualizacion/"]
title = "Hacer visible un campo"
description = "Ray marching y diagnóstico de la ventana tridimensional."
url = "/projects/simus/bestiario/visualizacion/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 27
book_part = "anexos"
book_part_title = "Anexos y taller"
book_label = "Anexo C"
[build]
list = "never"
+++

Estos dos prototipos permiten examinar la representación gráfica por separado de los organismos.

## Recorrer el volumen

La primera escena explora ray marching: acumular contribuciones a lo largo de un rayo para mostrar un campo volumétrico. La intensidad depende de decisiones de visualización, no solamente del estado térmico.

### Campo persistente y muestras del rayo

Este prototipo guarda un campo de $64^3$ celdas. Después de añadir fuentes gaussianas, cada subpaso aplica $\theta'=d(\theta+0{,}12\alpha L_3\theta)$: difusión con seis vecinos seguida de persistencia multiplicativa $d$. Las caras copian sus vecinos interiores. Es distinto de reconstruir desde cero una figura en cada imagen.

La cámara recorre posiciones $\mathbf x(s)=\mathbf o+s\mathbf d$. En cada muestra lee el campo interpolado y lo convierte en color y opacidad. La composición frontal acumula:

$$\mathbf C_{m+1}=\mathbf C_m+(1-A_m)a_m\mathbf c_m,\qquad A_{m+1}=A_m+(1-A_m)a_m.$$

**Ejemplo ilustrativo:** con acumulación inicial nula, una primera muestra de opacidad $0{,}2$ aporta $0{,}2\mathbf c_1$; otra de opacidad $0{,}5$ aporta $(1-0{,}2)0{,}5\mathbf c_2=0{,}4\mathbf c_2$. La opacidad conjunta es $0{,}6$, no $0{,}7$. El píxel mezcla estados: no es un termómetro local. La tabla inferior permite leer el campo directamente por índices.

{{< sim src="/simus/seres-termicos/v03-raymarching.html" title="Prototipo de visualización volumétrica" >}}

## Comprobar la ventana tridimensional

El diagnóstico permite contrastar el soporte gráfico del equipo. No agrega una ley térmica ni un capítulo de organismos.

La textura se construye una sola vez sobre $32^3$ celdas con una gaussiana de ancho $\sigma=5{,}5$ celdas y centro $(15{,}5,15{,}5,15{,}5)$:

$$\theta_{i,j,k}=\exp\left[-\frac{(i-15{,}5)^2+(j-15{,}5)^2+(k-15{,}5)^2}{2(5{,}5)^2}\right].$$

La exponencial produce valores positivos menores que uno; la conversión a textura permite probar su lectura en WebGL2. No hay ecuación temporal en esta prueba, de modo que el avance queda desactivado. Examinar otra celda cambia la lectura de la tabla, no la textura.

{{< sim src="/simus/seres-termicos/test_3D.html" title="Diagnóstico gráfico tridimensional" >}}
