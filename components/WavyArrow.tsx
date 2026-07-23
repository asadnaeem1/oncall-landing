import type { CSSProperties } from "react";

type WavyArrowProps = {
  width?: number;
  /** Rotation in degrees, applied after centering. */
  rotate?: number;
  /** Mirror horizontally — useful for pointing the same curve the other way. */
  flip?: boolean;
  /** Center the arrow horizontally on its positioned anchor before rotating. */
  center?: boolean;
  color?: string;
  className?: string;
  /** Positioning only (top/left/right/bottom) — don't pass `transform` here, it's owned by rotate/flip/center. */
  style?: CSSProperties;
};

// A small hand-drawn-feeling curved arrow, purely decorative — a nudge
// toward "hear it" / "talk to it", not an instruction. Bobs gently forever,
// freezes under reduced motion, and hides on narrow screens where there's
// no room to place it without crowding the CTA it's pointing at.
export default function WavyArrow({
  width = 84,
  rotate = 0,
  flip = false,
  center = false,
  color = "var(--kicker)",
  className,
  style,
}: WavyArrowProps) {
  const height = Math.round(width * 0.4);
  const transform = `${center ? "translateX(-50%) " : ""}rotate(${rotate}deg)${flip ? " scaleX(-1)" : ""}`;

  return (
    <span
      aria-hidden="true"
      className={className ? `wavy-arrow ${className}` : "wavy-arrow"}
      style={{ color, transform, ...style }}
    >
      <span className="wavy-arrow-bob">
        <svg width={width} height={height} viewBox="0 0 100 40" fill="none" aria-hidden="true">
          <path
            d="M4 21 C 18 5, 31 35, 46 19 C 58 5, 70 31, 85 17"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M73 10 L86 17 L74 28"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
    </span>
  );
}
