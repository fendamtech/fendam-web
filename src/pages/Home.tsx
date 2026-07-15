import { Link } from 'react-router-dom'
import { PRODUCTS, STATUS_META, SERVICES, CLIENTS, CONTACT, productBySlug, type Product } from '../data'
import { Reveal } from '../components/Reveal'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Clients />
      <Services />
      <Flagship />
      <Products />
      <Company />
      <StatsBand />
      <CTA />
    </main>
  )
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src="/graphic-worldmap-DN-mPD8L.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.09]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(900px 480px at 50% -8%, rgba(31,224,224,0.18), transparent 62%), radial-gradient(700px 420px at 82% 18%, rgba(157,123,255,0.16), transparent 60%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: 'linear-gradient(to bottom, transparent, #060b18)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-24 text-center">
        <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8 hair">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#10b981' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#10b981' }} />
          </span>
          <span className="text-white/75">FendAm Learn is live · first cohort August 2026</span>
        </div>

        <h1 className="fade-up text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl font-bold tracking-tight" style={{ animationDelay: '0.05s' }}>
          Security, AI and fintech<br />
          <span className="grad-text">Africa can trust.</span>
        </h1>

        <p className="fade-up max-w-xl mx-auto mt-7 text-base sm:text-lg text-white/60 leading-relaxed" style={{ animationDelay: '0.12s' }}>
          FendAm Technology is a full-spectrum, security-first studio. We build products, secure
          organisations, and grow the talent the continent needs to defend itself.
        </p>

        <div className="fade-up flex flex-wrap items-center justify-center gap-3 mt-10" style={{ animationDelay: '0.18s' }}>
          <a href="#products" className="px-6 py-3.5 rounded-xl text-sm btn-primary">Explore our products</a>
          <Link to="/investors" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white/85 btn-ghost">For investors →</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Clients ──────────────────────────────────────────────────────────── */
