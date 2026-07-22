import Waveform from "./Waveform";

export type GlyphType = "ring" | "wave" | "check" | "cal";

// Small looping glyph for each "What it does" card. Each maps to the concrete
// action — a call ringing out, a live conversation, a qualification check
// being made, an appointment slot filling. Decorative, so hidden from AT.
export default function CapabilityGlyph({ type }: { type: GlyphType }) {
  if (type === "wave") {
    return <Waveform bars={7} height={26} className="g-wave" />;
  }

  if (type === "ring") {
    return (
      <span className="g-ring" aria-hidden="true">
        <i />
        <b />
        <b />
        <b />
      </span>
    );
  }

  if (type === "check") {
    return (
      <span className="g-check" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" opacity="0.35" />
          <path d="M8 12.4l2.6 2.6L16 9.4" />
        </svg>
      </span>
    );
  }

  return (
    <span className="g-cal" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="5" width="17" height="15" rx="1" />
        <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
        <rect className="slot" x="7" y="12" width="4.5" height="3.2" rx="0.5" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
