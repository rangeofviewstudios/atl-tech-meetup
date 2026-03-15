"use client";

import { motion } from "motion/react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { STATS } from "@/lib/constants";

export default function About() {
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
              <p className="t-body-lg mb-6 max-w-xl">
                Every first Tuesday, Atlanta&apos;s sharpest minds in tech
                converge at Atlanta Tech Park in Peachtree Corners. No fluff, no
                pitch decks — just real conversations about AI, software
                engineering, cloud architecture, and what&apos;s actually
                working in production.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <p className="t-body max-w-xl">
                We believe the best ideas emerge from genuine connection.
                Whether you&apos;re a senior engineer, a startup founder, or
                someone exploring their first role in tech — you belong here.
              </p>
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
