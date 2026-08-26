import {
  architectureRibbon,
  buttonLink,
  ctaPanel,
  defenseGrid,
  inquiryForm,
  networkDiagram,
  pageHero,
  researchGrid,
  sectionIntro,
  stackExplorer,
  statusBadge,
  statusLegend,
  textLink
} from './components.mjs';
import { defenseCapabilities, layers, researchAreas, roles } from './data.mjs';

const homeBody = () => `
<section class="home-hero">
  <div class="home-hero__grid shell">
    <div class="home-hero__copy">
      <div class="hero-kicker"><span>CK / 00</span><p>Deep-tech security systems</p><i aria-hidden="true"></i></div>
      <h1>Security infrastructure for the <em>post-quantum</em> era.</h1>
      <p class="hero-copy">CyberKorp engineers quantum-safe networking and migration systems, backed by cyber defense and applied security research.</p>
      <div class="hero-actions">
        ${buttonLink('/quantum-security/', 'Explore quantum security')}
        ${buttonLink('/book-demo/', 'Book VPN demo', { kind: 'outline' })}
      </div>
      <div class="hero-proof">
        <div>${statusBadge('LIVE')}<strong>Quantum-Safe VPN</strong></div>
        <div><span>HYBRID</span><strong>ML-KEM + X25519</strong></div>
        <div><span>DEPLOYMENT</span><strong>Remote + site-to-site</strong></div>
      </div>
    </div>
    <div class="home-hero__visual reveal reveal--immediate">${networkDiagram({ label: 'Live network protection layer' })}</div>
  </div>
  <div class="hero-runline" aria-label="CyberKorp focus areas">
    <div><span>POST-QUANTUM CRYPTOGRAPHY</span><i></i><span>SECURE NETWORKING</span><i></i><span>CRYPTOGRAPHIC MIGRATION</span><i></i><span>CYBER DEFENSE</span><i></i><span>APPLIED RESEARCH</span></div>
  </div>
</section>

<section class="urgency section section--ink" id="why-now">
  <div class="shell">
    ${sectionIntro({
      index: '01',
      label: 'The cryptographic clock',
      title: 'Encrypted today does not mean protected for its full lifetime.',
      copy: 'Long-lived data can be collected now and held for future cryptanalysis. The useful question is not when a cryptographically relevant quantum computer will arrive. It is whether sensitive data and migration programs can outlast the transition.'
    })}
    <div class="clock-grid reveal">
      <div class="clock-statement">
        <span class="clock-statement__label">EXPOSURE MODEL / MOSCA</span>
        <p><strong>Data shelf life</strong><b>+</b><strong>Time to migrate</strong><b>&gt;</b><strong>Time to cryptographic disruption</strong></p>
        <div class="clock-statement__result"><i></i><span>Migration starts too late</span></div>
      </div>
      <div class="harvest-flow" aria-label="Harvest now, decrypt later risk flow">
        <div><span>01</span><strong>Collect</strong><small>Encrypted traffic today</small></div>
        <i>${'<svg viewBox="0 0 80 14" aria-hidden="true"><path d="M0 7h76M69 1l7 6-7 6"/></svg>'}</i>
        <div><span>02</span><strong>Retain</strong><small>Long-lived ciphertext</small></div>
        <i>${'<svg viewBox="0 0 80 14" aria-hidden="true"><path d="M0 7h76M69 1l7 6-7 6"/></svg>'}</i>
        <div class="harvest-flow__risk"><span>03</span><strong>Exploit later</strong><small>If cryptography fails first</small></div>
      </div>
    </div>
    <div class="urgency-foot"><p>Exact timelines remain uncertain. Migration lead time is the variable an organization can reduce now.</p>${textLink('/pq-migration/', 'Examine the migration path')}</div>
  </div>
</section>

<section class="live-product section" id="live-product">
  <div class="shell">
    ${sectionIntro({
      index: '02',
      label: 'Live system / Quantum-Safe VPN',
      title: 'A deployable first move, not a theoretical end state.',
      copy: 'Introduce hybrid post-quantum protection at the network layer while broader cryptographic discovery and migration continue.'
    })}
    <div class="product-feature">
      <div class="product-feature__content reveal">
        <div class="product-feature__status">${statusBadge('LIVE')}<span>AVAILABLE FOR TECHNICAL EVALUATION</span></div>
        <h3>Protect real network paths with hybrid key establishment.</h3>
        <p>CyberKorp Quantum-Safe VPN combines ML-KEM with X25519 in a hybrid design for remote-access and site-to-site connectivity. It is designed to fit cloud, on-premises and hybrid estates without making a full infrastructure replacement the first step.</p>
        <dl class="technical-ledger">
          <div><dt>Key establishment</dt><dd>ML-KEM + X25519</dd></div>
          <div><dt>Transport</dt><dd>TLS 1.3</dd></div>
          <div><dt>Connectivity</dt><dd>Remote + site-to-site</dd></div>
          <div><dt>Environment</dt><dd>Cloud · on-prem · hybrid</dd></div>
        </dl>
        <div class="product-feature__actions">${buttonLink('/book-demo/', 'Book a technical demo')}${textLink('/quantum-safe-vpn/', 'Inspect the architecture')}</div>
      </div>
      <div class="product-feature__diagram reveal">${networkDiagram({ compact: true, label: 'Remote and site-to-site topology' })}</div>
    </div>
  </div>
</section>

<section class="stack-section section section--blue" id="stack">
  <div class="shell">
    ${sectionIntro({
      index: '03',
      label: 'Architecture / Six layers',
      title: 'Cryptography is infrastructure. Treat it like a system.',
      copy: 'The live network layer is one part of a broader architecture spanning hardware trust, entropy, keys, cryptographic controls, transport and applications. Every capability carries an explicit maturity state.'
    })}
    ${stackExplorer({ instance: 'home-stack' })}
    <div class="stack-section__footer"><p>Only the Quantum-Safe VPN is represented as live. Roadmap labels describe direction, not release commitments.</p>${textLink('/quantum-safe-stack/', 'Explore the full stack')}</div>
  </div>
</section>

<section class="migration section" id="migration">
  <div class="shell">
    ${sectionIntro({
      index: '04',
      label: 'Migration method',
      title: 'From unknown exposure to an operated cryptographic program.',
      copy: 'Post-quantum migration is not one software upgrade. It is a controlled program across applications, certificates, keys, libraries, protocols and infrastructure.'
    })}
    <div class="process-grid">
      <article class="process-step reveal">
        <div><span>01</span><small>ASSESS</small></div><h3>Find the cryptography that matters.</h3>
        <p>Inventory assets and dependencies across code, applications, certificates, cloud and private infrastructure.</p>
        <ul><li>Cryptographic inventory / CBOM</li><li>Risk-ranked systems</li><li>Migration sequence</li></ul>
      </article>
      <article class="process-step reveal">
        <div><span>02</span><small>MIGRATE</small></div><h3>Change critical paths deliberately.</h3>
        <p>Prioritize systems by data lifetime and operational consequence, then introduce hybrid controls where they fit.</p>
        <ul><li>PKI and identity</li><li>VPN and transport</li><li>Applications and data</li></ul>
      </article>
      <article class="process-step reveal">
        <div><span>03</span><small>OPERATE</small></div><h3>Keep the next change possible.</h3>
        <p>Manage keys, evidence, policy and algorithm change as an ongoing security capability, not a one-off project.</p>
        <ul><li>Lifecycle controls</li><li>Migration evidence</li><li>Cryptographic agility</li></ul>
      </article>
    </div>
    <div class="migration-principle reveal"><span>OPERATING PRINCIPLE</span><p>Migration should not create the next migration problem.</p>${textLink('/quantum-assessment/', 'Assess your quantum risk')}</div>
  </div>
</section>

<section class="foundation section section--paper" id="engineering">
  <div class="shell">
    ${sectionIntro({
      index: '05',
      label: 'Engineering doctrine',
      title: 'Engineered from the trust boundary up.',
      copy: 'Security properties emerge from the full path: hardware, entropy, identity, algorithms, protocols, deployment and operation.'
    })}
    ${architectureRibbon()}
    <div class="principle-grid">
      <article class="reveal"><span>01</span><h3>Standards-aware</h3><p>Built around documented protocols and standardized primitives, without presenting design alignment as certification or endorsement.</p></article>
      <article class="reveal"><span>02</span><h3>Crypto-agile</h3><p>Separate policy and implementation so future algorithm changes can be bounded, tested and operated.</p></article>
      <article class="reveal"><span>03</span><h3>Deployable</h3><p>Start from actual network, application and trust constraints, not a clean-room architecture that exists only on paper.</p></article>
      <article class="reveal"><span>04</span><h3>Sovereign by design</h3><p>Engineered in India with support for private and on-premises control where infrastructure sovereignty matters.</p></article>
    </div>
  </div>
</section>

<section class="defense section section--ink" id="cyber-defense">
  <div class="shell">
    ${sectionIntro({
      index: '06',
      label: 'Cyber defense',
      title: 'The future threat model still has to survive today’s adversary.',
      copy: 'Quantum migration sits inside a wider security reality. CyberKorp connects research, adversary understanding, offensive testing, defensive engineering and response.'
    })}
    ${defenseGrid()}
    <div class="section-end-link">${buttonLink('/cyber-defense/', 'Explore cyber defense', { kind: 'outline-light' })}</div>
  </div>
</section>

<section class="ai-intelligence section" id="ai-threat-intelligence">
  <div class="shell">
    <div class="ai-intelligence__frame reveal">
      <div class="ai-intelligence__content">
        <div class="ai-intelligence__eyebrow"><span>AI / THREAT INTELLIGENCE</span><i>ANALYST-GOVERNED</i></div>
        <h2>AI-accelerated security intelligence.</h2>
        <p>From discovering vulnerable cryptography across your infrastructure to tracking threats across the open, deep and dark web, CyberKorp uses AI to turn massive security data into actionable intelligence.</p>
        <div class="ai-intelligence__actions">
          ${buttonLink('/threat-intelligence/', 'Explore threat intelligence')}
          <span>AI accelerates correlation and prioritization. Analysts govern confidence, context and action.</span>
        </div>
      </div>
      <div class="ai-intelligence__system" aria-label="AI-assisted threat intelligence correlation model">
        <div class="ai-system__sources">
          <span>SOURCE / 01</span>
          <strong>Open web</strong><strong>Deep web</strong><strong>Dark web</strong><strong>Threat feeds</strong><strong>Adversary infrastructure</strong>
        </div>
        <div class="ai-system__core"><span>AI-ASSISTED</span><strong>CORRELATION</strong><i aria-hidden="true"></i><small>ENTITY · TEMPORAL · BEHAVIORAL</small></div>
        <div class="ai-system__outputs">
          <span>INTELLIGENCE / 02</span>
          <strong>Indicators</strong><strong>Actors</strong><strong>Campaigns</strong><strong>Infrastructure</strong><strong>Priority</strong>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="research-preview section section--paper" id="research">
  <div class="shell">
    ${sectionIntro({
      index: '08',
      label: 'Applied research',
      title: 'Build the layer that does not exist yet.',
      copy: 'Research is not decorative content. It is how the architecture advances, from cryptographic agility and secure networking to entropy, hardware trust and threat analysis.'
    })}
    ${researchGrid({ limit: 6 })}
    <div class="research-preview__end"><p>No invented papers, patents or partnerships. Research outputs will be published only when they are ready and verifiable.</p>${textLink('/research/', 'Enter CyberKorp research')}</div>
    ${ctaPanel({
      label: 'Research / Work with us',
      title: 'Work on problems without easy answers.',
      copy: 'CyberKorp is looking for researchers and engineers who want to build security systems for the next cryptographic era.',
      primary: { href: '/join-research/', label: 'Join CyberKorp research' },
      secondary: { href: '/research/', label: 'See research areas' },
      tone: 'blue'
    })}
  </div>
</section>`;

