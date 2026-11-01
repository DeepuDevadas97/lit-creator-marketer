import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NextChallengeSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        if (
            !section ||
            !text ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return undefined;
        }

        const context = gsap.context(() => {
            gsap.fromTo(
                text,
                { x: 0 },
                {
                    x: () => -Math.max(0, text.scrollWidth - section.clientWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        end: "bottom center",
                        scrub: 0.7,
                        invalidateOnRefresh: true,
                        refreshPriority: 1,
                    },
                },
            );
            requestAnimationFrame(() => ScrollTrigger.refresh());
        }, section);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex h-[100vh] min-h-[100vh] items-center overflow-hidden bg-[#0b0c0c] bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:32px_32px] py-20 text-white max-[600px]:py-16"
            aria-label="So, you are ready for the next challenge?"
        >
            <p
                ref={textRef}
                className="m-0 w-max shrink-0 whitespace-nowrap px-[2.5vw] text-[clamp(64px,13.5vw,250px)] font-bold leading-[.9] tracking-[-.07em] motion-reduce:w-full motion-reduce:shrink motion-reduce:whitespace-normal motion-reduce:px-5 motion-reduce:text-center max-[600px]:text-[clamp(52px,13vw,88px)]"
                aria-hidden="true"
            >
                So, you are ready for the next challenge?
            </p>
        </section>
    );
}
