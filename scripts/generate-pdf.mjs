// scripts/generate-pdf.mjs
//
// Genera un PDF en formato "paper" (dos columnas) para las notas publicadas de /notes/ (excepto pdf = false), desde el manifiesto de Hugo.
//
// Se corre en CI (.github/workflows/generate-pdf.yml) contra un build
// LOCAL y descartable de Hugo -- no toca el build real de Cloudflare
// Pages. El unico resultado que se commitea es el PDF en
// static/files/pdf/<slug>.pdf.
//
// IMPORTANTE: Hugo referencia sus propios CSS/JS con rutas absolutas
// (/css/stylesheet.xxxx.css). Esas rutas solo resuelven bien si el HTML
// se sirve por HTTP -- abrirlo directo como file:// las rompe (Chromium
// las busca en la raiz del filesystem). Por eso este script levanta un
// server HTTP local mínimo sobre ./public antes de abrir las páginas.
//
// Uso: node scripts/generate-pdf.mjs
// Requiere que ./public ya exista (correr `hugo` antes).

import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const { chromium } = createRequire(import.meta.url)('playwright');
import { readFileSync, existsSync, mkdirSync, readdirSync, statSync, createReadStream, writeFileSync } from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const PUBLIC_DIR = process.env.HUGO_PUBLIC_DIR || 'public';
const OUT_DIR = process.env.PDF_OUT_DIR || path.join('static', 'files', 'pdf');
let PORT = Number(process.env.PDF_PORT || 8971);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function startServer() {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    let filePath = path.join(PUBLIC_DIR, urlPath);
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = path.join(PUBLIC_DIR, urlPath, 'index.html');
    }
    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end('not found: ' + urlPath);
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

function filesUnder(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap(name => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? filesUnder(full) : [full];
  }).sort();
}

function digest(parts) {
  const hash = createHash('sha256');
  for (const part of parts) { hash.update(part); hash.update('\0'); }
  return hash.digest('hex');
}

