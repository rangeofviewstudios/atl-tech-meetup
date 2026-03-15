"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from "react";
import GlowButton from "@/components/ui/GlowButton";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "filled" | "outlined";
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  href,
  variant = "filled",
  className = "",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "inline-flex items-center gap-2.5 rounded-full font-[var(--font-body)] font-medium text-sm tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer select-none";

  const baseStyle: CSSProperties = { padding: "14px 28px", minWidth: "fit-content" };

  const variantClasses =
    variant === "filled"
      ? "bg-accent text-black"
      : "border border-border-hover text-text-primary hover:border-accent hover:text-accent";

  // Outlined variant doesn't use the glow wrapper
  if (variant === "outlined") {
    const Tag = href ? "a" : "button";
    return (
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <Tag
          href={href}
          onClick={onClick}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`${baseClasses} ${variantClasses} ${className}`}
          style={baseStyle}
        >
          {children}
        </Tag>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <GlowButton
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        style={baseStyle}
      >
        {children}
      </GlowButton>
    </motion.div>
  );
}
