import { Mail, Github, Linkedin } from 'lucide-react'
import './Contact.css'

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__inner" data-reveal>
          <span className="contact__label">Contact</span>
          <h2 className="contact__title">Let's build something great</h2>
          <p className="contact__subtitle">
            I'm open to senior backend engineering roles, technical leadership positions, and
            opportunities to architect scalable systems for high-impact products.
          </p>

          <a href="mailto:alabsi.m.b@gmail.com" className="contact__email-btn">
            <Mail size={18} />
            alabsi.m.b@gmail.com
          </a>

          <div className="contact__social">
            <a
              href="https://github.com/devlomingo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/devlomingo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/devlomingo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="X"
            >
              <XIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
