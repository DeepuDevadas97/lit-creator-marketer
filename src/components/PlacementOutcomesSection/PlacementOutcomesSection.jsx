const outcomes = [
    {
        name: "Harsh Sathepatil",
        role: "Content Creator",
        company: "WLDD",
        mark: "WLD",
        image: "photo-1500648767791-00dcc994a43e",
        alt: "Harsh Sathepatil",
    },
    {
        name: "Aishwarya",
        role: "Content Strategist",
        company: "Binge Labs",
        mark: "binge",
        image: "photo-1534528741775-53994a69daeb",
        alt: "Portrait of a young content strategist",
    },
    {
        name: "Divyansh",
        role: "Creative Strategist",
        company: "NotFunny",
        mark: "not",
        image: "photo-1506794778202-cad84cf45f1d",
        alt: "Portrait of a young creative strategist",
    },
    {
        name: "Robinson",
        role: "Founder's Office",
        company: "Discover Dollar",
        mark: "DD",
        image: "photo-1507003211169-0a1dd7228f2d",
        alt: "Portrait of a young business professional",
    },
    {
        name: "Vidit Jain",
        role: "Assistant Manager",
        company: "Angel One",
        mark: "A",
        image: "photo-1500648767791-00dcc994a43e",
        alt: "Portrait of a young assistant manager",
    },
    {
        name: "Siddhant",
        role: "Community Lead",
        company: "UN SDG - SE Asia Division",
        mark: "UN",
        image: "photo-1535713875002-d1d0cf377fde",
        alt: "Portrait of a young community lead",
    },
    {
        name: "Krutik",
        role: "Digital Marketing Associate",
        company: "Growth Team",
        mark: "GT",
        image: "photo-1519085360753-af0119f7cbe7",
        alt: "Portrait of a young digital marketer",
    },
    {
        name: "Sawan",
        role: "Performance Marketer",
        company: "Digital First",
        mark: "DF",
        image: "photo-1506794778202-cad84cf45f1d",
        alt: "Portrait of a young performance marketer",
    },
    {
        name: "Paridhi",
        role: "Brand Strategist",
        company: "Creative Studio",
        mark: "CS",
        image: "photo-1531123897727-8f129e1688ce",
        alt: "Portrait of a young brand strategist",
    },
];

function OutcomeBadge({ children, label, className }) {
    return (
        <span
            className={`grid aspect-square w-[clamp(54px,4.2vw,76px)] place-items-center rounded-full text-white ${className}`}
            aria-label={label}
            title={label}
        >
            {children}
        </span>
    );
}

