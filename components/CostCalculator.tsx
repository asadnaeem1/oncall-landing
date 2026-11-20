"use client";

import { useMemo, useState } from "react";
import { AGENT_PRICING } from "@/lib/elevenlabs-pricing";
import { BASE_INPUTS, TEAM_SIZES, modelMinutes, type CallInputs } from "@/lib/sample-month";

type SizeKey = (typeof TEAM_SIZES)[number]["key"];

const usd = (n: number, digits = 0) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
const int = (n: number) => Math.round(n).toLocaleString("en-US");

function inputsFor(key: SizeKey): CallInputs {
  const size = TEAM_SIZES.find((s) => s.key === key)!;
  return { ...BASE_INPUTS, leads: size.leads, react: size.react };
}

const FIELDS: {
  group: string;
  items: { key: keyof CallInputs; label: string; hint?: string; step: number; max?: number }[];
}[] = [
  {
    group: "New-lead response",
    items: [
      { key: "leads", label: "New leads per month", step: 10 },
      { key: "attempts", label: "Call attempts per lead", hint: "First call plus follow-up calls", step: 0.1 },
      { key: "connects", label: "Live conversations per lead", hint: "0.63 = 196 conversations from 312 leads", step: 0.01 },
      { key: "talk", label: "Minutes per live conversation", step: 0.1 },
      { key: "vm", label: "Billed minutes per unanswered attempt", hint: "Voicemail detection", step: 0.05 },
      { key: "book", label: "Appointments per lead", hint: "0.12 = 37 from 312", step: 0.01, max: 1 },
    ],
  },
  {
    group: "Database reactivation",
    items: [
      { key: "react", label: "Dormant contacts called per month", step: 50 },
      { key: "rattempts", label: "Attempts per contact", step: 0.5 },
      { key: "rconnect", label: "Connect rate per contact", hint: "0.15 = 15% reached", step: 0.01, max: 1 },
      { key: "rtalk", label: "Minutes per connected call", step: 0.25 },
    ],
  },
];

