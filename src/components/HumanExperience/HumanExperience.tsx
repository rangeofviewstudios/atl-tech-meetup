"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";

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
          <RevealOnScroll delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "#7a7a8a",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              AI made shipping easy. So everyone shipped. Faster briefs, faster
              code, faster launches — and somewhere in that speed, the soul got
              cut from the sprint.
            </p>
          </RevealOnScroll>

          {/* Body 2 */}
          <RevealOnScroll delay={0.3}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "#7a7a8a",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              What&apos;s missing isn&apos;t features. It&apos;s the obsessive
              typographer who spent a week on one heading. The designer who felt
              the button before they built it. The engineer who cared about the
              empty state.
            </p>
          </RevealOnScroll>

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
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            That&apos;s why ATM partners with{" "}
            <span style={{ color: "#d4821a" }}>Range of View Studios.</span>
          </h3>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "#5a5a7a",
              marginBottom: "28px",
              marginTop: 0,
            }}
          >
            ROV brings the craft back. Brand systems built with intention. UI
            that has personality. Design that makes users feel something —
            before they read a single word. Every product that comes out of
            this community deserves that.
          </p>

          {/* Split pill CTA */}
          <a
            href="https://rangeofview.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "999px",
              border: "1px solid rgba(212,130,26,0.3)",
              overflow: "hidden",
              textDecoration: "none",
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
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#07070d"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right side — feature cards */}
        <div
          className="rov-cards"
          style={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "340px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid #1e1e2a",
              padding: "16px 20px",
              background: "#0d0d18",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(212,130,26,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4821a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "#c8c4bc", margin: 0, marginBottom: "4px" }}>
                Brand &amp; identity systems
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#3a3a4a", lineHeight: 1.5, margin: 0 }}>
                Personality baked in from day one — not bolted on after launch.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid #1e1e2a",
              padding: "16px 20px",
              background: "#0d0d18",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(143,163,204,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8fa3cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "#c8c4bc", margin: 0, marginBottom: "4px" }}>
                Human-centered UI
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#3a3a4a", lineHeight: 1.5, margin: 0 }}>
                Interfaces designed to be felt, not just used.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid #1e1e2a",
              padding: "16px 20px",
              background: "#0d0d18",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(93,202,165,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5dcaa5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "#c8c4bc", margin: 0, marginBottom: "4px" }}>
                Lasting first impressions
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#3a3a4a", lineHeight: 1.5, margin: 0 }}>
                Products that connect with users before the first click.
              </p>
            </div>
          </div>

          {/* Brand strip */}
          <div
            style={{
              background: "#130e06",
              border: "1px solid rgba(212,130,26,0.2)",
              borderRadius: "12px",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "15px",
                color: "#d4821a",
              }}
            >
              R.O.V Studios
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "#5a3a10",
                marginLeft: "auto",
              }}
            >
              Design partner · ATM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