function Clients() {
  return (
    <section className="border-y border-white/[0.06] py-8" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-4">
        <span className="text-xs uppercase tracking-[0.2em] text-white/35">Trusted by</span>
        <div className="flex items-center gap-10">
          {CLIENTS.map((c) => (
            <span key={c} className="text-base md:text-lg font-semibold text-white/55" style={{ fontFamily: 'var(--font-display)' }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Featured flagship ────────────────────────────────────────────────── */
function Flagship() {
  const p = productBySlug('fendam-learn')!
  return (
    <section className="max-w-6xl mx-auto px-6 pt-28">
      <Reveal>
        <div className="rounded-3xl overflow-hidden card p-0">
          <div className="grid md:grid-cols-2">
            {/* copy */}
            <div className="p-9 md:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#10b981', background: 'rgba(16,185,129,0.14)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} /> LIVE FLAGSHIP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">FendAm Learn</h2>
              <p className="text-white/60 mt-3 leading-relaxed">{p.summary}</p>
              <div className="grid grid-cols-3 gap-3 mt-7">
                {[['12wk', 'Structured track'], ['Sec+', 'Exam-aligned'], ['Live', 'Mentorship']].map(([a, b]) => (
                  <div key={b}>
                    <div className="text-xl font-bold grad-text">{a}</div>
                    <div className="text-[11px] text-white/45 mt-0.5">{b}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={p.href} target="_blank" rel="noopener" className="px-5 py-3 rounded-xl text-sm btn-primary">Visit FendAm Learn →</a>
                <Link to={`/products/${p.slug}`} className="px-5 py-3 rounded-xl text-sm font-semibold text-white/85 btn-ghost">Read more</Link>
              </div>
            </div>
            {/* visual */}
            <div className="relative min-h-[280px] md:min-h-full overflow-hidden">
              <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #0a1428 0%, transparent 40%), radial-gradient(circle at 70% 40%, rgba(31,224,224,0.28), transparent 55%)' }} />
              <img src={p.icon} alt="" className="floaty absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ─── Portfolio ────────────────────────────────────────────────────────── */
function Products() {
  const rest = PRODUCTS.filter((p) => p.slug !== 'fendam-learn')
  return (
    <section id="products" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal><SectionHead eyebrow="Products" title="More in the studio" sub="Alongside FendAm Learn, we're building products that tackle Africa's hardest security problems." /></Reveal>
      <div className="grid gap-5 md:grid-cols-2 mt-12">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}><ProductCard p={p} /></Reveal>
        ))}
      </div>
    </section>
  )
}

function ProductCard({ p }: { p: Product }) {
  const st = STATUS_META[p.status]
  return (
    <Link to={`/products/${p.slug}`} className="group relative rounded-2xl overflow-hidden flex flex-col card p-0 h-full">
      <div className="relative h-32 overflow-hidden">
        <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent, rgba(6,11,24,0.92)), radial-gradient(circle at 22% 30%, ${p.accent}3a, transparent 60%)` }} />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur"
          style={{ color: st.color, background: `${st.color}22` }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: st.color }} /> {st.label}
        </span>
        <div className="absolute -bottom-6 left-5 w-12 h-12 rounded-xl flex items-center justify-center hair">
          <img src={p.icon} alt="" className="w-7 h-7 object-contain" />
        </div>
      </div>
      <div className="p-6 pt-9 flex flex-col flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: p.accent }}>{p.domain}</p>
        <h3 className="text-lg font-bold mt-1">{p.name}</h3>
        <p className="text-sm text-white/50 mt-1">{p.tagline}</p>
        <p className="text-sm text-white/40 mt-3 leading-relaxed flex-1">{p.summary}</p>
        <span className="mt-5 text-sm font-semibold flex items-center gap-1.5 transition-transform group-hover:translate-x-0.5" style={{ color: p.accent }}>
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </span>
      </div>
    </Link>
  )
}

/* ─── Services ─────────────────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal><SectionHead eyebrow="Services" title="The full spectrum of what we do" sub="From offensive security to AI engineering and brand — one security-first team behind all of it." /></Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {SERVICES.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <div className="rounded-2xl p-6 card h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 hair">
                <img src={c.icon} alt="" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="font-bold text-white">{c.title}</h3>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Company ──────────────────────────────────────────────────────────── */
function Company() {
  const steps = [
    { n: '01', t: 'Local by design', d: 'We build for African realities — the fraud, the devices, the data costs, the threat landscape — not a Western template.' },
    { n: '02', t: 'Security at the core', d: 'Every engagement starts from a security mindset. It is our heritage and our unfair advantage.' },
    { n: '03', t: 'Talent as a product', d: 'FendAm Learn grows the very skills the continent — and our own products — need.' },
  ]
  return (
    <section id="company" className="relative pt-28 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src="/graphic-cyberpunkcity-C_oqTtHT.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHead eyebrow="Company" title="A studio, not a single app" sub="FendAm Technology builds products, secures organisations, and grows talent under one security-first roof." /></Reveal>
        <div className="grid gap-5 md:grid-cols-3 mt-12">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="rounded-2xl p-7 card h-full">
                <div className="text-3xl font-bold grad-text">{s.n}</div>
                <h3 className="font-bold text-white mt-3">{s.t}</h3>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Stats band ───────────────────────────────────────────────────────── */
function StatsBand() {
  const stats = [
    { v: '3', l: 'Products in the portfolio' },
    { v: '12wk', l: 'Flagship bootcamp' },
    { v: '2026', l: 'First paid cohort' },
    { v: '100%', l: 'Built for Africa' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 pt-28">
      <Reveal>
        <div className="rounded-3xl p-10 md:p-12 hair">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-bold grad-text">{s.v}</div>
                <div className="text-xs text-white/50 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ─── CTA ──────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden card">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(700px 320px at 50% 0%, rgba(31,224,224,0.16), transparent 60%), radial-gradient(500px 320px at 82% 100%, rgba(157,123,255,0.14), transparent 60%)' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Let's build something secure together</h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">Partnerships, pilots, press, or joining the team — we'd love to hear from you.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href={`mailto:${CONTACT.email}`} className="px-6 py-3.5 rounded-xl text-sm btn-primary">{CONTACT.email}</a>
            <Link to="/investors" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white/85 btn-ghost">Investor information</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.22em] grad-text">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">{title}</h2>
      {sub && <p className="text-white/55 mt-4 leading-relaxed">{sub}</p>}
    </div>
  )
}
