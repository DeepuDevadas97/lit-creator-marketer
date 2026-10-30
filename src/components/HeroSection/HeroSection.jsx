import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './HeroSection.css'

gsap.registerPlugin(ScrollTrigger)

const partners = ['ATHER', 'zepto', 'PHILIPS', 'WILD', '◉ SBI', 'WTF!?', 'ZERO1⚡']

export default function HeroSection() {
  const root = useRef(null)
  const visual = useRef(null)
  const loader = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) {
        gsap.set(loader.current, { display: 'none' })
        return
      }

      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
      intro.to('.loader-progress', { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, 0)
        .to('.loader-count', { innerText: 100, duration: 1.05, snap: { innerText: 1 }, ease: 'none' }, 0)
        .to('.loader-brand', { y: -20, opacity: 0, duration: .3 }, .92)
        .to('.loader-panel-top', { yPercent: -101, duration: .85 }, 1.08)
        .to('.loader-panel-bottom', { yPercent: 101, duration: .85 }, 1.08)
        .set(loader.current, { display: 'none' })
        .from('.eyebrow', { y: 20, opacity: 0, duration: .65 }, 1.25)
        .from('.title-line', { yPercent: 110, rotate: 3, duration: .9, stagger: .12 }, 1.32)
        .from('.hero-description, .hero-tags, .hero-cta, .diploma-note, .partner-strip', { y: 22, opacity: 0, duration: .7, stagger: .09 }, 1.55)
        .from('.hero-visual', { clipPath: 'inset(12% 0 12% 0 round 22px)', scale: .96, opacity: 0, duration: 1.15 }, 1.24)
        .from('.applications-pill, .play-button', { scale: .75, opacity: 0, duration: .5, stagger: .1 }, 1.95)
        .from('.visual-caption > *', { y: 20, opacity: 0, duration: .55, stagger: .1 }, 2.05)

      gsap.to('.visual-photo', { yPercent: 14, scale: 1.08, ease: 'none', scrollTrigger: { trigger: visual.current, start: 'top bottom', end: 'bottom top', scrub: 1 } })
      gsap.to('.hero-copy', { y: -65, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.from('.partner-logo', { y: 18, opacity: 0, stagger: .08, duration: .55, ease: 'power2.out', scrollTrigger: { trigger: '.partner-strip', start: 'top 88%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero-shell" id="top" ref={root}>
      <div className="hero-loader" ref={loader} aria-label="Loading LIT" role="status">
        <div className="loader-panel loader-panel-top" /><div className="loader-panel loader-panel-bottom" />
        <div className="loader-brand"><span className="loader-mark">LIT<span>.</span></span><span className="loader-word">MAKING THE NEXT GENERATION</span><div className="loader-track"><span className="loader-progress" /></div><span className="loader-count">0</span></div>
      </div>
      <div className="hero-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> The next generation of marketing starts here</p>
          <h1><span className="title-line-wrap"><span className="title-line"><span className="serif-word">Creator</span> Marketer</span></span><span className="title-line-wrap"><span className="title-line">Program<span className="title-period">.</span></span></span></h1>
          <p className="hero-description">Learn creator marketing by doing the work — on real briefs, with the brands shaping culture.</p>
          <div className="hero-tags"><span className="tag tag-violet"><i>⌖</i> Offline</span><span className="tag tag-green"><i>◷</i> 12 + 3 months</span><span className="tag tag-orange"><i>▦</i> March 2027</span></div>
          <a href="#enquire" className="button-gradient hero-cta">Enquire now <span>↗</span></a>
          <p className="diploma-note">Choose the <strong>Professional Diploma</strong> pathway and earn a UGC accredited qualification alongside your Creator Marketer program.</p>
          <div className="partner-strip" id="learn"><p>Learn by working with</p><div className="partner-logos">{partners.map((partner, index) => <span className={`partner-logo partner-${index}`} key={partner}>{partner}</span>)}</div></div>
        </div>
        <div className="hero-visual" ref={visual}>
          <div className="visual-photo" role="img" aria-label="A group of students celebrating together" />
          <div className="visual-wash" />
          <div className="applications-pill"><span className="spin-mark">✳</span> Applications open</div>
          <a className="play-button" href="#story" aria-label="Watch the student story"><span /></a>
          <div className="visual-caption"><span className="caption-label"><i>✦</i> The LIT experience</span><h2>Learn loud.<br />Make things happen.</h2><a href="#story">Meet the community <span>↗</span></a></div>
          <div className="visual-index">01 <span /> 03</div>
          <span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" />
        </div>
      </div>
      <div className="hero-footer"><span>Made for the makers</span><span>Scroll to explore <i>↓</i></span></div>
    </section>
  )
}
