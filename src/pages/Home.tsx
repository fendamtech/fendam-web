import { Link } from 'react-router-dom'
import { PRODUCTS, STATUS_META, CONTACT, type Product } from '../data'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Stats />
      <Products />
      <About />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #1FE0E0 0%, #9D7BFF 55%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
          A security-first product studio, building for Africa
        </div>

        <h1 className="fade-up text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]" style={{ animationDelay: '0.05s' }}>
          We build <span className="grad-text">security, AI and fintech</span> products <br className="hidden sm:block" />
          Africa can actually rely on.
        </h1>

        <p className="fade-up max-w-2xl mx-auto mt-6 text-base sm:text-lg text-white/55 leading-relaxed" style={{ animationDelay: '0.1s' }}>
          FendAm Technology ships products that solve real African problems — from fraud detection to
          consumer safety — and trains the continent's next generation of cybersecurity talent.
        </p>

        <div className="fade-up flex flex-wrap items-center justify-center gap-3 mt-9" style={{ animationDelay: '0.15s' }}>
          <a href="#products" className="px-6 py-3 rounded-xl text-sm font-bold text-[#05070D] transition-transform hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg,#1FE0E0,#9D7BFF)' }}>
            Explore our products
          </a>
          <Link to="/investors" className="px-6 py-3 rounded-xl text-sm font-semibold text-white/80 transition-colors hover:text-white"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
            For investors →
          </Link>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { v: '3', l: 'Products in the portfolio' },
    { v: '12wk', l: 'Flagship security bootcamp' },
    { v: '2026', l: 'First paid academy cohort' },
    { v: 'Africa', l: 'Built for the local threat landscape' },
  ]
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-2xl md:text-3xl font-black grad-text">{s.v}</div>
            <div className="text-xs text-white/45 mt-1.5 leading-snug">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionHead eyebrow="Portfolio" title="Products we're building" sub="One live, more on the way. Each solves a problem we've seen up close in African markets." />
      <div className="grid gap-5 md:grid-cols-3 mt-10">
        {PRODUCTS.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
      </div>
    </section>
  )
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  const st = STATUS_META[p.status]
  return (
    <Link to={`/products/${p.slug}`}
      className="group relative rounded-2xl p-6 flex flex-col transition-all fade-up"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', animationDelay: `${i * 0.08}s` }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${p.accent}66`; e.currentTarget.style.background = `${p.accent}0a` }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg"
          style={{ background: `${p.accent}1f`, color: p.accent }}>
          {p.name[0]}
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full"
          style={{ color: st.color, background: `${st.color}18` }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: st.color }} />
          {st.label}
        </span>
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: p.accent }}>{p.domain}</p>
      <h3 className="text-lg font-bold mt-1">{p.name}</h3>
      <p className="text-sm text-white/50 mt-1">{p.tagline}</p>
      <p className="text-sm text-white/40 mt-3 leading-relaxed flex-1">{p.summary}</p>
      <span className="mt-4 text-sm font-semibold flex items-center gap-1.5 transition-transform group-hover:translate-x-0.5" style={{ color: p.accent }}>
        Learn more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </span>
    </Link>
  )
}

function About() {
  const values = [
    { t: 'Local by design', d: 'We build for African realities — the fraud, the devices, the data costs, the threat landscape — not a Western template.' },
    { t: 'Security at the core', d: 'Every product starts from a security mindset. It is our heritage and our unfair advantage.' },
    { t: 'Talent as a product', d: 'FendAm Learn is how we grow the very skills the continent (and our own products) need.' },
  ]
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionHead eyebrow="About" title="A studio, not a single app" sub="FendAm Technology incubates and ships multiple products under one security-first roof." />
      <div className="grid gap-5 md:grid-cols-3 mt-10">
        {values.map((v) => (
          <div key={v.t} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="font-bold text-white">{v.t}</h3>
            <p className="text-sm text-white/45 mt-2 leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(31,224,224,0.08), rgba(157,123,255,0.08))', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 className="text-2xl md:text-3xl font-black">Let's build something secure together</h2>
        <p className="text-white/55 mt-3 max-w-xl mx-auto">
          Partnerships, pilots, press, or joining the team — we'd love to hear from you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <a href={`mailto:${CONTACT.email}`} className="px-6 py-3 rounded-xl text-sm font-bold text-[#05070D]"
            style={{ background: 'linear-gradient(135deg,#1FE0E0,#9D7BFF)' }}>
            {CONTACT.email}
          </a>
          <Link to="/investors" className="px-6 py-3 rounded-xl text-sm font-semibold text-white/80"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            Investor information
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] grad-text">{eyebrow}</p>
      <h2 className="text-2xl md:text-4xl font-black mt-2 tracking-tight">{title}</h2>
      {sub && <p className="text-white/50 mt-3 leading-relaxed">{sub}</p>}
    </div>
  )
}
