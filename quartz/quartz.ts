import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Convierte cualquier string a slug comparable: sin acentos, minúsculas, guiones.
// Ej: "Mecánica" → "mecanica", "Electricidad y Magnetismo" → "electricidad-y-magnetismo"
// Así la comparación es robusta sin importar si displayName viene como título o como slug.
function toSlug(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

// Orden lógico de aprendizaje (como en Serway & Vuille)
// Usamos slugs normalizados para evitar problemas de encoding con acentos
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

function priorityOf(displayName: string): number {
  const slug = toSlug(displayName)

  let idx = areaOrder.indexOf(slug)
  if (idx !== -1) return idx

  idx = mecanicaOrder.indexOf(slug)
  if (idx !== -1) return 100 + idx

  idx = ondasOrder.indexOf(slug)
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