const quantumSecurityBody = () => `
${pageHero({
  label: 'QSEC / OVERVIEW',
  title: 'Move from cryptographic exposure to <em>controlled migration.</em>',
  copy: 'CyberKorp combines a live quantum-safe network layer with a broader architecture for discovery, migration, key infrastructure and cryptographic agility.',
  actions: `${buttonLink('/book-demo/', 'Book VPN demo')}${buttonLink('/quantum-assessment/', 'Assess quantum risk', { kind: 'outline' })}`,
  aside: `<div class="program-index"><p>PROGRAM / INDEX</p><ol><li><span>01</span>Understand exposure</li><li><span>02</span>Protect network paths</li><li><span>03</span>Sequence migration</li><li><span>04</span>Operate for change</li></ol></div>`,
  meta: [['Live layer', 'Quantum-Safe VPN'], ['Method', 'Assess · Migrate · Operate'], ['Architecture', 'Six connected layers']]
})}
<section class="section section--paper">
  <div class="shell">
    ${sectionIntro({ index: '01', label: 'Why now', title: 'The deadline is set by your data, not a speculative date.', copy: 'If data must remain confidential for years and migration itself takes years, waiting for certainty can erase the available transition window.' })}
    <div class="split-proof">
      <div class="split-proof__statement reveal"><span>COLLECT TODAY</span><b>→</b><span>DECRYPT LATER</span><p>Long-lived encrypted data creates a present-tense planning problem.</p></div>
      <div class="split-proof__copy reveal"><h3>Make uncertainty manageable.</h3><p>CyberKorp’s approach does not require a prediction of “Q-Day.” It starts with data lifetime, cryptographic dependencies, migration lead time and operational consequence.</p>${textLink('/pq-migration/', 'See the migration method')}</div>
    </div>
  </div>
</section>
<section class="section quantum-portfolio">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Technology program', title: 'Live today. Building what comes next.', copy: 'The portfolio is deliberately separated by maturity so technical direction is never mistaken for commercial availability.' })}
    <article class="live-system-card reveal">
      <div class="live-system-card__copy"><div>${statusBadge('LIVE')}<span>NETWORK / L4</span></div><h3>Quantum-Safe VPN</h3><p>Hybrid ML-KEM + X25519 protection for remote-access and site-to-site network paths across existing infrastructure.</p>${buttonLink('/quantum-safe-vpn/', 'Inspect the live system')}</div>
      <div class="live-system-card__visual">${networkDiagram({ compact: true })}</div>
    </article>
    ${stackExplorer({ instance: 'quantum-overview-stack' })}
    <div class="stack-section__footer"><p>Architecture direction is broad. Availability claims are narrow by design.</p>${textLink('/quantum-safe-stack/', 'Open the architecture ledger')}</div>
  </div>
</section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'Program sequence', title: 'Protect what is urgent. Map what is complex. Keep both connected.', copy: 'A network control can reduce exposure on selected paths while discovery and system-by-system migration proceed.' })}
    <div class="sequence-map">
      <article><span>NOW / DEPLOY</span><h3>Network protection</h3><p>Evaluate hybrid protection for selected remote and site-to-site paths.</p></article>
      <i aria-hidden="true"></i>
      <article><span>DISCOVER / PRIORITIZE</span><h3>Migration program</h3><p>Inventory cryptography and rank systems by data lifetime and consequence.</p></article>
      <i aria-hidden="true"></i>
      <article><span>DESIGN / OPERATE</span><h3>Crypto-agile estate</h3><p>Build controls for key lifecycle, policy, evidence and future algorithm change.</p></article>
    </div>
  </div>
</section>
<section class="section"><div class="shell">${statusLegend()}${ctaPanel({ label: 'Start with evidence', title: 'Which cryptographic path should move first?', copy: 'Begin with a technical VPN review or scope a broader readiness assessment around your data, systems and timelines.', primary: { href: '/quantum-assessment/', label: 'Assess quantum risk' }, secondary: { href: '/book-demo/', label: 'Book VPN demo' }, tone: 'blue' })}</div></section>`;

