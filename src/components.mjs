import { defenseCapabilities, layers, researchAreas, roles, site, statusDefinitions } from './data.mjs';

export const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const arrowIcon = (className = '') => `
  <svg class="icon icon-arrow ${className}" viewBox="0 0 18 18" aria-hidden="true">
    <path d="M3 9h11M10 4l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  </svg>`;

const chevronIcon = () => `
  <svg class="icon icon-chevron" viewBox="0 0 12 12" aria-hidden="true">
    <path d="m2.5 4 3.5 3.5L9.5 4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  </svg>`;

export function logo({ footer = false } = {}) {
  return `<span class="brand-mark${footer ? ' brand-mark--footer' : ''}" aria-hidden="true">
      <svg viewBox="0 0 32 32" role="img">
        <path d="M3.5 7.5 16 1l12.5 6.5v17L16 31 3.5 24.5z" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <path d="M9 10.5 16 7l7 3.5v11L16 25l-7-3.5z" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <path d="M11.5 16h9M16 11.5v9" stroke="currentColor" stroke-width="1.2"/>
      </svg>
    </span><span class="wordmark">CYBERKORP</span>`;
}

export function statusBadge(status, { description = false } = {}) {
  const normalized = status.toLowerCase().replaceAll(' ', '-');
  const title = description ? ` title="${escapeHtml(statusDefinitions[status] || '')}"` : '';
  return `<span class="status status--${normalized}"${title}><span class="status__dot" aria-hidden="true"></span>${escapeHtml(status)}</span>`;
}

export function buttonLink(href, label, { kind = 'primary', small = false, external = false } = {}) {
  return `<a class="button button--${kind}${small ? ' button--small' : ''}" href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
    <span>${escapeHtml(label)}</span>${arrowIcon()}
  </a>`;
}

export function textLink(href, label, { className = '' } = {}) {
  return `<a class="text-link ${className}" href="${escapeHtml(href)}"><span>${escapeHtml(label)}</span>${arrowIcon()}</a>`;
}

export function sectionIntro({ index, label, title, copy = '', align = 'split', id = '' }) {
  return `<header class="section-intro section-intro--${align}"${id ? ` id="${id}"` : ''}>
    <div class="section-intro__label">
      ${index ? `<span class="section-index">${escapeHtml(index)}</span>` : ''}
      <p class="eyebrow">${escapeHtml(label)}</p>
    </div>
    <div class="section-intro__content">
      <h2>${title}</h2>
      ${copy ? `<p>${copy}</p>` : ''}
    </div>
  </header>`;
}

