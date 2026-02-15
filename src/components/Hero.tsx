import { ArrowDown, Mail } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import './Hero.css'

export default function Hero() {
  const scrollTo = useSmoothScroll()

  return (
    <section id="hero" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content container">
        <span className="hero__label" data-reveal>
          Senior Backend Engineer
        </span>
        <h1 className="hero__title" data-reveal style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>
          Mohammed Alabsi
        </h1>
        <p className="hero__subtitle" data-reveal style={{ '--reveal-delay': '0.2s' } as React.CSSProperties}>
          I build scalable, high-performance backend systems for high-traffic platforms.
          <br />
          Architecting e-commerce infrastructure that drives business growth.
        </p>
        <div className="hero__actions" data-reveal style={{ '--reveal-delay': '0.3s' } as React.CSSProperties}>
          <a
            href="#contact"
            className="hero__cta hero__cta--primary"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('contact')
            }}
          >
            <Mail size={18} />
            Get in touch
          </a>
          <a
            href="#about"
            className="hero__cta hero__cta--secondary"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('about')
            }}
          >
            <ArrowDown size={18} />
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
