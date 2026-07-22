import ThemeToggle from "./ThemeToggle";
import { CALENDLY_URL } from "@/lib/constants";

export default function Nav() {
  return (
    <nav
      className="nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-divider)",
        paddingInline: "clamp(20px,5vw,72px)",
      }}
    >
      <span style={{ display: "flex", alignItems: "baseline", gap: 8, marginRight: "auto" }}>
        <span style={{ fontSize: 20, letterSpacing: "0.01em" }}>OnCall</span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "color-mix(in srgb,var(--color-text) 60%,transparent)",
          }}
        >
          by Voir Labs
        </span>
      </span>
      <a href="#how" className="nav-link">
        How it works
      </a>
      <a href="#what" className="nav-link">
        What it does
      </a>
      <a href="#faq" className="nav-link">
        FAQ
      </a>
      <ThemeToggle />
      <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn btn-primary">
        Book a call
      </a>
    </nav>
  );
}
