import { useEffect } from 'react'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Mission from './components/Mission'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => lenis.destroy()
    })
  }, [])

  return (
    <div className="min-h-screen bg-(--color-bg)">
      <main>
        <Hero />
        <Comparison />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