const vpnBody = () => `
${pageHero({
  label: 'PRODUCT / QSVPN',
  status: 'LIVE',
  title: 'Quantum-safe networking. <em>Ready today.</em>',
  copy: 'Hybrid post-quantum protection for remote access and site-to-site connectivity across existing cloud, on-premises and private infrastructure.',
  actions: `${buttonLink('/book-demo/', 'Book a technical demo')}${buttonLink('#architecture', 'Inspect architecture', { kind: 'outline' })}`,
  aside: `<div class="protocol-card"><div><span>PROTOCOL PROFILE</span><i></i></div><dl><dt>Hybrid KEX</dt><dd>ML-KEM + X25519</dd><dt>Transport</dt><dd>TLS 1.3</dd><dt>Modes</dt><dd>Remote / S2S</dd><dt>Maturity</dt><dd>Live</dd></dl><p>CK / QSVPN / PROFILE 01</p></div>`,
  meta: [['Primitive', 'ML-KEM + X25519'], ['Transport', 'TLS 1.3'], ['Deployment', 'Cloud · on-prem · hybrid']]
})}
<section class="section" id="architecture">
  <div class="shell">
    ${sectionIntro({ index: '01', label: 'System architecture', title: 'Add a post-quantum component where network trust is established.', copy: 'The hybrid design retains an established classical component while adding ML-KEM, a NIST-standardized post-quantum key-encapsulation mechanism.' })}
    <div class="diagram-stage reveal">${networkDiagram({ label: 'Conceptual deployment topology' })}</div>
    <div class="architecture-notes">
      <article><span>01 / NEGOTIATE</span><h3>Establish the secure session.</h3><p>The endpoints negotiate a TLS 1.3 protected path using the configured hybrid profile.</p></article>
      <article><span>02 / COMBINE</span><h3>Use classical and PQ components.</h3><p>ML-KEM is paired with X25519 so the transition does not depend on a post-quantum primitive alone.</p></article>
      <article><span>03 / ROUTE</span><h3>Carry protected network traffic.</h3><p>The resulting tunnel supports remote-access or site-to-site connectivity according to deployment design.</p></article>
    </div>
  </div>
</section>
<section class="section section--paper">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Deployment patterns', title: 'Meet the infrastructure where it is.', copy: 'Quantum-safe migration should fit the organization’s network boundaries, not force the organization to rebuild around one product.' })}
    <div class="deployment-grid">
      <article class="reveal"><span>REMOTE / ACCESS</span><h3>User to protected environment</h3><p>Extend hybrid protection from approved endpoints to private applications and network resources.</p><div class="mini-topology"><i>USER</i><b></b><strong>QSVPN</strong><b></b><i>PRIVATE</i></div></article>
      <article class="reveal"><span>SITE / TO / SITE</span><h3>Network boundary to boundary</h3><p>Connect branches, data centers, cloud networks or controlled private environments.</p><div class="mini-topology"><i>SITE A</i><b></b><strong>QSVPN</strong><b></b><i>SITE B</i></div></article>
      <article class="reveal"><span>ENVIRONMENT / FIT</span><h3>Cloud, on-premises or hybrid</h3><p>Deployment topology, trust boundaries and integration requirements are reviewed before implementation.</p><div class="environment-list"><i>CLOUD</i><i>ON-PREM</i><i>HYBRID</i><i>PRIVATE</i></div></article>
    </div>
  </div>
</section>
<section class="section security-model">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'Security model', title: 'Conservative claims. Inspectable decisions.', copy: 'Quantum-safe does not mean risk-free, timeless or universally secure. It describes the use of post-quantum cryptography within a specific architecture and threat model.' })}
    <div class="security-model__grid">
      <article><span>HYBRID TRANSITION</span><h3>Do not abandon the established component prematurely.</h3><p>The hybrid profile uses X25519 alongside ML-KEM during the transition.</p></article>
      <article><span>DEPLOYMENT REVIEW</span><h3>Architecture matters beyond the algorithm.</h3><p>Endpoint security, configuration, identity, key handling and operations remain part of the security boundary.</p></article>
      <article><span>NO ABSOLUTES</span><h3>No “forever” guarantees.</h3><p>Algorithms and implementations must continue to be reviewed as standards and cryptanalysis evolve.</p></article>
      <article><span>CRYPTO-AGILITY</span><h3>Plan for the next controlled change.</h3><p>The objective is a migration path that can adapt without restarting from zero.</p></article>
    </div>
  </div>
</section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '04', label: 'Technical review', title: 'Bring the topology. Leave with the right questions answered.', copy: 'A useful demo should examine where the VPN sits, which paths it protects, what must integrate and what requires validation.' })}
    <div class="review-agenda"><div><span>01</span><p>Current network boundaries and access model</p></div><div><span>02</span><p>Remote and site-to-site use cases</p></div><div><span>03</span><p>Hybrid key-establishment profile</p></div><div><span>04</span><p>Deployment dependencies and evaluation plan</p></div></div>
    ${ctaPanel({ label: 'Quantum-Safe VPN / Live', title: 'Evaluate the live network layer.', copy: 'Request a technical session focused on architecture, integration and deployment fit. No invented benchmark deck, bring the environment that matters.', primary: { href: '/book-demo/', label: 'Book technical demo' }, secondary: { href: '/contact/', label: 'Ask a product question' }, tone: 'blue' })}
  </div>
</section>
<section class="section faq-section"><div class="shell">${sectionIntro({ index: '05', label: 'Technical FAQ', title: 'Questions before an evaluation.' })}<div class="faq-list">
  <details><summary>What makes the VPN “quantum-safe”?<span></span></summary><p>Its hybrid key-establishment profile adds ML-KEM, a post-quantum key-encapsulation mechanism standardized by NIST, alongside X25519. The term describes this architecture; it is not an absolute security guarantee.</p></details>
  <details><summary>Does deployment require replacing the whole network?<span></span></summary><p>The product is designed for deployment across existing cloud, on-premises and hybrid infrastructure. Exact integration work depends on topology, identity, routing and operational constraints.</p></details>
  <details><summary>Which connectivity models are supported?<span></span></summary><p>The supplied product scope covers remote-access and site-to-site connectivity. A technical review determines fit for a specific environment.</p></details>
  <details><summary>Are performance or certification claims available?<span></span></summary><p>This site intentionally publishes no unverified throughput, deployment, certification or customer claims. Verified technical evidence can be added when supplied.</p></details>
</div></div></section>`;

