export const site = {
  name: 'CyberKorp',
  legalName: 'CyberKorp',
  strapline: 'Deep-tech security for the post-quantum era',
  description:
    'CyberKorp builds quantum-safe security infrastructure and advanced cyber defense capabilities for organizations preparing for the post-quantum era.',
  nav: [
    {
      label: 'Quantum Security',
      href: '/quantum-security/',
      key: 'quantum',
      children: [
        { label: 'Overview', meta: 'The post-quantum program', href: '/quantum-security/' },
        { label: 'Quantum-Safe VPN', meta: 'Live · hybrid network protection', href: '/quantum-safe-vpn/' },
        { label: 'PQ Migration', meta: 'Assess · migrate · operate', href: '/pq-migration/' },
        { label: 'Quantum-Safe Stack', meta: 'Six-layer architecture', href: '/quantum-safe-stack/' }
      ]
    },
    {
      label: 'Cyber Defense',
      href: '/cyber-defense/',
      key: 'defense',
      children: [
        { label: 'Defense Overview', meta: 'Offense, defense, response', href: '/cyber-defense/' },
        { label: 'Threat Intelligence', meta: 'Research-led intelligence', href: '/threat-intelligence/' }
      ]
    },
    { label: 'Research', href: '/research/', key: 'research' },
    { label: 'Company', href: '/company/', key: 'company' }
  ]
};

export const statusDefinitions = {
  LIVE: 'Available for deployment and technical evaluation.',
  'IN DEVELOPMENT': 'Actively being engineered; not represented as generally available.',
  PLANNED: 'On the product roadmap; scope and timing may change.',
  RESEARCH: 'Research-stage work; not a commercial availability claim.'
};

export const layers = [
  {
    id: 'l5',
    code: 'L5',
    name: 'Application & Developer',
    shortName: 'Applications',
    purpose: 'Move post-quantum controls into the software, APIs and trust paths that use cryptography.',
    architecture: 'Developer interfaces · application policy · signing · data protection',
    products: [
      { name: 'Developer PQ SDKs', status: 'PLANNED' },
      { name: 'PQ API Gateway', status: 'PLANNED' },
      { name: 'Secure Messaging', status: 'IN DEVELOPMENT' },
      { name: 'Code Signing & Supply Chain', status: 'RESEARCH' },
      { name: 'PQ Data Encryption', status: 'RESEARCH' }
    ]
  },
  {
    id: 'l4',
    code: 'L4',
    name: 'Network & Transport',
    shortName: 'Network',
    purpose: 'Protect data in motion across users, sites, clouds and private infrastructure.',
    architecture: 'Remote access · site-to-site · transport gateways · service connectivity',
    products: [
      { name: 'Quantum-Safe VPN', status: 'LIVE', href: '/quantum-safe-vpn/' },
      { name: 'PQ-TLS Proxy', status: 'IN DEVELOPMENT' },
      { name: 'Service-Mesh PQC', status: 'PLANNED' },
      { name: 'PQ Secure Transport', status: 'RESEARCH' }
    ]
  },
  {
    id: 'l3',
    code: 'L3',
    name: 'Cryptographic Core',
    shortName: 'Crypto core',
    purpose: 'Create a controlled cryptographic layer that can change as algorithms, standards and risk evolve.',
    architecture: 'Algorithm policy · cryptographic inventory · libraries · agility controls',
    products: [
      { name: 'PQC Integration Library', status: 'PLANNED' },
      { name: 'Crypto-Agility Layer', status: 'PLANNED' },
      { name: 'CBOM Discovery', status: 'PLANNED' }
    ]
  },
  {
    id: 'l2',
    code: 'L2',
    name: 'Key & Identity',
    shortName: 'Keys & identity',
    purpose: 'Modernize the systems that issue identities, control keys and anchor machine trust.',
    architecture: 'Key lifecycle · certificate authority · identity · policy enforcement',
    products: [
      { name: 'Quantum-Safe KMS', status: 'PLANNED' },
      { name: 'PQ-PKI / CA', status: 'PLANNED' },
      { name: 'Key Lifecycle Infrastructure', status: 'RESEARCH' }
    ]
  },
  {
    id: 'l1',
    code: 'L1',
    name: 'Entropy',
    shortName: 'Entropy',
    purpose: 'Study and engineer high-integrity randomness sources for security-sensitive systems.',
    architecture: 'Entropy source · health checks · distribution · consumption',
    products: [
      { name: 'Quantum Entropy', status: 'IN DEVELOPMENT' },
      { name: 'Entropy as a Service', status: 'RESEARCH' }
    ]
  },
  {
    id: 'l0',
    code: 'L0',
    name: 'Hardware Root of Trust',
    shortName: 'Hardware trust',
    purpose: 'Research hardware-backed roots for entropy, key protection and verified system startup.',
    architecture: 'Silicon · protected execution · secure boot · hardware key boundaries',
    products: [
      { name: 'QRNG Chip', status: 'RESEARCH' },
      { name: 'PQC-HSM', status: 'RESEARCH' },
      { name: 'Secure Boot / Root of Trust', status: 'RESEARCH' }
    ]
  }
];

export const defenseCapabilities = [
  {
    code: '01',
    name: 'AI-Powered Threat Intelligence',
    summary: 'Correlate open, deep and dark web intelligence, threat feeds and adversary infrastructure into decisions defenders can use.',
    items: ['Dark web monitoring', 'Threat actor intelligence', 'IOC correlation', 'Campaign detection'],
    href: '/threat-intelligence/'
  },
  {
    code: '02',
    name: 'Offensive Security',
    summary: 'Test the paths a capable adversary would use, not only the controls that are easiest to scan.',
    items: ['Red teaming', 'Adversary simulation', 'Security testing', 'Attack-surface assessment']
  },
  {
    code: '03',
    name: 'Defensive Engineering',
    summary: 'Translate threat models into detections, architecture and operating controls.',
    items: ['Blue teaming', 'Detection engineering', 'Security architecture', 'Monitoring design']
  },
  {
    code: '04',
    name: 'Incident Response',
    summary: 'Support investigation, containment and recovery with a clear technical record of what happened.',
    items: ['Investigation', 'Containment', 'Response support', 'Recovery analysis']
  }
];

export const researchAreas = [
  ['PQC', 'Post-Quantum Cryptography', 'Algorithm integration, hybrid patterns and migration safety.'],
  ['NET', 'Quantum-Safe Networking', 'Deployable protection for data moving across real infrastructure.'],
  ['AGL', 'Cryptographic Agility', 'Systems designed to change algorithms without repeating the whole migration.'],
  ['SYS', 'Secure Systems', 'Security boundaries that hold from software architecture to operations.'],
  ['HWR', 'Hardware Root of Trust', 'Hardware-backed entropy, key protection and verified startup.'],
  ['THR', 'Threat Research', 'Technical study of adversaries, infrastructure and defensive opportunities.'],
  ['ENT', 'Quantum Entropy', 'Applied research into high-integrity randomness and its delivery.'],
  ['ENG', 'Security Engineering', 'Building controls that can be deployed, tested and operated.']
];

export const roles = [
  'Cryptographers',
  'Security researchers',
  'Quantum researchers',
  'Security engineers',
  'Systems engineers',
  'Hardware engineers',
  'Applied scientists'
];
