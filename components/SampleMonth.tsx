import Link from "next/link";
import { Kicker, Section, SectionHeading } from "./Section";
import {
  SAMPLE_FUNNEL,
  SAMPLE_KPIS,
  SAMPLE_SIDE_STATS,
  SAMPLE_TEAM,
  SAMPLE_TIMELINE,
} from "@/lib/sample-month";

export function KpiGrid() {
  return (
    <div className="kpis">
      {SAMPLE_KPIS.map((k) => (
        <div key={k.label} className="kpi">
          <span className="kpi-l">{k.label}</span>
          <span className="kpi-v">{k.value}</span>
          <span className="kpi-d">
            {k.detail}
            {k.highlight ? (
              <>
                {" · "}
                <em>{k.highlight}</em>
              </>
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Funnel() {
  const max = SAMPLE_FUNNEL[0].n;
  return (
    <div className="funnel">
      {SAMPLE_FUNNEL.map((s) => (
        <div key={s.label} className="fstep">
          <span>{s.label}</span>
          <span className="fbar" aria-hidden="true">
            <i style={{ width: `${((s.n / max) * 100).toFixed(1)}%` }} />
          </span>
          <span className="fn">{s.n}</span>
          <span className="fnote">{s.note}</span>
        </div>
      ))}
    </div>
  );
}

export function LeadTimeline() {
  return (
    <ol className="tl">
      {SAMPLE_TIMELINE.map((e) => (
        <li key={e.t}>
          <time>{e.t}</time>
          <div>
            {e.body}
            {e.note ? <div className="tl-note">{e.note}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function SampleMonth() {
  return (
    <Section id="sample">
      <Kicker index="04" label="An example month" />
      <SectionHeading maxWidth="24ch" style={{ marginBottom: 16 }}>
        What 30 days of OnCall looks like for a typical team.
      </SectionHeading>
      <p className="lede-p">
        Take {SAMPLE_TEAM.description}, from {SAMPLE_TEAM.sources}. OnCall calls every lead the
        moment it lands in Follow Up Boss, around the clock. Here&apos;s how that month plays out.
      </p>
      <div style={{ display: "grid", gap: "clamp(24px,3vw,36px)", marginTop: "clamp(24px,3vw,36px)" }}>
        <KpiGrid />
        <div className="two-col">
          <div className="blueprint" style={{ padding: "clamp(20px,3vw,28px)", display: "grid", gap: 18 }}>
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
            <h3 className="mini-h">Lead funnel</h3>
            <Funnel />
            <p className="fine">{SAMPLE_SIDE_STATS}</p>
          </div>
          <div className="blueprint" style={{ padding: "clamp(20px,3vw,28px)", display: "grid", gap: 18 }}>
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
            <h3 className="mini-h">One lead, start to finish</h3>
            <LeadTimeline />
          </div>
        </div>
        <p style={{ fontSize: 17 }}>
          <Link href="/operations" className="text-link">
            See the full month: before and after, and what it cost to run →
          </Link>
        </p>
      </div>
    </Section>
  );
}
