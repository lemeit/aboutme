// scripts/generate-pdf.mjs
//
// Genera un PDF en formato "paper" (dos columnas) para cada nota de
// content/**/*.md que tenga `pdf = true` en su front matter.
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

import { chromium } from 'playwright';
import { readFileSync, existsSync, mkdirSync, readdirSync, statSync, createReadStream } from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const CONTENT_DIR = 'content';
const PUBLIC_DIR = 'public';
const OUT_DIR = path.join('static', 'files', 'pdf');
const PORT = 8971;

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

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontMatter(mdPath) {
  const text = readFileSync(mdPath, 'utf8');
  const m = text.match(/^\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+/);
  if (!m) return null;
  const fm = m[1];
  const pdfMatch = fm.match(/^\s*pdf\s*=\s*true\s*$/m);
  if (!pdfMatch) return null;
  const titleMatch = fm.match(/^\s*title\s*=\s*'([^']*)'/m) || fm.match(/^\s*title\s*=\s*"([^"]*)"/m);
  return { title: titleMatch ? titleMatch[1] : path.basename(mdPath, '.md') };
}

function slugFromContentPath(mdPath) {
  const rel = path.relative(CONTENT_DIR, mdPath).replace(/\.md$/, '').replace(/\\/g, '/');
  return rel;
}

function builtHtmlPath(slug) {
  return path.join(PUBLIC_DIR, slug, 'index.html');
}

