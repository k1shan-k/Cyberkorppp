import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const expectedRoutes = [
  '/',
  '/quantum-security/',
  '/quantum-safe-vpn/',
  '/pq-migration/',
  '/quantum-safe-stack/',
  '/cyber-defense/',
  '/threat-intelligence/',
  '/research/',
  '/company/',
  '/book-demo/',
  '/quantum-assessment/',
  '/contact/',
  '/join-research/',
  '/thank-you/',
  '/privacy/'
];
const errors = [];

async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(full)));
    else files.push(full);
  }
  return files;
}

function routeFile(route) {
  return route === '/'
    ? path.join(root, 'index.html')
    : path.join(root, route.replace(/^\//, ''), 'index.html');
}

function localTarget(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || !clean.startsWith('/')) return null;
  if (clean === '/') return path.join(root, 'index.html');
  if (path.extname(clean)) return path.join(root, clean.replace(/^\//, ''));
  return path.join(root, clean.replace(/^\//, ''), 'index.html');
}

for (const route of expectedRoutes) {
  const info = await stat(routeFile(route)).catch(() => null);
  if (!info?.isFile()) errors.push(`Missing expected route: ${route}`);
}

const files = await collect(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const banned = [
  /quantum[ -]?encrypt/i,
  /military[ -]?grade/i,
  /unbreakable/i,
  /quantum-proof forever/i,
  /\[add (verified|certification|research|team)/i
];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const label = path.relative(root, file);
  if (!/<html\s+lang="en"/.test(html)) errors.push(`${label}: missing lang="en"`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/.test(html)) errors.push(`${label}: missing description`);
  if (!/<link\s+rel="canonical"\s+href="https?:\/\/[^\"]+"/.test(html)) errors.push(`${label}: missing absolute canonical`);
  if (!/<main\s+id="main-content"/.test(html)) errors.push(`${label}: missing main landmark`);
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) errors.push(`${label}: expected one h1, found ${h1Count}`);
  if (!/class="skip-link"[^>]+href="#main-content"/.test(html)) errors.push(`${label}: missing skip link`);
  for (const pattern of banned) if (pattern.test(html)) errors.push(`${label}: contains prohibited language (${pattern})`);

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith('#') && href.length > 1 && !ids.has(href.slice(1))) {
      errors.push(`${label}: unresolved in-page link ${href}`);
    }
    const target = localTarget(href);
    if (target) {
      const info = await stat(target).catch(() => null);
      if (!info?.isFile()) errors.push(`${label}: broken local link ${href}`);
    }
  }

  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) {
    const target = path.join(root, match[1].replace(/^\//, '').split('?')[0]);
    const info = await stat(target).catch(() => null);
    if (!info?.isFile()) errors.push(`${label}: missing asset ${match[1]}`);
  }
}

for (const required of ['sitemap.xml', 'robots.txt', 'site.webmanifest', 'assets/site.css', 'assets/site.js']) {
  const info = await stat(path.join(root, required)).catch(() => null);
  if (!info?.isFile()) errors.push(`Missing generated asset: ${required}`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML documents, ${expectedRoutes.length} routes, local links, metadata, and prohibited claims.`);
