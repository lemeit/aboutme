// scripts/generate-pdf.mjs
//
// Genera un PDF en formato "paper" (dos columnas) para cada nota de
// content/**/*.md que tenga `pdf = true` en su front matter.
//
// Se corre en CI (.github/workflows/generate-pdf.yml) contra un build
// LOCAL y descartable de Hugo -- no toca el build real de Cloudflare
// Pages. El unico resultado que se commitea es el PDF en
// static/files/pdf/<slug>.pdf, que Cloudflare vuelve a incluir solo
// como cualquier otro archivo estatico en su propio build.
//
// Uso: node scripts/generate-pdf.mjs
// Requiere que ./public ya exista (correr `hugo` antes).

import { chromium } from 'playwright';
import { readFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = 'content';
const PUBLIC_DIR = 'public';
const OUT_DIR = path.join('static', 'files', 'pdf');

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
  const browser = await chromium.launch();

  for (const t of targets) {
    const outName = t.slug.split('/').pop() + '.pdf';
    const outPath = path.join(OUT_DIR, outName);
    console.log(`[pdf] generando ${outPath} desde ${t.htmlPath} ...`);

    const page = await browser.newPage();
    const fileUrl = 'file://' + path.resolve(t.htmlPath);
    await page.goto(fileUrl, { waitUntil: 'load', timeout: 30000 });

    const dateText = await page.evaluate(() => {
      const el = document.querySelector('.post-meta');
      return el ? el.textContent.trim().split('\n')[0].trim() : '';
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
      margin: { top: '20mm', bottom: '18mm', left: '14mm', right: '14mm' },
    });
    await page.close();
    console.log(`[pdf] listo: ${outPath}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
