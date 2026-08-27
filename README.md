# CyberKorp Security Website

A zero-dependency, generated static website for CyberKorp's post-quantum security, cyber defense, and applied research work.

## Build and preview

Requires Node.js 18 or later.

```bash
npm run build
npm run preview
```

The preview server runs at `http://localhost:4173`. Generated deployment files are written to `dist/`.

Run all automated checks:

```bash
npm test
```

## Deploy on Netlify

The repository includes `netlify.toml`, so Netlify automatically runs `npm run build` and publishes `dist/`.

1. Push this repository to your Git provider.
2. In Netlify, choose **Add new site** and import the repository.
3. Add `SITE_URL` as a Production environment variable using the verified public domain.
4. Deploy the site.
5. Open the site’s **Forms** area to confirm the four detected forms, then add an email notification for new submissions.

For a local production-style build:

```bash
SITE_URL="https://your-verified-domain.example" npm run build
```

- `SITE_URL` generates production canonical URLs, Open Graph URLs, the sitemap and an indexable `robots.txt`.
- Netlify automatically detects `vpn-demo`, `quantum-assessment`, `research-interest` and `general-inquiry` in the generated HTML.
- Submissions appear in the Netlify Forms dashboard. Email or webhook notifications are configured in the Netlify site settings.
- Local preview displays the forms, but actual form processing occurs after deployment to Netlify.
- Without `SITE_URL`, builds intentionally use localhost canonicals and block indexing.

## Deploy on Vercel

The repository also includes `vercel.json`. Vercel uses the **Other** framework preset, skips dependency installation, runs `npm run build`, publishes `dist/`, preserves trailing-slash routes and applies the same baseline security headers as Netlify.

1. In Vercel, choose **Add New → Project** and import this repository.
2. If this branch should be the temporary production deployment, select it as the Production Branch in the project’s Git settings. Otherwise, each push receives a Vercel Preview deployment.
3. Add `SITE_URL` as an environment variable using the stable Vercel project URL or verified custom domain, including `https://` and no trailing slash.
4. Redeploy after setting `SITE_URL` so canonical URLs, social metadata, `sitemap.xml` and `robots.txt` use the public origin.

Important form limitation: Vercel serves the generated form pages, but `data-netlify` submission processing is a Netlify platform feature. The four inquiry forms only process submissions on Netlify. A Vercel-compatible form backend would require a separately approved processor, storage or email integration and is intentionally not included here.

Before launch, replace the implementation notes on `/privacy/` with verified legal, retention, processor and privacy-contact details.

## Public routes

- `/`: Homepage
- `/quantum-security/`: Quantum Security overview
- `/quantum-safe-vpn/`: Live Quantum-Safe VPN
- `/pq-migration/`: Assess → Migrate → Operate
- `/quantum-safe-stack/`: Six-layer architecture and maturity ledger
- `/cyber-defense/`: Cyber defense capabilities
- `/threat-intelligence/`: AI-powered threat intelligence
- `/research/`: Research areas and method
- `/company/`: Positioning and engineering principles
- `/book-demo/`: VPN technical demo intake
- `/quantum-assessment/`: Readiness assessment intake
- `/contact/`: General technical inquiry
- `/join-research/`: Research interest
- `/thank-you/`: Successful form submission confirmation
- `/privacy/`: Website data-handling implementation notes

## Source structure

- `src/data.mjs`: Navigation, architecture layers, maturity states, research and defense data
- `src/components.mjs`: Layout, navigation, footer, diagrams, stack explorer, forms, shared components
- `src/pages.mjs`: Page-level content and information architecture
- `public/assets/site.css`: Responsive visual system
- `public/assets/site.js`: Accessible interaction and form behavior
- `scripts/build.mjs`: Static generator and SEO output
- `scripts/check.mjs`: Route, link, metadata, heading, asset, and claim validation
- `scripts/serve.mjs`: Local static preview server
- `netlify.toml`: Netlify build, publish, runtime and response-header configuration
- `vercel.json`: Vercel build, static output, routing and response-header configuration

## Content integrity

The site intentionally avoids unsupported customers, deployment counts, benchmarks, certifications, partnerships, patents, papers, and guarantees. Only the Quantum-Safe VPN is represented as live. All other stack capabilities are explicitly labeled **In Development**, **Planned**, or **Research**.
