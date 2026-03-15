"use client";

interface MarqueeStripProps {
  items: string[];
  separator?: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function MarqueeStrip({
  items,
  separator = " / ",
  className = "",
  speed = "normal",
}: MarqueeStripProps) {
  const speedClass =
    speed === "slow"
      ? "[animation-duration:40s]"
      : speed === "fast"
        ? "[animation-duration:15s]"
        : "[animation-duration:25s]";

  const content = items.join(separator) + separator;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none ${className}`}
      aria-hidden="true"
    >
      <div className={`animate-marquee inline-flex ${speedClass}`}>
        <span className="inline-block pr-4">{content}</span>
        <span className="inline-block pr-4">{content}</span>
        <span className="inline-block pr-4">{content}</span>
        <span className="inline-block pr-4">{content}</span>
      </div>
    </div>
  );
}
