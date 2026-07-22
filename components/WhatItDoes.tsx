import { Kicker, Section, SectionHeading } from "./Section";

const CAPABILITIES = [
  {
    n: "01",
    title: "Calls in under 60 seconds",
    body: "The moment a lead hits your CRM, it rings. Nights, weekends, holidays, the middle of a listing appointment. Every lead, every time, no exceptions.",
  },
  {
    n: "02",
    title: "Holds a real conversation",
    body: "Not a text blast, not a recorded message. It talks — and it's trained on your scripts, your market, your price points, and the objections your team actually hears.",
  },
  {
    n: "03",
    title: "Qualifies properly",
    body: "Buying or selling, timeline, price range, financing, area, whether they're already working with an agent, and what's actually motivating the move. Delivered as a summary your agent reads in ten seconds.",
  },
  {
    n: "04",
    title: "Books the appointment",
    body: "Straight onto the right agent's calendar. When a lead is hot, it transfers to a live human mid-call instead of scheduling for later.",
  },
];

export default function WhatItDoes() {
  return (
    <Section id="what" reveal={false}>
      <Kicker index="02" label="What it does" />
      <SectionHeading maxWidth="22ch" style={{ marginBottom: "clamp(32px,4vw,52px)" }}>
        A full inside sales agent, working every hour you don&apos;t.
      </SectionHeading>
      <div
        data-reveal-stagger=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "clamp(24px,3vw,40px)",
        }}
      >
        {CAPABILITIES.map((c) => (
          <div key={c.n} className="blueprint card-hover" style={{ padding: 26 }}>
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--kicker)",
              }}
            >
              {c.n}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                fontSize: 23,
                lineHeight: 1.15,
                margin: "10px 0 12px",
              }}
            >
              {c.title}
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
                color: "color-mix(in srgb,var(--color-text) 82%,transparent)",
              }}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
