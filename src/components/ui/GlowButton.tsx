"use client";

import { type ReactNode, type CSSProperties } from "react";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function GlowButton({
  children,
  className = "",
  style,
  href,
  target,
  rel,
  onClick,
}: GlowButtonProps) {
  const Tag = href ? "a" : "button";

  return (
    <div className="relative flex items-center justify-center group">
      {/* Outer spinning conic border — orange + lavender */}
      <div
        className="absolute z-[-1] overflow-hidden rounded-full pointer-events-none"
        style={{
          inset: "-5px",
          filter: "blur(4px)",
        }}
      >
        <div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2000ms] rotate-[60deg] group-hover:rotate-[-120deg] group-focus-within:rotate-[420deg] group-focus-within:duration-[4000ms]"
          style={{
            backgroundImage:
              "conic-gradient(#000, #F98513 5%, #000 38%, #000 50%, #9BACD8 60%, #000 87%)",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Secondary inner glow layer */}
      <div
        className="absolute z-[-1] overflow-hidden rounded-full pointer-events-none"
        style={{
          inset: "-4px",
          filter: "blur(3px)",
        }}
      >
        <div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2000ms] rotate-[82deg] group-hover:rotate-[-98deg] group-focus-within:rotate-[442deg] group-focus-within:duration-[4000ms]"
          style={{
            backgroundImage:
              "conic-gradient(rgba(0,0,0,0), rgba(249,133,19,0.6), rgba(0,0,0,0) 10%, rgba(0,0,0,0) 50%, rgba(155,172,216,0.5), rgba(0,0,0,0) 60%)",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Highlight rim — soft lavender */}
      <div
        className="absolute z-[-1] overflow-hidden rounded-full pointer-events-none"
        style={{
          inset: "-3px",
          filter: "blur(2px)",
        }}
      >
        <div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2000ms] rotate-[83deg] group-hover:rotate-[-97deg] group-focus-within:rotate-[443deg] group-focus-within:duration-[4000ms]"
          style={{
            backgroundImage:
              "conic-gradient(rgba(0,0,0,0) 0%, #9BACD8 4%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 50%, #F98513 55%, rgba(0,0,0,0) 58%)",
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.4)",
          }}
        />
      </div>

      {/* Pink/orange ambient glow blob */}
      <div
        className="pointer-events-none absolute w-12 h-6 left-2 top-2 blur-2xl opacity-60 transition-all duration-[2000ms] group-hover:opacity-0"
        style={{ background: "#F98513" }}
      />

      {/* The actual button */}
      <Tag
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`relative z-10 ${className}`}
        style={style}
      >
        {children}
      </Tag>
    </div>
  );
}
