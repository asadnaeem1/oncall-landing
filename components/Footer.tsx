import { CONTACT_EMAIL, VOIR_LABS_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "clamp(40px,5vw,64px) 0 clamp(48px,6vw,80px)",
        borderTop: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "clamp(28px,4vw,56px)",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, letterSpacing: "0.01em" }}>
            OnCall
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              margin: "12px 0 0",
              maxWidth: "34ch",
              color: "color-mix(in srgb,var(--color-text) 72%,transparent)",
            }}
          >
            An AI inside sales agent for real estate teams.
          </p>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--kicker)",
              marginBottom: 12,
            }}
          >
            A product of Voir Labs
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: 0,
              color: "color-mix(in srgb,var(--color-text) 78%,transparent)",
            }}
          >
            AI Agents, Automation &amp; Product Engineering
            <br />
            5900 Balcones Drive, STE 100
            <br />
            Austin, TX 78731
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: "12px 0 0" }}>
            <a href={VOIR_LABS_URL} target="_blank" rel="noopener">
              voirlabs.io
            </a>{" "}
            · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--kicker)",
              marginBottom: 12,
            }}
          >
            Links
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8, fontSize: 15 }}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href={VOIR_LABS_URL} target="_blank" rel="noopener">
                Voir Labs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: "clamp(32px,4vw,52px)",
          paddingTop: 24,
          borderTop: "1px solid var(--color-divider)",
          fontSize: 13,
          color: "color-mix(in srgb,var(--color-text) 60%,transparent)",
        }}
      >
        © 2026 Voir Labs LLC. All rights reserved.
      </div>
    </footer>
  );
}
