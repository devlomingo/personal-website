import SectionHeading from './SectionHeading'
import { insights } from '@/data/portfolio'
import './Insights.css'

export default function Insights() {
  return (
    <section id="insights" className="insights section">
      <div className="container">
        <SectionHeading label="Thinking" title="Engineering Insights" />

        <div className="insights__grid">
          {insights.map((insight, i) => (
            <div
              key={insight.title}
              className="insights__card"
              data-reveal
              style={{ '--reveal-delay': `${0.08 * (i + 1)}s` } as React.CSSProperties}
            >
              <h3 className="insights__card-title">{insight.title}</h3>
              <p className="insights__card-summary">{insight.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
