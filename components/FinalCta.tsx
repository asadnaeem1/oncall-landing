import { CALENDLY_URL, DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section
      style={{
        margin: "clamp(40px,5vw,72px) 0",
        background: "var(--band-bg)",
        color: "#fff",
        padding: "clamp(48px,7vw,96px) clamp(24px,5vw,72px)",
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
      <div style={{ position: "relative", maxWidth: 760 }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 1.05,
            fontSize: "clamp(32px,5vw,58px)",
            margin: 0,
            maxWidth: "22ch",
          }}
        >
          How many leads did you pay for last month that nobody called back?
        </h2>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            margin: "clamp(24px,3vw,34px) 0 0",
            maxWidth: "62ch",
            color: "color-mix(in srgb,#fff 84%,transparent)",
          }}
        >
          Twenty minutes. We&apos;ll look at your lead flow, show you exactly how this would work
          with your CRM, and tell you honestly whether it&apos;s worth doing.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            marginTop: "clamp(28px,3.5vw,40px)",
          }}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              color: "var(--color-accent-900)",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 17,
              letterSpacing: "0.01em",
              padding: "16px 30px",
              minHeight: 54,
              textDecoration: "none",
              border: "1px solid #fff",
            }}
          >
            Book a 20-minute call
          </a>
          <span style={{ fontSize: 16, color: "color-mix(in srgb,#fff 80%,transparent)" }}>
            Or call the demo agent first:{" "}
            <a
              href={DEMO_PHONE_TEL}
              style={{
                color: "#fff",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                textUnderlineOffset: 4,
              }}
            >
              {DEMO_PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
