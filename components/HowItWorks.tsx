import { Kicker, Section, SectionHeading } from "./Section";

const STEPS = [
  {
    n: "1",
    title: "We learn how your team sells",
    body: "One working session. We capture your scripts, your qualification criteria, how leads should route, and what a good appointment looks like to you.",
  },
  {
    n: "2",
    title: "We build it around that",
    body: "We build the agent, connect it to your CRM and calendars, and tune it against real conversations until it sounds like your team rather than a generic bot.",
  },
  {
    n: "3",
    title: "It goes live on your real leads",
    body: "It starts answering. We watch every conversation closely in the early weeks and keep tightening it.",
  },
  {
    n: "4",
    title: "We run it and report",
    body: "You get monthly numbers on response time, contact rate, and appointments booked. We keep improving it as your market and objections shift.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <Kicker index="03" label="How it works" />
      <SectionHeading maxWidth="22ch" style={{ marginBottom: "clamp(32px,4vw,52px)" }}>
        Live in about three weeks. Almost none of it is your work.
      </SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "clamp(24px,3vw,40px)",
        }}
      >
        {STEPS.map((s) => (
          <div key={s.n} style={{ borderTop: "2px solid var(--color-accent)", paddingTop: 20 }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 40,
                lineHeight: 1,
                color: "var(--kicker)",
                fontFeatureSettings: "'tnum' 1",
              }}
            >
              {s.n}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                fontSize: 20,
                lineHeight: 1.2,
                margin: "14px 0 12px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
                color: "color-mix(in srgb,var(--color-text) 82%,transparent)",
              }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.55,
          margin: "clamp(28px,3.5vw,40px) 0 0",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          letterSpacing: "0.01em",
          maxWidth: "60ch",
        }}
      >
        Your side of this is a kickoff session and access. That&apos;s the point.
      </p>
    </Section>
  );
}
