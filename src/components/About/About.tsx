"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { STATS } from "@/lib/constants";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(161deg, rgba(17, 17, 68, 0.20) 11.86%, rgba(34, 51, 130, 0.20) 88.14%)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Decorative diagonal line */}
      <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-accent/30 to-transparent hidden lg:block" style={{ right: "38%" }} />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left — Content */}
          <div>
            <RevealOnScroll>
              <span className="t-label text-accent">About ATM</span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <motion.div
                className="w-10 h-[2px] bg-accent mt-5 mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <h2 className="t-h1 mb-8">
                A community of savvy leaders building tomorrow&apos;s
                technology.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="max-w-xl">
                <button
                  onClick={() => setExpanded(!expanded)}
                  style={{
                    background: "rgba(249,133,19,0.08)",
                    border: "1px solid rgba(249,133,19,0.25)",
                    borderRadius: "999px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 22px 10px 16px",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: "#d4821a",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(249,133,19,0.15)";
                    e.currentTarget.style.borderColor = "rgba(249,133,19,0.45)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(249,133,19,0.1)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(249,133,19,0.08)";
                    e.currentTarget.style.borderColor = "rgba(249,133,19,0.25)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <motion.span
                    animate={{ rotate: expanded ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      display: "inline-flex",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(249,133,19,0.15)",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#d4821a",
                    }}
                  >
                    ›
                  </motion.span>
                  {expanded ? "Read less" : "Read more about ATM"}
                </button>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: "hidden", marginTop: "20px" }}
                    >
                      <p className="t-body-lg" style={{ marginBottom: "16px" }}>
                        Every first Tuesday, Atlanta&apos;s sharpest minds in tech
                        converge at Atlanta Tech Park in Peachtree Corners. No fluff, no
                        pitch decks — just real conversations about AI, software
                        engineering, cloud architecture, and what&apos;s actually
                        working in production.
                      </p>
                      <p className="t-body">
                        We believe the best ideas emerge from genuine connection.
                        Whether you&apos;re a senior engineer, a startup founder, or
                        someone exploring their first role in tech — you belong here.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — Stats */}
          <div className="lg:pt-16">
            <div className="space-y-6">
              {STATS.map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={0.2 + i * 0.12} direction="left">
                  <div className="group relative rounded-xl p-6 transition-all duration-500 bg-transparent hover:bg-transparent">
                    {/* Accent line on hover */}
                    <div className="absolute top-0 left-0 w-0 h-full rounded-l-xl bg-accent/10 transition-all duration-500 group-hover:w-1" />
                    <div className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="t-label text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
