import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CreativityAISection.css'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    step: 'Step 1',
    title: 'Develop taste',
    body: 'Understand why some marketing moves people and most doesn’t.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85',
    alt: 'A creator working in a recording studio',
    tone: 'coral',
  },
  {
    step: 'Step 2',
    title: 'Amplify with AI',
    body: 'Use AI to produce, test, and refine at a speed that compounds your instincts.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    alt: 'Creative team collaborating around a laptop',
    tone: 'lilac',
  },
  {
    step: 'Step 3',
    title: 'Own the output',
    body: 'Build a portfolio of real campaigns, not just prompts.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
    alt: 'A team presenting a campaign in a workshop',
    tone: 'green',
  },
]

const practices = [
  'Generate multiple content directions in minutes',
  'Build high-quality first drafts faster',
  'Analyze trends and audience behavior quickly',
  'Test hooks, creatives, and messaging at scale',
]

const tools = [
  ['MM', 'MarketMuse', 'market'],
  ['✳', 'Search Atlas', 'atlas'],
  ['S', 'SurferSEO', 'surfer'],
  ['R', 'Recast Studio', 'recast'],
  ['Sy', 'Synthesia', 'synthesia'],
  ['L5', 'Lumen5', 'lumen'],
  ['B', 'SocialBee AI', 'socialbee'],
  ['◎', 'Reface.ai', 'reface'],
  ['R', 'Revealbot', 'reveal'],
]

export default function CreativityAISection() {
  const section = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo('.human-copy, .ai-practice-panel',
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.creativity-ai-layout', start: 'top 82%', once: true },
        },
      )
      gsap.utils.toArray('.principle-card').forEach((card, index) => {
        gsap.fromTo(card,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            delay: index * 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          },
        )
      })
      gsap.fromTo('.practice-item',
        { autoAlpha: 0, x: -16 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.ai-practice-panel', start: 'top 84%', once: true },
        },
      )
      gsap.fromTo('.tool-pill',
        { autoAlpha: 0, y: 16, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.tool-grid', start: 'top 90%', once: true },
        },
      )
      gsap.utils.toArray('.principle-image img').forEach((image) => {
        gsap.fromTo(image,
          { scale: 1.1, yPercent: -3 },
          {
            scale: 1.04,
            yPercent: 3,
            ease: 'none',
            scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
          },
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section className="creativity-ai-section relative overflow-hidden px-[var(--site-page-gutter)] py-24 text-[#f7f7f2] max-[900px]:px-5 max-[600px]:py-16" ref={section} aria-labelledby="creativity-ai-title">
      <div className="creativity-ai-layout relative z-[1] mx-auto grid w-full max-w-[var(--site-container-width)] grid-cols-[.88fr_1.12fr] gap-6 max-[1000px]:grid-cols-1">
        <div className="flex flex-col gap-8">
          <div className="human-copy max-w-[620px]">
            <h2 className="m-0 text-[clamp(34px,3.5vw,62px)] font-semibold leading-[1.05] tracking-[-.06em]" id="creativity-ai-title">
              <span className="creativity-serif font-normal italic">Creativity</span> is human.<br />Speed is <span className="creativity-serif font-normal italic">AI.</span>
            </h2>
            <p className="mt-5 text-[clamp(16px,1.2vw,20px)] leading-relaxed">At LIT, you start with first principles, not prompts.</p>
            <p className="mt-6 max-w-[620px] text-[15px] leading-relaxed text-white/80 sm:text-base">Once you understand how attention, storytelling, and conversion work, AI helps you research faster, test smarter, and execute with precision.</p>
          </div>

          <div className="ai-practice-panel">
            <h3 className="mb-3 mt-0 text-sm font-bold uppercase tracking-[.16em]">AI in practice</h3>
            <ul className="m-0 list-none p-0">
              {practices.map((practice) => <li className="practice-item flex items-start gap-3 border-b border-white/10 py-3.5 text-sm last:border-0 sm:text-base" key={practice}><span aria-hidden="true">↗</span>{practice}</li>)}
            </ul>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <div className="principle-grid grid grid-cols-3 gap-3 max-[700px]:grid-cols-1">
            {principles.map((principle) => (
              <article className={`principle-card principle-${principle.tone}`} key={principle.step}>
                <div className="principle-image"><img src={principle.image} alt={principle.alt} loading="lazy" /></div>
                <div className="principle-content flex flex-col justify-between flex-1">
                  <span className="principle-step w-fit">{principle.step}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p className='min-h-[61px] line-clamp-3'>{principle.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="tool-panel">
            <div className="tool-grid grid grid-cols-5 gap-3 max-[700px]:grid-cols-3 max-[420px]:grid-cols-2">
              {tools.map(([mark, name, tone]) => (
                <div className="tool-pill" key={name}>
                  <span className={`tool-mark tool-${tone}`} aria-hidden="true">{mark}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
