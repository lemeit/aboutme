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
