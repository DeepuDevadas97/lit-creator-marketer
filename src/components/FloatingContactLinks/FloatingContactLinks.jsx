import "./FloatingContactLinks.css";

const links = [
    {
        label: "WhatsApp",
        href: "https://wa.me/919632121920",
        className: "floating-contact-whatsapp",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6-3.5-8.3ZM12.2 21.6c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.3 4.3-9.6 9.6-9.6 2.6 0 5 1 6.8 2.8s2.8 4.2 2.8 6.8c0 5.3-4.3 9.6-9.6 9.6Zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.1-.2-.2-.5-.4Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/thelitschool/",
        className: "floating-contact-instagram",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="instagram-flash" cx="18" cy="6" r="1" />
            </svg>
        ),
    },
    {
        label: "Call LIT School",
        href: "tel:+919632121920",
        className: "floating-contact-call",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.2 11.2 0 0 0 3.5.6 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A18.9 18.9 0 0 1 2.9 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .6 3.5 1 1 0 0 1-.2 1Z" />
            </svg>
        ),
    },
];

export default function FloatingContactLinks({ placement = "floating" }) {
    return (
        <nav
            className={`floating-contact-links ${placement === "header" ? "floating-contact-links-header" : ""}`}
            aria-label="Contact LIT School"
        >
            {links.map((link) => (
                <a
                    className={`floating-contact-link ${link.className}`}
                    href={link.href}
                    key={link.label}
                    aria-label={link.label}
                    title={link.label}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                    rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
                >
                    {link.icon}
                </a>
            ))}
        </nav>
    );
}
