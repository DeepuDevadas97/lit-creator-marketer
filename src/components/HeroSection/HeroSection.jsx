import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../Header/Header'
import './HeroSection.css'

gsap.registerPlugin(ScrollTrigger)

const partners = ['ATHER', 'zepto', 'PHILIPS', 'WILD', '◉ SBI', 'WTF!?', 'ZERO1⚡']
const CIRCLE_LENGTH = 703.72

export default function HeroSection() {
  const root = useRef(null)
  const loader = useRef(null)
  const landing = useRef(null)
  const visual = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const number = loader.current.querySelector('.loader-count')
      const ring = loader.current.querySelector('.loader-ring-progress')

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(loader.current, { display: 'none' })
        gsap.set(landing.current, { marginTop: 0 })
        return
      }

      gsap.set('.site-header', { autoAlpha: 0, y: -24 })
      gsap.set('.hero-copy > *, .applications-pill, .play-button, .visual-caption > *, .visual-index', { autoAlpha: 0, y: 24 })
      gsap.set('.hero-visual', { autoAlpha: 0, y: 24, scale: .96, clipPath: 'inset(12% 0 12% 0 round 22px)' })
      gsap.set('.visual-photo', { scale: 1.08 })

      const reveal = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
        .to('.site-header', { autoAlpha: 1, y: 0, duration: .7 }, 0)
        .to('.eyebrow', { autoAlpha: 1, y: 0, duration: .55 }, .08)
        .to('.hero-copy h1', { autoAlpha: 1, y: 0, duration: .5 }, .1)
        .to('.title-line', { yPercent: 0, rotate: 0, duration: .9, stagger: .13 }, .13)
        .to('.hero-description, .hero-tags, .hero-cta, .diploma-note, .partner-strip', { autoAlpha: 1, y: 0, duration: .65, stagger: .09 }, .28)
        .to('.hero-visual', { autoAlpha: 1, y: 0, scale: 1, clipPath: 'inset(0% 0 0% 0 round 22px)', duration: 1.05 }, .02)
        .to('.visual-photo', { scale: 1, duration: 1.4 }, .02)
        .to('.applications-pill, .play-button', { autoAlpha: 1, y: 0, scale: 1, duration: .5, stagger: .1 }, .55)
        .to('.visual-caption > *, .visual-index', { autoAlpha: 1, y: 0, duration: .55, stagger: .1 }, .68)
      reveal.timeScale(reveal.duration() / .6)

      const meter = { progress: 0 }
      const scrollAnimation = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: loader.current,
          start: 'top top',
          end: () => `+=${loader.current.offsetHeight * 2}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      })
      scrollAnimation.to(meter, {
        progress: 1,
        duration: 1,
        onUpdate: () => {
          const percentage = Math.round(meter.progress * 100)
          number.textContent = `${percentage}%`
          ring.style.strokeDashoffset = `${CIRCLE_LENGTH * (1 - meter.progress)}`
          loader.current.setAttribute('aria-valuenow', percentage)
        },
      }, 0)
        .to(loader.current, { backgroundColor: '#f7f7f2', duration: .6, ease: 'power2.inOut' }, 1)
        .to(loader.current.querySelector('.scroll-loader-content'), { autoAlpha: 0, duration: .4 }, 1)
        .to('.loader-side-note, .loader-bottom-note', { autoAlpha: 0, duration: .35 }, 1)
        .to(loader.current, { clipPath: 'circle(0% at 50% 50%)', duration: .65, ease: 'power3.inOut' }, 1.35)
        .add(reveal, 1.4)
      reveal.paused(false)

      gsap.to('.visual-photo', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: visual.current, start: 'top bottom', end: 'bottom top', scrub: 1 } })
      gsap.from('.partner-logo', { y: 18, opacity: 0, stagger: .08, duration: .55, ease: 'power2.out', scrollTrigger: { trigger: '.partner-strip', start: 'top 88%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="hero-experience" ref={root}>
      <section className="scroll-loader" ref={loader} role="progressbar" aria-label="Scroll progress to enter LIT" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
        <div className="loader-grid" />
        <div className="loader-glow" />
        <div className="scroll-loader-content">
          <span className="loader-kicker"><i /> An experience by LIT</span>
          <span className="loader-mark">LIT<span>.</span></span>
          <span className="loader-word">MAKING THE NEXT GENERATION</span>
          <div className="loader-meter" aria-hidden="true">
            <svg viewBox="0 0 260 260" focusable="false"><circle className="loader-ring-track" cx="130" cy="130" r="112" /><circle className="loader-ring-progress" cx="130" cy="130" r="112" /></svg>
            <span className="loader-count">0%</span>
          </div>
          <span className="loader-prompt"><i className="scroll-mouse" /> Scroll down to enter</span>
        </div>
        <span className="loader-side-note">CREATIVITY IN MOTION <b>✳</b> EST. LIT</span>
        <span className="loader-bottom-note">SCROLL TO BEGIN <i>↓</i></span>
      </section>

      <div className="landing-screen" ref={landing}>
        <Header />
        <section className="hero-shell" id="top">
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
      </div>
    </div>
  )
}
