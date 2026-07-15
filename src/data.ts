export type Status = 'live' | 'development' | 'research'

export type Product = {
  slug: string
  name: string
  tagline: string
  status: Status
  domain: string
  accent: string
  icon: string       // /public png
  image: string      // /public jpg, used on detail hero
  summary: string
  href?: string
  problem: string
  approach: string
  highlights: string[]
  stage: string
  pitchDeck?: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'fendam-learn',
    name: 'FendAm Learn',
    tagline: "Africa's practical cybersecurity academy",
    status: 'live',
    domain: 'Cybersecurity Education',
    accent: '#1FE0E0',
    icon: '/icon-cert-DD4R6xej.png',
    image: '/graphic-hexgrid-Cn_x5Oh3.jpg',
    href: 'https://learn.fendamtech.com',
    summary:
      'A 12-week, hands-on cybersecurity bootcamp built for African learners. Interactive lessons, real hacking labs, live mentorship, and a direct path to CompTIA Security+ and paid remote work.',
    problem:
      'Africa faces a severe cybersecurity skills gap, yet young people struggle to find affordable, practical, job-ready training. Most courses are theory-heavy, foreign-priced, and disconnected from the local threat landscape.',
    approach:
      'FendAm Learn delivers interactive, step-based lessons with quizzes, real labs, live sessions, and mentorship — grounded in the African context (BEC, SIM-swap, local law) and priced for the local market.',
    highlights: [
      '12-week structured Security Foundations track',
      'Interactive lessons with per-step quizzes and real labs',
      'Live mentorship and cohort accountability',
      'Mapped to CompTIA Security+ and remote-work readiness',
    ],
    stage: 'Live · first paid cohort August 2026',
  },
  {
    slug: 'fraudnet-ai',
    name: 'FraudNet AI',
    tagline: 'Real-time fraud detection for African fintech',
    status: 'development',
    domain: 'AI · Fintech Security',
    accent: '#1FE0E0',
    icon: '/icon-radar-Dsc-YKit.png',
    image: '/graphic-hud-D3uRmf43.jpg',
    summary:
      'An AI-driven fraud engine tuned to African transaction patterns — catching BEC, account takeover, and mule-account activity that generic Western models miss.',
    problem:
      'Nigerian fintechs lose billions to fraud yearly. Off-the-shelf fraud models are trained on Western behaviour and miss local patterns like SIM-swap, agent-banking abuse, and naira mule networks.',
    approach:
      'FraudNet AI combines transaction-graph analysis, device intelligence, and locally-trained models to score risk in real time, with explainable flags analysts can act on.',
    highlights: [
      'Models trained on African fraud patterns',
      'Real-time transaction risk scoring',
      'Graph-based mule-network detection',
      'Explainable flags for compliance teams',
    ],
    stage: 'In development · pilot-seeking',
    pitchDeck: '',
  },
  {
    slug: 'shieldme',
    name: 'ShieldMe',
    tagline: 'Personal digital safety for everyday Africans',
    status: 'development',
    domain: 'Consumer Security',
    accent: '#1FE0E0',
    icon: '/icon-shield.png',
    image: '/graphic-mesh-JHfNOjxi.jpg',
    summary:
      'A consumer security app that protects everyday users from phishing, scam calls, and account takeover — the threats that hit ordinary Africans hardest.',
    problem:
      'Most people have no protection against the scams targeting them daily: phishing SMS, fake bank alerts, romance and investment fraud, and SIM-swap takeovers.',
    approach:
      'ShieldMe puts practical protection in one app: link and message scanning, breach alerts, and guided response when something goes wrong — all in plain language.',
    highlights: [
      'Phishing and scam-link scanning',
      'Breach and exposure alerts',
      'Guided incident response for victims',
      'Built for low-end devices and data plans',
    ],
    stage: 'In development · early prototype',
    pitchDeck: '',
  },
]

export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug)

