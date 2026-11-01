import { useEffect, useRef, useState } from "react";
import "./Header.css";
import LitLogo from "../../assets/images/lit20logo.avif";

const links = ["Why LIT", "Placements", "Stories", "About"];
const programs = [
    {
        title: "Creator Marketer",
        duration: "12+3 mo.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=85",
        color: "from-fuchsia-700/70",
    },
    {
        title: "CreatorPreneur",
        duration: "24+6+6 mo.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
        color: "from-emerald-700/70",
    },
    {
        title: "Next Gen Business",
        duration: "24+6+6 mo.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85",
        color: "from-cyan-800/70",
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const programsRef = useRef(null);

    useEffect(() => {
        if (!programsOpen) return undefined;

        const closeOnOutsideClick = (event) => {
            if (!programsRef.current?.contains(event.target))
                setProgramsOpen(false);
        };
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setProgramsOpen(false);
        };

        document.addEventListener("pointerdown", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
        return () => {
            document.removeEventListener("pointerdown", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [programsOpen]);

    return (
        <header className="site-header sticky top-0 z-[1000] -mb-[84px] flex h-[84px] w-full items-center gap-[clamp(35px,5vw,92px)] border-b border-white/10 bg-[#0b0c0c] px-[var(--site-page-gutter)] max-[900px]:h-[72px] max-[900px]:-mb-[72px] max-[900px]:justify-between">
            <a
                className="brand-mark flex shrink-0 items-center gap-[10px] text-[#f7f7f2] no-underline"
                href="#top"
                aria-label="LIT home"
            >
                <img src={LitLogo} alt="LIT" className="w-7 sm:w-10" />
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
                            className="py-3.5 text-[15px] font-medium tracking-[.07em] text-gray-300 no-underline transition-colors hover:text-white max-[900px]:border-b max-[900px]:border-white/10 uppercase"
                            key={link}
                            href="#learn"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <div className="nav-actions flex items-center gap-[9px] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-[10px] max-[900px]:pt-[18px]">
                    <div
                        className="relative max-[900px]:w-full"
                        ref={programsRef}
                    >
                        <button
                            className={`nav-program flex h-[42px] items-center justify-center gap-3 rounded-full border px-[18px] text-[15px] uppercase font-bold tracking-[.02em] text-white transition-colors max-[900px]:h-[42px] cursor-pointer max-[900px]:w-full max-[900px]:justify-center ${programsOpen ? "border-white/20 bg-white/[.04]" : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[.035]"}`}
                            type="button"
                            aria-expanded={programsOpen}
                            aria-controls="programs-dropdown"
                            onClick={() => setProgramsOpen((open) => !open)}
                        >
                            <span className="program-grid" aria-hidden="true">
                                <i />
                                <i />
                                <i />
                                <i />
                            </span>
                            Programs
                            <span
                                className={`ml-1 text-[16px] leading-none transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                                aria-hidden="true"
                            >
                                ⌃
                            </span>
                        </button>
                        {programsOpen && (
                            <div
                                className="absolute right-0 top-full z-[60] mt-2 grid w-[min(960px,calc(100vw-40px))] grid-cols-3 gap-3 rounded-[20px] border border-white/15 bg-[#0b0c0c]/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,.65)] backdrop-blur-xl max-[900px]:static max-[900px]:mt-3 max-[900px]:w-full max-[900px]:grid-cols-1 max-[900px]:rounded-[16px] max-[900px]:p-2"
                                id="programs-dropdown"
                                role="region"
                                aria-label="Program links"
                            >
                                {programs.map((program) => (
                                    <a
                                        className="group relative flex h-[300px] min-w-0 flex-col justify-between overflow-hidden rounded-[18px] border border-white/15 bg-[#17151b] p-4 text-white no-underline transition duration-300 hover:-translate-y-1 hover:border-white/30 max-[900px]:h-[112px] max-[900px]:flex-row max-[900px]:items-end"
                                        href="#contact-form"
                                        key={program.title}
                                        onClick={() => {
                                            setProgramsOpen(false);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        <img
                                            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            src={program.image}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={`absolute inset-0 bg-gradient-to-b ${program.color} via-black/10 to-black/95`}
                                            aria-hidden="true"
                                        />
                                        <span className="relative z-[1] w-fit rounded-[12px] bg-white/85 px-3 py-2 text-xs font-extrabold text-[#15121a] backdrop-blur max-[900px]:self-start">
                                            {program.duration}
                                        </span>
                                        <span className="relative z-[1]">
                                            <span className="block text-[clamp(18px,1.45vw,24px)] font-bold leading-tight tracking-[-.04em]">
                                                {program.title}
                                            </span>
                                            <span className="mt-0.5 block font-serif text-[21px] italic leading-tight text-white/90">
                                                Program
                                            </span>
                                        </span>
                                        <span
                                            className="absolute right-3 top-3 z-[1] grid h-10 w-10 place-items-center rounded-full border border-black/50 bg-white/50 text-xl text-white shadow-sm backdrop-blur transition group-hover:rotate-45 group-hover:bg-white/70 max-[900px]:hidden"
                                            aria-hidden="true"
                                        >
                                            ↗
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a
                        className="nav-login flex h-[42px] items-center gap-[10px] rounded-full border border-white/15 px-[18px] text-[16px] font-bold tracking-[.07em] text-[#b9bbb8] no-underline max-[900px]:justify-center uppercase"
                        href="#login"
                    >
                        Login
                    </a>
                    <a
                        className="button-gradient nav-cta flex h-[42px] items-center justify-center gap-[12px] rounded-full px-[18px] text-[15px] uppercase font-bold tracking-[.07em] text-white no-underline"
                        href="#enquire"
                    >
                        Enquire now <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}
