"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Wires up the scroll-reveal effect. The `reveal-on` class is added to
// <html> before first paint by the inline script in the root layout — and
// only when the visitor hasn't requested reduced motion. If it isn't there
// (no JS, or reduced motion), we do nothing and the content stays visible.
export default function RevealController() {
  const pathname = usePathname();
  useEffect(() => {
    if (!document.documentElement.classList.contains("reveal-on")) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]"),
    );
    if (targets.length === 0) return;

    const reveal = (el: Element) => el.classList.add("is-visible");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    // Anything already on screen reveals right away — don't wait on the
    // observer's async first callback for above-the-fold content. The rest
    // is observed and revealed as it scrolls into view.
    const viewportH = window.innerHeight;
    for (const el of targets) {
      if (el.getBoundingClientRect().top < viewportH * 0.92) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
    // Re-run on client-side navigation: the layout (and this component) persists
    // across routes, so a new page's sections need to be picked up again.
  }, [pathname]);

  return null;
}
