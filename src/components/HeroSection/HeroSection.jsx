import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Header/Header";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const partners = [
    "ATHER",
    "zepto",
    "PHILIPS",
    "WILD",
    "◉ SBI",
    "WTF!?",
    "ZERO1⚡",
];
const CIRCLE_LENGTH = 703.72;

export default function HeroSection() {
    const root = useRef(null);
    const loader = useRef(null);
    const landing = useRef(null);
    const visual = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const number = loader.current.querySelector(".loader-count");
            const ring = loader.current.querySelector(".loader-ring-progress");

            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                gsap.set(loader.current, { display: "none" });
                gsap.set(landing.current, { marginTop: 0 });
                return;
            }

            gsap.set(".site-header", { autoAlpha: 0, y: -24 });
            gsap.set(
                ".hero-copy > :not(h1), .applications-pill, .play-button, .visual-caption > *, .visual-index",
                { autoAlpha: 0, y: 24 },
            );
            gsap.set(".hero-visual", {
                autoAlpha: 0,
                y: 24,
                scale: 0.96,
                clipPath: "inset(12% 0 12% 0 round 22px)",
            });
            gsap.set(".visual-photo", { scale: 1.08 });

            const reveal = gsap
                .timeline({ paused: true, defaults: { ease: "power3.out" } })
                .to(".site-header", { autoAlpha: 1, y: 0, duration: 0.7 }, 0)
                .to(".eyebrow", { autoAlpha: 1, y: 0, duration: 0.55 }, 0.08)
                .to(
                    ".hero-description, .hero-tags, .hero-cta, .diploma-note, .partner-strip",
                    { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.09 },
                    0.28,
                )
                .to(
                    ".hero-visual",
                    {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        clipPath: "inset(0% 0 0% 0 round 22px)",
                        duration: 1.05,
                    },
                    0.02,
                )
                .to(".visual-photo", { scale: 1, duration: 1.4 }, 0.02)
                .to(
                    ".applications-pill, .play-button",
                    {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                    },
                    0.55,
                )
                .to(
                    ".visual-caption > *, .visual-index",
                    { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.1 },
                    0.68,
                );
            reveal.timeScale(reveal.duration() / 0.6);

            const meter = { progress: 0 };
            const scrollAnimation = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: loader.current,
                    start: "top top",
                    end: () => `+=${loader.current.offsetHeight * 4}`,
                    pin: true,
                    scrub: 1.8,
                    invalidateOnRefresh: true,
                },
            });
            scrollAnimation
                .to(
                    meter,
                    {
                        progress: 1,
                        duration: 1,
                        onUpdate: () => {
                            const percentage = Math.round(meter.progress * 100);
                            number.textContent = `${percentage}%`;
                            ring.style.strokeDashoffset = `${CIRCLE_LENGTH * (1 - meter.progress)}`;
                            loader.current.setAttribute(
                                "aria-valuenow",
                                percentage,
                            );
                        },
                    },
                    0,
                )
                .to(
                    loader.current,
                    {
                        backgroundColor: "#f7f7f2",
                        duration: 0.6,
                        ease: "power2.inOut",
                    },
                    1,
                )
                .to(
                    loader.current.querySelector(".scroll-loader-content"),
                    { autoAlpha: 0, duration: 0.4 },
                    1,
                )
                .to(
                    ".loader-side-note, .loader-bottom-note",
                    { autoAlpha: 0, duration: 0.35 },
                    1,
                )
                .to(
                    loader.current,
                    {
                        clipPath: "circle(0% at 50% 50%)",
                        duration: 0.8,
                        ease: "none",
                    },
                    1.35,
                )
                .add(reveal, 1.4);
            reveal.paused(false);

            gsap.to(".visual-photo", {
                yPercent: 14,
                ease: "none",
                scrollTrigger: {
                    trigger: visual.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <div className="hero-experience relative" ref={root}>
            <section
                className="scroll-loader relative grid h-screen h-[100svh] min-h-0 place-items-center overflow-hidden bg-[#090a0a] text-[#f7f7f2] [isolation:isolate]"
                ref={loader}
                role="progressbar"
                aria-label="Scroll progress to enter LIT"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0"
            >
                <div className="loader-grid" />
                <div className="loader-glow" />
                <div className="scroll-loader-content">
                    <span className="loader-kicker">
                        <i /> An experience by LIT
                    </span>
                    <span className="loader-mark">
                        LIT<span>.</span>
                    </span>
                    <span className="loader-word">
                        MAKING THE NEXT GENERATION
                    </span>
                    <div className="loader-meter" aria-hidden="true">
                        <svg viewBox="0 0 260 260" focusable="false">
                            <circle
                                className="loader-ring-track"
                                cx="130"
                                cy="130"
                                r="112"
                            />
                            <circle
                                className="loader-ring-progress"
                                cx="130"
                                cy="130"
                                r="112"
                            />
                        </svg>
                        <span className="loader-count">0%</span>
                    </div>
                    <span className="loader-prompt">
                        <i className="scroll-mouse" /> Scroll down to enter
                    </span>
                </div>
                <span className="loader-side-note">
                    CREATIVITY IN MOTION <b>✳</b> EST. LIT
                </span>
                <span className="loader-bottom-note">
                    SCROLL TO BEGIN <i>↓</i>
                </span>
            </section>

            <div
                className="landing-screen min-h-[100svh] scroll-mt-0"
                ref={landing}
            >
                <Header />
                <section
                    className="hero-shell relative min-h-[calc(100svh-84px)] overflow-hidden bg-[#0b0c0c] px-[var(--site-page-gutter)] pb-[30px] pt-[clamp(58px,7vw,108px)] max-[900px]:min-h-[calc(100svh-72px)] max-[900px]:pt-[55px] max-[900px]:px-5 max-[540px]:pt-[42px]"
                    id="top"
                >
                    <div className="hero-wrap relative mx-auto grid w-full max-w-[var(--site-container-width)] grid-cols-[minmax(0,.94fr)_minmax(0,1.06fr)] items-center gap-[clamp(38px,6vw,100px)] max-[900px]:grid-cols-1 max-[900px]:gap-10">
                        <div className="hero-copy relative z-[1] min-w-0 text-[#f6f6f2]">
                            <p className="eyebrow">
                                <span className="eyebrow-dot" /> The next
                                generation of marketing starts here
                            </p>
                            <h1>
                                <span className="title-line-wrap">
                                    <span className="title-line">
                                        <span className="serif-word">
                                            Creator
                                        </span>{" "}
                                        Marketer
                                    </span>
                                </span>
                                <span className="title-line-wrap">
                                    <span className="title-line">
                                        Program
                                        <span className="title-period">.</span>
                                    </span>
                                </span>
                            </h1>
                            <p className="hero-description">
                                Learn creator marketing by doing the work — on
                                real briefs, with the brands shaping culture.
                            </p>
                            <div className="hero-tags my-6 flex flex-wrap gap-2">
                                <span className="tag tag-violet">
                                    <i>⌖</i> Offline
                                </span>
                                <span className="tag tag-green">
                                    <i>◷</i> 12 + 3 months
                                </span>
                                <span className="tag tag-orange">
                                    <i>▦</i> March 2027
                                </span>
                            </div>
                            <a
                                href="#enquire"
                                className="button-gradient hero-cta rounded-full !py-3.5"
                            >
                                Enquire now <span>↗</span>
                            </a>
                            <p className="diploma-note">
                                Choose the <strong>Professional Diploma</strong>{" "}
                                pathway and earn a UGC accredited qualification
                                alongside your Creator Marketer program.
                            </p>
                            <div className="partner-strip w-full" id="learn">
                                <p>Learn by working with</p>
                                <div className="partner-marquee w-full max-w-[570px] overflow-hidden max-[900px]:max-w-full" role="region" aria-label="Brands LIT students work with">
                                    <div className="partner-logos flex w-max animate-brand-marquee items-center">
                                        {[0, 1].map((copy) => (
                                            <div className="partner-group flex shrink-0 items-center gap-8" key={copy} aria-hidden={copy === 1}>
                                                {partners.map((partner, index) => (
                                                    <span className={`partner-logo partner-${index}`} key={`${copy}-${partner}`}>
                                                        {partner}
                                                    </span>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual" ref={visual}>
                            <div
                                className="visual-photo"
                                role="img"
                                aria-label="A group of students celebrating together"
                            />
                            <div className="visual-wash" />
                            <div className="applications-pill">
                                <span className="spin-mark">✳</span>{" "}
                                Applications open
                            </div>
                            <a
                                className="play-button"
                                href="#story"
                                aria-label="Watch the student story"
                            >
                                <span />
                            </a>
                            <div className="visual-caption">
                                <span className="caption-label">
                                    <i>✦</i> The LIT experience
                                </span>
                                <h2>
                                    Learn loud.
                                    <br />
                                    Make things happen.
                                </h2>
                                <a href="#story">
                                    Meet the community <span>↗</span>
                                </a>
                            </div>
                            <div className="visual-index">
                                01 <span /> 03
                            </div>
                            <span className="visual-orbit orbit-one" />
                            <span className="visual-orbit orbit-two" />
                        </div>
                    </div>
                    <div className="hero-footer mx-auto mt-[clamp(35px,5vw,65px)] flex max-w-[var(--site-container-width)] flex-wrap justify-between gap-x-5 gap-y-2 border-t border-white/15 pt-[15px] text-[9px] uppercase tracking-[.17em] text-[#8c8e89] max-[900px]:mt-8 max-[540px]:text-[8px] max-[540px]:tracking-[.1em]">
                        <span>Made for the makers</span>
                        <span>
                            Scroll to explore <i>↓</i>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
}
