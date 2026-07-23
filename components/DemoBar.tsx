import { MicIcon } from "./icons";

// A thin, non-sticky strip above the nav pointing at the live voice demo.
// Deliberately not sticky — it scrolls away with the rest of the page, so
// it doesn't sit there permanently while someone reads. The nav becomes the
// topmost sticky element once this scrolls past.
export default function DemoBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 8,
        background: "var(--band-bg)",
        color: "#fff",
        padding: "10px clamp(16px,4vw,40px)",
        fontFamily: "var(--font-heading)",
        fontSize: 13,
        letterSpacing: "0.02em",
        textAlign: "center",
      }}
    >
      <MicIcon size={14} color="color-mix(in srgb,#fff 85%,transparent)" />
      <span>New — talk to the OnCall agent live, right in your browser.</span>
      <a
        href="#demo"
        style={{
          color: "#fff",
          fontWeight: 600,
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        Try it →
      </a>
    </div>
  );
}