function targetFingerprint(target, sharedHash) {
  const html = readFileSync(target.htmlPath, 'utf8');
  const refs = [...html.matchAll(/<img\b[^>]*\bsrc=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi)]
    .map(m => m[1] || m[2] || m[3]);
  refs.push(target.logo, target.materiaLogo);
  const images = [...new Set(refs.filter(Boolean))].sort().map(src => {
    const pathname = decodeURIComponent(new URL(src, 'https://profe.lemeit.ar').pathname);
    const local = path.join('static', pathname);
    return existsSync(local) ? digest([pathname, readFileSync(local)]) : src;
  });
  const { htmlPath, ...metadata } = target;
  const printableHtml = html
    .replace(/<div\b[^>]*class=(?:"pdf-download[^\"]*"|'pdf-download[^']*'|pdf-download[^\s>]*)[^>]*>[\s\S]*?<\/div>/gi, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<meta\b[^>]*>/gi, '');
  return digest([sharedHash, JSON.stringify(metadata), printableHtml, ...images]);
}

async function main() {
  const manifest = JSON.parse(readFileSync(path.join(PUBLIC_DIR, 'pdf-manifest.json'), 'utf8'));
  if (manifest.version !== 1 || !Array.isArray(manifest.notes)) throw new Error('Manifiesto PDF inválido');
  const names = new Set();
  const targets = manifest.notes.map(t => {
    if (path.basename(t.filename) !== t.filename || t.filename.includes('..') || !t.filename.endsWith('.pdf')) {
      throw new Error('Nombre PDF inválido: ' + t.filename);
    }
    const name = t.filename.toLowerCase();
    if (names.has(name)) throw new Error('Colisión de nombres PDF: ' + t.filename);
    names.add(name);
    const slug = t.url.replace(/^\//, '').replace(/\/$/, '');
    const htmlPath = path.join(PUBLIC_DIR, decodeURIComponent(slug), 'index.html');
    if (!existsSync(htmlPath)) throw new Error('No se encuentra HTML para ' + t.url);
    return { ...t, slug, htmlPath };
  }).filter(t => !process.env.PDF_FILTER || new RegExp(process.env.PDF_FILTER).test(t.slug));

  if (targets.length === 0) {
    console.log('[pdf] no hay notas seleccionadas, nada para generar.');
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const server = await startServer();
  PORT = server.address().port;
  const browser = await chromium.launch(process.env.PDF_CHROME_CHANNEL ? { channel: process.env.PDF_CHROME_CHANNEL } : {});
  const sharedFiles = ['hugo.toml', fileURLToPath(import.meta.url), ...filesUnder('layouts'), ...filesUnder('assets'), ...filesUnder('themes/PaperMod/layouts')];
  const sharedHash = digest([browser.version(), ...sharedFiles.flatMap(f => [f, readFileSync(f)])]);
  const cachePath = path.join(OUT_DIR, '.generation-cache.json');
  const cache = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath, 'utf8')) : {};
  let generated = 0, skipped = 0;
  try {

  for (const t of targets) {
    const outPath = path.join(OUT_DIR, t.filename);
    const fingerprint = targetFingerprint(t, sharedHash);
    if (cache[t.filename]?.fingerprint === fingerprint && existsSync(outPath) &&
        cache[t.filename].pdfHash === digest([readFileSync(outPath)])) {
      skipped++;
      continue;
    }
    console.log(`[pdf] generando ${outPath} desde http://localhost:${PORT}/${t.slug}/ ...`);

    const page = await browser.newPage();
    // Importante: activar el media "print" ANTES de tocar el DOM, para que
    // cualquier medición de tamaño que hagamos más abajo (ancho de columna,
    // ancho de fórmulas) refleje el CSS de @media print (2 columnas, fuentes
    // de impresión) y no el layout de pantalla normal.
    await page.emulateMedia({ media: 'print' });
    await page.goto(`http://localhost:${PORT}/${t.slug}/`, { waitUntil: 'networkidle', timeout: 30000 });

    // La fecha ya viene calculada del front matter (parseFrontMatter),
    // como "mes año" en español y sin el día -- no se scrapea más de
    // ".post-meta" (eso traía el formato con día que no queríamos).
    await page.evaluate(({ dateText, bylineText }) => {
      const title = document.querySelector('.post-title');
      if (title) {
        const byline = document.createElement('div');
        byline.className = 'paper-byline';
        byline.textContent = `${bylineText}${dateText ? ' · ' + dateText : ''}`;
        title.insertAdjacentElement('afterend', byline);
      }
    }, { dateText: t.dateText, bylineText: t.byline });

    // Masthead estilo "paper" de revista científica (Elsevier/ScienceDirect
    // y similares): franja de 3 columnas -- logo+institución a la
    // izquierda, sitio al centro, ícono+materia a la derecha. Ya no lleva
    // una línea de cita aparte debajo (era redundante con la columna de
    // la derecha) -- toda la info (colegio, localidad, materia, año) vive
    // dentro de las 2 columnas de los costados. Se arma desde el front
    // matter (logo/materia/colegio/localidad/materia_logo) para que sea
    // reutilizable en cualquier otra nota, sin texto fijo salvo el sitio.
    await page.evaluate(({ materia, colegio, logo, localidad, materiaLogo }) => {
      if (!materia && !colegio && !logo) return;
      const title = document.querySelector('.post-title');
      if (!title) return;

      const masthead = document.createElement('div');
      masthead.className = 'paper-masthead';

      const left = document.createElement('div');
      left.className = 'paper-masthead-col paper-masthead-left';
      if (logo) {
        const img = document.createElement('img');
        img.className = 'paper-masthead-logo';
        img.src = logo;
        left.appendChild(img);
      }
      if (colegio || localidad) {
        // Nombre completo de la escuela (el mismo que ya trae el logo,
        // repetido en texto porque el logo puede no leerse bien chico en
        // pantalla/impresión). La localidad (Saladillo) va como segunda
        // línea, debajo del nombre, en el mismo bloque de texto.
        const textCol = document.createElement('div');
        textCol.className = 'paper-masthead-left-text';
        if (colegio) {
          const name = document.createElement('div');
          name.className = 'paper-masthead-schoolname';
          name.textContent = colegio;
          textCol.appendChild(name);
        }
        if (localidad) {
          const loc = document.createElement('div');
          loc.className = 'paper-masthead-locality';
          loc.textContent = localidad;
          textCol.appendChild(loc);
        }
        left.appendChild(textCol);
      }
      masthead.appendChild(left);

      const center = document.createElement('div');
      center.className = 'paper-masthead-col paper-masthead-center';
      const tag = document.createElement('div');
      tag.className = 'paper-masthead-tag';
      tag.textContent = 'Disponible en';
      center.appendChild(tag);
      const site = document.createElement('div');
      site.className = 'paper-masthead-site';
      site.textContent = 'profe.lemeit.ar';
      center.appendChild(site);
      masthead.appendChild(center);

      const right = document.createElement('div');
      right.className = 'paper-masthead-col paper-masthead-right';
      if (materia) {
        // "Laboratorio de Industrias — 7° año" -> línea principal (la
        // materia) + línea secundaria (el año), seguida del ícono/sello
        // -- a diferencia de la columna izquierda (logo primero, texto
        // después), acá el ícono va DESPUÉS del texto, pegado al margen
        // derecho de la hoja, que es donde tiene que quedar el "sello".
        const parts = materia.split('—').map((s) => s.trim()).filter(Boolean);

        const textCol = document.createElement('div');
        textCol.className = 'paper-masthead-materia-text';
        const name = document.createElement('div');
        name.className = 'paper-masthead-materia-name';
        name.textContent = parts[0] || materia;
        textCol.appendChild(name);
        if (parts[1]) {
          const year = document.createElement('div');
          year.className = 'paper-masthead-materia-year';
          year.textContent = parts[1];
          textCol.appendChild(year);
        }
        right.appendChild(textCol);

        const iconWrap = document.createElement('div');
        iconWrap.className = 'paper-masthead-materia-icon';
        if (materiaLogo) {
          // El día que exista un logo real de la materia, con completar
          // "materia_logo" en el front matter alcanza -- reemplaza el
          // ícono genérico de acá abajo sin tocar más código.
          const img = document.createElement('img');
          img.className = 'paper-masthead-materia-logo-img';
          img.src = materiaLogo;
          iconWrap.appendChild(img);
        } else {
          // Ícono genérico (engranaje) relacionado con industria/procesos,
          // como placeholder hasta que haya un logo propio de la materia.
          iconWrap.innerHTML =
            '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="2.6 2.3"/>' +
            '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
            '<circle cx="12" cy="12" r="1.2" fill="currentColor"/>' +
            '</svg>';
        }
        right.appendChild(iconWrap);
      }
      masthead.appendChild(right);

      title.insertAdjacentElement('beforebegin', masthead);
    }, { materia: t.materia, colegio: t.colegio, logo: t.logo, localidad: t.localidad, materiaLogo: t.materiaLogo });

    // Esperar a que las imágenes del masthead (logo del colegio y, si
    // existe, logo de la materia) terminen de cargar antes de seguir --
    // si no, a veces el PDF sale con el hueco del <img> en blanco.
    // No publicar PDFs incompletos si falla una imagen o el renderizado matemático.
    await page.evaluate(() => document.querySelectorAll('img').forEach(img => img.loading = 'eager'));
    await page.waitForFunction(() => Array.from(document.images).every(img => img.complete && img.naturalWidth > 0), null, { timeout: 15000 }).catch(async () => {
      const broken = await page.evaluate(() => Array.from(document.images).filter(img => !img.complete || !img.naturalWidth).map(img => img.src));
      throw new Error(`Imágenes no disponibles en ${t.slug}: ${JSON.stringify(broken)}`);
    });
    await page.waitForFunction(() => {
      const content = document.querySelector('.post-content');
      const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (!node.parentElement.closest('.katex, script, style, pre, code') && /\$\$[\s\S]*?\$\$|\$[^$\n]+\$/.test(node.textContent)) return false;
      }
      return !content.querySelector('.katex-error');
    }, null, { timeout: 15000 }).catch(async () => {
      const diagnostic = await page.evaluate(() => {
        const content = document.querySelector('.post-content');
        const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
        const raw = [];
        let node;
        while ((node = walker.nextNode())) {
          if (!node.parentElement.closest('.katex, script, style, pre, code') && node.textContent.includes('$')) raw.push(node.textContent.slice(0, 180));
        }
        return { rendered: content.querySelectorAll('.katex').length, errors: Array.from(content.querySelectorAll('.katex-error')).map(e => e.textContent), raw };
      });
      throw new Error(`Fórmulas pendientes en ${t.slug}: ${JSON.stringify(diagnostic)}`);
    });
    await page.evaluate(async () => {
      document.querySelectorAll('details').forEach(detail => detail.open = true);
      document.documentElement.setAttribute('data-theme', 'light');
      const last = document.querySelector('.post-content > p:last-child');
      if (last && /Prof\. (?:Lamaita|Luciano)|Traducción y adaptación/.test(last.textContent)) {
        last.classList.add('paper-credit');
        if (last.previousElementSibling?.tagName === 'HR') last.previousElementSibling.remove();
        document.querySelector('.post-header').appendChild(last);
      }
      document.querySelectorAll('a[href]').forEach(link => {
        const url = new URL(link.href, location.href);
        if (url.origin === location.origin) link.href = 'https://profe.lemeit.ar' + url.pathname + url.search + url.hash;
      });
      await document.fonts.ready;
    });

    // Acomodar el contenido que es más ancho que una columna de impresión.
    // Las fórmulas de KaTeX YA NO se achican con JS (una versión anterior de
    // este script lo hacía: el problema es que achicar la fuente de una
    // fórmula angosta deja los trazos de KaTeX -- barra de fracción, etc,
    // dimensionados para el tamaño ORIGINAL -- desproporcionadamente gruesos,
    // y además el achique variaba fórmula por fórmula así que no quedaban
    // todas del mismo tamaño). En cambio, toda fórmula que no entra en una
    // columna pasa a ocupar el ancho completo, sin achicar su tipografía.
    // También se puede partir en varias líneas desde el Markdown.
    // Las tablas sí pueden seguir pasando a ocupar las dos columnas si una
    // celda no entra (una tabla ancha centrada es normal en un paper).
    await page.evaluate(() => {
      const container = document.querySelector('.post-content.md-content');
      if (!container) return;

      // Ojo: el viewport que usa Playwright para renderizar la página NO
      // tiene el ancho de una hoja A4 real, así que container.clientWidth
      // no tiene relación con el ancho real de columna del PDF final. Para
      // que la medición de overflow de celdas de tabla de acá abajo valga,
      // forzamos el ancho real del área de contenido de una hoja A4
      // (210mm - 14mm de margen a cada lado, la misma geometría de
      // print-paper.css) ANTES de medir nada. Esto no cambia el PDF final:
      // ese ancho es exactamente el que "width: auto" hubiera resuelto de
      // todos modos dentro del área de impresión real.
      const MM_TO_PX = 96 / 25.4;
      const contentWidthPx = (210 - 2 * 14) * MM_TO_PX;
      container.style.width = contentWidthPx + 'px';

      const columnWidthPx = ((210 - 2 * 14 - 8) / 2) * MM_TO_PX;
      container.querySelectorAll('.katex-display').forEach(formula => {
        const math = formula.querySelector('.katex-html');
        if (math && math.getBoundingClientRect().width > columnWidthPx) {
          formula.style.columnSpan = 'all';
        }
      });

      // Tablas: si alguna celda tiene contenido que no entra en el ancho
      // que le tocó (una palabra/número más ancho que la celda, aun
      // después de que el navegador reparte el ancho disponible entre
      // columnas de la tabla), la tabla entera pasa a ocupar las dos
      // columnas de la página en vez de dejar que el texto se corte.
      container.querySelectorAll('table').forEach((table) => {
        table.style.columnSpan = '';
        const cells = table.querySelectorAll('th, td');
        const overflows = Array.from(cells).some((cell) => cell.scrollWidth > cell.clientWidth + 1);
        if (overflows) {
          table.style.columnSpan = 'all';
        }
      });
    });

    await page.pdf({
      path: outPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', bottom: '20mm', left: '14mm', right: '14mm' },
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `
        <div style="width:100%; font-family: Georgia, 'Times New Roman', serif; font-size:8pt; color:#555; text-align:center;">
          Página <span class="pageNumber"></span> de <span class="totalPages"></span>
        </div>
      `,
    });
    await page.close();
    cache[t.filename] = { fingerprint, pdfHash: digest([readFileSync(outPath)]) };
    generated++;
    console.log(`[pdf] listo: ${outPath}`);
  }

  writeFileSync(cachePath, JSON.stringify(cache, null, 2) + '\n');
  console.log(`[pdf] ${generated} generados; ${skipped} sin cambios.`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
