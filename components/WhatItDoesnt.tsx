import { XIcon } from "./icons";
import { Kicker, Section, SectionHeading } from "./Section";

const LIMITS = [
  {
    strong: "It doesn't replace your agents.",
    rest: " It's a setter. Showings, negotiation, advice on terms, and closing stay with your licensed people — by design.",
  },
  {
    strong: "It doesn't generate leads.",
    rest: " It converts the ones you're already paying for. If you don't have lead flow, we're the wrong fit.",
  },
  {
    strong: "It doesn't cold-call purchased lists.",
    rest: " It works inbound leads who gave you their information. That's a legal boundary, not a preference.",
  },
  {
    strong: "It doesn't pretend to be human when it shouldn't.",
    rest: " Some callers will work out it's AI. Our job is that it's good enough that they stay on the call anyway — and it identifies itself where the law requires.",
  },
];

export default function WhatItDoesnt() {
  return (
    <Section>
      <Kicker index="06" label="What it doesn't do" />
      <SectionHeading style={{ marginBottom: 12 }}>
        Where we draw the line.
      </SectionHeading>
      <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 clamp(28px,3.5vw,40px)", maxWidth: "60ch" }}>
        Plenty of vendors will tell you AI can do everything. Here&apos;s what this doesn&apos;t
        do, so nothing is a surprise later.
      </p>
      <div style={{ display: "grid", gap: 0 }}>
        {LIMITS.map((l, i) => (
          <div
            key={l.strong}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              padding: "22px 0",
              borderTop: "1px solid var(--color-divider)",
              borderBottom: i === LIMITS.length - 1 ? "1px solid var(--color-divider)" : undefined,
            }}
          >
            <XIcon
              size={24}
              color="color-mix(in srgb,var(--color-text) 55%,transparent)"
              style={{ flex: "none", marginTop: 2 }}
            />
            <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: "74ch" }}>
              <strong style={{ fontWeight: 700 }}>{l.strong}</strong>
              {l.rest}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
