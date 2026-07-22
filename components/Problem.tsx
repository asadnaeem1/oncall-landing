import { Kicker, Section, SectionHeading } from "./Section";

export default function Problem() {
  return (
    <Section>
      <Kicker index="01" label="The problem" />
      <SectionHeading maxWidth="20ch">
        You already paid for the lead. The only question is whether anyone talks to it.
      </SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(28px,4vw,64px)",
          marginTop: "clamp(32px,4vw,52px)",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" }}>
            A lead comes in at 9:14pm. Your agents are at dinner, at a showing, or asleep. By the
            time someone calls back tomorrow afternoon, that buyer has already spoken to two
            other agents.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" }}>
            This is the most expensive gap in the business, and it has nothing to do with lead
            quality. You are paying full price for leads and capturing a fraction of them, for
            the single reason that nobody is available in the first few minutes.
          </p>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              margin: 0,
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              letterSpacing: "0.01em",
            }}
          >
            Nobody is staffed at 9pm on a Sunday. That&apos;s the problem worth solving.
          </p>
        </div>

        <div className="blueprint" style={{ padding: 0, background: "transparent" }}>
          <i className="corner tl" />
          <i className="corner tr" />
          <i className="corner bl" />
          <i className="corner br" />
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--color-divider)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "color-mix(in srgb,var(--color-text) 62%,transparent)",
              }}
            >
              Lead submitted · Zillow
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 20,
                fontFeatureSettings: "'tnum' 1",
              }}
            >
              9:14 PM
            </span>
          </div>
          <div style={{ padding: 20, borderBottom: "1px solid var(--color-divider)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "color-mix(in srgb,var(--color-text) 55%,transparent)",
                marginBottom: 8,
              }}
            >
              Without OnCall
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontSize: 16, color: "color-mix(in srgb,var(--color-text) 70%,transparent)" }}>
                First callback
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "color-mix(in srgb,var(--color-text) 60%,transparent)",
                }}
              >
                Next afternoon
              </span>
            </div>
            <div style={{ fontSize: 14, color: "color-mix(in srgb,var(--color-text) 58%,transparent)", marginTop: 6 }}>
              Already spoke to two other agents.
            </div>
          </div>
          <div style={{ padding: 20, background: "var(--band-bg)" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent-300)",
                marginBottom: 8,
              }}
            >
              With OnCall
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontSize: 16, color: "color-mix(in srgb,#fff 78%,transparent)" }}>
                Called &amp; qualified
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#fff",
                  fontFeatureSettings: "'tnum' 1",
                }}
              >
                9:14 PM
              </span>
            </div>
            <div style={{ fontSize: 14, color: "var(--color-accent-200)", marginTop: 6 }}>
              Appointment booked before they close the laptop.
            </div>
          </div>
        </div>
      </div>

      <figure
        style={{
          margin: "clamp(32px,4vw,52px) 0 0",
          paddingLeft: "clamp(20px,2.5vw,32px)",
          borderLeft: "2px solid var(--color-accent)",
          maxWidth: "66ch",
        }}
      >
        <blockquote
          style={{
            margin: 0,
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(19px,2.2vw,26px)",
            lineHeight: 1.4,
            letterSpacing: "0.005em",
          }}
        >
          Research on lead response timing found that contacting a lead within five minutes
          rather than thirty makes you dramatically more likely to reach and qualify them.
        </blockquote>
        <figcaption
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            marginTop: 16,
            color: "color-mix(in srgb,var(--color-text) 66%,transparent)",
          }}
        >
          — Lead Response Management study, Dr. James Oldroyd (MIT Sloan) with InsideSales.com,
          analyzing 15,000+ leads and 100,000+ call attempts.
        </figcaption>
      </figure>
    </Section>
  );
}
