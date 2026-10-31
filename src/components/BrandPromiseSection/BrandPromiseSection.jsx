import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventVideo from "../../assets/videos/event-video1.mp4";

import "./BrandPromiseSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function BrandPromiseSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return undefined;

        const context = gsap.context(() => {
            const words = gsap.utils.toArray(".promise-word-inner");
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            gsap.fromTo(
                words,
                { yPercent: 115, rotateX: -35, opacity: 0, filter: "blur(8px)" },
                {
                    yPercent: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 76%",
                        once: true,
                    },
                },
            );
        }, section);

        return () => context.revert();
    }, []);

    const word = (text, italic = false) => (
        <span className="promise-word" key={text}>
            <span className={`promise-word-inner${italic ? " font-serif font-normal italic" : ""}`}>
                {text}
            </span>
        </span>
    );

    return (
        <section className="bg-[#0b0c0c] px-[var(--site-page-gutter)] py-6 max-[900px]:px-5">
            <div ref={sectionRef} className="relative mx-auto flex min-h-[clamp(360px,52vw,720px)] w-full max-w-[var(--site-container-width)] items-end overflow-hidden rounded-[28px] bg-[#080b1c] max-[600px]:min-h-[420px] max-[600px]:rounded-[22px]">
                <video
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    src={EventVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,5,18,.84)_0%,rgba(7,8,26,.34)_44%,rgba(5,6,20,.12)_100%),linear-gradient(0deg,rgba(5,6,20,.55)_0%,transparent_55%)]"
                    aria-hidden="true"
                />
                <h2 className="relative z-[1] m-0 max-w-[850px] px-[clamp(28px,4vw,64px)] pb-[clamp(30px,4vw,64px)] text-[clamp(42px,5.2vw,82px)] font-bold leading-[.98] tracking-[-.055em] text-white max-[600px]:text-[clamp(40px,11vw,58px)]">
                    <span className="promise-line">
                        {word("Not")}{word("just", true)}{word("another", true)}
                    </span>
                    <span className="promise-line">
                        {word("Brick")}{word("in", true)}{word("the", true)}{word("wall", true)}
                    </span>
                </h2>
            </div>
        </section>
    );
}
