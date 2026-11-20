import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";
import CostCalculator from "@/components/CostCalculator";
import { Kicker, Section, SectionHeading } from "@/components/Section";
import { Funnel, KpiGrid, LeadTimeline } from "@/components/SampleMonth";
import { AGENT_PRICING, PRICING_URL } from "@/lib/elevenlabs-pricing";
import {
  SAMPLE_ACTIVITY,
  SAMPLE_BEFORE_AFTER,
  SAMPLE_SIDE_STATS,
  SAMPLE_TEAM,
  sampleMinutes,
} from "@/lib/sample-month";

export const metadata: Metadata = {
  title: "Operations — OnCall by Voir Labs",
  description:
    "A sample month of OnCall for a real estate team: speed to lead, appointments booked, and what the AI agent costs to run.",
  robots: { index: false, follow: true },
};

const usd = (n: number, digits = 2) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
const int = (n: number) => Math.round(n).toLocaleString("en-US");

const METRICS = [
  { h: "Speed", items: ["Median time to first call", "Share of leads called within 60 seconds and 5 minutes", "After-hours and weekend leads handled"] },
  { h: "Conversion", items: ["Contact rate (leads reached live)", "Qualification rate", "Appointments booked and held", "Live transfers to agents", "Signed clients and attributed commission"] },
  { h: "Quality and compliance", items: ["Average conversation length", "Escalations to a human", "Opt-out rate and calling-hours compliance", "Calls reviewed and scored"] },
  { h: "Unit cost", items: ["Agent minutes per lead", "Cost per conversation, qualified lead and appointment", "Agent hours returned to the team"] },
];

function Corners() {
  return (
    <>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </>
  );
}

