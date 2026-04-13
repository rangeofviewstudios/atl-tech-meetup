"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Grid3x3, RotateCcw, ChevronLeft, ChevronRight, X } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import DecryptedText from "@/components/ui/DecryptedText";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

const GALLERY_IMAGES = [
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/techmeet2/atm4-8-26.jpg",
  "/images/techmeet2/atm4-8-42.jpg",
  "/images/techmeet2/atm4-8-50.jpg",
  "/images/techmeet2/atm4-8-61.jpg",
  "/images/techmeet2/atm4-8-62.jpg",
  "/images/techmeet2/atm4-8-74.jpg",
  "/images/techmeet2/atm4-8-78.jpg",
  "/images/techmeet2/atm4-8-89.jpg",
  "/images/techmeet2/atm4-8-97.jpg",
  "/images/techmeet2/atm4-8-99.jpg",
];

function seededShuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  let seed = 42;
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 0) % 2147483647;
    const j = seed % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const CAROUSEL_IMAGES = seededShuffle(GALLERY_IMAGES);

type ViewMode = "grid" | "carousel";

function GalleryGrid({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (activeIndex !== null) setActiveIndex((activeIndex + 1) % images.length);
    },
    [activeIndex, images.length]
  );

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (activeIndex !== null)
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    },
    [activeIndex, images.length]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") setActiveIndex((activeIndex + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
      if (e.key === "Escape") setActiveIndex(null);
    },
    [activeIndex, images.length]
  );

  return (
    <>
      {/* Lightbox with nav */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveIndex(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                zIndex: 2,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={goPrev}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                zIndex: 2,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                zIndex: 2,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <span
              style={{
                position: "absolute",
                bottom: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.08em",
              }}
            >
              {activeIndex + 1} / {images.length}
            </span>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={images[activeIndex]}
                src={images[activeIndex]}
                alt={`Gallery photo ${activeIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "min(90vw, 1200px)",
                  maxHeight: "82vh",
                  borderRadius: "8px",
                  objectFit: "contain",
                  boxShadow: "0 32px 100px rgba(0,0,0,0.8)",
                  cursor: "default",
                }}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5-column flush grid */}
      <div className="section-container">
        <div className="gallery-grid-5">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, amount: 0.1 }}
              onClick={() => setActiveIndex(i)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "1",
                borderRadius: "8px",
              }}
            >
              <img
                src={src}
                alt={`Meetup moment ${i + 1}`}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                  e.currentTarget.style.filter = "brightness(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Gallery() {
  const [mode, setMode] = useState<ViewMode>("grid");

  return (
    <section
      className="gallery-section relative py-28 md:py-40 overflow-hidden"
      style={{ paddingTop: "120px", background: "#07070d" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_60%,rgba(155,172,216,0.05),transparent)] pointer-events-none" />

      <div className="section-container mb-32">
        <div
          className="gallery-header"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div>
            <RevealOnScroll>
              <div className="mb-4">
                <DecryptedText
                  text="FROM THE COMMUNITY"
                  className="t-label text-accent tracking-[0.25em]"
                  speed={35}
                />
              </div>
            </RevealOnScroll>

            <h2 className="t-h1">
              <DecryptedText
                text="Moments from"
                animateOn="inViewHover"
                sequential
                revealDirection="start"
                speed={30}
                className="text-[var(--text-primary)]"
                encryptedClassName="text-secondary/30"
              />
              <br />
              <DecryptedText
                text="past meetups."
                animateOn="inViewHover"
                sequential
                revealDirection="start"
                speed={30}
                className="text-[var(--text-primary)]"
                encryptedClassName="text-secondary/30"
              />
            </h2>
          </div>

          {/* View toggle */}
          <RevealOnScroll delay={0.2}>
            <div
              style={{
                display: "flex",
                background: "#111118",
                borderRadius: "999px",
                padding: "4px",
                border: "1px solid #1e1e2a",
                marginBottom: "8px",
                position: "relative",
              }}
            >
              <motion.div
                layout
                style={{
                  position: "absolute",
                  top: "4px",
                  bottom: "4px",
                  width: "calc(50% - 4px)",
                  borderRadius: "999px",
                  background: "#d4821a",
                }}
                animate={{
                  left: mode === "grid" ? "4px" : "calc(50%)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
              <button
                onClick={() => setMode("grid")}
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: mode === "grid" ? "#07070d" : "#666",
                  transition: "color 0.3s",
                }}
              >
                <Grid3x3 size={14} strokeWidth={2} />
                Grid
              </button>
              <button
                onClick={() => setMode("carousel")}
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: mode === "carousel" ? "#07070d" : "#666",
                  transition: "color 0.3s",
                }}
              >
                <RotateCcw size={14} strokeWidth={2} />
                3D
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <GalleryGrid images={GALLERY_IMAGES} />
          </motion.div>
        ) : (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ThreeDPhotoCarousel images={CAROUSEL_IMAGES} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
