import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Orden de lectura del portal (no alfabético): Mecánica, Gravitación, Materia,
// Termodinámica, Ondas, Electricidad y Magnetismo, Física Moderna.
//
// La función de orden se serializa a texto y se evalúa en el navegador, así que
// no puede referenciar nada de este módulo: el orden va declarado adentro.

ExternalPlugin.Explorer({
  sortFn: (a: any, b: any) => {
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    const areas = [
      "mecanica",
      "gravitacion",
      "materia",
      "termodinamica",
      "ondas",
      "electricidad-y-magnetismo",
      "fisica-moderna",
    ]
    const subareas: Record<string, number> = {
      fundamentos: 0,
      cinematica: 1,
      dinamica: 2,
      estatica: 3,
      energia: 4,
    }

    const ia = areas.indexOf(a.slugSegment ?? "")
    const ib = areas.indexOf(b.slugSegment ?? "")
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)

    const sa = subareas[a.slugSegment ?? ""]
    const sb = subareas[b.slugSegment ?? ""]
    if (sa !== undefined || sb !== undefined) return (sa ?? 99) - (sb ?? 99)

    return (a.displayName ?? "").localeCompare(b.displayName ?? "", "es", {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
