import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './RolesSection.css'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    title: 'Campaign Manager',
    description: 'Plans, executes, and optimizes multi-channel campaigns end-to-end, ensuring budgets, timelines, and outcomes align with business goals.',
    color: '#ff5a00', icon: 'campaign',
  },
  {
    title: 'Community Manager',
    description: 'Builds and nurtures online and offline communities, driving engagement, loyalty, and advocacy around a brand.',
    color: '#7a00ff', icon: 'community',
  },
  {
    title: 'Content Strategist',
    description: 'Develops content roadmaps that align with funnel stages, ensuring messaging consistency and measurable impact across platforms.',
    color: '#ff5a00', icon: 'strategy',
  },
  {
    title: 'Creative Producer',
    description: 'Manages projects from concept to delivery, coordinating teams to create impactful content that aligns with the brand’s vision.',
    color: '#2ecb80', icon: 'producer',
  },
  {
    title: 'Performance Marketer',
    description: 'Runs data-driven ad campaigns across paid channels, constantly optimizing for ROI, conversions, and scalable growth.',
    color: '#f03bd6', icon: 'performance',
  },
  {
    title: 'Brand Storyteller',
    description: 'Crafts narratives that humanize the brand, creating emotional connections that strengthen awareness and loyalty.',
    color: '#00d2a2', icon: 'story',
  },
  {
    title: 'Social Media Manager',
    description: 'Manages brand presence on social media by curating content and implementing engagement strategies to enhance audience impact.',
    color: '#ed3bd4', icon: 'social',
  },
  {
    title: 'Content Creator',
    description: 'Produces engaging, high-quality content (video, blogs, reels, etc.) tailored to drive reach, engagement, and conversions.',
    color: '#7100f5', icon: 'creator',
  },
]

function RoleIcon({ type }) {
  if (type === 'community') {
    return <span className="role-icon role-icon-community" aria-hidden="true"><svg viewBox="0 0 64 64"><circle cx="32" cy="23" r="9"/><path d="M14 50c1-11 8-17 18-17s17 6 18 17H14Z"/></svg></span>
  }
  if (type === 'strategy') {
    return <span className="role-icon role-icon-strategy" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 2 38 16 51 7 48 22 64 22 52 32 64 42 48 42 51 57 38 48 32 62 26 48 13 57 16 42 0 42 12 32 0 22 16 22 13 7 26 16Z"/><path className="role-cutout" d="M24 23 32 32 24 41V23Zm16 0v18L32 32l8-9ZM32 14l-8 9 8 9 8-9-8-9Z"/></svg></span>
  }
  if (type === 'producer') {
    return <span className="role-icon role-icon-producer" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 2 37 7 44 4 47 11 55 12 55 20 62 24 59 32 62 40 55 44 55 52 47 53 44 60 37 57 32 62 27 57 20 60 17 53 9 52 9 44 2 40 5 32 2 24 9 20 9 12 17 11 20 4 27 7Z"/><path className="role-face" d="M20 27c2-7 7-11 12-11s10 4 12 11l-12 5-12-5Zm-1 8h26c-2 10-7 15-13 15s-11-5-13-15Z"/></svg></span>
  }
  if (type === 'performance') {
    return <span className="role-icon role-icon-performance" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M10 50V27h10v23H10Zm17 0V17h10v33H27Zm17 0V7h10v43H44Z"/></svg></span>
  }
  if (type === 'story') {
    return <span className="role-icon role-icon-story" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M29 4h6v23L51 11l4 4-16 16h23v6H39l16 16-4 4-16-16v23h-6V41L13 57l-4-4 16-16H2v-6h23L9 15l4-4 16 16V4Z"/></svg></span>
  }
  if (type === 'social') {
    return <span className="role-icon role-icon-social" aria-hidden="true"><svg viewBox="0 0 64 64"><rect x="5" y="10" width="54" height="13" rx="6.5"/><rect x="5" y="27" width="42" height="13" rx="6.5"/><rect x="5" y="44" width="32" height="13" rx="6.5"/><circle cx="48" cy="16.5" r="7"/><circle cx="16" cy="33.5" r="7"/><circle cx="32" cy="50.5" r="7"/></svg></span>
  }
  if (type === 'creator') {
    return <span className="role-icon role-icon-creator" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M2 32S13 14 32 14s30 18 30 18-11 18-30 18S2 32 2 32Z"/><circle cx="32" cy="32" r="10"/></svg></span>
  }
  return <span className="role-icon role-icon-campaign" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M9 9h46v46H9z"/><path className="role-ticket" d="M3 15c4 0 6-3 6-6h6v46H9c0-4-2-6-6-6V15Zm58 0c-4 0-6-3-6-6h-6v46h6c0-4 2-6 6-6V15Z"/><path className="role-flower" d="M32 17c3 0 4 4 4 7 2-2 5-4 7-2s0 5-2 7c3 0 7 1 7 4s-4 4-7 4c2 2 4 5 2 7s-5 0-7-2c0 3-1 7-4 7s-4-4-4-7c-2 2-5 4-7 2s0-5 2-7c-3 0-7-1-7-4s4-4 7-4c-2-2-4-5-2-7s5 0 7 2c0-3 1-7 4-7Z"/></svg></span>
}

export default function RolesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo('.role-card',
        { autoAlpha: 0, y: 36, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.roles-grid', start: 'top 82%', once: true },
        },
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section className="roles-section" ref={sectionRef} aria-labelledby="roles-title">
      <div className="roles-container">
        <h2 id="roles-title">Roles You’ll <em>Conquer</em></h2>
        <div className="roles-grid">
          {roles.map((role) => (
            <article className="role-card" key={role.title} style={{ '--role-color': role.color }}>
              <RoleIcon type={role.icon} />
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
