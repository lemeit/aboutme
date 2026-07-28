# profe.lemeit.ar — Sitio personal de Luciano Lamaita

Sitio personal de **Prof. Ing. Luciano Lamaita** — docente de Física en Saladillo, Buenos Aires.
Reúne la traducción y adaptación al español de las notas de Jeff Bigler, apuntes de clase y proyectos técnicos.

🌐 **[profe.lemeit.ar](https://profe.lemeit.ar)**
🔬 **[profe.lemeit.ar/conceptos](https://profe.lemeit.ar/conceptos)** — Mapa de conceptos Quartz/Obsidian

---

## Stack

| Componente | Tecnología |
|-----------|------------|
| Generador estático (portal) | [Hugo](https://gohugo.io/) v0.163+ con tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod) |
| Mapa de conceptos | [Quartz v5](https://quartz.jzhao.xyz/) (Obsidian) en `quartz/` |
| Deploy | [Cloudflare Pages](https://pages.cloudflare.com/) — auto-deploy en push a `main` |
| Repositorio | GitHub — `lemeit/aboutme` |
| Dominio | `profe.lemeit.ar` vía Cloudflare DNS |

---

## Estructura del proyecto

```
aboutme/
├── content/                            ← Contenido Hugo
│   ├── notes/
│   │   ├── notas-fisica/               ← Traducción de Bigler (Physics 1)
│   │   │   ├── cap01-laboratorio/      ✅ completo (9 notas)
│   │   │   ├── cap02-matematicas/      ✅ completo (6 notas)
│   │   │   ├── cap03-cinematica-1d/    ✅ completo (10 notas)
│   │   │   ├── cap04-cinematica-2d/    🔄 en progreso
│   │   │   ├── cap05-fuerzas-1d/       ⬜ en preparación
│   │   │   ├── cap06-fuerzas-2d/       ⬜
│   │   │   └── …
│   │   ├── herramientas/               ← Herramientas digitales (Tracker, etc.) [weight=2]
│   │   ├── fisica-4to/                 ← Introducción a la Física 4° año [weight=3]
│   │   ├── fisica-5to/                 ← Física 5° año — INJ [weight=4]
│   │   ├── fisica-6to/                 ← Física Clásica y Moderna 6° año — INJ [weight=5]
│   │   └── lab-industrias-7mo/         ← Laboratorio de Industrias 7° TQ — EEST N°1 [weight=6]
│   ├── projects/                       ← Proyectos técnicos (EMA, EUREKA, DVBA GIS)
│   ├── propuestas/                     ← Proyectos pedagógicos institucionales
│   └── about.md                        ← Página "Sobre mí"
├── quartz/                             ← Mapa de conceptos Quartz/Obsidian
│   ├── content/
│   │   ├── index.md                    ← Home — links a las 7 áreas (para el grafo)
│   │   ├── mecanica/                   ← Cinemática, dinámica, estática, energía
│   │   ├── gravitacion/
│   │   ├── materia/
│   │   ├── termodinamica/
│   │   ├── ondas/
│   │   ├── electricidad-y-magnetismo/
│   │   └── fisica-moderna/
│   ├── quartz.config.yaml              ← Configuración del sitio Quartz
│   └── quartz.ts                       ← Ordenamiento del Explorer por área temática
├── assets/css/extended/custom.css      ← Paleta X-Wing + dark mode
├── layouts/notes/list.html             ← Listado de secciones con logos y orden por weight
├── layouts/partials/home_info.html     ← Home con últimas notas (orden por lastmod)
└── hugo.toml                           ← Configuración Hugo (locale es-AR, fechas DD/MM/YYYY)
```

---

## Diseño y paleta

### Paleta X-Wing Poe Dameron (modo claro)

| Variable CSS | Valor | Uso |
|---|---|---|
| `--primary` | `#9B3D00` | Links, headings |
| `--secondary` | `#5C2200` | Texto secundario, hover |
| `--theme` / `--entry` | `#FAF7F2` | Fondo crema cálido |
| `--code-bg` | `#F0EBE2` | Listas, bloques de código |

### Dark mode (sincronizado con Quartz)

| Variable CSS | Valor | Uso |
|---|---|---|
| `--theme` | `#1A1612` | Fondo |
| `--entry` | `#221E18` | Tarjetas |
| `--primary` | `#F2ECE4` | Texto principal — crema cálido |
| `--content` | `#E8DFD6` | Cuerpo de texto |
| Links en dark | `#B84800 !important` | Naranja idéntico al Quartz |

Selector crítico: `:root[data-theme="dark"]` (no `.dark`) — coincide con la especificidad de PaperMod v8+.

---

## Quartz — Mapa de conceptos (`/conceptos/`)

El subdirectorio `quartz/` es un sitio Quartz v5 independiente, basado en notas Obsidian.
Se sirve en `profe.lemeit.ar/conceptos` y tiene su propio deploy en Cloudflare Pages.

### Configuración relevante (`quartz/quartz.config.yaml`)

- **Paleta**: sincronizada con Hugo — fondo `#1A1612`, links naranjas `#B84800`
- **Locale**: `es-ES`
- **Explorer**: orden temático por área (Mecánica → Gravitación → … → Física Moderna) definido en `quartz.ts`
- **Grafo local**: `depth: 2` — desde la home muestra áreas + sus conceptos directos
- **Grafo global**: disponible con el toggle del widget (ícono de red en el panel derecho)

### Ordenamiento del Explorer (`quartz/quartz.ts`)

El Explorer usa `slugSegment` (nombre de carpeta, ya limpio: `mecanica`, `gravitacion`, etc.)
para ordenar sin problemas de normalización de acentos:

```typescript
ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // areaOrder: ["mecanica", "gravitacion", "materia", ...]
    const pa = priorityOf(a.slugSegment)
    const pb = priorityOf(b.slugSegment)
    if (pa !== pb) return pa - pb
    return a.displayName.localeCompare(b.displayName, "es", ...)
  }
})
```

### Grafo — conexiones

El `index.md` raíz tiene wikilinks a las 7 áreas con ruta explícita:
```markdown
- [[mecanica/index|Mecánica]]
- [[gravitacion/index|Gravitación]]
...
```
Esto garantiza que el grafo local muestre la red de conexiones desde la home.

---

## Sobre las Notas de Física

Las notas son una **traducción y adaptación al español** de:

> Bigler, J. — *Physics 1: Mechanics in Plain English*
> Lynn English High School, Lynn MA · [mrbigler.com](https://www.mrbigler.com)
> Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Adaptación al español con autorización del autor.
Traducción, adaptación pedagógica e integración con actividades de campo: **Prof. Ing. Luciano Lamaita**, Saladillo, Buenos Aires, 2026.

### Herramientas complementarias

La sección **Herramientas Digitales** (`/notes/herramientas/`) incluye guías de uso:

- **Tracker** — análisis de video para física (MRU, MRUV, tiro oblicuo, etc.)
  - Cubre Tracker Online y Desktop, calibración, marcado de puntos, lectura de gráficos, exportación
  - Desarrollado por Douglas Brown (Cabrillo College) — [Open Source Physics](https://www.compadre.org/osp/)

---

## Instituciones

| Materia | Institución |
|---------|-------------|
| Introducción a la Física — 4° año | Colegio Madre Teresa + Instituto Niño Jesús (INJ) |
| Física — 5° año | Instituto Niño Jesús (INJ) |
| Física Clásica y Moderna — 6° año | Instituto Niño Jesús (INJ) |
| Laboratorio de Industrias — 7° TQ | EEST N°1 "Gral. Savio" |

---

## Customizaciones sobre PaperMod

| Archivo | Propósito |
|---------|-----------|
| `assets/css/extended/custom.css` | Paleta X-Wing + dark mode sincronizado con Quartz |
| `layouts/notes/list.html` | Listado de secciones con logos, weight, bloque Conceptos solo en `/notes/` |
| `layouts/partials/home_info.html` | Home con últimas 4 notas ordenadas por `lastmod` |
| `hugo.toml` | Locale `es-AR`, fechas `DD/MM/YYYY`, lastmod desde git |
| `static/favicon.svg` | Favicon — letra L serif naranja |
| `static/images/logos/` | Logos institucionales |
| `static/images/diagramas/` | Capturas del libro de Bigler |

### Notas de implementación críticas

- **Dark mode**: usar `:root[data-theme="dark"]` (especificidad 0,2,0) para igualar a PaperMod; `.dark` no funciona
- **Links en dark mode**: requieren `color: #B84800 !important` para ganar la especificidad de los selectores de PaperMod
- **Secciones de notas**: cada `_index.md` tiene un `weight` único (1–6) para evitar orden indeterminado
- **Bloque "Conceptos de Física"**: solo aparece en `/notes/` gracias a `{{ if .Parent.IsHome }}`

---

## Desarrollo local

### Hugo (portal)

```powershell
cd C:\GitHub\aboutme
hugo server --buildDrafts
# → http://localhost:1313
```

### Quartz (mapa de conceptos)

```powershell
cd C:\GitHub\aboutme\quartz
npm ci
npx quartz plugin install
npx quartz build --serve
# → http://localhost:8080
```

> La carpeta `public/` es generada automáticamente. **No forma parte del repo** (está en `.gitignore`).

---

## Deploy

Cada `git push` a `main` dispara un build automático en Cloudflare Pages (~1–2 minutos).

```powershell
cd C:\GitHub\aboutme
git add .
git commit -m "descripción del cambio"
git push
```

Si git falla por `index.lock` (problema de Windows):

```powershell
Remove-Item C:\GitHub\aboutme\.git\index.lock -Force
```

---

## Contacto

- 🌐 [profe.lemeit.ar](https://profe.lemeit.ar)
- 💼 [linkedin.com/in/llamaita](https://www.linkedin.com/in/llamaita/)
- 🐙 [github.com/lemeit](https://github.com/lemeit)
