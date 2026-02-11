import { useState, useCallback, useMemo } from 'react'
import { Menu } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav'
import './Nav.css'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)
  const scrollTo = useSmoothScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      scrollTo(id)
      setMobileOpen(false)
    },
    [scrollTo]
  )

  const openMobile = useCallback(() => setMobileOpen(true), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__inner container">
          <a
            href="#hero"
            className="nav__logo"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <span className="nav__logo-bracket">&lt;</span>
            MA
            <span className="nav__logo-bracket"> /&gt;</span>
          </a>

          <div className="nav__links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${activeSection === link.id ? 'nav__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav__actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className="nav__hamburger"
              onClick={openMobile}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <MobileNav
        isOpen={mobileOpen}
        onClose={closeMobile}
        links={NAV_LINKS}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  )
}
