import { createFileRoute } from '@tanstack/react-router'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Insights from '@/components/Insights'
import Contact from '@/components/Contact'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useScrollReveal()

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Insights />
      <Contact />
    </>
  )
}
