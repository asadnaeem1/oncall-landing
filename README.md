# OnCall by Voir Labs — landing page

Single-page marketing site for OnCall, the AI inside sales agent Voir Labs sells to US real
estate teams. Target domain: `oncall.voirlabs.io`.

Built with Next.js (App Router) and TypeScript. The voice demo is an embedded ElevenLabs
Conversational AI agent via the `@elevenlabs/react` SDK. It connects to a **public** agent
client-side over WebRTC, so no backend or API key is required today — but keeping a real Next app
(not a static export) leaves room to add a signed-URL endpoint later if the agent goes private.

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
- `components/ThemeToggle.tsx` and `components/VoiceDemo.tsx` — the two client components;
  everything else is a server component since the page needs no other interactivity.
- `components/VoiceDemo.tsx` — the in-browser voice agent (ElevenLabs `useConversation` inside a
  scoped `ConversationProvider`); handles mic permission, connect/end, and speaking/listening state.
- `elevenlabs-agent-demo/` — fictional Voir Realty Group knowledge base, Maya Bennett persona,
  separate ElevenLabs First message, system prompt, and workflow for the website voice demo.

## Notes

- No pricing, no competitor names, no unsourced stats — see the design brief §10.
- The Calendly link and the ElevenLabs demo agent ID live in `lib/constants.ts`. The agent ID is
  public (safe to ship client-side); the ElevenLabs API key is **not** used by the site and must
  never be committed — it stays in the gitignored `elevenlabs-agent-demo/.env`.
