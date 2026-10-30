import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AudienceSection.css'

gsap.registerPlugin(ScrollTrigger)

const audiences = [
  {
    title: 'Fresh Graduates',
    description: 'Sitting on a degree with no real skills to show for it, and interviews going nowhere.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85',
    alt: 'Graduates celebrating together after finishing college',
    color: 'amber',
    imageFirst: true,
  },
  {
    intro: 'Still in college, want to graduate with a job already lined up.',
    title: 'College Students',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    alt: 'Students collaborating around a table',
    color: 'violet',
    imageFirst: false,
  },
  {
    title: 'Content Creators',
    description: 'Posting consistently but earning nothing — no strategy, no brand deals, no direction.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85',
    alt: 'Creator filming and reviewing content with a team',
    color: 'pink',
    imageFirst: true,
  },
  {
    intro: 'Done with their current field, want entry into marketing but have zero proof of work.',
    title: 'Career Transitioners',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85',
    alt: 'Colleagues planning ideas together on a wall',
    color: 'teal',
    imageFirst: false,
  },
]

export default function AudienceSection() {
  const section = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo('.audience-card',
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.audience-grid',
            start: 'top 82%',
            once: true,
          },
        },
      )

      gsap.utils.toArray('.audience-image img').forEach((image) => {
        gsap.fromTo(image,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section className="audience-section relative overflow-hidden px-[var(--site-page-gutter)] py-24 text-[#f7f7f2] max-[900px]:px-5 max-[600px]:py-16" ref={section} aria-labelledby="audience-title">
      <div className="relative z-[1] mx-auto w-full max-w-[var(--site-container-width)]">
        <h2 className="mb-10 text-center text-[clamp(18px,1.35vw,25px)] font-medium uppercase tracking-[.14em] max-[600px]:mb-7" id="audience-title">
          Who this course is for
        </h2>
        <div className="audience-grid grid grid-cols-4 gap-3.5 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-4">
          {audiences.map((audience, index) => {
            const image = (
              <div className={`audience-image audience-image-${audience.color}`}>
                <img src={audience.image} alt={audience.alt} loading="lazy" />
                <div className="audience-image-caption">
                  <span className="audience-arrow" aria-hidden="true">↗</span>
                  <h3>{audience.title}</h3>
                </div>
              </div>
            )

            const copy = (
              <div className="audience-copy">
                {audience.intro && <p className="audience-intro">{audience.intro}</p>}
                {audience.description && <p className="audience-description">{audience.description}</p>}
              </div>
            )

            return (
              <article className={`audience-card audience-card-${index + 1}`} key={audience.title}>
                {audience.imageFirst ? image : copy}
                {audience.imageFirst ? copy : image}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