const migrationBody = () => `
${pageHero({
  label: 'PROGRAM / PQ MIGRATION',
  title: 'Find the cryptography. <em>Sequence the change.</em>',
  copy: 'A post-quantum migration program connects data lifetime, cryptographic discovery, system criticality and operational change into one defensible plan.',
  actions: `${buttonLink('/quantum-assessment/', 'Assess quantum risk')}${buttonLink('#method', 'See the method', { kind: 'outline' })}`,
  aside: `<div class="migration-clock"><p>MIGRATION CLOCK</p><div><span>SECRECY LIFE</span><b>+</b><span>CHANGE LEAD TIME</span><b>&gt;</b><span>PROTECTION WINDOW</span></div><strong>ACT BEFORE THE WINDOW CLOSES</strong></div>`,
  meta: [['Input', 'Cryptographic inventory'], ['Method', 'Risk-ranked sequencing'], ['Outcome', 'Operable migration roadmap']]
})}
<section class="section section--paper">
  <div class="shell">
    ${sectionIntro({ index: '01', label: 'Discovery', title: 'You cannot migrate what you cannot locate.', copy: 'Cryptography is distributed across code, protocols, certificates, key stores, libraries, appliances and third-party dependencies. Discovery turns that hidden estate into a decision surface.' })}
    <div class="inventory-map reveal">
      <div class="inventory-map__core"><span>CRYPTOGRAPHIC</span><strong>INVENTORY</strong><small>CBOM / DEPENDENCIES</small></div>
      ${['Applications', 'Source code', 'Certificates', 'Keys', 'Libraries', 'Cloud', 'On-premises', 'Protocols'].map((item, index) => `<div class="inventory-map__node inventory-map__node--${index + 1}"><span>${String(index + 1).padStart(2, '0')}</span>${item}</div>`).join('')}
      <svg viewBox="0 0 800 500" aria-hidden="true"><g>${[70, 160, 250, 340, 430, 520, 610, 700].map((x, index) => `<path d="M400 250 C${400 + (index % 2 ? 80 : -80)} 250 ${x} ${index < 4 ? 75 : 425} ${x} ${index < 4 ? 75 : 425}"/>`).join('')}</g></svg>
    </div>
    <div class="inventory-foot"><p>A CBOM is useful when it supports ownership, dependency analysis and migration decisions, not when it becomes another static dashboard.</p></div>
  </div>
</section>
<section class="section" id="method">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Assess → Migrate → Operate', title: 'One program, three controlled states.', copy: 'Each stage creates evidence for the next and avoids a premature, estate-wide replacement program.' })}
    <div class="method-detail">
      <article class="reveal"><div><span>01</span><i>ASSESS</i></div><h3>Establish the exposure surface.</h3><p>Map cryptographic use against data lifetime, business criticality, external dependencies and migration difficulty.</p><h4>Working outputs</h4><ul><li>Cryptographic inventory / CBOM</li><li>Critical-path map</li><li>Risk-ranked backlog</li><li>Decision-ready roadmap</li></ul></article>
      <article class="reveal"><div><span>02</span><i>MIGRATE</i></div><h3>Move by priority and dependency.</h3><p>Introduce hybrid controls and update systems in a sequence that limits disruption and preserves rollback paths.</p><h4>Migration domains</h4><ul><li>Network and TLS</li><li>PKI and identity</li><li>Applications and libraries</li><li>Data protection</li></ul></article>
      <article class="reveal"><div><span>03</span><i>OPERATE</i></div><h3>Turn migration into capability.</h3><p>Maintain visibility, key lifecycle, policy, evidence and algorithm-change readiness after initial deployment.</p><h4>Operating controls</h4><ul><li>Cryptographic policy</li><li>Key lifecycle management</li><li>Change evidence</li><li>Agility testing</li></ul></article>
    </div>
  </div>
</section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'Prioritization', title: 'Not every system should move first.', copy: 'Sequence migration around the intersection of secrecy lifetime, exposure, operational consequence, dependency depth and change lead time.' })}
    <div class="priority-matrix reveal"><div class="priority-matrix__axis priority-matrix__axis--y">DATA + CONSEQUENCE <span>HIGH</span></div><div class="priority-matrix__grid"><span>MONITOR</span><span>PLAN</span><span>PREPARE</span><span class="is-priority">PRIORITIZE</span><i></i><i></i></div><div class="priority-matrix__axis priority-matrix__axis--x">MIGRATION DIFFICULTY <span>HIGH</span></div></div>
    <p class="matrix-note">This is a decision model, not an automated score or compliance assertion. Criteria must be calibrated to the organization.</p>
  </div>
</section>
<section class="section"><div class="shell">${ctaPanel({ label: 'Quantum readiness', title: 'Start with the systems that cannot wait.', copy: 'Scope a discovery and prioritization discussion around critical data, cryptographic dependencies and migration lead time.', primary: { href: '/quantum-assessment/', label: 'Request assessment discussion' }, secondary: { href: '/quantum-security/', label: 'Explore quantum security' }, tone: 'blue' })}</div></section>`;

