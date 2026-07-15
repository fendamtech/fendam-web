import { Link } from 'react-router-dom'
import { HIRING, CULTURE, CONTACT } from '../data'
import { Reveal } from '../components/Reveal'

const CAREERS_EMAIL = CONTACT.email

export default function Careers() {
  const apply = (subject: string) => `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`

  return (
    <main className="pt-24 pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src="/graphic-serverroom-898uPS_c.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(800px 400px at 50% -10%, rgba(31,224,224,0.15), transparent 60%)' }} />
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(to bottom, transparent, #060b18)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <p className="mono text-[11px] font-semibold uppercase tracking-[0.25em] grad-text flex items-center gap-2.5">
            <span className="inline-block w-5 h-px" style={{ background: 'currentColor', opacity: 0.6 }} />
            Careers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]">
            Build the technology<br /><span className="grad-text">Africa can trust.</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-2xl leading-relaxed prose-justify">
            We are a small, security-first team taking on outsized problems: fraud, digital safety and the
            continent's cyber skills gap. If you want real ownership and work that reaches real people, we
            should talk. We hire for character and curiosity first, credentials second.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={apply('Application: FendAm Technology')} className="px-6 py-3.5 rounded-xl text-sm btn-primary">Send us your CV</a>
            <a href="#roles" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white/85 btn-ghost">See where we hire</a>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="max-w-6xl mx-auto px-6 pt-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mono text-[11px] font-semibold uppercase tracking-[0.25em] grad-text flex items-center gap-2.5">
              <span className="inline-block w-5 h-px" style={{ background: 'currentColor', opacity: 0.6 }} />
              Life at FendAm
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">Why people join, and stay</h2>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 mt-12">
          {CULTURE.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="rounded-2xl p-6 card h-full">
                <h3 className="font-bold text-white">{c.title}</h3>
                <p className="text-sm text-white/50 mt-2 leading-relaxed prose-justify">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Where we hire */}
      <section id="roles" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mono text-[11px] font-semibold uppercase tracking-[0.25em] grad-text flex items-center gap-2.5">
              <span className="inline-block w-5 h-px" style={{ background: 'currentColor', opacity: 0.6 }} />
              Where we hire
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">Roles across the group</h2>
            <p className="text-white/55 mt-4 leading-relaxed prose-justify">
              We do not always have formal openings, but we are always meeting people across our four
              divisions. Tell us where you fit and what you have built.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 mt-12">
          {HIRING.map((h, i) => (
            <Reveal key={h.division} delay={i * 80}>
              <div className="rounded-2xl p-6 card h-full">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center hair">
                    <img src={h.icon} alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="font-bold text-white">{h.division}</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-5">
                  {h.roles.map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#1FE0E0' }} />
                      <span className="text-sm text-white/55 leading-snug">{r}</span>
                    </div>
                  ))}
                </div>
                <a href={apply(`Application: ${h.division}`)} className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold" style={{ color: '#1FE0E0' }}>
                  Apply to this team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we hire */}
      <section className="max-w-6xl mx-auto px-6 pt-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mono text-[11px] font-semibold uppercase tracking-[0.25em] grad-text flex items-center gap-2.5">
              <span className="inline-block w-5 h-px" style={{ background: 'currentColor', opacity: 0.6 }} />
              How we hire
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">A short, honest process</h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3 mt-12">
          {[
            { n: '01', t: 'Reach out', d: 'Send your CV and a few lines on what you have built. No cover-letter theatre required.' },
            { n: '02', t: 'Conversation', d: 'A call to understand you, followed by a practical task that mirrors the real work.' },
            { n: '03', t: 'Decision', d: 'A clear answer, fast. If it is a yes, we move quickly and onboard you properly.' },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="rounded-2xl p-7 card h-full">
                <div className="mono text-3xl font-bold grad-text">{s.n}</div>
                <h3 className="font-bold text-white mt-3">{s.t}</h3>
                <p className="text-sm text-white/50 mt-2 leading-relaxed prose-justify">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pt-24">
        <Reveal>
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden card">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(700px 320px at 50% 0%, rgba(31,224,224,0.14), transparent 60%)' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Don't see your exact role?</h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto">Send your CV anyway. Great people create their own roles here.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a href={apply('Application: FendAm Technology')} className="px-6 py-3.5 rounded-xl text-sm btn-primary">{CAREERS_EMAIL}</a>
              <Link to="/#divisions" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white/85 btn-ghost">Explore the divisions</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
