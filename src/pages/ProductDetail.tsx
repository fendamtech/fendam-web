import { Link, useParams } from 'react-router-dom'
import { productBySlug, STATUS_META, CONTACT } from '../data'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = slug ? productBySlug(slug) : undefined

  if (!p) {
    return (
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="text-[#1FE0E0] mt-4 inline-block">← Back home</Link>
      </main>
    )
  }

  const st = STATUS_META[p.status]
  const isLive = p.status === 'live'

  return (
    <main className="pt-24 pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(800px 400px at 30% 0%, ${p.accent}26, transparent 60%)` }} />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, #060b18)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link to="/#products" className="text-sm text-white/40 hover:text-white">← All products</Link>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `${p.accent}1a`, border: `1px solid ${p.accent}44` }}>
              <img src={p.icon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
              style={{ color: st.color, background: `${st.color}18` }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: st.color }} />
              {st.label}
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-wider mt-5" style={{ color: p.accent }}>{p.domain}</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-1">{p.name}</h1>
          <p className="text-lg text-white/55 mt-3">{p.tagline}</p>
          <p className="text-white/60 mt-5 max-w-2xl leading-relaxed">{p.summary}</p>

          <div className="flex flex-wrap gap-3 mt-7">
            {isLive && p.href && (
              <a href={p.href} target="_blank" rel="noopener" className="px-6 py-3 rounded-xl text-sm font-bold text-[#060b18]"
                style={{ background: `#1FE0E0` }}>
                Visit {p.name} →
              </a>
            )}
            {!isLive && (
              <Link to="/investors" className="px-6 py-3 rounded-xl text-sm font-bold text-[#060b18]"
                style={{ background: `#1FE0E0` }}>
                Investor information
              </Link>
            )}
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(p.name + ' — enquiry')}`}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white/80"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-6 mt-14 grid gap-5 md:grid-cols-2">
        <Panel title="The problem">{p.problem}</Panel>
        <Panel title="Our approach">{p.approach}</Panel>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-5">
        <div className="rounded-2xl p-6 md:p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="font-bold text-white mb-4">Highlights</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2.5">
                <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${p.accent}22` }}>
                  <svg className="w-2.5 h-2.5" fill="none" stroke={p.accent} strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                <span className="text-sm text-white/60 leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage / investor strip */}
      <section className="max-w-4xl mx-auto px-6 mt-5">
        <div className="rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4"
          style={{ background: `${p.accent}0d`, border: `1px solid ${p.accent}33` }}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Current stage</p>
            <p className="font-semibold mt-0.5" style={{ color: p.accent }}>{p.stage}</p>
          </div>
          {!isLive && (
            <Link to="/investors" className="text-sm font-semibold px-4 py-2 rounded-lg text-white/85"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              See the pitch deck →
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 md:p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <h2 className="font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-white/55 leading-relaxed">{children}</p>
    </div>
  )
}