const stackBody = () => `
${pageHero({
  label: 'ARCHITECTURE / STACK',
  title: 'Six layers. <em>One migration system.</em>',
  copy: 'A reference architecture spanning hardware trust, entropy, keys, cryptographic controls, network transport and applications, with maturity visible at every layer.',
  actions: `${buttonLink('#architecture-ledger', 'Explore the layers')}${buttonLink('/contact/?intent=roadmap', 'Discuss the roadmap', { kind: 'outline' })}`,
  aside: `<div class="layer-tower">${[...layers].reverse().map((layer) => `<div><span>${layer.code}</span><strong>${layer.shortName}</strong></div>`).join('')}</div>`,
  meta: [['Layers', 'L0 → L5'], ['Live capability', 'Quantum-Safe VPN'], ['Status model', 'Live · development · planned · research']]
})}
<section class="section section--paper" id="architecture-ledger">
  <div class="shell">
    ${sectionIntro({ index: '01', label: 'Interactive architecture', title: 'Inspect the system by trust layer.', copy: 'Select a layer to see its purpose, capability map and stated maturity. Conservative labels are intentional.' })}
    ${stackExplorer({ instance: 'stack-page' })}
  </div>
</section>
<section class="section">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Maturity model', title: 'Direction is not availability.', copy: 'Roadmap transparency matters in security infrastructure. Every capability uses one of four labels with a fixed meaning.' })}
    ${statusLegend()}
    <div class="maturity-note"><span>STATUS RULE</span><p>When product maturity is uncertain, this site uses the more conservative label. Dates, performance and deployment claims remain absent until verified.</p></div>
  </div>
</section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'System logic', title: 'A stack only matters if the layers compose.', copy: 'Point products can expose problems while leaving integration and operating ownership unresolved. The architectural goal is a connected path.' })}
    ${architectureRibbon()}
    <div class="composition-grid"><article><span>01</span><h3>No hidden hand-offs</h3><p>Discovery, policy, keys, protocols and application changes must share an architecture and ownership model.</p></article><article><span>02</span><h3>Change is a design input</h3><p>Algorithms and standards will evolve. Bound the places that must change and preserve testability.</p></article><article><span>03</span><h3>Deployment defines security</h3><p>Hardware, identity, configuration, operations and evidence remain part of the trust boundary.</p></article></div>
  </div>
</section>
<section class="section"><div class="shell">${ctaPanel({ label: 'Architecture review', title: 'Map your current estate against the six layers.', copy: 'Discuss a live VPN deployment, a migration assessment or the longer-term architecture without treating roadmap work as shipping product.', primary: { href: '/quantum-assessment/', label: 'Assess the estate' }, secondary: { href: '/book-demo/', label: 'Review the live VPN' }, tone: 'blue' })}</div></section>`;

const defenseBody = () => `
${pageHero({
  label: 'CYBER DEFENSE',
  title: 'Understand the adversary. <em>Engineer the defense.</em>',
  copy: 'Research-led threat intelligence, adversary-focused testing, defensive engineering and incident response for security problems that cross organizational silos.',
  actions: `${buttonLink('/contact/?intent=cyber-defense', 'Discuss a requirement')}${buttonLink('/threat-intelligence/', 'Explore intelligence', { kind: 'outline' })}`,
  aside: `<div class="defense-radar" aria-hidden="true"><i></i><i></i><i></i><i></i><span>OBSERVE</span><span>TEST</span><span>DETECT</span><span>RESPOND</span><b></b></div>`,
  meta: [['Model', 'Research → intelligence → control'], ['Coverage', 'Offense · defense · response'], ['Engagement', 'Scoped to the operating need']]
})}
<section class="section section--ink"><div class="shell">${sectionIntro({ index: '01', label: 'Capabilities', title: 'Four disciplines. One security picture.', copy: 'The work is organized around decisions and control improvement, not a catalogue of generic service packages.' })}${defenseGrid()}</div></section>
<section class="section section--paper">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Operating loop', title: 'Research should change the defense.', copy: 'Intelligence has value when it sharpens testing, detection, architecture and response. Findings should travel through the loop.' })}
    <div class="defense-loop reveal"><div><span>01</span><strong>Observe</strong><p>Track relevant behavior, infrastructure and change.</p></div><i></i><div><span>02</span><strong>Model</strong><p>Convert signals into adversary paths and hypotheses.</p></div><i></i><div><span>03</span><strong>Test</strong><p>Exercise the paths against people, process and technology.</p></div><i></i><div><span>04</span><strong>Engineer</strong><p>Improve architecture, detections and response actions.</p></div></div>
  </div>
</section>
<section class="section">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'Engagement discipline', title: 'Start with the decision that must improve.', copy: 'A clear engagement boundary is more useful than a long list of tools.' })}
    <div class="engagement-grid"><article><span>QUESTION</span><h3>What needs to be known?</h3><p>Define the threat, system, event or strategic uncertainty that requires evidence.</p></article><article><span>EVIDENCE</span><h3>What would change the answer?</h3><p>Identify technical sources, validation methods and confidence boundaries.</p></article><article><span>CONTROL</span><h3>What action follows?</h3><p>Connect findings to architecture, detection, remediation, response or executive decision.</p></article></div>
    ${ctaPanel({ label: 'Cyber defense', title: 'Bring the security problem, not a predefined package.', copy: 'Scope the adversary, environment, evidence and outcome with CyberKorp.', primary: { href: '/contact/?intent=cyber-defense', label: 'Discuss a requirement' }, secondary: { href: '/threat-intelligence/', label: 'Explore threat intelligence' }, tone: 'blue' })}
  </div>
</section>`;

