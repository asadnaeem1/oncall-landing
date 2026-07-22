import type { CSSProperties, ReactNode } from "react";

export function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <span
      style={{
        display: "block",
        fontFamily: "var(--font-heading)",
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 600,
        color: "var(--kicker)",
        marginBottom: 18,
      }}
    >
      {index} · {label}
    </span>
  );
}

export function Section({
  id,
  children,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "clamp(48px,6vw,84px) 0",
        borderTop: bordered ? "1px solid var(--color-divider)" : undefined,
        scrollMarginTop: id ? 80 : undefined,
      }}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  children,
  maxWidth,
  style,
}: {
  children: ReactNode;
  maxWidth?: string;
  style?: CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.01em",
        lineHeight: 1.06,
        fontSize: "clamp(30px,4.4vw,54px)",
        margin: 0,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
