import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './JobGuaranteeSection.css'

gsap.registerPlugin(ScrollTrigger)

const outcomes = {
  paid: {
    label: 'Get Paid',
    subtitle: 'Minimum ₹7 LPA job guarantee',
    icon: '▰',
    unlock: 'You unlock this when',
    steps: [
      'Maintain 75%+ performance',
      'Maintain 75%+ attendance',
      'Deliver on real-world projects',
      'Clear final placement benchmarks',
    ],
  },
  build: {
    label: 'Build & Raise',
    subtitle: 'Build your proof of work. Grow your next move.',
    icon: '↗',
    unlock: 'You build momentum through',
    steps: [
      'A portfolio of real brand work',
      'Campaign results you can explain',
      'Mentor feedback and iteration',
      'A clear plan for your next step',
    ],
  },
}

const engineSteps = [
  'Real brand projects (not simulations)',
  'Performance tracking & results',
  'Portfolio case study building',
  'Mentor reviews & iterations',
  'Distribution & visibility systems',
]

export default function JobGuaranteeSection() {
  const section = useRef(null)
  const [activeOutcome, setActiveOutcome] = useState('paid')
  const outcome = outcomes[activeOutcome]

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo('.guarantee-column',
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.guarantee-grid', start: 'top 80%', once: true },
        },
      )
    }, section)

    return () => context.revert()
  }, [])

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo('.guarantee-panel-content',
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' },
      )
    }, section)

    return () => context.revert()
  }, [activeOutcome])

  return (
    <section className="guarantee-section relative overflow-hidden px-6 py-20 text-[#f7f7f2] max-[900px]:px-5 max-[600px]:py-14" ref={section} aria-labelledby="guarantee-title">
      <div className="guarantee-grid mx-auto grid max-w-[1800px] grid-cols-[.9fr_1.2fr_1fr] items-stretch gap-6 max-[1050px]:grid-cols-2 max-[1050px]:gap-4 max-[680px]:grid-cols-1">
        <div className="guarantee-column flex min-h-[680px] flex-col justify-between py-5 max-[1050px]:min-h-0 max-[680px]:gap-10">
          <div>
            <h2 className="m-0 text-[clamp(52px,5vw,94px)] font-semibold leading-[.9] tracking-[-.075em]" id="guarantee-title">
              The min. ₹7<br />LPA
              <span className="guarantee-serif block pt-3 text-[clamp(42px,4.4vw,78px)] font-normal leading-[.95] tracking-[-.07em]">Job Guarantee</span>
            </h2>
            <p className="mt-7 text-[clamp(16px,1.2vw,20px)] tracking-[-.03em]">Not a Promise. A System.</p>
          </div>
          <a className="text-sm text-white/70 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white" href="#guarantee-terms">Terms and Conditions Applied</a>
        </div>

        <article className="guarantee-column engine-card overflow-hidden rounded-[30px] border border-white/15 bg-[#080808] p-3">
          <div className="px-4 pt-8">
            <h3 className="m-0 text-[clamp(25px,2vw,36px)] font-medium tracking-[-.06em]">The LIT <span className="guarantee-serif font-normal italic">Portfolio</span> Engine</h3>
            <p className="mt-5 text-sm text-white/75">Everything you need to go from</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide sm:gap-4">
              <span>Execution</span><i className="engine-step-dot">▶</i><span>Proof</span><i className="engine-step-dot">▶</i><span>Income</span>
            </div>
          </div>
          <div className="engine-image mt-5">
            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85" alt="A creator recording a video in a studio" loading="lazy" />
          </div>
          <ul className="m-0 list-none px-1 pb-1 pt-1">
            {engineSteps.map((step) => <li className="engine-list-item flex items-center gap-3 border-b border-white/10 px-3 py-3.5 text-sm last:border-0 sm:text-base" key={step}><span aria-hidden="true">✳</span>{step}</li>)}
          </ul>
        </article>

        <div className="guarantee-column flex flex-col gap-3 max-[1050px]:col-span-2 max-[680px]:col-span-1">
          <div className="outcome-switch">
            <p className="mb-3 mt-0 text-sm uppercase tracking-[.13em]">Choose your outcome</p>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose your career outcome">
              <button className={`outcome-tab outcome-tab-paid ${activeOutcome === 'paid' ? 'is-active' : ''}`} role="tab" aria-selected={activeOutcome === 'paid'} aria-controls="guarantee-outcome-panel" id="outcome-paid" onClick={() => setActiveOutcome('paid')}>Get Paid</button>
              <button className={`outcome-tab outcome-tab-build ${activeOutcome === 'build' ? 'is-active' : ''}`} role="tab" aria-selected={activeOutcome === 'build'} aria-controls="guarantee-outcome-panel" id="outcome-build" onClick={() => setActiveOutcome('build')}>Build & Raise</button>
            </div>
          </div>

          <div className="guarantee-panel" role="tabpanel" id="guarantee-outcome-panel" aria-labelledby={`outcome-${activeOutcome}`} key={activeOutcome}>
            <div className="guarantee-panel-content">
              <div className="flex items-center gap-4">
                <span className="outcome-icon" aria-hidden="true">{outcome.icon}</span>
                <div><h3 className="m-0 text-[25px] font-semibold tracking-[-.04em]">{outcome.label}</h3><p className="m-0 mt-1 text-sm text-white/85">{outcome.subtitle}</p></div>
              </div>
              <p className="mb-4 mt-6 text-sm text-[#d28aff]">{outcome.unlock}</p>
              <ul className="m-0 list-none space-y-2.5 p-0">
                {outcome.steps.map((step) => <li className="flex items-start gap-3 text-[15px] leading-snug sm:text-base" key={step}><span className="outcome-check" aria-hidden="true">↗</span>{step}</li>)}
              </ul>
            </div>
          </div>

          <div className="guarantee-support-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85" alt="A team presenting ideas during a workshop" loading="lazy" />
            <div className="support-image-caption">Learn by doing. Show what you can do.</div>
          </div>
        </div>
      </div>
      <p id="guarantee-terms" className="sr-only">Job guarantee eligibility is subject to the listed performance, attendance, project delivery, and placement benchmarks.</p>
    </section>
  )
}
