"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlowButton from "@/components/ui/GlowButton";
import { PAST_EVENTS, MEETUP_URL } from "@/lib/constants";

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

        {/* Tab switcher */}
        <RevealOnScroll delay={0.2}>
          <div
            style={{
              background: "#111118",
              borderRadius: "999px",
              padding: "4px",
              border: "1px solid #1e1e2a",
              display: "flex",
              marginBottom: "8px",
              position: "relative",
            }}
          >
            {(["upcoming", "past"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  position: "relative",
                  zIndex: 1,
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
      <AnimatePresence mode="wait">
        {activeTab === "upcoming" ? (
          <motion.div
            key="upcoming"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <RevealOnScroll delay={0.15}>
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
                  position: "relative",
                }}
              >
                {/* Background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, #0d1132 0%, #0d0d18 50%, #1a0d08 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Orbs */}
                <div
                  style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(249,133,19,0.12) 0%, transparent 65%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-80px",
                    left: "-80px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(155,172,216,0.08) 0%, transparent 65%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Grid texture */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage:
                      "linear-gradient(rgba(155,172,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(155,172,216,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    pointerEvents: "none",
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "80px 48px",
                    minHeight: "400px",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "20px",
                      background: "rgba(249,133,19,0.12)",
                      border: "1px solid rgba(249,133,19,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "32px",
                    }}
                  >
                    <CalendarDays size={32} style={{ color: "#d4821a" }} />
                  </motion.div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "rgba(249,133,19,0.08)",
                      border: "1px solid rgba(249,133,19,0.25)",
                      borderRadius: "999px",
                      padding: "8px 20px",
                      marginBottom: "28px",
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
                        fontWeight: 700,
                        color: "#d4821a",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(28px, 4vw, 44px)",
                      letterSpacing: "-1px",
                      color: "#f0ece0",
                      lineHeight: 1.15,
                      marginBottom: "16px",
                      maxWidth: "600px",
                    }}
                  >
                    Next meetup is in the works.
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "#bcbccc",
                      maxWidth: "480px",
                      marginBottom: "36px",
                    }}
                  >
                    We&apos;re locking in the details for our next event. Follow us on
                    Meetup to get notified the moment it drops.
                  </p>

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
                    Follow on Meetup
                  </GlowButton>
                </div>
              </div>
            </RevealOnScroll>
          </motion.div>
        ) : (
          <motion.div
            key="past"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
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
                <RevealOnScroll key={event.title} delay={i * 0.06}>
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
                        color: "#8a8a9a",
                      }}
                    >
                      {event.speaker}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom spacing */}
      <div style={{ height: "100px" }} />
    </section>
  );
}