function header(active, currentPath) {
  const nav = site.nav
    .map((item) => {
      const isCurrent = currentPath === item.href;
      const isActive = active === item.key;
      if (!item.children) {
        return `<li class="nav__item${isActive ? ' is-active' : ''}">
          <a href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a>
        </li>`;
      }
      const children = item.children
        .map(
          (child) => `<li>
            <a href="${child.href}"${currentPath === child.href ? ' aria-current="page"' : ''}>
              <span>${child.label}</span><small>${child.meta}</small>
            </a>
          </li>`
        )
        .join('');
      return `<li class="nav__item nav__item--parent${isActive ? ' is-active' : ''}">
        <div class="nav__parent-row">
          <a href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a>
          <button class="nav__submenu-toggle" type="button" aria-expanded="false" aria-label="Show ${item.label} links" data-submenu-toggle>${chevronIcon()}</button>
        </div>
        <div class="nav__panel">
          <p class="nav__panel-kicker">Explore / ${item.label}</p>
          <ul>${children}</ul>
        </div>
      </li>`;
    })
    .join('');

  return `<header class="site-header" data-site-header>
    <div class="site-header__signal" aria-hidden="true"><span>CK / SYSTEMS</span><span>UTC <i data-utc-time>--:--:--</i></span></div>
    <div class="site-header__bar shell">
      <a class="brand" href="/" aria-label="CyberKorp home">${logo()}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-menu-toggle>
        <span class="menu-toggle__label">Menu</span><span class="menu-toggle__lines" aria-hidden="true"><i></i><i></i></span>
      </button>
      <nav class="nav" id="primary-navigation" aria-label="Primary navigation" data-navigation>
        <ul class="nav__list">${nav}</ul>
        <div class="nav__mobile-actions">
          ${buttonLink('/book-demo/', 'Book a demo', { kind: 'primary' })}
          ${textLink('/contact/', 'Contact')}
        </div>
      </nav>
      <a class="header-cta" href="/book-demo/"><span>Book a demo</span>${arrowIcon()}</a>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="site-footer__field" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="shell site-footer__inner">
      <div class="footer-lead">
        <p class="eyebrow eyebrow--light">Build what comes next</p>
        <h2>Make the next cryptographic era an engineering decision.</h2>
        <div class="footer-lead__actions">
          ${buttonLink('/book-demo/', 'Book a VPN demo', { kind: 'light' })}
          ${buttonLink('/quantum-assessment/', 'Assess quantum risk', { kind: 'ghost-light' })}
          ${buttonLink('/join-research/', 'Join research', { kind: 'ghost-light' })}
        </div>
      </div>
      <div class="footer-grid">
        <div class="footer-grid__brand">
          <a class="brand brand--footer" href="/" aria-label="CyberKorp home">${logo({ footer: true })}</a>
          <p>${site.strapline}.</p>
          <p class="footer-location"><span aria-hidden="true">⌖</span> Engineered in India</p>
        </div>
        <div class="footer-column">
          <h3>Quantum Security</h3>
          <ul>
            <li><a href="/quantum-security/">Overview</a></li>
            <li><a href="/quantum-safe-vpn/">Quantum-Safe VPN</a></li>
            <li><a href="/pq-migration/">PQ Migration</a></li>
            <li><a href="/quantum-safe-stack/">Quantum-Safe Stack</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Cyber Defense</h3>
          <ul>
            <li><a href="/cyber-defense/">Defense Overview</a></li>
            <li><a href="/threat-intelligence/">Threat Intelligence</a></li>
            <li><a href="/cyber-defense/#offensive">Offensive Security</a></li>
            <li><a href="/cyber-defense/#response">Incident Response</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>CyberKorp</h3>
          <ul>
            <li><a href="/research/">Research</a></li>
            <li><a href="/company/">Company</a></li>
            <li><a href="/join-research/">Work with us</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span data-current-year>2026</span> CyberKorp. Security infrastructure, built deliberately.</p>
        <div><a href="/privacy/">Privacy</a><a href="/sitemap.xml">Sitemap</a></div>
      </div>
    </div>
  </footer>`;
}

export function renderDocument(page, { siteUrl }) {
  const canonical = `${siteUrl}${page.path}`;
  const title = page.title.includes('CyberKorp') ? page.title : `${page.title} | CyberKorp`;
  const socialTitle = page.socialTitle || title;
  const schema = {
    '@context': 'https://schema.org',
    '@type': page.schemaType || 'WebPage',
    name: page.heading || page.title,
    description: page.description,
    url: canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: site.name,
      url: `${siteUrl}/`
    }
  };
  const body = typeof page.body === 'function' ? page.body() : page.body;
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#071018">
  <meta name="color-scheme" content="dark light">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  ${page.index === false ? '<meta name="robots" content="noindex, nofollow">' : '<meta name="robots" content="index, follow">'}
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CyberKorp">
  <meta property="og:title" content="${escapeHtml(socialTitle)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(siteUrl)}/assets/social-card.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(socialTitle)}">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">
  <meta name="twitter:image" content="${escapeHtml(siteUrl)}/assets/social-card.svg">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/site.css">
  <script>document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');</script>
  <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
</head>
<body class="${escapeHtml(page.bodyClass || '')}">
  <a class="skip-link" href="#main-content">Skip to main content</a>
  ${header(page.active, page.path)}
  <main id="main-content" tabindex="-1">${body}</main>
  ${footer()}
  <script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

