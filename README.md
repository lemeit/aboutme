# profe.lemeit.ar — Sitio personal de Luciano Lamaita

Sitio personal de **Prof. Ing. Luciano Lamaita** — docente de Física en Saladillo, Buenos Aires.
Reúne la traducción y adaptación al español de las notas de Jeff Bigler, apuntes de clase y proyectos técnicos.

🌐 **[profe.lemeit.ar](https://profe.lemeit.ar)**

---

## Stack

| Componente | Tecnología |
|-----------|------------|
| Generador estático | [Hugo](https://gohugo.io/) v0.163+ |
| Tema base | [PaperMod](https://github.com/adityatelange/hugo-PaperMod) |
| Deploy | [Cloudflare Pages](https://pages.cloudflare.com/) |
| Repositorio | GitHub — `lemeit/aboutme` |
| Dominio | `profe.lemeit.ar` vía Cloudflare DNS |

---

## Estructura del proyecto

```
content/
├── notes/
│   ├── notas-fisica/               ← traducción completa de Bigler (Physics 1)
│   │   ├── cap01-laboratorio/      ✅ completo (9 notas)
│   │   ├── cap02-matematicas/      ✅ completo (6 notas)
│   │   ├── cap03-cinematica-1d/    ✅ completo (10 notas)
│   │   ├── cap04-cinematica-2d/    🔄 en progreso (1 nota)
│   │   ├── cap05-fuerzas-1d/       ⬜ en preparación
│   │   ├── cap06-fuerzas-2d/       ⬜
│   │   ├── cap07-rotacion/         ⬜
│   │   ├── cap08-gravitacion/      ⬜
│   │   ├── cap09-energia/          ⬜
│   │   ├── cap10-momento/          ⬜
│   │   ├── cap11-mhs/              ⬜
│   │   ├── cap12-fluidos/          ⬜
│   │   └── cap13-relatividad/      ⬜
│   ├── herramientas/               ← Herramientas digitales (Tracker, etc.)
│   ├── fisica-4to/                 ← Introducción a la Física 4° año (en construcción)
│   ├── fisica-5to/                 ← Física 5° año — INJ (en construcción)
│   ├── fisica-6to/                 ← Física Clásica y Moderna 6° año — INJ (en construcción)
│   └── lab-industrias-7mo/         ← Laboratorio de Industrias 7° TQ — EEST N°1 (en construcción)
├── projects/                       ← Proyectos técnicos (EMA, EUREKA, DVBA GIS)
├── propuestas/                     ← Proyectos pedagógicos institucionales
└── about.md                        ← Página "Sobre mí"
```

---

## Sobre las Notas de Física

Las notas son una **traducción y adaptación al español** de:

> Bigler, J. — *Physics 1: Mechanics in Plain English*
> Lynn English High School, Lynn MA · [mrbigler.com](https://www.mrbigler.com)
> Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Adaptación al español con autorización del autor.
Traducción, adaptación pedagógica e integración con actividades de campo: **Prof. Ing. Luciano Lamaita**, Saladillo, Buenos Aires, 2026.

### Actividades complementarias

Algunas notas incluyen actividades con **Tracker** — herramienta gratuita de análisis de video:
- 🌐 [Tracker Online](https://opensourcephysics.github.io/tracker-online/)
- Desarrollado por Douglas Brown (Cabrillo College) y el proyecto [Open Source Physics](https://www.compadre.org/osp/)
- Estas actividades son adaptaciones propias y **no forman parte del texto original de Bigler**

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
| `layouts/notes/list.html` | Listado de materias y unidades con logos, orden por `weight`, numeración |
| `layouts/partials/home_info.html` | Home con últimas notas publicadas |
| `assets/css/extended/custom.css` | Paleta X-Wing Poe Dameron (naranja oscuro + negro) |
| `static/favicon.svg` | Favicon — letra L serif naranja sobre fondo negro |
| `static/images/logos/` | Logos institucionales (Madre Teresa, INJ, EEST N°1) |
| `static/images/diagramas/` | Capturas de figuras del libro de Bigler |

---

## Desarrollo local

```powershell
cd C:\GitHub\aboutme
hugo server --buildDrafts
# → http://localhost:1313
```

> La carpeta `public/` es generada automáticamente por Hugo al correr el servidor local.
> **No forma parte del repo** — está en `.gitignore`. Cloudflare Pages genera su propia versión en cada deploy.

## Deploy

Cada `git push` a `main` dispara un build automático en Cloudflare Pages (~1 minuto).

```powershell
git add .
git commit -m "descripción del cambio"
git push
```

---

## Contacto

- 🌐 [profe.lemeit.ar](https://profe.lemeit.ar)
- 💼 [linkedin.com/in/llamaita](https://www.linkedin.com/in/llamaita/)
- 🐙 [github.com/lemeit](https://github.com/lemeit)