const intelligenceBody = () => `
${pageHero({
  label: 'DEFENSE / AI INTELLIGENCE',
  title: 'AI-powered threat intelligence. <em>Built for action.</em>',
  copy: 'Continuous intelligence across the open, deep and dark web, threat feeds and adversary infrastructure. AI correlates indicators, actors, campaigns and emerging threats into actionable intelligence for your security teams.',
  actions: `${buttonLink('/contact/?intent=threat-intelligence', 'Discuss an intelligence need')}${buttonLink('#capabilities', 'Explore capabilities', { kind: 'outline' })}`,
  aside: `<div class="intel-chain intel-chain--ai"><div>OPEN · DEEP · DARK</div><i></i><div>FEEDS · INFRA</div><i></i><div>AI CORRELATION</div><i></i><div>ANALYST CONTEXT</div><i></i><div>DEFENSIVE ACTION</div></div>`,
  meta: [['Collection', 'Web · feeds · infrastructure'], ['Correlation', 'Indicators · actors · campaigns'], ['Control', 'Analyst-governed intelligence']]
})}
<section class="section section--paper" id="capabilities">
  <div class="shell">
    ${sectionIntro({ index: '01', label: 'AI-powered collection and correlation', title: 'Find the relationships a feed cannot show.', copy: 'AI accelerates collection, enrichment, entity resolution and pattern discovery across high-volume security sources. Analysts remain responsible for source evaluation, confidence, context and the action that follows.' })}
    <div class="ai-intel-overview reveal">
      <div class="ai-intel-overview__statement"><span>COLLECT / CORRELATE / PRIORITIZE</span><h3>Machine-speed analysis.<br>Security-team judgment.</h3><p>Automation handles repetitive pivots and large-scale comparison. Human analysis tests the result against the intelligence question and operating environment.</p></div>
      <div class="ai-intel-overview__pipeline" aria-label="Threat intelligence processing pipeline"><div><span>01</span><strong>COLLECT</strong><small>Web · feeds · infrastructure</small></div><i></i><div><span>02</span><strong>CORRELATE</strong><small>Entities · time · behavior</small></div><i></i><div><span>03</span><strong>ASSESS</strong><small>Confidence · relevance · risk</small></div><i></i><div><span>04</span><strong>ACT</strong><small>Detect · investigate · defend</small></div></div>
    </div>
    <div class="ai-capability-grid">
      <article class="reveal"><span>01 / MONITOR</span><h3>Dark Web Monitoring</h3><p>Track relevant marketplaces, forums, leak sites and exposed-data signals across monitored dark-web sources.</p></article>
      <article class="reveal"><span>02 / ACTORS</span><h3>Threat Actor Intelligence</h3><p>Connect identities, aliases, behavior, intent, capability and infrastructure into evolving actor context.</p></article>
      <article class="reveal"><span>03 / INDICATORS</span><h3>IOC Correlation</h3><p>Enrich and link domains, IP addresses, hashes, certificates and other indicators across sources and time.</p></article>
      <article class="reveal"><span>04 / CAMPAIGNS</span><h3>Campaign Detection</h3><p>Cluster related activity to surface shared infrastructure, targeting, timing and operational patterns.</p></article>
      <article class="reveal"><span>05 / ANALYSIS</span><h3>Malware &amp; Infrastructure Analysis</h3><p>Map malware observations to delivery paths, hosting, domains, certificates and adversary-controlled systems.</p></article>
      <article class="reveal"><span>06 / AUTOMATE</span><h3>Automated Threat Research</h3><p>Accelerate collection, enrichment, pivoting and synthesis while retaining traceable evidence for review.</p></article>
      <article class="reveal"><span>07 / PRIORITIZE</span><h3>Risk Prioritization</h3><p>Rank intelligence by relevance, exposure, confidence and potential operational consequence, not novelty alone.</p></article>
    </div>
    <div class="ai-governance-note"><span>OPERATING BOUNDARY</span><p>AI proposes relationships and priorities. Analysts validate evidence, state confidence and determine action.</p></div>
  </div>
</section>
<section class="section" id="method">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Intelligence cycle', title: 'From signal to defensive consequence.', copy: 'More indicators do not automatically create better intelligence. Context, confidence, relevance and actionability determine value.' })}
    <div class="intel-process">
      <article><span>01 / FRAME</span><h3>Define the intelligence question.</h3><p>What decision, threat model or security control should this work inform?</p></article>
      <article><span>02 / COLLECT</span><h3>Assemble relevant evidence.</h3><p>Bring together open, deep and dark web sources, threat feeds, infrastructure, indicators and behavior.</p></article>
      <article><span>03 / ANALYZE</span><h3>Correlate, then challenge.</h3><p>Use AI to surface relationships, then test competing explanations and make confidence boundaries visible.</p></article>
      <article><span>04 / OPERATIONALIZE</span><h3>Connect the finding to action.</h3><p>Drive detection, investigation, testing, architecture or strategic decision-making.</p></article>
    </div>
  </div>
</section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'Correlation surface', title: 'Follow the relationships, not just the artifacts.', copy: 'A useful model links who is acting, what infrastructure enables them, how campaigns evolve and where defenders can intervene.' })}
    <div class="intel-graph reveal" aria-label="AI-powered threat intelligence relationship model"><div class="intel-graph__core"><span>AI + ANALYST</span><strong>ACTIONABLE INTELLIGENCE</strong></div>${['Threat actor', 'Infrastructure', 'Malware', 'Capability', 'Victimology', 'Indicators', 'Campaign', 'Control'].map((item, index) => `<div class="intel-graph__node intel-graph__node--${index + 1}">${item}</div>`).join('')}<svg viewBox="0 0 800 520" aria-hidden="true"><circle cx="400" cy="260" r="185"/><circle cx="400" cy="260" r="110"/><path d="M120 100 680 420M680 100 120 420M400 30v460M70 260h660"/></svg></div>
  </div>
</section>
<section class="section">
  <div class="shell">
    ${sectionIntro({ index: '04', label: 'Intelligence outputs', title: 'Match the artifact to the decision.', copy: 'Outputs are built around the operating need, from machine-readable indicators to campaign context and prioritized defensive action.' })}
    <div class="output-ledger"><div><span>TECHNICAL</span><strong>IOC and infrastructure intelligence</strong><p>Enrichment, relationships, pivots, confidence and defensive implications.</p></div><div><span>OPERATIONAL</span><strong>Actor and campaign assessment</strong><p>Behavior, targeting, malware, likely paths and control opportunities.</p></div><div><span>STRATEGIC</span><strong>Emerging-threat and risk brief</strong><p>Material change, uncertainty, scenarios and implications for security leaders.</p></div><div><span>ENGINEERING</span><strong>Prioritized defensive action</strong><p>Translate intelligence into detection, investigation, testing and control improvements.</p></div></div>
    ${ctaPanel({ label: 'AI-powered threat intelligence', title: 'Turn security data into a defensible next action.', copy: 'Share the threat context, environment and decision. CyberKorp will scope the sources, automation and analyst work required.', primary: { href: '/contact/?intent=threat-intelligence', label: 'Discuss an intelligence need' }, secondary: { href: '/cyber-defense/', label: 'Explore cyber defense' }, tone: 'blue' })}
  </div>
</section>`;

const researchBody = () => `
${pageHero({
  label: 'RESEARCH / LAB',
  title: 'Build security for problems that are <em>still taking shape.</em>',
  copy: 'CyberKorp research connects post-quantum cryptography, secure networking, hardware trust and threat research to systems that can eventually be tested and deployed.',
  actions: `${buttonLink('/join-research/', 'Join CyberKorp research')}${buttonLink('#research-tracks', 'Explore research areas', { kind: 'outline' })}`,
  aside: `<div class="research-signal"><span>CK / LAB</span><div><i></i><i></i><i></i><i></i><i></i></div><strong>RESEARCH<br>→ SYSTEM<br>→ EVIDENCE</strong><small>NO THEATER / NO EASY CLAIMS</small></div>`,
  meta: [['Scope', 'Cryptography · systems · defense'], ['Mode', 'Applied and architecture-led'], ['Outputs', 'Published only when verifiable']]
})}
<section class="section section--paper" id="research-tracks"><div class="shell">${sectionIntro({ index: '01', label: 'Research tracks', title: 'One security problem crosses many layers.', copy: 'The research map follows the architecture, from low-level trust and entropy to cryptographic protocols, deployed systems and active threats.' })}${researchGrid()}</div></section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Research discipline', title: 'A claim is not an output.', copy: 'Deep-tech credibility comes from method, limits, reproducibility and the ability to translate work into secure systems.' })}
    <div class="research-method"><article><span>01</span><h3>Frame the threat model.</h3><p>State the system, adversary, assumptions and boundaries before choosing the technology.</p></article><article><span>02</span><h3>Build the smallest testable system.</h3><p>Move from concept to implementation without hiding unresolved engineering behind presentation.</p></article><article><span>03</span><h3>Try to break the result.</h3><p>Use review, testing and adversarial thinking to find where the security story fails.</p></article><article><span>04</span><h3>Publish only verified evidence.</h3><p>No placeholder papers, patents, partnerships or breakthrough language.</p></article></div>
  </div>
</section>
<section class="section">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'People', title: 'Difficult systems need multidisciplinary builders.', copy: 'CyberKorp is interested in people who can move between theory, implementation, testing and operation.' })}
    <div class="role-marquee" aria-label="Research roles">${roles.map((role, index) => `<span><i>${String(index + 1).padStart(2, '0')}</i>${role}</span>`).join('')}</div>
    ${ctaPanel({ label: 'Join research', title: 'Stay with the problem after the easy answer fails.', copy: 'Tell us what you have built, studied or broken, and which security problem you want to pursue next.', primary: { href: '/join-research/', label: 'Express research interest' }, secondary: { href: '/company/', label: 'How CyberKorp works' }, tone: 'blue' })}
  </div>
</section>`;

