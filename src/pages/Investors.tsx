import { Link } from 'react-router-dom'
import { PRODUCTS, STATUS_META, CONTACT } from '../data'
import { SectionHead } from './Home'

export default function Investors() {
  const mailto = (subject: string) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`

  return (
    <main className="pt-28 pb-8">
      <section className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] grad-text">For Investors</p>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-2">
          Backing a <span className="grad-text">security-first studio</span> for Africa
        </h1>
        <p className="text-white/55 mt-5 max-w-2xl leading-relaxed">
          FendAm Technology builds and ships multiple products from one security-first foundation. Our flagship,
          FendAm Learn, is live and generating revenue, while our fintech-security and consumer-safety products
          are in active development. We're open to conversations with mission-aligned investors and partners.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href={mailto('Investor enquiry — FendAm Technology')} className="px-6 py-3 rounded-xl text-sm font-bold text-[#05070D]"
            style={{ background: 'linear-gradient(135deg,#1FE0E0,#9D7BFF)' }}>
            Request the data room
          </a>
          <a href={CONTACT.learn} target="_blank" rel="noopener" className="px-6 py-3 rounded-xl text-sm font-semibold text-white/80"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
            See the live product →
          </a>
        </div>
      </section>

      {/* Why now */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { v: 'Live revenue', l: 'FendAm Learn is in market with paying learners' },
            { v: 'Multiple shots', l: 'A portfolio of products, not a single bet' },
            { v: 'Local moat', l: 'Built for African fraud, devices and threats' },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-lg font-black grad-text">{s.v}</div>
              <div className="text-sm text-white/45 mt-1 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Per-product decks */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <SectionHead eyebrow="Data room" title="Product briefings" sub="Request a deck for any product below and we'll share it directly." />
        <div className="space-y-3 mt-8">
          {PRODUCTS.map((p) => {
            const st = STATUS_META[p.status]
            return (
              <div key={p.slug} className="rounded-2xl p-5 flex items-center gap-4 flex-wrap"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black" style={{ background: `${p.accent}1f`, color: p.accent }}>{p.name[0]}</div>
                <div className="flex-1 min-w-[180px]">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white">{p.name}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: st.color, background: `${st.color}18` }}>{st.label}</span>
                  </div>
                  <p className="text-sm text-white/45">{p.tagline}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={`/products/${p.slug}`} className="text-sm text-white/70 hover:text-white px-3 py-2">Overview</Link>
                  {p.pitchDeck ? (
                    <a href={p.pitchDeck} target="_blank" rel="noopener" className="text-sm font-semibold px-4 py-2 rounded-lg text-[#05070D]" style={{ background: `linear-gradient(135deg,#1FE0E0,#9D7BFF)` }}>
                      View deck
                    </a>
                  ) : (
                    <a href={mailto(`Deck request — ${p.name}`)} className="text-sm font-semibold px-4 py-2 rounded-lg text-white/85" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                      Request deck
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(31,224,224,0.08), rgba(157,123,255,0.08))', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="text-2xl font-black">Let's talk</h2>
          <p className="text-white/55 mt-2">Reach the founder directly.</p>
          <a href={mailto('Investor enquiry — FendAm Technology')} className="inline-block mt-6 px-6 py-3 rounded-xl text-sm font-bold text-[#05070D]"
            style={{ background: 'linear-gradient(135deg,#1FE0E0,#9D7BFF)' }}>
            {CONTACT.email}
          </a>
        </div>
      </section>
    </main>
  )
}
