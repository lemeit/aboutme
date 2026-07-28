import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Orden lógico de aprendizaje (como en Serway & Vuille).
// Usamos slugSegment (nombre de carpeta, ya limpio) en lugar de displayName
// para evitar problemas de normalización de acentos.
// slugSegment: "mecanica", "gravitacion", etc.

const areaOrder = [
  "mecanica",
  "gravitacion",
  "materia",
  "termodinamica",
  "ondas",
  "electricidad-y-magnetismo",
  "fisica-moderna",
]

const mecanicaOrder = ["fundamentos", "cinematica", "dinamica", "estatica", "energia"]

const ondasOrder = ["ondas-electromagneticas-y-luz"]

function priorityOf(slugSegment: string): number {
  let idx = areaOrder.indexOf(slugSegment)
  if (idx !== -1) return idx

  idx = mecanicaOrder.indexOf(slugSegment)
  if (idx !== -1) return 100 + idx

  idx = ondasOrder.indexOf(slugSegment)
  if (idx !== -1) return 200 + idx

  return 9999
}

ExternalPlugin.Explorer({
  sortFn: (a: any, b: any) => {
    // carpetas antes que notas
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    // slugSegment: nombre de carpeta limpio sin acentos (mecanica, gravitacion…)
    const pa = priorityOf(a.slugSegment ?? "")
    const pb = priorityOf(b.slugSegment ?? "")
    if (pa !== pb) return pa - pb

    // fallback: alfabético por displayName
    return (a.displayName ?? "").localeCompare(b.displayName ?? "", "es", {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
