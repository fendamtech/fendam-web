export type Status = 'live' | 'development' | 'research'

export type Product = {
  slug: string
  name: string
  tagline: string
  status: Status
  domain: string // e.g. Cybersecurity Education
  accent: string
  summary: string
  href?: string // external link for live products
  problem: string
  approach: string
  highlights: string[]
  // Investor-facing
  stage: string
  pitchDeck?: string // path/URL to deck (optional)
}

export const PRODUCTS: Product[] = [
  {
    slug: 'fendam-learn',
    name: 'FendAm Learn',
    tagline: "Africa's practical cybersecurity academy",
    status: 'live',
    domain: 'Cybersecurity Education',
    accent: '#1FE0E0',
    href: 'https://learn.fendamtech.com',
    summary:
      'A 12-week, hands-on cybersecurity bootcamp built for Nigerian and African learners. Interactive lessons, real labs, live mentorship, and a path to CompTIA Security+ and remote work.',
    problem:
      'Africa faces a severe cybersecurity skills gap while young people struggle to find affordable, practical, job-ready training. Most courses are theory-heavy, foreign-priced, and disconnected from the local threat landscape.',
    approach:
      'FendAm Learn delivers interactive, step-based lessons with quizzes, real hacking labs, live sessions, and mentorship — grounded in the Nigerian context (BEC, SIM-swap, local law) and priced for the local market.',
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
    summary:
      'An AI-driven fraud detection engine tuned to African transaction patterns — catching BEC, account takeover, and mule-account activity that generic Western models miss.',
    problem:
      'Nigerian fintechs lose billions to fraud yearly. Off-the-shelf fraud models are trained on Western behaviour and miss local patterns like SIM-swap, agent-banking abuse, and naira mule networks.',
    approach:
      'FraudNet AI combines transaction graph analysis, device intelligence, and locally-trained models to score risk in real time, with explainable flags analysts can act on.',
    highlights: [
      'Locally-trained models for African fraud patterns',
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
    accent: '#10b981',
    summary:
      'A consumer security app that protects everyday users from phishing, scam calls, and account takeover — the threats that hit ordinary Nigerians hardest.',
    problem:
      'Most Nigerians have no protection against the scams targeting them daily: phishing SMS, fake bank alerts, romance and investment fraud, and SIM-swap takeovers.',
    approach:
      'ShieldMe puts practical protection in one app: link and message scanning, breach alerts, and guided response when something goes wrong — in plain language.',
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
