import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONTACT } from '../data'

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#1FE0E0" />
      <path d="M9 8h13v3.5H12.5v4H20v3.5h-7.5V24H9V8Z" fill="#060b18" />
    </svg>
  )
}

export function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const LINKS = [
  { label: 'Divisions', to: '/#divisions' },
  { label: 'Products', to: '/#products' },
  { label: 'Company', to: '/#company' },
  { label: 'Careers', to: '/careers' },
  { label: 'Investors', to: '/investors' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all"
      style={{
        background: scrolled ? 'rgba(6,11,24,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo size={30} />
          <span className="font-extrabold tracking-tight text-[15px]">
            FendAm <span className="grad-text">Technology</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.label} href={l.to} className="navlink text-sm text-white/60 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href={CONTACT.learn} target="_blank" rel="noopener"
            className="text-sm px-4 py-2 rounded-xl btn-primary">
            FendAm Learn
          </a>
        </nav>

        <button className="md:hidden p-2 text-white/70" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 pt-1 space-y-1" style={{ background: 'rgba(6,11,24,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-white/70 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={CONTACT.learn} target="_blank" rel="noopener" className="block mt-2 text-center text-sm font-semibold px-4 py-2.5 rounded-xl text-[#060b18]"
            style={{ background: '#1FE0E0' }}>
            Go to FendAm Learn
          </a>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="font-extrabold tracking-tight">FendAm <span className="grad-text">Technology</span></span>
          </Link>
          <p className="text-sm text-white/40 mt-3 max-w-xs leading-relaxed">
            Security-first products and talent, built for Africa.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Company</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="/#divisions" className="hover:text-white">Divisions</a></li>
            <li><a href="/#products" className="hover:text-white">Products</a></li>
            <li><a href="/#company" className="hover:text-white">Company</a></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/investors" className="hover:text-white">For Investors</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Get in touch</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
            <li><a href={CONTACT.learn} target="_blank" rel="noopener" className="hover:text-white">learn.fendamtech.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-white/30">
          © {new Date().getFullYear()} FendAm Technology. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
