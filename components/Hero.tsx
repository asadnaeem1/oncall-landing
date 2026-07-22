import { CALENDLY_URL } from "@/lib/constants";
import HeroCallPanel from "./HeroCallPanel";

export default function Hero() {
  return (
    <section
      data-reveal=""
      style={{ padding: "clamp(56px,9vw,112px) 0 clamp(48px,7vw,84px)" }}
    >
      <div className="hero-grid">
        <div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.005em",
              lineHeight: 1.03,
              fontSize: "clamp(42px,5.6vw,72px)",
              margin: 0,
            }}
          >
            <span style={{ display: "block" }}>Every new lead</span>
            <span style={{ display: "block" }}>gets a phone call</span>
            <span style={{ display: "block" }}>in 60 seconds.</span>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.5,
              maxWidth: "52ch",
              margin: "clamp(24px,3vw,32px) 0 0",
              color: "color-mix(in srgb,var(--color-text) 88%,transparent)",
            }}
          >
            An AI inside sales agent that answers your Follow Up Boss leads day or night, qualifies
            them in a real conversation, and books the appointment straight onto your agent&apos;s
            calendar. Built around your team. Run by us.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: "clamp(28px,3.5vw,40px)",
            }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              style={{ fontSize: 16, padding: "14px 26px", minHeight: 52 }}
            >
              Book a 20-minute call
            </a>
            <a
              href="#demo"
              className="btn btn-secondary"
              style={{ fontSize: 16, padding: "14px 22px", minHeight: 52 }}
            >
              Hear it for yourself →
            </a>
          </div>
          <p
            style={{
              fontSize: 14,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "color-mix(in srgb,var(--color-text) 58%,transparent)",
              margin: "clamp(24px,3vw,34px) 0 0",
            }}
          >
            Built by Voir Labs · Austin, Texas
          </p>
        </div>

        <HeroCallPanel />
      </div>
    </section>
  );
}
