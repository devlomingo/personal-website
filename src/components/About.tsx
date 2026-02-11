import SectionHeading from './SectionHeading'
import { aboutHighlights } from '@/data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading label="About" title="Engineering Philosophy" />

        <div className="about__grid">
          <div className="about__text" data-reveal>
            <p>
              I'm a senior backend engineer with a focus on SaaS architecture and scalable distributed
              systems. I leverage AI tools to accelerate development and ship faster. I believe the
              best engineering is invisible — users experience reliability, speed, and simplicity
              without ever seeing the complexity underneath.
            </p>
            <p>
              My approach combines deep technical expertise with product-minded thinking. I don't
              just build systems that work — I build systems that evolve gracefully as requirements
              change and scale demands grow.
            </p>
          </div>

          <div className="about__highlights">
            {aboutHighlights.map((h, i) => (
              <div
                key={h.title}
                className="about__highlight-card"
                data-reveal
                style={{ '--reveal-delay': `${0.1 * (i + 1)}s` } as React.CSSProperties}
              >
                <h3 className="about__highlight-title">{h.title}</h3>
                <p className="about__highlight-desc">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
