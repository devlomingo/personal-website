import './SectionHeading.css'

interface SectionHeadingProps {
  label: string
  title: string
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-heading__label">{label}</span>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  )
}
