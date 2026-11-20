import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import VoirMark from "./VoirMark";
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
      <Link
        href="/"
        aria-label="OnCall by Voir Labs — home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          marginRight: "auto",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <VoirMark height={26} gradientId="voir-nav" />
        <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
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
      </Link>
      <Link href="/#how" className="nav-link">
        How it works
      </Link>
      <Link href="/#what" className="nav-link">
        What it does
      </Link>
      <Link href="/operations" className="nav-link">
        See the results
      </Link>
      <Link href="/#faq" className="nav-link">
        FAQ
      </Link>
      <ThemeToggle />
      <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn btn-primary">
        Book a call
      </a>
    </nav>
  );
}