export default function OperationsPage() {
  const a = SAMPLE_ACTIVITY;
  const mins = sampleMinutes();
  const rate = AGENT_PRICING.perMinute;
  const cost = mins.total * rate;
  const unit = [
    { l: "Per new lead", v: cost / a.leads, d: `${(mins.total / a.leads).toFixed(1)} min per lead` },
    { l: "Per live conversation", v: cost / a.conversations, d: "Including unanswered attempts" },
    { l: "Per qualified lead", v: cost / a.qualified, d: `${a.qualified} qualified` },
    { l: "Per appointment booked", v: cost / a.appointmentsBooked, d: `${a.appointmentsBooked} booked` },
  ];

  return (
    <>
      <Nav />
      <div className="container">
        <header style={{ padding: "clamp(40px,6vw,80px) 0 clamp(24px,3vw,36px)", display: "grid", gap: 18 }}>
          <Kicker index="OnCall" label="Operations" />
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
              lineHeight: 1.02,
              fontSize: "clamp(36px,5.6vw,68px)",
              maxWidth: "18ch",
            }}
          >
            An example month of OnCall, end to end.
          </h1>
          <p className="lede-p">
            Take {SAMPLE_TEAM.description}, from {SAMPLE_TEAM.sources}. Here&apos;s what the AI agent
            does with every new lead, what comes out of it, and what it costs to run.
          </p>
        </header>

        <Section id="results">
          <Kicker index="01" label="Results" />
          <SectionHeading maxWidth="24ch" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            Every lead called in under a minute.
          </SectionHeading>
          <div style={{ display: "grid", gap: "clamp(24px,3vw,36px)" }}>
            <KpiGrid />
            <div className="two-col">
              <div className="blueprint" style={{ padding: "clamp(20px,3vw,28px)", display: "grid", gap: 18 }}>
                <Corners />
                <h3 className="mini-h">Lead funnel</h3>
                <Funnel />
                <p className="fine">{SAMPLE_SIDE_STATS}</p>
              </div>
              <div className="blueprint" style={{ padding: "clamp(20px,3vw,28px)", display: "grid", gap: 18 }}>
                <Corners />
                <h3 className="mini-h">One lead, start to finish</h3>
                <LeadTimeline />
              </div>
            </div>
            <div className="table-scroll">
              <table className="data-table fits-mobile">
                <thead>
                  <tr><th scope="col">Metric</th><th scope="col">Before OnCall</th><th scope="col">With OnCall</th><th scope="col" className="col-change">Change</th></tr>
                </thead>
                <tbody>
                  {SAMPLE_BEFORE_AFTER.map((r) => (
                    <tr key={r.metric}>
                      <td>{r.metric}</td>
                      <td>{r.before}</td>
                      <td>{r.after}</td>
                      <td className="better col-change">{r.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section id="cost">
          <Kicker index="02" label="Operating cost" />
          <SectionHeading maxWidth="24ch" style={{ marginBottom: 16 }}>
            {usd(cost, 0)} in agent minutes for {int(a.calls)} calls.
          </SectionHeading>
          <p className="lede-p" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            ElevenLabs bills the voice agent per call minute at {usd(rate)}. Unanswered calls still
            use a few billed seconds for voicemail detection, so they&apos;re counted too.
          </p>
          <div className="two-col">
            <div className="table-scroll desktop-only">
              <table className="data-table">
                <thead>
                  <tr><th scope="col">Activity</th><th scope="col">Count</th><th scope="col">Min each</th><th scope="col">Minutes</th><th scope="col">Cost</th></tr>
                </thead>
                <tbody>
                  <tr><td>Live conversations</td><td>{int(a.conversations)}</td><td>{a.minutesPerConversation}</td><td>{int(mins.conversation)}</td><td>{usd(mins.conversation * rate)}</td></tr>
                  <tr><td>Unanswered attempts</td><td>{int(a.unanswered)}</td><td>{a.minutesPerUnanswered}</td><td>{int(mins.unanswered)}</td><td>{usd(mins.unanswered * rate)}</td></tr>
                  <tr className="total"><td>Agent minutes</td><td>{int(a.calls)} calls</td><td /><td>{int(mins.total)}</td><td>{usd(cost)}</td></tr>
                  <tr><td className="dim">Telephony (Twilio / SIP)</td><td className="dim" colSpan={4}>Billed separately by the carrier</td></tr>
                  <tr><td className="dim">LLM tokens</td><td className="dim" colSpan={4}>Billed separately by model</td></tr>
                  <tr><td className="dim">Text follow-ups ({int(a.texts)})</td><td className="dim" colSpan={4}>Billed separately</td></tr>
                </tbody>
              </table>
            </div>
            <div className="kpis" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              {unit.map((u) => (
                <div key={u.l} className="kpi">
                  <span className="kpi-l">{u.l}</span>
                  <span className="kpi-v">{usd(u.v)}</span>
                  <span className="kpi-d">{u.d}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="calculator">
          <Kicker index="03" label="Cost calculator" />
          <SectionHeading maxWidth="24ch" style={{ marginBottom: 16 }}>
            What a team of any size costs to run.
          </SectionHeading>
          <p className="lede-p mobile-only">
            The calculator needs a bigger screen. Open this page on a laptop or tablet to model
            your own lead volume.
          </p>
          <div className="desktop-only">
            <p className="lede-p" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
              Pick a team size to load sample assumptions, then change any of them. Minutes per lead
              = live conversations × call length + unanswered attempts × billed voicemail time.
            </p>
            <CostCalculator />
          </div>
        </Section>

        <Section id="metrics">
          <Kicker index="04" label="Reporting" />
          <SectionHeading maxWidth="24ch" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
            What we report to every team, every month.
          </SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "24px 40px" }}>
            {METRICS.map((g) => (
              <div key={g.h} style={{ borderTop: "2px solid var(--color-accent)", paddingTop: 16 }}>
                <h3 className="mini-h" style={{ color: "var(--kicker)", marginBottom: 10 }}>{g.h}</h3>
                <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 6, fontSize: 15.5, lineHeight: 1.5 }}>
                  {g.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="fine" style={{ marginTop: "clamp(28px,3.5vw,40px)", maxWidth: "80ch" }}>
            ElevenLabs agent pricing as of {AGENT_PRICING.asOf}: {usd(rate)} per call minute on every
            plan, {usd(AGENT_PRICING.burstPerMinute)} per burst minute;{" "}
            {AGENT_PRICING.plans.map((p) => `${p.name} $${p.monthlyFee}/mo with ${int(p.includedMinutes)} min and ${p.concurrentCalls} concurrent calls`).join("; ")}.
            LLM and telephony are billed separately. Source:{" "}
            <a href={PRICING_URL} target="_blank" rel="noopener">elevenlabs.io/pricing/agents</a>. The
            example team&apos;s figures are modeled from typical lead volumes and call behavior.
          </p>
        </Section>

        <FinalCta />
        <Footer />
      </div>
    </>
  );
}
