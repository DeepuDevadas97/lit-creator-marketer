import { useEffect, useRef } from 'react'
import './Testimonials2.css'

const mentors = [
  {
    name: 'Anushka Tyagi',
    role: 'Creator and creative director behind @zenushkascut. Co-Founder at Redlify',
    organization: 'REDFLIFY',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85',
    alt: 'Anushka Tyagi',
  },
  {
    name: 'Ashutosh Pratap Singh',
    role: 'Content Creator (Tech, Career, AI) | Founder @ Horus Media',
    organization: '◈ Horus Media',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85',
    alt: 'Ashutosh Pratap Singh',
  },
  {
    name: 'Sai Sethu',
    role: 'High-Ticket Lead generation with AI-Powered Content Systems | Storyteller',
    organization: 'bhanzu',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85',
    alt: 'Sai Sethu',
  },
  {
    name: 'Shahbaaz Mohammed',
    role: 'Web3 Community Strategist | Crypto Educator | Community Growth Strategist',
    organization: 'IIM INDORE',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85',
    alt: 'Shahbaaz Mohammed',
  },
  {
    name: 'Aaditya Sain',
    role: 'Brand, Content & Social Media Marketing Leader',
    organization: 'MICA · THE SCHOOL OF IDEAS',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=700&q=85',
    alt: 'Aaditya Sain',
  },
  {
    name: 'Sanjay Singha',
    role: 'Tech Content Creator | Filmmaker | Editor',
    organization: 'YAAS!',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=700&q=85',
    alt: 'Sanjay Singha',
  },
]

export default function Testimonials2() {
  const rowRef = useRef(null)
  const hoverRef = useRef(false)

  useEffect(() => {
    const row = rowRef.current
    if (!row) return undefined

    let frameId
    let previousTime = 0
    const animate = (time) => {
      if (previousTime) {
        const seconds = Math.min((time - previousTime) / 1000, 0.05)
        const loopPoint = row.children[mentors.length]?.offsetLeft - row.children[0]?.offsetLeft
        if (loopPoint > 0) {
          const speed = hoverRef.current ? 76 : 30
          row.scrollLeft += speed * seconds
          if (row.scrollLeft >= loopPoint) row.scrollLeft -= loopPoint
        }
      }
      previousTime = time
      frameId = window.requestAnimationFrame(animate)
    }
    frameId = window.requestAnimationFrame(animate)

    const setHoverSpeed = () => { hoverRef.current = true }
    const resetHoverSpeed = () => { hoverRef.current = false }
    row.addEventListener('mouseenter', setHoverSpeed)
    row.addEventListener('mouseleave', resetHoverSpeed)
    row.addEventListener('focusin', setHoverSpeed)
    row.addEventListener('focusout', resetHoverSpeed)

    // Let vertical wheel gestures move the mentor rail horizontally. Capture
    // the event here so the page-level Lenis listener doesn't consume it.
    const handleWheel = (event) => {
      if (row.scrollWidth <= row.clientWidth) return
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      if (!delta) return
      event.preventDefault()
      event.stopPropagation()
      row.scrollLeft += delta
    }

    let pointerStart = 0
    let scrollStart = 0
    let dragging = false
    const handlePointerDown = (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      pointerStart = event.clientX
      scrollStart = row.scrollLeft
      dragging = true
      row.classList.add('is-dragging')
      row.setPointerCapture?.(event.pointerId)
    }
    const handlePointerMove = (event) => {
      if (!dragging) return
      row.scrollLeft = scrollStart - (event.clientX - pointerStart)
    }
    const stopDragging = () => {
      dragging = false
      row.classList.remove('is-dragging')
    }
    const handleKeyDown = (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
      event.preventDefault()
      row.scrollBy({ left: event.key === 'ArrowRight' ? 292 : -292, behavior: 'smooth' })
    }

    row.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    row.addEventListener('pointerdown', handlePointerDown)
    row.addEventListener('pointermove', handlePointerMove)
    row.addEventListener('pointerup', stopDragging)
    row.addEventListener('pointercancel', stopDragging)
    row.addEventListener('lostpointercapture', stopDragging)
    row.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(frameId)
      row.removeEventListener('mouseenter', setHoverSpeed)
      row.removeEventListener('mouseleave', resetHoverSpeed)
      row.removeEventListener('focusin', setHoverSpeed)
      row.removeEventListener('focusout', resetHoverSpeed)
      row.removeEventListener('wheel', handleWheel, true)
      row.removeEventListener('pointerdown', handlePointerDown)
      row.removeEventListener('pointermove', handlePointerMove)
      row.removeEventListener('pointerup', stopDragging)
      row.removeEventListener('pointercancel', stopDragging)
      row.removeEventListener('lostpointercapture', stopDragging)
      row.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section className="mentor-section" aria-labelledby="mentor-title">
      <div className="mentor-heading">
        <h2 id="mentor-title">Learn from the <em>Industry</em></h2>
        <p>LIT isn't run by academics, it's driven by the creators, marketers, and founders shaping the future. Our<br className="mentor-desktop-break" /> mentors come from the trenches, not textbooks.</p>
      </div>

      <div className="mentor-row" ref={rowRef} aria-label="LIT mentors" data-lenis-prevent-wheel tabIndex={0}>
        {[...mentors, ...mentors].map((mentor, index) => (
          <article className="mentor-card" key={`${mentor.name}-${index}`} aria-hidden={index >= mentors.length || undefined}>
            <img className="mentor-photo" src={mentor.image} alt={mentor.alt} loading="lazy" />
            <span className="mentor-arrow" aria-hidden="true">↗</span>
            <div className="mentor-info">
              <span className="mentor-accent" />
              <h3>{mentor.name}</h3>
              <p>{mentor.role}</p>
            </div>
            <div className="mentor-organization">{mentor.organization}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