export const STATUS_META: Record<Status, { label: string; color: string }> = {
  live: { label: 'Live', color: '#1FE0E0' },
  development: { label: 'In Development', color: '#64748b' },
  research: { label: 'Research', color: '#1FE0E0' },
}

export const CONTACT = {
  email: 'shadrack@fendamtech.com',
  learn: 'https://learn.fendamtech.com',
}

// Divisions — the operating arms of the group, each with real substance
export type Division = {
  id: string
  name: string
  kicker: string
  accent: string
  icon: string
  image: string
  lead: string
  capabilities: string[]
  link?: { label: string; to: string; external?: boolean }
}

export const DIVISIONS: Division[] = [
  {
    id: 'security',
    name: 'FendAm Security',
    kicker: 'Offensive & Defensive Security',
    accent: '#1FE0E0',
    icon: '/icon-hunt2-CofthtFP.png',
    image: '/graphic-hud-D3uRmf43.jpg',
    lead: 'Our founding discipline. FendAm Security helps banks, fintechs and growing companies find and fix weaknesses before attackers do. We run penetration tests, red-team engagements and full security assessments, then stay on as trusted advisors — hardening systems, preparing teams for incidents, and keeping organisations compliant with Nigeria’s Data Protection Act. Every other division is built on the standards this team sets.',
    capabilities: ['Penetration testing & red-teaming', 'Security assessments & audits', 'Incident readiness & response', 'NDPA & data-protection compliance'],
  },
  {
    id: 'ai',
    name: 'FendAm AI',
    kicker: 'Applied AI & Software Engineering',
    accent: '#1FE0E0',
    icon: '/icon-terminal2-CUb_aLPr.png',
    image: '/graphic-mesh-JHfNOjxi.jpg',
    lead: 'The engineering core of the group. FendAm AI builds the models and software the rest of the company runs on — starting with FraudNet AI, our fraud-detection engine trained on African transaction patterns. We also take on select client builds: risk systems, data pipelines and custom software designed for real-world constraints like low bandwidth and mobile-first users.',
    capabilities: ['Fraud & risk modelling', 'Custom AI / ML systems', 'Data engineering & pipelines', 'Product & software development'],
    link: { label: 'See FraudNet AI', to: '/products/fraudnet-ai' },
  },
  {
    id: 'learn',
    name: 'FendAm Learn',
    kicker: 'Cybersecurity Education & Training',
    accent: '#1FE0E0',
    icon: '/icon-cert-DD4R6xej.png',
    image: '/graphic-hexgrid-Cn_x5Oh3.jpg',
    lead: 'Talent is the continent’s real bottleneck, so we treat it as a product. FendAm Learn is a hands-on cybersecurity academy that takes beginners to job-ready in twelve weeks — interactive labs, live mentorship and a direct path to CompTIA Security+. We also deliver private, tailored training to organisations that need to upskill their own teams.',
    capabilities: ['12-week Security Foundations bootcamp', 'Hands-on labs & live mentorship', 'Corporate & team training', 'Certification & career support'],
    link: { label: 'Visit FendAm Learn', to: 'https://learn.fendamtech.com', external: true },
  },
  {
    id: 'digital',
    name: 'FendAm Digital',
    kicker: 'Brand & Digital Management',
    accent: '#1FE0E0',
    icon: '/icon-mobile-C9r5lP8j.png',
    image: '/graphic-cyberpunkcity-C_oqTtHT.jpg',
    lead: 'A full-service digital arm for organisations that want their brand built and their presence secured in one place. We handle brand, web and digital management end-to-end — then wrap it in the same security standards the rest of the group lives by, so clients never have to choose between looking good and being safe.',
    capabilities: ['Brand & visual identity', 'Web design & development', 'Digital & social management', 'Secure hosting & maintenance'],
  },
]

// Real clients we work with
export const CLIENTS = ['Hospitable Homecare', 'Global Edge Tech']
