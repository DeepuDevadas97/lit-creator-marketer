import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scholarships = [
    {
        title: "Zero to One",
        subtitle: "Scholarship",
        description:
            "For early-stage entrepreneurs who have identified a problem and are building a solution from scratch.",
        color: "#1688ff",
        symbol: "↗",
    },
    {
        title: "Freelancer First",
        subtitle: "Scholarship",
        description:
            "For freelancers and service-based founders already working with clients and solving real-world problems.",
        color: "#35d685",
        symbol: "⌁",
    },
    {
        title: "Changemaker",
        subtitle: "Scholarship",
        description:
            "Recognises students who lead projects, organise initiatives, or drive meaningful change beyond the classroom.",
        color: "#f23acb",
        symbol: "ϟ",
    },
    {
        title: "Content Creator",
        subtitle: "Scholarship",
        description:
            "Supports creators with a clear niche, consistent output, and genuine audience engagement.",
        color: "#ff6a00",
        symbol: "▶",
    },
];

function ScholarshipBadge({ color, symbol }) {
    return (
        <span
            className="grid h-[60px] w-[52px] shrink-0 place-items-center"
            style={{ "--badge-color": color }}
            aria-hidden="true"
        >
            <svg
                className="h-full w-full"
                viewBox="0 0 48 56"
                role="presentation"
            >
                <path d="M5 4h38v33L24 53 5 37V4Z" fill={color} />
                <text
                    x="24"
                    y="32"
                    textAnchor="middle"
                    fill="#fff12c"
                    fontFamily="Arial, sans-serif"
                    fontSize="23"
                    fontWeight="800"
                >
                    {symbol}
                </text>
            </svg>
        </span>
    );
}

export default function ScholarshipsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return undefined;

        const context = gsap.context(() => {
            gsap.fromTo(
                ".scholarship-card",
                { autoAlpha: 0, y: 30 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".scholarship-grid",
                        start: "top 82%",
                        once: true,
                    },
                },
            );
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section
            className="bg-[#0b0c0c] bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:32px_32px] px-[var(--site-page-gutter)] py-6 text-[#f7f7f7] max-[900px]:px-5"
            ref={sectionRef}
            aria-labelledby="scholarships-title"
        >
            <div className="relative isolate mx-auto grid min-h-[700px] w-full max-w-[var(--site-container-width)] grid-cols-[minmax(400px,1fr)_minmax(0,1.65fr)] gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] shadow-[0_30px_90px_rgba(0,0,0,.34)] max-[1300px]:grid-cols-[minmax(320px,1fr)_minmax(0,1.65fr)] max-[760px]:grid-cols-1 max-[760px]:gap-0 max-[760px]:rounded-[22px]">
                <img
                    className="absolute inset-0 z-0 h-full w-full object-cover object-[center_44%] max-[760px]:object-[42%_center]"
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2200&q=90"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/25 via-black/80 to-black/95 max-[760px]:bg-gradient-to-b max-[760px]:from-black/40 max-[760px]:via-black/85 max-[760px]:to-black/95" />
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <div className="relative z-10 flex min-h-[650px] flex-col items-start justify-end p-[clamp(28px,3.2vw,56px)] max-[760px]:min-h-[330px] max-[760px]:p-[26px]">
                    <h2
                        id="scholarships-title"
                        className="m-0 flex flex-col text-[clamp(42px,4vw,72px)] font-bold leading-[.95] tracking-[-.06em] max-[760px]:text-[clamp(44px,12vw,62px)]"
                    >
                        <em className="font-serif text-[1.1em] font-normal">
                            Special
                        </em>
                        <span>Scholarships</span>
                    </h2>
                    <a
                        className="mt-[26px] inline-flex min-h-[52px] w-fit items-center gap-3.5 rounded-full bg-gradient-to-r from-[#392dff] via-[#142be6] to-[#00b895] px-[26px] text-sm font-extrabold uppercase text-white no-underline shadow-[0_8px_26px_rgba(38,55,255,.28)] transition duration-200 hover:brightness-110 max-[760px]:mt-[22px]"
                        href="#enquire"
                    >
                        Enquire now{" "}
                        <span
                            className="text-[26px] leading-none"
                            aria-hidden="true"
                        >
                            →
                        </span>
                    </a>
                </div>

                <div className="relative z-10 flex min-w-0 flex-col justify-center bg-gradient-to-r from-black/10 to-black/70 p-[44px_clamp(24px,2.2vw,40px)_44px_16px] max-[760px]:bg-black/35 max-[760px]:p-[28px_18px_30px]">
                    <header className="mb-5 pb-[22px] max-[760px]:ml-0 max-[760px]:pl-[14px]">
                        <h3 className="m-0 text-[24px] sm:text-[32px] font-bold leading-[1.2] tracking-[-.04em]">
                            Is your work already ahead of the curve?
                        </h3>
                        <p className="mt-[14px] max-w-[780px] text-[clamp(15px,1.2vw,21px)] leading-[1.45] text-white/75">
                            Designed for students who have gone beyond academics
                            to build, lead, or create real-world impact.
                        </p>
                    </header>

                    <div className="grid grid-cols-2 gap-3.5 max-[760px]:grid-cols-1 max-[760px]:gap-3">
                        {scholarships.map((scholarship) => (
                            <article
                                className="scholarship-card group flex min-h-[250px] min-w-0 flex-col justify-between rounded-[22px] border border-white/20 bg-[rgba(7,8,10,.78)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[var(--badge-color)] max-[760px]:min-h-[230px] max-[760px]:p-[22px]"
                                key={scholarship.title}
                                style={{ "--badge-color": scholarship.color }}
                            >
                                <ScholarshipBadge
                                    color={scholarship.color}
                                    symbol={scholarship.symbol}
                                />
                                <div>
                                    <h4 className="m-0 text-[clamp(17px,1.25vw,23px)] font-bold leading-[1.15] tracking-[-.04em] max-[760px]:text-[21px]">
                                        {scholarship.title}
                                        <em className="mt-[5px] block font-serif text-[1.04em] font-normal">
                                            {scholarship.subtitle}
                                        </em>
                                    </h4>
                                    <p className="mt-4 text-[clamp(12px,.9vw,15px)] leading-[1.45] text-white/90 max-[760px]:text-sm min-h-[58px] line-clamp-3">
                                        {scholarship.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
