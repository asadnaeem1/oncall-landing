import { Kicker, SectionHeading } from "./Section";

const FAQS = [
  {
    q: "Will it actually sound natural, or like a robot?",
    a: "Some people will know. The relevant question is whether they stay on the call and answer questions — and that's a thing you can test rather than take on faith. Call the demo number above and judge it yourself.",
  },
  {
    q: "Do I have to change my CRM?",
    a: "No. It's built to sit on top of Follow Up Boss, and we support other major CRMs as an add-on. Nothing migrates.",
  },
  {
    q: "What happens when it can't handle a conversation?",
    a: "It hands off. Hot leads can transfer to a live person mid-call, and anything it can't handle gets escalated to your team with the full context attached. Every conversation is recorded and reviewable.",
  },
  {
    q: "Is this legal?",
    a: "It's built around consent — it calls leads who gave you their information, respects calling hours, honors opt-outs immediately, and discloses recording and AI where required. We'll walk through the specifics on the call.",
  },
  {
    q: "How long until it's live?",
    a: "Around three weeks from kickoff. Your involvement is one working session plus access.",
  },
  {
    q: "What if my agents don't want it?",
    a: "Most pushback comes from agents assuming it takes their conversations away. It does the opposite — it catches the lead in the first minute and hands them a qualified person with an appointment already booked.",
  },
  {
    q: "Who's behind this?",
    a: (
      <>
        OnCall is built by <strong style={{ fontWeight: 700 }}>Voir Labs</strong>, an AI
        engineering studio registered in Austin, Texas. We build AI agents, automation, and
        full-stack products, and we&apos;ve shipped production systems handling real money and
        real users. You work directly with the engineers who build your system — not an account
        manager.
      </>
    ),
  },
  {
    q: "What does it cost?",
    a: "It depends on your lead volume and what you need it to do, so we quote after a short conversation rather than guessing. We'll give you a number on the first call once we understand your setup.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="faq"
      data-reveal=""
      style={{
        padding: "clamp(48px,6vw,84px) 0",
        borderTop: "1px solid var(--color-divider)",
        scrollMarginTop: 80,
      }}
    >
      <Kicker index="10" label="FAQ" />
      <SectionHeading style={{ marginBottom: "clamp(28px,4vw,44px)" }}>
        Questions before the call.
      </SectionHeading>
      <div>
        {FAQS.map((item, i) => (
          <details
            key={item.q}
            style={{
              borderTop: "1px solid var(--color-divider)",
              borderBottom: i === FAQS.length - 1 ? "1px solid var(--color-divider)" : undefined,
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                gap: 20,
                alignItems: "baseline",
                padding: "22px 0",
              }}
            >
              <span
                className="faq-q"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "clamp(19px,2.2vw,24px)",
                  letterSpacing: "0.005em",
                  lineHeight: 1.25,
                }}
              >
                {item.q}
              </span>
              <span
                className="faq-sign"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 26,
                  color: "var(--color-accent)",
                  flex: "none",
                  lineHeight: 1,
                }}
              />
            </summary>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                margin: "0 0 24px",
                maxWidth: "74ch",
                color: "color-mix(in srgb,var(--color-text) 85%,transparent)",
              }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
