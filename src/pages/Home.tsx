import { Link } from 'react-router-dom'
import { PRODUCTS, STATUS_META, CAPABILITIES, CONTACT, type Product } from '../data'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Stats />
      <Capabilities />
      <Products />
      <About />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* layered background: worldmap image + navy wash + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src="/graphic-worldmap-DN-mPD8L.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.10]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(1000px 500px at 50% -10%, rgba(31,224,224,0.16), transparent 60%), radial-gradient(800px 400px at 80% 20%, rgba(157,123,255,0.14), transparent 60%)' }} />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(to bottom, transparent, #060b18)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-20 text-center">
        <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7 card">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
          A security-first product studio, building for Africa
        </div>

        <h1 className="fade-up text-4xl sm:text-6xl font-black tracking-tight leading-[1.04]" style={{ animationDelay: '0.05s' }}>
          Security, AI and fintech <br className="hidden sm:block" />
          products Africa can <span className="grad-text">actually trust.</span>
        </h1>

        <p className="fade-up max-w-2xl mx-auto mt-6 text-base sm:text-lg text-white/60 leading-relaxed" style={{ animationDelay: '0.1s' }}>
          FendAm Technology builds products that solve real African problems — from fraud detection
          to consumer safety — and trains the continent's next generation of cybersecurity talent.
        </p>

        <div className="fade-up flex flex-wrap items-center justify-center gap-3 mt-9" style={{ animationDelay: '0.15s' }}>
          <a href="#products" className="px-6 py-3 rounded-xl text-sm font-bold text-[#060b18] transition-transform hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg,#1FE0E0,#9D7BFF)', boxShadow: '0 8px 30px rgba(31,224,224,0.25)' }}>
            Explore our products
          </a>
          <Link to="/investors" className="px-6 py-3 rounded-xl text-sm font-semibold text-white/85 card">
            For investors →
          </Link>
        </div>

        {/* trust line */}
        <p className="fade-up mt-10 text-xs uppercase tracking-[0.18em] text-white/30" style={{ animationDelay: '0.2s' }}>
          Cybersecurity education · AI fraud detection · Consumer safety
        </p>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { v: '3', l: 'Products in the portfolio' },
    { v: '12wk', l: 'Flagship security bootcamp' },
    { v: '2026', l: 'First paid academy cohort' },
    { v: '100%', l: 'Built for the African market' },
  ]
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl p-5 text-center card">
            <div className="text-2xl md:text-3xl font-black grad-text">{s.v}</div>
            <div className="text-xs text-white/50 mt-1.5 leading-snug">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24">
      <SectionHead eyebrow="What we do" title="Four disciplines, one security core" sub="Every product we ship draws on the same foundation." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        {CAPABILITIES.map((c, i) => (
          <div key={c.title} className="rounded-2xl p-6 card fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(31,224,224,0.08)', border: '1px solid rgba(31,224,224,0.15)' }}>
              <img src={c.icon} alt="" className="w-7 h-7 object-contain" />
            </div>
            <h3 className="font-bold text-white">{c.title}</h3>
            <p className="text-sm text-white/50 mt-2 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionHead eyebrow="Portfolio" title="Products we're building" sub="One live and in market, more on the way. Each solves a problem we've seen up close." />
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
      className="group relative rounded-2xl overflow-hidden flex flex-col card fade-up"
      style={{ animationDelay: `${i * 0.08}s` }}>
      {/* image banner */}
      <div className="relative h-32 overflow-hidden">
        <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent, rgba(6,11,24,0.9)), radial-gradient(circle at 20% 30%, ${p.accent}33, transparent 60%)` }} />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur"
            style={{ color: st.color, background: `${st.color}22` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: st.color }} />
            {st.label}
          </span>
        </div>
        <div className="absolute -bottom-6 left-5 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: '#0a1428', border: `1px solid ${p.accent}44` }}>
          <img src={p.icon} alt="" className="w-7 h-7 object-contain" />
        </div>
      </div>

      <div className="p-6 pt-9 flex flex-col flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: p.accent }}>{p.domain}</p>
        <h3 className="text-lg font-bold mt-1">{p.name}</h3>
        <p className="text-sm text-white/50 mt-1">{p.tagline}</p>
        <p className="text-sm text-white/40 mt-3 leading-relaxed flex-1">{p.summary}</p>
        <span className="mt-4 text-sm font-semibold flex items-center gap-1.5 transition-transform group-hover:translate-x-0.5" style={{ color: p.accent }}>
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </span>
      </div>
    </Link>
  )
}

function About() {
  const values = [
    { t: 'Local by design', d: 'We build for African realities — the fraud, the devices, the data costs, the threat landscape — not a Western template.' },
    { t: 'Security at the core', d: 'Every product starts from a security mindset. It is our heritage and our unfair advantage.' },
    { t: 'Talent as a product', d: 'FendAm Learn is how we grow the very skills the continent — and our own products — need.' },
  ]
  return (
    <section id="about" className="relative pt-24 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src="/graphic-cyberpunkcity-C_oqTtHT.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow="About" title="A studio, not a single app" sub="FendAm Technology incubates and ships multiple products under one security-first roof." />
        <div className="grid gap-5 md:grid-cols-3 mt-10">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl p-6 card">
              <h3 className="font-bold text-white">{v.t}</h3>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden card">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(600px 300px at 50% 0%, rgba(31,224,224,0.14), transparent 60%), radial-gradient(500px 300px at 80% 100%, rgba(157,123,255,0.12), transparent 60%)' }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black">Let's build something secure together</h2>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">
          Partnerships, pilots, press, or joining the team — we'd love to hear from you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <a href={`mailto:${CONTACT.email}`} className="px-6 py-3 rounded-xl text-sm font-bold text-[#060b18]"
            style={{ background: 'linear-gradient(135deg,#1FE0E0,#9D7BFF)' }}>
            {CONTACT.email}
          </a>
          <Link to="/investors" className="px-6 py-3 rounded-xl text-sm font-semibold text-white/85 card">
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
      {sub && <p className="text-white/55 mt-3 leading-relaxed">{sub}</p>}
    </div>
  )
}
