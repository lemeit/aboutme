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

function frontMatterString(fm, key) {
  const m = fm.match(new RegExp(`^\\s*${key}\\s*=\\s*'([^']*)'`, 'm')) ||
            fm.match(new RegExp(`^\\s*${key}\\s*=\\s*"([^"]*)"`, 'm'));
  return m ? m[1] : '';
}

function parseFrontMatter(mdPath) {
  const text = readFileSync(mdPath, 'utf8');
  const m = text.match(/^\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+/);
  if (!m) return null;
  const fm = m[1];
  const pdfMatch = fm.match(/^\s*pdf\s*=\s*true\s*$/m);
  if (!pdfMatch) return null;
  const title = frontMatterString(fm, 'title') || path.basename(mdPath, '.md');
  const materia = frontMatterString(fm, 'materia');
  const colegio = frontMatterString(fm, 'colegio');
  const logo = frontMatterString(fm, 'logo');
  return { title, materia, colegio, logo };
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
    targets.push({ mdPath: f, slug, htmlPath, title: fm.title, materia: fm.materia, colegio: fm.colegio, logo: fm.logo });
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
        byline.textContent = `Luciano Lamaita${dateText ? ' · ' + dateText : ''}`;
        title.insertAdjacentElement('afterend', byline);
      }
    }, dateText);

    // Masthead estilo "paper" de revista científica (Elsevier/ScienceDirect
    // y similares): franja de 3 columnas -- logo+institución a la
    // izquierda, sitio al centro, "sello" de la materia a la derecha --
    // y debajo una línea de cita con institución+materia+año. Se arma
    // desde el front matter (logo/materia/colegio) para que sea
    // reutilizable en cualquier otra nota, sin texto fijo salvo el sitio.
    await page.evaluate(({ materia, colegio, logo }) => {
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
      if (colegio) {
        const name = document.createElement('div');
        name.className = 'paper-masthead-schoolname';
        name.textContent = colegio;
        left.appendChild(name);
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
        const badge = document.createElement('div');
        badge.className = 'paper-masthead-badge';
        badge.textContent = materia.split('—')[0].trim();
        right.appendChild(badge);
      }
      masthead.appendChild(right);

      title.insertAdjacentElement('beforebegin', masthead);

      if (colegio || materia) {
        const citation = document.createElement('div');
        citation.className = 'paper-masthead-citation';
        citation.textContent = [colegio, materia].filter(Boolean).join(' — ');
        masthead.insertAdjacentElement('afterend', citation);
      }
    }, { materia: t.materia, colegio: t.colegio, logo: t.logo });

    // Esperar a que el logo (si hay) termine de cargar antes de seguir --
    // si no, a veces el PDF sale con el hueco del <img> en blanco.
    await page.waitForFunction(() => {
      const img = document.querySelector('.paper-masthead-logo');
      return !img || img.complete;
    }, { timeout: 5000 }).catch(() => {
      console.warn('[pdf] aviso: timeout esperando el logo institucional, sigo igual.');
    });

    await page.waitForFunction(() => {
      const spans = document.querySelectorAll('.katex, .katex-display');
      const hasMathSource = document.body.textContent.includes('$');
      return !hasMathSource || spans.length > 0;
    }, { timeout: 10000 }).catch(() => {
      console.warn(`[pdf] aviso: timeout esperando KaTeX en ${t.slug}, sigo igual.`);
    });
    await page.waitForTimeout(500);

    // Acomodar el contenido que es más ancho que una columna de impresión.
    // Las fórmulas de KaTeX YA NO se achican con JS (una versión anterior de
    // este script lo hacía: el problema es que achicar la fuente de una
    // fórmula angosta deja los trazos de KaTeX -- barra de fracción, etc,
    // dimensionados para el tamaño ORIGINAL -- desproporcionadamente gruesos,
    // y además el achique variaba fórmula por fórmula así que no quedaban
    // todas del mismo tamaño). En cambio, toda fórmula que no entra en una
    // columna se resuelve en la fuente (los .md), partiéndola en varias
    // líneas con \begin{aligned}...\end{aligned} -- así TODAS las fórmulas
    // del documento quedan al mismo tamaño, sin achique.
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
    console.log(`[pdf] listo: ${outPath}`);
  }

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
