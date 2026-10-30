import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ChallengesSection.css'

gsap.registerPlugin(ScrollTrigger)

const tracks = [
  {
    name: 'Serial Storyteller', tag: 'Content Creation',
    tagline: "Replace 'creating content' with crafting stories that stick.",
    overview: 'Serial storytellers capture attention by turning quick hooks into engaging stories, whether in a 15-second reel or a 5-minute video. Each element is crafted to make viewers stop and remember.',
    skills: ['Hook design', 'Colour grading', 'Audience psychology', 'Creative writing'],
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Brand Builder', tag: 'Brand Strategy',
    tagline: 'Turn a brand into a point of view people recognise.',
    overview: 'Build a distinct brand voice, visual world, and creative system that makes every campaign feel unmistakably yours.',
    skills: ['Brand positioning', 'Visual systems', 'Tone of voice', 'Creative direction'],
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Research Ranger', tag: 'Audience Insights',
    tagline: 'Find the human insight hiding inside the numbers.',
    overview: 'Turn audience behaviour, culture, and category signals into useful insights that make the next creative idea stronger.',
    skills: ['Audience research', 'Social listening', 'Cultural signals', 'Insight writing'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'New Media Maverick', tag: 'Emerging Formats',
    tagline: 'Make new formats feel native, never forced.',
    overview: 'Explore new platforms and formats, then shape ideas that feel natural to the people and communities using them.',
    skills: ['Platform fluency', 'Format testing', 'Creator partnerships', 'Trend spotting'],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'ROI Samurai', tag: 'Performance Marketing',
    tagline: 'Connect sharp creative to measurable growth.',
    overview: 'Learn how to read campaign signals, test creative choices, and communicate the outcomes that matter to a business.',
    skills: ['Creative testing', 'Performance metrics', 'Campaign analysis', 'Optimisation'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Campaign Commando', tag: 'Integrated Campaigns',
    tagline: 'Bring every channel together around one big idea.',
    overview: 'Plan connected campaigns that carry a strong idea from the first brief through creators, content, and distribution.',
    skills: ['Campaign planning', 'Creator mix', 'Content systems', 'Distribution'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  },
]

const brands = [
  {
    name: 'Bewakoof', mark: 'B', color: 'yellow',
    serial: 'Bewakoof serves 10M+ youth customers and our Reels get solid reach but people drop off in the first 3 seconds. Write 10 hook variations we can test on our next graphic tee drop. We need ones that stop the scroll, not just look good.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85',
    guide: 'Dhairya Gangwani', role: 'Founder & Podcaster @ Dhairya Decodes',
  },
  {
    name: 'NGL', mark: 'NGL', color: 'pink',
    serial: "Our NGL Drinks product videos sound like a health textbook. Nobody watches them past 15 seconds. Write a 60-second script for our next can that makes people genuinely curious about what's inside, without it feeling like a pharma ad.",
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85',
    guide: 'Sai Sethu', role: 'Digital Creator',
  },
  {
    name: 'Banana Club', mark: 'BC', color: 'orange',
    serial: "Every fashion brand on Reels looks the same right now. We want Banana Club to have a signature editing style that people recognise before they even see our name. Create 3 to 5 Reel edits with a consistent cut style that's bold, playful, and unmistakably Slip Into Style.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
    guide: 'LIT Creative Mentors', role: 'Creator Marketing',
  },
  {
    name: 'Sunburn Union', mark: 'SUN', color: 'green',
    serial: "Sunburn went from a Goa beach gathering to Asia's biggest EDM festival with artists from 30+ countries on our stage. We want to tell that story. Write and produce a 3-episode short documentary series that takes our community behind the scenes of how this all actually happened.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85',
    guide: 'LIT Creative Mentors', role: 'Creator Marketing',
  },
]

const challengePrompts = {
  'Brand Builder': [
    'Create a recognisable visual and verbal identity for the next graphic tee drop, built for the people who wear it.',
    'Give NGL Drinks a distinct brand voice and product story that feels fresh, clear, and easy to remember.',
    'Define a signature style system for Banana Club that stands apart in a crowded fashion feed.',
    'Build a campaign identity that connects Sunburn Union’s beginnings with the festival it is today.',
  ],
  'Research Ranger': [
    'Find the audience truth behind the next graphic tee drop and turn it into a sharp campaign insight.',
    'Explore what makes young consumers curious about ingredients, taste, and everyday drink choices.',
    'Map the fashion and creator signals shaping how Banana Club’s audience discovers new looks.',
    'Uncover the moments and motivations that make festival communities feel like they belong.',
  ],
  'New Media Maverick': [
    'Develop a native short-form series that gives the graphic tee drop a life beyond a product shot.',
    'Turn the NGL can into a playful creator-led format people want to watch and share.',
    'Create an unexpected Reel format that makes Banana Club’s editing style instantly recognisable.',
    'Take fans behind the scenes of Sunburn Union through a creator-first short video format.',
  ],
  'ROI Samurai': [
    'Design a hook-testing plan for the graphic tee launch and decide which signals define a winning Reel.',
    'Plan a creative test that helps NGL learn which product story drives stronger watch-through.',
    'Build a simple test plan to learn which edit style earns attention and saves for Banana Club.',
    'Choose campaign signals that show whether Sunburn Union’s story is reaching the right fans.',
  ],
  'Campaign Commando': [
    'Connect creator, short-form, and launch-day ideas into one campaign for the new graphic tee drop.',
    'Plan a connected creator campaign that introduces NGL Drinks through useful, entertaining stories.',
    'Bring creators and community into one launch campaign for Banana Club’s signature style.',
    'Build a campaign journey that brings Sunburn Union’s origin story to its festival community.',
  ],
}

export default function ChallengesSection() {
  const section = useRef(null)
  const [activeTrack, setActiveTrack] = useState(0)
  const [brochureOpen, setBrochureOpen] = useState(false)
  const active = tracks[activeTrack]
  const prompts = challengePrompts[active.name]

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo('.challenges-heading',
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.challenges-heading', start: 'top 88%', once: true },
        },
      )
      gsap.fromTo('.challenge-tab',
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.challenge-tabs', start: 'top 90%', once: true },
        },
      )
      gsap.fromTo('.epic-card',
        { autoAlpha: 0, clipPath: 'inset(12% 0 0 round 28px)' },
        {
          autoAlpha: 1,
          clipPath: 'inset(0% 0 0 round 28px)',
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.challenge-layout', start: 'top 84%', once: true },
        },
      )

      gsap.utils.toArray('.brand-challenge').forEach((card, index) => {
        const mobile = window.matchMedia('(max-width: 700px)').matches
        gsap.fromTo(card.querySelector('.brand-card-motion'),
          { autoAlpha: 0, x: mobile ? 0 : (index % 2 === 0 ? -28 : 28), y: 24, scale: 0.985 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: index * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          },
        )
      })

      gsap.utils.toArray('.epic-art img, .brand-challenge-photo img').forEach((image) => {
        gsap.fromTo(image,
          { scale: 1.08, yPercent: -3 },
          {
            scale: 1.02,
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: image.closest('.epic-art, .brand-challenge-photo'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const context = gsap.context(() => {
      gsap.fromTo('.epic-dynamic-content',
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' },
      )
      gsap.fromTo('.brand-challenge-copy',
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' },
      )
    }, section)
    return () => context.revert()
  }, [activeTrack])

  useLayoutEffect(() => {
    if (!brochureOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setBrochureOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [brochureOpen])

  return (
    <section className="challenges-section relative overflow-hidden px-[var(--site-page-gutter)] py-20 text-[#f7f7f2] max-[900px]:px-5 max-[600px]:py-14" ref={section} aria-labelledby="challenges-heading">
      <div className="relative z-[1] mx-auto w-full max-w-[var(--site-container-width)]">
        <h2 className="challenges-heading mb-12 text-center text-[clamp(34px,4vw,70px)] font-semibold leading-none tracking-[-.065em] max-[700px]:mb-8">
          Experience learning through <span className="challenge-serif font-normal italic">Challenges</span>
        </h2>

        <div className="challenge-tabs mb-5 flex flex-wrap gap-3 max-[700px]:gap-2" role="tablist" aria-label="Choose a challenge track">
          {tracks.map((track, index) => (
            <button
              className={`challenge-tab ${index === activeTrack ? 'is-active' : ''}`}
              key={track.name}
              id={`challenge-tab-${index}`}
              role="tab"
              aria-selected={index === activeTrack}
              aria-controls="challenge-panel"
              onClick={() => setActiveTrack(index)}
            >
              {String(index + 1).padStart(2, '0')}. {track.name}
            </button>
          ))}
        </div>

        <div className="challenge-layout grid grid-cols-[.78fr_1.22fr] gap-8 max-[1000px]:grid-cols-1" id="challenge-panel" role="tabpanel" aria-labelledby={`challenge-tab-${activeTrack}`}>
          <article className="epic-card h-full overflow-hidden rounded-[28px] border border-white/15 bg-[#09090b]">
            <div className="epic-art">
              <img src={active.image} alt={`${active.name} challenge track`} loading="lazy" />
              <span className="epic-tag">{active.tag}</span>
              <div className="epic-art-copy epic-dynamic-content">
                <h3>{active.name}</h3>
                <p>{active.tagline}</p>
              </div>
            </div>
            <div className="epic-overview epic-dynamic-content">
              <p className="mb-3 mt-0 text-xs font-semibold uppercase tracking-[.16em] text-white/45">Overview</p>
              <p className="m-0 text-[15px] leading-relaxed text-white/90 sm:text-base">{active.overview}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
              </div>
            </div>
          </article>

          <div className="brand-challenges-wrap">
            <p className="mb-4 mt-2 text-sm uppercase tracking-[.14em] text-white/80">Challenges from this epic</p>
            <div className="brand-challenge-grid grid grid-cols-2 gap-6 max-[700px]:grid-cols-1">
              {brands.map((brand, index) => (
                <article className={`brand-challenge brand-challenge-${index + 1} brand-${brand.color}`} key={brand.name}>
                  <div className="brand-card-motion">
                    <div className="brand-challenge-copy">
                      <div className="brand-name-row"><span className="brand-mark-badge">{brand.mark}</span><h3>{brand.name}</h3></div>
                      <p className="brand-prompt">{prompts ? prompts[index] : brand.serial}</p>
                      <div className="brand-guide"><span>Guided by</span><strong>{brand.guide}</strong><small>{brand.role}</small></div>
                    </div>
                    <div className="brand-challenge-photo"><img src={brand.image} alt={`${brand.guide}, challenge mentor`} loading="lazy" /></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-9 flex justify-center">
          <button className="button-gradient flex min-h-[58px] min-w-[218px] items-center justify-center gap-3 rounded-full px-9 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(53,76,255,.25)]" type="button" onClick={() => setBrochureOpen(true)}>
            Brochure <span aria-hidden="true" className="text-xl">↓</span>
          </button>
        </div>
      </div>
      {brochureOpen && (
        <div className="brochure-backdrop" onClick={() => setBrochureOpen(false)}>
          <section className="brochure-preview" role="dialog" aria-modal="true" aria-labelledby="brochure-title" onClick={(event) => event.stopPropagation()}>
            <button className="brochure-close" type="button" aria-label="Close brochure preview" onClick={() => setBrochureOpen(false)}>×</button>
            <p className="mb-3 mt-0 text-xs font-bold uppercase tracking-[.18em] text-[#36e99c]">LIT · Creator Marketer</p>
            <h2 className="m-0 text-3xl font-semibold tracking-[-.05em]" id="brochure-title">The work speaks.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">Explore six challenge tracks built around real creator marketing work, from storytelling and brand building to research, performance, and campaigns.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <span className="brochure-fact"><b>Format</b>Offline</span>
              <span className="brochure-fact"><b>Duration</b>12 + 3 months</span>
              <span className="brochure-fact"><b>Starts</b>March 2027</span>
              <span className="brochure-fact"><b>Focus</b>Real brand briefs</span>
            </div>
            <button className="mt-7 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10" type="button" onClick={() => setBrochureOpen(false)}>Close preview</button>
          </section>
        </div>
      )}
    </section>
  )
}