export default function CostCalculator() {
  const [preset, setPreset] = useState<SizeKey | null>("mid");
  const [inputs, setInputs] = useState<CallInputs>(() => inputsFor("mid"));
  const [rate, setRate] = useState(AGENT_PRICING.perMinute);
  const [burst, setBurst] = useState(0);
  const [roster, setRoster] = useState<Record<SizeKey, number>>({ small: 2, mid: 3, large: 1, brokerage: 0 });

  const clean = (v: string) => {
    const n = parseFloat(v);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  };
  const effRate = rate * (1 + Math.min(burst, 1)); // burst minutes bill at 2× the base rate

  const m = modelMinutes(inputs);
  const cost = m.total * effRate;

  const account = useMemo(() => {
    const rows = TEAM_SIZES.map((s) => {
      const each = modelMinutes(inputsFor(s.key)).total;
      return { ...s, each, n: roster[s.key], total: each * roster[s.key] };
    });
    const totalMinutes = rows.reduce((a, r) => a + r.total, 0);
    const b = Math.min(burst, 1);
    const bills = AGENT_PRICING.plans.map((p) => ({
      ...p,
      bill: p.monthlyFee + Math.max(totalMinutes - p.includedMinutes, 0) * rate + totalMinutes * b * rate,
    }));
    const cheapest = bills.reduce((a, c) => (c.bill < a.bill ? c : a));
    return { rows, totalMinutes, bills, cheapest };
  }, [roster, rate, burst]);

  return (
    <div style={{ display: "grid", gap: "clamp(40px,5vw,64px)" }}>
      <div style={{ display: "grid", gap: 24 }}>
        <div className="chips" role="group" aria-label="Load team-size defaults">
          {TEAM_SIZES.map((s) => (
            <button
              key={s.key}
              type="button"
              className="chip"
              aria-pressed={preset === s.key}
              onClick={() => {
                setPreset(s.key);
                setInputs(inputsFor(s.key));
              }}
            >
              {s.label} · {s.leads.toLocaleString("en-US")} leads
            </button>
          ))}
        </div>

        <div className="calc">
          <form style={{ display: "grid", gap: 24 }} onSubmit={(e) => e.preventDefault()}>
            {FIELDS.map((g) => (
              <fieldset key={g.group}>
                <legend>{g.group}</legend>
                {g.items.map((f) => (
                  <label key={f.key} htmlFor={`calc-${f.key}`}>
                    {f.label}
                    {f.hint ? <span className="hint">{f.hint}</span> : null}
                    <input
                      id={`calc-${f.key}`}
                      type="number"
                      min={0}
                      max={f.max}
                      step={f.step}
                      value={inputs[f.key]}
                      onChange={(e) => {
                        setPreset(null);
                        setInputs({ ...inputs, [f.key]: clean(e.target.value) });
                      }}
                    />
                  </label>
                ))}
              </fieldset>
            ))}
            <fieldset>
              <legend>ElevenLabs rates</legend>
              <label htmlFor="calc-rate">
                $ per call minute
                <span className="hint">
                  {usd(AGENT_PRICING.perMinute, 2)} on every plan (as of {AGENT_PRICING.asOf})
                </span>
                <input id="calc-rate" type="number" min={0} step={0.005} value={rate} onChange={(e) => setRate(clean(e.target.value))} />
              </label>
              <label htmlFor="calc-burst">
                Share of minutes billed as burst
                <span className="hint">
                  {usd(AGENT_PRICING.burstPerMinute, 2)}/min above your concurrency limit
                </span>
                <input id="calc-burst" type="number" min={0} max={1} step={0.01} value={burst} onChange={(e) => setBurst(clean(e.target.value))} />
              </label>
            </fieldset>
          </form>

          <aside className="readout blueprint" aria-live="polite">
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
            <div style={{ display: "grid", gap: 6 }}>
              <span className="kpi-l">Agent minutes cost / month</span>
              <span className="readout-big">{usd(cost)}</span>
              <span className="fine num">
                {int(m.total)} agent minutes at {usd(effRate, 3)} per minute
              </span>
            </div>
            <div>
              <div className="readout-row"><span>Calls placed</span><span>{int(m.calls)}</span></div>
              <div className="readout-row"><span>New-lead minutes</span><span>{int(m.lead)}</span></div>
              <div className="readout-row"><span>Reactivation minutes</span><span>{int(m.react)}</span></div>
              <div className="readout-row"><span>Total minutes</span><span>{int(m.total)}</span></div>
              <div className="readout-row"><span>Cost per new lead</span><span>{usd(m.perLead * effRate, 2)}</span></div>
              <div className="readout-row"><span>Appointments booked</span><span>{int(m.appointments)}</span></div>
              <div className="readout-row">
                <span>Cost per appointment</span>
                <span>{m.appointments ? usd(cost / m.appointments, 2) : "—"}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div style={{ display: "grid", gap: 20 }}>
        <h3 className="mini-h" style={{ fontSize: 22 }}>Running many teams on one ElevenLabs account</h3>
        <p className="lede-p" style={{ fontSize: 16 }}>
          All teams share one account. Change the team counts to see combined minutes and the
          monthly bill on each plan. Each team uses the sample assumptions for its size.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr><th scope="col">Team size</th><th scope="col">Teams</th><th scope="col">Minutes each</th><th scope="col">Minutes total</th></tr>
            </thead>
            <tbody>
              {account.rows.map((r) => (
                <tr key={r.key}>
                  <td>{r.label} · {r.leads.toLocaleString("en-US")} leads</td>
                  <td>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      value={r.n}
                      aria-label={`${r.label} teams`}
                      onChange={(e) => setRoster({ ...roster, [r.key]: Math.floor(clean(e.target.value)) })}
                    />
                  </td>
                  <td>{int(r.each)}</td>
                  <td>{int(r.total)}</td>
                </tr>
              ))}
              <tr className="total">
                <td>Total</td>
                <td>{account.rows.reduce((a, r) => a + r.n, 0)}</td>
                <td />
                <td>{int(account.totalMinutes)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr><th scope="col">ElevenLabs plan</th><th scope="col">Fee</th><th scope="col">Included min</th><th scope="col">Concurrent calls</th><th scope="col">Monthly bill</th></tr>
            </thead>
            <tbody>
              {account.bills.map((b) => (
                <tr key={b.name} className={b === account.cheapest ? "total" : undefined}>
                  <td>{b.name}{b === account.cheapest ? " (cheapest)" : ""}</td>
                  <td>{usd(b.monthlyFee)}</td>
                  <td>{int(b.includedMinutes)}</td>
                  <td>{b.concurrentCalls}</td>
                  <td>{usd(b.bill)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine">
          Every plan charges the same per minute, so once you use them up they cost nearly the
          same. Choose on concurrent calls: a lead blast can start many calls at once, and calls
          above the limit bill at the burst rate.
        </p>
      </div>
    </div>
  );
}