async function main() {
  const mdFiles = walk(CONTENT_DIR);
  const targets = [];
  for (const f of mdFiles) {
    const fm = parseFrontMatter(f);
    if (!fm) continue;
    const slug = slugFromContentPath(f);
    const htmlPath = builtHtmlPath(slug);
    if (!existsSync(htmlPath)) {
      console.warn(`[pdf] aviso: ${f} tiene pdf = true pero no encontre ${htmlPath} (¿corriste "hugo" antes?)`);
      continue;
    }
    targets.push({ mdPath: f, slug, htmlPath, title: fm.title });
  }

  if (targets.length === 0) {
    console.log('[pdf] no hay notas con pdf = true, nada para generar.');
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const server = await startServer();
  const browser = await chromium.launch();

  for (const t of targets) {
    const outName = t.slug.split('/').pop() + '.pdf';
    const outPath = path.join(OUT_DIR, outName);
    console.log(`[pdf] generando ${outPath} desde http://localhost:${PORT}/${t.slug}/ ...`);

    const page = await browser.newPage();
    // Importante: activar el media "print" ANTES de tocar el DOM, para que
    // cualquier medición de tamaño que hagamos más abajo (ancho de columna,
    // ancho de fórmulas) refleje el CSS de @media print (2 columnas, fuentes
    // de impresión) y no el layout de pantalla normal.
    await page.emulateMedia({ media: 'print' });
    await page.goto(`http://localhost:${PORT}/${t.slug}/`, { waitUntil: 'networkidle', timeout: 30000 });

    const dateText = await page.evaluate(() => {
      // .post-meta de PaperMod es "<span>fecha</span> · <span>min lectura</span> · <span>autor</span>"
      // todo en un solo div sin saltos de línea reales -- por eso tomamos
      // solo el primer <span> (la fecha), no el textContent completo,
      // que repetiría el nombre del autor (ya está en el byline de abajo).
      const el = document.querySelector('.post-meta span');
      return el ? el.textContent.trim() : '';
    });

    await page.evaluate((dateText) => {
      const title = document.querySelector('.post-title');
      if (title) {
        const byline = document.createElement('div');
        byline.className = 'paper-byline';
        byline.textContent = `Luciano Lamaita · profe.lemeit.ar${dateText ? ' · ' + dateText : ''}`;
        title.insertAdjacentElement('afterend', byline);
      }
    }, dateText);

    await page.waitForFunction(() => {
      const spans = document.querySelectorAll('.katex, .katex-display');
      const hasMathSource = document.body.textContent.includes('$');
      return !hasMathSource || spans.length > 0;
    }, { timeout: 10000 }).catch(() => {
      console.warn(`[pdf] aviso: timeout esperando KaTeX en ${t.slug}, sigo igual.`);
    });
    await page.waitForTimeout(500);

    // Acomodar el contenido que es más ancho que una columna de impresión:
    // fórmulas de KaTeX (se achican, o si ni así entran pasan a ocupar las
    // dos columnas) y tablas (si alguna celda no entra, pasan a ocupar las
    // dos columnas). Sin esto, el contenido ancho se corta en seco contra
    // el borde de la columna en vez de acomodarse.
    await page.evaluate(() => {
      const container = document.querySelector('.post-content.md-content');
      if (!container) return;

      // Ojo: el viewport que usa Playwright para renderizar la página NO
      // tiene el ancho de una hoja A4 real, así que container.clientWidth
      // (y por lo tanto el ancho de columna que arma "column-count: 2")
      // no tiene relación con el ancho real de columna del PDF final.
      // Para que las mediciones de acá abajo valgan, forzamos el ancho
      // real del área de contenido de una hoja A4 (210mm - 14mm de margen
      // a cada lado, la misma geometría de print-paper.css) ANTES de medir
      // nada. Esto no cambia el PDF final: ese ancho es exactamente el que
      // "width: auto" hubiera resuelto de todos modos dentro del área de
      // impresión real.
      const MM_TO_PX = 96 / 25.4;
      const contentWidthPx = (210 - 2 * 14) * MM_TO_PX;
      container.style.width = contentWidthPx + 'px';

      const gapPx = parseFloat(getComputedStyle(container).columnGap) || 0;
      const columnWidthPx = (container.clientWidth - gapPx) / 2;

      // El margen de seguridad es más generoso de lo que parece necesario
      // porque esta medición se hace ANTES de generar el PDF (con
      // page.evaluate, en el layout "en vivo" de la página) y el paginado
      // real de page.pdf() puede diferir en un par de px -- sin este
      // colchón, fórmulas justo en el límite quedan con la última letra
      // cortada.
      const SAFETY = 0.88;
      const MIN_SCALE = 0.6; // no reducir una fórmula a menos del 60% de su tamaño

      // Ojo con .katex-display > .katex: la propia hoja de estilos de KaTeX
      // le pone "display: block; white-space: nowrap" -- es decir, ocupa
      // todo el ancho del contenedor (auto = 100%) aunque el contenido real
      // sea angosto, y si es más ancho se lo deja pasar en una sola línea
      // sin ajustar el tamaño de la caja. Por eso medir su
      // getBoundingClientRect() tal cual da SIEMPRE el ancho de la columna,
      // nunca el ancho real de la fórmula. Para conseguir el ancho real
      // (shrink-to-fit) lo pasamos a "inline-block" un instante, medimos, y
      // lo devolvemos a como estaba.
      function naturalWidthOf(el) {
        const inner = el.querySelector(':scope > .katex') || el;
        const prevDisplay = inner.style.display;
        inner.style.display = 'inline-block';
        const width = inner.getBoundingClientRect().width;
        inner.style.display = prevDisplay;
        return width;
      }

      // Devuelve true si el elemento entró en budgetPx (reduciendo la
      // fuente si hace falta, hasta MIN_SCALE); false si ni al mínimo entra.
      function shrinkToFit(el, budgetPx) {
        const naturalWidth = naturalWidthOf(el);
        if (naturalWidth <= budgetPx * SAFETY) return true;
        const currentPx = parseFloat(getComputedStyle(el).fontSize);
        const scale = (budgetPx * SAFETY) / naturalWidth;
        el.style.fontSize = (currentPx * Math.max(scale, MIN_SCALE)) + 'px';
        return scale >= MIN_SCALE;
      }

      // Fórmulas en bloque ($$...$$): intentar que entren en una columna;
      // si ni al tamaño mínimo entran, que ocupen las dos columnas.
      container.querySelectorAll('.katex-display').forEach((disp) => {
        disp.style.fontSize = '';
        disp.style.columnSpan = '';
        disp.style.textAlign = '';
        const fits = shrinkToFit(disp, columnWidthPx);
        if (!fits) {
          disp.style.fontSize = '';
          disp.style.columnSpan = 'all';
          disp.style.textAlign = 'center';
          shrinkToFit(disp, contentWidthPx);
        }
      });

      // Fórmulas en línea ($...$) que por sí solas ya son más anchas que
      // una columna (caso raro, ej. una fracción grande en medio de una
      // oración): reducirlas in situ, no pueden ocupar las dos columnas.
      container.querySelectorAll('.katex').forEach((el) => {
        if (el.closest('.katex-display')) return;
        el.style.fontSize = '';
        shrinkToFit(el, columnWidthPx);
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
        <div style="width:100%; font-family: Arial, Helvetica, sans-serif; font-size:8pt; color:#555; text-align:center;">
          Página <span class="pageNumber"></span> de <span class="totalPages"></span>
        </div>
      `,
    });
    await page.close();
    console.log(`[pdf] listo: ${outPath}`);
  }

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
