import { useState } from 'react'
import './Header.css'

const links = ['Why LIT', 'Placements', 'Stories', 'About']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="LIT home"><span className="brand-symbol"><i /><i /><i /><i /><i /></span><span className="brand-word">LIT<span>.</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <div className="nav-links">{links.map((link) => <a key={link} href="#learn" onClick={() => setMenuOpen(false)}>{link}</a>)}</div>
        <div className="nav-actions"><a className="nav-program" href="#programs"><span className="program-grid"><i /><i /><i /><i /></span>Programs <span className="chevron">⌄</span></a><a className="nav-login" href="#login">Login</a><a className="button-gradient nav-cta" href="#enquire">Enquire now <span aria-hidden="true">↗</span></a></div>
      </nav>
    </header>
  )
}
