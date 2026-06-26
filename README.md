# profe.lemeit.ar — Sitio personal de Luciano Lamaita

Sitio personal de **Prof. Ing. Luciano Lamaita** — docente de Física y Química en Saladillo, Buenos Aires.  
Reúne apuntes de clase, guías y recursos para estudiantes, más proyectos técnicos.

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

## Estructura de contenido

```
content/
├── notes/
│   ├── fisica-4to/          ← Introducción a la Física — 4° año
│   │   ├── u1-generalidades/    (conocimiento científico, unidades, vectores)
│   │   ├── u2-cinematica/       (MRU, MRUV, caída libre, tiro oblicuo)
│   │   ├── u3-dinamica/         (Leyes de Newton)
│   │   ├── u4-energia/          (trabajo, energía, conservación)
│   │   ├── u5-electricidad/     (circuitos, Ohm, electromagnetismo)
│   │   └── u6-energia-termica/  (temperatura, termodinámica)
│   ├── fisica-5to/          ← Física — 5° año (INJ, en preparación)
│   ├── fisica-6to/          ← Física Clásica y Moderna — 6° año (INJ, en preparación)
│   └── lab-industrias-7mo/  ← Laboratorio de Industrias — 7° TQ (EEST N°1)
├── projects/                ← Proyectos técnicos (EMA, EUREKA, DVBA GIS)
├── propuestas/              ← Proyectos pedagógicos institucionales
└── about.md                 ← Página "Sobre mí"
```

---

## Instituciones

| Materia | Institución |
|---------|-------------|
| Introducción a la Física — 4° año | Colegio Madre Teresa + Instituto Niño Jesús (INJ) |
| Física — 5° año | Instituto Niño Jesús (INJ) |
| Física Clásica y Moderna — 6° año | Instituto Niño Jesús (INJ) |
| Laboratorio de Industrias — 7° TQ | EEST N°1 "Gral. Savio" |

---

## Notas de clase

Las notas están adaptadas del material de **Jeff Bigler** (*Physics 1: Mechanics in Plain English*),  
bajo licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/),  
con traducción y adaptación al Diseño Curricular DGCyE por Prof. Ing. Luciano Lamaita.

Cada nota incluye:
- Objetivos de aprendizaje
- Desarrollo conceptual con fórmulas (KaTeX)
- Ejemplos resueltos
- Actividades de campo con Tracker
- Preguntas para pensar
- Tags por unidad y tema

---

## Customizaciones sobre PaperMod

| Archivo | Propósito |
|---------|-----------|
| `layouts/notes/list.html` | Listado de materias y unidades con logos, orden por `weight`, numeración |
| `layouts/partials/home_info.html` | Home orientada al alumno con últimas notas |
| `assets/css/extended/custom.css` | Paleta X-Wing (naranja oscuro + negro) |
| `static/favicon.svg` | Favicon pulso ECG naranja sobre fondo negro |
| `static/images/logos/` | Logos institucionales (Madre Teresa, INJ, EEST N°1) |

---

## Desarrollo local

```powershell
cd C:\GitHub\aboutme
hugo server --buildDrafts
# → http://localhost:1313
```

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
