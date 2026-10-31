import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./LifeAtLitSection.css";
import EventVideo from "../../assets/videos/event-video.mp4"

const LIGHT = "#0b0c0c";
const DARK = "#0b0c0c";

const MARQUEE_IMAGES = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85",
    "https://images.pexels.com/videos/36703282/pexels-photo-36703282.jpeg?auto=compress&dpr=1&h=750&w=1260",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
];

const PINNED_IMAGE_INDEX = 8;
const PINNED_VIDEO_SRC = EventVideo;

const STORY_PAGES = [
    [
        {
            category: "GUEST SESSION",
            title: "Why Real-World Beats Rote Learning in the AI Age",
            body: "When Varun Mayya addressed LIT students, he called out education’s biggest flaw: we’re memorising when we should be doing. He championed hands-on learning, especially in marketing where live campaigns beat case studies every time. Then he shifted gears, painting a future where AI tool mastery and adaptability will separate winners from the rest.",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85",
            alt: "A speaker sharing ideas on stage",
        },
        {
            category: "CREATOR COMMUNITY",
            title: "Authenticity Over Algorithm",
            body: "When Kusha took the stage at LIT, she didn’t just talk content, she talked community. She highlighted the power of staying authentic, how her tribe stood by her through controversies, and how that same trust fueled her product launches. For LIT students, it was a masterclass in how loyalty and honesty turn audiences into movements.",
            image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1000&q=85",
            alt: "A woman speaking with an audience",
        },
    ],
    [
        {
            category: "STUDENT CHALLENGE",
            title: "The Great Gurus Music Band Challenge",
            body: "Students formed intuitive music bands, collaborated on original ideas, and brought their creativity to life through a hands-on challenge.",
            image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85",
            alt: "A live music performance",
        },
        {
            category: "CREATIVE PROJECT",
            title: "Ness Preschool Video Project",
            body: "Students created meaningful narratives and brought a preschool’s story to life through thoughtful, audience-first video work.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
            alt: "Students collaborating on a creative project",
        },
    ],
];

