import { CheckIcon, XIcon } from "./icons";
import { Kicker, Section, SectionHeading } from "./Section";

const GOOD_FIT = [
  "Run a team or brokerage with roughly 5–50 agents",
  "Spend real money on leads every month — Zillow, Realtor.com, Facebook, Google",
  "Use Follow Up Boss, or another serious CRM",
  "Have more leads arriving than your people can call quickly",
];

const NOT_A_FIT = [
  "Are a solo agent, or closing fewer than about 15 deals a year",
  "Don't buy leads",
  "Want software you configure and manage yourself — there are cheaper products for that, and you should buy one",
];

export default function WhoItsFor() {
  return (
    <Section reveal={false}>
      <Kicker index="08" label="Who it's for" />
      <SectionHeading maxWidth="22ch" style={{ marginBottom: "clamp(32px,4vw,52px)" }}>
        This works best for a specific kind of team.
      </SectionHeading>
      <div
        data-reveal-stagger=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(24px,3vw,40px)",
        }}
      >
        <div className="blueprint card-hover" style={{ padding: "30px 28px" }}>
          <i className="corner tl" />
          <i className="corner tr" />
          <i className="corner bl" />
          <i className="corner br" />
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              fontSize: 20,
              margin: "0 0 22px",
              color: "var(--kicker)",
            }}
          >
            A good fit if you
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 16 }}>
            {GOOD_FIT.map((item) => (
              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckIcon size={20} color="var(--color-accent)" style={{ flex: "none", marginTop: 2 }} />
                <span style={{ fontSize: 16, lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="blueprint card-hover" style={{ padding: "30px 28px" }}>
          <i className="corner tl" />
          <i className="corner tr" />
          <i className="corner bl" />
          <i className="corner br" />
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              fontSize: 20,
              margin: "0 0 22px",
              color: "color-mix(in srgb,var(--color-text) 60%,transparent)",
            }}
          >
            Probably not a fit if you
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 16 }}>
            {NOT_A_FIT.map((item) => (
              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <XIcon
                  size={20}
                  color="color-mix(in srgb,var(--color-text) 50%,transparent)"
                  style={{ flex: "none", marginTop: 2 }}
                />
                <span
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "color-mix(in srgb,var(--color-text) 80%,transparent)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.55,
          margin: "clamp(28px,3.5vw,40px) 0 0",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          letterSpacing: "0.01em",
          maxWidth: "64ch",
        }}
      >
        We&apos;d rather tell you on the first call that this isn&apos;t right for you than sell
        you something that won&apos;t work.
      </p>
    </Section>
  );
}
