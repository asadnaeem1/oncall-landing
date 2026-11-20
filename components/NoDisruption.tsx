import { CheckIcon } from "./icons";
import { Kicker, Section, SectionHeading } from "./Section";

const POINTS = [
  {
    strong: "No CRM migration.",
    rest: " It sits on top of what you have. Nothing moves.",
  },
  {
    strong: "No new dashboard, no new login.",
    rest: " Results appear where your team already works.",
  },
  {
    strong: "Your agents' workflow doesn't change.",
    rest: " Leads simply arrive qualified, with the appointment already booked.",
  },
  {
    strong: "It runs in parallel.",
    rest: " Nothing gets switched off to try it.",
  },
  {
    strong: "Your existing follow-up campaigns are audited first",
    rest: ", so leads never get double-messaged.",
  },
  {
    strong: "You can switch it off instantly.",
    rest: " Your CRM stays your system of record the entire time. If you stop tomorrow, your data is complete and it's yours.",
  },
];

export default function NoDisruption() {
  return (
    <Section>
      <Kicker index="06" label="It doesn't disrupt anything" />
      <SectionHeading maxWidth="20ch" style={{ marginBottom: 12 }}>
        You have enough tools. This isn&apos;t another one.
      </SectionHeading>
      <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 clamp(28px,3.5vw,40px)", maxWidth: "60ch" }}>
        Most software asks you to change how you work. This is a service that fits how you already
        work.
      </p>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px 40px",
        }}
      >
        {POINTS.map((p) => (
          <li key={p.strong} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <CheckIcon size={22} color="var(--color-accent)" style={{ flex: "none", marginTop: 2 }} />
            <span style={{ fontSize: 17, lineHeight: 1.5 }}>
              <strong style={{ fontWeight: 700 }}>{p.strong}</strong>
              {p.rest}
            </span>
          </li>
        ))}
      </ul>
      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.01em",
          fontSize: "clamp(24px,3vw,36px)",
          lineHeight: 1.2,
          margin: "clamp(36px,4.5vw,56px) 0 0",
          color: "var(--kicker)",
        }}
      >
        We do the custom work. You don&apos;t.
      </p>
    </Section>
  );
}
