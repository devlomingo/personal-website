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
              I'm a Senior Backend Engineer based in Makkah, Saudi Arabia, with extensive experience
              building scalable, secure, and high-performance backend systems for high-traffic
              e-commerce platforms. At Salla, I've architected core services handling millions of
              requests — from account systems and review platforms to landing page builders.
            </p>
            <p>
              My approach combines deep backend expertise with a results-driven mindset. I don't
              just write code — I design systems that reduce costs, improve reliability, and directly
              impact business metrics. I'm passionate about mentoring teams, fostering engineering
              excellence, and delivering solutions that scale.
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
