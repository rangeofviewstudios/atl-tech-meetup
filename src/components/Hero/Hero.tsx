"use client";

import { motion } from "motion/react";
import { MEETUP_URL } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/techmeethero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      {/* Giant Typography — fills viewport */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="text-center w-full">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-[var(--font-display)] font-bold text-white leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(4rem, 15vw, 16rem)",
              }}
            >
              Atlanta
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-[-0.02em]">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-[var(--font-display)] font-bold text-white leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(4rem, 15vw, 16rem)",
              }}
            >
              Tech
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-[-0.02em]">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-[var(--font-display)] font-bold text-white leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(4rem, 15vw, 16rem)",
              }}
            >
              Meetup
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 left-8 right-8 md:bottom-10 md:left-16 md:right-16 z-20 flex items-end justify-between"
      >
        <div>
          <p className="font-[var(--font-body)] font-medium text-[11px] md:text-xs text-white/40 tracking-[0.2em] uppercase">
            Every First Tuesday
          </p>
          <p className="font-[var(--font-body)] text-[10px] text-white/30 tracking-wide mt-1">
            Peachtree Corners, GA
          </p>
        </div>

        <a
          href="#about"
          className="flex flex-col items-center gap-2 group"
        >
          <span className="font-[var(--font-body)] text-[10px] text-white/40 tracking-widest uppercase group-hover:text-white/70 transition-colors duration-300">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </a>

        <div className="text-right">
          <GlowButton
            href={MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full font-[var(--font-body)] font-semibold text-base tracking-wide whitespace-nowrap"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#F4F1EC",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "14px 28px",
              minWidth: "fit-content",
            }}
          >
            RSVP Now
          </GlowButton>
        </div>
      </motion.div>
    </section>
  );
}
