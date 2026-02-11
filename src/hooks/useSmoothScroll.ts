import { useCallback } from 'react'

export function useSmoothScroll() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '56',
      10
    )
    const offsetTop = el.getBoundingClientRect().top + window.scrollY - navHeight * 16 / parseFloat(getComputedStyle(document.documentElement).fontSize)

    window.scrollTo({
      top: el.offsetTop - 56,
      behavior: 'smooth',
    })
  }, [])

  return scrollTo
}
