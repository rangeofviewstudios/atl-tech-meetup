"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SPEAKERS } from "@/lib/constants";

export default function Speakers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="community"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="w-full max-w-[var(--max-width)] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <RevealOnScroll>
              <span className="t-label text-accent">Community</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="t-h1 mt-4">
                The Voices Shaping
                <br className="hidden md:block" /> Atlanta&apos;s Tech Scene
              </h2>
            </RevealOnScroll>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-10 pb-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {SPEAKERS.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-shrink-0 w-[280px] snap-start group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-bg-surface">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Quote overlay on hover */}
                <div className="absolute inset-0 bg-accent/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-bg-primary text-center font-medium text-sm italic leading-relaxed">
                    &ldquo;{speaker.quote}&rdquo;
                  </p>
                </div>

                {/* Name on card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">
                    {speaker.name}
                  </p>
                </div>
              </div>

              <p className="text-text-secondary text-xs tracking-wide">
                {speaker.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
