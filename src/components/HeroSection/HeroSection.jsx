import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from "react-dom";
import EventVideo from "../../assets/videos/event-video1.mp4";
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
    const playButton = useRef(null);
    const closeButton = useRef(null);
    const [videoOpen, setVideoOpen] = useState(false);

    useEffect(() => {
        if (!videoOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setVideoOpen(false);
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", closeOnEscape);
        closeButton.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", closeOnEscape);
            playButton.current?.focus();
        };
    }, [videoOpen]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const number = loader.current.querySelector(".loader-count");
            const ring = loader.current.querySelector(".loader-ring-progress");
            const siteHeader = document.querySelector(".site-header");

            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                gsap.set(loader.current, { display: "none" });
                gsap.set(landing.current, { marginTop: 0 });
                return;
            }

            const getCircleClip = (cover) => {
                const { width, height } = loader.current.getBoundingClientRect();
                const centerX = width / 2;
                const centerY = height / 2;
                const radius = cover
                    ? Math.ceil(Math.hypot(centerX, centerY))
                    : 0;
                return `circle(${radius}px at ${centerX}px ${centerY}px)`;
            };

            if (siteHeader)
                gsap.set(siteHeader, { autoAlpha: 0, y: -24, zIndex: 0 });
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
                .to(siteHeader, { autoAlpha: 1, y: 0, duration: 0.7 }, 0)
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
                .fromTo(
                    loader.current,
                    { clipPath: () => getCircleClip(true) },
                    {
                        clipPath: () => getCircleClip(false),
                        duration: 0.8,
                        ease: "none",
                    },
                    1.35,
                )
                .to(
                    loader.current,
                    { opacity: 0.8, duration: 0.8, ease: "none" },
                    1.35,
                )
                .add(reveal, 1.4);
            if (siteHeader)
                scrollAnimation.set(siteHeader, { zIndex: 1000 }, 2.15);
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
        <>
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
                    <div
                        className="h-[84px] max-[900px]:h-[72px]"
                        aria-hidden="true"
                    />
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
                                            <span className="serif-word playfair-display">
                                                Creator
                                            </span>{" "}
                                            Marketer
                                        </span>
                                    </span>
                                    <span className="title-line-wrap">
                                        <span className="title-line">
                                            Program
                                            <span className="title-period">
                                                .
                                            </span>
                                        </span>
                                    </span>
                                </h1>
                                <p className="hero-description">
                                    Learn creator marketing by doing the work —
                                    on real briefs, with the brands shaping
                                    culture.
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
                                    Choose the{" "}
                                    <strong>Professional Diploma</strong>{" "}
                                    pathway and earn a UGC accredited
                                    qualification alongside your Creator
                                    Marketer program.
                                </p>
                                <div
                                    className="partner-strip w-full"
                                    id="learn"
                                >
                                    <p>Learn by working with</p>
                                    <div
                                        className="partner-marquee w-full max-w-[570px] overflow-hidden max-[900px]:max-w-full"
                                        role="region"
                                        aria-label="Brands LIT students work with"
                                    >
                                        <div className="partner-logos flex w-max animate-brand-marquee items-center">
                                            {[0, 1].map((copy) => (
                                                <div
                                                    className="partner-group flex shrink-0 items-center gap-8"
                                                    key={copy}
                                                    aria-hidden={copy === 1}
                                                >
                                                    {partners.map(
                                                        (partner, index) => (
                                                            <span
                                                                className={`partner-logo partner-${index}`}
                                                                key={`${copy}-${partner}`}
                                                            >
                                                                {partner}
                                                            </span>
                                                        ),
                                                    )}
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
                                <button
                                    className="play-button"
                                    type="button"
                                    ref={playButton}
                                    aria-label="Watch the student story"
                                    onClick={() => setVideoOpen(true)}
                                >
                                    <span />
                                </button>
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
            {videoOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[2000] grid place-items-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
                        role="presentation"
                        onClick={() => setVideoOpen(false)}
                    >
                        <div
                            className="video-modal-dialog relative flex max-h-[calc(100dvh-2rem)] w-full max-w-[1280px] flex-col items-center overflow-hidden rounded-xl bg-black p-3 shadow-2xl sm:max-h-[calc(100dvh-4rem)] sm:p-4"
                            role="dialog"
                            aria-modal="true"
                            aria-label="The LIT experience video"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                ref={closeButton}
                                type="button"
                                className="video-modal-close cursor-pointer z-[1] grid size-12 shrink-0 place-items-center rounded-full border border-white/35 bg-black/70 text-3xl leading-none text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                aria-label="Close video"
                                onClick={() => setVideoOpen(false)}
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                            <video
                                className="mt-3 block max-h-[calc(100dvh-7rem)] w-full object-contain sm:max-h-[calc(100dvh-8rem)]"
                                src={EventVideo}
                                controls
                                autoPlay
                                playsInline
                                preload="metadata"
                            />
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