export default function PlacementOutcomesSection() {
    return (
        <section className="bg-[#0b0c0c] bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:32px_32px] px-[var(--site-page-gutter)] py-[clamp(64px,8vw,118px)] text-[#f7f7f7] max-[900px]:px-5 max-[680px]:py-[58px] max-[680px]:pb-[68px]">
            <div className="mx-auto grid w-full max-w-[var(--site-container-width)] grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] items-center gap-[clamp(32px,5vw,84px)] max-[1050px]:grid-cols-1 max-[1050px]:gap-[38px] max-[680px]:gap-[30px]">
                <div className="min-w-0 max-[1050px]:max-w-[720px]">
                    <div
                        className="mb-[clamp(34px,5vw,74px)] flex flex-wrap gap-[10px] max-[1050px]:mb-[30px] max-[680px]:mb-[26px] max-[680px]:gap-[9px]"
                        aria-label="Career outcomes"
                    >
                        <OutcomeBadge
                            label="Recognised achievement"
                            className="bg-[#ff4d00] max-[680px]:w-[54px]"
                        >
                            <svg
                                className="h-[72%] w-[72%]"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="m24 3 5.2 8.3 9.6-1.4-1.4 9.6 8.3 5.2-8.3 5.2 1.4 9.6-9.6-1.4L24 46l-5.2-8.3-9.6 1.4 1.4-9.6L2.3 24l8.3-5.2-1.4-9.6 9.6 1.4L24 3Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="m24 12 3.7 7.5 8.3 1.2-6 5.8 1.4 8.2-7.4-3.9-7.4 3.9 1.4-8.2-6-5.8 8.3-1.2L24 12Z"
                                    fill="white"
                                />
                            </svg>
                        </OutcomeBadge>
                        <OutcomeBadge
                            label="Global opportunities"
                            className="bg-[#0757ff] max-[680px]:w-[54px]"
                        >
                            <svg
                                className="h-[72%] w-[72%]"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="19"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <ellipse
                                    cx="24"
                                    cy="24"
                                    rx="9"
                                    ry="19"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M6 18h36M5 24h38M6 30h36"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </OutcomeBadge>
                        <OutcomeBadge
                            label="Paid career opportunities"
                            className="bg-[#ec34ce] max-[680px]:w-[54px]"
                        >
                            <svg
                                className="h-[72%] w-[72%]"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M16 8h16l-2 5 5 5v16l-11 9-11-9V18l5-5-2-5Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M27.8 19c-.8-.8-2-1.3-3.6-1.3-2.2 0-3.7 1.1-3.7 2.7 0 4.2 8 1.6 8 6.2 0 1.8-1.6 3-4.1 3-1.8 0-3.4-.6-4.6-1.8M24.2 15v20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </OutcomeBadge>
                    </div>

                    <h2 className="m-0 text-[clamp(42px,4.5vw,76px)] font-bold leading-[1.02] tracking-[-.055em] max-[1050px]:text-[clamp(44px,7vw,70px)] max-[680px]:text-[clamp(40px,11vw,58px)]">
                        Real Brands.
                        <br />
                        Real Work.
                        <br />
                        Real{" "}
                        <em className="font-serif font-normal">Paychecks.</em>
                    </h2>
                    <p className="mt-[28px] text-[clamp(16px,1.3vw,21px)] font-medium max-[680px]:mt-[18px] max-[680px]:leading-[1.45]">
                        We Provide 100% Placement Assistance!
                    </p>
                </div>

                <div className="grid min-w-0 grid-cols-3 gap-[14px] max-[680px]:grid-cols-2 max-[680px]:gap-[10px] max-[380px]:grid-cols-1">
                    {outcomes.map((outcome) => (
                        <article
                            className="group/card relative aspect-[.86] min-w-0 [perspective:1000px] max-[1050px]:aspect-[.95] max-[680px]:aspect-[.84] max-[380px]:aspect-[1.08]"
                            key={outcome.name}
                        >
                            <div className="relative h-full w-full rounded-[22px] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] [transform-style:preserve-3d] motion-safe:group-hover/card:[transform:rotateY(180deg)] motion-reduce:transition-none max-[680px]:rounded-[17px]">
                                <div className="absolute inset-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#171717] [backface-visibility:hidden] max-[680px]:rounded-[17px]">
                                    <img
                                        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_36%]"
                                        src={`https://images.unsplash.com/${outcome.image}?auto=format&fit=crop&w=720&q=85`}
                                        alt={outcome.alt}
                                        loading="lazy"
                                    />
                                    <div
                                        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/5 via-black/10 to-black/95"
                                        aria-hidden="true"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 z-[2] p-[clamp(12px,1.15vw,18px)] max-[680px]:p-[11px]">
                                        <h3 className="m-0 flex min-w-0 items-center gap-[7px] border-b border-white/30 pb-[10px] text-[clamp(14px,1.15vw,20px)] font-bold leading-[1.2] tracking-[-.035em] max-[680px]:gap-[5px] max-[680px]:pb-[7px] max-[680px]:text-[clamp(12px,3.5vw,16px)]">
                                            <span
                                                className="h-[10px] w-[10px] flex-none rounded-full bg-[#fff12c] max-[680px]:h-[8px] max-[680px]:w-[8px]"
                                                aria-hidden="true"
                                            />
                                            {outcome.name}
                                        </h3>
                                        <div className="flex min-w-0 items-center gap-[9px] pt-[10px] max-[680px]:gap-[7px] max-[680px]:pt-[7px]">
                                            <span
                                                className="grid aspect-square w-[clamp(34px,3vw,52px)] flex-none place-items-center overflow-hidden rounded-full border border-white/15 bg-[#f6f6f2] text-center text-[12px] font-extrabold text-[#101010] max-[680px]:w-8 max-[680px]:text-[8px]"
                                                aria-hidden="true"
                                            >
                                                {outcome.mark}
                                            </span>
                                            <div className="min-w-0">
                                                <p className="m-0 break-words text-[clamp(11px,.95vw,15px)] font-semibold leading-[1.3] max-[680px]:text-[clamp(10px,3vw,13px)]">
                                                    {outcome.role}
                                                </p>
                                                <span className="mt-1 block break-words text-[clamp(10px,.8vw,13px)] leading-[1.3] text-white/80 max-[680px]:text-[clamp(9px,2.5vw,11px)]">
                                                    {outcome.company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-[22px] border border-white/15 bg-[#202020] p-[clamp(14px,1.4vw,22px)] text-white [backface-visibility:hidden] [transform:rotateY(180deg)] max-[680px]:rounded-[17px] max-[680px]:p-3"
                                    aria-hidden="true"
                                >
                                    <span className="mb-3 text-[clamp(30px,3vw,44px)] leading-[.7] text-orange-500 max-[680px]:mb-2 max-[680px]:text-[30px]">“</span>
                                    <p className="m-0 text-[clamp(10px,.78vw,13px)] leading-[1.38] text-white/90 max-[680px]:text-[10px] max-[680px]:leading-[1.3]">
                                        I joined LIT as a beginner with only one video edit to my name. The hands-on projects helped me build skills, confidence, and character. Overall, LIT was a great experience.
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
