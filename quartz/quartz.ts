import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Orden lógico de aprendizaje (como en Serway & Vuille), en vez de alfabético.
// Las claves son los nombres de carpeta (slug), no los títulos que se muestran.

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

  return 9999 // cualquier carpeta/nota no listada cae al final, orden alfabético entre sí
}

// Advanced: pasamos un callback que no se puede expresar en YAML
ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // carpetas antes que notas, igual que el comportamiento por defecto
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    const pa = priorityOf(a.slugSegment)
    const pb = priorityOf(b.slugSegment)
    if (pa !== pb) return pa - pb

    // dentro del mismo grupo (o para lo no listado), alfabético normal
    return a.displayName.localeCompare(b.displayName, "es", { numeric: true, sensitivity: "base" })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
