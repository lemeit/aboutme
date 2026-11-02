#!/usr/bin/env bash
# Build de producción completo: Hugo + Quartz en /conceptos.
#
# El panel de Cloudflare Pages no acepta un comando multilínea: lo colapsa y
# termina ejecutando "hugo cd quartz ...". Por eso el build vive acá y el panel
# sólo llama a este script:
#
#   bash build.sh
#
# Equivale a los pasos documentados en README.md → Deploy.

set -euo pipefail

hugo

cd quartz
npm ci
npx quartz plugin install --from-config
npx quartz build
cd ..

# El plugin del grafo deduce la página actual desde la URL (sin barra final) y
# el índice guarda las carpetas como "x/index". Sin este paso, el grafo local
# de cada área muestra un solo punto. Ver README.md.
node scripts/fix-graph-slugs.mjs quartz/public/static/contentIndex.json

mkdir -p public/conceptos
cp -r quartz/public/* public/conceptos/