export function networkDiagram({ compact = false, label = 'Hybrid tunnel architecture' } = {}) {
  return `<figure class="network-diagram${compact ? ' network-diagram--compact' : ''}" data-network-diagram>
    <figcaption>
      <span>CK / QSVPN / 01</span>
      <span>${escapeHtml(label)}</span>
      <span class="diagram-live"><i></i> Link active</span>
    </figcaption>
    <div class="network-diagram__canvas">
      <div class="diagram-grid" aria-hidden="true"></div>
      <div class="diagram-node diagram-node--user"><span class="node-icon" aria-hidden="true">U</span><strong>Remote user</strong><small>Access edge</small></div>
      <div class="diagram-node diagram-node--branch"><span class="node-icon" aria-hidden="true">B</span><strong>Branch</strong><small>Site gateway</small></div>
      <div class="tunnel-core">
        <div class="tunnel-core__rings" aria-hidden="true"><i></i><i></i><i></i></div>
        <span>HYBRID</span><strong>ML-KEM<br>+ X25519</strong><small>TLS 1.3</small>
      </div>
      <div class="diagram-node diagram-node--cloud"><span class="node-icon" aria-hidden="true">C</span><strong>Cloud</strong><small>Private network</small></div>
      <div class="diagram-node diagram-node--dc"><span class="node-icon" aria-hidden="true">D</span><strong>Data center</strong><small>Protected systems</small></div>
      <svg class="diagram-paths" viewBox="0 0 800 420" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="line-gradient" x1="0" x2="1"><stop offset="0" stop-color="#67b7ff"/><stop offset=".5" stop-color="#f5f3eb"/><stop offset="1" stop-color="#67b7ff"/></linearGradient>
        </defs>
        <path class="path-base" d="M100 105 C240 105 240 210 400 210 S560 105 700 105"/>
        <path class="path-base" d="M100 315 C240 315 240 210 400 210 S560 315 700 315"/>
        <path class="path-signal path-signal--one" d="M100 105 C240 105 240 210 400 210 S560 105 700 105"/>
        <path class="path-signal path-signal--two" d="M100 315 C240 315 240 210 400 210 S560 315 700 315"/>
      </svg>
      <span class="diagram-coordinate diagram-coordinate--a">18.5204° N</span>
      <span class="diagram-coordinate diagram-coordinate--b">ROUTE / PROTECTED</span>
    </div>
    <div class="network-diagram__legend">
      <span><i class="legend-line legend-line--blue"></i> Classical component</span>
      <span><i class="legend-line legend-line--light"></i> Post-quantum component</span>
      <span>Architecture shown conceptually; deployment fit is assessed per environment.</span>
    </div>
  </figure>`;
}

export function architectureRibbon() {
  const items = [
    ['00', 'Hardware'],
    ['01', 'Entropy'],
    ['02', 'Keys'],
    ['03', 'Cryptography'],
    ['04', 'Network'],
    ['05', 'Applications']
  ];
  return `<div class="architecture-ribbon" aria-label="CyberKorp architecture layers">
    ${items
      .map(
        ([code, label], index) => `<div class="architecture-ribbon__item">
          <span>${code}</span><strong>${label}</strong>${index < items.length - 1 ? arrowIcon() : ''}
        </div>`
      )
      .join('')}
  </div>`;
}

export function stackExplorer({ instance = 'stack', expanded = 'l4' } = {}) {
  const tabs = layers
    .map(
      (layer) => `<button class="stack-tab${layer.id === expanded ? ' is-selected' : ''}" type="button" role="tab"
        id="${instance}-tab-${layer.id}" aria-controls="${instance}-panel-${layer.id}" aria-selected="${layer.id === expanded}" tabindex="${layer.id === expanded ? '0' : '-1'}" data-layer-target="${layer.id}">
        <span class="stack-tab__code">${layer.code}</span>
        <span class="stack-tab__name">${layer.name}</span>
        <span class="stack-tab__count">${String(layer.products.length).padStart(2, '0')}</span>
      </button>`
    )
    .join('');
  const panels = layers
    .map(
      (layer) => `<section class="stack-panel${layer.id === expanded ? ' is-selected' : ''}" role="tabpanel"
        id="${instance}-panel-${layer.id}" aria-labelledby="${instance}-tab-${layer.id}" ${layer.id === expanded ? '' : 'hidden'} data-layer-panel="${layer.id}">
        <div class="stack-panel__head"><span>${layer.code}</span><p>${escapeHtml(layer.architecture)}</p></div>
        <div class="stack-panel__body">
          <div><p class="eyebrow">Layer purpose</p><h3>${layer.name}</h3><p>${layer.purpose}</p></div>
          <ul class="product-ledger">
            ${layer.products
              .map(
                (product) => `<li>
                  ${product.href ? `<a href="${product.href}">${product.name}${arrowIcon()}</a>` : `<span>${product.name}</span>`}
                  ${statusBadge(product.status, { description: true })}
                </li>`
              )
              .join('')}
          </ul>
        </div>
        <div class="stack-panel__foot">
          <span>MATURITY IS SHOWN PER CAPABILITY</span>
          ${layer.products.some((product) => product.status === 'LIVE')
            ? textLink('/book-demo/', 'Request technical review')
            : textLink(`/contact/?intent=roadmap&layer=${layer.id}`, 'Discuss the roadmap')}
        </div>
      </section>`
    )
    .join('');
  return `<div class="stack-explorer" data-stack-explorer>
    <div class="stack-explorer__tabs" role="tablist" aria-label="Quantum-safe architecture layers">${tabs}</div>
    <div class="stack-explorer__panels">${panels}</div>
  </div>`;
}

