"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import DecryptedText from "@/components/ui/DecryptedText";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop",
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
