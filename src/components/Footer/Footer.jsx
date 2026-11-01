import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
    ["Why LIT", "#top"],
    ["Placements", "#roles-title"],
    ["Blog", "#mentor-title"],
    ["Partner", "#learn"],
    ["Contact", "#contact-form"],
];

export default function Footer() {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const footer = footerRef.current;
        if (!footer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return undefined;
        }

        const context = gsap.context(() => {
            ScrollTrigger.batch(".footer-fade-up", {
                start: "top 94%",
                once: true,
                interval: 0.1,
                batchMax: 4,
                onEnter: (elements) => {
                    gsap.fromTo(
                        elements,
                        { autoAlpha: 0, y: 24 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.7,
                            stagger: 0.1,
                            ease: "power3.out",
                            clearProps: "transform",
                            overwrite: true,
                        },
                    );
                },
            });

            gsap.fromTo(
                ".footer-animated-svg",
                { autoAlpha: 0, scale: 0.55, rotation: -70 },
                {
                    autoAlpha: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".footer-animated-svg",
                        start: "top 92%",
                        once: true,
                    },
                },
            );
        }, footer);

        return () => context.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#0b0c0c] bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:32px_32px] px-[var(--site-page-gutter)] pb-6 pt-5 text-white max-[900px]:px-5 max-[600px]:px-4">
            <div className="mx-auto w-full max-w-[var(--site-container-width)]">
                <div className="grid grid-cols-[minmax(0,1.8fr)_minmax(240px,.6fr)] items-stretch gap-5 max-[900px]:grid-cols-1 max-[900px]:gap-4">
                    <div className="relative flex min-h-[260px] flex-col justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(115deg,#102e2b_0%,#12243a_53%,#201334_100%)] p-[clamp(24px,3.2vw,46px)] max-[600px]:min-h-[230px] max-[600px]:rounded-[22px] max-[600px]:p-6">
                        <div className="pointer-events-none absolute -right-8 -top-16 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" aria-hidden="true" />
                        <svg className="footer-animated-svg pointer-events-none absolute right-8 top-1/2 h-24 w-24 -translate-y-1/2 text-fuchsia-200/30 max-[600px]:right-5 max-[600px]:h-16 max-[600px]:w-16" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                            <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
                            <path d="M50 4v20m0 52v20M4 50h20m52 0h20M17.5 17.5l14 14m37 37 14 14m0-65-14 14m-37 37-14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="5" fill="currentColor" />
                        </svg>
                        <div className="footer-fade-up relative z-[1] flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-white/65">
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-lg font-black tracking-normal text-emerald-300">L</span>
                            LIT School
                        </div>
                        <h2 className="relative z-[1] mt-6 max-w-[900px] text-[clamp(38px,4.4vw,68px)] font-bold leading-[.98] tracking-[-.065em] max-[600px]:mt-5 max-[600px]:text-[clamp(34px,9vw,48px)]">
                            <span className="footer-fade-up block">Learn. Innovate.</span>
                            <em className="footer-fade-up mt-2 block font-serif font-normal">Transform.</em>
                        </h2>
                        <div className="pointer-events-none absolute bottom-[-90px] right-[8%] h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
                        <div className="pointer-events-none absolute bottom-[-62px] right-[12%] h-40 w-40 rounded-full border border-fuchsia-300/15" aria-hidden="true" />
                    </div>

                    <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#151719] max-[900px]:min-h-[230px] max-[600px]:rounded-[22px]">
                        <iframe
                            className="absolute inset-0 h-full w-full border-0 brightness-[.68] contrast-[1.12] saturate-[.75]"
                            src="https://maps.google.com/maps?q=LIT%20School%2C%20New%20Campus%2C%2012a%2C%202nd%20Main%20Rd%2C%20Jayanagar%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Map showing LIT School in Jayanagar, Bengaluru"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <a
                            className="absolute bottom-3 right-3 z-10 rounded-full border border-white/15 bg-black/85 px-3.5 py-2 text-[11px] font-semibold text-white no-underline shadow-lg backdrop-blur transition hover:bg-black"
                            href="https://www.google.com/maps/search/?api=1&query=LIT%20School%2C%20New%20Campus%2C%2012a%2C%202nd%20Main%20Rd%2C%20Jayanagar%2C%20Bengaluru"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open in Maps ↗
                        </a>
                    </div>
                </div>

                <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-4 py-7 text-[clamp(13px,1vw,16px)] text-white/85 max-[700px]:flex-col max-[700px]:items-start max-[700px]:px-1 max-[700px]:py-6" aria-label="Footer navigation">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        {["Next Gen Business", "CreatorPreneur", "Creator Marketer"].map((label, index) => (
                            <span className="footer-fade-up inline-flex items-center gap-3" key={label}>
                                {index > 0 && <span className="text-white/35" aria-hidden="true">•</span>}
                                <a className="text-white/85 no-underline transition hover:text-white" href="#top">{label}</a>
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        {footerLinks.map(([label, href], index) => (
                            <span className="footer-fade-up inline-flex items-center gap-3" key={label}>
                                {index > 0 && <span className="text-white/35" aria-hidden="true">•</span>}
                                <a className="text-white/85 no-underline transition hover:text-white" href={href}>{label}</a>
                            </span>
                        ))}
                    </div>
                </nav>

                <div className="flex min-h-[74px] items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-[#19191b] px-[clamp(20px,3vw,42px)] py-5 text-[clamp(14px,1.1vw,18px)] max-[600px]:min-h-0 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2 max-[600px]:rounded-[16px]">
                    <p className="footer-fade-up m-0">© {new Date().getFullYear()} Disruptive Edu Pvt Ltd.</p>
                    <p className="footer-fade-up m-0 text-white/85">All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
