# OnCall by Voir Labs — landing page

Single-page marketing site for OnCall, the AI inside sales agent Voir Labs sells to US real
estate teams. Target domain: `oncall.voirlabs.io`.

Built with Next.js (App Router) and TypeScript rather than a static export, since the voice
demo will move from a plain `tel:` link to an embedded ElevenLabs agent — that needs API routes
this app can grow into without a rewrite.

## Source of truth

- Design: [Claude Design project](https://claude.ai/design/p/72bc4942-f8e1-449e-bb36-d4a532f6bf4e) — `OnCall Landing.dc.html`
- Copy: [`../offer/website-copy.md`](../offer/website-copy.md) (use verbatim)
- Design brief: [`../offer/website-design-brief.md`](../offer/website-design-brief.md)
- Offer definition: [`../offer/ai-isa-offering.md`](../offer/ai-isa-offering.md)

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint     # eslint
```

## Structure

- `app/layout.tsx` — fonts (Barlow / Barlow Condensed via `next/font/google`), metadata, and the
  pre-hydration theme script (avoids a flash of the wrong light/dark theme).
- `app/globals.css` — design tokens (color, font, spacing) and the handful of shared classes
  (`.btn`, `.nav`, `.blueprint`, `.faq`) ported from the design system's stylesheet.
- `app/page.tsx` — composes the one-page layout out of `components/`, one file per section.
- `components/ThemeToggle.tsx` — the only stateful/client piece; everything else is a server
  component since the page needs no other interactivity.

## Notes

- No pricing, no competitor names, no unsourced stats — see the design brief §10.
- The demo phone number and Calendly link live in `lib/constants.ts`.
