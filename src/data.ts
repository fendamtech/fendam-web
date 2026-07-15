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
    accent: '#9D7BFF',
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
    accent: '#3B82F6',
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
  live: { label: 'Live', color: '#10b981' },
  development: { label: 'In Development', color: '#f59e0b' },
  research: { label: 'Research', color: '#9D7BFF' },
}

export const CONTACT = {
  email: 'shadrack@fendamtech.com',
  learn: 'https://learn.fendamtech.com',
}

// Capability pillars for the "what we do" section
export const CAPABILITIES = [
  {
    icon: '/icon-hunt2-CofthtFP.png',
    title: 'Offensive security',
    desc: 'We think like attackers first — the fastest way to build things that hold up in the real world.',
  },
  {
    icon: '/icon-radar-Dsc-YKit.png',
    title: 'Applied AI',
    desc: 'Models trained on local data to catch fraud and threats that generic tools miss.',
  },
  {
    icon: '/icon-wallet-BV4ABSMj.png',
    title: 'Fintech protection',
    desc: 'Security and anti-fraud infrastructure purpose-built for African payment rails.',
  },
  {
    icon: '/icon-cert-DD4R6xej.png',
    title: 'Talent development',
    desc: 'We grow the cybersecurity workforce the continent needs — starting with FendAm Learn.',
  },
]
