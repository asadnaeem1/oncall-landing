import VoiceDemo from "./VoiceDemo";

export default function Demo() {
  return (
    <section
      id="demo"
      className="band"
      data-reveal=""
      style={{
        scrollMarginTop: 80,
        margin: "clamp(40px,5vw,72px) 0",
        color: "#fff",
        padding: "clamp(44px,6vw,88px) clamp(24px,5vw,72px)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 10,
          border: "1px solid color-mix(in srgb,#fff 22%,transparent)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            fontFamily: "var(--font-heading)",
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-accent-200)",
            marginBottom: 22,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#7ee0a8",
              display: "inline-block",
              animation: "ocPulse 1.8s ease-in-out infinite",
            }}
          />
          Live demo agent
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 1.04,
            fontSize: "clamp(34px,5.5vw,64px)",
            margin: 0,
          }}
        >
          Don&apos;t take our word for it. Talk to it.
        </h2>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            margin: "clamp(22px,3vw,32px) auto 0",
            maxWidth: "60ch",
            color: "color-mix(in srgb,#fff 82%,transparent)",
          }}
        >
          Every AI voice product claims it sounds natural. The only way to know is to talk to one.
        </p>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            margin: "16px auto 0",
            maxWidth: "60ch",
            color: "color-mix(in srgb,#fff 82%,transparent)",
          }}
        >
          Press the button below and you&apos;ll be talking to a live OnCall agent — configured for
          a sample brokerage — right here in your browser. Ask it hard questions. Interrupt it. Try
          to trip it up. Then decide whether it belongs in front of your leads.
        </p>
        <VoiceDemo />
      </div>
    </section>
  );
}
