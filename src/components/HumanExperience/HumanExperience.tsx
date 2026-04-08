"use client";

import { motion } from "motion/react";
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
              AI made shipping easy, so everyone shipped. Faster briefs, faster code, faster launches. Somewhere in all that speed, the soul got cut from the sprint.
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
              What&apos;s missing isn&apos;t features. It&apos;s the obsessive typographer who spent a week on one heading. The designer who felt the button before she built it. The engineer who cared about the empty state.
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
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.15 }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "65%",
              aspectRatio: "3/4",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              willChange: "transform, opacity",
            }}
          >
            <img
              src="/images/4.jpg"
              alt="People collaborating on technology"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>

          {/* Front image */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.15 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "55%",
              aspectRatio: "3/4",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              border: "4px solid #0f1132",
              willChange: "transform, opacity",
            }}
          >
            <img
              src="/images/6.jpg"
              alt="Whiteboarding session"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>

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
          gap: "72px",
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
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
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
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              The studio in our corner
            </span>
          </div>

          {/* Headline */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.4vw, 42px)",
              color: "#f0ece0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 24px 0",
            }}
          >
            ATM teamed up with{" "}
            <span
              style={{
                background: "linear-gradient(95deg, #f0ece0 0%, #d4821a 60%, #ffa040 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Range of View Studios
            </span>{" "}
            to put the craft back in.
          </h3>

          {/* Body */}
          <div style={{ marginBottom: "32px" }}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={1}
              blurStrength={3}
              rotationEnd="center center"
              wordAnimationEnd="center center"
              textClassName="scroll-reveal-body-sm"
            >
              Brand systems with intention. UI with personality. Design that makes people feel something before they read a single word. Every product that comes out of this community deserves that kind of care.
            </ScrollReveal>
          </div>

          {/* Inline metadata strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(212,130,26,0.15)",
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "22px", color: "#f0ece0", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
                100<span style={{ color: "#d4821a" }}>%</span>
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, color: "#a8a8b8", margin: "6px 0 0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Hand built
              </p>
            </div>
            <div style={{ width: "1px", height: "32px", background: "rgba(212,130,26,0.2)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "22px", color: "#f0ece0", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
                0<span style={{ color: "#d4821a" }}>%</span>
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, color: "#a8a8b8", margin: "6px 0 0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Generated
              </p>
            </div>
            <div style={{ width: "1px", height: "32px", background: "rgba(212,130,26,0.2)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "22px", color: "#f0ece0", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
                ATL
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, color: "#a8a8b8", margin: "6px 0 0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Based
              </p>
            </div>
          </div>
        </div>

        {/* Right side — ROV press plate */}
        <a
          href="https://www.rovstudios.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rov-cards rov-plate"
          style={{
            flexShrink: 0,
            width: "420px",
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            background: "linear-gradient(180deg, #1a1308 0%, #0d0a0e 55%, #07070d 100%)",
            border: "1px solid rgba(212,130,26,0.2)",
            boxShadow: "0 24px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
            transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.5s, box-shadow 0.5s",
            textDecoration: "none",
            display: "block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(249,133,19,0.5)";
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 36px 100px -20px rgba(249,133,19,0.18), inset 0 1px 0 rgba(255,255,255,0.06)";
            const arrow = e.currentTarget.querySelector<HTMLElement>(".rov-bar-arrow");
            if (arrow) arrow.style.transform = "translateX(6px)";
            const orb = e.currentTarget.querySelector<HTMLElement>(".rov-orb");
            if (orb) orb.style.transform = "scale(1.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(212,130,26,0.2)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 24px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)";
            const arrow = e.currentTarget.querySelector<HTMLElement>(".rov-bar-arrow");
            if (arrow) arrow.style.transform = "translateX(0)";
            const orb = e.currentTarget.querySelector<HTMLElement>(".rov-orb");
            if (orb) orb.style.transform = "scale(1)";
          }}
        >
          {/* Decorative orange orb */}
          <div
            className="rov-orb"
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(249,133,19,0.22) 0%, rgba(249,133,19,0.08) 35%, transparent 70%)",
              pointerEvents: "none",
              transition: "transform 0.7s ease",
            }}
          />

          {/* Grid texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage:
                "linear-gradient(rgba(212,130,26,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,130,26,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              pointerEvents: "none",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
            }}
          />

          {/* Logo mark */}
          <div
            style={{
              position: "relative",
              padding: "28px 36px 0",
            }}
          >
            <img
              src="/images/rovbrownlogo.png"
              alt="R.O.V Studios"
              style={{
                height: "128px",
                width: "auto",
                display: "block",
                opacity: 1,
                filter: "drop-shadow(0 6px 28px rgba(249,133,19,0.35))",
              }}
            />
          </div>

          {/* Top metadata row */}
          <div
            style={{
              position: "relative",
              padding: "18px 36px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#F98513",
                boxShadow: "0 0 14px rgba(249,133,19,0.7)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#d4821a",
              }}
            >
              Design Partner
            </span>
            <span style={{ width: "1px", height: "10px", background: "rgba(212,130,26,0.35)" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(212,130,26,0.6)",
              }}
            >
              Atlanta · 2024
            </span>
          </div>

          {/* Massive wordmark */}
          <div style={{ position: "relative", padding: "0 36px" }}>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "60px",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                margin: 0,
                background:
                  "linear-gradient(180deg, #f4f1ec 0%, #f0ece0 40%, #d4821a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Range
              <br />
              of View
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.42em",
                textTransform: "uppercase",
                color: "#d4821a",
                margin: "12px 0 0 0",
              }}
            >
              S · T · U · D · I · O · S
            </p>
          </div>

          {/* Pull quote */}
          <div
            style={{
              position: "relative",
              margin: "26px 36px 24px",
              paddingLeft: "18px",
              borderLeft: "2px solid rgba(249,133,19,0.55)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "18px",
                lineHeight: 1.4,
                color: "#f0ece0",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              We don&apos;t generate. We craft.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12.5px",
                color: "#bcbccc",
                marginTop: "10px",
                marginBottom: 0,
                lineHeight: 1.65,
              }}
            >
              Every pixel on this site was placed by hand. The brand, the
              type, the motion. All of it.
            </p>
          </div>

          {/* Bottom CTA bar */}
          <div
            className="rov-cta-bar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 36px",
              background:
                "linear-gradient(90deg, rgba(249,133,19,0.10), rgba(249,133,19,0.02))",
              borderTop: "1px solid rgba(249,133,19,0.18)",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#f0ece0",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Visit the studio
            </span>
            <span
              className="rov-bar-arrow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#F98513",
                color: "#07070d",
                transition: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                boxShadow: "0 4px 18px rgba(249,133,19,0.4)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