export function statusLegend() {
  return `<div class="status-legend" aria-label="Product maturity definitions">
    ${Object.entries(statusDefinitions)
      .map(([status, definition]) => `<div>${statusBadge(status)}<p>${definition}</p></div>`)
      .join('')}
  </div>`;
}

export function defenseGrid() {
  return `<div class="capability-grid">
    ${defenseCapabilities
      .map(
        (capability, index) => `<article class="capability-card reveal"${capability.name === 'Offensive Security' ? ' id="offensive"' : capability.name === 'Incident Response' ? ' id="response"' : ''}>
          <div class="capability-card__top"><span>${capability.code}</span><span>CK / DEF</span></div>
          <h3>${capability.name}</h3>
          <p>${capability.summary}</p>
          <ul>${capability.items.map((item) => `<li>${item}</li>`).join('')}</ul>
          ${capability.href ? textLink(capability.href, 'Explore intelligence') : textLink(`/contact/?intent=${encodeURIComponent(capability.name.toLowerCase())}`, 'Discuss a requirement')}
        </article>`
      )
      .join('')}
  </div>`;
}

export function researchGrid({ limit } = {}) {
  const areas = limit ? researchAreas.slice(0, limit) : researchAreas;
  return `<div class="research-grid">
    ${areas
      .map(
        ([code, name, summary], index) => `<article class="research-card reveal">
          <div class="research-card__meta"><span>${code}</span><span><i></i> Research track</span></div>
          <h3>${name}</h3><p>${summary}</p>
          <span class="research-card__index">${String(index + 1).padStart(2, '0')}</span>
        </article>`
      )
      .join('')}
  </div>`;
}

export function ctaPanel({ label, title, copy, primary, secondary, tone = 'blue' }) {
  return `<aside class="cta-panel cta-panel--${tone} reveal">
    <div class="cta-panel__signal" aria-hidden="true"><i></i><i></i><i></i></div>
    <p class="eyebrow">${escapeHtml(label)}</p>
    <h2>${title}</h2>
    <p>${copy}</p>
    <div class="cta-panel__actions">
      ${buttonLink(primary.href, primary.label, { kind: tone === 'light' ? 'dark' : 'light' })}
      ${secondary ? buttonLink(secondary.href, secondary.label, { kind: tone === 'light' ? 'outline-dark' : 'ghost-light' }) : ''}
    </div>
  </aside>`;
}

export function pageHero({ label, title, copy, status, aside = '', actions = '', meta = [], className = '' }) {
  return `<section class="page-hero ${className}">
    <div class="page-hero__grid shell">
      <div class="page-hero__main">
        <div class="page-hero__eyebrow"><span>CK / ${escapeHtml(label)}</span>${status ? statusBadge(status) : ''}</div>
        <h1>${title}</h1>
        <p>${copy}</p>
        ${actions ? `<div class="page-hero__actions">${actions}</div>` : ''}
      </div>
      ${aside ? `<div class="page-hero__aside">${aside}</div>` : ''}
    </div>
    ${meta.length ? `<div class="page-hero__meta shell">${meta.map(([key, value]) => `<div><span>${escapeHtml(key)}</span><strong>${escapeHtml(value)}</strong></div>`).join('')}</div>` : ''}
  </section>`;
}

function field({ label, name, type = 'text', required = true, autocomplete = '', options, placeholder = '' }) {
  const id = `field-${name}`;
  const marker = required ? '<span aria-hidden="true">*</span>' : '<small>Optional</small>';
  if (options) {
    return `<div class="field"><label for="${id}">${label} ${marker}</label><select id="${id}" name="${name}"${required ? ' required' : ''}>
      <option value="">Select one</option>${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join('')}
    </select></div>`;
  }
  if (type === 'textarea') {
    return `<div class="field field--wide"><label for="${id}">${label} ${marker}</label><textarea id="${id}" name="${name}" rows="5"${required ? ' required' : ''} placeholder="${escapeHtml(placeholder)}"></textarea></div>`;
  }
  return `<div class="field"><label for="${id}">${label} ${marker}</label><input id="${id}" name="${name}" type="${type}"${autocomplete ? ` autocomplete="${autocomplete}"` : ''}${required ? ' required' : ''} placeholder="${escapeHtml(placeholder)}"></div>`;
}