const companyBody = () => `
${pageHero({
  label: 'COMPANY / CYBERKORP',
  title: 'Built, not merely <em>advised.</em>',
  copy: 'CyberKorp is a deep-tech cybersecurity company engineering post-quantum security infrastructure alongside cyber defense and applied research.',
  actions: `${buttonLink('/quantum-security/', 'Explore the technology')}${buttonLink('/contact/', 'Contact CyberKorp', { kind: 'outline' })}`,
  aside: `<div class="company-manifest"><span>BUILD</span><span>DEPLOY</span><span>RESEARCH</span><span>DEFEND</span><p>CK / OPERATING MODEL</p></div>`,
  meta: [['Focus', 'Post-quantum infrastructure'], ['Base', 'India'], ['Operating idea', 'Technology + deployment + research']]
})}
<section class="section section--paper">
  <div class="shell">
    ${sectionIntro({ index: '01', label: 'Mission', title: 'Make cryptographic transition deployable.', copy: 'The next security era will not arrive as one clean upgrade. Organizations need a path through discovery, network protection, identity, key infrastructure, applications and operations.' })}
    <div class="mission-statement reveal"><p>CyberKorp exists to turn that transition from an abstract future risk into a sequence of systems that can be <strong>understood, deployed, tested and operated.</strong></p></div>
  </div>
</section>
<section class="section">
  <div class="shell">
    ${sectionIntro({ index: '02', label: 'Operating model', title: 'Four verbs, one accountability chain.', copy: 'The company model connects technology creation with the work required to put security into a real environment.' })}
    <div class="operating-principles"><article><span>BUILD / 01</span><h3>Engineer the technology.</h3><p>Create systems and integration paths rather than hiding behind a recommendation layer.</p></article><article><span>DEPLOY / 02</span><h3>Respect the environment.</h3><p>Design for cloud, on-premises, hybrid and private constraints without assuming a blank slate.</p></article><article><span>RESEARCH / 03</span><h3>Work beyond the current product.</h3><p>Study cryptography, systems and threats where available answers remain incomplete.</p></article><article><span>DEFEND / 04</span><h3>Keep contact with the adversary.</h3><p>Bring intelligence, testing, defensive engineering and response into the security model.</p></article></div>
  </div>
</section>
<section class="section section--ink">
  <div class="shell">
    ${sectionIntro({ index: '03', label: 'Sovereign by design', title: 'Infrastructure control is part of the threat model.', copy: 'Engineered in India, CyberKorp’s architecture considers private deployment, on-premises control and standards-based interoperability where sovereignty matters.' })}
    <div class="sovereign-grid"><div class="india-field" aria-hidden="true"><svg viewBox="0 0 520 420"><path d="M233 24 282 39 307 79 345 91 350 127 385 151 373 193 399 223 368 246 351 293 318 312 294 365 262 399 243 362 220 337 205 294 174 272 158 227 124 200 143 164 132 127 166 96 185 52z"/><g><circle cx="233" cy="122" r="4"/><circle cx="302" cy="176" r="4"/><circle cx="212" cy="236" r="4"/><circle cx="282" cy="306" r="4"/><path d="M233 122 302 176 212 236 282 306M233 122 212 236M302 176 282 306"/></g></svg><span>INDIA / ENGINEERING BASE</span></div><div class="sovereign-copy"><article><span>01</span><h3>Private control</h3><p>Support deployment patterns where keys, policy and traffic must remain inside controlled infrastructure.</p></article><article><span>02</span><h3>Standards-based architecture</h3><p>Use documented protocols and standardized primitives without implying third-party certification or endorsement.</p></article><article><span>03</span><h3>Indigenous engineering focus</h3><p>Build technical capability and system knowledge rather than relying only on integration of opaque products.</p></article></div></div>
  </div>
</section>
<section class="section"><div class="shell">${ctaPanel({ label: 'Work with CyberKorp', title: 'Bring the architecture, migration or defense problem.', copy: 'Choose a focused path: evaluate the live VPN, assess cryptographic exposure, scope a defense requirement or explore research.', primary: { href: '/contact/', label: 'Contact CyberKorp' }, secondary: { href: '/join-research/', label: 'Join research' }, tone: 'blue' })}</div></section>`;

function conversionBody({ code, label, title, copy, type, notes }) {
  return `
  ${pageHero({
    label: code,
    title,
    copy,
    aside: `<div class="intake-aside"><span>SECURE INTAKE / ${label.toUpperCase()}</span><ol>${notes.map((note, index) => `<li><i>${String(index + 1).padStart(2, '0')}</i>${note}</li>`).join('')}</ol><p>Do not submit credentials, private keys, exploit material or regulated data through this form.</p></div>`,
    meta: [['Path', label], ['Data', 'Minimum required fields'], ['Delivery', 'Netlify Forms']]
  })}
  <section class="section section--paper form-section"><div class="shell form-layout"><div class="form-layout__intro"><p class="eyebrow">${label} / Intake</p><h2>Give us enough context to make the first conversation technical.</h2><p>Fields marked with an asterisk are required. Netlify securely processes the submission and routes it to CyberKorp.</p><div class="form-safety"><span>DATA MINIMIZATION</span><p>Share architecture context, not sensitive system details. Deeper evidence should move through an agreed secure channel.</p></div></div>${inquiryForm({ type })}</div></section>`;
}

const privacyBody = () => `
${pageHero({ label: 'LEGAL / PRIVACY', title: 'Privacy information.', copy: 'A concise description of how inquiry data is handled through Netlify Forms.', meta: [['Status', 'Operational policy required before launch'], ['Processor', 'Netlify Forms'], ['Principle', 'Collect the minimum']] })}
<section class="section section--paper"><div class="shell legal-copy">
  <h2>Website inquiries</h2><p>CyberKorp’s website forms collect contact details and context needed to respond to product, assessment, defense or research inquiries. On the deployed site, Netlify Forms processes submissions and makes them available to authorized site administrators and configured notification recipients.</p>
  <h2>Data minimization</h2><p>Do not submit passwords, credentials, private keys, exploit material, personal identity documents, regulated records or sensitive production data through a website form. Technical evidence should move through a separately agreed secure channel.</p>
  <h2>Purpose</h2><p>Submitted information should be used to review, route and respond to the stated request. It should not be treated as marketing consent unless a separate, explicit opt-in is provided.</p>
  <h2>Retention and processing</h2><p>Netlify may retain submissions according to the site account, plan and configuration. Before launch, CyberKorp must finalize access controls, notification recipients, retention and deletion rules, legal bases, rights-request procedures and a verified privacy contact. Those operational details should replace this implementation note.</p>
  <h2>Contact</h2><p>Use the <a href="/contact/">contact flow</a> for website inquiries. Sensitive technical material should be transferred only through a separately agreed channel.</p>
</div></section>`;

