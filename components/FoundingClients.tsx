import { Kicker, Section, SectionHeading } from "./Section";
import { CALENDLY_URL } from "@/lib/constants";

export default function FoundingClients() {
  return (
    <Section>
      <div className="blueprint" style={{ padding: "clamp(32px,5vw,64px)" }}>
        <i className="corner tl" />
        <i className="corner tr" />
        <i className="corner bl" />
        <i className="corner br" />
        <Kicker index="09" label="Founding clients" />
        <SectionHeading maxWidth="20ch" style={{ marginBottom: 24 }}>
          We&apos;re taking on three founding clients.
        </SectionHeading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(20px,3vw,48px)",
            alignItems: "start",
          }}
        >
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" }}>
              OnCall is new. We&apos;re being deliberate about the first teams we work with, and
              we&apos;re offering founding terms to three of them.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" }}>
              In exchange for preferential pricing, we ask for something specific: your honest
              feedback while we tune it, permission to document the results, and a willingness to
              take a reference call once it&apos;s working.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0 }}>
              If you&apos;d rather wait until there&apos;s a long list of case studies, that&apos;s
              a reasonable position and we&apos;ll be here. If you&apos;d rather get in early, get
              a better rate, and have direct access to the engineer building it, let&apos;s talk.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(80px,12vw,128px)",
                lineHeight: 0.85,
                color: "var(--color-accent)",
                letterSpacing: "0.01em",
              }}
            >
              03
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 14,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "color-mix(in srgb,var(--color-text) 62%,transparent)",
              }}
            >
              Founding seats available
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              style={{ fontSize: 16, padding: "14px 24px", minHeight: 52, marginTop: 6 }}
            >
              Talk about founding terms
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
