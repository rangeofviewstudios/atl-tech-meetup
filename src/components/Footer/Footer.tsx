"use client";

import GlowButton from "@/components/ui/GlowButton";
import { NAV_LINKS, SOCIAL_LINKS, MEETUP_URL } from "@/lib/constants";

const FOOTER_COLS = [
  {
    heading: "Navigate",
    links: NAV_LINKS.map((l) => ({ label: l.label, href: l.href, external: false })),
  },
  {
    heading: "Connect",
    links: SOCIAL_LINKS.map((l) => ({ label: l.label, href: l.href, external: true })),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Layer 0 — gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(260.87% 50% at 50% 50%, rgba(249,133,19,0.20) 0%, rgba(155,172,216,0.20) 50%, rgba(17,17,68,0.20) 100%)",
        }}
      />


{/* Layer 2 — real content */}
      <div style={{ position: "relative", zIndex: 2 }}>

        {/* CTA block */}
        <div
          className="footer-cta"
          style={{
            textAlign: "center",
            padding: "80px 80px 60px",
            borderBottom: "1px solid rgba(155,172,216,0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "20px",
            }}
          >
            Every First Tuesday · Peachtree Corners, GA
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F4F1EC",
              marginBottom: "16px",
            }}
          >
            Connect. Learn. Build.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F4F1EC",
              marginBottom: "40px",
            }}
          >
            Take your seat at the table.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(180,195,230,0.92)",
              fontSize: "1.1rem",
              marginBottom: "36px",
            }}
          >
            Walk in a stranger. Leave with a few good people in your corner.
          </p>
          <GlowButton
            href={MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 whitespace-nowrap font-[var(--font-body)] font-semibold text-lg tracking-wide rounded-full"
            style={{ background: "rgba(255,255,255,0.12)", color: "#F4F1EC", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "14px 32px", minWidth: "fit-content" }}
          >
            Join the Meetup
          </GlowButton>
        </div>

        {/* footer-inner */}
        <div
          className="footer-inner"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "60px 80px",
          }}
        >
          {/* footer-left */}
          <div style={{ flex: 1, maxWidth: "420px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#fff",
                display: "block",
                marginBottom: "20px",
              }}
            >
              ATM<span style={{ color: "var(--accent)" }}>.</span>
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(180,195,230,0.85)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Atlanta&apos;s free monthly tech meetup.
              <br />
              Every first Tuesday.
            </p>
            <div style={{ width: "32px", height: "1px", background: "rgba(155,172,216,0.3)", marginBottom: "20px" }} />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              Follow us on LinkedIn
            </a>
          </div>

          {/* footer-divider */}
          <div className="footer-divider" style={{ width: "1px", background: "#333", alignSelf: "stretch", margin: "0 40px" }} />

          {/* footer-nav */}
          <div className="footer-nav" style={{ display: "flex", gap: "60px" }}>
            {FOOTER_COLS.map((section) => (
              <div key={section.heading}>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: "0.95rem",
                    marginBottom: "24px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {section.heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "rgba(180,195,230,0.78)",
                          fontSize: "0.95rem",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(155,172,216,0.6)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(155,172,216,0.1)",
            margin: "0 80px",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(255,255,255,0.45)" }}>
            &copy; {new Date().getFullYear()} Atlanta Tech Meetup. All rights reserved.
          </p>
          <a href="https://www.rovstudios.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            Curated with intention by{" "}
            <img src="/images/rovbrownlogo.png" alt="R.O.V Studios" style={{ height: "60px", display: "inline-block", verticalAlign: "baseline", opacity: 1, marginTop: "8px" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