export default function LifeAtLitSection() {
    const containerRef = useRef(null);
    const marqueeSectionRef = useRef(null);
    const marqueeImagesRef = useRef(null);
    const pinnedMediaRef = useRef(null);
    const horizontalScrollRef = useRef(null);
    const horizontalScrollWrapperRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, Flip);

        const isMobile = window.innerWidth <= 768;

        const container = containerRef.current;
        const marqueeSection = marqueeSectionRef.current;
        const marqueeImagesEl = marqueeImagesRef.current;
        const pinnedMedia = pinnedMediaRef.current;
        const horizontalScrollSection = horizontalScrollRef.current;
        const horizontalScrollWrapper = horizontalScrollWrapperRef.current;

        if (
            !container ||
            !marqueeSection ||
            !marqueeImagesEl ||
            !pinnedMedia ||
            !horizontalScrollSection ||
            !horizontalScrollWrapper
        ) {
            return;
        }

        if (isMobile) {
            const marqueeTween = gsap.to(marqueeImagesEl, {
                scrollTrigger: {
                    trigger: marqueeSection,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const xPosition = -75 + progress * 25;
                        gsap.set(marqueeImagesEl, {
                            x: `${xPosition}%`,
                        });
                    },
                },
            });

            return () => {
                marqueeTween.scrollTrigger?.kill();
                marqueeTween.kill();
            };
        }

        function interpolateColor(color1, color2, factor) {
            return gsap.utils.interpolate(color1, color2, factor);
        }

        const marqueeTween = gsap.to(marqueeImagesEl, {
            scrollTrigger: {
                trigger: marqueeSection,
                start: "top bottom",
                end: "top top",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const xPosition = -75 + progress * 25;

                    gsap.set(marqueeImagesEl, {
                        x: `${xPosition}%`,
                    });
                },
            },
        });

        let pinnedMarqueeImgClone = null;
        let isImgCloneActive = false;
        let pinnedVideoElement = null;
        let pinnedVideoPlaceholder = null;

        function createPinnedMarqueeImgClone() {
            if (isImgCloneActive) return;

            const rect = pinnedMedia.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            pinnedMarqueeImgClone = pinnedMedia.cloneNode(true);
            pinnedVideoElement = pinnedMedia.querySelector('[data-role="pinned-video"]');
            const clonedVideo = pinnedMarqueeImgClone.querySelector('[data-role="pinned-video"]');

            // Move the live video node into the FLIP layer so playback continues
            // through the expansion instead of restarting from its poster.
            if (pinnedVideoElement && clonedVideo) {
                pinnedVideoPlaceholder = document.createComment("pinned-video-placeholder");
                pinnedVideoElement.replaceWith(pinnedVideoPlaceholder);
                clonedVideo.replaceWith(pinnedVideoElement);
            }

            gsap.set(pinnedMarqueeImgClone, {
                position: "fixed",
                left: centerX - pinnedMedia.offsetWidth / 2 + "px",
                top: centerY - pinnedMedia.offsetHeight / 2 + "px",
                width: pinnedMedia.offsetWidth + "px",
                height: pinnedMedia.offsetHeight + "px",
                transform: "rotate(-5deg)",
                transformOrigin: "center center",
                pointerEvents: "none",
                willChange: "transform",
                zIndex: 100,
            });

            document.body.appendChild(pinnedMarqueeImgClone);

            gsap.set(pinnedMedia, { opacity: 0 });

            isImgCloneActive = true;

            const cloneVideo = pinnedMarqueeImgClone.querySelector(
                '[data-role="pinned-video"]',
            );

            const cloneOverlay = pinnedMarqueeImgClone.querySelector(
                '[data-role="pinned-overlay"]',
            );

            if (cloneVideo) {
                cloneVideo.muted = true;
                cloneVideo.autoplay = true;
                cloneVideo.loop = true;
                cloneVideo.playsInline = true;
                cloneVideo.preload = "auto";
                cloneVideo.play().catch(() => {});
            }

            if (cloneOverlay) {
                gsap.set(cloneOverlay, { opacity: 0 });

                gsap.to(cloneOverlay, {
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.3,
                });
            }
        }

        function removePinnedMarqueeImgClone() {
            if (!isImgCloneActive) return;

            if (pinnedMarqueeImgClone) {
                if (pinnedVideoElement && pinnedVideoPlaceholder?.parentNode) {
                    pinnedVideoPlaceholder.replaceWith(pinnedVideoElement);
                }

                pinnedMarqueeImgClone.remove();
                pinnedMarqueeImgClone = null;
                pinnedVideoElement = null;
                pinnedVideoPlaceholder = null;
            }

            gsap.set(pinnedMedia, { opacity: 1 });

            isImgCloneActive = false;
        }

        const pinHorizontalScrollTrigger = ScrollTrigger.create({
            trigger: horizontalScrollSection,
            start: "top top",
            end: () => `+=${window.innerHeight * 5}`,
            pin: true,
        });

        const marqueeCloneTrigger = ScrollTrigger.create({
            trigger: marqueeSection,
            start: "top top",
            onEnter: createPinnedMarqueeImgClone,
            onEnterBack: createPinnedMarqueeImgClone,
            onLeaveBack: removePinnedMarqueeImgClone,
        });

        let flipAnimation = null;

        const flipTrigger = ScrollTrigger.create({
            trigger: horizontalScrollSection,
            start: "top 50%",
            end: () => `+=${window.innerHeight * 5.5}`,

            onEnter: () => {
                if (
                    pinnedMarqueeImgClone &&
                    isImgCloneActive &&
                    !flipAnimation
                ) {
                    pinnedMarqueeImgClone
                        .querySelector('[data-role="pinned-video"]')
                        ?.play()
                        .catch(() => {});

                    const state = Flip.getState(pinnedMarqueeImgClone);

                    gsap.set(pinnedMarqueeImgClone, {
                        position: "fixed",
                        left: "0px",
                        top: "0px",
                        width: "100%",
                        height: "100svh",
                        transform: "rotate(0deg)",
                        transformOrigin: "center center",
                    });

                    flipAnimation = Flip.from(state, {
                        duration: 1,
                        ease: "none",
                        paused: true,
                    });
                }
            },

            onLeaveBack: () => {
                if (flipAnimation) {
                    flipAnimation.kill();
                    flipAnimation = null;
                }

                gsap.set(container, { backgroundColor: LIGHT });
                gsap.set(horizontalScrollWrapper, { x: "0%" });
            },
        });

        const progressTrigger = ScrollTrigger.create({
            trigger: horizontalScrollSection,
            start: "top 50%",
            end: () => `+=${window.innerHeight * 5.5}`,

            onUpdate: (self) => {
                const progress = self.progress;

                if (progress <= 0.05) {
                    const bgColorProgress = Math.min(progress / 0.05, 1);

                    const newBgColor = interpolateColor(
                        LIGHT,
                        DARK,
                        bgColorProgress,
                    );

                    gsap.set(container, {
                        backgroundColor: newBgColor,
                    });
                } else {
                    gsap.set(container, {
                        backgroundColor: DARK,
                    });
                }

                if (progress <= 0.2) {
                    const scaleProgress = progress / 0.2;

                    if (flipAnimation) {
                        flipAnimation.progress(scaleProgress);
                    }
                }

                if (progress > 0.2 && progress <= 0.95) {
                    if (flipAnimation) {
                        flipAnimation.progress(1);
                    }

                    const horizontalProgress = (progress - 0.2) / 0.75;

                    const wrapperTranslateX = -66.67 * horizontalProgress;

                    gsap.set(horizontalScrollWrapper, {
                        x: `${wrapperTranslateX}%`,
                    });

                    const slideMovement =
                        (66.67 / 100) * 3 * horizontalProgress;

                    const imageTranslateX = -slideMovement * 100;

                    if (pinnedMarqueeImgClone) {
                        gsap.set(pinnedMarqueeImgClone, {
                            x: `${imageTranslateX}%`,
                        });
                    }
                } else if (progress > 0.95) {
                    if (flipAnimation) {
                        flipAnimation.progress(1);
                    }

                    if (pinnedMarqueeImgClone) {
                        gsap.set(pinnedMarqueeImgClone, {
                            x: "-200%",
                        });
                    }

                    gsap.set(horizontalScrollWrapper, {
                        x: "-66.67%",
                    });
                }
            },
        });

        return () => {
            marqueeTween.scrollTrigger?.kill();
            marqueeTween.kill();

            pinHorizontalScrollTrigger.kill();
            marqueeCloneTrigger.kill();
            flipTrigger.kill();
            progressTrigger.kill();

            if (flipAnimation) {
                flipAnimation.kill();
            }

            removePinnedMarqueeImgClone();
        };
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                className="relative w-full h-full bg-[#0b0c0c] [will-change:background-color] font-sans"
            >
                {/* MARQUEE */}
                <section
                    ref={marqueeSectionRef}
                    className="relative w-full h-[50svh] overflow-hidden"
                >
                    <h2 className="life-stories-heading">
                        <em>Life at</em> LIT
                    </h2>
                    <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] w-[150%] h-full max-[1000px]:w-[300%]">
                        <div
                            ref={marqueeImagesRef}
                            className="absolute top-1/2 left-1/2 translate-x-[-75%] translate-y-[-50%] w-[230%] h-full flex justify-between items-center gap-4 will-change-transform"
                        >
                            {MARQUEE_IMAGES.map((src, index) =>
                                index === PINNED_IMAGE_INDEX ? (
                                    <div
                                        key={src}
                                        className="flex-1 w-full aspect-[3/2] rounded-xl overflow-hidden"
                                    >
                                        <div
                                            ref={pinnedMediaRef}
                                            className="relative w-full h-full bg-black"
                                        >
                                            <video
                                                data-role="pinned-video"
                                                src={PINNED_VIDEO_SRC}
                                                poster={src}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                className="w-full h-full object-cover"
                                            />

                                            <div
                                                data-role="pinned-overlay"
                                                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent max-[1000px]:p-4"
                                            >
                                                <h3 className="text-white text-xl md:text-3xl font-normal leading-tight max-w-md">
                                                    Crafting experiences that
                                                    move with intention.
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        key={src}
                                        className="flex-1 w-full aspect-[3/2] rounded-xl overflow-hidden"
                                    >
                                        <img
                                            src={src}
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </section>

                {/* HORIZONTAL SCROLL */}
                <section
                    ref={horizontalScrollRef}
                    className="life-stories-stage relative w-full h-[100svh] overflow-hidden max-[768px]:h-auto max-[768px]:overflow-visible"
                >
                    <div
                        ref={horizontalScrollWrapperRef}
                        className="life-stories-track relative w-[300%] h-[100svh] flex will-change-transform max-[768px]:w-full max-[768px]:h-auto max-[768px]:flex-col"
                    >
                        <div className="life-stories-spacer flex-none w-1/3 h-full max-[768px]:hidden" aria-hidden="true" />

                        {STORY_PAGES.map((stories, pageIndex) => (
                            <div className="life-stories-page flex-none w-1/3 h-full" key={`story-page-${pageIndex}`}>
                                <div className="life-stories-grid">
                                    {stories.map((story) => (
                                        <article className="life-story-card" key={story.title}>
                                            <img className="life-story-image" src={story.image} alt={story.alt} loading="lazy" />
                                            <div className="life-story-copy">
                                                <span className="life-story-accent" aria-hidden="true" />
                                                <span className="life-story-category">{story.category}</span>
                                                <h3>{story.title}</h3>
                                                <p>{story.body}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
