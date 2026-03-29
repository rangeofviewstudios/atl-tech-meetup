"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, ArrowRight, CalendarPlus } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlowButton from "@/components/ui/GlowButton";
import { UPCOMING_EVENT, PAST_EVENTS, MEETUP_URL } from "@/lib/constants";

type Tab = "upcoming" | "past";

export default function Events() {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");

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

        {/* Right: pill tab switcher */}
        <RevealOnScroll delay={0.2}>
          <div
            style={{
              background: "#111118",
              borderRadius: "999px",
              padding: "4px",
              border: "1px solid #1e1e2a",
              display: "flex",
              marginBottom: "8px",
            }}
          >
            {(["upcoming", "past"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "9px 22px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  transition: "all 0.3s",
                  background: activeTab === tab ? "#d4821a" : "transparent",
                  color: activeTab === tab ? "#07070d" : "#555",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* ── Content ── */}
      {activeTab === "upcoming" ? (
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
                    "radial-gradient(circle, rgba(212,130,26,0.18) 0%, transparent 70%)",
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
                      01
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
                      Tuesday
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "#5a5a6a",
                        display: "block",
                        marginTop: "2px",
                      }}
                    >
                      6:00 PM — 8:30 PM EST
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
                    color: "#9a9aaa",
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
                  <MapPin size={14} style={{ color: "#8a8a9a", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#8a8a9a",
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
                  href={MEETUP_URL}
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
                    color: "#444",
                    textDecoration: "none",
                    borderBottom: "1px solid #2a2a35",
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
      ) : (
        <div
          className="events-past-grid"
          style={{
            padding: "52px 80px 0",
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {PAST_EVENTS.map((event, i) => (
            <RevealOnScroll key={event.title} delay={i * 0.08}>
              <div
                style={{
                  border: "1px solid #1a1a24",
                  borderRadius: "12px",
                  padding: "24px",
                  background: "transparent",
                  transition: "all 0.4s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a3a";
                  e.currentTarget.style.background = "rgba(13,13,20,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1a1a24";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#d4821a",
                    letterSpacing: "0.12em",
                  }}
                >
                  {event.date}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                    color: "#f0ece0",
                    marginTop: "10px",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {event.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "#5a5a6a",
                  }}
                >
                  {event.speaker}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      )}

      {/* Bottom spacing */}
      <div style={{ height: "100px" }} />
    </section>
  );
}
