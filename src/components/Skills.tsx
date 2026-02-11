import SectionHeading from './SectionHeading'
import { skills } from '@/data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeading label="Expertise" title="Technical Pillars" />

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              className="skills__card"
              data-reveal
              style={{ '--reveal-delay': `${0.08 * (i + 1)}s` } as React.CSSProperties}
            >
              <h3 className="skills__card-title">{skill.title}</h3>
              <p className="skills__card-desc">{skill.description}</p>
              <div className="skills__tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skills__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
