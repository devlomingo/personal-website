import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import './MobileNav.css'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: { id: string; label: string }[]
  activeSection: string
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function MobileNav({
  isOpen,
  onClose,
  links,
  activeSection,
  onNavClick,
  theme,
  onToggleTheme,
}: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  return (
    <div
      className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="mobile-nav__overlay" onClick={onClose} />
      <div className="mobile-nav__panel" ref={panelRef}>
        <div className="mobile-nav__header">
          <span className="mobile-nav__title">Navigation</span>
          <button
            className="mobile-nav__close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav__links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav__link ${activeSection === link.id ? 'mobile-nav__link--active' : ''}`}
              onClick={(e) => onNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-nav__footer">
          <span className="mobile-nav__theme-label">Theme</span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </div>
  )
}
