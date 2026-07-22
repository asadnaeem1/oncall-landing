import {
  CheckCircleIcon,
  ClockIcon,
  FileIcon,
  HouseIcon,
  InfoCircleIcon,
  MicIcon,
  ShieldIcon,
} from "./icons";
import { Kicker, Section, SectionHeading } from "./Section";

const ITEMS = [
  {
    Icon: ShieldIcon,
    strong: "Consent first.",
    rest: " It calls people who submitted their information to you. It does not cold-dial purchased lists.",
  },
  {
    Icon: ClockIcon,
    strong: "Legal calling hours",
    rest: ", enforced automatically per lead time zone.",
  },
  {
    Icon: CheckCircleIcon,
    strong: "Opt-outs honored instantly",
    rest: " and permanently, across calls and texts.",
  },
  {
    Icon: MicIcon,
    strong: "Call recording disclosure",
    rest: " handled according to state requirements.",
  },
  {
    Icon: InfoCircleIcon,
    strong: "AI disclosure",
    rest: " where state law requires it.",
  },
  {
    Icon: HouseIcon,
    strong: "Fair Housing.",
    rest: " Qualification never asks about or screens on protected characteristics.",
  },
  {
    Icon: FileIcon,
    strong: "Complete audit trail.",
    rest: " Every conversation, consent record, and opt-out is logged and exportable.",
  },
];

export default function Compliance() {
  return (
    <Section>
      <Kicker index="08" label="Compliance" />
      <SectionHeading maxWidth="20ch" style={{ marginBottom: 12 }}>
        Built for the rules you&apos;re accountable to.
      </SectionHeading>
      <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 clamp(28px,3.5vw,40px)", maxWidth: "62ch" }}>
        Putting AI on the phone with consumers carries real obligations. This is engineered around
        them, and everything is logged.
      </p>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "18px 40px",
        }}
      >
        {ITEMS.map(({ Icon, strong, rest }) => (
          <li key={strong} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <Icon size={22} color="var(--color-accent)" style={{ flex: "none", marginTop: 2 }} />
            <span style={{ fontSize: 16, lineHeight: 1.5 }}>
              <strong style={{ fontWeight: 700 }}>{strong}</strong>
              {rest}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
