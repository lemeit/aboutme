+++
aliases = ["/projects/seres-termicos/libro/universo/"]
title = "El mundo que los contiene"
description = "Comparar una vista exterior y una perspectiva interior en 3D."
url = "/projects/simus/bestiario/universo/"
date = "2026-10-26"
lastmod = "2026-10-27"
draft = false
math = true
ShowToc = false
layout = "seres-libro"
book_id = "seres-termicos"
book_order = 16
book_part = "individuos"
book_part_title = "Parte III · De las formas a los individuos"
book_label = "Capítulo 15"
[build]
list = "never"
+++

El prototipo sitúa cuerpos en un entorno esférico y permite comparar una visión exterior con una interior. El cambio de perspectiva exige separar representación y dinámica.

## Qué observar

Identificá un mismo cuerpo desde ambas vistas y compará la sensación de escala y distancia. El volumen visible se reconstruye a partir del campo.

## Modelo y límites

La frontera esférica y sus reglas de interacción son decisiones del prototipo. El brillo y los halos ayudan a representar un campo: no son una predicción de emisión térmica ni un modelo astronómico.

## Seis vecinos para un campo tridimensional

El volumen numérico tiene $64\times48\times32$ celdas. Cada celda interior se conecta con dos vecinos por eje:

$$L_3\theta=\theta_{i+1,j,k}+\theta_{i-1,j,k}+\theta_{i,j+1,k}+\theta_{i,j-1,k}+\theta_{i,j,k+1}+\theta_{i,j,k-1}-6\theta_{i,j,k}.$$

La actualización implementada, después de sumar las fuentes gaussianas, es:

$$\theta^{n+1}=\theta^n+0{,}10\alpha L_3\theta^n-\lambda\theta^n.$$

La suma surge de aproximar las tres segundas derivadas por diferencias centradas. El coeficiente $0{,}10\alpha$ es numérico; los índices no constituyen por sí solos una métrica espacial en metros. Las caras del volumen copian las celdas interiores adyacentes.

**Ejemplo ilustrativo:** si el centro vale $0{,}4$ y sus seis vecinos valen $0{,}2$, $L_3=6(0{,}2)-6(0{,}4)=-1{,}2$. Con $\alpha=0{,}2$ y $\lambda=0{,}01$:

| Aporte | Valor |
| --- | --- |
| Estado anterior | $0{,}4$ |
| Difusión | $0{,}02(-1{,}2)=-0{,}024$ |
| Relajación | $-0{,}01(0{,}4)=-0{,}004$ |
| Estado siguiente | $0{,}372$ |

## Una esfera para la trayectoria, otra geometría para la malla

Cuando un centro supera su radio de confinamiento, el programa refleja su velocidad respecto de la normal exterior $\mathbf n$:

$$\mathbf v=\mathbf v_{\parallel}+\mathbf v_{\perp},\qquad \mathbf v_{\perp}=(\mathbf v\cdot\mathbf n)\mathbf n,$$
$$\mathbf v'=\mathbf v_{\parallel}-\mathbf v_{\perp}=\mathbf v-2(\mathbf v\cdot\mathbf n)\mathbf n.$$

La regla invierte la componente normal y conserva la tangencial. Es una regla de trayectoria; **no impone una frontera térmica esférica** sobre la malla rectangular. Las reservas y nacimientos continúan siendo reglas de individuos, con las limitaciones explicadas en [Contar a los individuos](/projects/simus/bestiario/individuos/).

## Del volumen al píxel

El render recorre muestras a lo largo de un rayo. Si cada muestra aporta opacidad $a$ y color emitido $\mathbf c$, la acumulación tiene la forma $\mathbf C'=\mathbf C+(1-A)a\mathbf c$, $A'=A+(1-A)a$. Las muestras posteriores quedan ponderadas por la transparencia restante. Un píxel mezcla profundidades: no equivale al estado de un único vóxel. Cambiar de cámara modifica esa mezcla sin cambiar la ecuación de difusión.

## Explorar la simulación

{{< sim src="/simus/seres-termicos/v07-3d.html" title="Capítulo 15 — El mundo que los contiene" height="1100" >}}
