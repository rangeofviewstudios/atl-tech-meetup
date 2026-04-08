"use client";

import { Linkedin } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import DecryptedText from "@/components/ui/DecryptedText";
import { GlowCard } from "@/components/ui/spotlight-card";
import { FOUNDERS } from "@/lib/constants";

export default function Founders() {
  const borderRadii = [
    "20px 0 0 20px",
    "0 20px 20px 0",
  ];

  return (
    <section
      id="founders"
      style={{
        background: "#07070d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Section Header ── */}
      <div
        className="founders-header-wrap"
        style={{
          padding: "100px 80px 0",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <div
          className="founders-header"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "64px",
          }}
        >
          {/* Left: eyebrow + headline */}
          <div>
            <RevealOnScroll>
              <div style={{ marginBottom: "14px" }}>
                <DecryptedText
                  text="THE PEOPLE BEHIND ATM"
                  className=""
                  speed={35}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#d4821a",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                  }}
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(48px, 7vw, 82px)",
                  lineHeight: 0.92,
                  letterSpacing: "-3px",
                  color: "#f0ece0",
                  margin: 0,
                }}
              >
                Built by people<br />who actually<br />
                <span
                  className="founders-shine"
                  style={{
                    background: "linear-gradient(90deg, #2a2a35 0%, #5a5a6a 35%, #9a9aaa 50%, #5a5a6a 65%, #2a2a35 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  show up.
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          {/* Right: description paragraph */}
          <RevealOnScroll delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#bcbccc",
                maxWidth: "340px",
                margin: 0,
                marginBottom: "8px",
              }}
            >
              Not a committee. Not a brand. Just two builders who got tired of
              surface-level networking and decided to do something about it.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div
        className="founders-cards-wrap"
        style={{
          padding: "0 80px 100px",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <div
          className="founders-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3px",
            position: "relative",
          }}
        >
          {/* Vertical divider */}
          <div
            className="founders-divider"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, #1e1e2a 20%, #1e1e2a 80%, transparent)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {FOUNDERS.map((founder, i) => (
            <RevealOnScroll key={founder.name} delay={i * 0.12}>
              <GlowCard
                glowColor="orange"
                customSize
                className="p-0 overflow-hidden w-full"
              >
                <div
                  style={{
                    borderRadius: borderRadii[i],
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Image area */}
                  <div
                    className="founder-image"
                    style={{
                      height: "560px",
                      position: "relative",
                      overflow: "hidden",
                      background: founder.image
                        ? undefined
                        : founder.fallbackGradient,
                    }}
                  >
                    {founder.image && (
                      <img
                        src={founder.image}
                        alt={founder.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}

                    {/* Gradient overlay on image */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 20%, rgba(7,7,13,0.6) 50%, #07070d 85%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Content overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "36px 40px",
                    }}
                  >
                    {/* Role */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: founder.roleColor,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        margin: 0,
                        marginBottom: "8px",
                      }}
                    >
                      {founder.role}
                    </p>

                    {/* Name */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "clamp(26px, 3vw, 36px)",
                        color: "#f0ece0",
                        letterSpacing: "-1px",
                        lineHeight: 1,
                        marginBottom: "14px",
                        marginTop: 0,
                      }}
                    >
                      {founder.name}
                    </h3>

                    {/* Bio */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13.5px",
                        lineHeight: 1.7,
                        color: "#bcbccc",
                        marginBottom: "22px",
                        maxWidth: "320px",
                        marginTop: 0,
                      }}
                    >
                      {founder.bio}
                    </p>

                    {/* Footer row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Social icons */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${founder.name} on LinkedIn`}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid #1e1e2a",
                            background: "rgba(7,7,13,0.6)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#a8a8b8",
                            textDecoration: "none",
                            transition: "border-color 0.3s, color 0.3s",
                          }}
                        >
                          <Linkedin size={13} />
                        </a>
                      </div>

                      {/* Quote */}
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: founder.quoteColor,
                          textAlign: "right",
                        }}
                      >
                        &ldquo;{founder.quote}&rdquo;
                      </span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
