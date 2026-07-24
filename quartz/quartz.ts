import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Orden lógico de aprendizaje (como en Serway & Vuille), en vez de alfabético.
// OJO: FileTrieNode de este plugin no expone "slugSegment", solo "displayName"
// (el título que viene del frontmatter de cada index.md) e "isFolder".
// Por eso comparamos contra displayName, no contra el nombre de carpeta.

const areaOrder = [
  "Mecánica",
  "Gravitación",
  "Materia",
  "Termodinámica",
  "Ondas",
  "Electricidad y Magnetismo",
  "Física Moderna",
]

const mecanicaOrder = ["Fundamentos", "Cinemática", "Dinámica", "Estática", "Energía"]

const ondasOrder = ["Ondas Electromagnéticas y Luz"]

function priorityOf(displayName: string): number {
  let idx = areaOrder.indexOf(displayName)
  if (idx !== -1) return idx

  idx = mecanicaOrder.indexOf(displayName)
  if (idx !== -1) return 100 + idx

  idx = ondasOrder.indexOf(displayName)
  if (idx !== -1) return 200 + idx

  return 9999 // cualquier carpeta/nota no listada cae al final, orden alfabético entre sí
}

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // carpetas antes que notas, igual que el comportamiento por defecto
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    const pa = priorityOf(a.displayName)
    const pb = priorityOf(b.displayName)
    if (pa !== pb) return pa - pb

    // dentro del mismo grupo (o para lo no listado), alfabético normal
    return a.displayName.localeCompare(b.displayName, "es", { numeric: true, sensitivity: "base" })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()