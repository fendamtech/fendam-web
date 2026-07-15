import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('in')
          io.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
