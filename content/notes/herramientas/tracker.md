+++
title = "Tracker — Análisis de video para Física"
date = "2026-06-27"
draft = false
weight = 1
description = "Instalación, interfaz y flujo de trabajo completo para analizar movimiento a partir de video."
tags = ["tracker", "herramientas", "análisis de video", "laboratorio", "cinemática"]
+++

## Objetivos de aprendizaje

Al finalizar esta guía, vas a poder:

- Entender qué es Tracker y para qué sirve en Física.
- Elegir entre la versión online y la de escritorio según tu situación.
- Cargar un video, calibrar la escala y marcar posiciones cuadro a cuadro.
- Obtener gráficos de posición, velocidad y aceleración en función del tiempo.
- Exportar los datos para seguir trabajando en una planilla.

---

## ¿Qué es Tracker?

**Tracker** es una herramienta gratuita y de código abierto para analizar movimiento a partir de video. Fue desarrollada por **Douglas Brown** (Cabrillo College) en el marco del proyecto [Open Source Physics](https://www.compadre.org/osp/).

La idea es simple: filmás un objeto en movimiento, cargás el video en Tracker y marcás la posición del objeto cuadro a cuadro. Tracker calcula automáticamente velocidad y aceleración, y genera gráficos que podés analizar directamente.

> Tracker no reemplaza el cálculo ni la teoría — los complementa. Primero entendés el modelo (MRU, MRUV, tiro oblicuo), después lo verificás con datos reales del video.

---

## Tracker Online vs. Tracker de escritorio

| | Tracker Online | Tracker Desktop |
|---|---|---|
| Instalación | No requiere | Requiere Java |
| Acceso | Navegador (Chrome recomendado) | Windows / Mac / Linux |
| Velocidad | Depende de la conexión | Más rápido para videos largos |
| Funciones | Las esenciales | Completo (autotracking, más herramientas) |
| Recomendado para | Clases, práctica rápida | Trabajos con videos propios extensos |

**Para las actividades de clase, Tracker Online es suficiente y más práctico** — no hay que instalar nada ni preocuparse por versiones de Java.

🌐 [Tracker Online](https://opensourcephysics.github.io/tracker-online/)
💾 [Tracker Desktop — descarga](https://physlets.org/tracker/)

---

## Interfaz de Tracker Online

Al abrir Tracker Online vas a ver cuatro zonas principales:

```
┌─────────────────────────────────────────────────────────┐
│  Barra de herramientas                                  │
├──────────────────────────┬──────────────────────────────┤
│                          │  Panel de datos y gráficos   │
│   Panel de video         │  (tabla de coordenadas,      │
│   (el video cargado)     │   gráficos x(t), v(t), etc.) │
│                          │                              │
├──────────────────────────┴──────────────────────────────┤
│  Control de reproducción  (← cuadro / play / cuadro →) │
└─────────────────────────────────────────────────────────┘
```

Las herramientas más importantes de la barra:

- **Calibration Stick** (regla) — para fijar la escala real del video.
- **Point Mass** (punto de masa) — para marcar la posición del objeto a rastrear.
- **Coordinate Axes** (ejes) — para definir el origen y la dirección positiva.

---

## Flujo de trabajo paso a paso

### 1. Preparar el video

Antes de filmar, poné en escena un **objeto de tamaño conocido** visible en el video — una regla, una hoja A4 (29,7 cm), una cinta métrica. Ese objeto va a ser tu referencia de escala.

Recomendaciones para filmar:

- Cámara **fija** (no en mano, no siguiendo al objeto).
- El movimiento debe ocurrir en un **plano perpendicular** a la cámara.
- Buena iluminación, fondo contrastante con el objeto.
- **Al menos 30 fps** (los celulares modernos graban a 60 fps en modo normal).

---

### 2. Cargar el video

En Tracker Online: **File → Open File** (o arrastrá el video al panel).

Formatos aceptados: `.mp4`, `.mov`, `.avi`, `.webm`.

> Si el video es muy pesado o largo, recortalo antes con cualquier editor. Solo necesitás los segundos del movimiento que querés analizar.

---

### 3. Definir los ejes de coordenadas

Antes de calibrar, ubicá el **origen** donde tenga sentido para el problema:

- Para caída libre: en el punto de lanzamiento.
- Para tiro horizontal: en la posición inicial del objeto.
- Para MRU: en cualquier punto cómodo de la trayectoria.

En la barra de herramientas: **Coordinate Axes** → hacé clic y arrastrá el origen al lugar deseado.

Por defecto: eje $x$ hacia la derecha, eje $y$ hacia arriba. Podés rotarlos.

---

### 4. Calibrar la escala

1. Herramienta **Calibration Stick** → arrastrá los dos extremos para que coincidan con los extremos de tu objeto de referencia.
2. Hacé doble clic sobre la medida que aparece → escribí el valor real en metros (ej: `0.297` para una hoja A4).

Esto le dice a Tracker cuántos metros equivale cada píxel del video. Sin calibrar, los datos de posición no tienen unidad real.

---

### 5. Marcar posiciones — Point Mass

1. Herramienta **Point Mass** → creá una nueva masa (Track → New → Point Mass).
2. Ir al primer cuadro donde empieza el movimiento.
3. **Shift + clic** sobre el objeto → Tracker registra la posición $(x, y)$ de ese cuadro y avanza automáticamente al siguiente.
4. Repetir para cada cuadro. Para movimientos de 1–2 segundos a 30 fps son 30–60 marcas.

> Consejo: si el objeto es difícil de rastrear cuadro a cuadro, intentá usar un objeto brillante o con color fuerte. Tracker Desktop tiene autotracking; en la versión Online hay que hacerlo manualmente.

---

### 6. Leer los gráficos

Una vez marcados los puntos, Tracker muestra automáticamente:

- **Gráfico $x(t)$** — posición horizontal vs. tiempo.
- **Gráfico $y(t)$** — posición vertical vs. tiempo.

Podés cambiar qué se muestra haciendo clic en los ejes del gráfico. Las opciones incluyen `vx`, `vy`, `ax`, `ay`.

| Gráfico | Qué esperás ver |
|---------|----------------|
| $x(t)$ en MRU | Recta (pendiente = velocidad) |
| $y(t)$ en caída libre | Parábola (curvatura = $g/2$) |
| $v(t)$ en MRUV | Recta (pendiente = aceleración) |
| Trayectoria $y$ vs. $x$ | Parábola (tiro oblicuo) |

---

### 7. Exportar datos

**File → Export → Data File** → guardá como `.csv` o `.txt`.

El archivo tiene columnas `t`, `x`, `y`, `vx`, `vy` que podés abrir en Excel o en una planilla de Google para graficar, ajustar curvas o calcular valores específicos.

---

## Tips para mejores resultados

**En el video:**
- Filmá desde **exactamente de frente** al plano del movimiento. Si la cámara está inclinada, la perspectiva deforma las medidas.
- Usá **modo slow motion** del celular (120 fps o 240 fps) para movimientos rápidos — tenés más cuadros para marcar y los datos son más suaves.
- Evitá zoom digital durante la filmación.

**En Tracker:**
- Calibrá siempre antes de marcar puntos.
- Si el origen cambia de posición entre el inicio y el final del video, el análisis está mal — la cámara debe estar completamente quieta.
- Para movimientos en 1D (caída libre, MRU) solo necesitás seguir una coordenada.
- El botón **"A"** en el panel de datos ajusta automáticamente una curva a los datos (regresión lineal o cuadrática).

---

## Conexión con los contenidos de Física

| Actividad | Tema | Qué verificás |
|-----------|------|---------------|
| Objeto a velocidad constante | MRU | $x(t)$ es una recta → pendiente = $v$ |
| Pelota rodando por rampa | MRUV | $v(t)$ es una recta → pendiente = $a$ |
| Pelota cayendo | Caída libre | $y(t)$ parábola → $g$ desde curvatura |
| Pelota lanzada horizontalmente | Tiro horizontal | $x(t)$ recta + $y(t)$ parábola simultáneas |
| Lanzamiento con ángulo | Tiro oblicuo | Trayectoria parabólica en $y$ vs. $x$ |

---

## Recursos

- 🌐 [Tracker Online](https://opensourcephysics.github.io/tracker-online/) — versión web, sin instalación
- 💾 [Tracker Desktop](https://physlets.org/tracker/) — versión completa para instalar
- 📖 [Open Source Physics](https://www.compadre.org/osp/) — proyecto que desarrolla Tracker
- 🎥 [Video tutorial oficial (inglés)](https://www.youtube.com/watch?v=La3H7JywgX0) — 10 min, cubre el flujo completo

---

*Guía elaborada por Prof. Ing. Luciano Lamaita, 2026. Tracker es desarrollado por Douglas Brown (Cabrillo College) bajo licencia libre.*
