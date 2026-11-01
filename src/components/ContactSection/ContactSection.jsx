import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cityOptions = [
    "Bengaluru", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai",
    "Kolkata", "Ahmedabad", "Jaipur", "Indore", "Other",
];

const initialForm = {
    name: "",
    email: "",
    birthDate: "",
    phone: "",
    city: "",
    status: "",
    relocate: "",
    goals: "",
};

const inputClass = "mt-2.5 min-h-[58px] w-full rounded-[17px] border border-white/10 bg-[#19191c] px-5 py-4 text-base text-white outline-none transition placeholder:text-[#a2a0aa] focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 max-[600px]:min-h-[54px] max-[600px]:px-4";
const labelClass = "block text-sm font-semibold text-white/90";
const optionClass = "flex min-h-[48px] cursor-pointer items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-fuchsia-300 hover:bg-fuchsia-400/10 has-[:checked]:border-fuchsia-400 has-[:checked]:bg-fuchsia-400/15 has-[:checked]:text-white has-[:checked]:shadow-[inset_0_0_0_1px_rgba(232,74,221,.25)]";

function FormField({ label, error, children, className = "" }) {
    return (
        <div className={className}>
            <label className={labelClass}>
                {label} <span className="text-rose-400" aria-hidden="true">*</span>
                {children}
            </label>
            {error && <p className="mt-1.5 text-xs font-medium text-rose-300" role="alert">{error}</p>}
        </div>
    );
}

