#!/usr/bin/env node
/**
 * Corrige las claves del índice del grafo de Quartz.
 *
 * Problema: las páginas de carpeta se indexan como "mecanica/index", pero el
 * plugin del grafo calcula la página actual desde la URL y la normaliza a
 * "mecanica" (sin barra). Al no coincidir, el grafo local de un área muestra un
 * solo punto en lugar de la red de subtemas.
 *
 * Qué hace: lleva claves y enlaces a la misma forma que usa el grafo al leer la
 * URL: sin "/index" final y sin barra final.
 *   "mecanica/index" -> "mecanica"
 *   "mecanica/"      -> "mecanica"
 * La raíz queda intacta: la clave "index" se normaliza a "/" en el navegador.
 *
 * Uso (después de `npx quartz build`, antes de copiar a public/conceptos):
 *   node scripts/fix-graph-slugs.mjs quartz/public/static/contentIndex.json
 */

import { readFileSync, writeFileSync } from "node:fs"

const RUTA = process.argv[2] ?? "quartz/public/static/contentIndex.json"

/** Forma canónica: sin barra final y sin el segmento "index" final. */
function normalizar(slug) {
  let s = slug
  if (s.length > 1 && s.endsWith("/")) s = s.slice(0, -1)
  if (s !== "index" && s.endsWith("/index")) s = s.slice(0, -"/index".length)
  return s
}

let indice
try {
  indice = JSON.parse(readFileSync(RUTA, "utf8"))
} catch (err) {
  // Es un arreglo cosmético del grafo: si el archivo no está, se avisa y se sigue,
  // para no tumbar un deploy entero por esto.
  console.warn(`[fix-graph-slugs] aviso: no se pudo leer ${RUTA} (${err.message}); se omite`)
  process.exit(0)
}

const salida = {}
let clavesCambiadas = 0
let enlacesCambiados = 0

for (const [clave, valor] of Object.entries(indice)) {
  const nuevaClave = normalizar(clave)
  if (nuevaClave !== clave) clavesCambiadas += 1

  const enlaces = Array.isArray(valor.links) ? valor.links : []
  const nuevosEnlaces = enlaces.map((l) => {
    const n = normalizar(l)
    if (n !== l) enlacesCambiados += 1
    return n
  })

  if (Object.prototype.hasOwnProperty.call(salida, nuevaClave)) {
    console.error(`[fix-graph-slugs] colisión de claves en "${nuevaClave}"; se conserva la primera`)
    continue
  }

  salida[nuevaClave] = { ...valor, slug: nuevaClave, links: nuevosEnlaces }
}

writeFileSync(RUTA, JSON.stringify(salida), "utf8")

console.log(
  `[fix-graph-slugs] ${clavesCambiadas} claves y ${enlacesCambiados} enlaces normalizados en ${RUTA}`,
)