export const pages = [
  {
    path: '/',
    title: 'CyberKorp | Deep-Tech Security for the Post-Quantum Era',
    heading: 'Security infrastructure for the post-quantum era',
    description: 'CyberKorp builds quantum-safe security infrastructure and advanced cyber defense capabilities for organizations preparing for the post-quantum era.',
    active: '',
    bodyClass: 'home-page',
    priority: '1.0',
    body: homeBody
  },
  {
    path: '/quantum-security/',
    title: 'Quantum Security',
    heading: 'Quantum security infrastructure and migration',
    description: 'Explore CyberKorp quantum security: a live hybrid Quantum-Safe VPN, post-quantum migration method, and six-layer infrastructure architecture.',
    active: 'quantum',
    priority: '0.9',
    body: quantumSecurityBody
  },
  {
    path: '/quantum-safe-vpn/',
    title: 'Quantum-Safe VPN',
    heading: 'Quantum-Safe VPN',
    description: 'CyberKorp Quantum-Safe VPN uses hybrid ML-KEM and X25519 for remote-access and site-to-site protection across existing infrastructure.',
    active: 'quantum',
    priority: '0.9',
    body: vpnBody
  },
  {
    path: '/pq-migration/',
    title: 'Post-Quantum Migration',
    heading: 'Post-quantum migration',
    description: 'Discover cryptographic assets, prioritize post-quantum risk, sequence migration, and build an operable crypto-agility program with CyberKorp.',
    active: 'quantum',
    priority: '0.8',
    body: migrationBody
  },
  {
    path: '/quantum-safe-stack/',
    title: 'Quantum-Safe Stack',
    heading: 'Quantum-safe infrastructure stack',
    description: 'Explore CyberKorp’s six-layer quantum-safe architecture and explicit Live, In Development, Planned, and Research product maturity labels.',
    active: 'quantum',
    priority: '0.8',
    body: stackBody
  },
  {
    path: '/cyber-defense/',
    title: 'Cyber Defense',
    heading: 'Advanced cyber defense',
    description: 'CyberKorp connects threat intelligence, offensive testing, defensive engineering, and incident response around real security decisions.',
    active: 'defense',
    priority: '0.8',
    body: defenseBody
  },
  {
    path: '/threat-intelligence/',
    title: 'AI-Powered Threat Intelligence',
    heading: 'AI-powered threat intelligence',
    description: 'AI-powered threat intelligence across the open, deep and dark web, threat feeds and adversary infrastructure, correlating indicators, actors and campaigns into action.',
    active: 'defense',
    priority: '0.7',
    body: intelligenceBody
  },
  {
    path: '/research/',
    title: 'Security Research',
    heading: 'CyberKorp security research',
    description: 'Explore CyberKorp research across post-quantum cryptography, secure networking, cryptographic agility, hardware trust, and threat research.',
    active: 'research',
    priority: '0.8',
    body: researchBody
  },
  {
    path: '/company/',
    title: 'Company',
    heading: 'About CyberKorp',
    description: 'CyberKorp is an India-based deep-tech cybersecurity company building post-quantum security infrastructure, cyber defense, and applied research.',
    active: 'company',
    priority: '0.7',
    body: companyBody
  },
  {
    path: '/book-demo/',
    title: 'Book a Quantum-Safe VPN Demo',
    heading: 'Book a Quantum-Safe VPN technical demo',
    description: 'Request a technical CyberKorp Quantum-Safe VPN session focused on hybrid architecture, deployment fit, and integration requirements.',
    active: 'quantum',
    priority: '0.7',
    body: () => conversionBody({ code: 'INTAKE / VPN DEMO', label: 'Technical demo', title: 'Evaluate the live <em>Quantum-Safe VPN.</em>', copy: 'Request a focused technical session around hybrid key establishment, connectivity needs and your deployment environment.', type: 'demo', notes: ['Share the topology and use case', 'Review architecture and integration', 'Define an evaluation path'] })
  },
  {
    path: '/quantum-assessment/',
    title: 'Quantum Readiness Assessment',
    heading: 'Assess quantum risk',
    description: 'Start a post-quantum readiness discussion around cryptographic discovery, data lifetime, migration priorities, and operating constraints.',
    active: 'quantum',
    priority: '0.7',
    body: () => conversionBody({ code: 'INTAKE / PQ ASSESSMENT', label: 'Readiness assessment', title: 'Find what must move <em>first.</em>', copy: 'Scope the cryptographic estate, critical data, dependencies and migration lead time before selecting controls.', type: 'assessment', notes: ['Frame data and system scope', 'Identify discovery requirements', 'Define decision-ready outputs'] })
  },
  {
    path: '/contact/',
    title: 'Contact CyberKorp',
    heading: 'Contact CyberKorp',
    description: 'Contact CyberKorp about quantum security, cyber defense, threat intelligence, research, or another technical requirement.',
    active: '',
    priority: '0.6',
    body: () => conversionBody({ code: 'INTAKE / CONTACT', label: 'Contact', title: 'Start with the <em>technical problem.</em>', copy: 'Share the context, scope and outcome you need. The first conversation should clarify the system, not force a generic package.', type: 'contact', notes: ['Route the request by discipline', 'Clarify scope and evidence', 'Agree the next technical step'] })
  },
  {
    path: '/join-research/',
    title: 'Join CyberKorp Research',
    heading: 'Join CyberKorp research',
    description: 'Express interest in CyberKorp research across cryptography, quantum-safe networking, secure systems, hardware trust, and threat research.',
    active: 'research',
    priority: '0.6',
    body: () => conversionBody({ code: 'INTAKE / RESEARCH', label: 'Research interest', title: 'Work on problems without <em>easy answers.</em>', copy: 'Tell CyberKorp what you have built, studied or broken, and which security problem you want to stay with.', type: 'research', notes: ['Share evidence of your work', 'Choose a research direction', 'Frame the problem you want to pursue'] })
  },
  {
    path: '/thank-you/',
    title: 'Inquiry Received',
    heading: 'Inquiry received',
    description: 'CyberKorp has received your inquiry.',
    active: '',
    index: false,
    body: () => `${pageHero({ label: 'INTAKE / RECEIVED', title: 'Your inquiry is <em>in the system.</em>', copy: 'Thank you for contacting CyberKorp. The submitted context will be reviewed and routed to the relevant technical team.', actions: `${buttonLink('/', 'Return to CyberKorp')}${buttonLink('/quantum-security/', 'Explore quantum security', { kind: 'outline' })}`, meta: [['Status', 'Submission received'], ['Next step', 'Technical routing'], ['Security', 'Do not send sensitive data by email']] })}`
  },
  {
    path: '/privacy/',
    title: 'Privacy',
    heading: 'Privacy information',
    description: 'Privacy information for CyberKorp website inquiry and research interest forms.',
    active: '',
    priority: '0.3',
    body: privacyBody
  },
  {
    path: '/404/',
    output: '404.html',
    title: 'Page Not Found',
    heading: 'Page not found',
    description: 'The requested CyberKorp page could not be found.',
    active: '',
    index: false,
    body: () => `${pageHero({ label: 'SYSTEM / 404', title: 'This route does not <em>resolve.</em>', copy: 'The page may have moved, or the address may be incomplete.', actions: buttonLink('/', 'Return to CyberKorp'), meta: [['Status', '404'], ['System', 'Navigation'], ['Action', 'Return to known route']] })}`
  }
];