export default function ContactSection() {
    const sectionRef = useRef(null);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return undefined;
        }

        const context = gsap.context(() => {
            gsap.fromTo(
                ".contact-info-card",
                { autoAlpha: 0, x: -52, y: 42, rotate: -1.5, filter: "blur(8px)" },
                {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    filter: "blur(0px)",
                    duration: 0.95,
                    ease: "power4.out",
                    scrollTrigger: { trigger: ".contact-info-card", start: "top 84%", once: true },
                },
            );
            gsap.fromTo(
                ".contact-art-card",
                { autoAlpha: 0, y: 58, scale: 0.94, rotate: 1.5 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".contact-art-card", start: "top 86%", once: true },
                },
            );
            gsap.fromTo(
                ".contact-form-card",
                { autoAlpha: 0, x: 58, y: 28, filter: "blur(7px)" },
                {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.95,
                    ease: "power4.out",
                    scrollTrigger: { trigger: ".contact-form-card", start: "top 84%", once: true },
                },
            );
            gsap.fromTo(
                ".contact-form-heading",
                { autoAlpha: 0, y: 22 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".contact-form-heading", start: "top 88%", once: true },
                },
            );
            ScrollTrigger.batch(".contact-form-field", {
                start: "top 90%",
                once: true,
                interval: 0.12,
                batchMax: 2,
                onEnter: (fields) => {
                    gsap.fromTo(
                        fields,
                        { autoAlpha: 0, y: 24, filter: "blur(3px)" },
                        {
                            autoAlpha: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 0.62,
                            stagger: 0.1,
                            ease: "power3.out",
                            clearProps: "filter,transform",
                            overwrite: true,
                        },
                    );
                },
            });
        }, section);

        return () => context.revert();
    }, []);

    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: "" }));
        setSubmitted(false);
    };

    const validateForm = () => {
        const nextErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneDigits = form.phone.replace(/\D/g, "");

        if (form.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
        if (!emailPattern.test(form.email.trim())) nextErrors.email = "Enter a valid email address.";
        if (!form.birthDate) nextErrors.birthDate = "Please enter your date of birth.";
        else if (new Date(`${form.birthDate}T00:00:00`) > new Date()) nextErrors.birthDate = "Date of birth cannot be in the future.";
        if (!/^[6-9]\d{9}$/.test(phoneDigits)) nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
        if (!form.city.trim()) nextErrors.city = "Choose or enter your city.";
        if (!form.status) nextErrors.status = "Select the option that best describes you.";
        if (!form.relocate) nextErrors.relocate = "Please select an answer.";
        if (form.goals.trim().length < 10) nextErrors.goals = "Tell us a little more about your career goals (at least 10 characters).";

        return nextErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validateForm();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) setSubmitted(true);
        else {
            setSubmitted(false);
            const firstInvalidName = Object.keys(nextErrors)[0];
            const firstInvalid = event.currentTarget.querySelector(
                `[name="${firstInvalidName}"]`,
            );
            firstInvalid?.focus();
        }
    };

    const radioOptions = (name, options, value) => (
        <div className="mt-3 flex flex-wrap gap-2.5">
            {options.map((option) => (
                <label className={optionClass} key={option}>
                    <input
                        className="sr-only"
                        type="radio"
                        name={name}
                        value={option}
                        checked={form[name] === option}
                        required
                        onChange={updateField}
                        aria-invalid={Boolean(errors[name])}
                    />
                    {option}
                </label>
            ))}
        </div>
    );

    return (
        <section
            ref={sectionRef}
            className="bg-[#0b0c0c] bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:32px_32px] px-[var(--site-page-gutter)] py-[clamp(64px,8vw,112px)] text-white max-[900px]:px-5 max-[600px]:py-14"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto grid w-full max-w-[var(--site-container-width)] grid-cols-[minmax(0,.94fr)_minmax(0,1.06fr)] items-stretch gap-[clamp(30px,5vw,82px)] max-[1050px]:grid-cols-1 max-[1050px]:gap-8">
                <div className="flex h-full min-w-0 flex-col gap-7 max-[1050px]:grid max-[1050px]:grid-cols-2 max-[1050px]:items-stretch max-[700px]:grid-cols-1 max-[700px]:gap-4">
                    <article className="contact-info-card flex min-h-[330px] flex-1 flex-col justify-between overflow-hidden rounded-[30px] border border-white/15 bg-[radial-gradient(ellipse_at_12%_100%,#fa48b2_0%,#8f36b7_33%,#241026_72%,#161013_100%)] p-[clamp(28px,3vw,50px)] max-[700px]:min-h-[270px] max-[700px]:rounded-[24px]">
                        <span className="grid h-14 w-14 place-items-center rounded-[14px] bg-fuchsia-400 text-[38px] font-light leading-none text-white" aria-hidden="true">✳</span>
                        <div className="mt-10">
                            <p className="mb-2 text-[clamp(16px,1.2vw,20px)] font-semibold uppercase tracking-[.16em] text-white/75">The LIT School</p>
                            <h2 id="contact-heading" className="m-0 text-[clamp(34px,4vw,62px)] font-semibold leading-[1.04] tracking-[-.055em]">
                                India’s First<br />
                                <em className="font-serif font-normal">Challenge Based</em><br />
                                Learning School
                            </h2>
                        </div>
                    </article>

                    <article className="contact-art-card relative flex min-h-[390px] flex-1 flex-col items-center justify-center overflow-hidden rounded-[30px] border border-violet-300/25 bg-[radial-gradient(ellipse_at_68%_18%,#5912c0_0%,#1b0c3a_42%,#090819_100%)] p-8 text-center max-[1050px]:min-h-[330px] max-[700px]:min-h-[270px] max-[700px]:rounded-[24px]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(220,172,255,.2)_1px,transparent_1.5px)] bg-[size:8px_8px] opacity-25" aria-hidden="true" />
                        <div className="absolute left-1/2 top-1/2 h-[42%] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[50%] border border-violet-500/60 shadow-[0_0_30px_rgba(138,50,255,.2)]" aria-hidden="true" />
                        <div className="absolute left-1/2 top-1/2 h-[74%] w-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] rounded-[50%] bg-[radial-gradient(ellipse_at_center,transparent_47%,#391087_50%,#8b2fe8_56%,#f2c1ff_60%,#7517d7_65%,#22094f_70%,transparent_74%)] drop-shadow-[0_0_25px_rgba(177,81,255,.5)]" aria-hidden="true" />
                        <span className="absolute right-[18%] top-[22%] z-[1] text-[34px] leading-none text-white drop-shadow-[0_0_14px_#d58aff]" aria-hidden="true">✦</span>
                        <span className="absolute left-[20%] top-[29%] z-[1] h-3 w-3 rounded-full bg-violet-950 shadow-[0_0_12px_#a04cff]" aria-hidden="true" />
                        <div className="relative z-[2]">
                            <h3 className="m-0 text-[clamp(34px,4vw,58px)] font-bold leading-none tracking-[-.055em]">
                                Let’s <em className="font-serif font-normal text-fuchsia-300">Connect</em>
                            </h3>
                            <p className="mt-4 text-sm text-white/85 sm:text-base">Have a project in mind? Let’s talk.</p>
                            <a className="mx-auto mt-5 grid h-12 w-12 place-items-center rounded-full border border-white/70 text-[25px] text-white transition duration-300 hover:scale-110 hover:border-fuchsia-300 hover:bg-fuchsia-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300" href="#contact-form" aria-label="Go to the contact form">→</a>
                        </div>
                    </article>
                </div>

                <div className="contact-form-card rounded-[30px] border border-white/10 bg-[#090909]/95 p-[clamp(24px,3vw,42px)] shadow-[0_24px_80px_rgba(0,0,0,.28)] max-[700px]:rounded-[24px] max-[700px]:p-5">
                    <div className="contact-form-heading mb-8">
                        <h3 className="m-0 text-[clamp(25px,2vw,34px)] font-semibold leading-tight tracking-[-.04em]">Want to know more?</h3>
                        <p className="mt-2 font-serif text-[clamp(18px,1.5vw,24px)] italic text-white/90">Fill the form to schedule a call</p>
                    </div>

                    <form id="contact-form" className="space-y-6" noValidate onSubmit={handleSubmit}>
                        <div className="contact-form-grid grid grid-cols-2 gap-x-3.5 gap-y-6 max-[600px]:grid-cols-1 max-[600px]:gap-y-5">
                            <FormField label="Full Name" error={errors.name} className="contact-form-field">
                                <input className={inputClass} name="name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} required />
                            </FormField>
                            <FormField label="Email" error={errors.email} className="contact-form-field">
                                <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} required />
                            </FormField>
                            <FormField label="Date of Birth" error={errors.birthDate} className="contact-form-field">
                                <input className={`${inputClass} [color-scheme:dark]`} name="birthDate" type="date" autoComplete="bday" value={form.birthDate} onChange={updateField} aria-invalid={Boolean(errors.birthDate)} required />
                            </FormField>
                            <FormField label="Phone No. (+91)" error={errors.phone} className="contact-form-field">
                                <input className={inputClass} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="98765 43210" value={form.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} required />
                            </FormField>
                            <FormField label="Where Do You Live?" error={errors.city} className="contact-form-field col-span-2 max-[600px]:col-span-1">
                                <input className={inputClass} name="city" type="text" list="contact-city-options" placeholder="Search or choose your city" value={form.city} onChange={updateField} aria-invalid={Boolean(errors.city)} required />
                                <datalist id="contact-city-options">{cityOptions.map((city) => <option key={city} value={city} />)}</datalist>
                            </FormField>
                            <fieldset className="contact-form-field col-span-2 min-w-0 border-0 p-0 max-[600px]:col-span-1">
                                <legend className={labelClass}>I am... <span className="text-rose-400" aria-hidden="true">*</span></legend>
                                {radioOptions("status", ["A student", "A Working Professional", "In Between Jobs"], form.status)}
                                {errors.status && <p className="mt-1.5 text-xs font-medium text-rose-300" role="alert">{errors.status}</p>}
                            </fieldset>
                            <fieldset className="contact-form-field col-span-2 min-w-0 border-0 p-0 max-[600px]:col-span-1">
                                <legend className={labelClass}>Will it be possible for you to relocate to Bangalore for this program? <span className="text-rose-400" aria-hidden="true">*</span></legend>
                                {radioOptions("relocate", ["Yes", "No", "Maybe"], form.relocate)}
                                {errors.relocate && <p className="mt-1.5 text-xs font-medium text-rose-300" role="alert">{errors.relocate}</p>}
                            </fieldset>
                            <FormField label="What are your career goals?" error={errors.goals} className="contact-form-field col-span-2 max-[600px]:col-span-1">
                                <textarea className={`${inputClass} min-h-[150px] resize-y`} name="goals" placeholder="Tell us what you want to achieve" value={form.goals} onChange={updateField} aria-invalid={Boolean(errors.goals)} required />
                            </FormField>
                        </div>

                        {submitted && (
                            <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200" role="status">
                                Your details are complete and passed validation.
                            </p>
                        )}

                        <button className="group flex min-h-[60px] w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#382cff] via-[#202ce8] to-[#00b894] px-6 text-base font-extrabold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300" type="submit">
                            Call me back <span className="text-xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                        </button>
                        <p className="m-0 text-center text-xs leading-relaxed text-white/45">Submitting validates your details in this demo. No information is sent or stored.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
