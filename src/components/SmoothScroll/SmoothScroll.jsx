import { useLayoutEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.05,
      wheelMultiplier: 0.9,
      anchors: true,
    })
    const updateScrollTrigger = () => ScrollTrigger.update()
    const updateLenis = (time) => lenis.raf(time * 1000)

    lenis.on('scroll', updateScrollTrigger)
    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)
    ScrollTrigger.refresh()

    return () => {
      lenis.off('scroll', updateScrollTrigger)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
      gsap.ticker.lagSmoothing(500, 33)
    }
  }, [])

  return null
}
