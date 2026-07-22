import { PhoneIcon } from "./icons";
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/constants";

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
          Don&apos;t take our word for it. Call it.
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
          Every AI voice product claims it sounds natural. The only way to know is to pick up a
          phone.
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
          Call the number below. You&apos;ll talk to a live OnCall agent configured for a sample
          brokerage. Ask it hard questions. Interrupt it. Try to trip it up. Then decide whether
          it belongs in front of your leads.
        </p>
        <a
          href={DEMO_PHONE_TEL}
          className="demo-call"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            margin: "clamp(32px,4vw,48px) 0 0",
            textDecoration: "none",
            color: "#fff",
            border: "1px solid color-mix(in srgb,#fff 45%,transparent)",
            padding: "clamp(18px,2.4vw,28px) clamp(24px,3.5vw,48px)",
          }}
        >
          <PhoneIcon size={34} />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "clamp(34px,5.5vw,60px)",
              letterSpacing: "0.01em",
              fontFeatureSettings: "'tnum' 1",
              whiteSpace: "nowrap",
            }}
          >
            {DEMO_PHONE_DISPLAY}
          </span>
        </a>
        <p
          style={{
            fontSize: 16,
            letterSpacing: "0.02em",
            margin: "clamp(20px,2.5vw,28px) 0 0",
            color: "var(--color-accent-200)",
          }}
        >
          No form. No email required. Just call.
        </p>
      </div>
    </section>
  );
}
