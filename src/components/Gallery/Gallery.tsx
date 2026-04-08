"use client";

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
];

export default function Gallery() {
  return (
    <section className="gallery-section relative py-28 md:py-40 overflow-hidden" style={{ paddingTop: "120px", background: "#07070d" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_60%,rgba(155,172,216,0.05),transparent)] pointer-events-none" />

      <div className="section-container mb-16">
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

        <RevealOnScroll delay={0.2}>
          <p className="t-body-lg mt-6 max-w-lg">
            Drag to explore. Click any photo to expand.
          </p>
        </RevealOnScroll>
      </div>

      {/* Carousel — full bleed */}
      <RevealOnScroll delay={0.3}>
        <ThreeDPhotoCarousel images={GALLERY_IMAGES} />
      </RevealOnScroll>
    </section>
  );
}
