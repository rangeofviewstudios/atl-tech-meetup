"use client";

import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MEETUP_URL } from "@/lib/constants";

export default function JoinCTA() {
  return (
    <section className="relative pt-32 md:pt-44 pb-0 overflow-hidden">
      {/* Atmospheric background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(161deg, rgba(17, 17, 68, 0.30) 11.86%, rgba(34, 51, 130, 0.30) 88.14%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,133,19,0.10),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(155,172,216,0.08),transparent)]" />

      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      {/* CTA Content */}
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-10 text-center pb-36 md:pb-48">
        <SplitText
          text="Connect. Learn. Build."
          className="font-[var(--font-display)] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.03em] mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          as="h2"
          delay={0.1}
          staggerDelay={0.04}
        />
        <SplitText
          text="Take your seat at the table."
          className="font-[var(--font-display)] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.03em] mb-10"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          as="h2"
          delay={0.3}
          staggerDelay={0.04}
        />

        <RevealOnScroll delay={0.5}>
          <p className="font-[var(--font-body)] font-medium text-secondary text-xl mb-12">
            Make networking easier than ever.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
          <MagneticButton href={MEETUP_URL} variant="filled" className="!bg-[var(--text-primary)] !text-black !px-10 !py-5 !text-lg !font-semibold !rounded-full hover:!shadow-[0_0_40px_rgba(244,241,236,0.15)]">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-black text-[var(--text-primary)] rounded-xl mr-3">
              <ArrowRight size={18} />
            </span>
            Join the Meetup
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
