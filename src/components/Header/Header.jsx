import { useState } from "react";
import "./Header.css";
import LitLogo from '../../assets/images/lit20logo.avif'

const links = ["Why LIT", "Placements", "Stories", "About"];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="site-header sticky top-0 z-[5] flex h-[84px] items-center gap-[clamp(35px,5vw,92px)] border-b border-white/10 bg-[#0b0c0c]/95 px-[var(--site-page-gutter)] backdrop-blur-[16px] max-[900px]:h-[72px] max-[900px]:justify-between">
            <a
                className="brand-mark flex shrink-0 items-center gap-[10px] text-[#f7f7f2] no-underline"
                href="#top"
                aria-label="LIT home"
            >
                <img src={LitLogo} alt="LIT" className="w-10"/>
            </a>
            <button
                className="menu-toggle hidden size-[42px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 bg-transparent max-[900px]:flex"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
            </button>
            <nav
                className={`header-nav hidden flex-1 items-center justify-between gap-5 min-[901px]:flex ${menuOpen ? "max-[900px]:absolute max-[900px]:left-0 max-[900px]:right-0 max-[900px]:top-[72px] max-[900px]:z-10 max-[900px]:flex max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:border-b max-[900px]:border-white/10 max-[900px]:bg-[#0c0d0d] max-[900px]:px-[var(--site-page-gutter)] max-[900px]:pb-7 max-[900px]:pt-6" : ""}`}
                aria-label="Main navigation"
            >
                <div className="nav-links flex items-center gap-[clamp(18px,2.4vw,38px)] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-0">
                    {links.map((link) => (
                        <a
                            className="py-3.5 text-[16px] font-bold tracking-[.07em] text-[#b9bbb8] no-underline transition-colors hover:text-white max-[900px]:border-b max-[900px]:border-white/10 uppercase"
                            key={link}
                            href="#learn"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <div className="nav-actions flex items-center gap-[9px] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-[10px] max-[900px]:pt-[18px]">
                    <a
                        className="nav-program flex h-[42px] items-center gap-[10px] rounded-full border border-white/15 px-[18px] text-[11px] font-bold tracking-[.07em] text-white no-underline"
                        href="#programs"
                    >
                        <span className="program-grid">
                            <i />
                            <i />
                            <i />
                            <i />
                        </span>
                        Programs <span className="chevron">⌄</span>
                    </a>
                    <a
                        className="nav-login flex h-[42px] items-center gap-[10px] rounded-full border border-white/15 px-[18px] text-[16px] font-bold tracking-[.07em] text-[#b9bbb8] no-underline max-[900px]:justify-center uppercase"
                        href="#login"
                    >
                        Login
                    </a>
                    <a
                        className="button-gradient nav-cta flex h-[42px] items-center justify-center gap-[13px] rounded-full px-[22px] text-[11px] font-bold tracking-[.07em] text-white no-underline"
                        href="#enquire"
                    >
                        Enquire now <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}
