import { Link } from 'react-router-dom'
import { PRODUCTS, STATUS_META, DIVISIONS, CLIENTS, CONTACT, type Product, type Division } from '../data'
import { Reveal } from '../components/Reveal'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Clients />
      <WhoWeAre />
      <Divisions />
      <Products />
      <Principles />
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
        <div className="absolute inset-0" style={{ background: 'radial-gradient(900px 460px at 50% -10%, rgba(31,224,224,0.16), transparent 60%)' }} />
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

        <h1 className="fade-up text-[2.7rem] leading-[1.03] sm:text-6xl md:text-7xl font-bold tracking-tight" style={{ animationDelay: '0.05s' }}>
          Building the technology<br />
          <span className="grad-text">Africa can trust.</span>
        </h1>

        <p className="fade-up max-w-2xl mx-auto mt-7 text-base sm:text-lg text-white/60 leading-relaxed" style={{ animationDelay: '0.12s' }}>
          FendAm Technology is a diversified, security-first group operating across four divisions:
          security, applied AI, education and digital. We build and run our own products, and bring
          that operator’s edge to every client we serve.
        </p>

        <div className="fade-up flex flex-wrap items-center justify-center gap-3 mt-10" style={{ animationDelay: '0.18s' }}>
          <a href="#divisions" className="px-6 py-3.5 rounded-xl text-sm btn-primary">Explore the group</a>
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
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {CLIENTS.map((c) => (
            <span key={c} className="text-base md:text-lg font-semibold text-white/55" style={{ fontFamily: 'var(--font-display)' }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Who we are ───────────────────────────────────────────────────────── */
function WhoWeAre() {
  const pillars = [
    { k: 'Operators, not just advisors', d: 'We build, ship and run our own products, so our advice is grounded in what actually works.' },
    { k: 'Security in everything', d: 'Every division answers to the same security standard our consulting team sets for clients.' },
    { k: 'Built for African realities', d: 'Local fraud, mobile-first users, real bandwidth and cost constraints, designed in from day one.' },
  ]
  return (
    <section id="company" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="mono text-[11px] font-semibold uppercase tracking-[0.25em] grad-text flex items-center gap-2.5">
              <span className="inline-block w-5 h-px" style={{ background: 'currentColor', opacity: 0.6 }} />
              Who we are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight leading-tight">A diversified technology group, built security-first.</h2>
          </div>
          <p className="text-white/60 leading-relaxed md:pt-10 prose-justify">
            FendAm Technology operates across four divisions: security, AI, education and digital. We don’t
            just consult; we build, ship and run our own products, and bring that operator’s mindset to every
            engagement. One team, one standard, applied wherever the work takes us.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3 mt-12">
        {pillars.map((p, i) => (
          <Reveal key={p.k} delay={i * 80}>
            <div className="rounded-2xl p-6 card h-full">
              <h3 className="font-bold text-white">{p.k}</h3>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Divisions ────────────────────────────────────────────────────────── */
function Divisions() {
  return (
    <section id="divisions" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal><SectionHead eyebrow="Divisions" title="Four divisions, one security standard" sub="Each division stands on its own, and reinforces the rest. Together they cover the full spectrum of what a modern African organisation needs." /></Reveal>
      <div className="mt-16 space-y-16 md:space-y-24">
        {DIVISIONS.map((d, i) => <DivisionRow key={d.id} d={d} flip={i % 2 === 1} index={i} />)}
      </div>
    </section>
  )
}

function DivisionRow({ d, flip, index }: { d: Division; flip: boolean; index: number }) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* copy */}
        <div className={flip ? 'md:order-2' : ''}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center hair">
              <img src={d.icon} alt="" className="w-6 h-6 object-contain" />
            </div>
            <span className="mono text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: d.accent }}>{`0${index + 1} / ${d.kicker}`}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4">{d.name}</h3>
          <p className="text-white/60 mt-4 leading-relaxed prose-justify">{d.lead}</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-6">
            {d.capabilities.map((c) => (
              <div key={c} className="flex items-start gap-2">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.accent }} />
                <span className="text-sm text-white/55 leading-snug">{c}</span>
              </div>
            ))}
          </div>
          {d.link && (
            d.link.external ? (
              <a href={d.link.to} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold" style={{ color: d.accent }}>
                {d.link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </a>
            ) : (
              <Link to={d.link.to} className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold" style={{ color: d.accent }}>
                {d.link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </Link>
            )
          )}
        </div>

        {/* visual */}
        <div className={flip ? 'md:order-1' : ''}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] card p-0">
            <img src={d.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 60% 40%, ${d.accent}33, transparent 60%), linear-gradient(180deg, transparent, rgba(6,11,24,0.7))` }} />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <img src={d.icon} alt="" className="floaty absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Products ─────────────────────────────────────────────────────────── */
function Products() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal><SectionHead eyebrow="Products" title="What the group ships" sub="Our divisions don’t just serve clients, they build products. Here’s what we’ve put into the world." /></Reveal>
      <div className="grid gap-5 md:grid-cols-3 mt-12">
        {PRODUCTS.map((p, i) => (
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

/* ─── Principles ───────────────────────────────────────────────────────── */
function Principles() {
  const steps = [
    { n: '01', t: 'Local by design', d: 'We build for African realities, the fraud, the devices, the data costs, the threat landscape, not a Western template.' },
    { n: '02', t: 'Security at the core', d: 'Every engagement starts from a security mindset. It is our heritage and our unfair advantage.' },
    { n: '03', t: 'One standard, everywhere', d: 'Whether we’re teaching, building or defending, the bar is the same, the one our security team sets.' },
  ]
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src="/graphic-serverroom-898uPS_c.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal><SectionHead eyebrow="How we operate" title="The standard behind everything" /></Reveal>
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

/* ─── CTA ──────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pt-28 scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden card">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(700px 320px at 50% 0%, rgba(31,224,224,0.14), transparent 60%)' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Work with the group</h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">A security assessment, a product build, training for your team, or a partnership, start a conversation.</p>
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
      <p className="mono text-[11px] font-semibold uppercase tracking-[0.25em] grad-text flex items-center gap-2.5">
        <span className="inline-block w-5 h-px" style={{ background: 'currentColor', opacity: 0.6 }} />
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">{title}</h2>
      {sub && <p className="text-white/55 mt-4 leading-relaxed prose-justify">{sub}</p>}
    </div>
  )
}
