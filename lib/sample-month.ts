// Example month used on the homepage and /operations.
//
// These figures are a modeled example for a typical team, not data from a
// real client. The copy frames them as "an example month" / "a typical team";
// keep that framing, and replace with pilot data once a client is live.

export const SAMPLE_TEAM = {
  description: "a 12-agent Follow Up Boss team with ~300 paid leads a month",
  sources: "Zillow, Realtor.com, Facebook and Google",
};

export const SAMPLE_KPIS = [
  { label: "Median time to first call", value: "41 sec", detail: "Was 2 h 47 m", highlight: "96% called within 60 s" },
  { label: "Leads reached live", value: "55%", detail: "171 of 312 · was 31%" },
  { label: "Appointments booked", value: "37", detail: "Was 14 a month", highlight: "2.6×" },
  { label: "After-hours leads handled", value: "128", detail: "41% arrived nights or weekends" },
];

export const SAMPLE_FUNNEL = [
  { label: "New leads", n: 312, note: "Zillow, Realtor.com, Facebook, Google" },
  { label: "Called within 60 s", n: 300, note: "96% of leads" },
  { label: "Reached live", n: 171, note: "55% of leads · 1,148 calls placed" },
  { label: "Qualified", n: 118, note: "69% of reached" },
  { label: "Appointment booked", n: 37, note: "31% of qualified · 12% of leads" },
  { label: "Appointment held", n: 26, note: "70% show rate" },
];

export const SAMPLE_SIDE_STATS = "Live transfers: 14 hot leads handed to an agent mid-call. Escalations: 11 conversations passed to a human with notes. Opt-outs: 9 (2.9%), honored immediately.";

export const SAMPLE_TIMELINE = [
  { t: "Sat 22:14", body: "Zillow lead lands in Follow Up Boss: interested in 3-bed listings." },
  { t: "+38 s", body: "OnCall calls. The lead answers." },
  { t: "+4 m", body: "Qualified: buyer, 60–90 day timeline, pre-approved to $520K, not working with an agent.", note: "Summary, recording and fields written back to Follow Up Boss." },
  { t: "+5 m", body: "Books a Monday 10:30 consult on the assigned agent's calendar. Confirmation text sent." },
  { t: "Mon 08:00", body: "The agent reads a ten-second summary before the call. Nobody dialed on Saturday night." },
];

export const SAMPLE_BEFORE_AFTER = [
  { metric: "Median time to first call", before: "2 h 47 m", after: "41 s", change: "−99%" },
  { metric: "Leads called within 5 minutes", before: "18%", after: "99%", change: "+81 pts" },
  { metric: "Leads reached in a live conversation", before: "31%", after: "55%", change: "+24 pts" },
  { metric: "Leads qualified (timeline, financing, area)", before: "22%", after: "38%", change: "+16 pts" },
  { metric: "Appointments booked", before: "14", after: "37", change: "+164%" },
  { metric: "Appointments held (70% show rate)", before: "10", after: "26", change: "+160%" },
  { metric: "Signed clients (~20% of held)", before: "2", after: "5", change: "+3" },
  { metric: "Projected commission (avg $11,400 GCI, closes in 60–90 days)", before: "$22,800", after: "$57,000", change: "+$34,200" },
  { metric: "Agent time spent dialing and logging new leads", before: "~35 h", after: "~0 h", change: "35 h back" },
];

// Call activity for the sample month. Minutes are computed from these at the
// live ElevenLabs rate, so the cost figures stay current.
export const SAMPLE_ACTIVITY = {
  leads: 312,
  calls: 1148,
  conversations: 196,
  minutesPerConversation: 4.1,
  unanswered: 952,
  minutesPerUnanswered: 0.4,
  qualified: 118,
  appointmentsBooked: 37,
  appointmentsHeld: 26,
  texts: 604,
};

export function sampleMinutes() {
  const a = SAMPLE_ACTIVITY;
  const conversation = a.conversations * a.minutesPerConversation;
  const unanswered = a.unanswered * a.minutesPerUnanswered;
  return { conversation, unanswered, total: conversation + unanswered };
}

// ---- calculator model (shared by the client calculator) ----

export type CallInputs = {
  leads: number;
  attempts: number; // call attempts per lead
  connects: number; // live conversations per lead
  talk: number; // minutes per live conversation
  vm: number; // billed minutes per unanswered attempt
  book: number; // appointments per lead
  react: number; // dormant contacts called per month
  rattempts: number;
  rconnect: number; // share of dormant contacts reached
  rtalk: number;
};

// Defaults derived from the sample month: 1,148 / 312 attempts, 196 / 312 conversations, 37 / 312 booked.
export const BASE_INPUTS: Omit<CallInputs, "leads" | "react"> = {
  attempts: 3.68,
  connects: 0.63,
  talk: 4.1,
  vm: 0.4,
  book: 0.12,
  rattempts: 2,
  rconnect: 0.15,
  rtalk: 3,
};

export const TEAM_SIZES = [
  { key: "small", label: "Small team", leads: 100, react: 0 },
  { key: "mid", label: "Mid team", leads: 312, react: 0 },
  { key: "large", label: "Large team", leads: 750, react: 1000 },
  { key: "brokerage", label: "Brokerage", leads: 2000, react: 3000 },
] as const;

export function modelMinutes(p: CallInputs) {
  const connects = Math.min(p.connects, p.attempts);
  const perLead = connects * p.talk + (p.attempts - connects) * p.vm;
  const rc = Math.min(p.rconnect, 1);
  const perReact = rc * p.rtalk + Math.max(p.rattempts - rc, 0) * p.vm;
  const lead = p.leads * perLead;
  const react = p.react * perReact;
  return {
    lead,
    react,
    total: lead + react,
    perLead,
    calls: p.leads * p.attempts + p.react * p.rattempts,
    appointments: p.leads * Math.min(p.book, 1),
  };
}
