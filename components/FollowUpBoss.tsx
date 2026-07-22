import { Kicker, Section, SectionHeading } from "./Section";

export default function FollowUpBoss() {
  return (
    <Section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(28px,4vw,64px)",
          alignItems: "start",
        }}
      >
        <div>
          <Kicker index="04" label="Built for Follow Up Boss" />
          <SectionHeading maxWidth="18ch" style={{ marginBottom: 24 }}>
            It lives inside the CRM you already use.
          </SectionHeading>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" }}>
            OnCall is built first and deepest for <strong style={{ fontWeight: 700 }}>Follow Up Boss</strong>.
            New leads trigger it instantly. Calls, recordings, transcripts, conversation summaries,
            and structured qualification data are written back to the contact automatically.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0 }}>
            Nothing to migrate. No second system for your team to check. Your agents open the CRM
            they already open, and the lead is sitting there qualified with an appointment on the
            calendar.
          </p>
        </div>
        <div className="blueprint card-hover" style={{ padding: "32px 28px" }}>
          <i className="corner tl" />
          <i className="corner tr" />
          <i className="corner bl" />
          <i className="corner br" />
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "color-mix(in srgb,var(--color-text) 55%,transparent)",
              marginBottom: 14,
            }}
          >
            Primary integration
          </div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "clamp(30px,4vw,42px)",
              letterSpacing: "0.01em",
              lineHeight: 1.05,
            }}
          >
            Follow Up Boss
          </div>
          <div style={{ height: 1, background: "var(--color-divider)", margin: "26px 0" }} />
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              margin: 0,
              color: "color-mix(in srgb,var(--color-text) 78%,transparent)",
            }}
          >
            On Sierra Interactive, kvCORE/BoldTrail, BoomTown, or Real Geeks? We support additional
            CRMs as a scoped add-on — tell us which one on the call.
          </p>
        </div>
      </div>
    </Section>
  );
}
