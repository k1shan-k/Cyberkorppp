import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderDocument } from '../src/components.mjs';
import { pages } from '../src/pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const productionUrl = process.env.SITE_URL?.trim().replace(/\/+$/, '');
const siteUrl = productionUrl || 'http://localhost:4173';

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, 'public'), dist, { recursive: true });

for (const page of pages) {
  const html = renderDocument(page, { siteUrl })
    .replaceAll('__BUILD_MODE__', productionUrl ? 'production' : 'preview');

  const output = page.output
    ? path.join(dist, page.output)
    : page.path === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, page.path.replace(/^\//, ''), 'index.html');

  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, html, 'utf8');
}

const indexablePages = pages.filter((page) => page.index !== false && !page.output);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <changefreq>${page.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page.path === '/' ? '1.0' : page.priority || '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

const robots = productionUrl
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  : `# Preview builds are intentionally excluded from search indexes.\nUser-agent: *\nDisallow: /\n`;
await writeFile(path.join(dist, 'robots.txt'), robots, 'utf8');

const buildInfo = {
  mode: productionUrl ? 'production' : 'preview',
  siteUrl,
  forms: 'netlify',
  pages: pages.length
};
await writeFile(path.join(dist, 'build-info.json'), `${JSON.stringify(buildInfo, null, 2)}\n`, 'utf8');

console.log(`Built ${pages.length} pages to dist/ (${buildInfo.mode}; native Netlify Forms enabled).`);
if (!productionUrl) {
  console.log('Set SITE_URL to generate production canonical URLs and an indexable robots.txt.');
}
