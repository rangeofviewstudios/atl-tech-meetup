"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HumanExperience() {
  return (
    <section
      id="human"
      style={{ position: "relative", overflow: "hidden", background: "#0f1132" }}
    >
      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(249,133,19,0.07) 0%, rgba(155,172,216,0.05) 55%, transparent 100%)",
        }}
      />

      {/* Two-column layout */}
      <div
        className="human-layout"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "80px",
          padding: "120px 80px",
        }}
      >
        {/* ── Left Column ── */}
        <div style={{ flex: "1 1 50%", minWidth: 0 }}>
          {/* Eyebrow */}
          <RevealOnScroll>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(212,130,26,0.12)",
                border: "1px solid rgba(212,130,26,0.25)",
                borderRadius: "100px",
                padding: "6px 14px",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#d4821a",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#d4821a",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                THE HUMAN LAYER
              </span>
            </div>
          </RevealOnScroll>

          {/* Headline */}
          <RevealOnScroll delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 58px)",
                color: "#f0ece0",
                lineHeight: 1.1,
                marginBottom: "32px",
              }}
            >
              The internet is full.
              <br />
              Full of products that{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "rgba(240,236,224,0.35)",
                }}
              >
                work
              </span>
              .
              <br />
              <span style={{ color: "#d4821a" }}>None that feel.</span>
            </h2>
          </RevealOnScroll>

          {/* Body 1 */}
          <div style={{ marginBottom: "20px" }}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={1}
              blurStrength={3}
              rotationEnd="center center"
              wordAnimationEnd="center center"
              textClassName="scroll-reveal-body"
            >
              AI made shipping easy. So everyone shipped. Faster briefs, faster code, faster launches — and somewhere in that speed, the soul got cut from the sprint.
            </ScrollReveal>
          </div>

          {/* Body 2 */}
          <div style={{ marginBottom: "40px" }}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={1}
              blurStrength={3}
              rotationEnd="center center"
              wordAnimationEnd="center center"
              textClassName="scroll-reveal-body"
            >
              What's missing isn't features. It's the obsessive typographer who spent a week on one heading. The designer who felt the button before they built it. The engineer who cared about the empty state.
            </ScrollReveal>
          </div>

          {/* Blockquote */}
          <RevealOnScroll delay={0.4}>
            <blockquote
              style={{
                borderLeft: "3px solid #d4821a",
                paddingLeft: "20px",
                margin: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "17px",
                  color: "#f0ece0",
                  fontWeight: 600,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Great products aren&apos;t just built. They&apos;re{" "}
                <span style={{ color: "#d4821a" }}>felt</span>.
                <br />
                ATM exists for the people who still believe that.
              </p>
            </blockquote>
          </RevealOnScroll>
        </div>

        {/* ── Right Column — Image Collage ── */}
        <div
          className="human-collage"
          style={{
            flex: "1 1 50%",
            position: "relative",
            height: "520px",
            minWidth: 0,
          }}
        >
          {/* Back image */}
          <RevealOnScroll delay={0.2}>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "65%",
                aspectRatio: "3/4",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                transform: "rotate(2deg)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=667&fit=crop"
                alt="People collaborating on technology"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </RevealOnScroll>

          {/* Front image */}
          <RevealOnScroll delay={0.35}>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "55%",
                aspectRatio: "3/4",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                transform: "rotate(-3deg)",
                border: "4px solid #0f1132",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=667&fit=crop"
                alt="Whiteboarding session"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </RevealOnScroll>

          {/* Floating badge */}
          <RevealOnScroll delay={0.5}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(10, 12, 40, 0.88)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(212,130,26,0.35)",
                borderRadius: "100px",
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                zIndex: 10,
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#d4821a",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#f0ece0",
                  whiteSpace: "nowrap",
                }}
              >
                Human-centered design
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── Hairline divider ── */}
      <div
        className="human-divider"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(155,172,216,0.15) 30%, rgba(155,172,216,0.15) 70%, transparent)",
          margin: "0 80px",
        }}
      />

      {/* ── ROV Solution Block ── */}
      <div
        className="rov-block"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "48px",
          padding: "56px 80px 120px",
        }}
      >
        {/* Left side */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#d4821a",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                color: "#d4821a",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              THE SOLUTION
            </span>
          </div>

          {/* Headline */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(22px, 3vw, 30px)",
              color: "#f0ece0",
              lineHeight: 1.25,
              margin: "0 0 20px 0",
            }}
          >
            That&apos;s why ATM partners with{" "}
            <span style={{ color: "#d4821a" }}>Range of View Studios.</span>
          </h3>

          {/* Body */}
          <div style={{ marginBottom: "28px" }}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={1}
              blurStrength={3}
              rotationEnd="center center"
              wordAnimationEnd="center center"
              textClassName="scroll-reveal-body-sm"
            >
              ROV brings the craft back. Brand systems built with intention. UI that has personality. Design that makes users feel something — before they read a single word. Every product that comes out of this community deserves that.
            </ScrollReveal>
          </div>

          {/* Split pill CTA */}
          <a
            href="https://www.rovstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rov-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "999px",
              border: "1px solid rgba(212,130,26,0.3)",
              overflow: "hidden",
              textDecoration: "none",
              transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,130,26,0.6)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(212,130,26,0.15)";
              e.currentTarget.style.transform = "translateY(-1px)";
              const arrow = e.currentTarget.querySelector<HTMLElement>(".rov-cta-arrow");
              if (arrow) arrow.style.transform = "translateX(3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,130,26,0.3)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
              const arrow = e.currentTarget.querySelector<HTMLElement>(".rov-cta-arrow");
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            <span
              style={{
                padding: "11px 20px",
                color: "#d4821a",
                background: "rgba(212,130,26,0.06)",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                transition: "background 0.3s",
              }}
            >
              See the work ↗
            </span>
            <span
              style={{
                width: "38px",
                height: "38px",
                background: "#d4821a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s",
              }}
            >
              <svg
                className="rov-cta-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#07070d"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "transform 0.3s" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right side — ROV showcase card */}
        <div
          className="rov-cards"
          style={{
            flexShrink: 0,
            width: "380px",
            borderRadius: "20px",
            border: "1px solid rgba(212,130,26,0.15)",
            background: "linear-gradient(165deg, #12100a 0%, #0d0d18 40%, #0a0a14 100%)",
            overflow: "hidden",
            transition: "border-color 0.4s, box-shadow 0.4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(212,130,26,0.35)";
            e.currentTarget.style.boxShadow = "0 8px 40px rgba(212,130,26,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(212,130,26,0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Logo header */}
          <div
            style={{
              padding: "32px 32px 0",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/images/rovbrownlogo.png"
              alt="R.O.V Studios"
              style={{ height: "48px", opacity: 0.9 }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#d4821a",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                R.O.V STUDIOS
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "#5a4a2a",
                  margin: 0,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Design partner
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(212,130,26,0.2) 30%, rgba(212,130,26,0.2) 70%, transparent)",
              margin: "24px 32px",
            }}
          />

          {/* Value props */}
          <div style={{ padding: "0 32px 28px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#8a8a9a",
                lineHeight: 1.7,
                margin: 0,
                marginBottom: "24px",
              }}
            >
              The studio behind ATM&apos;s brand. Every pixel on this site was
              crafted by hand — not generated.
            </p>

            {[
              { label: "Brand systems that feel alive", icon: "◆" },
              { label: "UI with actual personality", icon: "◆" },
              { label: "Design that earns the first click", icon: "◆" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(155,172,216,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: "6px",
                    color: "#d4821a",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#c8c4bc",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA footer */}
          <a
            href="https://www.rovstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "16px 32px",
              background: "rgba(212,130,26,0.06)",
              borderTop: "1px solid rgba(212,130,26,0.12)",
              textDecoration: "none",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212,130,26,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(212,130,26,0.06)";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                color: "#d4821a",
              }}
            >
              See the work
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4821a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