export function inquiryForm({ type = 'contact' } = {}) {
  const common = [
    field({ label: 'Name', name: 'name', autocomplete: 'name' }),
    field({ label: 'Work email', name: 'email', type: 'email', autocomplete: 'email' }),
    field({ label: 'Organization', name: 'organization', autocomplete: 'organization' })
  ];
  const configs = {
    demo: {
      subject: 'Quantum-Safe VPN demo request',
      fields: [
        ...common,
        field({ label: 'Role', name: 'role', autocomplete: 'organization-title' }),
        field({ label: 'Deployment environment', name: 'environment', options: ['Cloud', 'On-premises', 'Hybrid', 'Private infrastructure', 'Still evaluating'] }),
        field({ label: 'Connectivity need', name: 'connectivity', options: ['Remote access', 'Site-to-site', 'Both', 'Architecture review'] }),
        field({ label: 'What should the technical review cover?', name: 'message', type: 'textarea', placeholder: 'Environment, use case, constraints or questions.' })
      ],
      button: 'Request technical demo'
    },
    assessment: {
      subject: 'Post-quantum readiness assessment',
      fields: [
        ...common,
        field({ label: 'Role', name: 'role', autocomplete: 'organization-title' }),
        field({ label: 'Current stage', name: 'stage', options: ['Starting discovery', 'Building a cryptographic inventory', 'Planning migration', 'Running a pilot', 'Operating migrated systems'] }),
        field({ label: 'Infrastructure scope', name: 'scope', options: ['Applications', 'Network', 'PKI and identity', 'Cloud estate', 'On-premises estate', 'Enterprise-wide'] }),
        field({ label: 'What needs to be understood first?', name: 'message', type: 'textarea', placeholder: 'Critical data, timelines, systems or decision constraints.' })
      ],
      button: 'Request assessment discussion'
    },
    research: {
      subject: 'CyberKorp research interest',
      fields: [
        field({ label: 'Name', name: 'name', autocomplete: 'name' }),
        field({ label: 'Email', name: 'email', type: 'email', autocomplete: 'email' }),
        field({ label: 'Area of expertise', name: 'expertise', options: roles }),
        field({ label: 'Research focus', name: 'focus', options: researchAreas.map((area) => area[1]) }),
        field({ label: 'LinkedIn, GitHub or portfolio', name: 'profile', type: 'url', required: false, placeholder: 'https://' }),
        field({ label: 'Short introduction', name: 'message', type: 'textarea', placeholder: 'What problems do you want to work on?' })
      ],
      button: 'Express research interest'
    },
    contact: {
      subject: 'CyberKorp inquiry',
      fields: [
        ...common,
        field({ label: 'Requirement', name: 'requirement', options: ['Quantum security', 'Cyber defense', 'Threat intelligence', 'Research', 'Partnership inquiry', 'Other'] }),
        field({ label: 'Message', name: 'message', type: 'textarea', placeholder: 'Context, scope and the outcome you need.' })
      ],
      button: 'Send inquiry'
    }
  };
  const config = configs[type];
  const formNames = {
    demo: 'vpn-demo',
    assessment: 'quantum-assessment',
    research: 'research-interest',
    contact: 'general-inquiry'
  };
  const formName = formNames[type];
  return `<form class="intake-form" name="${formName}" method="post" action="/thank-you/" data-netlify="true" netlify-honeypot="website" data-intake-form data-form-type="${type}">
    <input type="hidden" name="form-name" value="${formName}">
    <input type="hidden" name="subject" value="${escapeHtml(config.subject)}">
    <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <div class="intake-form__grid">${config.fields.join('')}</div>
    <label class="consent"><input type="checkbox" name="consent" required><span>I agree that CyberKorp may use these details to respond to this request. See <a href="/privacy/">privacy information</a>.</span></label>
    <div class="intake-form__submit">
      <button class="button button--primary" type="submit"><span>${config.button}</span>${arrowIcon()}</button>
      <p><span aria-hidden="true">↳</span> No marketing opt-in. No payment information.</p>
    </div>
  </form>`;
}
