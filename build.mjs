// Sestaví náhled webu nextrealityadvance.cz ze šablony NEXT (dev.nextrealityweb.cz).
// Každá stránka = vyrenderovaná stránka šablony, obsah doplní transform.mjs z content.mjs.
// Assety šablony (CSS, JS, fonty, ikony, obrázky) se zrcadlí do preview/www, protože
// šablona neposílá CORS hlavičky.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, posix } from 'node:path';
import { transform } from './transform.mjs';

const ORIGIN = 'https://dev.nextrealityweb.cz';
const OUT = 'preview';

// stránka náhledu <- stránka šablony
const PAGES = [
  { out: 'index.html', tpl: '/', page: 'home', title: 'Realitní kancelář v centru Plzně' },
  { out: 'o-nas.html', tpl: '/o-nas', page: 'about', title: 'O nás' },
  { out: 'makleri.html', tpl: '/makleri', page: 'team', title: 'Náš tým' },
  { out: 'kontakty.html', tpl: '/kontakty', page: 'contact', title: 'Kontakt' },
  { out: 'odhad-ceny-nemovitosti.html', tpl: '/odhad-ceny-nemovitosti', page: 'estimate', title: 'Odhad nemovitosti zdarma' },
  { out: 'chocenice.html', tpl: '/rezidence-vyskov', page: 'project', title: 'Stavební pozemky Chocenice' },
];

// odkazy šablony -> stránky náhledu; ostatní vedou na "#"
const LINKS = {
  '/': 'index.html',
  '/o-nas': 'o-nas.html',
  '/makleri': 'makleri.html',
  '/kontakty': 'kontakty.html',
  '/kancelare': 'kontakty.html',
  '/odhad-ceny-nemovitosti': 'odhad-ceny-nemovitosti.html',
  '/developerske-projekty': 'chocenice.html',
  '/developerske-projekty-1': 'chocenice.html',
  '/rezidence-vyskov': 'chocenice.html',
};

async function get(path) {
  const res = await fetch(ORIGIN + path);
  if (!res.ok) { console.warn('skip', res.status, path); return null; }
  return Buffer.from(await res.arrayBuffer());
}

async function mirror(path) {
  const clean = path.split('?')[0].split('#')[0];
  const file = OUT + decodeURIComponent(clean);
  if (existsSync(file)) return file;
  const buf = await get(clean);
  if (!buf) return null;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, buf);
  return file;
}

const cssDone = new Set();
async function mirrorCss(a, file) {
  if (cssDone.has(file)) return;
  cssDone.add(file);
  const css = readFileSync(file, 'utf8');
  for (const m of css.matchAll(/url\((['"]?)([^'")]+)\1\)/g)) {
    const u = m[2];
    if (/^(data:|https?:|#)/.test(u)) continue;
    await mirror(u.startsWith('/') ? u : posix.normalize(posix.join(posix.dirname(a.split('?')[0]), u)));
  }
  writeFileSync(file, css.replace(/url\((['"]?)\/www\//g, (_, q) => `url(${q}${'../'.repeat(a.split('/').length - 2)}`));
}

mkdirSync('tpl', { recursive: true });
for (const p of PAGES) {
  const cache = `tpl/${p.page}.html`;
  if (!existsSync(cache)) writeFileSync(cache, await get(p.tpl));
  let html = readFileSync(cache, 'utf8')
    .replace(/<script[^>]*CookieBar\.js[^>]*><\/script>/g, '')
    .replace(/<script[^>]*progressive-web-app\/register[^>]*><\/script>/g, '')
    .replace(/<link rel="manifest"[^>]*>/g, '')
    .replace(/<title[^>]*>[\s\S]*?<\/title>/, `<title>${p.title} | Next Reality Advance – náhled</title>`)
    .replace('<head>', `<head><meta name="robots" content="noindex">`)
    .replace('</head>', '<link rel="stylesheet" href="nra-preview.css"></head>');

  const assets = new Set();
  for (const m of html.matchAll(/\/www\/[^"'\s,)]+/g)) assets.add(m[0]);
  html = html.replace(/href="(\/(?!www\/)[^"#?]*)([^"]*)"/g, (_, path, rest) => {
    const to = LINKS[path.replace(/\/$/, '') || '/'];
    return `href="${to ? to + (rest.startsWith('#') ? rest : '') : '#'}"`;
  });
  html = html.replace(/(["\s,])\/www\//g, '$1www/');

  for (const a of assets) {
    const file = await mirror(a);
    if (file && file.endsWith('.css')) await mirrorCss(a, file);
  }
  writeFileSync(`${OUT}/${p.out}`, transform(html, p.page));
  console.log(p.out, assets.size, html.length);
}
