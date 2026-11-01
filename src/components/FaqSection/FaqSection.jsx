import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const questions = [
    {
        question: "How is The LIT School different from other colleges?",
        answer: "Unlike traditional colleges that focus on theory and outdated syllabi, The LIT School is built around real-world challenges. Students work directly with brands, solve 50–100+ real briefs, and learn from industry leaders.",
    },
    {
        question: "What is the Creator Marketer Programme?",
        answer: "The Creator Marketer Programme combines modern marketing skills such as content creation, community management, brand building, performance marketing, and campaign management, followed by an internship.",
    },
    {
        question: "How long is the Creator Marketer programme?",
        answer: "The programme runs for 12 months, followed by a 3-month internship.",
    },
    {
        question: "Is the programme conducted online or offline?",
        answer: "For the current batch’s delivery format and location, please contact the admissions team.",
    },
    {
        question: "What are the Creator Marketer Programme timings?",
        answer: "Class timings can vary by batch. The admissions team can share the current schedule and help you plan around it.",
    },
    {
        question:
            "Who are some industry experts that have visited The LIT School?",
        answer: "Students learn directly from creators, marketers, founders, and other working professionals through industry sessions and real-world briefs.",
    },
    {
        question: "How detailed are EPICs?",
        answer: "EPICs are hands-on, real-world briefs designed to help students build practical skills and work they can use in their portfolios.",
    },
    {
        question: "What if I miss a class?",
        answer: "Contact the programme team for the best way to catch up on the session and any work covered in class.",
    },
    {
        question: "How many students are there per batch?",
        answer: "Batch size can vary. The admissions team can share the latest details for the upcoming cohort.",
    },
    {
        question: "What is the application process?",
        answer: "The process includes the LITMUS Test and an interview. It evaluates creativity, originality, relatability, and how you pitch a solution to a brand brief.",
    },
    {
        question: "Does The LIT School offer scholarships?",
        answer: "Scholarships are available through the LITMUS Test and an interview, which evaluate creativity, originality, relatability, and your pitch for a brand brief. Awards can be 5%, 8%, 12%, or 15%, based on performance.",
    },
];

export default function FaqSection() {
    const sectionRef = useRef(null);
    const [openQuestions, setOpenQuestions] = useState(
        () => new Set([0, 1, 10]),
    );

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (
            !section ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return undefined;
        }

        const context = gsap.context(() => {
            const headingLines = gsap.utils.toArray(".faq-heading-line");

            gsap.fromTo(
                headingLines,
                {
                    autoAlpha: 0,
                    yPercent: 110,
                    rotateX: -24,
                    filter: "blur(10px)",
                },
                {
                    autoAlpha: 1,
                    yPercent: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    duration: 0.95,
                    stagger: 0.16,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 78%",
                        once: true,
                    },
                },
            );

            gsap.utils.toArray(".faq-item").forEach((item, index) => {
                const fromLeft = index % 2 === 0;

                gsap.fromTo(
                    item,
                    {
                        autoAlpha: 0,
                        x: fromLeft ? -42 : 42,
                        y: 26,
                        scale: 0.97,
                        filter: "blur(7px)",
                    },
                    {
                        autoAlpha: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 0.8,
                        ease: "power3.out",
                        clearProps: "filter",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            once: true,
                        },
                    },
                );
            });
        }, section);

        return () => context.revert();
    }, []);

    const toggleQuestion = (index) => {
        setOpenQuestions((current) => {
            const next = new Set(current);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_18%_8%,#681c72_0%,#45144f_38%,#180d22_100%)] px-[var(--site-page-gutter)] py-[clamp(70px,9vw,130px)] text-white max-[900px]:px-5 max-[600px]:py-[64px]"
            aria-labelledby="faq-heading"
        >
            <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_78%_55%,rgba(19,7,28,.35),transparent_55%)]" />
            <div className="mx-auto w-full max-w-[var(--site-container-width)]">
                <h2
                    id="faq-heading"
                    className="faq-heading mx-auto mb-[clamp(42px,6vw,76px)] text-center text-[clamp(42px,5.3vw,76px)] font-bold leading-[.98] tracking-[-.055em] max-[600px]:mb-10 max-[600px]:text-[clamp(38px,10vw,54px)]"
                >
                    <span className="faq-heading-line block">Most Common</span>
                    <span className="faq-heading-line mt-1 block font-serif text-[1.03em] font-normal italic">
                        Questions
                    </span>
                </h2>

                <div className="faq-list mx-auto flex w-full max-w-[760px] flex-col gap-[22px] max-[600px]:gap-4">
                    {questions.map((item, index) => {
                        const isOpen = openQuestions.has(index);
                        return (
                            <article className="faq-item" key={item.question}>
                                {index === 3 && (
                                    <p className="mb-4 ml-1 text-[15px] font-semibold text-white/90">
                                        Also asked...
                                    </p>
                                )}
                                <button
                                    id={`faq-question-${index}`}
                                    className={`flex cursor-pointer min-h-[68px] w-fit max-w-full items-center justify-between gap-5 rounded-full border px-[clamp(22px,3vw,42px)] py-4 text-left text-[clamp(15px,1.25vw,20px)] font-bold leading-snug transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300 max-[600px]:min-h-[60px] max-[600px]:w-full max-[600px]:px-5 max-[600px]:text-[15px] ${isOpen ? "border-transparent bg-[#171717]" : "border-white/40 bg-white/[0.035] hover:border-fuchsia-300/80 hover:bg-white/[0.08]"}`}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <span>{item.question}</span>
                                    <span
                                        className={`grid h-8 w-8 flex-none place-items-center rounded-full border text-[22px] font-normal leading-none transition duration-300 ${isOpen ? "rotate-45 border-fuchsia-400 text-fuchsia-300" : "border-white/35 text-white/80"}`}
                                        aria-hidden="true"
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    aria-hidden={!isOpen}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <div className="ml-auto flex max-w-[min(100%,600px)] items-end gap-3 max-[600px]:gap-2">
                                            <p className="m-0 flex-1 rounded-[22px] border border-white/25 bg-white/[0.12] px-5 py-5 text-[clamp(15px,1.2vw,19px)] leading-[1.55] text-white/95 backdrop-blur-sm max-[600px]:rounded-[18px] max-[600px]:px-4 max-[600px]:py-4 max-[600px]:text-[15px]">
                                                {item.answer}
                                            </p>
                                            <span
                                                className="mb-1 grid h-11 w-11 flex-none place-items-center rounded-full border border-fuchsia-400 text-[25px] font-bold leading-none text-fuchsia-400 max-[600px]:h-9 max-[600px]:w-9"
                                                aria-hidden="true"
                                            >
                                                ↗
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
