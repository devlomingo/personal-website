import SectionHeading from './SectionHeading'
import { experiences } from '@/data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <SectionHeading label="Career" title="Experience & Impact" />

        <div className="experience__grid">
          {experiences.map((exp, i) => (
            <div
              key={exp.period}
              className="experience__card"
              data-reveal
              style={{ '--reveal-delay': `${0.1 * (i + 1)}s` } as React.CSSProperties}
            >
              <div className="experience__header">
                <h3 className="experience__role">{exp.role}</h3>
                <span className="experience__meta">
                  {exp.company} &middot; {exp.period}
                </span>
              </div>
              <ul className="experience__impacts">
                {exp.impacts.map((impact) => (
                  <li key={impact} className="experience__impact">
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
