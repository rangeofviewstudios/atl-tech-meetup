"use client";

import { motion } from "motion/react";
import { MapPin, CalendarPlus } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlowButton from "@/components/ui/GlowButton";
import { UPCOMING_EVENT } from "@/lib/constants";

export default function Events() {
  return (
    <section
      id="events"
      style={{ background: "#07070d", position: "relative", overflow: "hidden" }}
    >
      {/* ── Section Header ── */}
      <div
        className="events-header"
        style={{
          padding: "100px 80px 0",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* Left: eyebrow + headline */}
        <div>
          <RevealOnScroll>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "#d4821a",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              What&apos;s Happening
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(56px, 9vw, 96px)",
                letterSpacing: "-4px",
                lineHeight: 0.95,
                color: "#f0ece0",
                margin: 0,
              }}
            >
              Events
              <span
                style={{
                  color: "#1e1e2a",
                  WebkitTextStroke: "1px #2a2a3a",
                }}
              >
                .
              </span>
            </h2>
          </RevealOnScroll>
        </div>

      </div>

      {/* ── Content ── */}
      <RevealOnScroll delay={0.15}>
          {/* Featured event card */}
          <div
            className="events-featured"
            style={{
              margin: "52px 80px 0",
              maxWidth: "var(--max-width)",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "24px",
              border: "1px solid #1a1a24",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Left image panel */}
            <div
              className="events-image-panel"
              style={{
                background:
                  "linear-gradient(135deg, #0d1132 0%, #1a0d20 60%, #2a1008 100%)",
                minHeight: "420px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Event photo */}
              <img
                src="/images/5.jpg"
                alt="Atlanta Tech Meetup community"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Dark gradient overlay for legibility */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(7,7,13,0.55) 0%, rgba(7,7,13,0.35) 50%, rgba(42,16,8,0.55) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Orange orb */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(212,130,26,0.25) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* NEXT EVENT pill badge */}
              <div
                style={{
                  position: "absolute",
                  top: "28px",
                  left: "28px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(7,7,13,0.7)",
                  border: "1px solid rgba(212,130,26,0.35)",
                  borderRadius: "999px",
                  padding: "8px 16px",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#d4821a",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#f0ece0",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Next Event
                </span>
              </div>

              {/* Decorative grid lines */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.04,
                  backgroundImage:
                    "linear-gradient(rgba(155,172,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(155,172,216,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Right content panel */}
            <div
              className="events-content-panel"
              style={{
                background: "#0d0d14",
                padding: "52px 52px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Date badge row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "28px",
                  }}
                >
                  {/* Date block */}
                  <div
                    style={{
                      background: "#1a1408",
                      border: "1px solid rgba(212,130,26,0.25)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      textAlign: "center",
                      minWidth: "56px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        color: "#d4821a",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        display: "block",
                      }}
                    >
                      APR
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "28px",
                        fontWeight: 900,
                        color: "#f0ece0",
                        lineHeight: 1,
                        display: "block",
                      }}
                    >
                      08
                    </span>
                  </div>

                  {/* Day + time */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#f0ece0",
                        display: "block",
                      }}
                    >
                      Wednesday
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "#9494a4",
                        display: "block",
                        marginTop: "2px",
                      }}
                    >
                      6:00 PM to 8:00 PM EDT
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(24px, 3vw, 34px)",
                    letterSpacing: "-0.5px",
                    color: "#f0ece0",
                    lineHeight: 1.2,
                    marginBottom: "16px",
                  }}
                >
                  {UPCOMING_EVENT.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#bcbccc",
                    marginBottom: "20px",
                  }}
                >
                  {UPCOMING_EVENT.description}
                </p>

                {/* Location */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "36px",
                  }}
                >
                  <MapPin size={14} style={{ color: "#a8a8b8", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#a8a8b8",
                    }}
                  >
                    {UPCOMING_EVENT.location}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <GlowButton
                  href={UPCOMING_EVENT.rsvpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 whitespace-nowrap font-[var(--font-body)] font-bold text-sm tracking-wide rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#F4F1EC",
                    border: "1px solid rgba(255,255,255,0.22)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    padding: "15px 32px",
                    minWidth: "fit-content",
                    textDecoration: "none",
                  }}
                >
                  RSVP Now
                </GlowButton>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "#7e8090",
                    textDecoration: "none",
                    borderBottom: "1px solid #3a3a4a",
                    paddingBottom: "2px",
                    transition: "color 0.3s",
                  }}
                >
                  <CalendarPlus size={13} />
                  Add to calendar
                </a>
              </div>
            </div>
          </div>
      </RevealOnScroll>

      {/* Bottom spacing */}
      <div style={{ height: "100px" }} />
    </section>
  );
}
